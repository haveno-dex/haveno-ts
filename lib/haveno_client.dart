import 'dart:async';

import 'haveno_error.dart';
import 'types.dart';

/// Transport abstraction mirroring the grpc-web clients used by haveno-ts.
abstract class HavenoTransport {
  Future<T> invoke<T>(String method, [Map<String, dynamic>? params]);
}

/// Default transport that fails fast; real implementations (grpc-web) plug in here.
class UnimplementedHavenoTransport implements HavenoTransport {
  @override
  Future<T> invoke<T>(String method, [Map<String, dynamic>? params]) =>
      throw HavenoError('Haveno transport not implemented: $method');
}

/// Dart client mirroring the public API surface of haveno-ts HavenoClient.
class HavenoClient {
  HavenoClient({required this.url, required this.password})
      : _transport = UnimplementedHavenoTransport() {
    if (url.isEmpty) throw HavenoError('Must provide URL of Haveno daemon');
    if (password.isEmpty) throw HavenoError('Must provide password of Haveno daemon');
  }

  HavenoClient.withTransport(
      {required this.url, required this.password, required HavenoTransport transport})
      : _transport = transport;

  final String url;
  final String password;
  final HavenoTransport _transport;

  static Future<HavenoClient> startProcess({
    required String havenoPath,
    required List<String> cmd,
    required String url,
    required bool enableLogging,
  }) async {
    return HavenoClient(url: url, password: '');
  }

  String? _appName;
  int? _walletRpcPort;
  String? get appName => _appName;
  int? get walletRpcPort => _walletRpcPort;

  String getUrl() => url;
  bool _processLogging = false;
  void setProcessLogging(bool enabled) => _processLogging = enabled;

  // Account
  Future<String> getVersion() => _transport.invoke<String>('getVersion');
  Future<bool> isAppInitialized() => _transport.invoke<bool>('isAppInitialized');
  Future<void> awaitAppInitialized() => _transport.invoke<void>('awaitAppInitialized');
  Future<bool> isConnectedToDaemon() => _transport.invoke<bool>('isConnectedToDaemon');
  Future<bool> accountExists() => _transport.invoke<bool>('accountExists');
  Future<bool> isAccountOpen() => _transport.invoke<bool>('isAccountOpen');
  Future<void> createAccount(String password, {String? seed, int? restoreHeight, String? restoreDate}) =>
      _transport.invoke<void>('createAccount');
  Future<void> openAccount(String password) => _transport.invoke<void>('openAccount');
  Future<void> changePassword(String oldPassword, String newPassword) =>
      _transport.invoke<void>('changePassword');
  Future<void> closeAccount() => _transport.invoke<void>('closeAccount');
  Future<void> deleteAccount() => _transport.invoke<void>('deleteAccount');
  Future<int> backupAccount(Stream<List<int>> stream) => _transport.invoke<int>('backupAccount');
  Future<void> restoreAccount(List<int> zipBytes) => _transport.invoke<void>('restoreAccount');
  Future<void> restoreXmrWalletFromSeed(String seed, {int? restoreHeight, String? restoreDate}) =>
      _transport.invoke<void>('restoreXmrWalletFromSeed');
  Future<void> addNotificationListener(void Function(NotificationMessage) listener) =>
      _transport.invoke<void>('addNotificationListener');
  Future<void> removeNotificationListener(void Function(NotificationMessage) listener) =>
      _transport.invoke<void>('removeNotificationListener');

  // Monero connections
  Future<bool> isConnectedToMonero() => _transport.invoke<bool>('isConnectedToMonero');
  Future<void> addMoneroConnection(Object connection) => _transport.invoke<void>('addMoneroConnection');
  Future<void> removeMoneroConnection(String url) => _transport.invoke<void>('removeMoneroConnection');
  Future<UrlConnection?> getMoneroConnection() => _transport.invoke<UrlConnection?>('getMoneroConnection');
  Future<List<UrlConnection>> getMoneroConnections() => _transport.invoke<List<UrlConnection>>('getMoneroConnections');
  Future<void> setMoneroConnection(Object? connection) => _transport.invoke<void>('setMoneroConnection');
  Future<UrlConnection?> checkMoneroConnection() => _transport.invoke<UrlConnection?>('checkMoneroConnection');
  Future<UrlConnection?> getBestConnection() => _transport.invoke<UrlConnection?>('getBestConnection');
  Future<void> setAutoSwitch(bool autoSwitch) => _transport.invoke<void>('setAutoSwitch');
  Future<bool> getAutoSwitch() => _transport.invoke<bool>('getAutoSwitch');
  Future<bool> isMoneroNodeOnline() => _transport.invoke<bool>('isMoneroNodeOnline');
  Future<XmrNodeSettings?> getMoneroNodeSettings() =>
      _transport.invoke<XmrNodeSettings?>('getMoneroNodeSettings');
  Future<void> startMoneroNode(XmrNodeSettings settings) => _transport.invoke<void>('startMoneroNode');
  Future<void> stopMoneroNode() => _transport.invoke<void>('stopMoneroNode');

  // Dispute agents
  Future<void> registerDisputeAgent(String disputeAgentType, String registrationKey) =>
      _transport.invoke<void>('registerDisputeAgent');
  Future<void> unregisterDisputeAgent(String disputeAgentType) =>
      _transport.invoke<void>('unregisterDisputeAgent');

  // Wallet
  Future<GetWalletHeightReply> getWalletHeights() =>
      _transport.invoke<GetWalletHeightReply>('getWalletHeights');
  Future<XmrBalanceInfo> getBalances() => _transport.invoke<XmrBalanceInfo>('getBalances');
  Future<String> getXmrSeed() => _transport.invoke<String>('getXmrSeed');
  Future<String> getXmrPrimaryAddress() => _transport.invoke<String>('getXmrPrimaryAddress');
  Future<String> getXmrNewSubaddress() => _transport.invoke<String>('getXmrNewSubaddress');
  Future<List<XmrTx>> getXmrTxs() => _transport.invoke<List<XmrTx>>('getXmrTxs');
  Future<XmrTx?> getXmrTx(String txHash) => _transport.invoke<XmrTx?>('getXmrTx');
  Future<XmrTx> createXmrTx(List<XmrDestination> destinations) =>
      _transport.invoke<XmrTx>('createXmrTx');
  Future<List<XmrTx>> createXmrSweepTxs(String address) =>
      _transport.invoke<List<XmrTx>>('createXmrSweepTxs');
  Future<List<String>> relayXmrTxs(List<String> metadatas) =>
      _transport.invoke<List<String>>('relayXmrTxs');

  // Prices
  Future<List<String>> getPricedAssetCodes() => _transport.invoke<List<String>>('getPricedAssetCodes');
  Future<double?> getPrice(String assetCode) => _transport.invoke<double?>('getPrice');
  Future<List<MarketPriceInfo>> getPrices() => _transport.invoke<List<MarketPriceInfo>>('getPrices');
  Future<MarketDepthInfo> getMarketDepth(String assetCode) =>
      _transport.invoke<MarketDepthInfo>('getMarketDepth');

  // Payment methods/accounts
  Future<List<PaymentMethod>> getPaymentMethods({String? assetCode}) =>
      _transport.invoke<List<PaymentMethod>>('getPaymentMethods');
  Future<List<PaymentAccount>> getPaymentAccounts() =>
      _transport.invoke<List<PaymentAccount>>('getPaymentAccounts');
  Future<PaymentAccount> getPaymentAccount(String paymentAccountId) =>
      _transport.invoke<PaymentAccount>('getPaymentAccount');
  Future<PaymentAccountForm> getPaymentAccountForm(Object paymentMethodId) =>
      _transport.invoke<PaymentAccountForm>('getPaymentAccountForm');
  Future<PaymentAccountForm> getPaymentAccountPayloadForm(PaymentAccountPayload payload) =>
      _transport.invoke<PaymentAccountForm>('getPaymentAccountPayloadForm');
  Future<void> validateFormField(PaymentAccountForm form, String fieldId, String value) =>
      _transport.invoke<void>('validateFormField');
  Future<PaymentAccount> createPaymentAccount(PaymentAccountForm form) =>
      _transport.invoke<PaymentAccount>('createPaymentAccount');
  Future<PaymentAccount> createCryptoPaymentAccount(String accountName, String assetCode, String address, {bool? instant}) =>
      _transport.invoke<PaymentAccount>('createCryptoPaymentAccount');
  Future<void> deletePaymentAccount(String paymentAccountId) =>
      _transport.invoke<void>('deletePaymentAccount');

  // Offers
  Future<List<OfferInfo>> getOffers(String assetCode, {OfferDirection? direction}) =>
      _transport.invoke<List<OfferInfo>>('getOffers');
  Future<List<OfferInfo>> getMyOffers({String? assetCode, OfferDirection? direction}) =>
      _transport.invoke<List<OfferInfo>>('getMyOffers');
  Future<OfferInfo> getMyOffer(String offerId) => _transport.invoke<OfferInfo>('getMyOffer');
  Future<OfferInfo> postOffer(PostOfferConfig config) => _transport.invoke<OfferInfo>('postOffer');
  Future<OfferInfo> editOffer(EditOfferConfig config) => _transport.invoke<OfferInfo>('editOffer');
  Future<void> deactivateOffer(String offerId) => _transport.invoke<void>('deactivateOffer');
  Future<void> activateOffer(String offerId) => _transport.invoke<void>('activateOffer');
  Future<void> removeOffer(String offerId) => _transport.invoke<void>('removeOffer');
  Future<void> takeOffer(String offerId,
          {String? paymentAccountId, String? amount, String? price, String? triggerPrice, String? accountAgeWitness}) =>
      _transport.invoke<void>('takeOffer');

  // Trades
  Future<TradeInfo> getTrade(String tradeId) => _transport.invoke<TradeInfo>('getTrade');
  Future<List<TradeStatistics3>> getTradeStatistics() =>
      _transport.invoke<List<TradeStatistics3>>('getTradeStatistics');
  Future<List<TradeInfo>> getTrades({GetTradesCategory? category}) =>
      _transport.invoke<List<TradeInfo>>('getTrades');
  Future<void> confirmPaymentSent(String tradeId) => _transport.invoke<void>('confirmPaymentSent');
  Future<void> confirmPaymentReceived(String tradeId) => _transport.invoke<void>('confirmPaymentReceived');
  Future<List<ChatMessage>> getChatMessages(String tradeId) =>
      _transport.invoke<List<ChatMessage>>('getChatMessages');
  Future<void> sendChatMessage(String tradeId, String message) =>
      _transport.invoke<void>('sendChatMessage');

  // Disputes
  Future<Dispute> getDispute(String tradeId) => _transport.invoke<Dispute>('getDispute');
  Future<List<Dispute>> getDisputes() => _transport.invoke<List<Dispute>>('getDisputes');
  Future<void> openDispute(String tradeId) => _transport.invoke<void>('openDispute');
  Future<void> resolveDispute(String tradeId, String winner, String reason, String summaryNotes, {BigInt? customWinnerAmount}) =>
      _transport.invoke<void>('resolveDispute');
  Future<void> sendDisputeChatMessage(String disputeId, String message, List<Attachment> attachments) =>
      _transport.invoke<void>('sendDisputeChatMessage');

  Future<void> disconnect() => _transport.invoke<void>('disconnect');
  Future<void> shutdownServer() => _transport.invoke<void>('shutdownServer');
}
