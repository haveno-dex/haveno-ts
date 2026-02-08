# Run API Tests

Running the [API tests](./src/HavenoClient.test.ts) is the best way to develop and test Haveno end-to-end. [`HavenoClient.ts`](./src/HavenoClient.ts) provides the client interface to Haveno's daemon.

You first need to start a local Haveno network which can be done manually or using docker.

### Start local Haveno network manually

This workflow is useful for local development of `haveno` and `haveno-ts`

1. [Run a local Haveno test network](https://github.com/haveno-dex/haveno/blob/master/docs/installing.md) and then shut down the arbitrator, user1, and user2 or run them as daemons, e.g. `make user1-daemon-local`. You may omit the arbitrator registration steps since it's done automatically in the tests.
2. Clone this project to the same parent directory as the haveno project: `git clone https://github.com/haveno-dex/haveno-ts`
3. Install `envoy` proxy, for example `brew install envoy`.
4. In a new terminal, start envoy with the config in haveno-ts/config/envoy.local.yaml: `envoy -c config/envoy.local.yaml`
5. In a new terminal, start the funding wallet. This wallet will be funded automatically in order to fund the tests.<br>For example: `cd ~/git/haveno && make funding-wallet-local`.

### Start local Haveno network with docker

Alternatively use this wokflow to develop `haveno-ts` or run tests with dockerized setup:

Start a local Haveno network with docker:

1. `cd ~/git/haveno-ts/docker`
2. `sudo docker-compose up`. This will start docker and initialize the network.

> **Docker Tips**
> * Stop: `sudo docker-compose stop`
> * Rebuild: `sudo docker-compose build`
> * Stop and delete contains: `sudo docker-compose stop`

### Run client tests

5. Install protobuf compiler [v29.3](https://github.com/protocolbuffers/protobuf/releases/tag/v29.3) for your system.
6. Download `protoc-gen-js` and `protoc-gen-grpc-web` plugins and make executable as [shown here](https://github.com/grpc/grpc-web#code-generator-plugins).
7. `cd haveno-ts`
8. `npm install`
9. `npm run test -- --baseCurrencyNetwork=XMR_LOCAL` to run all tests or `npm run test -- --baseCurrencyNetwork=XMR_LOCAL -t "Can get the version"` to run tests by name.

### Notes for Windows
- Download and install [Git Bash for Windows](https://git-scm.com/install/windows).
- Install and run envoy in WSL2 which provides a Linux environment. Alternatively, download [envoy v1.28.0](https://archive.tetratelabs.io/envoy/download/v1.28.0/envoy-v1.28.0-windows-amd64.tar.xz) from historical archive and add to PATH.
- Download and install [Node.js](https://nodejs.org/en/download). Ensure that PATH uses your Node.js install location first (e.g. "C:\Program Files\nodejs" is before "C:\msys64\mingw64\bin").
- From Git Bash, `npm install --global protoc-gen-js` (use this instead of normal installation).
- Run envoy in Git Bash: `envoy -c config/envoy.local.yaml`.
- Run monerod1-local, monerod2-local, funding-wallet-local, and seednode-local in MINGW64 (recommended).
- Run tests from Git Bash, e.g.: `npm run test -- --baseCurrencyNetwork=XMR_LOCAL -t "version"`