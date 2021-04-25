/**
 * @fileoverview gRPC-Web generated client stub for io.bisq.protobuffer
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var pb_pb = require('./pb_pb.js')
const proto = {};
proto.io = {};
proto.io.bisq = {};
proto.io.bisq.protobuffer = require('./grpc_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.io.bisq.protobuffer.DisputeAgentsClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.io.bisq.protobuffer.DisputeAgentsPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.io.bisq.protobuffer.RegisterDisputeAgentRequest,
 *   !proto.io.bisq.protobuffer.RegisterDisputeAgentReply>}
 */
const methodDescriptor_DisputeAgents_RegisterDisputeAgent = new grpc.web.MethodDescriptor(
  '/io.bisq.protobuffer.DisputeAgents/RegisterDisputeAgent',
  grpc.web.MethodType.UNARY,
  proto.io.bisq.protobuffer.RegisterDisputeAgentRequest,
  proto.io.bisq.protobuffer.RegisterDisputeAgentReply,
  /**
   * @param {!proto.io.bisq.protobuffer.RegisterDisputeAgentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.io.bisq.protobuffer.RegisterDisputeAgentReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.io.bisq.protobuffer.RegisterDisputeAgentRequest,
 *   !proto.io.bisq.protobuffer.RegisterDisputeAgentReply>}
 */
const methodInfo_DisputeAgents_RegisterDisputeAgent = new grpc.web.AbstractClientBase.MethodInfo(
  proto.io.bisq.protobuffer.RegisterDisputeAgentReply,
  /**
   * @param {!proto.io.bisq.protobuffer.RegisterDisputeAgentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.io.bisq.protobuffer.RegisterDisputeAgentReply.deserializeBinary
);


/**
 * @param {!proto.io.bisq.protobuffer.RegisterDisputeAgentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.io.bisq.protobuffer.RegisterDisputeAgentReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.io.bisq.protobuffer.RegisterDisputeAgentReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.io.bisq.protobuffer.DisputeAgentsClient.prototype.registerDisputeAgent =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/io.bisq.protobuffer.DisputeAgents/RegisterDisputeAgent',
      request,
      metadata || {},
      methodDescriptor_DisputeAgents_RegisterDisputeAgent,
      callback);
};


/**
 * @param {!proto.io.bisq.protobuffer.RegisterDisputeAgentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.io.bisq.protobuffer.RegisterDisputeAgentReply>}
 *     Promise that resolves to the response
 */
proto.io.bisq.protobuffer.DisputeAgentsPromiseClient.prototype.registerDisputeAgent =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/io.bisq.protobuffer.DisputeAgents/RegisterDisputeAgent',
      request,
      metadata || {},
      methodDescriptor_DisputeAgents_RegisterDisputeAgent);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.io.bisq.protobuffer.OffersClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.io.bisq.protobuffer.OffersPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.io.bisq.protobuffer.GetOffersRequest,
 *   !proto.io.bisq.protobuffer.GetOffersReply>}
 */
const methodDescriptor_Offers_GetOffers = new grpc.web.MethodDescriptor(
  '/io.bisq.protobuffer.Offers/GetOffers',
  grpc.web.MethodType.UNARY,
  proto.io.bisq.protobuffer.GetOffersRequest,
  proto.io.bisq.protobuffer.GetOffersReply,
  /**
   * @param {!proto.io.bisq.protobuffer.GetOffersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.io.bisq.protobuffer.GetOffersReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.io.bisq.protobuffer.GetOffersRequest,
 *   !proto.io.bisq.protobuffer.GetOffersReply>}
 */
const methodInfo_Offers_GetOffers = new grpc.web.AbstractClientBase.MethodInfo(
  proto.io.bisq.protobuffer.GetOffersReply,
  /**
   * @param {!proto.io.bisq.protobuffer.GetOffersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.io.bisq.protobuffer.GetOffersReply.deserializeBinary
);


/**
 * @param {!proto.io.bisq.protobuffer.GetOffersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.io.bisq.protobuffer.GetOffersReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.io.bisq.protobuffer.GetOffersReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.io.bisq.protobuffer.OffersClient.prototype.getOffers =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/io.bisq.protobuffer.Offers/GetOffers',
      request,
      metadata || {},
      methodDescriptor_Offers_GetOffers,
      callback);
};


/**
 * @param {!proto.io.bisq.protobuffer.GetOffersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.io.bisq.protobuffer.GetOffersReply>}
 *     Promise that resolves to the response
 */
proto.io.bisq.protobuffer.OffersPromiseClient.prototype.getOffers =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/io.bisq.protobuffer.Offers/GetOffers',
      request,
      metadata || {},
      methodDescriptor_Offers_GetOffers);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.io.bisq.protobuffer.CreateOfferRequest,
 *   !proto.io.bisq.protobuffer.CreateOfferReply>}
 */
const methodDescriptor_Offers_CreateOffer = new grpc.web.MethodDescriptor(
  '/io.bisq.protobuffer.Offers/CreateOffer',
  grpc.web.MethodType.UNARY,
  proto.io.bisq.protobuffer.CreateOfferRequest,
  proto.io.bisq.protobuffer.CreateOfferReply,
  /**
   * @param {!proto.io.bisq.protobuffer.CreateOfferRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.io.bisq.protobuffer.CreateOfferReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.io.bisq.protobuffer.CreateOfferRequest,
 *   !proto.io.bisq.protobuffer.CreateOfferReply>}
 */
const methodInfo_Offers_CreateOffer = new grpc.web.AbstractClientBase.MethodInfo(
  proto.io.bisq.protobuffer.CreateOfferReply,
  /**
   * @param {!proto.io.bisq.protobuffer.CreateOfferRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.io.bisq.protobuffer.CreateOfferReply.deserializeBinary
);


/**
 * @param {!proto.io.bisq.protobuffer.CreateOfferRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.io.bisq.protobuffer.CreateOfferReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.io.bisq.protobuffer.CreateOfferReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.io.bisq.protobuffer.OffersClient.prototype.createOffer =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/io.bisq.protobuffer.Offers/CreateOffer',
      request,
      metadata || {},
      methodDescriptor_Offers_CreateOffer,
      callback);
};


/**
 * @param {!proto.io.bisq.protobuffer.CreateOfferRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.io.bisq.protobuffer.CreateOfferReply>}
 *     Promise that resolves to the response
 */
proto.io.bisq.protobuffer.OffersPromiseClient.prototype.createOffer =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/io.bisq.protobuffer.Offers/CreateOffer',
      request,
      metadata || {},
      methodDescriptor_Offers_CreateOffer);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.io.bisq.protobuffer.PaymentAccountsClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.io.bisq.protobuffer.PaymentAccountsPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.io.bisq.protobuffer.CreatePaymentAccountRequest,
 *   !proto.io.bisq.protobuffer.CreatePaymentAccountReply>}
 */
const methodDescriptor_PaymentAccounts_CreatePaymentAccount = new grpc.web.MethodDescriptor(
  '/io.bisq.protobuffer.PaymentAccounts/CreatePaymentAccount',
  grpc.web.MethodType.UNARY,
  proto.io.bisq.protobuffer.CreatePaymentAccountRequest,
  proto.io.bisq.protobuffer.CreatePaymentAccountReply,
  /**
   * @param {!proto.io.bisq.protobuffer.CreatePaymentAccountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.io.bisq.protobuffer.CreatePaymentAccountReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.io.bisq.protobuffer.CreatePaymentAccountRequest,
 *   !proto.io.bisq.protobuffer.CreatePaymentAccountReply>}
 */
const methodInfo_PaymentAccounts_CreatePaymentAccount = new grpc.web.AbstractClientBase.MethodInfo(
  proto.io.bisq.protobuffer.CreatePaymentAccountReply,
  /**
   * @param {!proto.io.bisq.protobuffer.CreatePaymentAccountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.io.bisq.protobuffer.CreatePaymentAccountReply.deserializeBinary
);


/**
 * @param {!proto.io.bisq.protobuffer.CreatePaymentAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.io.bisq.protobuffer.CreatePaymentAccountReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.io.bisq.protobuffer.CreatePaymentAccountReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.io.bisq.protobuffer.PaymentAccountsClient.prototype.createPaymentAccount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/io.bisq.protobuffer.PaymentAccounts/CreatePaymentAccount',
      request,
      metadata || {},
      methodDescriptor_PaymentAccounts_CreatePaymentAccount,
      callback);
};


/**
 * @param {!proto.io.bisq.protobuffer.CreatePaymentAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.io.bisq.protobuffer.CreatePaymentAccountReply>}
 *     Promise that resolves to the response
 */
proto.io.bisq.protobuffer.PaymentAccountsPromiseClient.prototype.createPaymentAccount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/io.bisq.protobuffer.PaymentAccounts/CreatePaymentAccount',
      request,
      metadata || {},
      methodDescriptor_PaymentAccounts_CreatePaymentAccount);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.io.bisq.protobuffer.GetPaymentAccountsRequest,
 *   !proto.io.bisq.protobuffer.GetPaymentAccountsReply>}
 */
const methodDescriptor_PaymentAccounts_GetPaymentAccounts = new grpc.web.MethodDescriptor(
  '/io.bisq.protobuffer.PaymentAccounts/GetPaymentAccounts',
  grpc.web.MethodType.UNARY,
  proto.io.bisq.protobuffer.GetPaymentAccountsRequest,
  proto.io.bisq.protobuffer.GetPaymentAccountsReply,
  /**
   * @param {!proto.io.bisq.protobuffer.GetPaymentAccountsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.io.bisq.protobuffer.GetPaymentAccountsReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.io.bisq.protobuffer.GetPaymentAccountsRequest,
 *   !proto.io.bisq.protobuffer.GetPaymentAccountsReply>}
 */
const methodInfo_PaymentAccounts_GetPaymentAccounts = new grpc.web.AbstractClientBase.MethodInfo(
  proto.io.bisq.protobuffer.GetPaymentAccountsReply,
  /**
   * @param {!proto.io.bisq.protobuffer.GetPaymentAccountsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.io.bisq.protobuffer.GetPaymentAccountsReply.deserializeBinary
);


/**
 * @param {!proto.io.bisq.protobuffer.GetPaymentAccountsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.io.bisq.protobuffer.GetPaymentAccountsReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.io.bisq.protobuffer.GetPaymentAccountsReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.io.bisq.protobuffer.PaymentAccountsClient.prototype.getPaymentAccounts =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/io.bisq.protobuffer.PaymentAccounts/GetPaymentAccounts',
      request,
      metadata || {},
      methodDescriptor_PaymentAccounts_GetPaymentAccounts,
      callback);
};


/**
 * @param {!proto.io.bisq.protobuffer.GetPaymentAccountsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.io.bisq.protobuffer.GetPaymentAccountsReply>}
 *     Promise that resolves to the response
 */
proto.io.bisq.protobuffer.PaymentAccountsPromiseClient.prototype.getPaymentAccounts =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/io.bisq.protobuffer.PaymentAccounts/GetPaymentAccounts',
      request,
      metadata || {},
      methodDescriptor_PaymentAccounts_GetPaymentAccounts);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.io.bisq.protobuffer.PriceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.io.bisq.protobuffer.PricePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.io.bisq.protobuffer.MarketPriceRequest,
 *   !proto.io.bisq.protobuffer.MarketPriceReply>}
 */
const methodDescriptor_Price_GetMarketPrice = new grpc.web.MethodDescriptor(
  '/io.bisq.protobuffer.Price/GetMarketPrice',
  grpc.web.MethodType.UNARY,
  proto.io.bisq.protobuffer.MarketPriceRequest,
  proto.io.bisq.protobuffer.MarketPriceReply,
  /**
   * @param {!proto.io.bisq.protobuffer.MarketPriceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.io.bisq.protobuffer.MarketPriceReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.io.bisq.protobuffer.MarketPriceRequest,
 *   !proto.io.bisq.protobuffer.MarketPriceReply>}
 */
const methodInfo_Price_GetMarketPrice = new grpc.web.AbstractClientBase.MethodInfo(
  proto.io.bisq.protobuffer.MarketPriceReply,
  /**
   * @param {!proto.io.bisq.protobuffer.MarketPriceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.io.bisq.protobuffer.MarketPriceReply.deserializeBinary
);


/**
 * @param {!proto.io.bisq.protobuffer.MarketPriceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.io.bisq.protobuffer.MarketPriceReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.io.bisq.protobuffer.MarketPriceReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.io.bisq.protobuffer.PriceClient.prototype.getMarketPrice =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/io.bisq.protobuffer.Price/GetMarketPrice',
      request,
      metadata || {},
      methodDescriptor_Price_GetMarketPrice,
      callback);
};


/**
 * @param {!proto.io.bisq.protobuffer.MarketPriceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.io.bisq.protobuffer.MarketPriceReply>}
 *     Promise that resolves to the response
 */
proto.io.bisq.protobuffer.PricePromiseClient.prototype.getMarketPrice =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/io.bisq.protobuffer.Price/GetMarketPrice',
      request,
      metadata || {},
      methodDescriptor_Price_GetMarketPrice);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.io.bisq.protobuffer.GetTradeStatisticsClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.io.bisq.protobuffer.GetTradeStatisticsPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.io.bisq.protobuffer.GetTradeStatisticsRequest,
 *   !proto.io.bisq.protobuffer.GetTradeStatisticsReply>}
 */
const methodDescriptor_GetTradeStatistics_GetTradeStatistics = new grpc.web.MethodDescriptor(
  '/io.bisq.protobuffer.GetTradeStatistics/GetTradeStatistics',
  grpc.web.MethodType.UNARY,
  proto.io.bisq.protobuffer.GetTradeStatisticsRequest,
  proto.io.bisq.protobuffer.GetTradeStatisticsReply,
  /**
   * @param {!proto.io.bisq.protobuffer.GetTradeStatisticsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.io.bisq.protobuffer.GetTradeStatisticsReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.io.bisq.protobuffer.GetTradeStatisticsRequest,
 *   !proto.io.bisq.protobuffer.GetTradeStatisticsReply>}
 */
const methodInfo_GetTradeStatistics_GetTradeStatistics = new grpc.web.AbstractClientBase.MethodInfo(
  proto.io.bisq.protobuffer.GetTradeStatisticsReply,
  /**
   * @param {!proto.io.bisq.protobuffer.GetTradeStatisticsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.io.bisq.protobuffer.GetTradeStatisticsReply.deserializeBinary
);


/**
 * @param {!proto.io.bisq.protobuffer.GetTradeStatisticsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.io.bisq.protobuffer.GetTradeStatisticsReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.io.bisq.protobuffer.GetTradeStatisticsReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.io.bisq.protobuffer.GetTradeStatisticsClient.prototype.getTradeStatistics =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/io.bisq.protobuffer.GetTradeStatistics/GetTradeStatistics',
      request,
      metadata || {},
      methodDescriptor_GetTradeStatistics_GetTradeStatistics,
      callback);
};


/**
 * @param {!proto.io.bisq.protobuffer.GetTradeStatisticsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.io.bisq.protobuffer.GetTradeStatisticsReply>}
 *     Promise that resolves to the response
 */
proto.io.bisq.protobuffer.GetTradeStatisticsPromiseClient.prototype.getTradeStatistics =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/io.bisq.protobuffer.GetTradeStatistics/GetTradeStatistics',
      request,
      metadata || {},
      methodDescriptor_GetTradeStatistics_GetTradeStatistics);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.io.bisq.protobuffer.WalletsClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.io.bisq.protobuffer.WalletsPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.io.bisq.protobuffer.GetBalanceRequest,
 *   !proto.io.bisq.protobuffer.GetBalanceReply>}
 */
const methodDescriptor_Wallets_GetBalance = new grpc.web.MethodDescriptor(
  '/io.bisq.protobuffer.Wallets/GetBalance',
  grpc.web.MethodType.UNARY,
  proto.io.bisq.protobuffer.GetBalanceRequest,
  proto.io.bisq.protobuffer.GetBalanceReply,
  /**
   * @param {!proto.io.bisq.protobuffer.GetBalanceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.io.bisq.protobuffer.GetBalanceReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.io.bisq.protobuffer.GetBalanceRequest,
 *   !proto.io.bisq.protobuffer.GetBalanceReply>}
 */
const methodInfo_Wallets_GetBalance = new grpc.web.AbstractClientBase.MethodInfo(
  proto.io.bisq.protobuffer.GetBalanceReply,
  /**
   * @param {!proto.io.bisq.protobuffer.GetBalanceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.io.bisq.protobuffer.GetBalanceReply.deserializeBinary
);


/**
 * @param {!proto.io.bisq.protobuffer.GetBalanceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.io.bisq.protobuffer.GetBalanceReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.io.bisq.protobuffer.GetBalanceReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.io.bisq.protobuffer.WalletsClient.prototype.getBalance =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/io.bisq.protobuffer.Wallets/GetBalance',
      request,
      metadata || {},
      methodDescriptor_Wallets_GetBalance,
      callback);
};


/**
 * @param {!proto.io.bisq.protobuffer.GetBalanceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.io.bisq.protobuffer.GetBalanceReply>}
 *     Promise that resolves to the response
 */
proto.io.bisq.protobuffer.WalletsPromiseClient.prototype.getBalance =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/io.bisq.protobuffer.Wallets/GetBalance',
      request,
      metadata || {},
      methodDescriptor_Wallets_GetBalance);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.io.bisq.protobuffer.GetAddressBalanceRequest,
 *   !proto.io.bisq.protobuffer.GetAddressBalanceReply>}
 */
const methodDescriptor_Wallets_GetAddressBalance = new grpc.web.MethodDescriptor(
  '/io.bisq.protobuffer.Wallets/GetAddressBalance',
  grpc.web.MethodType.UNARY,
  proto.io.bisq.protobuffer.GetAddressBalanceRequest,
  proto.io.bisq.protobuffer.GetAddressBalanceReply,
  /**
   * @param {!proto.io.bisq.protobuffer.GetAddressBalanceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.io.bisq.protobuffer.GetAddressBalanceReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.io.bisq.protobuffer.GetAddressBalanceRequest,
 *   !proto.io.bisq.protobuffer.GetAddressBalanceReply>}
 */
const methodInfo_Wallets_GetAddressBalance = new grpc.web.AbstractClientBase.MethodInfo(
  proto.io.bisq.protobuffer.GetAddressBalanceReply,
  /**
   * @param {!proto.io.bisq.protobuffer.GetAddressBalanceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.io.bisq.protobuffer.GetAddressBalanceReply.deserializeBinary
);


/**
 * @param {!proto.io.bisq.protobuffer.GetAddressBalanceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.io.bisq.protobuffer.GetAddressBalanceReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.io.bisq.protobuffer.GetAddressBalanceReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.io.bisq.protobuffer.WalletsClient.prototype.getAddressBalance =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/io.bisq.protobuffer.Wallets/GetAddressBalance',
      request,
      metadata || {},
      methodDescriptor_Wallets_GetAddressBalance,
      callback);
};


/**
 * @param {!proto.io.bisq.protobuffer.GetAddressBalanceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.io.bisq.protobuffer.GetAddressBalanceReply>}
 *     Promise that resolves to the response
 */
proto.io.bisq.protobuffer.WalletsPromiseClient.prototype.getAddressBalance =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/io.bisq.protobuffer.Wallets/GetAddressBalance',
      request,
      metadata || {},
      methodDescriptor_Wallets_GetAddressBalance);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.io.bisq.protobuffer.GetFundingAddressesRequest,
 *   !proto.io.bisq.protobuffer.GetFundingAddressesReply>}
 */
const methodDescriptor_Wallets_GetFundingAddresses = new grpc.web.MethodDescriptor(
  '/io.bisq.protobuffer.Wallets/GetFundingAddresses',
  grpc.web.MethodType.UNARY,
  proto.io.bisq.protobuffer.GetFundingAddressesRequest,
  proto.io.bisq.protobuffer.GetFundingAddressesReply,
  /**
   * @param {!proto.io.bisq.protobuffer.GetFundingAddressesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.io.bisq.protobuffer.GetFundingAddressesReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.io.bisq.protobuffer.GetFundingAddressesRequest,
 *   !proto.io.bisq.protobuffer.GetFundingAddressesReply>}
 */
const methodInfo_Wallets_GetFundingAddresses = new grpc.web.AbstractClientBase.MethodInfo(
  proto.io.bisq.protobuffer.GetFundingAddressesReply,
  /**
   * @param {!proto.io.bisq.protobuffer.GetFundingAddressesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.io.bisq.protobuffer.GetFundingAddressesReply.deserializeBinary
);


/**
 * @param {!proto.io.bisq.protobuffer.GetFundingAddressesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.io.bisq.protobuffer.GetFundingAddressesReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.io.bisq.protobuffer.GetFundingAddressesReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.io.bisq.protobuffer.WalletsClient.prototype.getFundingAddresses =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/io.bisq.protobuffer.Wallets/GetFundingAddresses',
      request,
      metadata || {},
      methodDescriptor_Wallets_GetFundingAddresses,
      callback);
};


/**
 * @param {!proto.io.bisq.protobuffer.GetFundingAddressesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.io.bisq.protobuffer.GetFundingAddressesReply>}
 *     Promise that resolves to the response
 */
proto.io.bisq.protobuffer.WalletsPromiseClient.prototype.getFundingAddresses =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/io.bisq.protobuffer.Wallets/GetFundingAddresses',
      request,
      metadata || {},
      methodDescriptor_Wallets_GetFundingAddresses);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.io.bisq.protobuffer.SetWalletPasswordRequest,
 *   !proto.io.bisq.protobuffer.SetWalletPasswordReply>}
 */
const methodDescriptor_Wallets_SetWalletPassword = new grpc.web.MethodDescriptor(
  '/io.bisq.protobuffer.Wallets/SetWalletPassword',
  grpc.web.MethodType.UNARY,
  proto.io.bisq.protobuffer.SetWalletPasswordRequest,
  proto.io.bisq.protobuffer.SetWalletPasswordReply,
  /**
   * @param {!proto.io.bisq.protobuffer.SetWalletPasswordRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.io.bisq.protobuffer.SetWalletPasswordReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.io.bisq.protobuffer.SetWalletPasswordRequest,
 *   !proto.io.bisq.protobuffer.SetWalletPasswordReply>}
 */
const methodInfo_Wallets_SetWalletPassword = new grpc.web.AbstractClientBase.MethodInfo(
  proto.io.bisq.protobuffer.SetWalletPasswordReply,
  /**
   * @param {!proto.io.bisq.protobuffer.SetWalletPasswordRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.io.bisq.protobuffer.SetWalletPasswordReply.deserializeBinary
);


/**
 * @param {!proto.io.bisq.protobuffer.SetWalletPasswordRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.io.bisq.protobuffer.SetWalletPasswordReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.io.bisq.protobuffer.SetWalletPasswordReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.io.bisq.protobuffer.WalletsClient.prototype.setWalletPassword =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/io.bisq.protobuffer.Wallets/SetWalletPassword',
      request,
      metadata || {},
      methodDescriptor_Wallets_SetWalletPassword,
      callback);
};


/**
 * @param {!proto.io.bisq.protobuffer.SetWalletPasswordRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.io.bisq.protobuffer.SetWalletPasswordReply>}
 *     Promise that resolves to the response
 */
proto.io.bisq.protobuffer.WalletsPromiseClient.prototype.setWalletPassword =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/io.bisq.protobuffer.Wallets/SetWalletPassword',
      request,
      metadata || {},
      methodDescriptor_Wallets_SetWalletPassword);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.io.bisq.protobuffer.RemoveWalletPasswordRequest,
 *   !proto.io.bisq.protobuffer.RemoveWalletPasswordReply>}
 */
const methodDescriptor_Wallets_RemoveWalletPassword = new grpc.web.MethodDescriptor(
  '/io.bisq.protobuffer.Wallets/RemoveWalletPassword',
  grpc.web.MethodType.UNARY,
  proto.io.bisq.protobuffer.RemoveWalletPasswordRequest,
  proto.io.bisq.protobuffer.RemoveWalletPasswordReply,
  /**
   * @param {!proto.io.bisq.protobuffer.RemoveWalletPasswordRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.io.bisq.protobuffer.RemoveWalletPasswordReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.io.bisq.protobuffer.RemoveWalletPasswordRequest,
 *   !proto.io.bisq.protobuffer.RemoveWalletPasswordReply>}
 */
const methodInfo_Wallets_RemoveWalletPassword = new grpc.web.AbstractClientBase.MethodInfo(
  proto.io.bisq.protobuffer.RemoveWalletPasswordReply,
  /**
   * @param {!proto.io.bisq.protobuffer.RemoveWalletPasswordRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.io.bisq.protobuffer.RemoveWalletPasswordReply.deserializeBinary
);


/**
 * @param {!proto.io.bisq.protobuffer.RemoveWalletPasswordRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.io.bisq.protobuffer.RemoveWalletPasswordReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.io.bisq.protobuffer.RemoveWalletPasswordReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.io.bisq.protobuffer.WalletsClient.prototype.removeWalletPassword =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/io.bisq.protobuffer.Wallets/RemoveWalletPassword',
      request,
      metadata || {},
      methodDescriptor_Wallets_RemoveWalletPassword,
      callback);
};


/**
 * @param {!proto.io.bisq.protobuffer.RemoveWalletPasswordRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.io.bisq.protobuffer.RemoveWalletPasswordReply>}
 *     Promise that resolves to the response
 */
proto.io.bisq.protobuffer.WalletsPromiseClient.prototype.removeWalletPassword =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/io.bisq.protobuffer.Wallets/RemoveWalletPassword',
      request,
      metadata || {},
      methodDescriptor_Wallets_RemoveWalletPassword);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.io.bisq.protobuffer.LockWalletRequest,
 *   !proto.io.bisq.protobuffer.LockWalletReply>}
 */
const methodDescriptor_Wallets_LockWallet = new grpc.web.MethodDescriptor(
  '/io.bisq.protobuffer.Wallets/LockWallet',
  grpc.web.MethodType.UNARY,
  proto.io.bisq.protobuffer.LockWalletRequest,
  proto.io.bisq.protobuffer.LockWalletReply,
  /**
   * @param {!proto.io.bisq.protobuffer.LockWalletRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.io.bisq.protobuffer.LockWalletReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.io.bisq.protobuffer.LockWalletRequest,
 *   !proto.io.bisq.protobuffer.LockWalletReply>}
 */
const methodInfo_Wallets_LockWallet = new grpc.web.AbstractClientBase.MethodInfo(
  proto.io.bisq.protobuffer.LockWalletReply,
  /**
   * @param {!proto.io.bisq.protobuffer.LockWalletRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.io.bisq.protobuffer.LockWalletReply.deserializeBinary
);


/**
 * @param {!proto.io.bisq.protobuffer.LockWalletRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.io.bisq.protobuffer.LockWalletReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.io.bisq.protobuffer.LockWalletReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.io.bisq.protobuffer.WalletsClient.prototype.lockWallet =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/io.bisq.protobuffer.Wallets/LockWallet',
      request,
      metadata || {},
      methodDescriptor_Wallets_LockWallet,
      callback);
};


/**
 * @param {!proto.io.bisq.protobuffer.LockWalletRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.io.bisq.protobuffer.LockWalletReply>}
 *     Promise that resolves to the response
 */
proto.io.bisq.protobuffer.WalletsPromiseClient.prototype.lockWallet =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/io.bisq.protobuffer.Wallets/LockWallet',
      request,
      metadata || {},
      methodDescriptor_Wallets_LockWallet);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.io.bisq.protobuffer.UnlockWalletRequest,
 *   !proto.io.bisq.protobuffer.UnlockWalletReply>}
 */
const methodDescriptor_Wallets_UnlockWallet = new grpc.web.MethodDescriptor(
  '/io.bisq.protobuffer.Wallets/UnlockWallet',
  grpc.web.MethodType.UNARY,
  proto.io.bisq.protobuffer.UnlockWalletRequest,
  proto.io.bisq.protobuffer.UnlockWalletReply,
  /**
   * @param {!proto.io.bisq.protobuffer.UnlockWalletRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.io.bisq.protobuffer.UnlockWalletReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.io.bisq.protobuffer.UnlockWalletRequest,
 *   !proto.io.bisq.protobuffer.UnlockWalletReply>}
 */
const methodInfo_Wallets_UnlockWallet = new grpc.web.AbstractClientBase.MethodInfo(
  proto.io.bisq.protobuffer.UnlockWalletReply,
  /**
   * @param {!proto.io.bisq.protobuffer.UnlockWalletRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.io.bisq.protobuffer.UnlockWalletReply.deserializeBinary
);


/**
 * @param {!proto.io.bisq.protobuffer.UnlockWalletRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.io.bisq.protobuffer.UnlockWalletReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.io.bisq.protobuffer.UnlockWalletReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.io.bisq.protobuffer.WalletsClient.prototype.unlockWallet =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/io.bisq.protobuffer.Wallets/UnlockWallet',
      request,
      metadata || {},
      methodDescriptor_Wallets_UnlockWallet,
      callback);
};


/**
 * @param {!proto.io.bisq.protobuffer.UnlockWalletRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.io.bisq.protobuffer.UnlockWalletReply>}
 *     Promise that resolves to the response
 */
proto.io.bisq.protobuffer.WalletsPromiseClient.prototype.unlockWallet =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/io.bisq.protobuffer.Wallets/UnlockWallet',
      request,
      metadata || {},
      methodDescriptor_Wallets_UnlockWallet);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.io.bisq.protobuffer.GetVersionClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.io.bisq.protobuffer.GetVersionPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.io.bisq.protobuffer.GetVersionRequest,
 *   !proto.io.bisq.protobuffer.GetVersionReply>}
 */
const methodDescriptor_GetVersion_GetVersion = new grpc.web.MethodDescriptor(
  '/io.bisq.protobuffer.GetVersion/GetVersion',
  grpc.web.MethodType.UNARY,
  proto.io.bisq.protobuffer.GetVersionRequest,
  proto.io.bisq.protobuffer.GetVersionReply,
  /**
   * @param {!proto.io.bisq.protobuffer.GetVersionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.io.bisq.protobuffer.GetVersionReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.io.bisq.protobuffer.GetVersionRequest,
 *   !proto.io.bisq.protobuffer.GetVersionReply>}
 */
const methodInfo_GetVersion_GetVersion = new grpc.web.AbstractClientBase.MethodInfo(
  proto.io.bisq.protobuffer.GetVersionReply,
  /**
   * @param {!proto.io.bisq.protobuffer.GetVersionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.io.bisq.protobuffer.GetVersionReply.deserializeBinary
);


/**
 * @param {!proto.io.bisq.protobuffer.GetVersionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.io.bisq.protobuffer.GetVersionReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.io.bisq.protobuffer.GetVersionReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.io.bisq.protobuffer.GetVersionClient.prototype.getVersion =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/io.bisq.protobuffer.GetVersion/GetVersion',
      request,
      metadata || {},
      methodDescriptor_GetVersion_GetVersion,
      callback);
};


/**
 * @param {!proto.io.bisq.protobuffer.GetVersionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.io.bisq.protobuffer.GetVersionReply>}
 *     Promise that resolves to the response
 */
proto.io.bisq.protobuffer.GetVersionPromiseClient.prototype.getVersion =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/io.bisq.protobuffer.GetVersion/GetVersion',
      request,
      metadata || {},
      methodDescriptor_GetVersion_GetVersion);
};


module.exports = proto.io.bisq.protobuffer;

