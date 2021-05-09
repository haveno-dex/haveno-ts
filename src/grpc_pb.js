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
goog.exportSymbol('proto.io.bisq.protobuffer.BsqBalanceInfo', null, global);
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
goog.exportSymbol('proto.io.bisq.protobuffer.GetUnusedBsqAddressReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.GetUnusedBsqAddressRequest', null, global);
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
goog.exportSymbol('proto.io.bisq.protobuffer.SendBsqReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.SendBsqRequest', null, global);
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
goog.exportSymbol('proto.io.bisq.protobuffer.VerifyBsqSentToAddressReply', null, global);
goog.exportSymbol('proto.io.bisq.protobuffer.VerifyBsqSentToAddressRequest', null, global);
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
proto.io.bisq.protobuffer.GetUnusedBsqAddressRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetUnusedBsqAddressRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetUnusedBsqAddressRequest.displayName = 'proto.io.bisq.protobuffer.GetUnusedBsqAddressRequest';
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
proto.io.bisq.protobuffer.GetUnusedBsqAddressReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.GetUnusedBsqAddressReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.GetUnusedBsqAddressReply.displayName = 'proto.io.bisq.protobuffer.GetUnusedBsqAddressReply';
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
proto.io.bisq.protobuffer.SendBsqRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.SendBsqRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.SendBsqRequest.displayName = 'proto.io.bisq.protobuffer.SendBsqRequest';
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
proto.io.bisq.protobuffer.SendBsqReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.SendBsqReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.SendBsqReply.displayName = 'proto.io.bisq.protobuffer.SendBsqReply';
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
proto.io.bisq.protobuffer.VerifyBsqSentToAddressRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.VerifyBsqSentToAddressRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.VerifyBsqSentToAddressRequest.displayName = 'proto.io.bisq.protobuffer.VerifyBsqSentToAddressRequest';
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
proto.io.bisq.protobuffer.VerifyBsqSentToAddressReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.VerifyBsqSentToAddressReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.VerifyBsqSentToAddressReply.displayName = 'proto.io.bisq.protobuffer.VerifyBsqSentToAddressReply';
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
proto.io.bisq.protobuffer.BsqBalanceInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.bisq.protobuffer.BsqBalanceInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.bisq.protobuffer.BsqBalanceInfo.displayName = 'proto.io.bisq.protobuffer.BsqBalanceInfo';
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
    disputeagenttype: jspb.Message.getFieldWithDefault(msg, 1, ""),
    registrationkey: jspb.Message.getFieldWithDefault(msg, 2, "")
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
      msg.setDisputeagenttype(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRegistrationkey(value);
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
  f = message.getDisputeagenttype();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRegistrationkey();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string disputeAgentType = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.RegisterDisputeAgentRequest.prototype.getDisputeagenttype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.RegisterDisputeAgentRequest} returns this
 */
proto.io.bisq.protobuffer.RegisterDisputeAgentRequest.prototype.setDisputeagenttype = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string registrationKey = 2;
 * @return {string}
 */
proto.io.bisq.protobuffer.RegisterDisputeAgentRequest.prototype.getRegistrationkey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.RegisterDisputeAgentRequest} returns this
 */
proto.io.bisq.protobuffer.RegisterDisputeAgentRequest.prototype.setRegistrationkey = function(value) {
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
    methodname: jspb.Message.getFieldWithDefault(msg, 1, "")
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
      msg.setMethodname(value);
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
  f = message.getMethodname();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string methodName = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.GetMethodHelpRequest.prototype.getMethodname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.GetMethodHelpRequest} returns this
 */
proto.io.bisq.protobuffer.GetMethodHelpRequest.prototype.setMethodname = function(value) {
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
    methodhelp: jspb.Message.getFieldWithDefault(msg, 1, "")
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
      msg.setMethodhelp(value);
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
  f = message.getMethodhelp();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string methodHelp = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.GetMethodHelpReply.prototype.getMethodhelp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.GetMethodHelpReply} returns this
 */
proto.io.bisq.protobuffer.GetMethodHelpReply.prototype.setMethodhelp = function(value) {
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
    currencycode: jspb.Message.getFieldWithDefault(msg, 2, "")
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
      msg.setCurrencycode(value);
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
  f = message.getCurrencycode();
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
 * optional string currencyCode = 2;
 * @return {string}
 */
proto.io.bisq.protobuffer.GetOffersRequest.prototype.getCurrencycode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.GetOffersRequest} returns this
 */
proto.io.bisq.protobuffer.GetOffersRequest.prototype.setCurrencycode = function(value) {
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
    currencycode: jspb.Message.getFieldWithDefault(msg, 2, "")
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
      msg.setCurrencycode(value);
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
  f = message.getCurrencycode();
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
 * optional string currencyCode = 2;
 * @return {string}
 */
proto.io.bisq.protobuffer.GetMyOffersRequest.prototype.getCurrencycode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.GetMyOffersRequest} returns this
 */
proto.io.bisq.protobuffer.GetMyOffersRequest.prototype.setCurrencycode = function(value) {
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
    currencycode: jspb.Message.getFieldWithDefault(msg, 1, ""),
    direction: jspb.Message.getFieldWithDefault(msg, 2, ""),
    price: jspb.Message.getFieldWithDefault(msg, 3, ""),
    usemarketbasedprice: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    marketpricemargin: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    amount: jspb.Message.getFieldWithDefault(msg, 6, 0),
    minamount: jspb.Message.getFieldWithDefault(msg, 7, 0),
    buyersecuritydeposit: jspb.Message.getFloatingPointFieldWithDefault(msg, 8, 0.0),
    triggerprice: jspb.Message.getFieldWithDefault(msg, 9, 0),
    paymentaccountid: jspb.Message.getFieldWithDefault(msg, 10, ""),
    makerfeecurrencycode: jspb.Message.getFieldWithDefault(msg, 11, "")
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
      msg.setCurrencycode(value);
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
      msg.setUsemarketbasedprice(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMarketpricemargin(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAmount(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMinamount(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setBuyersecuritydeposit(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTriggerprice(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaymentaccountid(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setMakerfeecurrencycode(value);
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
  f = message.getCurrencycode();
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
  f = message.getUsemarketbasedprice();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getMarketpricemargin();
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
  f = message.getMinamount();
  if (f !== 0) {
    writer.writeUint64(
      7,
      f
    );
  }
  f = message.getBuyersecuritydeposit();
  if (f !== 0.0) {
    writer.writeDouble(
      8,
      f
    );
  }
  f = message.getTriggerprice();
  if (f !== 0) {
    writer.writeUint64(
      9,
      f
    );
  }
  f = message.getPaymentaccountid();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getMakerfeecurrencycode();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
};


/**
 * optional string currencyCode = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.CreateOfferRequest.prototype.getCurrencycode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.CreateOfferRequest} returns this
 */
proto.io.bisq.protobuffer.CreateOfferRequest.prototype.setCurrencycode = function(value) {
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
 * optional bool useMarketBasedPrice = 4;
 * @return {boolean}
 */
proto.io.bisq.protobuffer.CreateOfferRequest.prototype.getUsemarketbasedprice = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.io.bisq.protobuffer.CreateOfferRequest} returns this
 */
proto.io.bisq.protobuffer.CreateOfferRequest.prototype.setUsemarketbasedprice = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional double marketPriceMargin = 5;
 * @return {number}
 */
proto.io.bisq.protobuffer.CreateOfferRequest.prototype.getMarketpricemargin = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.CreateOfferRequest} returns this
 */
proto.io.bisq.protobuffer.CreateOfferRequest.prototype.setMarketpricemargin = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional uint64 amount = 6;
 * @return {number}
 */
proto.io.bisq.protobuffer.CreateOfferRequest.prototype.getAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.CreateOfferRequest} returns this
 */
proto.io.bisq.protobuffer.CreateOfferRequest.prototype.setAmount = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional uint64 minAmount = 7;
 * @return {number}
 */
proto.io.bisq.protobuffer.CreateOfferRequest.prototype.getMinamount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.CreateOfferRequest} returns this
 */
proto.io.bisq.protobuffer.CreateOfferRequest.prototype.setMinamount = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional double buyerSecurityDeposit = 8;
 * @return {number}
 */
proto.io.bisq.protobuffer.CreateOfferRequest.prototype.getBuyersecuritydeposit = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.CreateOfferRequest} returns this
 */
proto.io.bisq.protobuffer.CreateOfferRequest.prototype.setBuyersecuritydeposit = function(value) {
  return jspb.Message.setProto3FloatField(this, 8, value);
};


/**
 * optional uint64 triggerPrice = 9;
 * @return {number}
 */
proto.io.bisq.protobuffer.CreateOfferRequest.prototype.getTriggerprice = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.CreateOfferRequest} returns this
 */
proto.io.bisq.protobuffer.CreateOfferRequest.prototype.setTriggerprice = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional string paymentAccountId = 10;
 * @return {string}
 */
proto.io.bisq.protobuffer.CreateOfferRequest.prototype.getPaymentaccountid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.CreateOfferRequest} returns this
 */
proto.io.bisq.protobuffer.CreateOfferRequest.prototype.setPaymentaccountid = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string makerFeeCurrencyCode = 11;
 * @return {string}
 */
proto.io.bisq.protobuffer.CreateOfferRequest.prototype.getMakerfeecurrencycode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.CreateOfferRequest} returns this
 */
proto.io.bisq.protobuffer.CreateOfferRequest.prototype.setMakerfeecurrencycode = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
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
    usemarketbasedprice: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    marketpricemargin: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    amount: jspb.Message.getFieldWithDefault(msg, 6, 0),
    minamount: jspb.Message.getFieldWithDefault(msg, 7, 0),
    volume: jspb.Message.getFieldWithDefault(msg, 8, 0),
    minvolume: jspb.Message.getFieldWithDefault(msg, 9, 0),
    buyersecuritydeposit: jspb.Message.getFieldWithDefault(msg, 10, 0),
    triggerprice: jspb.Message.getFieldWithDefault(msg, 11, 0),
    iscurrencyformakerfeebtc: jspb.Message.getBooleanFieldWithDefault(msg, 12, false),
    paymentaccountid: jspb.Message.getFieldWithDefault(msg, 13, ""),
    paymentmethodid: jspb.Message.getFieldWithDefault(msg, 14, ""),
    paymentmethodshortname: jspb.Message.getFieldWithDefault(msg, 15, ""),
    basecurrencycode: jspb.Message.getFieldWithDefault(msg, 16, ""),
    countercurrencycode: jspb.Message.getFieldWithDefault(msg, 17, ""),
    date: jspb.Message.getFieldWithDefault(msg, 18, 0),
    state: jspb.Message.getFieldWithDefault(msg, 19, ""),
    sellersecuritydeposit: jspb.Message.getFieldWithDefault(msg, 20, 0),
    offerfeepaymenttxid: jspb.Message.getFieldWithDefault(msg, 21, ""),
    txfee: jspb.Message.getFieldWithDefault(msg, 22, 0),
    makerfee: jspb.Message.getFieldWithDefault(msg, 23, 0)
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
      msg.setUsemarketbasedprice(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMarketpricemargin(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAmount(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMinamount(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setVolume(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMinvolume(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setBuyersecuritydeposit(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTriggerprice(value);
      break;
    case 12:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIscurrencyformakerfeebtc(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaymentaccountid(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaymentmethodid(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaymentmethodshortname(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setBasecurrencycode(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.setCountercurrencycode(value);
      break;
    case 18:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setDate(value);
      break;
    case 19:
      var value = /** @type {string} */ (reader.readString());
      msg.setState(value);
      break;
    case 20:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSellersecuritydeposit(value);
      break;
    case 21:
      var value = /** @type {string} */ (reader.readString());
      msg.setOfferfeepaymenttxid(value);
      break;
    case 22:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTxfee(value);
      break;
    case 23:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMakerfee(value);
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
  f = message.getUsemarketbasedprice();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getMarketpricemargin();
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
  f = message.getMinamount();
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
  f = message.getMinvolume();
  if (f !== 0) {
    writer.writeUint64(
      9,
      f
    );
  }
  f = message.getBuyersecuritydeposit();
  if (f !== 0) {
    writer.writeUint64(
      10,
      f
    );
  }
  f = message.getTriggerprice();
  if (f !== 0) {
    writer.writeUint64(
      11,
      f
    );
  }
  f = message.getIscurrencyformakerfeebtc();
  if (f) {
    writer.writeBool(
      12,
      f
    );
  }
  f = message.getPaymentaccountid();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getPaymentmethodid();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getPaymentmethodshortname();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
  f = message.getBasecurrencycode();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getCountercurrencycode();
  if (f.length > 0) {
    writer.writeString(
      17,
      f
    );
  }
  f = message.getDate();
  if (f !== 0) {
    writer.writeUint64(
      18,
      f
    );
  }
  f = message.getState();
  if (f.length > 0) {
    writer.writeString(
      19,
      f
    );
  }
  f = message.getSellersecuritydeposit();
  if (f !== 0) {
    writer.writeUint64(
      20,
      f
    );
  }
  f = message.getOfferfeepaymenttxid();
  if (f.length > 0) {
    writer.writeString(
      21,
      f
    );
  }
  f = message.getTxfee();
  if (f !== 0) {
    writer.writeUint64(
      22,
      f
    );
  }
  f = message.getMakerfee();
  if (f !== 0) {
    writer.writeUint64(
      23,
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
 * optional bool useMarketBasedPrice = 4;
 * @return {boolean}
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.getUsemarketbasedprice = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.io.bisq.protobuffer.OfferInfo} returns this
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.setUsemarketbasedprice = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional double marketPriceMargin = 5;
 * @return {number}
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.getMarketpricemargin = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.OfferInfo} returns this
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.setMarketpricemargin = function(value) {
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
 * optional uint64 minAmount = 7;
 * @return {number}
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.getMinamount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.OfferInfo} returns this
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.setMinamount = function(value) {
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
 * optional uint64 minVolume = 9;
 * @return {number}
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.getMinvolume = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.OfferInfo} returns this
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.setMinvolume = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional uint64 buyerSecurityDeposit = 10;
 * @return {number}
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.getBuyersecuritydeposit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.OfferInfo} returns this
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.setBuyersecuritydeposit = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional uint64 triggerPrice = 11;
 * @return {number}
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.getTriggerprice = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.OfferInfo} returns this
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.setTriggerprice = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional bool isCurrencyForMakerFeeBtc = 12;
 * @return {boolean}
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.getIscurrencyformakerfeebtc = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 12, false));
};


/**
 * @param {boolean} value
 * @return {!proto.io.bisq.protobuffer.OfferInfo} returns this
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.setIscurrencyformakerfeebtc = function(value) {
  return jspb.Message.setProto3BooleanField(this, 12, value);
};


/**
 * optional string paymentAccountId = 13;
 * @return {string}
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.getPaymentaccountid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.OfferInfo} returns this
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.setPaymentaccountid = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional string paymentMethodId = 14;
 * @return {string}
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.getPaymentmethodid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.OfferInfo} returns this
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.setPaymentmethodid = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional string paymentMethodShortName = 15;
 * @return {string}
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.getPaymentmethodshortname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.OfferInfo} returns this
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.setPaymentmethodshortname = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};


/**
 * optional string baseCurrencyCode = 16;
 * @return {string}
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.getBasecurrencycode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.OfferInfo} returns this
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.setBasecurrencycode = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * optional string counterCurrencyCode = 17;
 * @return {string}
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.getCountercurrencycode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.OfferInfo} returns this
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.setCountercurrencycode = function(value) {
  return jspb.Message.setProto3StringField(this, 17, value);
};


/**
 * optional uint64 date = 18;
 * @return {number}
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.getDate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 18, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.OfferInfo} returns this
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.setDate = function(value) {
  return jspb.Message.setProto3IntField(this, 18, value);
};


/**
 * optional string state = 19;
 * @return {string}
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.getState = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 19, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.OfferInfo} returns this
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.setState = function(value) {
  return jspb.Message.setProto3StringField(this, 19, value);
};


/**
 * optional uint64 sellerSecurityDeposit = 20;
 * @return {number}
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.getSellersecuritydeposit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 20, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.OfferInfo} returns this
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.setSellersecuritydeposit = function(value) {
  return jspb.Message.setProto3IntField(this, 20, value);
};


/**
 * optional string offerFeePaymentTxId = 21;
 * @return {string}
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.getOfferfeepaymenttxid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 21, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.OfferInfo} returns this
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.setOfferfeepaymenttxid = function(value) {
  return jspb.Message.setProto3StringField(this, 21, value);
};


/**
 * optional uint64 txFee = 22;
 * @return {number}
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.getTxfee = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 22, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.OfferInfo} returns this
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.setTxfee = function(value) {
  return jspb.Message.setProto3IntField(this, 22, value);
};


/**
 * optional uint64 makerFee = 23;
 * @return {number}
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.getMakerfee = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 23, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.OfferInfo} returns this
 */
proto.io.bisq.protobuffer.OfferInfo.prototype.setMakerfee = function(value) {
  return jspb.Message.setProto3IntField(this, 23, value);
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
    availabilityresult: jspb.Message.getFieldWithDefault(msg, 1, 0),
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
      msg.setAvailabilityresult(value);
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
  f = message.getAvailabilityresult();
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
 * optional AvailabilityResult availabilityResult = 1;
 * @return {!proto.io.bisq.protobuffer.AvailabilityResult}
 */
proto.io.bisq.protobuffer.AvailabilityResultWithDescription.prototype.getAvailabilityresult = function() {
  return /** @type {!proto.io.bisq.protobuffer.AvailabilityResult} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.io.bisq.protobuffer.AvailabilityResult} value
 * @return {!proto.io.bisq.protobuffer.AvailabilityResultWithDescription} returns this
 */
proto.io.bisq.protobuffer.AvailabilityResultWithDescription.prototype.setAvailabilityresult = function(value) {
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
    paymentaccountform: jspb.Message.getFieldWithDefault(msg, 1, "")
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
      msg.setPaymentaccountform(value);
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
  f = message.getPaymentaccountform();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string paymentAccountForm = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.CreatePaymentAccountRequest.prototype.getPaymentaccountform = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.CreatePaymentAccountRequest} returns this
 */
proto.io.bisq.protobuffer.CreatePaymentAccountRequest.prototype.setPaymentaccountform = function(value) {
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
    paymentaccount: (f = msg.getPaymentaccount()) && pb_pb.PaymentAccount.toObject(includeInstance, f)
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
      msg.setPaymentaccount(value);
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
  f = message.getPaymentaccount();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      pb_pb.PaymentAccount.serializeBinaryToWriter
    );
  }
};


/**
 * optional PaymentAccount paymentAccount = 1;
 * @return {?proto.io.bisq.protobuffer.PaymentAccount}
 */
proto.io.bisq.protobuffer.CreatePaymentAccountReply.prototype.getPaymentaccount = function() {
  return /** @type{?proto.io.bisq.protobuffer.PaymentAccount} */ (
    jspb.Message.getWrapperField(this, pb_pb.PaymentAccount, 1));
};


/**
 * @param {?proto.io.bisq.protobuffer.PaymentAccount|undefined} value
 * @return {!proto.io.bisq.protobuffer.CreatePaymentAccountReply} returns this
*/
proto.io.bisq.protobuffer.CreatePaymentAccountReply.prototype.setPaymentaccount = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.bisq.protobuffer.CreatePaymentAccountReply} returns this
 */
proto.io.bisq.protobuffer.CreatePaymentAccountReply.prototype.clearPaymentaccount = function() {
  return this.setPaymentaccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.bisq.protobuffer.CreatePaymentAccountReply.prototype.hasPaymentaccount = function() {
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
    paymentaccountsList: jspb.Message.toObjectList(msg.getPaymentaccountsList(),
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
      msg.addPaymentaccounts(value);
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
  f = message.getPaymentaccountsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      pb_pb.PaymentAccount.serializeBinaryToWriter
    );
  }
};


/**
 * repeated PaymentAccount paymentAccounts = 1;
 * @return {!Array<!proto.io.bisq.protobuffer.PaymentAccount>}
 */
proto.io.bisq.protobuffer.GetPaymentAccountsReply.prototype.getPaymentaccountsList = function() {
  return /** @type{!Array<!proto.io.bisq.protobuffer.PaymentAccount>} */ (
    jspb.Message.getRepeatedWrapperField(this, pb_pb.PaymentAccount, 1));
};


/**
 * @param {!Array<!proto.io.bisq.protobuffer.PaymentAccount>} value
 * @return {!proto.io.bisq.protobuffer.GetPaymentAccountsReply} returns this
*/
proto.io.bisq.protobuffer.GetPaymentAccountsReply.prototype.setPaymentaccountsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.io.bisq.protobuffer.PaymentAccount=} opt_value
 * @param {number=} opt_index
 * @return {!proto.io.bisq.protobuffer.PaymentAccount}
 */
proto.io.bisq.protobuffer.GetPaymentAccountsReply.prototype.addPaymentaccounts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.io.bisq.protobuffer.PaymentAccount, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.io.bisq.protobuffer.GetPaymentAccountsReply} returns this
 */
proto.io.bisq.protobuffer.GetPaymentAccountsReply.prototype.clearPaymentaccountsList = function() {
  return this.setPaymentaccountsList([]);
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
    paymentmethodsList: jspb.Message.toObjectList(msg.getPaymentmethodsList(),
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
      msg.addPaymentmethods(value);
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
  f = message.getPaymentmethodsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      pb_pb.PaymentMethod.serializeBinaryToWriter
    );
  }
};


/**
 * repeated PaymentMethod paymentMethods = 1;
 * @return {!Array<!proto.io.bisq.protobuffer.PaymentMethod>}
 */
proto.io.bisq.protobuffer.GetPaymentMethodsReply.prototype.getPaymentmethodsList = function() {
  return /** @type{!Array<!proto.io.bisq.protobuffer.PaymentMethod>} */ (
    jspb.Message.getRepeatedWrapperField(this, pb_pb.PaymentMethod, 1));
};


/**
 * @param {!Array<!proto.io.bisq.protobuffer.PaymentMethod>} value
 * @return {!proto.io.bisq.protobuffer.GetPaymentMethodsReply} returns this
*/
proto.io.bisq.protobuffer.GetPaymentMethodsReply.prototype.setPaymentmethodsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.io.bisq.protobuffer.PaymentMethod=} opt_value
 * @param {number=} opt_index
 * @return {!proto.io.bisq.protobuffer.PaymentMethod}
 */
proto.io.bisq.protobuffer.GetPaymentMethodsReply.prototype.addPaymentmethods = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.io.bisq.protobuffer.PaymentMethod, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.io.bisq.protobuffer.GetPaymentMethodsReply} returns this
 */
proto.io.bisq.protobuffer.GetPaymentMethodsReply.prototype.clearPaymentmethodsList = function() {
  return this.setPaymentmethodsList([]);
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
    paymentmethodid: jspb.Message.getFieldWithDefault(msg, 1, "")
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
      msg.setPaymentmethodid(value);
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
  f = message.getPaymentmethodid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string paymentMethodId = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.GetPaymentAccountFormRequest.prototype.getPaymentmethodid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.GetPaymentAccountFormRequest} returns this
 */
proto.io.bisq.protobuffer.GetPaymentAccountFormRequest.prototype.setPaymentmethodid = function(value) {
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
    paymentaccountformjson: jspb.Message.getFieldWithDefault(msg, 1, "")
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
      msg.setPaymentaccountformjson(value);
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
  f = message.getPaymentaccountformjson();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string paymentAccountFormJson = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.GetPaymentAccountFormReply.prototype.getPaymentaccountformjson = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.GetPaymentAccountFormReply} returns this
 */
proto.io.bisq.protobuffer.GetPaymentAccountFormReply.prototype.setPaymentaccountformjson = function(value) {
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
    accountname: jspb.Message.getFieldWithDefault(msg, 1, ""),
    currencycode: jspb.Message.getFieldWithDefault(msg, 2, ""),
    address: jspb.Message.getFieldWithDefault(msg, 3, ""),
    tradeinstant: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
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
      msg.setAccountname(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrencycode(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setTradeinstant(value);
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
  f = message.getAccountname();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCurrencycode();
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
  f = message.getTradeinstant();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional string accountName = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest.prototype.getAccountname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest} returns this
 */
proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest.prototype.setAccountname = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string currencyCode = 2;
 * @return {string}
 */
proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest.prototype.getCurrencycode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest} returns this
 */
proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest.prototype.setCurrencycode = function(value) {
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
 * optional bool tradeInstant = 4;
 * @return {boolean}
 */
proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest.prototype.getTradeinstant = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest} returns this
 */
proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest.prototype.setTradeinstant = function(value) {
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
    paymentaccount: (f = msg.getPaymentaccount()) && pb_pb.PaymentAccount.toObject(includeInstance, f)
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
      msg.setPaymentaccount(value);
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
  f = message.getPaymentaccount();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      pb_pb.PaymentAccount.serializeBinaryToWriter
    );
  }
};


/**
 * optional PaymentAccount paymentAccount = 1;
 * @return {?proto.io.bisq.protobuffer.PaymentAccount}
 */
proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountReply.prototype.getPaymentaccount = function() {
  return /** @type{?proto.io.bisq.protobuffer.PaymentAccount} */ (
    jspb.Message.getWrapperField(this, pb_pb.PaymentAccount, 1));
};


/**
 * @param {?proto.io.bisq.protobuffer.PaymentAccount|undefined} value
 * @return {!proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountReply} returns this
*/
proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountReply.prototype.setPaymentaccount = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountReply} returns this
 */
proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountReply.prototype.clearPaymentaccount = function() {
  return this.setPaymentaccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountReply.prototype.hasPaymentaccount = function() {
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
    paymentmethodsList: jspb.Message.toObjectList(msg.getPaymentmethodsList(),
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
      msg.addPaymentmethods(value);
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
  f = message.getPaymentmethodsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      pb_pb.PaymentMethod.serializeBinaryToWriter
    );
  }
};


/**
 * repeated PaymentMethod paymentMethods = 1;
 * @return {!Array<!proto.io.bisq.protobuffer.PaymentMethod>}
 */
proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsReply.prototype.getPaymentmethodsList = function() {
  return /** @type{!Array<!proto.io.bisq.protobuffer.PaymentMethod>} */ (
    jspb.Message.getRepeatedWrapperField(this, pb_pb.PaymentMethod, 1));
};


/**
 * @param {!Array<!proto.io.bisq.protobuffer.PaymentMethod>} value
 * @return {!proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsReply} returns this
*/
proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsReply.prototype.setPaymentmethodsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.io.bisq.protobuffer.PaymentMethod=} opt_value
 * @param {number=} opt_index
 * @return {!proto.io.bisq.protobuffer.PaymentMethod}
 */
proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsReply.prototype.addPaymentmethods = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.io.bisq.protobuffer.PaymentMethod, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsReply} returns this
 */
proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsReply.prototype.clearPaymentmethodsList = function() {
  return this.setPaymentmethodsList([]);
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
    currencycode: jspb.Message.getFieldWithDefault(msg, 1, "")
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
      msg.setCurrencycode(value);
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
  f = message.getCurrencycode();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string currencyCode = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.MarketPriceRequest.prototype.getCurrencycode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.MarketPriceRequest} returns this
 */
proto.io.bisq.protobuffer.MarketPriceRequest.prototype.setCurrencycode = function(value) {
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
    tradestatisticsList: jspb.Message.toObjectList(msg.getTradestatisticsList(),
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
      msg.addTradestatistics(value);
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
  f = message.getTradestatisticsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      pb_pb.TradeStatistics3.serializeBinaryToWriter
    );
  }
};


/**
 * repeated TradeStatistics3 TradeStatistics = 1;
 * @return {!Array<!proto.io.bisq.protobuffer.TradeStatistics3>}
 */
proto.io.bisq.protobuffer.GetTradeStatisticsReply.prototype.getTradestatisticsList = function() {
  return /** @type{!Array<!proto.io.bisq.protobuffer.TradeStatistics3>} */ (
    jspb.Message.getRepeatedWrapperField(this, pb_pb.TradeStatistics3, 1));
};


/**
 * @param {!Array<!proto.io.bisq.protobuffer.TradeStatistics3>} value
 * @return {!proto.io.bisq.protobuffer.GetTradeStatisticsReply} returns this
*/
proto.io.bisq.protobuffer.GetTradeStatisticsReply.prototype.setTradestatisticsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.io.bisq.protobuffer.TradeStatistics3=} opt_value
 * @param {number=} opt_index
 * @return {!proto.io.bisq.protobuffer.TradeStatistics3}
 */
proto.io.bisq.protobuffer.GetTradeStatisticsReply.prototype.addTradestatistics = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.io.bisq.protobuffer.TradeStatistics3, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.io.bisq.protobuffer.GetTradeStatisticsReply} returns this
 */
proto.io.bisq.protobuffer.GetTradeStatisticsReply.prototype.clearTradestatisticsList = function() {
  return this.setTradestatisticsList([]);
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
    offerid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    paymentaccountid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    takerfeecurrencycode: jspb.Message.getFieldWithDefault(msg, 3, "")
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
      msg.setOfferid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaymentaccountid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTakerfeecurrencycode(value);
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
  f = message.getOfferid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPaymentaccountid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTakerfeecurrencycode();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string offerId = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.TakeOfferRequest.prototype.getOfferid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.TakeOfferRequest} returns this
 */
proto.io.bisq.protobuffer.TakeOfferRequest.prototype.setOfferid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string paymentAccountId = 2;
 * @return {string}
 */
proto.io.bisq.protobuffer.TakeOfferRequest.prototype.getPaymentaccountid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.TakeOfferRequest} returns this
 */
proto.io.bisq.protobuffer.TakeOfferRequest.prototype.setPaymentaccountid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string takerFeeCurrencyCode = 3;
 * @return {string}
 */
proto.io.bisq.protobuffer.TakeOfferRequest.prototype.getTakerfeecurrencycode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.TakeOfferRequest} returns this
 */
proto.io.bisq.protobuffer.TakeOfferRequest.prototype.setTakerfeecurrencycode = function(value) {
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
    failurereason: (f = msg.getFailurereason()) && proto.io.bisq.protobuffer.AvailabilityResultWithDescription.toObject(includeInstance, f)
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
      msg.setFailurereason(value);
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
  f = message.getFailurereason();
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
 * optional AvailabilityResultWithDescription failureReason = 2;
 * @return {?proto.io.bisq.protobuffer.AvailabilityResultWithDescription}
 */
proto.io.bisq.protobuffer.TakeOfferReply.prototype.getFailurereason = function() {
  return /** @type{?proto.io.bisq.protobuffer.AvailabilityResultWithDescription} */ (
    jspb.Message.getWrapperField(this, proto.io.bisq.protobuffer.AvailabilityResultWithDescription, 2));
};


/**
 * @param {?proto.io.bisq.protobuffer.AvailabilityResultWithDescription|undefined} value
 * @return {!proto.io.bisq.protobuffer.TakeOfferReply} returns this
*/
proto.io.bisq.protobuffer.TakeOfferReply.prototype.setFailurereason = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.bisq.protobuffer.TakeOfferReply} returns this
 */
proto.io.bisq.protobuffer.TakeOfferReply.prototype.clearFailurereason = function() {
  return this.setFailurereason(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.bisq.protobuffer.TakeOfferReply.prototype.hasFailurereason = function() {
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
    tradeid: jspb.Message.getFieldWithDefault(msg, 1, "")
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
      msg.setTradeid(value);
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
  f = message.getTradeid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string tradeId = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.ConfirmPaymentStartedRequest.prototype.getTradeid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.ConfirmPaymentStartedRequest} returns this
 */
proto.io.bisq.protobuffer.ConfirmPaymentStartedRequest.prototype.setTradeid = function(value) {
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
    tradeid: jspb.Message.getFieldWithDefault(msg, 1, "")
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
      msg.setTradeid(value);
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
  f = message.getTradeid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string tradeId = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.ConfirmPaymentReceivedRequest.prototype.getTradeid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.ConfirmPaymentReceivedRequest} returns this
 */
proto.io.bisq.protobuffer.ConfirmPaymentReceivedRequest.prototype.setTradeid = function(value) {
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
    tradeid: jspb.Message.getFieldWithDefault(msg, 1, "")
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
      msg.setTradeid(value);
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
  f = message.getTradeid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string tradeId = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.GetTradeRequest.prototype.getTradeid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.GetTradeRequest} returns this
 */
proto.io.bisq.protobuffer.GetTradeRequest.prototype.setTradeid = function(value) {
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
    tradeid: jspb.Message.getFieldWithDefault(msg, 1, "")
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
      msg.setTradeid(value);
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
  f = message.getTradeid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string tradeId = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.KeepFundsRequest.prototype.getTradeid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.KeepFundsRequest} returns this
 */
proto.io.bisq.protobuffer.KeepFundsRequest.prototype.setTradeid = function(value) {
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
    tradeid: jspb.Message.getFieldWithDefault(msg, 1, ""),
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
      msg.setTradeid(value);
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
  f = message.getTradeid();
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
 * optional string tradeId = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.WithdrawFundsRequest.prototype.getTradeid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.WithdrawFundsRequest} returns this
 */
proto.io.bisq.protobuffer.WithdrawFundsRequest.prototype.setTradeid = function(value) {
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
    tradeid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    shortid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    date: jspb.Message.getFieldWithDefault(msg, 4, 0),
    role: jspb.Message.getFieldWithDefault(msg, 5, ""),
    txfeeaslong: jspb.Message.getFieldWithDefault(msg, 7, 0),
    takerfeeaslong: jspb.Message.getFieldWithDefault(msg, 8, 0),
    takerfeetxid: jspb.Message.getFieldWithDefault(msg, 9, ""),
    payouttxid: jspb.Message.getFieldWithDefault(msg, 11, ""),
    tradeamountaslong: jspb.Message.getFieldWithDefault(msg, 12, 0),
    tradeprice: jspb.Message.getFieldWithDefault(msg, 13, 0),
    tradingpeernodeaddress: jspb.Message.getFieldWithDefault(msg, 14, ""),
    state: jspb.Message.getFieldWithDefault(msg, 15, ""),
    phase: jspb.Message.getFieldWithDefault(msg, 16, ""),
    tradeperiodstate: jspb.Message.getFieldWithDefault(msg, 17, ""),
    isdepositpublished: jspb.Message.getBooleanFieldWithDefault(msg, 18, false),
    isdepositconfirmed: jspb.Message.getBooleanFieldWithDefault(msg, 19, false),
    isfiatsent: jspb.Message.getBooleanFieldWithDefault(msg, 20, false),
    isfiatreceived: jspb.Message.getBooleanFieldWithDefault(msg, 21, false),
    ispayoutpublished: jspb.Message.getBooleanFieldWithDefault(msg, 22, false),
    iswithdrawn: jspb.Message.getBooleanFieldWithDefault(msg, 23, false),
    contractasjson: jspb.Message.getFieldWithDefault(msg, 24, ""),
    contract: (f = msg.getContract()) && proto.io.bisq.protobuffer.ContractInfo.toObject(includeInstance, f),
    makerdeposittxid: jspb.Message.getFieldWithDefault(msg, 100, ""),
    takerdeposittxid: jspb.Message.getFieldWithDefault(msg, 101, "")
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
      msg.setTradeid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setShortid(value);
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
      msg.setTxfeeaslong(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTakerfeeaslong(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setTakerfeetxid(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setPayouttxid(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTradeamountaslong(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTradeprice(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setTradingpeernodeaddress(value);
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
      msg.setTradeperiodstate(value);
      break;
    case 18:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsdepositpublished(value);
      break;
    case 19:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsdepositconfirmed(value);
      break;
    case 20:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsfiatsent(value);
      break;
    case 21:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsfiatreceived(value);
      break;
    case 22:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIspayoutpublished(value);
      break;
    case 23:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIswithdrawn(value);
      break;
    case 24:
      var value = /** @type {string} */ (reader.readString());
      msg.setContractasjson(value);
      break;
    case 25:
      var value = new proto.io.bisq.protobuffer.ContractInfo;
      reader.readMessage(value,proto.io.bisq.protobuffer.ContractInfo.deserializeBinaryFromReader);
      msg.setContract(value);
      break;
    case 100:
      var value = /** @type {string} */ (reader.readString());
      msg.setMakerdeposittxid(value);
      break;
    case 101:
      var value = /** @type {string} */ (reader.readString());
      msg.setTakerdeposittxid(value);
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
  f = message.getTradeid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getShortid();
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
  f = message.getTxfeeaslong();
  if (f !== 0) {
    writer.writeUint64(
      7,
      f
    );
  }
  f = message.getTakerfeeaslong();
  if (f !== 0) {
    writer.writeUint64(
      8,
      f
    );
  }
  f = message.getTakerfeetxid();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getPayouttxid();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getTradeamountaslong();
  if (f !== 0) {
    writer.writeUint64(
      12,
      f
    );
  }
  f = message.getTradeprice();
  if (f !== 0) {
    writer.writeUint64(
      13,
      f
    );
  }
  f = message.getTradingpeernodeaddress();
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
  f = message.getTradeperiodstate();
  if (f.length > 0) {
    writer.writeString(
      17,
      f
    );
  }
  f = message.getIsdepositpublished();
  if (f) {
    writer.writeBool(
      18,
      f
    );
  }
  f = message.getIsdepositconfirmed();
  if (f) {
    writer.writeBool(
      19,
      f
    );
  }
  f = message.getIsfiatsent();
  if (f) {
    writer.writeBool(
      20,
      f
    );
  }
  f = message.getIsfiatreceived();
  if (f) {
    writer.writeBool(
      21,
      f
    );
  }
  f = message.getIspayoutpublished();
  if (f) {
    writer.writeBool(
      22,
      f
    );
  }
  f = message.getIswithdrawn();
  if (f) {
    writer.writeBool(
      23,
      f
    );
  }
  f = message.getContractasjson();
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
  f = message.getMakerdeposittxid();
  if (f.length > 0) {
    writer.writeString(
      100,
      f
    );
  }
  f = message.getTakerdeposittxid();
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
 * optional string tradeId = 2;
 * @return {string}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.getTradeid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.TradeInfo} returns this
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.setTradeid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string shortId = 3;
 * @return {string}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.getShortid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.TradeInfo} returns this
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.setShortid = function(value) {
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
 * optional uint64 txFeeAsLong = 7;
 * @return {number}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.getTxfeeaslong = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.TradeInfo} returns this
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.setTxfeeaslong = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional uint64 takerFeeAsLong = 8;
 * @return {number}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.getTakerfeeaslong = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.TradeInfo} returns this
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.setTakerfeeaslong = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional string takerFeeTxId = 9;
 * @return {string}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.getTakerfeetxid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.TradeInfo} returns this
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.setTakerfeetxid = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string payoutTxId = 11;
 * @return {string}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.getPayouttxid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.TradeInfo} returns this
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.setPayouttxid = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional uint64 tradeAmountAsLong = 12;
 * @return {number}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.getTradeamountaslong = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.TradeInfo} returns this
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.setTradeamountaslong = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional uint64 tradePrice = 13;
 * @return {number}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.getTradeprice = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.TradeInfo} returns this
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.setTradeprice = function(value) {
  return jspb.Message.setProto3IntField(this, 13, value);
};


/**
 * optional string tradingPeerNodeAddress = 14;
 * @return {string}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.getTradingpeernodeaddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.TradeInfo} returns this
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.setTradingpeernodeaddress = function(value) {
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
 * optional string tradePeriodState = 17;
 * @return {string}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.getTradeperiodstate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.TradeInfo} returns this
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.setTradeperiodstate = function(value) {
  return jspb.Message.setProto3StringField(this, 17, value);
};


/**
 * optional bool isDepositPublished = 18;
 * @return {boolean}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.getIsdepositpublished = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 18, false));
};


/**
 * @param {boolean} value
 * @return {!proto.io.bisq.protobuffer.TradeInfo} returns this
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.setIsdepositpublished = function(value) {
  return jspb.Message.setProto3BooleanField(this, 18, value);
};


/**
 * optional bool isDepositConfirmed = 19;
 * @return {boolean}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.getIsdepositconfirmed = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 19, false));
};


/**
 * @param {boolean} value
 * @return {!proto.io.bisq.protobuffer.TradeInfo} returns this
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.setIsdepositconfirmed = function(value) {
  return jspb.Message.setProto3BooleanField(this, 19, value);
};


/**
 * optional bool isFiatSent = 20;
 * @return {boolean}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.getIsfiatsent = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 20, false));
};


/**
 * @param {boolean} value
 * @return {!proto.io.bisq.protobuffer.TradeInfo} returns this
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.setIsfiatsent = function(value) {
  return jspb.Message.setProto3BooleanField(this, 20, value);
};


/**
 * optional bool isFiatReceived = 21;
 * @return {boolean}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.getIsfiatreceived = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 21, false));
};


/**
 * @param {boolean} value
 * @return {!proto.io.bisq.protobuffer.TradeInfo} returns this
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.setIsfiatreceived = function(value) {
  return jspb.Message.setProto3BooleanField(this, 21, value);
};


/**
 * optional bool isPayoutPublished = 22;
 * @return {boolean}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.getIspayoutpublished = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 22, false));
};


/**
 * @param {boolean} value
 * @return {!proto.io.bisq.protobuffer.TradeInfo} returns this
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.setIspayoutpublished = function(value) {
  return jspb.Message.setProto3BooleanField(this, 22, value);
};


/**
 * optional bool isWithdrawn = 23;
 * @return {boolean}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.getIswithdrawn = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 23, false));
};


/**
 * @param {boolean} value
 * @return {!proto.io.bisq.protobuffer.TradeInfo} returns this
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.setIswithdrawn = function(value) {
  return jspb.Message.setProto3BooleanField(this, 23, value);
};


/**
 * optional string contractAsJson = 24;
 * @return {string}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.getContractasjson = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 24, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.TradeInfo} returns this
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.setContractasjson = function(value) {
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
 * optional string makerDepositTxId = 100;
 * @return {string}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.getMakerdeposittxid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 100, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.TradeInfo} returns this
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.setMakerdeposittxid = function(value) {
  return jspb.Message.setProto3StringField(this, 100, value);
};


/**
 * optional string takerDepositTxId = 101;
 * @return {string}
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.getTakerdeposittxid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 101, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.TradeInfo} returns this
 */
proto.io.bisq.protobuffer.TradeInfo.prototype.setTakerdeposittxid = function(value) {
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
    buyernodeaddress: jspb.Message.getFieldWithDefault(msg, 1, ""),
    sellernodeaddress: jspb.Message.getFieldWithDefault(msg, 2, ""),
    isbuyermakerandsellertaker: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    makeraccountid: jspb.Message.getFieldWithDefault(msg, 6, ""),
    takeraccountid: jspb.Message.getFieldWithDefault(msg, 7, ""),
    makerpaymentaccountpayload: (f = msg.getMakerpaymentaccountpayload()) && proto.io.bisq.protobuffer.PaymentAccountPayloadInfo.toObject(includeInstance, f),
    takerpaymentaccountpayload: (f = msg.getTakerpaymentaccountpayload()) && proto.io.bisq.protobuffer.PaymentAccountPayloadInfo.toObject(includeInstance, f),
    makerpayoutaddressstring: jspb.Message.getFieldWithDefault(msg, 10, ""),
    takerpayoutaddressstring: jspb.Message.getFieldWithDefault(msg, 11, ""),
    locktime: jspb.Message.getFieldWithDefault(msg, 12, 0),
    arbitratornodeaddress: jspb.Message.getFieldWithDefault(msg, 100, "")
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
      msg.setBuyernodeaddress(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSellernodeaddress(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsbuyermakerandsellertaker(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setMakeraccountid(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setTakeraccountid(value);
      break;
    case 8:
      var value = new proto.io.bisq.protobuffer.PaymentAccountPayloadInfo;
      reader.readMessage(value,proto.io.bisq.protobuffer.PaymentAccountPayloadInfo.deserializeBinaryFromReader);
      msg.setMakerpaymentaccountpayload(value);
      break;
    case 9:
      var value = new proto.io.bisq.protobuffer.PaymentAccountPayloadInfo;
      reader.readMessage(value,proto.io.bisq.protobuffer.PaymentAccountPayloadInfo.deserializeBinaryFromReader);
      msg.setTakerpaymentaccountpayload(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setMakerpayoutaddressstring(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setTakerpayoutaddressstring(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLocktime(value);
      break;
    case 100:
      var value = /** @type {string} */ (reader.readString());
      msg.setArbitratornodeaddress(value);
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
  f = message.getBuyernodeaddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSellernodeaddress();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getIsbuyermakerandsellertaker();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getMakeraccountid();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getTakeraccountid();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getMakerpaymentaccountpayload();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.io.bisq.protobuffer.PaymentAccountPayloadInfo.serializeBinaryToWriter
    );
  }
  f = message.getTakerpaymentaccountpayload();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.io.bisq.protobuffer.PaymentAccountPayloadInfo.serializeBinaryToWriter
    );
  }
  f = message.getMakerpayoutaddressstring();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getTakerpayoutaddressstring();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getLocktime();
  if (f !== 0) {
    writer.writeUint64(
      12,
      f
    );
  }
  f = message.getArbitratornodeaddress();
  if (f.length > 0) {
    writer.writeString(
      100,
      f
    );
  }
};


/**
 * optional string buyerNodeAddress = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.ContractInfo.prototype.getBuyernodeaddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.ContractInfo} returns this
 */
proto.io.bisq.protobuffer.ContractInfo.prototype.setBuyernodeaddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string sellerNodeAddress = 2;
 * @return {string}
 */
proto.io.bisq.protobuffer.ContractInfo.prototype.getSellernodeaddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.ContractInfo} returns this
 */
proto.io.bisq.protobuffer.ContractInfo.prototype.setSellernodeaddress = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool isBuyerMakerAndSellerTaker = 5;
 * @return {boolean}
 */
proto.io.bisq.protobuffer.ContractInfo.prototype.getIsbuyermakerandsellertaker = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.io.bisq.protobuffer.ContractInfo} returns this
 */
proto.io.bisq.protobuffer.ContractInfo.prototype.setIsbuyermakerandsellertaker = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional string makerAccountId = 6;
 * @return {string}
 */
proto.io.bisq.protobuffer.ContractInfo.prototype.getMakeraccountid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.ContractInfo} returns this
 */
proto.io.bisq.protobuffer.ContractInfo.prototype.setMakeraccountid = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string takerAccountId = 7;
 * @return {string}
 */
proto.io.bisq.protobuffer.ContractInfo.prototype.getTakeraccountid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.ContractInfo} returns this
 */
proto.io.bisq.protobuffer.ContractInfo.prototype.setTakeraccountid = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional PaymentAccountPayloadInfo makerPaymentAccountPayload = 8;
 * @return {?proto.io.bisq.protobuffer.PaymentAccountPayloadInfo}
 */
proto.io.bisq.protobuffer.ContractInfo.prototype.getMakerpaymentaccountpayload = function() {
  return /** @type{?proto.io.bisq.protobuffer.PaymentAccountPayloadInfo} */ (
    jspb.Message.getWrapperField(this, proto.io.bisq.protobuffer.PaymentAccountPayloadInfo, 8));
};


/**
 * @param {?proto.io.bisq.protobuffer.PaymentAccountPayloadInfo|undefined} value
 * @return {!proto.io.bisq.protobuffer.ContractInfo} returns this
*/
proto.io.bisq.protobuffer.ContractInfo.prototype.setMakerpaymentaccountpayload = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.bisq.protobuffer.ContractInfo} returns this
 */
proto.io.bisq.protobuffer.ContractInfo.prototype.clearMakerpaymentaccountpayload = function() {
  return this.setMakerpaymentaccountpayload(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.bisq.protobuffer.ContractInfo.prototype.hasMakerpaymentaccountpayload = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional PaymentAccountPayloadInfo takerPaymentAccountPayload = 9;
 * @return {?proto.io.bisq.protobuffer.PaymentAccountPayloadInfo}
 */
proto.io.bisq.protobuffer.ContractInfo.prototype.getTakerpaymentaccountpayload = function() {
  return /** @type{?proto.io.bisq.protobuffer.PaymentAccountPayloadInfo} */ (
    jspb.Message.getWrapperField(this, proto.io.bisq.protobuffer.PaymentAccountPayloadInfo, 9));
};


/**
 * @param {?proto.io.bisq.protobuffer.PaymentAccountPayloadInfo|undefined} value
 * @return {!proto.io.bisq.protobuffer.ContractInfo} returns this
*/
proto.io.bisq.protobuffer.ContractInfo.prototype.setTakerpaymentaccountpayload = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.bisq.protobuffer.ContractInfo} returns this
 */
proto.io.bisq.protobuffer.ContractInfo.prototype.clearTakerpaymentaccountpayload = function() {
  return this.setTakerpaymentaccountpayload(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.bisq.protobuffer.ContractInfo.prototype.hasTakerpaymentaccountpayload = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional string makerPayoutAddressString = 10;
 * @return {string}
 */
proto.io.bisq.protobuffer.ContractInfo.prototype.getMakerpayoutaddressstring = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.ContractInfo} returns this
 */
proto.io.bisq.protobuffer.ContractInfo.prototype.setMakerpayoutaddressstring = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string takerPayoutAddressString = 11;
 * @return {string}
 */
proto.io.bisq.protobuffer.ContractInfo.prototype.getTakerpayoutaddressstring = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.ContractInfo} returns this
 */
proto.io.bisq.protobuffer.ContractInfo.prototype.setTakerpayoutaddressstring = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional uint64 lockTime = 12;
 * @return {number}
 */
proto.io.bisq.protobuffer.ContractInfo.prototype.getLocktime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.ContractInfo} returns this
 */
proto.io.bisq.protobuffer.ContractInfo.prototype.setLocktime = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional string arbitratorNodeAddress = 100;
 * @return {string}
 */
proto.io.bisq.protobuffer.ContractInfo.prototype.getArbitratornodeaddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 100, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.ContractInfo} returns this
 */
proto.io.bisq.protobuffer.ContractInfo.prototype.setArbitratornodeaddress = function(value) {
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
    paymentmethodid: jspb.Message.getFieldWithDefault(msg, 2, ""),
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
      msg.setPaymentmethodid(value);
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
  f = message.getPaymentmethodid();
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
 * optional string paymentMethodId = 2;
 * @return {string}
 */
proto.io.bisq.protobuffer.PaymentAccountPayloadInfo.prototype.getPaymentmethodid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.PaymentAccountPayloadInfo} returns this
 */
proto.io.bisq.protobuffer.PaymentAccountPayloadInfo.prototype.setPaymentmethodid = function(value) {
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
    usecustomtxfeerate: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    customtxfeerate: jspb.Message.getFieldWithDefault(msg, 2, 0),
    feeservicerate: jspb.Message.getFieldWithDefault(msg, 3, 0),
    lastfeeservicerequestts: jspb.Message.getFieldWithDefault(msg, 4, 0),
    minfeeservicerate: jspb.Message.getFieldWithDefault(msg, 5, 0)
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
      msg.setUsecustomtxfeerate(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCustomtxfeerate(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setFeeservicerate(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLastfeeservicerequestts(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMinfeeservicerate(value);
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
  f = message.getUsecustomtxfeerate();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getCustomtxfeerate();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getFeeservicerate();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getLastfeeservicerequestts();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getMinfeeservicerate();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
};


/**
 * optional bool useCustomTxFeeRate = 1;
 * @return {boolean}
 */
proto.io.bisq.protobuffer.TxFeeRateInfo.prototype.getUsecustomtxfeerate = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.io.bisq.protobuffer.TxFeeRateInfo} returns this
 */
proto.io.bisq.protobuffer.TxFeeRateInfo.prototype.setUsecustomtxfeerate = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional uint64 customTxFeeRate = 2;
 * @return {number}
 */
proto.io.bisq.protobuffer.TxFeeRateInfo.prototype.getCustomtxfeerate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.TxFeeRateInfo} returns this
 */
proto.io.bisq.protobuffer.TxFeeRateInfo.prototype.setCustomtxfeerate = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 feeServiceRate = 3;
 * @return {number}
 */
proto.io.bisq.protobuffer.TxFeeRateInfo.prototype.getFeeservicerate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.TxFeeRateInfo} returns this
 */
proto.io.bisq.protobuffer.TxFeeRateInfo.prototype.setFeeservicerate = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint64 lastFeeServiceRequestTs = 4;
 * @return {number}
 */
proto.io.bisq.protobuffer.TxFeeRateInfo.prototype.getLastfeeservicerequestts = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.TxFeeRateInfo} returns this
 */
proto.io.bisq.protobuffer.TxFeeRateInfo.prototype.setLastfeeservicerequestts = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint64 minFeeServiceRate = 5;
 * @return {number}
 */
proto.io.bisq.protobuffer.TxFeeRateInfo.prototype.getMinfeeservicerate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.TxFeeRateInfo} returns this
 */
proto.io.bisq.protobuffer.TxFeeRateInfo.prototype.setMinfeeservicerate = function(value) {
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
    txid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    inputsum: jspb.Message.getFieldWithDefault(msg, 2, 0),
    outputsum: jspb.Message.getFieldWithDefault(msg, 3, 0),
    fee: jspb.Message.getFieldWithDefault(msg, 4, 0),
    size: jspb.Message.getFieldWithDefault(msg, 5, 0),
    ispending: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
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
      msg.setTxid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setInputsum(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setOutputsum(value);
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
      msg.setIspending(value);
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
  f = message.getTxid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getInputsum();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getOutputsum();
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
  f = message.getIspending();
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
 * optional string txId = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.TxInfo.prototype.getTxid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.TxInfo} returns this
 */
proto.io.bisq.protobuffer.TxInfo.prototype.setTxid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 inputSum = 2;
 * @return {number}
 */
proto.io.bisq.protobuffer.TxInfo.prototype.getInputsum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.TxInfo} returns this
 */
proto.io.bisq.protobuffer.TxInfo.prototype.setInputsum = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 outputSum = 3;
 * @return {number}
 */
proto.io.bisq.protobuffer.TxInfo.prototype.getOutputsum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.TxInfo} returns this
 */
proto.io.bisq.protobuffer.TxInfo.prototype.setOutputsum = function(value) {
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
 * optional bool isPending = 6;
 * @return {boolean}
 */
proto.io.bisq.protobuffer.TxInfo.prototype.getIspending = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.io.bisq.protobuffer.TxInfo} returns this
 */
proto.io.bisq.protobuffer.TxInfo.prototype.setIspending = function(value) {
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
    currencycode: jspb.Message.getFieldWithDefault(msg, 1, "")
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
      msg.setCurrencycode(value);
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
  f = message.getCurrencycode();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string currencyCode = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.GetBalancesRequest.prototype.getCurrencycode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.GetBalancesRequest} returns this
 */
proto.io.bisq.protobuffer.GetBalancesRequest.prototype.setCurrencycode = function(value) {
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
    addressbalanceinfo: (f = msg.getAddressbalanceinfo()) && proto.io.bisq.protobuffer.AddressBalanceInfo.toObject(includeInstance, f)
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
      msg.setAddressbalanceinfo(value);
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
  f = message.getAddressbalanceinfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.io.bisq.protobuffer.AddressBalanceInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional AddressBalanceInfo addressBalanceInfo = 1;
 * @return {?proto.io.bisq.protobuffer.AddressBalanceInfo}
 */
proto.io.bisq.protobuffer.GetAddressBalanceReply.prototype.getAddressbalanceinfo = function() {
  return /** @type{?proto.io.bisq.protobuffer.AddressBalanceInfo} */ (
    jspb.Message.getWrapperField(this, proto.io.bisq.protobuffer.AddressBalanceInfo, 1));
};


/**
 * @param {?proto.io.bisq.protobuffer.AddressBalanceInfo|undefined} value
 * @return {!proto.io.bisq.protobuffer.GetAddressBalanceReply} returns this
*/
proto.io.bisq.protobuffer.GetAddressBalanceReply.prototype.setAddressbalanceinfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.bisq.protobuffer.GetAddressBalanceReply} returns this
 */
proto.io.bisq.protobuffer.GetAddressBalanceReply.prototype.clearAddressbalanceinfo = function() {
  return this.setAddressbalanceinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.bisq.protobuffer.GetAddressBalanceReply.prototype.hasAddressbalanceinfo = function() {
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
proto.io.bisq.protobuffer.GetUnusedBsqAddressRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetUnusedBsqAddressRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetUnusedBsqAddressRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetUnusedBsqAddressRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.io.bisq.protobuffer.GetUnusedBsqAddressRequest}
 */
proto.io.bisq.protobuffer.GetUnusedBsqAddressRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetUnusedBsqAddressRequest;
  return proto.io.bisq.protobuffer.GetUnusedBsqAddressRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetUnusedBsqAddressRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetUnusedBsqAddressRequest}
 */
proto.io.bisq.protobuffer.GetUnusedBsqAddressRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.io.bisq.protobuffer.GetUnusedBsqAddressRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetUnusedBsqAddressRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetUnusedBsqAddressRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetUnusedBsqAddressRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.io.bisq.protobuffer.GetUnusedBsqAddressReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.GetUnusedBsqAddressReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.GetUnusedBsqAddressReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetUnusedBsqAddressReply.toObject = function(includeInstance, msg) {
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
 * @return {!proto.io.bisq.protobuffer.GetUnusedBsqAddressReply}
 */
proto.io.bisq.protobuffer.GetUnusedBsqAddressReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.GetUnusedBsqAddressReply;
  return proto.io.bisq.protobuffer.GetUnusedBsqAddressReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.GetUnusedBsqAddressReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.GetUnusedBsqAddressReply}
 */
proto.io.bisq.protobuffer.GetUnusedBsqAddressReply.deserializeBinaryFromReader = function(msg, reader) {
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
proto.io.bisq.protobuffer.GetUnusedBsqAddressReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.GetUnusedBsqAddressReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.GetUnusedBsqAddressReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.GetUnusedBsqAddressReply.serializeBinaryToWriter = function(message, writer) {
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
proto.io.bisq.protobuffer.GetUnusedBsqAddressReply.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.GetUnusedBsqAddressReply} returns this
 */
proto.io.bisq.protobuffer.GetUnusedBsqAddressReply.prototype.setAddress = function(value) {
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
proto.io.bisq.protobuffer.SendBsqRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.SendBsqRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.SendBsqRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.SendBsqRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, ""),
    amount: jspb.Message.getFieldWithDefault(msg, 2, ""),
    txfeerate: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.io.bisq.protobuffer.SendBsqRequest}
 */
proto.io.bisq.protobuffer.SendBsqRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.SendBsqRequest;
  return proto.io.bisq.protobuffer.SendBsqRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.SendBsqRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.SendBsqRequest}
 */
proto.io.bisq.protobuffer.SendBsqRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setTxfeerate(value);
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
proto.io.bisq.protobuffer.SendBsqRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.SendBsqRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.SendBsqRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.SendBsqRequest.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getTxfeerate();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.SendBsqRequest.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.SendBsqRequest} returns this
 */
proto.io.bisq.protobuffer.SendBsqRequest.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string amount = 2;
 * @return {string}
 */
proto.io.bisq.protobuffer.SendBsqRequest.prototype.getAmount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.SendBsqRequest} returns this
 */
proto.io.bisq.protobuffer.SendBsqRequest.prototype.setAmount = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string txFeeRate = 3;
 * @return {string}
 */
proto.io.bisq.protobuffer.SendBsqRequest.prototype.getTxfeerate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.SendBsqRequest} returns this
 */
proto.io.bisq.protobuffer.SendBsqRequest.prototype.setTxfeerate = function(value) {
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
proto.io.bisq.protobuffer.SendBsqReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.SendBsqReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.SendBsqReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.SendBsqReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    txinfo: (f = msg.getTxinfo()) && proto.io.bisq.protobuffer.TxInfo.toObject(includeInstance, f)
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
 * @return {!proto.io.bisq.protobuffer.SendBsqReply}
 */
proto.io.bisq.protobuffer.SendBsqReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.SendBsqReply;
  return proto.io.bisq.protobuffer.SendBsqReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.SendBsqReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.SendBsqReply}
 */
proto.io.bisq.protobuffer.SendBsqReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.io.bisq.protobuffer.TxInfo;
      reader.readMessage(value,proto.io.bisq.protobuffer.TxInfo.deserializeBinaryFromReader);
      msg.setTxinfo(value);
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
proto.io.bisq.protobuffer.SendBsqReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.SendBsqReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.SendBsqReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.SendBsqReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTxinfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.io.bisq.protobuffer.TxInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional TxInfo txInfo = 1;
 * @return {?proto.io.bisq.protobuffer.TxInfo}
 */
proto.io.bisq.protobuffer.SendBsqReply.prototype.getTxinfo = function() {
  return /** @type{?proto.io.bisq.protobuffer.TxInfo} */ (
    jspb.Message.getWrapperField(this, proto.io.bisq.protobuffer.TxInfo, 1));
};


/**
 * @param {?proto.io.bisq.protobuffer.TxInfo|undefined} value
 * @return {!proto.io.bisq.protobuffer.SendBsqReply} returns this
*/
proto.io.bisq.protobuffer.SendBsqReply.prototype.setTxinfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.bisq.protobuffer.SendBsqReply} returns this
 */
proto.io.bisq.protobuffer.SendBsqReply.prototype.clearTxinfo = function() {
  return this.setTxinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.bisq.protobuffer.SendBsqReply.prototype.hasTxinfo = function() {
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
    txfeerate: jspb.Message.getFieldWithDefault(msg, 3, ""),
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
      msg.setTxfeerate(value);
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
  f = message.getTxfeerate();
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
 * optional string txFeeRate = 3;
 * @return {string}
 */
proto.io.bisq.protobuffer.SendBtcRequest.prototype.getTxfeerate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.SendBtcRequest} returns this
 */
proto.io.bisq.protobuffer.SendBtcRequest.prototype.setTxfeerate = function(value) {
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
    txinfo: (f = msg.getTxinfo()) && proto.io.bisq.protobuffer.TxInfo.toObject(includeInstance, f)
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
      msg.setTxinfo(value);
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
  f = message.getTxinfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.io.bisq.protobuffer.TxInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional TxInfo txInfo = 1;
 * @return {?proto.io.bisq.protobuffer.TxInfo}
 */
proto.io.bisq.protobuffer.SendBtcReply.prototype.getTxinfo = function() {
  return /** @type{?proto.io.bisq.protobuffer.TxInfo} */ (
    jspb.Message.getWrapperField(this, proto.io.bisq.protobuffer.TxInfo, 1));
};


/**
 * @param {?proto.io.bisq.protobuffer.TxInfo|undefined} value
 * @return {!proto.io.bisq.protobuffer.SendBtcReply} returns this
*/
proto.io.bisq.protobuffer.SendBtcReply.prototype.setTxinfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.bisq.protobuffer.SendBtcReply} returns this
 */
proto.io.bisq.protobuffer.SendBtcReply.prototype.clearTxinfo = function() {
  return this.setTxinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.bisq.protobuffer.SendBtcReply.prototype.hasTxinfo = function() {
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
proto.io.bisq.protobuffer.VerifyBsqSentToAddressRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.VerifyBsqSentToAddressRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.VerifyBsqSentToAddressRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.VerifyBsqSentToAddressRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, ""),
    amount: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.io.bisq.protobuffer.VerifyBsqSentToAddressRequest}
 */
proto.io.bisq.protobuffer.VerifyBsqSentToAddressRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.VerifyBsqSentToAddressRequest;
  return proto.io.bisq.protobuffer.VerifyBsqSentToAddressRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.VerifyBsqSentToAddressRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.VerifyBsqSentToAddressRequest}
 */
proto.io.bisq.protobuffer.VerifyBsqSentToAddressRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.io.bisq.protobuffer.VerifyBsqSentToAddressRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.VerifyBsqSentToAddressRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.VerifyBsqSentToAddressRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.VerifyBsqSentToAddressRequest.serializeBinaryToWriter = function(message, writer) {
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
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.VerifyBsqSentToAddressRequest.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.VerifyBsqSentToAddressRequest} returns this
 */
proto.io.bisq.protobuffer.VerifyBsqSentToAddressRequest.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string amount = 2;
 * @return {string}
 */
proto.io.bisq.protobuffer.VerifyBsqSentToAddressRequest.prototype.getAmount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.VerifyBsqSentToAddressRequest} returns this
 */
proto.io.bisq.protobuffer.VerifyBsqSentToAddressRequest.prototype.setAmount = function(value) {
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
proto.io.bisq.protobuffer.VerifyBsqSentToAddressReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.VerifyBsqSentToAddressReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.VerifyBsqSentToAddressReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.VerifyBsqSentToAddressReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    isamountreceived: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
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
 * @return {!proto.io.bisq.protobuffer.VerifyBsqSentToAddressReply}
 */
proto.io.bisq.protobuffer.VerifyBsqSentToAddressReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.VerifyBsqSentToAddressReply;
  return proto.io.bisq.protobuffer.VerifyBsqSentToAddressReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.VerifyBsqSentToAddressReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.VerifyBsqSentToAddressReply}
 */
proto.io.bisq.protobuffer.VerifyBsqSentToAddressReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsamountreceived(value);
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
proto.io.bisq.protobuffer.VerifyBsqSentToAddressReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.VerifyBsqSentToAddressReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.VerifyBsqSentToAddressReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.VerifyBsqSentToAddressReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIsamountreceived();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool isAmountReceived = 1;
 * @return {boolean}
 */
proto.io.bisq.protobuffer.VerifyBsqSentToAddressReply.prototype.getIsamountreceived = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.io.bisq.protobuffer.VerifyBsqSentToAddressReply} returns this
 */
proto.io.bisq.protobuffer.VerifyBsqSentToAddressReply.prototype.setIsamountreceived = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
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
    txfeerateinfo: (f = msg.getTxfeerateinfo()) && proto.io.bisq.protobuffer.TxFeeRateInfo.toObject(includeInstance, f)
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
      msg.setTxfeerateinfo(value);
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
  f = message.getTxfeerateinfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.io.bisq.protobuffer.TxFeeRateInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional TxFeeRateInfo txFeeRateInfo = 1;
 * @return {?proto.io.bisq.protobuffer.TxFeeRateInfo}
 */
proto.io.bisq.protobuffer.GetTxFeeRateReply.prototype.getTxfeerateinfo = function() {
  return /** @type{?proto.io.bisq.protobuffer.TxFeeRateInfo} */ (
    jspb.Message.getWrapperField(this, proto.io.bisq.protobuffer.TxFeeRateInfo, 1));
};


/**
 * @param {?proto.io.bisq.protobuffer.TxFeeRateInfo|undefined} value
 * @return {!proto.io.bisq.protobuffer.GetTxFeeRateReply} returns this
*/
proto.io.bisq.protobuffer.GetTxFeeRateReply.prototype.setTxfeerateinfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.bisq.protobuffer.GetTxFeeRateReply} returns this
 */
proto.io.bisq.protobuffer.GetTxFeeRateReply.prototype.clearTxfeerateinfo = function() {
  return this.setTxfeerateinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.bisq.protobuffer.GetTxFeeRateReply.prototype.hasTxfeerateinfo = function() {
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
    txfeeratepreference: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
      msg.setTxfeeratepreference(value);
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
  f = message.getTxfeeratepreference();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
};


/**
 * optional uint64 txFeeRatePreference = 1;
 * @return {number}
 */
proto.io.bisq.protobuffer.SetTxFeeRatePreferenceRequest.prototype.getTxfeeratepreference = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.SetTxFeeRatePreferenceRequest} returns this
 */
proto.io.bisq.protobuffer.SetTxFeeRatePreferenceRequest.prototype.setTxfeeratepreference = function(value) {
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
    txfeerateinfo: (f = msg.getTxfeerateinfo()) && proto.io.bisq.protobuffer.TxFeeRateInfo.toObject(includeInstance, f)
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
      msg.setTxfeerateinfo(value);
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
  f = message.getTxfeerateinfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.io.bisq.protobuffer.TxFeeRateInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional TxFeeRateInfo txFeeRateInfo = 1;
 * @return {?proto.io.bisq.protobuffer.TxFeeRateInfo}
 */
proto.io.bisq.protobuffer.SetTxFeeRatePreferenceReply.prototype.getTxfeerateinfo = function() {
  return /** @type{?proto.io.bisq.protobuffer.TxFeeRateInfo} */ (
    jspb.Message.getWrapperField(this, proto.io.bisq.protobuffer.TxFeeRateInfo, 1));
};


/**
 * @param {?proto.io.bisq.protobuffer.TxFeeRateInfo|undefined} value
 * @return {!proto.io.bisq.protobuffer.SetTxFeeRatePreferenceReply} returns this
*/
proto.io.bisq.protobuffer.SetTxFeeRatePreferenceReply.prototype.setTxfeerateinfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.bisq.protobuffer.SetTxFeeRatePreferenceReply} returns this
 */
proto.io.bisq.protobuffer.SetTxFeeRatePreferenceReply.prototype.clearTxfeerateinfo = function() {
  return this.setTxfeerateinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.bisq.protobuffer.SetTxFeeRatePreferenceReply.prototype.hasTxfeerateinfo = function() {
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
    txfeerateinfo: (f = msg.getTxfeerateinfo()) && proto.io.bisq.protobuffer.TxFeeRateInfo.toObject(includeInstance, f)
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
      msg.setTxfeerateinfo(value);
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
  f = message.getTxfeerateinfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.io.bisq.protobuffer.TxFeeRateInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional TxFeeRateInfo txFeeRateInfo = 1;
 * @return {?proto.io.bisq.protobuffer.TxFeeRateInfo}
 */
proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceReply.prototype.getTxfeerateinfo = function() {
  return /** @type{?proto.io.bisq.protobuffer.TxFeeRateInfo} */ (
    jspb.Message.getWrapperField(this, proto.io.bisq.protobuffer.TxFeeRateInfo, 1));
};


/**
 * @param {?proto.io.bisq.protobuffer.TxFeeRateInfo|undefined} value
 * @return {!proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceReply} returns this
*/
proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceReply.prototype.setTxfeerateinfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceReply} returns this
 */
proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceReply.prototype.clearTxfeerateinfo = function() {
  return this.setTxfeerateinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceReply.prototype.hasTxfeerateinfo = function() {
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
    txid: jspb.Message.getFieldWithDefault(msg, 1, "")
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
      msg.setTxid(value);
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
  f = message.getTxid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string txId = 1;
 * @return {string}
 */
proto.io.bisq.protobuffer.GetTransactionRequest.prototype.getTxid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.GetTransactionRequest} returns this
 */
proto.io.bisq.protobuffer.GetTransactionRequest.prototype.setTxid = function(value) {
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
    txinfo: (f = msg.getTxinfo()) && proto.io.bisq.protobuffer.TxInfo.toObject(includeInstance, f)
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
      msg.setTxinfo(value);
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
  f = message.getTxinfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.io.bisq.protobuffer.TxInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional TxInfo txInfo = 1;
 * @return {?proto.io.bisq.protobuffer.TxInfo}
 */
proto.io.bisq.protobuffer.GetTransactionReply.prototype.getTxinfo = function() {
  return /** @type{?proto.io.bisq.protobuffer.TxInfo} */ (
    jspb.Message.getWrapperField(this, proto.io.bisq.protobuffer.TxInfo, 1));
};


/**
 * @param {?proto.io.bisq.protobuffer.TxInfo|undefined} value
 * @return {!proto.io.bisq.protobuffer.GetTransactionReply} returns this
*/
proto.io.bisq.protobuffer.GetTransactionReply.prototype.setTxinfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.bisq.protobuffer.GetTransactionReply} returns this
 */
proto.io.bisq.protobuffer.GetTransactionReply.prototype.clearTxinfo = function() {
  return this.setTxinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.bisq.protobuffer.GetTransactionReply.prototype.hasTxinfo = function() {
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
    addressbalanceinfoList: jspb.Message.toObjectList(msg.getAddressbalanceinfoList(),
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
      msg.addAddressbalanceinfo(value);
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
  f = message.getAddressbalanceinfoList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.io.bisq.protobuffer.AddressBalanceInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated AddressBalanceInfo addressBalanceInfo = 1;
 * @return {!Array<!proto.io.bisq.protobuffer.AddressBalanceInfo>}
 */
proto.io.bisq.protobuffer.GetFundingAddressesReply.prototype.getAddressbalanceinfoList = function() {
  return /** @type{!Array<!proto.io.bisq.protobuffer.AddressBalanceInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.io.bisq.protobuffer.AddressBalanceInfo, 1));
};


/**
 * @param {!Array<!proto.io.bisq.protobuffer.AddressBalanceInfo>} value
 * @return {!proto.io.bisq.protobuffer.GetFundingAddressesReply} returns this
*/
proto.io.bisq.protobuffer.GetFundingAddressesReply.prototype.setAddressbalanceinfoList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.io.bisq.protobuffer.AddressBalanceInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.io.bisq.protobuffer.AddressBalanceInfo}
 */
proto.io.bisq.protobuffer.GetFundingAddressesReply.prototype.addAddressbalanceinfo = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.io.bisq.protobuffer.AddressBalanceInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.io.bisq.protobuffer.GetFundingAddressesReply} returns this
 */
proto.io.bisq.protobuffer.GetFundingAddressesReply.prototype.clearAddressbalanceinfoList = function() {
  return this.setAddressbalanceinfoList([]);
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
    newpassword: jspb.Message.getFieldWithDefault(msg, 2, "")
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
      msg.setNewpassword(value);
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
  f = message.getNewpassword();
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
 * optional string newPassword = 2;
 * @return {string}
 */
proto.io.bisq.protobuffer.SetWalletPasswordRequest.prototype.getNewpassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.bisq.protobuffer.SetWalletPasswordRequest} returns this
 */
proto.io.bisq.protobuffer.SetWalletPasswordRequest.prototype.setNewpassword = function(value) {
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
    bsq: (f = msg.getBsq()) && proto.io.bisq.protobuffer.BsqBalanceInfo.toObject(includeInstance, f),
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
      var value = new proto.io.bisq.protobuffer.BsqBalanceInfo;
      reader.readMessage(value,proto.io.bisq.protobuffer.BsqBalanceInfo.deserializeBinaryFromReader);
      msg.setBsq(value);
      break;
    case 2:
      var value = new proto.io.bisq.protobuffer.BtcBalanceInfo;
      reader.readMessage(value,proto.io.bisq.protobuffer.BtcBalanceInfo.deserializeBinaryFromReader);
      msg.setBtc(value);
      break;
    case 3:
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
  f = message.getBsq();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.io.bisq.protobuffer.BsqBalanceInfo.serializeBinaryToWriter
    );
  }
  f = message.getBtc();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.io.bisq.protobuffer.BtcBalanceInfo.serializeBinaryToWriter
    );
  }
  f = message.getXmr();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.io.bisq.protobuffer.XmrBalanceInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional BsqBalanceInfo bsq = 1;
 * @return {?proto.io.bisq.protobuffer.BsqBalanceInfo}
 */
proto.io.bisq.protobuffer.BalancesInfo.prototype.getBsq = function() {
  return /** @type{?proto.io.bisq.protobuffer.BsqBalanceInfo} */ (
    jspb.Message.getWrapperField(this, proto.io.bisq.protobuffer.BsqBalanceInfo, 1));
};


/**
 * @param {?proto.io.bisq.protobuffer.BsqBalanceInfo|undefined} value
 * @return {!proto.io.bisq.protobuffer.BalancesInfo} returns this
*/
proto.io.bisq.protobuffer.BalancesInfo.prototype.setBsq = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.bisq.protobuffer.BalancesInfo} returns this
 */
proto.io.bisq.protobuffer.BalancesInfo.prototype.clearBsq = function() {
  return this.setBsq(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.bisq.protobuffer.BalancesInfo.prototype.hasBsq = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional BtcBalanceInfo btc = 2;
 * @return {?proto.io.bisq.protobuffer.BtcBalanceInfo}
 */
proto.io.bisq.protobuffer.BalancesInfo.prototype.getBtc = function() {
  return /** @type{?proto.io.bisq.protobuffer.BtcBalanceInfo} */ (
    jspb.Message.getWrapperField(this, proto.io.bisq.protobuffer.BtcBalanceInfo, 2));
};


/**
 * @param {?proto.io.bisq.protobuffer.BtcBalanceInfo|undefined} value
 * @return {!proto.io.bisq.protobuffer.BalancesInfo} returns this
*/
proto.io.bisq.protobuffer.BalancesInfo.prototype.setBtc = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
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
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional XmrBalanceInfo xmr = 3;
 * @return {?proto.io.bisq.protobuffer.XmrBalanceInfo}
 */
proto.io.bisq.protobuffer.BalancesInfo.prototype.getXmr = function() {
  return /** @type{?proto.io.bisq.protobuffer.XmrBalanceInfo} */ (
    jspb.Message.getWrapperField(this, proto.io.bisq.protobuffer.XmrBalanceInfo, 3));
};


/**
 * @param {?proto.io.bisq.protobuffer.XmrBalanceInfo|undefined} value
 * @return {!proto.io.bisq.protobuffer.BalancesInfo} returns this
*/
proto.io.bisq.protobuffer.BalancesInfo.prototype.setXmr = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
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
  return jspb.Message.getField(this, 3) != null;
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
proto.io.bisq.protobuffer.BsqBalanceInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.io.bisq.protobuffer.BsqBalanceInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.bisq.protobuffer.BsqBalanceInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.BsqBalanceInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    availableconfirmedbalance: jspb.Message.getFieldWithDefault(msg, 1, 0),
    unverifiedbalance: jspb.Message.getFieldWithDefault(msg, 2, 0),
    unconfirmedchangebalance: jspb.Message.getFieldWithDefault(msg, 3, 0),
    lockedforvotingbalance: jspb.Message.getFieldWithDefault(msg, 4, 0),
    lockupbondsbalance: jspb.Message.getFieldWithDefault(msg, 5, 0),
    unlockingbondsbalance: jspb.Message.getFieldWithDefault(msg, 6, 0)
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
 * @return {!proto.io.bisq.protobuffer.BsqBalanceInfo}
 */
proto.io.bisq.protobuffer.BsqBalanceInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.bisq.protobuffer.BsqBalanceInfo;
  return proto.io.bisq.protobuffer.BsqBalanceInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.bisq.protobuffer.BsqBalanceInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.bisq.protobuffer.BsqBalanceInfo}
 */
proto.io.bisq.protobuffer.BsqBalanceInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAvailableconfirmedbalance(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setUnverifiedbalance(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setUnconfirmedchangebalance(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLockedforvotingbalance(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLockupbondsbalance(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setUnlockingbondsbalance(value);
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
proto.io.bisq.protobuffer.BsqBalanceInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.bisq.protobuffer.BsqBalanceInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.bisq.protobuffer.BsqBalanceInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.bisq.protobuffer.BsqBalanceInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAvailableconfirmedbalance();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getUnverifiedbalance();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getUnconfirmedchangebalance();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getLockedforvotingbalance();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getLockupbondsbalance();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = message.getUnlockingbondsbalance();
  if (f !== 0) {
    writer.writeUint64(
      6,
      f
    );
  }
};


/**
 * optional uint64 availableConfirmedBalance = 1;
 * @return {number}
 */
proto.io.bisq.protobuffer.BsqBalanceInfo.prototype.getAvailableconfirmedbalance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.BsqBalanceInfo} returns this
 */
proto.io.bisq.protobuffer.BsqBalanceInfo.prototype.setAvailableconfirmedbalance = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 unverifiedBalance = 2;
 * @return {number}
 */
proto.io.bisq.protobuffer.BsqBalanceInfo.prototype.getUnverifiedbalance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.BsqBalanceInfo} returns this
 */
proto.io.bisq.protobuffer.BsqBalanceInfo.prototype.setUnverifiedbalance = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 unconfirmedChangeBalance = 3;
 * @return {number}
 */
proto.io.bisq.protobuffer.BsqBalanceInfo.prototype.getUnconfirmedchangebalance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.BsqBalanceInfo} returns this
 */
proto.io.bisq.protobuffer.BsqBalanceInfo.prototype.setUnconfirmedchangebalance = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint64 lockedForVotingBalance = 4;
 * @return {number}
 */
proto.io.bisq.protobuffer.BsqBalanceInfo.prototype.getLockedforvotingbalance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.BsqBalanceInfo} returns this
 */
proto.io.bisq.protobuffer.BsqBalanceInfo.prototype.setLockedforvotingbalance = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint64 lockupBondsBalance = 5;
 * @return {number}
 */
proto.io.bisq.protobuffer.BsqBalanceInfo.prototype.getLockupbondsbalance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.BsqBalanceInfo} returns this
 */
proto.io.bisq.protobuffer.BsqBalanceInfo.prototype.setLockupbondsbalance = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint64 unlockingBondsBalance = 6;
 * @return {number}
 */
proto.io.bisq.protobuffer.BsqBalanceInfo.prototype.getUnlockingbondsbalance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.BsqBalanceInfo} returns this
 */
proto.io.bisq.protobuffer.BsqBalanceInfo.prototype.setUnlockingbondsbalance = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
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
    availablebalance: jspb.Message.getFieldWithDefault(msg, 1, 0),
    reservedbalance: jspb.Message.getFieldWithDefault(msg, 2, 0),
    totalavailablebalance: jspb.Message.getFieldWithDefault(msg, 3, 0),
    lockedbalance: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
      msg.setAvailablebalance(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setReservedbalance(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTotalavailablebalance(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLockedbalance(value);
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
  f = message.getAvailablebalance();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getReservedbalance();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getTotalavailablebalance();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getLockedbalance();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
};


/**
 * optional uint64 availableBalance = 1;
 * @return {number}
 */
proto.io.bisq.protobuffer.BtcBalanceInfo.prototype.getAvailablebalance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.BtcBalanceInfo} returns this
 */
proto.io.bisq.protobuffer.BtcBalanceInfo.prototype.setAvailablebalance = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 reservedBalance = 2;
 * @return {number}
 */
proto.io.bisq.protobuffer.BtcBalanceInfo.prototype.getReservedbalance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.BtcBalanceInfo} returns this
 */
proto.io.bisq.protobuffer.BtcBalanceInfo.prototype.setReservedbalance = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 totalAvailableBalance = 3;
 * @return {number}
 */
proto.io.bisq.protobuffer.BtcBalanceInfo.prototype.getTotalavailablebalance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.BtcBalanceInfo} returns this
 */
proto.io.bisq.protobuffer.BtcBalanceInfo.prototype.setTotalavailablebalance = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint64 lockedBalance = 4;
 * @return {number}
 */
proto.io.bisq.protobuffer.BtcBalanceInfo.prototype.getLockedbalance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.BtcBalanceInfo} returns this
 */
proto.io.bisq.protobuffer.BtcBalanceInfo.prototype.setLockedbalance = function(value) {
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
    balance: jspb.Message.getFieldWithDefault(msg, 1, 0),
    availablebalance: jspb.Message.getFieldWithDefault(msg, 2, 0),
    lockedbalance: jspb.Message.getFieldWithDefault(msg, 3, 0),
    reservedbalance: jspb.Message.getFieldWithDefault(msg, 4, 0),
    totalbalance: jspb.Message.getFieldWithDefault(msg, 5, 0)
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
      var value = /** @type {number} */ (reader.readUint64());
      msg.setBalance(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAvailablebalance(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLockedbalance(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setReservedbalance(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTotalbalance(value);
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
  f = message.getBalance();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getAvailablebalance();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getLockedbalance();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getReservedbalance();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getTotalbalance();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
};


/**
 * optional uint64 balance = 1;
 * @return {number}
 */
proto.io.bisq.protobuffer.XmrBalanceInfo.prototype.getBalance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.XmrBalanceInfo} returns this
 */
proto.io.bisq.protobuffer.XmrBalanceInfo.prototype.setBalance = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 availableBalance = 2;
 * @return {number}
 */
proto.io.bisq.protobuffer.XmrBalanceInfo.prototype.getAvailablebalance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.XmrBalanceInfo} returns this
 */
proto.io.bisq.protobuffer.XmrBalanceInfo.prototype.setAvailablebalance = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 lockedBalance = 3;
 * @return {number}
 */
proto.io.bisq.protobuffer.XmrBalanceInfo.prototype.getLockedbalance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.XmrBalanceInfo} returns this
 */
proto.io.bisq.protobuffer.XmrBalanceInfo.prototype.setLockedbalance = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint64 reservedBalance = 4;
 * @return {number}
 */
proto.io.bisq.protobuffer.XmrBalanceInfo.prototype.getReservedbalance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.XmrBalanceInfo} returns this
 */
proto.io.bisq.protobuffer.XmrBalanceInfo.prototype.setReservedbalance = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint64 totalBalance = 5;
 * @return {number}
 */
proto.io.bisq.protobuffer.XmrBalanceInfo.prototype.getTotalbalance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.XmrBalanceInfo} returns this
 */
proto.io.bisq.protobuffer.XmrBalanceInfo.prototype.setTotalbalance = function(value) {
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
    numconfirmations: jspb.Message.getFieldWithDefault(msg, 3, 0),
    isaddressunused: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
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
      msg.setNumconfirmations(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsaddressunused(value);
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
  f = message.getNumconfirmations();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getIsaddressunused();
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
 * optional int64 numConfirmations = 3;
 * @return {number}
 */
proto.io.bisq.protobuffer.AddressBalanceInfo.prototype.getNumconfirmations = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.bisq.protobuffer.AddressBalanceInfo} returns this
 */
proto.io.bisq.protobuffer.AddressBalanceInfo.prototype.setNumconfirmations = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bool isAddressUnused = 4;
 * @return {boolean}
 */
proto.io.bisq.protobuffer.AddressBalanceInfo.prototype.getIsaddressunused = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.io.bisq.protobuffer.AddressBalanceInfo} returns this
 */
proto.io.bisq.protobuffer.AddressBalanceInfo.prototype.setIsaddressunused = function(value) {
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
