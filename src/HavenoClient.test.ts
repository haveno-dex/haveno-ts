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

const TestConfig = {
    logLevel: 3,
    baseCurrencyNetwork: getBaseCurrencyNetwork(),
    networkType: getBaseCurrencyNetwork() == BaseCurrencyNetwork.XMR_MAINNET ? monerojs.MoneroNetworkType.MAINNET : getBaseCurrencyNetwork() == BaseCurrencyNetwork.XMR_LOCAL ? monerojs.MoneroNetworkType.TESTNET : monerojs.MoneroNetworkType.STAGENET,
    moneroBinsDir: "../haveno/.localnet",
    testDataDir: "./testdata",
    haveno: {
        path: "../haveno",
        version: "1.6.2"
    },
    monerod: {
        url: "http://localhost:" + getNetworkStartPort() + "8081", // 18081, 28081, 38081 for mainnet, testnet, stagenet respectively
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
        defaultPath: "funding_wallet-" + getBaseCurrencyNetwork(),
        minimumFunding: BigInt("5000000000000")
    },
    defaultHavenod: {
        logProcessOutput: true, // log output for processes started by tests (except arbitrator, alice, and bob which are configured separately)
        apiPassword: "apitest",
        walletUsername: "haveno_user",
        walletDefaultPassword: "password", // only used if account password not set
        accountPasswordRequired: true,
        accountPassword: "abctesting789",
        autoLogin: true
    },
    startupHavenods: [{
            appName: "haveno-" + getBaseCurrencyNetwork() + "_arbitrator",  // arbritrator
            logProcessOutput: true,
            url: "http://localhost:8079",
            accountPasswordRequired: false,
            accountPassword: "abctesting123",
        }, {
            appName: "haveno-" + getBaseCurrencyNetwork() + "_alice",       // alice
            logProcessOutput: true,
            url: "http://localhost:8080",
            accountPasswordRequired: false,
            accountPassword: "abctesting456",
            walletUrl: "http://127.0.0.1:38091",
        }, {
            appName: "haveno-" + getBaseCurrencyNetwork() + "_bob",         // bob
            logProcessOutput: true,
            url: "http://localhost:8081",
            accountPasswordRequired: false,
            accountPassword: "abctesting789",
            walletUrl: "http://127.0.0.1:38092",
        }
    ],
    maxFee: BigInt("75000000000"),
    walletSyncPeriodMs: 5000, // TODO (woodser): auto adjust higher if using remote connection
    daemonPollPeriodMs: 15000,
    maxWalletStartupMs: 10000, // TODO (woodser): make shorter by switching to jni
    maxTimePeerNoticeMs: 3000,
    maxCpuPct: 0.25,
    assetCodes: ["USD", "GBP", "EUR", "ETH", "BTC", "BCH", "LTC", "ZEC"], // primary asset codes
    cryptoAddresses: [{
            currencyCode: "ETH",
            address: "0xdBdAb835Acd6fC84cF5F9aDD3c0B5a1E25fbd99f"
        }, {
            currencyCode: "BTC",
            address: "bcrt1q6j90vywv8x7eyevcnn2tn2wrlg3vsjlsvt46qz"
        }, {
            currencyCode: "BCH",
            address: "1JRjBNKi4ZgJpKPeoL4149Q7ZZD3VvVgk9" // TODO: support CashAddr format only
        }, {
            currencyCode: "LTC",
            address: "LXUTUN5mTPc2LsS7cEjkyjTRcfYyJGoUuQ"
        }, {
            currencyCode: "ZEC",
            address: "t1SnUTh75DSZ1AvbjiTvvHkmPoph7DeHTGG" // TODO: support z-addresses only
        }
    ],
    proxyPorts: new Map<string, string[]>([ // map proxied ports to havenod api and p2p ports
        ["8079", ["9998", "4444"]],         // arbitrator
        ["8080", ["9999", "5555"]],         // alice
        ["8081", ["10000", "6666"]],        // bob
        ["8082", ["10001", "7777"]],
        ["8083", ["10002", "7778"]],
        ["8084", ["10003", "7779"]],
        ["8085", ["10004", "7780"]],
        ["8086", ["10005", "7781"]],
    ]),
    arbitratorPrivKey: getArbitratorPrivKey(),
    tradeInitTimeout: 60000,
    testTimeout: getBaseCurrencyNetwork() === BaseCurrencyNetwork.XMR_LOCAL ? 900000 : 3000000, // timeout in ms for each test to complete (15 minutes for private network, 50 minutes for public network)
    postOffer: {     // default post offer config
        direction: "buy",               // buy or sell xmr
        amount: BigInt("200000000000"), // amount of xmr to trade
        assetCode: "eth",               // counter asset to trade
        price: undefined,               // use market price if undefined
        paymentAccountId: undefined,
        priceMargin: 0.0,
        minAmount: undefined,
        buyerSecurityDeposit: 0.15,
        awaitUnlockedBalance: false,
        triggerPrice: undefined
    }
};

interface TxContext {
    isCreatedTx: boolean;
}

interface PostOfferConfig {
    direction?: string,
    amount?: bigint,
    assetCode?: string,
    paymentAccountId?: string,
    buyerSecurityDeposit?: number,
    price?: number,
    priceMargin?: number,
    triggerPrice?: number,
    minAmount?: bigint,
    awaitUnlockedBalance?: boolean
}

// clients
const startupHavenods: HavenoClient[] = [];
let arbitrator: HavenoClient;
let alice: HavenoClient;
let bob: HavenoClient;
let monerod: any;
let fundingWallet: any;
let aliceWallet: any;
let bobWallet: any;

// track started haveno processes
const HAVENO_PROCESSES: HavenoClient[] = [];
const HAVENO_PROCESS_PORTS: string[] = [];

// other config
const OFFLINE_ERR_MSG = "Http response at 400 or 500 level";

// -------------------------- BEFORE / AFTER TESTS ----------------------------

jest.setTimeout(TestConfig.testTimeout);

beforeAll(async () => {
  
  // set log level for tests
  HavenoUtils.setLogLevel(TestConfig.logLevel);
  
  // initialize funding wallet
  await initFundingWallet();
  HavenoUtils.log(0, "Funding wallet balance: " + await fundingWallet.getBalance());
  HavenoUtils.log(0, "Funding wallet unlocked balance: " + await fundingWallet.getUnlockedBalance());
  const subaddress = await fundingWallet.createSubaddress(0);
  HavenoUtils.log(0, "Funding wallet new subaddress: " + subaddress.getAddress());
  
  // start configured haveno daemons
  const promises = [];
  for (const config of TestConfig.startupHavenods) promises.push(initHaveno(config));
  for (const settledPromise of await Promise.allSettled(promises)) {
    if (settledPromise.status !== "fulfilled") throw new Error((settledPromise as PromiseRejectedResult).reason);
    startupHavenods.push((settledPromise as PromiseFulfilledResult<HavenoClient>).value);
  }
  
  // assign arbitrator alice, bob
  arbitrator = startupHavenods[0];
  alice = startupHavenods[1];
  bob = startupHavenods[2];
  
  // register arbitrator dispute agent
  await arbitrator.registerDisputeAgent("arbitrator", TestConfig.arbitratorPrivKey);

  // connect monero clients
  monerod = await monerojs.connectToDaemonRpc(TestConfig.monerod.url, TestConfig.monerod.username, TestConfig.monerod.password);
  aliceWallet = await monerojs.connectToWalletRpc(TestConfig.startupHavenods[1].walletUrl, TestConfig.defaultHavenod.walletUsername, TestConfig.startupHavenods[1].accountPasswordRequired ? TestConfig.startupHavenods[1].accountPassword : TestConfig.defaultHavenod.walletDefaultPassword);
  bobWallet = await monerojs.connectToWalletRpc(TestConfig.startupHavenods[2].walletUrl, TestConfig.defaultHavenod.walletUsername, TestConfig.startupHavenods[2].accountPasswordRequired ? TestConfig.startupHavenods[2].accountPassword : TestConfig.defaultHavenod.walletDefaultPassword);
  
  // create test data directory if it doesn't exist
  if (!fs.existsSync(TestConfig.testDataDir)) fs.mkdirSync(TestConfig.testDataDir);
});

beforeEach(async () => {
  HavenoUtils.log(0, "BEFORE TEST \"" + expect.getState().currentTestName + "\"");
});

afterAll(async () => {
  
  // release haveno processes
  const promises = [];
  for (const havenod of startupHavenods) {
    promises.push(havenod.getProcess() ? releaseHavenoProcess(havenod) : havenod.disconnect());
  }
  await Promise.all(promises);
  
  // terminate monero-javascript worker
  (await monerojs.LibraryUtils.getWorker()).terminate();
});

// ----------------------------------- TESTS ----------------------------------

test("Can get the version", async () => {
  const version = await arbitrator.getVersion();
  expect(version).toEqual(TestConfig.haveno.version);
});

test("Can manage an account", async () => {
  let charlie: HavenoClient | undefined;
  let err: any;
  try {
    
    // start charlie without opening account
    charlie = await initHaveno({autoLogin: false});
    assert(!await charlie.accountExists());
    
    // test errors when account not open
    await testAccountNotOpen(charlie);
    
    // create account
    let password = "testPassword";
    await charlie.createAccount(password);
    if (await charlie.isConnectedToMonero()) await charlie.getBalances(); // only connected if local node running
    assert(await charlie.accountExists());
    assert(await charlie.isAccountOpen());
    
    // create payment account
    const paymentAccount = await charlie.createCryptoPaymentAccount("My ETH account", TestConfig.cryptoAddresses[0].currencyCode, TestConfig.cryptoAddresses[0].address);
    
    // close account
    await charlie.closeAccount();
    assert(await charlie.accountExists());
    assert(!await charlie.isAccountOpen());
    await testAccountNotOpen(charlie);
    
    // open account with wrong password
    try {
        await charlie.openAccount("wrongPassword");
        throw new Error("Should have failed opening account with wrong password");
    } catch (err: any) {
        assert.equal(err.message, "Incorrect password");
    }
    
    // open account
    await charlie.openAccount(password);
    assert(await charlie.accountExists());
    assert(await charlie.isAccountOpen());
    
    // restart charlie
    const charlieConfig = {appName: charlie.getAppName(), autoLogin: false}
    await releaseHavenoProcess(charlie);
    charlie = await initHaveno(charlieConfig);
    assert(await charlie.accountExists());
    assert(!await charlie.isAccountOpen());
    
    // open account
    await charlie.openAccount(password);
    assert(await charlie.accountExists());
    assert(await charlie.isAccountOpen());
    
    // change password
    password = "newPassword";
    await charlie.changePassword(password);
    assert(await charlie.accountExists());
    assert(await charlie.isAccountOpen());
    
    // restart charlie
    await releaseHavenoProcess(charlie);
    charlie = await initHaveno(charlieConfig);
    await testAccountNotOpen(charlie);
    
    // open account
    await charlie.openAccount(password);
    assert(await charlie.accountExists());
    assert(await charlie.isAccountOpen());
    
    // backup account to zip file
    const zipFile = TestConfig.testDataDir + "/backup.zip";
    const stream = fs.createWriteStream(zipFile);
    const size = await charlie.backupAccount(stream);
    stream.end();
    assert(size > 0);
    
    // delete account which shuts down server
    await charlie.deleteAccount(); // TODO: support deleting and restoring account without shutting down server, #310
    assert(!await charlie.isConnectedToDaemon());
    await releaseHavenoProcess(charlie);
    
    // restore account which shuts down server
    charlie = await initHaveno(charlieConfig);
    const zipBytes: Uint8Array = new Uint8Array(fs.readFileSync(zipFile));
    await charlie.restoreAccount(zipBytes);
    assert(!await charlie.isConnectedToDaemon());
    await releaseHavenoProcess(charlie);
    
    // open restored account
    charlie = await initHaveno(charlieConfig);
    assert(await charlie.accountExists());
    await charlie.openAccount(password);
    assert(await charlie.isAccountOpen());
    
    // check the persisted payment account
    const paymentAccount2 = await charlie.getPaymentAccount(paymentAccount.getId());
    testCryptoPaymentAccountsEqual(paymentAccount, paymentAccount2);
  } catch (err2) {
    err = err2;
  }

  // stop and delete instances
  if (charlie) await releaseHavenoProcess(charlie, true);
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

test("Can manage Monero daemon connections", async () => {
  let monerod2: any;
  let charlie: HavenoClient | undefined;
  let err: any;
  try {

    // start charlie
    charlie = await initHaveno();

    // test default connections
    const monerodUrl1 = "http://127.0.0.1:" + getNetworkStartPort() + "8081"; // TODO: (woodser): move to config
    let connections: UrlConnection[] = await charlie.getMoneroConnections();
    testConnection(getConnection(connections, monerodUrl1)!, monerodUrl1, OnlineStatus.ONLINE, AuthenticationStatus.AUTHENTICATED, 1);

    // test default connection
    let connection: UrlConnection | undefined = await charlie.getMoneroConnection();
    assert(await charlie.isConnectedToMonero());
    testConnection(connection!, monerodUrl1, OnlineStatus.ONLINE, AuthenticationStatus.AUTHENTICATED, 1); // TODO: should be no authentication?

    // add a new connection
    const fooBarUrl = "http://foo.bar";
    await charlie.addMoneroConnection(fooBarUrl);
    connections = await charlie.getMoneroConnections();
    connection = getConnection(connections, fooBarUrl);
    testConnection(connection!, fooBarUrl, OnlineStatus.UNKNOWN, AuthenticationStatus.NO_AUTHENTICATION, 0);

    // set prioritized connection without credentials
    await charlie.setMoneroConnection(new UrlConnection()
        .setUrl(TestConfig.monerod2.url)
        .setPriority(1));
    connection = await charlie.getMoneroConnection();
    testConnection(connection!, TestConfig.monerod2.url, undefined, undefined, 1); // status may or may not be known due to periodic connection checking

    // connection is offline
    connection = await charlie.checkMoneroConnection();
    assert(!await charlie.isConnectedToMonero());
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
    connection = await charlie.checkMoneroConnection();
    assert(!await charlie.isConnectedToMonero());
    testConnection(connection!, TestConfig.monerod2.url, OnlineStatus.ONLINE, AuthenticationStatus.NOT_AUTHENTICATED, 1);

    // set connection credentials
    await charlie.setMoneroConnection(new UrlConnection()
        .setUrl(TestConfig.monerod2.url)
        .setUsername(TestConfig.monerod2.username)
        .setPassword(TestConfig.monerod2.password)
        .setPriority(1));
    connection = await charlie.getMoneroConnection();
    testConnection(connection!, TestConfig.monerod2.url, undefined, undefined, 1);

    // connection is online and authenticated
    connection = await charlie.checkMoneroConnection();
    assert(await charlie.isConnectedToMonero());
    testConnection(connection!, TestConfig.monerod2.url, OnlineStatus.ONLINE, AuthenticationStatus.AUTHENTICATED, 1);
    
    // change account password
    const password = "newPassword";
    await charlie.changePassword("newPassword");

    // restart charlie
    const appName = charlie.getAppName();
    await releaseHavenoProcess(charlie);
    charlie = await initHaveno({appName: appName, accountPassword: password});

    // connection is restored, online, and authenticated
    connection = await charlie.getMoneroConnection();
    testConnection(connection!, TestConfig.monerod2.url, OnlineStatus.ONLINE, AuthenticationStatus.AUTHENTICATED, 1);
    connections = await charlie.getMoneroConnections();
    testConnection(getConnection(connections, monerodUrl1)!, monerodUrl1, OnlineStatus.UNKNOWN, AuthenticationStatus.NO_AUTHENTICATION, 1);

    // enable auto switch
    await charlie.setAutoSwitch(true);

    // stop monerod
    await monerod2.stopProcess();

    // test auto switch after periodic connection check
    await wait(TestConfig.daemonPollPeriodMs * 2);
    connection = await charlie.getMoneroConnection();
    testConnection(connection!, monerodUrl1, OnlineStatus.ONLINE, AuthenticationStatus.AUTHENTICATED, 1);

    // stop auto switch and checking connection periodically
    await charlie.setAutoSwitch(false);
    await charlie.stopCheckingConnection();

    // remove current connection
    await charlie.removeMoneroConnection(monerodUrl1);

    // check current connection
    connection = await charlie.checkMoneroConnection();
    assert.equal(connection, undefined);

    // check all connections
    await charlie.checkMoneroConnections();
    connections = await charlie.getMoneroConnections();
    testConnection(getConnection(connections, fooBarUrl)!, fooBarUrl, OnlineStatus.OFFLINE, AuthenticationStatus.NO_AUTHENTICATION, 0);

    // set connection to previous url
    await charlie.setMoneroConnection(fooBarUrl);
    connection = await charlie.getMoneroConnection();
    testConnection(connection!, fooBarUrl, OnlineStatus.OFFLINE, AuthenticationStatus.NO_AUTHENTICATION, 0);

    // set connection to new url
    const fooBarUrl2 = "http://foo.bar.xyz";
    await charlie.setMoneroConnection(fooBarUrl2);
    connections = await charlie.getMoneroConnections();
    connection = getConnection(connections, fooBarUrl2);
    testConnection(connection!, fooBarUrl2, OnlineStatus.UNKNOWN, AuthenticationStatus.NO_AUTHENTICATION, 0);

    // reset connection
    await charlie.setMoneroConnection();
    assert.equal(await charlie.getMoneroConnection(), undefined);

    // test auto switch after start checking connection
    await charlie.setAutoSwitch(false);
    await charlie.startCheckingConnection(5000); // checks the connection
    await charlie.setAutoSwitch(true);
    await charlie.addMoneroConnection(new UrlConnection()
            .setUrl(TestConfig.monerod.url)
            .setUsername(TestConfig.monerod.username)
            .setPassword(TestConfig.monerod.password)
            .setPriority(2));
    await wait(10000);
    connection = await charlie.getMoneroConnection();
    testConnection(connection!, TestConfig.monerod.url, OnlineStatus.ONLINE, AuthenticationStatus.AUTHENTICATED, 2);
  } catch (err2) {
    err = err2;
  }

  // stop processes
  if (charlie) await releaseHavenoProcess(charlie, true);
  if (monerod2) await monerod2.stopProcess();
  if (err) throw err;
});

test("Can start and stop a local Monero node", async() => {

  // expect error stopping local node
  try {    
    await alice.stopMoneroNode();
    HavenoUtils.log(1, "Running local Monero node stopped");
    await alice.stopMoneroNode(); // stop 2nd time to force error
    throw new Error("should have thrown");
  } catch (err: any) {
    if (err.message !== "Local Monero node is not running" &&
        err.message !== "Cannot stop local Monero node because we don't own its process") {
      throw new Error("Unexpected error: " + err.message);
    }
  }

  let isMoneroNodeRunning = await alice.isMoneroNodeRunning();
  if (isMoneroNodeRunning) {
    HavenoUtils.log(0, "Warning: local Monero node is already running, skipping start and stop local Monero node tests");

    // expect error due to existing running node
    const newSettings = new MoneroNodeSettings();
    try {
      await alice.startMoneroNode(newSettings);
      throw new Error("should have thrown");
    } catch (err: any) {
      if (err.message !== "Local Monero node already running") throw new Error("Unexpected error: " + err.message);
    }

  } else {

    // expect error when passing in bad arguments
    const badSettings = new MoneroNodeSettings();
    badSettings.setStartupFlagsList(["--invalid-flag"]);
    try {
      await alice.startMoneroNode(badSettings);
      throw new Error("should have thrown");
    } catch (err: any) {
      if (!err.message.startsWith("Failed to start monerod:")) throw new Error("Unexpected error: ");
    }

    // expect successful start with custom settings
    const connectionsBefore = await alice.getMoneroConnections();
    const settings: MoneroNodeSettings = new MoneroNodeSettings();
    const dataDir = TestConfig.moneroBinsDir + "/" + TestConfig.baseCurrencyNetwork + "/node1";
    const logFile = dataDir + "/test.log";
    const p2pPort = 38080;
    const rpcPort = 38081;
    settings.setBlockchainPath(dataDir);
    settings.setStartupFlagsList(["--log-file", logFile, "--p2p-bind-port", p2pPort.toString(), "--rpc-bind-port", rpcPort.toString(), "--no-zmq"]);
    await alice.startMoneroNode(settings);
    isMoneroNodeRunning = await alice.isMoneroNodeRunning();
    assert(isMoneroNodeRunning);
    
    // expect settings are updated
    const settingsAfter = await alice.getMoneroNodeSettings();
    testMoneroNodeSettingsEqual(settings, settingsAfter!);

    // expect connections to be unmodified by local node
    const connectionsAfter = await alice.getMoneroConnections();
    assert(connectionsBefore.length === connectionsAfter.length);

    // expect connection to local monero node to succeed
    const rpcUrl = "http://127.0.0.1:" + rpcPort.toString();
    let daemon = await monerojs.connectToDaemonRpc(rpcUrl, "superuser", "abctesting123");
    let height = await daemon.getHeight();
    assert(height >= 0);

    // expect error due to existing running node
    const newSettings = new MoneroNodeSettings();
    try {
      await alice.startMoneroNode(newSettings);
      throw new Error("should have thrown");
    } catch (err: any) {
      if (err.message !== "Local Monero node already running") throw new Error("Unexpected error: " + err.message);
    }

    // expect stopped node
    await alice.stopMoneroNode();
    isMoneroNodeRunning = await alice.isMoneroNodeRunning();
    assert(!isMoneroNodeRunning);
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
test("Has a Monero wallet", async () => {
  
  // get seed phrase
  const seed = await alice.getXmrSeed();
  await MoneroUtils.validateMnemonic(seed);
  
  // get primary address
  const primaryAddress = await alice.getXmrPrimaryAddress();
  await MoneroUtils.validateAddress(primaryAddress, TestConfig.networkType);
  
  // wait for alice to have unlocked balance
  const tradeAmount = BigInt("250000000000");
  await waitForUnlockedBalance(tradeAmount * BigInt("2"), alice);
  
  // test balances
  const balancesBefore: XmrBalanceInfo = await alice.getBalances(); // TODO: rename to getXmrBalances() for consistency?
  expect(BigInt(balancesBefore.getUnlockedBalance())).toBeGreaterThan(BigInt("0"));
  expect(BigInt(balancesBefore.getBalance())).toBeGreaterThanOrEqual(BigInt(balancesBefore.getUnlockedBalance()));
  
  // get transactions
  const txs: XmrTx[]= await alice.getXmrTxs();
  assert(txs.length > 0);
  for (const tx of txs) {
    testTx(tx, {isCreatedTx: false});
  }
  
  // get new subaddresses
  for (let i = 0; i < 0; i++) {
    const address = await alice.getXmrNewSubaddress();
    await MoneroUtils.validateAddress(address, TestConfig.networkType);
  }
  
  // create withdraw tx
  const destination = new XmrDestination().setAddress(await alice.getXmrNewSubaddress()).setAmount("100000000000");
  let tx = await alice.createXmrTx([destination]);
  testTx(tx, {isCreatedTx: true});
  
  // relay withdraw tx
  const txHash = await alice.relayXmrTx(tx.getMetadata());
  expect(txHash.length).toEqual(64);
  
  // balances decreased
  const balancesAfter = await alice.getBalances();
  expect(BigInt(balancesAfter.getBalance())).toBeLessThan(BigInt(balancesBefore.getBalance()));
  expect(BigInt(balancesAfter.getUnlockedBalance())).toBeLessThan(BigInt(balancesBefore.getUnlockedBalance()));
  
  // get relayed tx
  tx = await alice.getXmrTx(txHash);
  testTx(tx, {isCreatedTx: false});
  
  // relay invalid tx
  try {
    await alice.relayXmrTx("invalid tx metadata");
    throw new Error("Cannot relay invalid tx metadata");
  } catch (err: any) {
    if (err.message !== "Failed to parse hex.") throw new Error("Unexpected error: " + err.message);
  }
});

test("Can get balances", async () => {
  const balances: XmrBalanceInfo = await alice.getBalances();
  expect(BigInt(balances.getUnlockedBalance())).toBeGreaterThanOrEqual(0);
  expect(BigInt(balances.getLockedBalance())).toBeGreaterThanOrEqual(0);
  expect(BigInt(balances.getReservedOfferBalance())).toBeGreaterThanOrEqual(0);
  expect(BigInt(balances.getReservedTradeBalance())).toBeGreaterThanOrEqual(0);
});

test("Can receive push notifications", async () => {

  // add notification listener
  const notifications: NotificationMessage[] = [];
  await alice.addNotificationListener(notification => {
    notifications.push(notification);
  });

  // send test notification
  for (let i = 0; i < 3; i++) {
    await alice._sendNotification(new NotificationMessage()
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

test("Can get supported assets and their payment methods", async() => {
  const assetCodes = await alice.getSupportedAssetCodes(); // TODO: replace with getSupportedAssets(): TradeCurrency[]
  for (const assetCode of assetCodes) {
    const paymentMethods = await alice.getPaymentMethods(assetCode);
    expect(paymentMethods.length).toBeGreaterThanOrEqual(0);
  }
});

test("Can get market prices", async () => {

  // get all market prices
  const prices: MarketPriceInfo[] = await alice.getPrices();
  expect(prices.length).toBeGreaterThan(1);
  for (const price of prices) {
    expect(price.getCurrencyCode().length).toBeGreaterThan(0);
    expect(price.getPrice()).toBeGreaterThanOrEqual(0);
  }
  
  // get market prices of primary assets
  for (const assetCode of TestConfig.assetCodes) {
    const price = await alice.getPrice(assetCode);
    expect(price).toBeGreaterThan(0);
  }
  
  // test that prices are reasonable
  const usd = await alice.getPrice("USD");
  expect(usd).toBeGreaterThan(50);
  expect(usd).toBeLessThan(5000);
  const doge = await alice.getPrice("DOGE");
  expect(doge).toBeGreaterThan(200)
  expect(doge).toBeLessThan(20000);
  const btc = await alice.getPrice("BTC");
  expect(btc).toBeGreaterThan(0.0004)
  expect(btc).toBeLessThan(0.4);
  
  // test invalid currency
  await expect(async () => { await alice.getPrice("INVALID_CURRENCY") })
    .rejects
    .toThrow('Currency not found: INVALID_CURRENCY');
});

test("Can get market depth", async () => {
    const assetCode = "eth";
    
    // clear offers
    await clearOffers(alice, assetCode);
    await clearOffers(bob, assetCode);
    async function clearOffers(havenod: HavenoClient, assetCode: string) {
      for (const offer of await havenod.getMyOffers(assetCode)) {
        if (offer.getBaseCurrencyCode().toLowerCase() === assetCode.toLowerCase()) { // TODO (woodser): offer base currency and counter currency are switched for cryptos
            await havenod.removeOffer(offer.getId());
        }
      }
    }
    
    // market depth has no data
    await wait(TestConfig.maxTimePeerNoticeMs);
    let marketDepth = await alice.getMarketDepth(assetCode);
    expect(marketDepth.getBuyPricesList().length).toEqual(0);
    expect(marketDepth.getBuyDepthList().length).toEqual(0);
    expect(marketDepth.getSellPricesList().length).toEqual(0);
    expect(marketDepth.getSellDepthList().length).toEqual(0);
    
    // post offers to buy and sell
    await postOffer(alice, {direction: "buy", amount: BigInt("150000000000"), assetCode: assetCode, priceMargin: 0.00, awaitUnlockedBalance: true, price: 17.0}); // TODO: offer price is reversed. fix everywhere
    await postOffer(alice, {direction: "buy", amount: BigInt("150000000000"), assetCode: assetCode, priceMargin: 0.02, awaitUnlockedBalance: true, price: 17.2});
    await postOffer(alice, {direction: "buy", amount: BigInt("200000000000"), assetCode: assetCode, priceMargin: 0.05, awaitUnlockedBalance: true, price: 17.3});
    await postOffer(alice, {direction: "buy", amount: BigInt("150000000000"), assetCode: assetCode, priceMargin: 0.02, awaitUnlockedBalance: true, price: 17.3});
    await postOffer(alice, {direction: "sell", amount: BigInt("300000000000"), assetCode: assetCode, priceMargin: 0.00, awaitUnlockedBalance: true});
    await postOffer(alice, {direction: "sell", amount: BigInt("300000000000"), assetCode: assetCode, priceMargin: 0.02, awaitUnlockedBalance: true});
    await postOffer(alice, {direction: "sell", amount: BigInt("400000000000"), assetCode: assetCode, priceMargin: 0.05, awaitUnlockedBalance: true});
    
    // get bob's market depth
    await wait(TestConfig.maxTimePeerNoticeMs);
    marketDepth = await alice.getMarketDepth(assetCode);
    
    // each unique price has a depth
    expect(marketDepth.getBuyPricesList().length).toEqual(3);
    expect(marketDepth.getSellPricesList().length).toEqual(3);
    expect(marketDepth.getBuyPricesList().length).toEqual(marketDepth.getBuyDepthList().length);
    expect(marketDepth.getSellPricesList().length).toEqual(marketDepth.getSellDepthList().length);
    
    // test buy prices and depths
    const buyOffers = (await alice.getOffers(assetCode, "buy")).concat(await alice.getMyOffers(assetCode, "buy")).sort(function(a, b) { return parseFloat(a.getPrice()) - parseFloat(b.getPrice()) });
    expect(marketDepth.getBuyPricesList()[0]).toEqual(1 / parseFloat(buyOffers[0].getPrice())); // TODO: price when posting offer is reversed. this assumes crypto counter currency
    expect(marketDepth.getBuyPricesList()[1]).toEqual(1 / parseFloat(buyOffers[1].getPrice()));
    expect(marketDepth.getBuyPricesList()[2]).toEqual(1 / parseFloat(buyOffers[2].getPrice()));
    expect(marketDepth.getBuyDepthList()[0]).toEqual(0.15);
    expect(marketDepth.getBuyDepthList()[1]).toEqual(0.30);
    expect(marketDepth.getBuyDepthList()[2]).toEqual(0.65);
    
    // test sell prices and depths
    const sellOffers = (await alice.getOffers(assetCode, "sell")).concat(await alice.getMyOffers(assetCode, "sell")).sort(function(a, b) { return parseFloat(b.getPrice()) - parseFloat(a.getPrice()) });
    expect(marketDepth.getSellPricesList()[0]).toEqual(1 / parseFloat(sellOffers[0].getPrice()));
    expect(marketDepth.getSellPricesList()[1]).toEqual(1 / parseFloat(sellOffers[1].getPrice()));
    expect(marketDepth.getSellPricesList()[2]).toEqual(1 / parseFloat(sellOffers[2].getPrice()));
    expect(marketDepth.getSellDepthList()[0]).toEqual(0.3);
    expect(marketDepth.getSellDepthList()[1]).toEqual(0.6);
    expect(marketDepth.getSellDepthList()[2]).toEqual(1);
    
    // clear offers
    await clearOffers(alice, assetCode);
    await clearOffers(bob, assetCode);
    
    // test invalid currency
    await expect(async () => {await alice.getMarketDepth("INVALID_CURRENCY")})
        .rejects
        .toThrow('Currency not found: INVALID_CURRENCY');
});

test("Can register as an arbitrator", async () => {
  
  // test bad dispute agent type
  try {
    await arbitrator.registerDisputeAgent("unsupported type", TestConfig.arbitratorPrivKey);
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
  await arbitrator.registerDisputeAgent("arbitrator", TestConfig.arbitratorPrivKey);
});

test("Can get offers", async () => {
  for (const assetCode of TestConfig.assetCodes) {
    const offers: OfferInfo[] = await alice.getOffers(assetCode);
    for (const offer of offers)  testOffer(offer);
  }
});

test("Can get my offers", async () => {
  for (const assetCode of TestConfig.assetCodes) {
    const offers: OfferInfo[] = await alice.getMyOffers(assetCode);
    for (const offer of offers)  testOffer(offer);
  }
});

test("Can get payment methods", async () => {
  const paymentMethods: PaymentMethod[] = await alice.getPaymentMethods();
  expect(paymentMethods.length).toBeGreaterThan(0);
  for (const paymentMethod of paymentMethods) {
    expect(paymentMethod.getId().length).toBeGreaterThan(0);
    expect(BigInt(paymentMethod.getMaxTradeLimit())).toBeGreaterThan(BigInt(0));
    expect(BigInt(paymentMethod.getMaxTradePeriod())).toBeGreaterThan(BigInt(0));
    expect(paymentMethod.getSupportedAssetCodesList().length).toBeGreaterThanOrEqual(0);
  }
});

test("Can get payment accounts", async () => {
  const paymentAccounts: PaymentAccount[] = await alice.getPaymentAccounts();
  for (const paymentAccount of paymentAccounts) {
    if (paymentAccount.getPaymentAccountPayload()!.getCryptoCurrencyAccountPayload()) { // TODO (woodser): test non-crypto
       testCryptoPaymentAccount(paymentAccount);
    }
  }
});

// TODO: rename ClearXChange to Zelle
// TODO: FieldId represented as number
test("Can validate payment account forms", async () => {
  
  // supported payment methods  
  const expectedPaymentMethods = ["REVOLUT", "SEPA", "SEPA_INSTANT", "TRANSFERWISE", "CLEAR_X_CHANGE", "SWIFT", "F2F", "STRIKE", "MONEY_GRAM", "FASTER_PAYMENTS", "UPHOLD", "PAXUM"];
  
  // get payment methods
  const paymentMethods = await alice.getPaymentMethods();
  expect(paymentMethods.length).toEqual(expectedPaymentMethods.length);
  for (const paymentMethod of paymentMethods) {
    assert(GenUtils.arrayContains(expectedPaymentMethods, paymentMethod.getId()), "Payment method is not expected: " + paymentMethod.getId());
  }
  
  // test form for each payment method
  for (const paymentMethod of paymentMethods) {
    
    // generate form
    const accountForm = await alice.getPaymentAccountForm(paymentMethod.getId());
    
    // complete form, validating each field
    for (const field of accountForm.getFieldsList()) {
      
      // validate invalid form field
      try {
        const invalidInput = getInvalidFormInput(accountForm, field.getId());
        await alice.validateFormField(accountForm, field.getId(), invalidInput);
        throw new Error("Should have thrown error validating form field '" + field.getId() + "' with invalid value '" + invalidInput + "'");
      } catch (err: any) {
        if (err.message.indexOf("Not implemented") >= 0) throw err;
        if (err.message.indexOf("Should have thrown") >= 0) throw err;
      }
      
      // validate valid form field
      const validInput = getValidFormInput(field.getId(), accountForm);
      await alice.validateFormField(accountForm, field.getId(), validInput);
      field.setValue(validInput);
    }
    
    // create payment account
    const fiatAccount = await alice.createPaymentAccount(accountForm);
    
    // payment account added
    let found = false;
    for (const paymentAccount of await alice.getPaymentAccounts()) {
      if (paymentAccount.getId() === fiatAccount.getId()) {
        found = true;
        break;
      }
    }
    assert(found, "Payment account not found after adding");
    
    // test payment account
    expect(fiatAccount.getPaymentMethod().getId()).toEqual(paymentMethod.getId());
    testFiatAccount(fiatAccount, accountForm);
  }
});

test("Can create fiat payment accounts", async () => {
  
  // get payment account form
  const paymentMethodId = 'REVOLUT';
  const accountForm = await alice.getPaymentAccountForm(paymentMethodId);
  
  // edit form
  HavenoUtils.setFormValue(PaymentAccountFormField.FieldId.ACCOUNT_NAME, "Revolut account " + GenUtils.getUUID(), accountForm);
  HavenoUtils.setFormValue(PaymentAccountFormField.FieldId.USER_NAME, "user123", accountForm);
  HavenoUtils.setFormValue(PaymentAccountFormField.FieldId.TRADE_CURRENCIES, "gbp,eur,usd", accountForm);
  
  // create payment account
  const fiatAccount = await alice.createPaymentAccount(accountForm);
  expect(fiatAccount.getAccountName()).toEqual(HavenoUtils.getFormValue(PaymentAccountFormField.FieldId.ACCOUNT_NAME, accountForm));
  expect(fiatAccount.getSelectedTradeCurrency().getCode()).toEqual("USD");
  expect(fiatAccount.getTradeCurrenciesList().length).toBeGreaterThan(0);
  expect(fiatAccount.getPaymentAccountPayload()!.getPaymentMethodId()).toEqual(paymentMethodId);
  expect(fiatAccount.getPaymentAccountPayload()!.getRevolutAccountPayload()!.getAccountId()).toEqual(HavenoUtils.getFormValue(PaymentAccountFormField.FieldId.USER_NAME, accountForm)); // TODO: payment payload account id is username?
  expect(fiatAccount.getPaymentAccountPayload()!.getRevolutAccountPayload()!.getUserName()).toEqual(HavenoUtils.getFormValue(PaymentAccountFormField.FieldId.USER_NAME, accountForm));
  
  // payment account added
  let found = false;
  for (const paymentAccount of await alice.getPaymentAccounts()) {
    if (paymentAccount.getId() === fiatAccount.getId()) {
      found = true;
      break;
    }
  }
  assert(found, "Payment account not found after adding");
});

test("Can create crypto payment accounts", async () => {
  
  // test each crypto
  for (const testAccount of TestConfig.cryptoAddresses) {
    
    // create payment account
    const name = testAccount.currencyCode + " " + testAccount.address.substr(0, 8) + "... " + GenUtils.getUUID();
    const paymentAccount: PaymentAccount = await alice.createCryptoPaymentAccount(name, testAccount.currencyCode, testAccount.address);
    testCryptoPaymentAccount(paymentAccount);
    testCryptoPaymentAccountEquals(paymentAccount, testAccount, name);
    
    // fetch and test payment account
    let fetchedAccount: PaymentAccount | undefined;
    for (const account of await alice.getPaymentAccounts()) {
      if (paymentAccount.getId() === account.getId()) {
        fetchedAccount = account;
        break;
      }
    }
    if (!fetchedAccount) throw new Error("Payment account not found after being added");
    testCryptoPaymentAccount(paymentAccount);
    testCryptoPaymentAccountEquals(fetchedAccount, testAccount, name);
  }
  
  // TODO (woodser): update from latest Bisq CorePaymentAccountService.java for currency and address validation
  
/*  // test invalid currency code
  await expect(async () => { await alice.createCryptoPaymentAccount("My account", "ABC", "123"); })
      .rejects
      .toThrow('Unsupported cryptocurrency code: ABC');
  
  // test invalid address
  await expect(async () => { await alice.createCryptoPaymentAccount("My account", "ETH", "123"); })
      .rejects
      .toThrow('Invalid address');*/
  
  // TODO (woodser): test rejecting account with duplicate name
  
  function testCryptoPaymentAccountEquals(paymentAccount: PaymentAccount, testAccount: any, name: string) {
    expect(paymentAccount.getAccountName()).toEqual(name);
    expect(paymentAccount.getPaymentAccountPayload()!.getCryptoCurrencyAccountPayload()!.getAddress()).toEqual(testAccount.address);
    expect(paymentAccount.getSelectedTradeCurrency()!.getCode()).toEqual(testAccount.currencyCode.toUpperCase());
  }
});

test("Can prepare for trading", async () => {

  // create payment accounts
  if (!await hasPaymentAccount(alice, "eth")) await createPaymentAccount(alice, "eth");
  if (!await hasPaymentAccount(alice, "bch")) await createPaymentAccount(alice, "bch");
  if (!await hasPaymentAccount(alice, "usd")) await createPaymentAccount(alice, "usd");
  if (!await hasPaymentAccount(bob, "eth")) await createPaymentAccount(bob, "eth");
  if (!await hasPaymentAccount(bob, "bch")) await createPaymentAccount(bob, "bch");
  if (!await hasPaymentAccount(bob, "usd")) await createPaymentAccount(bob, "usd");

  // fund wallets
  const tradeAmount = BigInt("250000000000");
  await fundOutputs([aliceWallet, bobWallet], tradeAmount * BigInt("2"), 4);
  
  // wait for havenod to observe funds
  await wait(TestConfig.walletSyncPeriodMs);
});

test("Can post and remove offers", async () => {
  
  // wait for alice to have unlocked balance to post offer
  await waitForUnlockedBalance(BigInt("250000000000") * BigInt("2"), alice);
  
  // get unlocked balance before reserving funds for offer
  const unlockedBalanceBefore = BigInt((await alice.getBalances()).getUnlockedBalance());
  
  // post crypto offer
  let assetCode = "BCH";
  let price = 1 / 17;
  price = 1 / price; // TODO: price in crypto offer is inverted
  let offer: OfferInfo = await postOffer(alice, {assetCode: assetCode, price: price}); 
  assert.equal(offer.getState(), "AVAILABLE");
  assert.equal(offer.getBaseCurrencyCode(), assetCode); // TODO: base and counter currencies inverted in crypto offer
  assert.equal(offer.getCounterCurrencyCode(), "XMR");
  assert.equal(parseFloat(offer.getPrice()), price);
  
  // has offer
  offer = await alice.getMyOffer(offer.getId());
  assert.equal(offer.getState(), "AVAILABLE");
  
  // peer sees offer
  await wait(TestConfig.maxTimePeerNoticeMs);
  if (!getOffer(await bob.getOffers(assetCode, TestConfig.postOffer.direction), offer.getId())) throw new Error("Offer " + offer.getId() + " was not found in peer's offers after posted");
  
  // cancel offer
  await alice.removeOffer(offer.getId());
  
  // offer is removed from my offers
  if (getOffer(await alice.getMyOffers(assetCode, "buy"), offer.getId())) throw new Error("Offer " + offer.getId() + " was found in my offers after removal");
  
  // reserved balance released
  expect(BigInt((await alice.getBalances()).getUnlockedBalance())).toEqual(unlockedBalanceBefore);
  
  // post fiat offer 
  assetCode = "USD";
  price = 180.0;
  offer = await postOffer(alice, {assetCode: assetCode, price: price});
  assert.equal(offer.getState(), "AVAILABLE");
  assert.equal(offer.getBaseCurrencyCode(), "XMR");
  assert.equal(offer.getCounterCurrencyCode(), "USD");
  assert.equal(parseFloat(offer.getPrice()), price);
  
  // has offer
  offer = await alice.getMyOffer(offer.getId());
  assert.equal(offer.getState(), "AVAILABLE");
  
  // cancel offer
  await alice.removeOffer(offer.getId());
  
  // offer is removed from my offers
  if (getOffer(await alice.getMyOffers(assetCode, "buy"), offer.getId())) throw new Error("Offer " + offer.getId() + " was found in my offers after removal");
  
  // reserved balance released
  expect(BigInt((await alice.getBalances()).getUnlockedBalance())).toEqual(unlockedBalanceBefore);
});

// TODO: support splitting outputs
// TODO: provide number of confirmations in offer status
test("Can schedule offers with locked funds", async () => {
  let charlie: HavenoClient | undefined;
  let err: any;
  try {
    
    // start charlie
    charlie = await initHaveno();
    const charlieWallet = await monerojs.connectToWalletRpc("http://127.0.0.1:" + charlie.getWalletRpcPort(), TestConfig.defaultHavenod.walletUsername, TestConfig.defaultHavenod.accountPassword);
    
    // fund charlie with 2 outputs of 0.5 XMR
    const outputAmt = BigInt("500000000000");
    await fundOutputs([charlieWallet], outputAmt, 2, false);
  
    // schedule offer
    const assetCode = "BCH";
    const direction = "BUY";
    let offer: OfferInfo = await postOffer(charlie, {assetCode: assetCode, direction: direction, awaitUnlockedBalance: false}); 
    assert.equal(offer.getState(), "SCHEDULED");
    
    // has offer
    offer = await charlie.getMyOffer(offer.getId());
    assert.equal(offer.getState(), "SCHEDULED");
    
    // balances unchanged
    expect(BigInt((await charlie.getBalances()).getLockedBalance())).toEqual(outputAmt * BigInt(2));
    expect(BigInt((await charlie.getBalances()).getReservedOfferBalance())).toEqual(BigInt(0));
    
    // peer does not see offer because it's scheduled
    await wait(TestConfig.maxTimePeerNoticeMs);
    if (getOffer(await alice.getOffers(assetCode, direction), offer.getId())) throw new Error("Offer " + offer.getId() + " was found in peer's offers before posted");
    
    // cancel offer
    await charlie.removeOffer(offer.getId());
    if (getOffer(await charlie.getOffers(assetCode, direction), offer.getId())) throw new Error("Offer " + offer.getId() + " was found after canceling offer");
    
    // balances unchanged
    expect(BigInt((await charlie.getBalances()).getLockedBalance())).toEqual(outputAmt * BigInt(2));
    expect(BigInt((await charlie.getBalances()).getReservedOfferBalance())).toEqual(BigInt(0));
    
    // schedule offer
    offer = await postOffer(charlie, {assetCode: assetCode, direction: direction, awaitUnlockedBalance: false}); 
    assert.equal(offer.getState(), "SCHEDULED");
    
    // restart charlie
    const charlieConfig = {appName: charlie.getAppName()};
    await releaseHavenoProcess(charlie);
    charlie = await initHaveno(charlieConfig);
    
    // has offer
    offer = await charlie.getMyOffer(offer.getId());
    assert.equal(offer.getState(), "SCHEDULED");
    
    // peer does not see offer because it's scheduled
    await wait(TestConfig.maxTimePeerNoticeMs);
    if (getOffer(await alice.getOffers(assetCode, direction), offer.getId())) throw new Error("Offer " + offer.getId() + " was found in peer's offers before posted");
    
    // wait for deposit txs to unlock
    await waitForUnlockedBalance(outputAmt, charlie);
    
    // one output is reserved, one is unlocked
    expect(BigInt((await charlie.getBalances()).getUnlockedBalance())).toEqual(outputAmt);
    expect(BigInt((await charlie.getBalances()).getLockedBalance())).toEqual(BigInt(0));
    expect(BigInt((await charlie.getBalances()).getReservedOfferBalance())).toEqual(outputAmt);
    
    // peer sees offer
    await wait(TestConfig.maxTimePeerNoticeMs);
    if (!getOffer(await alice.getOffers(assetCode, direction), offer.getId())) throw new Error("Offer " + offer.getId() + " was not found in peer's offers after posted");
    
    // cancel offer
    await charlie.removeOffer(offer.getId());
    
    // offer is removed from my offers
    if (getOffer(await charlie.getMyOffers(assetCode), offer.getId())) throw new Error("Offer " + offer.getId() + " was found in my offers after removal");
    
    // reserved balance becomes unlocked
    expect(BigInt((await charlie.getBalances()).getUnlockedBalance())).toEqual(outputAmt * BigInt(2));
    expect(BigInt((await charlie.getBalances()).getLockedBalance())).toEqual(BigInt(0));
    expect(BigInt((await charlie.getBalances()).getReservedOfferBalance())).toEqual(BigInt(0));
  } catch (err2) {
    err = err2;
  }

  // stop and delete instances
  if (charlie) await releaseHavenoProcess(charlie, true);
  if (err) throw err;
});

// TODO (woodser): test grpc notifications
test("Can complete a trade", async () => {
  
  // wait for alice and bob to have unlocked balance for trade
  const tradeAmount = BigInt("250000000000");
  await waitForUnlockedBalance(tradeAmount * BigInt("2"), alice, bob);
  const aliceBalancesBefore = await alice.getBalances();
  const bobBalancesBefore: XmrBalanceInfo = await bob.getBalances();
  
  // register to receive notifications
  const aliceNotifications: NotificationMessage[] = [];
  const bobNotifications: NotificationMessage[] = [];
  await alice.addNotificationListener(notification => { aliceNotifications.push(notification); });
  await bob.addNotificationListener(notification => { bobNotifications.push(notification); });

  // alice posts offer
  const assetCode = getRandomAssetCode();
  const direction = "buy";
  HavenoUtils.log(1, "Alice posting offer to " + direction + " XMR for " + assetCode);
  const offer: OfferInfo = await postOffer(alice, {direction: direction, amount: tradeAmount, assetCode: assetCode});
  expect(offer.getState()).toEqual("AVAILABLE");
  HavenoUtils.log(1, "Alice done posting offer " + offer.getId());
  
  // TODO (woodser): test error message taking offer before posted
  
  // bob sees offer
  await wait(TestConfig.walletSyncPeriodMs * 2);
  const offerBob = getOffer(await bob.getOffers(assetCode, direction), offer.getId());
  if (!offerBob) throw new Error("Offer " + offer.getId() + " was not found in peer's offers after posting");
  expect(offerBob.getState()).toEqual("UNKNOWN"); // TODO: offer state is not known?
  
  // cannot take offer with invalid payment id
  const aliceTradesBefore = await alice.getTrades();
  const bobTradesBefore = await bob.getTrades();
  try {
    await bob.takeOffer(offer.getId(), "abc");
    throw new Error("taking offer with invalid payment account id should fail");
  } catch (err: any) {
    assert.equal(err.message, "payment account with id 'abc' not found");
    assert.equal((await alice.getTrades()).length, aliceTradesBefore.length, "alice should not have new trades");
    assert.equal((await bob.getTrades()).length, bobTradesBefore.length, "bob should not have new trades"); // TODO (woodser): also test balance unreserved
  }
  
  // bob creates random payment account
  const paymentAccount = await createPaymentAccount(bob, assetCode);
  
  // bob takes offer
  const startTime = Date.now();
  HavenoUtils.log(1, "Bob taking offer");
  const trade: TradeInfo = await bob.takeOffer(offer.getId(), paymentAccount.getId());
  expect(trade.getPhase()).toEqual("DEPOSIT_PUBLISHED");
  HavenoUtils.log(1, "Bob done taking offer in " + (Date.now() - startTime) + " ms");
  
  // alice is notified that offer is taken
  await wait(TestConfig.maxTimePeerNoticeMs);
  const tradeNotifications = getNotifications(aliceNotifications, NotificationMessage.NotificationType.TRADE_UPDATE);
  expect(tradeNotifications.length).toBe(1);
  expect(tradeNotifications[0].getTrade()!.getPhase()).toEqual("DEPOSIT_PUBLISHED");
  expect(tradeNotifications[0].getTitle()).toEqual("Offer Taken");
  expect(tradeNotifications[0].getMessage()).toEqual("Your offer " + offer.getId() + " has been accepted");

  // alice is notified of balance change
  
  // bob can get trade
  let fetchedTrade: TradeInfo = await bob.getTrade(trade.getTradeId());
  expect(fetchedTrade.getPhase()).toEqual("DEPOSIT_PUBLISHED");
  // TODO: test fetched trade
  
  // test bob's balances after taking trade
  let bobBalancesAfter: XmrBalanceInfo = await bob.getBalances();
  expect(BigInt(bobBalancesAfter.getUnlockedBalance())).toBeLessThan(BigInt(bobBalancesBefore.getUnlockedBalance()));
  expect(BigInt(bobBalancesAfter.getReservedOfferBalance()) + BigInt(bobBalancesAfter.getReservedTradeBalance())).toBeGreaterThan(BigInt(bobBalancesBefore.getReservedOfferBalance()) + BigInt(bobBalancesBefore.getReservedTradeBalance()));
  
  // bob is notified of balance change

  // alice can get trade
  fetchedTrade = await alice.getTrade(trade.getTradeId());
  expect(fetchedTrade.getPhase()).toEqual("DEPOSIT_PUBLISHED");

  // test trader chat
  await testTradeChat(trade.getTradeId(), alice, bob);
  
  // mine until deposit txs unlock
  await waitForUnlockedTxs(fetchedTrade.getMakerDepositTxId(), fetchedTrade.getTakerDepositTxId());
  
  // alice notified to send payment
  await wait(TestConfig.maxWalletStartupMs + TestConfig.walletSyncPeriodMs * 2);
  fetchedTrade = await alice.getTrade(trade.getTradeId());
  expect(fetchedTrade.getIsDepositUnlocked()).toBe(true);
  expect(fetchedTrade.getPhase()).toEqual("DEPOSIT_UNLOCKED");
  fetchedTrade = await bob.getTrade(trade.getTradeId());
  expect(fetchedTrade.getIsDepositUnlocked()).toBe(true);
  expect(fetchedTrade.getPhase()).toEqual("DEPOSIT_UNLOCKED");
  
  // alice indicates payment is sent
  HavenoUtils.log(1, "Alice confirming payment sent");
  await alice.confirmPaymentStarted(trade.getTradeId());
  fetchedTrade = await alice.getTrade(trade.getTradeId());
  expect(fetchedTrade.getPhase()).toEqual("PAYMENT_SENT");
  
  // bob notified payment is sent
  await wait(TestConfig.maxTimePeerNoticeMs + TestConfig.maxWalletStartupMs);
  fetchedTrade = await bob.getTrade(trade.getTradeId());
  expect(fetchedTrade.getPhase()).toEqual("PAYMENT_SENT");
  
  // bob confirms payment is received
  HavenoUtils.log(1, "Bob confirming payment received");
  await bob.confirmPaymentReceived(trade.getTradeId());
  fetchedTrade = await bob.getTrade(trade.getTradeId());
  expect(fetchedTrade.getPhase()).toEqual("PAYMENT_RECEIVED"); // TODO (woodser): may be PAYOUT_PUBLISHED if seller sends multisig info after confirmation
  
  // alice notified trade is complete and of balance changes
  await wait(TestConfig.maxWalletStartupMs + TestConfig.walletSyncPeriodMs * 2);
  fetchedTrade = await alice.getTrade(trade.getTradeId());
  expect(fetchedTrade.getPhase()).toEqual("PAYOUT_PUBLISHED");
  
  // test balances after payout tx
  const aliceBalancesAfter = await alice.getBalances();
  bobBalancesAfter = await bob.getBalances();
  const aliceFee = BigInt(aliceBalancesBefore.getBalance()) + tradeAmount - BigInt(aliceBalancesAfter.getBalance());
  const bobFee = BigInt(bobBalancesBefore.getBalance()) - tradeAmount - BigInt(bobBalancesAfter.getBalance());
  expect(aliceFee).toBeLessThanOrEqual(TestConfig.maxFee);
  expect(aliceFee).toBeGreaterThan(BigInt("0"));
  expect(bobFee).toBeLessThanOrEqual(TestConfig.maxFee);
  expect(bobFee).toBeGreaterThan(BigInt("0"));
});

test("Can resolve disputes", async () => {

  // wait for alice and bob to have unlocked balance for trade
  const tradeAmount = BigInt("250000000000");
  await fundOutputs([aliceWallet, bobWallet], tradeAmount * BigInt("2"), 4);
  
  // register to receive notifications
  const aliceNotifications: NotificationMessage[] = [];
  const bobNotifications: NotificationMessage[] = [];
  const arbitratorNotifications: NotificationMessage[] = [];
  await alice.addNotificationListener(notification => { HavenoUtils.log(3, "Alice received notification " + notification.getType() + " " + (notification.getChatMessage() ? notification.getChatMessage()?.getMessage() : "")); aliceNotifications.push(notification); });
  await bob.addNotificationListener(notification => { HavenoUtils.log(3, "Bob received notification " + notification.getType() + " " + (notification.getChatMessage() ? notification.getChatMessage()?.getMessage() : "")); bobNotifications.push(notification); });
  await arbitrator.addNotificationListener(notification => { HavenoUtils.log(3, "Arbitrator received notification " + notification.getType() + " " + (notification.getChatMessage() ? notification.getChatMessage()?.getMessage() : "")); arbitratorNotifications.push(notification); });
  
  // TODO: notification collector with logging
  
  // alice posts offers to buy xmr
  const numOffers = 4;
  HavenoUtils.log(1, "Alice posting offers");
  const direction = "buy";
  let offers = [];
  for (let i = 0; i < numOffers; i++) offers.push(postOffer(alice, {direction: direction, amount: tradeAmount, awaitUnlockedBalance: true}));
  offers = await Promise.all(offers);
  HavenoUtils.log(1, "Alice done posting offers");
  for (let i = 0; i < offers.length; i++) HavenoUtils.log(2, "Offer " + i +  ": " + (await alice.getMyOffer(offers[i].getId())).getId());
  
  // wait for offers to post
  await wait(TestConfig.walletSyncPeriodMs * 2);
  
  // bob takes offers
  const paymentAccount = await createPaymentAccount(bob, "eth");
  HavenoUtils.log(1, "Bob taking offers");
  let trades = [];
  for (let i = 0; i < numOffers; i++) trades.push(bob.takeOffer(offers[i].getId(), paymentAccount.getId()));
  trades = await Promise.all(trades);
  HavenoUtils.log(1, "Bob done taking offers");
  
  // test trades
  const depositTxIds: string[] = [];
  for (const trade of trades) {
    if (trade.getPhase() !== "DEPOSIT_PUBLISHED") throw new Error("Trade phase expected to be DEPOSIT_PUBLISHED but was " + trade.getPhase() + " for trade " + trade.getTradeId());
    expect(trade.getPhase()).toEqual("DEPOSIT_PUBLISHED");
    const fetchedTrade: TradeInfo = await bob.getTrade(trade.getTradeId());
    if (fetchedTrade.getPhase() !== "DEPOSIT_PUBLISHED") throw new Error("Fetched phase expected to be DEPOSIT_PUBLISHED but was " + fetchedTrade.getPhase() + " for trade " + fetchedTrade.getTradeId());
    expect(fetchedTrade.getPhase()).toEqual("DEPOSIT_PUBLISHED");
    depositTxIds.push(fetchedTrade.getMakerDepositTxId());
    depositTxIds.push(fetchedTrade.getTakerDepositTxId());
  }
  
  // mine until deposit txs unlock
  await waitForUnlockedTxs(...depositTxIds);
  
  // open disputes
  HavenoUtils.log(1, "Opening disputes");
  await Promise.all([
    bob.openDispute(trades[0].getTradeId()),
    alice.openDispute(trades[1].getTradeId()),
    bob.openDispute(trades[2].getTradeId()),
    alice.openDispute(trades[3].getTradeId())
  ]);
  HavenoUtils.log(1, "Done opening disputes");
  
  // test dispute state
  const bobDispute = await bob.getDispute(trades[0].getTradeId());
  expect(bobDispute.getTradeId()).toEqual(trades[0].getTradeId());
  expect(bobDispute.getIsOpener()).toBe(true);
  expect(bobDispute.getDisputeOpenerIsBuyer()).toBe(false);
  
  // get non-existing dispute should fail
  try {
    await bob.getDispute("invalid");
    throw new Error("get dispute with invalid id should fail");
  } catch (err: any) {
    assert.equal(err.message, "dispute for trade id 'invalid' not found");
  }
  
  // alice sees the dispute
  await wait(TestConfig.maxTimePeerNoticeMs + TestConfig.maxWalletStartupMs);
  const aliceDispute = await alice.getDispute(trades[0].getTradeId());
  expect(aliceDispute.getTradeId()).toEqual(trades[0].getTradeId());
  expect(aliceDispute.getIsOpener()).toBe(false);
  
  // arbitrator sees both disputes
  const disputes = await arbitrator.getDisputes();
  expect(disputes.length).toBeGreaterThanOrEqual(2);
  const arbAliceDispute = disputes.find(d => d.getId() === aliceDispute.getId());
  assert(arbAliceDispute);
  const arbBobDispute = disputes.find(d => d.getId() === bobDispute.getId());
  assert(arbBobDispute);
  
  // arbitrator sends chat messages to alice and bob
  HavenoUtils.log(1, "Testing chat messages");
  await arbitrator.sendDisputeChatMessage(arbBobDispute!.getId(), "Arbitrator chat message to Bob", []);
  await arbitrator.sendDisputeChatMessage(arbAliceDispute!.getId(), "Arbitrator chat message to Alice", []);
  
  // alice and bob reply to arbitrator chat messages
  await wait(TestConfig.maxTimePeerNoticeMs); // wait for arbitrator's message to arrive
  const attachment = new Attachment();
  const bytes = new Uint8Array(Buffer.from("Proof Bob was scammed", "utf8"));
  attachment.setBytes(bytes);
  attachment.setFileName("proof.txt");
  const attachment2 = new Attachment();
  const bytes2 = new Uint8Array(Buffer.from("picture bytes", "utf8"));
  attachment2.setBytes(bytes2);
  attachment2.setFileName("proof.png");
  HavenoUtils.log(2, "Bob sending chat message to arbitrator. tradeId=" + trades[0].getTradeId() + ", disputeId=" + bobDispute.getId());
  await bob.sendDisputeChatMessage(bobDispute.getId(), "Bob chat message", [attachment, attachment2]);
  await wait(TestConfig.maxTimePeerNoticeMs); // wait for bob's message to arrive
  HavenoUtils.log(2, "Alice sending chat message to arbitrator. tradeId=" + trades[0].getTradeId() + ", disputeId=" + aliceDispute.getId());
  await alice.sendDisputeChatMessage(aliceDispute.getId(), "Alice chat message", []); 
  
  // test alice and bob's chat messages
  await wait(TestConfig.maxTimePeerNoticeMs);
  let updatedDispute = await bob.getDispute(trades[0].getTradeId());
  let messages = updatedDispute.getChatMessageList();
  expect(messages.length).toEqual(3); // 1st message is the system message
  expect(messages[1].getMessage()).toEqual("Arbitrator chat message to Bob");
  expect(messages[2].getMessage()).toEqual("Bob chat message");
  let attachments = messages[2].getAttachmentsList();
  expect(attachments.length).toEqual(2);
  expect(attachments[0].getFileName()).toEqual("proof.txt");
  expect(attachments[0].getBytes()).toEqual(bytes);
  expect(attachments[1].getFileName()).toEqual("proof.png");
  expect(attachments[1].getBytes()).toEqual(bytes2);
  updatedDispute = await alice.getDispute(trades[0].getTradeId());
  messages = updatedDispute.getChatMessageList();
  expect(messages.length).toEqual(3);
  expect(messages[1].getMessage()).toEqual("Arbitrator chat message to Alice");
  expect(messages[2].getMessage()).toEqual("Alice chat message");
  
  // test notifications of chat messages
  let chatNotifications = getNotifications(aliceNotifications, NotificationMessage.NotificationType.CHAT_MESSAGE);
  expect(chatNotifications.length).toBe(1);
  expect(chatNotifications[0].getChatMessage()?.getMessage()).toEqual("Arbitrator chat message to Alice");
  chatNotifications = getNotifications(bobNotifications, NotificationMessage.NotificationType.CHAT_MESSAGE);
  expect(chatNotifications.length).toBe(1);
  expect(chatNotifications[0].getChatMessage()?.getMessage()).toEqual("Arbitrator chat message to Bob");
  
  // arbitrator has 2 chat messages, one with attachments
  chatNotifications = getNotifications(arbitratorNotifications, NotificationMessage.NotificationType.CHAT_MESSAGE);
  expect(chatNotifications.length).toBe(2);
  expect(chatNotifications[0].getChatMessage()?.getMessage()).toEqual("Bob chat message");
  assert(chatNotifications[0].getChatMessage()?.getAttachmentsList());
  attachments = chatNotifications[0].getChatMessage()?.getAttachmentsList()!;
  expect(attachments[0].getFileName()).toEqual("proof.txt");
  expect(attachments[0].getBytes()).toEqual(bytes);
  expect(attachments[1].getFileName()).toEqual("proof.png");
  expect(attachments[1].getBytes()).toEqual(bytes2);
  expect(chatNotifications[1].getChatMessage()?.getMessage()).toEqual("Alice chat message");
  
  // award trade amount to seller
  HavenoUtils.log(1, "Awarding trade amount to seller, trade " + trades[0].getTradeId());
  let bobBalancesBefore = await bob.getBalances();
  let aliceBalancesBefore = await alice.getBalances();
  await arbitrator.resolveDispute(trades[0].getTradeId(), DisputeResult.Winner.SELLER, DisputeResult.Reason.PEER_WAS_LATE, "Seller is winner");
  HavenoUtils.log(1, "Done resolving dispute");
  
  // dispute is resolved
  await wait(TestConfig.maxWalletStartupMs);
  updatedDispute = await alice.getDispute(trades[0].getTradeId());
  expect(updatedDispute.getIsClosed()).toBe(true);
  updatedDispute = await bob.getDispute(trades[0].getTradeId());
  expect(updatedDispute.getIsClosed()).toBe(true);
  
  // check balances after payout tx
  await wait(TestConfig.walletSyncPeriodMs * 2);
  let aliceBalancesAfter = await alice.getBalances();
  let bobBalancesAfter = await bob.getBalances();
  let aliceDifference = BigInt(aliceBalancesAfter.getBalance()) - BigInt(aliceBalancesBefore.getBalance());
  let bobDifference = BigInt(bobBalancesAfter.getBalance()) - BigInt(bobBalancesBefore.getBalance());
  let winnerPayout = tradeAmount + HavenoUtils.centinerosToAtomicUnits(offers[0].getSellerSecurityDeposit());
  let loserPayout = HavenoUtils.centinerosToAtomicUnits(offers[0].getBuyerSecurityDeposit());
  expect(loserPayout - aliceDifference).toBeLessThan(TestConfig.maxFee);
  expect(bobDifference).toEqual(winnerPayout);
  
  // award trade amount to buyer
  HavenoUtils.log(1, "Awarding trade amount to buyer, trade " + trades[1].getTradeId());
  aliceBalancesBefore = await alice.getBalances();
  bobBalancesBefore = await bob.getBalances();
  await arbitrator.resolveDispute(trades[1].getTradeId(), DisputeResult.Winner.BUYER, DisputeResult.Reason.SELLER_NOT_RESPONDING, "Buyer is winner");
  HavenoUtils.log(1, "Done resolving dispute");
  await wait(TestConfig.maxTimePeerNoticeMs + TestConfig.maxWalletStartupMs * 2 + TestConfig.walletSyncPeriodMs); // TODO (woodser): arbitrator sends mailbox message to trader -> trader opens and syncs multisig wallet and sends updated multisig hex to arbitrator -> arbitrator opens and syncs multisig wallet, signs payout tx and sends to trader -> trader finishes signing payout tx and broadcasts. more efficient way? traders can verify payout tx without syncing multisig wallet again
  aliceBalancesAfter = await alice.getBalances();
  bobBalancesAfter = await bob.getBalances();
  aliceDifference = BigInt(aliceBalancesAfter.getBalance()) - BigInt(aliceBalancesBefore.getBalance());
  bobDifference = BigInt(bobBalancesAfter.getBalance()) - BigInt(bobBalancesBefore.getBalance());
  winnerPayout = tradeAmount + HavenoUtils.centinerosToAtomicUnits(offers[1].getBuyerSecurityDeposit());
  loserPayout = HavenoUtils.centinerosToAtomicUnits(offers[1].getSellerSecurityDeposit());
  if (aliceDifference !== winnerPayout || loserPayout - bobDifference > TestConfig.maxFee) {
    HavenoUtils.log(0, "WARNING: payout not observed. waiting longer"); // TODO (woodser): refactor dispute resolution
    await wait(TestConfig.maxWalletStartupMs + TestConfig.walletSyncPeriodMs);
    aliceBalancesAfter = await alice.getBalances();
    bobBalancesAfter = await bob.getBalances();
    aliceDifference = BigInt(aliceBalancesAfter.getBalance()) - BigInt(aliceBalancesBefore.getBalance());
    bobDifference = BigInt(bobBalancesAfter.getBalance()) - BigInt(bobBalancesBefore.getBalance());
  }
  expect(aliceDifference).toEqual(winnerPayout);
  expect(loserPayout - bobDifference).toBeLessThan(TestConfig.maxFee);
  
  // award half of trade amount to buyer
  HavenoUtils.log(1, "Awarding half of trade amount to buyer, trade " + trades[2].getTradeId());
  let customWinnerAmount = tradeAmount / BigInt(2) + HavenoUtils.centinerosToAtomicUnits(offers[2].getBuyerSecurityDeposit());
  aliceBalancesBefore = await alice.getBalances();
  bobBalancesBefore = await bob.getBalances();
  await arbitrator.resolveDispute(trades[2].getTradeId(), DisputeResult.Winner.BUYER, DisputeResult.Reason.WRONG_SENDER_ACCOUNT, "Split trade amount", customWinnerAmount);
  HavenoUtils.log(1, "Done resolving dispute");
  await wait(TestConfig.maxTimePeerNoticeMs + TestConfig.maxWalletStartupMs * 2 + TestConfig.walletSyncPeriodMs);
  aliceBalancesAfter = await alice.getBalances();
  bobBalancesAfter = await bob.getBalances();
  aliceDifference = BigInt(aliceBalancesAfter.getBalance()) - BigInt(aliceBalancesBefore.getBalance());
  bobDifference = BigInt(bobBalancesAfter.getBalance()) - BigInt(bobBalancesBefore.getBalance());
  loserPayout = tradeAmount + HavenoUtils.centinerosToAtomicUnits(offers[2].getBuyerSecurityDeposit()) + HavenoUtils.centinerosToAtomicUnits(offers[2].getSellerSecurityDeposit()) - customWinnerAmount;
  if (aliceDifference !== customWinnerAmount || loserPayout - bobDifference > TestConfig.maxFee) {
    HavenoUtils.log(0, "WARNING: payout not observed. waiting longer");
    await wait(TestConfig.maxWalletStartupMs + TestConfig.walletSyncPeriodMs);
    aliceBalancesAfter = await alice.getBalances();
    bobBalancesAfter = await bob.getBalances();
    aliceDifference = BigInt(aliceBalancesAfter.getBalance()) - BigInt(aliceBalancesBefore.getBalance());
    bobDifference = BigInt(bobBalancesAfter.getBalance()) - BigInt(bobBalancesBefore.getBalance());
  }
  expect(aliceDifference).toEqual(customWinnerAmount);
  expect(loserPayout - bobDifference).toBeLessThanOrEqual(TestConfig.maxFee);
  
  // award too little to loser
  customWinnerAmount = tradeAmount + HavenoUtils.centinerosToAtomicUnits(offers[3].getBuyerSecurityDeposit()) + HavenoUtils.centinerosToAtomicUnits(offers[3].getSellerSecurityDeposit()) - BigInt("10000");
  try {
    await arbitrator.resolveDispute(trades[3].getTradeId(), DisputeResult.Winner.SELLER, DisputeResult.Reason.TRADE_ALREADY_SETTLED, "Loser gets too little", customWinnerAmount);
    throw new Error("Should have failed resolving dispute with insufficient loser payout");
  } catch (err: any) {
    assert.equal(err.message, "Loser payout is too small to cover the mining fee");
  }
  
  // award full amount to seller
  HavenoUtils.log(1, "Awarding full amount to seller, trade " + trades[3].getTradeId());
  customWinnerAmount = tradeAmount + HavenoUtils.centinerosToAtomicUnits(offers[3].getBuyerSecurityDeposit()) + HavenoUtils.centinerosToAtomicUnits(offers[3].getSellerSecurityDeposit());
  aliceBalancesBefore = await alice.getBalances();
  bobBalancesBefore = await bob.getBalances();
  await arbitrator.resolveDispute(trades[3].getTradeId(), DisputeResult.Winner.SELLER, DisputeResult.Reason.TRADE_ALREADY_SETTLED, "Seller gets everything", customWinnerAmount);
  await wait(TestConfig.maxTimePeerNoticeMs + TestConfig.maxWalletStartupMs * 2 + TestConfig.walletSyncPeriodMs);
  aliceBalancesAfter = await alice.getBalances();
  bobBalancesAfter = await bob.getBalances();
  aliceDifference = BigInt(aliceBalancesAfter.getBalance()) - BigInt(aliceBalancesBefore.getBalance());
  bobDifference = BigInt(bobBalancesAfter.getBalance()) - BigInt(bobBalancesBefore.getBalance());
  expect(aliceDifference).toEqual(BigInt(0));
  if (customWinnerAmount - bobDifference > TestConfig.maxFee) {
    HavenoUtils.log(0, "WARNING: payout not observed. waiting longer");
    await wait(TestConfig.maxWalletStartupMs + TestConfig.walletSyncPeriodMs);
    aliceBalancesAfter = await alice.getBalances();
    bobBalancesAfter = await bob.getBalances();
    aliceDifference = BigInt(aliceBalancesAfter.getBalance()) - BigInt(aliceBalancesBefore.getBalance());
    bobDifference = BigInt(bobBalancesAfter.getBalance()) - BigInt(bobBalancesBefore.getBalance());
  }
  expect(customWinnerAmount - bobDifference).toBeLessThanOrEqual(TestConfig.maxFee);
});

test("Cannot make or take offer with insufficient unlocked funds", async () => {
  let charlie: HavenoClient | undefined;
  let err: any;
  try {
    
    // start charlie
    charlie = await initHaveno();
    
    // charlie creates ethereum payment account
    const paymentAccount = await createCryptoPaymentAccount(charlie);
    
    // charlie cannot make offer with insufficient funds
    try {
      await postOffer(charlie, {paymentAccountId: paymentAccount.getId()});
      throw new Error("Should have failed making offer with insufficient funds")
    } catch (err: any) {
      const errTyped = err as HavenoError;
      assert.equal(errTyped.code, 2);
      assert(err.message.includes("not enough money"), "Unexpected error: " + err.message);
    }
    
    // alice posts offer
    const offers: OfferInfo[] = await alice.getMyOffers("ETH");
    let offer: OfferInfo;
    if (offers.length) offer = offers[0];
    else {
      const tradeAmount = BigInt("250000000000");
      await waitForUnlockedBalance(tradeAmount * BigInt("2"), alice);
      offer = await postOffer(alice, {amount: tradeAmount});
      assert.equal(offer.getState(), "AVAILABLE");
      await wait(TestConfig.walletSyncPeriodMs * 2);
    }
    
    // charlie cannot take offer with insufficient funds
    try {
      await charlie.takeOffer(offer.getId(), paymentAccount.getId());
      throw new Error("Should have failed taking offer with insufficient funds")
    } catch (err: any) {
      const errTyped = err as HavenoError;
      assert(errTyped.message.includes("not enough money"), "Unexpected error: " + errTyped.message);
      assert.equal(errTyped.code, 2);
    }
    
    // charlie does not have trade
    try {
      await charlie.getTrade(offer.getId());
    } catch (err: any) {
      const errTyped = err as HavenoError;
      assert.equal(errTyped.code, 3);
      assert(errTyped.message.includes("trade with id '" + offer.getId() + "' not found"));
    }
  } catch (err2) {
    err = err2;
  }
  
  // stop charlie
  if (charlie) await releaseHavenoProcess(charlie, true);
  if (err) throw err;
});

test("Invalidates offers when reserved funds are spent", async () => {
  let err;
  let tx;
  try {
    // wait for alice to have unlocked balance for trade
    const tradeAmount = BigInt("250000000000");
    await waitForUnlockedBalance(tradeAmount * BigInt("2"), alice);
    
    // get frozen key images before posting offer
    const frozenKeyImagesBefore = [];
    for (const frozenOutput of await aliceWallet.getOutputs({isFrozen: true})) frozenKeyImagesBefore.push(frozenOutput.getKeyImage().getHex());
    
    // post offer
    await wait(1000);
    const assetCode = getRandomAssetCode();
    const offer: OfferInfo = await postOffer(alice, {assetCode: assetCode, amount: tradeAmount});
    
    // get key images reserved by offer
    const reservedKeyImages = [];
    const frozenKeyImagesAfter = [];
    for (const frozenOutput of await aliceWallet.getOutputs({isFrozen: true})) frozenKeyImagesAfter.push(frozenOutput.getKeyImage().getHex());
    for (const frozenKeyImageAfter of frozenKeyImagesAfter) {
      if (!frozenKeyImagesBefore.includes(frozenKeyImageAfter)) reservedKeyImages.push(frozenKeyImageAfter);
    }
    
    // offer is available to peers
    await wait(TestConfig.walletSyncPeriodMs * 2);
    if (!getOffer(await bob.getOffers(assetCode, "buy"), offer.getId())) throw new Error("Offer " + offer.getId() + " was not found in peer's offers after posting");
    
    // spend one of offer's reserved outputs
    if (!reservedKeyImages.length) throw new Error("No reserved key images detected");
    await aliceWallet.thawOutput(reservedKeyImages[0]);
    tx = await aliceWallet.sweepOutput({keyImage: reservedKeyImages[0], address: await aliceWallet.getPrimaryAddress(), relay: false});
    await monerod.submitTxHex(tx.getFullHex(), true);
    
    // wait for spend to be seen
    await wait(TestConfig.walletSyncPeriodMs * 2); // TODO (woodser): need place for common test utilities
    
    // offer is removed from peer offers
    if (getOffer(await bob.getOffers(assetCode, "buy"), offer.getId())) throw new Error("Offer " + offer.getId() + " was found in peer's offers after reserved funds spent");
    
    // offer is removed from my offers
    if (getOffer(await alice.getMyOffers(assetCode, "buy"), offer.getId())) throw new Error("Offer " + offer.getId() + " was found in my offers after reserved funds spent");
    
    // offer is automatically cancelled
    try {
      await alice.removeOffer(offer.getId());
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
test("Handles unexpected errors during trade initialization", async () => {
  let traders: HavenoClient[] = [];
  let err: any;
  try {
    
    // start and fund 3 trader processes
    HavenoUtils.log(1, "Starting trader processes");
    traders = await initHavenos(3);
    HavenoUtils.log(1, "Funding traders");
    const tradeAmount = BigInt("250000000000");
    await waitForUnlockedBalance(tradeAmount * BigInt("2"), traders[0], traders[1], traders[2]);
    
    // trader 0 posts offer
    HavenoUtils.log(1, "Posting offer");
    let offer = await postOffer(traders[0], {amount: tradeAmount});
    offer = await traders[0].getMyOffer(offer.getId());
    assert.equal(offer.getState(), "AVAILABLE");
    
    // wait for offer to be seen
    await wait(TestConfig.walletSyncPeriodMs * 2);
    
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
    
    // TODO: test that unavailable right after taking (taker will know before maker)
    
    // trader 0's offer remains available
    await wait(10000); // give time for trade initialization to fail and offer to become available
    offer = await traders[0].getMyOffer(offer.getId());
    if (offer.getState() !== "AVAILABLE") {
        HavenoUtils.log(1, "Offer is not yet available, waiting to become available after timeout..."); // TODO (woodser): fail trade on nack during initialization to save a bunch of time
        await wait(TestConfig.tradeInitTimeout - 10000); // wait remaining time for offer to become available after timeout 
        offer = await traders[0].getMyOffer(offer.getId());
        assert.equal(offer.getState(), "AVAILABLE");
    }
    
    // trader 0 spends trade funds then trader 2 takes offer
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
    expect(BigInt(trader2Balances.getUnlockedBalance())).toBeGreaterThan(BigInt("0"));
  } catch (err2) {
    err = err2;
  }
  
  // stop traders
  for (const trader of traders) await releaseHavenoProcess(trader, true);
  if (err) throw err;
});

// ------------------------------- HELPERS ------------------------------------

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

function getArbitratorPrivKey() {
    switch (getBaseCurrencyNetwork()) {
        case BaseCurrencyNetwork.XMR_MAINNET:
          throw new Error("Cannot get private key for MAINNET");
        case BaseCurrencyNetwork.XMR_STAGENET:
          return "1aa111f817b7fdaaec1c8d5281a1837cc71c336db09b87cf23344a0a4e3bb2cb";
        case BaseCurrencyNetwork.XMR_LOCAL:
          return "6ac43ea1df2a290c1c8391736aa42e4339c5cb4f110ff0257a13b63211977b7a"; // from DEV_PRIVILEGE_PRIV_KEY
        default:
          throw new Error("Unhandled base currency network: " + getBaseCurrencyNetwork());
    }
}

async function initHavenos(numDaemons: number, config?: any) {
  const traderPromises: Promise<HavenoClient>[] = [];
  for (let i = 0; i < numDaemons; i++) traderPromises.push(initHaveno(config));
  return Promise.all(traderPromises);
}

async function initHaveno(config?: any): Promise<HavenoClient> {
  config = Object.assign({}, TestConfig.defaultHavenod, config);
  if (!config.appName) config.appName = "haveno-" + TestConfig.baseCurrencyNetwork + "_instance_" + GenUtils.getUUID();
  
  // connect to existing server or start new process
  let havenod;
  try {
    
    // try to connect to existing server
    havenod = new HavenoClient(config.url, config.apiPassword);
    await havenod.getVersion();
  } catch (err: any) {
    
    // get port for haveno process
    let proxyPort = "";
    if (config.url) proxyPort = new URL(config.url).port
    else {
      for (const port of Array.from(TestConfig.proxyPorts.keys())) {
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
    const cmd: string[] = [
      "./haveno-daemon",
      "--baseCurrencyNetwork", TestConfig.baseCurrencyNetwork,
      "--useLocalhostForP2P", TestConfig.baseCurrencyNetwork === BaseCurrencyNetwork.XMR_MAINNET ? "false" : "true", // TODO: disable for stagenet too
      "--useDevPrivilegeKeys", TestConfig.baseCurrencyNetwork === BaseCurrencyNetwork.XMR_LOCAL ? "true" : "false",
      "--nodePort", TestConfig.proxyPorts.get(proxyPort)![1],
      "--appName", config.appName,
      "--apiPassword", "apitest",
      "--apiPort", TestConfig.proxyPorts.get(proxyPort)![0],
      "--walletRpcBindPort", config.walletUrl ? new URL(config.walletUrl).port : "" + await getAvailablePort(), // use configured port if given
      "--passwordRequired", (config.accountPasswordRequired ? "true" : "false")
    ];
    havenod = await HavenoClient.startProcess(TestConfig.haveno.path, cmd, "http://localhost:" + proxyPort, config.logProcessOutput);
    HAVENO_PROCESSES.push(havenod);
  }
  
  // open account if configured
  if (config.autoLogin) await initHavenoAccount(havenod, config.accountPassword);
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
  GenUtils.remove(HAVENO_PROCESS_PORTS, new URL(havenod.getUrl()).port);
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
    const userDataDir = process.env.APPDATA || (process.platform === 'darwin' ? process.env.HOME + '/Library/Application Support' : process.env.HOME + "/.local/share");
    const appPath = path.normalize(userDataDir + "/" + havenod.getAppName()!);
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
      await fundingWallet.openWallet({path: TestConfig.fundingWallet.defaultPath, password: TestConfig.fundingWallet.password});
    } catch (err: any) {
      if (!(err instanceof monerojs.MoneroRpcError)) throw err;
      
      // -1 returned when wallet does not exist or fails to open e.g. it's already open by another application
      if (err.getCode() === -1) {
        
        // create wallet
        await fundingWallet.createWallet({path: TestConfig.fundingWallet.defaultPath, password: TestConfig.fundingWallet.password});
      } else {
        throw err;
      }
    }
  }
}

async function startMining() {
  try {
    await monerod.startMining(await fundingWallet.getPrimaryAddress(), Math.max(1, Math.floor(os.cpus().length * TestConfig.maxCpuPct)));
  } catch (err: any) {
    if (err.message !== "Already mining") throw err;
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
      if (this._wallet instanceof HavenoClient) return BigInt((await this._wallet.getBalances()).getUnlockedBalance());
      else return BigInt((await this._wallet.getUnlockedBalance()).toString());
    }
    
    async getLockedBalance(): Promise<bigint> {
      if (this._wallet instanceof HavenoClient) return BigInt((await this._wallet.getBalances()).getLockedBalance());
      else return BigInt((await this._wallet.getBalance()).toString()) - await this.getUnlockedBalance();
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
    const unlockedBalance = await wallet.getUnlockedBalance();
    if (unlockedBalance < amount) miningNeeded = true;
    const depositNeeded: bigint = amount - unlockedBalance - await wallet.getLockedBalance();
    if (depositNeeded > BigInt("0") && wallet._wallet !== fundingWallet) {
      for (let i = 0; i < 5; i++) {
        fundConfig.addDestination(await wallet.getDepositAddress(), depositNeeded * BigInt("2")); // make several deposits
      }
    }
  }
  if (fundConfig.getDestinations()) {
    await waitForUnlockedBalance(TestConfig.fundingWallet.minimumFunding, fundingWallet); // TODO (woodser): wait for enough to cover tx amount + fee
    try { await fundingWallet.createTx(fundConfig); }
    catch (err: any) { throw new Error("Error funding wallets: " + err.message); }
  }
  
  // done if all wallets have sufficient unlocked balance
  if (!miningNeeded) return;
  
  // wait for funds to unlock
  HavenoUtils.log(1, "Mining for unlocked balance of " + amount);
  await startMining();
  const promises: Promise<void>[] = [];
  for (const wallet of wallets) {
    if (wallet._wallet === fundingWallet) {
      const subaddress = await fundingWallet.createSubaddress(0);
      HavenoUtils.log(0, "Mining to funding wallet. Alternatively, deposit to: " + subaddress.getAddress());
    }
    // eslint-disable-next-line no-async-promise-executor
    promises.push(new Promise(async (resolve) => {
      const taskLooper: any = new TaskLooper(async function() {
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
  HavenoUtils.log(0, "Funds unlocked, done mining");
}

async function waitForUnlockedTxs(...txHashes: string[]) {
  if (txHashes.length === 0) return;
  HavenoUtils.log(1, "Mining to unlock txs");
  await startMining();
  const promises: Promise<void>[] = [];
  for (const txHash of txHashes) {
    // eslint-disable-next-line no-async-promise-executor
    promises.push(new Promise(async (resolve) => {
      const taskLooper = new TaskLooper(async function() {
        const tx = await monerod.getTx(txHash);
        if (tx.isConfirmed() && tx.getBlock().getHeight() <= await monerod.getHeight() - 10) {
          taskLooper.stop();
          resolve();
        }
      });
      taskLooper.start(5000);
    }));
  }
  await Promise.all(promises);
  HavenoUtils.log(1, "Done mining to unlock txs");
  await monerod.stopMining();
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
  const destinations = [];
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
        await waitForUnlockedBalance(toBigInt(sendAmt), fundingWallet);
        txHashes.push((await fundingWallet.createTx(txConfig)).getHash());
        txConfig = new MoneroTxConfig().setAccountIndex(0).setRelay(true);
        sendAmt = BigInteger("0");
    }
  }
  
  // wait for wallets to see transfers
  await wait(TestConfig.walletSyncPeriodMs);
  
  // mine until outputs unlock
  if (!waitForUnlock) return;
  let miningStarted = false;
  while (!await hasUnspentOutputs(wallets, amt, numOutputs, waitForUnlock ? false : undefined)) {
    if (!miningStarted) {
      HavenoUtils.log(1, "Mining to fund outputs");
      await startMining();
      miningStarted = true;
    }
    await wait(5000);
  }
  if (miningStarted) await monerod.stopMining();
}

// convert monero-javascript BigInteger to typescript BigInt
function toBigInt(mjsBigInt: any) {
    return BigInt(mjsBigInt.toString())
}

async function wait(durationMs: number) {
  return new Promise(function(resolve) { setTimeout(resolve, durationMs); });
}

function getNotifications(notifications: NotificationMessage[], notificationType: NotificationMessage.NotificationType) {
  const filteredNotifications: NotificationMessage[] = [];
   for (const notification of notifications) {
    if (notification.getType() === notificationType) {
      filteredNotifications.push(notification);
     }
  }
  return filteredNotifications;
}

function getConnection(connections: UrlConnection[], url: string): UrlConnection | undefined {
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

function getCryptoAddress(currencyCode: string): string | undefined {
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

async function postOffer(maker: HavenoClient, config?: PostOfferConfig) {
  
  // assign default options
  config = Object.assign({}, TestConfig.postOffer, config);
  
  // wait for unlocked balance
  if (config.awaitUnlockedBalance) await waitForUnlockedBalance(config.amount! * BigInt("2"), maker);
  
  // create payment account if not given
  if (!config.paymentAccountId) config.paymentAccountId = (await createPaymentAccount(maker, config.assetCode!)).getId();
  
  // get unlocked balance before reserving offer
  const unlockedBalanceBefore = BigInt((await maker.getBalances()).getUnlockedBalance());
  
  // post offer
  const offer: OfferInfo = await maker.postOffer(
        config.direction!,
        config.amount!,
        config.assetCode!,
        config.paymentAccountId!,
        config.buyerSecurityDeposit!,
        config.price,
        config.priceMargin,
        config.triggerPrice,
        config.minAmount);
  testOffer(offer, config);
  
  // offer is included in my offers only
  if (!getOffer(await maker.getMyOffers(config.assetCode!, config.direction), offer.getId())) {
    await wait(10000);
    if (!getOffer(await maker.getMyOffers(config.assetCode!, config.direction), offer.getId())) throw new Error("Offer " + offer.getId() + " was not found in my offers");
  }
  if (getOffer(await maker.getOffers(config.assetCode!, config.direction), offer.getId())) throw new Error("My offer " + offer.getId() + " should not appear in available offers");
  
  // unlocked balance has decreased
  const unlockedBalanceAfter = BigInt((await maker.getBalances()).getUnlockedBalance());
  if (offer.getState() === "SCHEDULED") {
    if (unlockedBalanceAfter !== unlockedBalanceBefore) throw new Error("Unlocked balance should not change for scheduled offer");
  } else if (offer.getState() === "AVAILABLE") {
    if (unlockedBalanceAfter === unlockedBalanceBefore) throw new Error("Unlocked balance did not change after posting offer");
  } else {
    throw new Error("Unexpected offer state after posting: " + offer.getState());
  }
  
  return offer;
}

function getOffer(offers: OfferInfo[], id: string): OfferInfo | undefined {
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

function testOffer(offer: OfferInfo, config?: any) {
  expect(offer.getId().length).toBeGreaterThan(0);
  if (config) {
    expect(HavenoUtils.centinerosToAtomicUnits(offer.getAmount())).toEqual(config.amount); // TODO (woodser): use atomic units in offer instead of centineros?
    expect(offer.getBuyerSecurityDeposit() / offer.getAmount()).toEqual(config.buyerSecurityDeposit);
    expect(offer.getSellerSecurityDeposit() / offer.getAmount()).toEqual(config.buyerSecurityDeposit); // TODO: use same config.securityDeposit for buyer and seller? 
  }
  // TODO: test rest of offer
}

/**
 * Tests trade chat functionality. Must be called during an open trade.
 */
async function testTradeChat(tradeId: string, alice: HavenoClient, bob: HavenoClient) {
  HavenoUtils.log(1, "Testing trade chat");

  // invalid trade should throw error
  try {
    await alice.getChatMessages("invalid");
    throw new Error("get chat messages with invalid id should fail");
  } catch (err: any) {
    assert.equal(err.message, "trade with id 'invalid' not found");
  }

  // trade chat should be in initial state
  let messages = await alice.getChatMessages(tradeId);
  assert(messages.length === 0);
  messages = await bob.getChatMessages(tradeId);
  assert(messages.length === 0);

  // add notification handlers and send some messages
  const aliceNotifications: NotificationMessage[] = [];
  const bobNotifications: NotificationMessage[] = [];
  await alice.addNotificationListener(notification => { aliceNotifications.push(notification); });
  await bob.addNotificationListener(notification => { bobNotifications.push(notification); });

  // send simple conversation and verify the list of messages
  const aliceMsg = "Hi I'm Alice";
  await alice.sendChatMessage(tradeId, aliceMsg);
  await wait(TestConfig.maxTimePeerNoticeMs);
  messages = await bob.getChatMessages(tradeId);
  expect(messages.length).toEqual(2);
  expect(messages[0].getIsSystemMessage()).toEqual(true); // first message is system
  expect(messages[1].getMessage()).toEqual(aliceMsg);

  const bobMsg = "Hello I'm Bob";
  await bob.sendChatMessage(tradeId, bobMsg);
  await wait(TestConfig.maxTimePeerNoticeMs);
  messages = await alice.getChatMessages(tradeId);
  expect(messages.length).toEqual(3);
  expect(messages[0].getIsSystemMessage()).toEqual(true);
  expect(messages[1].getMessage()).toEqual(aliceMsg);
  expect(messages[2].getMessage()).toEqual(bobMsg);

  // verify notifications
  let chatNotifications = getNotifications(aliceNotifications, NotificationMessage.NotificationType.CHAT_MESSAGE);
  expect(chatNotifications.length).toBe(1);
  expect(chatNotifications[0].getChatMessage()?.getMessage()).toEqual(bobMsg);
  chatNotifications = getNotifications(bobNotifications, NotificationMessage.NotificationType.CHAT_MESSAGE);
  expect(chatNotifications.length).toBe(1);
  expect(chatNotifications[0].getChatMessage()?.getMessage()).toEqual(aliceMsg);

  // additional msgs
  const msgs = ["", "  ", "<script>alert('test');</script>", "さようなら"];
  for(const msg of msgs) {
    await alice.sendChatMessage(tradeId, msg);
    await wait(1000); // the async operation can result in out of order messages
  }
  await wait(TestConfig.maxTimePeerNoticeMs);
  messages = await bob.getChatMessages(tradeId);
  let offset = 3; // 3 existing messages
  expect(messages.length).toEqual(offset + msgs.length);
  expect(messages[0].getIsSystemMessage()).toEqual(true);
  expect(messages[1].getMessage()).toEqual(aliceMsg);
  expect(messages[2].getMessage()).toEqual(bobMsg);
  for (let i = 0; i < msgs.length; i++) {
    expect(messages[i + offset].getMessage()).toEqual(msgs[i]);
  }

  chatNotifications = getNotifications(bobNotifications, NotificationMessage.NotificationType.CHAT_MESSAGE);
  offset = 1; // 1 existing notification
  expect(chatNotifications.length).toBe(offset + msgs.length);
  expect(chatNotifications[0].getChatMessage()?.getMessage()).toEqual(aliceMsg);
  for (let i = 0; i < msgs.length; i++) {
    expect(chatNotifications[i + offset].getChatMessage()?.getMessage()).toEqual(msgs[i]);
  }
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
      return field.getSupportedCountriesList().length ? field.getSupportedCountriesList().at(0).getCode() : "FR";
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
      return "Alice Doe";
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
    case PaymentAccountFormField.FieldId.STATE: {
      const country = HavenoUtils.getFormValue(PaymentAccountFormField.FieldId.COUNTRY, form);
      return GenUtils.arrayContains(field.getRequiredForCountriesList(), country) ? "My state" : "";
    }
    case PaymentAccountFormField.FieldId.TRADE_CURRENCIES:
      return field.getSupportedCurrenciesList().map(currency => currency.getCode()).join(',');
    case PaymentAccountFormField.FieldId.USER_NAME:
      return "user123";
    case PaymentAccountFormField.FieldId.VIRTUAL_PAYMENT_ADDRESS:
      throw new Error("Not implemented");
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
      const country = HavenoUtils.getFormValue(PaymentAccountFormField.FieldId.COUNTRY, form);
      return GenUtils.arrayContains(field.getRequiredForCountriesList(), country) ? "" : "My state";
    }
    case PaymentAccountFormField.FieldId.TRADE_CURRENCIES:
      return "abc,def";
    case PaymentAccountFormField.FieldId.USER_NAME:
      return "A";
    case PaymentAccountFormField.FieldId.VIRTUAL_PAYMENT_ADDRESS:
      throw new Error("Not implemented");
    default:
      throw new Error("Unhandled form field: " + fieldId);
  }
}

function testFiatAccount(account: PaymentAccount, form: PaymentAccountForm) {
    expect(account.getAccountName()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.ACCOUNT_NAME).getValue()); // TODO: using number as payment method, account payload's account name = user name
    const isCountryBased = account.getPaymentAccountPayload().getCountryBasedPaymentAccountPayload() !== undefined;
    if (isCountryBased) expect(account.getPaymentAccountPayload().getCountryBasedPaymentAccountPayload()!.getCountryCode()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.COUNTRY).getValue());
    switch (form.getId()) {
      case PaymentAccountForm.FormId.REVOLUT: 
        expect(account.getPaymentAccountPayload().getRevolutAccountPayload().getUserName()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.USER_NAME).getValue());
        expect(account.getTradeCurrenciesList().map(currency => currency.getCode()).join(",")).toEqual(getFormField(form, PaymentAccountFormField.FieldId.TRADE_CURRENCIES).getValue());
        break;
      case PaymentAccountForm.FormId.SEPA:
        expect(account.getPaymentAccountPayload().getCountryBasedPaymentAccountPayload()!.getSepaAccountPayload().getHolderName()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.HOLDER_NAME).getValue());
        //expect(account.getPaymentAccountPayload().getCountryBasedPaymentAccountPayload()!.getSepaAccountPayload().getEmail()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.EMAIL).getValue()); // TODO: if this is deprecated, remove from sepa model
        expect(account.getPaymentAccountPayload().getCountryBasedPaymentAccountPayload()!.getSepaAccountPayload().getIban()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.IBAN).getValue());
        expect(account.getPaymentAccountPayload().getCountryBasedPaymentAccountPayload()!.getSepaAccountPayload().getBic()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.BIC).getValue());
        expect(account.getPaymentAccountPayload().getCountryBasedPaymentAccountPayload()!.getAcceptedCountryCodesList().join(",")).toEqual(getFormField(form, PaymentAccountFormField.FieldId.ACCEPTED_COUNTRY_CODES).getValue());
        break;
      case PaymentAccountForm.FormId.SEPA_INSTANT:
        expect(account.getPaymentAccountPayload().getCountryBasedPaymentAccountPayload()!.getSepaInstantAccountPayload().getHolderName()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.HOLDER_NAME).getValue());
        expect(account.getPaymentAccountPayload().getCountryBasedPaymentAccountPayload()!.getSepaInstantAccountPayload().getIban()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.IBAN).getValue());
        expect(account.getPaymentAccountPayload().getCountryBasedPaymentAccountPayload()!.getSepaInstantAccountPayload().getBic()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.BIC).getValue());
        expect(account.getPaymentAccountPayload().getCountryBasedPaymentAccountPayload()!.getAcceptedCountryCodesList().join(",")).toEqual(getFormField(form, PaymentAccountFormField.FieldId.ACCEPTED_COUNTRY_CODES).getValue());
        break;
      case PaymentAccountForm.FormId.TRANSFERWISE:
        expect(account.getPaymentAccountPayload().getTransferwiseAccountPayload().getEmail()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.EMAIL).getValue());
        break;
      case PaymentAccountForm.FormId.CLEAR_X_CHANGE:
        expect(account.getPaymentAccountPayload().getClearXchangeAccountPayload().getHolderName()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.HOLDER_NAME).getValue());
        expect(account.getPaymentAccountPayload().getClearXchangeAccountPayload().getEmailOrMobileNr()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.EMAIL_OR_MOBILE_NR).getValue());
        break;
      case PaymentAccountForm.FormId.SWIFT:
        expect(account.getPaymentAccountPayload().getSwiftAccountPayload().getBankSwiftCode()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.BANK_SWIFT_CODE).getValue());
        expect(account.getPaymentAccountPayload().getSwiftAccountPayload().getBankCountryCode()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.BANK_COUNTRY_CODE).getValue());
        expect(account.getPaymentAccountPayload().getSwiftAccountPayload().getBankName()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.BANK_NAME).getValue());
        expect(account.getPaymentAccountPayload().getSwiftAccountPayload().getBankBranch()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.BANK_BRANCH).getValue());
        expect(account.getPaymentAccountPayload().getSwiftAccountPayload().getBankAddress()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.BANK_ADDRESS).getValue());
        expect(account.getPaymentAccountPayload().getSwiftAccountPayload().getIntermediarySwiftCode()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.INTERMEDIARY_SWIFT_CODE).getValue());
        expect(account.getPaymentAccountPayload().getSwiftAccountPayload().getIntermediaryCountryCode()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.INTERMEDIARY_COUNTRY_CODE).getValue());
        expect(account.getPaymentAccountPayload().getSwiftAccountPayload().getIntermediaryName()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.INTERMEDIARY_NAME).getValue());
        expect(account.getPaymentAccountPayload().getSwiftAccountPayload().getIntermediaryBranch()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.INTERMEDIARY_BRANCH).getValue());
        expect(account.getPaymentAccountPayload().getSwiftAccountPayload().getIntermediaryAddress()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.INTERMEDIARY_ADDRESS).getValue());
        expect(account.getPaymentAccountPayload().getSwiftAccountPayload().getBeneficiaryName()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.BENEFICIARY_NAME).getValue());
        expect(account.getPaymentAccountPayload().getSwiftAccountPayload().getBeneficiaryAccountNr()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.BENEFICIARY_ACCOUNT_NR).getValue());
        expect(account.getPaymentAccountPayload().getSwiftAccountPayload().getBeneficiaryAddress()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.BENEFICIARY_ADDRESS).getValue());
        expect(account.getPaymentAccountPayload().getSwiftAccountPayload().getBeneficiaryCity()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.BENEFICIARY_CITY).getValue());
        expect(account.getPaymentAccountPayload().getSwiftAccountPayload().getBeneficiaryPhone()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.BENEFICIARY_PHONE).getValue());
        expect(account.getPaymentAccountPayload().getSwiftAccountPayload().getSpecialInstructions()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.SPECIAL_INSTRUCTIONS).getValue());
        break;
      case PaymentAccountForm.FormId.F2F:
        expect(account.getPaymentAccountPayload().getCountryBasedPaymentAccountPayload()!.getF2fAccountPayload().getCity()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.CITY).getValue());
        expect(account.getPaymentAccountPayload().getCountryBasedPaymentAccountPayload()!.getF2fAccountPayload().getContact()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.CONTACT).getValue());
        expect(account.getPaymentAccountPayload().getCountryBasedPaymentAccountPayload()!.getF2fAccountPayload().getExtraInfo()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.EXTRA_INFO).getValue());
        break;
      case PaymentAccountForm.FormId.STRIKE:
        expect(account.getPaymentAccountPayload().getCountryBasedPaymentAccountPayload()!.getStrikeAccountPayload().getHolderName()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.HOLDER_NAME).getValue());
        break;
      case PaymentAccountForm.FormId.MONEY_GRAM:
        expect(account.getPaymentAccountPayload().getMoneyGramAccountPayload().getCountryCode()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.COUNTRY).getValue()); // TODO: ok to not be CountryBasedPaymentAccountPayload?
        expect(account.getPaymentAccountPayload().getMoneyGramAccountPayload().getState()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.STATE).getValue());
        expect(account.getPaymentAccountPayload().getMoneyGramAccountPayload().getHolderName()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.HOLDER_NAME).getValue());
        expect(account.getPaymentAccountPayload().getMoneyGramAccountPayload().getEmail()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.EMAIL).getValue());
        expect(account.getTradeCurrenciesList().map(currency => currency.getCode()).join(",")).toEqual(getFormField(form, PaymentAccountFormField.FieldId.TRADE_CURRENCIES).getValue());
        break;
      case PaymentAccountForm.FormId.FASTER_PAYMENTS:
        expect(account.getPaymentAccountPayload().getFasterPaymentsAccountPayload().getHolderName()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.HOLDER_NAME).getValue());
        expect(account.getPaymentAccountPayload().getFasterPaymentsAccountPayload().getSortCode()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.SORT_CODE).getValue());
        expect(account.getPaymentAccountPayload().getFasterPaymentsAccountPayload().getAccountNr()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.ACCOUNT_NR).getValue());
        break;
      case PaymentAccountForm.FormId.UPHOLD:
        expect(account.getPaymentAccountPayload().getUpholdAccountPayload().getAccountOwner()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.ACCOUNT_OWNER).getValue());
        expect(account.getPaymentAccountPayload().getUpholdAccountPayload().getAccountId()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.ACCOUNT_ID).getValue());
        break;
      case PaymentAccountForm.FormId.PAXUM:
        expect(account.getPaymentAccountPayload().getPaxumAccountPayload().getEmail()).toEqual(getFormField(form, PaymentAccountFormField.FieldId.EMAIL).getValue());
        expect(account.getTradeCurrenciesList().map(currency => currency.getCode()).join(",")).toEqual(getFormField(form, PaymentAccountFormField.FieldId.TRADE_CURRENCIES).getValue());
        break;
      default:
        throw new Error("Unhandled payment method type: " + form.getId());
    }
}