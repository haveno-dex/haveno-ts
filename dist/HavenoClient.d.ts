import type * as grpcWeb from "grpc-web";
import { GetTradeStatisticsClient, GetVersionClient, AccountClient, XmrConnectionsClient, DisputesClient, DisputeAgentsClient, NotificationsClient, WalletsClient, PriceClient, OffersClient, PaymentAccountsClient, TradesClient, ShutdownServerClient, XmrNodeClient } from './protobuf/GrpcServiceClientPb';
import { MarketPriceInfo, MarketDepthInfo, XmrBalanceInfo, OfferInfo, TradeInfo, XmrTx, XmrDestination, NotificationMessage, UrlConnection } from "./protobuf/grpc_pb";
import { TradeStatistics3, OfferDirection, PaymentMethod, PaymentAccountForm, PaymentAccountFormField, PaymentAccount, PaymentAccountPayload, Attachment, DisputeResult, Dispute, ChatMessage, XmrNodeSettings } from "./protobuf/pb_pb";
/**
 * Haveno daemon client.
 */
export default class HavenoClient {
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
    /** @private */ _url: string;
    /** @private */ _password: string;
    /** @private */ _process: any;
    /** @private */ _processLogging: boolean;
    /** @private */ _walletRpcPort: number | undefined;
    /** @private */ _notificationListeners: ((_notification: NotificationMessage) => void)[];
    /** @private */ _registerNotificationListenerCalled: boolean;
    /** @private */ _keepAliveLooper: any;
    /** @private */ _keepAlivePeriodMs: number;
    /** @private */ _paymentMethods: PaymentMethod[] | undefined;
    /** @private */ static readonly _fullyInitializedMessage = "Application fully initialized";
    /** @private */ static readonly _loginRequiredMessage = "Interactive login required";
    /**
     * Construct a client connected to a Haveno daemon.
     *
     * @param {string} url - Haveno daemon url
     * @param {string} password - Haveno daemon password
     */
    constructor(url: string, password: string);
    /**
     * Start a new Haveno process.
     *
     * @param {string} havenoPath - path to Haveno binaries
     * @param {string[]} cmd - command to start the process
     * @param {string} url - Haveno daemon url (must proxy to api port)
     * @param {boolean} enableLogging - specifies if logging is enabled or disabled at log level 3
     * @return {HavenoClient} a client connected to the newly started Haveno process
     */
    static startProcess(havenoPath: string, cmd: string[], url: string, enableLogging: boolean): Promise<HavenoClient>;
    /**
     * Return the process running the haveno daemon.
     *
     * @return the process running the haveno daemon
     */
    getProcess(): any;
    /**
     * Enable or disable process logging.
     *
     * @param {boolean} enabled - specifies if logging is enabled or disabled
     */
    setProcessLogging(enabled: boolean): void;
    /**
     * Get the URL of the Haveno daemon.
     *
     * @return {string} the URL of the Haveno daemon
     */
    getUrl(): string;
    /**
     * Get the port of the primary wallet rpc instance if known.
     *
     * @return {number|undefined} the port of the primary wallet rpc instance if known
     */
    getWalletRpcPort(): number | undefined;
    /**
     * Get the name of the Haveno application folder.
     */
    getAppName(): string | undefined;
    /**
     * Get the Haveno version.
     *
     * @return {string} the Haveno daemon version
     */
    getVersion(): Promise<string>;
    /**
     * Indicates if connected and authenticated with the Haveno daemon.
     *
     * @return {boolean} true if connected with the Haveno daemon, false otherwise
     */
    isConnectedToDaemon(): Promise<boolean>;
    /**
     * Indicates if the Haveno account is created.
     *
     * @return {boolean} true if the account is created, false otherwise
     */
    accountExists(): Promise<boolean>;
    /**
     * Indicates if the Haveno account is open and authenticated with the correct password.
     *
     * @return {boolean} true if the account is open and authenticated, false otherwise
     */
    isAccountOpen(): Promise<boolean>;
    /**
     * Create and open a new Haveno account.
     *
     * @param {string} password - the password to encrypt the account
     */
    createAccount(password: string): Promise<void>;
    /**
     * Open existing Haveno account.
     *
     * @param {string} password - the account password
     */
    openAccount(password: string): Promise<void>;
    /**
     * Change the Haveno account password.
     *
     * @param {string} password - the new account password
     */
    changePassword(oldPassword: string, newPassword: string): Promise<void>;
    /**
     * Close the currently open account.
     */
    closeAccount(): Promise<void>;
    /**
     * Permanently delete the Haveno account.
     */
    deleteAccount(): Promise<void>;
    /**
     * Backup the account to the given stream. TODO: stream type?
     */
    backupAccount(stream: any): Promise<number>;
    /**
     * Restore the account from zip bytes.
     *
     * Sends chunked requests if size over max grpc envelope size (41943404 bytes).
     *
     * @param {Uint8Array} zipBytes - the bytes of the zipped account to restore
     */
    restoreAccount(zipBytes: Uint8Array): Promise<void>;
    /**
     * Add a listener to receive notifications from the Haveno daemon.
     *
     * @param {(notification: NotificationMessage) => void} listener - the notification listener to add
     */
    addNotificationListener(listener: (_notification: NotificationMessage) => void): Promise<void>;
    /**
     * Remove a notification listener.
     *
     * @param {(notification: NotificationMessage) => void} listener - the notification listener to remove
     */
    removeNotificationListener(listener: (_notification: NotificationMessage) => void): Promise<void>;
    /**
     * Indicates if connected to the Monero network based on last connection check.
     *
     * @return {boolean} true if connected to the Monero network, false otherwise
     */
    isConnectedToMonero(): Promise<boolean>;
    /**
     * Add a Monero daemon connection.
     *
     * @param {string | UrlConnection} connection - daemon url or connection to add
     */
    addMoneroConnection(connection: string | UrlConnection): Promise<void>;
    /**
     * Remove a Monero daemon connection.
     *
     * @param {string} url - url of the daemon connection to remove
     */
    removeMoneroConnection(url: string): Promise<void>;
    /**
     * Get the current Monero daemon connection.
     *
     * @return {UrlConnection | undefined} the current daemon connection, undefined if no current connection
     */
    getMoneroConnection(): Promise<UrlConnection | undefined>;
    /**
     * Get all Monero daemon connections.
     *
     * @return {UrlConnection[]} all daemon connections
     */
    getMoneroConnections(): Promise<UrlConnection[]>;
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
    setMoneroConnection(connection?: string | UrlConnection): Promise<void>;
    /**
     * Check the current Monero daemon connection.
     *
     * If disconnected and auto switch enabled, switch to the best available connection and return its status.
     *
     * @return {UrlConnection | undefined} the current daemon connection status, undefined if no current connection
     */
    checkMoneroConnection(): Promise<UrlConnection | undefined>;
    /**
     * Check all Monero daemon connections.
     *
     * @return {UrlConnection[]} status of all managed connections.
     */
    checkMoneroConnections(): Promise<UrlConnection[]>;
    /**
     * Check the connection and start checking the connection periodically.
     *
     * @param {number} refreshPeriod - time between checks in milliseconds (default 15000 ms or 15 seconds)
     */
    startCheckingConnection(refreshPeriod: number): Promise<void>;
    /**
     * Stop checking the connection status periodically.
     */
    stopCheckingConnection(): Promise<void>;
    /**
     * Get the best available connection in order of priority then response time.
     *
     * @return {UrlConnection | undefined} the best available connection in order of priority then response time, undefined if no connections available
     */
    getBestAvailableConnection(): Promise<UrlConnection | undefined>;
    /**
     * Automatically switch to the best available connection if current connection is disconnected after being checked.
     *
     * @param {boolean} autoSwitch - whether auto switch is enabled or disabled
     */
    setAutoSwitch(autoSwitch: boolean): Promise<void>;
    /**
     * Returns whether daemon is running a local monero node.
     */
    isMoneroNodeOnline(): Promise<boolean>;
    /**
     * Gets the current local monero node settings.
     */
    getMoneroNodeSettings(): Promise<XmrNodeSettings | undefined>;
    /**
     * Starts the local monero node.
     *
     * @param {MoneroNodeSettings} settings - the settings to start the local node with
     */
    startMoneroNode(settings: XmrNodeSettings): Promise<void>;
    /**
     * Stops the local monero node.
     */
    stopMoneroNode(): Promise<void>;
    /**
     * Register as a dispute agent.
     *
     * @param {string} disputeAgentType - type of dispute agent to register, e.g. mediator, refundagent
     * @param {string} registrationKey - registration key
     */
    registerDisputeAgent(disputeAgentType: string, registrationKey: string): Promise<void>;
    /**
     * Unregister as a dispute agent.
     *
     * @param {string} disputeAgentType - type of dispute agent to register, e.g. mediator, refundagent
     */
    unregisterDisputeAgent(disputeAgentType: string): Promise<void>;
    /**
     * Get the user's balances.
     *
     * @return {XmrBalanceInfo} the user's balances
     */
    getBalances(): Promise<XmrBalanceInfo>;
    /**
     * Get the mnemonic seed phrase of the Monero wallet.
     *
     * @return {string} the mnemonic seed phrase of the Monero wallet
     */
    getXmrSeed(): Promise<string>;
    /**
     * Get the primary address of the Monero wallet.
     *
     * @return {string} the primary address of the Monero wallet
     */
    getXmrPrimaryAddress(): Promise<string>;
    /**
     * Get a new subaddress in the Monero wallet to receive deposits.
     *
     * @return {string} the deposit address (a subaddress in the Haveno wallet)
     */
    getXmrNewSubaddress(): Promise<string>;
    /**
     * Get all transactions in the Monero wallet.
     *
     * @return {XmrTx[]} the transactions
     */
    getXmrTxs(): Promise<XmrTx[]>;
    /**
     * Get a transaction by hash in the Monero wallet.
     *
     * @param {String} txHash - hash of the transaction to get
     * @return {XmrTx} the transaction with the hash
     */
    getXmrTx(txHash: string): Promise<XmrTx | undefined>;
    /**
     * Create but do not relay a transaction to send funds from the Monero wallet.
     *
     * @return {XmrTx} the created transaction
     */
    createXmrTx(destinations: XmrDestination[]): Promise<XmrTx>;
    /**
     * Relay a previously created transaction to send funds from the Monero wallet.
     *
     * @return {string} the hash of the relayed transaction
     */
    relayXmrTx(metadata: string): Promise<string>;
    /**
     * Get all asset codes with price information.
     *
     * TODO: replace this with getSupportedAssetCodes(): Promise<TradeCurrency[]>)
     *
     * @return {Promise<string[]>} all supported trade assets
     */
    getPricedAssetCodes(): Promise<string[]>;
    /**
     * Get the current market price per 1 XMR in the given currency.
     *
     * @param {string} assetCode - asset code to get the price of
     * @return {number} the price of the asset per 1 XMR
     */
    getPrice(assetCode: string): Promise<number>;
    /**
     * Get the current market prices of all a.
     *
     * @return {MarketPrice[]} prices of the assets per 1 XMR
     */
    getPrices(): Promise<MarketPriceInfo[]>;
    /**
     * Get the market depth of a currency.
     *
     * @param {string} assetCode - asset to get the market depth of
     * @return {MarketDepthInfo} market depth of the given currency
     */
    getMarketDepth(assetCode: string): Promise<MarketDepthInfo>;
    /**
     * Get payment methods.
     *
     * @param {string} assetCode - get payment methods supporting this asset code (optional)
     * @return {PaymentMethod[]} the payment methods
     */
    getPaymentMethods(assetCode?: string): Promise<PaymentMethod[]>;
    /**
     * Get payment accounts.
     *
     * @return {PaymentAccount[]} the payment accounts
     */
    getPaymentAccounts(): Promise<PaymentAccount[]>;
    /**
     * Get a payment account by id.
     *
     * @param {string} paymentAccountId - the payment account id to get
     * @return {PaymentAccount} the payment account
     */
    getPaymentAccount(paymentAccountId: string): Promise<PaymentAccount>;
    /**
     * Get a form for the given payment method to complete and create a new payment account.
     *
     * @param {string | PaymentAccountForm.FormId} paymentMethodId - the id of the payment method
     * @return {PaymentAccountForm} the payment account form
     */
    getPaymentAccountForm(paymentMethodId: string | PaymentAccountForm.FormId): Promise<PaymentAccountForm>;
    /**
     * Get a form from the given payment account payload.
     *
     * @param {PaymentAccountPayload} paymentAccountPayload - payload to get as a form
     * @return {PaymentAccountForm} the payment account form
     */
    getPaymentAccountPayloadForm(paymentAccountPayload: PaymentAccountPayload): Promise<PaymentAccountForm>;
    validateFormField(form: PaymentAccountForm, fieldId: PaymentAccountFormField.FieldId, value: string): Promise<void>;
    /**
     * Create a payment account.
     *
     * @param {PaymentAccountForm} paymentAccountForm - the completed form to create the payment account
     * @return {PaymentAccount} the created payment account
     */
    createPaymentAccount(paymentAccountForm: PaymentAccountForm): Promise<PaymentAccount>;
    /**
     * Create a crypto payment account.
     *
     * @param {string} accountName - description of the account
     * @param {string} assetCode - traded asset code
     * @param {string} address - payment address of the account
     * @return {PaymentAccount} the created payment account
     */
    createCryptoPaymentAccount(accountName: string, assetCode: string, address: string): Promise<PaymentAccount>;
    /**
     * Delete a payment account.
     *
     * @param paymentAccountId {string} the id of the payment account to delete
     */
    deletePaymentAccount(paymentAccountId: string): Promise<void>;
    /**
     * Get available offers to buy or sell XMR.
     *
     * @param {string} assetCode - traded asset code
     * @param {OfferDirection|undefined} direction - "buy" or "sell" (default all)
     * @return {OfferInfo[]} the available offers
     */
    getOffers(assetCode: string, direction?: OfferDirection): Promise<OfferInfo[]>;
    /**
     * Get the user's posted offers to buy or sell XMR.
     *
     * @param {string|undefined} assetCode - traded asset code
     * @param {OfferDirection|undefined} direction - get offers to buy or sell XMR (default all)
     * @return {OfferInfo[]} the user's created offers
     */
    getMyOffers(assetCode?: string, direction?: OfferDirection): Promise<OfferInfo[]>;
    /**
     * Get my offer by id.
     *
     * @param {string} offerId - id of the user's created offer
     * @return {OfferInfo} the user's created offer
     */
    getMyOffer(offerId: string): Promise<OfferInfo>;
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
     * @return {OfferInfo} the posted offer
     */
    postOffer(direction: OfferDirection, amount: bigint, assetCode: string, paymentAccountId: string, securityDepositPct: number, price?: number, marketPriceMarginPct?: number, triggerPrice?: number, minAmount?: bigint, reserveExactAmount?: boolean): Promise<OfferInfo>;
    /**
     * Remove a posted offer, releasing its reserved funds.
     *
     * @param {string} offerId - the offer id to cancel
     */
    removeOffer(offerId: string): Promise<void>;
    /**
     * Take an offer.
     *
     * @param {string} offerId - id of the offer to take
     * @param {string} paymentAccountId - id of the payment account
     * @param {bigint|undefined} amount - amount the taker chooses to buy or sell within the offer range (default is max offer amount)
     * @return {TradeInfo} the initialized trade
     */
    takeOffer(offerId: string, paymentAccountId: string, amount?: bigint): Promise<TradeInfo>;
    /**
     * Get a trade by id.
     *
     * @param {string} tradeId - the id of the trade and its offer
     * @return {TradeInfo} the trade with the given id
     */
    getTrade(tradeId: string): Promise<TradeInfo>;
    /**
     * Get all trade statistics.
     *
     * @return {TradeStatistics3[]} all user trades
     */
    getTradeStatistics(): Promise<TradeStatistics3[]>;
    /**
     * Get all trades.
     *
     * @return {TradeInfo[]} all user trades
     */
    getTrades(): Promise<TradeInfo[]>;
    /**
     * Confirm a payment is sent.
     *
     * @param {string} tradeId - the id of the trade
     */
    confirmPaymentSent(tradeId: string): Promise<void>;
    /**
     * Confirm a payment is received.
     *
     * @param {string} tradeId - the id of the trade
     */
    confirmPaymentReceived(tradeId: string): Promise<void>;
    /**
     * Acknowledge that a trade has completed.
     *
     * @param {string} tradeId - the id of the trade
     */
    completeTrade(tradeId: string): Promise<void>;
    /**
     * Get all chat messages for a trade.
     *
     * @param {string} tradeId - the id of the trade
     */
    getChatMessages(tradeId: string): Promise<ChatMessage[]>;
    /**
     * Send a trade chat message.
     *
     * @param {string} tradeId - the id of the trade
     * @param {string} message - the message
     */
    sendChatMessage(tradeId: string, message: string): Promise<void>;
    /**
     * Get a dispute by trade id.
     *
     * @param {string} tradeId - the id of the trade
     */
    getDispute(tradeId: string): Promise<Dispute>;
    /**
     * Get all disputes.
     */
    getDisputes(): Promise<Dispute[]>;
    /**
     * Open a dispute for a trade.
     *
     * @param {string} tradeId - the id of the trade
     */
    openDispute(tradeId: string): Promise<void>;
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
    resolveDispute(tradeId: string, winner: DisputeResult.Winner, reason: DisputeResult.Reason, summaryNotes: string, customWinnerAmount?: bigint): Promise<void>;
    /**
     * Send a dispute chat message.
     *
     * @param {string} disputeId - the id of the dispute
     * @param {string} message - the message
     * @param {Attachment[]} attachments - attachments
     */
    sendDisputeChatMessage(disputeId: string, message: string, attachments: Attachment[]): Promise<void>;
    /**
     * Disconnect this client from the server.
     */
    disconnect(): Promise<void>;
    /**
     * Shutdown the Haveno daemon server and stop the process if applicable.
     */
    shutdownServer(): Promise<void>;
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
    _awaitAppInitialized(): Promise<void>;
    /** @private */
    _isAppInitialized(): Promise<boolean>;
    /**
     * Callback for grpc notifications.
     *
     * @private
     */
    _onNotification: (data: any) => void;
    /**
     * Update notification listener registration.
     * Due to the nature of grpc streaming, this method returns a promise
     * which may be resolved before the listener is actually registered.
     *
     * @private
     */
    _updateNotificationListenerRegistration(): Promise<void>;
    /**
     * Send a notification.
     *
     * @private
     * @param {NotificationMessage} notification - notification to send
     */
    _sendNotification(notification: NotificationMessage): Promise<void>;
    /**
     * Restore an account chunk from zip bytes.
     *
     * @private
     */
    _restoreAccountChunk(zipBytes: Uint8Array, offset: number, totalLength: number, hasMore: boolean): Promise<void>;
}
