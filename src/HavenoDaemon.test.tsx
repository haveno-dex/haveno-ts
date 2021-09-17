// import haveno types
import {HavenoDaemon} from "./HavenoDaemon";
import {XmrBalanceInfo, OfferInfo} from './protobuf/grpc_pb'; // TODO (woodser): better names; haveno_grpc_pb, haveno_pb
import {PaymentAccount} from './protobuf/pb_pb';

// import monero-javascript
const monerojs = require("monero-javascript"); // TODO (woodser): support typescript and `npm install @types/monero-javascript` in monero-javascript
const MoneroDaemonRpc = monerojs.MoneroDaemonRpc;
const MoneroWalletRpc = monerojs.MoneroWalletRpc;

// alice config
const havenoVersion = "1.6.2";
const aliceDaemonUrl = "http://localhost:8080";
const aliceDaemonPassword = "apitest";
const alice: HavenoDaemon = new HavenoDaemon(aliceDaemonUrl, aliceDaemonPassword);
const aliceWalletUrl = "http://127.0.0.1:51743"; // alice's internal haveno wallet for direct testing // TODO (woodser): make configurable rather than randomly generated
const aliceWalletUsername = "rpc_user";
const aliceWalletPassword = "abc123";
const aliceWallet = new MoneroWalletRpc(aliceWalletUrl, aliceWalletUsername, aliceWalletPassword);
const aliceWalletSyncPeriod = 5000;

// bob config
const bobDaemonUrl = "http://localhost:8081";
const bobDaemonPassword = "apitest";
const bob: HavenoDaemon = new HavenoDaemon(bobDaemonUrl, bobDaemonPassword);

// monero daemon config
const moneroDaemonUrl = "http://localhost:38081"
const moneroDaemonUsername = "superuser";
const moneroDaemonPassword = "abctesting123"; 
let monerod: any;

beforeAll(async () => {
  await monerojs.LibraryUtils.setWorkerDistPath("./node_modules/monero-javascript/src/main/js/common/MoneroWebWorker.js"); // TODO (woodser): remove this when update to monero-javascript-v0.5.6 which correctly detects node environment
  monerod = await monerojs.connectToDaemonRpc(moneroDaemonUrl, moneroDaemonUsername, moneroDaemonPassword);
  //for (let offer of await alice.getMyOffers("BUY")) await alice.removeOffer(offer.getId());
  //for (let offer of await alice.getMyOffers("SELL")) await alice.removeOffer(offer.getId());
  //for (let frozenOutput of await aliceWallet.getOutputs({isFrozen: true})) await aliceWallet.thawOutput(frozenOutput.getKeyImage().getHex());
});

test("Can get the version", async () => {
  let version = await alice.getVersion();
  expect(version).toEqual(havenoVersion);
});

test("Can get balances", async () => {
  let balances: XmrBalanceInfo = await alice.getBalances();
  expect(balances.getUnlockedBalance());
  expect(balances.getLockedBalance());
  expect(balances.getReservedOfferBalance());
  expect(balances.getReservedTradeBalance());
});

test("Can get offers", async () => {
  let offers: OfferInfo[] = await alice.getOffers("BUY");
  for (let offer of offers) {
    testOffer(offer);
  }
});

test("Can get my offers", async () => {
  let offers: OfferInfo[] = await alice.getMyOffers("SELL");
  for (let offer of offers) {
    testOffer(offer);
  }
});

test("Can get payment accounts", async () => {
  let paymentAccounts: PaymentAccount[] = await alice.getPaymentAccounts();
  for (let paymentAccount of paymentAccounts) {
    testPaymentAccount(paymentAccount);
  }
});

test("Can create a crypto payment account", async () => {
  let ethPaymentAccount: PaymentAccount = await alice.createCryptoPaymentAccount(
        "my eth account",
        "eth",
        "0xdBdAb835Acd6fC84cF5F9aDD3c0B5a1E25fbd99f",
        true);
   testPaymentAccount(ethPaymentAccount);
});

test("Can post and remove an offer", async () => {
  
  // get unlocked balance before reserving funds for offer
  let unlockedBalanceBefore: bigint = BigInt((await alice.getBalances()).getUnlockedBalance());

  // post offer
  let offer: OfferInfo = await postOffer();
  
  // cancel offer
  await alice.removeOffer(offer.getId());
  
  // offer is removed from my offers
  if (getOffer(await alice.getMyOffers("buy"), offer.getId())) throw new Error("Offer " + offer.getId() + " was found in my offers after removal");
  
  // reserved balance released
  expect(unlockedBalanceBefore).toEqual(BigInt((await alice.getBalances()).getUnlockedBalance()));
});

jest.setTimeout(15000);
test("Invalidates offers when reserved funds are spent", async () => {
    
  // get frozen key images before posting offer
  let frozenKeyImagesBefore = [];
  for (let frozenOutput of await aliceWallet.getOutputs({isFrozen: true})) frozenKeyImagesBefore.push(frozenOutput.getKeyImage().getHex());
  
  // post offer
  await wait(1000);
  let offer: OfferInfo = await postOffer();
  
  // get key images reserved by offer
  let reservedKeyImages = [];
  let frozenKeyImagesAfter = [];
  for (let frozenOutput of await aliceWallet.getOutputs({isFrozen: true})) frozenKeyImagesAfter.push(frozenOutput.getKeyImage().getHex());
  for (let frozenKeyImageAfter of frozenKeyImagesAfter) {
    if (!frozenKeyImagesBefore.includes(frozenKeyImageAfter)) reservedKeyImages.push(frozenKeyImageAfter);
  }
  
  // offer is available to peers
  await wait(3000);
  if (!getOffer(await bob.getOffers("buy"), offer.getId())) throw new Error("Offer " + offer.getId() + " was not found in peer's offers after posting");
  
  // spend one of offer's reserved outputs
  if (!reservedKeyImages.length) throw new Error("No reserved key images detected");
  await aliceWallet.thawOutput(reservedKeyImages[0]);
  let tx = await aliceWallet.sweepOutput({keyImage: reservedKeyImages[0], address: await aliceWallet.getPrimaryAddress(), relay: false});
  await monerod.submitTxHex(tx.getFullHex(), true);
  
  // wait for spend to be seen
  await wait(aliceWalletSyncPeriod * 2); // TODO (woodser): need place for common test utilities
  
  // offer is removed from peer offers
  if (getOffer(await bob.getOffers("buy"), offer.getId())) throw new Error("Offer " + offer.getId() + " was found in peer's offers after reserved funds spent");
  
  // offer is removed from my offers
  if (getOffer(await alice.getMyOffers("buy"), offer.getId())) throw new Error("Offer " + offer.getId() + " was found in my offers after reserved funds spent");
  
  // offer is automatically cancelled
  try {
    await alice.removeOffer(offer.getId());
    throw new Error("cannot remove invalidated offer");
  } catch (err) {
    if (err.message === "cannot remove invalidated offer") throw new Error(err.message);
  }
  
  // flush tx from pool
  await monerod.flushTxPool(tx.getHash());
});

test("Can complete a trade", async () => {
  
  // wait for alice and bob to have unlocked balance for trade
  let tradeAmount: bigint = BigInt("250000000000");
  await waitForUnlockedBalance(tradeAmount, alice, bob);
  
  // TODO: finish this test
});

// ------------------------------- HELPERS ------------------------------------

async function postOffer() {
    
  // test requires ethereum payment account
  let ethPaymentAccount: PaymentAccount | undefined;
  for (let paymentAccount of await alice.getPaymentAccounts()) {
    if (paymentAccount.getSelectedTradeCurrency()?.getCode() === "ETH") {
      ethPaymentAccount = paymentAccount;
      break;
    }
  }
  if (!ethPaymentAccount) throw new Error("Test requires ethereum payment account to post offer");
  
  // get unlocked balance before reserving offer
  let unlockedBalanceBefore: bigint = BigInt((await alice.getBalances()).getUnlockedBalance());
  
  // post offer
  // TODO: don't define variables, just document in comments
  let amount: bigint = BigInt("250000000000");
  let minAmount: bigint = BigInt("150000000000");
  let price: number = 12.378981; // TODO: price is optional? price string gets converted to long?
  let useMarketBasedPrice: boolean = true;
  let marketPriceMargin: number = 0.02; // within 2%
  let buyerSecurityDeposit: number = 0.15; // 15%
  let triggerPrice: number = 12; // TODO: fails if there is decimal, gets converted to long?
  let paymentAccountId: string = ethPaymentAccount.getId();
  let offer: OfferInfo = await alice.postOffer("eth",
        "buy", // buy xmr for eth
        price,
        useMarketBasedPrice,
        marketPriceMargin,
        amount,
        minAmount,
        buyerSecurityDeposit,
        paymentAccountId,
        triggerPrice);
  testOffer(offer);

  // unlocked balance has decreased
  let unlockedBalanceAfter: bigint = BigInt((await alice.getBalances()).getUnlockedBalance());
  expect(unlockedBalanceAfter).toBeLessThan(unlockedBalanceBefore);
  
  // offer is included in my offers only
  if (!getOffer(await alice.getMyOffers("buy"), offer.getId())) throw new Error("Offer " + offer.getId() + " was not found in my offers");
  if (getOffer(await alice.getOffers("buy"), offer.getId())) throw new Error("My offer " + offer.getId() + " should not appear in available offers");
  
  return offer;
}

async function waitForUnlockedBalance(amount: bigint, ...clients: HavenoDaemon[]) {
  throw new Error("waitForUnlockedFunds() not implemented"); // TODO: implement
}

function getOffer(offers: OfferInfo[], id: string): OfferInfo | undefined {
  return offers.find(offer => offer.getId() === id);
}

function testPaymentAccount(paymentAccount: PaymentAccount) {
  expect(paymentAccount.getId()).toHaveLength;
  // TODO: test rest of payment account
}

function testOffer(offer: OfferInfo) {
  expect(offer.getId()).toHaveLength;
  // TODO: test rest of offer
}

async function wait(durationMs: number) {
  return new Promise(function(resolve) { setTimeout(resolve, durationMs); });
}