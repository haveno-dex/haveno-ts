// --------------------------------- IMPORTS ----------------------------------
    
// import haveno types
import {HavenoDaemon} from "./HavenoDaemon";
import {XmrBalanceInfo, OfferInfo, TradeInfo} from './protobuf/grpc_pb'; // TODO (woodser): better names; haveno_grpc_pb, haveno_pb
import {PaymentAccount} from './protobuf/pb_pb';

// import monero-javascript
const monerojs = require("monero-javascript"); // TODO (woodser): support typescript and `npm install @types/monero-javascript` in monero-javascript
const GenUtils = monerojs.GenUtils;
const MoneroTxConfig = monerojs.MoneroTxConfig;
const TaskLooper = monerojs.TaskLooper;

// import console because jest swallows messages in real time
const console = require('console');

// --------------------------- TEST CONFIGURATION -----------------------------

// wallet to fund alice and bob during tests
const fundingWalletUrl = "http://localhost:38084";
const fundingWalletUsername = "rpc_user";
const fundingWalletPassword = "abc123";
const defaultFundingWalletPath = "test_funding_wallet";
const minimumFunding = BigInt("5000000000000");
let fundingWallet: any;

// alice config
const havenoVersion = "1.6.2";
const aliceDaemonUrl = "http://localhost:8080";
const aliceDaemonPassword = "apitest";
const alice: HavenoDaemon = new HavenoDaemon(aliceDaemonUrl, aliceDaemonPassword);
const aliceWalletUrl = "http://127.0.0.1:38091"; // alice's internal haveno wallet for direct testing
const aliceWalletUsername = "rpc_user";
const aliceWalletPassword = "abc123";
let aliceWallet: any;

// bob config
const bobDaemonUrl = "http://localhost:8081";
const bobDaemonPassword = "apitest";
const bob: HavenoDaemon = new HavenoDaemon(bobDaemonUrl, bobDaemonPassword);

// monero daemon config
const moneroDaemonUrl = "http://localhost:38081"
const moneroDaemonUsername = "superuser";
const moneroDaemonPassword = "abctesting123";
let monerod: any;

// other test config
const WALLET_SYNC_PERIOD = 5000;
const MAX_TIME_PEER_NOTICE = 3000;
const TEST_CRYPTO_ACCOUNTS = [ // TODO (woodser): test other cryptos, fiat
  {
    currencyCode: "eth",
    address: "0xdBdAb835Acd6fC84cF5F9aDD3c0B5a1E25fbd99f"
  },
  {
    currencyCode: "btc",
    address: "bcrt1q6j90vywv8x7eyevcnn2tn2wrlg3vsjlsvt46qz"
  }
];

// ----------------------------------- TESTS ----------------------------------

beforeAll(async () => {
  
  // initialize client of monerod
  monerod = await monerojs.connectToDaemonRpc(moneroDaemonUrl, moneroDaemonUsername, moneroDaemonPassword);
  
  // initialize funding wallet
  await initFundingWallet();
  
  // create client connected to alice's internal wallet
  aliceWallet = await monerojs.connectToWalletRpc(aliceWalletUrl, aliceWalletUsername, aliceWalletPassword);
  await aliceWallet.startSyncing(WALLET_SYNC_PERIOD);
  
  // debug tools
  //for (let offer of await alice.getMyOffers("BUY")) await alice.removeOffer(offer.getId());
  //for (let offer of await alice.getMyOffers("SELL")) await alice.removeOffer(offer.getId());
  //for (let frozenOutput of await aliceWallet.getOutputs({isFrozen: true})) await aliceWallet.thawOutput(frozenOutput.getKeyImage().getHex());
  //console.log((await alice.getBalances()).getUnlockedBalance() + ", " + (await alice.getBalances()).getLockedBalance());
  //console.log((await bob.getBalances()).getUnlockedBalance() + ", " + (await bob.getBalances()).getLockedBalance());
});

jest.setTimeout(300000);
test("Can get the version", async () => {
  let version = await alice.getVersion();
  expect(version).toEqual(havenoVersion);
});

test("Can get market prices", async () => {
  
  // test crypto prices  
  for (let testAccount of TEST_CRYPTO_ACCOUNTS) {
    let price = await alice.getPrice(testAccount.currencyCode);
    console.log(testAccount.currencyCode + " price: " + price);
    expect(price).toBeGreaterThan(0);
    await GenUtils.waitFor(1000); // wait before next request // TODO (woodser): disable price throttle?
  }
    
  // test fiat price
  let price = await alice.getPrice("USD");
  console.log("usd price: " + price);
  expect(price).toBeGreaterThan(0);
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
  for (let testAccount of TEST_CRYPTO_ACCOUNTS) {
    
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
  await waitForUnlockedBalance(tradeAmount, alice);
  
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

test("Invalidates offers when reserved funds are spent", async () => {

  // wait for alice and bob to have unlocked balance for trade
  let tradeAmount: bigint = BigInt("250000000000");
  await waitForUnlockedBalance(tradeAmount, alice, bob);
    
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
  await wait(WALLET_SYNC_PERIOD * 2);
  if (!getOffer(await bob.getOffers("buy"), offer.getId())) throw new Error("Offer " + offer.getId() + " was not found in peer's offers after posting");
  
  // spend one of offer's reserved outputs
  if (!reservedKeyImages.length) throw new Error("No reserved key images detected");
  await aliceWallet.thawOutput(reservedKeyImages[0]);
  let tx = await aliceWallet.sweepOutput({keyImage: reservedKeyImages[0], address: await aliceWallet.getPrimaryAddress(), relay: false});
  await monerod.submitTxHex(tx.getFullHex(), true);
  
  // wait for spend to be seen
  await wait(WALLET_SYNC_PERIOD * 2); // TODO (woodser): need place for common test utilities
  
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
  
  // create bob's ethereum payment account
  let testAccount =  TEST_CRYPTO_ACCOUNTS[0];
  let ethPaymentAccount: PaymentAccount = await bob.createCryptoPaymentAccount(
      testAccount.currencyCode + " " +  testAccount.address.substr(0, 8) + "... " + GenUtils.getUUID(),
      testAccount.currencyCode,
      testAccount.address);
  
  // alice posts offer to buy xmr
  console.log("Alice posting offer");
  let offer: OfferInfo = await postOffer();
  console.log("Alice done posting offer");
  
  // bob sees offer
  await wait(WALLET_SYNC_PERIOD * 2);
  if (!getOffer(await bob.getOffers("buy"), offer.getId())) throw new Error("Offer " + offer.getId() + " was not found in peer's offers after posting");
  
  // bob takes offer
  let startTime = Date.now();
  let bobBalancesBefore: XmrBalanceInfo = await bob.getBalances();
  console.log("Bob taking offer");
  let trade: TradeInfo = await bob.takeOffer(offer.getId(), ethPaymentAccount.getId()); // TODO (woodser): this returns before trade is fully initialized. this fails with bad error message if trade is not yet seen by peer
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
  await wait(WALLET_SYNC_PERIOD);
  
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

/**
 * Open or create funding wallet.
 */
async function initFundingWallet() {
  
  // init client connected to monero-wallet-rpc
  fundingWallet = await monerojs.connectToWalletRpc(fundingWalletUrl, fundingWalletUsername, fundingWalletPassword);
  
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
      await fundingWallet.openWallet({path: defaultFundingWalletPath, password: fundingWalletPassword});
    } catch (e) {
      if (!(e instanceof monerojs.MoneroRpcError)) throw e;
      
      // -1 returned when wallet does not exist or fails to open e.g. it's already open by another application
      if (e.getCode() === -1) {
        
        // create wallet
        await fundingWallet.createWallet({path: defaultFundingWalletPath, password: fundingWalletPassword});
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
      else return await this._wallet.getPrimaryAddress();
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
    if (depositNeeded > BigInt("0") && wallet._wallet !== fundingWallet) fundConfig.addDestination(await wallet.getDepositAddress(), depositNeeded);
  }
  if (fundConfig.getDestinations()) {
    await waitForUnlockedBalance(minimumFunding, fundingWallet); // TODO (woodser): wait for enough to cover tx amount + fee
    try { await fundingWallet.createTx(fundConfig); }
    catch (err) { throw new Error("Error funding wallets: " + err.message); }
  }
  
  // done if all wallets have sufficient unlocked balance
  if (!miningNeeded) return;
  
  // wait for funds to unlock
  console.log("Mining for unlocked balance of " + amount);
  await startMining();
  let promises: Promise<void>[] = []
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
    await monerod.startMining(await fundingWallet.getPrimaryAddress(), 1);
  } catch (err) {
    if (err.message !== "Already mining") throw err;
  }
}

async function wait(durationMs: number) {
  return new Promise(function(resolve) { setTimeout(resolve, durationMs); });
}

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
  if (unlockedBalanceAfter === unlockedBalanceBefore) throw new Error("unlocked balance did not change after posting offer");
  
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
