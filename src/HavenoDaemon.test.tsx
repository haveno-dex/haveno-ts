// import haveno types
import {HavenoDaemon} from "./HavenoDaemon";
import {XmrBalanceInfo, OfferInfo, TradeInfo} from './protobuf/grpc_pb'; // TODO (woodser): better names; haveno_grpc_pb, haveno_pb
import {PaymentAccount} from './protobuf/pb_pb';

// import monero-javascript
const monerojs = require("monero-javascript"); // TODO (woodser): support typescript and `npm install @types/monero-javascript` in monero-javascript
const MoneroTxConfig = monerojs.MoneroTxConfig;
const TaskLooper = monerojs.TaskLooper;

// import console because jest swallows messages in real time
const console = require('console');

// alice config
const havenoVersion = "1.6.2";
const aliceDaemonUrl = "http://localhost:8080";
const aliceDaemonPassword = "apitest";
const alice: HavenoDaemon = new HavenoDaemon(aliceDaemonUrl, aliceDaemonPassword);
const aliceWalletUrl = "http://127.0.0.1:57983"; // alice's internal haveno wallet for direct testing // TODO (woodser): make configurable rather than randomly generated
const aliceWalletUsername = "rpc_user";
const aliceWalletPassword = "abc123";
const aliceWalletSyncPeriod = 5000;
let aliceWallet: any;

// bob config
const bobDaemonUrl = "http://localhost:8081";
const bobDaemonPassword = "apitest";
const bob: HavenoDaemon = new HavenoDaemon(bobDaemonUrl, bobDaemonPassword);

// monero daemon config
const moneroDaemonUrl = "http://localhost:38081"
const moneroDaemonUsername = "superuser";
const moneroDaemonPassword = "abctesting123";
const miningAddress = "59M2dSSmrKiimFavjWQ8zFGWe6ziHr9XUjhHcMVEj9ut4EdkcmcqawfgMrtEERipUJA8iNzU65eaELoFYcor1c4jK4FRj1N"; 
let monerod: any;

// source funding wallet
const fundingWalletUrl = "http://localhost:38084";
const fundingWalletUsername = "rpc_user";
const fundingWalletPassword = "abc123";
let fundingWallet: any;

// other test config
const MAX_TIME_PEER_NOTICE = 3000;

beforeAll(async () => {
  
  // initialize clients of wallet and daemon rpc
  aliceWallet = await monerojs.connectToWalletRpc(aliceWalletUrl, aliceWalletUsername, aliceWalletPassword);
  fundingWallet = await monerojs.connectToWalletRpc(fundingWalletUrl, fundingWalletUsername, fundingWalletPassword);
  monerod = await monerojs.connectToDaemonRpc(moneroDaemonUrl, moneroDaemonUsername, moneroDaemonPassword);
  
  // debug tools
  //for (let offer of await alice.getMyOffers("BUY")) await alice.removeOffer(offer.getId());
  //for (let offer of await alice.getMyOffers("SELL")) await alice.removeOffer(offer.getId());
  //for (let frozenOutput of await aliceWallet.getOutputs({isFrozen: true})) await aliceWallet.thawOutput(frozenOutput.getKeyImage().getHex());
  //console.log((await alice.getBalances()).getUnlockedBalance() + ", " + (await alice.getBalances()).getLockedBalance());
  //console.log((await bob.getBalances()).getUnlockedBalance() + ", " + (await bob.getBalances()).getLockedBalance());
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
  await wait(MAX_TIME_PEER_NOTICE);
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

jest.setTimeout(120000);
test("Can complete a trade", async () => {
    
  console.log("Alice balances: " + getBalancesStr(await alice.getBalances()));
    
  // wait for alice and bob to have unlocked balance for trade
  let tradeAmount: bigint = BigInt("250000000000");
  await waitForUnlockedBalance(tradeAmount, alice, bob);
  
  // alice posts offer to buy xmr
  console.log("Alice posting offer");
  let offer: OfferInfo = await postOffer();
  console.log("Alice done posting offer");
  
  // bob sees offer
  await wait(MAX_TIME_PEER_NOTICE);
  
  // get bob's ethereum payment account
  let ethPaymentAccount: PaymentAccount | undefined;
  for (let paymentAccount of await bob.getPaymentAccounts()) {
    if (paymentAccount.getSelectedTradeCurrency()?.getCode() === "ETH") {
      ethPaymentAccount = paymentAccount;
      break;
    }
  }
  if (!ethPaymentAccount) throw new Error("Bob must have ethereum payment account to take offer");
  
  // bob takes offer
  let startTime = Date.now();
  let bobBalancesBefore: XmrBalanceInfo = await bob.getBalances();
  console.log("Bob taking offer");
  let trade: TradeInfo = await bob.takeOffer(offer.getId(), ethPaymentAccount.getId()); // TODO (woodser): this returns before trade is fully initialized
  console.log("Bob done taking offer in " + (Date.now() - startTime) + " ms");
  
  // bob can get trade
  let fetchedTrade: TradeInfo = await bob.getTrade(trade.getTradeId());
  // TODO: test fetched trade
  
  // test bob's balances after taking trade
  let bobBalancesAfter: XmrBalanceInfo = await bob.getBalances();
  expect(BigInt(bobBalancesAfter.getUnlockedBalance())).toBeLessThan(BigInt(bobBalancesBefore.getUnlockedBalance()));
  expect(BigInt(bobBalancesAfter.getReservedOfferBalance()) + BigInt(bobBalancesAfter.getReservedTradeBalance())).toBeGreaterThan(BigInt(bobBalancesBefore.getReservedOfferBalance()) + BigInt(bobBalancesBefore.getReservedTradeBalance()));
  
  // bob is notified of balance change
  
  // alice notified of balance changes and that offer is taken
  await wait(MAX_TIME_PEER_NOTICE);
  
  // alice can get trade
  fetchedTrade = await alice.getTrade(trade.getTradeId());
  
  // mine until deposit txs unlock
  console.log("Mining to unlock deposit txs");
  await waitForUnlockedTxs(fetchedTrade.getMakerDepositTxId(), fetchedTrade.getTakerDepositTxId());
  console.log("Done mining to unlock deposit txs");
    
  // alice notified to send payment
  await wait(5000);
  
  // alice indicates payment is sent
  await alice.confirmPaymentStarted(trade.getTradeId());
  
  // bob notified payment is sent
  await wait(MAX_TIME_PEER_NOTICE);
  
  // bob confirms payment is received
  await bob.confirmPaymentReceived(trade.getTradeId());
  
  // bob notified trade is complete
  fetchedTrade = await bob.getTrade(trade.getTradeId());
  console.log(fetchedTrade.getState()); // TODO (woodser): this should be complete state
  
  // test bob's balances after confirming payment
  
  // alice notified trade is complete and of balance changes
});

// ------------------------------- HELPERS ------------------------------------

async function postOffer() { // TODO (woodser): postOffer(maker, peer) 
    
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
  let amount: bigint = BigInt("200000000000");
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

function getBalancesStr(balances: XmrBalanceInfo) {
  return "[unlocked balance=" + balances.getUnlockedBalance() + ", locked balance=" + balances.getLockedBalance() + ", reserved offer balance=" + balances.getReservedOfferBalance() + ", reserved trade balance: " + balances.getReservedTradeBalance() + "]";
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

async function startMining() {
  try {
    await monerod.startMining(miningAddress, 1);
  } catch (err) {
    if (err.message !== "Already mining") throw err;
  }
}

async function waitForUnlockedBalance(amount: bigint, ...clients: HavenoDaemon[]) {
  
  // fund haveno clients with insufficient balance
  let miningNeeded = false;
  let fundConfig = new MoneroTxConfig().setAccountIndex(0).setRelay(true);
  for (let client of clients) {
    let balances = await client.getBalances();
    if (BigInt(balances.getUnlockedBalance()) < amount) miningNeeded = true;
    let depositNeeded: BigInt = amount - BigInt(balances.getUnlockedBalance()) - BigInt(balances.getLockedBalance());
    if (depositNeeded > BigInt("0")) fundConfig.addDestination(await client.getNewDepositSubaddress(), depositNeeded);
  }
  if (fundConfig.getDestinations()) {
    try { await fundingWallet.createTx(fundConfig); }
    catch (err) { throw new Error("Error funding haveno daemons: " + err.message); }
  }
  
  // done if all clients have sufficient unlocked balance
  if (!miningNeeded) return;
  
  // wait for funds to unlock
  console.log("Mining for unlocked trader balances")
  await startMining();
  let promises: Promise<void>[] = []
  for (let client of clients) {
    promises.push(new Promise(async function(resolve, reject) {
      let taskLooper: any = new TaskLooper(async function() {
        let balances: XmrBalanceInfo = await client.getBalances();
        if (BigInt(balances.getUnlockedBalance()) >= amount) {
          taskLooper.stop();
          resolve();
        }
      });
      taskLooper.start(5000);
    }));
  }
  await Promise.all(promises);
  await monerod.stopMining();
  console.log("Funds unlocked, done mining");
};

async function waitForUnlockedTxs(...txHashes: string[]) {
  await startMining();
  let promises: Promise<void>[] = []
  for (let txHash of txHashes) {
    promises.push(new Promise(async function(resolve, reject) {
      let taskLooper: any = new TaskLooper(async function() {
        let tx = await monerod.getTx(txHash);
        if (tx.isConfirmed() && tx.getBlock().getHeight() <= await monerod.getHeight() - 10) {
          taskLooper.stop();
          resolve();
        }
      });
      taskLooper.start(5000);
    }));
  }
  await Promise.all(promises);
  await monerod.stopMining();
}