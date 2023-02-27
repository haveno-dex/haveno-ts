// --------------------------------- IMPORTS ----------------------------------

// import haveno types
import HavenoClient from "./HavenoClient";
import HavenoError from "./utils/HavenoError";
import HavenoUtils from "./utils/HavenoUtils";
import { MarketPriceInfo, NotificationMessage, OfferInfo, TradeInfo, UrlConnection, XmrBalanceInfo } from "./protobuf/grpc_pb"; // TODO (woodser): better names; haveno_grpc_pb, haveno_pb
import { Attachment, DisputeResult, PaymentMethod, PaymentAccountForm, PaymentAccountFormField, PaymentAccount, MoneroNodeSettings} from "./protobuf/pb_pb";
import { XmrDestination, XmrTx, XmrIncomingTransfer, XmrOutgoingTransfer } from "./protobuf/grpc_pb";
import AuthenticationStatus = UrlConnection.AuthenticationStatus;
import OnlineStatus = UrlConnection.OnlineStatus;

// import monero-javascript
const monerojs = require("monero-javascript"); // TODO (woodser): support typescript and `npm install @types/monero-javascript` in monero-javascript
const GenUtils = monerojs.GenUtils;
const BigInteger = monerojs.BigInteger;
const MoneroTxConfig = monerojs.MoneroTxConfig;
const MoneroDestination = monerojs.MoneroDestination;
const MoneroUtils = monerojs.MoneroUtils;
const TaskLooper = monerojs.TaskLooper;

// other imports
import fs from "fs";
import path from "path";
import net from "net";
import assert from "assert";
import console from "console"; // import console because jest swallows messages in real time
import * as os from 'os';

// ------------------------------ TEST CONFIG ---------------------------------

enum BaseCurrencyNetwork {
    XMR_MAINNET = "XMR_MAINNET",
    XMR_STAGENET = "XMR_STAGENET",
    XMR_LOCAL = "XMR_LOCAL"
}

// clients
const startupHavenods: HavenoClient[] = [];
let arbitrator: HavenoClient;
let user1: HavenoClient;
let user2: HavenoClient;
let monerod: any;
let fundingWallet: any;
let user1Wallet: any;
let user2Wallet: any;

// default test configuration
const TestConfig = {
    logLevel: 2,
    baseCurrencyNetwork: getBaseCurrencyNetwork(),
    networkType: getBaseCurrencyNetwork() == BaseCurrencyNetwork.XMR_MAINNET ? monerojs.MoneroNetworkType.MAINNET : getBaseCurrencyNetwork() == BaseCurrencyNetwork.XMR_LOCAL ? monerojs.MoneroNetworkType.TESTNET : monerojs.MoneroNetworkType.STAGENET,
    moneroBinsDir: "../haveno/.localnet",
    testDataDir: "./testdata",
    haveno: {
        path: "../haveno",
        version: "1.0.0"
    },
    monerod: {
        url: "http://localhost:" + (getBaseCurrencyNetwork() == BaseCurrencyNetwork.XMR_LOCAL ? "4" : getNetworkStartPort()) + "8081", // 18081, 28081, 48081 for mainnet, testnet, stagenet respectively
        username: "",
        password: ""
    },
    monerod2: {
        url: "http://localhost:58081",
        username: "superuser",
        password: "abctesting123",
        p2pBindPort: "58080",
        rpcBindPort: "58081",
        zmqRpcBindPort: "58082"
    },
    fundingWallet: {
        url: "http://localhost:" + getNetworkStartPort() + "8084", // 18084, 28084, 38084 for mainnet, testnet, stagenet respectively
        username: "rpc_user",
        password: "abc123",
        walletPassword: "abc123",
        defaultPath: "funding_wallet-" + getBaseCurrencyNetwork(),
        minimumFunding: BigInt("5000000000000"),
        mnemonic: "silk mocked cucumber lettuce hope adrenalin aching lush roles fuel revamp baptism wrist long tender teardrop midst pastry pigment equip frying inbound pinched ravine frying",
        primaryAddress: "A1y9sbVt8nqhZAVm3me1U18rUVXcjeNKuBd1oE2cTs8biA9cozPMeyYLhe77nPv12JA3ejJN3qprmREriit2fi6tJDi99RR",
        restoreHeight: 150
    },
    defaultHavenod: {
        logProcessOutput: true, // log output for processes started by tests (except arbitrator, user1, and user2 which are configured separately)
        logLevel: "info",
        apiPassword: "apitest",
        walletUsername: "haveno_user",
        walletDefaultPassword: "password", // only used if account password not set
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
    maxFee: BigInt("75000000000"),
    daemonPollPeriodMs: 5000,
    maxWalletStartupMs: 10000, // TODO (woodser): make shorter by switching to jni
    maxCpuPct: 0.25,
    assetCodes: ["USD", "GBP", "EUR", "ETH", "BTC", "BCH", "LTC"], // primary asset codes
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
    tradeInitTimeout: 60000,
    testTimeout: getBaseCurrencyNetwork() === BaseCurrencyNetwork.XMR_LOCAL ? 1200000 : 3600000, // timeout in ms for each test to complete (20 minutes for private network, 60 minutes for public network)
    trade: { // default trade context
        arbitrator: {} as HavenoClient, // assigned to default arbitrator before all tests. used to set expected arbitrator (cannot select arbitrator)
        maker: {} as HavenoClient, // assigned to user1 as default before all tests
        taker: {} as HavenoClient, // assigned to user2 as default before all tests
        makeOffer: true,
        takeOffer: true,
        awaitFundsToMakeOffer: true,
        direction: "buy",               // buy or sell xmr
        amount: BigInt("200000000000"), // amount of xmr to trade
        minAmount: undefined,
        assetCode: "usd",               // counter asset to trade
        makerPaymentAccountId: undefined,
        buyerSecurityDeposit: 0.15,
        price: undefined,               // use market price if undefined
        priceMargin: 0.0,
        triggerPrice: undefined,
        awaitFundsToTakeOffer: true,
        offerId: undefined,
        takerPaymentAccountId: undefined,
        buyerSendsPayment: true,
        sellerReceivesPayment: true,
        resolveDispute: true, // resolve dispute after opening
        disputeWinner: DisputeResult.Winner.SELLER,
        disputeReason: DisputeResult.Reason.PEER_WAS_LATE,
        disputeSummary: "Seller is winner",
        walletSyncPeriodMs: 5000,
        maxTimePeerNoticeMs: 5000,
        maxConcurrency: 14,
        stopOnFailure: true
    }
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

interface TradeContext {

    // trade flow
    concurrentTrades?: boolean, // testing trades at same time
    makeOffer?: boolean,
    takeOffer?: boolean,
    buyerOfflineAfterTake?: boolean,
    sellerOfflineAfterTake?: boolean,
    buyerOfflineAfterPaymentSent?: boolean
    buyerOfflineAfterDisputeOpened?: boolean,
    sellerOfflineAfterDisputeOpened?: boolean,
    sellerDisputeContext?: DisputeContext,
    buyerDisputeContext?: DisputeContext,
    buyerSendsPayment?: boolean,
    sellerReceivesPayment?: boolean

    // make offer
    maker?: HavenoClient,
    awaitFundsToMakeOffer?: boolean
    direction?: string,
    assetCode?: string,
    amount?: bigint,
    minAmount?: bigint,
    makerPaymentAccountId?: string,
    buyerSecurityDeposit?: number,
    price?: number,
    priceMargin?: number,
    triggerPrice?: number,

    // take offer
    taker?: HavenoClient,
    awaitFundsToTakeOffer?: boolean,
    offerId?: string,
    takerPaymentAccountId?: string,
    testTraderChat?: boolean,

    // resolve dispute
    resolveDispute?: boolean
    arbitrator?: HavenoClient,
    disputeOpener?: SaleRole,
    disputeWinner?: DisputeResult.Winner,
    disputeReason?: DisputeResult.Reason,
    disputeSummary?: string,
    disputeWinnerAmount?: bigint

    // other context
    offer?: OfferInfo,
    index?: number,
    isOfferTaken?: boolean,
    isPaymentSent?: boolean,
    isPaymentReceived?: boolean,
    phase?: string,
    payoutState?: string[],
    disputeState?: string,
    isCompleted?: boolean,
    isPayoutPublished?: boolean, // TODO: test isDepositsPublished, etc
    isPayoutConfirmed?: boolean,
    isPayoutUnlocked?: boolean
    buyerOpenedDispute?: boolean,
    sellerOpenedDispute?: boolean,
    maxConcurrency?: number,
    walletSyncPeriodMs?: number,
    maxTimePeerNoticeMs?: number,
    stopOnFailure?: boolean,
    buyerAppName?: string,
    sellerAppName?: string,
    usedPorts?: string[]
}

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

interface TxContext {
    isCreatedTx: boolean;
}

// track started haveno processes
const HAVENO_PROCESSES: HavenoClient[] = [];
const HAVENO_PROCESS_PORTS: string[] = [];
const HAVENO_WALLETS: Map<HavenoClient, any> = new Map<HavenoClient, any>();

// other config
const OFFLINE_ERR_MSG = "Http response at 400 or 500 level";

// -------------------------- BEFORE / AFTER TESTS ----------------------------

jest.setTimeout(TestConfig.testTimeout);

beforeAll(async () => {
  try {

    // set log level for tests
    HavenoUtils.setLogLevel(TestConfig.logLevel);

    // initialize funding wallet
    await initFundingWallet();
    HavenoUtils.log(0, "Funding wallet balance: " + await fundingWallet.getBalance());
    HavenoUtils.log(0, "Funding wallet unlocked balance: " + await fundingWallet.getUnlockedBalance());
    const subaddress = await fundingWallet.createSubaddress(0);
    HavenoUtils.log(0, "Funding wallet height: " + await fundingWallet.getHeight());
    HavenoUtils.log(0, "Funding wallet mnemonic: " + await fundingWallet.getMnemonic());
    HavenoUtils.log(0, "Funding wallet primary address: " + await fundingWallet.getPrimaryAddress());
    HavenoUtils.log(0, "Funding wallet new subaddress: " + subaddress.getAddress());

    // initialize monerod
    monerod = await monerojs.connectToDaemonRpc(TestConfig.monerod.url, TestConfig.monerod.username, TestConfig.monerod.password);
    await mineToHeight(160); // initialize blockchain to latest block type

    // start configured haveno daemons
    const promises: Promise<HavenoClient>[] = [];
    let err;
    for (const config of TestConfig.startupHavenods) promises.push(initHaveno(config));
    for (const settledPromise of await Promise.allSettled(promises)) {
      if (settledPromise.status === "fulfilled") startupHavenods.push((settledPromise as PromiseFulfilledResult<HavenoClient>).value);
      else if (!err) err = new Error((settledPromise as PromiseRejectedResult).reason);
    }
    if (err) throw err;

    // assign arbitrator, user1, user2
    arbitrator = startupHavenods[0];
    user1 = startupHavenods[1];
    user2 = startupHavenods[2];
    TestConfig.trade.arbitrator = arbitrator;
    TestConfig.trade.maker = user1;
    TestConfig.trade.taker = user2;

    // connect client wallets
    user1Wallet = await monerojs.connectToWalletRpc(TestConfig.startupHavenods[1].walletUrl, TestConfig.defaultHavenod.walletUsername, TestConfig.startupHavenods[1].accountPasswordRequired ? TestConfig.startupHavenods[1].accountPassword : TestConfig.defaultHavenod.walletDefaultPassword);
    user2Wallet = await monerojs.connectToWalletRpc(TestConfig.startupHavenods[2].walletUrl, TestConfig.defaultHavenod.walletUsername, TestConfig.startupHavenods[2].accountPasswordRequired ? TestConfig.startupHavenods[2].accountPassword : TestConfig.defaultHavenod.walletDefaultPassword);

    // register arbitrator dispute agent
    await arbitrator.registerDisputeAgent("arbitrator", getArbitratorPrivKey(0));

    // create test data directory if it doesn't exist
    if (!fs.existsSync(TestConfig.testDataDir)) fs.mkdirSync(TestConfig.testDataDir);
  } catch (err) {
    await shutDown();
    throw err;
  }
});

beforeEach(async () => {
  HavenoUtils.log(0, "BEFORE TEST \"" + expect.getState().currentTestName + "\"");
});

afterAll(async () => {
  await shutDown();
});

async function shutDown() {

  // release haveno processes
  const promises: Promise<void>[] = [];
  for (const havenod of startupHavenods) {
    promises.push(havenod.getProcess() ? releaseHavenoProcess(havenod) : havenod.disconnect());
  }
  await Promise.all(promises);

  // terminate monero-javascript worker
  (await monerojs.LibraryUtils.getWorker()).terminate();
}

// ----------------------------------- TESTS ----------------------------------

test("Can get the version (CI)", async () => {
  const version = await arbitrator.getVersion();
  expect(version).toEqual(TestConfig.haveno.version);
});

test("Can manage an account (CI)", async () => {
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

    // delete account
    await user3.deleteAccount();
    do { await wait(1000); }
    while(!await user3.isConnectedToDaemon());
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

test("Can manage Monero daemon connections (CI)", async () => {
  let monerod2: any;
  let user3: HavenoClient|undefined;
  let err: any;
  try {

    // start user3
    user3 = await initHaveno();

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
        .setUrl(TestConfig.monerod2.url)
        .setPriority(1));
    connection = await user3.getMoneroConnection();
    testConnection(connection!, TestConfig.monerod2.url, undefined, undefined, 1); // status may or may not be known due to periodic connection checking

    // connection is offline
    connection = await user3.checkMoneroConnection();
    assert(!await user3.isConnectedToMonero());
    testConnection(connection!, TestConfig.monerod2.url, OnlineStatus.OFFLINE, AuthenticationStatus.NO_AUTHENTICATION, 1);

    // start monerod2
    const cmd = [
      TestConfig.moneroBinsDir + "/monerod",
      "--" + monerojs.MoneroNetworkType.toString(TestConfig.networkType).toLowerCase(),
      "--no-igd",
      "--hide-my-port",
      "--data-dir",  TestConfig.moneroBinsDir + "/" + TestConfig.baseCurrencyNetwork.toLowerCase() + "/testnode",
      "--p2p-bind-port", TestConfig.monerod2.p2pBindPort,
      "--rpc-bind-port", TestConfig.monerod2.rpcBindPort,
      "--no-zmq"
    ];
    if (TestConfig.monerod2.username) cmd.push("--rpc-login", TestConfig.monerod2.username + ":" + TestConfig.monerod2.password);
    monerod2 = await monerojs.connectToDaemonRpc(cmd);

    // connection is online and not authenticated
    connection = await user3.checkMoneroConnection();
    assert(!await user3.isConnectedToMonero());
    testConnection(connection!, TestConfig.monerod2.url, OnlineStatus.ONLINE, AuthenticationStatus.NOT_AUTHENTICATED, 1);

    // set connection credentials
    await user3.setMoneroConnection(new UrlConnection()
        .setUrl(TestConfig.monerod2.url)
        .setUsername(TestConfig.monerod2.username)
        .setPassword(TestConfig.monerod2.password)
        .setPriority(1));
    connection = await user3.getMoneroConnection();
    testConnection(connection!, TestConfig.monerod2.url, undefined, undefined, 1);

    // connection is online and authenticated
    connection = await user3.checkMoneroConnection();
    assert(await user3.isConnectedToMonero());
    testConnection(connection!, TestConfig.monerod2.url, OnlineStatus.ONLINE, AuthenticationStatus.AUTHENTICATED, 1);

    // change account password
    const newPassword = "newPassword";
    await user3.changePassword(TestConfig.defaultHavenod.accountPassword, newPassword);

    // restart user3
    const appName = user3.getAppName();
    await releaseHavenoProcess(user3);
    user3 = await initHaveno({appName: appName, accountPassword: newPassword});

    // connection is restored, online, and authenticated
    connection = await user3.getMoneroConnection();
    testConnection(connection!, TestConfig.monerod2.url, OnlineStatus.ONLINE, AuthenticationStatus.AUTHENTICATED, 1);
    connections = await user3.getMoneroConnections();
    testConnection(getConnection(connections, monerodUrl1)!, monerodUrl1, OnlineStatus.UNKNOWN, AuthenticationStatus.NO_AUTHENTICATION, 1);

    // enable auto switch
    await user3.setAutoSwitch(true);

    // stop monerod
    //await monerod2.stopProcess(); // TODO (monero-javascript): monerod remains available after await monerod.stopProcess() for up to 40 seconds
    await GenUtils.killProcess(monerod2.process, "SIGKILL");

    // test auto switch after periodic connection check
    await wait(TestConfig.daemonPollPeriodMs * 2);
    connection = await user3.getMoneroConnection();
    testConnection(connection!, monerodUrl1, OnlineStatus.ONLINE, AuthenticationStatus.AUTHENTICATED, 1);

    // stop auto switch and checking connection periodically
    await user3.setAutoSwitch(false);
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
  if (monerod2) await monerod2.stopProcess();
  if (err) throw err;
});

test("Can start and stop a local Monero node (CI)", async() => {

  // expect error stopping local node
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

  let isMoneroNodeOnline = await user1.isMoneroNodeOnline();
  if (isMoneroNodeOnline) {
    HavenoUtils.log(0, "Warning: local Monero node is already running, skipping start and stop local Monero node tests");

    // expect error due to existing running node
    const newSettings = new MoneroNodeSettings();
    try {
      await user1.startMoneroNode(newSettings);
      throw new Error("should have thrown");
    } catch (err: any) {
      if (err.message !== "Local Monero node already online") throw new Error("Unexpected error: " + err.message);
    }

  } else {

    // expect error when passing in bad arguments
    const badSettings = new MoneroNodeSettings();
    badSettings.setStartupFlagsList(["--invalid-flag"]);
    try {
      await user1.startMoneroNode(badSettings);
      throw new Error("should have thrown");
    } catch (err: any) {
      if (!err.message.startsWith("Failed to start monerod:")) throw new Error("Unexpected error: ");
    }

    // expect successful start with custom settings
    const connectionsBefore = await user1.getMoneroConnections();
    const settings: MoneroNodeSettings = new MoneroNodeSettings();
    const dataDir = TestConfig.moneroBinsDir + "/" + TestConfig.baseCurrencyNetwork + "/node1";
    const logFile = dataDir + "/test.log";
    const p2pPort = 38080;
    const rpcPort = 38081;
    settings.setBlockchainPath(dataDir);
    settings.setStartupFlagsList(["--log-file", logFile, "--p2p-bind-port", p2pPort.toString(), "--rpc-bind-port", rpcPort.toString(), "--no-zmq"]);
    await user1.startMoneroNode(settings);
    isMoneroNodeOnline = await user1.isMoneroNodeOnline();
    assert(isMoneroNodeOnline);

    // expect settings are updated
    const settingsAfter = await user1.getMoneroNodeSettings();
    testMoneroNodeSettingsEqual(settings, settingsAfter!);

    // expect connections to be unmodified by local node
    const connectionsAfter = await user1.getMoneroConnections();
    assert(connectionsBefore.length === connectionsAfter.length);

    // expect connection to local monero node to succeed
    const rpcUrl = "http://127.0.0.1:" + rpcPort.toString();
    let daemon = await monerojs.connectToDaemonRpc(rpcUrl, "superuser", "abctesting123");
    let height = await daemon.getHeight();
    assert(height >= 0);

    // expect error due to existing running node
    const newSettings = new MoneroNodeSettings();
    try {
      await user1.startMoneroNode(newSettings);
      throw new Error("should have thrown");
    } catch (err: any) {
      if (err.message !== "Local Monero node already online") throw new Error("Unexpected error: " + err.message);
    }

    // expect stopped node
    await user1.stopMoneroNode();
    isMoneroNodeOnline = await user1.isMoneroNodeOnline();
    assert(!isMoneroNodeOnline);
    try {
      daemon = await monerojs.connectToDaemonRpc(rpcUrl);
      height = await daemon.getHeight();
      throw new Error("should have thrown");
    } catch (err: any) {
      if (err.message !== "RequestError: Error: connect ECONNREFUSED 127.0.0.1:" + rpcPort.toString()) throw new Error("Unexpected error: " + err.message);
    }
  }
});

// test wallet balances, transactions, deposit addresses, create and relay txs
test("Has a Monero wallet (CI)", async () => {

  // get seed phrase
  const seed = await user1.getXmrSeed();
  await MoneroUtils.validateMnemonic(seed);

  // get primary address
  const primaryAddress = await user1.getXmrPrimaryAddress();
  await MoneroUtils.validateAddress(primaryAddress, TestConfig.networkType);

  // wait for user1 to have unlocked balance
  const tradeAmount = BigInt("250000000000");
  await waitForAvailableBalance(tradeAmount * BigInt("2"), user1);

  // test balances
  const balancesBefore: XmrBalanceInfo = await user1.getBalances(); // TODO: rename to getXmrBalances() for consistency?
  expect(BigInt(balancesBefore.getAvailableBalance())).toBeGreaterThan(BigInt("0"));
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
    await MoneroUtils.validateAddress(address, TestConfig.networkType);
  }

  // create withdraw tx
  const destination = new XmrDestination().setAddress(await user1.getXmrNewSubaddress()).setAmount("100000000000");
  let tx: XmrTx|undefined = await user1.createXmrTx([destination]);
  testTx(tx, {isCreatedTx: true});

  // relay withdraw tx
  const txHash = await user1.relayXmrTx(tx.getMetadata());
  expect(txHash.length).toEqual(64);
  await wait(TestConfig.trade.maxTimePeerNoticeMs); // TODO: this is necessary for wallets with many subaddresses so something is async

  // balances decreased
  const balancesAfter = await user1.getBalances();
  expect(BigInt(balancesAfter.getBalance())).toBeLessThan(BigInt(balancesBefore.getBalance()));
  expect(BigInt(balancesAfter.getAvailableBalance())).toBeLessThan(BigInt(balancesBefore.getAvailableBalance()));

  // get relayed tx
  tx = await user1.getXmrTx(txHash);
  testTx(tx!, {isCreatedTx: false});

  // relay invalid tx
  try {
    await user1.relayXmrTx("invalid tx metadata");
    throw new Error("Cannot relay invalid tx metadata");
  } catch (err: any) {
    if (err.message !== "Failed to parse hex.") throw new Error("Unexpected error: " + err.message);
  }
});

test("Can get balances (CI, sanity check)", async () => {
  const balances: XmrBalanceInfo = await user1.getBalances();
  expect(BigInt(balances.getAvailableBalance())).toBeGreaterThanOrEqual(0);
  expect(BigInt(balances.getPendingBalance())).toBeGreaterThanOrEqual(0);
  expect(BigInt(balances.getReservedOfferBalance())).toBeGreaterThanOrEqual(0);
  expect(BigInt(balances.getReservedTradeBalance())).toBeGreaterThanOrEqual(0);
});

test("Can send and receive push notifications (CI, sanity check)", async () => {

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

test("Can get supported assets and their payment methods (CI, sanity check)", async() => {
  const assetCodes = await user1.getSupportedAssetCodes(); // TODO: replace with getSupportedAssets(): TradeCurrency[]
  for (const assetCode of assetCodes) {
    const paymentMethods = await user1.getPaymentMethods(assetCode);
    expect(paymentMethods.length).toBeGreaterThanOrEqual(0);
  }
});

test("Can get market prices (CI, sanity check)", async () => {

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
  await expect(async () => { await user1.getPrice("INVALID_CURRENCY") })
    .rejects
    .toThrow('Currency not found: INVALID_CURRENCY');
});

test("Can get market depth (CI, sanity check)", async () => {
    const assetCode = "eth";

    // clear offers
    await clearOffers(user1, assetCode);
    await clearOffers(user2, assetCode);
    async function clearOffers(havenod: HavenoClient, assetCode: string) {
      for (const offer of await havenod.getMyOffers(assetCode)) {
        if (offer.getBaseCurrencyCode().toLowerCase() === assetCode.toLowerCase()) { // TODO (woodser): offer base currency and counter currency are switched for cryptos
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
    await makeOffer({maker: user1, direction: "buy", amount: BigInt("150000000000"), assetCode: assetCode, priceMargin: 0.00, price: 17.0}); // TODO: offer price is reversed. fix everywhere
    await makeOffer({maker: user1, direction: "buy", amount: BigInt("150000000000"), assetCode: assetCode, priceMargin: 0.02, price: 17.2});
    await makeOffer({maker: user1, direction: "buy", amount: BigInt("200000000000"), assetCode: assetCode, priceMargin: 0.05, price: 17.3});
    await makeOffer({maker: user1, direction: "buy", amount: BigInt("150000000000"), assetCode: assetCode, priceMargin: 0.02, price: 17.3});
    await makeOffer({maker: user1, direction: "sell", amount: BigInt("300000000000"), assetCode: assetCode, priceMargin: 0.00});
    await makeOffer({maker: user1, direction: "sell", amount: BigInt("300000000000"), assetCode: assetCode, priceMargin: 0.02});
    await makeOffer({maker: user1, direction: "sell", amount: BigInt("400000000000"), assetCode: assetCode, priceMargin: 0.05});

    // get user2's market depth
    await wait(TestConfig.trade.maxTimePeerNoticeMs);
    marketDepth = await user1.getMarketDepth(assetCode);

    // each unique price has a depth
    expect(marketDepth.getBuyPricesList().length).toEqual(3);
    expect(marketDepth.getSellPricesList().length).toEqual(3);
    expect(marketDepth.getBuyPricesList().length).toEqual(marketDepth.getBuyDepthList().length);
    expect(marketDepth.getSellPricesList().length).toEqual(marketDepth.getSellDepthList().length);

    // test buy prices and depths
    const buyOffers = (await user1.getOffers(assetCode, "buy")).concat(await user1.getMyOffers(assetCode, "buy")).sort(function(a, b) { return parseFloat(a.getPrice()) - parseFloat(b.getPrice()) });
    expect(marketDepth.getBuyPricesList()[0]).toEqual(1 / parseFloat(buyOffers[0].getPrice())); // TODO: price when posting offer is reversed. this assumes crypto counter currency
    expect(marketDepth.getBuyPricesList()[1]).toEqual(1 / parseFloat(buyOffers[1].getPrice()));
    expect(marketDepth.getBuyPricesList()[2]).toEqual(1 / parseFloat(buyOffers[2].getPrice()));
    expect(marketDepth.getBuyDepthList()[0]).toEqual(0.15);
    expect(marketDepth.getBuyDepthList()[1]).toEqual(0.30);
    expect(marketDepth.getBuyDepthList()[2]).toEqual(0.65);

    // test sell prices and depths
    const sellOffers = (await user1.getOffers(assetCode, "sell")).concat(await user1.getMyOffers(assetCode, "sell")).sort(function(a, b) { return parseFloat(b.getPrice()) - parseFloat(a.getPrice()) });
    expect(marketDepth.getSellPricesList()[0]).toEqual(1 / parseFloat(sellOffers[0].getPrice()));
    expect(marketDepth.getSellPricesList()[1]).toEqual(1 / parseFloat(sellOffers[1].getPrice()));
    expect(marketDepth.getSellPricesList()[2]).toEqual(1 / parseFloat(sellOffers[2].getPrice()));
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

test("Can register as an arbitrator (CI)", async () => {

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

test("Can get offers (CI)", async () => {
  for (const assetCode of TestConfig.assetCodes) {
    const offers: OfferInfo[] = await user1.getOffers(assetCode);
    for (const offer of offers)  testOffer(offer);
  }
});

test("Can get my offers (CI)", async () => {

  // get all offers
  const offers: OfferInfo[] = await user1.getMyOffers();
  for (const offer of offers) testOffer(offer);

  // get offers by asset code
  for (const assetCode of TestConfig.assetCodes) {
    const offers: OfferInfo[] = await user1.getMyOffers(assetCode);
    for (const offer of offers) {
      testOffer(offer);
      expect(assetCode).toEqual(isCrypto(assetCode) ? offer.getBaseCurrencyCode() : offer.getCounterCurrencyCode()); // crypto asset codes are base
    }
  }
});

test("Can get payment methods (CI)", async () => {
  const paymentMethods: PaymentMethod[] = await user1.getPaymentMethods();
  expect(paymentMethods.length).toBeGreaterThan(0);
  for (const paymentMethod of paymentMethods) {
    expect(paymentMethod.getId().length).toBeGreaterThan(0);
    expect(BigInt(paymentMethod.getMaxTradeLimit())).toBeGreaterThan(BigInt(0));
    expect(BigInt(paymentMethod.getMaxTradePeriod())).toBeGreaterThan(BigInt(0));
    expect(paymentMethod.getSupportedAssetCodesList().length).toBeGreaterThanOrEqual(0);
  }
});

test("Can get payment accounts (CI)", async () => {
  const paymentAccounts: PaymentAccount[] = await user1.getPaymentAccounts();
  for (const paymentAccount of paymentAccounts) {
    if (paymentAccount.getPaymentAccountPayload()!.getCryptoCurrencyAccountPayload()) { // TODO (woodser): test non-crypto
       testCryptoPaymentAccount(paymentAccount);
    }
  }
});

// TODO: rename ClearXChange to Zelle
// TODO: FieldId represented as number
test("Can validate payment account forms (CI, sanity check)", async () => {

  // supported payment methods
  const expectedPaymentMethods = ["BLOCK_CHAINS", "REVOLUT", "SEPA", "SEPA_INSTANT", "TRANSFERWISE", "CLEAR_X_CHANGE", "SWIFT", "F2F", "STRIKE", "MONEY_GRAM", "FASTER_PAYMENTS", "UPHOLD", "PAXUM"];

  // get payment methods
  const paymentMethods = await user1.getPaymentMethods();
  expect(paymentMethods.length).toEqual(expectedPaymentMethods.length);
  for (const paymentMethod of paymentMethods) {
    assert(GenUtils.arrayContains(expectedPaymentMethods, paymentMethod.getId()), "Payment method is not expected: " + paymentMethod.getId());
  }

  // test form for each payment method
  for (const paymentMethod of paymentMethods) {

    // generate form
    const accountForm = await user1.getPaymentAccountForm(paymentMethod.getId());

    // complete form, validating each field
    for (const field of accountForm.getFieldsList()) {

      // validate invalid form field
      try {
        const invalidInput = getInvalidFormInput(accountForm, field.getId());
        await user1.validateFormField(accountForm, field.getId(), invalidInput);
        throw new Error("Should have thrown error validating form field '" + field.getId() + "' with invalid value '" + invalidInput + "'");
      } catch (err: any) {
        if (err.message.indexOf("Not implemented") >= 0) throw err;
        if (err.message.indexOf("Should have thrown") >= 0) throw err;
      }

      // validate valid form field
      const validInput = getValidFormInput(field.getId(), accountForm);
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
  }
});

test("Can create fiat payment accounts (CI)", async () => {

  // get payment account form
  const paymentMethodId = 'REVOLUT';
  const accountForm = await user1.getPaymentAccountForm(paymentMethodId);

  // edit form
  HavenoUtils.setFormValue(PaymentAccountFormField.FieldId.ACCOUNT_NAME, "Revolut account " + GenUtils.getUUID(), accountForm);
  HavenoUtils.setFormValue(PaymentAccountFormField.FieldId.USER_NAME, "user123", accountForm);
  HavenoUtils.setFormValue(PaymentAccountFormField.FieldId.TRADE_CURRENCIES, "gbp,eur,usd", accountForm);

  // create payment account
  const fiatAccount = await user1.createPaymentAccount(accountForm);
  expect(fiatAccount.getAccountName()).toEqual(HavenoUtils.getFormValue(accountForm, PaymentAccountFormField.FieldId.ACCOUNT_NAME));
  expect(fiatAccount.getSelectedTradeCurrency()!.getCode()).toEqual("USD");
  expect(fiatAccount.getTradeCurrenciesList().length).toBeGreaterThan(0);
  expect(fiatAccount.getPaymentAccountPayload()!.getPaymentMethodId()).toEqual(paymentMethodId);
  expect(fiatAccount.getPaymentAccountPayload()!.getRevolutAccountPayload()!.getAccountId()).toEqual(HavenoUtils.getFormValue(accountForm, PaymentAccountFormField.FieldId.USER_NAME)); // TODO: payment payload account id is username?
  expect(fiatAccount.getPaymentAccountPayload()!.getRevolutAccountPayload()!.getUserName()).toEqual(HavenoUtils.getFormValue(accountForm, PaymentAccountFormField.FieldId.USER_NAME));

  // payment account added
  let found = false;
  for (const paymentAccount of await user1.getPaymentAccounts()) {
    if (paymentAccount.getId() === fiatAccount.getId()) {
      found = true;
      break;
    }
  }
  assert(found, "Payment account not found after adding");
});

test("Can create crypto payment accounts (CI)", async () => {

  // test each crypto
  for (const testAccount of TestConfig.cryptoAddresses) {

    // create payment account
    const name = testAccount.currencyCode + " " + testAccount.address.substr(0, 8) + "... " + GenUtils.getUUID();
    const paymentAccount: PaymentAccount = await user1.createCryptoPaymentAccount(name, testAccount.currencyCode, testAccount.address);
    testCryptoPaymentAccount(paymentAccount);
    testCryptoPaymentAccountEquals(paymentAccount, testAccount, name);

    // fetch and test payment account
    let fetchedAccount: PaymentAccount|undefined;
    for (const account of await user1.getPaymentAccounts()) {
      if (paymentAccount.getId() === account.getId()) {
        fetchedAccount = account;
        break;
      }
    }
    if (!fetchedAccount) throw new Error("Payment account not found after being added");
    testCryptoPaymentAccount(paymentAccount);
    testCryptoPaymentAccountEquals(fetchedAccount, testAccount, name);
  }

  // test invalid currency code
  await expect(async () => { await user1.createCryptoPaymentAccount("My first account", "ABC", "123"); })
      .rejects
      .toThrow("crypto currency with code 'abc' not found");

  // test invalid address
  await expect(async () => { await user1.createCryptoPaymentAccount("My second account", "ETH", "123"); })
      .rejects
      .toThrow('123 is not a valid eth address');

  // test address duplicity
  await user1.createCryptoPaymentAccount("Unique account name", TestConfig.cryptoAddresses[0].currencyCode, TestConfig.cryptoAddresses[0].address)

  await expect(async () => { await user1.createCryptoPaymentAccount("Unique account name", TestConfig.cryptoAddresses[0].currencyCode, TestConfig.cryptoAddresses[0].address); })
      .rejects
      .toThrow("Account 'Unique account name' is already taken");

  function testCryptoPaymentAccountEquals(paymentAccount: PaymentAccount, testAccount: any, name: string) {
    expect(paymentAccount.getAccountName()).toEqual(name);
    expect(paymentAccount.getPaymentAccountPayload()!.getCryptoCurrencyAccountPayload()!.getAddress()).toEqual(testAccount.address);
    expect(paymentAccount.getSelectedTradeCurrency()!.getCode()).toEqual(testAccount.currencyCode.toUpperCase());
  }
});

test("Can prepare for trading (CI)", async () => {
  await prepareForTrading(5, user1, user2);
});

test("Can post and remove an offer (CI, sanity check)", async () => {

  // wait for user1 to have unlocked balance to post offer
  await waitForAvailableBalance(BigInt("250000000000") * BigInt("2"), user1);

  // get unlocked balance before reserving funds for offer
  const availableBalanceBefore = BigInt((await user1.getBalances()).getAvailableBalance());

  // post crypto offer
  let assetCode = "BCH";
  let price = 1 / 17;
  price = 1 / price; // TODO: price in crypto offer is inverted
  let offer: OfferInfo = await makeOffer({maker: user1, assetCode: assetCode, price: price});
  assert.equal(offer.getState(), "AVAILABLE");
  assert.equal(offer.getBaseCurrencyCode(), assetCode); // TODO: base and counter currencies inverted in crypto offer
  assert.equal(offer.getCounterCurrencyCode(), "XMR");
  assert.equal(parseFloat(offer.getPrice()), price);

  // has offer
  offer = await user1.getMyOffer(offer.getId());
  assert.equal(offer.getState(), "AVAILABLE");

  // peer sees offer
  await wait(TestConfig.trade.maxTimePeerNoticeMs);
  if (!getOffer(await user2.getOffers(assetCode, TestConfig.trade.direction), offer.getId())) throw new Error("Offer " + offer.getId() + " was not found in peer's offers after posted");

  // cancel offer
  await user1.removeOffer(offer.getId());

  // offer is removed from my offers
  if (getOffer(await user1.getMyOffers(assetCode, "buy"), offer.getId())) throw new Error("Offer " + offer.getId() + " was found in my offers after removal");

  // reserved balance released
  expect(BigInt((await user1.getBalances()).getAvailableBalance())).toEqual(availableBalanceBefore);

  // post fiat offer
  assetCode = "USD";
  price = 180.0;
  offer = await makeOffer({maker: user1, assetCode: assetCode, price: price});
  assert.equal(offer.getState(), "AVAILABLE");
  assert.equal(offer.getBaseCurrencyCode(), "XMR");
  assert.equal(offer.getCounterCurrencyCode(), "USD");
  assert.equal(parseFloat(offer.getPrice()), price);

  // has offer
  offer = await user1.getMyOffer(offer.getId());
  assert.equal(offer.getState(), "AVAILABLE");

  // cancel offer
  await user1.removeOffer(offer.getId());

  // offer is removed from my offers
  if (getOffer(await user1.getMyOffers(assetCode, "buy"), offer.getId())) throw new Error("Offer " + offer.getId() + " was found in my offers after removal");

  // reserved balance released
  expect(BigInt((await user1.getBalances()).getAvailableBalance())).toEqual(availableBalanceBefore);
});

// TODO: support splitting outputs
// TODO: provide number of confirmations in offer status
test("Can schedule offers with locked funds (CI)", async () => {
  let user3: HavenoClient|undefined;
  let err: any;
  try {

    // configure test
    const completeTrade = true;
    const resolveDispute = Math.random() < 0.5;

    // start user3
    user3 = await initHaveno();
    const user3Wallet = await monerojs.connectToWalletRpc("http://127.0.0.1:" + user3.getWalletRpcPort(), TestConfig.defaultHavenod.walletUsername, TestConfig.defaultHavenod.accountPassword);

    // fund user3 with 2 outputs of 0.5 XMR
    const outputAmt = BigInt("500000000000");
    await fundOutputs([user3Wallet], outputAmt, 2, false);

    // schedule offer
    const assetCode = "BCH";
    const direction = "BUY";
    const ctx = Object.assign({}, TestConfig.trade, {maker: user3, assetCode: assetCode, direction: direction, awaitFundsToMakeOffer: false});
    let offer: OfferInfo = await makeOffer(ctx);
    assert.equal(offer.getState(), "SCHEDULED");

    // has offer
    offer = await user3.getMyOffer(offer.getId());
    assert.equal(offer.getState(), "SCHEDULED");

    // balances unchanged
    expect(BigInt((await user3.getBalances()).getPendingBalance())).toEqual(outputAmt * BigInt(2));
    expect(BigInt((await user3.getBalances()).getReservedOfferBalance())).toEqual(BigInt(0));

    // peer does not see offer because it's scheduled
    await wait(TestConfig.trade.maxTimePeerNoticeMs);
    if (getOffer(await user1.getOffers(assetCode, direction), offer.getId())) throw new Error("Offer " + offer.getId() + " was found in peer's offers before posted");

    // cancel offer
    await user3.removeOffer(offer.getId());
    if (getOffer(await user3.getOffers(assetCode, direction), offer.getId())) throw new Error("Offer " + offer.getId() + " was found after canceling offer");

    // balances unchanged
    expect(BigInt((await user3.getBalances()).getPendingBalance())).toEqual(outputAmt * BigInt(2));
    expect(BigInt((await user3.getBalances()).getReservedOfferBalance())).toEqual(BigInt(0));

    // schedule offer
    offer = await makeOffer({maker: user3, assetCode: assetCode, direction: direction, awaitFundsToMakeOffer: false});
    assert.equal(offer.getState(), "SCHEDULED");

    // restart user3
    const user3Config = {appName: user3.getAppName()};
    await releaseHavenoProcess(user3);
    user3 = await initHaveno(user3Config);
    ctx.maker = user3;

    // has offer
    offer = await user3.getMyOffer(offer.getId());
    assert.equal(offer.getState(), "SCHEDULED");

    // peer does not see offer because it's scheduled
    await wait(TestConfig.trade.maxTimePeerNoticeMs);
    if (getOffer(await user1.getOffers(assetCode, direction), offer.getId())) throw new Error("Offer " + offer.getId() + " was found in peer's offers before posted");

    // wait for deposit txs to unlock
    await waitForAvailableBalance(outputAmt, user3);

    // one output is reserved, one is unlocked
    await wait(TestConfig.trade.maxTimePeerNoticeMs);
    expect(BigInt((await user3.getBalances()).getAvailableBalance())).toEqual(outputAmt);
    expect(BigInt((await user3.getBalances()).getPendingBalance())).toEqual(BigInt(0));
    expect(BigInt((await user3.getBalances()).getReservedOfferBalance())).toEqual(outputAmt);

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
      expect(BigInt((await user3.getBalances()).getAvailableBalance())).toEqual(outputAmt * BigInt(2));
      expect(BigInt((await user3.getBalances()).getPendingBalance())).toEqual(BigInt(0));
      expect(BigInt((await user3.getBalances()).getReservedOfferBalance())).toEqual(BigInt(0));
    }
  } catch (err2) {
    err = err2;
  }

  // stop and delete instances
  if (user3) await releaseHavenoProcess(user3, true);
  if (err) throw err;
});

test("Cannot post offer exceeding trade limit (CI, sanity check)", async () => {
  const revolutAccount = await createRevolutPaymentAccount(user1);
  try {
    await executeTrade({amount: BigInt("2100000000000"), assetCode: "USD", makerPaymentAccountId: revolutAccount.getId(), takeOffer: false});
    throw new Error("Should have rejected posting offer above trade limit")
  } catch (err) {
    assert(err.message.indexOf("amount is larger than") === 0);
  }
});

test("Can complete a trade", async () => {
  await executeTrade();
});

test("Can complete trades at the same time (CI, sanity check)", async () => {
  await executeTrades(getTradeContexts(4));
});

test("Can complete all trade combinations (stress)", async () => {

  // generate trade context for each combination (buyer/seller, maker/taker, dispute(s), dispute winner)
  const ctxs: TradeContext[] = [];
  const MAKER_OPTS = [TradeRole.MAKER, TradeRole.TAKER];
  const DIRECTION_OPTS = ["BUY", "SELL"];
  const BUYER_DISPUTE_OPTS = [DisputeContext.NONE, DisputeContext.OPEN_AFTER_DEPOSITS_UNLOCK, DisputeContext.OPEN_AFTER_PAYMENT_SENT];
  const SELLER_DISPUTE_OPTS = [DisputeContext.NONE, DisputeContext.OPEN_AFTER_DEPOSITS_UNLOCK, DisputeContext.OPEN_AFTER_PAYMENT_SENT];
  const DISPUTE_WINNER_OPTS = [DisputeResult.Winner.BUYER, DisputeResult.Winner.SELLER];
  for (let i = 0; i < MAKER_OPTS.length; i++) {
    for (let j = 0; j < DIRECTION_OPTS.length; j++) {
      for (let k = 0; k < BUYER_DISPUTE_OPTS.length; k++) {
        for (let l = 0; l < SELLER_DISPUTE_OPTS.length; l++) {
          for (let m = 0; m < DISPUTE_WINNER_OPTS.length; m++) {
            if (BUYER_DISPUTE_OPTS[k] !== DisputeContext.NONE && SELLER_DISPUTE_OPTS[l] !== DisputeContext.NONE) continue; // skip both opening a dispute
            const ctx: TradeContext = {
              walletSyncPeriodMs: 8000, // increase for stress test
              maxTimePeerNoticeMs: 8000,
              maker: MAKER_OPTS[i] === TradeRole.MAKER ? user1 : user2,
              taker: MAKER_OPTS[i] === TradeRole.MAKER ? user2 : user1,
              direction: DIRECTION_OPTS[j],
              buyerDisputeContext: BUYER_DISPUTE_OPTS[k],
              sellerDisputeContext: SELLER_DISPUTE_OPTS[l],
              disputeWinner: DISPUTE_WINNER_OPTS[m],
              disputeSummary: "After much deliberation, " + (DISPUTE_WINNER_OPTS[m] === DisputeResult.Winner.BUYER ? "buyer" : "seller") + " is winner"
            };
            ctxs.push(Object.assign({}, TestConfig.trade, ctx));
          }
        }
      }
    }
  }

  // execute trades
  HavenoUtils.log(0, "Executing " + ctxs.length + " trade configurations");
  await executeTrades(ctxs);
});

test("Can go offline while completing a trade (CI, sanity check)", async () => {
  let traders: HavenoClient[] = [];
  let ctx: TradeContext = {};
  let err: any;
  try {

    // start and fund 2 trader processes
    HavenoUtils.log(1, "Starting trader processes");
    traders = await initHavenos(2);
    HavenoUtils.log(1, "Funding traders");
    const tradeAmount = BigInt("250000000000");
    await waitForAvailableBalance(tradeAmount * BigInt("2"), ...traders);

    // create trade config
    ctx = Object.assign({}, TestConfig.trade);
    ctx.maker = traders[0];
    ctx.taker = traders[1];
    ctx.buyerOfflineAfterTake = true;
    ctx.sellerOfflineAfterTake = true;
    ctx.buyerOfflineAfterPaymentSent = true;

    // execute trade
    await executeTrade(ctx);
  } catch (e) {
    err = e;
  }

  // stop traders
  if (ctx.maker) await releaseHavenoProcess(ctx.maker, true);
  if (ctx.taker) await releaseHavenoProcess(ctx.taker, true);
  if (err) throw err;
});

test("Can go offline while resolving disputes (CI)", async () => {
  let traders: HavenoClient[] = [];
  let ctx: TradeContext = {};
  let err: any;
  try {

    // start and fund 2 trader processes
    HavenoUtils.log(1, "Starting trader processes");
    traders = await initHavenos(2);
    HavenoUtils.log(1, "Funding traders");
    const tradeAmount = BigInt("250000000000");
    await waitForAvailableBalance(tradeAmount * BigInt("2"), ...traders);

    // create trade config
    ctx = Object.assign(getTradeContexts(1)[0], {
      maker: traders[0],
      taker: traders[1],
      buyerOfflineAfterTake: true,
      sellerOfflineAfterDisputeOpened: true,
      buyerOfflineAfterDisputeOpened: false,
      sellerDisputeContext: DisputeContext.OPEN_AFTER_DEPOSITS_UNLOCK,
      disputeWinner: DisputeResult.Winner.SELLER,
      disputeReason: DisputeResult.Reason.NO_REPLY,
      disputeSummary: "Seller wins dispute because buyer has not replied",
    });

    // execute trade
    await executeTrade(ctx);
  } catch (e) {
    err = e;
  }

  // stop and delete traders
  await releaseHavenoProcess(ctx.maker!, true);
  deleteHavenoInstanceByAppName(ctx.sellerAppName!); // seller is offline
  if (err) throw err;
});

test("Can resolve disputes (CI)", async () => {

  // take trades but stop before sending payment
  const ctxs = getTradeContexts(4);
  for (const config of ctxs) config.buyerSendsPayment = false;
  const tradeIds = await executeTrades(ctxs);

  // open disputes at same time but do not resolve
  const trade1 = await user1.getTrade(tradeIds[1]);
  const trade2 = await user1.getTrade(tradeIds[2]);
  Object.assign(ctxs[0], {
    resolveDispute: false,
    sellerDisputeContext: DisputeContext.OPEN_AFTER_DEPOSITS_UNLOCK,
    disputeWinner: DisputeResult.Winner.SELLER,
    disputeReason: DisputeResult.Reason.PEER_WAS_LATE,
    disputeSummary: "Seller is winner"
  });
  Object.assign(ctxs[1], {
    resolveDispute: false,
    buyerDisputeContext: DisputeContext.OPEN_AFTER_DEPOSITS_UNLOCK,
    disputeWinner: DisputeResult.Winner.BUYER,
    disputeReason: DisputeResult.Reason.SELLER_NOT_RESPONDING,
    disputeSummary: "Split trade amount",
    disputeWinnerAmount: HavenoUtils.centinerosToAtomicUnits(trade1.getAmountAsLong()) / BigInt(2) + HavenoUtils.centinerosToAtomicUnits(trade1.getBuyerSecurityDeposit())
  });
  Object.assign(ctxs[2], {
    resolveDispute: false,
    buyerDisputeContext: DisputeContext.OPEN_AFTER_DEPOSITS_UNLOCK,
    disputeWinner: DisputeResult.Winner.SELLER,
    disputeReason: DisputeResult.Reason.TRADE_ALREADY_SETTLED,
    disputeSummary: "Seller gets everything",
    disputeWinnerAmount: HavenoUtils.centinerosToAtomicUnits(trade2.getAmountAsLong() + trade2.getBuyerSecurityDeposit() + trade2.getSellerSecurityDeposit())
  });
  Object.assign(ctxs[3], {
    resolveDispute: false,
    buyerSendsPayment: true,
    sellerDisputeContext: DisputeContext.OPEN_AFTER_PAYMENT_SENT,
    disputeWinner: DisputeResult.Winner.BUYER,
    disputeReason: DisputeResult.Reason.TRADE_ALREADY_SETTLED,
    disputeSummary: "Buyer wins dispute after sending payment",
  });
  HavenoUtils.log(1, "Opening disputes");
  await executeTrades(ctxs);

  // resolve disputes
  for (const ctx of ctxs) ctx.resolveDispute = true;
  HavenoUtils.log(1, "Resolving disputes");
  await executeTrades(ctxs, {concurrentTrades: true}); // TODO: running in parallel doesn't test balances before and after, but this test takes ~10 minutes in sequence. use test weight config
});

test("Cannot make or take offer with insufficient unlocked funds (CI, sanity check)", async () => {
  let user3: HavenoClient|undefined;
  let err: any;
  try {

    // start user3
    user3 = await initHaveno();

    // user3 creates ethereum payment account
    const paymentAccount = await createPaymentAccount(user3, TestConfig.trade.assetCode);

    // user3 cannot make offer with insufficient funds
    try {
      await makeOffer({maker: user3, makerPaymentAccountId: paymentAccount.getId(), awaitFundsToMakeOffer: false});
      throw new Error("Should have failed making offer with insufficient funds")
    } catch (err: any) {
      if (!err.message.includes("not enough money")) throw err;
      const errTyped = err as HavenoError;
      assert.equal(errTyped.code, 2);
    }

    // user1 gets or posts offer
    const offers: OfferInfo[] = await user1.getMyOffers(TestConfig.trade.assetCode);
    let offer: OfferInfo;
    if (offers.length) offer = offers[0];
    else {
      const tradeAmount = BigInt("250000000000");
      await waitForAvailableBalance(tradeAmount * BigInt("2"), user1);
      offer = await makeOffer({maker: user1, amount: tradeAmount, awaitFundsToMakeOffer: false});
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

test("Invalidates offers when reserved funds are spent (CI)", async () => {
  let err;
  let tx;
  try {
    // wait for user1 to have unlocked balance for trade
    const tradeAmount = BigInt("250000000000");
    await waitForAvailableBalance(tradeAmount * BigInt("2"), user1);

    // get frozen key images before posting offer
    const frozenKeyImagesBefore: any[] = [];
    for (const frozenOutput of await user1Wallet.getOutputs({isFrozen: true})) frozenKeyImagesBefore.push(frozenOutput.getKeyImage().getHex());

    // post offer
    await wait(1000);
    const assetCode = getRandomAssetCode();
    const offer: OfferInfo = await makeOffer({maker: user1, assetCode: assetCode, amount: tradeAmount});

    // get key images reserved by offer
    const reservedKeyImages: any[] = [];
    const frozenKeyImagesAfter: any[] = [];
    for (const frozenOutput of await user1Wallet.getOutputs({isFrozen: true})) frozenKeyImagesAfter.push(frozenOutput.getKeyImage().getHex());
    for (const frozenKeyImageAfter of frozenKeyImagesAfter) {
      if (!frozenKeyImagesBefore.includes(frozenKeyImageAfter)) reservedKeyImages.push(frozenKeyImageAfter);
    }

    // offer is available to peers
    await wait(TestConfig.trade.walletSyncPeriodMs * 2);
    if (!getOffer(await user2.getOffers(assetCode, "buy"), offer.getId())) throw new Error("Offer " + offer.getId() + " was not found in peer's offers after posting");

    // spend one of offer's reserved outputs
    if (!reservedKeyImages.length) throw new Error("No reserved key images detected");
    await user1Wallet.thawOutput(reservedKeyImages[0]);
    tx = await user1Wallet.sweepOutput({keyImage: reservedKeyImages[0], address: await user1Wallet.getPrimaryAddress(), relay: false});
    await monerod.submitTxHex(tx.getFullHex(), true);

    // mine block so spend is confirmed
    await mineBlocks(1);

    // offer is removed from peer offers
    await wait(20000);
    if (getOffer(await user2.getOffers(assetCode, "buy"), offer.getId())) throw new Error("Offer " + offer.getId() + " was found in peer's offers after reserved funds spent");

    // offer is removed from my offers
    if (getOffer(await user1.getMyOffers(assetCode, "buy"), offer.getId())) throw new Error("Offer " + offer.getId() + " was found in my offers after reserved funds spent");

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
test("Can handle unexpected errors during trade initialization", async () => {
  let traders: HavenoClient[] = [];
  let err: any;
  try {

    // start and fund 3 trader processes
    HavenoUtils.log(1, "Starting trader processes");
    traders = await initHavenos(3);
    HavenoUtils.log(1, "Funding traders");
    const tradeAmount = BigInt("250000000000");
    await waitForAvailableBalance(tradeAmount * BigInt("2"), traders[0], traders[1], traders[2]);

    // trader 0 posts offer
    HavenoUtils.log(1, "Posting offer");
    let offer = await makeOffer({maker: traders[0], amount: tradeAmount});
    offer = await traders[0].getMyOffer(offer.getId());
    assert.equal(offer.getState(), "AVAILABLE");

    // wait for offer to be seen
    await wait(TestConfig.trade.walletSyncPeriodMs * 2);

    // trader 1 spends trade funds after initializing trade
    let paymentAccount = await createCryptoPaymentAccount(traders[1]);
    wait(3000).then(async function() {
      try {
        const traderWallet = await monerojs.connectToWalletRpc("http://localhost:" + traders[1].getWalletRpcPort(), TestConfig.defaultHavenod.walletUsername, TestConfig.defaultHavenod.accountPassword);
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
    await wait(10000); // give time for trade initialization to fail and offer to become available
    offer = await traders[0].getMyOffer(offer.getId());
    if (offer.getState() !== "AVAILABLE") {
        HavenoUtils.log(1, "Offer is not yet available, waiting to become available after timeout..."); // TODO (woodser): fail trade on nack during initialization to save a bunch of time
        await wait(TestConfig.tradeInitTimeout - 10000); // wait remaining time for offer to become available after timeout
        offer = await traders[0].getMyOffer(offer.getId());
        assert.equal(offer.getState(), "AVAILABLE");
    }

    // trader 0 spends trade funds after trader 2 takes offer
    wait(3000).then(async function() {
      try {
        const traderWallet = await monerojs.connectToWalletRpc("http://localhost:" + traders[0].getWalletRpcPort(), TestConfig.defaultHavenod.walletUsername, TestConfig.defaultHavenod.accountPassword);
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
      assert(err.message.includes("not enough unlocked money") || err.message.includes("timeout reached. protocol did not complete"), "Unexpected error: " + err.message);
    }

    // trader 2's balance is unreserved
    const trader2Balances = await traders[2].getBalances();
    expect(BigInt(trader2Balances.getReservedTradeBalance())).toEqual(BigInt("0"));
    expect(BigInt(trader2Balances.getAvailableBalance())).toBeGreaterThan(BigInt("0"));
  } catch (err2) {
    err = err2;
  }

  // stop traders
  for (const trader of traders) await releaseHavenoProcess(trader, true);
  if (err) throw err;
});

// TODO: test opening and resolving dispute as arbitrator and traders go offline
test("Selects arbitrators which are online, registered, and least used", async () => {

  // complete 2 trades using main arbitrator so it's most used
  // TODO: these trades are not registered with seednode until it's restarted
  HavenoUtils.log(1, "Preparing for trades");
  await prepareForTrading(4, user1, user2);
  HavenoUtils.log(1, "Completing trades with main arbitrator");
  await executeTrades(getTradeContexts(2));

  // start and register arbitrator2
  let arbitrator2 = await initHaveno();
  HavenoUtils.log(1, "Registering arbitrator2");
  await arbitrator2.registerDisputeAgent("arbitrator", getArbitratorPrivKey(1)); // TODO: re-registering with same address corrupts messages (Cannot decrypt) because existing pub key; overwrite? or throw when registration fails because dispute map can't be updated
  await wait(TestConfig.trade.walletSyncPeriodMs * 2);

  // get internal api addresses
  const arbitratorApiUrl = "localhost:" + TestConfig.ports.get(getPort(arbitrator.getUrl()))![1]; // TODO: havenod.getApiUrl()?
  const arbitrator2ApiUrl = "localhost:" + TestConfig.ports.get(getPort(arbitrator2.getUrl()))![1];

  let err = undefined;
  try {

    // post 2 offers which use arbitrator2 since it's least used
    HavenoUtils.log(1, "Posting offers signed by arbitrator2");
    const offers: OfferInfo[] = [];
    for (let i = 0; i < 2; i++) {
      const offer = await makeOffer({maker: user1});
      assert.equal(offer.getArbitratorSigner(), arbitrator2ApiUrl);
      offers.push(offer);
    }
    await wait(TestConfig.trade.walletSyncPeriodMs * 2);

    // complete a trade which uses arbitrator2 since it's least used
    HavenoUtils.log(1, "Completing trade using arbitrator2");
    await executeTrade({maker: user1, taker: user2, arbitrator: arbitrator2, offerId: offers[0].getId(), makerPaymentAccountId: offers[0].getPaymentAccountId()});
    let trade = await user1.getTrade(offers[0].getId());
    assert.equal(trade.getArbitratorNodeAddress(), arbitrator2ApiUrl);

    // arbitrator2 goes offline without unregistering
    HavenoUtils.log(1, "Arbitrator2 going offline");
    const arbitrator2AppName = arbitrator2.getAppName()
    await releaseHavenoProcess(arbitrator2);

    // post offer which uses main arbitrator since least used is offline
    HavenoUtils.log(1, "Posting offer which uses main arbitrator since least used is offline");
    let offer = await makeOffer({maker: user1});
    assert.equal(offer.getArbitratorSigner(), arbitratorApiUrl);
    await user1.removeOffer(offer.getId());

    // complete a trade which uses main arbitrator since signer/least used is offline
    HavenoUtils.log(1, "Completing trade using main arbitrator since signer/least used is offline");
    await executeTrade({maker: user1, taker: user2, offerId: offers[1].getId(), makerPaymentAccountId: offers[1].getPaymentAccountId()});
    trade = await user1.getTrade(offers[1].getId());
    assert.equal(trade.getArbitratorNodeAddress(), arbitratorApiUrl);

    // start and unregister arbitrator2
    HavenoUtils.log(1, "Starting and unregistering arbitrator2");
    arbitrator2 = await initHaveno({appName: arbitrator2AppName});
    await arbitrator2.unregisterDisputeAgent("arbitrator");
    await wait(TestConfig.trade.walletSyncPeriodMs * 2);

    // cannot take offers signed by unregistered arbitrator
    HavenoUtils.log(1, "Taking offer signed by unregistered arbitrator");
    try {
    await executeTrade({maker: user1, taker: user2, offerId: offers[1].getId()});
      throw new Error("Should have failed taking offer signed by unregistered arbitrator");
    } catch (e2) {
      assert (e2.message.indexOf("not found") > 0);
    }

    // TODO: offer is removed and unreserved or re-signed, ideally keeping the same id

    // post offer which uses main arbitrator since least used is unregistered
    offer = await makeOffer({maker: user1});
    assert.equal(offer.getArbitratorSigner(), arbitratorApiUrl);
    await wait(TestConfig.trade.walletSyncPeriodMs * 2);

    // complete a trade which uses main arbitrator since least used is unregistered
    HavenoUtils.log(1, "Completing trade with main arbitrator since least used is unregistered");
    await executeTrade({maker: user1, taker: user2, offerId: offer.getId(), makerPaymentAccountId: offer.getPaymentAccountId()});
    HavenoUtils.log(1, "Done completing trade with main arbitrator since least used is unregistered");
    trade = await user2.getTrade(offer.getId());
    HavenoUtils.log(1, "Done getting trade");
    assert.equal(trade.getArbitratorNodeAddress(), arbitratorApiUrl);

    // release arbitrator2
    HavenoUtils.log(1, "Done getting trade");
    await releaseHavenoProcess(arbitrator2, true);
  } catch (e) {
    err = e;
  }

  // cleanup if error
  if (err) {
    try { await arbitrator2.unregisterDisputeAgent("arbitrator"); }
    catch (err) { /*ignore*/ }
    await releaseHavenoProcess(arbitrator2, true);
    throw err;
  }
});

// ----------------------------- TEST HELPERS ---------------------------------

function getBuyer(ctx: TradeContext) {
  return ctx.direction?.toUpperCase() === "BUY" ? ctx.maker : ctx.taker;
}

function getSeller(ctx: TradeContext) {
  return ctx.direction?.toUpperCase() === "SELL" ? ctx.maker : ctx.taker;
}

function isBuyerMaker(ctx: TradeContext) {
  return ctx.direction?.toUpperCase() === "BUY";
}

function getDisputeOpener(ctx: TradeContext) {
  if (!ctx.disputeOpener) return undefined;
  return ctx.disputeOpener === SaleRole.BUYER ? getBuyer(ctx) : getSeller(ctx);
}

function getDisputePeer(ctx: TradeContext) {
  if (!ctx.disputeOpener) return undefined;
  return ctx.disputeOpener === SaleRole.BUYER ? getSeller(ctx) : getBuyer(ctx);
}

function getTradeContexts(numConfigs: number): TradeContext[] {
    const configs: TradeContext[] = [];
    for (let i = 0; i < numConfigs; i++) configs.push({});
    return configs;
}

function tradeContextToString(ctx: TradeContext) {
  return JSON.stringify(Object.assign({}, ctx, {
    amount: ctx.amount ? ctx.amount.toString() : undefined,
    minAmount: ctx.minAmount ? ctx.minAmount.toString() : undefined,
    disputeWinnerAmount: ctx.disputeWinnerAmount ? ctx.disputeWinnerAmount.toString() : undefined,
    arbitrator: ctx.arbitrator ? ctx.arbitrator.getUrl() : undefined,
    maker: ctx.maker ? ctx.maker.getUrl() : undefined,
    taker: ctx.taker ? ctx.taker.getUrl() : undefined,
    buyer: getBuyer(ctx) ? getBuyer(ctx)?.getUrl() : undefined,
    seller:  getSeller(ctx) ? getSeller(ctx)?.getUrl() : undefined,
    disputeOpener: ctx.maker ? getDisputeOpener(ctx)?.getUrl() : undefined,
    disputePeer: ctx.maker ? getDisputePeer(ctx)?.getUrl() : undefined,
    disputeWinner: ctx.disputeWinner === DisputeResult.Winner.BUYER ? "buyer" : "seller"
  }));
}

async function executeTrades(ctxs: TradeContext[], executionCtx?: TradeContext): Promise<string[]> {

  // assign default execution context
  if (!executionCtx) executionCtx = {};
  if (executionCtx.concurrentTrades === undefined) executionCtx.concurrentTrades = ctxs.length > 1;
  Object.assign(executionCtx, TestConfig.trade, executionCtx);

  // start mining if executing trades concurrently
  let miningStarted = executionCtx.concurrentTrades && await startMining();

  // execute trades
  let offerIds: string[] = [];
  let err = undefined
  try {

    // assign default configs
    for (let i = 0; i < ctxs.length; i++) Object.assign(ctxs[i], TestConfig.trade, Object.assign({index: i}, ctxs[i]));

    // wait for traders to have unlocked balance for trades
    let tradeAmount: bigint|undefined = undefined;
    const outputCounts = new Map<any, number>();
    for (const ctx of ctxs) {
      if (!tradeAmount || tradeAmount < ctx.amount!) tradeAmount = ctx.amount; // use max amount
      if (ctx.awaitFundsToMakeOffer && ctx.makeOffer && !ctx.offerId) {
        const wallet = await getWallet(ctx.maker!);
        if (outputCounts.has(wallet)) outputCounts.set(wallet, outputCounts.get(wallet)! + 1);
        else outputCounts.set(wallet, 1);
      }
      if (ctx.awaitFundsToTakeOffer && ctx.takeOffer && !ctx.isOfferTaken) {
        const wallet = await getWallet(ctx.taker!);
        if (outputCounts.has(wallet)) outputCounts.set(wallet, outputCounts.get(wallet)! + 1);
        else outputCounts.set(wallet, 1);
      }
    }
    const fundWalletPromises: Promise<void>[] = [];
    for (const wallet of outputCounts.keys()) {
      if (outputCounts.get(wallet)! > 0) {
        fundWalletPromises.push(fundOutputs([wallet], tradeAmount! * BigInt("2"), outputCounts.get(wallet)));
      }
    }
    await Promise.all(fundWalletPromises);

    // execute trades in thread pool unless serial
    if (executionCtx.concurrentTrades) {
      const tradePromises: Promise<string>[] = [];
      const pool = new monerojs.ThreadPool(executionCtx.maxConcurrency!);
      for (const ctx of ctxs) tradePromises.push(pool.submit(() => executeTrade(Object.assign(ctx, {concurrentTrades: executionCtx!.concurrentTrades}))));
      try {
        offerIds = await Promise.all(tradePromises);
      } catch (e2) {
        if (!executionCtx.stopOnFailure) await Promise.allSettled(tradePromises); // wait for other trades to complete before throwing error
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
async function executeTrade(ctx?: TradeContext): Promise<string> {
  try {

    // assign default config
    if (!ctx) ctx = {};
    Object.assign(ctx, TestConfig.trade, Object.assign({}, ctx));

    // fund maker and taker
    const makingOffer = ctx.makeOffer && !ctx.offerId;
    const clientsToFund: HavenoClient[] = [];
    if (!ctx.concurrentTrades) { // already funded
      if (ctx.awaitFundsToMakeOffer && makingOffer && !ctx.offerId) clientsToFund.push(ctx.maker!);
      if (ctx.awaitFundsToTakeOffer && ctx.takeOffer && !ctx.isOfferTaken) clientsToFund.push(ctx.taker!);
      await waitForAvailableBalance(ctx.amount! * BigInt("2"), ...clientsToFund);
    }

    // get info before trade
    const buyerBalancesBefore = await getBuyer(ctx)!.getBalances();
    const sellerBalancesBefore = await getSeller(ctx)!.getBalances();

    // make offer if configured
    if (makingOffer) {
      ctx.offer = await makeOffer(ctx);
      expect(ctx.offer.getState()).toEqual("AVAILABLE");
      ctx.offerId = ctx.offer.getId();
      await wait(ctx.maxTimePeerNoticeMs!);
    } else {
      ctx.offer = getOffer(await ctx.maker!.getMyOffers(ctx.assetCode!, ctx.direction), ctx.offerId!);
      if (!ctx.offer) {
        const trade = await ctx.maker!.getTrade(ctx.offerId!);
        ctx.offer = trade.getOffer();
      }
    }

    // TODO (woodser): test error message taking offer before posted

    // take offer or get existing trade
    let trade: TradeInfo|undefined = undefined;
    if (ctx.isOfferTaken) trade = await ctx.taker!.getTrade(ctx.offerId!);
    else {
      if (!ctx.takeOffer) return ctx.offerId!;
      trade = await takeOffer(ctx);
      ctx.isOfferTaken = true;
    }

    // test trader chat
    if (ctx.testTraderChat) await testTradeChat(ctx);

    // get expected payment account payloads
    let expectedBuyerPaymentAccountPayload = (await getBuyer(ctx)?.getPaymentAccount(ctx.maker == getBuyer(ctx) ? ctx.makerPaymentAccountId! : ctx.takerPaymentAccountId!))?.getPaymentAccountPayload();
    let expectedSellerPaymentAccountPayload = (await getSeller(ctx)?.getPaymentAccount(ctx.maker == getBuyer(ctx) ? ctx.takerPaymentAccountId! : ctx.makerPaymentAccountId!))?.getPaymentAccountPayload();

    // seller does not have buyer's payment account payload until payment sent
    let fetchedTrade = await getSeller(ctx)!.getTrade(ctx.offerId!);
    let contract = fetchedTrade.getContract()!;
    let buyerPaymentAccountPayload = contract.getIsBuyerMakerAndSellerTaker() ? contract.getMakerPaymentAccountPayload() : contract.getTakerPaymentAccountPayload();
    if (ctx.isPaymentSent) expect(buyerPaymentAccountPayload).toEqual(expectedBuyerPaymentAccountPayload);
    else expect(buyerPaymentAccountPayload).toBeUndefined();

    // shut down buyer and seller if configured
    ctx.usedPorts = [getPort(getBuyer(ctx)!.getUrl()), getPort(getSeller(ctx)!.getUrl())];
    const promises: Promise<void>[] = [];
    ctx.buyerAppName = getBuyer(ctx)!.getAppName();
    if (ctx.buyerOfflineAfterTake) {
      promises.push(releaseHavenoProcess(getBuyer(ctx)!));
      if (isBuyerMaker(ctx)) ctx.maker = undefined;
      else ctx.taker = undefined;
    }
    ctx.sellerAppName = getSeller(ctx)!.getAppName();
    if (ctx.sellerOfflineAfterTake) {
      promises.push(releaseHavenoProcess(getSeller(ctx)!));
      if (isBuyerMaker(ctx)) ctx.taker = undefined;
      else ctx.maker = undefined;
    }
    await Promise.all(promises);

    // wait for deposit txs to unlock
    await waitForUnlockedTxs(trade.getMakerDepositTxId(), trade.getTakerDepositTxId());

    // buyer comes online if offline and used
    if (ctx.buyerOfflineAfterTake && ((ctx.buyerSendsPayment && !ctx.isPaymentSent && ctx.sellerDisputeContext !== DisputeContext.OPEN_AFTER_DEPOSITS_UNLOCK) || (ctx.buyerDisputeContext === DisputeContext.OPEN_AFTER_DEPOSITS_UNLOCK && !ctx.buyerOpenedDispute))) {
      const buyer = await initHaveno({appName: ctx.buyerAppName, excludePorts: ctx.usedPorts});
      if (isBuyerMaker(ctx)) ctx.maker = buyer;
      else ctx.taker = buyer;
      ctx.usedPorts.push(getPort(buyer.getUrl()));
    }

    // wait for traders to observe
    await wait(TestConfig.maxWalletStartupMs + ctx.walletSyncPeriodMs! * 2);

    // test buyer trade state if online
    const expectedState = ctx.isPaymentSent ? "PAYMENT_SENT" : "DEPOSITS_UNLOCKED" // TODO: test COMPLETED, PAYMENT_RECEIVED states?
    if (getBuyer(ctx)) {
      expect((await getBuyer(ctx)!.getTrade(ctx.offer!.getId())).getPhase()).toEqual(expectedState);
      fetchedTrade = await getBuyer(ctx)!.getTrade(ctx.offerId!);
      expect(fetchedTrade.getIsDepositsUnlocked()).toBe(true);
      expect(fetchedTrade.getPhase()).toEqual(expectedState);
    }

    // test seller trade state if online
    if (getSeller(ctx)) {
      fetchedTrade = await getSeller(ctx)!.getTrade(trade.getTradeId());
      expect(fetchedTrade.getIsDepositsUnlocked()).toBe(true);
      expect(fetchedTrade.getPhase()).toEqual(expectedState);
    }

    // buyer has seller's payment account payload after first confirmation
    let sellerPaymentAccountPayload;
    let form;
    let expectedForm;
    if (getBuyer(ctx)) {
      fetchedTrade = await getBuyer(ctx)!.getTrade(ctx.offerId!);
      contract = fetchedTrade.getContract()!;
      sellerPaymentAccountPayload = contract.getIsBuyerMakerAndSellerTaker() ? contract.getTakerPaymentAccountPayload() : contract.getMakerPaymentAccountPayload();
      expect(sellerPaymentAccountPayload).toEqual(expectedSellerPaymentAccountPayload);
      form = await getBuyer(ctx)!.getPaymentAccountPayloadForm(sellerPaymentAccountPayload!);
      expectedForm = await getBuyer(ctx)!.getPaymentAccountPayloadForm(expectedSellerPaymentAccountPayload!);
      expect(HavenoUtils.formToString(form)).toEqual(HavenoUtils.formToString(expectedForm));
    }

    // buyer notified to send payment TODO

    // open dispute(s) if configured
    if (ctx.buyerDisputeContext === DisputeContext.OPEN_AFTER_DEPOSITS_UNLOCK && !ctx.buyerOpenedDispute) {
      await getBuyer(ctx)!.openDispute(ctx.offerId!);
      ctx.buyerOpenedDispute = true;
      ctx.disputeOpener = SaleRole.BUYER;
    }
    if (ctx.sellerDisputeContext === DisputeContext.OPEN_AFTER_DEPOSITS_UNLOCK && !ctx.sellerOpenedDispute) {
      await getSeller(ctx)!.openDispute(ctx.offerId!);
      ctx.sellerOpenedDispute = true;
      if (!ctx.disputeOpener) ctx.disputeOpener = SaleRole.SELLER;
    }

    // handle opened dispute
    if (ctx.disputeOpener) {

      // test open dispute
      await testOpenDispute(ctx);

      // resolve dispute if configured
      if (ctx.resolveDispute) await resolveDispute(ctx);

      // return offer id
      return ctx.offerId!;
    }

    // buyer confirms payment is sent
    if (!ctx.buyerSendsPayment) return ctx.offer!.getId();
    else if (!ctx.isPaymentSent) {
      HavenoUtils.log(1, "Buyer confirming payment sent");
      await getBuyer(ctx)!.confirmPaymentSent(trade.getTradeId());
      ctx.isPaymentSent = true;
      fetchedTrade = await getBuyer(ctx)!.getTrade(trade.getTradeId());
      expect(fetchedTrade.getPhase()).toEqual("PAYMENT_SENT");
    }

    // buyer goes offline if configured
    if (ctx.buyerOfflineAfterPaymentSent) {
      await releaseHavenoProcess(getBuyer(ctx)!);
      if (isBuyerMaker(ctx)) ctx.maker = undefined;
      else ctx.taker = undefined;
    }

    // seller comes online if offline
    if (!getSeller(ctx)) {
      const seller = await initHaveno({appName: ctx.sellerAppName, excludePorts: ctx.usedPorts});
      if (isBuyerMaker(ctx)) ctx.taker = seller;
      else ctx.maker = seller;
      ctx.usedPorts.push(getPort(getSeller(ctx)!.getUrl()))
    }

    // seller notified payment is sent
    await wait(ctx.maxTimePeerNoticeMs! + TestConfig.maxWalletStartupMs); // TODO: test notification
    if (ctx.sellerOfflineAfterTake) await wait(ctx.walletSyncPeriodMs!); // wait to process mailbox messages
    fetchedTrade = await getSeller(ctx)!.getTrade(trade.getTradeId());
    expect(fetchedTrade.getPhase()).toEqual("PAYMENT_SENT");
    expect(fetchedTrade.getPayoutState()).toEqual("PAYOUT_UNPUBLISHED");

    // seller has buyer's payment account payload after payment sent
    fetchedTrade = await getSeller(ctx)!.getTrade(ctx.offerId!);
    contract = fetchedTrade.getContract()!;
    buyerPaymentAccountPayload = contract.getIsBuyerMakerAndSellerTaker() ? contract.getMakerPaymentAccountPayload() : contract.getTakerPaymentAccountPayload();
    expect(buyerPaymentAccountPayload).toEqual(expectedBuyerPaymentAccountPayload);
    form = await getSeller(ctx)!.getPaymentAccountPayloadForm(sellerPaymentAccountPayload!);
    expectedForm = await getSeller(ctx)!.getPaymentAccountPayloadForm(expectedSellerPaymentAccountPayload!);
    expect(HavenoUtils.formToString(form)).toEqual(HavenoUtils.formToString(expectedForm));

    // open dispute(s) if configured
    if (ctx.buyerDisputeContext === DisputeContext.OPEN_AFTER_PAYMENT_SENT && !ctx.buyerOpenedDispute) {
      await getBuyer(ctx)!.openDispute(ctx.offerId!);
      ctx.buyerOpenedDispute = true;
      if (!ctx.disputeOpener) ctx.disputeOpener = SaleRole.BUYER;
    }
    if (ctx.sellerDisputeContext === DisputeContext.OPEN_AFTER_PAYMENT_SENT && !ctx.sellerOpenedDispute) {
      await getSeller(ctx)!.openDispute(ctx.offerId!);
      ctx.sellerOpenedDispute = true;
      if (!ctx.disputeOpener) ctx.disputeOpener = SaleRole.SELLER;
    }
    if (ctx.disputeOpener) {
      await testOpenDispute(ctx);
    }

    // if dispute opened, resolve dispute if configured and return
    if (ctx.disputeOpener) {
      if (ctx.resolveDispute) await resolveDispute(ctx);
      return ctx.offerId!;
    }

    // seller confirms payment is received
    if (!ctx.sellerReceivesPayment) return ctx.offer!.getId();
    else if (!ctx.isPaymentReceived) {
      HavenoUtils.log(1, "Seller confirming payment received");
      await getSeller(ctx)!.confirmPaymentReceived(trade.getTradeId());
      ctx.isPaymentReceived = true;
      fetchedTrade = await getSeller(ctx)!.getTrade(trade.getTradeId());
      expect(fetchedTrade.getPhase()).toEqual("PAYMENT_RECEIVED");
      await wait(ctx.walletSyncPeriodMs! * 2); // buyer or arbitrator will sign and publish payout tx
      await testTradeState(await getSeller(ctx)!.getTrade(trade.getTradeId()), {phase: "PAYMENT_RECEIVED", payoutState: ["PAYOUT_PUBLISHED", "PAYOUT_CONFIRMED", "PAYOUT_UNLOCKED"], isCompleted: false, isPayoutPublished: true});
    }

    // payout tx is published by buyer (priority) or arbitrator
    await wait(ctx.walletSyncPeriodMs!);
    await testTradeState(await getSeller(ctx)!.getTrade(trade.getTradeId()), {phase: "PAYMENT_RECEIVED", payoutState: ["PAYOUT_PUBLISHED", "PAYOUT_CONFIRMED", "PAYOUT_UNLOCKED"], isCompleted: false, isPayoutPublished: true});
    await testTradeState(await ctx.arbitrator!.getTrade(trade.getTradeId()), {phase: "COMPLETED", payoutState: ["PAYOUT_PUBLISHED", "PAYOUT_CONFIRMED", "PAYOUT_UNLOCKED"], isCompleted: true, isPayoutPublished: true}); // arbitrator trade auto completes

    // buyer comes online if offline
    if (ctx.buyerOfflineAfterPaymentSent) {
      const buyer = await initHaveno({appName: ctx.buyerAppName, excludePorts: ctx.usedPorts});
      if (isBuyerMaker(ctx)) ctx.maker = buyer;
      else ctx.taker = buyer;
      ctx.usedPorts.push(getPort(buyer.getUrl()));
      HavenoUtils.log(1, "Done starting buyer");
      await wait(TestConfig.maxWalletStartupMs + ctx.walletSyncPeriodMs!);
    }
    await testTradeState(await getBuyer(ctx)!.getTrade(trade.getTradeId()), {phase: "PAYMENT_RECEIVED", payoutState: ["PAYOUT_PUBLISHED", "PAYOUT_CONFIRMED", "PAYOUT_UNLOCKED"], isCompleted: false, isPayoutPublished: true});

    // test trade completion
    await getBuyer(ctx)!.completeTrade(trade.getTradeId());
    await testTradeState(await getBuyer(ctx)!.getTrade(trade.getTradeId()), {phase: "COMPLETED", payoutState: ["PAYOUT_PUBLISHED", "PAYOUT_CONFIRMED", "PAYOUT_UNLOCKED"], isCompleted: true, isPayoutPublished: true});
    await getSeller(ctx)!.completeTrade(trade.getTradeId());
    await testTradeState(await getSeller(ctx)!.getTrade(trade.getTradeId()), {phase: "COMPLETED", payoutState: ["PAYOUT_PUBLISHED", "PAYOUT_CONFIRMED", "PAYOUT_UNLOCKED"], isCompleted: true, isPayoutPublished: true});

    // test balances after payout tx unless other trades can interfere
    if (!ctx.concurrentTrades) {
      const buyerBalancesAfter = await getBuyer(ctx)!.getBalances();
      const sellerBalancesAfter = await getSeller(ctx)!.getBalances();
      const buyerFee = BigInt(buyerBalancesBefore.getBalance()) + BigInt(buyerBalancesBefore.getReservedOfferBalance()) + BigInt(ctx.offer!.getAmount()) - (BigInt(buyerBalancesAfter.getBalance()) + BigInt(buyerBalancesAfter.getReservedOfferBalance())); // buyer fee = total balance before + offer amount - total balance after
      const sellerFee = BigInt(sellerBalancesBefore.getBalance()) + BigInt(sellerBalancesBefore.getReservedOfferBalance()) - BigInt(ctx.offer!.getAmount()) - (BigInt(sellerBalancesAfter.getBalance()) + BigInt(sellerBalancesAfter.getReservedOfferBalance())); // seller fee = total balance before - offer amount - total balance after
      expect(buyerFee).toBeLessThanOrEqual(TestConfig.maxFee);
      expect(buyerFee).toBeGreaterThan(BigInt("0"));
      expect(sellerFee).toBeLessThanOrEqual(TestConfig.maxFee);
      expect(sellerFee).toBeGreaterThan(BigInt("0"));
    }

    // test payout unlock
    await testTradePayoutUnlock(ctx);
    if (ctx.offer!.getId() !== ctx.offerId) throw new Error("Expected offer ids to match");
    return ctx.offer!.getId();
  } catch (err) {
    HavenoUtils.log(0, "Error executing trade " + ctx!.offerId + (ctx!.index === undefined ? "" : " at index " + ctx!.index) + ": " + err.message);
    HavenoUtils.log(0, tradeContextToString(ctx!));
    throw err;
  }
}

async function testTradePayoutUnlock(ctx: TradeContext) {
  const height = await monerod.getHeight();

  // test after payout confirmed
  const payoutTxId = (await ctx.arbitrator!.getTrade(ctx.offerId!)).getPayoutTxId();
  let trade = await ctx.arbitrator!.getTrade(ctx.offerId!);
  if (trade.getPayoutState() !== "PAYOUT_CONFIRMED") await mineToHeight(height + 1);
  await wait(TestConfig.maxWalletStartupMs + ctx.walletSyncPeriodMs! * 2);
  if (getBuyer(ctx)) await testTradeState(await getBuyer(ctx)!.getTrade(ctx.offerId!), {phase: "COMPLETED", payoutState: ["PAYOUT_CONFIRMED", "PAYOUT_UNLOCKED"]});
  if (getSeller(ctx)) await testTradeState(await getSeller(ctx)!.getTrade(ctx.offerId!), {phase: "COMPLETED", payoutState: ["PAYOUT_CONFIRMED", "PAYOUT_UNLOCKED"]});
  await testTradeState(await ctx.arbitrator!.getTrade(ctx.offerId!), {phase: "COMPLETED", payoutState: ["PAYOUT_CONFIRMED", "PAYOUT_UNLOCKED"]});
  let payoutTx = getBuyer(ctx) ? await getBuyer(ctx)?.getXmrTx(payoutTxId) : await getSeller(ctx)?.getXmrTx(payoutTxId);
  expect(payoutTx?.getIsConfirmed());

  // test after payout unlocked
  trade = await ctx.arbitrator!.getTrade(ctx.offerId!);
  if (trade.getPayoutState() !== "PAYOUT_UNLOCKED") await mineToHeight(height + 10);
  await wait(TestConfig.maxWalletStartupMs + ctx.walletSyncPeriodMs! * 2);
  if (await getBuyer(ctx)) await testTradeState(await getBuyer(ctx)!.getTrade(ctx.offerId!), {phase: "COMPLETED", payoutState: ["PAYOUT_UNLOCKED"]});
  if (await getSeller(ctx)) await testTradeState(await getSeller(ctx)!.getTrade(ctx.offerId!), {phase: "COMPLETED", payoutState: ["PAYOUT_UNLOCKED"]});
  await testTradeState(await ctx.arbitrator!.getTrade(ctx.offerId!), {phase: "COMPLETED", payoutState: ["PAYOUT_UNLOCKED"]});
  payoutTx = getBuyer(ctx) ? await getBuyer(ctx)?.getXmrTx(payoutTxId) : await getSeller(ctx)?.getXmrTx(payoutTxId);
  expect(!payoutTx?.getIsLocked());
}

async function testTradeState(trade: TradeInfo, ctx: TradeContext) {
  assert.equal(trade.getPhase(), ctx.phase, "expected trade phase to be " + ctx.phase + " but was " + trade.getPhase() + " for trade " + trade.getTradeId());
  assert(GenUtils.arrayContains(ctx.payoutState, trade.getPayoutState()), "expected one of payout state " + ctx.payoutState + " but was " + trade.getPayoutState() + " for trade " + trade.getTradeId());
  if (ctx.disputeState) expect(trade.getDisputeState()).toEqual(ctx.disputeState);
  if (ctx.isCompleted !== undefined) expect(trade.getIsCompleted()).toEqual(ctx.isCompleted);
  if (ctx.isPayoutPublished !== undefined) expect(trade.getIsPayoutPublished()).toEqual(ctx.isPayoutPublished);
  if (ctx.isPayoutConfirmed !== undefined) expect(trade.getIsPayoutConfirmed()).toEqual(ctx.isPayoutConfirmed);
  if (ctx.isPayoutUnlocked !== undefined) expect(trade.getIsPayoutUnlocked()).toEqual(ctx.isPayoutUnlocked);
}

async function makeOffer(ctx?: TradeContext): Promise<OfferInfo> {

  // assign default config
  if (!ctx) ctx = {};
  Object.assign(ctx, TestConfig.trade, Object.assign({}, ctx));

  // wait for unlocked balance
  if (!ctx.concurrentTrades && ctx.awaitFundsToMakeOffer) await waitForAvailableBalance(ctx.amount! * BigInt("2"), ctx.maker);

  // create payment account if not given // TODO: re-use existing payment account
  if (!ctx.makerPaymentAccountId) ctx.makerPaymentAccountId = (await createPaymentAccount(ctx.maker!, ctx.assetCode!)).getId();

  // get unlocked balance before reserving offer
  let unlockedBalanceBefore = BigInt((await ctx.maker!.getBalances()).getAvailableBalance());
  if (ctx.awaitFundsToMakeOffer && unlockedBalanceBefore === BigInt(0)) {
    HavenoUtils.log(0, "WARNING: unlocked balance before posting offer is 0, waiting...");
    await wait(5000);
    unlockedBalanceBefore = BigInt((await ctx.maker!.getBalances()).getAvailableBalance());
    if (unlockedBalanceBefore === BigInt(0)) throw new Error("Unlocked balance before posting offer was 0, even after waiting");
  }

  // post offer
  const offer: OfferInfo = await ctx.maker!.postOffer(
        ctx.direction!,
        ctx.amount!,
        ctx.assetCode!,
        ctx.makerPaymentAccountId!,
        ctx.buyerSecurityDeposit!,
        ctx.price,
        ctx.priceMargin,
        ctx.triggerPrice,
        ctx.minAmount);
  testOffer(offer, ctx);

  // offer is included in my offers only
  if (!getOffer(await ctx.maker!.getMyOffers(ctx.assetCode!, ctx.direction), offer.getId())) {
    console.warn("Offer is not included in my offers after posting, waiting up to 10 seconds");
    await wait(10000); // TODO: remove this wait time
    if (!getOffer(await ctx.maker!.getMyOffers(ctx.assetCode!, ctx.direction), offer.getId())) throw new Error("Offer " + offer.getId() + " was not found in my offers");
  }
  if (getOffer(await ctx.maker!.getOffers(ctx.assetCode!, ctx.direction), offer.getId())) throw new Error("My offer " + offer.getId() + " should not appear in available offers");

  // unlocked balance has decreased
  let unlockedBalanceAfter = BigInt((await ctx.maker!.getBalances()).getAvailableBalance());
  if (offer.getState() === "SCHEDULED") {
    if (unlockedBalanceAfter !== unlockedBalanceBefore) throw new Error("Unlocked balance should not change for scheduled offer " + offer.getId());
  } else if (offer.getState() === "AVAILABLE") {
    if (unlockedBalanceAfter === unlockedBalanceBefore) {
      console.warn("Unlocked balance did not change after posting offer, waiting a sync period");
      await wait(ctx.walletSyncPeriodMs!);
      unlockedBalanceAfter = BigInt((await ctx.maker!.getBalances()).getAvailableBalance());
      if (unlockedBalanceAfter === unlockedBalanceBefore) throw new Error("Unlocked balance did not change after posting offer " + offer.getId() + ", before=" + unlockedBalanceBefore + ", after=" + unlockedBalanceAfter);
    }
  } else {
    throw new Error("Unexpected offer state after posting: " + offer.getState());
  }

  return offer;
}

async function takeOffer(ctx: TradeContext): Promise<TradeInfo> {

  // assign default config
  if (!ctx) ctx = {};
  Object.assign(ctx, TestConfig.trade, Object.assign({}, ctx));

  // taker sees offer
  if (!ctx.offerId) throw new Error("Must provide offer id");
  const takerOffer = getOffer(await ctx.taker!.getOffers(ctx.assetCode!, ctx.direction), ctx.offerId);
  if (!takerOffer) throw new Error("Offer " + ctx.offerId + " was not found in taker's offers");
  expect(takerOffer.getState()).toEqual("UNKNOWN"); // TODO: offer state should be known

  // wait for unlocked balance
  if (ctx.awaitFundsToTakeOffer) await waitForAvailableBalance(ctx.amount! * BigInt("2"), ctx.taker);

  // create payment account if not given // TODO: re-use existing payment account
  if (!ctx.takerPaymentAccountId) ctx.takerPaymentAccountId = (await createPaymentAccount(ctx.taker!, ctx.assetCode!)).getId();

  // register to receive notifications
  const makerNotifications: NotificationMessage[] = [];
  const takerNotifications: NotificationMessage[] = [];
  await ctx.maker!.addNotificationListener(notification => { makerNotifications.push(notification); });
  await ctx.taker!.addNotificationListener(notification => { takerNotifications.push(notification); });

  // take offer
  const takerBalancesBefore: XmrBalanceInfo = await ctx.taker!.getBalances();
  const startTime = Date.now();
  HavenoUtils.log(1, "Taking offer " + ctx.offerId);
  const trade = await ctx.taker!.takeOffer(ctx.offerId, ctx.takerPaymentAccountId!);
  HavenoUtils.log(1, "Done taking offer " + ctx.offerId + " in " + (Date.now() - startTime) + " ms");

  // test taker's balances after taking trade
  if (!ctx.concurrentTrades) {
    const takerBalancesAfter: XmrBalanceInfo = await ctx.taker!.getBalances();
    expect(BigInt(takerBalancesAfter.getAvailableBalance())).toBeLessThan(BigInt(takerBalancesBefore.getAvailableBalance()));
    expect(BigInt(takerBalancesAfter.getReservedOfferBalance()) + BigInt(takerBalancesAfter.getReservedTradeBalance())).toBeGreaterThan(BigInt(takerBalancesBefore.getReservedOfferBalance()) + BigInt(takerBalancesBefore.getReservedTradeBalance()));
  }

  // maker is notified that offer is taken
  await wait(ctx.maxTimePeerNoticeMs!);
  const tradeNotifications = getNotifications(makerNotifications, NotificationMessage.NotificationType.TRADE_UPDATE, trade.getTradeId());
  expect(tradeNotifications.length).toBe(1);
  assert(GenUtils.arrayContains(["DEPOSITS_PUBLISHED", "DEPOSITS_CONFIRMED", "DEPOSITS_UNLOCKED"], tradeNotifications[0].getTrade()!.getPhase(), "Unexpected trade phase: " + tradeNotifications[0].getTrade()!.getPhase()));
  expect(tradeNotifications[0].getTitle()).toEqual("Offer Taken");
  expect(tradeNotifications[0].getMessage()).toEqual("Your offer " + ctx.offerId + " has been accepted");

  // maker is notified of balance change

  // taker can get trade
  let fetchedTrade: TradeInfo = await ctx.taker!.getTrade(trade.getTradeId());
  assert(GenUtils.arrayContains(["DEPOSITS_PUBLISHED", "DEPOSITS_CONFIRMED", "DEPOSITS_UNLOCKED"], fetchedTrade.getPhase()), "Unexpected trade phase: " + fetchedTrade.getPhase());
  // TODO: test fetched trade

  // taker is notified of balance change

  // maker can get trade
  fetchedTrade = await ctx.maker!.getTrade(trade.getTradeId());
  assert(GenUtils.arrayContains(["DEPOSITS_PUBLISHED", "DEPOSITS_CONFIRMED", "DEPOSITS_UNLOCKED"], fetchedTrade.getPhase()), "Unexpected trade phase: " + fetchedTrade.getPhase());
  return trade;
}

async function testOpenDispute(ctx: TradeContext) {

  // TODO: test open dispute when buyer or seller offline
  if (!getBuyer(ctx) || !getSeller(ctx)) {
    HavenoUtils.log(0, "WARNING: skipping test open dispute tests because a trader is offline"); // TODO: update tests for offline trader
    return;
  }

  // test dispute state
  const openerDispute = await getDisputeOpener(ctx)!.getDispute(ctx.offerId!);
  expect(openerDispute.getTradeId()).toEqual(ctx.offerId);
  expect(openerDispute.getIsOpener()).toBe(true);
  expect(openerDispute.getDisputeOpenerIsBuyer()).toBe(getDisputeOpener(ctx) === getBuyer(ctx));

  // get non-existing dispute should fail
  try {
    await getDisputeOpener(ctx)!.getDispute("invalid");
    throw new Error("get dispute with invalid id should fail");
  } catch (err: any) {
    assert.equal(err.message, "dispute for trade id 'invalid' not found");
  }

  // peer sees the dispute
  await wait(ctx.maxTimePeerNoticeMs! + TestConfig.maxWalletStartupMs);
  const peerDispute = await getDisputePeer(ctx)!.getDispute(ctx.offerId!);
  expect(peerDispute.getTradeId()).toEqual(ctx.offerId);
  expect(peerDispute.getIsOpener()).toBe(false || ctx.buyerDisputeContext === ctx.sellerDisputeContext); // TODO: both peers think they're the opener if disputes opened at same time since not waiting for ack

  // arbitrator sees both disputes
  const disputes = await ctx.arbitrator!.getDisputes();
  expect(disputes.length).toBeGreaterThanOrEqual(2);
  const arbDisputePeer = disputes.find(d => d.getId() === peerDispute.getId());
  assert(arbDisputePeer);
  const arbDisputeOpener = disputes.find(d => d.getId() === openerDispute.getId());
  assert(arbDisputeOpener);

  // arbitrator has seller's payment account info
  let sellerPaymentAccountPayload = arbDisputeOpener.getContract()!.getIsBuyerMakerAndSellerTaker() ? arbDisputeOpener.getTakerPaymentAccountPayload() : arbDisputeOpener.getMakerPaymentAccountPayload();
  let expectedSellerPaymentAccountPayload = (await getSeller(ctx)?.getPaymentAccount(sellerPaymentAccountPayload?.getId()!))?.getPaymentAccountPayload();
  expect(sellerPaymentAccountPayload).toEqual(expectedSellerPaymentAccountPayload);
  expect(await ctx.arbitrator?.getPaymentAccountPayloadForm(sellerPaymentAccountPayload!)).toEqual(await ctx.arbitrator?.getPaymentAccountPayloadForm(expectedSellerPaymentAccountPayload!));
  sellerPaymentAccountPayload = arbDisputePeer.getContract()!.getIsBuyerMakerAndSellerTaker() ? arbDisputePeer.getTakerPaymentAccountPayload() : arbDisputeOpener.getMakerPaymentAccountPayload();
  expect(sellerPaymentAccountPayload).toEqual(expectedSellerPaymentAccountPayload);
  expect(await ctx.arbitrator?.getPaymentAccountPayloadForm(sellerPaymentAccountPayload!)).toEqual(await ctx.arbitrator?.getPaymentAccountPayloadForm(expectedSellerPaymentAccountPayload!));

  // arbitrator has buyer's payment account info unless opener is seller and payment not sent
  let buyerPaymentAccountPayload = arbDisputeOpener.getContract()!.getIsBuyerMakerAndSellerTaker() ? arbDisputeOpener.getMakerPaymentAccountPayload() : arbDisputeOpener.getTakerPaymentAccountPayload();
  if (getDisputeOpener(ctx) === getSeller(ctx) && !ctx.isPaymentSent) expect(buyerPaymentAccountPayload).toBeUndefined();
  else {
    let expectedBuyerPaymentAccountPayload = (await getBuyer(ctx)?.getPaymentAccount(buyerPaymentAccountPayload?.getId()!))?.getPaymentAccountPayload();
    expect(buyerPaymentAccountPayload).toEqual(expectedBuyerPaymentAccountPayload);
    expect(await ctx.arbitrator?.getPaymentAccountPayloadForm(buyerPaymentAccountPayload!)).toEqual(await ctx.arbitrator?.getPaymentAccountPayloadForm(expectedBuyerPaymentAccountPayload!));
  }
  buyerPaymentAccountPayload = arbDisputePeer.getContract()!.getIsBuyerMakerAndSellerTaker() ? arbDisputePeer.getMakerPaymentAccountPayload() : arbDisputePeer.getTakerPaymentAccountPayload();
  if (getDisputeOpener(ctx) === getSeller(ctx) && !ctx.isPaymentSent) expect(buyerPaymentAccountPayload).toBeUndefined();
  else {
    let expectedBuyerPaymentAccountPayload = (await getBuyer(ctx)?.getPaymentAccount(buyerPaymentAccountPayload?.getId()!))?.getPaymentAccountPayload();
    expect(buyerPaymentAccountPayload).toEqual(expectedBuyerPaymentAccountPayload);
    expect(await ctx.arbitrator?.getPaymentAccountPayloadForm(buyerPaymentAccountPayload!)).toEqual(await ctx.arbitrator?.getPaymentAccountPayloadForm(expectedBuyerPaymentAccountPayload!));
  }

  // register to receive notifications
  const disputeOpenerNotifications: NotificationMessage[] = [];
  const disputePeerNotifications: NotificationMessage[] = [];
  const arbitratorNotifications: NotificationMessage[] = [];
  await getDisputeOpener(ctx)!.addNotificationListener(notification => { HavenoUtils.log(3, "Dispute opener received notification " + notification.getType() + " " + (notification.getChatMessage() ? notification.getChatMessage()?.getMessage() : "")); disputeOpenerNotifications.push(notification); });
  await getDisputePeer(ctx)!.addNotificationListener(notification => { HavenoUtils.log(3, "Dispute peer received notification " + notification.getType() + " " + (notification.getChatMessage() ? notification.getChatMessage()?.getMessage() : "")); disputePeerNotifications.push(notification); });
  await arbitrator.addNotificationListener(notification => { HavenoUtils.log(3, "Arbitrator received notification " + notification.getType() + " " + (notification.getChatMessage() ? notification.getChatMessage()?.getMessage() : "")); arbitratorNotifications.push(notification); });

  // arbitrator sends chat messages to traders
  HavenoUtils.log(1, "Testing chat messages");
  await ctx.arbitrator!.sendDisputeChatMessage(arbDisputeOpener!.getId(), "Arbitrator chat message to dispute opener", []);
  await ctx.arbitrator!.sendDisputeChatMessage(arbDisputePeer!.getId(), "Arbitrator chat message to dispute peer", []);

  // traders reply to arbitrator chat messages
  await wait(ctx.maxTimePeerNoticeMs!); // wait for arbitrator's message to arrive
  const attachment = new Attachment();
  const bytes = new Uint8Array(Buffer.from("Proof dispute opener was scammed", "utf8"));
  attachment.setBytes(bytes);
  attachment.setFileName("proof.txt");
  const attachment2 = new Attachment();
  const bytes2 = new Uint8Array(Buffer.from("picture bytes", "utf8"));
  attachment2.setBytes(bytes2);
  attachment2.setFileName("proof.png");
  HavenoUtils.log(2, "Dispute opener sending chat message to arbitrator. tradeId=" + ctx.offerId + ", disputeId=" + openerDispute.getId());
  await getDisputeOpener(ctx)!.sendDisputeChatMessage(openerDispute.getId(), "Dispute opener chat message", [attachment, attachment2]);
  await wait(ctx.maxTimePeerNoticeMs!); // wait for user2's message to arrive
  HavenoUtils.log(2, "Dispute peer sending chat message to arbitrator. tradeId=" + ctx.offerId + ", disputeId=" + peerDispute.getId());
  await getDisputePeer(ctx)!.sendDisputeChatMessage(peerDispute.getId(), "Dispute peer chat message", []);

  // test trader chat messages
  await wait(ctx.maxTimePeerNoticeMs!);
  let dispute = await getDisputeOpener(ctx)!.getDispute(ctx.offerId!);
  let messages = dispute.getChatMessageList();
  expect(messages.length).toBeGreaterThanOrEqual(3); // last messages are chat, first messages are system message and possibly DisputeOpenedMessage acks
  expect(messages[messages.length - 2].getMessage()).toEqual("Arbitrator chat message to dispute opener");
  expect(messages[messages.length - 1].getMessage()).toEqual("Dispute opener chat message");
  let attachments = messages[messages.length - 1].getAttachmentsList();
  expect(attachments.length).toEqual(2);
  expect(attachments[0].getFileName()).toEqual("proof.txt");
  expect(attachments[0].getBytes()).toEqual(bytes);
  expect(attachments[1].getFileName()).toEqual("proof.png");
  expect(attachments[1].getBytes()).toEqual(bytes2);
  dispute = await getDisputePeer(ctx)!.getDispute(ctx.offerId!);
  messages = dispute.getChatMessageList();
  expect(messages.length).toBeGreaterThanOrEqual(3);
  expect(messages[messages.length - 2].getMessage()).toEqual("Arbitrator chat message to dispute peer");
  expect(messages[messages.length - 1].getMessage()).toEqual("Dispute peer chat message");

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

async function resolveDispute(ctx: TradeContext) {

  // stop buyer or seller depending on configuration
  const promises: Promise<void>[] = [];
  if (getBuyer(ctx) && ctx.buyerOfflineAfterDisputeOpened) {
    promises.push(releaseHavenoProcess(getBuyer(ctx)!)); // stop buyer
    if (isBuyerMaker(ctx)) ctx.maker = undefined;
    else ctx.taker = undefined;
  }
  if (getSeller(ctx) && ctx.sellerOfflineAfterDisputeOpened) {
    promises.push(releaseHavenoProcess(getSeller(ctx)!)); // stop seller
    if (isBuyerMaker(ctx)) ctx.taker = undefined;
    else ctx.maker = undefined;
  }
  await Promise.all(promises);


  // award too little to loser
  const tradeAmount: bigint = BigInt(ctx.offer!.getAmount());
  const customWinnerAmount = tradeAmount + BigInt(ctx.offer!.getBuyerSecurityDeposit() +  ctx.offer!.getSellerSecurityDeposit()) - BigInt("10000");
  try {
    await arbitrator.resolveDispute(ctx.offerId!, ctx.disputeWinner!, ctx.disputeReason!, "Loser gets too little", customWinnerAmount);
    throw new Error("Should have failed resolving dispute with insufficient loser payout");
  } catch (err: any) {
    assert.equal(err.message, "Loser payout is too small to cover the mining fee");
  }

  // resolve dispute according to configuration
  const winner = ctx.disputeWinner === DisputeResult.Winner.BUYER ? getBuyer(ctx) : getSeller(ctx);
  const loser = ctx.disputeWinner === DisputeResult.Winner.BUYER ? getSeller(ctx) : getBuyer(ctx);
  const winnerBalancesBefore = winner ? await winner!.getBalances() : undefined;
  const loserBalancesBefore = loser ? await loser!.getBalances() : undefined;
  HavenoUtils.log(1, "Resolving dispute for trade " + ctx.offerId);
  const startTime = Date.now();
  await arbitrator.resolveDispute(ctx.offerId!, ctx.disputeWinner!, ctx.disputeReason!, ctx.disputeSummary!, ctx.disputeWinnerAmount);
  HavenoUtils.log(1, "Done resolving dispute (" + (Date.now() - startTime) + ")");

  // start buyer or seller depending on configuration
  if (!getBuyer(ctx) && ctx.buyerOfflineAfterDisputeOpened === false) {
    const buyer = await initHaveno({appName: ctx.buyerAppName, excludePorts: ctx.usedPorts}); // start buyer
    if (isBuyerMaker(ctx)) ctx.maker = buyer;
    else ctx.taker = buyer;
    ctx.usedPorts!.push(getPort(buyer.getUrl()));
  }
  if (!getSeller(ctx) && ctx.sellerOfflineAfterDisputeOpened === false) {
    const seller = await initHaveno({appName: ctx.sellerAppName, excludePorts: ctx.usedPorts}); // start seller
    if (isBuyerMaker(ctx)) ctx.taker = seller;
    else ctx.maker = seller;
    ctx.usedPorts!.push(getPort(getSeller(ctx)!.getUrl()))
  }

  // test resolved dispute
  await wait(TestConfig.maxWalletStartupMs + ctx.walletSyncPeriodMs! * 2);
  if (getDisputeOpener(ctx)) {
    const dispute = await getDisputeOpener(ctx)!.getDispute(ctx.offerId!);
    assert(dispute.getIsClosed(), "Dispute is not closed for opener, trade " + ctx.offerId);
  }
  if (getDisputePeer(ctx)) {
    const dispute = await getDisputePeer(ctx)!.getDispute(ctx.offerId!);
    assert(dispute.getIsClosed(), "Dispute is not closed for opener, trade " + ctx.offerId);
  }

  // test trade state
  if (getBuyer(ctx)) await testTradeState(await getBuyer(ctx)!.getTrade(ctx.offerId!), {phase: "COMPLETED", payoutState: ["PAYOUT_PUBLISHED", "PAYOUT_CONFIRMED", "PAYOUT_UNLOCKED"], disputeState: "DISPUTE_CLOSED", isCompleted: true, isPayoutPublished: true});
  if (getSeller(ctx))  await testTradeState(await getSeller(ctx)!.getTrade(ctx.offerId!), {phase: "COMPLETED", payoutState: ["PAYOUT_PUBLISHED", "PAYOUT_CONFIRMED", "PAYOUT_UNLOCKED"], disputeState: "DISPUTE_CLOSED", isCompleted: true, isPayoutPublished: true});
  await testTradeState(await ctx.arbitrator!.getTrade(ctx.offerId!), {phase: "COMPLETED", payoutState: ["PAYOUT_PUBLISHED", "PAYOUT_CONFIRMED", "PAYOUT_UNLOCKED"], disputeState: "DISPUTE_CLOSED", isCompleted: true, isPayoutPublished: true});

  // test balances after payout tx unless concurrent trades
  if (!ctx.concurrentTrades) {
    if (winner) {
      const winnerBalancesAfter = await winner!.getBalances();
      const winnerDifference = BigInt(winnerBalancesAfter.getBalance()) - BigInt(winnerBalancesBefore!.getBalance());
      const winnerSecurityDeposit = BigInt(ctx.disputeWinner === DisputeResult.Winner.BUYER ? ctx.offer!.getBuyerSecurityDeposit() : ctx.offer!.getSellerSecurityDeposit())
      const winnerPayout = ctx.disputeWinnerAmount ? ctx.disputeWinnerAmount : tradeAmount + winnerSecurityDeposit; // TODO: this assumes security deposit is returned to winner, but won't be the case if payment sent
      expect(winnerDifference).toEqual(winnerPayout);
    }
    if (loser) {
      const loserBalancesAfter = await loser!.getBalances();
      const loserDifference = BigInt(loserBalancesAfter.getBalance()) - BigInt(loserBalancesBefore!.getBalance());
      const loserSecurityDeposit = BigInt(ctx.disputeWinner === DisputeResult.Winner.BUYER ? ctx.offer!.getSellerSecurityDeposit() : ctx.offer!.getBuyerSecurityDeposit());
      const loserPayout = loserSecurityDeposit;
      expect(loserPayout - loserDifference).toBeLessThan(TestConfig.maxFee);
    }
  }

  // test payout unlock
  await testTradePayoutUnlock(ctx);
}

async function testTradeChat(ctx: TradeContext) {
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
  await wait(ctx.maxTimePeerNoticeMs!);
  messages = await user2.getChatMessages(ctx.offerId!);
  expect(messages.length).toEqual(2);
  expect(messages[0].getIsSystemMessage()).toEqual(true); // first message is system
  expect(messages[1].getMessage()).toEqual(user1Msg);

  const user2Msg = "Hello I'm user2";
  await user2.sendChatMessage(ctx.offerId!, user2Msg);
  await wait(ctx.maxTimePeerNoticeMs!);
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
  await wait(ctx.maxTimePeerNoticeMs!);
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
  if (!ctx.appName) ctx.appName = "haveno-" + TestConfig.baseCurrencyNetwork + "_instance_" + GenUtils.getUUID();

  // connect to existing server or start new process
  let havenod: HavenoClient;
  try {

    // try to connect to existing server
    if (!ctx.port) throw new Error("Cannot connect without port");
    havenod = new HavenoClient("http://localhost:" + ctx.port, ctx.apiPassword!);
    await havenod.getVersion();
  } catch (err: any) {

    // get port for haveno process
    if (!ctx.port) {
      for (const httpPort of Array.from(TestConfig.ports.keys())) {
        if (httpPort === "8079" || httpPort === "8080" || httpPort === "8081") continue; // reserved for arbitrator, user1, and user2
        if (!GenUtils.arrayContains(HAVENO_PROCESS_PORTS, httpPort) && (!ctx.excludePorts || !GenUtils.arrayContains(ctx.excludePorts, httpPort))) {
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
      "--logLevel", ctx.logLevel!
    ];
    havenod = await HavenoClient.startProcess(TestConfig.haveno.path, cmd, "http://localhost:" + ctx.port, ctx.logProcessOutput!);
    HAVENO_PROCESSES.push(havenod);

    // wait to process network notifications
    await wait(3000);
  }

  // open account if configured
  if (ctx.autoLogin) {
    try {
      await initHavenoAccount(havenod, ctx.accountPassword!);
    } catch (err) {
      await releaseHavenoProcess(havenod);
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
 * Release a Haveno process for reuse and try to shutdown.
 */
async function releaseHavenoProcess(havenod: HavenoClient, deleteAppDir?: boolean) {
  GenUtils.remove(HAVENO_PROCESSES, havenod);
  GenUtils.remove(HAVENO_PROCESS_PORTS, getPort(havenod.getUrl()));
  try {
    await havenod.shutdownServer();
  } catch (err: any) {
    assert.equal(err.message, OFFLINE_ERR_MSG);
  }
  if (deleteAppDir) deleteHavenoInstance(havenod);
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
  fundingWallet = await monerojs.connectToWalletRpc(TestConfig.fundingWallet.url, TestConfig.fundingWallet.username, TestConfig.fundingWallet.password);

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
      if (!(err instanceof monerojs.MoneroRpcError)) throw err;

      // -1 returned when wallet does not exist or fails to open e.g. it's already open by another application
      if (err.getCode() === -1) {

        // create wallet
        await fundingWallet.createWallet({
            path: TestConfig.fundingWallet.defaultPath,
            password: TestConfig.fundingWallet.walletPassword,
            mnemonic: TestConfig.fundingWallet.mnemonic,
            restoreHeight: TestConfig.fundingWallet.restoreHeight
        });
      } else {
        throw err;
      }
    }
  }
}

async function prepareForTrading(numTrades: number, ...havenods: HavenoClient[]) {

  // create payment accounts
  for (const havenod of havenods) {
    for (const assetCode of TestConfig.assetCodes) {
      if (!await hasPaymentAccount(havenod, assetCode)) {
        await createPaymentAccount(havenod, assetCode);
      }
    }
  }

  // fund wallets
  const tradeAmount = BigInt("250000000000");
  const wallets: Promise<any>[] = [];
  for (const havenod of havenods) wallets.push(await getWallet(havenod));
  await fundOutputs(wallets, tradeAmount * BigInt("2"), numTrades);
}

async function getWallet(havenod: HavenoClient) {
  if (!HAVENO_WALLETS.has(havenod)) {
    let wallet: any;
    if (havenod === user1) wallet = user1Wallet;
    else if (havenod === user2) wallet = user2Wallet;
    else wallet = await monerojs.connectToWalletRpc("http://127.0.0.1:" + havenod.getWalletRpcPort(), TestConfig.defaultHavenod.walletUsername, TestConfig.defaultHavenod.accountPassword);
    HAVENO_WALLETS.set(havenod, wallet);
  }
  return HAVENO_WALLETS.get(havenod);
}

async function startMining(): Promise<boolean> {
  try {
    const numThreads = getBaseCurrencyNetwork() === BaseCurrencyNetwork.XMR_LOCAL ? 1 : Math.max(1, Math.floor(os.cpus().length * TestConfig.maxCpuPct));
    await monerod.startMining(await fundingWallet.getPrimaryAddress(), numThreads);
    HavenoUtils.log(2, "Mining started successfully");
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
    await GenUtils.waitFor(TestConfig.trade.walletSyncPeriodMs);
  }
  if (miningStarted) await stopMining();
}

/**
 * Wait for unlocked balance in wallet or Haveno daemon.
 */
async function waitForAvailableBalance(amount: bigint, ...wallets: any[]) {

  // wrap common wallet functionality for tests
  class WalletWrapper {

    _wallet: any;

    constructor(wallet: any) {
      this._wallet = wallet;
    }

    async getAvailableBalance(): Promise<bigint> {
      if (this._wallet instanceof HavenoClient) return BigInt((await this._wallet.getBalances()).getAvailableBalance());
      else return BigInt((await this._wallet.getUnlockedBalance()).toString());
    }

    async getPendingBalance(): Promise<bigint> {
      if (this._wallet instanceof HavenoClient) return BigInt((await this._wallet.getBalances()).getPendingBalance());
      else return BigInt((await this._wallet.getBalance()).toString()) - await this.getAvailableBalance();
    }

    async getDepositAddress(): Promise<string> {
      if (this._wallet instanceof HavenoClient) return await this._wallet.getXmrNewSubaddress();
      else return (await this._wallet.createSubaddress()).getAddress();
    }
  }

  // wrap wallets
  for (let i = 0; i < wallets.length; i++) wallets[i] = new WalletWrapper(wallets[i]);

  // fund wallets with insufficient balance
  let miningNeeded = false;
  const fundConfig = new MoneroTxConfig().setAccountIndex(0).setRelay(true);
  for (const wallet of wallets) {
    const availableBalance = await wallet.getAvailableBalance();
    if (availableBalance < amount) miningNeeded = true;
    const depositNeeded: bigint = amount - availableBalance - await wallet.getPendingBalance();
    if (depositNeeded > BigInt("0") && wallet._wallet !== fundingWallet) {
      for (let i = 0; i < 5; i++) {
        fundConfig.addDestination(await wallet.getDepositAddress(), depositNeeded * BigInt("2")); // make several deposits
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
      const taskLooper: any = new TaskLooper(async function() {
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
      const taskLooper = new TaskLooper(async function() {
        const tx = await monerod.getTx(txHash);
        if (!tx) HavenoUtils.log(1, "WARNING: tx hash " + txHash + " not found");
        else if (tx.isConfirmed() && tx.getBlock().getHeight() <= await monerod.getHeight() - 10) {
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
    const unspentOutputs = await wallet.getOutputs({isSpent: false, isFrozen: false, minAmount: monerojs.BigInteger(amt.toString()), txQuery: {isLocked: isLocked}});
    if (unspentOutputs.length < numOutputs) return false;
  }
  return true;
}

/**
 * Fund the given wallets.
 *
 * @param {MoneroWallet} wallets - monerojs wallets
 * @param {BigInt} amt - the amount to fund
 * @param {number?} numOutputs - the number of outputs of the given amount (default 1)
 * @param {boolean?} waitForUnlock - wait for outputs to unlock (default false)
 */
async function fundOutputs(wallets: any[], amt: bigint, numOutputs?: number, waitForUnlock?: boolean): Promise<void> {
  if (numOutputs === undefined) numOutputs = 1;
  if (waitForUnlock === undefined) waitForUnlock = true;

  // collect destinations
  const destinations: any[] = [];
  for (const wallet of wallets) {
    if (await hasUnspentOutputs([wallet], amt, numOutputs, undefined)) continue;
    for (let i = 0; i < numOutputs; i++) {
      destinations.push(new MoneroDestination((await wallet.createSubaddress()).getAddress(), monerojs.BigInteger(amt.toString())));
    }
  }
  if (!destinations.length) return;

  // fund destinations
  let txConfig = new MoneroTxConfig().setAccountIndex(0).setRelay(true);
  const txHashes: string[] = [];
  let sendAmt = BigInteger("0");
  for (let i = 0; i < destinations.length; i++) {
    txConfig.addDestination(destinations[i]);
    sendAmt = sendAmt.add(destinations[i].getAmount());
    if (i === destinations.length - 1 || (i > 0 && i % 15 === 0)) {
      await waitForAvailableBalance(toBigInt(sendAmt), fundingWallet);
      const txs = await fundingWallet.createTxs(txConfig);
      for (const tx of txs) txHashes.push(tx.getHash());
      txConfig = new MoneroTxConfig().setAccountIndex(0).setRelay(true);
      sendAmt = BigInteger("0");
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

// convert monero-javascript BigInteger to typescript BigInt
function toBigInt(mjsBigInt: any) {
    return BigInt(mjsBigInt.toString())
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getBalancesStr(balances: XmrBalanceInfo): string {
    return "Balance: " + balances.getBalance().toString() + ",\n" +
           "Available balance: " + balances.getAvailableBalance().toString() + ",\n" +
           "Pending balance: " + balances.getPendingBalance().toString() + ",\n" +
           "Reserved in offers: " + balances.getReservedOfferBalance().toString() + ",\n" +
           "Locked in trade: " + balances.getReservedTradeBalance().toString();
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
  expect(BigInt(transfer.getAmount())).toBeGreaterThanOrEqual(BigInt("0"));
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
    let sum = BigInt(0);
    for (const destination of transfer.getDestinationsList()) {
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

function getRandomAssetCode() {
  return TestConfig.assetCodes[GenUtils.getRandomInt(0, TestConfig.assetCodes.length - 1)];
}

async function hasPaymentAccount(trader: HavenoClient, assetCode: string): Promise<boolean> {
  for (const paymentAccount of await trader.getPaymentAccounts()) {
    if (paymentAccount.getSelectedTradeCurrency()!.getCode() === assetCode.toUpperCase()) return true;
  }
  return false;
}

async function createPaymentAccount(trader: HavenoClient, assetCode: string): Promise<PaymentAccount> {
  return isCrypto(assetCode) ? createCryptoPaymentAccount(trader, assetCode) : createRevolutPaymentAccount(trader);
}

function isCrypto(assetCode: string) {
  return getCryptoAddress(assetCode) !== undefined;
}

function getCryptoAddress(currencyCode: string): string|undefined {
  for (const cryptoAddress of TestConfig.cryptoAddresses) {
    if (cryptoAddress.currencyCode === currencyCode.toUpperCase()) return cryptoAddress.address;
  }
}

async function createRevolutPaymentAccount(trader: HavenoClient): Promise<PaymentAccount> {
  const accountForm = await trader.getPaymentAccountForm('REVOLUT');
  HavenoUtils.setFormValue(PaymentAccountFormField.FieldId.TRADE_CURRENCIES, "gbp,eur,usd", accountForm);
  HavenoUtils.setFormValue(PaymentAccountFormField.FieldId.ACCOUNT_NAME, "Revolut account " + GenUtils.getUUID(), accountForm);
  HavenoUtils.setFormValue(PaymentAccountFormField.FieldId.USER_NAME, "user123", accountForm);
  return trader.createPaymentAccount(accountForm);
}

async function createCryptoPaymentAccount(trader: HavenoClient, currencyCode = "eth"): Promise<PaymentAccount> {
  for (const cryptoAddress of TestConfig.cryptoAddresses) {
    if (cryptoAddress.currencyCode.toLowerCase() !== currencyCode.toLowerCase()) continue;
    return trader.createCryptoPaymentAccount(
      cryptoAddress.currencyCode + " " +  cryptoAddress.address.substr(0, 8) + "... " + GenUtils.getUUID(),
      cryptoAddress.currencyCode,
      cryptoAddress.address);
  }
  throw new Error("No test config for crypto: " + currencyCode);
}

function getOffer(offers: OfferInfo[], id: string): OfferInfo|undefined {
  return offers.find(offer => offer.getId() === id);
}

function testCryptoPaymentAccount(acct: PaymentAccount) {
  expect(acct.getId().length).toBeGreaterThan(0);
  expect(acct.getAccountName().length).toBeGreaterThan(0);
  expect(acct.getPaymentAccountPayload()!.getCryptoCurrencyAccountPayload()!.getAddress().length).toBeGreaterThan(0);
  expect(acct.getSelectedTradeCurrency()!.getCode().length).toBeGreaterThan(0);
  expect(acct.getTradeCurrenciesList().length).toEqual(1);
  const tradeCurrency = acct.getTradeCurrenciesList()[0];
  expect(tradeCurrency.getName().length).toBeGreaterThan(0);
  expect(tradeCurrency.getCode()).toEqual(acct.getSelectedTradeCurrency()!.getCode());
}

function testCryptoPaymentAccountsEqual(acct1: PaymentAccount, acct2: PaymentAccount) {
  expect(acct1.getId()).toEqual(acct2.getId());
  expect(acct1.getAccountName()).toEqual(acct2.getAccountName());
  expect(acct1.getSelectedTradeCurrency()!.getCode()).toEqual(acct2.getSelectedTradeCurrency()!.getCode());
  expect(acct1.getPaymentAccountPayload()!.getCryptoCurrencyAccountPayload()!.getAddress()).toEqual(acct2.getPaymentAccountPayload()!.getCryptoCurrencyAccountPayload()!.getAddress());
}

function testOffer(offer: OfferInfo, config?: TradeContext) {
  expect(offer.getId().length).toBeGreaterThan(0);
  if (config) {
    expect(BigInt(offer.getAmount())).toEqual(config.amount);
    expect(offer.getBuyerSecurityDeposit() / offer.getAmount()).toEqual(config.buyerSecurityDeposit);
    expect(offer.getSellerSecurityDeposit() / offer.getAmount()).toEqual(config.buyerSecurityDeposit); // TODO: use same config.securityDeposit for buyer and seller?
  }
  // TODO: test rest of offer
}

function testMoneroNodeSettingsEqual(settingsBefore: MoneroNodeSettings, settingsAfter: MoneroNodeSettings) {
    expect(settingsBefore.getBlockchainPath()).toEqual(settingsAfter.getBlockchainPath());
    expect(settingsBefore.getBootstrapUrl()).toEqual(settingsAfter.getBootstrapUrl());
    expect(settingsBefore.getStartupFlagsList()).toEqual(settingsAfter.getStartupFlagsList());
}

function getFormField(form: PaymentAccountForm, fieldId: PaymentAccountFormField.FieldId): PaymentAccountFormField {
    for (const field of form.getFieldsList()) {
      if (field.getId() == fieldId) return field;
    }
    throw new Error("Form field not found: " + fieldId);
}

function getValidFormInput(fieldId: PaymentAccountFormField.FieldId, form: PaymentAccountForm): string {
  const field = getFormField(form, fieldId);
  switch (fieldId) {
    case PaymentAccountFormField.FieldId.ACCEPTED_COUNTRY_CODES:
      if (form.getId().toString() === "SEPA" || form.getId().toString() === "SEPA_INSTANT") return "BE," + field.getSupportedSepaEuroCountriesList().map(country => country.getCode()).join(',');
      return field.getSupportedCountriesList().map(country => country.getCode()).join(',');
    case PaymentAccountFormField.FieldId.ACCOUNT_ID:
      return "jdoe@no.com";
    case PaymentAccountFormField.FieldId.ACCOUNT_NAME:
      return form.getId().toString() + " " + GenUtils.getUUID(); // TODO: rename to form.getPaymentMethodId()
    case PaymentAccountFormField.FieldId.ACCOUNT_NR:
      return "12345678";
    case PaymentAccountFormField.FieldId.ACCOUNT_OWNER:
      return "John Doe";
    case PaymentAccountFormField.FieldId.ACCOUNT_TYPE:
      throw new Error("Not implemented");
    case PaymentAccountFormField.FieldId.ANSWER:
      throw new Error("Not implemented");
    case PaymentAccountFormField.FieldId.BANK_ACCOUNT_NAME:
      throw new Error("Not implemented");
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
      return "Jane Doe";
    case PaymentAccountFormField.FieldId.BENEFICIARY_PHONE:
      return "123-456-7890";
    case PaymentAccountFormField.FieldId.BIC:
      return "ATLNFRPP";
    case PaymentAccountFormField.FieldId.BRANCH_ID:
      throw new Error("Not implemented");
    case PaymentAccountFormField.FieldId.CITY:
      return "Atlanta";
    case PaymentAccountFormField.FieldId.CONTACT:
      return "Email please";
    case PaymentAccountFormField.FieldId.COUNTRY:
    case PaymentAccountFormField.FieldId.BANK_COUNTRY_CODE:
    case PaymentAccountFormField.FieldId.INTERMEDIARY_COUNTRY_CODE:
      return field.getSupportedCountriesList().length ? field.getSupportedCountriesList()[0]!.getCode() : "FR";
    case PaymentAccountFormField.FieldId.EMAIL:
      return "jdoe@no.com";
    case PaymentAccountFormField.FieldId.EMAIL_OR_MOBILE_NR:
      return "876-512-7813";
    case PaymentAccountFormField.FieldId.EXTRA_INFO:
      return "Please and thanks";
    case PaymentAccountFormField.FieldId.HOLDER_ADDRESS:
      throw new Error("Not implemented");
    case PaymentAccountFormField.FieldId.HOLDER_EMAIL:
      throw new Error("Not implemented");
    case PaymentAccountFormField.FieldId.HOLDER_NAME:
      return "user1 Doe";
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
      throw new Error("Not implemented");
    case PaymentAccountFormField.FieldId.NATIONAL_ACCOUNT_ID:
      throw new Error("Not implemented");
    case PaymentAccountFormField.FieldId.PAYID:
      throw new Error("Not implemented");
    case PaymentAccountFormField.FieldId.PIX_KEY:
      throw new Error("Not implemented");
    case PaymentAccountFormField.FieldId.POSTAL_ADDRESS:
      throw new Error("Not implemented");
    case PaymentAccountFormField.FieldId.PROMPT_PAY_ID:
      throw new Error("Not implemented");
    case PaymentAccountFormField.FieldId.QUESTION:
      throw new Error("Not implemented");
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
      return GenUtils.arrayContains(field.getRequiredForCountriesList(), country) ? "My state" : "";
    case PaymentAccountFormField.FieldId.TRADE_CURRENCIES:
      if (field.getComponent() === PaymentAccountFormField.Component.SELECT_ONE) return field.getSupportedCurrenciesList()[0]!.getCode(); // TODO: randomly select?
      else return field.getSupportedCurrenciesList().map(currency => currency.getCode()).join(',');
    case PaymentAccountFormField.FieldId.USER_NAME:
      return "user123";
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
function getInvalidFormInput(form: PaymentAccountForm, fieldId: PaymentAccountFormField.FieldId): string {
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
      throw new Error("Not implemented");
    case PaymentAccountFormField.FieldId.ANSWER:
      throw new Error("Not implemented");
    case PaymentAccountFormField.FieldId.BANK_ACCOUNT_NAME:
      throw new Error("Not implemented");
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
      throw new Error("Not implemented");
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
    case PaymentAccountFormField.FieldId.EXTRA_INFO:
      throw new Error("Extra info has no invalid input");
    case PaymentAccountFormField.FieldId.HOLDER_ADDRESS:
      throw new Error("Not implemented");
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
      throw new Error("Not implemented");
    case PaymentAccountFormField.FieldId.NATIONAL_ACCOUNT_ID:
      throw new Error("Not implemented");
    case PaymentAccountFormField.FieldId.PAYID:
      throw new Error("Not implemented");
    case PaymentAccountFormField.FieldId.PIX_KEY:
      throw new Error("Not implemented");
    case PaymentAccountFormField.FieldId.POSTAL_ADDRESS:
      throw new Error("Not implemented");
    case PaymentAccountFormField.FieldId.PROMPT_PAY_ID:
      throw new Error("Not implemented");
    case PaymentAccountFormField.FieldId.QUESTION:
      throw new Error("Not implemented");
    case PaymentAccountFormField.FieldId.REQUIREMENTS:
      throw new Error("Not implemented");
    case PaymentAccountFormField.FieldId.SALT:
      return "abc";
    case PaymentAccountFormField.FieldId.SORT_CODE:
      return "12345A";
    case PaymentAccountFormField.FieldId.SPECIAL_INSTRUCTIONS:
      throw new Error("Special instructions have no invalid input");
    case PaymentAccountFormField.FieldId.STATE: {
      const country = HavenoUtils.getFormValue(form, PaymentAccountFormField.FieldId.COUNTRY);
      return GenUtils.arrayContains(field.getRequiredForCountriesList(), country) ? "" : "My state";
    }
    case PaymentAccountFormField.FieldId.TRADE_CURRENCIES:
      return "abc,def";
    case PaymentAccountFormField.FieldId.USER_NAME:
      return "A";
    case PaymentAccountFormField.FieldId.ADDRESS:
      return "A123";
    default:
      throw new Error("Unhandled form field: " + fieldId);
  }
}

function testPaymentAccount(account: PaymentAccount, form: PaymentAccountForm) {
    if (account.getPaymentAccountPayload()?.getCryptoCurrencyAccountPayload()) testCryptoPaymentAccount(account); // TODO: test non-crypto
    expect(account.getAccountName()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.ACCOUNT_NAME).getValue()); // TODO: using number as payment method, account payload's account name = user name
    const isCountryBased = account.getPaymentAccountPayload()!.getCountryBasedPaymentAccountPayload() !== undefined;
    if (isCountryBased) expect(account.getPaymentAccountPayload()!.getCountryBasedPaymentAccountPayload()!.getCountryCode()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.COUNTRY).getValue());
    switch (form.getId()) {
      case PaymentAccountForm.FormId.BLOCK_CHAINS:
        expect(account.getPaymentAccountPayload()!.getCryptoCurrencyAccountPayload()!.getAddress()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.ADDRESS).getValue());
        expect(account.getTradeCurrenciesList().map(currency => currency.getCode()).join(",")).toEqual(getFormField(form, PaymentAccountFormField.FieldId.TRADE_CURRENCIES).getValue());
        break;
      case PaymentAccountForm.FormId.REVOLUT:
        expect(account.getPaymentAccountPayload()!.getRevolutAccountPayload()!.getUserName()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.USER_NAME).getValue());
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
      case PaymentAccountForm.FormId.CLEAR_X_CHANGE:
        expect(account.getPaymentAccountPayload()!.getClearXchangeAccountPayload()!.getHolderName()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.HOLDER_NAME).getValue());
        expect(account.getPaymentAccountPayload()!.getClearXchangeAccountPayload()!.getEmailOrMobileNr()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.EMAIL_OR_MOBILE_NR).getValue());
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
      default:
        throw new Error("Unhandled payment method type: " + form.getId());
    }
}
