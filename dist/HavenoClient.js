"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const console_1 = __importDefault(require("console"));
const HavenoError_1 = __importDefault(require("./utils/HavenoError"));
const HavenoUtils_1 = __importDefault(require("./utils/HavenoUtils"));
const TaskLooper_1 = __importDefault(require("./utils/TaskLooper"));
const GrpcServiceClientPb_1 = require("./protobuf/GrpcServiceClientPb");
const grpc_pb_1 = require("./protobuf/grpc_pb");
const pb_pb_1 = require("./protobuf/pb_pb");
/**
 * Haveno daemon client.
 */
class HavenoClient {
    /**
     * Construct a client connected to a Haveno daemon.
     *
     * @param {string} url - Haveno daemon url
     * @param {string} password - Haveno daemon password
     */
    constructor(url, password) {
        this._processLogging = false;
        this._notificationListeners = [];
        this._registerNotificationListenerCalled = false;
        this._keepAlivePeriodMs = 60000;
        this.onData = (data) => {
            if (data instanceof grpc_pb_1.NotificationMessage) {
                for (const listener of this._notificationListeners)
                    listener(data);
            }
        };
        if (!url)
            throw new HavenoError_1.default("Must provide URL of Haveno daemon");
        if (!password)
            throw new HavenoError_1.default("Must provide password of Haveno daemon");
        HavenoUtils_1.default.log(2, "Creating Haveno client connected to " + url);
        this._url = url;
        this._password = password;
        this._getVersionClient = new GrpcServiceClientPb_1.GetVersionClient(this._url);
        this._accountClient = new GrpcServiceClientPb_1.AccountClient(this._url);
        this._moneroConnectionsClient = new GrpcServiceClientPb_1.MoneroConnectionsClient(this._url);
        this._moneroNodeClient = new GrpcServiceClientPb_1.MoneroNodeClient(this._url);
        this._disputeAgentsClient = new GrpcServiceClientPb_1.DisputeAgentsClient(this._url);
        this._disputesClient = new GrpcServiceClientPb_1.DisputesClient(this._url);
        this._walletsClient = new GrpcServiceClientPb_1.WalletsClient(this._url);
        this._priceClient = new GrpcServiceClientPb_1.PriceClient(this._url);
        this._paymentAccountsClient = new GrpcServiceClientPb_1.PaymentAccountsClient(this._url);
        this._offersClient = new GrpcServiceClientPb_1.OffersClient(this._url);
        this._tradesClient = new GrpcServiceClientPb_1.TradesClient(this._url);
        this._notificationsClient = new GrpcServiceClientPb_1.NotificationsClient(this._url);
        this._shutdownServerClient = new GrpcServiceClientPb_1.ShutdownServerClient(this._url);
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
    static async startProcess(havenoPath, cmd, url, enableLogging) {
        try {
            return await new Promise((resolve, reject) => {
                HavenoUtils_1.default.log(2, "Starting Haveno process: " + cmd + " on proxy url: " + url);
                // state variables
                let output = "";
                let isStarted = false;
                let daemon = undefined;
                // start process
                const childProcess = require('child_process').spawn(cmd[0], cmd.slice(1), { cwd: havenoPath });
                childProcess.stdout.setEncoding('utf8');
                childProcess.stderr.setEncoding('utf8');
                // handle stdout
                childProcess.stdout.on('data', async function (data) {
                    const line = data.toString();
                    if (loggingEnabled())
                        process.stdout.write(line);
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
                        if (walletRpcPortIdx >= 0)
                            daemon._walletRpcPort = parseInt(cmd[walletRpcPortIdx + 1]);
                        // resolve promise with client connected to internal process
                        isStarted = true;
                        resolve(daemon);
                    }
                    // read error message
                    if (line.indexOf("[HavenoDaemonMain] ERROR") >= 0) {
                        if (!isStarted)
                            await rejectStartup(new Error(line));
                    }
                });
                // handle stderr
                childProcess.stderr.on('data', function (data) {
                    if (loggingEnabled())
                        process.stderr.write(data);
                });
                // handle exit
                childProcess.on("exit", async function (code) {
                    if (!isStarted)
                        await rejectStartup(new Error("Haveno process terminated with exit code " + code + (output ? ":\n\n" + output : "")));
                });
                // handle error
                childProcess.on("error", async function (err) {
                    if (err.message.indexOf("ENOENT") >= 0)
                        reject(new Error("haveno-daemon does not exist at path '" + cmd[0] + "'"));
                    if (!isStarted)
                        await rejectStartup(err);
                });
                // handle uncaught exception
                childProcess.on("uncaughtException", async function (err, origin) {
                    console_1.default.error("Uncaught exception in Haveno process: " + err.message);
                    console_1.default.error(origin);
                    await rejectStartup(err);
                });
                async function rejectStartup(err) {
                    await HavenoUtils_1.default.kill(childProcess);
                    reject(err);
                }
                function loggingEnabled() {
                    return (daemon && daemon._processLogging) || (!daemon && enableLogging);
                }
            });
        }
        catch (e) {
            throw new HavenoError_1.default(e.message, e.code);
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
    setProcessLogging(enabled) {
        if (this._process === undefined)
            throw new HavenoError_1.default("haveno instance not created from new process");
        this._processLogging = enabled;
    }
    /**
     * Get the URL of the Haveno daemon.
     *
     * @return {string} the URL of the Haveno daemon
     */
    getUrl() {
        return this._url;
    }
    /**
     * Get the port of the primary wallet rpc instance if known.
     *
     * @return {number|undefined} the port of the primary wallet rpc instance if known
     */
    getWalletRpcPort() {
        return this._walletRpcPort;
    }
    /**
     * Get the name of the Haveno application folder.
     */
    getAppName() {
        return this._appName;
    }
    /**
     * Get the Haveno version.
     *
     * @return {string} the Haveno daemon version
     */
    async getVersion() {
        try {
            return await new Promise((resolve, reject) => {
                this._getVersionClient.getVersion(new grpc_pb_1.GetVersionRequest(), { password: this._password }, function (err, response) {
                    if (err)
                        reject(err);
                    else
                        resolve(response.getVersion());
                });
            });
        }
        catch (e) {
            throw new HavenoError_1.default(e.message, e.code);
        }
    }
    /**
     * Indicates if connected and authenticated with the Haveno daemon.
     *
     * @return {boolean} true if connected with the Haveno daemon, false otherwise
     */
    async isConnectedToDaemon() {
        try {
            await this.getVersion();
            return true;
        }
        catch (err) {
            return false;
        }
    }
    /**
     * Indicates if the Haveno account is created.
     *
     * @return {boolean} true if the account is created, false otherwise
     */
    async accountExists() {
        try {
            return await new Promise((resolve, reject) => {
                this._accountClient.accountExists(new grpc_pb_1.AccountExistsRequest(), { password: this._password }, function (err, response) {
                    if (err)
                        reject(err);
                    else
                        resolve(response.getAccountExists());
                });
            });
        }
        catch (e) {
            throw new HavenoError_1.default(e.message, e.code);
        }
    }
    /**
     * Indicates if the Haveno account is open and authenticated with the correct password.
     *
     * @return {boolean} true if the account is open and authenticated, false otherwise
     */
    async isAccountOpen() {
        try {
            return await new Promise((resolve, reject) => {
                this._accountClient.isAccountOpen(new grpc_pb_1.IsAccountOpenRequest(), { password: this._password }, function (err, response) {
                    if (err)
                        reject(err);
                    else
                        resolve(response.getIsAccountOpen());
                });
            });
        }
        catch (e) {
            throw new HavenoError_1.default(e.message, e.code);
        }
    }
    /**
     * Create and open a new Haveno account.
     *
     * @param {string} password - the password to encrypt the account
     */
    async createAccount(password) {
        try {
            await new Promise((resolve, reject) => {
                this._accountClient.createAccount(new grpc_pb_1.CreateAccountRequest().setPassword(password), { password: this._password }, function (err) {
                    if (err)
                        reject(err);
                    else
                        resolve();
                });
            });
            await this._awaitAppInitialized(); // TODO: grpc should not return before setup is complete
        }
        catch (e) {
            throw new HavenoError_1.default(e.message, e.code);
        }
    }
    /**
     * Open existing Haveno account.
     *
     * @param {string} password - the account password
     */
    async openAccount(password) {
        try {
            await new Promise((resolve, reject) => {
                this._accountClient.openAccount(new grpc_pb_1.OpenAccountRequest().setPassword(password), { password: this._password }, function (err) {
                    if (err)
                        reject(err);
                    else
                        resolve();
                });
            });
            return this._awaitAppInitialized(); // TODO: grpc should not return before setup is complete
        }
        catch (e) {
            throw new HavenoError_1.default(e.message, e.code);
        }
    }
    /**
     * Change the Haveno account password.
     *
     * @param {string} password - the new account password
     */
    async changePassword(password) {
        try {
            await new Promise((resolve, reject) => {
                this._accountClient.changePassword(new grpc_pb_1.ChangePasswordRequest().setPassword(password), { password: this._password }, function (err) {
                    if (err)
                        reject(err);
                    else
                        resolve();
                });
            });
        }
        catch (e) {
            throw new HavenoError_1.default(e.message, e.code);
        }
    }
    /**
     * Close the currently open account.
     */
    async closeAccount() {
        try {
            await new Promise((resolve, reject) => {
                this._accountClient.closeAccount(new grpc_pb_1.CloseAccountRequest(), { password: this._password }, function (err) {
                    if (err)
                        reject(err);
                    else
                        resolve();
                });
            });
        }
        catch (e) {
            throw new HavenoError_1.default(e.message, e.code);
        }
    }
    /**
     * Permanently delete the Haveno account and shutdown the server. // TODO: possible to not shutdown server?
     */
    async deleteAccount() {
        try {
            await new Promise((resolve, reject) => {
                this._accountClient.deleteAccount(new grpc_pb_1.DeleteAccountRequest(), { password: this._password }, async function (err) {
                    if (err)
                        reject(err);
                    else
                        setTimeout(resolve, 5000);
                });
            });
        }
        catch (e) {
            throw new HavenoError_1.default(e.message, e.code);
        }
    }
    /**
     * Backup the account to the given stream. TODO: stream type?
     */
    async backupAccount(stream) {
        try {
            return await new Promise((resolve, reject) => {
                let total = 0;
                const response = this._accountClient.backupAccount(new grpc_pb_1.BackupAccountRequest(), { password: this._password });
                response.on('data', (chunk) => {
                    const bytes = chunk.getZipBytes(); // TODO: right api?
                    total += bytes.length;
                    stream.write(bytes);
                });
                response.on('error', function (err) {
                    if (err)
                        reject(err);
                });
                response.on('end', function () {
                    resolve(total);
                });
            });
        }
        catch (e) {
            throw new HavenoError_1.default(e.message, e.code);
        }
    }
    /**
     * Restore the account from zip bytes.
     *
     * Sends chunked requests if size over max grpc envelope size (41943404 bytes).
     *
     * @param {Uint8Array} zipBytes - the bytes of the zipped account to restore
     */
    async restoreAccount(zipBytes) {
        if (zipBytes.length === 0)
            throw new HavenoError_1.default("Zip bytes must not be empty");
        const totalLength = zipBytes.byteLength;
        let offset = 0;
        let chunkSize = 4000000; // the max frame size is 4194304 but leave room for http headers
        let hasMore = true;
        // eslint-disable-next-line no-constant-condition
        while (true) {
            if (zipBytes.byteLength <= offset + 1)
                return;
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
    async addNotificationListener(listener) {
        this._notificationListeners.push(listener);
        await this._updateNotificationListenerRegistration();
    }
    /**
     * Remove a notification listener.
     *
     * @param {(notification: NotificationMessage) => void} listener - the notification listener to remove
     */
    async removeNotificationListener(listener) {
        const idx = this._notificationListeners.indexOf(listener);
        if (idx > -1)
            this._notificationListeners.splice(idx, 1);
        else
            throw new HavenoError_1.default("Notification listener is not registered");
        await this._updateNotificationListenerRegistration();
    }
    /**
     * Indicates if connected to the Monero network based on last connection check.
     *
     * @return {boolean} true if connected to the Monero network, false otherwise
     */
    async isConnectedToMonero() {
        const connection = await this.getMoneroConnection();
        return connection !== undefined &&
            connection.getOnlineStatus() === grpc_pb_1.UrlConnection.OnlineStatus.ONLINE &&
            connection.getAuthenticationStatus() !== grpc_pb_1.UrlConnection.AuthenticationStatus.NOT_AUTHENTICATED;
    }
    /**
     * Add a Monero daemon connection.
     *
     * @param {string | UrlConnection} connection - daemon url or connection to add
     */
    async addMoneroConnection(connection) {
        try {
            await new Promise((resolve, reject) => {
                this._moneroConnectionsClient.addConnection(new grpc_pb_1.AddConnectionRequest().setConnection(typeof connection === "string" ? new grpc_pb_1.UrlConnection().setUrl(connection) : connection), { password: this._password }, function (err) {
                    if (err)
                        reject(err);
                    else
                        resolve();
                });
            });
        }
        catch (e) {
            throw new HavenoError_1.default(e.message, e.code);
        }
    }
    /**
     * Remove a Monero daemon connection.
     *
     * @param {string} url - url of the daemon connection to remove
     */
    async removeMoneroConnection(url) {
        try {
            await new Promise((resolve, reject) => {
                this._moneroConnectionsClient.removeConnection(new grpc_pb_1.RemoveConnectionRequest().setUrl(url), { password: this._password }, function (err) {
                    if (err)
                        reject(err);
                    else
                        resolve();
                });
            });
        }
        catch (e) {
            throw new HavenoError_1.default(e.message, e.code);
        }
    }
    /**
     * Get the current Monero daemon connection.
     *
     * @return {UrlConnection | undefined} the current daemon connection, undefined if no current connection
     */
    async getMoneroConnection() {
        try {
            return await new Promise((resolve, reject) => {
                this._moneroConnectionsClient.getConnection(new grpc_pb_1.GetConnectionRequest(), { password: this._password }, function (err, response) {
                    if (err)
                        reject(err);
                    else
                        resolve(response.getConnection());
                });
            });
        }
        catch (e) {
            throw new HavenoError_1.default(e.message, e.code);
        }
    }
    /**
     * Get all Monero daemon connections.
     *
     * @return {UrlConnection[]} all daemon connections
     */
    async getMoneroConnections() {
        try {
            return await new Promise((resolve, reject) => {
                this._moneroConnectionsClient.getConnections(new grpc_pb_1.GetConnectionsRequest(), { password: this._password }, function (err, response) {
                    if (err)
                        reject(err);
                    else
                        resolve(response.getConnectionsList());
                });
            });
        }
        catch (e) {
            throw new HavenoError_1.default(e.message, e.code);
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
    async setMoneroConnection(connection) {
        const request = new grpc_pb_1.SetConnectionRequest();
        if (typeof connection === "string")
            request.setUrl(connection);
        else
            request.setConnection(connection);
        try {
            await new Promise((resolve, reject) => {
                this._moneroConnectionsClient.setConnection(request, { password: this._password }, function (err) {
                    if (err)
                        reject(err);
                    else
                        resolve();
                });
            });
        }
        catch (e) {
            throw new HavenoError_1.default(e.message, e.code);
        }
    }
    /**
     * Check the current Monero daemon connection.
     *
     * If disconnected and auto switch enabled, switch to the best available connection and return its status.
     *
     * @return {UrlConnection | undefined} the current daemon connection status, undefined if no current connection
     */
    async checkMoneroConnection() {
        try {
            return await new Promise((resolve, reject) => {
                this._moneroConnectionsClient.checkConnection(new grpc_pb_1.CheckConnectionRequest(), { password: this._password }, function (err, response) {
                    if (err)
                        reject(err);
                    else
                        resolve(response.getConnection());
                });
            });
        }
        catch (e) {
            throw new HavenoError_1.default(e.message, e.code);
        }
    }
    /**
     * Check all Monero daemon connections.
     *
     * @return {UrlConnection[]} status of all managed connections.
     */
    async checkMoneroConnections() {
        try {
            return await new Promise((resolve, reject) => {
                this._moneroConnectionsClient.checkConnections(new grpc_pb_1.CheckConnectionsRequest(), { password: this._password }, function (err, response) {
                    if (err)
                        reject(err);
                    else
                        resolve(response.getConnectionsList());
                });
            });
        }
        catch (e) {
            throw new HavenoError_1.default(e.message, e.code);
        }
    }
    /**
     * Check the connection and start checking the connection periodically.
     *
     * @param {number} refreshPeriod - time between checks in milliseconds (default 15000 ms or 15 seconds)
     */
    async startCheckingConnection(refreshPeriod) {
        try {
            await new Promise((resolve, reject) => {
                this._moneroConnectionsClient.startCheckingConnections(new grpc_pb_1.StartCheckingConnectionsRequest().setRefreshPeriod(refreshPeriod), { password: this._password }, function (err) {
                    if (err)
                        reject(err);
                    else
                        resolve();
                });
            });
        }
        catch (e) {
            throw new HavenoError_1.default(e.message, e.code);
        }
    }
    /**
     * Stop checking the connection status periodically.
     */
    async stopCheckingConnection() {
        try {
            await new Promise((resolve, reject) => {
                this._moneroConnectionsClient.stopCheckingConnections(new grpc_pb_1.StopCheckingConnectionsRequest(), { password: this._password }, function (err) {
                    if (err)
                        reject(err);
                    else
                        resolve();
                });
            });
        }
        catch (e) {
            throw new HavenoError_1.default(e.message, e.code);
        }
    }
    /**
     * Get the best available connection in order of priority then response time.
     *
     * @return {UrlConnection | undefined} the best available connection in order of priority then response time, undefined if no connections available
     */
    async getBestAvailableConnection() {
        try {
            return await new Promise((resolve, reject) => {
                this._moneroConnectionsClient.getBestAvailableConnection(new grpc_pb_1.GetBestAvailableConnectionRequest(), { password: this._password }, function (err, response) {
                    if (err)
                        reject(err);
                    else
                        resolve(response.getConnection());
                });
            });
        }
        catch (e) {
            throw new HavenoError_1.default(e.message, e.code);
        }
    }
    /**
     * Automatically switch to the best available connection if current connection is disconnected after being checked.
     *
     * @param {boolean} autoSwitch - whether auto switch is enabled or disabled
     */
    async setAutoSwitch(autoSwitch) {
        try {
            await new Promise((resolve, reject) => {
                this._moneroConnectionsClient.setAutoSwitch(new grpc_pb_1.SetAutoSwitchRequest().setAutoSwitch(autoSwitch), { password: this._password }, function (err) {
                    if (err)
                        reject(err);
                    else
                        resolve();
                });
            });
        }
        catch (e) {
            throw new HavenoError_1.default(e.message, e.code);
        }
    }
    /**
     * Returns whether daemon is running a local monero node.
     */
    async isMoneroNodeOnline() {
        try {
            return await new Promise((resolve, reject) => {
                this._moneroNodeClient.isMoneroNodeOnline(new grpc_pb_1.IsMoneroNodeOnlineRequest(), { password: this._password }, function (err, response) {
                    if (err)
                        reject(err);
                    else
                        resolve(response.getIsRunning());
                });
            });
        }
        catch (e) {
            throw new HavenoError_1.default(e.message, e.code);
        }
    }
    /**
     * Gets the current local monero node settings.
     */
    async getMoneroNodeSettings() {
        try {
            return await new Promise((resolve, reject) => {
                const request = new grpc_pb_1.GetMoneroNodeSettingsRequest();
                this._moneroNodeClient.getMoneroNodeSettings(request, { password: this._password }, function (err, response) {
                    if (err)
                        reject(err);
                    else
                        resolve(response.getSettings());
                });
            });
        }
        catch (e) {
            throw new HavenoError_1.default(e.message, e.code);
        }
    }
    /**
     * Starts the local monero node.
     *
     * @param {MoneroNodeSettings} settings - the settings to start the local node with
     */
    async startMoneroNode(settings) {
        try {
            await new Promise((resolve, reject) => {
                const request = new grpc_pb_1.StartMoneroNodeRequest().setSettings(settings);
                this._moneroNodeClient.startMoneroNode(request, { password: this._password }, function (err) {
                    if (err)
                        reject(err);
                    else
                        resolve();
                });
            });
        }
        catch (e) {
            throw new HavenoError_1.default(e.message, e.code);
        }
    }
    /**
     * Stops the local monero node.
     */
    async stopMoneroNode() {
        try {
            await new Promise((resolve, reject) => {
                this._moneroNodeClient.stopMoneroNode(new grpc_pb_1.StopMoneroNodeRequest(), { password: this._password }, function (err) {
                    if (err)
                        reject(err);
                    else
                        resolve();
                });
            });
        }
        catch (e) {
            throw new HavenoError_1.default(e.message, e.code);
        }
    }
    /**
     * Register as a dispute agent.
     *
     * @param {string} disputeAgentType - type of dispute agent to register, e.g. mediator, refundagent
     * @param {string} registrationKey - registration key
     */
    async registerDisputeAgent(disputeAgentType, registrationKey) {
        try {
            const request = new grpc_pb_1.RegisterDisputeAgentRequest()
                .setDisputeAgentType(disputeAgentType)
                .setRegistrationKey(registrationKey);
            return await new Promise((resolve, reject) => {
                this._disputeAgentsClient.registerDisputeAgent(request, { password: this._password }, function (err) {
                    if (err)
                        reject(err);
                    else
                        resolve();
                });
            });
        }
        catch (e) {
            throw new HavenoError_1.default(e.message, e.code);
        }
    }
    /**
     * Unregister as a dispute agent.
     *
     * @param {string} disputeAgentType - type of dispute agent to register, e.g. mediator, refundagent
     */
    async unregisterDisputeAgent(disputeAgentType) {
        try {
            return await new Promise((resolve, reject) => {
                this._disputeAgentsClient.unregisterDisputeAgent(new grpc_pb_1.UnregisterDisputeAgentRequest().setDisputeAgentType(disputeAgentType), { password: this._password }, function (err) {
                    if (err)
                        reject(err);
                    else
                        resolve();
                });
            });
        }
        catch (e) {
            throw new HavenoError_1.default(e.message, e.code);
        }
    }
    /**
     * Get the user's balances.
     *
     * @return {XmrBalanceInfo} the user's balances
     */
    async getBalances() {
        try {
            return await new Promise((resolve, reject) => {
                this._walletsClient.getBalances(new grpc_pb_1.GetBalancesRequest().setCurrencyCode("XMR"), { password: this._password }, function (err, response) {
                    if (err)
                        reject(err);
                    else
                        resolve(response.getBalances().getXmr());
                });
            });
        }
        catch (e) {
            throw new HavenoError_1.default(e.message, e.code);
        }
    }
    /**
     * Get the mnemonic seed phrase of the Monero wallet.
     *
     * @return {string} the mnemonic seed phrase of the Monero wallet
     */
    async getXmrSeed() {
        try {
            return await new Promise((resolve, reject) => {
                this._walletsClient.getXmrSeed(new grpc_pb_1.GetXmrSeedRequest(), { password: this._password }, function (err, response) {
                    if (err)
                        reject(err);
                    else
                        resolve(response.getSeed());
                });
            });
        }
        catch (e) {
            throw new HavenoError_1.default(e.message, e.code);
        }
    }
    /**
     * Get the primary address of the Monero wallet.
     *
     * @return {string} the primary address of the Monero wallet
     */
    async getXmrPrimaryAddress() {
        try {
            return await new Promise((resolve, reject) => {
                this._walletsClient.getXmrPrimaryAddress(new grpc_pb_1.GetXmrPrimaryAddressRequest(), { password: this._password }, function (err, response) {
                    if (err)
                        reject(err);
                    else
                        resolve(response.getPrimaryAddress());
                });
            });
        }
        catch (e) {
            throw new HavenoError_1.default(e.message, e.code);
        }
    }
    /**
     * Get a new subaddress in the Monero wallet to receive deposits.
     *
     * @return {string} the deposit address (a subaddress in the Haveno wallet)
     */
    async getXmrNewSubaddress() {
        try {
            return await new Promise((resolve, reject) => {
                this._walletsClient.getXmrNewSubaddress(new grpc_pb_1.GetXmrNewSubaddressRequest(), { password: this._password }, function (err, response) {
                    if (err)
                        reject(err);
                    else
                        resolve(response.getSubaddress());
                });
            });
        }
        catch (e) {
            throw new HavenoError_1.default(e.message, e.code);
        }
    }
    /**
     * Get all transactions in the Monero wallet.
     *
     * @return {XmrTx[]} the transactions
     */
    async getXmrTxs() {
        try {
            return await new Promise((resolve, reject) => {
                this._walletsClient.getXmrTxs(new grpc_pb_1.GetXmrTxsRequest(), { password: this._password }, function (err, response) {
                    if (err)
                        reject(err);
                    else
                        resolve(response.getTxsList());
                });
            });
        }
        catch (e) {
            throw new HavenoError_1.default(e.message, e.code);
        }
    }
    /**
     * Get a transaction by hash in the Monero wallet.
     *
     * @param {String} txHash - hash of the transaction to get
     * @return {XmrTx} the transaction with the hash
     */
    async getXmrTx(txHash) {
        const txs = await this.getXmrTxs(); // TODO (woodser): implement getXmrTx(hash) grpc call
        for (const tx of txs) {
            if (tx.getHash() === txHash)
                return tx;
        }
        throw new HavenoError_1.default("No transaction with hash " + txHash);
    }
    /**
     * Create but do not relay a transaction to send funds from the Monero wallet.
     *
     * @return {XmrTx} the created transaction
     */
    async createXmrTx(destinations) {
        try {
            return await new Promise((resolve, reject) => {
                this._walletsClient.createXmrTx(new grpc_pb_1.CreateXmrTxRequest().setDestinationsList(destinations), { password: this._password }, function (err, response) {
                    if (err)
                        reject(err);
                    else
                        resolve(response.getTx());
                });
            });
        }
        catch (e) {
            throw new HavenoError_1.default(e.message, e.code);
        }
    }
    /**
     * Relay a previously created transaction to send funds from the Monero wallet.
     *
     * @return {string} the hash of the relayed transaction
     */
    async relayXmrTx(metadata) {
        try {
            return await new Promise((resolve, reject) => {
                this._walletsClient.relayXmrTx(new grpc_pb_1.RelayXmrTxRequest().setMetadata(metadata), { password: this._password }, function (err, response) {
                    if (err)
                        reject(err);
                    else
                        resolve(response.getHash());
                });
            });
        }
        catch (e) {
            throw new HavenoError_1.default(e.message, e.code);
        }
    }
    /**
     * Get all supported assets codes.
     *
     * TODO: replace this with getSupportedAssetCodes(): Promise<TradeCurrency[]>)
     *
     * @return {Promise<string[]>} all supported trade assets
     */
    async getSupportedAssetCodes() {
        const assetCodes = [];
        for (const price of await this.getPrices())
            assetCodes.push(price.getCurrencyCode());
        return assetCodes;
    }
    /**
     * Get the current market price per 1 XMR in the given currency.
     *
     * @param {string} assetCode - asset code to get the price of
     * @return {number} the price of the asset per 1 XMR
     */
    async getPrice(assetCode) {
        try {
            return await new Promise((resolve, reject) => {
                this._priceClient.getMarketPrice(new grpc_pb_1.MarketPriceRequest().setCurrencyCode(assetCode), { password: this._password }, function (err, response) {
                    if (err)
                        reject(err);
                    else
                        resolve(response.getPrice());
                });
            });
        }
        catch (e) {
            throw new HavenoError_1.default(e.message, e.code);
        }
    }
    /**
     * Get the current market prices of all a.
     *
     * @return {MarketPrice[]} prices of the assets per 1 XMR
     */
    async getPrices() {
        try {
            return await new Promise((resolve, reject) => {
                this._priceClient.getMarketPrices(new grpc_pb_1.MarketPricesRequest(), { password: this._password }, function (err, response) {
                    if (err)
                        reject(err);
                    else
                        resolve(response.getMarketPriceList());
                });
            });
        }
        catch (e) {
            throw new HavenoError_1.default(e.message, e.code);
        }
    }
    /**
     * Get the market depth of a currency.
     *
     * @param {string} assetCode - asset to get the market depth of
     * @return {MarketDepthInfo} market depth of the given currency
     */
    async getMarketDepth(assetCode) {
        try {
            return await new Promise((resolve, reject) => {
                this._priceClient.getMarketDepth(new grpc_pb_1.MarketDepthRequest().setCurrencyCode(assetCode), { password: this._password }, function (err, response) {
                    if (err)
                        reject(err);
                    else
                        resolve(response.getMarketDepth());
                });
            });
        }
        catch (e) {
            throw new HavenoError_1.default(e.message, e.code);
        }
    }
    /**
     * Get payment methods.
     *
     * @param {string} assetCode - get payment methods supporting this asset code (optional)
     * @return {PaymentMethod[]} the payment methods
     */
    async getPaymentMethods(assetCode) {
        try {
            if (!this._paymentMethods) {
                this._paymentMethods = await new Promise((resolve, reject) => {
                    this._paymentAccountsClient.getPaymentMethods(new grpc_pb_1.GetPaymentMethodsRequest(), { password: this._password }, function (err, response) {
                        if (err)
                            reject(err);
                        else
                            resolve(response.getPaymentMethodsList());
                    });
                });
            }
            if (!assetCode)
                return this._paymentMethods;
            const assetPaymentMethods = [];
            for (const paymentMethod of this._paymentMethods) {
                if (paymentMethod.getSupportedAssetCodesList().includes(assetCode))
                    assetPaymentMethods.push(paymentMethod);
            }
            return assetPaymentMethods;
        }
        catch (e) {
            throw new HavenoError_1.default(e.message, e.code);
        }
    }
    /**
     * Get payment accounts.
     *
     * @return {PaymentAccount[]} the payment accounts
     */
    async getPaymentAccounts() {
        try {
            return await new Promise((resolve, reject) => {
                this._paymentAccountsClient.getPaymentAccounts(new grpc_pb_1.GetPaymentAccountsRequest(), { password: this._password }, function (err, response) {
                    if (err)
                        reject(err);
                    else
                        resolve(response.getPaymentAccountsList());
                });
            });
        }
        catch (e) {
            throw new HavenoError_1.default(e.message, e.code);
        }
    }
    /**
     * Get a payment account by id.
     *
     * @param {string} paymentAccountId - the payment account id to get
     * @return {PaymentAccount} the payment account
     */
    async getPaymentAccount(paymentAccountId) {
        // TODO (woodser): implement this on the backend
        const paymentAccounts = await this.getPaymentAccounts();
        for (const paymentAccount of paymentAccounts) {
            if (paymentAccount.getId() === paymentAccountId)
                return paymentAccount;
        }
        throw new HavenoError_1.default("No payment account with id " + paymentAccountId);
    }
    /**
     * Get a form for the given payment method to complete and create a new payment account.
     *
     * @param {string} paymentMethodId - the id of the payment method
     * @return {PaymentAccountForm} the payment account form
     */
    async getPaymentAccountForm(paymentMethodId) {
        try {
            return await new Promise((resolve, reject) => {
                this._paymentAccountsClient.getPaymentAccountForm(new grpc_pb_1.GetPaymentAccountFormRequest().setPaymentMethodId(paymentMethodId), { password: this._password }, function (err, response) {
                    if (err)
                        reject(err);
                    else
                        resolve(response.getPaymentAccountForm());
                });
            });
        }
        catch (e) {
            throw new HavenoError_1.default(e.message, e.code);
        }
    }
    /*
     * Validate a form field.
     *
     * @param {object} form - form context to validate the given value
     * @param {PaymentAccountFormField.FieldId} fieldId - id of the field to validate
     * @param {string} value - input value to validate
     */
    async validateFormField(form, fieldId, value) {
        const request = new grpc_pb_1.ValidateFormFieldRequest()
            .setForm(form)
            .setFieldId(fieldId)
            .setValue(value);
        try {
            await new Promise((resolve, reject) => {
                this._paymentAccountsClient.validateFormField(request, { password: this._password }, function (err) {
                    if (err)
                        reject(err);
                    else
                        resolve();
                });
            });
        }
        catch (e) {
            throw new HavenoError_1.default(e.message, e.code);
        }
    }
    /**
     * Create a payment account.
     *
     * @param {PaymentAccountForm} paymentAccountForm - the completed form to create the payment account
     * @return {PaymentAccount} the created payment account
     */
    async createPaymentAccount(paymentAccountForm) {
        try {
            return await new Promise((resolve, reject) => {
                this._paymentAccountsClient.createPaymentAccount(new grpc_pb_1.CreatePaymentAccountRequest().setPaymentAccountForm(paymentAccountForm), { password: this._password }, function (err, response) {
                    if (err)
                        reject(err);
                    else
                        resolve(response.getPaymentAccount());
                });
            });
        }
        catch (e) {
            throw new HavenoError_1.default(e.message, e.code);
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
    async createCryptoPaymentAccount(accountName, assetCode, address) {
        try {
            const request = new grpc_pb_1.CreateCryptoCurrencyPaymentAccountRequest()
                .setAccountName(accountName)
                .setCurrencyCode(assetCode)
                .setAddress(address)
                .setTradeInstant(false); // not using instant trades
            return await new Promise((resolve, reject) => {
                this._paymentAccountsClient.createCryptoCurrencyPaymentAccount(request, { password: this._password }, function (err, response) {
                    if (err)
                        reject(err);
                    else
                        resolve(response.getPaymentAccount());
                });
            });
        }
        catch (e) {
            throw new HavenoError_1.default(e.message, e.code);
        }
    }
    /**
     * Get available offers to buy or sell XMR.
     *
     * @param {string} assetCode - traded asset code
     * @param {string|undefined} direction - "buy" or "sell" (default all)
     * @return {OfferInfo[]} the available offers
     */
    async getOffers(assetCode, direction) {
        try {
            if (!direction)
                return (await this.getOffers(assetCode, "buy")).concat(await this.getOffers(assetCode, "sell")); // TODO: implement in backend
            return await new Promise((resolve, reject) => {
                this._offersClient.getOffers(new grpc_pb_1.GetOffersRequest().setDirection(direction).setCurrencyCode(assetCode), { password: this._password }, function (err, response) {
                    if (err)
                        reject(err);
                    else
                        resolve(response.getOffersList());
                });
            });
        }
        catch (e) {
            throw new HavenoError_1.default(e.message, e.code);
        }
    }
    /**
     * Get the user's posted offers to buy or sell XMR.
     *
     * @param {string} assetCode - traded asset code
     * @param {string|undefined} direction - "buy" or "sell" XMR (default all)
     * @return {OfferInfo[]} the user's created offers
     */
    async getMyOffers(assetCode, direction) {
        try {
            if (!direction)
                return (await this.getMyOffers(assetCode, "buy")).concat(await this.getMyOffers(assetCode, "sell")); // TODO: implement in backend
            return await new Promise((resolve, reject) => {
                this._offersClient.getMyOffers(new grpc_pb_1.GetOffersRequest().setDirection(direction).setCurrencyCode(assetCode), { password: this._password }, function (err, response) {
                    if (err)
                        reject(err);
                    else
                        resolve(response.getOffersList());
                });
            });
        }
        catch (e) {
            throw new HavenoError_1.default(e.message, e.code);
        }
    }
    /**
     * Get my offer by id.
     *
     * @param {string} offerId - id of the user's created offer
     * @return {OfferInfo} the user's created offer
     */
    async getMyOffer(offerId) {
        try {
            return await new Promise((resolve, reject) => {
                this._offersClient.getMyOffer(new grpc_pb_1.GetMyOfferRequest().setId(offerId), { password: this._password }, function (err, response) {
                    if (err)
                        reject(err);
                    else
                        resolve(response.getOffer());
                });
            });
        }
        catch (e) {
            throw new HavenoError_1.default(e.message, e.code);
        }
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
    async postOffer(direction, amount, assetCode, paymentAccountId, buyerSecurityDepositPct, price, marketPriceMarginPct, triggerPrice, minAmount) {
        try {
            const request = new grpc_pb_1.CreateOfferRequest()
                .setDirection(direction)
                .setAmount(amount.toString())
                .setCurrencyCode(assetCode)
                .setPaymentAccountId(paymentAccountId)
                .setBuyerSecurityDepositPct(buyerSecurityDepositPct)
                .setPrice(price ? price.toString() : "1.0") // TOOD (woodser): positive price required even if using market price?
                .setUseMarketBasedPrice(price === undefined) // TODO (woodser): this field is redundant; remove from api
                .setMinAmount(minAmount ? minAmount.toString() : amount.toString());
            if (marketPriceMarginPct)
                request.setMarketPriceMarginPct(marketPriceMarginPct);
            if (triggerPrice)
                request.setTriggerPrice(triggerPrice.toString());
            return await new Promise((resolve, reject) => {
                this._offersClient.createOffer(request, { password: this._password }, function (err, response) {
                    if (err)
                        reject(err);
                    else
                        resolve(response.getOffer());
                });
            });
        }
        catch (e) {
            throw new HavenoError_1.default(e.message, e.code);
        }
    }
    /**
     * Remove a posted offer, releasing its reserved funds.
     *
     * @param {string} offerId - the offer id to cancel
     */
    async removeOffer(offerId) {
        try {
            await new Promise((resolve, reject) => {
                this._offersClient.cancelOffer(new grpc_pb_1.CancelOfferRequest().setId(offerId), { password: this._password }, function (err) {
                    if (err)
                        reject(err);
                    else
                        resolve();
                });
            });
        }
        catch (e) {
            throw new HavenoError_1.default(e.message, e.code);
        }
    }
    /**
     * Take an offer.
     *
     * @param {string} offerId - id of the offer to take
     * @param {string} paymentAccountId - id of the payment account
     * @return {TradeInfo} the initialized trade
     */
    async takeOffer(offerId, paymentAccountId) {
        try {
            const request = new grpc_pb_1.TakeOfferRequest()
                .setOfferId(offerId)
                .setPaymentAccountId(paymentAccountId);
            return await new Promise((resolve, reject) => {
                this._tradesClient.takeOffer(request, { password: this._password }, function (err, response) {
                    if (err)
                        reject(err);
                    else if (response.getFailureReason() && response.getFailureReason().getAvailabilityResult() !== pb_pb_1.AvailabilityResult.AVAILABLE)
                        reject(new Error(response.getFailureReason().getDescription())); // TODO: api should throw grpcWeb.RpcError
                    else
                        resolve(response.getTrade());
                });
            });
        }
        catch (e) {
            throw new HavenoError_1.default(e.message, e.code);
        }
    }
    /**
     * Get a trade by id.
     *
     * @param {string} tradeId - the id of the trade and its offer
     * @return {TradeInfo} the trade with the given id
     */
    async getTrade(tradeId) {
        try {
            return await new Promise((resolve, reject) => {
                this._tradesClient.getTrade(new grpc_pb_1.GetTradeRequest().setTradeId(tradeId), { password: this._password }, function (err, response) {
                    if (err)
                        reject(err);
                    else
                        resolve(response.getTrade());
                });
            });
        }
        catch (e) {
            throw new HavenoError_1.default(e.message, e.code);
        }
    }
    /**
     * Get all trades.
     *
     * @return {TradeInfo[]} all user trades
     */
    async getTrades() {
        try {
            return await new Promise((resolve, reject) => {
                this._tradesClient.getTrades(new grpc_pb_1.GetTradesRequest(), { password: this._password }, function (err, response) {
                    if (err)
                        reject(err);
                    else
                        resolve(response.getTradesList());
                });
            });
        }
        catch (e) {
            throw new HavenoError_1.default(e.message, e.code);
        }
    }
    /**
     * Confirm a payment is started.
     *
     * @param {string} tradeId - the id of the trade
     */
    async confirmPaymentStarted(tradeId) {
        try {
            await new Promise((resolve, reject) => {
                this._tradesClient.confirmPaymentStarted(new grpc_pb_1.ConfirmPaymentStartedRequest().setTradeId(tradeId), { password: this._password }, function (err) {
                    if (err)
                        reject(err);
                    else
                        resolve();
                });
            });
        }
        catch (e) {
            throw new HavenoError_1.default(e.message, e.code);
        }
    }
    /**
     * Confirm a payment is received.
     *
     * @param {string} tradeId - the id of the trade
     */
    async confirmPaymentReceived(tradeId) {
        try {
            await new Promise((resolve, reject) => {
                this._tradesClient.confirmPaymentReceived(new grpc_pb_1.ConfirmPaymentReceivedRequest().setTradeId(tradeId), { password: this._password }, function (err) {
                    if (err)
                        reject(err);
                    else
                        resolve();
                });
            });
        }
        catch (e) {
            throw new HavenoError_1.default(e.message, e.code);
        }
    }
    /**
     * Get all chat messages for a trade.
     *
     * @param {string} tradeId - the id of the trade
     */
    async getChatMessages(tradeId) {
        try {
            return await new Promise((resolve, reject) => {
                const request = new grpc_pb_1.GetChatMessagesRequest().setTradeId(tradeId);
                this._tradesClient.getChatMessages(request, { password: this._password }, function (err, response) {
                    if (err)
                        reject(err);
                    else
                        resolve(response.getMessageList());
                });
            });
        }
        catch (e) {
            throw new HavenoError_1.default(e.message, e.code);
        }
    }
    /**
     * Send a trade chat message.
     *
     * @param {string} tradeId - the id of the trade
     * @param {string} message - the message
     */
    async sendChatMessage(tradeId, message) {
        try {
            await new Promise((resolve, reject) => {
                const request = new grpc_pb_1.SendChatMessageRequest()
                    .setTradeId(tradeId)
                    .setMessage(message);
                this._tradesClient.sendChatMessage(request, { password: this._password }, function (err) {
                    if (err)
                        reject(err);
                    else
                        resolve();
                });
            });
        }
        catch (e) {
            throw new HavenoError_1.default(e.message, e.code);
        }
    }
    /**
     * Get a dispute by trade id.
     *
     * @param {string} tradeId - the id of the trade
     */
    async getDispute(tradeId) {
        try {
            return await new Promise((resolve, reject) => {
                this._disputesClient.getDispute(new grpc_pb_1.GetDisputeRequest().setTradeId(tradeId), { password: this._password }, function (err, response) {
                    if (err)
                        reject(err);
                    else
                        resolve(response.getDispute());
                });
            });
        }
        catch (e) {
            throw new HavenoError_1.default(e.message, e.code);
        }
    }
    /**
     * Get all disputes.
     */
    async getDisputes() {
        try {
            return await new Promise((resolve, reject) => {
                this._disputesClient.getDisputes(new grpc_pb_1.GetDisputesRequest(), { password: this._password }, function (err, response) {
                    if (err)
                        reject(err);
                    else
                        resolve(response.getDisputesList());
                });
            });
        }
        catch (e) {
            throw new HavenoError_1.default(e.message, e.code);
        }
    }
    /**
     * Open a dispute for a trade.
     *
     * @param {string} tradeId - the id of the trade
     */
    async openDispute(tradeId) {
        try {
            await new Promise((resolve, reject) => {
                this._disputesClient.openDispute(new grpc_pb_1.OpenDisputeRequest().setTradeId(tradeId), { password: this._password }, function (err) {
                    if (err)
                        reject(err);
                    else
                        resolve();
                });
            });
        }
        catch (e) {
            throw new HavenoError_1.default(e.message, e.code);
        }
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
    async resolveDispute(tradeId, winner, reason, summaryNotes, customWinnerAmount) {
        try {
            return await new Promise((resolve, reject) => {
                const request = new grpc_pb_1.ResolveDisputeRequest()
                    .setTradeId(tradeId)
                    .setWinner(winner)
                    .setReason(reason)
                    .setSummaryNotes(summaryNotes)
                    .setCustomPayoutAmount(customWinnerAmount ? customWinnerAmount.toString() : "0");
                this._disputesClient.resolveDispute(request, { password: this._password }, function (err) {
                    if (err)
                        reject(err);
                    else
                        resolve();
                });
            });
        }
        catch (e) {
            throw new HavenoError_1.default(e.message, e.code);
        }
    }
    /**
     * Send a dispute chat message.
     *
     * @param {string} disputeId - the id of the dispute
     * @param {string} message - the message
     * @param {Attachment[]} attachments - attachments
     */
    async sendDisputeChatMessage(disputeId, message, attachments) {
        try {
            await new Promise((resolve, reject) => {
                const request = new grpc_pb_1.SendDisputeChatMessageRequest()
                    .setDisputeId(disputeId)
                    .setMessage(message)
                    .setAttachmentsList(attachments);
                this._disputesClient.sendDisputeChatMessage(request, { password: this._password }, function (err) {
                    if (err)
                        reject(err);
                    else
                        resolve();
                });
            });
        }
        catch (e) {
            throw new HavenoError_1.default(e.message, e.code);
        }
    }
    /**
     * Disconnect this client from the server.
     */
    async disconnect() {
        while (this._notificationListeners.length)
            await this.removeNotificationListener(this._notificationListeners[0]);
    }
    /**
     * Shutdown the Haveno daemon server and stop the process if applicable.
     */
    async shutdownServer() {
        try {
            await this.disconnect();
            await new Promise((resolve, reject) => {
                this._shutdownServerClient.stop(new grpc_pb_1.StopRequest(), { password: this._password }, function (err) {
                    if (err)
                        reject(err);
                    else
                        resolve();
                });
            });
            if (this._process)
                return HavenoUtils_1.default.kill(this._process);
        }
        catch (e) {
            throw new HavenoError_1.default(e.message, e.code);
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
     * @hidden
     */
    async _awaitAppInitialized() {
        try {
            // eslint-disable-next-line no-async-promise-executor
            await new Promise(async (resolve) => {
                let isResolved = false;
                const resolveOnce = async () => {
                    if (isResolved)
                        return;
                    isResolved = true;
                    await this.removeNotificationListener(listener);
                    resolve();
                };
                const listener = async function (notification) {
                    if (notification.getType() === grpc_pb_1.NotificationMessage.NotificationType.APP_INITIALIZED)
                        await resolveOnce();
                };
                await this.addNotificationListener(listener);
                if (await this._isAppInitialized())
                    await resolveOnce();
            });
        }
        catch (e) {
            throw new HavenoError_1.default(e.message, e.code);
        }
    }
    // @hidden
    async _isAppInitialized() {
        try {
            return await new Promise((resolve, reject) => {
                this._accountClient.isAppInitialized(new grpc_pb_1.IsAppInitializedRequest(), { password: this._password }, function (err, response) {
                    if (err)
                        reject(err);
                    else
                        resolve(response.getIsAppInitialized());
                });
            });
        }
        catch (e) {
            throw new HavenoError_1.default(e.message, e.code);
        }
    }
    /**
     * Update notification listener registration.
     * Due to the nature of grpc streaming, this method returns a promise
     * which may be resolved before the listener is actually registered.
     */
    async _updateNotificationListenerRegistration() {
        try {
            const listening = this._notificationListeners.length > 0;
            if (listening && this._notificationStream || !listening && !this._notificationStream)
                return; // no difference
            if (listening) {
                await new Promise((resolve) => {
                    // send request to register client listener
                    this._notificationStream = this._notificationsClient.registerNotificationListener(new grpc_pb_1.RegisterNotificationListenerRequest(), { password: this._password })
                        .on('data', this.onData);
                    // periodically send keep alive requests // TODO (woodser): better way to keep notification stream alive?
                    let firstRequest = true;
                    this._keepAliveLooper = new TaskLooper_1.default(async () => {
                        if (firstRequest) {
                            firstRequest = false;
                            return;
                        }
                        await this._sendNotification(new grpc_pb_1.NotificationMessage()
                            .setType(grpc_pb_1.NotificationMessage.NotificationType.KEEP_ALIVE)
                            .setTimestamp(Date.now()));
                    });
                    this._keepAliveLooper.start(this._keepAlivePeriodMs);
                    setTimeout(resolve, 1000); // TODO: call returns before listener registered
                });
            }
            else {
                this._notificationStream.removeListener('data', this.onData);
                this._keepAliveLooper.stop();
                this._notificationStream.cancel();
                this._notificationStream = undefined;
            }
        }
        catch (e) {
            throw new HavenoError_1.default(e.message, e.code);
        }
    }
    /**
     * Send a notification.
     *
     * @hidden
     * @param {NotificationMessage} notification - notification to send
     */
    async _sendNotification(notification) {
        try {
            await new Promise((resolve, reject) => {
                this._notificationsClient.sendNotification(new grpc_pb_1.SendNotificationRequest().setNotification(notification), { password: this._password }, function (err) {
                    if (err)
                        reject(err);
                    else
                        resolve();
                });
            });
        }
        catch (e) {
            throw new HavenoError_1.default(e.message, e.code);
        }
    }
    /**
     * Restore an account chunk from zip bytes.
     *
     * @hidden
     */
    async _restoreAccountChunk(zipBytes, offset, totalLength, hasMore) {
        try {
            const request = new grpc_pb_1.RestoreAccountRequest()
                .setZipBytes(zipBytes)
                .setOffset(offset)
                .setTotalLength(totalLength)
                .setHasMore(hasMore);
            await new Promise((resolve, reject) => {
                this._accountClient.restoreAccount(request, { password: this._password }, function (err) {
                    if (err)
                        reject(err);
                    else
                        resolve();
                });
            });
        }
        catch (e) {
            throw new HavenoError_1.default(e.message, e.code);
        }
    }
}
exports.default = HavenoClient;
// constants
HavenoClient._fullyInitializedMessage = "Application fully initialized";
HavenoClient._loginRequiredMessage = "Interactive login required";
//# sourceMappingURL=HavenoClient.js.map