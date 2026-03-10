# Haveno TypeScript Library

[![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/haveno-dex/haveno-ts/build.yml?branch=master)](https://github.com/haveno-dex/haveno-ts/actions)
[![Twitter Follow](https://img.shields.io/twitter/follow/HavenoDEX?style=social)](https://twitter.com/havenodex)
[![Matrix rooms](https://img.shields.io/badge/Matrix%20room-%23haveno-blue)](https://matrix.to/#/#haveno:monero.social)

TypeScript library for using Haveno.

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

## Sample application

See the [sample application](https://github.com/haveno-dex/haveno-sample-app) to start a Haveno daemon and connect to it from haveno-ts.

## TypeDocs

See [TypeDocs](https://haveno-dex.github.io/haveno-ts/typedocs/classes/HavenoClient.HavenoClient.html).

## Run API Tests

See [instructions](docs/run-api-tests.md).