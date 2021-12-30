// --------------------------------- IMPORTS ----------------------------------
    
// import haveno types
import {HavenoDaemon} from "./HavenoDaemon";
import {HavenoUtils} from "./HavenoUtils";
import * as grpcWeb from 'grpc-web';
import {XmrBalanceInfo, OfferInfo, TradeInfo, MarketPriceInfo} from './protobuf/grpc_pb'; // TODO (woodser): better names; haveno_grpc_pb, haveno_pb
import {PaymentAccount} from './protobuf/pb_pb';
import {XmrDestination, XmrTx, XmrIncomingTransfer, XmrOutgoingTransfer} from './protobuf/grpc_pb';

// import monero-javascript
const monerojs = require("monero-javascript"); // TODO (woodser): support typescript and `npm install @types/monero-javascript` in monero-javascript
const GenUtils = monerojs.GenUtils;
const MoneroNetworkType = monerojs.MoneroNetworkType;
const MoneroTxConfig = monerojs.MoneroTxConfig;
const MoneroUtils = monerojs.MoneroUtils;
const TaskLooper = monerojs.TaskLooper;

// other required imports
const console = require('console'); // import console because jest swallows messages in real time
const assert = require("assert");
const net = require('net');

// ------------------------------ TEST CONFIG ---------------------------------

// test config
const TestConfig = {
    logging: {
        level: 0, // set log level (gets more verbose increasing from 0)
        logProcessOutput: false // enable or disable logging process output
    },
    haveno: {
        path: "../haveno",
        version: "1.6.2"
    },
    monerod: {
        url: "http://localhost:38081",
        username: "superuser",
        password: "abctesting123"
    },
    fundingWallet: {
        url: "http://localhost:38084",
        username: "rpc_user",
        password: "abc123",
        defaultPath: "test_funding_wallet",
        minimumFunding: BigInt("5000000000000")
    },
    arbitrator: {
        logProcessOutput: false,
        appName: "haveno-XMR_STAGENET_arbitrator",
        url: "http://localhost:8079",
        password: "apitest",
        walletUsername: "rpc_user",
        walletPassword: "abc123"
    },
    alice: {
        logProcessOutput: false,
        appName: "haveno-XMR_STAGENET_alice",
        url: "http://localhost:8080",
        password: "apitest",
        walletUrl: "http://127.0.0.1:38091",
        walletUsername: "rpc_user",
        walletPassword: "abc123"
    },
    bob: {
        logProcessOutput: false,
        appName: "haveno-XMR_STAGENET_bob",
        url: "http://localhost:8081",
        password: "apitest",
    }, 
    maxFee: BigInt("75000000000"),
    walletSyncPeriodMs: 5000,
    maxTimePeerNoticeMs: 3000,
    cryptoAccounts: [{ // TODO (woodser): test other cryptos, fiat
            currencyCode: "ETH",
            address: "0xdBdAb835Acd6fC84cF5F9aDD3c0B5a1E25fbd99f"
        }, {
            currencyCode: "BTC",
            address: "bcrt1q6j90vywv8x7eyevcnn2tn2wrlg3vsjlsvt46qz"
        }
    ],
    proxyPorts: new Map<string, string[]>([ // map proxied ports to havenod api and p2p ports
        ["8079", ["9998", "4444"]],  // arbitrator
        ["8080", ["9999", "5555"]],  // alice
        ["8081", ["10000", "6666"]], // bob
        ["8082", ["10001", "7777"]],
        ["8083", ["10002", "7778"]],
        ["8084", ["10003", "7779"]],
        ["8085", ["10004", "7780"]],
        ["8086", ["10005", "7781"]],
    ])
};

interface TxContext {
    isCreatedTx: boolean;
}

// clients
let arbitrator: HavenoDaemon;
let alice: HavenoDaemon;
let bob: HavenoDaemon;
let monerod: any;
let fundingWallet: any;
let aliceWallet: any;

// track started haveno processes
const HAVENO_PROCESSES: HavenoDaemon[] = [];
const HAVENO_PROCESS_PORTS: string[] = [];

// -------------------------- BEFORE / AFTER TESTS ----------------------------

beforeAll(async () => {
  
  // set log level for tests
  HavenoUtils.setLogLevel(TestConfig.logging.level);
  
  // connect to arbitrator, alice, and bob or start as child processes
  let daemonPromises = [];
  daemonPromises.push(initHavenoDaemon(TestConfig.arbitrator));
  daemonPromises.push(initHavenoDaemon(TestConfig.alice));
  daemonPromises.push(initHavenoDaemon(TestConfig.bob));
  let daemons = await Promise.allSettled(daemonPromises);
  if (daemons[0].status === "fulfilled") arbitrator = (daemons[0] as PromiseFulfilledResult<HavenoDaemon>).value;
  else throw new Error((daemons[0] as PromiseRejectedResult).reason);
  if (daemons[1].status === "fulfilled") alice = (daemons[1] as PromiseFulfilledResult<HavenoDaemon>).value;
  else throw new Error((daemons[1] as PromiseRejectedResult).reason);
  if (daemons[2].status === "fulfilled") bob = (daemons[2] as PromiseFulfilledResult<HavenoDaemon>).value;
  else throw new Error((daemons[2] as PromiseRejectedResult).reason);
  
  // connect monero clients
  monerod = await monerojs.connectToDaemonRpc(TestConfig.monerod.url, TestConfig.monerod.username, TestConfig.monerod.password);
  aliceWallet = await monerojs.connectToWalletRpc(TestConfig.alice.walletUrl, TestConfig.alice.walletUsername, TestConfig.alice.walletPassword);
  
  // initialize funding wallet
  await initFundingWallet();
  
  // debug tools
  //for (let offer of await alice.getMyOffers("BUY")) await alice.removeOffer(offer.getId());
  //for (let offer of await alice.getMyOffers("SELL")) await alice.removeOffer(offer.getId());
  //console.log((await alice.getBalances()).getUnlockedBalance() + ", " + (await alice.getBalances()).getLockedBalance());
  //console.log((await bob.getBalances()).getUnlockedBalance() + ", " + (await bob.getBalances()).getLockedBalance());
});

beforeEach(async() => {
  console.log("Before test \"" + expect.getState().currentTestName + "\"");
});

afterAll(async () => {
  let stopPromises = [];
  if (arbitrator && arbitrator.getProcess()) stopPromises.push(stopHavenoProcess(arbitrator));
  if (alice && alice.getProcess())stopPromises.push(stopHavenoProcess(alice));
  if (bob && bob.getProcess())stopPromises.push(stopHavenoProcess(bob));
  return Promise.all(stopPromises);
});

jest.setTimeout(400000);

// ----------------------------------- TESTS ----------------------------------

test("Can get the version", async () => {
  let version = await arbitrator.getVersion();
  expect(version).toEqual(TestConfig.haveno.version);
});

test("Can get market prices", async () => {
  
  // get all market prices
  let prices: MarketPriceInfo[] = await alice.getPrices();
  expect(prices.length).toBeGreaterThan(1);
  for (let price of prices) {
    expect(price.getCurrencyCode().length).toBeGreaterThan(0);
    expect(price.getPrice()).toBeGreaterThanOrEqual(0);
  }
  
  // get market prices of specific currencies
  for (let testAccount of TestConfig.cryptoAccounts) {
    let price = await alice.getPrice(testAccount.currencyCode);
    expect(price).toBeGreaterThan(0);
  }
    
  // test that prices are reasonable
  let usd = await alice.getPrice("USD");
  expect(usd).toBeGreaterThan(50);
  expect(usd).toBeLessThan(5000);
  let doge = await alice.getPrice("DOGE");
  expect(doge).toBeGreaterThan(200)
  expect(doge).toBeLessThan(20000);
  let btc = await alice.getPrice("BTC");
  expect(btc).toBeGreaterThan(0.0004)
  expect(btc).toBeLessThan(0.4);

  // test invalid currency
  await expect(async () => {await alice.getPrice("INVALID_CURRENCY")})
    .rejects
    .toThrow('Currency not found: INVALID_CURRENCY');
});

// test wallet balances, transactions, deposit addresses, create and relay txs
test("Has a Monero wallet", async () => { 
  
  // wait for alice to have unlocked balance
  let tradeAmount: bigint = BigInt("250000000000");
  await waitForUnlockedBalance(tradeAmount * BigInt("2"), alice);
  
  // test balances
  let balancesBefore: XmrBalanceInfo = await alice.getBalances(); // TODO: rename to getXmrBalances() for consistency?
  expect(BigInt(balancesBefore.getUnlockedBalance())).toBeGreaterThan(BigInt("0"));
  expect(BigInt(balancesBefore.getBalance())).toBeGreaterThanOrEqual(BigInt(balancesBefore.getUnlockedBalance()));
  
  // get transactions
  let txs: XmrTx[]= await alice.getXmrTxs();
  assert(txs.length > 0);
  for (let tx of txs) {
    testTx(tx, {isCreatedTx: false});
  }
  
  // get new deposit addresses
  for (let i = 0; i < 0; i++) {
    let address = await alice.getNewDepositSubaddress(); // TODO: rename to getNewDepositAddress()
    MoneroUtils.validateAddress(address, MoneroNetworkType.STAGNET);
  }
  
  // create withdraw tx
  let destination = new XmrDestination().setAddress(await alice.getNewDepositSubaddress()).setAmount("100000000000");
  let tx = await alice.createXmrTx([destination]);
  testTx(tx, {isCreatedTx: true});
  
  // relay withdraw tx
  let txHash = await alice.relayXmrTx(tx.getMetadata());
  expect(txHash.length).toEqual(64);
  
  // balances decreased
  let balancesAfter = await alice.getBalances();
  expect(BigInt(balancesAfter.getBalance())).toBeLessThan(BigInt(balancesBefore.getBalance()));
  expect(BigInt(balancesAfter.getUnlockedBalance())).toBeLessThan(BigInt(balancesBefore.getUnlockedBalance()));
  
  // get relayed tx
  tx = await alice.getXmrTx(txHash);
  testTx(tx, {isCreatedTx: false});
  
  // relay invalid tx
  try {
    await alice.relayXmrTx("invalid tx metadata");
    throw new Error("Cannot relay invalid tx metadata");
  } catch (err) {
    if (err.message !== "Failed to parse hex.") throw new Error("Unexpected error: " + err.message);
  }
});

test("Can get balances", async () => {
  let balances: XmrBalanceInfo = await alice.getBalances();
  expect(BigInt(balances.getUnlockedBalance())).toBeGreaterThanOrEqual(0);
  expect(BigInt(balances.getLockedBalance())).toBeGreaterThanOrEqual(0);
  expect(BigInt(balances.getReservedOfferBalance())).toBeGreaterThanOrEqual(0);
  expect(BigInt(balances.getReservedTradeBalance())).toBeGreaterThanOrEqual(0);
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
    if (paymentAccount.getPaymentAccountPayload()!.getCryptoCurrencyAccountPayload()) { // TODO (woodser): test non-crypto
       testCryptoPaymentAccount(paymentAccount);
    }
  }
});

test("Can create crypto payment accounts", async () => {
    
  // test each stagenet crypto account
  for (let testAccount of TestConfig.cryptoAccounts) {
    
    // create payment account
    let name = testAccount.currencyCode + " " + testAccount.address.substr(0, 8) + "... " + GenUtils.getUUID();
    let paymentAccount: PaymentAccount = await alice.createCryptoPaymentAccount(
      name,
      testAccount.currencyCode,
      testAccount.address);
    testCryptoPaymentAccount(paymentAccount);
    testCryptoPaymentAccountEquals(paymentAccount, testAccount, name);
    
    // fetch and test payment account
    let fetchedAccount: PaymentAccount | undefined;
    for (let account of await alice.getPaymentAccounts()) {
      if (paymentAccount.getId() === account.getId()) {
        fetchedAccount = account;
        break;
      }
    }
    if (!fetchedAccount) throw new Error("Payment account not found after being added");
    testCryptoPaymentAccount(paymentAccount);
    testCryptoPaymentAccountEquals(fetchedAccount, testAccount, name);
    
    // wait before creating next account
    await GenUtils.waitFor(1000);

    // TODO (woodser): test rejecting account with invalid currency code
    // TODO (woodser): test rejecting account with invalid address
    // TODO (woodser): test rejecting account with duplicate name
  }
  
  function testCryptoPaymentAccountEquals(paymentAccount: PaymentAccount, testAccount: any, name: string) {
    expect(paymentAccount.getAccountName()).toEqual(name);
    expect(paymentAccount.getPaymentAccountPayload()!.getCryptoCurrencyAccountPayload()!.getAddress()).toEqual(testAccount.address);
    expect(paymentAccount.getSelectedTradeCurrency()!.getCode()).toEqual(testAccount.currencyCode.toUpperCase());
  }
});

test("Can post and remove an offer", async () => {
    
  // wait for alice to have unlocked balance to post offer
  let tradeAmount: bigint = BigInt("250000000000");
  await waitForUnlockedBalance(tradeAmount * BigInt("2"), alice);
  
  // get unlocked balance before reserving funds for offer
  let unlockedBalanceBefore: bigint = BigInt((await alice.getBalances()).getUnlockedBalance());

  // post offer
  let offer: OfferInfo = await postOffer(alice, "buy", BigInt("200000000000"), undefined);
  assert.equal(offer.getState(), "AVAILABLE");
  
  // has offer
  offer = await alice.getMyOffer(offer.getId());
  assert.equal(offer.getState(), "AVAILABLE");
  
  // cancel offer
  await alice.removeOffer(offer.getId());
  
  // offer is removed from my offers
  if (getOffer(await alice.getMyOffers("buy"), offer.getId())) throw new Error("Offer " + offer.getId() + " was found in my offers after removal");
  
  // reserved balance released
  expect(unlockedBalanceBefore).toEqual(BigInt((await alice.getBalances()).getUnlockedBalance()));
});

test("Invalidates offers when reserved funds are spent", async () => {
  let err;
  let tx;
  try {
    // wait for alice to have unlocked balance for trade
    let tradeAmount: bigint = BigInt("250000000000");
    await waitForUnlockedBalance(tradeAmount * BigInt("2"), alice);
    
    // get frozen key images before posting offer
    let frozenKeyImagesBefore = [];
    for (let frozenOutput of await aliceWallet.getOutputs({isFrozen: true})) frozenKeyImagesBefore.push(frozenOutput.getKeyImage().getHex());
    
    // post offer
    await wait(1000);
    let offer: OfferInfo = await postOffer(alice, "buy", tradeAmount, undefined);
    
    // get key images reserved by offer
    let reservedKeyImages = [];
    let frozenKeyImagesAfter = [];
    for (let frozenOutput of await aliceWallet.getOutputs({isFrozen: true})) frozenKeyImagesAfter.push(frozenOutput.getKeyImage().getHex());
    for (let frozenKeyImageAfter of frozenKeyImagesAfter) {
      if (!frozenKeyImagesBefore.includes(frozenKeyImageAfter)) reservedKeyImages.push(frozenKeyImageAfter);
    }
    
    // offer is available to peers
    await wait(TestConfig.walletSyncPeriodMs * 2);
    if (!getOffer(await bob.getOffers("buy"), offer.getId())) throw new Error("Offer " + offer.getId() + " was not found in peer's offers after posting");
    
    // spend one of offer's reserved outputs
    if (!reservedKeyImages.length) throw new Error("No reserved key images detected");
    await aliceWallet.thawOutput(reservedKeyImages[0]);
    tx = await aliceWallet.sweepOutput({keyImage: reservedKeyImages[0], address: await aliceWallet.getPrimaryAddress(), relay: false});
    await monerod.submitTxHex(tx.getFullHex(), true);
    
    // wait for spend to be seen
    await wait(TestConfig.walletSyncPeriodMs * 2); // TODO (woodser): need place for common test utilities
    
    // offer is removed from peer offers
    if (getOffer(await bob.getOffers("buy"), offer.getId())) throw new Error("Offer " + offer.getId() + " was found in peer's offers after reserved funds spent");
    
    // offer is removed from my offers
    if (getOffer(await alice.getMyOffers("buy"), offer.getId())) throw new Error("Offer " + offer.getId() + " was found in my offers after reserved funds spent");
    
    // offer is automatically cancelled
    try {
      await alice.removeOffer(offer.getId());
      throw new Error("cannot remove invalidated offer");
    } catch (err) {
      if (err.message === "cannot remove invalidated offer") throw new Error("Unexpected error: " + err.message);
    }
  } catch (err2) {
    err = err2;
  }
  
  // flush tx from pool
  if (tx) await monerod.flushTxPool(tx.getHash());
  if (err) throw err;
});

// TODO (woodser): test arbitrator state too
// TODO (woodser): test breaking protocol after depositing to multisig (e.g. don't send payment account payload by deleting it)
test("Handles unexpected errors during trade initialization", async () => {
  let traders: HavenoDaemon[] = [];
  let err: any;
  try {
    
    // start and fund 3 trader processes
    console.log("Starting trader processes");
    traders = await startHavenoProcesses(3, TestConfig.logging.logProcessOutput);
    console.log("Funding traders");
    let tradeAmount: bigint = BigInt("250000000000");
    await waitForUnlockedBalance(tradeAmount * BigInt("2"), traders[0], traders[1], traders[2]);
    
    // trader 0 posts offer
    console.log("Posting offer");
    let offer = await postOffer(traders[0], "buy", tradeAmount, undefined);
    offer = await traders[0].getMyOffer(offer.getId());
    assert.equal(offer.getState(), "AVAILABLE");
    
    // wait for offer for offer to be seen
    await wait(TestConfig.walletSyncPeriodMs * 2);
    
    // trader 1 spends trade funds after initializing trade
    let paymentAccount = await createCryptoPaymentAccount(traders[1]);
    wait(3000).then(async function() {
      try {
        let traderWallet = await monerojs.connectToWalletRpc("http://localhost:" + traders[1].getWalletRpcPort(), "rpc_user", "abc123"); // TODO: don't hardcode here, protect wallet rpc based on account password
        for (let frozenOutput of await traderWallet.getOutputs({isFrozen: true})) await traderWallet.thawOutput(frozenOutput.getKeyImage().getHex());
        console.log("Sweeping trade funds");
        await traderWallet.sweepUnlocked({address: await traderWallet.getPrimaryAddress(), relay: true});
      } catch (err) {
        console.log("Caught error sweeping funds!");
        console.log(err);
      }
    });
    
    // trader 1 tries to take offer
    try {
      console.log("Trader 1 taking offer");
      await traders[1].takeOffer(offer.getId(), paymentAccount.getId());
      throw new Error("Should have failed taking offer because taker trade funds spent")
    } catch (err) {
      assert(err.message.includes("not enough money"), "Unexpected error: " + err.message);
    }
    
    // TODO: test that unavailable right after taking (taker will know before maker)
    
    // trader 0's offer remains available
    await wait(10000); // give time for trade initialization to fail and offer to become available
    offer = await traders[0].getMyOffer(offer.getId());
    if (offer.getState() !== "AVAILABLE") {
        console.log("Offer is not yet available, waiting to become available after timeout..."); // there is no error notice if peer stops responding
        await wait(25000); // give another 25 seconds to become available
        offer = await traders[0].getMyOffer(offer.getId());
        assert.equal(offer.getState(), "AVAILABLE");
    }
    
    // trader 0 spends trade funds then trader 2 takes offer
    wait(3000).then(async function() {
      try {
        let traderWallet = await monerojs.connectToWalletRpc("http://localhost:" + traders[0].getWalletRpcPort(), "rpc_user", "abc123"); // TODO: don't hardcode here, protect wallet rpc based on account password
        for (let frozenOutput of await traderWallet.getOutputs({isFrozen: true})) await traderWallet.thawOutput(frozenOutput.getKeyImage().getHex());
        console.log("Sweeping offer funds");
        await traderWallet.sweepUnlocked({address: await traderWallet.getPrimaryAddress(), relay: true});
      } catch (err) {
        console.log("Caught error sweeping funds!");
        console.log(err);
      }
    });
    
    // trader 2 tries to take offer
    paymentAccount = await createCryptoPaymentAccount(traders[2]);
    try {
      console.log("Trader 2 taking offer")
      await traders[2].takeOffer(offer.getId(), paymentAccount.getId());
      throw new Error("Should have failed taking offer because maker trade funds spent")
    } catch (err) {
      assert(err.message.includes("not enough money") || err.message.includes("timeout reached. protocol did not complete"), "Unexpected error: " + err.message);
    }
    
    // trader 2's balance is unreserved
    let trader2Balances = await traders[2].getBalances();
    expect(BigInt(trader2Balances.getReservedTradeBalance())).toEqual(BigInt("0"));
    expect(BigInt(trader2Balances.getUnlockedBalance())).toBeGreaterThan(BigInt("0"));
  } catch (err2) {
    err = err2;
  }
  
  // stop traders
  console.log("Stopping haveno processes");
  for (let trader of traders) await stopHavenoProcess(trader);
  if (err) throw err;
});

test("Cannot make or take offer with insufficient unlocked funds", async () => {
  let charlie: HavenoDaemon | undefined;
  let err: any;
  try {
    
    // start charlie
    charlie = await startHavenoProcess(undefined, TestConfig.logging.logProcessOutput);
    
    // charlie creates ethereum payment account
    let paymentAccount = await createCryptoPaymentAccount(charlie);
    
    // charlie cannot make offer with insufficient funds
    try {
      await postOffer(charlie, "buy", BigInt("200000000000"), paymentAccount.getId());
      throw new Error("Should have failed making offer with insufficient funds")
    } catch (err) {
      let errTyped = err as grpcWeb.RpcError;
      assert.equal(errTyped.code, 2);
      assert(errTyped.message.includes("not enough money"));
    }
    
    // alice posts offer
    let offers: OfferInfo[] = await alice.getMyOffers("buy"); // TODO: support alice.getMyOffers() without direction
    let offer: OfferInfo;
    if (offers.length) offer = offers[0];
    else {
      let tradeAmount: bigint = BigInt("250000000000");
      await waitForUnlockedBalance(tradeAmount * BigInt("2"), alice);
      offer = await postOffer(alice, "buy", tradeAmount, undefined);
      assert.equal(offer.getState(), "AVAILABLE");
      await wait(TestConfig.walletSyncPeriodMs * 2);
    }
    
    // charlie cannot take offer with insufficient funds
    try {
      await charlie.takeOffer(offer.getId(), paymentAccount.getId()); // TODO (woodser): this returns before trade is fully initialized
      throw new Error("Should have failed taking offer with insufficient funds")
    } catch (err) {
      let errTyped = err as grpcWeb.RpcError;
      assert(errTyped.message.includes("not enough money"), "Unexpected error: " + errTyped.message); // TODO (woodser): error message does not contain stacktrace
      assert.equal(errTyped.code, 2);
    }
    
    // charlie does not have trade
    try {
      await charlie.getTrade(offer.getId());
    } catch (err) {
      let errTyped = err as grpcWeb.RpcError;
      assert.equal(errTyped.code, 3);
      assert(errTyped.message.includes("trade with id '" + offer.getId() + "' not found"));  // TODO (woodser): error message does not contain stacktrace
    }
  } catch (err2) {
    err = err2;
  }
  
  // stop charlie
  if (charlie) await stopHavenoProcess(charlie);
  // TODO: how to delete trader app folder at end of test?
  if (err) throw err;
});

// TODO (woodser): test grpc notifications
test("Can complete a trade", async () => {
  
  // wait for alice and bob to have unlocked balance for trade
  let tradeAmount: bigint = BigInt("250000000000");
  await waitForUnlockedBalance(tradeAmount * BigInt("2"), alice, bob);
  let aliceBalancesBefore = await alice.getBalances();
  let bobBalancesBefore: XmrBalanceInfo = await bob.getBalances();
  
  // alice posts offer to buy xmr
  console.log("Alice posting offer");
  let direction = "buy";
  let offer: OfferInfo = await postOffer(alice, direction, tradeAmount, undefined);
  expect(offer.getState()).toEqual("AVAILABLE");
  console.log("Alice done posting offer");
  
  // TODO (woodser): test error message taking offer before posted
  
  // bob sees offer
  await wait(TestConfig.walletSyncPeriodMs * 2);
  let offerBob = getOffer(await bob.getOffers(direction), offer.getId());
  if (!offerBob) throw new Error("Offer " + offer.getId() + " was not found in peer's offers after posting");
  expect(offerBob.getState()).toEqual("UNKNOWN"); // TODO: offer state is not known?
  
  // cannot take offer with invalid payment id
  let aliceTradesBefore = await alice.getTrades();
  let bobTradesBefore = await bob.getTrades();
  try {
    await bob.takeOffer(offer.getId(), "abc");
    throw new Error("taking offer with invalid payment account id should fail");
  } catch (err) {
    assert.equal(err.message, "payment account with id 'abc' not found");
    assert.equal((await alice.getTrades()).length, aliceTradesBefore.length, "alice should have not new trades");
    assert.equal((await bob.getTrades()).length, bobTradesBefore.length, "bob should not have new trades"); // TODO (woodser): also test balance unreserved
  }
  
  // bob creates ethereum payment account
  let testAccount =  TestConfig.cryptoAccounts[0];
  let ethPaymentAccount: PaymentAccount = await bob.createCryptoPaymentAccount(
      testAccount.currencyCode + " " +  testAccount.address.substr(0, 8) + "... " + GenUtils.getUUID(),
      testAccount.currencyCode,
      testAccount.address);
  
  // bob takes offer
  let startTime = Date.now();
  console.log("Bob taking offer");
  let trade: TradeInfo = await bob.takeOffer(offer.getId(), ethPaymentAccount.getId()); // TODO (woodser): this returns before trade is fully initialized
  expect(trade.getPhase()).toEqual("DEPOSIT_PUBLISHED");
  console.log("Bob done taking offer in " + (Date.now() - startTime) + " ms");
  
  // bob can get trade
  let fetchedTrade: TradeInfo = await bob.getTrade(trade.getTradeId());
  expect(fetchedTrade.getPhase()).toEqual("DEPOSIT_PUBLISHED");
  // TODO: test fetched trade
  
  // test bob's balances after taking trade
  let bobBalancesAfter: XmrBalanceInfo = await bob.getBalances();
  expect(BigInt(bobBalancesAfter.getUnlockedBalance())).toBeLessThan(BigInt(bobBalancesBefore.getUnlockedBalance()));
  expect(BigInt(bobBalancesAfter.getReservedOfferBalance()) + BigInt(bobBalancesAfter.getReservedTradeBalance())).toBeGreaterThan(BigInt(bobBalancesBefore.getReservedOfferBalance()) + BigInt(bobBalancesBefore.getReservedTradeBalance()));
  
  // bob is notified of balance change
  
  // alice notified of balance changes and that offer is taken
  await wait(TestConfig.maxTimePeerNoticeMs);
  
  // alice can get trade
  fetchedTrade = await alice.getTrade(trade.getTradeId());
  expect(fetchedTrade.getPhase()).toEqual("DEPOSIT_PUBLISHED");
  
  // mine until deposit txs unlock
  console.log("Mining to unlock deposit txs");
  await waitForUnlockedTxs(fetchedTrade.getMakerDepositTxId(), fetchedTrade.getTakerDepositTxId());
  console.log("Done mining to unlock deposit txs");
  
  // alice notified to send payment
  await wait(TestConfig.walletSyncPeriodMs * 2);
  fetchedTrade = await alice.getTrade(trade.getTradeId());
  expect(fetchedTrade.getIsDepositConfirmed()).toBe(true);
  expect(fetchedTrade.getPhase()).toEqual("DEPOSIT_CONFIRMED"); // TODO (woodser): rename to DEPOSIT_UNLOCKED, have phase for when deposit txs confirm?
  fetchedTrade = await bob.getTrade(trade.getTradeId());
  expect(fetchedTrade.getIsDepositConfirmed()).toBe(true);
  expect(fetchedTrade.getPhase()).toEqual("DEPOSIT_CONFIRMED");
  
  // alice indicates payment is sent
  await alice.confirmPaymentStarted(trade.getTradeId());
  fetchedTrade = await alice.getTrade(trade.getTradeId());
  expect(fetchedTrade.getPhase()).toEqual("FIAT_SENT"); // TODO (woodser): rename to PAYMENT_SENT
  
  // bob notified payment is sent
  await wait(TestConfig.maxTimePeerNoticeMs);
  fetchedTrade = await bob.getTrade(trade.getTradeId());
  expect(fetchedTrade.getPhase()).toEqual("FIAT_SENT"); // TODO (woodser): rename to PAYMENT_SENT
  
  // bob confirms payment is received
  await bob.confirmPaymentReceived(trade.getTradeId());
  fetchedTrade = await bob.getTrade(trade.getTradeId());
  expect(fetchedTrade.getPhase()).toEqual("PAYOUT_PUBLISHED");
  
  // alice notified trade is complete and of balance changes
  await wait(TestConfig.walletSyncPeriodMs * 2);
  fetchedTrade = await alice.getTrade(trade.getTradeId());
  expect(fetchedTrade.getPhase()).toEqual("PAYOUT_PUBLISHED");
  
  // test balances after payout tx
  let aliceBalancesAfter = await alice.getBalances();
  bobBalancesAfter = await bob.getBalances();
  let aliceFee = BigInt(aliceBalancesBefore.getBalance()) + tradeAmount - BigInt(aliceBalancesAfter.getBalance());
  let bobFee = BigInt(bobBalancesBefore.getBalance()) - tradeAmount - BigInt(bobBalancesAfter.getBalance());
  expect(aliceFee).toBeLessThanOrEqual(TestConfig.maxFee);
  expect(aliceFee).toBeGreaterThan(BigInt("0"));
  expect(bobFee).toBeLessThanOrEqual(TestConfig.maxFee);
  expect(bobFee).toBeGreaterThan(BigInt("0"));
});

// ------------------------------- HELPERS ------------------------------------

/**
 * Initialize arbitrator, alice, or bob by their configuration.
 * 
 * @param {object} config - for arbitrator, alice, or bob
 * @return {HavenoDaemon} the created instance
 */
async function initHavenoDaemon(config: any): Promise<HavenoDaemon> {
  try {
    let havenod = new HavenoDaemon(config.url, config.password);
    await havenod.getVersion();
    return havenod;
  } catch (err) {
    return startHavenoProcess(config.appName, config.logProcessOutput);
  }
}

/**
 * Start Haveno daemons as processes.
 * 
 * @param {number} numProcesses - number of trader processes to start
 * @param {boolean} enableLogging - specifies if process output should be logged
 * @return {HavenoDaemon[]} clients connected to the started Haveno processes
 */
async function startHavenoProcesses(numProcesses: number, enableLogging: boolean): Promise<HavenoDaemon[]> {
  let traderPromises: Promise<HavenoDaemon>[] = [];
  for (let i = 0; i < numProcesses; i++) traderPromises.push(startHavenoProcess(undefined, enableLogging));
  return Promise.all(traderPromises);
}

/**
 * Start a Haveno daemon as a process.
 *
 * If the appName belongs to the arbitrator, alice, or bob, the process is started using their configured ports. 
 * 
 * @param {string|undefined} appName - the app folder name (default to name with unique id)
 * @param {boolean} enableLogging - specifies if process output should be logged
 * @return {HavenoDaemon} the client connected to the started Haveno process
 */
async function startHavenoProcess(appName: string|undefined, enableLogging: boolean): Promise<HavenoDaemon> {
  if (!appName) appName = "haveno-XMR_STAGENET_instance_" + GenUtils.getUUID();
  
  // get proxy port for haveno process
  let proxyPort;
  if (appName === TestConfig.arbitrator.appName) proxyPort = "8079";
  else if (appName === TestConfig.alice.appName) proxyPort = "8080"; 
  else if (appName === TestConfig.bob.appName) proxyPort = "8081";
  else {
    for (let port of Array.from(TestConfig.proxyPorts.keys())) {
      if (port === "8079" || port === "8080" || port === "8081") continue; // reserved for arbitrator, alice, and bob
      if (!GenUtils.arrayContains(HAVENO_PROCESS_PORTS, port)) {
        HAVENO_PROCESS_PORTS.push(port);
        proxyPort = port;
        break;
      }
    }
  }
  if (!proxyPort) throw new Error("No unused test ports available");
  
  // start haveno process using configured ports if available
  let cmd: string[] = [
    "./haveno-daemon",
    "--baseCurrencyNetwork", "XMR_STAGENET",
    "--useLocalhostForP2P", "true",
    "--useDevPrivilegeKeys", "true",
    "--nodePort", TestConfig.proxyPorts.get(proxyPort)![1],
    "--appName", appName,
    "--apiPassword", "apitest",
    "--apiPort", TestConfig.proxyPorts.get(proxyPort)![0],
    "--walletRpcBindPort", (proxyPort === "8080" ? new URL(TestConfig.alice.walletUrl).port : await getFreePort()) + "" // use alice's configured wallet rpc port 
  ];
  let havenod = await HavenoDaemon.startProcess(TestConfig.haveno.path, cmd, "http://localhost:" + proxyPort, enableLogging);
  HAVENO_PROCESSES.push(havenod);
  return havenod;
}

/**
 * Get a free port.
 */
async function getFreePort(): Promise<number> {
  return new Promise(function(resolve, reject) {
    let srv = net.createServer();
    srv.listen(0, function() {
      let port = srv.address().port;
      srv.close(function() {
        resolve(port);
      })
    });
  });
}

/**
 * Stop a Haveno daemon process and release its ports for reuse.
 */
async function stopHavenoProcess(havenod: HavenoDaemon) {
  await havenod.stopProcess();
  GenUtils.remove(HAVENO_PROCESSES, havenod);
  GenUtils.remove(HAVENO_PROCESS_PORTS, new URL(havenod.getUrl()).port);
}

/**
 * Open or create funding wallet.
 */
async function initFundingWallet() {
  
  // init client connected to monero-wallet-rpc
  fundingWallet = await monerojs.connectToWalletRpc(TestConfig.fundingWallet.url, TestConfig.fundingWallet.username, TestConfig.fundingWallet.password);
  
  // check if wallet is open
  let walletIsOpen = false
  try {
    await fundingWallet.getPrimaryAddress();
    walletIsOpen = true;
  } catch (err) { }
  
  // open wallet if necessary
  if (!walletIsOpen) {
    
    // attempt to open funding wallet
    try {
      await fundingWallet.openWallet({path: TestConfig.fundingWallet.defaultPath, password: TestConfig.fundingWallet.password});
    } catch (e) {
      if (!(e instanceof monerojs.MoneroRpcError)) throw e;
      
      // -1 returned when wallet does not exist or fails to open e.g. it's already open by another application
      if (e.getCode() === -1) {
        
        // create wallet
        await fundingWallet.createWallet({path: TestConfig.fundingWallet.defaultPath, password: TestConfig.fundingWallet.password});
      } else {
        throw e;
      }
    }
  }
}

/**
 * Wait for unlocked balance in wallet or Haveno daemon.
 */
async function waitForUnlockedBalance(amount: bigint, ...wallets: any[]) {
  
  // wrap common wallet functionality for tests
  class WalletWrapper {
    
    _wallet: any;
    
    constructor(wallet: any) {
      this._wallet = wallet;
    }
    
    async getUnlockedBalance(): Promise<bigint> {
      if (this._wallet instanceof HavenoDaemon) return BigInt((await this._wallet.getBalances()).getUnlockedBalance());
      else return BigInt((await this._wallet.getUnlockedBalance()).toString());
    }
    
    async getLockedBalance(): Promise<bigint> {
      if (this._wallet instanceof HavenoDaemon) return BigInt((await this._wallet.getBalances()).getLockedBalance());
      else return BigInt((await this._wallet.getBalance()).toString()) - await this.getUnlockedBalance();
    }
    
    async getDepositAddress(): Promise<string> {
      if (this._wallet instanceof HavenoDaemon) return await this._wallet.getNewDepositSubaddress();
      else return (await this._wallet.createSubaddress()).getAddress();
    }
  }
  
  // wrap wallets
  for (let i = 0; i < wallets.length; i++) wallets[i] = new WalletWrapper(wallets[i]);
  
  // fund wallets with insufficient balance
  let miningNeeded = false;
  let fundConfig = new MoneroTxConfig().setAccountIndex(0).setRelay(true);
  for (let wallet of wallets) {
    let unlockedBalance = await wallet.getUnlockedBalance();
    if (unlockedBalance < amount) miningNeeded = true;
    let depositNeeded: bigint = amount - unlockedBalance - await wallet.getLockedBalance();
    if (depositNeeded > BigInt("0") && wallet._wallet !== fundingWallet) fundConfig.addDestination(await wallet.getDepositAddress(), depositNeeded * BigInt("10")); // deposit 10 times more than needed
  }
  if (fundConfig.getDestinations()) {
    await waitForUnlockedBalance(TestConfig.fundingWallet.minimumFunding, fundingWallet); // TODO (woodser): wait for enough to cover tx amount + fee
    try { await fundingWallet.createTx(fundConfig); }
    catch (err) { throw new Error("Error funding wallets: " + err.message); }
  }
  
  // done if all wallets have sufficient unlocked balance
  if (!miningNeeded) return;
  
  // wait for funds to unlock
  console.log("Mining for unlocked balance of " + amount);
  await startMining();
  let promises: Promise<void>[] = [];
  for (let wallet of wallets) {
    promises.push(new Promise(async function(resolve, reject) {
      let taskLooper: any = new TaskLooper(async function() {
        if (await wallet.getUnlockedBalance() >= amount) {
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

async function startMining() {
  try {
    await monerod.startMining(await fundingWallet.getPrimaryAddress(), 3);
  } catch (err) {
    if (err.message !== "Already mining") throw err;
  }
}

async function wait(durationMs: number) {
  return new Promise(function(resolve) { setTimeout(resolve, durationMs); });
}

function testTx(tx: XmrTx, ctx: TxContext) {
  assert(tx.getHash());
  expect(BigInt(tx.getFee())).toBeLessThan(TestConfig.maxFee);
  if (tx.getIsConfirmed()) {
    assert(tx.getTimestamp() > 1000);
    assert(tx.getHeight() > 0);
  } else {
    assert.equal(tx.getHeight(), 0);
  }
  assert(tx.getOutgoingTransfer() || tx.getIncomingTransfersList().length); // TODO (woodser): test transfers
  for (let incomingTransfer of tx.getIncomingTransfersList()) testTransfer(incomingTransfer, ctx);
  if (tx.getOutgoingTransfer()) testTransfer(tx.getOutgoingTransfer()!, ctx);
  if (ctx.isCreatedTx) testCreatedTx(tx, ctx);
}

function testCreatedTx(tx: XmrTx, ctx: TxContext) {
   assert.equal(tx.getTimestamp(), 0);
   assert.equal(tx.getIsConfirmed(), false);
   assert.equal(tx.getIsLocked(), true);
   assert(tx.getMetadata() && tx.getMetadata().length > 0);
}

function testTransfer(transfer: XmrIncomingTransfer|XmrOutgoingTransfer, ctx: TxContext) {
  expect(BigInt(transfer.getAmount())).toBeGreaterThanOrEqual(BigInt("0"));
  assert(transfer.getAccountIndex() >= 0);
  if (transfer instanceof XmrIncomingTransfer) testIncomingTransfer(transfer, ctx);
  else testOutgoingTransfer(transfer, ctx);
}

function testIncomingTransfer(transfer: XmrIncomingTransfer, ctx: TxContext) {
  assert(transfer.getAddress());
  assert(transfer.getSubaddressIndex() >= 0);
  assert(transfer.getNumSuggestedConfirmations() > 0);
}

function testOutgoingTransfer(transfer: XmrOutgoingTransfer, ctx: TxContext) {
  if (!ctx.isCreatedTx) assert(transfer.getSubaddressIndicesList().length > 0);
  for (let subaddressIdx of transfer.getSubaddressIndicesList()) assert(subaddressIdx >= 0);
  
  // test destinations sum to outgoing amount
  if (transfer.getDestinationsList().length > 0) {
    let sum = BigInt(0);
    for (let destination of transfer.getDestinationsList()) {
      testDestination(destination);
      expect(BigInt(destination.getAmount())).toBeGreaterThan(BigInt("0"));
      sum += BigInt(destination.getAmount());
    }
    assert.equal(sum, BigInt(transfer.getAmount()));
  }
}

function testDestination(destination: XmrDestination) {
  assert(destination.getAddress());
  expect(BigInt(destination.getAmount())).toBeGreaterThan(BigInt("0"));
}

async function createCryptoPaymentAccount(trader: HavenoDaemon): Promise<PaymentAccount> {
  let testAccount =  TestConfig.cryptoAccounts[0];
  let paymentAccount: PaymentAccount = await trader.createCryptoPaymentAccount(
    testAccount.currencyCode + " " +  testAccount.address.substr(0, 8) + "... " + GenUtils.getUUID(),
    testAccount.currencyCode,
    testAccount.address);
  return paymentAccount;
}

async function postOffer(maker: HavenoDaemon, direction: string, amount: bigint, paymentAccountId: string|undefined) {
    
  // create payment account if not given
  if (!paymentAccountId) paymentAccountId = (await createCryptoPaymentAccount(maker)).getId();
  
  // get unlocked balance before reserving offer
  let unlockedBalanceBefore: bigint = BigInt((await maker.getBalances()).getUnlockedBalance());
  
  // post offer
  let offer: OfferInfo = await maker.postOffer("eth",
        direction,                  // buy or sell xmr for eth
        12.378981,                  // price TODO: price is optional? price string gets converted to long?
        true,                       // use market price
        0.02,                       // market price margin, e.g. within 2%
        amount,                     // amount
        BigInt("150000000000"),     // min amount
        0.15,                       // buyer security deposit, e.g. 15%
        paymentAccountId,           // payment account id
        undefined);                 // trigger price // TODO: fails if there is a decimal, gets converted to long?
  testOffer(offer);

  // unlocked balance has decreased
  let unlockedBalanceAfter: bigint = BigInt((await maker.getBalances()).getUnlockedBalance());
  if (unlockedBalanceAfter === unlockedBalanceBefore) throw new Error("unlocked balance did not change after posting offer");
  
  // offer is included in my offers only
  if (!getOffer(await maker.getMyOffers(direction), offer.getId())) {
    await wait(10000);
    if (!getOffer(await maker.getMyOffers(direction), offer.getId())) throw new Error("Offer " + offer.getId() + " was not found in my offers");
    else console.log("The offer finally posted!");
  }
  if (getOffer(await maker.getOffers(direction), offer.getId())) throw new Error("My offer " + offer.getId() + " should not appear in available offers");
  
  return offer;
}

function getOffer(offers: OfferInfo[], id: string): OfferInfo | undefined {
  return offers.find(offer => offer.getId() === id);
}

function testCryptoPaymentAccount(paymentAccount: PaymentAccount) {
  expect(paymentAccount.getId().length).toBeGreaterThan(0);
  expect(paymentAccount.getAccountName().length).toBeGreaterThan(0);
  expect(paymentAccount.getPaymentAccountPayload()!.getCryptoCurrencyAccountPayload()!.getAddress().length).toBeGreaterThan(0);
  expect(paymentAccount.getSelectedTradeCurrency()!.getCode().length).toBeGreaterThan(0);
  expect(paymentAccount.getTradeCurrenciesList().length).toEqual(1);
  let tradeCurrency = paymentAccount.getTradeCurrenciesList()[0];
  expect(tradeCurrency.getName().length).toBeGreaterThan(0);
  expect(tradeCurrency.getCode()).toEqual(paymentAccount.getSelectedTradeCurrency()!.getCode());
}

function testOffer(offer: OfferInfo) {
  expect(offer.getId().length).toBeGreaterThan(0);
  // TODO: test rest of offer
}
