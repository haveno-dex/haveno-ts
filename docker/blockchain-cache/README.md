# Pre-mined blockchain cache

Every test run needs the local Monero testnet mined before trading can start:
`beforeAll` in `HavenoClient.test.ts` calls `mineToHeight(160)` "to initialize
blockchain to latest block type", and the first `waitForAvailableBalance()` then
mines ~60 more blocks to unlock the funding wallet's coinbase. Mining those
blocks from height 0 with `--fixed-difficulty=150` is pure proof-of-work and
takes minutes of wall-clock time on every CI run.

That work is the same every time, so we cache it: mine the chain once, snapshot
monerod's LMDB, commit it, and restore it into the `node1`/`node2` containers on
startup. monerod then boots already at the cached height (**~230**), so
`mineToHeight(160)` is a no-op and — because 230 is past height 150 + the
60-block coinbase unlock window — the funding wallet already has **spendable**
balance, so the first `waitForAvailableBalance()` skips its unlock-mine too.

## Why this is safe / correct

- **Ownership is deterministic.** Blocks are mined to the funding wallet's
  primary address, which is fixed because the funding wallet uses a fixed seed
  (`TestConfig.fundingWallet` in `HavenoClient.test.ts`). The funding wallet is
  recreated from that seed each run (restoreHeight 150), rescans from block 150,
  and finds the same coinbase outputs — even though the cached blocks are not
  byte-identical to a fresh mine. At height 230 the coinbase from blocks
  150–170 is already unlocked (~20 outputs), so the wallet is funded at boot.
- **No public-testnet interference.** `node1`/`node2` run with
  `--add-exclusive-node` pointing only at each other, so the low-difficulty
  cached chain is never reorged away by the real testnet. Both nodes restore the
  same snapshot, so they share an identical top block and are in sync
  immediately.
- **Graceful fallback.** `restore-cache.sh` is a no-op if the cache file is
  missing or the data-dir already has a chain — monerod then starts with an
  empty chain exactly as before. So the compose change is safe even without a
  committed cache.

## Files

- `xmr_local_testnet.mdb.gz` — gzipped monerod LMDB (`data.mdb`) for a
  testnet chain mined to height 230. **Committed artifact.**
- `restore-cache.sh` — entrypoint wrapper for the `node1`/`node2` services.
  Parses `--data-dir`, restores the snapshot into
  `<data-dir>/testnet/lmdb/data.mdb` if absent, then `exec`s monerod.
- `generate-cache.sh` — regenerates `xmr_local_testnet.mdb.gz`.

`docker-compose.yml` mounts this directory into `node1`/`node2` at
`/blockchain-cache` and sets their entrypoint to `restore-cache.sh`.

## Regenerating the cache

Re-run when any of these change:

- the Monero binaries are upgraded (the LMDB format is tied to the monerod
  build — regenerate with the new `monerod`),
- `TARGET_HEIGHT`, `FIXED_DIFFICULTY`, or the funding address change.

```bash
cd docker/blockchain-cache
./generate-cache.sh                 # uses ../../../haveno/.localnet/monerod
# or point at a specific monerod / height:
MONEROD=/path/to/monerod TARGET_HEIGHT=230 ./generate-cache.sh
git add xmr_local_testnet.mdb.gz
```

The script boots a throwaway **offline** monerod, mines to `TARGET_HEIGHT`,
shuts it down cleanly (flushing LMDB), and gzips the snapshot.

### Portability

The LMDB is portable across OSes and CPU architectures that share word size and
endianness. All relevant targets here — x86_64 and arm64, Linux and macOS — are
64-bit little-endian, so a snapshot generated on any of them loads in CI's
`linux-x86_64` monerod. It must, however, be generated with the **same monerod
version** the containers run (currently Monero v0.18.5.0, from the
`haveno-dex/monero` release the build downloads).

### Choosing the cached height

`TARGET_HEIGHT` is 230 so the funding wallet has spendable balance at boot:

- must be past the last testnet hardfork so trades produce the current tx type
  (the original `mineToHeight(160)` target),
- coinbase unlocks 60 blocks after it is mined, and the funding wallet's
  `restoreHeight` is 150, so 150 + 60 = 210 is the floor for *any* spendable
  coinbase; 230 leaves ~20 unlocked outputs (~700 XMR) of headroom for the first
  funding round.

Raising it further only trades a little one-time generation time and a few KB of
cache for more pre-unlocked balance; lowering it below 210 reverts to a funding
wallet that must mine to unlock before it can fund anything.
