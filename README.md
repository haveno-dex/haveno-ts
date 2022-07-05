# Haveno TypeScript Library

TypeScript library for using Haveno.

## Install

1. Start a Haveno daemon (see [installing.md](https://github.com/haveno-dex/haveno/blob/master/docs/installing.md)).
2. Install haveno-ts in your project: `npm install haveno-ts`

## Sample code

```js
import { HavenoClient } from "haveno-ts";

// create client connected to Haveno daemon
const alice = new HavenoClient("http://localhost:8080", "apitest");

// use Haveno daemon
const balances = await alice.getBalances();
const paymentAccounts = await alice.getPaymentAccounts();
const myOffers = await alice.getMyOffers("ETH");
const offers = await alice.getOffers("ETH", "BUY");
const trade = await alice.takeOffer(offers[0].getId(), paymentAccounts[0].getId());

// disconnect client
await alice.disconnect();
```

## TypeDocs

See [typedocs](https://haveno-dex.github.io/haveno-ts/classes/HavenoClient.HavenoClient-1.html).

## Run tests

Running the [API tests](./src/HavenoClient.test.ts) is the best way to develop and test Haveno end-to-end.

[`HavenoClient.ts`](./src/HavenoClient.ts) provides the client interface to Haveno's backend daemon.

1. [Run a local Haveno test network](https://github.com/haveno-dex/haveno/blob/master/docs/installing.md) and then shut down the arbitrator, Alice, and Bob or run them as daemons, e.g. `make alice-daemon-local`. You may omit the arbitrator registration steps since it's done automatically in the tests.
2. Clone this project to the same parent directory as the haveno project: `git clone https://github.com/haveno-dex/haveno-ts`
3. In a new terminal, start envoy with the config in haveno-ts/config/envoy.test.yaml (change absolute path for your system): `docker run --rm --add-host host.docker.internal:host-gateway -it -v ~/git/haveno-ts/config/envoy.test.yaml:/envoy.test.yaml -p 8079:8079 -p 8080:8080 -p 8081:8081 -p 8082:8082 -p 8083:8083 -p 8084:8084 -p 8085:8085 -p 8086:8086 envoyproxy/envoy-dev:8a2143613d43d17d1eb35a24b4a4a4c432215606 -c /envoy.test.yaml`
4. In a new terminal, start the funding wallet. This wallet will be automatically funded in order to fund Alice and Bob during the tests.<br>For example: `cd ~/git/haveno && make funding-wallet-testnet`.
5. Install protobuf compiler v3.19.1 or later for your system:<br>
    mac: `brew install protobuf`<br>
    linux: `apt install protobuf-compiler`
    NOTE: You may need to upgrade to v3.19.1 manually if your package manager installs an older version.
6. Download `protoc-gen-grpc-web` plugin and make executable as [shown here](https://github.com/grpc/grpc-web#code-generator-plugin).
7. `cd haveno-ts`
8. `npm install`
9. `npm run test -- --baseCurrencyNetwork=XMR_LOCAL` to run all tests or `npm run test -- --baseCurrencyNetwork=XMR_LOCAL -t "my test"` to run tests by name.