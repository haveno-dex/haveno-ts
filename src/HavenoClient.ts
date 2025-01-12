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


import console from "console";
import HavenoError from "./types/HavenoError";
import HavenoUtils from "./utils/HavenoUtils";
import TaskLooper from "./utils/TaskLooper";
import type * as grpcWeb from "grpc-web";
import { GetTradeStatisticsClient, GetVersionClient, AccountClient, XmrConnectionsClient, DisputesClient, DisputeAgentsClient, NotificationsClient, WalletsClient, PriceClient, OffersClient, PaymentAccountsClient, TradesClient, ShutdownServerClient, XmrNodeClient } from './protobuf/GrpcServiceClientPb';
import { GetTradeStatisticsRequest, GetTradeStatisticsReply, GetVersionRequest, GetVersionReply, IsAppInitializedRequest, IsAppInitializedReply, RegisterDisputeAgentRequest, UnregisterDisputeAgentRequest, MarketPriceRequest, MarketPriceReply, MarketPricesRequest, MarketPricesReply, MarketPriceInfo, MarketDepthRequest, MarketDepthReply, MarketDepthInfo, GetBalancesRequest, GetBalancesReply, XmrBalanceInfo, GetMyOfferRequest, GetMyOfferReply, GetOffersRequest, GetOffersReply, OfferInfo, GetPaymentMethodsRequest, GetPaymentMethodsReply, GetPaymentAccountFormRequest, CreatePaymentAccountRequest, ValidateFormFieldRequest, CreatePaymentAccountReply, GetPaymentAccountFormReply, GetPaymentAccountsRequest, GetPaymentAccountsReply, CreateCryptoCurrencyPaymentAccountRequest, CreateCryptoCurrencyPaymentAccountReply, DeletePaymentAccountRequest, DeletePaymentAccountReply, PostOfferRequest, PostOfferReply, CancelOfferRequest, TakeOfferRequest, TakeOfferReply, TradeInfo, GetTradeRequest, GetTradeReply, GetTradesRequest, GetTradesReply, GetXmrSeedRequest, GetXmrSeedReply, GetXmrPrimaryAddressRequest, GetXmrPrimaryAddressReply, GetXmrNewSubaddressRequest, GetXmrNewSubaddressReply, ConfirmPaymentSentRequest, ConfirmPaymentReceivedRequest, CompleteTradeRequest, XmrTx, GetXmrTxsRequest, GetXmrTxsReply, XmrDestination, CreateXmrTxRequest, CreateXmrTxReply, RelayXmrTxRequest, RelayXmrTxReply, CreateAccountRequest, AccountExistsRequest, AccountExistsReply, DeleteAccountRequest, OpenAccountRequest, IsAccountOpenRequest, IsAccountOpenReply, CloseAccountRequest, ChangePasswordRequest, BackupAccountRequest, BackupAccountReply, RestoreAccountRequest, StopRequest, NotificationMessage, RegisterNotificationListenerRequest, SendNotificationRequest, UrlConnection, AddConnectionRequest, RemoveConnectionRequest, GetConnectionRequest, GetConnectionsRequest, SetConnectionRequest, CheckConnectionRequest, CheckConnectionsReply, CheckConnectionsRequest, StartCheckingConnectionRequest, StopCheckingConnectionRequest, GetBestConnectionRequest, SetAutoSwitchRequest, GetAutoSwitchRequest, CheckConnectionReply, GetConnectionsReply, GetConnectionReply, GetBestConnectionReply, GetDisputeRequest, GetDisputeReply, GetDisputesRequest, GetDisputesReply, OpenDisputeRequest, ResolveDisputeRequest, SendDisputeChatMessageRequest, SendChatMessageRequest, GetChatMessagesRequest, GetChatMessagesReply, StartXmrNodeRequest, StopXmrNodeRequest, IsXmrNodeOnlineRequest, IsXmrNodeOnlineReply, GetXmrNodeSettingsRequest, GetXmrNodeSettingsReply } from "./protobuf/grpc_pb";
import { TradeStatistics3, OfferDirection, PaymentMethod, PaymentAccountForm, PaymentAccountFormField, PaymentAccount, PaymentAccountPayload, AvailabilityResult, Attachment, DisputeResult, Dispute, ChatMessage, XmrNodeSettings } from "./protobuf/pb_pb";

/**
 * Haveno daemon client.
 */
export default class HavenoClient {

  // grpc clients
  /** @private */ _appName: string | undefined;
  /** @private */ _getTradeStatisticsClient: GetTradeStatisticsClient;
  /** @private */ _getVersionClient: GetVersionClient;
  /** @private */ _disputeAgentsClient: DisputeAgentsClient;
  /** @private */ _disputesClient: DisputesClient;
  /** @private */ _notificationsClient: NotificationsClient;
  /** @private */ _notificationStream: grpcWeb.ClientReadableStream<NotificationMessage> | undefined;
  /** @private */ _xmrConnectionsClient: XmrConnectionsClient;
  /** @private */ _xmrNodeClient: XmrNodeClient;
  /** @private */ _walletsClient: WalletsClient;
  /** @private */ _priceClient: PriceClient;
  /** @private */ _paymentAccountsClient: PaymentAccountsClient;
  /** @private */ _offersClient: OffersClient;
  /** @private */ _tradesClient: TradesClient;
  /** @private */ _accountClient: AccountClient;
  /** @private */ _shutdownServerClient: ShutdownServerClient;

  // state variables
  /** @private */ _url: string;
  /** @private */ _password: string;
  /** @private */ _process: any;
  /** @private */ _processLogging = false;
  /** @private */ _walletRpcPort: number | undefined;
  /** @private */ _notificationListeners: ((_notification: NotificationMessage) => void)[] = [];
  /** @private */ _registerNotificationListenerCalled = false;
  /** @private */ _keepAliveLooper: any;
  /** @private */ _keepAlivePeriodMs = 60000;
  /** @private */ _paymentMethods: PaymentMethod[] | undefined; // cached for performance

  // constants
  /** @private */ static readonly _fullyInitializedMessage = "Application fully initialized";
  /** @private */ static readonly _loginRequiredMessage = "Interactive login required";

  /**
   * Construct a client connected to a Haveno daemon.
   *
   * @param {string} url - Haveno daemon url
   * @param {string} password - Haveno daemon password
   */
  constructor(url: string, password: string) {
    if (!url) throw new HavenoError("Must provide URL of Haveno daemon");
    if (!password) throw new HavenoError("Must provide password of Haveno daemon");
    HavenoUtils.log(2, "Creating Haveno client connected to " + url);
    this._url = url;
    this._password = password;
    this._getTradeStatisticsClient = new GetTradeStatisticsClient(this._url);
    this._getVersionClient = new GetVersionClient(this._url);
    this._accountClient = new AccountClient(this._url);
    this._xmrConnectionsClient = new XmrConnectionsClient(this._url);
    this._xmrNodeClient = new XmrNodeClient(this._url);
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
   * @return {HavenoClient} a client connected to the newly started Haveno process
   */
  static async startProcess(havenoPath: string, cmd: string[], url: string, enableLogging: boolean): Promise<HavenoClient> {
    try {
      return await new Promise((resolve, reject) => {
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
    } catch (e: any) {
      throw new HavenoError(e.message, e.code);
    }
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
    if (this._process === undefined) throw new HavenoError("haveno instance not created from new process");
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
    try {
      return (await this._getVersionClient.getVersion(new GetVersionRequest(), {password: this._password})).getVersion();
    } catch (e: any) {
      throw new HavenoError(e.message, e.code);
    }
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
    try {
      return (await this._accountClient.accountExists(new AccountExistsRequest(), {password: this._password})).getAccountExists();
    } catch (e: any) {
      throw new HavenoError(e.message, e.code);
    }
  }
  
  /**
   * Indicates if the Haveno account is open and authenticated with the correct password.
   * 
   * @return {boolean} true if the account is open and authenticated, false otherwise
   */
  async isAccountOpen(): Promise<boolean> {
    try {
      return (await this._accountClient.isAccountOpen(new IsAccountOpenRequest(), {password: this._password})).getIsAccountOpen();
    } catch (e: any) {
      throw new HavenoError(e.message, e.code);
    }
  }
  
  /**
   * Create and open a new Haveno account.
   * 
   * @param {string} password - the password to encrypt the account
   */
  async createAccount(password: string): Promise<void> {
    try {
      await this._accountClient.createAccount(new CreateAccountRequest().setPassword(password), {password: this._password});
      await this._awaitAppInitialized(); // TODO: grpc should not return before setup is complete
    } catch (e: any) {
      throw new HavenoError(e.message, e.code);
    }
  }
  
  /**
   * Open existing Haveno account.
   * 
   * @param {string} password - the account password
   */
  async openAccount(password: string): Promise<void> {
    try {
      await this._accountClient.openAccount(new OpenAccountRequest().setPassword(password), {password: this._password});
      return this._awaitAppInitialized(); // TODO: grpc should not return before setup is complete
    } catch (e: any) {
      throw new HavenoError(e.message, e.code);
    }
  }
  
  /**
   * Change the Haveno account password.
   * 
   * @param {string} password - the new account password
   */
  async changePassword(oldPassword: string, newPassword: string): Promise<void> {
    try {
      const request = new ChangePasswordRequest()
          .setOldPassword(oldPassword)
          .setNewPassword(newPassword);
      await this._accountClient.changePassword(request, {password: this._password});
    } catch (e: any) {
      throw new HavenoError(e.message, e.code);
    }
  }
  
  /**
   * Close the currently open account.
   */
  async closeAccount(): Promise<void> {
    try {
      await this._accountClient.closeAccount(new CloseAccountRequest(), {password: this._password});
    } catch (e: any) {
      throw new HavenoError(e.message, e.code);
    }
  }
  
  /**
   * Permanently delete the Haveno account.
   */
  async deleteAccount(): Promise<void> {
    try {
      await this._accountClient.deleteAccount(new DeleteAccountRequest(), {password: this._password});
    } catch (e: any) {
      throw new HavenoError(e.message, e.code);
    }
  }
  
  /**
   * Backup the account to the given stream. TODO: stream type?
   */
  async backupAccount(stream: any): Promise<number> {
    try {
      return await new Promise((resolve, reject) => {
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
    } catch (e: any) {
      throw new HavenoError(e.message, e.code);
    }
  }
  
  /**
   * Restore the account from zip bytes.
   *
   * Sends chunked requests if size over max grpc envelope size (41943404 bytes).
   * 
   * @param {Uint8Array} zipBytes - the bytes of the zipped account to restore
   */
  async restoreAccount(zipBytes: Uint8Array): Promise<void> {
    if (zipBytes.length === 0) throw new HavenoError("Zip bytes must not be empty")
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
    await this._updateNotificationListenerRegistration();
  }
  
  /**
   * Remove a notification listener.
   * 
   * @param {(notification: NotificationMessage) => void} listener - the notification listener to remove
   */
  async removeNotificationListener(listener: (_notification: NotificationMessage) => void): Promise<void> {
    const idx = this._notificationListeners.indexOf(listener);
    if (idx > -1) this._notificationListeners.splice(idx, 1);
    else throw new HavenoError("Notification listener is not registered");
    await this._updateNotificationListenerRegistration();
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
    try {
      await this._xmrConnectionsClient.addConnection(new AddConnectionRequest().setConnection(typeof connection === "string" ? new UrlConnection().setUrl(connection) : connection), {password: this._password});
    } catch (e: any) {
      throw new HavenoError(e.message, e.code);
    }
  }

  /**
   * Remove a Monero daemon connection.
   *
   * @param {string} url - url of the daemon connection to remove
   */
  async removeMoneroConnection(url: string): Promise<void> {
    try {
      await this._xmrConnectionsClient.removeConnection(new RemoveConnectionRequest().setUrl(url), {password: this._password});
    } catch (e: any) {
      throw new HavenoError(e.message, e.code);
    }
  }

  /**
   * Get the current Monero daemon connection.
   *
   * @return {UrlConnection | undefined} the current daemon connection, undefined if no current connection
   */
  async getMoneroConnection(): Promise<UrlConnection | undefined> {
    try {
      return await (await this._xmrConnectionsClient.getConnection(new GetConnectionRequest(), {password: this._password})).getConnection();
    } catch (e: any) {
      throw new HavenoError(e.message, e.code);
    }
  }

  /**
   * Get all Monero daemon connections.
   *
   * @return {UrlConnection[]} all daemon connections
   */
  async getMoneroConnections(): Promise<UrlConnection[]> {
    try {
      return (await this._xmrConnectionsClient.getConnections(new GetConnectionsRequest(), {password: this._password})).getConnectionsList();
    } catch (e: any) {
      throw new HavenoError(e.message, e.code);
    }
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
    try {
      await this._xmrConnectionsClient.setConnection(request, {password: this._password});
    } catch (e: any) {
      throw new HavenoError(e.message, e.code);
    }
  }

  /**
   * Check the current Monero daemon connection.
   *
   * If disconnected and auto switch enabled, switch to the best available connection and return its status.
   *
   * @return {UrlConnection | undefined} the current daemon connection status, undefined if no current connection
   */
  async checkMoneroConnection(): Promise<UrlConnection | undefined> {
    try {
      return (await this._xmrConnectionsClient.checkConnection(new CheckConnectionRequest(), {password: this._password})).getConnection();
    } catch (e: any) {
      throw new HavenoError(e.message, e.code);
    }
  }

  /**
   * Check all Monero daemon connections.
   *
   * @return {UrlConnection[]} status of all managed connections.
   */
  async checkMoneroConnections(): Promise<UrlConnection[]> {
    try {
      return (await this._xmrConnectionsClient.checkConnections(new CheckConnectionsRequest(), {password: this._password})).getConnectionsList();
    } catch (e: any) {
      throw new HavenoError(e.message, e.code);
    }
  }

  /**
   * Check the connection and start checking the connection periodically.
   *
   * @param {number} refreshPeriod - time between checks in milliseconds (default 15000 ms or 15 seconds)
   */
  async startCheckingConnection(refreshPeriod: number): Promise<void> {
    try {
      await this._xmrConnectionsClient.startCheckingConnection(new StartCheckingConnectionRequest().setRefreshPeriod(refreshPeriod), {password: this._password});
    } catch (e: any) {
      throw new HavenoError(e.message, e.code);
    }
  }

  /**
   * Stop checking the connection status periodically.
   */
  async stopCheckingConnection(): Promise<void> {
    try {
      await this._xmrConnectionsClient.stopCheckingConnection(new StopCheckingConnectionRequest(), {password: this._password});
    } catch (e: any) {
      throw new HavenoError(e.message, e.code);
    }
  }

  /**
   * Get the best connection in order of priority then response time.
   *
   * @return {UrlConnection | undefined} the best connection in order of priority then response time, undefined if no connections
   */
  async getBestConnection(): Promise<UrlConnection | undefined> {
    try {
      return (await this._xmrConnectionsClient.getBestConnection(new GetBestConnectionRequest(), {password: this._password})).getConnection();
    } catch (e: any) {
      throw new HavenoError(e.message, e.code);
    }
  }
  
  /**
   * Automatically switch to the best available connection if current connection is disconnected after being checked.
   *
   * @param {boolean} autoSwitch - whether auto switch is enabled or disabled
   */
  async setAutoSwitch(autoSwitch: boolean): Promise<void> {
    try {
      await this._xmrConnectionsClient.setAutoSwitch(new SetAutoSwitchRequest().setAutoSwitch(autoSwitch), {password: this._password});
    } catch (e: any) {
      throw new HavenoError(e.message, e.code);
    }
  }

  /**
   * Get the current auto switch setting.
   * 
   * @return {boolean} whether auto switch is enabled or disabled
   */
  async getAutoSwitch(): Promise<boolean> {
    try {
      return (await this._xmrConnectionsClient.getAutoSwitch(new GetAutoSwitchRequest(), {password: this._password})).getAutoSwitch();
    } catch (e: any) {
      throw new HavenoError(e.message, e.code);
    }
  }

  /**
   * Returns whether daemon is running a local monero node.
   */
  async isMoneroNodeOnline(): Promise<boolean> {
    try {
      return (await this._xmrNodeClient.isXmrNodeOnline(new IsXmrNodeOnlineRequest(), {password: this._password})).getIsRunning();
    } catch (e: any) {
      throw new HavenoError(e.message, e.code);
    }
  }

  /**
   * Gets the current local monero node settings.
   */
  async getMoneroNodeSettings(): Promise<XmrNodeSettings | undefined> {
    try {
      const request = new GetXmrNodeSettingsRequest();
      return (await this._xmrNodeClient.getXmrNodeSettings(request, {password: this._password})).getSettings();
    } catch (e: any) {
      throw new HavenoError(e.message, e.code);
    }
  }

  /**
   * Starts the local monero node.
   *
   * @param {MoneroNodeSettings} settings - the settings to start the local node with
   */
  async startMoneroNode(settings: XmrNodeSettings): Promise<void> {
    try {
      const request = new StartXmrNodeRequest().setSettings(settings);
      await this._xmrNodeClient.startXmrNode(request, {password: this._password});
    } catch (e: any) {
      throw new HavenoError(e.message, e.code);
    }
  }

  /**
   * Stops the local monero node.
   */
  async stopMoneroNode(): Promise<void> {
    try {
      await this._xmrNodeClient.stopXmrNode(new StopXmrNodeRequest(), {password: this._password});
    } catch (e: any) {
      throw new HavenoError(e.message, e.code);
    }
  }
  
  /**
   * Register as a dispute agent.
   * 
   * @param {string} disputeAgentType - type of dispute agent to register, e.g. mediator, refundagent
   * @param {string} registrationKey - registration key
   */
  async registerDisputeAgent(disputeAgentType: string, registrationKey: string): Promise<void> {
    try {
      const request = new RegisterDisputeAgentRequest()
          .setDisputeAgentType(disputeAgentType)
          .setRegistrationKey(registrationKey);
      await this._disputeAgentsClient.registerDisputeAgent(request, {password: this._password});
    } catch (e: any) {
      throw new HavenoError(e.message, e.code);
    }
  }
  
  /**
   * Unregister as a dispute agent.
   * 
   * @param {string} disputeAgentType - type of dispute agent to register, e.g. mediator, refundagent
   */
  async unregisterDisputeAgent(disputeAgentType: string): Promise<void> {
    try {
      await this._disputeAgentsClient.unregisterDisputeAgent(new UnregisterDisputeAgentRequest().setDisputeAgentType(disputeAgentType), {password: this._password});
    } catch (e: any) {
      throw new HavenoError(e.message, e.code);
    }
  }
  
  /**
   * Get the user's balances.
   * 
   * @return {XmrBalanceInfo} the user's balances
   */
  async getBalances(): Promise<XmrBalanceInfo> {
    try {
      return (await this._walletsClient.getBalances(new GetBalancesRequest().setCurrencyCode("XMR"), {password: this._password})).getBalances()!.getXmr()!;
    } catch (e: any) {
      throw new HavenoError(e.message, e.code);
    }
  }
  
  /**
   * Get the mnemonic seed phrase of the Monero wallet.
   * 
   * @return {string} the mnemonic seed phrase of the Monero wallet
   */
  async getXmrSeed(): Promise<string> {
    try {
      return (await this._walletsClient.getXmrSeed(new GetXmrSeedRequest(), {password: this._password})).getSeed();
    } catch (e: any) {
      throw new HavenoError(e.message, e.code);
    }
  }
  
  /**
   * Get the primary address of the Monero wallet.
   * 
   * @return {string} the primary address of the Monero wallet
   */
  async getXmrPrimaryAddress(): Promise<string> {
    try {
      return (await this._walletsClient.getXmrPrimaryAddress(new GetXmrPrimaryAddressRequest(), {password: this._password})).getPrimaryAddress();
    } catch (e: any) {
      throw new HavenoError(e.message, e.code);
    }
  }
  
  /**
   * Get a new subaddress in the Monero wallet to receive deposits.
   * 
   * @return {string} the deposit address (a subaddress in the Haveno wallet)
   */
  async getXmrNewSubaddress(): Promise<string> {
    try {
      return (await this._walletsClient.getXmrNewSubaddress(new GetXmrNewSubaddressRequest(), {password: this._password})).getSubaddress();
    } catch (e: any) {
      throw new HavenoError(e.message, e.code);
    }
  }
  
  /**
   * Get all transactions in the Monero wallet.
   * 
   * @return {XmrTx[]} the transactions
   */
  async getXmrTxs(): Promise<XmrTx[]> {
    try {
      return (await this._walletsClient.getXmrTxs(new GetXmrTxsRequest(), {password: this._password})).getTxsList();
    } catch (e: any) {
      throw new HavenoError(e.message, e.code);
    }
  }
  
  /**
   * Get a transaction by hash in the Monero wallet.
   * 
   * @param {String} txHash - hash of the transaction to get
   * @return {XmrTx} the transaction with the hash
   */
  async getXmrTx(txHash: string): Promise<XmrTx|undefined> {
    const txs = await this.getXmrTxs(); // TODO (woodser): implement getXmrTx(hash) grpc call
    for (const tx of txs) {
      if (tx.getHash() === txHash) return tx;
    }
    return undefined;
  }
  
  /**
   * Create but do not relay a transaction to send funds from the Monero wallet.
   * 
   * @return {XmrTx} the created transaction
   */
  async createXmrTx(destinations: XmrDestination[]): Promise<XmrTx> {
    try {
      return (await this._walletsClient.createXmrTx(new CreateXmrTxRequest().setDestinationsList(destinations), {password: this._password})).getTx()!;
    } catch (e: any) {
      throw new HavenoError(e.message, e.code);
    }
  }
  
  /**
   * Relay a previously created transaction to send funds from the Monero wallet.
   * 
   * @return {string} the hash of the relayed transaction
   */
  async relayXmrTx(metadata: string): Promise<string> {
    try {
      return (await this._walletsClient.relayXmrTx(new RelayXmrTxRequest().setMetadata(metadata), {password: this._password})).getHash();
    } catch (e: any) {
      throw new HavenoError(e.message, e.code);
    }
  }
  
  /**
   * Get all asset codes with price information.
   * 
   * TODO: replace this with getSupportedAssetCodes(): Promise<TradeCurrency[]>)
   * 
   * @return {Promise<string[]>} all supported trade assets
   */
  async getPricedAssetCodes(): Promise<string[]> {
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
    try {
      return (await this._priceClient.getMarketPrice(new MarketPriceRequest().setCurrencyCode(assetCode), {password: this._password})).getPrice();
    } catch (e: any) {
      throw new HavenoError(e.message, e.code);
    }
  }
  
  /**
   * Get the current market prices of all a.
   *
   * @return {MarketPrice[]} prices of the assets per 1 XMR
   */
  async getPrices(): Promise<MarketPriceInfo[]> {
    try {
      return (await this._priceClient.getMarketPrices(new MarketPricesRequest(), {password: this._password})).getMarketPriceList();
    } catch (e: any) {
      throw new HavenoError(e.message, e.code);
    }
  }
  
  /**
   * Get the market depth of a currency.
   * 
   * @param {string} assetCode - asset to get the market depth of
   * @return {MarketDepthInfo} market depth of the given currency
   */
  async getMarketDepth(assetCode: string): Promise<MarketDepthInfo> {
    try {
      return (await this._priceClient.getMarketDepth(new MarketDepthRequest().setCurrencyCode(assetCode), {password: this._password})).getMarketDepth()!;
    } catch (e: any) {
      throw new HavenoError(e.message, e.code);
    }
  }
  
  /**
   * Get payment methods.
   * 
   * @param {string} assetCode - get payment methods supporting this asset code (optional)
   * @return {PaymentMethod[]} the payment methods
   */
  async getPaymentMethods(assetCode?: string): Promise<PaymentMethod[]> {
    try {
      if (!this._paymentMethods) {
        this._paymentMethods = (await this._paymentAccountsClient.getPaymentMethods(new GetPaymentMethodsRequest(), {password: this._password})).getPaymentMethodsList();
      }
      if (!assetCode) return this._paymentMethods!;
      const assetPaymentMethods: PaymentMethod[] = [];
      for (const paymentMethod of this._paymentMethods!) {
        if (paymentMethod.getSupportedAssetCodesList().includes(assetCode)) assetPaymentMethods.push(paymentMethod);
      }
      return assetPaymentMethods;
    } catch (e: any) {
      throw new HavenoError(e.message, e.code);
    }
  }
  
  /**
   * Get payment accounts.
   * 
   * @return {PaymentAccount[]} the payment accounts
   */
  async getPaymentAccounts(): Promise<PaymentAccount[]> {
    try {
      return (await this._paymentAccountsClient.getPaymentAccounts(new GetPaymentAccountsRequest(), {password: this._password})).getPaymentAccountsList();
    } catch (e: any) {
      throw new HavenoError(e.message, e.code);
    }
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
    throw new HavenoError("No payment account with id " + paymentAccountId);
  }
  
  /**
   * Get a form for the given payment method to complete and create a new payment account.
   * 
   * @param {string | PaymentAccountForm.FormId} paymentMethodId - the id of the payment method
   * @return {PaymentAccountForm} the payment account form
   */
  async getPaymentAccountForm(paymentMethodId: string | PaymentAccountForm.FormId): Promise<PaymentAccountForm> {
    try {
      paymentMethodId = HavenoUtils.getPaymentMethodId(paymentMethodId); // validate and normalize
      return (await this._paymentAccountsClient.getPaymentAccountForm(new GetPaymentAccountFormRequest().setPaymentMethodId(paymentMethodId), {password: this._password})).getPaymentAccountForm()!;
    } catch (e: any) {
      throw new HavenoError(e.message, e.code);
    }
  }

  /**
   * Get a form from the given payment account payload.
   * 
   * @param {PaymentAccountPayload} paymentAccountPayload - payload to get as a form
   * @return {PaymentAccountForm} the payment account form
   */
  async getPaymentAccountPayloadForm(paymentAccountPayload: PaymentAccountPayload): Promise<PaymentAccountForm> {
    try {
      return (await this._paymentAccountsClient.getPaymentAccountForm(new GetPaymentAccountFormRequest().setPaymentAccountPayload(paymentAccountPayload), {password: this._password})).getPaymentAccountForm()!;
    } catch (e: any) {
      throw new HavenoError(e.message, e.code);
    }
  }
  
  /*
   * Validate a form field.
   * 
   * @param {object} form - form context to validate the given value
   * @param {PaymentAccountFormField.FieldId} fieldId - id of the field to validate
   * @param {string} value - input value to validate
   */
  async validateFormField(form: PaymentAccountForm, fieldId: PaymentAccountFormField.FieldId, value: string): Promise<void> {
    const request = new ValidateFormFieldRequest()
        .setForm(form)
        .setFieldId(fieldId)
        .setValue(value);
    try {
      await this._paymentAccountsClient.validateFormField(request, {password: this._password});
    } catch (e: any) {
      throw new HavenoError(e.message, e.code);
    }
  }
  
  /**
   * Create a payment account.
   * 
   * @param {PaymentAccountForm} paymentAccountForm - the completed form to create the payment account
   * @return {PaymentAccount} the created payment account
   */
  async createPaymentAccount(paymentAccountForm: PaymentAccountForm): Promise<PaymentAccount> {
    try {
      return (await this._paymentAccountsClient.createPaymentAccount(new CreatePaymentAccountRequest().setPaymentAccountForm(paymentAccountForm), {password: this._password})).getPaymentAccount()!;
    } catch (e: any) {
      throw new HavenoError(e.message, e.code);
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
    try {
      const request = new CreateCryptoCurrencyPaymentAccountRequest()
          .setAccountName(accountName)
          .setCurrencyCode(assetCode)
          .setAddress(address)
          .setTradeInstant(false); // not using instant trades
      return (await this._paymentAccountsClient.createCryptoCurrencyPaymentAccount(request, {password: this._password})).getPaymentAccount()!;
    } catch (e: any) {
      throw new HavenoError(e.message, e.code);
    }
  }

  /**
   * Delete a payment account.
   * 
   * @param {string} paymentAccountId the id of the payment account to delete
   */
  async deletePaymentAccount(paymentAccountId: string): Promise<void> {
    try {
      await this._paymentAccountsClient.deletePaymentAccount(new DeletePaymentAccountRequest().setPaymentAccountId(paymentAccountId), {password: this._password});
    } catch (e: any) {
      throw new HavenoError(e.message, e.code);
    }
  }
  
  /**
   * Get available offers to buy or sell XMR.
   * 
   * @param {string} assetCode - traded asset code
   * @param {OfferDirection|undefined} direction - "buy" or "sell" (default all)
   * @return {OfferInfo[]} the available offers
   */
  async getOffers(assetCode: string, direction?: OfferDirection): Promise<OfferInfo[]> {
    try {
      if (direction === undefined) return (await this.getOffers(assetCode, OfferDirection.BUY)).concat(await this.getOffers(assetCode, OfferDirection.SELL)); // TODO: implement in backend
      return (await this._offersClient.getOffers(new GetOffersRequest().setDirection(direction === OfferDirection.BUY ? "buy" : "sell").setCurrencyCode(assetCode), {password: this._password})).getOffersList();
    } catch (e: any) {
      throw new HavenoError(e.message, e.code);
    }
  }
  
  /**
   * Get the user's posted offers to buy or sell XMR.
   * 
   * @param {string|undefined} assetCode - traded asset code
   * @param {OfferDirection|undefined} direction - get offers to buy or sell XMR (default all)
   * @return {OfferInfo[]} the user's created offers
   */
  async getMyOffers(assetCode?: string, direction?: OfferDirection): Promise<OfferInfo[]> {
    try {
      const req = new GetOffersRequest();
      if (assetCode) req.setCurrencyCode(assetCode);
      if (direction !== undefined) req.setDirection(direction === OfferDirection.BUY ? "buy" : "sell"); // TODO: request should use OfferDirection too?
      return (await this._offersClient.getMyOffers(req, {password: this._password})).getOffersList();
    } catch (e: any) {
      throw new HavenoError(e.message, e.code);
    }
  }
  
  /**
   * Get my offer by id.
   * 
   * @param {string} offerId - id of the user's created offer
   * @return {OfferInfo} the user's created offer
   */
  async getMyOffer(offerId: string): Promise<OfferInfo> {
    try {
      return (await this._offersClient.getMyOffer(new GetMyOfferRequest().setId(offerId), {password: this._password})).getOffer()!;
    } catch (e: any) {
      throw new HavenoError(e.message, e.code);
    }
  }
  
  /**
   * Post an offer.
   * 
   * @param {OfferDirection} direction - "buy" or "sell" XMR
   * @param {bigint} amount - amount of XMR to trade
   * @param {string} assetCode - asset code to trade for XMR
   * @param {string} paymentAccountId - payment account id
   * @param {number} securityDepositPct - security deposit as % of trade amount for buyer and seller
   * @param {number} price - trade price (optional, default to market price)
   * @param {number} marketPriceMarginPct - if using market price, % from market price to accept (optional, default 0%)
   * @param {number} triggerPrice - price to remove offer (optional)
   * @param {bigint} minAmount - minimum amount to trade (optional, default to fixed amount)
   * @param {number} reserveExactAmount - reserve exact amount needed for offer, incurring on-chain transaction and 10 confirmations before the offer goes live (default = false)
   * @param {boolean} isPrivateOffer - whether the offer is private (default = false)
   * @param {boolean} buyerAsTakerWithoutDeposit - waive buyer as taker deposit and fee (default false)
   * @return {OfferInfo} the posted offer
   */
  async postOffer(direction: OfferDirection,
                  amount: bigint,
                  assetCode: string,
                  paymentAccountId: string,
                  securityDepositPct: number,
                  price?: number,
                  marketPriceMarginPct?: number,
                  triggerPrice?: number,
                  minAmount?: bigint,
                  reserveExactAmount?: boolean,
                  isPrivateOffer?: boolean,
                  buyerAsTakerWithoutDeposit?: boolean): Promise<OfferInfo> {
    console.log("Posting offer with security deposit %: " + securityDepositPct)
    try {
      const request = new PostOfferRequest()
          .setDirection(direction === OfferDirection.BUY ? "buy" : "sell")
          .setAmount(amount.toString())
          .setCurrencyCode(assetCode)
          .setPaymentAccountId(paymentAccountId)
          .setSecurityDepositPct(securityDepositPct)
          .setUseMarketBasedPrice(price === undefined)
          .setMinAmount(minAmount ? minAmount.toString() : amount.toString());
      if (price) request.setPrice(price.toString());
      if (marketPriceMarginPct) request.setMarketPriceMarginPct(marketPriceMarginPct);
      if (triggerPrice) request.setTriggerPrice(triggerPrice.toString());
      if (reserveExactAmount) request.setReserveExactAmount(true);
      if (isPrivateOffer) request.setIsPrivateOffer(true);
      if (buyerAsTakerWithoutDeposit) request.setBuyerAsTakerWithoutDeposit(true);
      return (await this._offersClient.postOffer(request, {password: this._password})).getOffer()!;
    } catch (e: any) {
      throw new HavenoError(e.message, e.code);
    }
  }
  
  /**
   * Remove a posted offer, releasing its reserved funds.
   * 
   * @param {string} offerId - the offer id to cancel
   */
  async removeOffer(offerId: string): Promise<void> {
    try {
      await this._offersClient.cancelOffer(new CancelOfferRequest().setId(offerId), {password: this._password});
    } catch (e: any) {
      throw new HavenoError(e.message, e.code);
    }
  }
  
  /**
   * Take an offer.
   * 
   * @param {string} offerId - id of the offer to take
   * @param {string} paymentAccountId - id of the payment account
   * @param {bigint|undefined} amount - amount the taker chooses to buy or sell within the offer range (default is max offer amount)
   * @param {string|undefined} challenge - the challenge to use for the private offer
   * @return {TradeInfo} the initialized trade
   */
  async takeOffer(offerId: string,
                  paymentAccountId: string,
                  amount?: bigint,
                  challenge?: string): Promise<TradeInfo> {
    try {
      const request = new TakeOfferRequest()
          .setOfferId(offerId)
          .setPaymentAccountId(paymentAccountId);
      if (amount) request.setAmount(amount.toString());
      if (challenge) request.setChallenge(challenge);
      const resp = await this._tradesClient.takeOffer(request, {password: this._password});
      if (resp.getTrade()) return resp.getTrade()!;
      throw new HavenoError(resp.getFailureReason()?.getDescription()!, resp.getFailureReason()?.getAvailabilityResult());
    } catch (e: any) {
      throw new HavenoError(e.message, e.code);
    }
  }
  
  /**
   * Get a trade by id.
   * 
   * @param {string} tradeId - the id of the trade and its offer
   * @return {TradeInfo} the trade with the given id
   */
  async getTrade(tradeId: string): Promise<TradeInfo> {
    try {
      return (await this._tradesClient.getTrade(new GetTradeRequest().setTradeId(tradeId), {password: this._password})).getTrade()!;
    } catch (e: any) {
      throw new HavenoError(e.message, e.code);
    }
  }
  
  /**
   * Get all trade statistics.
   *
   * @return {TradeStatistics3[]} all user trades
   */
  async getTradeStatistics(): Promise<TradeStatistics3[]> {
    try {
      return (await this._getTradeStatisticsClient.getTradeStatistics(new GetTradeStatisticsRequest(), {password: this._password})).getTradeStatisticsList();
    } catch (e: any) {
      throw new HavenoError(e.message, e.code);
    }
  }

  /**
   * Get all trades.
   * 
   * @return {TradeInfo[]} all user trades
   */
  async getTrades(): Promise<TradeInfo[]> {
    try {
      return (await this._tradesClient.getTrades(new GetTradesRequest(), {password: this._password})).getTradesList();
    } catch (e: any) {
      throw new HavenoError(e.message, e.code);
    }
  }
  
  /**
   * Confirm a payment is sent.
   * 
   * @param {string} tradeId - the id of the trade
   */
  async confirmPaymentSent(tradeId: string): Promise<void> {
    try {
      await this._tradesClient.confirmPaymentSent(new ConfirmPaymentSentRequest().setTradeId(tradeId), {password: this._password});
    } catch (e: any) {
      throw new HavenoError(e.message, e.code);
    }
  }
  
  /**
   * Confirm a payment is received.
   * 
   * @param {string} tradeId - the id of the trade
   */
  async confirmPaymentReceived(tradeId: string): Promise<void> {
    try {
      await this._tradesClient.confirmPaymentReceived(new ConfirmPaymentReceivedRequest().setTradeId(tradeId), {password: this._password});
    } catch (e: any) {
      throw new HavenoError(e.message, e.code);
    }
  }

  /**
   * Acknowledge that a trade has completed.
   * 
   * @param {string} tradeId - the id of the trade
   */
    async completeTrade(tradeId: string): Promise<void> {
    try {
      await this._tradesClient.completeTrade(new CompleteTradeRequest().setTradeId(tradeId), {password: this._password});
    } catch (e: any) {
      throw new HavenoError(e.message, e.code);
    }
  }

  /**
   * Get all chat messages for a trade.
   *
   * @param {string} tradeId - the id of the trade
   */
  async getChatMessages(tradeId: string): Promise<ChatMessage[]> {
    try {
      const request = new GetChatMessagesRequest().setTradeId(tradeId);
      return (await this._tradesClient.getChatMessages(request, {password: this._password})).getMessageList();
    } catch (e: any) {
      throw new HavenoError(e.message, e.code);
    }
  }

  /**
   * Send a trade chat message.
   *
   * @param {string} tradeId - the id of the trade
   * @param {string} message - the message
   */
  async sendChatMessage(tradeId: string, message: string): Promise<void> {
    try {
      const request = new SendChatMessageRequest()
          .setTradeId(tradeId)
          .setMessage(message);
      await this._tradesClient.sendChatMessage(request, {password: this._password});
    } catch (e: any) {
      throw new HavenoError(e.message, e.code);
    }
  }
  
  /**
   * Get a dispute by trade id.
   *
   * @param {string} tradeId - the id of the trade
   */
  async getDispute(tradeId: string): Promise<Dispute> {
    try {
      return (await this._disputesClient.getDispute(new GetDisputeRequest().setTradeId(tradeId), {password: this._password})).getDispute()!;
    } catch (e: any) {
      throw new HavenoError(e.message, e.code);
    }
  }
  
  /**
   * Get all disputes.
   */
  async getDisputes(): Promise<Dispute[]> {
    try {
      return (await this._disputesClient.getDisputes(new GetDisputesRequest(), {password: this._password})).getDisputesList();
    } catch (e: any) {
      throw new HavenoError(e.message, e.code);
    }
  }
  
  /**
   * Open a dispute for a trade.
   *
   * @param {string} tradeId - the id of the trade
   */
  async openDispute(tradeId: string): Promise<void> {
    try {
      await this._disputesClient.openDispute(new OpenDisputeRequest().setTradeId(tradeId), {password: this._password});
    } catch (e: any) {
      throw new HavenoError(e.message, e.code);
    }
  }
  
  /**
   * Resolve a dispute. By default, the winner receives the trade amount and the security deposits are returned,
   * but the arbitrator may award a custom amount to the winner and the loser will get the rest.
   *
   * @param {string} tradeId - the id of the trade
   * @param {DisputeResult.Winner} winner - the winner of the dispute
   * @param {DisputeResult.Reason} reason - the reason for the dispute
   * @param {string} summaryNotes - summary of the dispute
   * @param {bigint} customWinnerAmount - custom amount to award the winner (optional)
   */
  async resolveDispute(tradeId: string, winner: DisputeResult.Winner, reason: DisputeResult.Reason, summaryNotes: string, customWinnerAmount?: bigint): Promise<void> {
    try {
      const request = new ResolveDisputeRequest()
          .setTradeId(tradeId)
          .setWinner(winner)
          .setReason(reason)
          .setSummaryNotes(summaryNotes)
          .setCustomPayoutAmount(customWinnerAmount ? customWinnerAmount.toString() : "0");
      await this._disputesClient.resolveDispute(request, {password: this._password});
    } catch (e: any) {
      throw new HavenoError(e.message, e.code);
    }
  }
  
  /**
   * Send a dispute chat message.
   *
   * @param {string} disputeId - the id of the dispute
   * @param {string} message - the message
   * @param {Attachment[]} attachments - attachments
   */
  async sendDisputeChatMessage(disputeId: string, message: string, attachments: Attachment[]): Promise<void> {
    try {
      const request = new SendDisputeChatMessageRequest()
          .setDisputeId(disputeId)
          .setMessage(message)
          .setAttachmentsList(attachments);
      await this._disputesClient.sendDisputeChatMessage(request, {password: this._password});
    } catch (e: any) {
      throw new HavenoError(e.message, e.code);
    }
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
    try {
      await this.disconnect();
      await this._shutdownServerClient.stop(new StopRequest(), {password: this._password}); // process receives 'exit' event
      if (this._process) await HavenoUtils.kill(this._process);
    } catch (e: any) {
      console.error("Error gracefully shutting down havenod: " + e.message);
      if (this._process) {
        try {
          await HavenoUtils.kill(this._process);
        } catch (e: any) {
          console.error("Error terminating havenod process: " + e.message + ". Stopping forcefully");
          await HavenoUtils.kill(this._process, "SIGKILL");
        }
      }
    }
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
   * @private
   */
  async _awaitAppInitialized(): Promise<void> {
    try {
      // eslint-disable-next-line no-async-promise-executor
      await new Promise<void>(async (resolve) => {
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
    } catch (e: any) {
      throw new HavenoError(e.message, e.code);
    }
  }
  
  /** @private */
  async _isAppInitialized(): Promise<boolean> {
    try {
      return (await this._accountClient.isAppInitialized(new IsAppInitializedRequest(), {password: this._password})).getIsAppInitialized();
    } catch (e: any) {
      throw new HavenoError(e.message, e.code);
    }
  }
  
  /**
   * Callback for grpc notifications.
   * 
   * @private
   */
  _onNotification = (data: any) => {
    if (data instanceof NotificationMessage) {
      for (const listener of this._notificationListeners) listener(data);
    }
   }
  
  /**
   * Update notification listener registration.
   * Due to the nature of grpc streaming, this method returns a promise
   * which may be resolved before the listener is actually registered.
   * 
   * @private
   */
  async _updateNotificationListenerRegistration(): Promise<void> {
    try {
      const listening = this._notificationListeners.length > 0;
      if ((listening && this._notificationStream) || (!listening && !this._notificationStream)) return; // no difference
      if (listening) {

        // send request to register client listener
        this._notificationStream = this._notificationsClient.registerNotificationListener(new RegisterNotificationListenerRequest(), {password: this._password})
            .on('data', this._onNotification);

        // periodically send keep alive requests // TODO (woodser): better way to keep notification stream alive?
        let firstRequest = true;
        this._keepAliveLooper = new TaskLooper(async () => {
          if (firstRequest) {
            firstRequest = false;
            return;
          }
          try {
            await this._sendNotification(new NotificationMessage()
                .setType(NotificationMessage.NotificationType.KEEP_ALIVE)
                .setTimestamp(Date.now()));
          } catch (err: any) {
            HavenoUtils.log(0, "Error sending keep alive request to Haveno daemon " + this.getUrl() + ": " + err.message);
          }
        });
        this._keepAliveLooper.start(this._keepAlivePeriodMs);

        await HavenoUtils.waitFor(1000); // TODO: call returns before listener registered
      } else {
        this._notificationStream!.removeListener('data', this._onNotification);
        this._keepAliveLooper.stop();
        this._notificationStream!.cancel();
        this._notificationStream = undefined;
      }
    } catch (e: any) {
      throw new HavenoError(e.message, e.code);
    }
  }

  /**
   * Send a notification.
   * 
   * @private
   * @param {NotificationMessage} notification - notification to send
   */
  async _sendNotification(notification: NotificationMessage): Promise<void> {
    try {
      await this._notificationsClient.sendNotification(new SendNotificationRequest().setNotification(notification), {password: this._password});
    } catch (e: any) {
      throw new HavenoError(e.message, e.code);
    }
  }

  /**
   * Restore an account chunk from zip bytes.
   * 
   * @private
   */
  async _restoreAccountChunk(zipBytes: Uint8Array, offset: number, totalLength: number, hasMore: boolean): Promise<void> {
    try {
      const request = new RestoreAccountRequest()
          .setZipBytes(zipBytes)
          .setOffset(offset)
          .setTotalLength(totalLength)
          .setHasMore(hasMore);
      await this._accountClient.restoreAccount(request, {password: this._password});
    } catch (e: any) {
      throw new HavenoError(e.message, e.code);
    }
  }
}
