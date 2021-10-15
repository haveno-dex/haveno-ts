// source: grpc.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var pb_pb = require('./pb_pb.js');
goog.object.extend(proto, pb_pb);
goog.exportSymbol('proto.io.bisq.protobuffer.AddressBalanceInfo', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.AvailabilityResultWithDescription', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.BalancesInfo', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.BtcBalanceInfo', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.CancelOfferReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.CancelOfferRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.ConfirmPaymentReceivedReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.ConfirmPaymentReceivedRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.ConfirmPaymentStartedReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.ConfirmPaymentStartedRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.ContractInfo', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.CreateOfferReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.CreateOfferRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.CreatePaymentAccountReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.CreatePaymentAccountRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetAddressBalanceReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetAddressBalanceRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetBalancesReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetBalancesRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetFundingAddressesReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetFundingAddressesRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetMethodHelpReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetMethodHelpRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetMyOfferReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetMyOfferRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetMyOffersReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetMyOffersRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetNewDepositSubaddressReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetNewDepositSubaddressRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetOfferReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetOfferRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetOffersReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetOffersRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetPaymentAccountFormReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetPaymentAccountFormRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetPaymentAccountsReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetPaymentAccountsRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetPaymentMethodsReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetPaymentMethodsRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetTradeReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetTradeRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetTradeStatisticsReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetTradeStatisticsRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetTransactionReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetTransactionRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetTxFeeRateReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetTxFeeRateRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetVersionReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetVersionRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.KeepFundsReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.KeepFundsRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.LockWalletReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.LockWalletRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.MarketPriceReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.MarketPriceRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.OfferInfo', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.PaymentAccountPayloadInfo', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.RegisterDisputeAgentReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.RegisterDisputeAgentRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.RemoveWalletPasswordReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.RemoveWalletPasswordRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.SendBtcReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.SendBtcRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.SetTxFeeRatePreferenceReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.SetTxFeeRatePreferenceRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.SetWalletPasswordReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.SetWalletPasswordRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.StopReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.StopRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.TakeOfferReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.TakeOfferRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.TradeInfo', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.TxFeeRateInfo', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.TxInfo', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.UnlockWalletReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.UnlockWalletRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.WithdrawFundsReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.WithdrawFundsRequest', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.XmrBalanceInfo', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.RegisterDisputeAgentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.RegisterDisputeAgentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.RegisterDisputeAgentRequest.displayName = 'proto.io.bisq.protobuffer.RegisterDisputeAgentRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.RegisterDisputeAgentReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.RegisterDisputeAgentReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.RegisterDisputeAgentReply.displayName = 'proto.io.bisq.protobuffer.RegisterDisputeAgentReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetMethodHelpRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetMethodHelpRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetMethodHelpRequest.displayName = 'proto.io.bisq.protobuffer.GetMethodHelpRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetMethodHelpReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetMethodHelpReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetMethodHelpReply.displayName = 'proto.io.bisq.protobuffer.GetMethodHelpReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetOfferRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetOfferRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetOfferRequest.displayName = 'proto.io.bisq.protobuffer.GetOfferRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetOfferReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetOfferReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetOfferReply.displayName = 'proto.io.bisq.protobuffer.GetOfferReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetMyOfferRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetMyOfferRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetMyOfferRequest.displayName = 'proto.io.bisq.protobuffer.GetMyOfferRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetMyOfferReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetMyOfferReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetMyOfferReply.displayName = 'proto.io.bisq.protobuffer.GetMyOfferReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetOffersRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetOffersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetOffersRequest.displayName = 'proto.io.bisq.protobuffer.GetOffersRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetOffersReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.io.bisq.protobuffer.GetOffersReply.repeatedFields_, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetOffersReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetOffersReply.displayName = 'proto.io.bisq.protobuffer.GetOffersReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetMyOffersRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetMyOffersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetMyOffersRequest.displayName = 'proto.io.bisq.protobuffer.GetMyOffersRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetMyOffersReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.io.bisq.protobuffer.GetMyOffersReply.repeatedFields_, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetMyOffersReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetMyOffersReply.displayName = 'proto.io.bisq.protobuffer.GetMyOffersReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.CreateOfferRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.CreateOfferRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.CreateOfferRequest.displayName = 'proto.io.bisq.protobuffer.CreateOfferRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.CreateOfferReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.CreateOfferReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.CreateOfferReply.displayName = 'proto.io.bisq.protobuffer.CreateOfferReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.CancelOfferRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.CancelOfferRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.CancelOfferRequest.displayName = 'proto.io.bisq.protobuffer.CancelOfferRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.CancelOfferReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.CancelOfferReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.CancelOfferReply.displayName = 'proto.io.bisq.protobuffer.CancelOfferReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.OfferInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.OfferInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.OfferInfo.displayName = 'proto.io.bisq.protobuffer.OfferInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.AvailabilityResultWithDescription = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.AvailabilityResultWithDescription, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.AvailabilityResultWithDescription.displayName = 'proto.io.bisq.protobuffer.AvailabilityResultWithDescription';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.CreatePaymentAccountRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.CreatePaymentAccountRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.CreatePaymentAccountRequest.displayName = 'proto.io.bisq.protobuffer.CreatePaymentAccountRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.CreatePaymentAccountReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.CreatePaymentAccountReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.CreatePaymentAccountReply.displayName = 'proto.io.bisq.protobuffer.CreatePaymentAccountReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetPaymentAccountsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetPaymentAccountsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetPaymentAccountsRequest.displayName = 'proto.io.bisq.protobuffer.GetPaymentAccountsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetPaymentAccountsReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.io.bisq.protobuffer.GetPaymentAccountsReply.repeatedFields_, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetPaymentAccountsReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetPaymentAccountsReply.displayName = 'proto.io.bisq.protobuffer.GetPaymentAccountsReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetPaymentMethodsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetPaymentMethodsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetPaymentMethodsRequest.displayName = 'proto.io.bisq.protobuffer.GetPaymentMethodsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetPaymentMethodsReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.io.bisq.protobuffer.GetPaymentMethodsReply.repeatedFields_, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetPaymentMethodsReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetPaymentMethodsReply.displayName = 'proto.io.bisq.protobuffer.GetPaymentMethodsReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetPaymentAccountFormRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetPaymentAccountFormRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetPaymentAccountFormRequest.displayName = 'proto.io.bisq.protobuffer.GetPaymentAccountFormRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetPaymentAccountFormReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetPaymentAccountFormReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetPaymentAccountFormReply.displayName = 'proto.io.bisq.protobuffer.GetPaymentAccountFormReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest.displayName = 'proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountReply.displayName = 'proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsRequest.displayName = 'proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsReply.repeatedFields_, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsReply.displayName = 'proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.MarketPriceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.MarketPriceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.MarketPriceRequest.displayName = 'proto.io.bisq.protobuffer.MarketPriceRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.MarketPriceReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.MarketPriceReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.MarketPriceReply.displayName = 'proto.io.bisq.protobuffer.MarketPriceReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetTradeStatisticsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetTradeStatisticsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetTradeStatisticsRequest.displayName = 'proto.io.bisq.protobuffer.GetTradeStatisticsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetTradeStatisticsReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.io.bisq.protobuffer.GetTradeStatisticsReply.repeatedFields_, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetTradeStatisticsReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetTradeStatisticsReply.displayName = 'proto.io.bisq.protobuffer.GetTradeStatisticsReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.StopRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.StopRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.StopRequest.displayName = 'proto.io.bisq.protobuffer.StopRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.StopReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.StopReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.StopReply.displayName = 'proto.io.bisq.protobuffer.StopReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.TakeOfferRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.TakeOfferRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.TakeOfferRequest.displayName = 'proto.io.bisq.protobuffer.TakeOfferRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.TakeOfferReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.TakeOfferReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.TakeOfferReply.displayName = 'proto.io.bisq.protobuffer.TakeOfferReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.ConfirmPaymentStartedRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.ConfirmPaymentStartedRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.ConfirmPaymentStartedRequest.displayName = 'proto.io.bisq.protobuffer.ConfirmPaymentStartedRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.ConfirmPaymentStartedReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.ConfirmPaymentStartedReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.ConfirmPaymentStartedReply.displayName = 'proto.io.bisq.protobuffer.ConfirmPaymentStartedReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.ConfirmPaymentReceivedRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.ConfirmPaymentReceivedRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.ConfirmPaymentReceivedRequest.displayName = 'proto.io.bisq.protobuffer.ConfirmPaymentReceivedRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.ConfirmPaymentReceivedReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.ConfirmPaymentReceivedReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.ConfirmPaymentReceivedReply.displayName = 'proto.io.bisq.protobuffer.ConfirmPaymentReceivedReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetTradeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetTradeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetTradeRequest.displayName = 'proto.io.bisq.protobuffer.GetTradeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetTradeReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetTradeReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetTradeReply.displayName = 'proto.io.bisq.protobuffer.GetTradeReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.KeepFundsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.KeepFundsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.KeepFundsRequest.displayName = 'proto.io.bisq.protobuffer.KeepFundsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.KeepFundsReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.KeepFundsReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.KeepFundsReply.displayName = 'proto.io.bisq.protobuffer.KeepFundsReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.WithdrawFundsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.WithdrawFundsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.WithdrawFundsRequest.displayName = 'proto.io.bisq.protobuffer.WithdrawFundsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.WithdrawFundsReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.WithdrawFundsReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.WithdrawFundsReply.displayName = 'proto.io.bisq.protobuffer.WithdrawFundsReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.TradeInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.TradeInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.TradeInfo.displayName = 'proto.io.bisq.protobuffer.TradeInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.ContractInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.ContractInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.ContractInfo.displayName = 'proto.io.bisq.protobuffer.ContractInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.PaymentAccountPayloadInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.PaymentAccountPayloadInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.PaymentAccountPayloadInfo.displayName = 'proto.io.bisq.protobuffer.PaymentAccountPayloadInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.TxFeeRateInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.TxFeeRateInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.TxFeeRateInfo.displayName = 'proto.io.bisq.protobuffer.TxFeeRateInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.TxInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.TxInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.TxInfo.displayName = 'proto.io.bisq.protobuffer.TxInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetBalancesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetBalancesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetBalancesRequest.displayName = 'proto.io.bisq.protobuffer.GetBalancesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetBalancesReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetBalancesReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetBalancesReply.displayName = 'proto.io.bisq.protobuffer.GetBalancesReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetNewDepositSubaddressRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetNewDepositSubaddressRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetNewDepositSubaddressRequest.displayName = 'proto.io.bisq.protobuffer.GetNewDepositSubaddressRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetNewDepositSubaddressReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetNewDepositSubaddressReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetNewDepositSubaddressReply.displayName = 'proto.io.bisq.protobuffer.GetNewDepositSubaddressReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetAddressBalanceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetAddressBalanceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetAddressBalanceRequest.displayName = 'proto.io.bisq.protobuffer.GetAddressBalanceRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetAddressBalanceReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetAddressBalanceReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetAddressBalanceReply.displayName = 'proto.io.bisq.protobuffer.GetAddressBalanceReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.SendBtcRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.SendBtcRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.SendBtcRequest.displayName = 'proto.io.bisq.protobuffer.SendBtcRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.SendBtcReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.SendBtcReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.SendBtcReply.displayName = 'proto.io.bisq.protobuffer.SendBtcReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetTxFeeRateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetTxFeeRateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetTxFeeRateRequest.displayName = 'proto.io.bisq.protobuffer.GetTxFeeRateRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetTxFeeRateReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetTxFeeRateReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetTxFeeRateReply.displayName = 'proto.io.bisq.protobuffer.GetTxFeeRateReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.SetTxFeeRatePreferenceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.SetTxFeeRatePreferenceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.SetTxFeeRatePreferenceRequest.displayName = 'proto.io.bisq.protobuffer.SetTxFeeRatePreferenceRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.SetTxFeeRatePreferenceReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.SetTxFeeRatePreferenceReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.SetTxFeeRatePreferenceReply.displayName = 'proto.io.bisq.protobuffer.SetTxFeeRatePreferenceReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceRequest.displayName = 'proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceReply.displayName = 'proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetTransactionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetTransactionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetTransactionRequest.displayName = 'proto.io.bisq.protobuffer.GetTransactionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetTransactionReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetTransactionReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetTransactionReply.displayName = 'proto.io.bisq.protobuffer.GetTransactionReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetFundingAddressesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetFundingAddressesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetFundingAddressesRequest.displayName = 'proto.io.bisq.protobuffer.GetFundingAddressesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetFundingAddressesReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.io.bisq.protobuffer.GetFundingAddressesReply.repeatedFields_, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetFundingAddressesReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetFundingAddressesReply.displayName = 'proto.io.bisq.protobuffer.GetFundingAddressesReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.SetWalletPasswordRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.SetWalletPasswordRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.SetWalletPasswordRequest.displayName = 'proto.io.bisq.protobuffer.SetWalletPasswordRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.SetWalletPasswordReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.SetWalletPasswordReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.SetWalletPasswordReply.displayName = 'proto.io.bisq.protobuffer.SetWalletPasswordReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.RemoveWalletPasswordRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.RemoveWalletPasswordRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.RemoveWalletPasswordRequest.displayName = 'proto.io.bisq.protobuffer.RemoveWalletPasswordRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.RemoveWalletPasswordReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.RemoveWalletPasswordReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.RemoveWalletPasswordReply.displayName = 'proto.io.bisq.protobuffer.RemoveWalletPasswordReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.LockWalletRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.LockWalletRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.LockWalletRequest.displayName = 'proto.io.bisq.protobuffer.LockWalletRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.LockWalletReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.LockWalletReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.LockWalletReply.displayName = 'proto.io.bisq.protobuffer.LockWalletReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.UnlockWalletRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.UnlockWalletRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.UnlockWalletRequest.displayName = 'proto.io.bisq.protobuffer.UnlockWalletRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.UnlockWalletReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.UnlockWalletReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.UnlockWalletReply.displayName = 'proto.io.bisq.protobuffer.UnlockWalletReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.BalancesInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.BalancesInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.BalancesInfo.displayName = 'proto.io.bisq.protobuffer.BalancesInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.BtcBalanceInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.BtcBalanceInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.BtcBalanceInfo.displayName = 'proto.io.bisq.protobuffer.BtcBalanceInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.XmrBalanceInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.XmrBalanceInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.XmrBalanceInfo.displayName = 'proto.io.bisq.protobuffer.XmrBalanceInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.AddressBalanceInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.AddressBalanceInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.AddressBalanceInfo.displayName = 'proto.io.bisq.protobuffer.AddressBalanceInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetVersionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetVersionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetVersionRequest.displayName = 'proto.io.bisq.protobuffer.GetVersionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.bisq.protobuffer.GetVersionReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetVersionReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetVersionReply.displayName = 'proto.io.bisq.protobuffer.GetVersionReply';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.RegisterDisputeAgentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.RegisterDisputeAgentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.RegisterDisputeAgentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.RegisterDisputeAgentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    disputeAgentType: jspb.Message.getFieldWithDefault(msg, 1, ""),
    registrationKey: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.RegisterDisputeAgentRequest}
 */
proto.io.bisq.protobuffer.RegisterDisputeAgentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.RegisterDisputeAgentRequest;
  return proto.io.bisq.protobuffer.RegisterDisputeAgentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.RegisterDisputeAgentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.RegisterDisputeAgentRequest}
 */
proto.io.bisq.protobuffer.RegisterDisputeAgentRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisputeAgentType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRegistrationKey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.RegisterDisputeAgentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.RegisterDisputeAgentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.RegisterDisputeAgentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.RegisterDisputeAgentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDisputeAgentType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRegistrationKey();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string dispute_agent_type = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.RegisterDisputeAgentRequest.prototype.getDisputeAgentType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.RegisterDisputeAgentRequest} returns this
 */
proto.io.bisq.protobuffer.RegisterDisputeAgentRequest.prototype.setDisputeAgentType = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string registration_key = 2;
 * @return {string}
 */
proto.io.bisq.protobuffer.RegisterDisputeAgentRequest.prototype.getRegistrationKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.RegisterDisputeAgentRequest} returns this
 */
proto.io.bisq.protobuffer.RegisterDisputeAgentRequest.prototype.setRegistrationKey = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.RegisterDisputeAgentReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.RegisterDisputeAgentReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.RegisterDisputeAgentReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.RegisterDisputeAgentReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.RegisterDisputeAgentReply}
 */
proto.io.bisq.protobuffer.RegisterDisputeAgentReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.RegisterDisputeAgentReply;
  return proto.io.bisq.protobuffer.RegisterDisputeAgentReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.RegisterDisputeAgentReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.RegisterDisputeAgentReply}
 */
proto.io.bisq.protobuffer.RegisterDisputeAgentReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.RegisterDisputeAgentReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.RegisterDisputeAgentReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.RegisterDisputeAgentReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.RegisterDisputeAgentReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetMethodHelpRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetMethodHelpRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetMethodHelpRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetMethodHelpRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    methodName: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetMethodHelpRequest}
 */
proto.io.bisq.protobuffer.GetMethodHelpRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetMethodHelpRequest;
  return proto.io.bisq.protobuffer.GetMethodHelpRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetMethodHelpRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetMethodHelpRequest}
 */
proto.io.bisq.protobuffer.GetMethodHelpRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMethodName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetMethodHelpRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetMethodHelpRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetMethodHelpRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetMethodHelpRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMethodName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string method_name = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.GetMethodHelpRequest.prototype.getMethodName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.GetMethodHelpRequest} returns this
 */
proto.io.bisq.protobuffer.GetMethodHelpRequest.prototype.setMethodName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetMethodHelpReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetMethodHelpReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetMethodHelpReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetMethodHelpReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    methodHelp: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetMethodHelpReply}
 */
proto.io.bisq.protobuffer.GetMethodHelpReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetMethodHelpReply;
  return proto.io.bisq.protobuffer.GetMethodHelpReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetMethodHelpReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetMethodHelpReply}
 */
proto.io.bisq.protobuffer.GetMethodHelpReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMethodHelp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetMethodHelpReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetMethodHelpReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetMethodHelpReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetMethodHelpReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMethodHelp();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string method_help = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.GetMethodHelpReply.prototype.getMethodHelp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.GetMethodHelpReply} returns this
 */
proto.io.bisq.protobuffer.GetMethodHelpReply.prototype.setMethodHelp = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetOfferRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetOfferRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetOfferRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetOfferRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetOfferRequest}
 */
proto.io.bisq.protobuffer.GetOfferRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetOfferRequest;
  return proto.io.bisq.protobuffer.GetOfferRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetOfferRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetOfferRequest}
 */
proto.io.bisq.protobuffer.GetOfferRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetOfferRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetOfferRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetOfferRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetOfferRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.GetOfferRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.GetOfferRequest} returns this
 */
proto.io.bisq.protobuffer.GetOfferRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetOfferReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetOfferReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetOfferReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetOfferReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    offer: (f = msg.getOffer()) && proto.io.bisq.protobuffer.OfferInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetOfferReply}
 */
proto.io.bisq.protobuffer.GetOfferReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetOfferReply;
  return proto.io.bisq.protobuffer.GetOfferReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetOfferReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetOfferReply}
 */
proto.io.bisq.protobuffer.GetOfferReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.io.bisq.protobuffer.OfferInfo;
      reader.readMessage(value,proto.io.bisq.protobuffer.OfferInfo.deserializeBinaryFromReader);
      msg.setOffer(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetOfferReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetOfferReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetOfferReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetOfferReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOffer();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.io.bisq.protobuffer.OfferInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional OfferInfo offer = 1;
 * @return {?proto.io.bisq.protobuffer.OfferInfo}
 */
proto.io.bisq.protobuffer.GetOfferReply.prototype.getOffer = function() {
  return /** @type{?proto.io.bisq.protobuffer.OfferInfo} */ (
    jspb.Message.getWrapperField(this, proto.io.bisq.protobuffer.OfferInfo, 1));
};


/**
 * @param {?proto.io.bisq.protobuffer.OfferInfo|undefined} value
 * @return {!proto.io.bisq.protobuffer.GetOfferReply} returns this
*/
proto.io.bisq.protobuffer.GetOfferReply.prototype.setOffer = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.bisq.protobuffer.GetOfferReply} returns this
 */
proto.io.bisq.protobuffer.GetOfferReply.prototype.clearOffer = function() {
  return this.setOffer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.bisq.protobuffer.GetOfferReply.prototype.hasOffer = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetMyOfferRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetMyOfferRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetMyOfferRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetMyOfferRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetMyOfferRequest}
 */
proto.io.bisq.protobuffer.GetMyOfferRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetMyOfferRequest;
  return proto.io.bisq.protobuffer.GetMyOfferRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetMyOfferRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetMyOfferRequest}
 */
proto.io.bisq.protobuffer.GetMyOfferRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetMyOfferRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetMyOfferRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetMyOfferRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetMyOfferRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.GetMyOfferRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.GetMyOfferRequest} returns this
 */
proto.io.bisq.protobuffer.GetMyOfferRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetMyOfferReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetMyOfferReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetMyOfferReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetMyOfferReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    offer: (f = msg.getOffer()) && proto.io.bisq.protobuffer.OfferInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetMyOfferReply}
 */
proto.io.bisq.protobuffer.GetMyOfferReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetMyOfferReply;
  return proto.io.bisq.protobuffer.GetMyOfferReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetMyOfferReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetMyOfferReply}
 */
proto.io.bisq.protobuffer.GetMyOfferReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.io.bisq.protobuffer.OfferInfo;
      reader.readMessage(value,proto.io.bisq.protobuffer.OfferInfo.deserializeBinaryFromReader);
      msg.setOffer(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetMyOfferReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetMyOfferReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetMyOfferReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetMyOfferReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOffer();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.io.bisq.protobuffer.OfferInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional OfferInfo offer = 1;
 * @return {?proto.io.bisq.protobuffer.OfferInfo}
 */
proto.io.bisq.protobuffer.GetMyOfferReply.prototype.getOffer = function() {
  return /** @type{?proto.io.bisq.protobuffer.OfferInfo} */ (
    jspb.Message.getWrapperField(this, proto.io.bisq.protobuffer.OfferInfo, 1));
};


/**
 * @param {?proto.io.bisq.protobuffer.OfferInfo|undefined} value
 * @return {!proto.io.bisq.protobuffer.GetMyOfferReply} returns this
*/
proto.io.bisq.protobuffer.GetMyOfferReply.prototype.setOffer = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.bisq.protobuffer.GetMyOfferReply} returns this
 */
proto.io.bisq.protobuffer.GetMyOfferReply.prototype.clearOffer = function() {
  return this.setOffer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.bisq.protobuffer.GetMyOfferReply.prototype.hasOffer = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetOffersRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetOffersRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetOffersRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetOffersRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    direction: jspb.Message.getFieldWithDefault(msg, 1, ""),
    currencyCode: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetOffersRequest}
 */
proto.io.bisq.protobuffer.GetOffersRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetOffersRequest;
  return proto.io.bisq.protobuffer.GetOffersRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetOffersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetOffersRequest}
 */
proto.io.bisq.protobuffer.GetOffersRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDirection(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrencyCode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetOffersRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetOffersRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetOffersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetOffersRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDirection();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCurrencyCode();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string direction = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.GetOffersRequest.prototype.getDirection = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.GetOffersRequest} returns this
 */
proto.io.bisq.protobuffer.GetOffersRequest.prototype.setDirection = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string currency_code = 2;
 * @return {string}
 */
proto.io.bisq.protobuffer.GetOffersRequest.prototype.getCurrencyCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.GetOffersRequest} returns this
 */
proto.io.bisq.protobuffer.GetOffersRequest.prototype.setCurrencyCode = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.io.bisq.protobuffer.GetOffersReply.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetOffersReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetOffersReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetOffersReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetOffersReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    offersList: jspb.Message.toObjectList(msg.getOffersList(),
    proto.io.bisq.protobuffer.OfferInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetOffersReply}
 */
proto.io.bisq.protobuffer.GetOffersReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetOffersReply;
  return proto.io.bisq.protobuffer.GetOffersReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetOffersReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetOffersReply}
 */
proto.io.bisq.protobuffer.GetOffersReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.io.bisq.protobuffer.OfferInfo;
      reader.readMessage(value,proto.io.bisq.protobuffer.OfferInfo.deserializeBinaryFromReader);
      msg.addOffers(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetOffersReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetOffersReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetOffersReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetOffersReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOffersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.io.bisq.protobuffer.OfferInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated OfferInfo offers = 1;
 * @return {!Array<!proto.io.bisq.protobuffer.OfferInfo>}
 */
proto.io.bisq.protobuffer.GetOffersReply.prototype.getOffersList = function() {
  return /** @type{!Array<!proto.io.bisq.protobuffer.OfferInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.io.bisq.protobuffer.OfferInfo, 1));
};


/**
 * @param {!Array<!proto.io.bisq.protobuffer.OfferInfo>} value
 * @return {!proto.io.bisq.protobuffer.GetOffersReply} returns this
*/
proto.io.bisq.protobuffer.GetOffersReply.prototype.setOffersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.io.bisq.protobuffer.OfferInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.io.bisq.protobuffer.OfferInfo}
 */
proto.io.bisq.protobuffer.GetOffersReply.prototype.addOffers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.io.bisq.protobuffer.OfferInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.io.bisq.protobuffer.GetOffersReply} returns this
 */
proto.io.bisq.protobuffer.GetOffersReply.prototype.clearOffersList = function() {
  return this.setOffersList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetMyOffersRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetMyOffersRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetMyOffersRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetMyOffersRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    direction: jspb.Message.getFieldWithDefault(msg, 1, ""),
    currencyCode: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetMyOffersRequest}
 */
proto.io.bisq.protobuffer.GetMyOffersRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetMyOffersRequest;
  return proto.io.bisq.protobuffer.GetMyOffersRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetMyOffersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetMyOffersRequest}
 */
proto.io.bisq.protobuffer.GetMyOffersRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDirection(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrencyCode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetMyOffersRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetMyOffersRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetMyOffersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetMyOffersRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDirection();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCurrencyCode();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string direction = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.GetMyOffersRequest.prototype.getDirection = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.GetMyOffersRequest} returns this
 */
proto.io.bisq.protobuffer.GetMyOffersRequest.prototype.setDirection = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string currency_code = 2;
 * @return {string}
 */
proto.io.bisq.protobuffer.GetMyOffersRequest.prototype.getCurrencyCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.GetMyOffersRequest} returns this
 */
proto.io.bisq.protobuffer.GetMyOffersRequest.prototype.setCurrencyCode = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.io.bisq.protobuffer.GetMyOffersReply.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetMyOffersReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetMyOffersReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetMyOffersReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetMyOffersReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    offersList: jspb.Message.toObjectList(msg.getOffersList(),
    proto.io.bisq.protobuffer.OfferInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetMyOffersReply}
 */
proto.io.bisq.protobuffer.GetMyOffersReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetMyOffersReply;
  return proto.io.bisq.protobuffer.GetMyOffersReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetMyOffersReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetMyOffersReply}
 */
proto.io.bisq.protobuffer.GetMyOffersReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.io.bisq.protobuffer.OfferInfo;
      reader.readMessage(value,proto.io.bisq.protobuffer.OfferInfo.deserializeBinaryFromReader);
      msg.addOffers(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetMyOffersReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetMyOffersReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetMyOffersReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetMyOffersReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOffersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.io.bisq.protobuffer.OfferInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated OfferInfo offers = 1;
 * @return {!Array<!proto.io.bisq.protobuffer.OfferInfo>}
 */
proto.io.bisq.protobuffer.GetMyOffersReply.prototype.getOffersList = function() {
  return /** @type{!Array<!proto.io.bisq.protobuffer.OfferInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.io.bisq.protobuffer.OfferInfo, 1));
};


/**
 * @param {!Array<!proto.io.bisq.protobuffer.OfferInfo>} value
 * @return {!proto.io.bisq.protobuffer.GetMyOffersReply} returns this
*/
proto.io.bisq.protobuffer.GetMyOffersReply.prototype.setOffersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.io.bisq.protobuffer.OfferInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.io.bisq.protobuffer.OfferInfo}
 */
proto.io.bisq.protobuffer.GetMyOffersReply.prototype.addOffers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.io.bisq.protobuffer.OfferInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.io.bisq.protobuffer.GetMyOffersReply} returns this
 */
proto.io.bisq.protobuffer.GetMyOffersReply.prototype.clearOffersList = function() {
  return this.setOffersList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.CreateOfferRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.CreateOfferRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.CreateOfferRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.CreateOfferRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    currencyCode: jspb.Message.getFieldWithDefault(msg, 1, ""),
    direction: jspb.Message.getFieldWithDefault(msg, 2, ""),
    price: jspb.Message.getFieldWithDefault(msg, 3, ""),
    useMarketBasedPrice: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    marketPriceMargin: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    amount: jspb.Message.getFieldWithDefault(msg, 6, "0"),
    minAmount: jspb.Message.getFieldWithDefault(msg, 7, "0"),
    buyerSecurityDeposit: jspb.Message.getFloatingPointFieldWithDefault(msg, 8, 0.0),
    triggerPrice: jspb.Message.getFieldWithDefault(msg, 9, "0"),
    paymentAccountId: jspb.Message.getFieldWithDefault(msg, 10, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.CreateOfferRequest}
 */
proto.io.bisq.protobuffer.CreateOfferRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.CreateOfferRequest;
  return proto.io.bisq.protobuffer.CreateOfferRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.CreateOfferRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.CreateOfferRequest}
 */
proto.io.bisq.protobuffer.CreateOfferRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrencyCode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDirection(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPrice(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUseMarketBasedPrice(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMarketPriceMargin(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setAmount(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setMinAmount(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setBuyerSecurityDeposit(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setTriggerPrice(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaymentAccountId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.CreateOfferRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.CreateOfferRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.CreateOfferRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.CreateOfferRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCurrencyCode();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDirection();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPrice();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getUseMarketBasedPrice();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getMarketPriceMargin();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = message.getAmount();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      6,
      f
    );
  }
  f = message.getMinAmount();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      7,
      f
    );
  }
  f = message.getBuyerSecurityDeposit();
  if (f !== 0.0) {
    writer.writeDouble(
      8,
      f
    );
  }
  f = message.getTriggerPrice();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      9,
      f
    );
  }
  f = message.getPaymentAccountId();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
};


/**
 * optional string currency_code = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.CreateOfferRequest.prototype.getCurrencyCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.CreateOfferRequest} returns this
 */
proto.io.bisq.protobuffer.CreateOfferRequest.prototype.setCurrencyCode = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string direction = 2;
 * @return {string}
 */
proto.io.bisq.protobuffer.CreateOfferRequest.prototype.getDirection = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.CreateOfferRequest} returns this
 */
proto.io.bisq.protobuffer.CreateOfferRequest.prototype.setDirection = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string price = 3;
 * @return {string}
 */
proto.io.bisq.protobuffer.CreateOfferRequest.prototype.getPrice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.CreateOfferRequest} returns this
 */
proto.io.bisq.protobuffer.CreateOfferRequest.prototype.setPrice = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool use_market_based_price = 4;
 * @return {boolean}
 */
proto.io.bisq.protobuffer.CreateOfferRequest.prototype.getUseMarketBasedPrice = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.io.bisq.protobuffer.CreateOfferRequest} returns this
 */
proto.io.bisq.protobuffer.CreateOfferRequest.prototype.setUseMarketBasedPrice = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional double market_price_margin = 5;
 * @return {number}
 */
proto.io.bisq.protobuffer.CreateOfferRequest.prototype.getMarketPriceMargin = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.CreateOfferRequest} returns this
 */
proto.io.bisq.protobuffer.CreateOfferRequest.prototype.setMarketPriceMargin = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional uint64 amount = 6;
 * @return {string}
 */
proto.io.bisq.protobuffer.CreateOfferRequest.prototype.getAmount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, "0"));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.CreateOfferRequest} returns this
 */
proto.io.bisq.protobuffer.CreateOfferRequest.prototype.setAmount = function(value) {
  return jspb.Message.setProto3StringIntField(this, 6, value);
};


/**
 * optional uint64 min_amount = 7;
 * @return {string}
 */
proto.io.bisq.protobuffer.CreateOfferRequest.prototype.getMinAmount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, "0"));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.CreateOfferRequest} returns this
 */
proto.io.bisq.protobuffer.CreateOfferRequest.prototype.setMinAmount = function(value) {
  return jspb.Message.setProto3StringIntField(this, 7, value);
};


/**
 * optional double buyer_security_deposit = 8;
 * @return {number}
 */
proto.io.bisq.protobuffer.CreateOfferRequest.prototype.getBuyerSecurityDeposit = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.CreateOfferRequest} returns this
 */
proto.io.bisq.protobuffer.CreateOfferRequest.prototype.setBuyerSecurityDeposit = function(value) {
  return jspb.Message.setProto3FloatField(this, 8, value);
};


/**
 * optional uint64 trigger_price = 9;
 * @return {string}
 */
proto.io.bisq.protobuffer.CreateOfferRequest.prototype.getTriggerPrice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, "0"));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.CreateOfferRequest} returns this
 */
proto.io.bisq.protobuffer.CreateOfferRequest.prototype.setTriggerPrice = function(value) {
  return jspb.Message.setProto3StringIntField(this, 9, value);
};


/**
 * optional string payment_account_id = 10;
 * @return {string}
 */
proto.io.bisq.protobuffer.CreateOfferRequest.prototype.getPaymentAccountId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.CreateOfferRequest} returns this
 */
proto.io.bisq.protobuffer.CreateOfferRequest.prototype.setPaymentAccountId = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.CreateOfferReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.CreateOfferReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.CreateOfferReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.CreateOfferReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    offer: (f = msg.getOffer()) && proto.io.bisq.protobuffer.OfferInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.CreateOfferReply}
 */
proto.io.bisq.protobuffer.CreateOfferReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.CreateOfferReply;
  return proto.io.bisq.protobuffer.CreateOfferReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.CreateOfferReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.CreateOfferReply}
 */
proto.io.bisq.protobuffer.CreateOfferReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.io.bisq.protobuffer.OfferInfo;
      reader.readMessage(value,proto.io.bisq.protobuffer.OfferInfo.deserializeBinaryFromReader);
      msg.setOffer(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.CreateOfferReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.CreateOfferReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.CreateOfferReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.CreateOfferReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOffer();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.io.bisq.protobuffer.OfferInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional OfferInfo offer = 1;
 * @return {?proto.io.bisq.protobuffer.OfferInfo}
 */
proto.io.bisq.protobuffer.CreateOfferReply.prototype.getOffer = function() {
  return /** @type{?proto.io.bisq.protobuffer.OfferInfo} */ (
    jspb.Message.getWrapperField(this, proto.io.bisq.protobuffer.OfferInfo, 1));
};


/**
 * @param {?proto.io.bisq.protobuffer.OfferInfo|undefined} value
 * @return {!proto.io.bisq.protobuffer.CreateOfferReply} returns this
*/
proto.io.bisq.protobuffer.CreateOfferReply.prototype.setOffer = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.bisq.protobuffer.CreateOfferReply} returns this
 */
proto.io.bisq.protobuffer.CreateOfferReply.prototype.clearOffer = function() {
  return this.setOffer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.bisq.protobuffer.CreateOfferReply.prototype.hasOffer = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.CancelOfferRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.CancelOfferRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.CancelOfferRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.CancelOfferRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.CancelOfferRequest}
 */
proto.io.bisq.protobuffer.CancelOfferRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.CancelOfferRequest;
  return proto.io.bisq.protobuffer.CancelOfferRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.CancelOfferRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.CancelOfferRequest}
 */
proto.io.bisq.protobuffer.CancelOfferRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.CancelOfferRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.CancelOfferRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.CancelOfferRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.CancelOfferRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.CancelOfferRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.CancelOfferRequest} returns this
 */
proto.io.bisq.protobuffer.CancelOfferRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.CancelOfferReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.CancelOfferReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.CancelOfferReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.CancelOfferReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.CancelOfferReply}
 */
proto.io.bisq.protobuffer.CancelOfferReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.CancelOfferReply;
  return proto.io.bisq.protobuffer.CancelOfferReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.CancelOfferReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.CancelOfferReply}
 */
proto.io.bisq.protobuffer.CancelOfferReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.CancelOfferReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.CancelOfferReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.CancelOfferReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.CancelOfferReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.OfferInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.OfferInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.OfferInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    direction: jspb.Message.getFieldWithDefault(msg, 2, ""),
    price: jspb.Message.getFieldWithDefault(msg, 3, 0),
    useMarketBasedPrice: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    marketPriceMargin: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    amount: jspb.Message.getFieldWithDefault(msg, 6, 0),
    minAmount: jspb.Message.getFieldWithDefault(msg, 7, 0),
    volume: jspb.Message.getFieldWithDefault(msg, 8, 0),
    minVolume: jspb.Message.getFieldWithDefault(msg, 9, 0),
    buyerSecurityDeposit: jspb.Message.getFieldWithDefault(msg, 10, 0),
    triggerPrice: jspb.Message.getFieldWithDefault(msg, 11, 0),
    paymentAccountId: jspb.Message.getFieldWithDefault(msg, 12, ""),
    paymentMethodId: jspb.Message.getFieldWithDefault(msg, 13, ""),
    paymentMethodShortName: jspb.Message.getFieldWithDefault(msg, 14, ""),
    baseCurrencyCode: jspb.Message.getFieldWithDefault(msg, 15, ""),
    counterCurrencyCode: jspb.Message.getFieldWithDefault(msg, 16, ""),
    date: jspb.Message.getFieldWithDefault(msg, 17, 0),
    state: jspb.Message.getFieldWithDefault(msg, 18, ""),
    sellerSecurityDeposit: jspb.Message.getFieldWithDefault(msg, 19, 0),
    offerFeePaymentTxId: jspb.Message.getFieldWithDefault(msg, 20, ""),
    txFee: jspb.Message.getFieldWithDefault(msg, 21, 0),
    makerFee: jspb.Message.getFieldWithDefault(msg, 22, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.OfferInfo}
 */
proto.io.bisq.protobuffer.OfferInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.OfferInfo;
  return proto.io.bisq.protobuffer.OfferInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.OfferInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.OfferInfo}
 */
proto.io.bisq.protobuffer.OfferInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDirection(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setPrice(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUseMarketBasedPrice(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMarketPriceMargin(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAmount(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMinAmount(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setVolume(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMinVolume(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setBuyerSecurityDeposit(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTriggerPrice(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaymentAccountId(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaymentMethodId(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaymentMethodShortName(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setBaseCurrencyCode(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setCounterCurrencyCode(value);
      break;
    case 17:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setDate(value);
      break;
    case 18:
      var value = /** @type {string} */ (reader.readString());
      msg.setState(value);
      break;
    case 19:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSellerSecurityDeposit(value);
      break;
    case 20:
      var value = /** @type {string} */ (reader.readString());
      msg.setOfferFeePaymentTxId(value);
      break;
    case 21:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTxFee(value);
      break;
    case 22:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMakerFee(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.OfferInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.OfferInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.OfferInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDirection();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPrice();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getUseMarketBasedPrice();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getMarketPriceMargin();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = message.getAmount();
  if (f !== 0) {
    writer.writeUint64(
      6,
      f
    );
  }
  f = message.getMinAmount();
  if (f !== 0) {
    writer.writeUint64(
      7,
      f
    );
  }
  f = message.getVolume();
  if (f !== 0) {
    writer.writeUint64(
      8,
      f
    );
  }
  f = message.getMinVolume();
  if (f !== 0) {
    writer.writeUint64(
      9,
      f
    );
  }
  f = message.getBuyerSecurityDeposit();
  if (f !== 0) {
    writer.writeUint64(
      10,
      f
    );
  }
  f = message.getTriggerPrice();
  if (f !== 0) {
    writer.writeUint64(
      11,
      f
    );
  }
  f = message.getPaymentAccountId();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getPaymentMethodId();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getPaymentMethodShortName();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getBaseCurrencyCode();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
  f = message.getCounterCurrencyCode();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getDate();
  if (f !== 0) {
    writer.writeUint64(
      17,
      f
    );
  }
  f = message.getState();
  if (f.length > 0) {
    writer.writeString(
      18,
      f
    );
  }
  f = message.getSellerSecurityDeposit();
  if (f !== 0) {
    writer.writeUint64(
      19,
      f
    );
  }
  f = message.getOfferFeePaymentTxId();
  if (f.length > 0) {
    writer.writeString(
      20,
      f
    );
  }
  f = message.getTxFee();
  if (f !== 0) {
    writer.writeUint64(
      21,
      f
    );
  }
  f = message.getMakerFee();
  if (f !== 0) {
    writer.writeUint64(
      22,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.OfferInfo} returns this
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string direction = 2;
 * @return {string}
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.getDirection = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.OfferInfo} returns this
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.setDirection = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint64 price = 3;
 * @return {number}
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.getPrice = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.OfferInfo} returns this
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.setPrice = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bool use_market_based_price = 4;
 * @return {boolean}
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.getUseMarketBasedPrice = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.io.bisq.protobuffer.OfferInfo} returns this
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.setUseMarketBasedPrice = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional double market_price_margin = 5;
 * @return {number}
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.getMarketPriceMargin = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.OfferInfo} returns this
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.setMarketPriceMargin = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional uint64 amount = 6;
 * @return {number}
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.getAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.OfferInfo} returns this
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.setAmount = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional uint64 min_amount = 7;
 * @return {number}
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.getMinAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.OfferInfo} returns this
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.setMinAmount = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional uint64 volume = 8;
 * @return {number}
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.getVolume = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.OfferInfo} returns this
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.setVolume = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional uint64 min_volume = 9;
 * @return {number}
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.getMinVolume = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.OfferInfo} returns this
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.setMinVolume = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional uint64 buyer_security_deposit = 10;
 * @return {number}
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.getBuyerSecurityDeposit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.OfferInfo} returns this
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.setBuyerSecurityDeposit = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional uint64 trigger_price = 11;
 * @return {number}
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.getTriggerPrice = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.OfferInfo} returns this
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.setTriggerPrice = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional string payment_account_id = 12;
 * @return {string}
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.getPaymentAccountId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.OfferInfo} returns this
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.setPaymentAccountId = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string payment_method_id = 13;
 * @return {string}
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.getPaymentMethodId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.OfferInfo} returns this
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.setPaymentMethodId = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional string payment_method_short_name = 14;
 * @return {string}
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.getPaymentMethodShortName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.OfferInfo} returns this
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.setPaymentMethodShortName = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional string base_currency_code = 15;
 * @return {string}
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.getBaseCurrencyCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.OfferInfo} returns this
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.setBaseCurrencyCode = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};


/**
 * optional string counter_currency_code = 16;
 * @return {string}
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.getCounterCurrencyCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.OfferInfo} returns this
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.setCounterCurrencyCode = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * optional uint64 date = 17;
 * @return {number}
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.getDate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 17, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.OfferInfo} returns this
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.setDate = function(value) {
  return jspb.Message.setProto3IntField(this, 17, value);
};


/**
 * optional string state = 18;
 * @return {string}
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.getState = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 18, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.OfferInfo} returns this
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.setState = function(value) {
  return jspb.Message.setProto3StringField(this, 18, value);
};


/**
 * optional uint64 seller_security_deposit = 19;
 * @return {number}
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.getSellerSecurityDeposit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 19, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.OfferInfo} returns this
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.setSellerSecurityDeposit = function(value) {
  return jspb.Message.setProto3IntField(this, 19, value);
};


/**
 * optional string offer_fee_payment_tx_id = 20;
 * @return {string}
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.getOfferFeePaymentTxId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 20, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.OfferInfo} returns this
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.setOfferFeePaymentTxId = function(value) {
  return jspb.Message.setProto3StringField(this, 20, value);
};


/**
 * optional uint64 tx_fee = 21;
 * @return {number}
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.getTxFee = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 21, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.OfferInfo} returns this
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.setTxFee = function(value) {
  return jspb.Message.setProto3IntField(this, 21, value);
};


/**
 * optional uint64 maker_fee = 22;
 * @return {number}
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.getMakerFee = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 22, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.OfferInfo} returns this
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.setMakerFee = function(value) {
  return jspb.Message.setProto3IntField(this, 22, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.AvailabilityResultWithDescription.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.AvailabilityResultWithDescription.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.AvailabilityResultWithDescription} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.AvailabilityResultWithDescription.toObject = function(includeInstance, msg) {
  var f, obj = {
    availabilityResult: jspb.Message.getFieldWithDefault(msg, 1, 0),
    description: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.AvailabilityResultWithDescription}
 */
proto.io.bisq.protobuffer.AvailabilityResultWithDescription.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.AvailabilityResultWithDescription;
  return proto.io.bisq.protobuffer.AvailabilityResultWithDescription.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.AvailabilityResultWithDescription} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.AvailabilityResultWithDescription}
 */
proto.io.bisq.protobuffer.AvailabilityResultWithDescription.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.io.bisq.protobuffer.AvailabilityResult} */ (reader.readEnum());
      msg.setAvailabilityResult(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.AvailabilityResultWithDescription.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.AvailabilityResultWithDescription.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.AvailabilityResultWithDescription} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.AvailabilityResultWithDescription.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAvailabilityResult();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional AvailabilityResult availability_result = 1;
 * @return {!proto.io.bisq.protobuffer.AvailabilityResult}
 */
proto.io.bisq.protobuffer.AvailabilityResultWithDescription.prototype.getAvailabilityResult = function() {
  return /** @type {!proto.io.bisq.protobuffer.AvailabilityResult} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.io.bisq.protobuffer.AvailabilityResult} value
 * @return {!proto.io.bisq.protobuffer.AvailabilityResultWithDescription} returns this
 */
proto.io.bisq.protobuffer.AvailabilityResultWithDescription.prototype.setAvailabilityResult = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.io.bisq.protobuffer.AvailabilityResultWithDescription.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.AvailabilityResultWithDescription} returns this
 */
proto.io.bisq.protobuffer.AvailabilityResultWithDescription.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.CreatePaymentAccountRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.CreatePaymentAccountRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.CreatePaymentAccountRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.CreatePaymentAccountRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    paymentAccountForm: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.CreatePaymentAccountRequest}
 */
proto.io.bisq.protobuffer.CreatePaymentAccountRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.CreatePaymentAccountRequest;
  return proto.io.bisq.protobuffer.CreatePaymentAccountRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.CreatePaymentAccountRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.CreatePaymentAccountRequest}
 */
proto.io.bisq.protobuffer.CreatePaymentAccountRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaymentAccountForm(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.CreatePaymentAccountRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.CreatePaymentAccountRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.CreatePaymentAccountRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.CreatePaymentAccountRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPaymentAccountForm();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string payment_account_form = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.CreatePaymentAccountRequest.prototype.getPaymentAccountForm = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.CreatePaymentAccountRequest} returns this
 */
proto.io.bisq.protobuffer.CreatePaymentAccountRequest.prototype.setPaymentAccountForm = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.CreatePaymentAccountReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.CreatePaymentAccountReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.CreatePaymentAccountReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.CreatePaymentAccountReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    paymentAccount: (f = msg.getPaymentAccount()) && pb_pb.PaymentAccount.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.CreatePaymentAccountReply}
 */
proto.io.bisq.protobuffer.CreatePaymentAccountReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.CreatePaymentAccountReply;
  return proto.io.bisq.protobuffer.CreatePaymentAccountReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.CreatePaymentAccountReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.CreatePaymentAccountReply}
 */
proto.io.bisq.protobuffer.CreatePaymentAccountReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new pb_pb.PaymentAccount;
      reader.readMessage(value,pb_pb.PaymentAccount.deserializeBinaryFromReader);
      msg.setPaymentAccount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.CreatePaymentAccountReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.CreatePaymentAccountReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.CreatePaymentAccountReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.CreatePaymentAccountReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPaymentAccount();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      pb_pb.PaymentAccount.serializeBinaryToWriter
    );
  }
};


/**
 * optional PaymentAccount payment_account = 1;
 * @return {?proto.io.bisq.protobuffer.PaymentAccount}
 */
proto.io.bisq.protobuffer.CreatePaymentAccountReply.prototype.getPaymentAccount = function() {
  return /** @type{?proto.io.bisq.protobuffer.PaymentAccount} */ (
    jspb.Message.getWrapperField(this, pb_pb.PaymentAccount, 1));
};


/**
 * @param {?proto.io.bisq.protobuffer.PaymentAccount|undefined} value
 * @return {!proto.io.bisq.protobuffer.CreatePaymentAccountReply} returns this
*/
proto.io.bisq.protobuffer.CreatePaymentAccountReply.prototype.setPaymentAccount = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.bisq.protobuffer.CreatePaymentAccountReply} returns this
 */
proto.io.bisq.protobuffer.CreatePaymentAccountReply.prototype.clearPaymentAccount = function() {
  return this.setPaymentAccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.bisq.protobuffer.CreatePaymentAccountReply.prototype.hasPaymentAccount = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetPaymentAccountsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetPaymentAccountsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetPaymentAccountsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetPaymentAccountsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetPaymentAccountsRequest}
 */
proto.io.bisq.protobuffer.GetPaymentAccountsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetPaymentAccountsRequest;
  return proto.io.bisq.protobuffer.GetPaymentAccountsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetPaymentAccountsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetPaymentAccountsRequest}
 */
proto.io.bisq.protobuffer.GetPaymentAccountsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetPaymentAccountsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetPaymentAccountsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetPaymentAccountsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetPaymentAccountsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.io.bisq.protobuffer.GetPaymentAccountsReply.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetPaymentAccountsReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetPaymentAccountsReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetPaymentAccountsReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetPaymentAccountsReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    paymentAccountsList: jspb.Message.toObjectList(msg.getPaymentAccountsList(),
    pb_pb.PaymentAccount.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetPaymentAccountsReply}
 */
proto.io.bisq.protobuffer.GetPaymentAccountsReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetPaymentAccountsReply;
  return proto.io.bisq.protobuffer.GetPaymentAccountsReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetPaymentAccountsReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetPaymentAccountsReply}
 */
proto.io.bisq.protobuffer.GetPaymentAccountsReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new pb_pb.PaymentAccount;
      reader.readMessage(value,pb_pb.PaymentAccount.deserializeBinaryFromReader);
      msg.addPaymentAccounts(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetPaymentAccountsReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetPaymentAccountsReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetPaymentAccountsReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetPaymentAccountsReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPaymentAccountsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      pb_pb.PaymentAccount.serializeBinaryToWriter
    );
  }
};


/**
 * repeated PaymentAccount payment_accounts = 1;
 * @return {!Array<!proto.io.bisq.protobuffer.PaymentAccount>}
 */
proto.io.bisq.protobuffer.GetPaymentAccountsReply.prototype.getPaymentAccountsList = function() {
  return /** @type{!Array<!proto.io.bisq.protobuffer.PaymentAccount>} */ (
    jspb.Message.getRepeatedWrapperField(this, pb_pb.PaymentAccount, 1));
};


/**
 * @param {!Array<!proto.io.bisq.protobuffer.PaymentAccount>} value
 * @return {!proto.io.bisq.protobuffer.GetPaymentAccountsReply} returns this
*/
proto.io.bisq.protobuffer.GetPaymentAccountsReply.prototype.setPaymentAccountsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.io.bisq.protobuffer.PaymentAccount=} opt_value
 * @param {number=} opt_index
 * @return {!proto.io.bisq.protobuffer.PaymentAccount}
 */
proto.io.bisq.protobuffer.GetPaymentAccountsReply.prototype.addPaymentAccounts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.io.bisq.protobuffer.PaymentAccount, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.io.bisq.protobuffer.GetPaymentAccountsReply} returns this
 */
proto.io.bisq.protobuffer.GetPaymentAccountsReply.prototype.clearPaymentAccountsList = function() {
  return this.setPaymentAccountsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetPaymentMethodsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetPaymentMethodsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetPaymentMethodsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetPaymentMethodsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetPaymentMethodsRequest}
 */
proto.io.bisq.protobuffer.GetPaymentMethodsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetPaymentMethodsRequest;
  return proto.io.bisq.protobuffer.GetPaymentMethodsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetPaymentMethodsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetPaymentMethodsRequest}
 */
proto.io.bisq.protobuffer.GetPaymentMethodsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetPaymentMethodsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetPaymentMethodsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetPaymentMethodsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetPaymentMethodsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.io.bisq.protobuffer.GetPaymentMethodsReply.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetPaymentMethodsReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetPaymentMethodsReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetPaymentMethodsReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetPaymentMethodsReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    paymentMethodsList: jspb.Message.toObjectList(msg.getPaymentMethodsList(),
    pb_pb.PaymentMethod.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetPaymentMethodsReply}
 */
proto.io.bisq.protobuffer.GetPaymentMethodsReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetPaymentMethodsReply;
  return proto.io.bisq.protobuffer.GetPaymentMethodsReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetPaymentMethodsReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetPaymentMethodsReply}
 */
proto.io.bisq.protobuffer.GetPaymentMethodsReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new pb_pb.PaymentMethod;
      reader.readMessage(value,pb_pb.PaymentMethod.deserializeBinaryFromReader);
      msg.addPaymentMethods(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetPaymentMethodsReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetPaymentMethodsReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetPaymentMethodsReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetPaymentMethodsReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPaymentMethodsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      pb_pb.PaymentMethod.serializeBinaryToWriter
    );
  }
};


/**
 * repeated PaymentMethod payment_methods = 1;
 * @return {!Array<!proto.io.bisq.protobuffer.PaymentMethod>}
 */
proto.io.bisq.protobuffer.GetPaymentMethodsReply.prototype.getPaymentMethodsList = function() {
  return /** @type{!Array<!proto.io.bisq.protobuffer.PaymentMethod>} */ (
    jspb.Message.getRepeatedWrapperField(this, pb_pb.PaymentMethod, 1));
};


/**
 * @param {!Array<!proto.io.bisq.protobuffer.PaymentMethod>} value
 * @return {!proto.io.bisq.protobuffer.GetPaymentMethodsReply} returns this
*/
proto.io.bisq.protobuffer.GetPaymentMethodsReply.prototype.setPaymentMethodsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.io.bisq.protobuffer.PaymentMethod=} opt_value
 * @param {number=} opt_index
 * @return {!proto.io.bisq.protobuffer.PaymentMethod}
 */
proto.io.bisq.protobuffer.GetPaymentMethodsReply.prototype.addPaymentMethods = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.io.bisq.protobuffer.PaymentMethod, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.io.bisq.protobuffer.GetPaymentMethodsReply} returns this
 */
proto.io.bisq.protobuffer.GetPaymentMethodsReply.prototype.clearPaymentMethodsList = function() {
  return this.setPaymentMethodsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetPaymentAccountFormRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetPaymentAccountFormRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetPaymentAccountFormRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetPaymentAccountFormRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    paymentMethodId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetPaymentAccountFormRequest}
 */
proto.io.bisq.protobuffer.GetPaymentAccountFormRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetPaymentAccountFormRequest;
  return proto.io.bisq.protobuffer.GetPaymentAccountFormRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetPaymentAccountFormRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetPaymentAccountFormRequest}
 */
proto.io.bisq.protobuffer.GetPaymentAccountFormRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaymentMethodId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetPaymentAccountFormRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetPaymentAccountFormRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetPaymentAccountFormRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetPaymentAccountFormRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPaymentMethodId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string payment_method_id = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.GetPaymentAccountFormRequest.prototype.getPaymentMethodId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.GetPaymentAccountFormRequest} returns this
 */
proto.io.bisq.protobuffer.GetPaymentAccountFormRequest.prototype.setPaymentMethodId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetPaymentAccountFormReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetPaymentAccountFormReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetPaymentAccountFormReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetPaymentAccountFormReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    paymentAccountFormJson: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetPaymentAccountFormReply}
 */
proto.io.bisq.protobuffer.GetPaymentAccountFormReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetPaymentAccountFormReply;
  return proto.io.bisq.protobuffer.GetPaymentAccountFormReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetPaymentAccountFormReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetPaymentAccountFormReply}
 */
proto.io.bisq.protobuffer.GetPaymentAccountFormReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaymentAccountFormJson(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetPaymentAccountFormReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetPaymentAccountFormReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetPaymentAccountFormReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetPaymentAccountFormReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPaymentAccountFormJson();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string payment_account_form_json = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.GetPaymentAccountFormReply.prototype.getPaymentAccountFormJson = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.GetPaymentAccountFormReply} returns this
 */
proto.io.bisq.protobuffer.GetPaymentAccountFormReply.prototype.setPaymentAccountFormJson = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    accountName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    currencyCode: jspb.Message.getFieldWithDefault(msg, 2, ""),
    address: jspb.Message.getFieldWithDefault(msg, 3, ""),
    tradeInstant: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest}
 */
proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest;
  return proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest}
 */
proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccountName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrencyCode(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setTradeInstant(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccountName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCurrencyCode();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTradeInstant();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional string account_name = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest.prototype.getAccountName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest} returns this
 */
proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest.prototype.setAccountName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string currency_code = 2;
 * @return {string}
 */
proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest.prototype.getCurrencyCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest} returns this
 */
proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest.prototype.setCurrencyCode = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string address = 3;
 * @return {string}
 */
proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest} returns this
 */
proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool trade_instant = 4;
 * @return {boolean}
 */
proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest.prototype.getTradeInstant = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest} returns this
 */
proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest.prototype.setTradeInstant = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    paymentAccount: (f = msg.getPaymentAccount()) && pb_pb.PaymentAccount.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountReply}
 */
proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountReply;
  return proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountReply}
 */
proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new pb_pb.PaymentAccount;
      reader.readMessage(value,pb_pb.PaymentAccount.deserializeBinaryFromReader);
      msg.setPaymentAccount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPaymentAccount();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      pb_pb.PaymentAccount.serializeBinaryToWriter
    );
  }
};


/**
 * optional PaymentAccount payment_account = 1;
 * @return {?proto.io.bisq.protobuffer.PaymentAccount}
 */
proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountReply.prototype.getPaymentAccount = function() {
  return /** @type{?proto.io.bisq.protobuffer.PaymentAccount} */ (
    jspb.Message.getWrapperField(this, pb_pb.PaymentAccount, 1));
};


/**
 * @param {?proto.io.bisq.protobuffer.PaymentAccount|undefined} value
 * @return {!proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountReply} returns this
*/
proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountReply.prototype.setPaymentAccount = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountReply} returns this
 */
proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountReply.prototype.clearPaymentAccount = function() {
  return this.setPaymentAccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountReply.prototype.hasPaymentAccount = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsRequest}
 */
proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsRequest;
  return proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsRequest}
 */
proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsReply.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    paymentMethodsList: jspb.Message.toObjectList(msg.getPaymentMethodsList(),
    pb_pb.PaymentMethod.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsReply}
 */
proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsReply;
  return proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsReply}
 */
proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new pb_pb.PaymentMethod;
      reader.readMessage(value,pb_pb.PaymentMethod.deserializeBinaryFromReader);
      msg.addPaymentMethods(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPaymentMethodsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      pb_pb.PaymentMethod.serializeBinaryToWriter
    );
  }
};


/**
 * repeated PaymentMethod payment_methods = 1;
 * @return {!Array<!proto.io.bisq.protobuffer.PaymentMethod>}
 */
proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsReply.prototype.getPaymentMethodsList = function() {
  return /** @type{!Array<!proto.io.bisq.protobuffer.PaymentMethod>} */ (
    jspb.Message.getRepeatedWrapperField(this, pb_pb.PaymentMethod, 1));
};


/**
 * @param {!Array<!proto.io.bisq.protobuffer.PaymentMethod>} value
 * @return {!proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsReply} returns this
*/
proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsReply.prototype.setPaymentMethodsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.io.bisq.protobuffer.PaymentMethod=} opt_value
 * @param {number=} opt_index
 * @return {!proto.io.bisq.protobuffer.PaymentMethod}
 */
proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsReply.prototype.addPaymentMethods = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.io.bisq.protobuffer.PaymentMethod, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsReply} returns this
 */
proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsReply.prototype.clearPaymentMethodsList = function() {
  return this.setPaymentMethodsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.MarketPriceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.MarketPriceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.MarketPriceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.MarketPriceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    currencyCode: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.MarketPriceRequest}
 */
proto.io.bisq.protobuffer.MarketPriceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.MarketPriceRequest;
  return proto.io.bisq.protobuffer.MarketPriceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.MarketPriceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.MarketPriceRequest}
 */
proto.io.bisq.protobuffer.MarketPriceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrencyCode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.MarketPriceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.MarketPriceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.MarketPriceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.MarketPriceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCurrencyCode();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string currency_code = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.MarketPriceRequest.prototype.getCurrencyCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.MarketPriceRequest} returns this
 */
proto.io.bisq.protobuffer.MarketPriceRequest.prototype.setCurrencyCode = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.MarketPriceReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.MarketPriceReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.MarketPriceReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.MarketPriceReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    price: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.MarketPriceReply}
 */
proto.io.bisq.protobuffer.MarketPriceReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.MarketPriceReply;
  return proto.io.bisq.protobuffer.MarketPriceReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.MarketPriceReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.MarketPriceReply}
 */
proto.io.bisq.protobuffer.MarketPriceReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPrice(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.MarketPriceReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.MarketPriceReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.MarketPriceReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.MarketPriceReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPrice();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
};


/**
 * optional double price = 1;
 * @return {number}
 */
proto.io.bisq.protobuffer.MarketPriceReply.prototype.getPrice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.MarketPriceReply} returns this
 */
proto.io.bisq.protobuffer.MarketPriceReply.prototype.setPrice = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetTradeStatisticsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetTradeStatisticsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetTradeStatisticsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetTradeStatisticsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetTradeStatisticsRequest}
 */
proto.io.bisq.protobuffer.GetTradeStatisticsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetTradeStatisticsRequest;
  return proto.io.bisq.protobuffer.GetTradeStatisticsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetTradeStatisticsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetTradeStatisticsRequest}
 */
proto.io.bisq.protobuffer.GetTradeStatisticsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetTradeStatisticsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetTradeStatisticsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetTradeStatisticsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetTradeStatisticsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.io.bisq.protobuffer.GetTradeStatisticsReply.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetTradeStatisticsReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetTradeStatisticsReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetTradeStatisticsReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetTradeStatisticsReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    tradeStatisticsList: jspb.Message.toObjectList(msg.getTradeStatisticsList(),
    pb_pb.TradeStatistics3.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetTradeStatisticsReply}
 */
proto.io.bisq.protobuffer.GetTradeStatisticsReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetTradeStatisticsReply;
  return proto.io.bisq.protobuffer.GetTradeStatisticsReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetTradeStatisticsReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetTradeStatisticsReply}
 */
proto.io.bisq.protobuffer.GetTradeStatisticsReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new pb_pb.TradeStatistics3;
      reader.readMessage(value,pb_pb.TradeStatistics3.deserializeBinaryFromReader);
      msg.addTradeStatistics(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetTradeStatisticsReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetTradeStatisticsReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetTradeStatisticsReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetTradeStatisticsReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTradeStatisticsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      pb_pb.TradeStatistics3.serializeBinaryToWriter
    );
  }
};


/**
 * repeated TradeStatistics3 trade_statistics = 1;
 * @return {!Array<!proto.io.bisq.protobuffer.TradeStatistics3>}
 */
proto.io.bisq.protobuffer.GetTradeStatisticsReply.prototype.getTradeStatisticsList = function() {
  return /** @type{!Array<!proto.io.bisq.protobuffer.TradeStatistics3>} */ (
    jspb.Message.getRepeatedWrapperField(this, pb_pb.TradeStatistics3, 1));
};


/**
 * @param {!Array<!proto.io.bisq.protobuffer.TradeStatistics3>} value
 * @return {!proto.io.bisq.protobuffer.GetTradeStatisticsReply} returns this
*/
proto.io.bisq.protobuffer.GetTradeStatisticsReply.prototype.setTradeStatisticsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.io.bisq.protobuffer.TradeStatistics3=} opt_value
 * @param {number=} opt_index
 * @return {!proto.io.bisq.protobuffer.TradeStatistics3}
 */
proto.io.bisq.protobuffer.GetTradeStatisticsReply.prototype.addTradeStatistics = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.io.bisq.protobuffer.TradeStatistics3, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.io.bisq.protobuffer.GetTradeStatisticsReply} returns this
 */
proto.io.bisq.protobuffer.GetTradeStatisticsReply.prototype.clearTradeStatisticsList = function() {
  return this.setTradeStatisticsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.StopRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.StopRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.StopRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.StopRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.StopRequest}
 */
proto.io.bisq.protobuffer.StopRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.StopRequest;
  return proto.io.bisq.protobuffer.StopRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.StopRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.StopRequest}
 */
proto.io.bisq.protobuffer.StopRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.StopRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.StopRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.StopRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.StopRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.StopReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.StopReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.StopReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.StopReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.StopReply}
 */
proto.io.bisq.protobuffer.StopReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.StopReply;
  return proto.io.bisq.protobuffer.StopReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.StopReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.StopReply}
 */
proto.io.bisq.protobuffer.StopReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.StopReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.StopReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.StopReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.StopReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.TakeOfferRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.TakeOfferRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.TakeOfferRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.TakeOfferRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    offerId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    paymentAccountId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.TakeOfferRequest}
 */
proto.io.bisq.protobuffer.TakeOfferRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.TakeOfferRequest;
  return proto.io.bisq.protobuffer.TakeOfferRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.TakeOfferRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.TakeOfferRequest}
 */
proto.io.bisq.protobuffer.TakeOfferRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOfferId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaymentAccountId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.TakeOfferRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.TakeOfferRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.TakeOfferRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.TakeOfferRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOfferId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPaymentAccountId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string offer_id = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.TakeOfferRequest.prototype.getOfferId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.TakeOfferRequest} returns this
 */
proto.io.bisq.protobuffer.TakeOfferRequest.prototype.setOfferId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string payment_account_id = 2;
 * @return {string}
 */
proto.io.bisq.protobuffer.TakeOfferRequest.prototype.getPaymentAccountId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.TakeOfferRequest} returns this
 */
proto.io.bisq.protobuffer.TakeOfferRequest.prototype.setPaymentAccountId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.TakeOfferReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.TakeOfferReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.TakeOfferReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.TakeOfferReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    trade: (f = msg.getTrade()) && proto.io.bisq.protobuffer.TradeInfo.toObject(includeInstance, f),
    failureReason: (f = msg.getFailureReason()) && proto.io.bisq.protobuffer.AvailabilityResultWithDescription.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.TakeOfferReply}
 */
proto.io.bisq.protobuffer.TakeOfferReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.TakeOfferReply;
  return proto.io.bisq.protobuffer.TakeOfferReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.TakeOfferReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.TakeOfferReply}
 */
proto.io.bisq.protobuffer.TakeOfferReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.io.bisq.protobuffer.TradeInfo;
      reader.readMessage(value,proto.io.bisq.protobuffer.TradeInfo.deserializeBinaryFromReader);
      msg.setTrade(value);
      break;
    case 2:
      var value = new proto.io.bisq.protobuffer.AvailabilityResultWithDescription;
      reader.readMessage(value,proto.io.bisq.protobuffer.AvailabilityResultWithDescription.deserializeBinaryFromReader);
      msg.setFailureReason(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.TakeOfferReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.TakeOfferReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.TakeOfferReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.TakeOfferReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTrade();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.io.bisq.protobuffer.TradeInfo.serializeBinaryToWriter
    );
  }
  f = message.getFailureReason();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.io.bisq.protobuffer.AvailabilityResultWithDescription.serializeBinaryToWriter
    );
  }
};


/**
 * optional TradeInfo trade = 1;
 * @return {?proto.io.bisq.protobuffer.TradeInfo}
 */
proto.io.bisq.protobuffer.TakeOfferReply.prototype.getTrade = function() {
  return /** @type{?proto.io.bisq.protobuffer.TradeInfo} */ (
    jspb.Message.getWrapperField(this, proto.io.bisq.protobuffer.TradeInfo, 1));
};


/**
 * @param {?proto.io.bisq.protobuffer.TradeInfo|undefined} value
 * @return {!proto.io.bisq.protobuffer.TakeOfferReply} returns this
*/
proto.io.bisq.protobuffer.TakeOfferReply.prototype.setTrade = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.bisq.protobuffer.TakeOfferReply} returns this
 */
proto.io.bisq.protobuffer.TakeOfferReply.prototype.clearTrade = function() {
  return this.setTrade(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.bisq.protobuffer.TakeOfferReply.prototype.hasTrade = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional AvailabilityResultWithDescription failure_reason = 2;
 * @return {?proto.io.bisq.protobuffer.AvailabilityResultWithDescription}
 */
proto.io.bisq.protobuffer.TakeOfferReply.prototype.getFailureReason = function() {
  return /** @type{?proto.io.bisq.protobuffer.AvailabilityResultWithDescription} */ (
    jspb.Message.getWrapperField(this, proto.io.bisq.protobuffer.AvailabilityResultWithDescription, 2));
};


/**
 * @param {?proto.io.bisq.protobuffer.AvailabilityResultWithDescription|undefined} value
 * @return {!proto.io.bisq.protobuffer.TakeOfferReply} returns this
*/
proto.io.bisq.protobuffer.TakeOfferReply.prototype.setFailureReason = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.bisq.protobuffer.TakeOfferReply} returns this
 */
proto.io.bisq.protobuffer.TakeOfferReply.prototype.clearFailureReason = function() {
  return this.setFailureReason(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.bisq.protobuffer.TakeOfferReply.prototype.hasFailureReason = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.ConfirmPaymentStartedRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.ConfirmPaymentStartedRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.ConfirmPaymentStartedRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.ConfirmPaymentStartedRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    tradeId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.ConfirmPaymentStartedRequest}
 */
proto.io.bisq.protobuffer.ConfirmPaymentStartedRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.ConfirmPaymentStartedRequest;
  return proto.io.bisq.protobuffer.ConfirmPaymentStartedRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.ConfirmPaymentStartedRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.ConfirmPaymentStartedRequest}
 */
proto.io.bisq.protobuffer.ConfirmPaymentStartedRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTradeId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.ConfirmPaymentStartedRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.ConfirmPaymentStartedRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.ConfirmPaymentStartedRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.ConfirmPaymentStartedRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTradeId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string trade_id = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.ConfirmPaymentStartedRequest.prototype.getTradeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.ConfirmPaymentStartedRequest} returns this
 */
proto.io.bisq.protobuffer.ConfirmPaymentStartedRequest.prototype.setTradeId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.ConfirmPaymentStartedReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.ConfirmPaymentStartedReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.ConfirmPaymentStartedReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.ConfirmPaymentStartedReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.ConfirmPaymentStartedReply}
 */
proto.io.bisq.protobuffer.ConfirmPaymentStartedReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.ConfirmPaymentStartedReply;
  return proto.io.bisq.protobuffer.ConfirmPaymentStartedReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.ConfirmPaymentStartedReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.ConfirmPaymentStartedReply}
 */
proto.io.bisq.protobuffer.ConfirmPaymentStartedReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.ConfirmPaymentStartedReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.ConfirmPaymentStartedReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.ConfirmPaymentStartedReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.ConfirmPaymentStartedReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.ConfirmPaymentReceivedRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.ConfirmPaymentReceivedRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.ConfirmPaymentReceivedRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.ConfirmPaymentReceivedRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    tradeId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.ConfirmPaymentReceivedRequest}
 */
proto.io.bisq.protobuffer.ConfirmPaymentReceivedRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.ConfirmPaymentReceivedRequest;
  return proto.io.bisq.protobuffer.ConfirmPaymentReceivedRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.ConfirmPaymentReceivedRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.ConfirmPaymentReceivedRequest}
 */
proto.io.bisq.protobuffer.ConfirmPaymentReceivedRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTradeId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.ConfirmPaymentReceivedRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.ConfirmPaymentReceivedRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.ConfirmPaymentReceivedRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.ConfirmPaymentReceivedRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTradeId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string trade_id = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.ConfirmPaymentReceivedRequest.prototype.getTradeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.ConfirmPaymentReceivedRequest} returns this
 */
proto.io.bisq.protobuffer.ConfirmPaymentReceivedRequest.prototype.setTradeId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.ConfirmPaymentReceivedReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.ConfirmPaymentReceivedReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.ConfirmPaymentReceivedReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.ConfirmPaymentReceivedReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.ConfirmPaymentReceivedReply}
 */
proto.io.bisq.protobuffer.ConfirmPaymentReceivedReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.ConfirmPaymentReceivedReply;
  return proto.io.bisq.protobuffer.ConfirmPaymentReceivedReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.ConfirmPaymentReceivedReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.ConfirmPaymentReceivedReply}
 */
proto.io.bisq.protobuffer.ConfirmPaymentReceivedReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.ConfirmPaymentReceivedReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.ConfirmPaymentReceivedReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.ConfirmPaymentReceivedReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.ConfirmPaymentReceivedReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetTradeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetTradeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetTradeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetTradeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    tradeId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetTradeRequest}
 */
proto.io.bisq.protobuffer.GetTradeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetTradeRequest;
  return proto.io.bisq.protobuffer.GetTradeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetTradeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetTradeRequest}
 */
proto.io.bisq.protobuffer.GetTradeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTradeId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetTradeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetTradeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetTradeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetTradeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTradeId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string trade_id = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.GetTradeRequest.prototype.getTradeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.GetTradeRequest} returns this
 */
proto.io.bisq.protobuffer.GetTradeRequest.prototype.setTradeId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetTradeReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetTradeReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetTradeReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetTradeReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    trade: (f = msg.getTrade()) && proto.io.bisq.protobuffer.TradeInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetTradeReply}
 */
proto.io.bisq.protobuffer.GetTradeReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetTradeReply;
  return proto.io.bisq.protobuffer.GetTradeReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetTradeReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetTradeReply}
 */
proto.io.bisq.protobuffer.GetTradeReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.io.bisq.protobuffer.TradeInfo;
      reader.readMessage(value,proto.io.bisq.protobuffer.TradeInfo.deserializeBinaryFromReader);
      msg.setTrade(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetTradeReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetTradeReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetTradeReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetTradeReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTrade();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.io.bisq.protobuffer.TradeInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional TradeInfo trade = 1;
 * @return {?proto.io.bisq.protobuffer.TradeInfo}
 */
proto.io.bisq.protobuffer.GetTradeReply.prototype.getTrade = function() {
  return /** @type{?proto.io.bisq.protobuffer.TradeInfo} */ (
    jspb.Message.getWrapperField(this, proto.io.bisq.protobuffer.TradeInfo, 1));
};


/**
 * @param {?proto.io.bisq.protobuffer.TradeInfo|undefined} value
 * @return {!proto.io.bisq.protobuffer.GetTradeReply} returns this
*/
proto.io.bisq.protobuffer.GetTradeReply.prototype.setTrade = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.bisq.protobuffer.GetTradeReply} returns this
 */
proto.io.bisq.protobuffer.GetTradeReply.prototype.clearTrade = function() {
  return this.setTrade(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.bisq.protobuffer.GetTradeReply.prototype.hasTrade = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.KeepFundsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.KeepFundsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.KeepFundsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.KeepFundsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    tradeId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.KeepFundsRequest}
 */
proto.io.bisq.protobuffer.KeepFundsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.KeepFundsRequest;
  return proto.io.bisq.protobuffer.KeepFundsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.KeepFundsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.KeepFundsRequest}
 */
proto.io.bisq.protobuffer.KeepFundsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTradeId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.KeepFundsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.KeepFundsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.KeepFundsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.KeepFundsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTradeId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string trade_id = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.KeepFundsRequest.prototype.getTradeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.KeepFundsRequest} returns this
 */
proto.io.bisq.protobuffer.KeepFundsRequest.prototype.setTradeId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.KeepFundsReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.KeepFundsReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.KeepFundsReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.KeepFundsReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.KeepFundsReply}
 */
proto.io.bisq.protobuffer.KeepFundsReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.KeepFundsReply;
  return proto.io.bisq.protobuffer.KeepFundsReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.KeepFundsReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.KeepFundsReply}
 */
proto.io.bisq.protobuffer.KeepFundsReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.KeepFundsReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.KeepFundsReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.KeepFundsReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.KeepFundsReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.WithdrawFundsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.WithdrawFundsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.WithdrawFundsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.WithdrawFundsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    tradeId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    address: jspb.Message.getFieldWithDefault(msg, 2, ""),
    memo: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.WithdrawFundsRequest}
 */
proto.io.bisq.protobuffer.WithdrawFundsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.WithdrawFundsRequest;
  return proto.io.bisq.protobuffer.WithdrawFundsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.WithdrawFundsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.WithdrawFundsRequest}
 */
proto.io.bisq.protobuffer.WithdrawFundsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTradeId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMemo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.WithdrawFundsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.WithdrawFundsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.WithdrawFundsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.WithdrawFundsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTradeId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMemo();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string trade_id = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.WithdrawFundsRequest.prototype.getTradeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.WithdrawFundsRequest} returns this
 */
proto.io.bisq.protobuffer.WithdrawFundsRequest.prototype.setTradeId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string address = 2;
 * @return {string}
 */
proto.io.bisq.protobuffer.WithdrawFundsRequest.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.WithdrawFundsRequest} returns this
 */
proto.io.bisq.protobuffer.WithdrawFundsRequest.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string memo = 3;
 * @return {string}
 */
proto.io.bisq.protobuffer.WithdrawFundsRequest.prototype.getMemo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.WithdrawFundsRequest} returns this
 */
proto.io.bisq.protobuffer.WithdrawFundsRequest.prototype.setMemo = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.WithdrawFundsReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.WithdrawFundsReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.WithdrawFundsReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.WithdrawFundsReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.WithdrawFundsReply}
 */
proto.io.bisq.protobuffer.WithdrawFundsReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.WithdrawFundsReply;
  return proto.io.bisq.protobuffer.WithdrawFundsReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.WithdrawFundsReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.WithdrawFundsReply}
 */
proto.io.bisq.protobuffer.WithdrawFundsReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.WithdrawFundsReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.WithdrawFundsReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.WithdrawFundsReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.WithdrawFundsReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.TradeInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.TradeInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.TradeInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    offer: (f = msg.getOffer()) && proto.io.bisq.protobuffer.OfferInfo.toObject(includeInstance, f),
    tradeId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    shortId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    date: jspb.Message.getFieldWithDefault(msg, 4, 0),
    role: jspb.Message.getFieldWithDefault(msg, 5, ""),
    txFeeAsLong: jspb.Message.getFieldWithDefault(msg, 7, 0),
    takerFeeAsLong: jspb.Message.getFieldWithDefault(msg, 8, 0),
    takerFeeTxId: jspb.Message.getFieldWithDefault(msg, 9, ""),
    payoutTxId: jspb.Message.getFieldWithDefault(msg, 11, ""),
    tradeAmountAsLong: jspb.Message.getFieldWithDefault(msg, 12, 0),
    tradePrice: jspb.Message.getFieldWithDefault(msg, 13, 0),
    tradingPeerNodeAddress: jspb.Message.getFieldWithDefault(msg, 14, ""),
    state: jspb.Message.getFieldWithDefault(msg, 15, ""),
    phase: jspb.Message.getFieldWithDefault(msg, 16, ""),
    tradePeriodState: jspb.Message.getFieldWithDefault(msg, 17, ""),
    isDepositPublished: jspb.Message.getBooleanFieldWithDefault(msg, 18, false),
    isDepositConfirmed: jspb.Message.getBooleanFieldWithDefault(msg, 19, false),
    isFiatSent: jspb.Message.getBooleanFieldWithDefault(msg, 20, false),
    isFiatReceived: jspb.Message.getBooleanFieldWithDefault(msg, 21, false),
    isPayoutPublished: jspb.Message.getBooleanFieldWithDefault(msg, 22, false),
    isWithdrawn: jspb.Message.getBooleanFieldWithDefault(msg, 23, false),
    contractAsJson: jspb.Message.getFieldWithDefault(msg, 24, ""),
    contract: (f = msg.getContract()) && proto.io.bisq.protobuffer.ContractInfo.toObject(includeInstance, f),
    makerDepositTxId: jspb.Message.getFieldWithDefault(msg, 100, ""),
    takerDepositTxId: jspb.Message.getFieldWithDefault(msg, 101, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.TradeInfo}
 */
proto.io.bisq.protobuffer.TradeInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.TradeInfo;
  return proto.io.bisq.protobuffer.TradeInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.TradeInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.TradeInfo}
 */
proto.io.bisq.protobuffer.TradeInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.io.bisq.protobuffer.OfferInfo;
      reader.readMessage(value,proto.io.bisq.protobuffer.OfferInfo.deserializeBinaryFromReader);
      msg.setOffer(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTradeId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setShortId(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setDate(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setRole(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTxFeeAsLong(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTakerFeeAsLong(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setTakerFeeTxId(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setPayoutTxId(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTradeAmountAsLong(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTradePrice(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setTradingPeerNodeAddress(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setState(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhase(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.setTradePeriodState(value);
      break;
    case 18:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsDepositPublished(value);
      break;
    case 19:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsDepositConfirmed(value);
      break;
    case 20:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsFiatSent(value);
      break;
    case 21:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsFiatReceived(value);
      break;
    case 22:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsPayoutPublished(value);
      break;
    case 23:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsWithdrawn(value);
      break;
    case 24:
      var value = /** @type {string} */ (reader.readString());
      msg.setContractAsJson(value);
      break;
    case 25:
      var value = new proto.io.bisq.protobuffer.ContractInfo;
      reader.readMessage(value,proto.io.bisq.protobuffer.ContractInfo.deserializeBinaryFromReader);
      msg.setContract(value);
      break;
    case 100:
      var value = /** @type {string} */ (reader.readString());
      msg.setMakerDepositTxId(value);
      break;
    case 101:
      var value = /** @type {string} */ (reader.readString());
      msg.setTakerDepositTxId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.TradeInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.TradeInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.TradeInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOffer();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.io.bisq.protobuffer.OfferInfo.serializeBinaryToWriter
    );
  }
  f = message.getTradeId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getShortId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDate();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getRole();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getTxFeeAsLong();
  if (f !== 0) {
    writer.writeUint64(
      7,
      f
    );
  }
  f = message.getTakerFeeAsLong();
  if (f !== 0) {
    writer.writeUint64(
      8,
      f
    );
  }
  f = message.getTakerFeeTxId();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getPayoutTxId();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getTradeAmountAsLong();
  if (f !== 0) {
    writer.writeUint64(
      12,
      f
    );
  }
  f = message.getTradePrice();
  if (f !== 0) {
    writer.writeUint64(
      13,
      f
    );
  }
  f = message.getTradingPeerNodeAddress();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getState();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
  f = message.getPhase();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getTradePeriodState();
  if (f.length > 0) {
    writer.writeString(
      17,
      f
    );
  }
  f = message.getIsDepositPublished();
  if (f) {
    writer.writeBool(
      18,
      f
    );
  }
  f = message.getIsDepositConfirmed();
  if (f) {
    writer.writeBool(
      19,
      f
    );
  }
  f = message.getIsFiatSent();
  if (f) {
    writer.writeBool(
      20,
      f
    );
  }
  f = message.getIsFiatReceived();
  if (f) {
    writer.writeBool(
      21,
      f
    );
  }
  f = message.getIsPayoutPublished();
  if (f) {
    writer.writeBool(
      22,
      f
    );
  }
  f = message.getIsWithdrawn();
  if (f) {
    writer.writeBool(
      23,
      f
    );
  }
  f = message.getContractAsJson();
  if (f.length > 0) {
    writer.writeString(
      24,
      f
    );
  }
  f = message.getContract();
  if (f != null) {
    writer.writeMessage(
      25,
      f,
      proto.io.bisq.protobuffer.ContractInfo.serializeBinaryToWriter
    );
  }
  f = message.getMakerDepositTxId();
  if (f.length > 0) {
    writer.writeString(
      100,
      f
    );
  }
  f = message.getTakerDepositTxId();
  if (f.length > 0) {
    writer.writeString(
      101,
      f
    );
  }
};


/**
 * optional OfferInfo offer = 1;
 * @return {?proto.io.bisq.protobuffer.OfferInfo}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.getOffer = function() {
  return /** @type{?proto.io.bisq.protobuffer.OfferInfo} */ (
    jspb.Message.getWrapperField(this, proto.io.bisq.protobuffer.OfferInfo, 1));
};


/**
 * @param {?proto.io.bisq.protobuffer.OfferInfo|undefined} value
 * @return {!proto.io.bisq.protobuffer.TradeInfo} returns this
*/
proto.io.bisq.protobuffer.TradeInfo.prototype.setOffer = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.bisq.protobuffer.TradeInfo} returns this
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.clearOffer = function() {
  return this.setOffer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.hasOffer = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string trade_id = 2;
 * @return {string}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.getTradeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.TradeInfo} returns this
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.setTradeId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string short_id = 3;
 * @return {string}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.getShortId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.TradeInfo} returns this
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.setShortId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint64 date = 4;
 * @return {number}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.getDate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.TradeInfo} returns this
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.setDate = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string role = 5;
 * @return {string}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.getRole = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.TradeInfo} returns this
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.setRole = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional uint64 tx_fee_as_long = 7;
 * @return {number}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.getTxFeeAsLong = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.TradeInfo} returns this
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.setTxFeeAsLong = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional uint64 taker_fee_as_long = 8;
 * @return {number}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.getTakerFeeAsLong = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.TradeInfo} returns this
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.setTakerFeeAsLong = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional string taker_fee_tx_id = 9;
 * @return {string}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.getTakerFeeTxId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.TradeInfo} returns this
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.setTakerFeeTxId = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string payout_tx_id = 11;
 * @return {string}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.getPayoutTxId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.TradeInfo} returns this
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.setPayoutTxId = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional uint64 trade_amount_as_long = 12;
 * @return {number}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.getTradeAmountAsLong = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.TradeInfo} returns this
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.setTradeAmountAsLong = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional uint64 trade_price = 13;
 * @return {number}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.getTradePrice = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.TradeInfo} returns this
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.setTradePrice = function(value) {
  return jspb.Message.setProto3IntField(this, 13, value);
};


/**
 * optional string trading_peer_node_address = 14;
 * @return {string}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.getTradingPeerNodeAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.TradeInfo} returns this
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.setTradingPeerNodeAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional string state = 15;
 * @return {string}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.getState = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.TradeInfo} returns this
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.setState = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};


/**
 * optional string phase = 16;
 * @return {string}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.getPhase = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.TradeInfo} returns this
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.setPhase = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * optional string trade_period_state = 17;
 * @return {string}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.getTradePeriodState = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.TradeInfo} returns this
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.setTradePeriodState = function(value) {
  return jspb.Message.setProto3StringField(this, 17, value);
};


/**
 * optional bool is_deposit_published = 18;
 * @return {boolean}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.getIsDepositPublished = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 18, false));
};


/**
 * @param {boolean} value
 * @return {!proto.io.bisq.protobuffer.TradeInfo} returns this
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.setIsDepositPublished = function(value) {
  return jspb.Message.setProto3BooleanField(this, 18, value);
};


/**
 * optional bool is_deposit_confirmed = 19;
 * @return {boolean}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.getIsDepositConfirmed = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 19, false));
};


/**
 * @param {boolean} value
 * @return {!proto.io.bisq.protobuffer.TradeInfo} returns this
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.setIsDepositConfirmed = function(value) {
  return jspb.Message.setProto3BooleanField(this, 19, value);
};


/**
 * optional bool is_fiat_sent = 20;
 * @return {boolean}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.getIsFiatSent = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 20, false));
};


/**
 * @param {boolean} value
 * @return {!proto.io.bisq.protobuffer.TradeInfo} returns this
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.setIsFiatSent = function(value) {
  return jspb.Message.setProto3BooleanField(this, 20, value);
};


/**
 * optional bool is_fiat_received = 21;
 * @return {boolean}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.getIsFiatReceived = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 21, false));
};


/**
 * @param {boolean} value
 * @return {!proto.io.bisq.protobuffer.TradeInfo} returns this
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.setIsFiatReceived = function(value) {
  return jspb.Message.setProto3BooleanField(this, 21, value);
};


/**
 * optional bool is_payout_published = 22;
 * @return {boolean}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.getIsPayoutPublished = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 22, false));
};


/**
 * @param {boolean} value
 * @return {!proto.io.bisq.protobuffer.TradeInfo} returns this
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.setIsPayoutPublished = function(value) {
  return jspb.Message.setProto3BooleanField(this, 22, value);
};


/**
 * optional bool is_withdrawn = 23;
 * @return {boolean}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.getIsWithdrawn = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 23, false));
};


/**
 * @param {boolean} value
 * @return {!proto.io.bisq.protobuffer.TradeInfo} returns this
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.setIsWithdrawn = function(value) {
  return jspb.Message.setProto3BooleanField(this, 23, value);
};


/**
 * optional string contract_as_json = 24;
 * @return {string}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.getContractAsJson = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 24, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.TradeInfo} returns this
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.setContractAsJson = function(value) {
  return jspb.Message.setProto3StringField(this, 24, value);
};


/**
 * optional ContractInfo contract = 25;
 * @return {?proto.io.bisq.protobuffer.ContractInfo}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.getContract = function() {
  return /** @type{?proto.io.bisq.protobuffer.ContractInfo} */ (
    jspb.Message.getWrapperField(this, proto.io.bisq.protobuffer.ContractInfo, 25));
};


/**
 * @param {?proto.io.bisq.protobuffer.ContractInfo|undefined} value
 * @return {!proto.io.bisq.protobuffer.TradeInfo} returns this
*/
proto.io.bisq.protobuffer.TradeInfo.prototype.setContract = function(value) {
  return jspb.Message.setWrapperField(this, 25, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.bisq.protobuffer.TradeInfo} returns this
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.clearContract = function() {
  return this.setContract(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.hasContract = function() {
  return jspb.Message.getField(this, 25) != null;
};


/**
 * optional string maker_deposit_tx_id = 100;
 * @return {string}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.getMakerDepositTxId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 100, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.TradeInfo} returns this
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.setMakerDepositTxId = function(value) {
  return jspb.Message.setProto3StringField(this, 100, value);
};


/**
 * optional string taker_deposit_tx_id = 101;
 * @return {string}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.getTakerDepositTxId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 101, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.TradeInfo} returns this
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.setTakerDepositTxId = function(value) {
  return jspb.Message.setProto3StringField(this, 101, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.ContractInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.ContractInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.ContractInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.ContractInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    buyerNodeAddress: jspb.Message.getFieldWithDefault(msg, 1, ""),
    sellerNodeAddress: jspb.Message.getFieldWithDefault(msg, 2, ""),
    isBuyerMakerAndSellerTaker: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    makerAccountId: jspb.Message.getFieldWithDefault(msg, 6, ""),
    takerAccountId: jspb.Message.getFieldWithDefault(msg, 7, ""),
    makerPaymentAccountPayload: (f = msg.getMakerPaymentAccountPayload()) && proto.io.bisq.protobuffer.PaymentAccountPayloadInfo.toObject(includeInstance, f),
    takerPaymentAccountPayload: (f = msg.getTakerPaymentAccountPayload()) && proto.io.bisq.protobuffer.PaymentAccountPayloadInfo.toObject(includeInstance, f),
    makerPayoutAddressString: jspb.Message.getFieldWithDefault(msg, 10, ""),
    takerPayoutAddressString: jspb.Message.getFieldWithDefault(msg, 11, ""),
    lockTime: jspb.Message.getFieldWithDefault(msg, 12, 0),
    arbitratorNodeAddress: jspb.Message.getFieldWithDefault(msg, 100, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.ContractInfo}
 */
proto.io.bisq.protobuffer.ContractInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.ContractInfo;
  return proto.io.bisq.protobuffer.ContractInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.ContractInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.ContractInfo}
 */
proto.io.bisq.protobuffer.ContractInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBuyerNodeAddress(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSellerNodeAddress(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsBuyerMakerAndSellerTaker(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setMakerAccountId(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setTakerAccountId(value);
      break;
    case 8:
      var value = new proto.io.bisq.protobuffer.PaymentAccountPayloadInfo;
      reader.readMessage(value,proto.io.bisq.protobuffer.PaymentAccountPayloadInfo.deserializeBinaryFromReader);
      msg.setMakerPaymentAccountPayload(value);
      break;
    case 9:
      var value = new proto.io.bisq.protobuffer.PaymentAccountPayloadInfo;
      reader.readMessage(value,proto.io.bisq.protobuffer.PaymentAccountPayloadInfo.deserializeBinaryFromReader);
      msg.setTakerPaymentAccountPayload(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setMakerPayoutAddressString(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setTakerPayoutAddressString(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLockTime(value);
      break;
    case 100:
      var value = /** @type {string} */ (reader.readString());
      msg.setArbitratorNodeAddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.ContractInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.ContractInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.ContractInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.ContractInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBuyerNodeAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSellerNodeAddress();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getIsBuyerMakerAndSellerTaker();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getMakerAccountId();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getTakerAccountId();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getMakerPaymentAccountPayload();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.io.bisq.protobuffer.PaymentAccountPayloadInfo.serializeBinaryToWriter
    );
  }
  f = message.getTakerPaymentAccountPayload();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.io.bisq.protobuffer.PaymentAccountPayloadInfo.serializeBinaryToWriter
    );
  }
  f = message.getMakerPayoutAddressString();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getTakerPayoutAddressString();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getLockTime();
  if (f !== 0) {
    writer.writeUint64(
      12,
      f
    );
  }
  f = message.getArbitratorNodeAddress();
  if (f.length > 0) {
    writer.writeString(
      100,
      f
    );
  }
};


/**
 * optional string buyer_node_address = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.ContractInfo.prototype.getBuyerNodeAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.ContractInfo} returns this
 */
proto.io.bisq.protobuffer.ContractInfo.prototype.setBuyerNodeAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string seller_node_address = 2;
 * @return {string}
 */
proto.io.bisq.protobuffer.ContractInfo.prototype.getSellerNodeAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.ContractInfo} returns this
 */
proto.io.bisq.protobuffer.ContractInfo.prototype.setSellerNodeAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool is_buyer_maker_and_seller_taker = 5;
 * @return {boolean}
 */
proto.io.bisq.protobuffer.ContractInfo.prototype.getIsBuyerMakerAndSellerTaker = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.io.bisq.protobuffer.ContractInfo} returns this
 */
proto.io.bisq.protobuffer.ContractInfo.prototype.setIsBuyerMakerAndSellerTaker = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional string maker_account_id = 6;
 * @return {string}
 */
proto.io.bisq.protobuffer.ContractInfo.prototype.getMakerAccountId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.ContractInfo} returns this
 */
proto.io.bisq.protobuffer.ContractInfo.prototype.setMakerAccountId = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string taker_account_id = 7;
 * @return {string}
 */
proto.io.bisq.protobuffer.ContractInfo.prototype.getTakerAccountId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.ContractInfo} returns this
 */
proto.io.bisq.protobuffer.ContractInfo.prototype.setTakerAccountId = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional PaymentAccountPayloadInfo maker_payment_account_payload = 8;
 * @return {?proto.io.bisq.protobuffer.PaymentAccountPayloadInfo}
 */
proto.io.bisq.protobuffer.ContractInfo.prototype.getMakerPaymentAccountPayload = function() {
  return /** @type{?proto.io.bisq.protobuffer.PaymentAccountPayloadInfo} */ (
    jspb.Message.getWrapperField(this, proto.io.bisq.protobuffer.PaymentAccountPayloadInfo, 8));
};


/**
 * @param {?proto.io.bisq.protobuffer.PaymentAccountPayloadInfo|undefined} value
 * @return {!proto.io.bisq.protobuffer.ContractInfo} returns this
*/
proto.io.bisq.protobuffer.ContractInfo.prototype.setMakerPaymentAccountPayload = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.bisq.protobuffer.ContractInfo} returns this
 */
proto.io.bisq.protobuffer.ContractInfo.prototype.clearMakerPaymentAccountPayload = function() {
  return this.setMakerPaymentAccountPayload(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.bisq.protobuffer.ContractInfo.prototype.hasMakerPaymentAccountPayload = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional PaymentAccountPayloadInfo taker_payment_account_payload = 9;
 * @return {?proto.io.bisq.protobuffer.PaymentAccountPayloadInfo}
 */
proto.io.bisq.protobuffer.ContractInfo.prototype.getTakerPaymentAccountPayload = function() {
  return /** @type{?proto.io.bisq.protobuffer.PaymentAccountPayloadInfo} */ (
    jspb.Message.getWrapperField(this, proto.io.bisq.protobuffer.PaymentAccountPayloadInfo, 9));
};


/**
 * @param {?proto.io.bisq.protobuffer.PaymentAccountPayloadInfo|undefined} value
 * @return {!proto.io.bisq.protobuffer.ContractInfo} returns this
*/
proto.io.bisq.protobuffer.ContractInfo.prototype.setTakerPaymentAccountPayload = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.bisq.protobuffer.ContractInfo} returns this
 */
proto.io.bisq.protobuffer.ContractInfo.prototype.clearTakerPaymentAccountPayload = function() {
  return this.setTakerPaymentAccountPayload(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.bisq.protobuffer.ContractInfo.prototype.hasTakerPaymentAccountPayload = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional string maker_payout_address_string = 10;
 * @return {string}
 */
proto.io.bisq.protobuffer.ContractInfo.prototype.getMakerPayoutAddressString = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.ContractInfo} returns this
 */
proto.io.bisq.protobuffer.ContractInfo.prototype.setMakerPayoutAddressString = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string taker_payout_address_string = 11;
 * @return {string}
 */
proto.io.bisq.protobuffer.ContractInfo.prototype.getTakerPayoutAddressString = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.ContractInfo} returns this
 */
proto.io.bisq.protobuffer.ContractInfo.prototype.setTakerPayoutAddressString = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional uint64 lock_time = 12;
 * @return {number}
 */
proto.io.bisq.protobuffer.ContractInfo.prototype.getLockTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.ContractInfo} returns this
 */
proto.io.bisq.protobuffer.ContractInfo.prototype.setLockTime = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional string arbitrator_node_address = 100;
 * @return {string}
 */
proto.io.bisq.protobuffer.ContractInfo.prototype.getArbitratorNodeAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 100, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.ContractInfo} returns this
 */
proto.io.bisq.protobuffer.ContractInfo.prototype.setArbitratorNodeAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 100, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.PaymentAccountPayloadInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.PaymentAccountPayloadInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.PaymentAccountPayloadInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.PaymentAccountPayloadInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    paymentMethodId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    address: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.PaymentAccountPayloadInfo}
 */
proto.io.bisq.protobuffer.PaymentAccountPayloadInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.PaymentAccountPayloadInfo;
  return proto.io.bisq.protobuffer.PaymentAccountPayloadInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.PaymentAccountPayloadInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.PaymentAccountPayloadInfo}
 */
proto.io.bisq.protobuffer.PaymentAccountPayloadInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaymentMethodId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.PaymentAccountPayloadInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.PaymentAccountPayloadInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.PaymentAccountPayloadInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.PaymentAccountPayloadInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPaymentMethodId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.PaymentAccountPayloadInfo.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.PaymentAccountPayloadInfo} returns this
 */
proto.io.bisq.protobuffer.PaymentAccountPayloadInfo.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string payment_method_id = 2;
 * @return {string}
 */
proto.io.bisq.protobuffer.PaymentAccountPayloadInfo.prototype.getPaymentMethodId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.PaymentAccountPayloadInfo} returns this
 */
proto.io.bisq.protobuffer.PaymentAccountPayloadInfo.prototype.setPaymentMethodId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string address = 3;
 * @return {string}
 */
proto.io.bisq.protobuffer.PaymentAccountPayloadInfo.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.PaymentAccountPayloadInfo} returns this
 */
proto.io.bisq.protobuffer.PaymentAccountPayloadInfo.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.TxFeeRateInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.TxFeeRateInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.TxFeeRateInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.TxFeeRateInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    useCustomTxFeeRate: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    customTxFeeRate: jspb.Message.getFieldWithDefault(msg, 2, 0),
    feeServiceRate: jspb.Message.getFieldWithDefault(msg, 3, 0),
    lastFeeServiceRequestTs: jspb.Message.getFieldWithDefault(msg, 4, 0),
    minFeeServiceRate: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.TxFeeRateInfo}
 */
proto.io.bisq.protobuffer.TxFeeRateInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.TxFeeRateInfo;
  return proto.io.bisq.protobuffer.TxFeeRateInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.TxFeeRateInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.TxFeeRateInfo}
 */
proto.io.bisq.protobuffer.TxFeeRateInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUseCustomTxFeeRate(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCustomTxFeeRate(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setFeeServiceRate(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLastFeeServiceRequestTs(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMinFeeServiceRate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.TxFeeRateInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.TxFeeRateInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.TxFeeRateInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.TxFeeRateInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUseCustomTxFeeRate();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getCustomTxFeeRate();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getFeeServiceRate();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getLastFeeServiceRequestTs();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getMinFeeServiceRate();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
};


/**
 * optional bool use_custom_tx_fee_rate = 1;
 * @return {boolean}
 */
proto.io.bisq.protobuffer.TxFeeRateInfo.prototype.getUseCustomTxFeeRate = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.io.bisq.protobuffer.TxFeeRateInfo} returns this
 */
proto.io.bisq.protobuffer.TxFeeRateInfo.prototype.setUseCustomTxFeeRate = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional uint64 custom_tx_fee_rate = 2;
 * @return {number}
 */
proto.io.bisq.protobuffer.TxFeeRateInfo.prototype.getCustomTxFeeRate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.TxFeeRateInfo} returns this
 */
proto.io.bisq.protobuffer.TxFeeRateInfo.prototype.setCustomTxFeeRate = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 fee_service_rate = 3;
 * @return {number}
 */
proto.io.bisq.protobuffer.TxFeeRateInfo.prototype.getFeeServiceRate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.TxFeeRateInfo} returns this
 */
proto.io.bisq.protobuffer.TxFeeRateInfo.prototype.setFeeServiceRate = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint64 last_fee_service_request_ts = 4;
 * @return {number}
 */
proto.io.bisq.protobuffer.TxFeeRateInfo.prototype.getLastFeeServiceRequestTs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.TxFeeRateInfo} returns this
 */
proto.io.bisq.protobuffer.TxFeeRateInfo.prototype.setLastFeeServiceRequestTs = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint64 min_fee_service_rate = 5;
 * @return {number}
 */
proto.io.bisq.protobuffer.TxFeeRateInfo.prototype.getMinFeeServiceRate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.TxFeeRateInfo} returns this
 */
proto.io.bisq.protobuffer.TxFeeRateInfo.prototype.setMinFeeServiceRate = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.TxInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.TxInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.TxInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.TxInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    txId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    inputSum: jspb.Message.getFieldWithDefault(msg, 2, 0),
    outputSum: jspb.Message.getFieldWithDefault(msg, 3, 0),
    fee: jspb.Message.getFieldWithDefault(msg, 4, 0),
    size: jspb.Message.getFieldWithDefault(msg, 5, 0),
    isPending: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    memo: jspb.Message.getFieldWithDefault(msg, 7, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.TxInfo}
 */
proto.io.bisq.protobuffer.TxInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.TxInfo;
  return proto.io.bisq.protobuffer.TxInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.TxInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.TxInfo}
 */
proto.io.bisq.protobuffer.TxInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTxId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setInputSum(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setOutputSum(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setFee(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSize(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsPending(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setMemo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.TxInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.TxInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.TxInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.TxInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTxId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getInputSum();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getOutputSum();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getFee();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getSize();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getIsPending();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getMemo();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional string tx_id = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.TxInfo.prototype.getTxId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.TxInfo} returns this
 */
proto.io.bisq.protobuffer.TxInfo.prototype.setTxId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 input_sum = 2;
 * @return {number}
 */
proto.io.bisq.protobuffer.TxInfo.prototype.getInputSum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.TxInfo} returns this
 */
proto.io.bisq.protobuffer.TxInfo.prototype.setInputSum = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 output_sum = 3;
 * @return {number}
 */
proto.io.bisq.protobuffer.TxInfo.prototype.getOutputSum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.TxInfo} returns this
 */
proto.io.bisq.protobuffer.TxInfo.prototype.setOutputSum = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint64 fee = 4;
 * @return {number}
 */
proto.io.bisq.protobuffer.TxInfo.prototype.getFee = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.TxInfo} returns this
 */
proto.io.bisq.protobuffer.TxInfo.prototype.setFee = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 size = 5;
 * @return {number}
 */
proto.io.bisq.protobuffer.TxInfo.prototype.getSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.TxInfo} returns this
 */
proto.io.bisq.protobuffer.TxInfo.prototype.setSize = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional bool is_pending = 6;
 * @return {boolean}
 */
proto.io.bisq.protobuffer.TxInfo.prototype.getIsPending = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.io.bisq.protobuffer.TxInfo} returns this
 */
proto.io.bisq.protobuffer.TxInfo.prototype.setIsPending = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional string memo = 7;
 * @return {string}
 */
proto.io.bisq.protobuffer.TxInfo.prototype.getMemo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.TxInfo} returns this
 */
proto.io.bisq.protobuffer.TxInfo.prototype.setMemo = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetBalancesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetBalancesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetBalancesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetBalancesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    currencyCode: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetBalancesRequest}
 */
proto.io.bisq.protobuffer.GetBalancesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetBalancesRequest;
  return proto.io.bisq.protobuffer.GetBalancesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetBalancesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetBalancesRequest}
 */
proto.io.bisq.protobuffer.GetBalancesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrencyCode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetBalancesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetBalancesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetBalancesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetBalancesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCurrencyCode();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string currency_code = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.GetBalancesRequest.prototype.getCurrencyCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.GetBalancesRequest} returns this
 */
proto.io.bisq.protobuffer.GetBalancesRequest.prototype.setCurrencyCode = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetBalancesReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetBalancesReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetBalancesReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetBalancesReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    balances: (f = msg.getBalances()) && proto.io.bisq.protobuffer.BalancesInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetBalancesReply}
 */
proto.io.bisq.protobuffer.GetBalancesReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetBalancesReply;
  return proto.io.bisq.protobuffer.GetBalancesReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetBalancesReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetBalancesReply}
 */
proto.io.bisq.protobuffer.GetBalancesReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.io.bisq.protobuffer.BalancesInfo;
      reader.readMessage(value,proto.io.bisq.protobuffer.BalancesInfo.deserializeBinaryFromReader);
      msg.setBalances(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetBalancesReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetBalancesReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetBalancesReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetBalancesReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBalances();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.io.bisq.protobuffer.BalancesInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional BalancesInfo balances = 1;
 * @return {?proto.io.bisq.protobuffer.BalancesInfo}
 */
proto.io.bisq.protobuffer.GetBalancesReply.prototype.getBalances = function() {
  return /** @type{?proto.io.bisq.protobuffer.BalancesInfo} */ (
    jspb.Message.getWrapperField(this, proto.io.bisq.protobuffer.BalancesInfo, 1));
};


/**
 * @param {?proto.io.bisq.protobuffer.BalancesInfo|undefined} value
 * @return {!proto.io.bisq.protobuffer.GetBalancesReply} returns this
*/
proto.io.bisq.protobuffer.GetBalancesReply.prototype.setBalances = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.bisq.protobuffer.GetBalancesReply} returns this
 */
proto.io.bisq.protobuffer.GetBalancesReply.prototype.clearBalances = function() {
  return this.setBalances(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.bisq.protobuffer.GetBalancesReply.prototype.hasBalances = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetNewDepositSubaddressRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetNewDepositSubaddressRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetNewDepositSubaddressRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetNewDepositSubaddressRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetNewDepositSubaddressRequest}
 */
proto.io.bisq.protobuffer.GetNewDepositSubaddressRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetNewDepositSubaddressRequest;
  return proto.io.bisq.protobuffer.GetNewDepositSubaddressRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetNewDepositSubaddressRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetNewDepositSubaddressRequest}
 */
proto.io.bisq.protobuffer.GetNewDepositSubaddressRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetNewDepositSubaddressRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetNewDepositSubaddressRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetNewDepositSubaddressRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetNewDepositSubaddressRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetNewDepositSubaddressReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetNewDepositSubaddressReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetNewDepositSubaddressReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetNewDepositSubaddressReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    subaddress: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetNewDepositSubaddressReply}
 */
proto.io.bisq.protobuffer.GetNewDepositSubaddressReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetNewDepositSubaddressReply;
  return proto.io.bisq.protobuffer.GetNewDepositSubaddressReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetNewDepositSubaddressReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetNewDepositSubaddressReply}
 */
proto.io.bisq.protobuffer.GetNewDepositSubaddressReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubaddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetNewDepositSubaddressReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetNewDepositSubaddressReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetNewDepositSubaddressReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetNewDepositSubaddressReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSubaddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string subaddress = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.GetNewDepositSubaddressReply.prototype.getSubaddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.GetNewDepositSubaddressReply} returns this
 */
proto.io.bisq.protobuffer.GetNewDepositSubaddressReply.prototype.setSubaddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetAddressBalanceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetAddressBalanceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetAddressBalanceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetAddressBalanceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetAddressBalanceRequest}
 */
proto.io.bisq.protobuffer.GetAddressBalanceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetAddressBalanceRequest;
  return proto.io.bisq.protobuffer.GetAddressBalanceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetAddressBalanceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetAddressBalanceRequest}
 */
proto.io.bisq.protobuffer.GetAddressBalanceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetAddressBalanceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetAddressBalanceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetAddressBalanceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetAddressBalanceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.GetAddressBalanceRequest.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.GetAddressBalanceRequest} returns this
 */
proto.io.bisq.protobuffer.GetAddressBalanceRequest.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetAddressBalanceReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetAddressBalanceReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetAddressBalanceReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetAddressBalanceReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    addressBalanceInfo: (f = msg.getAddressBalanceInfo()) && proto.io.bisq.protobuffer.AddressBalanceInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetAddressBalanceReply}
 */
proto.io.bisq.protobuffer.GetAddressBalanceReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetAddressBalanceReply;
  return proto.io.bisq.protobuffer.GetAddressBalanceReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetAddressBalanceReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetAddressBalanceReply}
 */
proto.io.bisq.protobuffer.GetAddressBalanceReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.io.bisq.protobuffer.AddressBalanceInfo;
      reader.readMessage(value,proto.io.bisq.protobuffer.AddressBalanceInfo.deserializeBinaryFromReader);
      msg.setAddressBalanceInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetAddressBalanceReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetAddressBalanceReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetAddressBalanceReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetAddressBalanceReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddressBalanceInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.io.bisq.protobuffer.AddressBalanceInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional AddressBalanceInfo address_balance_info = 1;
 * @return {?proto.io.bisq.protobuffer.AddressBalanceInfo}
 */
proto.io.bisq.protobuffer.GetAddressBalanceReply.prototype.getAddressBalanceInfo = function() {
  return /** @type{?proto.io.bisq.protobuffer.AddressBalanceInfo} */ (
    jspb.Message.getWrapperField(this, proto.io.bisq.protobuffer.AddressBalanceInfo, 1));
};


/**
 * @param {?proto.io.bisq.protobuffer.AddressBalanceInfo|undefined} value
 * @return {!proto.io.bisq.protobuffer.GetAddressBalanceReply} returns this
*/
proto.io.bisq.protobuffer.GetAddressBalanceReply.prototype.setAddressBalanceInfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.bisq.protobuffer.GetAddressBalanceReply} returns this
 */
proto.io.bisq.protobuffer.GetAddressBalanceReply.prototype.clearAddressBalanceInfo = function() {
  return this.setAddressBalanceInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.bisq.protobuffer.GetAddressBalanceReply.prototype.hasAddressBalanceInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.SendBtcRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.SendBtcRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.SendBtcRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.SendBtcRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, ""),
    amount: jspb.Message.getFieldWithDefault(msg, 2, ""),
    txFeeRate: jspb.Message.getFieldWithDefault(msg, 3, ""),
    memo: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.SendBtcRequest}
 */
proto.io.bisq.protobuffer.SendBtcRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.SendBtcRequest;
  return proto.io.bisq.protobuffer.SendBtcRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.SendBtcRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.SendBtcRequest}
 */
proto.io.bisq.protobuffer.SendBtcRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAmount(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTxFeeRate(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setMemo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.SendBtcRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.SendBtcRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.SendBtcRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.SendBtcRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAmount();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTxFeeRate();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getMemo();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.SendBtcRequest.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.SendBtcRequest} returns this
 */
proto.io.bisq.protobuffer.SendBtcRequest.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string amount = 2;
 * @return {string}
 */
proto.io.bisq.protobuffer.SendBtcRequest.prototype.getAmount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.SendBtcRequest} returns this
 */
proto.io.bisq.protobuffer.SendBtcRequest.prototype.setAmount = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string tx_fee_rate = 3;
 * @return {string}
 */
proto.io.bisq.protobuffer.SendBtcRequest.prototype.getTxFeeRate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.SendBtcRequest} returns this
 */
proto.io.bisq.protobuffer.SendBtcRequest.prototype.setTxFeeRate = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string memo = 4;
 * @return {string}
 */
proto.io.bisq.protobuffer.SendBtcRequest.prototype.getMemo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.SendBtcRequest} returns this
 */
proto.io.bisq.protobuffer.SendBtcRequest.prototype.setMemo = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.SendBtcReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.SendBtcReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.SendBtcReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.SendBtcReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    txInfo: (f = msg.getTxInfo()) && proto.io.bisq.protobuffer.TxInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.SendBtcReply}
 */
proto.io.bisq.protobuffer.SendBtcReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.SendBtcReply;
  return proto.io.bisq.protobuffer.SendBtcReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.SendBtcReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.SendBtcReply}
 */
proto.io.bisq.protobuffer.SendBtcReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.io.bisq.protobuffer.TxInfo;
      reader.readMessage(value,proto.io.bisq.protobuffer.TxInfo.deserializeBinaryFromReader);
      msg.setTxInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.SendBtcReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.SendBtcReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.SendBtcReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.SendBtcReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTxInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.io.bisq.protobuffer.TxInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional TxInfo tx_info = 1;
 * @return {?proto.io.bisq.protobuffer.TxInfo}
 */
proto.io.bisq.protobuffer.SendBtcReply.prototype.getTxInfo = function() {
  return /** @type{?proto.io.bisq.protobuffer.TxInfo} */ (
    jspb.Message.getWrapperField(this, proto.io.bisq.protobuffer.TxInfo, 1));
};


/**
 * @param {?proto.io.bisq.protobuffer.TxInfo|undefined} value
 * @return {!proto.io.bisq.protobuffer.SendBtcReply} returns this
*/
proto.io.bisq.protobuffer.SendBtcReply.prototype.setTxInfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.bisq.protobuffer.SendBtcReply} returns this
 */
proto.io.bisq.protobuffer.SendBtcReply.prototype.clearTxInfo = function() {
  return this.setTxInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.bisq.protobuffer.SendBtcReply.prototype.hasTxInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetTxFeeRateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetTxFeeRateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetTxFeeRateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetTxFeeRateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetTxFeeRateRequest}
 */
proto.io.bisq.protobuffer.GetTxFeeRateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetTxFeeRateRequest;
  return proto.io.bisq.protobuffer.GetTxFeeRateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetTxFeeRateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetTxFeeRateRequest}
 */
proto.io.bisq.protobuffer.GetTxFeeRateRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetTxFeeRateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetTxFeeRateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetTxFeeRateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetTxFeeRateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetTxFeeRateReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetTxFeeRateReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetTxFeeRateReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetTxFeeRateReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    txFeeRateInfo: (f = msg.getTxFeeRateInfo()) && proto.io.bisq.protobuffer.TxFeeRateInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetTxFeeRateReply}
 */
proto.io.bisq.protobuffer.GetTxFeeRateReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetTxFeeRateReply;
  return proto.io.bisq.protobuffer.GetTxFeeRateReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetTxFeeRateReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetTxFeeRateReply}
 */
proto.io.bisq.protobuffer.GetTxFeeRateReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.io.bisq.protobuffer.TxFeeRateInfo;
      reader.readMessage(value,proto.io.bisq.protobuffer.TxFeeRateInfo.deserializeBinaryFromReader);
      msg.setTxFeeRateInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetTxFeeRateReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetTxFeeRateReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetTxFeeRateReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetTxFeeRateReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTxFeeRateInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.io.bisq.protobuffer.TxFeeRateInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional TxFeeRateInfo tx_fee_rate_info = 1;
 * @return {?proto.io.bisq.protobuffer.TxFeeRateInfo}
 */
proto.io.bisq.protobuffer.GetTxFeeRateReply.prototype.getTxFeeRateInfo = function() {
  return /** @type{?proto.io.bisq.protobuffer.TxFeeRateInfo} */ (
    jspb.Message.getWrapperField(this, proto.io.bisq.protobuffer.TxFeeRateInfo, 1));
};


/**
 * @param {?proto.io.bisq.protobuffer.TxFeeRateInfo|undefined} value
 * @return {!proto.io.bisq.protobuffer.GetTxFeeRateReply} returns this
*/
proto.io.bisq.protobuffer.GetTxFeeRateReply.prototype.setTxFeeRateInfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.bisq.protobuffer.GetTxFeeRateReply} returns this
 */
proto.io.bisq.protobuffer.GetTxFeeRateReply.prototype.clearTxFeeRateInfo = function() {
  return this.setTxFeeRateInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.bisq.protobuffer.GetTxFeeRateReply.prototype.hasTxFeeRateInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.SetTxFeeRatePreferenceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.SetTxFeeRatePreferenceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.SetTxFeeRatePreferenceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.SetTxFeeRatePreferenceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    txFeeRatePreference: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.SetTxFeeRatePreferenceRequest}
 */
proto.io.bisq.protobuffer.SetTxFeeRatePreferenceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.SetTxFeeRatePreferenceRequest;
  return proto.io.bisq.protobuffer.SetTxFeeRatePreferenceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.SetTxFeeRatePreferenceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.SetTxFeeRatePreferenceRequest}
 */
proto.io.bisq.protobuffer.SetTxFeeRatePreferenceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTxFeeRatePreference(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.SetTxFeeRatePreferenceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.SetTxFeeRatePreferenceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.SetTxFeeRatePreferenceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.SetTxFeeRatePreferenceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTxFeeRatePreference();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
};


/**
 * optional uint64 tx_fee_rate_preference = 1;
 * @return {number}
 */
proto.io.bisq.protobuffer.SetTxFeeRatePreferenceRequest.prototype.getTxFeeRatePreference = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.SetTxFeeRatePreferenceRequest} returns this
 */
proto.io.bisq.protobuffer.SetTxFeeRatePreferenceRequest.prototype.setTxFeeRatePreference = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.SetTxFeeRatePreferenceReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.SetTxFeeRatePreferenceReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.SetTxFeeRatePreferenceReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.SetTxFeeRatePreferenceReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    txFeeRateInfo: (f = msg.getTxFeeRateInfo()) && proto.io.bisq.protobuffer.TxFeeRateInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.SetTxFeeRatePreferenceReply}
 */
proto.io.bisq.protobuffer.SetTxFeeRatePreferenceReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.SetTxFeeRatePreferenceReply;
  return proto.io.bisq.protobuffer.SetTxFeeRatePreferenceReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.SetTxFeeRatePreferenceReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.SetTxFeeRatePreferenceReply}
 */
proto.io.bisq.protobuffer.SetTxFeeRatePreferenceReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.io.bisq.protobuffer.TxFeeRateInfo;
      reader.readMessage(value,proto.io.bisq.protobuffer.TxFeeRateInfo.deserializeBinaryFromReader);
      msg.setTxFeeRateInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.SetTxFeeRatePreferenceReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.SetTxFeeRatePreferenceReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.SetTxFeeRatePreferenceReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.SetTxFeeRatePreferenceReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTxFeeRateInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.io.bisq.protobuffer.TxFeeRateInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional TxFeeRateInfo tx_fee_rate_info = 1;
 * @return {?proto.io.bisq.protobuffer.TxFeeRateInfo}
 */
proto.io.bisq.protobuffer.SetTxFeeRatePreferenceReply.prototype.getTxFeeRateInfo = function() {
  return /** @type{?proto.io.bisq.protobuffer.TxFeeRateInfo} */ (
    jspb.Message.getWrapperField(this, proto.io.bisq.protobuffer.TxFeeRateInfo, 1));
};


/**
 * @param {?proto.io.bisq.protobuffer.TxFeeRateInfo|undefined} value
 * @return {!proto.io.bisq.protobuffer.SetTxFeeRatePreferenceReply} returns this
*/
proto.io.bisq.protobuffer.SetTxFeeRatePreferenceReply.prototype.setTxFeeRateInfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.bisq.protobuffer.SetTxFeeRatePreferenceReply} returns this
 */
proto.io.bisq.protobuffer.SetTxFeeRatePreferenceReply.prototype.clearTxFeeRateInfo = function() {
  return this.setTxFeeRateInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.bisq.protobuffer.SetTxFeeRatePreferenceReply.prototype.hasTxFeeRateInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceRequest}
 */
proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceRequest;
  return proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceRequest}
 */
proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    txFeeRateInfo: (f = msg.getTxFeeRateInfo()) && proto.io.bisq.protobuffer.TxFeeRateInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceReply}
 */
proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceReply;
  return proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceReply}
 */
proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.io.bisq.protobuffer.TxFeeRateInfo;
      reader.readMessage(value,proto.io.bisq.protobuffer.TxFeeRateInfo.deserializeBinaryFromReader);
      msg.setTxFeeRateInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTxFeeRateInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.io.bisq.protobuffer.TxFeeRateInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional TxFeeRateInfo tx_fee_rate_info = 1;
 * @return {?proto.io.bisq.protobuffer.TxFeeRateInfo}
 */
proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceReply.prototype.getTxFeeRateInfo = function() {
  return /** @type{?proto.io.bisq.protobuffer.TxFeeRateInfo} */ (
    jspb.Message.getWrapperField(this, proto.io.bisq.protobuffer.TxFeeRateInfo, 1));
};


/**
 * @param {?proto.io.bisq.protobuffer.TxFeeRateInfo|undefined} value
 * @return {!proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceReply} returns this
*/
proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceReply.prototype.setTxFeeRateInfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceReply} returns this
 */
proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceReply.prototype.clearTxFeeRateInfo = function() {
  return this.setTxFeeRateInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceReply.prototype.hasTxFeeRateInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetTransactionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetTransactionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetTransactionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetTransactionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    txId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetTransactionRequest}
 */
proto.io.bisq.protobuffer.GetTransactionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetTransactionRequest;
  return proto.io.bisq.protobuffer.GetTransactionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetTransactionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetTransactionRequest}
 */
proto.io.bisq.protobuffer.GetTransactionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTxId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetTransactionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetTransactionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetTransactionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetTransactionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTxId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string tx_id = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.GetTransactionRequest.prototype.getTxId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.GetTransactionRequest} returns this
 */
proto.io.bisq.protobuffer.GetTransactionRequest.prototype.setTxId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetTransactionReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetTransactionReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetTransactionReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetTransactionReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    txInfo: (f = msg.getTxInfo()) && proto.io.bisq.protobuffer.TxInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetTransactionReply}
 */
proto.io.bisq.protobuffer.GetTransactionReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetTransactionReply;
  return proto.io.bisq.protobuffer.GetTransactionReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetTransactionReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetTransactionReply}
 */
proto.io.bisq.protobuffer.GetTransactionReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.io.bisq.protobuffer.TxInfo;
      reader.readMessage(value,proto.io.bisq.protobuffer.TxInfo.deserializeBinaryFromReader);
      msg.setTxInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetTransactionReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetTransactionReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetTransactionReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetTransactionReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTxInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.io.bisq.protobuffer.TxInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional TxInfo tx_info = 1;
 * @return {?proto.io.bisq.protobuffer.TxInfo}
 */
proto.io.bisq.protobuffer.GetTransactionReply.prototype.getTxInfo = function() {
  return /** @type{?proto.io.bisq.protobuffer.TxInfo} */ (
    jspb.Message.getWrapperField(this, proto.io.bisq.protobuffer.TxInfo, 1));
};


/**
 * @param {?proto.io.bisq.protobuffer.TxInfo|undefined} value
 * @return {!proto.io.bisq.protobuffer.GetTransactionReply} returns this
*/
proto.io.bisq.protobuffer.GetTransactionReply.prototype.setTxInfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.bisq.protobuffer.GetTransactionReply} returns this
 */
proto.io.bisq.protobuffer.GetTransactionReply.prototype.clearTxInfo = function() {
  return this.setTxInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.bisq.protobuffer.GetTransactionReply.prototype.hasTxInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetFundingAddressesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetFundingAddressesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetFundingAddressesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetFundingAddressesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetFundingAddressesRequest}
 */
proto.io.bisq.protobuffer.GetFundingAddressesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetFundingAddressesRequest;
  return proto.io.bisq.protobuffer.GetFundingAddressesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetFundingAddressesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetFundingAddressesRequest}
 */
proto.io.bisq.protobuffer.GetFundingAddressesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetFundingAddressesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetFundingAddressesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetFundingAddressesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetFundingAddressesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.io.bisq.protobuffer.GetFundingAddressesReply.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetFundingAddressesReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetFundingAddressesReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetFundingAddressesReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetFundingAddressesReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    addressBalanceInfoList: jspb.Message.toObjectList(msg.getAddressBalanceInfoList(),
    proto.io.bisq.protobuffer.AddressBalanceInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetFundingAddressesReply}
 */
proto.io.bisq.protobuffer.GetFundingAddressesReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetFundingAddressesReply;
  return proto.io.bisq.protobuffer.GetFundingAddressesReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetFundingAddressesReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetFundingAddressesReply}
 */
proto.io.bisq.protobuffer.GetFundingAddressesReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.io.bisq.protobuffer.AddressBalanceInfo;
      reader.readMessage(value,proto.io.bisq.protobuffer.AddressBalanceInfo.deserializeBinaryFromReader);
      msg.addAddressBalanceInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetFundingAddressesReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetFundingAddressesReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetFundingAddressesReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetFundingAddressesReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddressBalanceInfoList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.io.bisq.protobuffer.AddressBalanceInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated AddressBalanceInfo address_balance_info = 1;
 * @return {!Array<!proto.io.bisq.protobuffer.AddressBalanceInfo>}
 */
proto.io.bisq.protobuffer.GetFundingAddressesReply.prototype.getAddressBalanceInfoList = function() {
  return /** @type{!Array<!proto.io.bisq.protobuffer.AddressBalanceInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.io.bisq.protobuffer.AddressBalanceInfo, 1));
};


/**
 * @param {!Array<!proto.io.bisq.protobuffer.AddressBalanceInfo>} value
 * @return {!proto.io.bisq.protobuffer.GetFundingAddressesReply} returns this
*/
proto.io.bisq.protobuffer.GetFundingAddressesReply.prototype.setAddressBalanceInfoList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.io.bisq.protobuffer.AddressBalanceInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.io.bisq.protobuffer.AddressBalanceInfo}
 */
proto.io.bisq.protobuffer.GetFundingAddressesReply.prototype.addAddressBalanceInfo = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.io.bisq.protobuffer.AddressBalanceInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.io.bisq.protobuffer.GetFundingAddressesReply} returns this
 */
proto.io.bisq.protobuffer.GetFundingAddressesReply.prototype.clearAddressBalanceInfoList = function() {
  return this.setAddressBalanceInfoList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.SetWalletPasswordRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.SetWalletPasswordRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.SetWalletPasswordRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.SetWalletPasswordRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    password: jspb.Message.getFieldWithDefault(msg, 1, ""),
    newPassword: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.SetWalletPasswordRequest}
 */
proto.io.bisq.protobuffer.SetWalletPasswordRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.SetWalletPasswordRequest;
  return proto.io.bisq.protobuffer.SetWalletPasswordRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.SetWalletPasswordRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.SetWalletPasswordRequest}
 */
proto.io.bisq.protobuffer.SetWalletPasswordRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNewPassword(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.SetWalletPasswordRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.SetWalletPasswordRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.SetWalletPasswordRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.SetWalletPasswordRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getNewPassword();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string password = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.SetWalletPasswordRequest.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.SetWalletPasswordRequest} returns this
 */
proto.io.bisq.protobuffer.SetWalletPasswordRequest.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string new_password = 2;
 * @return {string}
 */
proto.io.bisq.protobuffer.SetWalletPasswordRequest.prototype.getNewPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.SetWalletPasswordRequest} returns this
 */
proto.io.bisq.protobuffer.SetWalletPasswordRequest.prototype.setNewPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.SetWalletPasswordReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.SetWalletPasswordReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.SetWalletPasswordReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.SetWalletPasswordReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.SetWalletPasswordReply}
 */
proto.io.bisq.protobuffer.SetWalletPasswordReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.SetWalletPasswordReply;
  return proto.io.bisq.protobuffer.SetWalletPasswordReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.SetWalletPasswordReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.SetWalletPasswordReply}
 */
proto.io.bisq.protobuffer.SetWalletPasswordReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.SetWalletPasswordReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.SetWalletPasswordReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.SetWalletPasswordReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.SetWalletPasswordReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.RemoveWalletPasswordRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.RemoveWalletPasswordRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.RemoveWalletPasswordRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.RemoveWalletPasswordRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    password: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.RemoveWalletPasswordRequest}
 */
proto.io.bisq.protobuffer.RemoveWalletPasswordRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.RemoveWalletPasswordRequest;
  return proto.io.bisq.protobuffer.RemoveWalletPasswordRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.RemoveWalletPasswordRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.RemoveWalletPasswordRequest}
 */
proto.io.bisq.protobuffer.RemoveWalletPasswordRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.RemoveWalletPasswordRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.RemoveWalletPasswordRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.RemoveWalletPasswordRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.RemoveWalletPasswordRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string password = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.RemoveWalletPasswordRequest.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.RemoveWalletPasswordRequest} returns this
 */
proto.io.bisq.protobuffer.RemoveWalletPasswordRequest.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.RemoveWalletPasswordReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.RemoveWalletPasswordReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.RemoveWalletPasswordReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.RemoveWalletPasswordReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.RemoveWalletPasswordReply}
 */
proto.io.bisq.protobuffer.RemoveWalletPasswordReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.RemoveWalletPasswordReply;
  return proto.io.bisq.protobuffer.RemoveWalletPasswordReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.RemoveWalletPasswordReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.RemoveWalletPasswordReply}
 */
proto.io.bisq.protobuffer.RemoveWalletPasswordReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.RemoveWalletPasswordReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.RemoveWalletPasswordReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.RemoveWalletPasswordReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.RemoveWalletPasswordReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.LockWalletRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.LockWalletRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.LockWalletRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.LockWalletRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.LockWalletRequest}
 */
proto.io.bisq.protobuffer.LockWalletRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.LockWalletRequest;
  return proto.io.bisq.protobuffer.LockWalletRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.LockWalletRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.LockWalletRequest}
 */
proto.io.bisq.protobuffer.LockWalletRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.LockWalletRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.LockWalletRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.LockWalletRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.LockWalletRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.LockWalletReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.LockWalletReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.LockWalletReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.LockWalletReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.LockWalletReply}
 */
proto.io.bisq.protobuffer.LockWalletReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.LockWalletReply;
  return proto.io.bisq.protobuffer.LockWalletReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.LockWalletReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.LockWalletReply}
 */
proto.io.bisq.protobuffer.LockWalletReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.LockWalletReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.LockWalletReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.LockWalletReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.LockWalletReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.UnlockWalletRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.UnlockWalletRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.UnlockWalletRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.UnlockWalletRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    password: jspb.Message.getFieldWithDefault(msg, 1, ""),
    timeout: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.UnlockWalletRequest}
 */
proto.io.bisq.protobuffer.UnlockWalletRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.UnlockWalletRequest;
  return proto.io.bisq.protobuffer.UnlockWalletRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.UnlockWalletRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.UnlockWalletRequest}
 */
proto.io.bisq.protobuffer.UnlockWalletRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTimeout(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.UnlockWalletRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.UnlockWalletRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.UnlockWalletRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.UnlockWalletRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTimeout();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
};


/**
 * optional string password = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.UnlockWalletRequest.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.UnlockWalletRequest} returns this
 */
proto.io.bisq.protobuffer.UnlockWalletRequest.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 timeout = 2;
 * @return {number}
 */
proto.io.bisq.protobuffer.UnlockWalletRequest.prototype.getTimeout = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.UnlockWalletRequest} returns this
 */
proto.io.bisq.protobuffer.UnlockWalletRequest.prototype.setTimeout = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.UnlockWalletReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.UnlockWalletReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.UnlockWalletReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.UnlockWalletReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.UnlockWalletReply}
 */
proto.io.bisq.protobuffer.UnlockWalletReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.UnlockWalletReply;
  return proto.io.bisq.protobuffer.UnlockWalletReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.UnlockWalletReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.UnlockWalletReply}
 */
proto.io.bisq.protobuffer.UnlockWalletReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.UnlockWalletReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.UnlockWalletReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.UnlockWalletReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.UnlockWalletReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.BalancesInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.BalancesInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.BalancesInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.BalancesInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    btc: (f = msg.getBtc()) && proto.io.bisq.protobuffer.BtcBalanceInfo.toObject(includeInstance, f),
    xmr: (f = msg.getXmr()) && proto.io.bisq.protobuffer.XmrBalanceInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.BalancesInfo}
 */
proto.io.bisq.protobuffer.BalancesInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.BalancesInfo;
  return proto.io.bisq.protobuffer.BalancesInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.BalancesInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.BalancesInfo}
 */
proto.io.bisq.protobuffer.BalancesInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.io.bisq.protobuffer.BtcBalanceInfo;
      reader.readMessage(value,proto.io.bisq.protobuffer.BtcBalanceInfo.deserializeBinaryFromReader);
      msg.setBtc(value);
      break;
    case 2:
      var value = new proto.io.bisq.protobuffer.XmrBalanceInfo;
      reader.readMessage(value,proto.io.bisq.protobuffer.XmrBalanceInfo.deserializeBinaryFromReader);
      msg.setXmr(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.BalancesInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.BalancesInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.BalancesInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.BalancesInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBtc();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.io.bisq.protobuffer.BtcBalanceInfo.serializeBinaryToWriter
    );
  }
  f = message.getXmr();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.io.bisq.protobuffer.XmrBalanceInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional BtcBalanceInfo btc = 1;
 * @return {?proto.io.bisq.protobuffer.BtcBalanceInfo}
 */
proto.io.bisq.protobuffer.BalancesInfo.prototype.getBtc = function() {
  return /** @type{?proto.io.bisq.protobuffer.BtcBalanceInfo} */ (
    jspb.Message.getWrapperField(this, proto.io.bisq.protobuffer.BtcBalanceInfo, 1));
};


/**
 * @param {?proto.io.bisq.protobuffer.BtcBalanceInfo|undefined} value
 * @return {!proto.io.bisq.protobuffer.BalancesInfo} returns this
*/
proto.io.bisq.protobuffer.BalancesInfo.prototype.setBtc = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.bisq.protobuffer.BalancesInfo} returns this
 */
proto.io.bisq.protobuffer.BalancesInfo.prototype.clearBtc = function() {
  return this.setBtc(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.bisq.protobuffer.BalancesInfo.prototype.hasBtc = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional XmrBalanceInfo xmr = 2;
 * @return {?proto.io.bisq.protobuffer.XmrBalanceInfo}
 */
proto.io.bisq.protobuffer.BalancesInfo.prototype.getXmr = function() {
  return /** @type{?proto.io.bisq.protobuffer.XmrBalanceInfo} */ (
    jspb.Message.getWrapperField(this, proto.io.bisq.protobuffer.XmrBalanceInfo, 2));
};


/**
 * @param {?proto.io.bisq.protobuffer.XmrBalanceInfo|undefined} value
 * @return {!proto.io.bisq.protobuffer.BalancesInfo} returns this
*/
proto.io.bisq.protobuffer.BalancesInfo.prototype.setXmr = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.bisq.protobuffer.BalancesInfo} returns this
 */
proto.io.bisq.protobuffer.BalancesInfo.prototype.clearXmr = function() {
  return this.setXmr(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.bisq.protobuffer.BalancesInfo.prototype.hasXmr = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.BtcBalanceInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.BtcBalanceInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.BtcBalanceInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.BtcBalanceInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    availableBalance: jspb.Message.getFieldWithDefault(msg, 1, 0),
    reservedBalance: jspb.Message.getFieldWithDefault(msg, 2, 0),
    totalAvailableBalance: jspb.Message.getFieldWithDefault(msg, 3, 0),
    lockedBalance: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.BtcBalanceInfo}
 */
proto.io.bisq.protobuffer.BtcBalanceInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.BtcBalanceInfo;
  return proto.io.bisq.protobuffer.BtcBalanceInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.BtcBalanceInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.BtcBalanceInfo}
 */
proto.io.bisq.protobuffer.BtcBalanceInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAvailableBalance(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setReservedBalance(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTotalAvailableBalance(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLockedBalance(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.BtcBalanceInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.BtcBalanceInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.BtcBalanceInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.BtcBalanceInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAvailableBalance();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getReservedBalance();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getTotalAvailableBalance();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getLockedBalance();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
};


/**
 * optional uint64 available_balance = 1;
 * @return {number}
 */
proto.io.bisq.protobuffer.BtcBalanceInfo.prototype.getAvailableBalance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.BtcBalanceInfo} returns this
 */
proto.io.bisq.protobuffer.BtcBalanceInfo.prototype.setAvailableBalance = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 reserved_balance = 2;
 * @return {number}
 */
proto.io.bisq.protobuffer.BtcBalanceInfo.prototype.getReservedBalance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.BtcBalanceInfo} returns this
 */
proto.io.bisq.protobuffer.BtcBalanceInfo.prototype.setReservedBalance = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 total_available_balance = 3;
 * @return {number}
 */
proto.io.bisq.protobuffer.BtcBalanceInfo.prototype.getTotalAvailableBalance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.BtcBalanceInfo} returns this
 */
proto.io.bisq.protobuffer.BtcBalanceInfo.prototype.setTotalAvailableBalance = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint64 locked_balance = 4;
 * @return {number}
 */
proto.io.bisq.protobuffer.BtcBalanceInfo.prototype.getLockedBalance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.BtcBalanceInfo} returns this
 */
proto.io.bisq.protobuffer.BtcBalanceInfo.prototype.setLockedBalance = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.XmrBalanceInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.XmrBalanceInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.XmrBalanceInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.XmrBalanceInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    unlockedBalance: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    lockedBalance: jspb.Message.getFieldWithDefault(msg, 2, "0"),
    reservedOfferBalance: jspb.Message.getFieldWithDefault(msg, 3, "0"),
    reservedTradeBalance: jspb.Message.getFieldWithDefault(msg, 4, "0")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.XmrBalanceInfo}
 */
proto.io.bisq.protobuffer.XmrBalanceInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.XmrBalanceInfo;
  return proto.io.bisq.protobuffer.XmrBalanceInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.XmrBalanceInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.XmrBalanceInfo}
 */
proto.io.bisq.protobuffer.XmrBalanceInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setUnlockedBalance(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setLockedBalance(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setReservedOfferBalance(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setReservedTradeBalance(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.XmrBalanceInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.XmrBalanceInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.XmrBalanceInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.XmrBalanceInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUnlockedBalance();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      1,
      f
    );
  }
  f = message.getLockedBalance();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      2,
      f
    );
  }
  f = message.getReservedOfferBalance();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      3,
      f
    );
  }
  f = message.getReservedTradeBalance();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      4,
      f
    );
  }
};


/**
 * optional uint64 unlocked_balance = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.XmrBalanceInfo.prototype.getUnlockedBalance = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.XmrBalanceInfo} returns this
 */
proto.io.bisq.protobuffer.XmrBalanceInfo.prototype.setUnlockedBalance = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional uint64 locked_balance = 2;
 * @return {string}
 */
proto.io.bisq.protobuffer.XmrBalanceInfo.prototype.getLockedBalance = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, "0"));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.XmrBalanceInfo} returns this
 */
proto.io.bisq.protobuffer.XmrBalanceInfo.prototype.setLockedBalance = function(value) {
  return jspb.Message.setProto3StringIntField(this, 2, value);
};


/**
 * optional uint64 reserved_offer_balance = 3;
 * @return {string}
 */
proto.io.bisq.protobuffer.XmrBalanceInfo.prototype.getReservedOfferBalance = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, "0"));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.XmrBalanceInfo} returns this
 */
proto.io.bisq.protobuffer.XmrBalanceInfo.prototype.setReservedOfferBalance = function(value) {
  return jspb.Message.setProto3StringIntField(this, 3, value);
};


/**
 * optional uint64 reserved_trade_balance = 4;
 * @return {string}
 */
proto.io.bisq.protobuffer.XmrBalanceInfo.prototype.getReservedTradeBalance = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, "0"));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.XmrBalanceInfo} returns this
 */
proto.io.bisq.protobuffer.XmrBalanceInfo.prototype.setReservedTradeBalance = function(value) {
  return jspb.Message.setProto3StringIntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.AddressBalanceInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.AddressBalanceInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.AddressBalanceInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.AddressBalanceInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, ""),
    balance: jspb.Message.getFieldWithDefault(msg, 2, 0),
    numConfirmations: jspb.Message.getFieldWithDefault(msg, 3, 0),
    isAddressUnused: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.AddressBalanceInfo}
 */
proto.io.bisq.protobuffer.AddressBalanceInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.AddressBalanceInfo;
  return proto.io.bisq.protobuffer.AddressBalanceInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.AddressBalanceInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.AddressBalanceInfo}
 */
proto.io.bisq.protobuffer.AddressBalanceInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setBalance(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setNumConfirmations(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsAddressUnused(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.AddressBalanceInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.AddressBalanceInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.AddressBalanceInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.AddressBalanceInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBalance();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getNumConfirmations();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getIsAddressUnused();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.AddressBalanceInfo.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.AddressBalanceInfo} returns this
 */
proto.io.bisq.protobuffer.AddressBalanceInfo.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 balance = 2;
 * @return {number}
 */
proto.io.bisq.protobuffer.AddressBalanceInfo.prototype.getBalance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.AddressBalanceInfo} returns this
 */
proto.io.bisq.protobuffer.AddressBalanceInfo.prototype.setBalance = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 num_confirmations = 3;
 * @return {number}
 */
proto.io.bisq.protobuffer.AddressBalanceInfo.prototype.getNumConfirmations = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.AddressBalanceInfo} returns this
 */
proto.io.bisq.protobuffer.AddressBalanceInfo.prototype.setNumConfirmations = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bool is_address_unused = 4;
 * @return {boolean}
 */
proto.io.bisq.protobuffer.AddressBalanceInfo.prototype.getIsAddressUnused = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.io.bisq.protobuffer.AddressBalanceInfo} returns this
 */
proto.io.bisq.protobuffer.AddressBalanceInfo.prototype.setIsAddressUnused = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetVersionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetVersionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetVersionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetVersionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetVersionRequest}
 */
proto.io.bisq.protobuffer.GetVersionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetVersionRequest;
  return proto.io.bisq.protobuffer.GetVersionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetVersionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetVersionRequest}
 */
proto.io.bisq.protobuffer.GetVersionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetVersionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetVersionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetVersionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetVersionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.bisq.protobuffer.GetVersionReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetVersionReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetVersionReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetVersionReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    version: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.bisq.protobuffer.GetVersionReply}
 */
proto.io.bisq.protobuffer.GetVersionReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetVersionReply;
  return proto.io.bisq.protobuffer.GetVersionReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetVersionReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetVersionReply}
 */
proto.io.bisq.protobuffer.GetVersionReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.bisq.protobuffer.GetVersionReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetVersionReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetVersionReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetVersionReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string version = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.GetVersionReply.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.GetVersionReply} returns this
 */
proto.io.bisq.protobuffer.GetVersionReply.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


goog.object.extend(exports, proto.io.bisq.protobuffer);
