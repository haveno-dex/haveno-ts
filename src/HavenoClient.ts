import console from "console";
import HavenoUtils from "./utils/HavenoUtils";
import TaskLooper from "./utils/TaskLooper";
import type * as grpcWeb from "grpc-web";
import { GetVersionClient, AccountClient, MoneroConnectionsClient, DisputesClient, DisputeAgentsClient, NotificationsClient, WalletsClient, PriceClient, OffersClient, PaymentAccountsClient, TradesClient, ShutdownServerClient, MoneroNodeClient } from './protobuf/GrpcServiceClientPb';
import { GetVersionRequest, GetVersionReply, IsAppInitializedRequest, IsAppInitializedReply, RegisterDisputeAgentRequest, MarketPriceRequest, MarketPriceReply, MarketPricesRequest, MarketPricesReply, MarketPriceInfo, MarketDepthRequest, MarketDepthReply, MarketDepthInfo, GetBalancesRequest, GetBalancesReply, XmrBalanceInfo, GetMyOfferRequest, GetMyOfferReply, GetOffersRequest, GetOffersReply, OfferInfo, GetPaymentMethodsRequest, GetPaymentMethodsReply, GetPaymentAccountFormRequest, CreatePaymentAccountRequest, CreatePaymentAccountReply, GetPaymentAccountFormReply, GetPaymentAccountsRequest, GetPaymentAccountsReply, CreateCryptoCurrencyPaymentAccountRequest, CreateCryptoCurrencyPaymentAccountReply, CreateOfferRequest, CreateOfferReply, CancelOfferRequest, TakeOfferRequest, TakeOfferReply, TradeInfo, GetTradeRequest, GetTradeReply, GetTradesRequest, GetTradesReply, GetXmrSeedRequest, GetXmrSeedReply, GetXmrPrimaryAddressRequest, GetXmrPrimaryAddressReply, GetXmrNewSubaddressRequest, GetXmrNewSubaddressReply, ConfirmPaymentStartedRequest, ConfirmPaymentReceivedRequest, XmrTx, GetXmrTxsRequest, GetXmrTxsReply, XmrDestination, CreateXmrTxRequest, CreateXmrTxReply, RelayXmrTxRequest, RelayXmrTxReply, CreateAccountRequest, AccountExistsRequest, AccountExistsReply, DeleteAccountRequest, OpenAccountRequest, IsAccountOpenRequest, IsAccountOpenReply, CloseAccountRequest, ChangePasswordRequest, BackupAccountRequest, BackupAccountReply, RestoreAccountRequest, StopRequest, NotificationMessage, RegisterNotificationListenerRequest, SendNotificationRequest, UrlConnection, AddConnectionRequest, RemoveConnectionRequest, GetConnectionRequest, GetConnectionsRequest, SetConnectionRequest, CheckConnectionRequest, CheckConnectionsReply, CheckConnectionsRequest, StartCheckingConnectionsRequest, StopCheckingConnectionsRequest, GetBestAvailableConnectionRequest, SetAutoSwitchRequest, CheckConnectionReply, GetConnectionsReply, GetConnectionReply, GetBestAvailableConnectionReply, GetDisputeRequest, GetDisputeReply, GetDisputesRequest, GetDisputesReply, OpenDisputeRequest, ResolveDisputeRequest, SendDisputeChatMessageRequest, SendChatMessageRequest, GetChatMessagesRequest, GetChatMessagesReply, StartMoneroNodeRequest, StopMoneroNodeRequest, IsMoneroNodeRunningRequest, IsMoneroNodeRunningReply, GetMoneroNodeSettingsRequest, GetMoneroNodeSettingsReply } from "./protobuf/grpc_pb";
import { PaymentMethod, PaymentAccount, AvailabilityResult, Attachment, DisputeResult, Dispute, ChatMessage, MoneroNodeSettings } from "./protobuf/pb_pb";

/**
 * Haveno daemon client.
 */
export default class HavenoClient {

  // grpc clients
  _appName: string | undefined;
  _getVersionClient: GetVersionClient;
  _disputeAgentsClient: DisputeAgentsClient;
  _disputesClient: DisputesClient;
  _notificationsClient: NotificationsClient;
  _notificationStream: grpcWeb.ClientReadableStream<NotificationMessage> | undefined;
  _moneroConnectionsClient: MoneroConnectionsClient;
  _moneroNodeClient: MoneroNodeClient;
  _walletsClient: WalletsClient;
  _priceClient: PriceClient;
  _paymentAccountsClient: PaymentAccountsClient;
  _offersClient: OffersClient;
  _tradesClient: TradesClient;
  _accountClient: AccountClient;
  _shutdownServerClient: ShutdownServerClient;

  // state variables
  _url: string;
  _password: string;
  _process: any;
  _processLogging = false;
  _walletRpcPort: number | undefined;
  _notificationListeners: ((_notification: NotificationMessage) => void)[] = [];
  _registerNotificationListenerCalled = false;
  _keepAliveLooper: any;
  _keepAlivePeriodMs = 60000;
  _paymentMethods: PaymentMethod[] | undefined; // cached for performance

  // constants
  static readonly _fullyInitializedMessage = "Application fully initialized";
  static readonly _loginRequiredMessage = "Interactive login required";

  /**
   * Construct a client connected to a Haveno daemon.
   *
   * @param {string} url - Haveno daemon url
   * @param {string} password - Haveno daemon password
   */
  constructor(url: string, password: string) {
    if (!url) throw new Error("Must provide URL of Haveno daemon");
    if (!password) throw new Error("Must provide password of Haveno daemon");
    HavenoUtils.log(2, "Creating Haveno client connected to " + url);
    this._url = url;
    this._password = password;
    this._getVersionClient = new GetVersionClient(this._url);
    this._accountClient = new AccountClient(this._url);
    this._moneroConnectionsClient = new MoneroConnectionsClient(this._url);
    this._moneroNodeClient = new MoneroNodeClient(this._url);
    this._disputeAgentsClient = new DisputeAgentsClient(this._url);
    this._disputesClient = new DisputesClient(this._url);
    this._walletsClient = new WalletsClient(this._url);
    this._priceClient = new PriceClient(this._url);
    this._paymentAccountsClient = new PaymentAccountsClient(this._url);
    this._offersClient = new OffersClient(this._url);
    this._tradesClient = new TradesClient(this._url);
    this._notificationsClient = new NotificationsClient(this._url);
    this._shutdownServerClient = new ShutdownServerClient(this._url);
  }

  /**
   * Start a new Haveno process.
   *
   * @param {string} havenoPath - path to Haveno binaries
   * @param {string[]} cmd - command to start the process
   * @param {string} url - Haveno daemon url (must proxy to api port)
   * @param {boolean} enableLogging - specifies if logging is enabled or disabled at log level 3
   * @return {haveno} a client connected to the newly started Haveno process
   */
  static async startProcess(havenoPath: string, cmd: string[], url: string, enableLogging: boolean): Promise<HavenoClient> {

    // return promise which resolves after starting havenod
    return new Promise((resolve, reject) => {
      HavenoUtils.log(2, "Starting Haveno process: " + cmd + " on proxy url: " + url);

      // state variables
      let output = "";
      let isStarted = false;
      let daemon: HavenoClient | undefined = undefined;

      // start process
      const childProcess = require('child_process').spawn(cmd[0], cmd.slice(1), {cwd: havenoPath});
      childProcess.stdout.setEncoding('utf8');
      childProcess.stderr.setEncoding('utf8');
      
      // handle stdout
      childProcess.stdout.on('data', async function(data: any) {
        const line = data.toString();
        if (loggingEnabled()) process.stdout.write(line);
        output += line + '\n'; // capture output in case of error
        
        // initialize daemon on success or login required message
        if (!daemon && (line.indexOf(HavenoClient._fullyInitializedMessage) >= 0 || line.indexOf(HavenoClient._loginRequiredMessage) >= 0)) {
          
          // get api password
          const passwordIdx = cmd.indexOf("--apiPassword");
          if (passwordIdx < 0) {
            reject("Must provide API password to start Haveno daemon");
            return;
          }
          const password = cmd[passwordIdx + 1];

          // create client connected to internal process
          daemon = new HavenoClient(url, password);
          daemon._process = childProcess;
          daemon._processLogging = enableLogging;
          daemon._appName = cmd[cmd.indexOf("--appName") + 1];

          // get wallet rpc port
          const walletRpcPortIdx = cmd.indexOf("--walletRpcBindPort");
          if (walletRpcPortIdx >= 0) daemon._walletRpcPort = parseInt(cmd[walletRpcPortIdx + 1]);
          
          // resolve promise with client connected to internal process
          isStarted = true;
          resolve(daemon);
        }
        
        // read error message
        if (line.indexOf("[HavenoDaemonMain] ERROR") >= 0) {
          if (!isStarted) await rejectStartup(new Error(line));
        }
      });
      
      // handle stderr
      childProcess.stderr.on('data', function(data: any) {
        if (loggingEnabled()) process.stderr.write(data);
      });
      
      // handle exit
      childProcess.on("exit", async function(code: any) {
        if (!isStarted) await rejectStartup(new Error("Haveno process terminated with exit code " + code + (output ? ":\n\n" + output : "")));
      });
      
      // handle error
      childProcess.on("error", async function(err: any) {
        if (err.message.indexOf("ENOENT") >= 0) reject(new Error("haveno-daemon does not exist at path '" + cmd[0] + "'"));
        if (!isStarted) await rejectStartup(err);
      });
      
      // handle uncaught exception
      childProcess.on("uncaughtException", async function(err: any, origin: any) {
        console.error("Uncaught exception in Haveno process: " + err.message);
        console.error(origin);
        await rejectStartup(err);
      });
      
      async function rejectStartup(err: any) {
        await HavenoUtils.kill(childProcess);
        reject(err);
      }
      
      function loggingEnabled(): boolean {
        return (daemon && daemon._processLogging) || (!daemon && enableLogging);
      }
    });
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
    if (this._process === undefined) throw new Error("haveno instance not created from new process");
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
    return new Promise((resolve, reject) => {
      this._getVersionClient.getVersion(new GetVersionRequest(), {password: this._password}, function(err: grpcWeb.RpcError, response: GetVersionReply) {
        if (err) reject(err);
        else resolve(response.getVersion());
      });
    });
  }
  
  /**
   * Indicates if connected and authenticated with the Haveno daemon.
   * 
   * @return {boolean} true if connected with the Haveno daemon, false otherwise
   */
  async isConnectedToDaemon(): Promise<boolean> {
    try {
      await this.getVersion();
      return true;
    } catch (err) {
      return false;
    }
  }
  
  /**
   * Indicates if the Haveno account is created.
   * 
   * @return {boolean} true if the account is created, false otherwise
   */
  async accountExists(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this._accountClient.accountExists(new AccountExistsRequest(), {password: this._password}, function(err: grpcWeb.RpcError, response: AccountExistsReply) {
        if (err) reject(err);
        else resolve(response.getAccountExists());
      });
    });
  }
  
  /**
   * Indicates if the Haveno account is open and authenticated with the correct password.
   * 
   * @return {boolean} true if the account is open and authenticated, false otherwise
   */
  async isAccountOpen(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this._accountClient.isAccountOpen(new IsAccountOpenRequest(), {password: this._password}, function(err: grpcWeb.RpcError, response: IsAccountOpenReply) {
        if (err) reject(err);
        else resolve(response.getIsAccountOpen());
      });
    });
  }
  
  /**
   * Create and open a new Haveno account.
   * 
   * @param {string} password - the password to encrypt the account
   */
  async createAccount(password: string): Promise<void> {
    await new Promise<void>((resolve, reject) => {
      this._accountClient.createAccount(new CreateAccountRequest().setPassword(password), {password: this._password}, function(err: grpcWeb.RpcError) {
        if (err) reject(err);
        else resolve();
      });
    });
    return this._awaitAppInitialized(); // TODO: grpc should not return before setup is complete
  }
  
  /**
   * Open existing Haveno account.
   * 
   * @param {string} password - the account password
   */
  async openAccount(password: string): Promise<void> {
    await new Promise<void>((resolve, reject) => {
      this._accountClient.openAccount(new OpenAccountRequest().setPassword(password), {password: this._password}, function(err: grpcWeb.RpcError) {
        if (err) reject(err);
        else resolve();
      });
    });
    return this._awaitAppInitialized(); // TODO: grpc should not return before setup is complete
  }
  
  /**
   * Change the Haveno account password.
   * 
   * @param {string} password - the new account password
   */
  async changePassword(password: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this._accountClient.changePassword(new ChangePasswordRequest().setPassword(password), {password: this._password}, function(err: grpcWeb.RpcError) {
        if (err) reject(err);
        else resolve();
      });
    });
  }
  
  /**
   * Close the currently open account.
   */
  async closeAccount(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this._accountClient.closeAccount(new CloseAccountRequest(), {password: this._password}, function(err: grpcWeb.RpcError) {
        if (err) reject(err);
        else resolve();
      });
    });
  }
  
  /**
   * Permanently delete the Haveno account.
   */
  async deleteAccount(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this._accountClient.deleteAccount(new DeleteAccountRequest(), {password: this._password}, async function(err: grpcWeb.RpcError) {
        if (err) reject(err);
        else setTimeout(resolve, 5000);
      });
    });
  }
  
  /**
   * Backup the account to the given stream. TODO: stream type?
   */
  async backupAccount(stream: any): Promise<number> {
    return new Promise((resolve, reject) => {
      let total = 0;
      const response = this._accountClient.backupAccount(new BackupAccountRequest(), {password: this._password});
      response.on('data', (chunk: any) => {
        const bytes = (chunk as BackupAccountReply).getZipBytes(); // TODO: right api?
        total += bytes.length;
        stream.write(bytes);
      });
      response.on('error', function(err: any) {
        if(err) reject(err);
      });
      response.on('end', function() {
        resolve(total);
      });
    });
  }
  
  /**
   * Restore the account from zip bytes.
   *
   * Sends chunked requests if size over max grpc envelope size (41943404 bytes).
   * 
   * @param {Uint8Array} zipBytes - the bytes of the zipped account to restore
   */
  async restoreAccount(zipBytes: Uint8Array): Promise<void> {
    if (zipBytes.length === 0) throw new Error("Zip bytes must not be empty")
    const totalLength = zipBytes.byteLength;
    let offset = 0;
    let chunkSize = 4000000; // the max frame size is 4194304 but leave room for http headers
    let hasMore = true;
    // eslint-disable-next-line no-constant-condition
    while (true) {
      if (zipBytes.byteLength <= offset + 1) return;
      if (zipBytes.byteLength <= offset + chunkSize) {
        chunkSize = zipBytes.byteLength - offset - 1;
        hasMore = false;
      }
      const subArray = zipBytes.subarray(offset, offset + chunkSize);
      await this._restoreAccountChunk(subArray, offset, totalLength, hasMore);
      offset += chunkSize;
    }
  }
  
  /**
   * Add a listener to receive notifications from the Haveno daemon.
   *
   * @param {(notification: NotificationMessage) => void} listener - the notification listener to add
   */
  async addNotificationListener(listener: (_notification: NotificationMessage) => void): Promise<void> {
    this._notificationListeners.push(listener);
    return this._updateNotificationListenerRegistration();
  }
  
  /**
   * Remove a notification listener.
   * 
   * @param {(notification: NotificationMessage) => void} listener - the notification listener to remove
   */
  async removeNotificationListener(listener: (_notification: NotificationMessage) => void): Promise<void> {
    const idx = this._notificationListeners.indexOf(listener);
    if (idx > -1) this._notificationListeners.splice(idx, 1);
    else throw new Error("Notification listener is not registered");
    return this._updateNotificationListenerRegistration();
  }
  
  /**
   * Indicates if connected to the Monero network based on last connection check.
   * 
   * @return {boolean} true if connected to the Monero network, false otherwise
   */
  async isConnectedToMonero(): Promise<boolean> {
    const connection = await this.getMoneroConnection();
    return connection !== undefined && 
           connection.getOnlineStatus()! === UrlConnection.OnlineStatus.ONLINE && 
           connection.getAuthenticationStatus()! !== UrlConnection.AuthenticationStatus.NOT_AUTHENTICATED;
  }

  /**
   * Add a Monero daemon connection.
   *
   * @param {string | UrlConnection} connection - daemon url or connection to add
   */
  async addMoneroConnection(connection: string | UrlConnection): Promise<void> {
    return new Promise((resolve, reject) => {
      this._moneroConnectionsClient.addConnection(new AddConnectionRequest().setConnection(typeof connection === "string" ? new UrlConnection().setUrl(connection) : connection), {password: this._password}, function(err: grpcWeb.RpcError) {
        if (err) reject(err);
        else resolve();
      });
    });
  }

  /**
   * Remove a Monero daemon connection.
   *
   * @param {string} url - url of the daemon connection to remove
   */
  async removeMoneroConnection(url: string): Promise<void> {
    return new Promise((resolve, reject) => {
      this._moneroConnectionsClient.removeConnection(new RemoveConnectionRequest().setUrl(url), {password: this._password}, function(err: grpcWeb.RpcError) {
        if (err) reject(err);
        else resolve();
      });
    });
  }

  /**
   * Get the current Monero daemon connection.
   *
   * @return {UrlConnection | undefined} the current daemon connection, undefined if no current connection
   */
  async getMoneroConnection(): Promise<UrlConnection | undefined> {
    return new Promise((resolve, reject) => {
      this._moneroConnectionsClient.getConnection(new GetConnectionRequest(), {password: this._password}, function(err: grpcWeb.RpcError, response: GetConnectionReply) {
        if (err) reject(err);
        else resolve(response.getConnection());
      });
    });
  }

  /**
   * Get all Monero daemon connections.
   *
   * @return {UrlConnection[]} all daemon connections
   */
  async getMoneroConnections(): Promise<UrlConnection[]> {
    return new Promise((resolve, reject) => {
      this._moneroConnectionsClient.getConnections(new GetConnectionsRequest(), {password: this._password}, function(err: grpcWeb.RpcError, response: GetConnectionsReply) {
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
   * If the connection is provided as UrlConnection, overwrite any previously set credentials and priority.
   * If undefined connection provided, disconnect the client.
   *
   * @param {string | UrlConnection} connection - connection to set as current
   */
  async setMoneroConnection(connection?: string | UrlConnection): Promise<void> {
    const request = new SetConnectionRequest();
    if (typeof connection === "string") request.setUrl(connection);
    else request.setConnection(connection);
    return new Promise((resolve, reject) => {
      this._moneroConnectionsClient.setConnection(request, {password: this._password}, function(err: grpcWeb.RpcError) {
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
   * @return {UrlConnection | undefined} the current daemon connection status, undefined if no current connection
   */
  async checkMoneroConnection(): Promise<UrlConnection | undefined> {
    return new Promise((resolve, reject) => {
      this._moneroConnectionsClient.checkConnection(new CheckConnectionRequest(), {password: this._password}, function(err: grpcWeb.RpcError, response: CheckConnectionReply) {
        if (err) reject(err);
        else resolve(response.getConnection());
      });
    });
  }

  /**
   * Check all Monero daemon connections.
   *
   * @return {UrlConnection[]} status of all managed connections.
   */
  async checkMoneroConnections(): Promise<UrlConnection[]> {
    return new Promise((resolve, reject) => {
      this._moneroConnectionsClient.checkConnections(new CheckConnectionsRequest(), {password: this._password}, function(err: grpcWeb.RpcError, response: CheckConnectionsReply) {
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
    return new Promise((resolve, reject) => {
      this._moneroConnectionsClient.startCheckingConnections(new StartCheckingConnectionsRequest().setRefreshPeriod(refreshPeriod), {password: this._password}, function(err: grpcWeb.RpcError) {
        if (err) reject(err);
        else resolve();
      });
    });
  }

  /**
   * Stop checking the connection status periodically.
   */
  async stopCheckingConnection(): Promise<void> {
    return new Promise((resolve, reject) => {
      this._moneroConnectionsClient.stopCheckingConnections(new StopCheckingConnectionsRequest(), {password: this._password}, function(err: grpcWeb.RpcError) {
        if (err) reject(err);
        else resolve();
      });
    });
  }

  /**
   * Get the best available connection in order of priority then response time.
   *
   * @return {UrlConnection | undefined} the best available connection in order of priority then response time, undefined if no connections available
   */
  async getBestAvailableConnection(): Promise<UrlConnection | undefined> {
    return new Promise((resolve, reject) => {
      this._moneroConnectionsClient.getBestAvailableConnection(new GetBestAvailableConnectionRequest(), {password: this._password}, function(err: grpcWeb.RpcError, response: GetBestAvailableConnectionReply) {
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
    return new Promise((resolve, reject) => {
      this._moneroConnectionsClient.setAutoSwitch(new SetAutoSwitchRequest().setAutoSwitch(autoSwitch), {password: this._password}, function(err: grpcWeb.RpcError) {
        if (err) reject(err);
        else resolve();
      });
    });
  }

  /**
   * Returns whether daemon is running a local monero node.
   */
  async isMoneroNodeRunning(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this._moneroNodeClient.isMoneroNodeRunning(new IsMoneroNodeRunningRequest(), {password: this._password}, function(err: grpcWeb.RpcError, response: IsMoneroNodeRunningReply) {
        if (err) reject(err);
        else resolve(response.getIsRunning());
      });
    });
  }

  /**
   * Gets the current local monero node settings.
   */
  async getMoneroNodeSettings(): Promise<MoneroNodeSettings | undefined> {
    return new Promise((resolve, reject) => {
      const request = new GetMoneroNodeSettingsRequest();
      this._moneroNodeClient.getMoneroNodeSettings(request, {password: this._password}, function(err: grpcWeb.RpcError, response: GetMoneroNodeSettingsReply) {
        if (err) reject(err);
        else resolve(response.getSettings());
      });
    });
  }

  /**
   * Starts the local monero node.
   *
   * @param {MoneroNodeSettings} settings - the settings to start the local node with
   */
  async startMoneroNode(settings: MoneroNodeSettings): Promise<void> {
    return new Promise((resolve, reject) => {
      const request = new StartMoneroNodeRequest().setSettings(settings);
      this._moneroNodeClient.startMoneroNode(request, {password: this._password}, function(err: grpcWeb.RpcError) {
        if (err) reject(err);
        else resolve();
      });
    });
  }

  /**
   * Stops the local monero node.
   */
  async stopMoneroNode(): Promise<void> {
    return new Promise((resolve, reject) => {
      this._moneroNodeClient.stopMoneroNode(new StopMoneroNodeRequest(), {password: this._password}, function(err: grpcWeb.RpcError) {
        if (err) reject(err);
        else resolve();
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
    const request = new RegisterDisputeAgentRequest()
        .setDisputeAgentType(disputeAgentType)
        .setRegistrationKey(registrationKey);
    return new Promise((resolve, reject) => {
      this._disputeAgentsClient.registerDisputeAgent(request, {password: this._password}, function(err: grpcWeb.RpcError) {
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
    return new Promise((resolve, reject) => {
      this._walletsClient.getBalances(new GetBalancesRequest().setCurrencyCode("XMR"), {password: this._password}, function(err: grpcWeb.RpcError, response: GetBalancesReply) {
        if (err) reject(err);
        else resolve(response.getBalances()!.getXmr()!);
      });
    });
  }
  
  /**
   * Get the mnemonic seed phrase of the Monero wallet.
   * 
   * @return {string} the mnemonic seed phrase of the Monero wallet
   */
  async getXmrSeed(): Promise<string> {
    return new Promise((resolve, reject) => {
      this._walletsClient.getXmrSeed(new GetXmrSeedRequest(), {password: this._password}, function(err: grpcWeb.RpcError, response: GetXmrSeedReply) {
        if (err) reject(err);
        else resolve(response.getSeed());
      });
    });
  }
  
  /**
   * Get the primary address of the Monero wallet.
   * 
   * @return {string} the primary address of the Monero wallet
   */
  async getXmrPrimaryAddress(): Promise<string> {
    return new Promise((resolve, reject) => {
      this._walletsClient.getXmrPrimaryAddress(new GetXmrPrimaryAddressRequest(), {password: this._password}, function(err: grpcWeb.RpcError, response: GetXmrPrimaryAddressReply) {
        if (err) reject(err);
        else resolve(response.getPrimaryAddress());
      });
    });
  }
  
  /**
   * Get a new subaddress in the Monero wallet to receive deposits.
   * 
   * @return {string} the deposit address (a subaddress in the Haveno wallet)
   */
  async getXmrNewSubaddress(): Promise<string> {
    return new Promise((resolve, reject) => {
      this._walletsClient.getXmrNewSubaddress(new GetXmrNewSubaddressRequest(), {password: this._password}, function(err: grpcWeb.RpcError, response: GetXmrNewSubaddressReply) {
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
    return new Promise((resolve, reject) => {
      this._walletsClient.getXmrTxs(new GetXmrTxsRequest(), {password: this._password}, function(err: grpcWeb.RpcError, response: GetXmrTxsReply) {
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
    const txs = await this.getXmrTxs(); // TODO (woodser): implement getXmrTx(hash) grpc call
    for (const tx of txs) {
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
    return new Promise((resolve, reject) => {
      this._walletsClient.createXmrTx(new CreateXmrTxRequest().setDestinationsList(destinations), {password: this._password}, function(err: grpcWeb.RpcError, response: CreateXmrTxReply) {
        if (err) reject(err);
        else resolve(response.getTx()!);
      });
    });
  }
  
  /**
   * Relay a previously created transaction to send funds from the Monero wallet.
   * 
   * @return {string} the hash of the relayed transaction
   */
  async relayXmrTx(metadata: string): Promise<string> {
    return new Promise((resolve, reject) => {
      this._walletsClient.relayXmrTx(new RelayXmrTxRequest().setMetadata(metadata), {password: this._password}, function(err: grpcWeb.RpcError, response: RelayXmrTxReply) {
        if (err) reject(err);
        else resolve(response.getHash());
      });
    });
  }
  
  /**
   * Get all supported assets codes.
   * 
   * TODO: replace this with getSupportedAssetCodes(): Promise<TradeCurrency[]>)
   * 
   * @return {Promise<string[]>} all supported trade assets
   */
  async getSupportedAssetCodes(): Promise<string[]> {
    const assetCodes: string[] = [];
    for (const price of await this.getPrices()) assetCodes.push(price.getCurrencyCode());
    return assetCodes;
  }
  
  /**
   * Get the current market price per 1 XMR in the given currency.
   *
   * @param {string} assetCode - asset code to get the price of
   * @return {number} the price of the asset per 1 XMR
   */
  async getPrice(assetCode: string): Promise<number> {
    try { // TODO (woodser): try...catch is necessary to preserve stack trace. use throughout client
      return await new Promise((resolve, reject) => {
        this._priceClient.getMarketPrice(new MarketPriceRequest().setCurrencyCode(assetCode), {password: this._password}, function(err: grpcWeb.RpcError, response: MarketPriceReply) {
          if (err) reject(err);
          else resolve(response.getPrice());
        });
      });
    } catch (e: any) {
      throw new Error(e.message);
    }
  }
  
  /**
   * Get the current market prices of all a.
   *
   * @return {MarketPrice[]} prices of the assets per 1 XMR
   */
  async getPrices(): Promise<MarketPriceInfo[]> {
    return new Promise((resolve, reject) => {
      this._priceClient.getMarketPrices(new MarketPricesRequest(), {password: this._password}, function(err: grpcWeb.RpcError, response: MarketPricesReply) {
        if (err) reject(err);
        else resolve(response.getMarketPriceList());
      });
    });
  }
  
  /**
   * Get the market depth of a currency.
   * 
   * @param {string} assetCode - asset to get the market depth of
   * @return {MarketDepthInfo} market depth of the given currency
   */
  async getMarketDepth(assetCode: string): Promise<MarketDepthInfo> {
    return new Promise((resolve, reject) => {
      this._priceClient.getMarketDepth(new MarketDepthRequest().setCurrencyCode(assetCode), {password: this._password}, function(err: grpcWeb.RpcError, response: MarketDepthReply) {
        if (err) reject(err);
        else resolve(response.getMarketDepth()!);
      });
    });
  }
  
  /**
   * Get payment methods.
   * 
   * @param {string} assetCode - get payment methods supporting this asset code (optional)
   * @return {PaymentMethod[]} the payment methods
   */
  async getPaymentMethods(assetCode?: string): Promise<PaymentMethod[]> {
    if (!this._paymentMethods) {
      this._paymentMethods = await new Promise((resolve, reject) => {
        this._paymentAccountsClient.getPaymentMethods(new GetPaymentMethodsRequest(), {password: this._password}, function(err: grpcWeb.RpcError, response: GetPaymentMethodsReply) {
          if (err) reject(err);
          else resolve(response.getPaymentMethodsList());
        });
      });
    }
    if (!assetCode) return this._paymentMethods!;
    const assetPaymentMethods: PaymentMethod[] = [];
    for (const paymentMethod of this._paymentMethods!) {
      if (paymentMethod.getSupportedAssetCodesList().includes(assetCode)) assetPaymentMethods.push(paymentMethod);
    }
    return assetPaymentMethods;
  }
  
  /**
   * Get payment accounts.
   * 
   * @return {PaymentAccount[]} the payment accounts
   */
  async getPaymentAccounts(): Promise<PaymentAccount[]> {
    return new Promise((resolve, reject) => {
      this._paymentAccountsClient.getPaymentAccounts(new GetPaymentAccountsRequest(), {password: this._password}, function(err: grpcWeb.RpcError, response: GetPaymentAccountsReply) {
        if (err) reject(err);
        else resolve(response.getPaymentAccountsList());
      });
    });
  }
  
  /**
   * Get a payment account by id.
   * 
   * @param {string} paymentAccountId - the payment account id to get
   * @return {PaymentAccount} the payment account
   */
  async getPaymentAccount(paymentAccountId: string): Promise<PaymentAccount> {
    // TODO (woodser): implement this on the backend
    const paymentAccounts = await this.getPaymentAccounts(); 
    for (const paymentAccount of paymentAccounts) {
      if (paymentAccount.getId() === paymentAccountId) return paymentAccount;
    }
    throw new Error("No payment account with id " + paymentAccountId);
  }
  
  /**
   * Get a form for the given payment method to complete and create a new payment account.
   * 
   * @return {object} the payment account form as JSON
   */
  async getPaymentAccountForm(paymentMethodId: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this._paymentAccountsClient.getPaymentAccountForm(new GetPaymentAccountFormRequest().setPaymentMethodId(paymentMethodId), {password: this._password}, function(err: grpcWeb.RpcError, response: GetPaymentAccountFormReply) {
        if (err) reject(err);
        else resolve(JSON.parse(response.getPaymentAccountFormJson()));
      });
    });
  }
  
  /**
   * Create a payment account.
   * 
   * @param {object} paymentAccountForm - the completed form as JSON to create the payment account
   * @return {PaymentAccount} the created payment account
   */
  async createPaymentAccount(paymentAccountForm: any): Promise<PaymentAccount> {
    try {
      return await new Promise((resolve, reject) => {
        this._paymentAccountsClient.createPaymentAccount(new CreatePaymentAccountRequest().setPaymentAccountForm(JSON.stringify(paymentAccountForm)), {password: this._password}, function(err: grpcWeb.RpcError, response: CreatePaymentAccountReply) {
          if (err) reject(err);
          else resolve(response.getPaymentAccount()!);
        });
      });
    } catch (e: any) {
      throw new Error(e.message); // re-catch error to preserve stack trace TODO: repeat this pattern throughout this class
    }
  }
  
  /**
   * Create a crypto payment account.
   * 
   * @param {string} accountName - description of the account
   * @param {string} assetCode - traded asset code
   * @param {string} address - payment address of the account
   * @return {PaymentAccount} the created payment account
   */
  async createCryptoPaymentAccount(accountName: string, assetCode: string, address: string): Promise<PaymentAccount> {
    const request = new CreateCryptoCurrencyPaymentAccountRequest()
        .setAccountName(accountName)
        .setCurrencyCode(assetCode)
        .setAddress(address)
        .setTradeInstant(false); // not using instant trades
    try {
      return await new Promise((resolve, reject) => {
        this._paymentAccountsClient.createCryptoCurrencyPaymentAccount(request, {password: this._password}, function(err: grpcWeb.RpcError, response: CreateCryptoCurrencyPaymentAccountReply) {
          if (err) reject(err);
          else resolve(response.getPaymentAccount()!);
        });
      });
    } catch (e: any) {
      throw new Error(e.message);
    }
  }
  
  /**
   * Get available offers to buy or sell XMR.
   * 
   * @param {string} assetCode - traded asset code
   * @param {string|undefined} direction - "buy" or "sell" (default all)
   * @return {OfferInfo[]} the available offers
   */
  async getOffers(assetCode: string, direction?: string): Promise<OfferInfo[]> {
    if (!direction) return (await this.getOffers(assetCode, "buy")).concat(await this.getOffers(assetCode, "sell")); // TODO: implement in backend
    return new Promise((resolve, reject) => {
      this._offersClient.getOffers(new GetOffersRequest().setDirection(direction).setCurrencyCode(assetCode), {password: this._password}, function(err: grpcWeb.RpcError, response: GetOffersReply) {
        if (err) reject(err);
        else resolve(response.getOffersList());
      });
    });
  }
  
  /**
   * Get the user's posted offers to buy or sell XMR.
   * 
   * @param {string} assetCode - traded asset code
   * @param {string|undefined} direction - "buy" or "sell" XMR (default all)
   * @return {OfferInfo[]} the user's created offers
   */
  async getMyOffers(assetCode: string, direction?: string): Promise<OfferInfo[]> {
    if (!direction) return (await this.getMyOffers(assetCode, "buy")).concat(await this.getMyOffers(assetCode, "sell")); // TODO: implement in backend
    return new Promise((resolve, reject) => {
      this._offersClient.getMyOffers(new GetOffersRequest().setDirection(direction).setCurrencyCode(assetCode), {password: this._password}, function(err: grpcWeb.RpcError, response: GetOffersReply) {
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
    return new Promise((resolve, reject) => {
      this._offersClient.getMyOffer(new GetMyOfferRequest().setId(offerId), {password: this._password}, function(err: grpcWeb.RpcError, response: GetMyOfferReply) {
        if (err) reject(err);
        else resolve(response.getOffer()!);
      });
    });
  }
  
  /**
   * Post an offer.
   * 
   * @param {string} direction - "buy" or "sell" XMR
   * @param {bigint} amount - amount of XMR to trade
   * @param {string} assetCode - asset code to trade for XMR
   * @param {string} paymentAccountId - payment account id
   * @param {number} buyerSecurityDepositPct - buyer security deposit as % of trade amount
   * @param {number} price - trade price (optional, default to market price)
   * @param {number} marketPriceMarginPct - if using market price, % from market price to accept (optional, default 0%)
   * @param {bigint} minAmount - minimum amount to trade (optional, default to fixed amount)
   * @param {number} triggerPrice - price to remove offer (optional)
   * @return {OfferInfo} the posted offer 
   */
  async postOffer(direction: string,
                  amount: bigint,
                  assetCode: string,
                  paymentAccountId: string,
                  buyerSecurityDepositPct: number,
                  price?: number,
                  marketPriceMarginPct?: number,
                  triggerPrice?: number,
                  minAmount?: bigint): Promise<OfferInfo> {
    const request = new CreateOfferRequest()
        .setDirection(direction)
        .setAmount(amount.toString())
        .setCurrencyCode(assetCode)
        .setPaymentAccountId(paymentAccountId)
        .setBuyerSecurityDepositPct(buyerSecurityDepositPct)
        .setPrice(price ? price.toString() : "1.0")  // TOOD (woodser): positive price required even if using market price?
        .setUseMarketBasedPrice(price === undefined) // TODO (woodser): this field is redundant; remove from api
        .setMinAmount(minAmount ? minAmount.toString() : amount.toString());
    if (marketPriceMarginPct) request.setMarketPriceMarginPct(marketPriceMarginPct);
    if (triggerPrice) request.setTriggerPrice(triggerPrice.toString());
    return new Promise((resolve, reject) => {
      this._offersClient.createOffer(request, {password: this._password}, function(err: grpcWeb.RpcError, response: CreateOfferReply) {
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
    return new Promise((resolve, reject) => {
      this._offersClient.cancelOffer(new CancelOfferRequest().setId(offerId), {password: this._password}, function(err: grpcWeb.RpcError) {
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
    const request = new TakeOfferRequest()
        .setOfferId(offerId)
        .setPaymentAccountId(paymentAccountId);
    return new Promise((resolve, reject) => {
      this._tradesClient.takeOffer(request, {password: this._password}, function(err: grpcWeb.RpcError, response: TakeOfferReply) {
        if (err) reject(err);
        else if (response.getFailureReason() && response.getFailureReason()!.getAvailabilityResult() !== AvailabilityResult.AVAILABLE) reject(new Error(response.getFailureReason()!.getDescription())); // TODO: api should throw grpcWeb.RpcError
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
    return new Promise((resolve, reject) => {
      this._tradesClient.getTrade(new GetTradeRequest().setTradeId(tradeId), {password: this._password}, function(err: grpcWeb.RpcError, response: GetTradeReply) {
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
    return new Promise((resolve, reject) => {
      this._tradesClient.getTrades(new GetTradesRequest(), {password: this._password}, function(err: grpcWeb.RpcError, response: GetTradesReply) {
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
    return new Promise((resolve, reject) => {
      this._tradesClient.confirmPaymentStarted(new ConfirmPaymentStartedRequest().setTradeId(tradeId), {password: this._password}, function(err: grpcWeb.RpcError) {
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
    return new Promise((resolve, reject) => {
      this._tradesClient.confirmPaymentReceived(new ConfirmPaymentReceivedRequest().setTradeId(tradeId), {password: this._password}, function(err: grpcWeb.RpcError) {
        if (err) reject(err);
        else resolve();
      });
    });
  }

  /**
   * Get all chat messages for a trade.
   *
   * @param {string} tradeId - the id of the trade
   */
  async getChatMessages(tradeId: string): Promise<ChatMessage[]> {
    return new Promise((resolve, reject) => {
      const request = new GetChatMessagesRequest().setTradeId(tradeId);
      this._tradesClient.getChatMessages(request, {password: this._password}, function(err: grpcWeb.RpcError, response: GetChatMessagesReply) {
        if (err) reject(err);
        else resolve(response.getMessageList());
      });
    });
  }

  /**
   * Send a trade chat message.
   *
   * @param {string} tradeId - the id of the trade
   * @param {string} message - the message
   */
  async sendChatMessage(tradeId: string, message: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const request = new SendChatMessageRequest()
            .setTradeId(tradeId)
            .setMessage(message);
      this._tradesClient.sendChatMessage(request, {password: this._password}, function(err: grpcWeb.RpcError) {
        if (err) reject(err);
        else resolve();
      });
    });
  }
  
  /**
   * Get a dispute by trade id.
   *
   * @param {string} tradeId - the id of the trade
   */
  async getDispute(tradeId: string): Promise<Dispute> {
    return new Promise((resolve, reject) => {
      this._disputesClient.getDispute(new GetDisputeRequest().setTradeId(tradeId), {password: this._password}, function(err: grpcWeb.RpcError, response: GetDisputeReply) {
        if (err) reject(err);
        else resolve(response.getDispute()!);
      });
    });
  }
  
  /**
   * Get all disputes.
   */
  async getDisputes(): Promise<Dispute[]> {
    return new Promise((resolve, reject) => {
      this._disputesClient.getDisputes(new GetDisputesRequest(), {password: this._password}, function(err: grpcWeb.RpcError, response: GetDisputesReply) {
        if (err) reject(err);
        else resolve(response.getDisputesList());
      });
    });
  }
  
  /**
   * Open a dispute for a trade.
   *
   * @param {string} tradeId - the id of the trade
   */
  async openDispute(tradeId: string): Promise<void> {
    return new Promise((resolve, reject) => {
      this._disputesClient.openDispute(new OpenDisputeRequest().setTradeId(tradeId), {password: this._password}, function(err: grpcWeb.RpcError) {
        if (err) reject(err);
        else resolve();
      });
    });
  }
  
  /**
   * Resolve a dispute. By default, the winner receives the trade amount and the security deposits are returned,
   * but the arbitrator may award a custom amount to the winner.
   *
   * @param {string} tradeId - the id of the trade
   * @param {DisputeResult.Winner} winner - the winner of the dispute
   * @param {DisputeResult.Reason} reason - the reason for the dispute
   * @param {string} summaryNotes - summary of the dispute
   * @param {bigint} customWinnerAmount - custom amount to award the winner (optional)
   */
  async resolveDispute(tradeId: string, winner: DisputeResult.Winner, reason: DisputeResult.Reason, summaryNotes: string, customWinnerAmount?: bigint): Promise<void> {
    return new Promise((resolve, reject) => {
      const request = new ResolveDisputeRequest()
          .setTradeId(tradeId)
          .setWinner(winner)
          .setReason(reason)
          .setSummaryNotes(summaryNotes)
          .setCustomPayoutAmount(customWinnerAmount ? customWinnerAmount.toString() : "0");
      this._disputesClient.resolveDispute(request, {password: this._password}, function(err: grpcWeb.RpcError) {
        if (err) reject(err);
        else resolve();
      });
    });
  }
  
  /**
   * Send a dispute chat message.
   *
   * @param {string} disputeId - the id of the dispute
   * @param {string} message - the message
   * @param {Attachment[]} attachments - attachments
   */
  async sendDisputeChatMessage(disputeId: string, message: string, attachments: Attachment[]): Promise<void> {
    return new Promise((resolve, reject) => {
      const request = new SendDisputeChatMessageRequest()
          .setDisputeId(disputeId)
          .setMessage(message)
          .setAttachmentsList(attachments);
      this._disputesClient.sendDisputeChatMessage(request, {password: this._password}, function(err: grpcWeb.RpcError) {
        if (err) reject(err);
        else resolve();
      });
    });
  }
  
  /**
   * Disconnect this client from the server.
   */
  async disconnect() {
    while (this._notificationListeners.length) await this.removeNotificationListener(this._notificationListeners[0]);
  }
  
  /**
   * Shutdown the Haveno daemon server and stop the process if applicable.
   */
  async shutdownServer() {
    await this.disconnect();
    await new Promise<void>((resolve, reject) => {
      this._shutdownServerClient.stop(new StopRequest(), {password: this._password}, function(err: grpcWeb.RpcError) { // process receives 'exit' event
        if (err) reject(err);
        else resolve();
      });
    });
    if (this._process) return HavenoUtils.kill(this._process);
  }
  
  // ------------------------------- HELPERS ----------------------------------
  
  /**
   * Wait for the application to be fully initialized with an account and a
   * connection to the Haveno network.
   * 
   * TODO:
   *  
   * Currently when the application starts, the account is first initialized with createAccount()
   * or openAccount() which return immediately. A notification is sent after all setup is complete and
   * the application is connected to the Haveno network.
   * 
   * Ideally when the application starts, the system checks the Haveno network connection, supporting
   * havenod.isHavenoConnectionInitialized() and havenod.awaitHavenoConnectionInitialized().
   * Independently, gRPC createAccount() and openAccount() return after all account setup and reading from disk.
   * 
   * @hidden
   */
  async _awaitAppInitialized(): Promise<void> {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve) => {
      let isResolved = false;
      const resolveOnce = async () => {
        if (isResolved) return;
        isResolved = true;
        await this.removeNotificationListener(listener);
        resolve();
      };
      const listener = async function(notification: NotificationMessage) {
        if (notification.getType() === NotificationMessage.NotificationType.APP_INITIALIZED) await resolveOnce();
      }
      await this.addNotificationListener(listener);
      if (await this._isAppInitialized()) await resolveOnce();
    });
  }
  
  // @hidden
  async _isAppInitialized(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this._accountClient.isAppInitialized(new IsAppInitializedRequest(), {password: this._password}, function(err: grpcWeb.RpcError, response: IsAppInitializedReply) {
        if (err) reject(err);
        else resolve(response.getIsAppInitialized());
      });
    });
  }
  
  /**
   * Update notification listener registration.
   * Due to the nature of grpc streaming, this method returns a promise
   * which may be resolved before the listener is actually registered.
   */
  async _updateNotificationListenerRegistration(): Promise<void> {
    const listening = this._notificationListeners.length > 0;
    if (listening && this._notificationStream || !listening && !this._notificationStream) return; // no difference
    if (listening) {
      return new Promise((resolve) => {
      
        // send request to register client listener
        this._notificationStream = this._notificationsClient.registerNotificationListener(new RegisterNotificationListenerRequest(), {password: this._password})
          .on('data', (data) => {
            if (data instanceof NotificationMessage) {
              for (const listener of this._notificationListeners) listener(data);
            }
          });
        
        // periodically send keep alive requests // TODO (woodser): better way to keep notification stream alive?
        let firstRequest = true;
        this._keepAliveLooper = new TaskLooper(async () => {
          if (firstRequest) {
            firstRequest = false;
            return;
          }
          await this._sendNotification(new NotificationMessage()
                  .setType(NotificationMessage.NotificationType.KEEP_ALIVE)
                  .setTimestamp(Date.now()));
        });
        this._keepAliveLooper.start(this._keepAlivePeriodMs);
        
        setTimeout(resolve, 1000); // TODO: call returns before listener registered
      });
    } else {
      this._keepAliveLooper.stop();
      this._notificationStream!.cancel();
      this._notificationStream = undefined;
    }
  }

  /**
   * Send a notification.
   * 
   * @hidden
   * @param {NotificationMessage} notification - notification to send
   */
  async _sendNotification(notification: NotificationMessage): Promise<void> {
    return new Promise((resolve, reject) => {
      this._notificationsClient.sendNotification(new SendNotificationRequest().setNotification(notification), {password: this._password}, function(err: grpcWeb.RpcError) {
        if (err) reject(err);
        else resolve();
      });
    });
  }

  /**
   * Restore an account chunk from zip bytes.
   * 
   * @hidden
   */
  async _restoreAccountChunk(zipBytes: Uint8Array, offset: number, totalLength: number, hasMore: boolean): Promise<void> {
    const request = new RestoreAccountRequest()
        .setZipBytes(zipBytes)
        .setOffset(offset)
        .setTotalLength(totalLength)
        .setHasMore(hasMore);
    return new Promise((resolve, reject) => {
      this._accountClient.restoreAccount(request, {password: this._password}, function(err: grpcWeb.RpcError) {
        if (err) reject(err);
        else resolve();
      });
    });
  }
}
