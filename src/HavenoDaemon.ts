import * as grpcWeb from 'grpc-web';
import {GetVersionClient, PriceClient, WalletsClient, OffersClient, PaymentAccountsClient, TradesClient, AccountClient} from './protobuf/GrpcServiceClientPb';
import {GetVersionRequest, GetVersionReply, MarketPriceRequest, MarketPriceReply, GetBalancesRequest, GetBalancesReply, XmrBalanceInfo, GetOffersRequest, GetOffersReply, OfferInfo, GetPaymentAccountsRequest, GetPaymentAccountsReply, CreateCryptoCurrencyPaymentAccountRequest, CreateCryptoCurrencyPaymentAccountReply, CreateOfferRequest, CreateOfferReply, CancelOfferRequest, TakeOfferRequest, TakeOfferReply, TradeInfo, GetTradeRequest, GetTradeReply, GetNewDepositSubaddressRequest, GetNewDepositSubaddressReply, ConfirmPaymentStartedRequest, ConfirmPaymentReceivedRequest,
	    AccountExistsRequest,
		AccountExistsReply,
		IsAccountOpenRequest,
		IsAccountOpenReply,
		CreateAccountRequest,
		CreateAccountReply,
		OpenAccountRequest,
		OpenAccountReply,
		CloseAccountRequest,
		CloseAccountReply,
		BackupAccountRequest,
		BackupAccountReply,
		DeleteAccountRequest,
		DeleteAccountReply,
		ChangePasswordRequest,
		ChangePasswordReply
		} from './protobuf/grpc_pb';
import {PaymentAccount, AvailabilityResult} from './protobuf/pb_pb';

/**
 * Haveno daemon client using gRPC.
 */
class HavenoDaemon {
  
  // instance variables
  _url: string;
  _password: string;
  _getVersionClient: GetVersionClient;
  _priceClient: PriceClient;
  _walletsClient: WalletsClient;
  _paymentAccountsClient: PaymentAccountsClient;
  _offersClient: OffersClient;
  _tradesClient: TradesClient;
  _accountClient: AccountClient;

  /**
   * Construct a client connected to a Haveno daemon.
   * 
   * @param {string} url - Haveno daemon url
   * @param {string} password - Haveno daemon password if applicable 
   */
  constructor(url: string, password: string) {
    this._url = url;
    this._password = password;
    this._getVersionClient = new GetVersionClient(this._url);
    this._priceClient = new PriceClient(this._url);
    this._walletsClient = new WalletsClient(this._url);
    this._paymentAccountsClient = new PaymentAccountsClient(this._url);
    this._offersClient = new OffersClient(this._url);
    this._tradesClient = new TradesClient(this._url);
	this._accountClient = new AccountClient(this._url);
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
   * Get the current market price of the given currency code as a ratio, e.g. ETH/XMR.
   * 
   * @param {string} currencyCode - currency code to get the price of
   * @return {number} the current market price of the given currency code as a ratio, e.g. XMR/ETH
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
   * Get a new subaddress in the Haveno wallet to receive deposits.
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
   * @param {string} direction - one of "BUY" or "SELL"
   * 
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
   * @param {string} direction - one of "BUY" or "SELL"
   * 
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
   * @return {OfferInfo} the created offer
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

  ///////////////////////////////////////////////
  // Account
  ///////////////////////////////////////////////

  /**
   * Determine if an Account Exists.
   * 
   * @return {boolean} whether an account exists
   */
  async accountExists(): Promise<boolean> {
    let that = this;
    return new Promise(function(resolve, reject) {
      that._accountClient.accountExists(new AccountExistsRequest(), {password: that._password}, function(err: grpcWeb.RpcError, response: AccountExistsReply) {
        if (err) reject(err);
        else resolve(response.getAccountExists());
      });
    });
  }

  /**
   * Determine if an Account is open.
   * 
   * @return {boolean} whether an account is open
   */
  async isAccountOpen(): Promise<boolean> {
    let that = this;
    return new Promise(function(resolve, reject) {
      that._accountClient.isAccountOpen(new IsAccountOpenRequest(), {password: that._password}, function(err: grpcWeb.RpcError, response: IsAccountOpenReply) {
        if (err) reject(err);
        else resolve(response.getIsAccountOpen());
      });
    });
  }

  /**
   * Create an Account.
   * 
   * @param {string} password - the password for the Account
   */
  async createAccount(password: string): Promise<void> {
    let that = this;
    return new Promise(function(resolve, reject) {
      that._accountClient.createAccount(new CreateAccountRequest().setPassword(password), {password: that._password}, function(err: grpcWeb.RpcError, response: CreateAccountReply) {
        if (err) reject(err);
        else resolve();
      });
    });
  }

  /**
   * Create an Account.
   * 
   * @param {string} password - the password for the Account
   */
  async openAccount(password: string): Promise<void> {
    let that = this;
    return new Promise(function(resolve, reject) {
      that._accountClient.openAccount(new OpenAccountRequest().setPassword(password), {password: that._password}, function(err: grpcWeb.RpcError, response: OpenAccountReply) {
        if (err) reject(err);
        else resolve();
      });
    });
  }

  /**
   * Close an Account.
   * 
   */
  async closeAccount(): Promise<void> {
    let that = this;
    return new Promise(function(resolve, reject) {
      that._accountClient.closeAccount(new CloseAccountRequest(), {password: that._password}, function(err: grpcWeb.RpcError, response: CloseAccountReply) {
        if (err) reject(err);
        else resolve();
      });
    });
  }

  /**
   * Backup an Account.
   * 
   */
  async backupAccount(): Promise<void> {
    let that = this;
    return new Promise(function(resolve, reject) {
      that._accountClient.backupAccount(new BackupAccountRequest(), {password: that._password}, function(err: grpcWeb.RpcError, response: BackupAccountReply) {
        if (err) reject(err);
        else resolve();
      });
    });
  }

  /**
   * Delete an Account.
   * 
   */
  async deleteAccount(): Promise<void> {
    let that = this;
    return new Promise(function(resolve, reject) {
      that._accountClient.deleteAccount(new DeleteAccountRequest(), {password: that._password}, function(err: grpcWeb.RpcError, response: DeleteAccountReply) {
        if (err) reject(err);
        else resolve();
      });
    });
  }

  /**
   * restore an Account.
   * 
   */
  /*
  async restoreAccount(): Promise<void> {
    let that = this;
    return new Promise(function(resolve, reject) {
      that._accountClient.restoreAccount(new RestoreAccountRequest(), {password: that._password}, function(err: grpcWeb.RpcError, response: RestoreAccountReply) {
        if (err) reject(err);
        else resolve();
      });
    });
  }
  */

  /**
   * change Account password.
   * 
   */
  async changePassword(password: string): Promise<void> {
    let that = this;
    return new Promise(function(resolve, reject) {
      that._accountClient.changePassword(new ChangePasswordRequest().setPassword(password), {password: that._password}, function(err: grpcWeb.RpcError, response: ChangePasswordReply) {
        if (err) reject(err);
        else resolve();
      });
    });
  }
}

export {HavenoDaemon};