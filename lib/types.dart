/// Types mirroring haveno-ts public API surface.

enum OfferDirection { buy, sell }

enum DisputeResultWinner { buyer, seller, split }

enum GetTradesCategory { all, open, closed }

class UrlConnection {
  final String url;
  UrlConnection(this.url);
}

class XmrNodeSettings {
  final String? mode;
  XmrNodeSettings({this.mode});
}

class XmrDestination {
  final String address;
  final BigInt amount;
  XmrDestination({required this.address, required this.amount});
}

class XmrBalanceInfo {
  final BigInt balance;
  final BigInt unlockedBalance;
  XmrBalanceInfo({required this.balance, required this.unlockedBalance});
}

class XmrTx {
  final String txHash;
  final BigInt amount;
  final int height;
  XmrTx({required this.txHash, required this.amount, required this.height});
}

class MarketPriceInfo {
  final String assetCode;
  final double price;
  MarketPriceInfo({required this.assetCode, required this.price});
}

class MarketDepthInfo {
  final int depth;
  MarketDepthInfo({required this.depth});
}

class PaymentMethod {
  final String id;
  final String name;
  PaymentMethod({required this.id, required this.name});
}

class PaymentAccount {
  final String id;
  final String name;
  PaymentAccount({required this.id, required this.name});
}

class PaymentAccountForm {
  final String id;
  PaymentAccountForm({required this.id});

  static class FormId {
    static const String create = 'create';
    static const String edit = 'edit';
  }
}

class PaymentAccountFormField {
  static class FieldId {
    static const String name = 'name';
  }
}

class PaymentAccountPayload {}

class OfferInfo {
  final String offerId;
  final String assetCode;
  final OfferDirection direction;
  OfferInfo({required this.offerId, required this.assetCode, required this.direction});
}

class PostOfferConfig {
  final String assetCode;
  final OfferDirection direction;
  PostOfferConfig({required this.assetCode, required this.direction});
}

class EditOfferConfig {
  final String offerId;
  EditOfferConfig({required this.offerId});
}

class TradeInfo {
  final String tradeId;
  TradeInfo({required this.tradeId});
}

class TradeStatistics3 {
  final int count;
  TradeStatistics3({required this.count});
}

class ChatMessage {
  final String tradeId;
  final String message;
  ChatMessage({required this.tradeId, required this.message});
}

class Attachment {
  final String name;
  final List<int> data;
  Attachment({required this.name, required this.data});
}

class Dispute {
  final String disputeId;
  Dispute({required this.disputeId});
}

class DisputeResult {
  static class Winner { static const String buyer = 'buyer'; static const String seller = 'seller'; }
  static class Reason { static const String none = 'none'; }
}

class NotificationMessage {
  final String message;
  NotificationMessage({required this.message});
}

class GetWalletHeightReply {
  final int height;
  GetWalletHeightReply({required this.height});
}

class GetTradeStatisticsClient {}

class OfferDirectionHelper {
  static OfferDirection fromString(String s) =>
      s.toLowerCase() == 'buy' ? OfferDirection.buy : OfferDirection.sell;
}
