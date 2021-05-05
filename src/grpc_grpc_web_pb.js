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
proto.io.bisq.protobuffer.HelpClient =
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
proto.io.bisq.protobuffer.HelpPromiseClient =
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
 *   !proto.io.bisq.protobuffer.GetMethodHelpRequest,
 *   !proto.io.bisq.protobuffer.GetMethodHelpReply>}
 */
const methodDescriptor_Help_GetMethodHelp = new grpc.web.MethodDescriptor(
  '/io.bisq.protobuffer.Help/GetMethodHelp',
  grpc.web.MethodType.UNARY,
  proto.io.bisq.protobuffer.GetMethodHelpRequest,
  proto.io.bisq.protobuffer.GetMethodHelpReply,
  /**
   * @param {!proto.io.bisq.protobuffer.GetMethodHelpRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.io.bisq.protobuffer.GetMethodHelpReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.io.bisq.protobuffer.GetMethodHelpRequest,
 *   !proto.io.bisq.protobuffer.GetMethodHelpReply>}
 */
const methodInfo_Help_GetMethodHelp = new grpc.web.AbstractClientBase.MethodInfo(
  proto.io.bisq.protobuffer.GetMethodHelpReply,
  /**
   * @param {!proto.io.bisq.protobuffer.GetMethodHelpRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.io.bisq.protobuffer.GetMethodHelpReply.deserializeBinary
);


/**
 * @param {!proto.io.bisq.protobuffer.GetMethodHelpRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.io.bisq.protobuffer.GetMethodHelpReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.io.bisq.protobuffer.GetMethodHelpReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.io.bisq.protobuffer.HelpClient.prototype.getMethodHelp =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/io.bisq.protobuffer.Help/GetMethodHelp',
      request,
      metadata || {},
      methodDescriptor_Help_GetMethodHelp,
      callback);
};


/**
 * @param {!proto.io.bisq.protobuffer.GetMethodHelpRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.io.bisq.protobuffer.GetMethodHelpReply>}
 *     Promise that resolves to the response
 */
proto.io.bisq.protobuffer.HelpPromiseClient.prototype.getMethodHelp =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/io.bisq.protobuffer.Help/GetMethodHelp',
      request,
      metadata || {},
      methodDescriptor_Help_GetMethodHelp);
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
 *   !proto.io.bisq.protobuffer.GetOfferRequest,
 *   !proto.io.bisq.protobuffer.GetOfferReply>}
 */
const methodDescriptor_Offers_GetOffer = new grpc.web.MethodDescriptor(
  '/io.bisq.protobuffer.Offers/GetOffer',
  grpc.web.MethodType.UNARY,
  proto.io.bisq.protobuffer.GetOfferRequest,
  proto.io.bisq.protobuffer.GetOfferReply,
  /**
   * @param {!proto.io.bisq.protobuffer.GetOfferRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.io.bisq.protobuffer.GetOfferReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.io.bisq.protobuffer.GetOfferRequest,
 *   !proto.io.bisq.protobuffer.GetOfferReply>}
 */
const methodInfo_Offers_GetOffer = new grpc.web.AbstractClientBase.MethodInfo(
  proto.io.bisq.protobuffer.GetOfferReply,
  /**
   * @param {!proto.io.bisq.protobuffer.GetOfferRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.io.bisq.protobuffer.GetOfferReply.deserializeBinary
);


/**
 * @param {!proto.io.bisq.protobuffer.GetOfferRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.io.bisq.protobuffer.GetOfferReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.io.bisq.protobuffer.GetOfferReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.io.bisq.protobuffer.OffersClient.prototype.getOffer =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/io.bisq.protobuffer.Offers/GetOffer',
      request,
      metadata || {},
      methodDescriptor_Offers_GetOffer,
      callback);
};


/**
 * @param {!proto.io.bisq.protobuffer.GetOfferRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.io.bisq.protobuffer.GetOfferReply>}
 *     Promise that resolves to the response
 */
proto.io.bisq.protobuffer.OffersPromiseClient.prototype.getOffer =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/io.bisq.protobuffer.Offers/GetOffer',
      request,
      metadata || {},
      methodDescriptor_Offers_GetOffer);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.io.bisq.protobuffer.GetMyOfferRequest,
 *   !proto.io.bisq.protobuffer.GetMyOfferReply>}
 */
const methodDescriptor_Offers_GetMyOffer = new grpc.web.MethodDescriptor(
  '/io.bisq.protobuffer.Offers/GetMyOffer',
  grpc.web.MethodType.UNARY,
  proto.io.bisq.protobuffer.GetMyOfferRequest,
  proto.io.bisq.protobuffer.GetMyOfferReply,
  /**
   * @param {!proto.io.bisq.protobuffer.GetMyOfferRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.io.bisq.protobuffer.GetMyOfferReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.io.bisq.protobuffer.GetMyOfferRequest,
 *   !proto.io.bisq.protobuffer.GetMyOfferReply>}
 */
const methodInfo_Offers_GetMyOffer = new grpc.web.AbstractClientBase.MethodInfo(
  proto.io.bisq.protobuffer.GetMyOfferReply,
  /**
   * @param {!proto.io.bisq.protobuffer.GetMyOfferRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.io.bisq.protobuffer.GetMyOfferReply.deserializeBinary
);


/**
 * @param {!proto.io.bisq.protobuffer.GetMyOfferRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.io.bisq.protobuffer.GetMyOfferReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.io.bisq.protobuffer.GetMyOfferReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.io.bisq.protobuffer.OffersClient.prototype.getMyOffer =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/io.bisq.protobuffer.Offers/GetMyOffer',
      request,
      metadata || {},
      methodDescriptor_Offers_GetMyOffer,
      callback);
};


/**
 * @param {!proto.io.bisq.protobuffer.GetMyOfferRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.io.bisq.protobuffer.GetMyOfferReply>}
 *     Promise that resolves to the response
 */
proto.io.bisq.protobuffer.OffersPromiseClient.prototype.getMyOffer =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/io.bisq.protobuffer.Offers/GetMyOffer',
      request,
      metadata || {},
      methodDescriptor_Offers_GetMyOffer);
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
 *   !proto.io.bisq.protobuffer.GetMyOffersRequest,
 *   !proto.io.bisq.protobuffer.GetMyOffersReply>}
 */
const methodDescriptor_Offers_GetMyOffers = new grpc.web.MethodDescriptor(
  '/io.bisq.protobuffer.Offers/GetMyOffers',
  grpc.web.MethodType.UNARY,
  proto.io.bisq.protobuffer.GetMyOffersRequest,
  proto.io.bisq.protobuffer.GetMyOffersReply,
  /**
   * @param {!proto.io.bisq.protobuffer.GetMyOffersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.io.bisq.protobuffer.GetMyOffersReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.io.bisq.protobuffer.GetMyOffersRequest,
 *   !proto.io.bisq.protobuffer.GetMyOffersReply>}
 */
const methodInfo_Offers_GetMyOffers = new grpc.web.AbstractClientBase.MethodInfo(
  proto.io.bisq.protobuffer.GetMyOffersReply,
  /**
   * @param {!proto.io.bisq.protobuffer.GetMyOffersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.io.bisq.protobuffer.GetMyOffersReply.deserializeBinary
);


/**
 * @param {!proto.io.bisq.protobuffer.GetMyOffersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.io.bisq.protobuffer.GetMyOffersReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.io.bisq.protobuffer.GetMyOffersReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.io.bisq.protobuffer.OffersClient.prototype.getMyOffers =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/io.bisq.protobuffer.Offers/GetMyOffers',
      request,
      metadata || {},
      methodDescriptor_Offers_GetMyOffers,
      callback);
};


/**
 * @param {!proto.io.bisq.protobuffer.GetMyOffersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.io.bisq.protobuffer.GetMyOffersReply>}
 *     Promise that resolves to the response
 */
proto.io.bisq.protobuffer.OffersPromiseClient.prototype.getMyOffers =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/io.bisq.protobuffer.Offers/GetMyOffers',
      request,
      metadata || {},
      methodDescriptor_Offers_GetMyOffers);
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
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.io.bisq.protobuffer.CancelOfferRequest,
 *   !proto.io.bisq.protobuffer.CancelOfferReply>}
 */
const methodDescriptor_Offers_CancelOffer = new grpc.web.MethodDescriptor(
  '/io.bisq.protobuffer.Offers/CancelOffer',
  grpc.web.MethodType.UNARY,
  proto.io.bisq.protobuffer.CancelOfferRequest,
  proto.io.bisq.protobuffer.CancelOfferReply,
  /**
   * @param {!proto.io.bisq.protobuffer.CancelOfferRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.io.bisq.protobuffer.CancelOfferReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.io.bisq.protobuffer.CancelOfferRequest,
 *   !proto.io.bisq.protobuffer.CancelOfferReply>}
 */
const methodInfo_Offers_CancelOffer = new grpc.web.AbstractClientBase.MethodInfo(
  proto.io.bisq.protobuffer.CancelOfferReply,
  /**
   * @param {!proto.io.bisq.protobuffer.CancelOfferRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.io.bisq.protobuffer.CancelOfferReply.deserializeBinary
);


/**
 * @param {!proto.io.bisq.protobuffer.CancelOfferRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.io.bisq.protobuffer.CancelOfferReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.io.bisq.protobuffer.CancelOfferReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.io.bisq.protobuffer.OffersClient.prototype.cancelOffer =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/io.bisq.protobuffer.Offers/CancelOffer',
      request,
      metadata || {},
      methodDescriptor_Offers_CancelOffer,
      callback);
};


/**
 * @param {!proto.io.bisq.protobuffer.CancelOfferRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.io.bisq.protobuffer.CancelOfferReply>}
 *     Promise that resolves to the response
 */
proto.io.bisq.protobuffer.OffersPromiseClient.prototype.cancelOffer =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/io.bisq.protobuffer.Offers/CancelOffer',
      request,
      metadata || {},
      methodDescriptor_Offers_CancelOffer);
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
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.io.bisq.protobuffer.GetPaymentMethodsRequest,
 *   !proto.io.bisq.protobuffer.GetPaymentMethodsReply>}
 */
const methodDescriptor_PaymentAccounts_GetPaymentMethods = new grpc.web.MethodDescriptor(
  '/io.bisq.protobuffer.PaymentAccounts/GetPaymentMethods',
  grpc.web.MethodType.UNARY,
  proto.io.bisq.protobuffer.GetPaymentMethodsRequest,
  proto.io.bisq.protobuffer.GetPaymentMethodsReply,
  /**
   * @param {!proto.io.bisq.protobuffer.GetPaymentMethodsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.io.bisq.protobuffer.GetPaymentMethodsReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.io.bisq.protobuffer.GetPaymentMethodsRequest,
 *   !proto.io.bisq.protobuffer.GetPaymentMethodsReply>}
 */
const methodInfo_PaymentAccounts_GetPaymentMethods = new grpc.web.AbstractClientBase.MethodInfo(
  proto.io.bisq.protobuffer.GetPaymentMethodsReply,
  /**
   * @param {!proto.io.bisq.protobuffer.GetPaymentMethodsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.io.bisq.protobuffer.GetPaymentMethodsReply.deserializeBinary
);


/**
 * @param {!proto.io.bisq.protobuffer.GetPaymentMethodsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.io.bisq.protobuffer.GetPaymentMethodsReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.io.bisq.protobuffer.GetPaymentMethodsReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.io.bisq.protobuffer.PaymentAccountsClient.prototype.getPaymentMethods =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/io.bisq.protobuffer.PaymentAccounts/GetPaymentMethods',
      request,
      metadata || {},
      methodDescriptor_PaymentAccounts_GetPaymentMethods,
      callback);
};


/**
 * @param {!proto.io.bisq.protobuffer.GetPaymentMethodsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.io.bisq.protobuffer.GetPaymentMethodsReply>}
 *     Promise that resolves to the response
 */
proto.io.bisq.protobuffer.PaymentAccountsPromiseClient.prototype.getPaymentMethods =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/io.bisq.protobuffer.PaymentAccounts/GetPaymentMethods',
      request,
      metadata || {},
      methodDescriptor_PaymentAccounts_GetPaymentMethods);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.io.bisq.protobuffer.GetPaymentAccountFormRequest,
 *   !proto.io.bisq.protobuffer.GetPaymentAccountFormReply>}
 */
const methodDescriptor_PaymentAccounts_GetPaymentAccountForm = new grpc.web.MethodDescriptor(
  '/io.bisq.protobuffer.PaymentAccounts/GetPaymentAccountForm',
  grpc.web.MethodType.UNARY,
  proto.io.bisq.protobuffer.GetPaymentAccountFormRequest,
  proto.io.bisq.protobuffer.GetPaymentAccountFormReply,
  /**
   * @param {!proto.io.bisq.protobuffer.GetPaymentAccountFormRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.io.bisq.protobuffer.GetPaymentAccountFormReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.io.bisq.protobuffer.GetPaymentAccountFormRequest,
 *   !proto.io.bisq.protobuffer.GetPaymentAccountFormReply>}
 */
const methodInfo_PaymentAccounts_GetPaymentAccountForm = new grpc.web.AbstractClientBase.MethodInfo(
  proto.io.bisq.protobuffer.GetPaymentAccountFormReply,
  /**
   * @param {!proto.io.bisq.protobuffer.GetPaymentAccountFormRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.io.bisq.protobuffer.GetPaymentAccountFormReply.deserializeBinary
);


/**
 * @param {!proto.io.bisq.protobuffer.GetPaymentAccountFormRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.io.bisq.protobuffer.GetPaymentAccountFormReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.io.bisq.protobuffer.GetPaymentAccountFormReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.io.bisq.protobuffer.PaymentAccountsClient.prototype.getPaymentAccountForm =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/io.bisq.protobuffer.PaymentAccounts/GetPaymentAccountForm',
      request,
      metadata || {},
      methodDescriptor_PaymentAccounts_GetPaymentAccountForm,
      callback);
};


/**
 * @param {!proto.io.bisq.protobuffer.GetPaymentAccountFormRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.io.bisq.protobuffer.GetPaymentAccountFormReply>}
 *     Promise that resolves to the response
 */
proto.io.bisq.protobuffer.PaymentAccountsPromiseClient.prototype.getPaymentAccountForm =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/io.bisq.protobuffer.PaymentAccounts/GetPaymentAccountForm',
      request,
      metadata || {},
      methodDescriptor_PaymentAccounts_GetPaymentAccountForm);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest,
 *   !proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountReply>}
 */
const methodDescriptor_PaymentAccounts_CreateCryptoCurrencyPaymentAccount = new grpc.web.MethodDescriptor(
  '/io.bisq.protobuffer.PaymentAccounts/CreateCryptoCurrencyPaymentAccount',
  grpc.web.MethodType.UNARY,
  proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest,
  proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountReply,
  /**
   * @param {!proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest,
 *   !proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountReply>}
 */
const methodInfo_PaymentAccounts_CreateCryptoCurrencyPaymentAccount = new grpc.web.AbstractClientBase.MethodInfo(
  proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountReply,
  /**
   * @param {!proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountReply.deserializeBinary
);


/**
 * @param {!proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.io.bisq.protobuffer.PaymentAccountsClient.prototype.createCryptoCurrencyPaymentAccount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/io.bisq.protobuffer.PaymentAccounts/CreateCryptoCurrencyPaymentAccount',
      request,
      metadata || {},
      methodDescriptor_PaymentAccounts_CreateCryptoCurrencyPaymentAccount,
      callback);
};


/**
 * @param {!proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.io.bisq.protobuffer.CreateCryptoCurrencyPaymentAccountReply>}
 *     Promise that resolves to the response
 */
proto.io.bisq.protobuffer.PaymentAccountsPromiseClient.prototype.createCryptoCurrencyPaymentAccount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/io.bisq.protobuffer.PaymentAccounts/CreateCryptoCurrencyPaymentAccount',
      request,
      metadata || {},
      methodDescriptor_PaymentAccounts_CreateCryptoCurrencyPaymentAccount);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsRequest,
 *   !proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsReply>}
 */
const methodDescriptor_PaymentAccounts_GetCryptoCurrencyPaymentMethods = new grpc.web.MethodDescriptor(
  '/io.bisq.protobuffer.PaymentAccounts/GetCryptoCurrencyPaymentMethods',
  grpc.web.MethodType.UNARY,
  proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsRequest,
  proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsReply,
  /**
   * @param {!proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsRequest,
 *   !proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsReply>}
 */
const methodInfo_PaymentAccounts_GetCryptoCurrencyPaymentMethods = new grpc.web.AbstractClientBase.MethodInfo(
  proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsReply,
  /**
   * @param {!proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsReply.deserializeBinary
);


/**
 * @param {!proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.io.bisq.protobuffer.PaymentAccountsClient.prototype.getCryptoCurrencyPaymentMethods =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/io.bisq.protobuffer.PaymentAccounts/GetCryptoCurrencyPaymentMethods',
      request,
      metadata || {},
      methodDescriptor_PaymentAccounts_GetCryptoCurrencyPaymentMethods,
      callback);
};


/**
 * @param {!proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.io.bisq.protobuffer.GetCryptoCurrencyPaymentMethodsReply>}
 *     Promise that resolves to the response
 */
proto.io.bisq.protobuffer.PaymentAccountsPromiseClient.prototype.getCryptoCurrencyPaymentMethods =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/io.bisq.protobuffer.PaymentAccounts/GetCryptoCurrencyPaymentMethods',
      request,
      metadata || {},
      methodDescriptor_PaymentAccounts_GetCryptoCurrencyPaymentMethods);
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
proto.io.bisq.protobuffer.ShutdownServerClient =
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
proto.io.bisq.protobuffer.ShutdownServerPromiseClient =
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
 *   !proto.io.bisq.protobuffer.StopRequest,
 *   !proto.io.bisq.protobuffer.StopReply>}
 */
const methodDescriptor_ShutdownServer_Stop = new grpc.web.MethodDescriptor(
  '/io.bisq.protobuffer.ShutdownServer/Stop',
  grpc.web.MethodType.UNARY,
  proto.io.bisq.protobuffer.StopRequest,
  proto.io.bisq.protobuffer.StopReply,
  /**
   * @param {!proto.io.bisq.protobuffer.StopRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.io.bisq.protobuffer.StopReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.io.bisq.protobuffer.StopRequest,
 *   !proto.io.bisq.protobuffer.StopReply>}
 */
const methodInfo_ShutdownServer_Stop = new grpc.web.AbstractClientBase.MethodInfo(
  proto.io.bisq.protobuffer.StopReply,
  /**
   * @param {!proto.io.bisq.protobuffer.StopRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.io.bisq.protobuffer.StopReply.deserializeBinary
);


/**
 * @param {!proto.io.bisq.protobuffer.StopRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.io.bisq.protobuffer.StopReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.io.bisq.protobuffer.StopReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.io.bisq.protobuffer.ShutdownServerClient.prototype.stop =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/io.bisq.protobuffer.ShutdownServer/Stop',
      request,
      metadata || {},
      methodDescriptor_ShutdownServer_Stop,
      callback);
};


/**
 * @param {!proto.io.bisq.protobuffer.StopRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.io.bisq.protobuffer.StopReply>}
 *     Promise that resolves to the response
 */
proto.io.bisq.protobuffer.ShutdownServerPromiseClient.prototype.stop =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/io.bisq.protobuffer.ShutdownServer/Stop',
      request,
      metadata || {},
      methodDescriptor_ShutdownServer_Stop);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.io.bisq.protobuffer.TradesClient =
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
proto.io.bisq.protobuffer.TradesPromiseClient =
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
 *   !proto.io.bisq.protobuffer.GetTradeRequest,
 *   !proto.io.bisq.protobuffer.GetTradeReply>}
 */
const methodDescriptor_Trades_GetTrade = new grpc.web.MethodDescriptor(
  '/io.bisq.protobuffer.Trades/GetTrade',
  grpc.web.MethodType.UNARY,
  proto.io.bisq.protobuffer.GetTradeRequest,
  proto.io.bisq.protobuffer.GetTradeReply,
  /**
   * @param {!proto.io.bisq.protobuffer.GetTradeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.io.bisq.protobuffer.GetTradeReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.io.bisq.protobuffer.GetTradeRequest,
 *   !proto.io.bisq.protobuffer.GetTradeReply>}
 */
const methodInfo_Trades_GetTrade = new grpc.web.AbstractClientBase.MethodInfo(
  proto.io.bisq.protobuffer.GetTradeReply,
  /**
   * @param {!proto.io.bisq.protobuffer.GetTradeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.io.bisq.protobuffer.GetTradeReply.deserializeBinary
);


/**
 * @param {!proto.io.bisq.protobuffer.GetTradeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.io.bisq.protobuffer.GetTradeReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.io.bisq.protobuffer.GetTradeReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.io.bisq.protobuffer.TradesClient.prototype.getTrade =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/io.bisq.protobuffer.Trades/GetTrade',
      request,
      metadata || {},
      methodDescriptor_Trades_GetTrade,
      callback);
};


/**
 * @param {!proto.io.bisq.protobuffer.GetTradeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.io.bisq.protobuffer.GetTradeReply>}
 *     Promise that resolves to the response
 */
proto.io.bisq.protobuffer.TradesPromiseClient.prototype.getTrade =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/io.bisq.protobuffer.Trades/GetTrade',
      request,
      metadata || {},
      methodDescriptor_Trades_GetTrade);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.io.bisq.protobuffer.TakeOfferRequest,
 *   !proto.io.bisq.protobuffer.TakeOfferReply>}
 */
const methodDescriptor_Trades_TakeOffer = new grpc.web.MethodDescriptor(
  '/io.bisq.protobuffer.Trades/TakeOffer',
  grpc.web.MethodType.UNARY,
  proto.io.bisq.protobuffer.TakeOfferRequest,
  proto.io.bisq.protobuffer.TakeOfferReply,
  /**
   * @param {!proto.io.bisq.protobuffer.TakeOfferRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.io.bisq.protobuffer.TakeOfferReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.io.bisq.protobuffer.TakeOfferRequest,
 *   !proto.io.bisq.protobuffer.TakeOfferReply>}
 */
const methodInfo_Trades_TakeOffer = new grpc.web.AbstractClientBase.MethodInfo(
  proto.io.bisq.protobuffer.TakeOfferReply,
  /**
   * @param {!proto.io.bisq.protobuffer.TakeOfferRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.io.bisq.protobuffer.TakeOfferReply.deserializeBinary
);


/**
 * @param {!proto.io.bisq.protobuffer.TakeOfferRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.io.bisq.protobuffer.TakeOfferReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.io.bisq.protobuffer.TakeOfferReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.io.bisq.protobuffer.TradesClient.prototype.takeOffer =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/io.bisq.protobuffer.Trades/TakeOffer',
      request,
      metadata || {},
      methodDescriptor_Trades_TakeOffer,
      callback);
};


/**
 * @param {!proto.io.bisq.protobuffer.TakeOfferRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.io.bisq.protobuffer.TakeOfferReply>}
 *     Promise that resolves to the response
 */
proto.io.bisq.protobuffer.TradesPromiseClient.prototype.takeOffer =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/io.bisq.protobuffer.Trades/TakeOffer',
      request,
      metadata || {},
      methodDescriptor_Trades_TakeOffer);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.io.bisq.protobuffer.ConfirmPaymentStartedRequest,
 *   !proto.io.bisq.protobuffer.ConfirmPaymentStartedReply>}
 */
const methodDescriptor_Trades_ConfirmPaymentStarted = new grpc.web.MethodDescriptor(
  '/io.bisq.protobuffer.Trades/ConfirmPaymentStarted',
  grpc.web.MethodType.UNARY,
  proto.io.bisq.protobuffer.ConfirmPaymentStartedRequest,
  proto.io.bisq.protobuffer.ConfirmPaymentStartedReply,
  /**
   * @param {!proto.io.bisq.protobuffer.ConfirmPaymentStartedRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.io.bisq.protobuffer.ConfirmPaymentStartedReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.io.bisq.protobuffer.ConfirmPaymentStartedRequest,
 *   !proto.io.bisq.protobuffer.ConfirmPaymentStartedReply>}
 */
const methodInfo_Trades_ConfirmPaymentStarted = new grpc.web.AbstractClientBase.MethodInfo(
  proto.io.bisq.protobuffer.ConfirmPaymentStartedReply,
  /**
   * @param {!proto.io.bisq.protobuffer.ConfirmPaymentStartedRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.io.bisq.protobuffer.ConfirmPaymentStartedReply.deserializeBinary
);


/**
 * @param {!proto.io.bisq.protobuffer.ConfirmPaymentStartedRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.io.bisq.protobuffer.ConfirmPaymentStartedReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.io.bisq.protobuffer.ConfirmPaymentStartedReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.io.bisq.protobuffer.TradesClient.prototype.confirmPaymentStarted =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/io.bisq.protobuffer.Trades/ConfirmPaymentStarted',
      request,
      metadata || {},
      methodDescriptor_Trades_ConfirmPaymentStarted,
      callback);
};


/**
 * @param {!proto.io.bisq.protobuffer.ConfirmPaymentStartedRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.io.bisq.protobuffer.ConfirmPaymentStartedReply>}
 *     Promise that resolves to the response
 */
proto.io.bisq.protobuffer.TradesPromiseClient.prototype.confirmPaymentStarted =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/io.bisq.protobuffer.Trades/ConfirmPaymentStarted',
      request,
      metadata || {},
      methodDescriptor_Trades_ConfirmPaymentStarted);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.io.bisq.protobuffer.ConfirmPaymentReceivedRequest,
 *   !proto.io.bisq.protobuffer.ConfirmPaymentReceivedReply>}
 */
const methodDescriptor_Trades_ConfirmPaymentReceived = new grpc.web.MethodDescriptor(
  '/io.bisq.protobuffer.Trades/ConfirmPaymentReceived',
  grpc.web.MethodType.UNARY,
  proto.io.bisq.protobuffer.ConfirmPaymentReceivedRequest,
  proto.io.bisq.protobuffer.ConfirmPaymentReceivedReply,
  /**
   * @param {!proto.io.bisq.protobuffer.ConfirmPaymentReceivedRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.io.bisq.protobuffer.ConfirmPaymentReceivedReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.io.bisq.protobuffer.ConfirmPaymentReceivedRequest,
 *   !proto.io.bisq.protobuffer.ConfirmPaymentReceivedReply>}
 */
const methodInfo_Trades_ConfirmPaymentReceived = new grpc.web.AbstractClientBase.MethodInfo(
  proto.io.bisq.protobuffer.ConfirmPaymentReceivedReply,
  /**
   * @param {!proto.io.bisq.protobuffer.ConfirmPaymentReceivedRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.io.bisq.protobuffer.ConfirmPaymentReceivedReply.deserializeBinary
);


/**
 * @param {!proto.io.bisq.protobuffer.ConfirmPaymentReceivedRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.io.bisq.protobuffer.ConfirmPaymentReceivedReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.io.bisq.protobuffer.ConfirmPaymentReceivedReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.io.bisq.protobuffer.TradesClient.prototype.confirmPaymentReceived =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/io.bisq.protobuffer.Trades/ConfirmPaymentReceived',
      request,
      metadata || {},
      methodDescriptor_Trades_ConfirmPaymentReceived,
      callback);
};


/**
 * @param {!proto.io.bisq.protobuffer.ConfirmPaymentReceivedRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.io.bisq.protobuffer.ConfirmPaymentReceivedReply>}
 *     Promise that resolves to the response
 */
proto.io.bisq.protobuffer.TradesPromiseClient.prototype.confirmPaymentReceived =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/io.bisq.protobuffer.Trades/ConfirmPaymentReceived',
      request,
      metadata || {},
      methodDescriptor_Trades_ConfirmPaymentReceived);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.io.bisq.protobuffer.KeepFundsRequest,
 *   !proto.io.bisq.protobuffer.KeepFundsReply>}
 */
const methodDescriptor_Trades_KeepFunds = new grpc.web.MethodDescriptor(
  '/io.bisq.protobuffer.Trades/KeepFunds',
  grpc.web.MethodType.UNARY,
  proto.io.bisq.protobuffer.KeepFundsRequest,
  proto.io.bisq.protobuffer.KeepFundsReply,
  /**
   * @param {!proto.io.bisq.protobuffer.KeepFundsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.io.bisq.protobuffer.KeepFundsReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.io.bisq.protobuffer.KeepFundsRequest,
 *   !proto.io.bisq.protobuffer.KeepFundsReply>}
 */
const methodInfo_Trades_KeepFunds = new grpc.web.AbstractClientBase.MethodInfo(
  proto.io.bisq.protobuffer.KeepFundsReply,
  /**
   * @param {!proto.io.bisq.protobuffer.KeepFundsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.io.bisq.protobuffer.KeepFundsReply.deserializeBinary
);


/**
 * @param {!proto.io.bisq.protobuffer.KeepFundsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.io.bisq.protobuffer.KeepFundsReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.io.bisq.protobuffer.KeepFundsReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.io.bisq.protobuffer.TradesClient.prototype.keepFunds =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/io.bisq.protobuffer.Trades/KeepFunds',
      request,
      metadata || {},
      methodDescriptor_Trades_KeepFunds,
      callback);
};


/**
 * @param {!proto.io.bisq.protobuffer.KeepFundsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.io.bisq.protobuffer.KeepFundsReply>}
 *     Promise that resolves to the response
 */
proto.io.bisq.protobuffer.TradesPromiseClient.prototype.keepFunds =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/io.bisq.protobuffer.Trades/KeepFunds',
      request,
      metadata || {},
      methodDescriptor_Trades_KeepFunds);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.io.bisq.protobuffer.WithdrawFundsRequest,
 *   !proto.io.bisq.protobuffer.WithdrawFundsReply>}
 */
const methodDescriptor_Trades_WithdrawFunds = new grpc.web.MethodDescriptor(
  '/io.bisq.protobuffer.Trades/WithdrawFunds',
  grpc.web.MethodType.UNARY,
  proto.io.bisq.protobuffer.WithdrawFundsRequest,
  proto.io.bisq.protobuffer.WithdrawFundsReply,
  /**
   * @param {!proto.io.bisq.protobuffer.WithdrawFundsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.io.bisq.protobuffer.WithdrawFundsReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.io.bisq.protobuffer.WithdrawFundsRequest,
 *   !proto.io.bisq.protobuffer.WithdrawFundsReply>}
 */
const methodInfo_Trades_WithdrawFunds = new grpc.web.AbstractClientBase.MethodInfo(
  proto.io.bisq.protobuffer.WithdrawFundsReply,
  /**
   * @param {!proto.io.bisq.protobuffer.WithdrawFundsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.io.bisq.protobuffer.WithdrawFundsReply.deserializeBinary
);


/**
 * @param {!proto.io.bisq.protobuffer.WithdrawFundsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.io.bisq.protobuffer.WithdrawFundsReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.io.bisq.protobuffer.WithdrawFundsReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.io.bisq.protobuffer.TradesClient.prototype.withdrawFunds =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/io.bisq.protobuffer.Trades/WithdrawFunds',
      request,
      metadata || {},
      methodDescriptor_Trades_WithdrawFunds,
      callback);
};


/**
 * @param {!proto.io.bisq.protobuffer.WithdrawFundsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.io.bisq.protobuffer.WithdrawFundsReply>}
 *     Promise that resolves to the response
 */
proto.io.bisq.protobuffer.TradesPromiseClient.prototype.withdrawFunds =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/io.bisq.protobuffer.Trades/WithdrawFunds',
      request,
      metadata || {},
      methodDescriptor_Trades_WithdrawFunds);
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
 *   !proto.io.bisq.protobuffer.GetBalancesRequest,
 *   !proto.io.bisq.protobuffer.GetBalancesReply>}
 */
const methodDescriptor_Wallets_GetBalances = new grpc.web.MethodDescriptor(
  '/io.bisq.protobuffer.Wallets/GetBalances',
  grpc.web.MethodType.UNARY,
  proto.io.bisq.protobuffer.GetBalancesRequest,
  proto.io.bisq.protobuffer.GetBalancesReply,
  /**
   * @param {!proto.io.bisq.protobuffer.GetBalancesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.io.bisq.protobuffer.GetBalancesReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.io.bisq.protobuffer.GetBalancesRequest,
 *   !proto.io.bisq.protobuffer.GetBalancesReply>}
 */
const methodInfo_Wallets_GetBalances = new grpc.web.AbstractClientBase.MethodInfo(
  proto.io.bisq.protobuffer.GetBalancesReply,
  /**
   * @param {!proto.io.bisq.protobuffer.GetBalancesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.io.bisq.protobuffer.GetBalancesReply.deserializeBinary
);


/**
 * @param {!proto.io.bisq.protobuffer.GetBalancesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.io.bisq.protobuffer.GetBalancesReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.io.bisq.protobuffer.GetBalancesReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.io.bisq.protobuffer.WalletsClient.prototype.getBalances =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/io.bisq.protobuffer.Wallets/GetBalances',
      request,
      metadata || {},
      methodDescriptor_Wallets_GetBalances,
      callback);
};


/**
 * @param {!proto.io.bisq.protobuffer.GetBalancesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.io.bisq.protobuffer.GetBalancesReply>}
 *     Promise that resolves to the response
 */
proto.io.bisq.protobuffer.WalletsPromiseClient.prototype.getBalances =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/io.bisq.protobuffer.Wallets/GetBalances',
      request,
      metadata || {},
      methodDescriptor_Wallets_GetBalances);
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
 *   !proto.io.bisq.protobuffer.GetUnusedBsqAddressRequest,
 *   !proto.io.bisq.protobuffer.GetUnusedBsqAddressReply>}
 */
const methodDescriptor_Wallets_GetUnusedBsqAddress = new grpc.web.MethodDescriptor(
  '/io.bisq.protobuffer.Wallets/GetUnusedBsqAddress',
  grpc.web.MethodType.UNARY,
  proto.io.bisq.protobuffer.GetUnusedBsqAddressRequest,
  proto.io.bisq.protobuffer.GetUnusedBsqAddressReply,
  /**
   * @param {!proto.io.bisq.protobuffer.GetUnusedBsqAddressRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.io.bisq.protobuffer.GetUnusedBsqAddressReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.io.bisq.protobuffer.GetUnusedBsqAddressRequest,
 *   !proto.io.bisq.protobuffer.GetUnusedBsqAddressReply>}
 */
const methodInfo_Wallets_GetUnusedBsqAddress = new grpc.web.AbstractClientBase.MethodInfo(
  proto.io.bisq.protobuffer.GetUnusedBsqAddressReply,
  /**
   * @param {!proto.io.bisq.protobuffer.GetUnusedBsqAddressRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.io.bisq.protobuffer.GetUnusedBsqAddressReply.deserializeBinary
);


/**
 * @param {!proto.io.bisq.protobuffer.GetUnusedBsqAddressRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.io.bisq.protobuffer.GetUnusedBsqAddressReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.io.bisq.protobuffer.GetUnusedBsqAddressReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.io.bisq.protobuffer.WalletsClient.prototype.getUnusedBsqAddress =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/io.bisq.protobuffer.Wallets/GetUnusedBsqAddress',
      request,
      metadata || {},
      methodDescriptor_Wallets_GetUnusedBsqAddress,
      callback);
};


/**
 * @param {!proto.io.bisq.protobuffer.GetUnusedBsqAddressRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.io.bisq.protobuffer.GetUnusedBsqAddressReply>}
 *     Promise that resolves to the response
 */
proto.io.bisq.protobuffer.WalletsPromiseClient.prototype.getUnusedBsqAddress =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/io.bisq.protobuffer.Wallets/GetUnusedBsqAddress',
      request,
      metadata || {},
      methodDescriptor_Wallets_GetUnusedBsqAddress);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.io.bisq.protobuffer.SendBsqRequest,
 *   !proto.io.bisq.protobuffer.SendBsqReply>}
 */
const methodDescriptor_Wallets_SendBsq = new grpc.web.MethodDescriptor(
  '/io.bisq.protobuffer.Wallets/SendBsq',
  grpc.web.MethodType.UNARY,
  proto.io.bisq.protobuffer.SendBsqRequest,
  proto.io.bisq.protobuffer.SendBsqReply,
  /**
   * @param {!proto.io.bisq.protobuffer.SendBsqRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.io.bisq.protobuffer.SendBsqReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.io.bisq.protobuffer.SendBsqRequest,
 *   !proto.io.bisq.protobuffer.SendBsqReply>}
 */
const methodInfo_Wallets_SendBsq = new grpc.web.AbstractClientBase.MethodInfo(
  proto.io.bisq.protobuffer.SendBsqReply,
  /**
   * @param {!proto.io.bisq.protobuffer.SendBsqRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.io.bisq.protobuffer.SendBsqReply.deserializeBinary
);


/**
 * @param {!proto.io.bisq.protobuffer.SendBsqRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.io.bisq.protobuffer.SendBsqReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.io.bisq.protobuffer.SendBsqReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.io.bisq.protobuffer.WalletsClient.prototype.sendBsq =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/io.bisq.protobuffer.Wallets/SendBsq',
      request,
      metadata || {},
      methodDescriptor_Wallets_SendBsq,
      callback);
};


/**
 * @param {!proto.io.bisq.protobuffer.SendBsqRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.io.bisq.protobuffer.SendBsqReply>}
 *     Promise that resolves to the response
 */
proto.io.bisq.protobuffer.WalletsPromiseClient.prototype.sendBsq =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/io.bisq.protobuffer.Wallets/SendBsq',
      request,
      metadata || {},
      methodDescriptor_Wallets_SendBsq);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.io.bisq.protobuffer.SendBtcRequest,
 *   !proto.io.bisq.protobuffer.SendBtcReply>}
 */
const methodDescriptor_Wallets_SendBtc = new grpc.web.MethodDescriptor(
  '/io.bisq.protobuffer.Wallets/SendBtc',
  grpc.web.MethodType.UNARY,
  proto.io.bisq.protobuffer.SendBtcRequest,
  proto.io.bisq.protobuffer.SendBtcReply,
  /**
   * @param {!proto.io.bisq.protobuffer.SendBtcRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.io.bisq.protobuffer.SendBtcReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.io.bisq.protobuffer.SendBtcRequest,
 *   !proto.io.bisq.protobuffer.SendBtcReply>}
 */
const methodInfo_Wallets_SendBtc = new grpc.web.AbstractClientBase.MethodInfo(
  proto.io.bisq.protobuffer.SendBtcReply,
  /**
   * @param {!proto.io.bisq.protobuffer.SendBtcRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.io.bisq.protobuffer.SendBtcReply.deserializeBinary
);


/**
 * @param {!proto.io.bisq.protobuffer.SendBtcRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.io.bisq.protobuffer.SendBtcReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.io.bisq.protobuffer.SendBtcReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.io.bisq.protobuffer.WalletsClient.prototype.sendBtc =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/io.bisq.protobuffer.Wallets/SendBtc',
      request,
      metadata || {},
      methodDescriptor_Wallets_SendBtc,
      callback);
};


/**
 * @param {!proto.io.bisq.protobuffer.SendBtcRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.io.bisq.protobuffer.SendBtcReply>}
 *     Promise that resolves to the response
 */
proto.io.bisq.protobuffer.WalletsPromiseClient.prototype.sendBtc =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/io.bisq.protobuffer.Wallets/SendBtc',
      request,
      metadata || {},
      methodDescriptor_Wallets_SendBtc);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.io.bisq.protobuffer.VerifyBsqSentToAddressRequest,
 *   !proto.io.bisq.protobuffer.VerifyBsqSentToAddressReply>}
 */
const methodDescriptor_Wallets_VerifyBsqSentToAddress = new grpc.web.MethodDescriptor(
  '/io.bisq.protobuffer.Wallets/VerifyBsqSentToAddress',
  grpc.web.MethodType.UNARY,
  proto.io.bisq.protobuffer.VerifyBsqSentToAddressRequest,
  proto.io.bisq.protobuffer.VerifyBsqSentToAddressReply,
  /**
   * @param {!proto.io.bisq.protobuffer.VerifyBsqSentToAddressRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.io.bisq.protobuffer.VerifyBsqSentToAddressReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.io.bisq.protobuffer.VerifyBsqSentToAddressRequest,
 *   !proto.io.bisq.protobuffer.VerifyBsqSentToAddressReply>}
 */
const methodInfo_Wallets_VerifyBsqSentToAddress = new grpc.web.AbstractClientBase.MethodInfo(
  proto.io.bisq.protobuffer.VerifyBsqSentToAddressReply,
  /**
   * @param {!proto.io.bisq.protobuffer.VerifyBsqSentToAddressRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.io.bisq.protobuffer.VerifyBsqSentToAddressReply.deserializeBinary
);


/**
 * @param {!proto.io.bisq.protobuffer.VerifyBsqSentToAddressRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.io.bisq.protobuffer.VerifyBsqSentToAddressReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.io.bisq.protobuffer.VerifyBsqSentToAddressReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.io.bisq.protobuffer.WalletsClient.prototype.verifyBsqSentToAddress =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/io.bisq.protobuffer.Wallets/VerifyBsqSentToAddress',
      request,
      metadata || {},
      methodDescriptor_Wallets_VerifyBsqSentToAddress,
      callback);
};


/**
 * @param {!proto.io.bisq.protobuffer.VerifyBsqSentToAddressRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.io.bisq.protobuffer.VerifyBsqSentToAddressReply>}
 *     Promise that resolves to the response
 */
proto.io.bisq.protobuffer.WalletsPromiseClient.prototype.verifyBsqSentToAddress =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/io.bisq.protobuffer.Wallets/VerifyBsqSentToAddress',
      request,
      metadata || {},
      methodDescriptor_Wallets_VerifyBsqSentToAddress);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.io.bisq.protobuffer.GetTxFeeRateRequest,
 *   !proto.io.bisq.protobuffer.GetTxFeeRateReply>}
 */
const methodDescriptor_Wallets_GetTxFeeRate = new grpc.web.MethodDescriptor(
  '/io.bisq.protobuffer.Wallets/GetTxFeeRate',
  grpc.web.MethodType.UNARY,
  proto.io.bisq.protobuffer.GetTxFeeRateRequest,
  proto.io.bisq.protobuffer.GetTxFeeRateReply,
  /**
   * @param {!proto.io.bisq.protobuffer.GetTxFeeRateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.io.bisq.protobuffer.GetTxFeeRateReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.io.bisq.protobuffer.GetTxFeeRateRequest,
 *   !proto.io.bisq.protobuffer.GetTxFeeRateReply>}
 */
const methodInfo_Wallets_GetTxFeeRate = new grpc.web.AbstractClientBase.MethodInfo(
  proto.io.bisq.protobuffer.GetTxFeeRateReply,
  /**
   * @param {!proto.io.bisq.protobuffer.GetTxFeeRateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.io.bisq.protobuffer.GetTxFeeRateReply.deserializeBinary
);


/**
 * @param {!proto.io.bisq.protobuffer.GetTxFeeRateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.io.bisq.protobuffer.GetTxFeeRateReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.io.bisq.protobuffer.GetTxFeeRateReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.io.bisq.protobuffer.WalletsClient.prototype.getTxFeeRate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/io.bisq.protobuffer.Wallets/GetTxFeeRate',
      request,
      metadata || {},
      methodDescriptor_Wallets_GetTxFeeRate,
      callback);
};


/**
 * @param {!proto.io.bisq.protobuffer.GetTxFeeRateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.io.bisq.protobuffer.GetTxFeeRateReply>}
 *     Promise that resolves to the response
 */
proto.io.bisq.protobuffer.WalletsPromiseClient.prototype.getTxFeeRate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/io.bisq.protobuffer.Wallets/GetTxFeeRate',
      request,
      metadata || {},
      methodDescriptor_Wallets_GetTxFeeRate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.io.bisq.protobuffer.SetTxFeeRatePreferenceRequest,
 *   !proto.io.bisq.protobuffer.SetTxFeeRatePreferenceReply>}
 */
const methodDescriptor_Wallets_SetTxFeeRatePreference = new grpc.web.MethodDescriptor(
  '/io.bisq.protobuffer.Wallets/SetTxFeeRatePreference',
  grpc.web.MethodType.UNARY,
  proto.io.bisq.protobuffer.SetTxFeeRatePreferenceRequest,
  proto.io.bisq.protobuffer.SetTxFeeRatePreferenceReply,
  /**
   * @param {!proto.io.bisq.protobuffer.SetTxFeeRatePreferenceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.io.bisq.protobuffer.SetTxFeeRatePreferenceReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.io.bisq.protobuffer.SetTxFeeRatePreferenceRequest,
 *   !proto.io.bisq.protobuffer.SetTxFeeRatePreferenceReply>}
 */
const methodInfo_Wallets_SetTxFeeRatePreference = new grpc.web.AbstractClientBase.MethodInfo(
  proto.io.bisq.protobuffer.SetTxFeeRatePreferenceReply,
  /**
   * @param {!proto.io.bisq.protobuffer.SetTxFeeRatePreferenceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.io.bisq.protobuffer.SetTxFeeRatePreferenceReply.deserializeBinary
);


/**
 * @param {!proto.io.bisq.protobuffer.SetTxFeeRatePreferenceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.io.bisq.protobuffer.SetTxFeeRatePreferenceReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.io.bisq.protobuffer.SetTxFeeRatePreferenceReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.io.bisq.protobuffer.WalletsClient.prototype.setTxFeeRatePreference =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/io.bisq.protobuffer.Wallets/SetTxFeeRatePreference',
      request,
      metadata || {},
      methodDescriptor_Wallets_SetTxFeeRatePreference,
      callback);
};


/**
 * @param {!proto.io.bisq.protobuffer.SetTxFeeRatePreferenceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.io.bisq.protobuffer.SetTxFeeRatePreferenceReply>}
 *     Promise that resolves to the response
 */
proto.io.bisq.protobuffer.WalletsPromiseClient.prototype.setTxFeeRatePreference =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/io.bisq.protobuffer.Wallets/SetTxFeeRatePreference',
      request,
      metadata || {},
      methodDescriptor_Wallets_SetTxFeeRatePreference);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceRequest,
 *   !proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceReply>}
 */
const methodDescriptor_Wallets_UnsetTxFeeRatePreference = new grpc.web.MethodDescriptor(
  '/io.bisq.protobuffer.Wallets/UnsetTxFeeRatePreference',
  grpc.web.MethodType.UNARY,
  proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceRequest,
  proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceReply,
  /**
   * @param {!proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceRequest,
 *   !proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceReply>}
 */
const methodInfo_Wallets_UnsetTxFeeRatePreference = new grpc.web.AbstractClientBase.MethodInfo(
  proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceReply,
  /**
   * @param {!proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceReply.deserializeBinary
);


/**
 * @param {!proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.io.bisq.protobuffer.WalletsClient.prototype.unsetTxFeeRatePreference =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/io.bisq.protobuffer.Wallets/UnsetTxFeeRatePreference',
      request,
      metadata || {},
      methodDescriptor_Wallets_UnsetTxFeeRatePreference,
      callback);
};


/**
 * @param {!proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.io.bisq.protobuffer.UnsetTxFeeRatePreferenceReply>}
 *     Promise that resolves to the response
 */
proto.io.bisq.protobuffer.WalletsPromiseClient.prototype.unsetTxFeeRatePreference =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/io.bisq.protobuffer.Wallets/UnsetTxFeeRatePreference',
      request,
      metadata || {},
      methodDescriptor_Wallets_UnsetTxFeeRatePreference);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.io.bisq.protobuffer.GetTransactionRequest,
 *   !proto.io.bisq.protobuffer.GetTransactionReply>}
 */
const methodDescriptor_Wallets_GetTransaction = new grpc.web.MethodDescriptor(
  '/io.bisq.protobuffer.Wallets/GetTransaction',
  grpc.web.MethodType.UNARY,
  proto.io.bisq.protobuffer.GetTransactionRequest,
  proto.io.bisq.protobuffer.GetTransactionReply,
  /**
   * @param {!proto.io.bisq.protobuffer.GetTransactionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.io.bisq.protobuffer.GetTransactionReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.io.bisq.protobuffer.GetTransactionRequest,
 *   !proto.io.bisq.protobuffer.GetTransactionReply>}
 */
const methodInfo_Wallets_GetTransaction = new grpc.web.AbstractClientBase.MethodInfo(
  proto.io.bisq.protobuffer.GetTransactionReply,
  /**
   * @param {!proto.io.bisq.protobuffer.GetTransactionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.io.bisq.protobuffer.GetTransactionReply.deserializeBinary
);


/**
 * @param {!proto.io.bisq.protobuffer.GetTransactionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.io.bisq.protobuffer.GetTransactionReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.io.bisq.protobuffer.GetTransactionReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.io.bisq.protobuffer.WalletsClient.prototype.getTransaction =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/io.bisq.protobuffer.Wallets/GetTransaction',
      request,
      metadata || {},
      methodDescriptor_Wallets_GetTransaction,
      callback);
};


/**
 * @param {!proto.io.bisq.protobuffer.GetTransactionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.io.bisq.protobuffer.GetTransactionReply>}
 *     Promise that resolves to the response
 */
proto.io.bisq.protobuffer.WalletsPromiseClient.prototype.getTransaction =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/io.bisq.protobuffer.Wallets/GetTransaction',
      request,
      metadata || {},
      methodDescriptor_Wallets_GetTransaction);
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

