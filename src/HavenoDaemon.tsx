/**
 * These files are generated by protoc-gen-grpc-web (created with `sudo make install-plugin` in grpc-web) using the following command:
 *
 * `protoc -I=./ *.proto --js_out=import_style=commonjs:./ --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./`
 */
const {GetVersionRequest, WalletsClient} = require('./grpc_grpc_web_pb.js');
const {GetVersionClient, GetBalancesRequest} = require('./grpc_pb.js');

/**
 * Haveno daemon client using gRPC.
 */
class HavenoDaemon {
  
  // instance variables
  _url: string;
  _username?: string;
  _password?: string;
  
  /**
   * Construct a client connected to a Haveno daemon.
   * 
   * @param {string} url - Haveno daemon url
   * @param {string} username - Haveno daemon username if applicable
   * @param {string} password - Haveno daemon password if applicable 
   */
  constructor(url: string, username?: string, password?: string) {
    this._url = url;
    this._username = username;
    this._password = password;
  }
  
  /**
   * Get the Haveno version.
   * 
   * @return {string} the Haveno daemon version 
   */
  async getVersion(): Promise<string> {
    let getVersionClient = new GetVersionClient(this._url); // TODO: use one instance, username, password
    let request = new GetVersionRequest();
    let that = this;
    return new Promise(function(resolve, reject) {
      getVersionClient.getVersion(request, {password: that._password}, function(err: any, response: any) {
        if (err) reject(err);
        else resolve(response.getVersion());
      });
    });
  }
  
  /**
   * Get the user's balances.
   * 
   * @return {BalancesModel} the user's balances
   */
  async getBalances(): Promise<BalancesModel> {
    let walletsClient = new WalletsClient(this._url);
    let request = new GetBalancesRequest();
    let that = this;
    return new Promise(function(resolve, reject) {
      walletsClient.getBalances(request, {password: that._password}, function(err: any, response: any) {
        if (err) reject(err);
        else resolve(new BalancesModel(
            BigInt(response.getBalances().getXmr().getAvailablebalance()),
            BigInt(response.getBalances().getXmr().getLockedbalance()),
            BigInt(response.getBalances().getXmr().getReservedbalance()),
            BigInt(response.getBalances().getXmr().getTotalbalance())));
      });
    });
  }
}

class BalancesModel {
  unlockedBalance: bigint;
  lockedBalance: bigint;
  reservedBalance: bigint;
  totalBalance: bigint;
  constructor(
        unlockedBalance: bigint,
        lockedBalance: bigint,
        reservedBalance: bigint,
        totalBalance: bigint) {
    this.unlockedBalance = unlockedBalance;
    this.lockedBalance = lockedBalance;
    this.reservedBalance = reservedBalance;
    this.totalBalance = totalBalance;
  }
}

export {HavenoDaemon, BalancesModel};