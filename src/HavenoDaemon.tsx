import * as grpcWeb from 'grpc-web';
import {GetVersionClient, WalletsClient, OffersClient, PaymentAccountsClient} from './protobuf/GrpcServiceClientPb';
import {GetVersionRequest, GetVersionReply, GetBalancesRequest, GetBalancesReply, XmrBalanceInfo, GetOffersRequest, GetOffersReply, OfferInfo, GetPaymentAccountsRequest, GetPaymentAccountsReply} from './protobuf/grpc_pb';
import {PaymentAccount} from './protobuf/pb_pb';

/**
 * Haveno daemon client using gRPC.
 */
class HavenoDaemon {
  
  // instance variables
  _url: string;
  _password: string;
  _getVersionClient: GetVersionClient;
  _walletsClient: WalletsClient;
  _offersClient: OffersClient;
  _paymentAccountsClient: PaymentAccountsClient;
  
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
    this._walletsClient = new WalletsClient(this._url);
    this._offersClient = new OffersClient(this._url);
    this._paymentAccountsClient = new PaymentAccountsClient(this._url);
  }
  
  /**
   * Get the Haveno version.
   * 
   * @return {string} the Haveno daemon version 
   */
  async getVersion(): Promise<string> {
    let that = this;
    let request = new GetVersionRequest();
    return new Promise(function(resolve, reject) {
      that._getVersionClient.getVersion(request, {password: that._password}, function(err: grpcWeb.Error, response: GetVersionReply) {
        if (err) reject(err);
        else resolve(response.getVersion());
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
    let request = new GetBalancesRequest();
    return new Promise(function(resolve, reject) {
      that._walletsClient.getBalances(request, {password: that._password}, function(err: grpcWeb.Error, response: GetBalancesReply) {
        if (err) reject(err);
        else resolve(response.getBalances()?.getXmr());
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
    let request = new GetOffersRequest()
            .setDirection(direction)
            .setCurrencycode("XMR");
    let that = this;
    return new Promise(function(resolve, reject) {
      that._offersClient.getOffers(request, {password: that._password}, function(err: grpcWeb.Error, response: GetOffersReply) {
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
    let request = new GetOffersRequest()
            .setDirection(direction)
            .setCurrencycode("XMR");
    return new Promise(function(resolve, reject) {
      that._offersClient.getMyOffers(request, {password: that._password}, function(err: grpcWeb.Error, response: GetOffersReply) {
        if (err) reject(err);
        else resolve(response.getOffersList());
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
      that._paymentAccountsClient.getPaymentAccounts(new GetPaymentAccountsRequest(), {password: that._password}, function(err: grpcWeb.Error, response: GetPaymentAccountsReply) {
        if (err) reject(err);
        else resolve(response.getPaymentaccountsList());
      });
    });
  }
}

export {HavenoDaemon};