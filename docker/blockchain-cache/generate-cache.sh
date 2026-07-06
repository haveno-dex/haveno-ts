#!/usr/bin/env bash
#
# Generate the pre-mined blockchain cache used to skip mining the local testnet
# from height 0 on every test run.
#
# It boots a throwaway, OFFLINE monerod on a private testnet, mines to
# TARGET_HEIGHT (coinbase -> the funding wallet's fixed address), then snapshots
# the LMDB and writes a gzipped copy to this directory. The containers restore
# that snapshot on startup (see restore-cache.sh + docker-compose.yml), so they
# boot already at TARGET_HEIGHT instead of mining the local testnet each run.
#
# TARGET_HEIGHT defaults to 230: high enough that coinbase mined from the funding
# wallet's restoreHeight (150) up to height ~170 is already past the 60-block
# coinbase unlock window, so the funding wallet has spendable balance at boot and
# the first waitForAvailableBalance() doesn't have to mine to unlock it either.
#
# Run this once, then commit the produced .mdb.gz. Re-run when the monero
# binaries are upgraded (LMDB is tied to the monerod build) or when
# TARGET_HEIGHT / the funding address change.
#
# Usage:
#   ./generate-cache.sh
#   MONEROD=/path/to/monerod TARGET_HEIGHT=230 ./generate-cache.sh
#
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Path to the monerod binary. Defaults to the one the haveno build downloads.
MONEROD="${MONEROD:-$SCRIPT_DIR/../../../haveno/.localnet/monerod}"

# Chain to build. TARGET_HEIGHT must reach the latest block type and be >= the
# funding wallet's restoreHeight (150) + the 60-block coinbase unlock window for
# the wallet to have spendable balance at boot. FIXED_DIFFICULTY / FUNDING_ADDRESS
# must match the test configuration (docker-compose.yml and HavenoClient.test.ts).
TARGET_HEIGHT="${TARGET_HEIGHT:-230}"
FIXED_DIFFICULTY="${FIXED_DIFFICULTY:-150}"
FUNDING_ADDRESS="${FUNDING_ADDRESS:-9xSyMy1r9h3BVjMrF3CTqQCQy36yCfkpn7uVfMyTUbez3hhumqBUqGUNNALjcd7f1HJBRdeH82bCC3veFHW7z3xm28gug4d}"
MINE_THREADS="${MINE_THREADS:-4}"

OUT="${OUT:-$SCRIPT_DIR/xmr_local_testnet.mdb.gz}"

# Private ports for the throwaway daemon (avoid clashing with a running localnet).
RPC_PORT="${RPC_PORT:-49181}"
P2P_PORT="${P2P_PORT:-49180}"

WORK="$(mktemp -d)"
DATA_DIR="$WORK/data"
mkdir -p "$DATA_DIR"

MPID=""
cleanup() {
  [ -n "$MPID" ] && kill "$MPID" 2>/dev/null || true
  rm -rf "$WORK"
}
trap cleanup EXIT

get() { local path="$1"; shift; curl -s "http://127.0.0.1:$RPC_PORT/$path" "$@"; }
height() { get get_info | sed -n 's/.*"height": *\([0-9]*\).*/\1/p'; }

echo "[cache] monerod:        $MONEROD"
echo "[cache] target height:  $TARGET_HEIGHT (difficulty $FIXED_DIFFICULTY)"
echo "[cache] mining address: $FUNDING_ADDRESS"
echo "[cache] output:         $OUT"
[ -x "$MONEROD" ] || { echo "[cache] ERROR: monerod not found/executable at $MONEROD" >&2; exit 1; }

# --offline keeps this node off the public testnet so its low-difficulty chain
# is never reorged away; the chain is built purely by local mining.
echo "[cache] starting offline monerod..."
"$MONEROD" --testnet --offline --no-igd --hide-my-port --data-dir "$DATA_DIR" \
  --p2p-bind-ip 127.0.0.1 --p2p-bind-port "$P2P_PORT" --rpc-bind-port "$RPC_PORT" \
  --no-zmq --fixed-difficulty "$FIXED_DIFFICULTY" --disable-rpc-ban --non-interactive \
  --log-level 0 > "$WORK/monerod.log" 2>&1 &
MPID=$!

echo "[cache] waiting for RPC..."
for _ in $(seq 1 60); do get get_info >/dev/null 2>&1 && break; sleep 1; done
get get_info >/dev/null 2>&1 || { echo "[cache] ERROR: monerod RPC never came up; see $WORK/monerod.log" >&2; exit 1; }

# start_mining / stop_mining / stop_daemon are direct RPC endpoints, NOT json_rpc methods.
echo "[cache] mining to funding address ($MINE_THREADS threads)..."
mine_resp="$(get start_mining -d "{\"miner_address\":\"$FUNDING_ADDRESS\",\"threads_count\":$MINE_THREADS,\"do_background_mining\":false,\"ignore_battery\":true}")"
case "$mine_resp" in
  *'"status": "OK"'*) ;;
  *) echo "[cache] ERROR: start_mining failed: $mine_resp" >&2; exit 1 ;;
esac

start=$SECONDS
while true; do
  h="$(height)"
  [ -n "$h" ] || { echo "[cache] ERROR: lost RPC connection to monerod; see $WORK/monerod.log" >&2; exit 1; }
  [ "$h" -ge "$TARGET_HEIGHT" ] && break
  printf '\r[cache] height=%s / %s  (%ss)   ' "$h" "$TARGET_HEIGHT" "$((SECONDS - start))"
  sleep 2
done
echo ""
echo "[cache] reached height $h in $((SECONDS - start))s"

get stop_mining >/dev/null || true

# Clean shutdown so LMDB is flushed and consistent before we snapshot it.
echo "[cache] stopping daemon (flushing LMDB)..."
get stop_daemon >/dev/null || true
for _ in $(seq 1 30); do kill -0 "$MPID" 2>/dev/null || break; sleep 1; done
kill -0 "$MPID" 2>/dev/null && { kill "$MPID"; wait "$MPID" 2>/dev/null || true; }
MPID=""

MDB="$DATA_DIR/testnet/lmdb/data.mdb"
[ -f "$MDB" ] || { echo "[cache] ERROR: expected LMDB not found at $MDB" >&2; exit 1; }

gzip -c "$MDB" > "$OUT"
echo "[cache] done."
echo "[cache]   data.mdb : $(wc -c < "$MDB") bytes"
echo "[cache]   $OUT : $(wc -c < "$OUT") bytes"
echo "[cache] Commit $(basename "$OUT") to ship the cache."
