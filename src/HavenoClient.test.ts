/*
 * Copyright Haveno
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


// --------------------------------- IMPORTS ----------------------------------

// haveno imports
import {
  HavenoClient,
  HavenoError,
  HavenoUtils,
  OfferDirection,
  MarketPriceInfo,
  NotificationMessage,
  OfferInfo,
  TradeInfo,
  UrlConnection,
  XmrBalanceInfo,
  Attachment,
  DisputeResult,
  PaymentMethod,
  PaymentAccount,
  PaymentAccountForm,
  PaymentAccountFormField,
  PaymentAccountPayload,
  XmrDestination,
  XmrNodeSettings,
  XmrTx,
  XmrIncomingTransfer,
  XmrOutgoingTransfer,
} from "./index";
import AuthenticationStatus = UrlConnection.AuthenticationStatus;
import OnlineStatus = UrlConnection.OnlineStatus;

// other imports
import fs from "fs";
import path from "path";
import net from "net";
import assert from "assert";
import console from "console"; // import console because jest swallows messages in real time
import moneroTs from "monero-ts";
import * as os from 'os';

// ------------------------------ TEST CONFIG ---------------------------------

enum BaseCurrencyNetwork {
    XMR_MAINNET = "XMR_MAINNET",
    XMR_STAGENET = "XMR_STAGENET",
    XMR_LOCAL = "XMR_LOCAL"
}

// clients
const startupHavenodUrls: string[] = [];
let arbitrator: HavenoClient;
let user1: HavenoClient;
let user2: HavenoClient;
let monerod: moneroTs.MoneroDaemon;
let fundingWallet: moneroTs.MoneroWalletRpc;
let user1Wallet: moneroTs.MoneroWalletRpc;
let user2Wallet: moneroTs.MoneroWalletRpc;

enum TradeRole {
  MAKER = "MAKER",
  TAKER = "TAKER",
}

enum SaleRole {
  BUYER = "BUYER",
  SELLER = "SELLER"
}

enum DisputeContext {
    NONE = "NONE",
    OPEN_AFTER_DEPOSITS_UNLOCK = "OPEN_AFTER_DEPOSITS_UNLOCK",
    OPEN_AFTER_PAYMENT_SENT = "OPEN_AFTER_PAYMENT_SENT"
}

/**
 * Test context for a single peer in a trade.
 */
class PeerContext {
  havenod?: HavenoClient;
  wallet?: moneroTs.MoneroWallet;
  trade?: TradeInfo;

  // context to test balances after trade
  balancesBeforeOffer?: XmrBalanceInfo;
  splitOutputTxFee?: bigint;
  balancesBeforeTake?: XmrBalanceInfo;
  balancesAfterTake?: XmrBalanceInfo;
  balancesBeforePayout?: XmrBalanceInfo;
  balancesAfterPayout?: XmrBalanceInfo;
  tradeFee?: bigint;
  depositTx?: moneroTs.MoneroTx;
  depositTxFee?: bigint;
  securityDepositActual?: bigint;
  payoutTxFee?: bigint;
  payoutAmount?: bigint;

  constructor(ctx?: Partial<PeerContext>) {
    Object.assign(this, ctx);
  }
}

/**
 * Default trade configuration.
 */
const defaultTradeConfig: Partial<TradeContext> = {
  arbitrator: new PeerContext(),
  maker: new PeerContext(),
  taker: new PeerContext(),
  makeOffer: true,
  takeOffer: true,
  awaitFundsToMakeOffer: true,
  direction: OfferDirection.BUY, // buy or sell xmr
  offerAmount: 193312996088n,
  offerMinAmount: undefined,
  assetCode: "usd", // counter asset to trade
  makerPaymentAccountId: undefined,
  securityDepositPct: 0.15,
  price: undefined, // use market price if undefined
  triggerPrice: undefined,
  awaitFundsToTakeOffer: true,
  offerId: undefined,
  takerPaymentAccountId: undefined,
  buyerSendsPayment: true,
  sellerReceivesPayment: true,
  buyerDisputeContext: DisputeContext.NONE,
  sellerDisputeContext: DisputeContext.NONE,
  resolveDispute: true, // resolve dispute after opening
  disputeWinner: DisputeResult.Winner.SELLER,
  disputeReason: DisputeResult.Reason.PEER_WAS_LATE,
  disputeSummary: "Seller is winner",
  walletSyncPeriodMs: 5000,
  maxTimePeerNoticeMs: 6000,
  testChatMessages: true,
  stopOnFailure: false, // TODO: setting to true can cause error: Http response at 400 or 500 level, http status code: 503
  testPayoutConfirmed: true,
  testPayoutUnlocked: false,
  maxConcurrency: getMaxConcurrency(),
  isPrivateOffer: false,
  buyerAsTakerWithoutDeposit: undefined
}

/**
 * Configuration and context for a single trade.
 */
class TradeContext {

  // trade peers
  arbitrator!: Partial<PeerContext>;
  maker!: Partial<PeerContext>;
  taker!: Partial<PeerContext>;

  // trade flow
  concurrentTrades?: boolean; // testing trades at same time
  makeOffer?: boolean;
  takeOffer?: boolean;
  buyerOfflineAfterTake?: boolean;
  sellerOfflineAfterTake?: boolean;
  buyerOfflineAfterPaymentSent?: boolean
  buyerOfflineAfterDisputeOpened?: boolean;
  sellerOfflineAfterDisputeOpened?: boolean;
  sellerDisputeContext?: DisputeContext;
  buyerDisputeContext?: DisputeContext;
  buyerSendsPayment?: boolean;
  sellerReceivesPayment?: boolean

  // make offer
  awaitFundsToMakeOffer?: boolean
  direction?: OfferDirection;
  paymentMethodId?: string;
  assetCode?: string;
  offerAmount?: bigint; // offer amount or max
  offerMinAmount?: bigint;
  tradeAmount?: bigint; // trade amount within offer range
  makerPaymentAccountId?: string;
  securityDepositPct?: number;
  price?: number;
  priceMargin?: number;
  triggerPrice?: number;
  reserveExactAmount?: boolean;
  isPrivateOffer?: boolean;
  buyerAsTakerWithoutDeposit?: boolean; // buyer as taker security deposit is optional for private offers
  extraInfo?: string;
  sourceOfferId?: string;

  // take offer
  awaitFundsToTakeOffer?: boolean;
  offerId?: string;
  takerPaymentAccountId?: string;
  challenge?: string;
  testTraderChat?: boolean;

  // resolve dispute
  resolveDispute?: boolean
  disputeOpener?: SaleRole;
  disputeWinner?: DisputeResult.Winner;
  disputeReason?: DisputeResult.Reason;
  disputeSummary?: string;
  disputeWinnerAmount?: bigint;

  // other context
  offer?: OfferInfo;
  index?: number;
  isOfferTaken?: boolean;
  isPaymentSent?: boolean;
  isPaymentReceived?: boolean;
  phase?: string;
  payoutState?: string[];
  disputeState?: string;
  isCompleted?: boolean;
  isPayoutPublished?: boolean; // TODO: test isDepositsPublished; etc
  isPayoutConfirmed?: boolean;
  isPayoutUnlocked?: boolean
  buyerOpenedDispute?: boolean;
  sellerOpenedDispute?: boolean;
  walletSyncPeriodMs!: number;
  maxTimePeerNoticeMs!: number;
  testChatMessages!: boolean;
  stopOnFailure?: boolean;
  buyerAppName?: string;
  sellerAppName?: string;
  usedPorts?: string[];
  testPayoutConfirmed?: boolean;
  testPayoutUnlocked?: boolean;
  payoutTxId?: string
  testBalanceChangeEndToEnd?: boolean;
  isStopped!: boolean;
  maxConcurrency!: number;

  constructor(ctx?: Partial<TradeContext>) {
    Object.assign(this, ctx);
    if (this.arbitrator) this.arbitrator = new PeerContext(this.arbitrator);
    if (this.maker) this.maker = new PeerContext(this.maker);
    if (this.taker) this.taker = new PeerContext(this.taker);
  }

  getMaker(): PeerContext {
    return this.maker as PeerContext;
  }

  getTaker(): PeerContext {
    return this.taker as PeerContext;
  }

  getBuyer(): PeerContext {
    return (this.direction === OfferDirection.BUY ? this.maker : this.taker) as PeerContext;
  }

  getSeller(): PeerContext {
    return (this.direction === OfferDirection.BUY ? this.taker : this.maker) as PeerContext;
  }

  isBuyerMaker(): boolean {
    return this.direction === OfferDirection.BUY;
  }

  wasDisputeOpened() {
    return this.buyerOpenedDispute || this.sellerOpenedDispute;
  }

  getDisputeOpener(): PeerContext | undefined {
    if (this.disputeOpener === undefined) return undefined;
    return this.disputeOpener === SaleRole.BUYER ? this.getBuyer() : this.getSeller();
  }

  getDisputePeer(): PeerContext | undefined {
    if (this.disputeOpener === undefined) return undefined;
    return this.disputeOpener === SaleRole.BUYER ? this.getSeller() : this.getBuyer();
  }

  getDisputeWinner(): PeerContext | undefined {
    if (this.disputeWinner === undefined) return undefined;
    return this.disputeWinner === DisputeResult.Winner.BUYER ? this.getBuyer() : this.getSeller();
  }

  getDisputeLoser(): PeerContext | undefined {
    if (this.disputeWinner === undefined) return undefined;
    return this.disputeWinner === DisputeResult.Winner.BUYER ? this.getSeller() : this.getBuyer();
  }

  isOfflineFlow() {
    return this.buyerOfflineAfterDisputeOpened || this.sellerOfflineAfterDisputeOpened || this.buyerOfflineAfterPaymentSent || this.buyerOfflineAfterTake || this.sellerOfflineAfterTake;
  }

  getPhase() {
    return this.isPaymentReceived ? "PAYMENT_RECEIVED" : this.isPaymentSent ? "PAYMENT_SENT" : "DEPOSITS_UNLOCKED";
  }

  hasBuyerAsTakerWithoutDeposit() {
    return this.getBuyer() === this.getTaker() && this.buyerAsTakerWithoutDeposit;
  }

  static init(ctxP: Partial<TradeContext> | undefined): TradeContext {
    let ctx = ctxP instanceof TradeContext ? ctxP : new TradeContext(ctxP);
    if (!ctx.offerAmount && ctx.tradeAmount) ctx.offerAmount = ctx.tradeAmount;
    if (!ctx.offerMinAmount && ctx.offerAmount) ctx.offerMinAmount = ctx.offerAmount;
    Object.assign(ctx, new TradeContext(TestConfig.trade), Object.assign({}, ctx));
    return ctx;
  }

  async toSummary(): Promise<string> {
    let str: string = "";
    str += "Type: Maker/" + (this.direction === OfferDirection.BUY ? "Buyer" : "Seller") + ", Taker/" + (this.direction === OfferDirection.BUY ? "Seller" : "Buyer");
    str += "\nOffer id: " + this.offerId;
    if (this.maker.havenod) str += "\nMaker uri: " + this.maker?.havenod?.getUrl();
    if (this.taker.havenod) str += "\nTaker uri: " + this.taker?.havenod?.getUrl();
    str += "\nAsset code: " + this.assetCode?.toUpperCase();
    str += "\nMaker payment account id: " + this.makerPaymentAccountId;
    str += "\nTaker payment account id: " + this.takerPaymentAccountId;
    str += "\nTrade amount: " + this.tradeAmount;
    str += "\nMin amount: " + this.offerMinAmount;
    str += "\nMax amount: " + this.offerAmount;
    str += "\nSecurity deposit percent: " + this.securityDepositPct;
    str += "\nMaker balance before offer: " + this.maker.balancesBeforeOffer?.getBalance();
    str += "\nMaker split output tx fee: " + this.maker.splitOutputTxFee;
    if (this.offer) {
      str += "\nMaker fee percent: " + this.offer!.getMakerFeePct();
      str += "\nTaker fee percent: " + this.offer!.getTakerFeePct();
    }
    if (this.arbitrator && this.arbitrator!.trade) {
      str += "\nMaker trade fee: " + this.arbitrator?.trade?.getMakerFee();
      str += "\nMaker deposit tx id: " + this.arbitrator!.trade!.getMakerDepositTxId();
      if (this.arbitrator!.trade!.getMakerDepositTxId()) {
        let tx = await monerod.getTx(this.arbitrator!.trade!.getMakerDepositTxId());
        str += "\nMaker deposit tx fee: " + (tx ? tx?.getFee() : undefined);
      }
      str += "\nMaker security deposit received: " + (this.direction == OfferDirection.BUY ? this.arbitrator!.trade!.getBuyerSecurityDeposit() : this.arbitrator!.trade!.getSellerSecurityDeposit());
    }
    str += "\nTaker balance before offer: " + this.taker.balancesBeforeOffer?.getBalance();
    if (this.arbitrator && this.arbitrator!.trade) {
      str += "\nTaker trade fee: " + this.arbitrator?.trade?.getTakerFee();
      str += "\nTaker deposit tx id: " + this.arbitrator!.trade!.getTakerDepositTxId();
      if (this.arbitrator!.trade!.getTakerDepositTxId()) {
        let tx = await monerod.getTx(this.arbitrator!.trade!.getTakerDepositTxId());
        str += "\nTaker deposit tx fee: " + (tx ? tx?.getFee() : undefined);
      }
      str += "\nTaker security deposit received: " + (this.direction == OfferDirection.BUY ? this.arbitrator!.trade!.getSellerSecurityDeposit() : this.arbitrator!.trade!.getBuyerSecurityDeposit());
      str += "\nBuyer dispute context: " + disputeContextToString(this.buyerDisputeContext);
      str += "\nSeller dispute context: " + disputeContextToString(this.sellerDisputeContext);
      if (this.disputeWinner) str += "\nDispute winner: " + (this.disputeWinner == DisputeResult.Winner.BUYER ? "Buyer" : "Seller");
      str += "\nPayout tx id: " + this.payoutTxId;
      if (this.payoutTxId) {
        str += "\nPayout fee: " + (await monerod.getTx(this.payoutTxId!))!.getFee()!;
        if (this.getBuyer().havenod) str += "\nBuyer payout: " + (await this.getBuyer().havenod!.getXmrTx(this.payoutTxId!))?.getIncomingTransfersList()[0].getAmount()!;
        if (this.getSeller().havenod) str += "\nSeller payout: " + (await this.getSeller().havenod!.getXmrTx(this.payoutTxId!))?.getIncomingTransfersList()[0].getAmount()!;
      }
    }
    str += "\nOffer json: " + JSON.stringify(this.offer?.toObject());
    return str;

    function disputeContextToString(disputeContext: DisputeContext | undefined): string {
      if (!disputeContext) return "undefined";
      return disputeContext === DisputeContext.NONE ? "NONE" : disputeContext === DisputeContext.OPEN_AFTER_DEPOSITS_UNLOCK ? "OPEN_AFTER_DEPOSITS_UNLOCK" : "OPEN_AFTER_PAYMENT_SENT";
    }
  }
}

/**
 * Default test configuration.
 */
const TestConfig = {
    logLevel: 2,
    baseCurrencyNetwork: getBaseCurrencyNetwork(),
    networkType: getBaseCurrencyNetwork() == BaseCurrencyNetwork.XMR_MAINNET ? moneroTs.MoneroNetworkType.MAINNET : getBaseCurrencyNetwork() == BaseCurrencyNetwork.XMR_LOCAL ? moneroTs.MoneroNetworkType.TESTNET : moneroTs.MoneroNetworkType.STAGENET,
    moneroBinsDir: "../haveno/.localnet",
    testDataDir: "./testdata",
    deferralMs: 25000,
    haveno: {
        path: "../haveno",
        version: "1.1.2"
    },
    monerod: {
        url: "http://127.0.0.1:" + getNetworkStartPort() + "8081", // 18081, 28081, 38081 for mainnet, testnet, and stagenet, respectively
        username: "",
        password: ""
    },
    monerod3: { // corresponds to monerod3-local in Makefile
        url: "http://127.0.0.1:58081",
        username: "superuser",
        password: "abctesting123",
        p2pBindPort: "58080",
        rpcBindPort: "58081",
        zmqRpcBindPort: "58082"
    },
    fundingWallet: {
        url: "http://127.0.0.1:" + getNetworkStartPort() + "8084", // 18084, 28084, 38084 for mainnet, testnet, stagenet respectively
        username: "rpc_user",
        password: "abc123",
        walletPassword: "abc123",
        defaultPath: "funding_wallet-" + getBaseCurrencyNetwork(),
        minimumFunding: 5000000000000n,
        seed: "origin hickory pavements tudor sizes hornet tether segments sack technical elbow unsafe legion nitrogen adapt yearbook idols fuzzy pitched goes tusks elbow erase fossil erase",
        primaryAddress: "9xSyMy1r9h3BVjMrF3CTqQCQy36yCfkpn7uVfMyTUbez3hhumqBUqGUNNALjcd7f1HJBRdeH82bCC3veFHW7z3xm28gug4d",
        restoreHeight: 150
    },
    defaultHavenod: {
        logProcessOutput: true, // log output for processes started by tests (except arbitrator, user1, and user2 which are configured separately)
        logLevel: "info",
        apiPassword: "apitest",
        walletUsername: "haveno_user",
        walletDefaultPassword: "password",
        accountPasswordRequired: true,
        accountPassword: "abctesting789",
        autoLogin: true
    },
    startupHavenods: [{
            appName: "haveno-" + getBaseCurrencyNetwork() + "_arbitrator", // arbritrator
            logProcessOutput: true,
            port: "8079",
            accountPasswordRequired: false,
            accountPassword: "abctesting123",
        }, {
            appName: "haveno-" + getBaseCurrencyNetwork() + "_user1", // user1
            logProcessOutput: true,
            port: "8080",
            accountPasswordRequired: false,
            accountPassword: "abctesting456",
            walletUrl: "http://127.0.0.1:38091",
        }, {
            appName: "haveno-" + getBaseCurrencyNetwork() + "_user2", // user2
            logProcessOutput: true,
            port: "8081",
            accountPasswordRequired: false,
            accountPassword: "abctesting789",
            walletUrl: "http://127.0.0.1:38092",
        }
    ],
    maxFee: HavenoUtils.xmrToAtomicUnits(0.5), // local testnet fees can be relatively high
    minSecurityDeposit: moneroTs.MoneroUtils.xmrToAtomicUnits(0.1),
    maxAdjustmentPct: 0.2,
    daemonPollPeriodMs: 5000,
    maxWalletStartupMs: 10000, // TODO (woodser): make shorter by switching to jni
    maxCpuPct: 0.25,
    paymentMethods: Object.keys(PaymentAccountForm.FormId), // all supported payment methods
    assetCodes: ["USD", "GBP", "EUR", "ETH", "BTC", "BCH", "LTC", "USDT-ERC20", "USDT-TRC20", "USDC-ERC20", "DAI-ERC20"],
    fixedPriceAssetCodes: ["XAG", "XAU", "XGB"],
    fixedPricePaymentMethods: [],
    cryptoAddresses: [{
            currencyCode: "ETH",
            address: "0xdBdAb835Acd6fC84cF5F9aDD3c0B5a1E25fbd99f"
        }, {
            currencyCode: "BTC",
            address: "1G457efxTyci67msm2dSqyhFzxPYFWaghe"
        }, {
            currencyCode: "BCH",
            address: "qz54ydhwzn25wzf8pge5s26udvtx33yhyq3lnv6vq6"
        }, {
            currencyCode: "LTC",
            address: "LXUTUN5mTPc2LsS7cEjkyjTRcfYyJGoUuQ"
        }, {
            currencyCode: "USDT-ERC20",
            address: "0x9Fc17f65060080491c09e879dE8C7cc6dC72Fed7"
        }, {
            currencyCode: "USDT-TRC20",
            address: "TVnmu3E6DYVL4bpAoZnPNEPVUrgC7eSWaX"
        }, {
            currencyCode: "USDC-ERC20",
            address: "0x1165cE9056620C9012D098103a08267e3c48B86B"
        }, {
            currencyCode: "DAI-ERC20",
            address: "0x3fDBeb7b074a42D7B5810488d4aAD5992097DF93"
        }
    ],
    ports: new Map<string, string[]>([ // map http ports to havenod api and p2p ports
        ["8079", ["9998", "4444"]],    // arbitrator
        ["8080", ["9999", "5555"]],    // user1
        ["8081", ["10000", "6666"]],   // user2
        ["8082", ["10001", "7777"]],
        ["8083", ["10002", "7778"]],
        ["8084", ["10003", "7779"]],
        ["8085", ["10004", "7780"]],
        ["8086", ["10005", "7781"]],
    ]),
    arbitratorPrivKeys: {
        XMR_LOCAL: ["6ac43ea1df2a290c1c8391736aa42e4339c5cb4f110ff0257a13b63211977b7a", "d96c4e7be030564cfa64a4040060574a8e92a79f574104ab8bb0c1166db28047", "6d5c86cbc5fc7ce3c97b06969661eae5c018cb2923856cc51341d182a45d1e9d"],
        XMR_STAGENET: ["1aa111f817b7fdaaec1c8d5281a1837cc71c336db09b87cf23344a0a4e3bb2cb", "6b5a404eb5ff7154f2357126c84c3becfe2e7c59ca3844954ce9476bec2a6228", "fd4ef301a2e4faa3c77bc26393919895fa29b0908f2bbd51f6f6de3e46fb7a6e"],
        XMR_MAINNET: []
    },
    tradeStepTimeoutMs: getBaseCurrencyNetwork() === BaseCurrencyNetwork.XMR_LOCAL ? 60000 : 180000,
    testTimeout: getBaseCurrencyNetwork() === BaseCurrencyNetwork.XMR_LOCAL ? 2400000 : 5400000, // timeout in ms for each test to complete (40 minutes for private network, 90 minutes for public network)
    trade: new TradeContext(defaultTradeConfig)
};

interface HavenodContext {
    logProcessOutput?: boolean,
    logLevel?: string,
    apiPassword?: string,
    walletUsername?: string,
    walletDefaultPassword?: string,
    accountPasswordRequired?: boolean,
    accountPassword?: string,
    autoLogin?: boolean,
    appName?: string,
    port?: string,
    excludePorts?: string[],
    walletUrl?: string
}

interface TxContext {
    isCreatedTx: boolean;
}

// track started haveno processes
const HAVENO_CLIENTS: HavenoClient[] = [];
const HAVENO_PROCESS_PORTS: string[] = [];
const HAVENO_WALLETS: Map<HavenoClient, any> = new Map<HavenoClient, any>();

// other config
const OFFLINE_ERR_MSG = "Http response at 400 or 500 level";

function getMaxConcurrency() {
  return isGitHubActions() ? 4 : 20;
}

function isGitHubActions() {
  return process.env.GITHUB_ACTIONS === 'true';
}

// -------------------------- BEFORE / AFTER TESTS ----------------------------

jest.setTimeout(TestConfig.testTimeout);

beforeEach(async () => {
  HavenoUtils.log(0, "BEFORE TEST \"" + expect.getState().currentTestName + "\"");
});

beforeAll(async () => {

  // set log level for tests
  HavenoUtils.setLogLevel(TestConfig.logLevel);

  // initialize funding wallet
  HavenoUtils.log(0, "Initializing funding wallet");
  await initFundingWallet();
  HavenoUtils.log(0, "Funding wallet balance: " + await fundingWallet.getBalance());
  HavenoUtils.log(0, "Funding wallet unlocked balance: " + await fundingWallet.getUnlockedBalance());
  const subaddress = await fundingWallet.createSubaddress(0);
  HavenoUtils.log(0, "Funding wallet height: " + await fundingWallet.getHeight());
  HavenoUtils.log(0, "Funding wallet seed: " + await fundingWallet.getSeed());
  HavenoUtils.log(0, "Funding wallet primary address: " + await fundingWallet.getPrimaryAddress());
  HavenoUtils.log(0, "Funding wallet new subaddress: " + subaddress.getAddress());

  // initialize monerod
  try {
    monerod = await moneroTs.connectToDaemonRpc(TestConfig.monerod.url, TestConfig.monerod.username, TestConfig.monerod.password);
    await mineToHeight(160); // initialize blockchain to latest block type
  } catch (err: any) {
    HavenoUtils.log(0, "Error initializing internal monerod: " + err.message); // allowed in order to test starting and stopping local node
  }

  // start configured haveno daemons
  const startupHavenods: HavenoClient[] = [];
  const promises: Promise<HavenoClient>[] = [];
  let err;
  for (const config of TestConfig.startupHavenods) promises.push(initHaveno(config));
  for (const settledPromise of await Promise.allSettled(promises)) {
    if (settledPromise.status === "fulfilled") {
      startupHavenods.push(settledPromise.value);
      startupHavenodUrls.push(settledPromise.value.getUrl());
    } else if (!err) {
      err = settledPromise.reason instanceof Error ? settledPromise.reason : new Error(String(settledPromise.reason));
    }
  }
  if (err) throw err;

  // assign arbitrator, user1, user2
  arbitrator = startupHavenods[0];
  user1 = startupHavenods[1];
  user2 = startupHavenods[2];
  TestConfig.trade.arbitrator.havenod = arbitrator;
  TestConfig.trade.maker.havenod = user1;
  TestConfig.trade.taker.havenod = user2;

  // connect client wallets
  user1Wallet = await moneroTs.connectToWalletRpc(TestConfig.startupHavenods[1].walletUrl!, TestConfig.defaultHavenod.walletUsername, TestConfig.defaultHavenod.walletDefaultPassword);
  user2Wallet = await moneroTs.connectToWalletRpc(TestConfig.startupHavenods[2].walletUrl!, TestConfig.defaultHavenod.walletUsername, TestConfig.defaultHavenod.walletDefaultPassword);

  // register arbitrator dispute agent
  await arbitrator.registerDisputeAgent("arbitrator", getArbitratorPrivKey(0));

  // create test data directory if it doesn't exist
  if (!fs.existsSync(TestConfig.testDataDir)) fs.mkdirSync(TestConfig.testDataDir);
});

afterEach(async () => {

  // collect unreleased clients
  const unreleasedClients: HavenoClient[] = [];
  for (const havenod of HAVENO_CLIENTS.slice()) {
    if (!moneroTs.GenUtils.arrayContains(startupHavenodUrls, havenod.getUrl())) {
      unreleasedClients.push(havenod);
    }
  }

  // release clients
  if (unreleasedClients.length > 0) {
    const promises: Promise<void>[] = [];
    HavenoUtils.log(0, unreleasedClients.length + " Haveno clients were not released after test \"" + expect.getState().currentTestName + "\", releasing...");
    for (const client of unreleasedClients) {
      HavenoUtils.log(0, "\tUnreleased Haveno client: " + client.getUrl());
      promises.push(releaseHavenoClient(client));
    }
    await Promise.all(promises);
    HavenoUtils.log(0, "Done releasing " + unreleasedClients.length + " unreleased Haveno clients");
  }
});

afterAll(async () => {
  await shutDown();
});

async function shutDown() {

  // release all clients
  const promises: Promise<void>[] = [];
  for (const client of HAVENO_CLIENTS.slice()) {
    promises.push(releaseHavenoClient(client));
  }
  await Promise.all(promises);

  // terminate monero-ts worker
  await moneroTs.LibraryUtils.terminateWorker();
}

// ----------------------------------- TESTS ----------------------------------

test("Can get the version (Test, CI)", async () => {
  const version = await arbitrator.getVersion();
  expect(version).toEqual(TestConfig.haveno.version);
});

test("Can convert between XMR and atomic units (Test, CI)", async () => {
  expect(BigInt(250000000000)).toEqual(HavenoUtils.xmrToAtomicUnits(0.25));
  expect(HavenoUtils.atomicUnitsToXmr("250000000000")).toEqual(.25);
  expect(HavenoUtils.atomicUnitsToXmr(250000000000n)).toEqual(.25);
});

test("Can manage an account (Test, CI)", async () => {
  let user3: HavenoClient|undefined;
  let err: any;
  try {

    // start user3 without opening account
    user3 = await initHaveno({autoLogin: false});
    assert(!await user3.accountExists());

    // test errors when account not open
    await testAccountNotOpen(user3);

    // create account
    let password = "testPassword";
    await user3.createAccount(password);
    if (await user3.isConnectedToMonero()) await user3.getBalances(); // only connected if local node running
    assert(await user3.accountExists());
    assert(await user3.isAccountOpen());

    // create payment account
    const paymentAccount = await user3.createCryptoPaymentAccount("My ETH account", TestConfig.cryptoAddresses[0].currencyCode, TestConfig.cryptoAddresses[0].address);

    // close account
    await user3.closeAccount();
    assert(await user3.accountExists());
    assert(!await user3.isAccountOpen());
    await testAccountNotOpen(user3);

    // open account with wrong password
    try {
        await user3.openAccount("wrongPassword");
        throw new Error("Should have failed opening account with wrong password");
    } catch (err: any) {
        assert.equal(err.message, "Incorrect password");
    }

    // open account
    await user3.openAccount(password);
    assert(await user3.accountExists());
    assert(await user3.isAccountOpen());

    // restart user3
    const user3Config = {appName: user3.getAppName(), autoLogin: false}
    await releaseHavenoProcess(user3);
    user3 = await initHaveno(user3Config);
    assert(await user3.accountExists());
    assert(!await user3.isAccountOpen());

    // open account
    await user3.openAccount(password);
    assert(await user3.accountExists());
    assert(await user3.isAccountOpen());

    // try changing incorrect password
    try {
      await user3.changePassword("wrongPassword", "abc123");
      throw new Error("Should have failed changing wrong password");
    } catch (err: any) {
      assert.equal(err.message, "Incorrect password");
    }

    // try setting password below minimum length
    try {
      await user3.changePassword(password, "abc123");
      throw new Error("Should have failed setting password below minimum length")
    } catch (err: any) {
      assert.equal(err.message, "Password must be at least 8 characters");
    }

    // change password
    const newPassword = "newPassword";
    await user3.changePassword(password, newPassword);
    password = newPassword;
    assert(await user3.accountExists());
    assert(await user3.isAccountOpen());

    // restart user3
    await releaseHavenoProcess(user3);
    user3 = await initHaveno(user3Config);
    await testAccountNotOpen(user3);

    // open account
    await user3.openAccount(password);
    assert(await user3.accountExists());
    assert(await user3.isAccountOpen());

    // backup account to zip file
    const zipFile = TestConfig.testDataDir + "/backup.zip";
    const stream = fs.createWriteStream(zipFile);
    const size = await user3.backupAccount(stream);
    stream.end();
    assert(size > 0);

    // delete account and wait until connected
    await user3.deleteAccount();
    HavenoUtils.log(1, "Waiting to be connected to havenod after deleting account"); // TODO: build this into deleteAccount
    do { await wait(1000); }
    while(!await user3.isConnectedToDaemon());
    HavenoUtils.log(1, "Reconnecting to havenod");
    assert(!await user3.accountExists());

    // restore account
    const zipBytes: Uint8Array = new Uint8Array(fs.readFileSync(zipFile));
    await user3.restoreAccount(zipBytes);
    do { await wait(1000); }
    while(!await user3.isConnectedToDaemon());
    assert(await user3.accountExists());

    // open restored account
    await user3.openAccount(password);
    assert(await user3.isAccountOpen());

    // check the persisted payment account
    const paymentAccount2 = await user3.getPaymentAccount(paymentAccount.getId());
    testCryptoPaymentAccountsEqual(paymentAccount, paymentAccount2);
  } catch (err2) {
    err = err2;
  }

  // stop and delete instances
  if (user3) await releaseHavenoProcess(user3, true);
  if (err) throw err;

  async function testAccountNotOpen(havenod: HavenoClient): Promise<void> { // TODO: generalize this?
    try { await havenod.getMoneroConnections(); throw new Error("Should have thrown"); }
    catch (err: any) { assert.equal(err.message, "Account not open"); }
    try { await havenod.getXmrTxs(); throw new Error("Should have thrown"); }
    catch (err: any) { assert.equal(err.message, "Account not open"); }
    try { await havenod.getBalances(); throw new Error("Should have thrown"); }
    catch (err: any) { assert.equal(err.message, "Account not open"); }
    try { await havenod.createCryptoPaymentAccount("My ETH account", TestConfig.cryptoAddresses[0].currencyCode, TestConfig.cryptoAddresses[0].address); throw new Error("Should have thrown"); }
    catch (err: any) { assert.equal(err.message, "Account not open"); }
  }
});

test("Can manage Monero daemon connections (Test, CI)", async () => {
  let monerod3: moneroTs.MoneroDaemonRpc | undefined = undefined;
  let user3: HavenoClient|undefined;
  let err: any;
  try {

    // start user3
    user3 = await initHaveno();

    // disable auto switch for tests
    assert.equal(true, await user3.getAutoSwitch());
    await user3.setAutoSwitch(false);

    // test default connections
    const monerodUrl1 = "http://127.0.0.1:" + getNetworkStartPort() + "8081"; // TODO: (woodser): move to config
    let connections: UrlConnection[] = await user3.getMoneroConnections();
    testConnection(getConnection(connections, monerodUrl1)!, monerodUrl1, OnlineStatus.ONLINE, AuthenticationStatus.AUTHENTICATED, 1);

    // test default connection
    let connection: UrlConnection|undefined = await user3.getMoneroConnection();
    assert(await user3.isConnectedToMonero());
    testConnection(connection!, monerodUrl1, OnlineStatus.ONLINE, AuthenticationStatus.AUTHENTICATED, 1); // TODO: should be no authentication?

    // add a new connection
    const fooBarUrl = "http://foo.bar";
    await user3.addMoneroConnection(fooBarUrl);
    connections = await user3.getMoneroConnections();
    connection = getConnection(connections, fooBarUrl);
    testConnection(connection!, fooBarUrl, OnlineStatus.UNKNOWN, AuthenticationStatus.NO_AUTHENTICATION, 0);

    // set prioritized connection without credentials
    await user3.setMoneroConnection(new UrlConnection()
        .setUrl(TestConfig.monerod3.url)
        .setPriority(1));
    connection = await user3.getMoneroConnection();
    testConnection(connection!, TestConfig.monerod3.url, undefined, undefined, 1); // status may or may not be known due to periodic connection checking

    // connection is offline
    connection = await user3.checkMoneroConnection();
    assert(!await user3.isConnectedToMonero());
    testConnection(connection!, TestConfig.monerod3.url, OnlineStatus.OFFLINE, AuthenticationStatus.NO_AUTHENTICATION, 1);

    // start monerod3
    const cmd = [
      TestConfig.moneroBinsDir + "/monerod",
      "--no-igd",
      "--hide-my-port",
      "--data-dir",  TestConfig.moneroBinsDir + "/" + TestConfig.baseCurrencyNetwork.toLowerCase() + "/node3",
      "--p2p-bind-ip", "127.0.0.1",
      "--p2p-bind-port", TestConfig.monerod3.p2pBindPort,
      "--rpc-bind-port", TestConfig.monerod3.rpcBindPort,
      "--zmq-rpc-bind-port", TestConfig.monerod3.zmqRpcBindPort,
      "--log-level", "0",
      "--confirm-external-bind",
      "--rpc-access-control-origins", "http://127.0.0.1:8080",
      "--fixed-difficulty", "500",
      "--disable-rpc-ban",
      "--rpc-max-connections-per-private-ip", "100",
      "--max-connections-per-ip", "10"
    ];
    if (getBaseCurrencyNetwork() !== BaseCurrencyNetwork.XMR_MAINNET) cmd.push("--" + moneroTs.MoneroNetworkType.toString(TestConfig.networkType).toLowerCase());
    if (TestConfig.monerod3.username) cmd.push("--rpc-login", TestConfig.monerod3.username + ":" + TestConfig.monerod3.password);
    monerod3 = await moneroTs.connectToDaemonRpc(cmd);

    // connection is online and not authenticated
    connection = await user3.checkMoneroConnection();
    assert(!await user3.isConnectedToMonero());
    testConnection(connection!, TestConfig.monerod3.url, OnlineStatus.ONLINE, AuthenticationStatus.NOT_AUTHENTICATED, 1);

    // set connection credentials
    await user3.setMoneroConnection(new UrlConnection()
        .setUrl(TestConfig.monerod3.url)
        .setUsername(TestConfig.monerod3.username)
        .setPassword(TestConfig.monerod3.password)
        .setPriority(1));
    connection = await user3.getMoneroConnection();
    testConnection(connection!, TestConfig.monerod3.url, undefined, undefined, 1);

    // connection is online and authenticated
    connection = await user3.checkMoneroConnection();
    assert(await user3.isConnectedToMonero());
    testConnection(connection!, TestConfig.monerod3.url, OnlineStatus.ONLINE, AuthenticationStatus.AUTHENTICATED, 1);

    // change account password
    const newPassword = "newPassword";
    await user3.changePassword(TestConfig.defaultHavenod.accountPassword, newPassword);

    // restart user3
    const appName = user3.getAppName();
    await releaseHavenoProcess(user3);
    user3 = await initHaveno({appName: appName, accountPassword: newPassword});

    // connection is restored, online, and authenticated
    await user3.checkMoneroConnection();
    connection = await user3.getMoneroConnection();
    testConnection(connection!, TestConfig.monerod3.url, OnlineStatus.ONLINE, AuthenticationStatus.AUTHENTICATED, 1);

    // priority connections are polled
    await user3.checkMoneroConnections();
    connections = await user3.getMoneroConnections();
    testConnection(getConnection(connections, monerodUrl1)!, monerodUrl1, OnlineStatus.ONLINE, AuthenticationStatus.AUTHENTICATED, 1);

    // enable auto switch
    await user3.setAutoSwitch(true);
    assert.equal(true, await user3.getAutoSwitch());

    // stop monerod
    //await monerod3.stopProcess(); // TODO (monero-ts): monerod remains available after await monerod.stopProcess() for up to 40 seconds
    await moneroTs.GenUtils.killProcess(monerod3.getProcess(), "SIGKILL");

    // test auto switch after periodic connection check
    await wait(TestConfig.daemonPollPeriodMs * 2);
    await user3.checkMoneroConnection();
    connection = await user3.getMoneroConnection();
    testConnection(connection!, monerodUrl1, OnlineStatus.ONLINE, AuthenticationStatus.AUTHENTICATED, 1);

    // stop auto switch and checking connection periodically
    await user3.setAutoSwitch(false);
    assert.equal(false, await user3.getAutoSwitch());
    await user3.stopCheckingConnection();

    // remove current connection
    await user3.removeMoneroConnection(monerodUrl1);

    // check current connection
    connection = await user3.checkMoneroConnection();
    assert.equal(connection, undefined);

    // check all connections
    await user3.checkMoneroConnections();
    connections = await user3.getMoneroConnections();
    testConnection(getConnection(connections, fooBarUrl)!, fooBarUrl, OnlineStatus.OFFLINE, AuthenticationStatus.NO_AUTHENTICATION, 0);

    // set connection to previous url
    await user3.setMoneroConnection(fooBarUrl);
    connection = await user3.getMoneroConnection();
    testConnection(connection!, fooBarUrl, OnlineStatus.OFFLINE, AuthenticationStatus.NO_AUTHENTICATION, 0);

    // set connection to new url
    const fooBarUrl2 = "http://foo.bar.xyz";
    await user3.setMoneroConnection(fooBarUrl2);
    connections = await user3.getMoneroConnections();
    connection = getConnection(connections, fooBarUrl2);
    testConnection(connection!, fooBarUrl2, OnlineStatus.UNKNOWN, AuthenticationStatus.NO_AUTHENTICATION, 0);

    // reset connection
    await user3.setMoneroConnection();
    assert.equal(await user3.getMoneroConnection(), undefined);

    // test auto switch after start checking connection
    await user3.setAutoSwitch(false);
    await user3.startCheckingConnection(5000); // checks the connection
    await user3.setAutoSwitch(true);
    await user3.addMoneroConnection(new UrlConnection()
            .setUrl(TestConfig.monerod.url)
            .setUsername(TestConfig.monerod.username)
            .setPassword(TestConfig.monerod.password)
            .setPriority(2));
    await wait(10000);
    connection = await user3.getMoneroConnection();
    testConnection(connection!, TestConfig.monerod.url, OnlineStatus.ONLINE, AuthenticationStatus.AUTHENTICATED, 2);
  } catch (err2) {
    err = err2;
  }

  // stop processes
  if (user3) await releaseHavenoProcess(user3, true);
  if (monerod3) await monerod3.stopProcess();
  if (err) throw err;
});

// NOTE: To run full test, the following conditions must be met:
// - monerod1-local must be stopped
// - monerod2-local must be running
// - user1-daemon-local must be running and own its monerod process (so it can be stopped)
test("Can start and stop a local Monero node (Test, CI)", async() => {

  // expect error stopping stopped local node
  try {
    await user1.stopMoneroNode();
    HavenoUtils.log(1, "Running local Monero node stopped");
    await user1.stopMoneroNode(); // stop 2nd time to force error
    throw new Error("should have thrown");
  } catch (err: any) {
    if (err.message !== "Local Monero node is not running" &&
        err.message !== "Cannot stop local Monero node because we don't own its process") {
      throw new Error("Unexpected error: " + err.message);
    }
  }

  if (await user1.isMoneroNodeOnline()) {
    HavenoUtils.log(0, "Warning: local Monero node is already running, skipping start and stop local Monero node tests");

    // expect error due to existing running node
    const newSettings = new XmrNodeSettings();
    try {
      await user1.startMoneroNode(newSettings);
      throw new Error("should have thrown");
    } catch (err: any) {
      if (err.message !== "Local Monero node already online") throw new Error("Unexpected error: " + err.message);
    }

  } else {

    // expect error when passing in bad arguments
    const badSettings = new XmrNodeSettings();
    badSettings.setStartupFlagsList(["--invalid-flag"]);
    try {
      await user1.startMoneroNode(badSettings);
      throw new Error("should have thrown");
    } catch (err: any) {
      if (!err.message.startsWith("Failed to start monerod:")) throw new Error("Unexpected error: ");
    }

    // expect successful start with custom settings
    const connectionsBefore = await user1.getMoneroConnections();
    const settings: XmrNodeSettings = new XmrNodeSettings();
    const dataDir = TestConfig.moneroBinsDir + "/" + TestConfig.baseCurrencyNetwork.toLowerCase() + "/node1";
    const logFile = dataDir + "/test.log";
    settings.setBlockchainPath(dataDir);
    settings.setStartupFlagsList(["--log-file", logFile, "--no-zmq"]);
    await user1.startMoneroNode(settings);
    assert(await user1.isMoneroNodeOnline());

    // expect settings are updated
    const settingsAfter = await user1.getMoneroNodeSettings();
    testMoneroNodeSettingsEqual(settings, settingsAfter!);

    // expect connection to local monero node to succeed
    let daemon = await moneroTs.connectToDaemonRpc(TestConfig.monerod.url, "superuser", "abctesting123");
    let height = await daemon.getHeight();
    assert(height > 0);

    // expect error due to existing running node
    const newSettings = new XmrNodeSettings();
    try {
      await user1.startMoneroNode(newSettings);
      throw new Error("should have thrown");
    } catch (err: any) {
      if (err.message !== "Local Monero node already online") throw new Error("Unexpected error: " + err.message);
    }

    // expect stopped node
    await user1.stopMoneroNode();
    assert(!(await user1.isMoneroNodeOnline()));
    try {
      daemon = await moneroTs.connectToDaemonRpc(TestConfig.monerod.url);
      height = await daemon.getHeight();
      console.log("GOT HEIGHT: " + height);
      throw new Error("should have thrown"); 
    } catch (err: any) {
      if (err.message.indexOf("connect ECONNREFUSED 127.0.0.1:28081") <= 0) throw new Error("Unexpected error: " + err.message);
    }

    // start local node again
    await user1.startMoneroNode(settings);
    assert(await user1.isMoneroNodeOnline());
  }
});

// test wallet balances, transactions, deposit addresses, create and relay txs
test("Has a Monero wallet (Test, CI)", async () => {

  // get seed phrase
  const seed = await user1.getXmrSeed();
  await moneroTs.MoneroUtils.validateMnemonic(seed);

  // get primary address
  const primaryAddress = await user1.getXmrPrimaryAddress();
  await moneroTs.MoneroUtils.validateAddress(primaryAddress, TestConfig.networkType);

  // wait for user1 to have unlocked balance
  const tradeAmount = 250000000000n;
  await waitForAvailableBalance(tradeAmount * 2n, user1);

  // test balances
  const balancesBefore: XmrBalanceInfo = await user1.getBalances(); // TODO: rename to getXmrBalances() for consistency?
  expect(BigInt(balancesBefore.getAvailableBalance())).toBeGreaterThan(0n);
  expect(BigInt(balancesBefore.getBalance())).toBeGreaterThanOrEqual(BigInt(balancesBefore.getAvailableBalance()));

  // get transactions
  const txs: XmrTx[]= await user1.getXmrTxs();
  assert(txs.length > 0);
  for (const tx of txs) {
    testTx(tx, {isCreatedTx: false});
  }

  // get new subaddresses
  for (let i = 0; i < 0; i++) {
    const address = await user1.getXmrNewSubaddress();
    await moneroTs.MoneroUtils.validateAddress(address, TestConfig.networkType);
  }

  // create withdraw tx
  const destination = new XmrDestination().setAddress(await user1.getXmrNewSubaddress()).setAmount("100000000000");
  let tx: XmrTx|undefined = await user1.createXmrTx([destination]);
  testTx(tx, {isCreatedTx: true});

  // relay withdraw tx
  const txHash = (await user1.relayXmrTxs([tx.getMetadata()]))[0];
  expect(txHash.length).toEqual(64);
  await wait(TestConfig.trade.walletSyncPeriodMs * 2); // wait for wallet to sync relayed tx

  // balances decreased
  const balancesAfter = await user1.getBalances();
  expect(BigInt(balancesAfter.getBalance())).toBeLessThan(BigInt(balancesBefore.getBalance()));
  expect(BigInt(balancesAfter.getAvailableBalance())).toBeLessThan(BigInt(balancesBefore.getAvailableBalance()));

  // get relayed tx
  tx = await user1.getXmrTx(txHash);
  testTx(tx!, {isCreatedTx: false});

  // relay invalid tx
  try {
    await user1.relayXmrTxs(["invalid tx metadata"]);
    throw new Error("Cannot relay invalid tx metadata");
  } catch (err: any) {
    if (err.message !== "Failed to parse hex.") throw new Error("Unexpected error: " + err.message);
  }

  // create sweep txs
  let sweepTxs = await user1.createXmrSweepTxs(await user1.getXmrNewSubaddress());
  assert(sweepTxs.length > 0);
  for (const sweepTx of sweepTxs) {
    testTx(sweepTx, {isCreatedTx: true});
  }
});

test("Can get balances (Test, CI, sanity check)", async () => {
  const balances: XmrBalanceInfo = await user1.getBalances();
  expect(BigInt(balances.getAvailableBalance())).toBeGreaterThanOrEqual(0);
  expect(BigInt(balances.getPendingBalance())).toBeGreaterThanOrEqual(0);
  expect(BigInt(balances.getReservedOfferBalance())).toBeGreaterThanOrEqual(0);
  expect(BigInt(balances.getReservedTradeBalance())).toBeGreaterThanOrEqual(0);
});

test("Can send and receive push notifications (Test, CI, sanity check)", async () => {

  // add notification listener
  const notifications: NotificationMessage[] = [];
  await user1.addNotificationListener(notification => {
    notifications.push(notification);
  });

  // send test notification
  for (let i = 0; i < 3; i++) {
    await user1._sendNotification(new NotificationMessage()
        .setTimestamp(Date.now())
        .setTitle("Test title " + i)
        .setMessage("Test message " + i));
  }

  // test notification
  await wait(1000);
  assert(notifications.length >= 3);
  for (let i = 0; i < 3; i++) {
    assert(notifications[i].getTimestamp() > 0);
    assert.equal(notifications[i].getTitle(), "Test title " + i);
    assert.equal(notifications[i].getMessage(), "Test message " + i);
  }
});

test("Can get asset codes with prices and their payment methods (Test, CI, sanity check)", async() => {
  const assetCodes = await user1.getPricedAssetCodes();
  for (const assetCode of assetCodes) {
    const paymentMethods = await user1.getPaymentMethods(assetCode);
    expect(paymentMethods.length).toBeGreaterThanOrEqual(0);
  }
});

test("Can get market prices (Test, CI, sanity check)", async () => {

  // get all market prices
  const prices: MarketPriceInfo[] = await user1.getPrices();
  expect(prices.length).toBeGreaterThan(1);
  for (const price of prices) {
    expect(price.getCurrencyCode().length).toBeGreaterThan(0);
    expect(price.getPrice()).toBeGreaterThanOrEqual(0);
  }

  // get market prices of primary assets
  for (const assetCode of TestConfig.assetCodes) {
    const price = await user1.getPrice(assetCode);
    expect(price).toBeGreaterThan(0);
  }

  // test that prices are reasonable
  const usd = await user1.getPrice("USD");
  expect(usd).toBeGreaterThan(50);
  expect(usd).toBeLessThan(5000);
  const ltc = await user1.getPrice("LTC");
  expect(ltc).toBeGreaterThan(0.0004);
  expect(ltc).toBeLessThan(40);
  const btc = await user1.getPrice("BTC");
  expect(btc).toBeGreaterThan(0.0004);
  expect(btc).toBeLessThan(0.4);

  // test invalid currency
  expect(await user1.getPrice("INVALID_CURRENCY")).toEqual(undefined);
});

test("Can get market depth (Test, CI, sanity check)", async () => {
    const assetCode = "eth";

    // clear offers
    await clearOffers(user1, assetCode);
    await clearOffers(user2, assetCode);
    async function clearOffers(havenod: HavenoClient, assetCode: string) {
      for (const offer of await havenod.getMyOffers(assetCode)) {
        if (offer.getCounterCurrencyCode().toLowerCase() === assetCode.toLowerCase()) {
            await havenod.removeOffer(offer.getId());
        }
      }
    }

    // market depth has no data
    await wait(TestConfig.trade.maxTimePeerNoticeMs);
    let marketDepth = await user1.getMarketDepth(assetCode);
    expect(marketDepth.getBuyPricesList().length).toEqual(0);
    expect(marketDepth.getBuyDepthList().length).toEqual(0);
    expect(marketDepth.getSellPricesList().length).toEqual(0);
    expect(marketDepth.getSellDepthList().length).toEqual(0);

    // post offers to buy and sell
    await makeOffer({maker: {havenod: user1}, direction: OfferDirection.BUY, offerAmount: 150000000000n, assetCode: assetCode, price: 17.0});
    await makeOffer({maker: {havenod: user1}, direction: OfferDirection.BUY, offerAmount: 150000000000n, assetCode: assetCode, price: 17.2});
    await makeOffer({maker: {havenod: user1}, direction: OfferDirection.BUY, offerAmount: 200000000000n, assetCode: assetCode, price: 17.3});
    await makeOffer({maker: {havenod: user1}, direction: OfferDirection.BUY, offerAmount: 150000000000n, assetCode: assetCode, price: 17.3});
    await makeOffer({maker: {havenod: user1}, direction: OfferDirection.SELL, offerAmount: 300000000000n, assetCode: assetCode, priceMargin: 0.00});
    await makeOffer({maker: {havenod: user1}, direction: OfferDirection.SELL, offerAmount: 300000000000n, assetCode: assetCode, priceMargin: 0.02});
    await makeOffer({maker: {havenod: user1}, direction: OfferDirection.SELL, offerAmount: 400000000000n, assetCode: assetCode, priceMargin: 0.05});

    // get user2's market depth
    await wait(TestConfig.trade.maxTimePeerNoticeMs);
    marketDepth = await user2.getMarketDepth(assetCode);

    // each unique price has a depth
    expect(marketDepth.getBuyPricesList().length).toEqual(3);
    expect(marketDepth.getSellPricesList().length).toEqual(3);
    expect(marketDepth.getBuyPricesList().length).toEqual(marketDepth.getBuyDepthList().length);
    expect(marketDepth.getSellPricesList().length).toEqual(marketDepth.getSellDepthList().length);

    // test buy prices and depths
    const buyOffers = (await user2.getOffers(assetCode, OfferDirection.BUY)).concat(await user2.getMyOffers(assetCode, OfferDirection.BUY)).sort(function(a, b) { return parseFloat(a.getPrice()) - parseFloat(b.getPrice()) });
    expect(marketDepth.getBuyPricesList()[0]).toEqual(parseFloat(buyOffers[2].getPrice()));
    expect(marketDepth.getBuyPricesList()[1]).toEqual(parseFloat(buyOffers[1].getPrice()));
    expect(marketDepth.getBuyPricesList()[2]).toEqual(parseFloat(buyOffers[0].getPrice()));
    expect(marketDepth.getBuyDepthList()[0]).toEqual(0.35);
    expect(marketDepth.getBuyDepthList()[1]).toEqual(0.5);
    expect(marketDepth.getBuyDepthList()[2]).toEqual(0.65);

    // test sell prices and depths
    const sellOffers = (await user2.getOffers(assetCode, OfferDirection.SELL)).concat(await user2.getMyOffers(assetCode, OfferDirection.SELL)).sort(function(a, b) { return parseFloat(b.getPrice()) - parseFloat(a.getPrice()) });
    expect(marketDepth.getSellPricesList()[0]).toEqual(parseFloat(sellOffers[2].getPrice()));
    expect(marketDepth.getSellPricesList()[1]).toEqual(parseFloat(sellOffers[1].getPrice()));
    expect(marketDepth.getSellPricesList()[2]).toEqual(parseFloat(sellOffers[0].getPrice()));
    expect(marketDepth.getSellDepthList()[0]).toEqual(0.3);
    expect(marketDepth.getSellDepthList()[1]).toEqual(0.6);
    expect(marketDepth.getSellDepthList()[2]).toEqual(1);

    // clear offers
    await clearOffers(user1, assetCode);
    await clearOffers(user2, assetCode);

    // test invalid currency
    await expect(async () => {await user1.getMarketDepth("INVALID_CURRENCY")})
        .rejects
        .toThrow('Currency not found: INVALID_CURRENCY');
});

test("Can register as an arbitrator (Test, CI)", async () => {

  // test bad dispute agent type
  try {
    await arbitrator.registerDisputeAgent("unsupported type", getArbitratorPrivKey(0));
    throw new Error("should have thrown error registering bad type");
  } catch (err: any) {
    if (err.message !== "unknown dispute agent type 'unsupported type'") throw new Error("Unexpected error: " + err.message);
  }

  // test bad key
  try {
    await arbitrator.registerDisputeAgent("mediator", "bad key");
    throw new Error("should have thrown error registering bad key");
  } catch (err: any) {
    if (err.message !== "invalid registration key") throw new Error("Unexpected error: " + err.message);
  }

  // register arbitrator with good key
  await arbitrator.registerDisputeAgent("arbitrator", getArbitratorPrivKey(0));
});

test("Can get offers (Test, CI)", async () => {
  for (const assetCode of TestConfig.assetCodes) {
    const offers: OfferInfo[] = await user1.getOffers(assetCode);
    for (const offer of offers) testOffer(offer);
  }
});

test("Can get my offers (Test, CI)", async () => {

  // get all offers
  const offers: OfferInfo[] = await user1.getMyOffers();
  for (const offer of offers) testOffer(offer);

  // get offers by asset code
  for (const assetCode of TestConfig.assetCodes) {
    const offers: OfferInfo[] = await user1.getMyOffers(assetCode);
    for (const offer of offers) {
      testOffer(offer, undefined, true);
      expect(assetCode).toEqual(offer.getCounterCurrencyCode());
    }
  }
});

test("Can get payment methods (Test, CI)", async () => {
  const paymentMethods: PaymentMethod[] = await user1.getPaymentMethods();
  expect(paymentMethods.length).toBeGreaterThan(0);
  for (const paymentMethod of paymentMethods) {
    expect(paymentMethod.getId().length).toBeGreaterThan(0);
    expect(BigInt(paymentMethod.getMaxTradeLimit())).toBeGreaterThan(0n);
    expect(BigInt(paymentMethod.getMaxTradePeriod())).toBeGreaterThan(0n);
    expect(paymentMethod.getSupportedAssetCodesList().length).toBeGreaterThanOrEqual(0);
  }
});

test("Can get payment accounts (Test, CI)", async () => {
  const paymentAccounts: PaymentAccount[] = await user1.getPaymentAccounts();
  for (const paymentAccount of paymentAccounts) {
    if (paymentAccount.getPaymentAccountPayload()!.getCryptoCurrencyAccountPayload()) { // TODO (woodser): test non-crypto
      testCryptoPaymentAccount(paymentAccount, false);
    } else if (paymentAccount.getPaymentAccountPayload()!.getInstantCryptoCurrencyAccountPayload()) {
      testCryptoPaymentAccount(paymentAccount, true);
    }
  }
});

// TODO: FieldId represented as number
test("Can validate payment account forms (Test, CI, sanity check)", async () => {

  // get payment methods
  const paymentMethods = await user1.getPaymentMethods();
  expect(paymentMethods.length).toEqual(TestConfig.paymentMethods.length);
  for (const paymentMethod of paymentMethods) {
    assert(moneroTs.GenUtils.arrayContains(TestConfig.paymentMethods, paymentMethod.getId()), "Payment method is not expected: " + paymentMethod.getId());
  }

  // test form for each payment method
  for (const paymentMethod of paymentMethods) {

    // generate form
    const accountForm = await user1.getPaymentAccountForm(paymentMethod.getId());

    // complete form, validating each field
    for (const field of accountForm.getFieldsList()) {

      // validate invalid form field
      const invalidInput = getInvalidFormInput(accountForm, field.getId());
      if (invalidInput !== undefined) {
        try {
          await user1.validateFormField(accountForm, field.getId(), invalidInput);
          throw new Error("Should have thrown error validating form field '" + field.getId() + "' with invalid value '" + invalidInput + "'");
        } catch (err: any) {
          if (err.message.indexOf("Not implemented") >= 0) throw err;
          if (err.message.indexOf("Should have thrown") >= 0) throw err;
        }
      }

      // validate valid form field
      const validInput = getValidFormInput(accountForm, field.getId(), user1);
      await user1.validateFormField(accountForm, field.getId(), validInput);
      field.setValue(validInput);
    }

    // create payment account
    const paymentAccount = await user1.createPaymentAccount(accountForm);

    // payment account added
    let found = false;
    for (const userAccount of await user1.getPaymentAccounts()) {
      if (paymentAccount.getId() === userAccount.getId()) {
        found = true;
        break;
      }
    }
    assert(found, "Payment account not found after adding");

    // test payment account
    expect(paymentAccount.getPaymentMethod()!.getId()).toEqual(paymentMethod.getId());
    testPaymentAccount(paymentAccount, accountForm);

    // convert to payment account payload form
    const accountPayloadForm = await user1.getPaymentAccountPayloadForm(paymentAccount.getPaymentAccountPayload()!);
    expect(accountPayloadForm.toObject()).toBeDefined();

    // delete payment account
    // await user1.deletePaymentAccount(paymentAccount.getId()); // TODO: support deleting payment accounts over grpc
  }
});

test("Can create fiat payment accounts (Test, CI)", async () => {

  // get payment account form
  const paymentMethodId = HavenoUtils.getPaymentMethodId(PaymentAccountForm.FormId.REVOLUT);
  const accountForm = await user1.getPaymentAccountForm(paymentMethodId);

  // edit form
  HavenoUtils.setFormValue(accountForm, PaymentAccountFormField.FieldId.ACCOUNT_NAME, "Revolut account " + moneroTs.GenUtils.getUUID());
  HavenoUtils.setFormValue(accountForm, PaymentAccountFormField.FieldId.USERNAME, "user123");
  HavenoUtils.setFormValue(accountForm, PaymentAccountFormField.FieldId.TRADE_CURRENCIES, "gbp,eur,usd");

  // create payment account
  const fiatAccount = await user1.createPaymentAccount(accountForm);
  expect(fiatAccount.getAccountName()).toEqual(HavenoUtils.getFormValue(accountForm, PaymentAccountFormField.FieldId.ACCOUNT_NAME));
  expect(fiatAccount.getSelectedTradeCurrency()!.getCode()).toEqual("USD");
  expect(fiatAccount.getTradeCurrenciesList().length).toBeGreaterThan(0);
  expect(fiatAccount.getPaymentAccountPayload()!.getPaymentMethodId()).toEqual(paymentMethodId);
  expect(fiatAccount.getPaymentAccountPayload()!.getRevolutAccountPayload()!.getUsername()).toEqual(HavenoUtils.getFormValue(accountForm, PaymentAccountFormField.FieldId.USERNAME));

  // payment account added
  let found = false;
  for (const paymentAccount of await user1.getPaymentAccounts()) {
    if (paymentAccount.getId() === fiatAccount.getId()) {
      found = true;
      break;
    }
  }
  assert(found, "Payment account not found after adding");

  // delete payment account
  await user1.deletePaymentAccount(fiatAccount.getId());

  // no longer has payment account
  try {
    await user1.getPaymentAccount(fiatAccount.getId());
    throw new Error("Should have thrown error getting deleted payment account");
  } catch (err: any) {
    if (err.message.indexOf("Should have thrown") >= 0) throw err;
  }
});

test("Can create crypto payment accounts (Test, CI)", async () => {
  await testCryptoPaymentAccounts(false);
  await testCryptoPaymentAccounts(true);
});

async function testCryptoPaymentAccounts(instant: boolean) {

  // test each crypto
  for (const testAccount of TestConfig.cryptoAddresses) {

    // create payment account
    const name = testAccount.currencyCode + " " + testAccount.address.substr(0, 8) + "... " + moneroTs.GenUtils.getUUID();
    const paymentAccount: PaymentAccount = await user1.createCryptoPaymentAccount(name, testAccount.currencyCode, testAccount.address, instant);
    testCryptoPaymentAccount(paymentAccount, instant);
    testCryptoPaymentAccountEquals(paymentAccount, testAccount, name, instant);

    // fetch and test payment account
    let fetchedAccount: PaymentAccount|undefined;
    for (const account of await user1.getPaymentAccounts()) {
      if (paymentAccount.getId() === account.getId()) {
        fetchedAccount = account;
        break;
      }
    }
    if (!fetchedAccount) throw new Error("Payment account not found after being added");
    testCryptoPaymentAccount(paymentAccount, instant);
    testCryptoPaymentAccountEquals(fetchedAccount, testAccount, name, instant);

    // delete payment account
    await user1.deletePaymentAccount(paymentAccount.getId());

    // no longer has payment account
    try {
      await user1.getPaymentAccount(paymentAccount.getId());
      throw new Error("Should have thrown error getting deleted payment account");
    } catch (err: any) {
      if (err.message.indexOf("Should have thrown") >= 0) throw err;
    }
  }

  // test invalid currency code
  await expect(async () => { await user1.createCryptoPaymentAccount("My first account", "ABC", "123", instant); })
      .rejects
      .toThrow("crypto currency with code 'abc' not found");

  // test invalid address
  await expect(async () => { await user1.createCryptoPaymentAccount("My second account", "ETH", "123", instant); })
      .rejects
      .toThrow('123 is not a valid eth address');

  // test address duplicity
  let uid = "Unique account name " + moneroTs.GenUtils.getUUID();
  await user1.createCryptoPaymentAccount(uid, TestConfig.cryptoAddresses[0].currencyCode, TestConfig.cryptoAddresses[0].address)
  await expect(async () => { await user1.createCryptoPaymentAccount(uid, TestConfig.cryptoAddresses[0].currencyCode, TestConfig.cryptoAddresses[0].address, instant); })
      .rejects
      .toThrow("Account '" + uid + "' is already taken");

  function testCryptoPaymentAccountEquals(paymentAccount: PaymentAccount, testAccount: any, name: string, instant: boolean) {
    expect(paymentAccount.getAccountName()).toEqual(name);
    expect(paymentAccount.getSelectedTradeCurrency()!.getCode()).toEqual(testAccount.currencyCode.toUpperCase());
    if (instant) {
      expect(paymentAccount.getPaymentAccountPayload()!.getInstantCryptoCurrencyAccountPayload()!.getAddress()).toEqual(testAccount.address);
    } else {
      expect(paymentAccount.getPaymentAccountPayload()!.getCryptoCurrencyAccountPayload()!.getAddress()).toEqual(testAccount.address);
    }
  }
}

test("Can prepare for trading (Test, CI)", async () => {
  await prepareForTrading(5, user1, user2);
});

test("Can post and remove an offer (Test, CI, sanity check)", async () => {

  // wait for user1 to have unlocked balance to post offer
  await waitForAvailableBalance(250000000000n * 2n, user1);

  // get unlocked balance before reserving funds for offer
  const availableBalanceBefore = BigInt((await user1.getBalances()).getAvailableBalance());

  // post crypto offer
  let assetCode = "BCH";
  let price = 1 / 17;
  let ctx: Partial<TradeContext> = {maker: {havenod: user1}, assetCode: assetCode, price: price, extraInfo: "My extra info"};
  let offer: OfferInfo = await makeOffer(ctx);;
  assert.equal(offer.getState(), "AVAILABLE");
  assert.equal(offer.getCounterCurrencyCode(), assetCode);
  assert.equal(offer.getBaseCurrencyCode(), "XMR");
  assert.equal(parseFloat(offer.getPrice()), price.toFixed(8));

  // has offer
  offer = await user1.getMyOffer(offer.getId());
  assert.equal(offer.getState(), "AVAILABLE");

  // peer sees offer
  await wait(TestConfig.trade.maxTimePeerNoticeMs);
  let peerOffer = getOffer(await user2.getOffers(assetCode, TestConfig.trade.direction), offer.getId());
  if (!peerOffer) throw new Error("Offer " + offer.getId() + " was not found in peer's offers after posted");
  testOffer(peerOffer, ctx, false);

  // cancel offer
  await user1.removeOffer(offer.getId());

  // offer is removed from my offers
  if (getOffer(await user1.getMyOffers(assetCode, OfferDirection.BUY), offer.getId())) throw new Error("Offer " + offer.getId() + " was found in my offers after removal");

  // peer does not see offer
  await wait(TestConfig.trade.maxTimePeerNoticeMs);
  if (getOffer(await user2.getOffers(assetCode, TestConfig.trade.direction), offer.getId())) throw new Error("Offer " + offer.getId() + " was found in peer's offers after removed");

  // reserved balance released
  expect(BigInt((await user1.getBalances()).getAvailableBalance())).toEqual(availableBalanceBefore);

  // post fiat offer
  assetCode = "USD";
  price = 180.0;
  ctx = {maker: {havenod: user1}, assetCode: assetCode, price: price, extraInfo: "My extra info 2"};
  offer = await makeOffer(ctx);
  assert.equal(offer.getState(), "AVAILABLE");
  assert.equal(offer.getBaseCurrencyCode(), "XMR");
  assert.equal(offer.getCounterCurrencyCode(), "USD");
  assert.equal(parseFloat(offer.getPrice()), price);

  // has offer
  offer = await user1.getMyOffer(offer.getId());
  assert.equal(offer.getState(), "AVAILABLE");

  // peer sees offer
  await wait(TestConfig.trade.maxTimePeerNoticeMs);
  peerOffer = getOffer(await user2.getOffers(assetCode, TestConfig.trade.direction), offer.getId());
  if (!peerOffer) throw new Error("Offer " + offer.getId() + " was not found in peer's offers after posted");
  testOffer(peerOffer, ctx, false);

  // cancel offer
  await user1.removeOffer(offer.getId());

  // offer is removed from my offers
  if (getOffer(await user1.getMyOffers(assetCode, OfferDirection.BUY), offer.getId())) throw new Error("Offer " + offer.getId() + " was found in my offers after removal");

  // reserved balance released
  expect(BigInt((await user1.getBalances()).getAvailableBalance())).toEqual(availableBalanceBefore);

  // peer does not see offer
  await wait(TestConfig.trade.maxTimePeerNoticeMs);
  if (getOffer(await user2.getOffers(assetCode, TestConfig.trade.direction), offer.getId())) throw new Error("Offer " + offer.getId() + " was found in peer's offers after removed");
});

test("Can clone offers (Test, CI, sanity check)", async () => {

  // wait for user1 to have unlocked balance to post offer
  await waitForAvailableBalance(250000000000n * 2n, user1);

  // get unlocked balance before reserving funds for offer
  const availableBalanceBefore = BigInt((await user1.getBalances()).getAvailableBalance());

  // post offer
  let assetCode = "BCH";
  let ctx: Partial<TradeContext> = {maker: {havenod: user1}, direction: OfferDirection.SELL, isPrivateOffer: true, buyerAsTakerWithoutDeposit: true, assetCode: assetCode, extraInfo: "My extra info"};
  let offer: OfferInfo = await makeOffer(ctx);
  assert.equal(offer.getState(), "AVAILABLE");

  // clone offer
  const clonedOffer = await makeOffer({
    sourceOfferId: offer.getId(),
    assetCode: "BCH"
  });
  assert.notEqual(clonedOffer.getId(), offer.getId());
  assert.equal(clonedOffer.getState(), "DEACTIVATED"); // deactivated if same payment method and currency
  assert.equal(clonedOffer.getCounterCurrencyCode(), assetCode);
  assert.equal(clonedOffer.getBaseCurrencyCode(), "XMR");
  assert.equal(clonedOffer.getAmount(), offer.getAmount());
  assert.equal(clonedOffer.getMinAmount(), offer.getMinAmount());
  assert.equal(clonedOffer.getIsPrivateOffer(), offer.getIsPrivateOffer());
  
  // TODO: test edited fields on clone, etc

  // remove offers
  await user1.removeOffer(offer.getId());
  await user1.removeOffer(clonedOffer.getId());
});

// TODO: provide number of confirmations in offer status
test("Can schedule offers with locked funds (Test, CI)", async () => {
  let user3: HavenoClient|undefined;
  let err: any;
  try {

    // configure test
    const completeTrade = true;
    const resolveDispute = Math.random() < 0.5;

    // start user3
    user3 = await initHaveno();
    const user3Wallet = await moneroTs.connectToWalletRpc("http://127.0.0.1:" + user3.getWalletRpcPort(), TestConfig.defaultHavenod.walletUsername, TestConfig.defaultHavenod.walletDefaultPassword);

    // fund user3 with 2 outputs of 0.5 XMR
    const outputAmt = 500000000000n;
    await fundOutputs([user3Wallet], outputAmt, 2, false);

    // schedule offer
    const assetCode = "BCH";
    const direction = OfferDirection.BUY;
    const ctx = new TradeContext({maker: {havenod: user3}, assetCode: assetCode, direction: direction, awaitFundsToMakeOffer: false, reserveExactAmount: true});
    let offer: OfferInfo = await makeOffer(ctx);
    assert.equal(offer.getState(), "PENDING");

    // has offer
    offer = await user3.getMyOffer(offer.getId());
    assert.equal(offer.getState(), "PENDING");

    // balances unchanged
    expect(BigInt((await user3.getBalances()).getPendingBalance())).toEqual(outputAmt * 2n);
    expect(BigInt((await user3.getBalances()).getReservedOfferBalance())).toEqual(0n);

    // peer does not see offer because it's scheduled
    await wait(TestConfig.trade.maxTimePeerNoticeMs);
    if (getOffer(await user1.getOffers(assetCode, direction), offer.getId())) throw new Error("Offer " + offer.getId() + " was found in peer's offers before posted");

    // cancel offer
    await user3.removeOffer(offer.getId());
    if (getOffer(await user3.getOffers(assetCode, direction), offer.getId())) throw new Error("Offer " + offer.getId() + " was found after canceling offer");

    // balances unchanged
    expect(BigInt((await user3.getBalances()).getPendingBalance())).toEqual(outputAmt * 2n);
    expect(BigInt((await user3.getBalances()).getReservedOfferBalance())).toEqual(0n);

    // schedule offer
    offer = await makeOffer({maker: {havenod: user3}, assetCode: assetCode, direction: direction, awaitFundsToMakeOffer: false, reserveExactAmount: true});
    assert.equal(offer.getState(), "PENDING");

    // peer does not see offer because it's scheduled
    await wait(TestConfig.trade.maxTimePeerNoticeMs);
    if (getOffer(await user1.getOffers(assetCode, direction), offer.getId())) throw new Error("Offer " + offer.getId() + " was found in peer's offers before posted");

    // stop user3
    let user3Config = {appName: user3.getAppName()};
    await releaseHavenoProcess(user3);

    // mine 10 blocks
    await mineBlocks(10);

    // restart user3
    user3 = await initHaveno(user3Config);
    ctx.maker.havenod = user3;

    // awaiting split output
    await waitForAvailableBalance(outputAmt, user3);
    offer = await user3.getMyOffer(offer.getId());
    assert.equal(offer.getState(), "PENDING");

    // stop user3
    user3Config = {appName: user3.getAppName()};
    await releaseHavenoProcess(user3);

    // mine 10 blocks
    await mineBlocks(10);

    // restart user3
    user3 = await initHaveno(user3Config);
    ctx.maker.havenod = user3;

    // offer is available
    await waitForAvailableBalance(outputAmt + outputAmt / 2n, user3);
    await wait(TestConfig.trade.walletSyncPeriodMs);
    offer = await user3.getMyOffer(offer.getId());
    assert.equal(offer.getState(), "AVAILABLE");
    ctx.maker.splitOutputTxFee = BigInt(offer.getSplitOutputTxFee());

    // one output is reserved, remaining is unlocked
    const balances = await user3.getBalances();
    expect(BigInt((balances.getPendingBalance()))).toEqual(0n);
    expect(BigInt((balances.getAvailableBalance()))).toBeGreaterThan(outputAmt); // TODO: testScheduleOffer(reserveExactAmount) to test these
    expect(BigInt((balances.getReservedOfferBalance()))).toEqual(outputAmt * 2n - ctx.maker.splitOutputTxFee! - BigInt(balances.getAvailableBalance()));

    // peer sees offer
    await wait(TestConfig.trade.maxTimePeerNoticeMs);
    if (!getOffer(await user1.getOffers(assetCode, direction), offer.getId())) throw new Error("Offer " + offer.getId() + " was not found in peer's offers after posted");

    // complete trade or cancel offer depending on configuration
    if (completeTrade) {
      HavenoUtils.log(1, "Completing trade from scheduled offer, opening and resolving dispute: " + resolveDispute);
      await executeTrade(Object.assign(ctx, {buyerDisputeContext: resolveDispute ? DisputeContext.OPEN_AFTER_DEPOSITS_UNLOCK : DisputeContext.NONE}));
    } else {

      // cancel offer
      await user3.removeOffer(offer.getId());

      // offer is removed from my offers
      if (getOffer(await user3.getMyOffers(assetCode), offer.getId())) throw new Error("Offer " + offer.getId() + " was found in my offers after removal");

      // reserved balance becomes unlocked
      expect(BigInt((await user3.getBalances()).getAvailableBalance())).toEqual(outputAmt * 2n);
      expect(BigInt((await user3.getBalances()).getPendingBalance())).toEqual(0n);
      expect(BigInt((await user3.getBalances()).getReservedOfferBalance())).toEqual(0n);
    }
  } catch (err2) {
    err = err2;
  }

  // stop and delete instances
  if (user3) await releaseHavenoProcess(user3, true);
  if (err) throw err;
});

test("Can reserve exact amount needed for offer (Test, CI)", async () => {
  let randomOfferAmount = 1.0 + (Math.random() * 1.0); // random amount between 1 and 2 xmr
  await executeTrade({
    price: 150,
    offerAmount: HavenoUtils.xmrToAtomicUnits(randomOfferAmount),
    offerMinAmount: HavenoUtils.xmrToAtomicUnits(.15),
    tradeAmount: HavenoUtils.xmrToAtomicUnits(.92),
    reserveExactAmount: true,
    testBalanceChangeEndToEnd: true
  });
});

test("Cannot post offer exceeding trade limit (Test, CI, sanity check)", async () => {
  let assetCode = "USD";
  const account = await createPaymentAccount(user1, assetCode, "zelle");

  // test posting buy offer above limit
  try {
    await executeTrade({
      offerAmount: moneroTs.MoneroUtils.xmrToAtomicUnits(3.1),
      direction: OfferDirection.BUY,
      assetCode: assetCode,
      makerPaymentAccountId: account.getId(),
      takeOffer: false
    });
    throw new Error("Should have rejected posting offer above trade limit")
  } catch (err: any) {
    if (err.message.indexOf("amount is larger than") < 0) throw err;
  }

  // test posting sell offer above limit
  try {
    await executeTrade({
      offerAmount: moneroTs.MoneroUtils.xmrToAtomicUnits(12.1),
      direction: OfferDirection.SELL,
      assetCode: assetCode,
      makerPaymentAccountId: account.getId(),
      takeOffer: false
    });
    throw new Error("Should have rejected posting offer above trade limit")
  } catch (err: any) {
    if (err.message.indexOf("amount is larger than") < 0) throw err;
  }

    // test posting sell offer above limit without buyer deposit
    try {
      await executeTrade({
        offerAmount: moneroTs.MoneroUtils.xmrToAtomicUnits(1.6), // limit is 1.5 xmr without deposit or fee
        offerMinAmount: moneroTs.MoneroUtils.xmrToAtomicUnits(0.25),
        direction: OfferDirection.SELL,
        assetCode: assetCode,
        makerPaymentAccountId: account.getId(),
        isPrivateOffer: true,
        buyerAsTakerWithoutDeposit: true,
        takeOffer: false,
        price: 142.23
      });
      throw new Error("Should have rejected posting offer above trade limit")
    } catch (err: any) {
      if (err.message.indexOf("amount is larger than") < 0) throw err;
    }

  // test that sell limit is higher than buy limit
  let offerId = await executeTrade({
    offerAmount: 2100000000000n,
    direction: OfferDirection.SELL,
    assetCode: assetCode,
    makerPaymentAccountId: account.getId(),
    takeOffer: false
  });
  await user1.removeOffer(offerId);
});

test("Can complete a trade within a range and without a buyer deposit (Test, CI)", async () => {

  // create payment accounts
  let paymentMethodId = HavenoUtils.getPaymentMethodId(PaymentAccountForm.FormId.CASH_AT_ATM);
  let assetCode = "aud";
  let makerPaymentAccount = await createPaymentAccount(user1, assetCode, paymentMethodId); // TODO: support getPaymentAccount() which gets or creates
  let takerPaymentAccount = await createPaymentAccount(user2, assetCode, paymentMethodId);

  // get trade statistics before
  const tradeStatisticsPre = await arbitrator.getTradeStatistics();

  // execute trade
  const offerAmount = getRandomBigIntWithinPercent(HavenoUtils.xmrToAtomicUnits(1), 0.15);
  const offerMinAmount = getRandomBigIntWithinPercent(HavenoUtils.xmrToAtomicUnits(0.3), 0.15);
  const ctx: Partial<TradeContext> = {
    price: 142.23,
    offerAmount: offerAmount,
    offerMinAmount: offerMinAmount,
    tradeAmount: getRandomBigIntWithinRange(offerMinAmount, offerAmount),
    testPayoutUnlocked: true, // override to test unlock
    makerPaymentAccountId: makerPaymentAccount.getId(),
    takerPaymentAccountId: takerPaymentAccount.getId(),
    assetCode: assetCode,
    testBalanceChangeEndToEnd: true,
    direction: OfferDirection.SELL,
    isPrivateOffer: true,
    buyerAsTakerWithoutDeposit: true,
    extraInfo: "My extra info"
  }
  await executeTrade(ctx);

  // test trade statistics after
  if (ctx.buyerSendsPayment && ctx.sellerReceivesPayment) {
    const tradeStatisticsPost = await arbitrator.getTradeStatistics();
    assert(tradeStatisticsPost.length - tradeStatisticsPre.length === 1);
  }
});

test("Can complete trades at the same time (Test, CI, sanity check)", async () => {

  // create trade contexts with customized payment methods and random amounts
  const ctxs = getTradeContexts(TestConfig.assetCodes.length);
  for (let i = 0; i < ctxs.length; i++) {
    ctxs[i].assetCode = TestConfig.assetCodes[i]; // test each asset code
    ctxs[i].offerAmount = getRandomBigIntWithinPercent(TestConfig.trade.offerAmount!, 0.15);
    let paymentMethodId;
    if (ctxs[i].assetCode === "USD") paymentMethodId = "zelle";
    if (ctxs[i].assetCode === "EUR") paymentMethodId = "revolut";
    ctxs[i].makerPaymentAccountId = (await createPaymentAccount(ctxs[i].maker.havenod!, ctxs[i].assetCode!, paymentMethodId)).getId();
    ctxs[i].takerPaymentAccountId = (await createPaymentAccount(ctxs[i].taker.havenod!, ctxs[i].assetCode!, paymentMethodId)).getId();
  }

  // execute trades with capped concurrency for CI tests
  await executeTrades(ctxs);
});

test("Can complete all trade combinations (Test, stress)", async () => {

  // generate trade context for each combination (buyer/seller, maker/taker, dispute(s), dispute winner)
  let ctxs: TradeContext[] = [];
  const MAKER_OPTS = [TradeRole.MAKER, TradeRole.TAKER];
  const DIRECTION_OPTS = [OfferDirection.BUY, OfferDirection.SELL];
  const BUYER_DISPUTE_OPTS = [DisputeContext.NONE, DisputeContext.OPEN_AFTER_DEPOSITS_UNLOCK, DisputeContext.OPEN_AFTER_PAYMENT_SENT];
  const SELLER_DISPUTE_OPTS = [DisputeContext.NONE, DisputeContext.OPEN_AFTER_DEPOSITS_UNLOCK, DisputeContext.OPEN_AFTER_PAYMENT_SENT];
  const DISPUTE_WINNER_OPTS = [DisputeResult.Winner.BUYER, DisputeResult.Winner.SELLER];
  const RESOLVE_DISPUTE_OPTS = [false, true];
  for (let i = 0; i < MAKER_OPTS.length; i++) {
    for (let j = 0; j < DIRECTION_OPTS.length; j++) {
      for (let k = 0; k < BUYER_DISPUTE_OPTS.length; k++) {
        for (let l = 0; l < SELLER_DISPUTE_OPTS.length; l++) {
          for (let m = 0; m < DISPUTE_WINNER_OPTS.length; m++) {
            for (let n = 0; n < RESOLVE_DISPUTE_OPTS.length; n++) {
              if (BUYER_DISPUTE_OPTS[k] !== DisputeContext.NONE && SELLER_DISPUTE_OPTS[l] !== DisputeContext.NONE) continue; // skip both opening a dispute
              if (BUYER_DISPUTE_OPTS[k] === DisputeContext.NONE && SELLER_DISPUTE_OPTS[l] === DisputeContext.NONE && RESOLVE_DISPUTE_OPTS[n]) continue; // skip permutations to resolve dispute when no dispute
              const ctx: Partial<TradeContext> = {
                walletSyncPeriodMs: 8000, // increase for stress test
                maxTimePeerNoticeMs: 8000,
                maker: { havenod: MAKER_OPTS[i] === TradeRole.MAKER ? user1 : user2 },
                taker: { havenod: MAKER_OPTS[i] === TradeRole.MAKER ? user2 : user1 },
                direction: DIRECTION_OPTS[j],
                buyerDisputeContext: BUYER_DISPUTE_OPTS[k],
                sellerDisputeContext: SELLER_DISPUTE_OPTS[l],
                disputeWinner: DISPUTE_WINNER_OPTS[m],
                resolveDispute: RESOLVE_DISPUTE_OPTS[n],
                disputeSummary: "After much deliberation, " + (DISPUTE_WINNER_OPTS[m] === DisputeResult.Winner.BUYER ? "buyer" : "seller") + " is winner",
                offerAmount: getRandomBigIntWithinPercent(TestConfig.trade.offerAmount!, 0.15)
              };
              ctxs.push(new TradeContext(Object.assign({}, new TradeContext(TestConfig.trade), ctx)));
            }
          }
        }
      }
    }
  }

  // execute trades
  const ctxIdx = undefined; // run single index for debugging
  if (ctxIdx !== undefined) {
    ctxs = ctxs.slice(ctxIdx, ctxIdx + 1);
    HavenoUtils.log(0, "Executing single trade configuration");
    console.log(ctxs[0]);
    console.log(await ctxs[0].toSummary());
  }
  HavenoUtils.log(0, "Executing " + ctxs.length + " trade configurations");
  await executeTrades(ctxs);
});

test("Can go offline while completing a trade (Test, CI, sanity check)", async () => {
  let traders: HavenoClient[] = [];
  let ctx: TradeContext = new TradeContext(TestConfig.trade);
  let err: any;
  try {

    // start 2 trader processes
    HavenoUtils.log(1, "Starting trader processes");
    traders = await initHavenos(2);

    // fund traders
    HavenoUtils.log(1, "Funding traders");
    const tradeAmount = 250000000000n;
    await waitForAvailableBalance(tradeAmount * 2n, ...traders);

    // create trade config
    ctx.maker.havenod = traders[0];
    ctx.taker.havenod = traders[1];
    ctx.buyerOfflineAfterTake = true;
    ctx.sellerOfflineAfterTake = true;
    ctx.buyerOfflineAfterPaymentSent = true;

    // execute trade
    await executeTrade(ctx);
  } catch (e) {
    err = e;
  }

  // stop traders
  if (ctx.maker.havenod) await releaseHavenoProcess(ctx.maker.havenod, true);
  if (ctx.taker.havenod) await releaseHavenoProcess(ctx.taker.havenod, true);
  if (err) throw err;
});

test("Can resolve a dispute (Test, CI)", async () => {

  // create payment accounts
  let paymentMethodId = "revolut";
  let assetCode = "usd";
  let makerPaymentAccount = await createPaymentAccount(user1, assetCode, paymentMethodId);
  let takerPaymentAccount = await createPaymentAccount(user2, assetCode, paymentMethodId);

  // execute trade
  await executeTrade({
    price: 142.23,
    offerAmount: HavenoUtils.xmrToAtomicUnits(2),
    offerMinAmount: HavenoUtils.xmrToAtomicUnits(.15),
    tradeAmount: HavenoUtils.xmrToAtomicUnits(1),
    testPayoutUnlocked: true, // override to test unlock
    makerPaymentAccountId: makerPaymentAccount.getId(),
    takerPaymentAccountId: takerPaymentAccount.getId(),
    assetCode: assetCode,
    buyerDisputeContext: DisputeContext.OPEN_AFTER_DEPOSITS_UNLOCK,
    disputeWinner: DisputeResult.Winner.SELLER,
    disputeWinnerAmount: HavenoUtils.xmrToAtomicUnits(.767),
    disputeReason: DisputeResult.Reason.OTHER,
    disputeSummary: "Payment not completed, so returning trade amount to seller.",
    testBalanceChangeEndToEnd: true
  });

  // TODO: test receiver = BUYER
});

test("Can resolve disputes (Test, CI)", async () => {
  
  // execute all configs unless config index given
  let configIdx = undefined;
  let testBalancesSequentially = false; // runs each config sequentially to test balances before and after // TODO: this test takes much longer to run in sequence in order to test balances. use test weight config

  // create test configurations which stop before payment sent
  const ctxs = getTradeContexts(4);
  for (const config of ctxs) config.buyerSendsPayment = false;
  Object.assign(ctxs[3], {
    offerAmount: HavenoUtils.xmrToAtomicUnits(1),
    offerMinAmount: HavenoUtils.xmrToAtomicUnits(.15),
    tradeAmount: HavenoUtils.xmrToAtomicUnits(.578),
  });

  // initiate trades
  const tradeIds = await executeTrades(ctxs.slice(configIdx, configIdx === undefined ? undefined : configIdx + 1));

  // open disputes at same time but do not resolve
  const trade1 = await user1.getTrade(tradeIds[configIdx === undefined ? 1 : 0]);
  const trade2 = await user1.getTrade(tradeIds[configIdx === undefined ? 2 : 0]);
  Object.assign(ctxs[0], {
    resolveDispute: false,
    buyerSendsPayment: false,
    sellerDisputeContext: DisputeContext.OPEN_AFTER_DEPOSITS_UNLOCK,
    disputeWinner: DisputeResult.Winner.SELLER,
    disputeReason: DisputeResult.Reason.PEER_WAS_LATE,
    disputeSummary: "Seller is winner"
  });
  Object.assign(ctxs[1], {
    resolveDispute: false,
    buyerSendsPayment: false,
    buyerDisputeContext: DisputeContext.OPEN_AFTER_DEPOSITS_UNLOCK,
    disputeWinner: DisputeResult.Winner.BUYER,
    disputeReason: DisputeResult.Reason.SELLER_NOT_RESPONDING,
    disputeSummary: "Split trade amount",
    disputeWinnerAmount: BigInt(trade1.getAmount()) / 2n + BigInt(trade1.getBuyerSecurityDeposit())
  });
  Object.assign(ctxs[2], {
    resolveDispute: false,
    buyerSendsPayment: false,
    buyerDisputeContext: DisputeContext.OPEN_AFTER_DEPOSITS_UNLOCK,
    disputeWinner: DisputeResult.Winner.SELLER,
    disputeReason: DisputeResult.Reason.TRADE_ALREADY_SETTLED,
    disputeSummary: "Seller gets everything",
    disputeWinnerAmount: BigInt(trade2.getAmount()) + BigInt(trade2.getBuyerSecurityDeposit()) + BigInt(trade2.getSellerSecurityDeposit())
  });
  Object.assign(ctxs[3], {
    resolveDispute: false,
    buyerSendsPayment: true,
    sellerReceivesPayment: false,
    sellerDisputeContext: DisputeContext.OPEN_AFTER_PAYMENT_SENT,
    disputeWinner: DisputeResult.Winner.BUYER,
    disputeReason: DisputeResult.Reason.TRADE_ALREADY_SETTLED,
    disputeSummary: "Buyer wins dispute after sending payment",
    disputeWinnerAmount: HavenoUtils.xmrToAtomicUnits(.1171),
  });
  HavenoUtils.log(1, "Opening disputes");
  await executeTrades(ctxs.slice(configIdx, configIdx === undefined ? undefined : configIdx + 1));

  // resolve disputes
  for (const ctx of ctxs) {
    ctx.resolveDispute = true;
    ctx.testPayoutUnlocked = false;
  }
  HavenoUtils.log(1, "Resolving disputes");
  await executeTrades(ctxs.slice(configIdx, configIdx === undefined ? undefined : configIdx + 1), {concurrentTrades: !testBalancesSequentially});
});

test("Can go offline while resolving a dispute (Test, CI)", async () => {
  let traders: HavenoClient[] = [];
  let ctx: Partial<TradeContext> = {};
  let err: any;
  try {

    // start trader processes
    HavenoUtils.log(1, "Starting trader processes");
    traders = await initHavenos(2);

    // create trade config
    ctx = new TradeContext({
      maker: {havenod: traders[0]},
      taker: {havenod: traders[1]},
      buyerOfflineAfterTake: true,
      sellerOfflineAfterDisputeOpened: true,
      buyerOfflineAfterDisputeOpened: false,
      buyerDisputeContext: DisputeContext.OPEN_AFTER_DEPOSITS_UNLOCK,
      disputeWinner: DisputeResult.Winner.SELLER,
      disputeReason: DisputeResult.Reason.NO_REPLY,
      disputeSummary: "Seller wins dispute because buyer has not replied",
      testPayoutUnlocked: false
    });

    // fund traders
    const tradeAmount = 250000000000n;
    await waitForAvailableBalance(tradeAmount * 2n, ...traders);

    // execute trade
    await executeTrade(ctx);
  } catch (e) {
    err = e;
  }

  // stop and delete traders
  if (ctx.maker && ctx.maker.havenod) await releaseHavenoProcess(ctx.maker!.havenod!, true);
  if (ctx.taker && ctx.taker.havenod) await releaseHavenoProcess(ctx.taker!.havenod!, true); // closing this client after first induces HttpClientImpl.shutdown() to hang, so this tests timeout handling
  if (ctx.sellerAppName) deleteHavenoInstanceByAppName(ctx.sellerAppName!); // seller is offline
  if (err) throw err;
});

test("Cannot make or take offer with insufficient funds (Test, CI, sanity check)", async () => {
  let user3: HavenoClient|undefined;
  let err: any;
  try {

    // start user3
    user3 = await initHaveno();

    // user3 creates payment account
    const paymentAccount = await createPaymentAccount(user3, TestConfig.trade.assetCode!);

    // user3 cannot make offer with insufficient funds
    try {
      await makeOffer({maker: {havenod: user3}, makerPaymentAccountId: paymentAccount.getId(), awaitFundsToMakeOffer: false});
      throw new Error("Should have failed making offer with insufficient funds")
    } catch (err: any) {
      if (!err.message.includes("not enough funds")) throw err;
      const errTyped = err as HavenoError;
      assert.equal(errTyped.code, 2);
    }

    // user1 gets or posts offer
    const offers: OfferInfo[] = await user1.getMyOffers(TestConfig.trade.assetCode);
    let offer: OfferInfo;
    if (offers.length) offer = offers[0];
    else {
      const tradeAmount = 250000000000n;
      await waitForAvailableBalance(tradeAmount * 2n, user1);
      offer = await makeOffer({maker: {havenod: user1}, offerAmount: tradeAmount, awaitFundsToMakeOffer: false});
      assert.equal(offer.getState(), "AVAILABLE");
      await wait(TestConfig.trade.walletSyncPeriodMs * 2);
    }

    // user3 cannot take offer with insufficient funds
    try {
      await user3.takeOffer(offer.getId(), paymentAccount.getId());
      throw new Error("Should have failed taking offer with insufficient funds")
    } catch (err: any) {
      const errTyped = err as HavenoError;
      assert(errTyped.message.includes("not enough money"), "Unexpected error: " + errTyped.message);
      assert.equal(errTyped.code, 2);
    }

    // user3 does not have trade
    try {
      await user3.getTrade(offer.getId());
    } catch (err: any) {
      const errTyped = err as HavenoError;
      assert.equal(errTyped.code, 3);
      assert(errTyped.message.includes("trade with id '" + offer.getId() + "' not found"));
    }

    // remove offer if posted
    if (!offers.length) await user1.removeOffer(offer.getId());
  } catch (err2) {
    err = err2;
  }

  // stop user3
  if (user3) await releaseHavenoProcess(user3, true);
  if (err) throw err;
});

test("Invalidates offers when reserved funds are spent (Test, CI)", async () => {
  let err;
  let tx;
  try {
    
    // wait for user1 to have unlocked balance for trade
    const tradeAmount = 250000000000n;
    await waitForAvailableBalance(tradeAmount * 2n, user1);

    // get frozen key images before posting offer
    const frozenKeyImagesBefore: any[] = [];
    for (const frozenOutput of await user1Wallet.getOutputs({isFrozen: true})) frozenKeyImagesBefore.push(frozenOutput.getKeyImage().getHex());

    // post offer
    await wait(1000);
    const assetCode = getRandomAssetCode();
    const offer: OfferInfo = await makeOffer({maker: {havenod: user1}, assetCode: assetCode, offerAmount: tradeAmount});

    // get key images reserved by offer
    const reservedKeyImages: any[] = [];
    const frozenKeyImagesAfter: any[] = [];
    for (const frozenOutput of await user1Wallet.getOutputs({isFrozen: true})) frozenKeyImagesAfter.push(frozenOutput.getKeyImage().getHex());
    for (const frozenKeyImageAfter of frozenKeyImagesAfter) {
      if (!frozenKeyImagesBefore.includes(frozenKeyImageAfter)) reservedKeyImages.push(frozenKeyImageAfter);
    }

    // offer is available to peers
    await wait(TestConfig.trade.walletSyncPeriodMs * 2);
    if (!getOffer(await user2.getOffers(assetCode, OfferDirection.BUY), offer.getId())) throw new Error("Offer " + offer.getId() + " was not found in peer's offers after posting");

    // spend one of offer's reserved outputs
    if (!reservedKeyImages.length) throw new Error("No reserved key images detected");
    await user1Wallet.thawOutput(reservedKeyImages[0]);
    tx = await user1Wallet.sweepOutput({keyImage: reservedKeyImages[0], address: await user1Wallet.getPrimaryAddress(), relay: false});
    await monerod.submitTxHex(tx.getFullHex()!, true);

    // mine block so spend is confirmed
    await mineBlocks(1);

    // offer is removed from peer offers
    await wait(20000);
    if (getOffer(await user2.getOffers(assetCode, OfferDirection.BUY), offer.getId())) throw new Error("Offer " + offer.getId() + " was found in peer's offers after reserved funds spent");

    // offer is removed from my offers
    if (getOffer(await user1.getMyOffers(assetCode, OfferDirection.BUY), offer.getId())) throw new Error("Offer " + offer.getId() + " was found in my offers after reserved funds spent");

    // offer is automatically cancelled
    try {
      await user1.removeOffer(offer.getId());
      throw new Error("cannot remove invalidated offer");
    } catch (err: any) {
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
test("Can handle unexpected errors during trade initialization (Test)", async () => {
  let traders: HavenoClient[] = [];
  let err: any;
  try {

    // start and fund 3 trader processes
    HavenoUtils.log(1, "Starting trader processes");
    traders = await initHavenos(3);
    HavenoUtils.log(1, "Funding traders");
    const tradeAmount = 250000000000n;
    await waitForAvailableBalance(tradeAmount * 2n, traders[0], traders[1], traders[2]);

    // trader 0 posts offer
    HavenoUtils.log(1, "Posting offer");
    let offer = await makeOffer({maker: {havenod: traders[0]}, offerAmount: tradeAmount});
    offer = await traders[0].getMyOffer(offer.getId());
    assert.equal(offer.getState(), "AVAILABLE");

    // wait for offer to be seen
    await wait(TestConfig.trade.walletSyncPeriodMs * 2);

    // trader 1 spends trade funds after initializing trade
    let paymentAccount = await createCryptoPaymentAccount(traders[1]); // TODO: this is different account type than maker's offer, but accounts should not be used in this test
    wait(3000).then(async function() {
      try {
        const traderWallet = await moneroTs.connectToWalletRpc("http://127.0.0.1:" + traders[1].getWalletRpcPort(), TestConfig.defaultHavenod.walletUsername, TestConfig.defaultHavenod.walletDefaultPassword);
        for (const frozenOutput of await traderWallet.getOutputs({isFrozen: true})) await traderWallet.thawOutput(frozenOutput.getKeyImage().getHex());
        HavenoUtils.log(1, "Sweeping trade funds");
        await traderWallet.sweepUnlocked({address: await traderWallet.getPrimaryAddress(), relay: true});
      } catch (err: any) {
        console.log("Caught error sweeping funds!");
        console.log(err);
      }
    });

    // trader 1 tries to take offer
    try {
      HavenoUtils.log(1, "Trader 1 taking offer " + offer.getId());
      await traders[1].takeOffer(offer.getId(), paymentAccount.getId());
      throw new Error("Should have failed taking offer because taker trade funds spent")
    } catch (err: any) {
      assert(err.message.includes("not enough unlocked money"), "Unexpected error: " + err.message);
    }

    // TODO: test it's unavailable right after taking (taker will know before maker)

    // trader 0's offer remains available
    await wait(15000); // give time for trade initialization to fail and offer to become available
    offer = await traders[0].getMyOffer(offer.getId());
    if (offer.getState() !== "AVAILABLE") {
      HavenoUtils.log(1, "Offer is not yet available, waiting to become available after timeout..."); // TODO (woodser): fail trade on nack during initialization to save a bunch of time
      await wait(TestConfig.tradeStepTimeoutMs); // wait for offer to become available after timeout
      offer = await traders[0].getMyOffer(offer.getId());
      assert.equal(offer.getState(), "AVAILABLE");
    }

    // trader 0 spends trade funds after trader 2 takes offer
    wait(3000).then(async function() {
      try {
        const traderWallet = await moneroTs.connectToWalletRpc("http://127.0.0.1:" + traders[0].getWalletRpcPort(), TestConfig.defaultHavenod.walletUsername, TestConfig.defaultHavenod.walletDefaultPassword);
        for (const frozenOutput of await traderWallet.getOutputs({isFrozen: true})) await traderWallet.thawOutput(frozenOutput.getKeyImage().getHex());
        HavenoUtils.log(1, "Sweeping offer funds");
        await traderWallet.sweepUnlocked({address: await traderWallet.getPrimaryAddress(), relay: true});
      } catch (err: any) {
        console.log("Caught error sweeping funds!");
        console.log(err);
      }
    });

    // trader 2 tries to take offer
    paymentAccount = await createCryptoPaymentAccount(traders[2]);
    try {
      HavenoUtils.log(1, "Trader 2 taking offer")
      await traders[2].takeOffer(offer.getId(), paymentAccount.getId());
      throw new Error("Should have failed taking offer because maker trade funds spent")
    } catch (err: any) {

      // determine if error is expected
      let expected = false;
      const expectedErrMsgs = ["not enough unlocked money", "timeout reached. protocol did not complete", "trade is already taken", "open offer has been removed"];
      for (const expectedErrMsg of expectedErrMsgs) {
        if (err.message.indexOf(expectedErrMsg) >= 0) {
          expected = true;
          break;
        }
      }
      if (!expected) throw err;
    }

    // trader 2's balance is unreserved
    const trader2Balances = await traders[2].getBalances();
    expect(BigInt(trader2Balances.getReservedTradeBalance())).toEqual(0n);
    expect(BigInt(trader2Balances.getAvailableBalance())).toBeGreaterThan(0n);
  } catch (err2) {
    err = err2;
  }

  // stop traders
  for (const trader of traders) await releaseHavenoProcess(trader, true);
  if (err) throw err;
});

// TODO: test opening and resolving dispute as arbitrator and traders go offline
test("Selects arbitrators which are online, registered, and least used (Test)", async () => {

  // complete 2 trades using main arbitrator so it's most used
  // TODO: these trades are not registered with seednode until it's restarted
  HavenoUtils.log(1, "Preparing for trades");
  await prepareForTrading(4, user1, user2);
  HavenoUtils.log(1, "Completing trades with main arbitrator");
  await executeTrades(getTradeContexts(2), {testPayoutConfirmed: false});

  // start and register arbitrator2
  let arbitrator2 = await initHaveno();
  HavenoUtils.log(1, "Registering arbitrator2");
  await arbitrator2.registerDisputeAgent("arbitrator", getArbitratorPrivKey(1)); // TODO: re-registering with same address corrupts messages (Cannot decrypt) because existing pub key; overwrite? or throw when registration fails because dispute map can't be updated
  await wait(TestConfig.trade.walletSyncPeriodMs * 2);

  // get internal api addresses
  const arbitrator1ApiUrl = "localhost:" + TestConfig.ports.get(getPort(arbitrator.getUrl()))![1]; // TODO: havenod.getApiUrl()?
  const arbitrator2ApiUrl = "localhost:" + TestConfig.ports.get(getPort(arbitrator2.getUrl()))![1];

  let err = undefined;
  try {

    // post offers signed by each arbitrator randomly
    HavenoUtils.log(1, "Posting offers signed by both arbitrators randomly");
    let offer1: OfferInfo | undefined;
    let offer2: OfferInfo | undefined;
    while (true) {
      const offer = await makeOffer({maker: {havenod: user1}});
      if (offer.getArbitratorSigner() === arbitrator1ApiUrl && !offer1) offer1 = offer;
      else if (offer.getArbitratorSigner() === arbitrator2ApiUrl && !offer2) offer2 = offer;
      else await user1.removeOffer(offer.getId());
      if (offer1 && offer2) break;
    }
    await wait(TestConfig.trade.walletSyncPeriodMs * 2);

    // complete a trade which uses arbitrator2 since it's least used
    HavenoUtils.log(1, "Completing trade using arbitrator2");
    await executeTrade({maker: {havenod: user1}, taker: {havenod: user2}, arbitrator: {havenod: arbitrator2}, offerId: offer1.getId(), makerPaymentAccountId: offer1.getPaymentAccountId(), testPayoutConfirmed: false});
    let trade = await user1.getTrade(offer1.getId());
    assert.equal(trade.getArbitratorNodeAddress(), arbitrator2ApiUrl);

    // arbitrator2 goes offline without unregistering
    HavenoUtils.log(1, "Arbitrator2 going offline");
    const arbitrator2AppName = arbitrator2.getAppName()
    await releaseHavenoProcess(arbitrator2);

    // post offer which uses main arbitrator since arbitrator2 is offline
    HavenoUtils.log(1, "Posting offer which uses main arbitrator since arbitrator2 is offline");
    let offer = await makeOffer({maker: {havenod: user1}});
    assert.equal(offer.getArbitratorSigner(), arbitrator1ApiUrl);
    await user1.removeOffer(offer.getId());

    // complete a trade which uses main arbitrator since arbitrator2 is offline
    HavenoUtils.log(1, "Completing trade using main arbitrator since arbitrator2 is offline");
    await executeTrade({maker: {havenod: user1}, taker: {havenod: user2}, offerId: offer2.getId(), makerPaymentAccountId: offer2.getPaymentAccountId(), testPayoutConfirmed: false});
    trade = await user1.getTrade(offer2.getId());
    assert.equal(trade.getArbitratorNodeAddress(), arbitrator1ApiUrl);

    // start and unregister arbitrator2
    HavenoUtils.log(1, "Starting and unregistering arbitrator2");
    arbitrator2 = await initHaveno({appName: arbitrator2AppName});
    await arbitrator2.unregisterDisputeAgent("arbitrator");
    await wait(TestConfig.trade.walletSyncPeriodMs * 2);

    // cannot take offers signed by unregistered arbitrator
    HavenoUtils.log(1, "Taking offer signed by unregistered arbitrator");
    try {
    await executeTrade({maker: {havenod: user1}, taker: {havenod: user2}, offerId: offer2.getId()});
      throw new Error("Should have failed taking offer signed by unregistered arbitrator");
    } catch (e2: any) {
      assert (e2.message.indexOf("not found") > 0);
    }

    // TODO: offer is removed and unreserved or re-signed, ideally keeping the same id

    // post offer which uses main arbitrator since arbitrator2 is unregistered
    offer = await makeOffer({maker: {havenod: user1}});
    assert.equal(offer.getArbitratorSigner(), arbitrator1ApiUrl);
    await wait(TestConfig.trade.walletSyncPeriodMs * 2);

    // complete a trade which uses main arbitrator since arbitrator2 is unregistered
    HavenoUtils.log(1, "Completing trade with main arbitrator since arbitrator2 is unregistered");
    await executeTrade({maker: {havenod: user1}, taker: {havenod: user2}, offerId: offer.getId(), makerPaymentAccountId: offer.getPaymentAccountId(), testPayoutConfirmed: false});
    HavenoUtils.log(1, "Done completing trade with main arbitrator since arbitrator2 is unregistered");
    trade = await user2.getTrade(offer.getId());
    HavenoUtils.log(1, "Done getting trade");
    assert.equal(trade.getArbitratorNodeAddress(), arbitrator1ApiUrl);

    // release arbitrator2
    HavenoUtils.log(1, "Done getting trade");
    await releaseHavenoProcess(arbitrator2, true);
  } catch (e) {
    err = e;
  }

  // cleanup if error
  if (err) {
    if (arbitrator2) {
      try { await arbitrator2.unregisterDisputeAgent("arbitrator"); }
      catch (err: any) { console.log("Error unregistering arbitrator2: " + err.message); }
      try { await releaseHavenoProcess(arbitrator2, true); }
      catch (err: any) { console.log("Error releasing arbitrator2: " + err.message); }
    }
    throw err;
  }
});

test("Can get trade statistics (Test, CI)", async () => {
  const tradeStatisticsArbitrator = await arbitrator.getTradeStatistics();
  const tradeStatisticsUser1 = await user1.getTradeStatistics();
  const tradeStatisticsUser2 = await user2.getTradeStatistics();
  HavenoUtils.log(0, "Trade statistics size (arb/u1/u2): " + tradeStatisticsArbitrator.length + "/" + tradeStatisticsUser1.length + "/" + tradeStatisticsUser2.length);
  assert(tradeStatisticsArbitrator.length === tradeStatisticsUser1.length && tradeStatisticsUser1.length === tradeStatisticsUser2.length);
});

// specialty test to bootstrap a network with random offers, trades, and disputes
// TODO: this bootstrap test encounters errors
// TODO: paymentMethodId config only used here
test("Can bootstrap a network", async () => {

  // get random trade configs
  const ctxs: TradeContext[] = [];
  for (let i = 0; i < 20; i++) {
    ctxs.push(await getRandomBootstrapConfig());
  }

  // execute trades
  HavenoUtils.log(0, "Executing " + ctxs.length + " random bootstrap configurations");
  await executeTrades(ctxs);

  async function getRandomBootstrapConfig(ctxP?: Partial<TradeContext>): Promise<TradeContext> {
    if (!ctxP) ctxP = {};

    // customize configs
    //ctxP.paymentMethodId = "BLOCK_CHAINS";
    //ctxP.assetCode = "BTC";
    const completeAllTrades = false;
  
    // randomize offer config
    const user1AsMaker = getRandomOutcome(1/2);
    if (ctxP.maker === undefined) ctxP.maker = {};
    if (ctxP.taker === undefined) ctxP.taker = {};
    if (ctxP.maker.havenod === undefined) ctxP.maker.havenod = user1AsMaker ? user1 : user2;
    if (ctxP.taker.havenod === undefined) ctxP.taker.havenod = user1AsMaker ? user2 : user1;
    if (ctxP.direction === undefined) ctxP.direction = getRandomOutcome(1/2) ? OfferDirection.BUY : OfferDirection.SELL;
    const isRangeOffer = getRandomOutcome(1/2);
    if (ctxP.offerAmount === undefined) ctxP.offerAmount = getRandomBigIntWithinPercent(HavenoUtils.xmrToAtomicUnits(1), 0.15);
    if (isRangeOffer && ctxP.offerMinAmount === undefined) ctxP.offerMinAmount = getRandomBigIntWithinPercent(HavenoUtils.xmrToAtomicUnits(0.3), 0.15);
    if (ctxP.reserveExactAmount === undefined) ctxP.reserveExactAmount = getRandomOutcome(3/4);
    if (ctxP.buyerAsTakerWithoutDeposit === undefined) ctxP.buyerAsTakerWithoutDeposit = ctxP.direction === OfferDirection.SELL && getRandomOutcome(1/3);
    if (ctxP.buyerAsTakerWithoutDeposit) {
      ctxP.isPrivateOffer = true;
      ctxP.extraInfo = "Will get this done fast, no deposit required 😎";
    }

    // randomize payment method and asset code
    if (ctxP.assetCode && !ctxP.paymentMethodId && (!ctxP.makerPaymentAccountId || !ctxP.takerPaymentAccountId)) throw new Error("Cannot specify asset code without payment method or accounts");
    if (!ctxP.paymentMethodId) ctxP.paymentMethodId = getRandomPaymentMethodId();
    if (!ctxP.makerPaymentAccountId) ctxP.makerPaymentAccountId = (await createPaymentAccount2(ctxP.maker.havenod!, ctxP.paymentMethodId, ctxP.assetCode)).getId();
    if (!ctxP.takerPaymentAccountId) ctxP.takerPaymentAccountId = (await createPaymentAccount2(ctxP.taker.havenod!, ctxP.paymentMethodId, ctxP.assetCode)).getId();
    if (!ctxP.assetCode) ctxP.assetCode = getRandomAssetCodeForPaymentAccount(await ctxP.maker.havenod.getPaymentAccount(ctxP.makerPaymentAccountId));
    if (await isFixedPrice(ctxP)) ctxP.price = ctxP.direction === OfferDirection.BUY ? getRandomFloat(125, 155) : getRandomFloat(160, 190);
  
    // randomize trade config
    if (ctxP.takeOffer === undefined) ctxP.takeOffer = getRandomOutcome(3/5);
    if (ctxP.tradeAmount === undefined) ctxP.tradeAmount = isRangeOffer ? getRandomBigIntWithinRange(ctxP.offerMinAmount!, ctxP.offerAmount) : ctxP.offerAmount;
    if (ctxP.buyerSendsPayment === undefined) ctxP.buyerSendsPayment = completeAllTrades || getRandomOutcome(1/2);
    if (ctxP.priceMargin === undefined && ctxP.price === undefined) ctxP.priceMargin = parseFloat(getRandomFloat(0, .3).toFixed(10));
    if (ctxP.sellerReceivesPayment === undefined) ctxP.sellerReceivesPayment = completeAllTrades || getRandomOutcome(1/2);
    if (ctxP.buyerDisputeContext === undefined) ctxP.buyerDisputeContext = getRandomOutcome(1/14) ? DisputeContext.OPEN_AFTER_DEPOSITS_UNLOCK : undefined;
    if (ctxP.buyerDisputeContext === undefined) ctxP.buyerDisputeContext = getRandomOutcome(1/14) ? DisputeContext.OPEN_AFTER_PAYMENT_SENT : undefined;
    if (ctxP.buyerDisputeContext === undefined) { // only one peer opens dispute
      if (ctxP.sellerDisputeContext === undefined) ctxP.sellerDisputeContext = getRandomOutcome(1/14) ? DisputeContext.OPEN_AFTER_DEPOSITS_UNLOCK : undefined;
      if (ctxP.sellerDisputeContext === undefined) ctxP.sellerDisputeContext = getRandomOutcome(1/14) ? DisputeContext.OPEN_AFTER_PAYMENT_SENT : undefined;
    }
    if (ctxP.resolveDispute === undefined) ctxP.resolveDispute = completeAllTrades || getRandomOutcome(2/3);

    return TradeContext.init(ctxP);
  }

  async function isFixedPrice(ctxP: Partial<TradeContext>): Promise<boolean> {
    if (moneroTs.GenUtils.arrayContains(TestConfig.fixedPriceAssetCodes, ctxP.assetCode)) return true;
    if (moneroTs.GenUtils.arrayContains(TestConfig.fixedPricePaymentMethods, ctxP.paymentMethodId?.toUpperCase())) return true;
    const marketPrice = await user1.getPrice(ctxP.assetCode!);
    if (marketPrice === undefined) return true;
    return false;
  }

  // TODO: reconcile with createPaymentAccount
  async function createPaymentAccount2(trader: HavenoClient, paymentMethodId?: string, assetCode?: string): Promise<PaymentAccount> {
    if (assetCode && !paymentMethodId) throw new Error("Cannot create payment account with asset code and no payment method ID");
    if (!paymentMethodId) paymentMethodId = getRandomPaymentMethodId();
    const accountForm = await trader.getPaymentAccountForm(paymentMethodId);
    if (assetCode) HavenoUtils.setFormValue(accountForm, PaymentAccountFormField.FieldId.TRADE_CURRENCIES, assetCode);
    for (const field of accountForm.getFieldsList()) {
      if (field.getValue() !== "") continue; // skip if already set
      field.setValue(getValidFormInput(accountForm, field.getId(), trader));
    }
    return await trader.createPaymentAccount(accountForm);
  }
});

// ----------------------------- TEST HELPERS ---------------------------------

function getTradeContexts(numConfigs: number): TradeContext[] {
    const configs: TradeContext[] = [];
    for (let i = 0; i < numConfigs; i++) configs.push(new TradeContext(TestConfig.trade));
    return configs;
}

async function executeTrades(ctxs: Partial<TradeContext>[], executionCtx?: Partial<TradeContext>): Promise<string[]> {

  // assign default execution context
  if (!executionCtx) executionCtx = {};
  if (executionCtx.concurrentTrades === undefined) executionCtx.concurrentTrades = ctxs.length > 1;
  Object.assign(executionCtx, new TradeContext(TestConfig.trade), Object.assign({}, executionCtx));

  // start mining if executing trades concurrently
  let miningStarted = executionCtx.concurrentTrades && await startMining();

  // execute trades
  let offerIds: string[] = [];
  let err = undefined
  try {

    // assign default configs
    for (let i = 0; i < ctxs.length; i++) Object.assign(ctxs[i], new TradeContext(TestConfig.trade), Object.assign({index: i}, ctxs[i]));

    // wait for traders to have unlocked balance for trades
    let tradeAmount: bigint|undefined = undefined;
    const outputCounts = new Map<any, number>();
    for (const ctx of ctxs) {
      if (!tradeAmount || tradeAmount < ctx.offerAmount!) tradeAmount = ctx.offerAmount; // use max amount
      if (ctx.awaitFundsToMakeOffer && ctx.makeOffer && !ctx.offerId) {
        const wallet = await getWallet(ctx.maker!.havenod!);
        if (outputCounts.has(wallet)) outputCounts.set(wallet, outputCounts.get(wallet)! + 1);
        else outputCounts.set(wallet, 1);
      }
      if (ctx.awaitFundsToTakeOffer && ctx.takeOffer && !ctx.isOfferTaken) {
        const wallet = await getWallet(ctx.taker!.havenod!);
        if (outputCounts.has(wallet)) outputCounts.set(wallet, outputCounts.get(wallet)! + 1);
        else outputCounts.set(wallet, 1);
      }
    }
    const fundWalletPromises: Promise<void>[] = [];
    for (const wallet of outputCounts.keys()) {
      if (outputCounts.get(wallet)! > 0) {
        fundWalletPromises.push(fundOutputs([wallet], tradeAmount! * 2n, outputCounts.get(wallet)));
      }
    }
    await Promise.all(fundWalletPromises);

    // execute trades in thread pool unless serial
    if (executionCtx.concurrentTrades) {
      const tradePromises: Promise<string>[] = [];
      const pool = new moneroTs.ThreadPool(executionCtx.maxConcurrency!);
      for (let i = 0; i < ctxs.length; i++) ctxs[i] = TradeContext.init(Object.assign(ctxs[i], {concurrentTrades: executionCtx!.concurrentTrades})); // inititalize full trade contexts to avoid copy
      for (const ctx of ctxs) tradePromises.push(pool.submit(() => executeTrade(ctx)));
      try {
        offerIds = await Promise.all(tradePromises);
      } catch (e2) {
        if (executionCtx.stopOnFailure) for (const ctx of ctxs) ctx.isStopped = true; // stop trades on failure
        try {
          await Promise.allSettled(tradePromises); // wait for other trades to complete
        } catch (e3: any) {
          HavenoUtils.log(0, "Error awaiting other trades to stop after error: " + e3.message);
          HavenoUtils.log(0, e3.stack);
        }
        throw e2;
      }
    } else {
      for (const ctx of ctxs) {
        offerIds.push(await executeTrade(Object.assign(ctx, {concurrentTrades: executionCtx.concurrentTrades})));
      }
    }
  } catch (e) {
    err = e;
  }

  // stop mining if started, throw error or return offer ids
  if (miningStarted) await stopMining();
  if (err) throw err;
  return offerIds;
}

// TODO (woodser): test grpc notifications
async function executeTrade(ctxP: Partial<TradeContext>): Promise<string> {
  let ctx = TradeContext.init(ctxP);
  try {

    // fund maker and taker
    if (ctx.isStopped) return ctx.offerId!;
    const makingOffer = ctx.makeOffer && !ctx.offerId;
    const clientsToFund: HavenoClient[] = [];
    if (!ctx.concurrentTrades) { // already funded
      if (ctx.awaitFundsToMakeOffer && makingOffer && !ctx.offerId) clientsToFund.push(ctx.maker.havenod!);
      if (ctx.awaitFundsToTakeOffer && ctx.takeOffer && !ctx.isOfferTaken) clientsToFund.push(ctx.taker.havenod!);
      await waitForAvailableBalance(ctx.offerAmount! * 2n, ...clientsToFund);
    }

    // make offer if configured
    if (ctx.isStopped) return ctx.offerId!;
    if (makingOffer) {
      ctx.offer = await makeOffer(ctx);
      expect(ctx.offer.getState()).toEqual(ctx.reserveExactAmount ? "PENDING" : "AVAILABLE");
      ctx.offerId = ctx.offer.getId();
      await wait(ctx.maxTimePeerNoticeMs);
    } else {
      ctx.offer = getOffer(await ctx.maker.havenod!.getMyOffers(ctx.assetCode!, ctx.direction), ctx.offerId!);
      if (!ctx.offer) {
        try {
          const trade = await ctx.maker.havenod!.getTrade(ctx.offerId!);
          ctx.offer = trade.getOffer();
        } catch (err) { /* ignore */ }
      }
    }

    // TODO (woodser): test error message taking offer before posted

    // wait for split output tx to unlock
    if (ctx.isStopped) return ctx.offerId!;
    if (ctx.reserveExactAmount) {
      const splitOutputTxId = ctx.offer?.getSplitOutputTxHash();
      HavenoUtils.log(1, "Waiting for split output tx " + splitOutputTxId + " to unlock");
      if (splitOutputTxId) {
        await mineToUnlock(splitOutputTxId);
        await wait(TestConfig.trade.walletSyncPeriodMs + TestConfig.trade.maxTimePeerNoticeMs);
      }
    }

    // take offer or get existing trade
    if (ctx.isStopped) return ctx.offerId!;
    let trade: TradeInfo|undefined = undefined;
    if (ctx.isOfferTaken) trade = await ctx.taker.havenod!.getTrade(ctx.offerId!);
    else {
      if (!ctx.takeOffer) return ctx.offerId!;
      trade = await takeOffer(ctx);
      ctx.isOfferTaken = true;
    }

    // test trader chat
    if (ctx.isStopped) return ctx.offerId!;
    if (ctx.testTraderChat) await testTradeChat(ctx);

    // get expected payment account payloads
    if (ctx.isStopped) return ctx.offerId!;
    let expectedBuyerPaymentAccountPayload = (await ctx.getBuyer().havenod?.getPaymentAccount(ctx.maker.havenod == ctx.getBuyer().havenod ? ctx.makerPaymentAccountId! : ctx.takerPaymentAccountId!))?.getPaymentAccountPayload();
    let expectedSellerPaymentAccountPayload = (await ctx.getSeller().havenod?.getPaymentAccount(ctx.maker.havenod == ctx.getBuyer().havenod ? ctx.takerPaymentAccountId! : ctx.makerPaymentAccountId!))?.getPaymentAccountPayload();

    // seller does not have buyer's payment account payload until payment sent
    if (ctx.isStopped) return ctx.offerId!;
    let fetchedTrade = await ctx.getSeller().havenod!.getTrade(ctx.offerId!);
    let contract = fetchedTrade.getContract()!;
    let buyerPaymentAccountPayload = contract.getIsBuyerMakerAndSellerTaker() ? contract.getMakerPaymentAccountPayload() : contract.getTakerPaymentAccountPayload();
    if (ctx.isPaymentSent) expect(buyerPaymentAccountPayload).toEqual(expectedBuyerPaymentAccountPayload);
    else expect(buyerPaymentAccountPayload).toBeUndefined();

    // record context before payout
    if (ctx.isStopped) return ctx.offerId!;
    if (!ctx.isCompleted) {
      if (ctx.maker.havenod) ctx.maker.balancesBeforePayout = await ctx.maker.havenod!.getBalances();
      if (ctx.taker.havenod) ctx.taker.balancesBeforePayout = await ctx.taker.havenod!.getBalances();
    }

    // shut down buyer and seller if configured
    if (ctx.isStopped) return ctx.offerId!;
    ctx.usedPorts = [getPort(ctx.getBuyer().havenod!.getUrl()), getPort(ctx.getSeller().havenod!.getUrl())];
    const promises: Promise<void>[] = [];
    ctx.buyerAppName = ctx.getBuyer().havenod!.getAppName();
    if (ctx.buyerOfflineAfterTake) {
      HavenoUtils.log(0, "Buyer going offline");
      assertNotStaticClient(ctx.getBuyer().havenod!);
      promises.push(releaseHavenoProcess(ctx.getBuyer().havenod!));
      if (ctx.isBuyerMaker()) ctx.maker.havenod = undefined;
      else ctx.taker.havenod = undefined;
    }
    ctx.sellerAppName = ctx.getSeller().havenod!.getAppName();
    if (ctx.sellerOfflineAfterTake) {
      HavenoUtils.log(0, "Seller going offline");
      assertNotStaticClient(ctx.getSeller().havenod!);
      promises.push(releaseHavenoProcess(ctx.getSeller().havenod!));
      if (ctx.isBuyerMaker()) ctx.taker.havenod = undefined;
      else ctx.maker.havenod = undefined;
    }
    await Promise.all(promises);

    // wait for deposit txs to unlock
    if (ctx.isStopped) return ctx.offerId!;
    if (ctx.hasBuyerAsTakerWithoutDeposit()) await waitForUnlockedTxs(trade.getMakerDepositTxId());
    else await waitForUnlockedTxs(trade.getMakerDepositTxId(), trade.getTakerDepositTxId());

    // buyer comes online if offline and used
    if (ctx.isStopped) return ctx.offerId!;
    if (ctx.buyerOfflineAfterTake && ((ctx.buyerSendsPayment && !ctx.isPaymentSent && ctx.sellerDisputeContext !== DisputeContext.OPEN_AFTER_DEPOSITS_UNLOCK) || (ctx.buyerDisputeContext === DisputeContext.OPEN_AFTER_DEPOSITS_UNLOCK && !ctx.buyerOpenedDispute))) {
      HavenoUtils.log(0, "Buyer coming online");
      const buyer = await initHaveno({appName: ctx.buyerAppName, excludePorts: ctx.usedPorts}); // change buyer's node address
      if (ctx.isBuyerMaker()) ctx.maker.havenod = buyer;
      else ctx.taker.havenod = buyer;
      ctx.usedPorts.push(getPort(buyer.getUrl()));
    }

    // wait for traders to observe
    if (ctx.isStopped) return ctx.offerId!;
    await wait(TestConfig.maxWalletStartupMs + ctx.walletSyncPeriodMs * 2);

    // test buyer trade state if online
    if (ctx.isStopped) return ctx.offerId!;
    const expectedState = ctx.isPaymentSent ? "PAYMENT_SENT" : "DEPOSITS_UNLOCKED" // TODO: test COMPLETED, PAYMENT_RECEIVED states?
    if (ctx.getBuyer().havenod) {
      expect((await ctx.getBuyer().havenod!.getTrade(ctx.offer!.getId())).getPhase()).toEqual(expectedState);
      fetchedTrade = await ctx.getBuyer().havenod!.getTrade(ctx.offerId!);
      expect(fetchedTrade.getIsDepositsUnlocked()).toBe(true);
      expect(fetchedTrade.getPhase()).toEqual(expectedState);
    }

    // test seller trade state if online
    if (ctx.isStopped) return ctx.offerId!;
    if (ctx.getSeller().havenod) {
      fetchedTrade = await ctx.getSeller().havenod!.getTrade(trade.getTradeId());
      expect(fetchedTrade.getIsDepositsUnlocked()).toBe(true);
      expect(fetchedTrade.getPhase()).toEqual(expectedState);
    }

    // buyer has seller's payment account payload after first confirmation
    if (ctx.isStopped) return ctx.offerId!;
    let sellerPaymentAccountPayload: PaymentAccountPayload | undefined;
    let form;
    let expectedForm;
    if (ctx.getBuyer().havenod) {
      fetchedTrade = await ctx.getBuyer().havenod!.getTrade(ctx.offerId!);
      contract = fetchedTrade.getContract()!;
      sellerPaymentAccountPayload = contract.getIsBuyerMakerAndSellerTaker() ? contract.getTakerPaymentAccountPayload() : contract.getMakerPaymentAccountPayload();
      expect(sellerPaymentAccountPayload).toEqual(expectedSellerPaymentAccountPayload);
      form = await ctx.getBuyer().havenod!.getPaymentAccountPayloadForm(sellerPaymentAccountPayload!);
      expectedForm = await ctx.getBuyer().havenod!.getPaymentAccountPayloadForm(expectedSellerPaymentAccountPayload!);
      expect(HavenoUtils.formToString(form)).toEqual(HavenoUtils.formToString(expectedForm));
    }

    // buyer notified to send payment TODO

    // open dispute(s) if configured
    if (ctx.isStopped) return ctx.offerId!;
    if (ctx.buyerDisputeContext === DisputeContext.OPEN_AFTER_DEPOSITS_UNLOCK && !ctx.buyerOpenedDispute) {
      await ctx.getBuyer().havenod!.openDispute(ctx.offerId!);
      ctx.buyerOpenedDispute = true;
      ctx.disputeOpener = SaleRole.BUYER;
    }
    if (ctx.isStopped) return ctx.offerId!;
    if (ctx.sellerDisputeContext === DisputeContext.OPEN_AFTER_DEPOSITS_UNLOCK && !ctx.sellerOpenedDispute) {
      await ctx.getSeller().havenod!.openDispute(ctx.offerId!);
      ctx.sellerOpenedDispute = true;
      if (!ctx.disputeOpener) ctx.disputeOpener = SaleRole.SELLER;
    }

    // handle opened dispute
    if (ctx.isStopped) return ctx.offerId!;
    if (ctx.wasDisputeOpened()) {

      // test open dispute
      await testOpenDispute(ctx);

      // resolve dispute if configured
      if (ctx.resolveDispute) {
        await resolveDispute(ctx);
        return ctx.offerId!;
      }
    }

    // buyer confirms payment is sent
    if (ctx.isStopped) return ctx.offerId!;
    if (!ctx.buyerSendsPayment) return ctx.offer!.getId();
    else if (!ctx.isPaymentSent) {
      HavenoUtils.log(1, "Buyer confirming payment sent");
      await ctx.getBuyer().havenod!.confirmPaymentSent(trade.getTradeId());
      ctx.isPaymentSent = true;
      fetchedTrade = await ctx.getBuyer().havenod!.getTrade(trade.getTradeId());
      expect(fetchedTrade.getPhase()).toEqual("PAYMENT_SENT");
    }

    // buyer goes offline if configured
    if (ctx.isStopped) return ctx.offerId!;
    if (ctx.buyerOfflineAfterPaymentSent) {
      HavenoUtils.log(0, "Buyer going offline");
      assertNotStaticClient(ctx.getBuyer().havenod!);
      await releaseHavenoProcess(ctx.getBuyer().havenod!);
      if (ctx.isBuyerMaker()) ctx.maker.havenod = undefined;
      else ctx.taker.havenod = undefined;
    }

    // seller comes online if offline
    if (ctx.isStopped) return ctx.offerId!;
    if (!ctx.getSeller().havenod) {
      HavenoUtils.log(0, "Seller coming online");
      const seller = await initHaveno({appName: ctx.sellerAppName, excludePorts: ctx.usedPorts});
      if (ctx.isBuyerMaker()) ctx.taker.havenod = seller;
      else ctx.maker.havenod = seller;
      ctx.usedPorts.push(getPort(ctx.getSeller().havenod!.getUrl()))
    }

    // seller notified payment is sent
    if (ctx.isStopped) return ctx.offerId!;
    await wait(ctx.maxTimePeerNoticeMs + TestConfig.maxWalletStartupMs); // TODO: test notification
    if (ctx.sellerOfflineAfterTake) await wait(ctx.walletSyncPeriodMs); // wait to process mailbox messages
    fetchedTrade = await ctx.getSeller().havenod!.getTrade(trade.getTradeId());
    expect(fetchedTrade.getPhase()).toEqual("PAYMENT_SENT");
    expect(fetchedTrade.getPayoutState()).toEqual("PAYOUT_UNPUBLISHED");

    // seller has buyer's payment account payload after payment sent
    if (ctx.isStopped) return ctx.offerId!;
    fetchedTrade = await ctx.getSeller().havenod!.getTrade(ctx.offerId!);
    contract = fetchedTrade.getContract()!;
    buyerPaymentAccountPayload = contract.getIsBuyerMakerAndSellerTaker() ? contract.getMakerPaymentAccountPayload() : contract.getTakerPaymentAccountPayload();
    expect(buyerPaymentAccountPayload).toEqual(expectedBuyerPaymentAccountPayload);
    form = await ctx.getSeller().havenod!.getPaymentAccountPayloadForm(sellerPaymentAccountPayload!);
    expectedForm = await ctx.getSeller().havenod!.getPaymentAccountPayloadForm(expectedSellerPaymentAccountPayload!);
    expect(HavenoUtils.formToString(form)).toEqual(HavenoUtils.formToString(expectedForm));

    // open dispute(s) if configured
    if (ctx.isStopped) return ctx.offerId!;
    if (ctx.buyerDisputeContext === DisputeContext.OPEN_AFTER_PAYMENT_SENT && !ctx.buyerOpenedDispute) {
      await ctx.getBuyer().havenod!.openDispute(ctx.offerId!);
      ctx.buyerOpenedDispute = true;
      if (!ctx.disputeOpener) ctx.disputeOpener = SaleRole.BUYER;
    }
    if (ctx.isStopped) return ctx.offerId!;
    if (ctx.sellerDisputeContext === DisputeContext.OPEN_AFTER_PAYMENT_SENT && !ctx.sellerOpenedDispute) {
      await ctx.getSeller().havenod!.openDispute(ctx.offerId!);
      ctx.sellerOpenedDispute = true;
      if (!ctx.disputeOpener) ctx.disputeOpener = SaleRole.SELLER;
    }
    if (ctx.isStopped) return ctx.offerId!;
    if (ctx.wasDisputeOpened()) await testOpenDispute(ctx);

    // if dispute opened, resolve dispute if configured
    if (ctx.isStopped) return ctx.offerId!;
    if (ctx.wasDisputeOpened() && ctx.resolveDispute) {
      await resolveDispute(ctx);
      return ctx.offerId!;
    }

    // seller confirms payment is received
    if (ctx.isStopped) return ctx.offerId!;
    if (!ctx.sellerReceivesPayment) return ctx.offer!.getId();
    else if (!ctx.isPaymentReceived) {
      HavenoUtils.log(1, "Seller confirming payment received");
      await ctx.getSeller().havenod!.confirmPaymentReceived(trade.getTradeId());
      ctx.isPaymentReceived = true;
      fetchedTrade = await ctx.getSeller().havenod!.getTrade(trade.getTradeId());
      expect(fetchedTrade.getPhase()).toEqual("PAYMENT_RECEIVED");
      await wait(ctx.walletSyncPeriodMs * 2); // buyer or arbitrator will sign and publish payout tx
      await testTradeState(await ctx.getSeller().havenod!.getTrade(trade.getTradeId()), {phase: "PAYMENT_RECEIVED", payoutState: ["PAYOUT_PUBLISHED", "PAYOUT_CONFIRMED", "PAYOUT_UNLOCKED"], isCompleted: false, isPayoutPublished: true});
    }

    // payout tx is published by buyer (priority) or arbitrator
    if (ctx.isStopped) return ctx.offerId!;
    await wait(ctx.walletSyncPeriodMs);
    await testTradeState(await ctx.getSeller().havenod!.getTrade(trade.getTradeId()), {phase: "PAYMENT_RECEIVED", payoutState: ["PAYOUT_PUBLISHED", "PAYOUT_CONFIRMED", "PAYOUT_UNLOCKED"], isCompleted: false, isPayoutPublished: true});
    await testTradeState(await ctx.arbitrator.havenod!.getTrade(trade.getTradeId()), {phase: "PAYMENT_RECEIVED", payoutState: ["PAYOUT_PUBLISHED", "PAYOUT_CONFIRMED", "PAYOUT_UNLOCKED"], isCompleted: true, isPayoutPublished: true}); // arbitrator trade auto completes

    // buyer comes online if offline
    if (ctx.isStopped) return ctx.offerId!;
    if (ctx.buyerOfflineAfterPaymentSent) {
      HavenoUtils.log(0, "Buyer coming online");
      const buyer = await initHaveno({appName: ctx.buyerAppName, excludePorts: ctx.usedPorts});
      if (ctx.isBuyerMaker()) ctx.maker.havenod = buyer;
      else ctx.taker.havenod = buyer;
      ctx.usedPorts.push(getPort(buyer.getUrl()));
      HavenoUtils.log(1, "Done starting buyer");
      await wait(TestConfig.maxWalletStartupMs + ctx.walletSyncPeriodMs);
    }
    if (ctx.isStopped) return ctx.offerId!;
    await testTradeState(await ctx.getBuyer().havenod!.getTrade(trade.getTradeId()), {phase: "PAYMENT_RECEIVED", payoutState: ["PAYOUT_PUBLISHED", "PAYOUT_CONFIRMED", "PAYOUT_UNLOCKED"], isCompleted: false, isPayoutPublished: true});

    // test trade completion
    if (ctx.isStopped) return ctx.offerId!;
    await ctx.getBuyer().havenod!.completeTrade(trade.getTradeId());
    await testTradeState(await ctx.getBuyer().havenod!.getTrade(trade.getTradeId()), {phase: "PAYMENT_RECEIVED", payoutState: ["PAYOUT_PUBLISHED", "PAYOUT_CONFIRMED", "PAYOUT_UNLOCKED"], isCompleted: true, isPayoutPublished: true});
    await ctx.getSeller().havenod!.completeTrade(trade.getTradeId());
    await testTradeState(await ctx.getSeller().havenod!.getTrade(trade.getTradeId()), {phase: "PAYMENT_RECEIVED", payoutState: ["PAYOUT_PUBLISHED", "PAYOUT_CONFIRMED", "PAYOUT_UNLOCKED"], isCompleted: true, isPayoutPublished: true});

    // record balances on completion
    if (ctx.isStopped) return ctx.offerId!;
    if (!ctx.maker.balancesAfterPayout) {
      ctx.maker.balancesAfterPayout = await ctx.maker.havenod?.getBalances();
      ctx.taker.balancesAfterPayout = await ctx.taker.havenod?.getBalances();

      // record payout tx id
      ctx.payoutTxId = (await ctx.getSeller().havenod!.getTrade(ctx.offerId!)).getPayoutTxId();
      if (!ctx.payoutTxId) ctx.payoutTxId = (await ctx.arbitrator.havenod!.getTrade(ctx.offerId!)).getPayoutTxId(); // TODO: arbitrator will sign and publish payout tx id if buyer is offline; detect payout tx id on 0 conf
      if (!ctx.payoutTxId) ctx.payoutTxId = (await ctx.getBuyer().havenod!.getTrade(ctx.offerId!)).getPayoutTxId(); // TODO: arbitrator does not have payout tx id until first confirmation because they defer publishing
    }

    // test balances after payout tx unless other trades can interfere
    if (ctx.isStopped) return ctx.offerId!;
    if (!ctx.concurrentTrades) await testAmountsAfterComplete(ctx);

    // test payout unlock
    if (ctx.isStopped) return ctx.offerId!;
    await testTradePayoutUnlock(ctx);
    if (ctx.offer!.getId() !== ctx.offerId) throw new Error("Expected offer ids to match");
    return ctx.offer!.getId();
  } catch (err: any) {
    HavenoUtils.log(0, "Error executing trade " + ctx!.offerId + (ctx!.index === undefined ? "" : " at index " + ctx!.index) + ": " + err.message);
    HavenoUtils.log(0, await ctx.toSummary());
    throw err;
  }
}

async function testTradePayoutUnlock(ctxP: Partial<TradeContext>) {
  let ctx = TradeContext.init(ctxP);

  // test after payout confirmed
  if (!ctx.testPayoutConfirmed) return;
  const height = await monerod.getHeight();
  const payoutTxId = (await ctx.arbitrator.havenod!.getTrade(ctx.offerId!)).getPayoutTxId();
  let trade = await ctx.arbitrator.havenod!.getTrade(ctx.offerId!);
  if (trade.getPayoutState() !== "PAYOUT_CONFIRMED") await mineToHeight(height + 1);
  await wait(TestConfig.maxWalletStartupMs + ctx.walletSyncPeriodMs * 2);
  const disputeState = ctx.wasDisputeOpened() ? "DISPUTE_CLOSED" : "NO_DISPUTE";
  if (ctx.getBuyer().havenod) await testTradeState(await ctx.getBuyer().havenod!.getTrade(ctx.offerId!), {phase: ctx.getPhase(), disputeState: disputeState, payoutState: ["PAYOUT_CONFIRMED", "PAYOUT_UNLOCKED"]});
  if (ctx.getSeller().havenod) await testTradeState(await ctx.getSeller().havenod!.getTrade(ctx.offerId!), {phase: ctx.getPhase(), disputeState: disputeState, payoutState: ["PAYOUT_CONFIRMED", "PAYOUT_UNLOCKED"]});
  await testTradeState(await ctx.arbitrator.havenod!.getTrade(ctx.offerId!), {phase: ctx.getPhase(), payoutState: ["PAYOUT_CONFIRMED", "PAYOUT_UNLOCKED"]});
  let payoutTx = ctx.getBuyer().havenod ? await ctx.getBuyer().havenod?.getXmrTx(payoutTxId) : await ctx.getSeller().havenod?.getXmrTx(payoutTxId);
  expect(payoutTx?.getIsConfirmed());

  // test after payout unlocked
  if (!ctx.testPayoutUnlocked) return;
  trade = await ctx.arbitrator.havenod!.getTrade(ctx.offerId!);
  if (trade.getPayoutState() !== "PAYOUT_UNLOCKED") await mineToHeight(height + 10);
  await wait(TestConfig.maxWalletStartupMs + ctx.walletSyncPeriodMs * 2);
  if (await ctx.getBuyer().havenod) await testTradeState(await ctx.getBuyer().havenod!.getTrade(ctx.offerId!), {phase: ctx.getPhase(), disputeState: disputeState, payoutState: ["PAYOUT_UNLOCKED"]});
  if (await ctx.getSeller().havenod) await testTradeState(await ctx.getSeller().havenod!.getTrade(ctx.offerId!), {phase: ctx.getPhase(), disputeState: disputeState, payoutState: ["PAYOUT_UNLOCKED"]});
  await testTradeState(await ctx.arbitrator.havenod!.getTrade(ctx.offerId!), {phase: ctx.getPhase(), disputeState: disputeState, payoutState: ["PAYOUT_UNLOCKED"]});
  payoutTx = ctx.getBuyer().havenod ? await ctx.getBuyer().havenod?.getXmrTx(payoutTxId) : await ctx.getSeller().havenod?.getXmrTx(payoutTxId);
  expect(!payoutTx?.getIsLocked());
}

async function testTradeState(trade: TradeInfo, ctx: Partial<TradeContext>) {
  assert.equal(trade.getPhase(), ctx.phase, "expected trade phase to be " + ctx.phase + " but was " + trade.getPhase() + " for trade " + trade.getTradeId());
  assert(moneroTs.GenUtils.arrayContains(ctx.payoutState, trade.getPayoutState()), "expected one of payout state " + ctx.payoutState + " but was " + trade.getPayoutState() + " for trade " + trade.getTradeId());
  assert(trade.getStartTime() > 0, "expected trade start timestamp to be greater than 0 but was " + trade.getStartTime() + " for trade " + trade.getTradeId());
  assert(trade.getMaxDurationMs() > 0, "expected trade max duration to be greater than 0 but was " + trade.getMaxDurationMs() + " for trade " + trade.getTradeId());
  assert(trade.getDeadlineTime() > 0, "expected trade deadline timestamp to be greater than 0 but was " + trade.getDeadlineTime() + " for trade " + trade.getTradeId());
  assert(trade.getStartTime() + trade.getMaxDurationMs() === trade.getDeadlineTime(), "expected trade deadline to be equal to start timestamp + max duration but was " + trade.getDeadlineTime() + " for trade " + trade.getTradeId());
  if (ctx.disputeState) expect(trade.getDisputeState()).toEqual(ctx.disputeState);
  if (ctx.isCompleted !== undefined) expect(trade.getIsCompleted()).toEqual(ctx.isCompleted);
  if (ctx.isPayoutPublished !== undefined) expect(trade.getIsPayoutPublished()).toEqual(ctx.isPayoutPublished);
  if (ctx.isPayoutConfirmed !== undefined) expect(trade.getIsPayoutConfirmed()).toEqual(ctx.isPayoutConfirmed);
  if (ctx.isPayoutConfirmed) expect(trade.getIsPayoutPublished()).toEqual(true);
  if (ctx.isPayoutUnlocked !== undefined) expect(trade.getIsPayoutUnlocked()).toEqual(ctx.isPayoutUnlocked);
  if (ctx.isPayoutUnlocked) {
    expect(trade.getIsPayoutConfirmed()).toEqual(true);
    expect(trade.getIsPayoutPublished()).toEqual(true);
  }
}

async function makeOffer(ctxP?: Partial<TradeContext>): Promise<OfferInfo> {
  let ctx = TradeContext.init(ctxP);

  // wait for unlocked balance
  if (!ctx.concurrentTrades && ctx.awaitFundsToMakeOffer) await waitForAvailableBalance(ctx.offerAmount! * 2n, ctx.maker.havenod);

  // create payment account if not given // TODO: re-use existing payment account
  if (!ctx.makerPaymentAccountId) ctx.makerPaymentAccountId = (await createPaymentAccount(ctx.maker.havenod!, ctx.assetCode!)).getId();

  // get unlocked balance before reserving offer
  let unlockedBalanceBefore = BigInt((await ctx.maker.havenod!.getBalances()).getAvailableBalance());
  if (ctx.awaitFundsToMakeOffer && unlockedBalanceBefore === 0n) {
    HavenoUtils.log(0, "WARNING: unlocked balance before posting offer is 0, waiting...");
    await wait(5000);
    unlockedBalanceBefore = BigInt((await ctx.maker.havenod!.getBalances()).getAvailableBalance());
    if (unlockedBalanceBefore === 0n) throw new Error("Unlocked balance before posting offer was 0, even after waiting");
  }

  // initialize balances before offer, once
  if (!ctx.maker.balancesBeforeOffer) {
    ctx.maker.balancesBeforeOffer = await ctx.maker.havenod?.getBalances();
    ctx.taker.balancesBeforeOffer = await ctx.taker.havenod?.getBalances();
  }

  // transfer context from clone source
  if (ctx.sourceOfferId) {
    const sourceOffer = await ctx.maker.havenod!.getMyOffer(ctx.sourceOfferId);
    ctx.isPrivateOffer = sourceOffer.getIsPrivateOffer();
    ctx.direction = sourceOffer.getDirection() == "BUY" ? OfferDirection.BUY : OfferDirection.SELL;
    ctx.buyerAsTakerWithoutDeposit = ctx.isPrivateOffer && ctx.direction === OfferDirection.SELL && sourceOffer.getBuyerSecurityDepositPct() === 0;
  }

  // post or clone offer
  const offer: OfferInfo = await ctx.maker.havenod!.postOffer({
    direction: ctx.direction,
    amount: ctx.offerAmount,
    assetCode: ctx.assetCode,
    paymentAccountId: ctx.makerPaymentAccountId,
    securityDepositPct: ctx.securityDepositPct,
    price: ctx.price,
    marketPriceMarginPct: ctx.priceMargin,
    triggerPrice: ctx.triggerPrice,
    minAmount: ctx.offerMinAmount,
    reserveExactAmount: ctx.reserveExactAmount,
    isPrivateOffer: ctx.isPrivateOffer,
    buyerAsTakerWithoutDeposit: ctx.buyerAsTakerWithoutDeposit,
    extraInfo: ctx.extraInfo,
    sourceOfferId: ctx.sourceOfferId
  });

  // test offer
  testOffer(offer, ctx, true);

  // offer is included in my offers only
  if (!getOffer(await ctx.maker.havenod!.getMyOffers(ctx.assetCode!, ctx.direction), offer.getId())) {
    console.warn("Offer is not included in my offers after posting, waiting up to 10 seconds");
    await wait(10000); // TODO: remove this wait time
    if (!getOffer(await ctx.maker.havenod!.getMyOffers(ctx.assetCode!, ctx.direction), offer.getId())) throw new Error("Offer " + offer.getId() + " was not found in my offers");
  }
  if (getOffer(await ctx.maker.havenod!.getOffers(ctx.assetCode!, ctx.direction), offer.getId())) throw new Error("My offer " + offer.getId() + " should not appear in available offers");

  // collect context
  ctx.maker.splitOutputTxFee = BigInt(offer.getSplitOutputTxFee());
  ctx.taker.splitOutputTxFee = 0n;
  ctx.challenge = offer.getChallenge();

  // offer amounts are adjusted to 4 decimals
  if (!ctx.offerMinAmount) ctx.offerMinAmount = ctx.offerAmount;
  expect(Math.abs(HavenoUtils.percentageDiff(ctx.offerAmount!, BigInt(offer.getAmount())))).toBeLessThan(TestConfig.maxAdjustmentPct);
  expect(Math.abs(HavenoUtils.percentageDiff(ctx.offerMinAmount!, BigInt(offer.getMinAmount())))).toBeLessThan(TestConfig.maxAdjustmentPct);
  if (ctx.tradeAmount === ctx.offerAmount) ctx.tradeAmount = BigInt(offer.getAmount()); // adjust trade amount
  ctx.offerAmount = BigInt(offer.getAmount());
  ctx.offerMinAmount = BigInt(offer.getMinAmount());

  // unlocked balance has decreased
  let unlockedBalanceAfter = BigInt((await ctx.maker.havenod!.getBalances()).getAvailableBalance());
  if (offer.getState() === "PENDING") {
    if (!ctx.reserveExactAmount && unlockedBalanceAfter !== unlockedBalanceBefore) throw new Error("Unlocked balance should not change for scheduled offer " + offer.getId());
  } else if (offer.getState() === "AVAILABLE") {
    if (!ctx.sourceOfferId && unlockedBalanceAfter === unlockedBalanceBefore) {
      console.warn("Unlocked balance did not change after posting offer, waiting a sync period");
      await wait(ctx.walletSyncPeriodMs);
      unlockedBalanceAfter = BigInt((await ctx.maker.havenod!.getBalances()).getAvailableBalance());
      if (unlockedBalanceAfter === unlockedBalanceBefore) throw new Error("Unlocked balance did not change after posting offer " + offer.getId() + ", before=" + unlockedBalanceBefore + ", after=" + unlockedBalanceAfter);
    }
  } else if (!ctx.sourceOfferId) { // cloned offers can be deactivated after creating
    throw new Error("Unexpected offer state after posting: " + offer.getState());
  }

  return offer;
}

async function takeOffer(ctxP: Partial<TradeContext>): Promise<TradeInfo> {
  let ctx = TradeContext.init(ctxP);

  // assign default config
  Object.assign(ctx,  new TradeContext(TestConfig.trade), Object.assign({}, ctx));

  // taker sees offer
  if (!ctx.offerId) throw new Error("Must provide offer id");
  const takerOffer = getOffer(await ctx.taker.havenod!.getOffers(ctx.assetCode!, ctx.direction), ctx.offerId);
  if (!takerOffer) throw new Error("Offer " + ctx.offerId + " was not found in taker's offers");
  expect(takerOffer.getState()).toEqual("UNKNOWN"); // TODO: offer state should be known

  // wait for unlocked balance
  if (ctx.awaitFundsToTakeOffer) await waitForAvailableBalance(ctx.offerAmount! * 2n, ctx.taker.havenod);

  // create payment account if not given // TODO: re-use existing payment account
  if (!ctx.takerPaymentAccountId) ctx.takerPaymentAccountId = (await createPaymentAccount(ctx.taker.havenod!, ctx.assetCode!)).getId();

  // register to receive notifications
  const makerNotifications: NotificationMessage[] = [];
  const takerNotifications: NotificationMessage[] = [];
  await ctx.maker.havenod!.addNotificationListener(notification => { makerNotifications.push(notification); });
  await ctx.taker.havenod!.addNotificationListener(notification => { takerNotifications.push(notification); });

  // record balances before offer taken, once
  if (ctx.taker.balancesBeforeTake === undefined) {
    ctx.maker.balancesBeforeTake = await ctx.maker.havenod?.getBalances();
    ctx.taker.balancesBeforeTake = await ctx.taker.havenod?.getBalances();
  }

  // take offer
  const takerBalancesBefore: XmrBalanceInfo = await ctx.taker.havenod!.getBalances();
  const startTime = Date.now();
  HavenoUtils.log(1, "Taking offer " + ctx.offerId);
  const takerTrade = await ctx.taker.havenod!.takeOffer(ctx.offerId, ctx.takerPaymentAccountId!, ctx.tradeAmount, ctx.challenge);
  HavenoUtils.log(1, "Done taking offer " + ctx.offerId + " in " + (Date.now() - startTime) + " ms");

  // maker is notified that offer is taken
  await wait(ctx.maxTimePeerNoticeMs);
  const tradeNotifications = getNotifications(makerNotifications, NotificationMessage.NotificationType.TRADE_UPDATE, takerTrade.getTradeId());
  expect(tradeNotifications.length).toBeGreaterThanOrEqual(1); // we get notification of deposits published at least
  assert(moneroTs.GenUtils.arrayContains(["DEPOSITS_PUBLISHED", "DEPOSITS_CONFIRMED", "DEPOSITS_UNLOCKED"], tradeNotifications[0].getTrade()!.getPhase()), "Unexpected trade phase: " + tradeNotifications[0].getTrade()!.getPhase());
  expect(tradeNotifications[0].getTitle()).toEqual("Offer Taken");
  expect(tradeNotifications[0].getMessage()).toEqual("Your offer " + ctx.offerId + " has been accepted");

  // set context after offer taken, once
  if (ctx.getBuyer().balancesAfterTake === undefined) {

    // wait to observe deposit txs
    ctx.arbitrator.trade = await ctx.arbitrator.havenod!.getTrade(ctx.offerId!);
    ctx.maker.depositTx = await monerod.getTx(ctx.arbitrator.trade!.getMakerDepositTxId());
    if (ctx.hasBuyerAsTakerWithoutDeposit()) assert(!ctx.arbitrator.trade!.getTakerDepositTxId());
    else ctx.taker.depositTx = await monerod.getTx(ctx.arbitrator.trade!.getTakerDepositTxId());
    if (!ctx.maker.depositTx || (!ctx.taker.depositTx && !ctx.hasBuyerAsTakerWithoutDeposit())) {
        if (!ctx.maker.depositTx) HavenoUtils.log(0, "Maker deposit tx not found with id " + ctx.arbitrator.trade!.getMakerDepositTxId() + ", waiting...");
        if (!ctx.taker.depositTx && !ctx.hasBuyerAsTakerWithoutDeposit()) HavenoUtils.log(0, "Taker deposit tx not found with id " + ctx.arbitrator.trade!.getTakerDepositTxId() + ", waiting...");
        await wait(ctx.walletSyncPeriodMs);
        ctx.maker.depositTx = await monerod.getTx(ctx.arbitrator.trade!.getMakerDepositTxId());
        if (!ctx.hasBuyerAsTakerWithoutDeposit()) ctx.taker.depositTx = await monerod.getTx(ctx.arbitrator.trade!.getTakerDepositTxId());
        if (!ctx.maker.depositTx) throw new Error("Maker deposit tx not found with id " + ctx.arbitrator.trade!.getMakerDepositTxId());
        if (!ctx.taker.depositTx && !ctx.hasBuyerAsTakerWithoutDeposit()) throw new Error("Taker deposit tx not found with id " + ctx.arbitrator.trade!.getTakerDepositTxId());
    }

    // record context
    ctx.tradeAmount = BigInt(takerTrade.getAmount()); // reassign trade amount which could be adjusted
    ctx.maker.trade = await ctx.maker.havenod!.getTrade(ctx.offerId!);
    ctx.taker.trade = await ctx.taker.havenod!.getTrade(ctx.offerId!);
    ctx.maker.balancesAfterTake = await ctx.maker.havenod!.getBalances();
    ctx.taker.balancesAfterTake = await ctx.taker.havenod!.getBalances();
    ctx.maker.depositTxFee = BigInt(ctx.maker.depositTx!.getFee());
    ctx.taker.depositTxFee = BigInt(ctx.hasBuyerAsTakerWithoutDeposit() ? 0 : ctx.taker.depositTx!.getFee());
    ctx.maker.tradeFee = BigInt(takerTrade.getMakerFee());
    ctx.taker.tradeFee = BigInt(takerTrade.getTakerFee());
    if (ctx.hasBuyerAsTakerWithoutDeposit()) assert.equal(ctx.taker.depositTxFee, 0n);
    ctx.getBuyer().securityDepositActual = BigInt(takerTrade.getBuyerSecurityDeposit()!);
    ctx.getSeller().securityDepositActual = BigInt(takerTrade.getSellerSecurityDeposit()!);
  }

  // test trade model
  assert.equal(ctx.maker.trade!.getDate(), ctx.taker.trade!.getDate(), "Expected trade date to match");
  assert.equal(ctx.taker.trade!.getDate(), ctx.arbitrator.trade!.getDate(), "Expected trade date to match");
  await testTrade(takerTrade, ctx);

  // test buyer and seller balances after offer taken
  if (!ctx.concurrentTrades) {
    ctx.arbitrator!.trade = await ctx.arbitrator.havenod!.getTrade(ctx.offerId!);

    // test buyer balances after offer taken
    const buyerBalanceDiffReservedTrade = BigInt(ctx.getBuyer().balancesAfterTake!.getReservedTradeBalance()) - BigInt(ctx.getBuyer().balancesBeforeTake!.getReservedTradeBalance());
    expect(buyerBalanceDiffReservedTrade).toEqual(BigInt(takerTrade.getBuyerSecurityDeposit()!));
    const buyerBalanceDiffReservedOffer = BigInt(ctx.getBuyer().balancesAfterTake!.getReservedOfferBalance()) - BigInt(ctx.getBuyer().balancesBeforeTake!.getReservedOfferBalance());
    const buyerBalanceDiff = BigInt(ctx.getBuyer().balancesAfterTake!.getBalance()) - BigInt(ctx.getBuyer().balancesBeforeTake!.getBalance());
    expect(buyerBalanceDiff).toEqual(-1n * buyerBalanceDiffReservedOffer - buyerBalanceDiffReservedTrade - ctx.getBuyer().depositTxFee! - ctx.getBuyer().tradeFee!);

    // test seller balances after offer taken
    const sellerBalanceDiffReservedTrade = BigInt(ctx.getSeller().balancesAfterTake!.getReservedTradeBalance()) - BigInt(ctx.getSeller().balancesBeforeTake!.getReservedTradeBalance());
    expect(sellerBalanceDiffReservedTrade).toEqual(BigInt(takerTrade.getAmount()) + BigInt(takerTrade.getSellerSecurityDeposit()!));
    const sellerBalanceDiffReservedOffer = BigInt(ctx.getSeller().balancesAfterTake!.getReservedOfferBalance()) - BigInt(ctx.getSeller().balancesBeforeTake!.getReservedOfferBalance());
    const sellerBalanceDiff = BigInt(ctx.getSeller().balancesAfterTake!.getBalance()) - BigInt(ctx.getSeller().balancesBeforeTake!.getBalance());
    expect(sellerBalanceDiff).toEqual(-1n * sellerBalanceDiffReservedOffer - sellerBalanceDiffReservedTrade - ctx.getSeller().depositTxFee! - ctx.getSeller().tradeFee!);

    // test maker balances after offer taken
    const makerBalanceDiffReservedOffer = BigInt(ctx.getMaker().balancesAfterTake!.getReservedOfferBalance()) - BigInt(ctx.getMaker().balancesBeforeTake!.getReservedOfferBalance());
    expect(makerBalanceDiffReservedOffer).toBeLessThan(0n); // TODO: more precise?

    // test taker balances after offer taken
    const takerBalanceDiffReservedOffer = BigInt(ctx.getTaker().balancesAfterTake!.getReservedOfferBalance()) - BigInt(ctx.getTaker().balancesBeforeTake!.getReservedOfferBalance());
    expect(takerBalanceDiffReservedOffer).toEqual(0n);
  }

  // test getting trade for all parties
  await testGetTrade(ctx);

  // offer amounts are adjusted to 4 decimals
  expect(Math.abs(HavenoUtils.percentageDiff(ctx.tradeAmount!, BigInt(takerTrade.getAmount())))).toBeLessThan(TestConfig.maxAdjustmentPct);

  // maker is notified of balance change

  // taker is notified of balance change

  return takerTrade;
}

async function testTrade(trade: TradeInfo, ctx: TradeContext, havenod?: HavenoClient): Promise<void> {
  expect(BigInt(trade.getAmount())).toEqual(ctx!.tradeAmount);

  // test security deposit = max(0.1, trade amount * security deposit pct)
  const expectedSecurityDeposit = HavenoUtils.max(HavenoUtils.xmrToAtomicUnits(.1), HavenoUtils.multiply(ctx.tradeAmount!, ctx.securityDepositPct!));
  expect(BigInt(trade.getBuyerSecurityDeposit())).toEqual(ctx.hasBuyerAsTakerWithoutDeposit() ? 0n : expectedSecurityDeposit - ctx.getBuyer().depositTxFee!);
  expect(BigInt(trade.getSellerSecurityDeposit())).toEqual(expectedSecurityDeposit - ctx.getSeller().depositTxFee!);

  // test phase
  if (!ctx.isPaymentSent) {
    assert(moneroTs.GenUtils.arrayContains(["DEPOSITS_PUBLISHED", "DEPOSITS_CONFIRMED", "DEPOSITS_UNLOCKED"], trade.getPhase()), "Unexpected trade phase: " + trade.getPhase());
  }

  // test role
  const role = trade.getRole();
  assert(role.length > 0); // TODO: test role string based on context


  // TODO: test more fields
}

async function testGetTrade(ctx: TradeContext, havenod?: HavenoClient): Promise<void> {
  if (havenod) {
    const trade = await havenod.getTrade(ctx.offerId!);
    await testTrade(trade, ctx);
    const trades = await havenod.getTrades();
    const foundTrade = trades.find((trade) => trade.getTradeId() === ctx.offerId);
    assert(foundTrade);
    await testTrade(foundTrade, ctx, havenod);
  } else {
    await testGetTrade(ctx, ctx.maker.havenod);
    await testGetTrade(ctx, ctx.taker.havenod);
    await testGetTrade(ctx, ctx.arbitrator.havenod);
  }
}

async function testOpenDispute(ctxP: Partial<TradeContext>) {
  let ctx = TradeContext.init(ctxP);

  // TODO: test open dispute when buyer or seller offline
  if (!ctx.getBuyer().havenod || !ctx.getSeller().havenod) {
    HavenoUtils.log(0, "WARNING: skipping test open dispute tests because a trader is offline"); // TODO: update tests for offline trader
    return;
  }

  // test dispute state
  const openerDispute = await ctx.getDisputeOpener()!.havenod!.getDispute(ctx.offerId!);
  expect(openerDispute.getTradeId()).toEqual(ctx.offerId);
  expect(openerDispute.getIsOpener()).toBe(true);
  expect(openerDispute.getDisputeOpenerIsBuyer()).toBe(ctx.getDisputeOpener()!.havenod === ctx.getBuyer().havenod);

  // get non-existing dispute should fail
  try {
    await ctx.getDisputeOpener()!.havenod!.getDispute("invalid");
    throw new Error("get dispute with invalid id should fail");
  } catch (err: any) {
    assert.equal(err.message, "dispute for trade id 'invalid' not found");
  }

  // peer sees the dispute
  await wait(ctx.maxTimePeerNoticeMs + TestConfig.maxWalletStartupMs);
  const peerDispute = await ctx.getDisputePeer()!.havenod!.getDispute(ctx.offerId!);
  expect(peerDispute.getTradeId()).toEqual(ctx.offerId);
  expect(peerDispute.getIsOpener()).toBe(false || ctx.buyerDisputeContext === ctx.sellerDisputeContext); // TODO: both peers think they're the opener if disputes opened at same time since not waiting for ack

  // arbitrator sees both disputes
  const disputes = await ctx.arbitrator.havenod!.getDisputes();
  expect(disputes.length).toBeGreaterThanOrEqual(2);
  const arbDisputePeer = disputes.find(d => d.getId() === peerDispute.getId());
  assert(arbDisputePeer);
  const arbDisputeOpener = disputes.find(d => d.getId() === openerDispute.getId());
  assert(arbDisputeOpener);

  // arbitrator has seller's payment account info
  let sellerPaymentAccountPayload = arbDisputeOpener.getContract()!.getIsBuyerMakerAndSellerTaker() ? arbDisputeOpener.getTakerPaymentAccountPayload() : arbDisputeOpener.getMakerPaymentAccountPayload();
  let expectedSellerPaymentAccountPayload = (await ctx.getSeller().havenod!.getPaymentAccount(sellerPaymentAccountPayload?.getId()!))!.getPaymentAccountPayload();
  expect(sellerPaymentAccountPayload).toEqual(expectedSellerPaymentAccountPayload);
  expect(await ctx.arbitrator.havenod!.getPaymentAccountPayloadForm(sellerPaymentAccountPayload!)).toEqual(await ctx.arbitrator.havenod!.getPaymentAccountPayloadForm(expectedSellerPaymentAccountPayload!));
  sellerPaymentAccountPayload = arbDisputePeer.getContract()!.getIsBuyerMakerAndSellerTaker() ? arbDisputePeer.getTakerPaymentAccountPayload() : arbDisputeOpener.getMakerPaymentAccountPayload();
  expect(sellerPaymentAccountPayload).toEqual(expectedSellerPaymentAccountPayload);
  expect(await ctx.arbitrator.havenod!.getPaymentAccountPayloadForm(sellerPaymentAccountPayload!)).toEqual(await ctx.arbitrator.havenod!.getPaymentAccountPayloadForm(expectedSellerPaymentAccountPayload!));

  // arbitrator has buyer's payment account info unless seller opens dispute before payment sent
  // TODO: should arbitrator receive buyer's payment account info if seller opens dispute before payment sent?
  let buyerPaymentAccountPayload = arbDisputeOpener.getContract()!.getIsBuyerMakerAndSellerTaker() ? arbDisputeOpener.getMakerPaymentAccountPayload() : arbDisputeOpener.getTakerPaymentAccountPayload();
  if (ctx.getDisputeOpener()!.havenod === ctx.getSeller().havenod && ctx.sellerDisputeContext === DisputeContext.OPEN_AFTER_DEPOSITS_UNLOCK) expect(buyerPaymentAccountPayload).toBeUndefined();
  else {
    expect(buyerPaymentAccountPayload).toBeDefined();
    let expectedBuyerPaymentAccountPayload = (await ctx.getBuyer().havenod!.getPaymentAccount(buyerPaymentAccountPayload!.getId()!))!.getPaymentAccountPayload();
    expect(buyerPaymentAccountPayload).toEqual(expectedBuyerPaymentAccountPayload);
    expect(await ctx.arbitrator.havenod!.getPaymentAccountPayloadForm(buyerPaymentAccountPayload!)).toEqual(await ctx.arbitrator.havenod!.getPaymentAccountPayloadForm(expectedBuyerPaymentAccountPayload!));
  }
  buyerPaymentAccountPayload = arbDisputePeer.getContract()!.getIsBuyerMakerAndSellerTaker() ? arbDisputePeer.getMakerPaymentAccountPayload() : arbDisputePeer.getTakerPaymentAccountPayload();
  if (ctx.getDisputeOpener()!.havenod === ctx.getSeller().havenod && ctx.sellerDisputeContext === DisputeContext.OPEN_AFTER_DEPOSITS_UNLOCK) expect(buyerPaymentAccountPayload).toBeUndefined();
  else {
    expect(buyerPaymentAccountPayload).toBeDefined(); // TODO: this is undefined if both peers open a dispute after deposits unlocked
    let expectedBuyerPaymentAccountPayload = (await ctx.getBuyer().havenod!.getPaymentAccount(buyerPaymentAccountPayload!.getId()!))!.getPaymentAccountPayload();
    expect(buyerPaymentAccountPayload).toEqual(expectedBuyerPaymentAccountPayload);
    expect(await ctx.arbitrator.havenod!.getPaymentAccountPayloadForm(buyerPaymentAccountPayload!)).toEqual(await ctx.arbitrator.havenod!.getPaymentAccountPayloadForm(expectedBuyerPaymentAccountPayload!));
  }

  // register to receive notifications
  const disputeOpenerNotifications: NotificationMessage[] = [];
  const disputePeerNotifications: NotificationMessage[] = [];
  const arbitratorNotifications: NotificationMessage[] = [];
  await ctx.getDisputeOpener()!.havenod!.addNotificationListener(notification => { HavenoUtils.log(3, "Dispute opener received notification " + notification.getType() + " " + (notification.getChatMessage() ? notification.getChatMessage()?.getMessage() : "")); disputeOpenerNotifications.push(notification); });
  await ctx.getDisputePeer()!.havenod!.addNotificationListener(notification => { HavenoUtils.log(3, "Dispute peer received notification " + notification.getType() + " " + (notification.getChatMessage() ? notification.getChatMessage()?.getMessage() : "")); disputePeerNotifications.push(notification); });
  await arbitrator.addNotificationListener(notification => { HavenoUtils.log(3, "Arbitrator received notification " + notification.getType() + " " + (notification.getChatMessage() ? notification.getChatMessage()?.getMessage() : "")); arbitratorNotifications.push(notification); });

  // test chat messages
  if (ctx.testChatMessages) {

    // arbitrator sends chat messages to traders
    HavenoUtils.log(1, "Arbitrator sending chat messages to traders. tradeId=" + ctx.offerId + ", disputeId=" + openerDispute.getId());
    await ctx.arbitrator.havenod!.sendDisputeChatMessage(arbDisputeOpener!.getId(), "Arbitrator chat message to dispute opener", []);
    await ctx.arbitrator.havenod!.sendDisputeChatMessage(arbDisputePeer!.getId(), "Arbitrator chat message to dispute peer", []);

    // traders reply to arbitrator chat messages
    await wait(ctx.maxTimePeerNoticeMs); // wait for arbitrator's message to arrive
    const attachment = new Attachment();
    const bytes = new Uint8Array(Buffer.from("Proof dispute opener was scammed", "utf8"));
    attachment.setBytes(bytes);
    attachment.setFileName("proof.txt");
    const attachment2 = new Attachment();
    const bytes2 = new Uint8Array(Buffer.from("picture bytes", "utf8"));
    attachment2.setBytes(bytes2);
    attachment2.setFileName("proof.png");
    HavenoUtils.log(2, "Dispute opener sending chat message to arbitrator. tradeId=" + ctx.offerId + ", disputeId=" + openerDispute.getId());
    await ctx.getDisputeOpener()!.havenod!.sendDisputeChatMessage(openerDispute.getId(), "Dispute opener chat message", [attachment, attachment2]);
    await wait(ctx.maxTimePeerNoticeMs); // wait for user2's message to arrive
    HavenoUtils.log(2, "Dispute peer sending chat message to arbitrator. tradeId=" + ctx.offerId + ", disputeId=" + peerDispute.getId());
    await ctx.getDisputePeer()!.havenod!.sendDisputeChatMessage(peerDispute.getId(), "Dispute peer chat message", []);

    // test trader chat messages
    await wait(ctx.maxTimePeerNoticeMs);
    let dispute = await ctx.getDisputeOpener()!.havenod!.getDispute(ctx.offerId!);
    let messages = dispute.getChatMessageList();
    expect(messages.length).toBeGreaterThanOrEqual(3); // last messages are chat, first messages are system message and possibly DisputeOpenedMessage acks
    try {
      expect(messages[messages.length - 2].getMessage()).toEqual("Arbitrator chat message to dispute opener");
      expect(messages[messages.length - 1].getMessage()).toEqual("Dispute opener chat message");
    } catch (err) {
      console.log("Dispute peer chat messages length: " + messages.length);
      console.log("Dispute peer chat messages : " + JSON.stringify(messages));
      throw err;
    }

    let attachments = messages[messages.length - 1].getAttachmentsList();
    expect(attachments.length).toEqual(2);
    expect(attachments[0].getFileName()).toEqual("proof.txt");
    expect(attachments[0].getBytes()).toEqual(bytes);
    expect(attachments[1].getFileName()).toEqual("proof.png");
    expect(attachments[1].getBytes()).toEqual(bytes2);
    dispute = await ctx.getDisputePeer()!.havenod!.getDispute(ctx.offerId!);
    messages = dispute.getChatMessageList();
    expect(messages.length).toBeGreaterThanOrEqual(3);
    try {
      expect(messages[messages.length - 2].getMessage()).toEqual("Arbitrator chat message to dispute peer");
      expect(messages[messages.length - 1].getMessage()).toEqual("Dispute peer chat message");
    } catch (err) {
      console.log("Dispute peer chat messages length: " + messages.length);
      console.log("Dispute peer chat messages : " + JSON.stringify(messages));
      throw err;
    }

    // test notifications of chat messages
    let chatNotifications = getNotifications(disputeOpenerNotifications, NotificationMessage.NotificationType.CHAT_MESSAGE, ctx.offerId);
    expect(chatNotifications.length).toBe(1);
    expect(chatNotifications[0].getChatMessage()?.getMessage()).toEqual("Arbitrator chat message to dispute opener");
    chatNotifications = getNotifications(disputePeerNotifications, NotificationMessage.NotificationType.CHAT_MESSAGE, ctx.offerId);
    expect(chatNotifications.length).toBe(1);
    expect(chatNotifications[0].getChatMessage()?.getMessage()).toEqual("Arbitrator chat message to dispute peer");

    // arbitrator has 2 chat messages, one with attachments
    chatNotifications = getNotifications(arbitratorNotifications, NotificationMessage.NotificationType.CHAT_MESSAGE, ctx.offerId);
    expect(chatNotifications.length).toBe(2);
    expect(chatNotifications[0].getChatMessage()?.getMessage()).toEqual("Dispute opener chat message");
    assert(chatNotifications[0].getChatMessage()?.getAttachmentsList());
    attachments = chatNotifications[0].getChatMessage()?.getAttachmentsList()!;
    expect(attachments[0].getFileName()).toEqual("proof.txt");
    expect(attachments[0].getBytes()).toEqual(bytes);
    expect(attachments[1].getFileName()).toEqual("proof.png");
    expect(attachments[1].getBytes()).toEqual(bytes2);
    expect(chatNotifications[1].getChatMessage()?.getMessage()).toEqual("Dispute peer chat message");
  }
}

async function resolveDispute(ctxP: Partial<TradeContext>) {
  let ctx = TradeContext.init(ctxP);

  // stop buyer or seller depending on configuration
  const promises: Promise<void>[] = [];
  if (ctx.getBuyer().havenod && ctx.buyerOfflineAfterDisputeOpened) {
    promises.push(releaseHavenoProcess(ctx.getBuyer().havenod!)); // stop buyer
    if (ctx.isBuyerMaker()) ctx.maker.havenod = undefined;
    else ctx.taker.havenod = undefined;
  }
  if (ctx.getSeller().havenod && ctx.sellerOfflineAfterDisputeOpened) {
    promises.push(releaseHavenoProcess(ctx.getSeller().havenod!)); // stop seller
    if (ctx.isBuyerMaker()) ctx.taker.havenod = undefined;
    else ctx.maker.havenod = undefined;
  }
  await Promise.all(promises);

  // award too much to winner (majority receiver)
  let trade = await arbitrator.getTrade(ctx.offerId!)
  const tradeAmount: bigint = BigInt(trade!.getAmount());
  let customWinnerAmount = tradeAmount + BigInt(trade.getBuyerSecurityDeposit()) + BigInt(trade.getSellerSecurityDeposit() + 1n); // mining fee is subtracted from security deposits
  try {
    await arbitrator.resolveDispute(ctx.offerId!, ctx.disputeWinner!, ctx.disputeReason!, "Winner gets too much", customWinnerAmount);
    throw new Error("Should have failed resolving dispute with too much winner payout");
  } catch (err: any) {
    assert.equal(err.message, "Winner payout is more than the trade wallet's balance");
  }

  // award too little to loser (minority receiver)
  customWinnerAmount = tradeAmount + BigInt(trade.getBuyerSecurityDeposit()) + BigInt(trade.getSellerSecurityDeposit()) - 10000n;
  try {
    await arbitrator.resolveDispute(ctx.offerId!, ctx.disputeWinner!, ctx.disputeReason!, "Loser gets too little", customWinnerAmount);
    throw new Error("Should have failed resolving dispute with insufficient loser payout");
  } catch (err: any) {
    assert.equal(err.message, "Loser payout is too small to cover the mining fee");
  }

  // resolve dispute according to configuration
  HavenoUtils.log(1, "Resolving dispute for trade " + ctx.offerId);
  const startTime = Date.now();
  await arbitrator.resolveDispute(ctx.offerId!, ctx.disputeWinner!, ctx.disputeReason!, ctx.disputeSummary!, ctx.disputeWinnerAmount);
  HavenoUtils.log(1, "Done resolving dispute (" + (Date.now() - startTime) + ")");

  // start buyer or seller depending on configuration
  if (!ctx.getBuyer().havenod && ctx.buyerOfflineAfterDisputeOpened === false) {
    // TODO: wait additional time before starting to avoid 503? need to wait after shut down?
    const buyer = await initHaveno({appName: ctx.buyerAppName, excludePorts: ctx.usedPorts}); // start buyer
    if (ctx.isBuyerMaker()) ctx.maker.havenod = buyer;
    else ctx.taker.havenod = buyer;
    ctx.usedPorts!.push(getPort(buyer.getUrl()));
  }
  if (!ctx.getSeller().havenod && ctx.sellerOfflineAfterDisputeOpened === false) {
    const seller = await initHaveno({appName: ctx.sellerAppName, excludePorts: ctx.usedPorts}); // start seller
    if (ctx.isBuyerMaker()) ctx.taker.havenod = seller;
    else ctx.maker.havenod = seller;
    ctx.usedPorts!.push(getPort(ctx.getSeller().havenod!.getUrl()))
  }

  // test resolved dispute
  await wait(TestConfig.maxWalletStartupMs + ctx.walletSyncPeriodMs * 2);
  if (ctx.getDisputeOpener()!.havenod) {
    const dispute = await ctx.getDisputeOpener()!.havenod!.getDispute(ctx.offerId!);
    assert(dispute.getIsClosed(), "Dispute is not closed for opener, trade " + ctx.offerId);
  }
  if (ctx.getDisputePeer()!.havenod) {
    const dispute = await ctx.getDisputePeer()!.havenod!.getDispute(ctx.offerId!);
    assert(dispute.getIsClosed(), "Dispute is not closed for opener's peer, trade " + ctx.offerId);
  }

  // wait for deferral of payout publish if applicable
  if (ctx.getDisputeOpener() && ctx.disputeWinner === DisputeResult.Winner.SELLER && ctx.sellerOfflineAfterDisputeOpened || ctx.disputeWinner === DisputeResult.Winner.BUYER && ctx.buyerOfflineAfterDisputeOpened) {
    HavenoUtils.log(0, "Awaiting deferral of publishing dispute payout tx");
    await wait(TestConfig.deferralMs); // wait for deferral
  }

  // test trade state
  if (ctx.getBuyer().havenod) {
    await testTradeState(await ctx.getBuyer().havenod!.getTrade(ctx.offerId!), {phase: ctx.getPhase(), payoutState: ["PAYOUT_PUBLISHED", "PAYOUT_CONFIRMED", "PAYOUT_UNLOCKED"], disputeState: "DISPUTE_CLOSED", isCompleted: false, isPayoutPublished: true});
    await ctx.getBuyer().havenod!.completeTrade(trade.getTradeId());
    await testTradeState(await ctx.getBuyer().havenod!.getTrade(ctx.offerId!), {phase: ctx.getPhase(), payoutState: ["PAYOUT_PUBLISHED", "PAYOUT_CONFIRMED", "PAYOUT_UNLOCKED"], disputeState: "DISPUTE_CLOSED", isCompleted: true, isPayoutPublished: true});
  }
  if (ctx.getSeller().havenod) {
    await testTradeState(await ctx.getSeller().havenod!.getTrade(ctx.offerId!), {phase: ctx.getPhase(), payoutState: ["PAYOUT_PUBLISHED", "PAYOUT_CONFIRMED", "PAYOUT_UNLOCKED"], disputeState: "DISPUTE_CLOSED", isCompleted: false, isPayoutPublished: true});
    await ctx.getSeller().havenod!.completeTrade(trade.getTradeId());
    await testTradeState(await ctx.getSeller().havenod!.getTrade(ctx.offerId!), {phase: ctx.getPhase(), payoutState: ["PAYOUT_PUBLISHED", "PAYOUT_CONFIRMED", "PAYOUT_UNLOCKED"], disputeState: "DISPUTE_CLOSED", isCompleted: true, isPayoutPublished: true});
  }
  await testTradeState(await ctx.arbitrator.havenod!.getTrade(ctx.offerId!), {phase: ctx.getPhase(), payoutState: ["PAYOUT_PUBLISHED", "PAYOUT_CONFIRMED", "PAYOUT_UNLOCKED"], disputeState: "DISPUTE_CLOSED", isCompleted: true, isPayoutPublished: true});

  // signing peer has payout tx id on 0 conf (peers must wait for confirmation to see outgoing tx)
  const winnerd = ctx.disputeWinner === DisputeResult.Winner.BUYER ? ctx.getBuyer().havenod : ctx.getSeller().havenod;
  const loserd = ctx.disputeWinner === DisputeResult.Winner.BUYER ? ctx.getSeller().havenod : ctx.getBuyer().havenod;
  const signerd = winnerd ? winnerd : loserd;
  ctx.payoutTxId = (await signerd!.getTrade(ctx.offerId!)).getPayoutTxId();

  // record balances on completion
  if (!ctx.maker.balancesAfterPayout) {
    ctx.maker.balancesAfterPayout = await ctx.maker.havenod?.getBalances();
    ctx.taker.balancesAfterPayout = await ctx.taker.havenod?.getBalances();
  }

  // test balances after payout tx unless concurrent trades
  if (!ctx.concurrentTrades) await testAmountsAfterComplete(ctx);

  // test payout unlock
  await testTradePayoutUnlock(ctx);
}

async function testAmountsAfterComplete(tradeCtx: TradeContext) {

  // get payout tx
  if (!tradeCtx.payoutTxId) throw new Error("Missing payout tx id");
  const payoutTx = await monerod.getTx(tradeCtx.payoutTxId);
  const payoutTxFee = BigInt(payoutTx!.getFee());

  // get expected payouts for normal trade
  const isResolvedByDispute = tradeCtx.wasDisputeOpened() && tradeCtx.resolveDispute;
  if (!isResolvedByDispute) {
    tradeCtx.getBuyer().payoutTxFee = payoutTxFee / 2n;
    tradeCtx.getBuyer().payoutAmount = tradeCtx.getBuyer().securityDepositActual! + tradeCtx.tradeAmount! - tradeCtx.getBuyer().payoutTxFee!;
    tradeCtx.getSeller().payoutTxFee = payoutTxFee / 2n;
    tradeCtx.getSeller().payoutAmount = tradeCtx.getSeller().securityDepositActual! - tradeCtx.getSeller().payoutTxFee!;
  } else {

    // get expected payouts for disputed trade
    const winnerGetsAll = tradeCtx.disputeWinnerAmount === tradeCtx.maker.securityDepositActual! + tradeCtx.taker.securityDepositActual! + tradeCtx.tradeAmount! || (tradeCtx.hasBuyerAsTakerWithoutDeposit() && tradeCtx.disputeWinner === DisputeResult.Winner.SELLER && tradeCtx.disputeWinnerAmount === undefined);
    if (tradeCtx.disputeWinnerAmount) {
      tradeCtx.getDisputeWinner()!.payoutTxFee = winnerGetsAll ? payoutTxFee : 0n;
      tradeCtx.getDisputeWinner()!.payoutAmount = tradeCtx.disputeWinnerAmount - tradeCtx.getDisputeWinner()!.payoutTxFee!;
      tradeCtx.getDisputeLoser()!.payoutTxFee = winnerGetsAll ? 0n : payoutTxFee;
      tradeCtx.getDisputeLoser()!.payoutAmount = tradeCtx.maker.securityDepositActual! + tradeCtx.taker.securityDepositActual! + tradeCtx.tradeAmount! - tradeCtx.disputeWinnerAmount - tradeCtx.getDisputeLoser()!.payoutTxFee!;
    } else {
      tradeCtx.getDisputeWinner()!.payoutTxFee = winnerGetsAll ? payoutTxFee : payoutTxFee / 2n;
      tradeCtx.getDisputeWinner()!.payoutAmount = tradeCtx.tradeAmount! + tradeCtx.getDisputeWinner()!.securityDepositActual! - tradeCtx.getDisputeWinner()!.payoutTxFee!;
      tradeCtx.getDisputeLoser()!.payoutTxFee = winnerGetsAll ? 0n : payoutTxFee / 2n;
      tradeCtx.getDisputeLoser()!.payoutAmount = tradeCtx.getDisputeLoser()!.securityDepositActual! - tradeCtx.getDisputeLoser()!.payoutTxFee!;
    }
  }

  // TODO: payout tx is unknown to offline non-signer until confirmed
  if (isResolvedByDispute || tradeCtx.isOfflineFlow()) {
    await mineToHeight(await monerod.getHeight() + 1);
    await wait(TestConfig.maxWalletStartupMs + tradeCtx.walletSyncPeriodMs * 2);
  }

  // test trade payouts
  if (tradeCtx.maker.havenod) await testPeerAmountsAfterComplete(tradeCtx, tradeCtx.getMaker());
  if (tradeCtx.taker.havenod) await testPeerAmountsAfterComplete(tradeCtx, tradeCtx.getTaker());
}

async function testPeerAmountsAfterComplete(tradeCtx: TradeContext, peerCtx: PeerContext) {

  // get trade
  const trade = await peerCtx.havenod!.getTrade(tradeCtx.offerId!);

  // test trade amounts
  const isBuyer = tradeCtx.getBuyer() === peerCtx;
  if (isBuyer) expect(BigInt(trade.getBuyerDepositTxFee())).toEqual(tradeCtx.getBuyer().depositTxFee); // TODO: get and test peer's security deposit tx fee?
  else expect(BigInt(trade.getSellerDepositTxFee())).toEqual(tradeCtx.getSeller().depositTxFee);
  expect(BigInt(trade.getBuyerPayoutTxFee())).toEqual(tradeCtx.getBuyer().payoutTxFee);
  expect(BigInt(trade.getSellerPayoutTxFee())).toEqual(tradeCtx.getSeller().payoutTxFee);
  expect(BigInt(trade.getBuyerPayoutAmount())).toEqual(tradeCtx.getBuyer().payoutAmount);
  expect(BigInt(trade.getSellerPayoutAmount())).toEqual(tradeCtx.getSeller().payoutAmount);

  // test balance change after payout tx
  const differenceAfterPayout = BigInt(peerCtx.balancesAfterPayout?.getBalance()!) - BigInt(peerCtx.balancesBeforePayout?.getBalance()!);
  expect(differenceAfterPayout).toEqual(peerCtx.payoutAmount);

  // test balance change since before offer
  if (tradeCtx.testBalanceChangeEndToEnd) {

    // calculate expected balance from before offer
    const sendTradeAmount = tradeCtx.getBuyer() === peerCtx ? 0n : BigInt(trade.getAmount());
    const expectedBalanceAfterComplete = BigInt(peerCtx.balancesBeforeOffer?.getBalance()!) - peerCtx.splitOutputTxFee! - peerCtx.tradeFee! - sendTradeAmount - peerCtx.depositTxFee! - peerCtx.securityDepositActual! + peerCtx.payoutAmount!;

    // log the math
    HavenoUtils.log(1, "Testing end-to-end balance change:");
    HavenoUtils.log(1, "Expected balance after = balance before - split output tx fee if maker and exact amount reserved - trade fee - trade amount if seller - deposit tx fee - security deposit received + (trade amount if seller + security deposit received - (payout tx fee / 2))");
    HavenoUtils.log(1, expectedBalanceAfterComplete + " = " + BigInt(peerCtx.balancesBeforeOffer?.getBalance()!) + " - " + peerCtx.splitOutputTxFee + " - " + peerCtx.tradeFee! + " - " + sendTradeAmount + " - " + peerCtx.depositTxFee + " - " + peerCtx.securityDepositActual + " + " + peerCtx.payoutAmount);

    // test the expected balance
    expect(BigInt(peerCtx.balancesAfterPayout?.getBalance()!)).toEqual(expectedBalanceAfterComplete);
  }
}

async function testTradeChat(ctxP: Partial<TradeContext>) {
  const ctx = TradeContext.init(ctxP);
  HavenoUtils.log(1, "Testing trade chat");

  // invalid trade should throw error
  try {
    await user1.getChatMessages("invalid");
    throw new Error("get chat messages with invalid id should fail");
  } catch (err: any) {
    assert.equal(err.message, "trade with id 'invalid' not found");
  }

  // trade chat should be in initial state
  let messages = await user1.getChatMessages(ctx.offerId!);
  assert(messages.length === 0);
  messages = await user2.getChatMessages(ctx.offerId!);
  assert(messages.length === 0);

  // add notification handlers and send some messages
  const user1Notifications: NotificationMessage[] = [];
  const user2Notifications: NotificationMessage[] = [];
  await user1.addNotificationListener(notification => { user1Notifications.push(notification); });
  await user2.addNotificationListener(notification => { user2Notifications.push(notification); });

  // send simple conversation and verify the list of messages
  const user1Msg = "Hi I'm user1";
  await user1.sendChatMessage(ctx.offerId!, user1Msg);
  await wait(ctx.maxTimePeerNoticeMs);
  messages = await user2.getChatMessages(ctx.offerId!);
  expect(messages.length).toEqual(2);
  expect(messages[0].getIsSystemMessage()).toEqual(true); // first message is system
  expect(messages[1].getMessage()).toEqual(user1Msg);

  const user2Msg = "Hello I'm user2";
  await user2.sendChatMessage(ctx.offerId!, user2Msg);
  await wait(ctx.maxTimePeerNoticeMs);
  messages = await user1.getChatMessages(ctx.offerId!);
  expect(messages.length).toEqual(3);
  expect(messages[0].getIsSystemMessage()).toEqual(true);
  expect(messages[1].getMessage()).toEqual(user1Msg);
  expect(messages[2].getMessage()).toEqual(user2Msg);

  // verify notifications
  let chatNotifications = getNotifications(user1Notifications, NotificationMessage.NotificationType.CHAT_MESSAGE);
  expect(chatNotifications.length).toBe(1);
  expect(chatNotifications[0].getChatMessage()?.getMessage()).toEqual(user2Msg);
  chatNotifications = getNotifications(user2Notifications, NotificationMessage.NotificationType.CHAT_MESSAGE);
  expect(chatNotifications.length).toBe(1);
  expect(chatNotifications[0].getChatMessage()?.getMessage()).toEqual(user1Msg);

  // additional msgs
  const msgs = ["", "  ", "<script>alert('test');</script>", "さようなら"];
  for(const msg of msgs) {
    await user1.sendChatMessage(ctx.offerId!, msg);
    await wait(1000); // the async operation can result in out of order messages
  }
  await wait(ctx.maxTimePeerNoticeMs);
  messages = await user2.getChatMessages(ctx.offerId!);
  let offset = 3; // 3 existing messages
  expect(messages.length).toEqual(offset + msgs.length);
  expect(messages[0].getIsSystemMessage()).toEqual(true);
  expect(messages[1].getMessage()).toEqual(user1Msg);
  expect(messages[2].getMessage()).toEqual(user2Msg);
  for (let i = 0; i < msgs.length; i++) {
    expect(messages[i + offset].getMessage()).toEqual(msgs[i]);
  }

  chatNotifications = getNotifications(user2Notifications, NotificationMessage.NotificationType.CHAT_MESSAGE);
  offset = 1; // 1 existing notification
  expect(chatNotifications.length).toBe(offset + msgs.length);
  expect(chatNotifications[0].getChatMessage()?.getMessage()).toEqual(user1Msg);
  for (let i = 0; i < msgs.length; i++) {
    expect(chatNotifications[i + offset].getChatMessage()?.getMessage()).toEqual(msgs[i]);
  }
}

// ---------------------------- OTHER HELPERS ---------------------------------

function getPort(url: string): string {
  return new URL(url).port;
}

function getBaseCurrencyNetwork(): BaseCurrencyNetwork {
  const str = getBaseCurrencyNetworkStr();
  if (str === "XMR_MAINNET") return BaseCurrencyNetwork.XMR_MAINNET;
  else if (str === "XMR_STAGENET") return BaseCurrencyNetwork.XMR_STAGENET;
  else if (str === "XMR_LOCAL") return BaseCurrencyNetwork.XMR_LOCAL;
  else throw new Error("Unhandled base currency network: " + str);
  function getBaseCurrencyNetworkStr() {
    for (const arg of process.argv) {
      if (arg.indexOf("--baseCurrencyNetwork") === 0) {
        return arg.substring(arg.indexOf("=") + 1);
      }
    }
    throw new Error("Must provide base currency network, e.g.: `npm run test -- --baseCurrencyNetwork=XMR_LOCAL -t \"my test\"`");
  }
}

function getNetworkStartPort() {
  switch (getBaseCurrencyNetwork()) {
      case BaseCurrencyNetwork.XMR_MAINNET: return 1;
      case BaseCurrencyNetwork.XMR_LOCAL: return 2;
      case BaseCurrencyNetwork.XMR_STAGENET: return 3;
      default: throw new Error("Unhandled base currency network: " + getBaseCurrencyNetwork());
  }
}

function getArbitratorPrivKey(index: number) {
  const privKey = TestConfig.arbitratorPrivKeys[getBaseCurrencyNetwork()][index];
  if (!privKey) throw new Error("No arbitrator private key at index " + index);
  return privKey;
}

async function initHavenos(numDaemons: number, config?: any) {
  const havenodPromises: Promise<HavenoClient>[] = [];
  for (let i = 0; i < numDaemons; i++) havenodPromises.push(initHaveno(config));
  return Promise.all(havenodPromises);
}

async function initHaveno(ctx?: HavenodContext): Promise<HavenoClient> {
  if (!ctx) ctx = {};
  Object.assign(ctx, TestConfig.defaultHavenod, Object.assign({}, ctx));
  if (!ctx.appName) ctx.appName = "haveno-" + TestConfig.baseCurrencyNetwork + "_instance_" + moneroTs.GenUtils.getUUID();

  // connect to existing server or start new process
  let havenod: HavenoClient;
  try {

    // try to connect to existing server
    if (!ctx.port) throw new Error("Cannot connect without port");
    havenod = new HavenoClient("http://127.0.0.1:" + ctx.port, ctx.apiPassword!);
    await havenod.getVersion();
  } catch (err: any) {

    // get port for haveno process
    if (!ctx.port) {
      for (const httpPort of Array.from(TestConfig.ports.keys())) {
        if (httpPort === "8079" || httpPort === "8080" || httpPort === "8081") continue; // reserved for arbitrator, user1, and user2
        if (!moneroTs.GenUtils.arrayContains(HAVENO_PROCESS_PORTS, httpPort) && (!ctx.excludePorts || !moneroTs.GenUtils.arrayContains(ctx.excludePorts, httpPort))) {
          HAVENO_PROCESS_PORTS.push(httpPort);
          ctx.port = httpPort;
          break;
        }
      }
    }
    if (!ctx.port) throw new Error("No unused test ports available");

    // start haveno process using configured ports if available
    const cmd: string[] = [
      "./haveno-daemon",
      "--baseCurrencyNetwork", TestConfig.baseCurrencyNetwork,
      "--useLocalhostForP2P", TestConfig.baseCurrencyNetwork === BaseCurrencyNetwork.XMR_MAINNET ? "false" : "true", // TODO: disable for stagenet too
      "--useDevPrivilegeKeys", TestConfig.baseCurrencyNetwork === BaseCurrencyNetwork.XMR_LOCAL ? "true" : "false",
      "--nodePort", TestConfig.ports.get(ctx.port)![1],
      "--appName", ctx.appName,
      "--apiPassword", "apitest",
      "--apiPort", TestConfig.ports.get(ctx.port)![0],
      "--walletRpcBindPort", ctx.walletUrl ? getPort(ctx.walletUrl) : "" + await getAvailablePort(), // use configured port if given
      "--passwordRequired", (ctx.accountPasswordRequired ? "true" : "false"),
      "--logLevel", ctx.logLevel!,
      "--disableRateLimits", "true"
    ];
    havenod = await HavenoClient.startProcess(TestConfig.haveno.path, cmd, "http://127.0.0.1:" + ctx.port, ctx.logProcessOutput!);

    // wait to process network notifications
    await wait(3000);
  }

  // add to list of clients
  HAVENO_CLIENTS.push(havenod)

  // open account if configured
  if (ctx.autoLogin) {
    try {
      await initHavenoAccount(havenod, ctx.accountPassword!);
    } catch (err) {
      await releaseHavenoClient(havenod);
      throw err;
    }
  }
  return havenod;

  async function getAvailablePort(): Promise<number> {
    return new Promise(function(resolve) {
      const srv = net.createServer();
      srv.listen(0, function() {
        const port = (srv.address() as net.AddressInfo).port;
        srv.close(function() {
          resolve(port);
        });
      });
    });
  }
}

/**
 * Release a Haveno client by shutting down its process or disconnecting.
 */
async function releaseHavenoClient(client: HavenoClient, deleteProcessAppDir?: boolean) {
  if (client.getProcess()) return releaseHavenoProcess(client, deleteProcessAppDir);
  else await client.disconnect();
}

/**
 * Release a Haveno process for reuse and try to shutdown.
 */
async function releaseHavenoProcess(havenod: HavenoClient, deleteAppDir?: boolean) {
  if (!testsOwnProcess(havenod)) throw new Error("Cannot shut down havenod process which is not owned by test");
  if (!moneroTs.GenUtils.arrayContains(HAVENO_CLIENTS, havenod)) throw new Error("Cannot release Haveno client which is not in list of clients");
  let shutDownErr = undefined;
  try {
    await havenod.shutdownServer();
  } catch (err: any) {
    shutDownErr = err;
  }
  if (shutDownErr) throw shutDownErr;
  if (deleteAppDir) deleteHavenoInstance(havenod);
  moneroTs.GenUtils.remove(HAVENO_CLIENTS, havenod);
  moneroTs.GenUtils.remove(HAVENO_PROCESS_PORTS, getPort(havenod.getUrl()));
}

function testsOwnProcess(havenod: HavenoClient) {
  return havenod.getProcess();
}

function assertNotStaticClient(client: HavenoClient) {
  if (client === user1 || client === user2 || client === arbitrator) throw new Error("Tests are not designed to shut down user1, user2, or arbitrator")
}

/**
 * Delete a Haveno instance from disk.
 */
function deleteHavenoInstance(havenod: HavenoClient) {
    if (!havenod.getAppName()) throw new Error("Cannot delete Haveno instance owned by different process")
    deleteHavenoInstanceByAppName(havenod.getAppName()!);
}

function deleteHavenoInstanceByAppName(appName: string) {
  const userDataDir = process.env.APPDATA || (process.platform === 'darwin' ? process.env.HOME + '/Library/Application Support' : process.env.HOME + "/.local/share");
  const appPath = path.normalize(userDataDir + "/" + appName);
  fs.rmSync(appPath, { recursive: true, force: true });
}

/**
 * Create or open an account with the given daemon and password.
 */
async function initHavenoAccount(havenod: HavenoClient, password: string) {
  if (await havenod.isAccountOpen()) return;
  if (await havenod.accountExists()) return havenod.openAccount(password);
  await havenod.createAccount(password);
  return;
}

/**
 * Open or create funding wallet.
 */
async function initFundingWallet() {

  // init client connected to monero-wallet-rpc
  fundingWallet = await moneroTs.connectToWalletRpc(TestConfig.fundingWallet.url, TestConfig.fundingWallet.username, TestConfig.fundingWallet.password);

  // check if wallet is open
  let walletIsOpen = false
  try {
    await fundingWallet.getPrimaryAddress();
    walletIsOpen = true;
  } catch (err: any) {
    // do nothing
  }

  // open wallet if necessary
  if (!walletIsOpen) {

    // attempt to open funding wallet
    try {
      await fundingWallet.openWallet({path: TestConfig.fundingWallet.defaultPath, password: TestConfig.fundingWallet.walletPassword});
    } catch (err: any) {
      if (!(err instanceof moneroTs.MoneroRpcError)) throw err;

      // -1 returned when wallet does not exist or fails to open e.g. it's already open by another application
      if (err.getCode() === -1) {

        // create wallet
        await fundingWallet.createWallet({
            path: TestConfig.fundingWallet.defaultPath,
            password: TestConfig.fundingWallet.walletPassword,
            seed: TestConfig.fundingWallet.seed,
            restoreHeight: TestConfig.fundingWallet.restoreHeight
        });
      } else {
        throw err;
      }
    }
  }
}

async function prepareForTrading(numTrades: number, ...havenods: HavenoClient[]) {

  // create payment account for each payment method
  for (const havenod of havenods) {
    for (const paymentMethod of await havenod.getPaymentMethods()) {
      if (await hasPaymentAccount({trader: havenod, paymentMethod: paymentMethod.getId()})) continue; // skip if exists
      const accountForm = await user1.getPaymentAccountForm(paymentMethod.getId());
      for (const field of accountForm.getFieldsList()) field.setValue(getValidFormInput(accountForm, field.getId(), havenod)); // set all form fields
      await havenod.createPaymentAccount(accountForm);
    }
  }

  // create payment account for each asset code
  for (const havenod of havenods) {
    for (const assetCode of TestConfig.assetCodes.concat(TestConfig.fixedPriceAssetCodes)) {
      if (await hasPaymentAccount({trader: havenod, assetCode: assetCode})) continue; // skip if exists
      await createPaymentAccount(havenod, assetCode);
    }
  }

  // fund wallets
  const tradeAmount = 500000000000n;
  const wallets: moneroTs.MoneroWallet[] = [];
  for (const havenod of havenods) wallets.push(await getWallet(havenod));
  await fundOutputs(wallets, tradeAmount * 2n, numTrades);
}

async function getWallet(havenod: HavenoClient) {
  if (!HAVENO_WALLETS.has(havenod)) {
    let wallet: any;
    if (havenod === user1) wallet = user1Wallet;
    else if (havenod === user2) wallet = user2Wallet;
    else wallet = await moneroTs.connectToWalletRpc("http://127.0.0.1:" + havenod.getWalletRpcPort(), TestConfig.defaultHavenod.walletUsername, TestConfig.defaultHavenod.walletDefaultPassword);
    HAVENO_WALLETS.set(havenod, wallet);
  }
  return HAVENO_WALLETS.get(havenod);
}

async function startMining(): Promise<boolean> {
  try {
    const numThreads = getBaseCurrencyNetwork() === BaseCurrencyNetwork.XMR_LOCAL ? 1 : Math.max(1, Math.floor(os.cpus().length * TestConfig.maxCpuPct));
    await monerod.startMining(await fundingWallet.getPrimaryAddress(), numThreads);
    HavenoUtils.log(2, "Mining started");
    return true;
  } catch (err: any) {
    if (err.message !== "Already mining") throw err;
    HavenoUtils.log(2, ("Already mining"));
    return false;
  }
}

async function stopMining() {
  await monerod.stopMining();
  HavenoUtils.log(2, "Mining stopped");
}

async function mineBlocks(numBlocks: number) {
  await mineToHeight(await monerod.getHeight() + numBlocks);
}

async function mineToHeight(height: number) {
  if (await monerod.getHeight() >= height) return;
  const miningStarted = await startMining();
  while (await monerod.getHeight() < height) {
    await moneroTs.GenUtils.waitFor(TestConfig.trade.walletSyncPeriodMs);
  }
  if (miningStarted) await stopMining();
}

async function mineToUnlock(txHash: string) {
  let tx = await monerod.getTx(txHash);
  if (tx && tx.getNumConfirmations() >= 10) return; // TODO: tx.getIsLocked()
  const miningStarted = await startMining();
  while (!tx || tx.getNumConfirmations() < 10) {
    await moneroTs.GenUtils.waitFor(TestConfig.trade.walletSyncPeriodMs);
    tx = await monerod.getTx(txHash);
  }
  if (miningStarted) await stopMining();
}

/**
 * Wait for unlocked balance in wallet or Haveno daemon.
 */
async function waitForAvailableBalance(amount: bigint, ...wallets: any[]) {

  // wrap common wallet functionality for tests
  class WalletWrapper {

    _wallet: moneroTs.MoneroWallet;

    constructor(wallet: any) {
      this._wallet = wallet;
    }

    async getAvailableBalance(): Promise<bigint> {
      if (this._wallet instanceof HavenoClient) return BigInt((await this._wallet.getBalances()).getAvailableBalance());
      else return await this._wallet.getUnlockedBalance();
    }

    async getPendingBalance(): Promise<bigint> {
      if (this._wallet instanceof HavenoClient) return BigInt((await this._wallet.getBalances()).getPendingBalance());
      else return await this._wallet.getBalance() - await this.getAvailableBalance();
    }

    async getDepositAddress(): Promise<string> {
      if (this._wallet instanceof HavenoClient) return await this._wallet.getXmrNewSubaddress();
      else return (await this._wallet.createSubaddress(0)).getAddress();
    }
  }

  // wrap wallets
  for (let i = 0; i < wallets.length; i++) wallets[i] = new WalletWrapper(wallets[i]);

  // fund wallets with insufficient balance
  let miningNeeded = false;
  const fundConfig: moneroTs.MoneroTxConfig = new moneroTs.MoneroTxConfig({accountIndex: 0, relay: true});
  for (const wallet of wallets) {
    const availableBalance = await wallet.getAvailableBalance();
    if (availableBalance < amount) miningNeeded = true;
    const depositNeeded: bigint = amount - availableBalance - await wallet.getPendingBalance();
    if (depositNeeded > 0n && wallet._wallet !== fundingWallet) {
      for (let i = 0; i < 5; i++) {
        fundConfig.addDestination(await wallet.getDepositAddress(), depositNeeded * 2n); // make several deposits
      }
    }
  }
  if (fundConfig.getDestinations()) {
    await waitForAvailableBalance(TestConfig.fundingWallet.minimumFunding, fundingWallet); // TODO (woodser): wait for enough to cover tx amount + fee
    try { await fundingWallet.createTx(fundConfig); }
    catch (err: any) { throw new Error("Error funding wallets: " + err.message); }
  }

  // done if all wallets have sufficient unlocked balance
  if (!miningNeeded) return;

  // wait for funds to unlock
  const miningStarted = await startMining();
  HavenoUtils.log(1, "Mining for unlocked balance of " + amount);
  const promises: Promise<void>[] = [];
  for (const wallet of wallets) {
    if (wallet._wallet === fundingWallet) {
      const subaddress = await fundingWallet.createSubaddress(0);
      HavenoUtils.log(0, "Mining to funding wallet. Alternatively, deposit to: " + subaddress.getAddress());
    }
    // eslint-disable-next-line no-async-promise-executor
    promises.push(new Promise(async (resolve) => {
      const taskLooper: any = new moneroTs.TaskLooper(async function() {
        if (await wallet.getAvailableBalance() >= amount) {
          taskLooper.stop();
          resolve();
        }
      });
      taskLooper.start(5000);
    }));
  }
  await Promise.all(promises);
  if (miningStarted) await stopMining();
  HavenoUtils.log(0, "Funds unlocked, done mining");
}

async function waitForUnlockedTxs(...txHashes: string[]) {
  if (txHashes.length === 0) return;
  HavenoUtils.log(1, "Mining to unlock txs");
  const miningStarted = await startMining();
  const promises: Promise<void>[] = [];
  for (const txHash of txHashes) {
    // eslint-disable-next-line no-async-promise-executor
    promises.push(new Promise(async (resolve) => {
      const taskLooper = new moneroTs.TaskLooper(async function() {
        const tx = await monerod.getTx(txHash);
        if (!tx) HavenoUtils.log(1, "WARNING: tx hash " + txHash + " not found");
        else if (tx.getIsConfirmed() && tx.getBlock().getHeight() <= await monerod.getHeight() - 10) {
          taskLooper.stop();
          resolve();
        }
      });
      taskLooper.start(5000);
    }));
  }
  await Promise.all(promises);
  HavenoUtils.log(1, "Done waiting for txs to unlock");
  if (miningStarted) await stopMining();
}

/**
 * Indicates if the given wallets have unspent outputs.
 *
 * @param {MoneroWallet[]} wallets - wallets to check
 * @param {BigInt} amt - amount to check
 * @param {number?} numOutputs - number of outputs of the given amount (default 1)
 * @param {boolean?} isLocked - specifies if the outputs must be locked or unlocked (default either)
 */
async function hasUnspentOutputs(wallets: any[], amt: BigInt, numOutputs?: number, isLocked?: boolean): Promise<boolean> {
  if (numOutputs === undefined) numOutputs = 1;
  for (const wallet of wallets) {
    const unspentOutputs = await wallet.getOutputs({isSpent: false, isFrozen: false, minAmount: amt, txQuery: {isLocked: isLocked}});
    if (unspentOutputs.length < numOutputs) return false;
  }
  return true;
}

/**
 * Fund the given wallets.
 *
 * @param {MoneroWallet} wallets - monerojs wallets
 * @param {BigInt} amt - the amount to fund
 * @param {number} [numOutputs] - the number of outputs of the given amount (default 1)
 * @param {boolean} [waitForUnlock] - wait for outputs to unlock (default false)
 */
async function fundOutputs(wallets: moneroTs.MoneroWallet[], amt: bigint, numOutputs?: number, waitForUnlock?: boolean): Promise<void> {
  if (numOutputs === undefined) numOutputs = 1;
  if (waitForUnlock === undefined) waitForUnlock = true;

  // collect destinations
  const destinations: moneroTs.MoneroDestination[] = [];
  for (const wallet of wallets) {
    if (await hasUnspentOutputs([wallet], amt, numOutputs, undefined)) continue;
    for (let i = 0; i < numOutputs; i++) {
      destinations.push(new moneroTs.MoneroDestination((await wallet.createSubaddress(0)).getAddress(), amt));
    }
  }
  if (!destinations.length) return;

  // fund destinations
  let txConfig = new moneroTs.MoneroTxConfig().setAccountIndex(0).setRelay(true);
  const txHashes: string[] = [];
  let sendAmt = 0n;
  for (let i = 0; i < destinations.length; i++) {
    txConfig.addDestination(destinations[i], undefined); // TODO: remove once converted to MoneroTxConfig.ts
    sendAmt = sendAmt + destinations[i].getAmount();
    if (i === destinations.length - 1 || (i > 0 && i % 15 === 0)) {
      await waitForAvailableBalance(sendAmt, fundingWallet);
      const txs = await fundingWallet.createTxs(txConfig);
      for (const tx of txs) txHashes.push(tx.getHash());
      txConfig = new moneroTs.MoneroTxConfig().setAccountIndex(0).setRelay(true);
      sendAmt = 0n;
    }
  }

  // if not waiting to unlock, wait to observe txs and return
  if (txHashes.length && !waitForUnlock) {
    await wait(TestConfig.trade.walletSyncPeriodMs);
    return;
  }

  // mine until outputs unlocked
  let miningStarted = false;
  let miningAttempted = false;
  while (!await hasUnspentOutputs(wallets, amt, numOutputs, false)) {
    if (waitForUnlock && !miningAttempted) {
      HavenoUtils.log(1, "Mining to fund outputs");
      miningStarted = await startMining();
      miningAttempted = true;
    }
    await wait(TestConfig.trade.walletSyncPeriodMs);
  }
  if (miningStarted) await stopMining();
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getBalancesStr(balances: XmrBalanceInfo): string {
    return "Balance: " + balances.getBalance() + ",\n" +
           "Available balance: " + balances.getAvailableBalance() + ",\n" +
           "Pending balance: " + balances.getPendingBalance() + ",\n" +
           "Reserved in offers: " + balances.getReservedOfferBalance() + ",\n" +
           "Locked in trade: " + balances.getReservedTradeBalance();
}

async function wait(durationMs: number) {
  return new Promise(function(resolve) { setTimeout(resolve, durationMs); });
}

function getNotifications(notifications: NotificationMessage[], notificationType: NotificationMessage.NotificationType, tradeId?: string) {
  const filteredNotifications: NotificationMessage[] = [];
  for (const notification of notifications) {
    if (notification.getType() !== notificationType) continue;
    if (tradeId) {
      let found = false;
      if (notification.getTrade() && notification.getTrade()!.getTradeId() === tradeId) found = true;
      if (notification.getChatMessage() && notification.getChatMessage()!.getTradeId() === tradeId) found = true;
      if (!found) continue;
    }
    filteredNotifications.push(notification);
  }
  return filteredNotifications;
}

function getConnection(connections: UrlConnection[], url: string): UrlConnection|undefined {
  for (const connection of connections) if (connection.getUrl() === url) return connection;
  return undefined;
}

function testConnection(connection: UrlConnection, url?: string, onlineStatus?: OnlineStatus, authenticationStatus?: AuthenticationStatus, priority?: number) {
  if (url) assert.equal(connection.getUrl(), url);
  assert.equal(connection.getPassword(), ""); // TODO (woodser): undefined instead of ""?
  assert.equal(connection.getUsername(), "");
  if (onlineStatus !== undefined) assert.equal(connection.getOnlineStatus(), onlineStatus);
  if (authenticationStatus !== undefined) assert.equal(connection.getAuthenticationStatus(), authenticationStatus);
  if (priority !== undefined) assert.equal(connection.getPriority(), priority);
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
  for (const incomingTransfer of tx.getIncomingTransfersList()) testTransfer(incomingTransfer, ctx);
  if (tx.getOutgoingTransfer()) testTransfer(tx.getOutgoingTransfer()!, ctx);
  if (ctx.isCreatedTx) testCreatedTx(tx);
}

function testCreatedTx(tx: XmrTx) {
   assert.equal(tx.getTimestamp(), 0);
   assert.equal(tx.getIsConfirmed(), false);
   assert.equal(tx.getIsLocked(), true);
   assert(tx.getMetadata() && tx.getMetadata().length > 0);
}

function testTransfer(transfer: XmrIncomingTransfer | XmrOutgoingTransfer, ctx: TxContext) {
  expect(BigInt(transfer.getAmount())).toBeGreaterThanOrEqual(0n);
  assert(transfer.getAccountIndex() >= 0);
  if (transfer instanceof XmrIncomingTransfer) testIncomingTransfer(transfer);
  else testOutgoingTransfer(transfer, ctx);
}

function testIncomingTransfer(transfer: XmrIncomingTransfer) {
  assert(transfer.getAddress());
  assert(transfer.getSubaddressIndex() >= 0);
  assert(transfer.getNumSuggestedConfirmations() > 0);
}

function testOutgoingTransfer(transfer: XmrOutgoingTransfer, ctx: TxContext) {
  if (!ctx.isCreatedTx) assert(transfer.getSubaddressIndicesList().length > 0);
  for (const subaddressIdx of transfer.getSubaddressIndicesList()) assert(subaddressIdx >= 0);

  // test destinations sum to outgoing amount
  if (transfer.getDestinationsList().length > 0) {
    let sum = 0n;
    for (const destination of transfer.getDestinationsList()) {
      testDestination(destination);
      expect(BigInt(destination.getAmount())).toBeGreaterThan(0n);
      sum += BigInt(destination.getAmount());
    }
    assert.equal(sum, BigInt(transfer.getAmount()));
  }
}

function testDestination(destination: XmrDestination) {
  assert(destination.getAddress());
  expect(BigInt(destination.getAmount())).toBeGreaterThan(0n);
}

function getRandomPaymentMethodId(): string {
  if (getRandomOutcome(2/5)) return "BLOCK_CHAINS";
  let allPaymentMethodIds = Object.keys(PaymentAccountForm.FormId);
  return allPaymentMethodIds[moneroTs.GenUtils.getRandomInt(0, allPaymentMethodIds.length - 1)];
}

function getRandomAssetCodeForPaymentAccount(paymentAccount: PaymentAccount): string {
  const allTradeCurrencies = paymentAccount.getTradeCurrenciesList();
  return allTradeCurrencies[moneroTs.GenUtils.getRandomInt(0, allTradeCurrencies.length - 1)].getCode();
}

function getRandomOutcome(percentChance: number): boolean {
  return Math.random() <= percentChance;
}

function getRandomFloat(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

function getRandomBigIntWithinPercent(base: bigint, percent: number): bigint {
  return getRandomBigIntWithinRange(base - multiply(base, percent), base + multiply(base, percent));
}

function multiply(amount: bigint, multiplier: number): bigint {
  return BigInt(Math.round(Number(amount) * multiplier));
}

function getRandomBigIntWithinRange(min: bigint, max: bigint): bigint {
  return BigInt(Math.floor(Math.random() * (Number(max) - Number(min))) + Number(min));
}

function getRandomAssetCode() {
  return TestConfig.assetCodes[moneroTs.GenUtils.getRandomInt(0, TestConfig.assetCodes.length - 1)];
}

async function hasPaymentAccount(config: { trader: HavenoClient; assetCode?: string; paymentMethod?: string }): Promise<boolean> {
  for (const paymentAccount of await config.trader.getPaymentAccounts()) {
    if (config.assetCode?.toUpperCase() === paymentAccount.getSelectedTradeCurrency()!.getCode()) return true;
    if (config.paymentMethod?.toUpperCase() === paymentAccount.getPaymentMethod()!.getId()) return true;
  }
  return false;
}

function isCrypto(assetCode: string) {
  return getCryptoAddress(assetCode) !== undefined;
}

function getCryptoAddress(currencyCode: string): string|undefined {
  for (const cryptoAddress of TestConfig.cryptoAddresses) {
    if (cryptoAddress.currencyCode === currencyCode.toUpperCase()) return cryptoAddress.address;
  }
}

async function createPaymentAccount(trader: HavenoClient, assetCodes: string, paymentMethodId?: string | PaymentAccountForm.FormId) {
  if (!paymentMethodId) paymentMethodId = isCrypto(assetCodes!) ? PaymentAccountForm.FormId.BLOCK_CHAINS : PaymentAccountForm.FormId.PAY_BY_MAIL;
  const accountForm = await trader.getPaymentAccountForm(paymentMethodId);

  // set trade currencies
  if (HavenoUtils.hasFormField(accountForm, PaymentAccountFormField.FieldId.TRADE_CURRENCIES)) HavenoUtils.setFormValue(accountForm, PaymentAccountFormField.FieldId.TRADE_CURRENCIES, assetCodes);

  // initialize remaining fields
  for (const field of accountForm.getFieldsList()) {
    if (field.getValue() !== "") continue; // skip if already set
    field.setValue(getValidFormInput(accountForm, field.getId(), trader));
  }
  return await trader.createPaymentAccount(accountForm);
}

async function createCryptoPaymentAccount(trader: HavenoClient, currencyCode = "eth"): Promise<PaymentAccount> {
  for (const cryptoAddress of TestConfig.cryptoAddresses) {
    if (cryptoAddress.currencyCode.toLowerCase() !== currencyCode.toLowerCase()) continue;
    return trader.createCryptoPaymentAccount(
      cryptoAddress.currencyCode + " " +  cryptoAddress.address.substr(0, 8) + "... " + moneroTs.GenUtils.getUUID(),
      cryptoAddress.currencyCode,
      cryptoAddress.address);
  }
  throw new Error("No test config for crypto: " + currencyCode);
}

function getOffer(offers: OfferInfo[], id: string): OfferInfo|undefined {
  return offers.find(offer => offer.getId() === id);
}

function testCryptoPaymentAccount(acct: PaymentAccount, instant: boolean) {
  expect(acct.getId().length).toBeGreaterThan(0);
  expect(acct.getAccountName().length).toBeGreaterThan(0);
  expect(acct.getSelectedTradeCurrency()!.getCode().length).toBeGreaterThan(0);
  expect(acct.getTradeCurrenciesList().length).toEqual(1);
  const tradeCurrency = acct.getTradeCurrenciesList()[0];
  expect(tradeCurrency.getName().length).toBeGreaterThan(0);
  expect(tradeCurrency.getCode()).toEqual(acct.getSelectedTradeCurrency()!.getCode());
  if (instant) {
    expect(acct.getPaymentAccountPayload()!.getInstantCryptoCurrencyAccountPayload()!.getAddress().length).toBeGreaterThan(0);
  } else {
    expect(acct.getPaymentAccountPayload()!.getCryptoCurrencyAccountPayload()!.getAddress().length).toBeGreaterThan(0);
  }
}

function testCryptoPaymentAccountsEqual(acct1: PaymentAccount, acct2: PaymentAccount) {
  expect(acct1.getId()).toEqual(acct2.getId());
  expect(acct1.getAccountName()).toEqual(acct2.getAccountName());
  expect(acct1.getSelectedTradeCurrency()!.getCode()).toEqual(acct2.getSelectedTradeCurrency()!.getCode());
  expect(acct1.getPaymentAccountPayload()!.getCryptoCurrencyAccountPayload()!.getAddress()).toEqual(acct2.getPaymentAccountPayload()!.getCryptoCurrencyAccountPayload()!.getAddress());
}

function testOffer(offer: OfferInfo, ctxP?: Partial<TradeContext>, isMyOffer?: boolean) {
  let ctx = TradeContext.init(ctxP);
  expect(offer.getId().length).toBeGreaterThan(0);
  if (ctxP) {
    expect(offer.getIsPrivateOffer()).toEqual(ctx?.isPrivateOffer ? true : false); // TODO: update tests for security deposit
    if (offer.getIsPrivateOffer()) {
      if (isMyOffer) expect(offer.getChallenge().length).toBeGreaterThan(0);
      else expect(offer.getChallenge()).toEqual("");
      if (ctx.isBuyerMaker()) {
        expect(offer.getBuyerSecurityDepositPct()).toEqual(ctx.securityDepositPct);
      } else {
        expect(offer.getBuyerSecurityDepositPct()).toEqual(ctx.buyerAsTakerWithoutDeposit ? 0 : ctx.securityDepositPct);
      }
    } else {
      expect(offer.getBuyerSecurityDepositPct()).toEqual(ctx.securityDepositPct);
      expect(offer.getChallenge()).toEqual("");
    }
    if (ctx.extraInfo) expect(offer.getExtraInfo().indexOf(ctx.extraInfo)).toBeGreaterThanOrEqual(0); // may contain extra info from payment account
    expect(offer.getSellerSecurityDepositPct()).toEqual(ctx.securityDepositPct);
    expect(offer.getUseMarketBasedPrice()).toEqual(!ctx.price);
    expect(offer.getMarketPriceMarginPct()).toEqual(ctx.priceMargin ? ctx.priceMargin : 0);

    // TODO: test rest of offer
  }
}

function testMoneroNodeSettingsEqual(settingsBefore: XmrNodeSettings, settingsAfter: XmrNodeSettings) {
    expect(settingsAfter.getBlockchainPath()).toEqual(settingsBefore.getBlockchainPath());
    expect(settingsAfter.getBootstrapUrl()).toEqual(settingsBefore.getBootstrapUrl());
    expect(settingsAfter.getStartupFlagsList()).toEqual(settingsBefore.getStartupFlagsList());
}

function getFormField(form: PaymentAccountForm, fieldId: PaymentAccountFormField.FieldId): PaymentAccountFormField {
    for (const field of form.getFieldsList()) {
      if (field.getId() == fieldId) return field;
    }
    throw new Error("Form field not found: " + fieldId);
}

function getValidFormInput(form: PaymentAccountForm, fieldId: PaymentAccountFormField.FieldId, havenod: HavenoClient): string {
  return getValidFormInputAux(form, fieldId, havenod);
}

function getValidFormInputAux(form: PaymentAccountForm, fieldId: PaymentAccountFormField.FieldId, havenod: HavenoClient): string {
  const field = getFormField(form, fieldId);
  switch (fieldId) {
    case PaymentAccountFormField.FieldId.ACCEPTED_COUNTRY_CODES:
      if (form.getId() === PaymentAccountForm.FormId.SEPA || form.getId() === PaymentAccountForm.FormId.SEPA_INSTANT) return "BE," + field.getSupportedSepaEuroCountriesList().map(country => country.getCode()).join(',');
      return field.getSupportedCountriesList().map(country => country.getCode()).join(',');
    case PaymentAccountFormField.FieldId.ACCOUNT_ID:
      return havenod.getAppName() + "_jdoe@no.com";
    case PaymentAccountFormField.FieldId.ACCOUNT_NAME:
      return "Form_" + form.getId() + " " + moneroTs.GenUtils.getUUID(); // TODO: rename to form.getPaymentMethodId()
    case PaymentAccountFormField.FieldId.ACCOUNT_NR:
      return "12345678";
    case PaymentAccountFormField.FieldId.ACCOUNT_OWNER:
      return "John Doe (" + havenod.getAppName() + ")";
    case PaymentAccountFormField.FieldId.ACCOUNT_TYPE:
      return "Checking";
    case PaymentAccountFormField.FieldId.ANSWER:
      return "XMR-orange";
    case PaymentAccountFormField.FieldId.BANK_ACCOUNT_NAME:
      return "John Doe (" + havenod.getAppName() + ")";
    case PaymentAccountFormField.FieldId.BANK_ACCOUNT_NUMBER:
      throw new Error("Not implemented");
    case PaymentAccountFormField.FieldId.BANK_ACCOUNT_TYPE:
      throw new Error("Not implemented");
    case PaymentAccountFormField.FieldId.BANK_ADDRESS:
      return "456 example st";
    case PaymentAccountFormField.FieldId.BANK_BRANCH:
      return "Bank branch XYZ";
    case PaymentAccountFormField.FieldId.BANK_BRANCH_CODE:
      throw new Error("Not implemented");
    case PaymentAccountFormField.FieldId.BANK_BRANCH_NAME:
      throw new Error("Not implemented");
    case PaymentAccountFormField.FieldId.BANK_ID:
      throw new Error("Not implemented");
    case PaymentAccountFormField.FieldId.BANK_NAME:
      return "Bank XYZ";
    case PaymentAccountFormField.FieldId.BANK_SWIFT_CODE:
      return "12345678901"; // TODO: use real swift code
    case PaymentAccountFormField.FieldId.BENEFICIARY_ACCOUNT_NR:
      return "1234567890";
    case PaymentAccountFormField.FieldId.BENEFICIARY_ADDRESS:
      return "123 example st";
    case PaymentAccountFormField.FieldId.BENEFICIARY_CITY:
      return "Acme";
    case PaymentAccountFormField.FieldId.BENEFICIARY_NAME:
      return "Jane Doe (" + havenod.getAppName() + ")";
    case PaymentAccountFormField.FieldId.BENEFICIARY_PHONE:
      return "123-456-7890";
    case PaymentAccountFormField.FieldId.BIC:
      return "ATLNFRPP";
    case PaymentAccountFormField.FieldId.BRANCH_ID:
      return "142000182"
    case PaymentAccountFormField.FieldId.CITY:
      return "Atlanta";
    case PaymentAccountFormField.FieldId.CONTACT:
      return "Email me please";
    case PaymentAccountFormField.FieldId.COUNTRY:
    case PaymentAccountFormField.FieldId.BANK_COUNTRY_CODE:
    case PaymentAccountFormField.FieldId.INTERMEDIARY_COUNTRY_CODE:
      return field.getSupportedCountriesList().length ? field.getSupportedCountriesList()[0]!.getCode() : "FR";
    case PaymentAccountFormField.FieldId.EMAIL:
      return havenod.getAppName() + "_jdoe@no.com";
    case PaymentAccountFormField.FieldId.EMAIL_OR_MOBILE_NR:
      return "876-512-7813";
    case PaymentAccountFormField.FieldId.EMAIL_OR_MOBILE_NR_OR_USERNAME:
      return "john.doe"
    case PaymentAccountFormField.FieldId.EMAIL_OR_MOBILE_NR_OR_CASHTAG:
      return "john.doe"
    case PaymentAccountFormField.FieldId.EXTRA_INFO:
      return "Please and thanks";
    case PaymentAccountFormField.FieldId.HOLDER_ADDRESS:
      return "123 Holder Street";
    case PaymentAccountFormField.FieldId.HOLDER_EMAIL:
      throw new Error("Not implemented");
    case PaymentAccountFormField.FieldId.HOLDER_NAME:
      return havenod.getAppName() + " Doe";
    case PaymentAccountFormField.FieldId.HOLDER_TAX_ID:
      throw new Error("Not implemented");
    case PaymentAccountFormField.FieldId.IBAN:
      return "FR1420041010050500013M02606";
    case PaymentAccountFormField.FieldId.IFSC:
      throw new Error("Not implemented");
    case PaymentAccountFormField.FieldId.INTERMEDIARY_ADDRESS:
      return "123 intermediary example st";
    case PaymentAccountFormField.FieldId.INTERMEDIARY_BRANCH:
      return "Intermediary bank branch XYZ";
    case PaymentAccountFormField.FieldId.INTERMEDIARY_NAME:
      return "Intermediary bank XYZ";
    case PaymentAccountFormField.FieldId.INTERMEDIARY_SWIFT_CODE:
      return "10987654321"; // TODO: use real swift code
    case PaymentAccountFormField.FieldId.MOBILE_NR:
      return "876-512-7813";
    case PaymentAccountFormField.FieldId.NATIONAL_ACCOUNT_ID:
      throw new Error("Not implemented");
    case PaymentAccountFormField.FieldId.PAYID:
      return havenod.getAppName() + "_john.doe@example.com";
    case PaymentAccountFormField.FieldId.PIX_KEY:
      throw new Error("Not implemented");
    case PaymentAccountFormField.FieldId.POSTAL_ADDRESS:
      return "123 street";
    case PaymentAccountFormField.FieldId.PROMPT_PAY_ID:
      throw new Error("Not implemented");
    case PaymentAccountFormField.FieldId.QUESTION:
      return "What is your favorite color?";
    case PaymentAccountFormField.FieldId.REQUIREMENTS:
      throw new Error("Not implemented");
    case PaymentAccountFormField.FieldId.SALT:
      return "";
    case PaymentAccountFormField.FieldId.SORT_CODE:
      return "123456";
    case PaymentAccountFormField.FieldId.SPECIAL_INSTRUCTIONS:
      return "asap plz";
    case PaymentAccountFormField.FieldId.STATE:
      const country = HavenoUtils.getFormValue(form, PaymentAccountFormField.FieldId.COUNTRY);
      return moneroTs.GenUtils.arrayContains(field.getRequiredForCountriesList(), country) ? "My state" : "";
    case PaymentAccountFormField.FieldId.TRADE_CURRENCIES:
      if (field.getComponent() === PaymentAccountFormField.Component.SELECT_ONE) {
        if (form.getId() === PaymentAccountForm.FormId.F2F) return "XAU";
        if (form.getId() === PaymentAccountForm.FormId.PAY_BY_MAIL) return "XGB";
        let randomIndex = moneroTs.GenUtils.getRandomInt(0, field.getSupportedCurrenciesList().length - 1);
        return field.getSupportedCurrenciesList()[randomIndex]!.getCode();
      }
      else return field.getSupportedCurrenciesList().map(currency => currency.getCode()).join(',');
    case PaymentAccountFormField.FieldId.USERNAME:
      return havenod.getAppName() + "_jdoe";
    case PaymentAccountFormField.FieldId.ADDRESS:
      const currencyCode = HavenoUtils.getFormValue(form, PaymentAccountFormField.FieldId.TRADE_CURRENCIES);
      for (let cryptoAddress of TestConfig.cryptoAddresses) {
        if (cryptoAddress.currencyCode.toLowerCase() === currencyCode.toLowerCase()) return cryptoAddress.address;
      }
      throw new Error("Unsupported blockchain currency code: " + currencyCode);
    default:
      throw new Error("Unhandled form field: " + fieldId);
  }
}

// TODO: improve invalid inputs
function getInvalidFormInput(form: PaymentAccountForm, fieldId: PaymentAccountFormField.FieldId): string | undefined{
  const field = getFormField(form, fieldId);
  switch (fieldId) {
    case PaymentAccountFormField.FieldId.ACCEPTED_COUNTRY_CODES:
      return "US,XX";
    case PaymentAccountFormField.FieldId.ACCOUNT_ID:
      return "";
    case PaymentAccountFormField.FieldId.ACCOUNT_NAME:
      return "";
    case PaymentAccountFormField.FieldId.ACCOUNT_NR:
      return "123457A";
    case PaymentAccountFormField.FieldId.ACCOUNT_OWNER:
      return "J";
    case PaymentAccountFormField.FieldId.ACCOUNT_TYPE:
      return "A";
    case PaymentAccountFormField.FieldId.ANSWER:
      return "Two words";
    case PaymentAccountFormField.FieldId.BANK_ACCOUNT_NAME:
      return "F";
    case PaymentAccountFormField.FieldId.BANK_ACCOUNT_NUMBER:
      throw new Error("Not implemented");
    case PaymentAccountFormField.FieldId.BANK_ACCOUNT_TYPE:
      throw new Error("Not implemented");
    case PaymentAccountFormField.FieldId.BANK_ADDRESS:
      return "";
    case PaymentAccountFormField.FieldId.BANK_BRANCH:
      return "A";
    case PaymentAccountFormField.FieldId.BANK_BRANCH_CODE:
      throw new Error("Not implemented");
    case PaymentAccountFormField.FieldId.BANK_BRANCH_NAME:
      throw new Error("Not implemented");
    case PaymentAccountFormField.FieldId.BANK_CODE:
      throw new Error("Not implemented");
    case PaymentAccountFormField.FieldId.BANK_COUNTRY_CODE:
      return "A";
    case PaymentAccountFormField.FieldId.BANK_ID:
      throw new Error("Not implemented");
    case PaymentAccountFormField.FieldId.BANK_NAME:
      return "A";
    case PaymentAccountFormField.FieldId.BANK_SWIFT_CODE:
      return "A";
    case PaymentAccountFormField.FieldId.BENEFICIARY_ACCOUNT_NR:
      return "1";
    case PaymentAccountFormField.FieldId.BENEFICIARY_ADDRESS:
      return "";
    case PaymentAccountFormField.FieldId.BENEFICIARY_CITY:
      return "A";
    case PaymentAccountFormField.FieldId.BENEFICIARY_NAME:
      return "A";
    case PaymentAccountFormField.FieldId.BENEFICIARY_PHONE:
      return "1";
    case PaymentAccountFormField.FieldId.BIC:
      return "123";
    case PaymentAccountFormField.FieldId.BRANCH_ID:
      return "1";
    case PaymentAccountFormField.FieldId.CITY:
      return "A";
    case PaymentAccountFormField.FieldId.CONTACT:
      return "";
    case PaymentAccountFormField.FieldId.COUNTRY:
      return "abc"
    case PaymentAccountFormField.FieldId.EMAIL:
      return "@no.com";
    case PaymentAccountFormField.FieldId.EMAIL_OR_MOBILE_NR:
      return ""; // TODO: validate phone numbers, e.g. 876
    case PaymentAccountFormField.FieldId.EMAIL_OR_MOBILE_NR_OR_USERNAME:
      return "A"
    case PaymentAccountFormField.FieldId.EMAIL_OR_MOBILE_NR_OR_CASHTAG:
      return "A"
    case PaymentAccountFormField.FieldId.EXTRA_INFO:
      return undefined;
    case PaymentAccountFormField.FieldId.HOLDER_ADDRESS:
      return "aerkjgaef ajsdj asdfasdf dfjaksdjfe asd fasdf asf asdfjoiejasef asdf asdfjkajs dfaksdjf aksdjf aksjdf aks"; // >100 characters
    case PaymentAccountFormField.FieldId.HOLDER_EMAIL:
      throw new Error("Not implemented");
    case PaymentAccountFormField.FieldId.HOLDER_NAME:
      return "A";
    case PaymentAccountFormField.FieldId.HOLDER_TAX_ID:
      throw new Error("Not implemented");
    case PaymentAccountFormField.FieldId.IBAN:
      return "abc";
    case PaymentAccountFormField.FieldId.IFSC:
      throw new Error("Not implemented");
    case PaymentAccountFormField.FieldId.INTERMEDIARY_ADDRESS:
      return "";
    case PaymentAccountFormField.FieldId.INTERMEDIARY_BRANCH:
      return "A";
    case PaymentAccountFormField.FieldId.INTERMEDIARY_COUNTRY_CODE:
      return "A";
    case PaymentAccountFormField.FieldId.INTERMEDIARY_NAME:
      return "A";
    case PaymentAccountFormField.FieldId.INTERMEDIARY_SWIFT_CODE:
      return "A";
    case PaymentAccountFormField.FieldId.MOBILE_NR:
      return "A";
    case PaymentAccountFormField.FieldId.NATIONAL_ACCOUNT_ID:
      throw new Error("Not implemented");
    case PaymentAccountFormField.FieldId.PAYID:
      return "A";
    case PaymentAccountFormField.FieldId.PIX_KEY:
      throw new Error("Not implemented");
    case PaymentAccountFormField.FieldId.POSTAL_ADDRESS:
      return "";
    case PaymentAccountFormField.FieldId.PROMPT_PAY_ID:
      throw new Error("Not implemented");
    case PaymentAccountFormField.FieldId.QUESTION:
      return "";
    case PaymentAccountFormField.FieldId.REQUIREMENTS:
      throw new Error("Not implemented");
    case PaymentAccountFormField.FieldId.SALT:
      return "abc";
    case PaymentAccountFormField.FieldId.SORT_CODE:
      return "12345A";
    case PaymentAccountFormField.FieldId.SPECIAL_INSTRUCTIONS:
      return undefined;
    case PaymentAccountFormField.FieldId.STATE: {
      const country = HavenoUtils.getFormValue(form, PaymentAccountFormField.FieldId.COUNTRY);
      return moneroTs.GenUtils.arrayContains(field.getRequiredForCountriesList(), country) ? "" : "My state";
    }
    case PaymentAccountFormField.FieldId.TRADE_CURRENCIES:
      return "abc,def";
    case PaymentAccountFormField.FieldId.USERNAME:
      return "A";
    case PaymentAccountFormField.FieldId.ADDRESS:
      return "A123";
    default:
      throw new Error("Unhandled form field: " + fieldId);
  }
}

function testPaymentAccount(account: PaymentAccount, form: PaymentAccountForm) {
    if (account.getPaymentAccountPayload()?.getCryptoCurrencyAccountPayload()) testCryptoPaymentAccount(account, false); // TODO: test non-crypto
    if (account.getPaymentAccountPayload()?.getInstantCryptoCurrencyAccountPayload()) testCryptoPaymentAccount(account, true);
    expect(account.getAccountName()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.ACCOUNT_NAME).getValue()); // TODO: using number as payment method, account payload's account name = username
    const isCountryBased = account.getPaymentAccountPayload()!.getCountryBasedPaymentAccountPayload() !== undefined;
    if (isCountryBased) expect(account.getPaymentAccountPayload()!.getCountryBasedPaymentAccountPayload()!.getCountryCode()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.COUNTRY).getValue());
    switch (form.getId()) {
      case PaymentAccountForm.FormId.BLOCK_CHAINS:
        expect(account.getPaymentAccountPayload()!.getCryptoCurrencyAccountPayload()!.getAddress()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.ADDRESS).getValue());
        expect(account.getTradeCurrenciesList().map(currency => currency.getCode()).join(",")).toEqual(getFormField(form, PaymentAccountFormField.FieldId.TRADE_CURRENCIES).getValue());
        break;
      case PaymentAccountForm.FormId.REVOLUT:
        expect(account.getPaymentAccountPayload()!.getRevolutAccountPayload()!.getUsername()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.USERNAME).getValue());
        expect(account.getTradeCurrenciesList().map(currency => currency.getCode()).join(",")).toEqual(getFormField(form, PaymentAccountFormField.FieldId.TRADE_CURRENCIES).getValue());
        break;
      case PaymentAccountForm.FormId.SEPA:
        expect(account.getPaymentAccountPayload()!.getCountryBasedPaymentAccountPayload()!.getSepaAccountPayload()!.getHolderName()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.HOLDER_NAME).getValue());
        //expect(account.getPaymentAccountPayload()!.getCountryBasedPaymentAccountPayload()!.getSepaAccountPayload().getEmail()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.EMAIL).getValue()); // TODO: if this is deprecated, remove from sepa model
        expect(account.getPaymentAccountPayload()!.getCountryBasedPaymentAccountPayload()!.getSepaAccountPayload()!.getIban()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.IBAN).getValue());
        expect(account.getPaymentAccountPayload()!.getCountryBasedPaymentAccountPayload()!.getSepaAccountPayload()!.getBic()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.BIC).getValue());
        expect(account.getPaymentAccountPayload()!.getCountryBasedPaymentAccountPayload()!.getAcceptedCountryCodesList().join(",")).toEqual(getFormField(form, PaymentAccountFormField.FieldId.ACCEPTED_COUNTRY_CODES).getValue());
        break;
      case PaymentAccountForm.FormId.SEPA_INSTANT:
        expect(account.getPaymentAccountPayload()!.getCountryBasedPaymentAccountPayload()!.getSepaInstantAccountPayload()!.getHolderName()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.HOLDER_NAME).getValue());
        expect(account.getPaymentAccountPayload()!.getCountryBasedPaymentAccountPayload()!.getSepaInstantAccountPayload()!.getIban()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.IBAN).getValue());
        expect(account.getPaymentAccountPayload()!.getCountryBasedPaymentAccountPayload()!.getSepaInstantAccountPayload()!.getBic()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.BIC).getValue());
        expect(account.getPaymentAccountPayload()!.getCountryBasedPaymentAccountPayload()!.getAcceptedCountryCodesList().join(",")).toEqual(getFormField(form, PaymentAccountFormField.FieldId.ACCEPTED_COUNTRY_CODES).getValue());
        break;
      case PaymentAccountForm.FormId.TRANSFERWISE:
        expect(account.getPaymentAccountPayload()!.getTransferwiseAccountPayload()!.getEmail()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.EMAIL).getValue());
        break;
      case PaymentAccountForm.FormId.ZELLE:
        expect(account.getPaymentAccountPayload()!.getZelleAccountPayload()!.getHolderName()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.HOLDER_NAME).getValue());
        expect(account.getPaymentAccountPayload()!.getZelleAccountPayload()!.getEmailOrMobileNr()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.EMAIL_OR_MOBILE_NR).getValue());
        expect(account.getTradeCurrenciesList().length).toEqual(1);
        expect(account.getTradeCurrenciesList()[0].getCode()).toEqual("USD");
        break;
      case PaymentAccountForm.FormId.SWIFT:
        expect(account.getPaymentAccountPayload()!.getSwiftAccountPayload()!.getBankSwiftCode()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.BANK_SWIFT_CODE).getValue());
        expect(account.getPaymentAccountPayload()!.getSwiftAccountPayload()!.getBankCountryCode()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.BANK_COUNTRY_CODE).getValue());
        expect(account.getPaymentAccountPayload()!.getSwiftAccountPayload()!.getBankName()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.BANK_NAME).getValue());
        expect(account.getPaymentAccountPayload()!.getSwiftAccountPayload()!.getBankBranch()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.BANK_BRANCH).getValue());
        expect(account.getPaymentAccountPayload()!.getSwiftAccountPayload()!.getBankAddress()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.BANK_ADDRESS).getValue());
        expect(account.getPaymentAccountPayload()!.getSwiftAccountPayload()!.getIntermediarySwiftCode()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.INTERMEDIARY_SWIFT_CODE).getValue());
        expect(account.getPaymentAccountPayload()!.getSwiftAccountPayload()!.getIntermediaryCountryCode()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.INTERMEDIARY_COUNTRY_CODE).getValue());
        expect(account.getPaymentAccountPayload()!.getSwiftAccountPayload()!.getIntermediaryName()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.INTERMEDIARY_NAME).getValue());
        expect(account.getPaymentAccountPayload()!.getSwiftAccountPayload()!.getIntermediaryBranch()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.INTERMEDIARY_BRANCH).getValue());
        expect(account.getPaymentAccountPayload()!.getSwiftAccountPayload()!.getIntermediaryAddress()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.INTERMEDIARY_ADDRESS).getValue());
        expect(account.getPaymentAccountPayload()!.getSwiftAccountPayload()!.getBeneficiaryName()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.BENEFICIARY_NAME).getValue());
        expect(account.getPaymentAccountPayload()!.getSwiftAccountPayload()!.getBeneficiaryAccountNr()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.BENEFICIARY_ACCOUNT_NR).getValue());
        expect(account.getPaymentAccountPayload()!.getSwiftAccountPayload()!.getBeneficiaryAddress()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.BENEFICIARY_ADDRESS).getValue());
        expect(account.getPaymentAccountPayload()!.getSwiftAccountPayload()!.getBeneficiaryCity()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.BENEFICIARY_CITY).getValue());
        expect(account.getPaymentAccountPayload()!.getSwiftAccountPayload()!.getBeneficiaryPhone()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.BENEFICIARY_PHONE).getValue());
        expect(account.getPaymentAccountPayload()!.getSwiftAccountPayload()!.getSpecialInstructions()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.SPECIAL_INSTRUCTIONS).getValue());
        break;
      case PaymentAccountForm.FormId.F2F:
        expect(account.getPaymentAccountPayload()!.getCountryBasedPaymentAccountPayload()!.getF2fAccountPayload()!.getCity()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.CITY).getValue());
        expect(account.getPaymentAccountPayload()!.getCountryBasedPaymentAccountPayload()!.getF2fAccountPayload()!.getContact()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.CONTACT).getValue());
        expect(account.getPaymentAccountPayload()!.getCountryBasedPaymentAccountPayload()!.getF2fAccountPayload()!.getExtraInfo()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.EXTRA_INFO).getValue());
        break;
      case PaymentAccountForm.FormId.STRIKE:
        expect(account.getPaymentAccountPayload()!.getCountryBasedPaymentAccountPayload()!.getStrikeAccountPayload()!.getHolderName()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.HOLDER_NAME).getValue());
        break;
      case PaymentAccountForm.FormId.MONEY_GRAM:
        expect(account.getPaymentAccountPayload()!.getMoneyGramAccountPayload()!.getCountryCode()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.COUNTRY).getValue()); // TODO: ok to not be CountryBasedPaymentAccountPayload?
        expect(account.getPaymentAccountPayload()!.getMoneyGramAccountPayload()!.getState()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.STATE).getValue());
        expect(account.getPaymentAccountPayload()!.getMoneyGramAccountPayload()!.getHolderName()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.HOLDER_NAME).getValue());
        expect(account.getPaymentAccountPayload()!.getMoneyGramAccountPayload()!.getEmail()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.EMAIL).getValue());
        expect(account.getTradeCurrenciesList().map(currency => currency.getCode()).join(",")).toEqual(getFormField(form, PaymentAccountFormField.FieldId.TRADE_CURRENCIES).getValue());
        break;
      case PaymentAccountForm.FormId.FASTER_PAYMENTS:
        expect(account.getPaymentAccountPayload()!.getFasterPaymentsAccountPayload()!.getHolderName()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.HOLDER_NAME).getValue());
        expect(account.getPaymentAccountPayload()!.getFasterPaymentsAccountPayload()!.getSortCode()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.SORT_CODE).getValue());
        expect(account.getPaymentAccountPayload()!.getFasterPaymentsAccountPayload()!.getAccountNr()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.ACCOUNT_NR).getValue());
        break;
      case PaymentAccountForm.FormId.UPHOLD:
        expect(account.getPaymentAccountPayload()!.getUpholdAccountPayload()!.getAccountOwner()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.ACCOUNT_OWNER).getValue());
        expect(account.getPaymentAccountPayload()!.getUpholdAccountPayload()!.getAccountId()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.ACCOUNT_ID).getValue());
        break;
      case PaymentAccountForm.FormId.PAXUM:
        expect(account.getPaymentAccountPayload()!.getPaxumAccountPayload()!.getEmail()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.EMAIL).getValue());
        expect(account.getTradeCurrenciesList().map(currency => currency.getCode()).join(",")).toEqual(getFormField(form, PaymentAccountFormField.FieldId.TRADE_CURRENCIES).getValue());
        break;
      case PaymentAccountForm.FormId.PAY_BY_MAIL:
        expect(account.getPaymentAccountPayload()!.getPayByMailAccountPayload()!.getContact()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.CONTACT).getValue());
        expect(account.getPaymentAccountPayload()!.getPayByMailAccountPayload()!.getPostalAddress()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.POSTAL_ADDRESS).getValue());
        expect(account.getPaymentAccountPayload()!.getPayByMailAccountPayload()!.getExtraInfo()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.EXTRA_INFO).getValue());
        expect(account.getTradeCurrenciesList().length).toEqual(1);
        expect(account.getTradeCurrenciesList()[0].getCode()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.TRADE_CURRENCIES).getValue());
        break;
      case PaymentAccountForm.FormId.CASH_AT_ATM:
        expect(account.getPaymentAccountPayload()!.getCashAtAtmAccountPayload()!.getExtraInfo()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.EXTRA_INFO).getValue());
        expect(account.getTradeCurrenciesList().length).toEqual(1);
        expect(account.getTradeCurrenciesList()[0].getCode()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.TRADE_CURRENCIES).getValue());
        break;
      case PaymentAccountForm.FormId.AUSTRALIA_PAYID:
        expect(account.getPaymentAccountPayload()!.getAustraliaPayidPayload()!.getBankAccountName()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.BANK_ACCOUNT_NAME).getValue());
        expect(account.getPaymentAccountPayload()!.getAustraliaPayidPayload()!.getPayid()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.PAYID).getValue());
        expect(account.getPaymentAccountPayload()!.getAustraliaPayidPayload()!.getExtraInfo()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.EXTRA_INFO).getValue());
        break;
      case PaymentAccountForm.FormId.CASH_APP:
        expect(account.getPaymentAccountPayload()!.getCashAppAccountPayload()!.getEmailOrMobileNrOrCashtag()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.EMAIL_OR_MOBILE_NR_OR_CASHTAG).getValue());
        expect(account.getTradeCurrenciesList().length).toEqual(2);
        expect(account.getTradeCurrenciesList().map(currency => currency.getCode()).join(",")).toEqual(getFormField(form, PaymentAccountFormField.FieldId.TRADE_CURRENCIES).getValue());
        break;
      case PaymentAccountForm.FormId.PAYPAL:
        expect(account.getPaymentAccountPayload()!.getPaypalAccountPayload()!.getEmailOrMobileNrOrUsername()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.EMAIL_OR_MOBILE_NR_OR_USERNAME).getValue());
        expect(account.getTradeCurrenciesList().map(currency => currency.getCode()).join(",")).toEqual(getFormField(form, PaymentAccountFormField.FieldId.TRADE_CURRENCIES).getValue());
        break;
      case PaymentAccountForm.FormId.VENMO:
        expect(account.getPaymentAccountPayload()!.getVenmoAccountPayload()!.getEmailOrMobileNrOrUsername()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.EMAIL_OR_MOBILE_NR_OR_USERNAME).getValue());
        expect(account.getTradeCurrenciesList().length).toEqual(1);
        expect(account.getTradeCurrenciesList()[0].getCode()).toEqual("USD");
        break;
     case PaymentAccountForm.FormId.PAYSAFE:
        expect(account.getPaymentAccountPayload()!.getPaysafeAccountPayload()!.getEmail()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.EMAIL).getValue());
        expect(account.getTradeCurrenciesList().map(currency => currency.getCode()).join(",")).toEqual(getFormField(form, PaymentAccountFormField.FieldId.TRADE_CURRENCIES).getValue());
        break;
    case PaymentAccountForm.FormId.WECHAT_PAY:
        expect(account.getPaymentAccountPayload()!.getWeChatPayAccountPayload()!.getAccountNr()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.ACCOUNT_NR).getValue());
        expect(account.getTradeCurrenciesList().map(currency => currency.getCode()).join(",")).toEqual(getFormField(form, PaymentAccountFormField.FieldId.TRADE_CURRENCIES).getValue());
        break;
    case PaymentAccountForm.FormId.ALI_PAY:
        expect(account.getPaymentAccountPayload()!.getAliPayAccountPayload()!.getAccountNr()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.ACCOUNT_NR).getValue());
        expect(account.getTradeCurrenciesList().map(currency => currency.getCode()).join(",")).toEqual(getFormField(form, PaymentAccountFormField.FieldId.TRADE_CURRENCIES).getValue());
        break;
    case PaymentAccountForm.FormId.SWISH:
        expect(account.getPaymentAccountPayload()!.getSwishAccountPayload()!.getHolderName()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.HOLDER_NAME).getValue());
        expect(account.getPaymentAccountPayload()!.getSwishAccountPayload()!.getMobileNr()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.MOBILE_NR).getValue());
        expect(account.getTradeCurrenciesList().length).toEqual(1);
        expect(account.getTradeCurrenciesList()[0].getCode()).toEqual("SEK");
        break;
    case PaymentAccountForm.FormId.TRANSFERWISE_USD:
        expect(account.getPaymentAccountPayload()!.getCountryBasedPaymentAccountPayload()!.getTransferwiseUsdAccountPayload()!.getEmail()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.EMAIL).getValue());
        expect(account.getPaymentAccountPayload()!.getCountryBasedPaymentAccountPayload()!.getTransferwiseUsdAccountPayload()!.getHolderName()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.HOLDER_NAME).getValue());
        expect(account.getPaymentAccountPayload()!.getCountryBasedPaymentAccountPayload()!.getTransferwiseUsdAccountPayload()!.getHolderAddress()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.HOLDER_ADDRESS).getValue());
        expect(account.getTradeCurrenciesList().length).toEqual(1);
        expect(account.getTradeCurrenciesList()[0].getCode()).toEqual("USD");
        break;
    case PaymentAccountForm.FormId.AMAZON_GIFT_CARD:
        expect(account.getPaymentAccountPayload()!.getAmazonGiftCardAccountPayload()!.getEmailOrMobileNr()!).toEqual(getFormField(form, PaymentAccountFormField.FieldId.EMAIL_OR_MOBILE_NR).getValue());
        expect(account.getPaymentAccountPayload()!.getAmazonGiftCardAccountPayload()!.getCountryCode()!).toEqual(getFormField(form, PaymentAccountFormField.FieldId.COUNTRY).getValue());
        expect(account.getTradeCurrenciesList().map(currency => currency.getCode()).join(",")).toEqual(getFormField(form, PaymentAccountFormField.FieldId.TRADE_CURRENCIES).getValue());
        break;
    case PaymentAccountForm.FormId.ACH_TRANSFER:
        expect(account.getPaymentAccountPayload()!.getCountryBasedPaymentAccountPayload()!.getBankAccountPayload()?.getHolderName()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.HOLDER_NAME).getValue());
        expect(account.getPaymentAccountPayload()!.getCountryBasedPaymentAccountPayload()!.getBankAccountPayload()?.getAchTransferAccountPayload()?.getHolderAddress()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.HOLDER_ADDRESS).getValue());
        expect(account.getPaymentAccountPayload()!.getCountryBasedPaymentAccountPayload()!.getBankAccountPayload()?.getBankName()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.BANK_NAME).getValue());
        expect(account.getPaymentAccountPayload()!.getCountryBasedPaymentAccountPayload()!.getBankAccountPayload()?.getBranchId()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.BRANCH_ID).getValue());
        expect(account.getPaymentAccountPayload()!.getCountryBasedPaymentAccountPayload()!.getBankAccountPayload()?.getAccountNr()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.ACCOUNT_NR).getValue());
        expect(account.getPaymentAccountPayload()!.getCountryBasedPaymentAccountPayload()!.getBankAccountPayload()?.getAccountType()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.ACCOUNT_TYPE).getValue());
        expect(account.getPaymentAccountPayload()!.getCountryBasedPaymentAccountPayload()!.getCountryCode()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.COUNTRY).getValue());
        expect(account.getTradeCurrenciesList().length).toEqual(1);
        expect(account.getTradeCurrenciesList()[0].getCode()).toEqual("USD");
        break;
    case PaymentAccountForm.FormId.INTERAC_E_TRANSFER:
        expect(account.getPaymentAccountPayload()!.getInteracETransferAccountPayload()!.getHolderName()!).toEqual(getFormField(form, PaymentAccountFormField.FieldId.HOLDER_NAME).getValue());
        expect(account.getPaymentAccountPayload()!.getInteracETransferAccountPayload()!.getEmailOrMobileNr()!).toEqual(getFormField(form, PaymentAccountFormField.FieldId.EMAIL_OR_MOBILE_NR).getValue());
        expect(account.getPaymentAccountPayload()!.getInteracETransferAccountPayload()!.getQuestion()!).toEqual(getFormField(form, PaymentAccountFormField.FieldId.QUESTION).getValue());
        expect(account.getPaymentAccountPayload()!.getInteracETransferAccountPayload()!.getAnswer()!).toEqual(getFormField(form, PaymentAccountFormField.FieldId.ANSWER).getValue());
        break;
    case PaymentAccountForm.FormId.US_POSTAL_MONEY_ORDER:
        expect(account.getPaymentAccountPayload()!.getUSPostalMoneyOrderAccountPayload()!.getHolderName()!).toEqual(getFormField(form, PaymentAccountFormField.FieldId.HOLDER_NAME).getValue());
        expect(account.getPaymentAccountPayload()!.getUSPostalMoneyOrderAccountPayload()!.getPostalAddress()!).toEqual(getFormField(form, PaymentAccountFormField.FieldId.POSTAL_ADDRESS).getValue());
        expect(account.getTradeCurrenciesList().length).toEqual(1);
        expect(account.getTradeCurrenciesList()[0].getCode()).toEqual("USD");
        break;
      default:
        throw new Error("Unhandled payment method type: " + form.getId());
    }
}
