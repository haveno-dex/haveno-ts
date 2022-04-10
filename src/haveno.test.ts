// --------------------------------- IMPORTS ----------------------------------

// import haveno types
import {HavenoClient} from "./haveno";
import {HavenoUtils} from "./utils/HavenoUtils";
import * as grpcWeb from 'grpc-web';
import {MarketPriceInfo, NotificationMessage, OfferInfo, TradeInfo, UrlConnection, XmrBalanceInfo} from './protobuf/grpc_pb'; // TODO (woodser): better names; haveno_grpc_pb, haveno_pb
import {Attachment, DisputeResult, PaymentMethod, PaymentAccount, MoneroNodeSettings} from './protobuf/pb_pb';
import {XmrDestination, XmrTx, XmrIncomingTransfer, XmrOutgoingTransfer} from './protobuf/grpc_pb';
import AuthenticationStatus = UrlConnection.AuthenticationStatus;
import OnlineStatus = UrlConnection.OnlineStatus;

// import monero-javascript
const monerojs = require("monero-javascript"); // TODO (woodser): support typescript and `npm install @types/monero-javascript` in monero-javascript
const GenUtils = monerojs.GenUtils;
const BigInteger = monerojs.BigInteger;
const MoneroNetworkType = monerojs.MoneroNetworkType;
const MoneroTxConfig = monerojs.MoneroTxConfig;
const MoneroDestination = monerojs.MoneroDestination;
const MoneroUtils = monerojs.MoneroUtils;
const TaskLooper = monerojs.TaskLooper;

// other required imports
const fs = require('fs');
const net = require('net');
const assert = require("assert");
const console = require('console'); // import console because jest swallows messages in real time

// ------------------------------ TEST CONFIG ---------------------------------

const TestConfig = {
    logLevel: 0,
    moneroBinsDir: "../haveno/.localnet",
    testDataDir: "./testdata",
    networkType: monerojs.MoneroNetworkType.STAGENET,
    haveno: {
        path: "../haveno",
        version: "1.6.2"
    },
    monerod: {
        url: "http://localhost:38081",
        username: "superuser",
        password: "abctesting123"
    },
    monerod2: {
        url: "http://localhost:58081",
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
    defaultHavenod: {
        logProcessOutput: false, // log output for processes started by tests (except arbitrator, alice, and bob which are configured separately)
        apiPassword: "apitest",
        walletUsername: "haveno_user",
        walletDefaultPassword: "password", // only used if account password not set
        accountPasswordRequired: true,
        accountPassword: "abctesting789",
        autoLogin: true
    },
    startupHavenods: [{
            appName: "haveno-XMR_STAGENET_arbitrator",  // arbritrator
            logProcessOutput: false,
            url: "http://localhost:8079",
            accountPasswordRequired: false,
            accountPassword: "abctesting123",
        }, {
            appName: "haveno-XMR_STAGENET_alice",       // alice
            logProcessOutput: false,
            url: "http://localhost:8080",
            accountPasswordRequired: false,
            accountPassword: "abctesting456",
            walletUrl: "http://127.0.0.1:38091",
        }, {
            appName: "haveno-XMR_STAGENET_bob",         // bob
            logProcessOutput: false,
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
    devPrivilegePrivKey: "6ac43ea1df2a290c1c8391736aa42e4339c5cb4f110ff0257a13b63211977b7a", // from DEV_PRIVILEGE_PRIV_KEY
    tradeInitTimeout: 60000,
    timeout: 900000, // timeout in ms for all tests to complete (15 minutes)
    postOffer: { // TODO (woodser): use typed config
        direction: "buy",                  // buy or sell xmr
        amount: BigInt("200000000000"),    // amount of xmr to trade
        assetCode: "eth",                  // counter asset to trade
        price: undefined,                  // use market price if undefined // TODO: converted to long on backend
        paymentAccountId: undefined,
        priceMargin: 0.0,
        minAmount: BigInt("150000000000"), // TODO: disable by default
        buyerSecurityDeposit: 0.15,
        awaitUnlockedBalance: false,
        triggerPrice: undefined            // TODO: fails if there is a decimal, converted to long on backend
    }
};

interface TxContext {
    isCreatedTx: boolean;
}

// clients
let startupHavenods: HavenoClient[] = [];
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

jest.setTimeout(TestConfig.timeout);

beforeAll(async () => {
  
  // set log level for tests
  HavenoUtils.setLogLevel(TestConfig.logLevel);
  
  // start configured haveno daemons
  let promises = [];
  for (let config of TestConfig.startupHavenods) promises.push(initHaveno(config));
  for (let settledPromise of await Promise.allSettled(promises)) {
    if (settledPromise.status !== "fulfilled") throw new Error((settledPromise as PromiseRejectedResult).reason);
    startupHavenods.push((settledPromise as PromiseFulfilledResult<HavenoClient>).value);
  }
  
  // assign arbitrator alice, bob
  arbitrator = startupHavenods[0];
  alice = startupHavenods[1];
  bob = startupHavenods[2];
  
  // register arbitrator as dispute agents
  await arbitrator.registerDisputeAgent("mediator", TestConfig.devPrivilegePrivKey);
  await arbitrator.registerDisputeAgent("refundagent", TestConfig.devPrivilegePrivKey);

  // connect monero clients
  monerod = await monerojs.connectToDaemonRpc(TestConfig.monerod.url, TestConfig.monerod.username, TestConfig.monerod.password);
  aliceWallet = await monerojs.connectToWalletRpc(TestConfig.startupHavenods[1].walletUrl, TestConfig.defaultHavenod.walletUsername, TestConfig.startupHavenods[1].accountPasswordRequired ? TestConfig.startupHavenods[1].accountPassword : TestConfig.defaultHavenod.walletDefaultPassword);
  bobWallet = await monerojs.connectToWalletRpc(TestConfig.startupHavenods[2].walletUrl, TestConfig.defaultHavenod.walletUsername, TestConfig.startupHavenods[2].accountPasswordRequired ? TestConfig.startupHavenods[2].accountPassword : TestConfig.defaultHavenod.walletDefaultPassword);
  
  // initialize funding wallet
  await initFundingWallet();
});

beforeEach(async() => {
  HavenoUtils.log(0, "BEFORE TEST \"" + expect.getState().currentTestName + "\"");
});

afterAll(async () => {
  let promises = [];
  for (let havenod of startupHavenods) if (havenod.getProcess()) promises.push(releaseHavenoProcess(havenod));
  return Promise.all(promises);
});

// ----------------------------------- TESTS ----------------------------------

test("Can get the version", async () => {
  let version = await arbitrator.getVersion();
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
    let paymentAccount = await charlie.createCryptoPaymentAccount("My ETH account", TestConfig.cryptoAddresses[0].currencyCode, TestConfig.cryptoAddresses[0].address);
    
    // close account
    await charlie.closeAccount();
    assert(await charlie.accountExists());
    assert(!await charlie.isAccountOpen());
    await testAccountNotOpen(charlie);
    
    // open account with wrong password
    try {
        await charlie.openAccount("wrongPassword");
        throw new Error("Should have failed opening account with wrong password");
    } catch (err) {
        assert.equal(err.message, "Incorrect password");
    }
    
    // open account
    await charlie.openAccount(password);
    assert(await charlie.accountExists());
    assert(await charlie.isAccountOpen());
    
    // restart charlie
    let charlieConfig = {appName: charlie.getAppName(), autoLogin: false}
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
    let zipFile = TestConfig.testDataDir + "/backup.zip";
    let stream = fs.createWriteStream(zipFile);
    let size = await charlie.backupAccount(stream);
    stream.end();
    assert(size > 0);
    
    // delete account which shuts down server
    await charlie.deleteAccount();
    assert(!await charlie.isConnectedToDaemon());
    await releaseHavenoProcess(charlie);
    
    // restore account which shuts down server
    charlie = await initHaveno(charlieConfig);
    let zipBytes: Uint8Array = new Uint8Array(fs.readFileSync(zipFile));
    await charlie.restoreAccount(zipBytes);
    assert(!await charlie.isConnectedToDaemon());
    await releaseHavenoProcess(charlie);
    
    // open restored account
    charlie = await initHaveno(charlieConfig);
    assert(await charlie.accountExists());
    await charlie.openAccount(password);
    assert(await charlie.isAccountOpen());
    
    // check the persisted payment account
    let paymentAccount2 = await charlie.getPaymentAccount(paymentAccount.getId());
    testCryptoPaymentAccountsEqual(paymentAccount, paymentAccount2);
  } catch (err2) {
    console.log(err2);
    err = err2;
  }

  // stop processes
  if (charlie) await releaseHavenoProcess(charlie);
  // TODO: how to delete trader app folder at end of test?
  if (err) throw err;
  
  async function testAccountNotOpen(havenod: HavenoClient): Promise<void> { // TODO: generalize this?
    try { await havenod.getMoneroConnections(); throw new Error("Should have thrown"); }
    catch (err) { assert.equal(err.message, "Account not open"); }
    try { await havenod.getXmrTxs(); throw new Error("Should have thrown"); }
    catch (err) { assert.equal(err.message, "Account not open"); }
    try { await havenod.getBalances(); throw new Error("Should have thrown"); }
    catch (err) { assert.equal(err.message, "Account not open"); }
    try { await havenod.createCryptoPaymentAccount("My ETH account", TestConfig.cryptoAddresses[0].currencyCode, TestConfig.cryptoAddresses[0].address); throw new Error("Should have thrown"); }
    catch (err) { assert.equal(err.message, "Account not open"); }
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
    let monerodUrl1 = "http://127.0.0.1:38081"; // TODO: (woodser): move to config
    let monerodUrl2 = "http://haveno.exchange:38081";
    let connections: UrlConnection[] = await charlie.getMoneroConnections();
    testConnection(getConnection(connections, monerodUrl1)!, monerodUrl1, OnlineStatus.ONLINE, AuthenticationStatus.AUTHENTICATED, 1);
    testConnection(getConnection(connections, monerodUrl2)!, monerodUrl2, OnlineStatus.UNKNOWN, AuthenticationStatus.NO_AUTHENTICATION, 2);

    // test default connection
    let connection: UrlConnection | undefined = await charlie.getMoneroConnection();
    assert(await charlie.isConnectedToMonero());
    testConnection(connection!, monerodUrl1, OnlineStatus.ONLINE, AuthenticationStatus.AUTHENTICATED, 1);

    // add a new connection
    let fooBarUrl = "http://foo.bar";
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
    let cmd = [
      TestConfig.moneroBinsDir + "/monerod",
      "--" + monerojs.MoneroNetworkType.toString(TestConfig.networkType).toLowerCase(),
      "--no-igd",
      "--hide-my-port",
      "--data-dir",  TestConfig.moneroBinsDir + "/stagenet/testnode",
      "--p2p-bind-port", "58080",
      "--rpc-bind-port", "58081",
      "--rpc-login", "superuser:abctesting123",
      "--zmq-rpc-bind-port", "58082"
    ];
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
    let password = "newPassword";
    await charlie.changePassword("newPassword");

    // restart charlie
    let appName = charlie.getAppName();
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
    await wait(TestConfig.daemonPollPeriodMs);
    connection = await charlie.getMoneroConnection();
    testConnection(connection!, monerodUrl1, OnlineStatus.ONLINE, AuthenticationStatus.AUTHENTICATED, 1);

    // stop checking connection periodically
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
    for (let connection of connections) testConnection(connection!, connection.getUrl(), OnlineStatus.OFFLINE, AuthenticationStatus.NO_AUTHENTICATION);

    // set connection to previous url
    await charlie.setMoneroConnection(fooBarUrl);
    connection = await charlie.getMoneroConnection();
    testConnection(connection!, fooBarUrl, OnlineStatus.OFFLINE, AuthenticationStatus.NO_AUTHENTICATION, 0);

    // set connection to new url
    let fooBarUrl2 = "http://foo.bar.xyz";
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
  if (charlie) await releaseHavenoProcess(charlie);
  if (monerod2) await monerod2.stopProcess();
  // TODO: how to delete trader app folder at end of test?
  if (err) throw err;
});

test("Can start and stop a local Monero node", async() => {

  // expect error stopping local node
  try {    
    await alice.stopMoneroNode();
    HavenoUtils.log(1, "Running local Monero node stopped");
    await alice.stopMoneroNode(); // stop 2nd time to force error
    throw new Error("should have thrown");
  } catch (err) {
    if (err.message !== "Local Monero node is not running" &&
        err.message !== "Cannot stop local Monero node because we don't own its process") {
      throw new Error("Unexpected error: " + err.message);
    }
  }

  let isMoneroNodeRunning = await alice.isMoneroNodeRunning();
  if (isMoneroNodeRunning) {
    HavenoUtils.log(0, "Warning: local Monero node is already running, skipping start and stop local Monero node tests");

    // expect error due to existing running node
    let newSettings = new MoneroNodeSettings();
    try {
      await alice.startMoneroNode(newSettings);
      throw new Error("should have thrown");
    } catch (err) {
      if (err.message !== "Local Monero node already running") throw new Error("Unexpected error: " + err.message);
    }

  } else {

    // expect error when passing in bad arguments
    let badSettings = new MoneroNodeSettings();
    badSettings.setStartupFlagsList(["--invalid-flag"]);
    try {
      await alice.startMoneroNode(badSettings);
      throw new Error("should have thrown");
    } catch (err) {
      if (!err.message.startsWith("Failed to start monerod:")) throw new Error("Unexpected error: ");
    }

    // expect successful start with custom settings
    let connectionsBefore = await alice.getMoneroConnections();
    let settings: MoneroNodeSettings = new MoneroNodeSettings();
    let dataDir = TestConfig.moneroBinsDir + "/stagenet/node1";
    let logFile = dataDir + "/test.log";
    let p2pPort = 38080;
    let rpcPort = 38081;
    settings.setBlockchainPath(dataDir);
    settings.setStartupFlagsList(["--log-file", logFile, "--p2p-bind-port", p2pPort.toString(), "--rpc-bind-port", rpcPort.toString(), "--no-zmq"]);
    await alice.startMoneroNode(settings);
    isMoneroNodeRunning = await alice.isMoneroNodeRunning();
    assert(isMoneroNodeRunning);
    
    // expect settings are updated
    let settingsAfter = await alice.getMoneroNodeSettings();
    testMoneroNodeSettingsEqual(settings, settingsAfter!);

    // expect connections to be unmodified by local node
    let connectionsAfter = await alice.getMoneroConnections();
    assert(connectionsBefore.length === connectionsAfter.length);

    // expect connection to local monero node to succeed
    let rpcUrl = "http://127.0.0.1:" + rpcPort.toString();
    let daemon = await monerojs.connectToDaemonRpc(rpcUrl, "superuser", "abctesting123");
    let height = await daemon.getHeight();
    assert(height >= 0);

    // expect error due to existing running node
    let newSettings = new MoneroNodeSettings();
    try {
      await alice.startMoneroNode(newSettings);
      throw new Error("should have thrown");
    } catch (err) {
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
    } catch (err) {
      if (err.message !== "RequestError: Error: connect ECONNREFUSED 127.0.0.1:" + rpcPort.toString()) throw new Error("Unexpected error: " + err.message);
    }
  }
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
    let address = await alice.getNewDepositAddress();
    MoneroUtils.validateAddress(address, MoneroNetworkType.STAGNET);
  }
  
  // create withdraw tx
  let destination = new XmrDestination().setAddress(await alice.getNewDepositAddress()).setAmount("100000000000");
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

test("Can receive push notifications", async () => {

  // add notification listener
  let notifications: NotificationMessage[] = [];
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

test("Can get market prices", async () => {

  // get all market prices
  let prices: MarketPriceInfo[] = await alice.getPrices();
  expect(prices.length).toBeGreaterThan(1);
  for (let price of prices) {
    expect(price.getCurrencyCode().length).toBeGreaterThan(0);
    expect(price.getPrice()).toBeGreaterThanOrEqual(0);
  }
  
  // get market prices of primary assets
  for (let assetCode of TestConfig.assetCodes) {
    let price = await alice.getPrice(assetCode);
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
  await expect(async () => { await alice.getPrice("INVALID_CURRENCY") })
    .rejects
    .toThrow('Currency not found: INVALID_CURRENCY');
});

test("Can get market depth", async () => {
    let assetCode = "eth";
    
    // clear offers
    await clearOffers(alice, assetCode);
    await clearOffers(bob, assetCode);
    async function clearOffers(havenod: HavenoClient, assetCode: string) {
      for (let offer of await havenod.getMyOffers(assetCode)) {
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
    const priceDivisor = 100000000; // TODO: offer price = price * 100000000
    let buyOffers = (await alice.getOffers(assetCode, "buy")).concat(await alice.getMyOffers(assetCode, "buy")).sort(function(a, b) { return a.getPrice() - b.getPrice() });
    expect(marketDepth.getBuyPricesList()[0]).toEqual(1 / (buyOffers[0].getPrice() / priceDivisor)); // TODO: price when posting offer is reversed. this assumes crypto counter currency
    expect(marketDepth.getBuyPricesList()[1]).toEqual(1 / (buyOffers[1].getPrice() / priceDivisor));
    expect(marketDepth.getBuyPricesList()[2]).toEqual(1 / (buyOffers[2].getPrice() / priceDivisor));
    expect(marketDepth.getBuyDepthList()[0]).toEqual(0.15);
    expect(marketDepth.getBuyDepthList()[1]).toEqual(0.30);
    expect(marketDepth.getBuyDepthList()[2]).toEqual(0.65);
    
    // test sell prices and depths
    let sellOffers = (await alice.getOffers(assetCode, "sell")).concat(await alice.getMyOffers(assetCode, "sell")).sort(function(a, b) { return b.getPrice() - a.getPrice() });
    expect(marketDepth.getSellPricesList()[0]).toEqual(1 / (sellOffers[0].getPrice() / priceDivisor));
    expect(marketDepth.getSellPricesList()[1]).toEqual(1 / (sellOffers[1].getPrice() / priceDivisor));
    expect(marketDepth.getSellPricesList()[2]).toEqual(1 / (sellOffers[2].getPrice() / priceDivisor));
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

test("Can register as dispute agents", async () => {
  await arbitrator.registerDisputeAgent("mediator", TestConfig.devPrivilegePrivKey);    // TODO: bisq mediator = haveno arbitrator
  await arbitrator.registerDisputeAgent("refundagent", TestConfig.devPrivilegePrivKey); // TODO: no refund agent in haveno
  
  // test bad dispute agent type
  try {
    await arbitrator.registerDisputeAgent("unsupported type", TestConfig.devPrivilegePrivKey);
    throw new Error("should have thrown error registering bad type");
  } catch (err) {
    if (err.message !== "unknown dispute agent type 'unsupported type'") throw new Error("Unexpected error: " + err.message);
  }
  
  // test bad key
  try {
    await arbitrator.registerDisputeAgent("mediator", "bad key");
    throw new Error("should have thrown error registering bad key");
  } catch (err) {
    if (err.message !== "invalid registration key") throw new Error("Unexpected error: " + err.message);
  }
});

test("Can get offers", async () => {
  for (let assetCode of TestConfig.assetCodes) {
    let offers: OfferInfo[] = await alice.getOffers(assetCode);
    for (let offer of offers)  testOffer(offer);
  }
});

test("Can get my offers", async () => {
  for (let assetCode of TestConfig.assetCodes) {
    let offers: OfferInfo[] = await alice.getMyOffers(assetCode);
    for (let offer of offers)  testOffer(offer);
  }
});

test("Can get payment methods", async () => {
  let paymentMethods: PaymentMethod[] = await alice.getPaymentMethods();
  expect(paymentMethods.length).toBeGreaterThan(0);
  for (let paymentMethod of paymentMethods) {
    expect(paymentMethod.getId().length).toBeGreaterThan(0);
    expect(BigInt(paymentMethod.getMaxTradeLimit())).toBeGreaterThan(BigInt(0));
    expect(BigInt(paymentMethod.getMaxTradePeriod())).toBeGreaterThan(BigInt(0));
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

test("Can create fiat payment accounts", async () => {
  
  // get payment account form
  const paymentMethodId = 'REVOLUT';
  let accountForm = await alice.getPaymentAccountForm(paymentMethodId);
  
  // edit form
  accountForm.accountName = "Revolut account " + GenUtils.getUUID();
  accountForm.userName = "user123";
  
  // create payment account
  let fiatAccount = await alice.createPaymentAccount(accountForm);
  expect(fiatAccount.getAccountName()).toEqual(accountForm.accountName);
  expect(fiatAccount.getTradeCurrenciesList().length).toBeGreaterThan(0);
  expect(fiatAccount.getPaymentAccountPayload()!.getPaymentMethodId()).toEqual(paymentMethodId);
  expect(fiatAccount.getPaymentAccountPayload()!.getRevolutAccountPayload()!.getAccountId()).toEqual(accountForm.userName);
  expect(fiatAccount.getPaymentAccountPayload()!.getRevolutAccountPayload()!.getUserName()).toEqual(accountForm.userName);
  
  // payment account added
  let found = false;
  for (let paymentAccount of await alice.getPaymentAccounts()) {
    if (paymentAccount.getId() === fiatAccount.getId()) {
        found = true;
        break;
    }
  }
  assert(found, "Payment account not found after adding");
});

test("Can create crypto payment accounts", async () => {
  
  // test each crypto
  for (let testAccount of TestConfig.cryptoAddresses) {
    
    // create payment account
    let name = testAccount.currencyCode + " " + testAccount.address.substr(0, 8) + "... " + GenUtils.getUUID();
    let paymentAccount: PaymentAccount = await alice.createCryptoPaymentAccount(name, testAccount.currencyCode, testAccount.address);
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

test("Can post and remove an offer", async () => {
  
  // wait for alice to have unlocked balance to post offer
  let tradeAmount: bigint = BigInt("250000000000");
  await waitForUnlockedBalance(tradeAmount * BigInt("2"), alice);
  
  // get unlocked balance before reserving funds for offer
  let unlockedBalanceBefore: bigint = BigInt((await alice.getBalances()).getUnlockedBalance());

  // post offer
  let assetCode = getRandomAssetCode();
  let offer: OfferInfo = await postOffer(alice, {assetCode: assetCode});
  if (isCrypto(assetCode)) assert.equal(offer.getBaseCurrencyCode(), assetCode); // TODO: crypto base/counter is inverted
  else assert.equal(offer.getCounterCurrencyCode(),assetCode);
  assert.equal(offer.getState(), "AVAILABLE");
  
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

test("Can prepare for trading", async () => {

  // create ethereum and revolut payment accounts
  await createPaymentAccount(alice, "eth");
  await createRevolutPaymentAccount(alice);
  await createPaymentAccount(bob, "eth");
  await createRevolutPaymentAccount(bob);

  // fund alice and bob with at least 5 outputs of 0.5 XMR
  let numOutputs = 5;
  let outputAmt = BigInt("500000000000");
  let walletsToFund = [];
  if (!await hasUnlockedOutputs(aliceWallet, outputAmt, numOutputs)) walletsToFund.push(aliceWallet);
  if (!await hasUnlockedOutputs(bobWallet, outputAmt, numOutputs)) walletsToFund.push(bobWallet);
  await fundWallets(walletsToFund, outputAmt, numOutputs);
});

// TODO (woodser): test grpc notifications
test("Can complete a trade", async () => {
  
  // wait for alice and bob to have unlocked balance for trade
  let tradeAmount: bigint = BigInt("250000000000");
  await waitForUnlockedBalance(tradeAmount * BigInt("2"), alice, bob);
  let aliceBalancesBefore = await alice.getBalances();
  let bobBalancesBefore: XmrBalanceInfo = await bob.getBalances();
  
  // register to receive notifications
  let aliceNotifications: NotificationMessage[] = [];
  let bobNotifications: NotificationMessage[] = [];
  await alice.addNotificationListener(notification => { aliceNotifications.push(notification); });
  await bob.addNotificationListener(notification => { bobNotifications.push(notification); });

  // alice posts offer
  let assetCode = getRandomAssetCode();
  let direction = "buy";
  HavenoUtils.log(1, "Alice posting offer to " + direction + " XMR for " + assetCode);
  let offer: OfferInfo = await postOffer(alice, {direction: direction, amount: tradeAmount, assetCode: assetCode});
  expect(offer.getState()).toEqual("AVAILABLE");
  HavenoUtils.log(1, "Alice done posting offer " + offer.getId());
  
  // TODO (woodser): test error message taking offer before posted
  
  // bob sees offer
  await wait(TestConfig.walletSyncPeriodMs * 2);
  let offerBob = getOffer(await bob.getOffers(assetCode, direction), offer.getId());
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
    assert.equal((await alice.getTrades()).length, aliceTradesBefore.length, "alice should not have new trades");
    assert.equal((await bob.getTrades()).length, bobTradesBefore.length, "bob should not have new trades"); // TODO (woodser): also test balance unreserved
  }
  
  // bob creates random payment account
  let paymentAccount = await createPaymentAccount(bob, assetCode);
  
  // bob takes offer
  let startTime = Date.now();
  HavenoUtils.log(1, "Bob taking offer");
  let trade: TradeInfo = await bob.takeOffer(offer.getId(), paymentAccount.getId());
  expect(trade.getPhase()).toEqual("DEPOSIT_PUBLISHED");
  HavenoUtils.log(1, "Bob done taking offer in " + (Date.now() - startTime) + " ms");
  
  // alice is notified that offer is taken
  await wait(1000);
  let tradeNotifications = getNotifications(aliceNotifications, NotificationMessage.NotificationType.TRADE_UPDATE);
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
  let aliceBalancesAfter = await alice.getBalances();
  bobBalancesAfter = await bob.getBalances();
  let aliceFee = BigInt(aliceBalancesBefore.getBalance()) + tradeAmount - BigInt(aliceBalancesAfter.getBalance());
  let bobFee = BigInt(bobBalancesBefore.getBalance()) - tradeAmount - BigInt(bobBalancesAfter.getBalance());
  expect(aliceFee).toBeLessThanOrEqual(TestConfig.maxFee);
  expect(aliceFee).toBeGreaterThan(BigInt("0"));
  expect(bobFee).toBeLessThanOrEqual(TestConfig.maxFee);
  expect(bobFee).toBeGreaterThan(BigInt("0"));
});

test("Can resolve disputes", async () => {

  // wait for alice and bob to have unlocked balance for trade
  let tradeAmount: bigint = BigInt("250000000000");
  await fundWallets([aliceWallet, bobWallet], tradeAmount * BigInt("6"), 4);
  
  // register to receive notifications
  let aliceNotifications: NotificationMessage[] = [];
  let bobNotifications: NotificationMessage[] = [];
  let arbitratorNotifications: NotificationMessage[] = [];
  await alice.addNotificationListener(notification => { HavenoUtils.log(3, "Alice received notification " + notification.getType() + " " + (notification.getChatMessage() ? notification.getChatMessage()?.getMessage() : "")); aliceNotifications.push(notification); });
  await bob.addNotificationListener(notification => { HavenoUtils.log(3, "Bob received notification " + notification.getType() + " " + (notification.getChatMessage() ? notification.getChatMessage()?.getMessage() : "")); bobNotifications.push(notification); });
  await arbitrator.addNotificationListener(notification => { HavenoUtils.log(3, "Arbitrator received notification " + notification.getType() + " " + (notification.getChatMessage() ? notification.getChatMessage()?.getMessage() : "")); arbitratorNotifications.push(notification); });
  
  // TODO: notification collector with logging
  
  // alice posts offers to buy xmr
  let numOffers = 4;
  HavenoUtils.log(1, "Alice posting offers");
  let direction = "buy";
  let offers = [];
  for (let i = 0; i < numOffers; i++) offers.push(postOffer(alice, {direction: direction, amount: tradeAmount, awaitUnlockedBalance: true}));
  offers = await Promise.all(offers);
  HavenoUtils.log(1, "Alice done posting offers");
  for (let i = 0; i < offers.length; i++) HavenoUtils.log(2, "Offer " + i +  ": " + (await alice.getMyOffer(offers[i].getId())).getId());
  
  // wait for offers to post
  await wait(TestConfig.walletSyncPeriodMs * 2);
  
  // bob takes offers
  let paymentAccount = await createPaymentAccount(bob, "eth");
  HavenoUtils.log(1, "Bob taking offers");
  let trades = [];
  for (let i = 0; i < numOffers; i++) trades.push(bob.takeOffer(offers[i].getId(), paymentAccount.getId()));
  trades = await Promise.all(trades);
  HavenoUtils.log(1, "Bob done taking offers");
  
  // test trades
  let depositTxIds: string[] = [];
  for (let trade of trades) {
    if (trade.getPhase() !== "DEPOSIT_PUBLISHED") throw new Error("Trade phase expected to be DEPOSIT_PUBLISHED but was " + trade.getPhase() + " for trade " + trade.getTradeId());
    expect(trade.getPhase()).toEqual("DEPOSIT_PUBLISHED");
    let fetchedTrade: TradeInfo = await bob.getTrade(trade.getTradeId());
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
  let bobDispute = await bob.getDispute(trades[0].getTradeId());
  expect(bobDispute.getTradeId()).toEqual(trades[0].getTradeId());
  expect(bobDispute.getIsOpener()).toBe(true);
  expect(bobDispute.getDisputeOpenerIsBuyer()).toBe(false);
  
  // get non-existing dispute should fail
  try {
    await bob.getDispute("invalid");
    throw new Error("get dispute with invalid id should fail");
  } catch (err) {
    assert.equal(err.message, "dispute for trade id 'invalid' not found");
  }
  
  // alice sees the dispute
  await wait(TestConfig.maxTimePeerNoticeMs + TestConfig.maxWalletStartupMs);
  let aliceDispute = await alice.getDispute(trades[0].getTradeId());
  expect(aliceDispute.getTradeId()).toEqual(trades[0].getTradeId());
  expect(aliceDispute.getIsOpener()).toBe(false);
  
  // arbitrator sees both disputes
  let disputes = await arbitrator.getDisputes();
  expect(disputes.length).toBeGreaterThanOrEqual(2);
  let arbAliceDispute = disputes.find(d => d.getId() === aliceDispute.getId());
  assert(arbAliceDispute);
  let arbBobDispute = disputes.find(d => d.getId() === bobDispute.getId());
  assert(arbBobDispute);
  
  // arbitrator sends chat messages to alice and bob
  HavenoUtils.log(1, "Testing chat messages");
  await arbitrator.sendDisputeChatMessage(arbBobDispute!.getId(), "Arbitrator chat message to Bob", []);
  await arbitrator.sendDisputeChatMessage(arbAliceDispute!.getId(), "Arbitrator chat message to Alice", []);
  
  // alice and bob reply to arbitrator chat messages
  await wait(TestConfig.maxTimePeerNoticeMs); // wait for arbitrator's message to arrive
  let attachment = new Attachment();
  let bytes = new Uint8Array(Buffer.from("Proof Bob was scammed", "utf8"));
  attachment.setBytes(bytes);
  attachment.setFileName("proof.txt");
  let attachment2 = new Attachment();
  let bytes2 = new Uint8Array(Buffer.from("picture bytes", "utf8"));
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
  } catch (err) {
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
    let paymentAccount = await createCryptoPaymentAccount(charlie);
    
    // charlie cannot make offer with insufficient funds
    try {
      await postOffer(charlie, {paymentAccountId: paymentAccount.getId()});
      throw new Error("Should have failed making offer with insufficient funds")
    } catch (err) {
      let errTyped = err as grpcWeb.RpcError;
      assert.equal(errTyped.code, 2);
      assert(err.message.includes("not enough money"), "Unexpected error: " + err.message);
    }
    
    // alice posts offer
    let offers: OfferInfo[] = await alice.getMyOffers("ETH");
    let offer: OfferInfo;
    if (offers.length) offer = offers[0];
    else {
      let tradeAmount: bigint = BigInt("250000000000");
      await waitForUnlockedBalance(tradeAmount * BigInt("2"), alice);
      offer = await postOffer(alice, {amount: tradeAmount});
      assert.equal(offer.getState(), "AVAILABLE");
      await wait(TestConfig.walletSyncPeriodMs * 2);
    }
    
    // charlie cannot take offer with insufficient funds
    try {
      await charlie.takeOffer(offer.getId(), paymentAccount.getId());
      throw new Error("Should have failed taking offer with insufficient funds")
    } catch (err) {
      let errTyped = err as grpcWeb.RpcError;
      assert(errTyped.message.includes("not enough money"), "Unexpected error: " + errTyped.message);
      assert.equal(errTyped.code, 2);
    }
    
    // charlie does not have trade
    try {
      await charlie.getTrade(offer.getId());
    } catch (err) {
      let errTyped = err as grpcWeb.RpcError;
      assert.equal(errTyped.code, 3);
      assert(errTyped.message.includes("trade with id '" + offer.getId() + "' not found"));
    }
  } catch (err2) {
    err = err2;
  }
  
  // stop charlie
  if (charlie) await releaseHavenoProcess(charlie);
  // TODO: how to delete trader app folder at end of test?
  if (err) throw err;
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
    let assetCode = getRandomAssetCode();
    let offer: OfferInfo = await postOffer(alice, {assetCode: assetCode, amount: tradeAmount});
    
    // get key images reserved by offer
    let reservedKeyImages = [];
    let frozenKeyImagesAfter = [];
    for (let frozenOutput of await aliceWallet.getOutputs({isFrozen: true})) frozenKeyImagesAfter.push(frozenOutput.getKeyImage().getHex());
    for (let frozenKeyImageAfter of frozenKeyImagesAfter) {
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
  let traders: HavenoClient[] = [];
  let err: any;
  try {
    
    // start and fund 3 trader processes
    HavenoUtils.log(1, "Starting trader processes");
    traders = await initHavenos(3);
    HavenoUtils.log(1, "Funding traders");
    let tradeAmount: bigint = BigInt("250000000000");
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
        let traderWallet = await monerojs.connectToWalletRpc("http://localhost:" + traders[1].getWalletRpcPort(), TestConfig.defaultHavenod.walletUsername, TestConfig.defaultHavenod.accountPassword);
        for (let frozenOutput of await traderWallet.getOutputs({isFrozen: true})) await traderWallet.thawOutput(frozenOutput.getKeyImage().getHex());
        HavenoUtils.log(1, "Sweeping trade funds");
        await traderWallet.sweepUnlocked({address: await traderWallet.getPrimaryAddress(), relay: true});
      } catch (err) {
        console.log("Caught error sweeping funds!");
        console.log(err);
      }
    });
    
    // trader 1 tries to take offer
    try {
      HavenoUtils.log(1, "Trader 1 taking offer " + offer.getId());
      await traders[1].takeOffer(offer.getId(), paymentAccount.getId());
      throw new Error("Should have failed taking offer because taker trade funds spent")
    } catch (err) {
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
        let traderWallet = await monerojs.connectToWalletRpc("http://localhost:" + traders[0].getWalletRpcPort(), TestConfig.defaultHavenod.walletUsername, TestConfig.defaultHavenod.accountPassword);
        for (let frozenOutput of await traderWallet.getOutputs({isFrozen: true})) await traderWallet.thawOutput(frozenOutput.getKeyImage().getHex());
        HavenoUtils.log(1, "Sweeping offer funds");
        await traderWallet.sweepUnlocked({address: await traderWallet.getPrimaryAddress(), relay: true});
      } catch (err) {
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
    } catch (err) {
      assert(err.message.includes("not enough unlocked money") || err.message.includes("timeout reached. protocol did not complete"), "Unexpected error: " + err.message);
    }
    
    // trader 2's balance is unreserved
    let trader2Balances = await traders[2].getBalances();
    expect(BigInt(trader2Balances.getReservedTradeBalance())).toEqual(BigInt("0"));
    expect(BigInt(trader2Balances.getUnlockedBalance())).toBeGreaterThan(BigInt("0"));
  } catch (err2) {
    err = err2;
  }
  
  // stop traders
  for (let trader of traders) await releaseHavenoProcess(trader);
  if (err) throw err;
});

// ------------------------------- HELPERS ------------------------------------

async function initHavenos(numDaemons: number, config?: any) {
  let traderPromises: Promise<HavenoClient>[] = [];
  for (let i = 0; i < numDaemons; i++) traderPromises.push(initHaveno(config));
  return Promise.all(traderPromises);
}

async function initHaveno(config?: any): Promise<HavenoClient> {
  config = Object.assign({}, TestConfig.defaultHavenod, config);
  if (!config.appName) config.appName = "haveno-XMR_STAGENET_instance_" + GenUtils.getUUID();
  
  // connect to existing server or start new process
  let havenod;
  try {
    
    // try to connect to existing server
    havenod = new HavenoClient(config.url, config.apiPassword);
    await havenod.getVersion();
  } catch (err) {
    
    // get port for haveno process
    let proxyPort = "";
    if (config.url) proxyPort = new URL(config.url).port
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
      let srv = net.createServer();
      srv.listen(0, function() {
        let port = srv.address().port;
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
async function releaseHavenoProcess(havenod: HavenoClient) {
  GenUtils.remove(HAVENO_PROCESSES, havenod);
  GenUtils.remove(HAVENO_PROCESS_PORTS, new URL(havenod.getUrl()).port); // TODO (woodser): standardize to url
  try {
    await havenod.shutdownServer();
  } catch (err) {
    assert.equal(err.message, OFFLINE_ERR_MSG);
  }
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

async function startMining() {
  try {
    await monerod.startMining(await fundingWallet.getPrimaryAddress(), 3);
  } catch (err) {
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
      if (this._wallet instanceof HavenoClient) return await this._wallet.getNewDepositAddress();
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
    if (depositNeeded > BigInt("0") && wallet._wallet !== fundingWallet) {
      for (let i = 0; i < 5; i++) {
        fundConfig.addDestination(await wallet.getDepositAddress(), depositNeeded * BigInt("2")); // make several deposits
      }
    }
  }
  if (fundConfig.getDestinations()) {
    await waitForUnlockedBalance(TestConfig.fundingWallet.minimumFunding, fundingWallet); // TODO (woodser): wait for enough to cover tx amount + fee
    try { await fundingWallet.createTx(fundConfig); }
    catch (err) { throw new Error("Error funding wallets: " + err.message); }
  }
  
  // done if all wallets have sufficient unlocked balance
  if (!miningNeeded) return;
  
  // wait for funds to unlock
  HavenoUtils.log(0, "Mining for unlocked balance of " + amount);
  await startMining();
  let promises: Promise<void>[] = [];
  for (let wallet of wallets) {
    promises.push(new Promise(async function(resolve) {
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
  HavenoUtils.log(0, "Funds unlocked, done mining");
};

async function waitForUnlockedTxs(...txHashes: string[]) {
  if (txHashes.length === 0) return;
  HavenoUtils.log(1, "Mining to unlock txs");
  await startMining();
  let promises: Promise<void>[] = [];
  for (let txHash of txHashes) {
    // eslint-disable-next-line no-loop-func
    promises.push(new Promise(async function(resolve, reject) {
      let taskLooper = new TaskLooper(async function() {
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
  HavenoUtils.log(1, "Done mining to unlock txs");
  await monerod.stopMining();
}

/**
 * Indicates if the wallet has an unlocked amount.
 * 
 * @param {MoneroWallet} wallet - wallet to check
 * @param {BigInt} amt - amount to check
 * @param {number?} numOutputs - number of outputs of the given amount (default 1)
 */
async function hasUnlockedOutputs(wallet: any, amt: BigInt, numOutputs?: number): Promise<boolean> {
  if (numOutputs === undefined) numOutputs = 1;
  let availableOutputs = await wallet.getOutputs({isSpent: false, isFrozen: false, minAmount: monerojs.BigInteger(amt.toString()), txQuery: {isLocked: false}});
  return availableOutputs.length >= numOutputs;
}

/**
 * Fund the given wallets.
 * 
 * @param {MoneroWallet} wallets - monerojs wallets
 * @param {BigInt} amt - the amount to fund
 * @param {number?} numOutputs - the number of outputs of the given amount (default 1)
 */
async function fundWallets(wallets: any[], amt: BigInt, numOutputs?: number): Promise<void> {
  if (numOutputs === undefined) numOutputs = 1;
  
  // collect destinations
  let destinations = [];
  for (let wallet of wallets) {
    if (await hasUnlockedOutputs(wallet, amt, numOutputs)) continue;
    for (let i = 0; i < numOutputs; i++) {
      destinations.push(new MoneroDestination((await wallet.createSubaddress()).getAddress(), monerojs.BigInteger(amt.toString())));
    }
  }
  
  // fund destinations
  let txConfig = new MoneroTxConfig().setAccountIndex(0).setRelay(true);
  let txHashes: string[] = [];
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
  
  // wait for txs to unlock
  if (txHashes.length > 0) {
    await waitForUnlockedTxs(...txHashes);
    await wait(1000);
    for (let wallet of wallets) await wallet.sync();
  }
}

// convert monero-javascript BigInteger to typescript BigInt
function toBigInt(mjsBigInt: any) {
    return BigInt(mjsBigInt.toString())
}

async function wait(durationMs: number) {
  return new Promise(function(resolve) { setTimeout(resolve, durationMs); });
}

function getNotifications(notifications: NotificationMessage[], notificationType: NotificationMessage.NotificationType) {
  let filteredNotifications: NotificationMessage[] = [];
   for (let notification of notifications) {
    if (notification.getType() === notificationType) {
      filteredNotifications.push(notification);
     }
  }
  return filteredNotifications;
}

function getConnection(connections: UrlConnection[], url: string): UrlConnection | undefined {
  for (let connection of connections) if (connection.getUrl() === url) return connection;
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
  for (let incomingTransfer of tx.getIncomingTransfersList()) testTransfer(incomingTransfer, ctx);
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

function getRandomAssetCode() {
    return TestConfig.assetCodes[GenUtils.getRandomInt(0, TestConfig.assetCodes.length - 1)];
}

async function createPaymentAccount(trader: HavenoClient, assetCode: string): Promise<PaymentAccount> {
    return isCrypto(assetCode) ? createCryptoPaymentAccount(trader, assetCode) : createRevolutPaymentAccount(trader);
}

function isCrypto(assetCode: string) {
    return getCryptoAddress(assetCode) !== undefined;
}

function getCryptoAddress(currencyCode: string): string | undefined {
    for (let cryptoAddress of TestConfig.cryptoAddresses) {
        if (cryptoAddress.currencyCode === currencyCode.toUpperCase()) return cryptoAddress.address;
    }
}

async function createRevolutPaymentAccount(trader: HavenoClient): Promise<PaymentAccount> {
  let accountForm = await trader.getPaymentAccountForm('REVOLUT');
  accountForm.accountName = "Revolut account " + GenUtils.getUUID();
  accountForm.userName = "user123";
  return trader.createPaymentAccount(accountForm);
}

async function createCryptoPaymentAccount(trader: HavenoClient, currencyCode = "eth"): Promise<PaymentAccount> {
  for (let cryptoAddress of TestConfig.cryptoAddresses) {
    if (cryptoAddress.currencyCode.toLowerCase() !== currencyCode.toLowerCase()) continue;
    return trader.createCryptoPaymentAccount(
      cryptoAddress.currencyCode + " " +  cryptoAddress.address.substr(0, 8) + "... " + GenUtils.getUUID(),
      cryptoAddress.currencyCode,
      cryptoAddress.address);
  }
  throw new Error("No test config for crypto: " + currencyCode);
}

// TODO: specify counter currency code
async function postOffer(maker: HavenoClient, config?: any) {
  
  // assign default options
  config = Object.assign({}, TestConfig.postOffer, config);
  
  // wait for unlocked balance
  if (config.awaitUnlockedBalance) await waitForUnlockedBalance(config.amount * BigInt("2"), maker);
  
  // create payment account if not given
  if (!config.paymentAccountId) config.paymentAccountId = (await createPaymentAccount(maker, config.assetCode)).getId();
  
  // get unlocked balance before reserving offer
  let unlockedBalanceBefore: bigint = BigInt((await maker.getBalances()).getUnlockedBalance());
  
  // post offer
  // TODO: re-arrange post offer parameters like this postOffer() or use config interface?
  let offer: OfferInfo = await maker.postOffer(
        config.assetCode,
        config.direction,
        config.price,
        config.price ? false : true, // TODO: redundant with price field?
        config.priceMargin,
        config.amount,
        config.minAmount,
        config.buyerSecurityDeposit,
        config.paymentAccountId,
        config.triggerPrice);
  testOffer(offer, config);
  
  // offer is included in my offers only
  if (!getOffer(await maker.getMyOffers(config.assetCode, config.direction), offer.getId())) {
    await wait(10000);
    if (!getOffer(await maker.getMyOffers(config.assetCode, config.direction), offer.getId())) throw new Error("Offer " + offer.getId() + " was not found in my offers");
  }
  if (getOffer(await maker.getOffers(config.assetCode, config.direction), offer.getId())) throw new Error("My offer " + offer.getId() + " should not appear in available offers");
  
  // unlocked balance has decreased
  let unlockedBalanceAfter: bigint = BigInt((await maker.getBalances()).getUnlockedBalance());
  if (unlockedBalanceAfter === unlockedBalanceBefore) throw new Error("unlocked balance did not change after posting offer");
  
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
  let tradeCurrency = acct.getTradeCurrenciesList()[0];
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
  } catch (err) {
    assert.equal(err.message, "trade with id 'invalid' not found");
  }

  // trade chat should be in initial state
  let messages = await alice.getChatMessages(tradeId);
  assert(messages.length === 0);
  messages = await bob.getChatMessages(tradeId);
  assert(messages.length === 0);

  // add notification handlers and send some messages
  let aliceNotifications: NotificationMessage[] = [];
  let bobNotifications: NotificationMessage[] = [];
  await alice.addNotificationListener(notification => { aliceNotifications.push(notification); });
  await bob.addNotificationListener(notification => { bobNotifications.push(notification); });

  // send simple conversation and verify the list of messages
  let aliceMsg = "Hi I'm Alice";
  await alice.sendChatMessage(tradeId, aliceMsg);
  await wait(TestConfig.maxTimePeerNoticeMs);
  messages = await bob.getChatMessages(tradeId);
  expect(messages.length).toEqual(2);
  expect(messages[0].getIsSystemMessage()).toEqual(true); // first message is system
  expect(messages[1].getMessage()).toEqual(aliceMsg);

  let bobMsg = "Hello I'm Bob";
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
  let msgs = ["", "  ", "<script>alert('test');</script>", "さようなら"];
  for(let msg of msgs) {
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
  for (var i = 0; i < msgs.length; i++) {
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