# Haveno TypeScript Library

TypeScript library for using Haveno.

## Install

1. [Start a Haveno daemon](https://docs.haveno.exchange/development/installing/)
2. Install haveno-ts in your project: `npm install haveno-ts`

See the complete documentation, including API calls: [docs.haveno.exchange/development/haveno-ts](https://docs.haveno.exchange/development/haveno-ts/)

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
