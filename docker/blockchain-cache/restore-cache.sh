#!/usr/bin/env bash
#
# monerod entrypoint wrapper for the node1/node2 test containers.
#
# If a pre-mined blockchain cache is present and the node's data-dir has no
# blockchain yet, restore the cache so monerod boots already at the cached
# height instead of mining the local testnet from height 0. Then exec monerod
# with the original arguments.
#
# This is a no-op fallback: if the cache file is missing, monerod just starts
# with an empty chain exactly as before, so CI keeps working with or without a
# committed cache.
#
set -euo pipefail

CACHE="${BLOCKCHAIN_CACHE:-/blockchain-cache/xmr_local_testnet.mdb.gz}"
MONEROD="${MONEROD:-./.localnet/monerod}"

# Parse --data-dir (supports "--data-dir X" and "--data-dir=X") from the args
# that will be passed through to monerod.
data_dir=""
prev=""
for arg in "$@"; do
  case "$arg" in
    --data-dir=*) data_dir="${arg#--data-dir=}" ;;
    *) if [ "$prev" = "--data-dir" ]; then data_dir="$arg"; fi ;;
  esac
  prev="$arg"
done

if [ -z "$data_dir" ]; then
  echo "[restore] no --data-dir in args; starting monerod without cache restore"
elif [ ! -f "$CACHE" ]; then
  echo "[restore] no cache at $CACHE; starting monerod with empty chain"
else
  # monerod stores testnet LMDB under <data-dir>/testnet/lmdb/data.mdb
  lmdb_dir="$data_dir/testnet/lmdb"
  target="$lmdb_dir/data.mdb"
  if [ -f "$target" ]; then
    echo "[restore] chain already present at $target; leaving as-is"
  else
    echo "[restore] restoring pre-mined blockchain cache -> $target"
    mkdir -p "$lmdb_dir"
    gunzip -c "$CACHE" > "$target"
    echo "[restore] restored $(wc -c < "$target") bytes"
  fi
fi

exec "$MONEROD" "$@"
