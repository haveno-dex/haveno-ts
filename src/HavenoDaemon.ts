import {HavenoUtils} from "./utils/HavenoUtils";
import {TaskLooper} from "./utils/TaskLooper";
import * as grpcWeb from 'grpc-web';
import {DisputeAgentsClient, GetVersionClient, NotificationsClient, PriceClient, WalletsClient, OffersClient, PaymentAccountsClient, TradesClient, MoneroConnectionsClient} from './protobuf/GrpcServiceClientPb';
import {CancelOfferRequest, ConfirmPaymentReceivedRequest, ConfirmPaymentStartedRequest, CreateCryptoCurrencyPaymentAccountReply, CreateCryptoCurrencyPaymentAccountRequest, CreateOfferReply, CreateOfferRequest, CreateXmrTxReply, CreateXmrTxRequest, GetBalancesReply, GetBalancesRequest, GetNewDepositSubaddressReply, GetNewDepositSubaddressRequest, GetOffersReply, GetOffersRequest, GetPaymentAccountsReply, GetPaymentAccountsRequest, GetTradeReply, GetTradeRequest, GetTradesReply, GetTradesRequest, GetVersionReply, GetVersionRequest, GetXmrTxsReply, GetXmrTxsRequest, MarketPriceInfo, MarketPriceReply, MarketPriceRequest, MarketPricesReply, MarketPricesRequest, NotificationMessage, OfferInfo, RegisterDisputeAgentRequest, RegisterNotificationListenerRequest, RelayXmrTxReply, RelayXmrTxRequest, SendNotificationRequest, TakeOfferReply, TakeOfferRequest, TradeInfo, XmrBalanceInfo, XmrDestination, XmrTx, UriConnection, AddConnectionRequest, RemoveConnectionRequest, GetConnectionRequest, GetConnectionsRequest, SetConnectionRequest, CheckConnectionRequest, CheckConnectionsReply, CheckConnectionsRequest, StartCheckingConnectionsRequest, StopCheckingConnectionsRequest, GetBestAvailableConnectionRequest, SetAutoSwitchRequest, CheckConnectionReply, GetConnectionsReply, GetConnectionReply, GetBestAvailableConnectionReply} from './protobuf/grpc_pb';
import {AvailabilityResult, PaymentAccount} from './protobuf/pb_pb';
const console = require('console');

/**
 * Haveno daemon client using gRPC.
 */
class HavenoDaemon {
  
  // grpc clients
  _getVersionClient: GetVersionClient;
  _disputeAgentsClient: DisputeAgentsClient;
  _notificationsClient: NotificationsClient;
  _moneroConnectionsClient: MoneroConnectionsClient;
  _walletsClient: WalletsClient;
  _priceClient: PriceClient;
  _paymentAccountsClient: PaymentAccountsClient;
  _offersClient: OffersClient;
  _tradesClient: TradesClient;
  
  // other instance variables
  _url: string;
  _password: string;
  _process: any;
  _processLogging: boolean = false;
  _walletRpcPort: number|undefined;
  _notificationListeners: ((notification: NotificationMessage) => void)[] = [];
  _keepAlivePeriodMs: number = 60000;
  _appName: string|undefined;

  /**
   * Construct a client connected to a Haveno daemon.
   * 
   * @param {string} url - Haveno daemon url
   * @param {string} password - Haveno daemon password
   */
  constructor(url: string, password: string) {
    HavenoUtils.log(2, "Creating HavenoDaemon(" + url + ", " + password + ")");
    if (!url) throw new Error("Must provide URL of Haveno daemon");
    if (!password) throw new Error("Must provide password of Haveno daemon");
    this._url = url;
    this._password = password;
    this._getVersionClient = new GetVersionClient(this._url);
    this._disputeAgentsClient = new DisputeAgentsClient(this._url);
    this._moneroConnectionsClient = new MoneroConnectionsClient(this._url)
    this._walletsClient = new WalletsClient(this._url);
    this._priceClient = new PriceClient(this._url);
    this._paymentAccountsClient = new PaymentAccountsClient(this._url);
    this._offersClient = new OffersClient(this._url);
    this._tradesClient = new TradesClient(this._url);
    this._notificationsClient = new NotificationsClient(this._url);
  }
  
  /**
   * Start a new Haveno process.
   * 
   * @param {string} havenoPath - path to Haveno binaries
   * @param {string[]} cmd - command to start the process
   * @param {string} url - Haveno daemon url (must proxy to api port)
   * @param {boolean} enableLogging - specifies if logging is enabled or disabled at log level 3
   * @return {HavenoDaemon} a client connected to the newly started Haveno process
   */
  static async startProcess(havenoPath: string, cmd: string[], url: string, enableLogging: boolean): Promise<HavenoDaemon> {
    
    // return promise which resolves after starting havenod
    return new Promise(function(resolve, reject) {
      HavenoUtils.log(2, "Starting Haveno process: " + cmd + " on proxy url: " + url);
      
      // state variables
      let output = "";
      let isResolved = false;
      let daemon: HavenoDaemon|undefined = undefined;
      
      // start process
      let childProcess = require('child_process').spawn(cmd[0], cmd.slice(1), {cwd: havenoPath});
      childProcess.stdout.setEncoding('utf8');
      childProcess.stderr.setEncoding('utf8');
      
      // handle stdout
      childProcess.stdout.on('data', async function(data: any) {
        let line = data.toString();
        if (HavenoUtils.getLogLevel() >= 3 && loggingEnabled()) process.stdout.write(line);
        output += line + '\n'; // capture output in case of error
        
        // read success message
        if (line.indexOf("HavenoHeadlessAppMain: onSetupComplete") >= 0) {
          
          // get api password
          let passwordIdx = cmd.indexOf("--apiPassword");
          if (passwordIdx < 0) {
            reject("Must provide API password to start Haveno daemon");
            return;
          }
          let password = cmd[passwordIdx + 1];

          // create client connected to internal process
          daemon = new HavenoDaemon(url, password);
          daemon._process = childProcess;
          daemon._processLogging = enableLogging;
          daemon._appName = cmd[cmd.indexOf("--appName") + 1];

          // get wallet rpc port
          let walletRpcPortIdx = cmd.indexOf("--walletRpcBindPort");
          if (walletRpcPortIdx >= 0) daemon._walletRpcPort = parseInt(cmd[walletRpcPortIdx + 1]);
          
          // resolve promise with client connected to internal process
          isResolved = true;
          resolve(daemon);
        }
        
        // read error message
        if (line.indexOf("[HavenoDaemonMain] ERROR") >= 0) {
          if (!isResolved) await rejectProcess(new Error(line));
        }
      });
      
      // handle stderr
      childProcess.stderr.on('data', function(data: any) {
        if (HavenoUtils.getLogLevel() >= 2 && loggingEnabled()) process.stderr.write(data);
      });
      
      // handle exit
      childProcess.on("exit", async function(code: any) {
        if (!isResolved) await rejectProcess(new Error("Haveno process terminated with exit code " + code + (output ? ":\n\n" + output : "")));
      });
      
      // handle error
      childProcess.on("error", async function(err: any) {
        if (err.message.indexOf("ENOENT") >= 0) reject(new Error("haveno-daemon does not exist at path '" + cmd[0] + "'"));
        if (!isResolved) await rejectProcess(err);
      });
      
      // handle uncaught exception
      childProcess.on("uncaughtException", async function(err: any, origin: any) {
        console.error("Uncaught exception in Haveno process: " + err.message);
        console.error(origin);
        await rejectProcess(err);
      });
      
      async function rejectProcess(err: any) {
        await HavenoUtils.kill(childProcess);
        reject(err);
      }
      
      function loggingEnabled(): boolean {
        return (daemon && daemon._processLogging) || (!daemon && enableLogging);
      }
    });
  }
  
  /**
   * Stop a previously started Haveno process.
   */
  async stopProcess(): Promise<void> {
    if (this._process === undefined) throw new Error("HavenoDaemon instance not created from new process");
    return HavenoUtils.kill(this._process);
  }
  
  /**
   * Return the process running the haveno daemon.
   * 
   * @return the process running the haveno daemon
   */
  getProcess() {
    return this._process;
  }
  
  /**
   * Enable or disable process logging.
   * 
   * @param {boolean} enabled - specifies if logging is enabled or disabled
   */
  setProcessLogging(enabled: boolean) {
    if (this._process === undefined) throw new Error("HavenoDaemon instance not created from new process");
    this._processLogging = enabled;
  }
  
  /**
   * Get the URL of the Haveno daemon.
   * 
   * @return {string} the URL of the Haveno daemon
   */
  getUrl(): string {
    return this._url;
  }
  
  /**
   * Get the port of the primary wallet rpc instance if known.
   * 
   * @return {number|undefined} the port of the primary wallet rpc instance if known
   */
  getWalletRpcPort(): number|undefined {
    return this._walletRpcPort;
  }
  
  /**
   * Get the name of the Haveno application folder.
   */
  getAppName(): string|undefined {
    return this._appName;
  }

  /**
   * Get the Haveno version.
   * 
   * @return {string} the Haveno daemon version 
   */
  async getVersion(): Promise<string> {
    let that = this;
    return new Promise(function(resolve, reject) {
      that._getVersionClient.getVersion(new GetVersionRequest(), {password: that._password}, function(err: grpcWeb.RpcError, response: GetVersionReply) {
        if (err) reject(err);
        else resolve(response.getVersion());
      });
    });
  }
  
  /**
   * Register as a dispute agent.
   * 
   * @param {string} disputeAgentType - type of dispute agent to register, e.g. mediator, refundagent
   * @param {string} registrationKey - registration key
   */
  async registerDisputeAgent(disputeAgentType: string, registrationKey: string): Promise<void> {
    let that = this;
    let request = new RegisterDisputeAgentRequest()
        .setDisputeAgentType(disputeAgentType)
        .setRegistrationKey(registrationKey);
    return new Promise(function(resolve, reject) {
      that._disputeAgentsClient.registerDisputeAgent(request, {password: that._password}, function(err: grpcWeb.RpcError) {
        if (err) reject(err);
        else resolve();
      });
    });
  }
  
  /**
   * Add a listener to receive notifications from the Haveno daemon.
   * 
   * @param {HavenoDaemonListener} listener - the notification listener to add
   */
  async addNotificationListener(listener: (notification: NotificationMessage) => void): Promise<void> {
    this._notificationListeners.push(listener);
    if (this._notificationListeners.length === 1) return this._registerNotificationListener();
  }
  
  /**
   * Add a Monero daemon connection.
   *
   * @param {string | UriConnection} connection - daemon uri or connection to add
   */
  async addMoneroConnection(connection: string | UriConnection): Promise<void> {
    let that = this;
    return new Promise(function(resolve, reject) {
      that._moneroConnectionsClient.addConnection(new AddConnectionRequest().setConnection(typeof connection === "string" ? new UriConnection().setUri(connection) : connection), {password: that._password}, function(err: grpcWeb.RpcError) {
        if (err) reject(err);
        else resolve();
      });
    });
  }

  /**
   * Remove a Monero daemon connection.
   *
   * @param {string} uri - uri of the daemon connection to remove
   */
  async removeMoneroConnection(uri: string): Promise<void> {
    let that = this;
    return new Promise(function(resolve, reject) {
      that._moneroConnectionsClient.removeConnection(new RemoveConnectionRequest().setUri(uri), {password: that._password}, function(err: grpcWeb.RpcError) {
        if (err) reject(err);
        else resolve();
      });
    });
  }

  /**
   * Get the current Monero daemon connection.
   *
   * @return {UriConnection | undefined} the current daemon connection, undefined if no current connection
   */
  async getMoneroConnection(): Promise<UriConnection | undefined> {
    let that = this;
    return new Promise(function(resolve, reject) {
      that._moneroConnectionsClient.getConnection(new GetConnectionRequest(), {password: that._password}, function(err: grpcWeb.RpcError, response: GetConnectionReply) {
        if (err) reject(err);
        else resolve(response.getConnection());
      });
    });
  }

  /**
   * Get all Monero daemon connections.
   *
   * @return {UriConnection[]} all daemon connections
   */
  async getMoneroConnections(): Promise<UriConnection[]> {
    let that = this;
    return new Promise(function(resolve, reject) {
      that._moneroConnectionsClient.getConnections(new GetConnectionsRequest(), {password: that._password}, function(err: grpcWeb.RpcError, response: GetConnectionsReply) {
        if (err) reject(err);
        else resolve(response.getConnectionsList());
      });
    });
  }

  /**
   * Set the current Monero daemon connection.
   *
   * Add the connection if not previously seen.
   * If the connection is provided as string, connect to the URI with any previously set credentials and priority.
   * If the connection is provided as UriConnection, overwrite any previously set credentials and priority.
   * If undefined connection provided, disconnect the client.
   *
   * @param {string | UriConnection} connection - connection to set as current
   */
  async setMoneroConnection(connection?: string | UriConnection): Promise<void> {
    let that = this;
    let request = new SetConnectionRequest();
    if (typeof connection === "string") request.setUri(connection);
    else request.setConnection(connection);
    return new Promise(function(resolve, reject) {
      that._moneroConnectionsClient.setConnection(request, {password: that._password}, function(err: grpcWeb.RpcError) {
        if (err) reject(err);
        else resolve();
      });
    });
  }

  /**
   * Check the current Monero daemon connection.
   *
   * If disconnected and auto switch enabled, switch to the best available connection and return its status.
   *
   * @return {UriConnection | undefined} the current daemon connection status, undefined if no current connection
   */
  async checkMoneroConnection(): Promise<UriConnection | undefined> {
    let that = this;
    return new Promise(function(resolve, reject) {
      that._moneroConnectionsClient.checkConnection(new CheckConnectionRequest(), {password: that._password}, function(err: grpcWeb.RpcError, response: CheckConnectionReply) {
        if (err) reject(err);
        else resolve(response.getConnection());
      });
    });
  }

  /**
   * Check all Monero daemon connections.
   *
   * @return {UriConnection[]} status of all managed connections.
   */
  async checkMoneroConnections(): Promise<UriConnection[]> {
    let that = this;
    return new Promise(function(resolve, reject) {
      that._moneroConnectionsClient.checkConnections(new CheckConnectionsRequest(), {password: that._password}, function(err: grpcWeb.RpcError, response: CheckConnectionsReply) {
        if (err) reject(err);
        else resolve(response.getConnectionsList());
      });
    });
  }

  /**
   * Check the connection and start checking the connection periodically.
   *
   * @param {number} refreshPeriod - time between checks in milliseconds (default 15000 ms or 15 seconds)
   */
  async startCheckingConnection(refreshPeriod: number): Promise<void> {
    let that = this;
    return new Promise(function(resolve, reject) {
      that._moneroConnectionsClient.startCheckingConnections(new StartCheckingConnectionsRequest().setRefreshPeriod(refreshPeriod), {password: that._password}, function(err: grpcWeb.RpcError) {
        if (err) reject(err);
        else resolve();
      });
    });
  }

  /**
   * Stop checking the connection status periodically.
   */
  async stopCheckingConnection(): Promise<void> {
    let that = this;
    return new Promise(function(resolve, reject) {
      that._moneroConnectionsClient.stopCheckingConnections(new StopCheckingConnectionsRequest(), {password: that._password}, function(err: grpcWeb.RpcError) {
        if (err) reject(err);
        else resolve();
      });
    });
  }

  /**
   * Get the best available connection in order of priority then response time.
   *
   * @return {UriConnection | undefined} the best available connection in order of priority then response time, undefined if no connections available
   */
  async getBestAvailableConnection(): Promise<UriConnection | undefined> {
    let that = this;
    return new Promise(function(resolve, reject) {
      that._moneroConnectionsClient.getBestAvailableConnection(new GetBestAvailableConnectionRequest(), {password: that._password}, function(err: grpcWeb.RpcError, response: GetBestAvailableConnectionReply) {
        if (err) reject(err);
        else resolve(response.getConnection());
      });
    });
  }

  /**
   * Automatically switch to the best available connection if current connection is disconnected after being checked.
   *
   * @param {boolean} autoSwitch - whether auto switch is enabled or disabled
   */
  async setAutoSwitch(autoSwitch: boolean): Promise<void> {
    let that = this;
    return new Promise(function(resolve, reject) {
      that._moneroConnectionsClient.setAutoSwitch(new SetAutoSwitchRequest().setAutoSwitch(autoSwitch), {password: that._password}, function(err: grpcWeb.RpcError) {
        if (err) reject(err);
        else resolve();
      });
    });
  }

  /**
   * Get the user's balances.
   * 
   * @return {XmrBalanceInfo} the user's balances
   */
  async getBalances(): Promise<XmrBalanceInfo> {
    let that = this;
    return new Promise(function(resolve, reject) {
      that._walletsClient.getBalances(new GetBalancesRequest(), {password: that._password}, function(err: grpcWeb.RpcError, response: GetBalancesReply) {
        if (err) reject(err);
        else resolve(response.getBalances()!.getXmr()!);
      });
    });
  }
  
  /**
   * Get a new subaddress in the Monero wallet to receive deposits.
   * 
   * @return {string} the deposit address (a subaddress in the Haveno wallet)
   */
  async getNewDepositSubaddress(): Promise<string> {
    let that = this;
    return new Promise(function(resolve, reject) {
      that._walletsClient.getNewDepositSubaddress(new GetNewDepositSubaddressRequest(), {password: that._password}, function(err: grpcWeb.RpcError, response: GetNewDepositSubaddressReply) {
        if (err) reject(err);
        else resolve(response.getSubaddress());
      });
    });
  }
    
  /**
   * Get all transactions in the Monero wallet.
   * 
   * @return {XmrTx[]} the transactions
   */
  async getXmrTxs(): Promise<XmrTx[]> {
    let that = this;
    return new Promise(function(resolve, reject) {
      that._walletsClient.getXmrTxs(new GetXmrTxsRequest(), {password: that._password}, function(err: grpcWeb.RpcError, response: GetXmrTxsReply) {
        if (err) reject(err);
        else resolve(response.getTxsList());
      });
    });
  }
  
  /**
   * Get a transaction by hash in the Monero wallet.
   * 
   * @param {String} txHash - hash of the transaction to get
   * @return {XmrTx} the transaction with the hash
   */
  async getXmrTx(txHash: string): Promise<XmrTx> {
    let txs = await this.getXmrTxs(); // TODO (woodser): implement getXmrTx(hash) grpc call
    for (let tx of txs) {
      if (tx.getHash() === txHash) return tx;
    }
    throw new Error("No transaction with hash " + txHash);
  }

  /**
   * Create but do not relay a transaction to send funds from the Monero wallet.
   * 
   * @return {XmrTx} the created transaction
   */
  async createXmrTx(destinations: XmrDestination[]): Promise<XmrTx> {
    let that = this;
    return new Promise(function(resolve, reject) {
      that._walletsClient.createXmrTx(new CreateXmrTxRequest().setDestinationsList(destinations), {password: that._password}, function(err: grpcWeb.RpcError, response: CreateXmrTxReply) {
        if (err) reject(err);
        else resolve(response.getTx());
      });
    });
  }

  /**
   * Relay a previously created transaction to send funds from the Monero wallet.
   * 
   * @return {string} the hash of the relayed transaction
   */
  async relayXmrTx(metadata: string): Promise<string> {
    let that = this;
    return new Promise(function(resolve, reject) {
      that._walletsClient.relayXmrTx(new RelayXmrTxRequest().setMetadata(metadata), {password: that._password}, function(err: grpcWeb.RpcError, response: RelayXmrTxReply) {
        if (err) reject(err);
        else resolve(response.getHash());
      });
    });
  }

  /**
   * Get the current market price per 1 XMR in the given currency.
   *
   * @param {string} currencyCode - currency code (fiat or crypto) to get the price of
   * @return {number} the current market price per 1 XMR in the given currency
   */
  async getPrice(currencyCode: string): Promise<number> {
    let that = this;
    return new Promise(function(resolve, reject) {
      that._priceClient.getMarketPrice(new MarketPriceRequest().setCurrencyCode(currencyCode), {password: that._password}, function(err: grpcWeb.RpcError, response: MarketPriceReply) {
        if (err) reject(err);
        else resolve(response.getPrice());
      });
    });
  }

  /**
   * Get the current market prices of all the currencies.
   *
   * @return {MarketPrice[]} price per 1 XMR in all supported currencies (fiat & crypto)
   */
  async getPrices(): Promise<MarketPriceInfo[]> {
    let that = this;
    return new Promise(function(resolve, reject) {
      that._priceClient.getMarketPrices(new MarketPricesRequest(), {password: that._password}, function(err: grpcWeb.RpcError, response: MarketPricesReply) {
        if (err) reject(err);
        else resolve(response.getMarketPriceList());
      });
    });
  }

  /**
   * Get payment accounts.
   * 
   * @return {PaymentAccount[]} the payment accounts
   */
  async getPaymentAccounts(): Promise<PaymentAccount[]> {
    let that = this;
    return new Promise(function(resolve, reject) {
      that._paymentAccountsClient.getPaymentAccounts(new GetPaymentAccountsRequest(), {password: that._password}, function(err: grpcWeb.RpcError, response: GetPaymentAccountsReply) {
        if (err) reject(err);
        else resolve(response.getPaymentAccountsList());
      });
    });
  }
  
  /**
   * Create a crypto payment account.
   * 
   * @param {string} accountName - description of the account
   * @param {string} currencyCode - currency code of the account
   * @param {string} address - payment address of the account
   * @return {PaymentAccount} the created payment account
   */
  async createCryptoPaymentAccount(accountName: string,
        currencyCode: string,
        address: string): Promise<PaymentAccount> {
    let that = this;
    let request = new CreateCryptoCurrencyPaymentAccountRequest()
            .setAccountName(accountName)
            .setCurrencyCode(currencyCode)
            .setAddress(address)
            .setTradeInstant(false); // not using instant trades
    return new Promise(function(resolve, reject) {
      that._paymentAccountsClient.createCryptoCurrencyPaymentAccount(request, {password: that._password}, function(err: grpcWeb.RpcError, response: CreateCryptoCurrencyPaymentAccountReply) {
        if (err) reject(err);
        else resolve(response.getPaymentAccount()!);
      });
    });
  }
  
  /**
   * Get available offers to buy or sell XMR.
   * 
   * @param {string} direction - one of "BUY" or "SELL" // TODO (woodser): make optional
   * @return {OfferInfo[]} available offers
   */
  async getOffers(direction: string): Promise<OfferInfo[]> {
    let that = this;
    return new Promise(function(resolve, reject) {
      that._offersClient.getOffers(new GetOffersRequest().setDirection(direction).setCurrencyCode("XMR"), {password: that._password}, function(err: grpcWeb.RpcError, response: GetOffersReply) {
        if (err) reject(err);
        else resolve(response.getOffersList());
      });
    });
  }
  
  /**
   * Get user's created offers to buy or sell XMR.
   * 
   * @param {string} direction - one of "BUY" or "SELL" // TODO (woodser): make optional
   * @return {OfferInfo[]} the user's created offers
   */
  async getMyOffers(direction: string): Promise<OfferInfo[]> {
    let that = this;
    return new Promise(function(resolve, reject) {
      that._offersClient.getMyOffers(new GetOffersRequest().setDirection(direction).setCurrencyCode("XMR"), {password: that._password}, function(err: grpcWeb.RpcError, response: GetOffersReply) {
        if (err) reject(err);
        else resolve(response.getOffersList());
      });
    });
  }
  
  /**
   * Get my offer by id.
   * 
   * @param {string} offerId - id of the user's created offer
   * @return {OfferInfo} the user's created offer
   */
  async getMyOffer(offerId: string): Promise<OfferInfo> {
    // TODO: implement this call on the backend
    let offers = await this.getMyOffers("buy");
    for (let offer of offers) if (offer.getId() === offerId) return offer;
    offers = await this.getMyOffers("sell");
    for (let offer of offers) if (offer.getId() === offerId) return offer;
    throw new Error("No offer with id: " + offerId);
  }
  
  /**
   * Post an offer.
   * 
   * @param {string} currencyCode - currency code of traded pair
   * @param {string} direction - one of "BUY" or "SELL"
   * @param {number} price - trade price
   * @param {bool} useMarketBasedPrice - base trade on market price
   * @param {number} marketPriceMargin - % from market price to tolerate
   * @param {bigint} amount - amount to trade
   * @param {bigint} minAmount - minimum amount to trade
   * @param {number} buyerSecurityDeposit - buyer security deposit as % of trade amount
   * @param {string} paymentAccountId - payment account id
   * @param {number} triggerPrice - price to remove offer
   * @return {OfferInfo} the posted offer
   */
  async postOffer(currencyCode: string,
        direction: string,
        price: number,
        useMarketBasedPrice: boolean,
        marketPriceMargin: number,
        amount: bigint,
        minAmount: bigint,
        buyerSecurityDeposit: number,
        paymentAccountId: string,
        triggerPrice?: number): Promise<OfferInfo> {
    let that = this;
    let request = new CreateOfferRequest()
            .setCurrencyCode(currencyCode)
            .setDirection(direction)
            .setPrice(price.toString())
            .setUseMarketBasedPrice(useMarketBasedPrice)
            .setMarketPriceMargin(marketPriceMargin)
            .setAmount(amount.toString())
            .setMinAmount(minAmount.toString())
            .setBuyerSecurityDeposit(buyerSecurityDeposit)
            .setPaymentAccountId(paymentAccountId);
    if (triggerPrice) request.setTriggerPrice(BigInt(triggerPrice.toString()).toString());
    return new Promise(function(resolve, reject) {
      that._offersClient.createOffer(request, {password: that._password}, function(err: grpcWeb.RpcError, response: CreateOfferReply) {
        if (err) reject(err);
        else resolve(response.getOffer()!);
      });
    });
  }
  
  /**
   * Remove a posted offer, releasing its reserved funds.
   * 
   * @param {string} offerId - the offer id to cancel
   */
  async removeOffer(offerId: string): Promise<void> {
    let that = this;
    return new Promise(function(resolve, reject) {
      that._offersClient.cancelOffer(new CancelOfferRequest().setId(offerId), {password: that._password}, function(err: grpcWeb.RpcError) {
        if (err) reject(err);
        else resolve();
      });
    });
  }
  
  /**
   * Take an offer.
   * 
   * @param {string} offerId - id of the offer to take
   * @param {string} paymentAccountId - id of the payment account
   * @return {TradeInfo} the initialized trade
   */
  async takeOffer(offerId: string, paymentAccountId: string): Promise<TradeInfo> {
    let that = this;
    let request = new TakeOfferRequest()
            .setOfferId(offerId)
            .setPaymentAccountId(paymentAccountId);
    return new Promise(function(resolve, reject) {
      that._tradesClient.takeOffer(request, {password: that._password}, function(err: grpcWeb.RpcError, response: TakeOfferReply) {
        if (err) reject(err);
        else if (response.getFailureReason() && response.getFailureReason()!.getAvailabilityResult() !== AvailabilityResult.AVAILABLE) reject(response.getFailureReason()!.getDescription());
        else resolve(response.getTrade()!);
      });
    });
  }
  
  /**
   * Get a trade by id.
   * 
   * @param {string} tradeId - the id of the trade and its offer
   * @return {TradeInfo} the trade with the given id
   */
  async getTrade(tradeId: string): Promise<TradeInfo> {
    let that = this;
    return new Promise(function(resolve, reject) {
      that._tradesClient.getTrade(new GetTradeRequest().setTradeId(tradeId), {password: that._password}, function(err: grpcWeb.RpcError, response: GetTradeReply) {
        if (err) reject(err);
        else resolve(response.getTrade()!);
      });
    });
  }
  
  /**
   * Get all trades.
   * 
   * @return {TradeInfo[]} all user trades
   */
  async getTrades(): Promise<TradeInfo[]> {
    let that = this;
    return new Promise(function(resolve, reject) {
      that._tradesClient.getTrades(new GetTradesRequest(), {password: that._password}, function(err: grpcWeb.RpcError, response: GetTradesReply) {
        if (err) reject(err);
        else resolve(response.getTradesList());
      });
    });
  }
  
  /**
   * Confirm a payment is started.
   * 
   * @param {string} tradeId - the id of the trade
   */
  async confirmPaymentStarted(tradeId: string): Promise<void> {
    let that = this;
    return new Promise(function(resolve, reject) {
      that._tradesClient.confirmPaymentStarted(new ConfirmPaymentStartedRequest().setTradeId(tradeId), {password: that._password}, function(err: grpcWeb.RpcError) {
        if (err) reject(err);
        else resolve();
      });
    });
  }
  
  /**
   * Confirm a payment is received.
   * 
   * @param {string} tradeId - the id of the trade
   */
  async confirmPaymentReceived(tradeId: string): Promise<void> {
    let that = this;
    return new Promise(function(resolve, reject) {
      that._tradesClient.confirmPaymentReceived(new ConfirmPaymentReceivedRequest().setTradeId(tradeId), {password: that._password}, function(err: grpcWeb.RpcError) {
        if (err) reject(err);
        else resolve();
      });
    });
  }
  
  // ------------------------------- HELPERS ----------------------------------
  
  /**
   * Register a listener to receive notifications.
   * Due to the nature of grpc streaming, this method returns a promise
   * which may be resolved before the listener is actually registered.
   */
  async _registerNotificationListener(): Promise<void> {
    let that = this;
    return new Promise(function(resolve) {

      // send request to register client listener
      that._notificationsClient.registerNotificationListener(new RegisterNotificationListenerRequest(), {password: that._password})
        .on("data", (data) => {
          if (data instanceof NotificationMessage) {
            for (let listener of that._notificationListeners) listener(data);
          }
        });

      // periodically send keep alive requests // TODO (woodser): better way to keep notification stream alive?
      let firstRequest = true;
      let taskLooper = new TaskLooper(async function() {
        if (firstRequest) {
          firstRequest = false;
          return;
        }
        await that._sendNotification(new NotificationMessage()
                .setType(NotificationMessage.NotificationType.KEEP_ALIVE)
                .setTimestamp(Date.now()));
      });
      taskLooper.start(that._keepAlivePeriodMs);

      // TODO: call returns before listener registered
      setTimeout(function() { resolve(); }, 1000);
    });
  }
  
  /**
   * Send a notification.
   * 
   * @param {NotificationMessage} notification - notification to send
   */
  async _sendNotification(notification: NotificationMessage): Promise<void> {
    let that = this;
    return new Promise(function(resolve, reject) {
      that._notificationsClient.sendNotification(new SendNotificationRequest().setNotification(notification), {password: that._password}, function(err: grpcWeb.RpcError) {
        if (err) reject(err);
        else resolve();
      });
    });
  }
}

export {HavenoDaemon};
