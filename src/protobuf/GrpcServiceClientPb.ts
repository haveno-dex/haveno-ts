/**
 * @fileoverview gRPC-Web generated client stub for io.bisq.protobuffer
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as grpc_pb from './grpc_pb';


export class DisputeAgentsClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoRegisterDisputeAgent = new grpcWeb.AbstractClientBase.MethodInfo(
    grpc_pb.RegisterDisputeAgentReply,
    (request: grpc_pb.RegisterDisputeAgentRequest) => {
      return request.serializeBinary();
    },
    grpc_pb.RegisterDisputeAgentReply.deserializeBinary
  );

  registerDisputeAgent(
    request: grpc_pb.RegisterDisputeAgentRequest,
    metadata: grpcWeb.Metadata | null): Promise<grpc_pb.RegisterDisputeAgentReply>;

  registerDisputeAgent(
    request: grpc_pb.RegisterDisputeAgentRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: grpc_pb.RegisterDisputeAgentReply) => void): grpcWeb.ClientReadableStream<grpc_pb.RegisterDisputeAgentReply>;

  registerDisputeAgent(
    request: grpc_pb.RegisterDisputeAgentRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: grpc_pb.RegisterDisputeAgentReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/io.bisq.protobuffer.DisputeAgents/RegisterDisputeAgent',
        request,
        metadata || {},
        this.methodInfoRegisterDisputeAgent,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/io.bisq.protobuffer.DisputeAgents/RegisterDisputeAgent',
    request,
    metadata || {},
    this.methodInfoRegisterDisputeAgent);
  }

}

export class HelpClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoGetMethodHelp = new grpcWeb.AbstractClientBase.MethodInfo(
    grpc_pb.GetMethodHelpReply,
    (request: grpc_pb.GetMethodHelpRequest) => {
      return request.serializeBinary();
    },
    grpc_pb.GetMethodHelpReply.deserializeBinary
  );

  getMethodHelp(
    request: grpc_pb.GetMethodHelpRequest,
    metadata: grpcWeb.Metadata | null): Promise<grpc_pb.GetMethodHelpReply>;

  getMethodHelp(
    request: grpc_pb.GetMethodHelpRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: grpc_pb.GetMethodHelpReply) => void): grpcWeb.ClientReadableStream<grpc_pb.GetMethodHelpReply>;

  getMethodHelp(
    request: grpc_pb.GetMethodHelpRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: grpc_pb.GetMethodHelpReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/io.bisq.protobuffer.Help/GetMethodHelp',
        request,
        metadata || {},
        this.methodInfoGetMethodHelp,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/io.bisq.protobuffer.Help/GetMethodHelp',
    request,
    metadata || {},
    this.methodInfoGetMethodHelp);
  }

}

export class OffersClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoGetOffer = new grpcWeb.AbstractClientBase.MethodInfo(
    grpc_pb.GetOfferReply,
    (request: grpc_pb.GetOfferRequest) => {
      return request.serializeBinary();
    },
    grpc_pb.GetOfferReply.deserializeBinary
  );

  getOffer(
    request: grpc_pb.GetOfferRequest,
    metadata: grpcWeb.Metadata | null): Promise<grpc_pb.GetOfferReply>;

  getOffer(
    request: grpc_pb.GetOfferRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: grpc_pb.GetOfferReply) => void): grpcWeb.ClientReadableStream<grpc_pb.GetOfferReply>;

  getOffer(
    request: grpc_pb.GetOfferRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: grpc_pb.GetOfferReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/io.bisq.protobuffer.Offers/GetOffer',
        request,
        metadata || {},
        this.methodInfoGetOffer,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/io.bisq.protobuffer.Offers/GetOffer',
    request,
    metadata || {},
    this.methodInfoGetOffer);
  }

  methodInfoGetMyOffer = new grpcWeb.AbstractClientBase.MethodInfo(
    grpc_pb.GetMyOfferReply,
    (request: grpc_pb.GetMyOfferRequest) => {
      return request.serializeBinary();
    },
    grpc_pb.GetMyOfferReply.deserializeBinary
  );

  getMyOffer(
    request: grpc_pb.GetMyOfferRequest,
    metadata: grpcWeb.Metadata | null): Promise<grpc_pb.GetMyOfferReply>;

  getMyOffer(
    request: grpc_pb.GetMyOfferRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: grpc_pb.GetMyOfferReply) => void): grpcWeb.ClientReadableStream<grpc_pb.GetMyOfferReply>;

  getMyOffer(
    request: grpc_pb.GetMyOfferRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: grpc_pb.GetMyOfferReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/io.bisq.protobuffer.Offers/GetMyOffer',
        request,
        metadata || {},
        this.methodInfoGetMyOffer,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/io.bisq.protobuffer.Offers/GetMyOffer',
    request,
    metadata || {},
    this.methodInfoGetMyOffer);
  }

  methodInfoGetOffers = new grpcWeb.AbstractClientBase.MethodInfo(
    grpc_pb.GetOffersReply,
    (request: grpc_pb.GetOffersRequest) => {
      return request.serializeBinary();
    },
    grpc_pb.GetOffersReply.deserializeBinary
  );

  getOffers(
    request: grpc_pb.GetOffersRequest,
    metadata: grpcWeb.Metadata | null): Promise<grpc_pb.GetOffersReply>;

  getOffers(
    request: grpc_pb.GetOffersRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: grpc_pb.GetOffersReply) => void): grpcWeb.ClientReadableStream<grpc_pb.GetOffersReply>;

  getOffers(
    request: grpc_pb.GetOffersRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: grpc_pb.GetOffersReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/io.bisq.protobuffer.Offers/GetOffers',
        request,
        metadata || {},
        this.methodInfoGetOffers,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/io.bisq.protobuffer.Offers/GetOffers',
    request,
    metadata || {},
    this.methodInfoGetOffers);
  }

  methodInfoGetMyOffers = new grpcWeb.AbstractClientBase.MethodInfo(
    grpc_pb.GetMyOffersReply,
    (request: grpc_pb.GetMyOffersRequest) => {
      return request.serializeBinary();
    },
    grpc_pb.GetMyOffersReply.deserializeBinary
  );

  getMyOffers(
    request: grpc_pb.GetMyOffersRequest,
    metadata: grpcWeb.Metadata | null): Promise<grpc_pb.GetMyOffersReply>;

  getMyOffers(
    request: grpc_pb.GetMyOffersRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: grpc_pb.GetMyOffersReply) => void): grpcWeb.ClientReadableStream<grpc_pb.GetMyOffersReply>;

  getMyOffers(
    request: grpc_pb.GetMyOffersRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: grpc_pb.GetMyOffersReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/io.bisq.protobuffer.Offers/GetMyOffers',
        request,
        metadata || {},
        this.methodInfoGetMyOffers,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/io.bisq.protobuffer.Offers/GetMyOffers',
    request,
    metadata || {},
    this.methodInfoGetMyOffers);
  }

  methodInfoCreateOffer = new grpcWeb.AbstractClientBase.MethodInfo(
    grpc_pb.CreateOfferReply,
    (request: grpc_pb.CreateOfferRequest) => {
      return request.serializeBinary();
    },
    grpc_pb.CreateOfferReply.deserializeBinary
  );

  createOffer(
    request: grpc_pb.CreateOfferRequest,
    metadata: grpcWeb.Metadata | null): Promise<grpc_pb.CreateOfferReply>;

  createOffer(
    request: grpc_pb.CreateOfferRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: grpc_pb.CreateOfferReply) => void): grpcWeb.ClientReadableStream<grpc_pb.CreateOfferReply>;

  createOffer(
    request: grpc_pb.CreateOfferRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: grpc_pb.CreateOfferReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/io.bisq.protobuffer.Offers/CreateOffer',
        request,
        metadata || {},
        this.methodInfoCreateOffer,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/io.bisq.protobuffer.Offers/CreateOffer',
    request,
    metadata || {},
    this.methodInfoCreateOffer);
  }

  methodInfoCancelOffer = new grpcWeb.AbstractClientBase.MethodInfo(
    grpc_pb.CancelOfferReply,
    (request: grpc_pb.CancelOfferRequest) => {
      return request.serializeBinary();
    },
    grpc_pb.CancelOfferReply.deserializeBinary
  );

  cancelOffer(
    request: grpc_pb.CancelOfferRequest,
    metadata: grpcWeb.Metadata | null): Promise<grpc_pb.CancelOfferReply>;

  cancelOffer(
    request: grpc_pb.CancelOfferRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: grpc_pb.CancelOfferReply) => void): grpcWeb.ClientReadableStream<grpc_pb.CancelOfferReply>;

  cancelOffer(
    request: grpc_pb.CancelOfferRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: grpc_pb.CancelOfferReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/io.bisq.protobuffer.Offers/CancelOffer',
        request,
        metadata || {},
        this.methodInfoCancelOffer,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/io.bisq.protobuffer.Offers/CancelOffer',
    request,
    metadata || {},
    this.methodInfoCancelOffer);
  }

}

export class PaymentAccountsClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoCreatePaymentAccount = new grpcWeb.AbstractClientBase.MethodInfo(
    grpc_pb.CreatePaymentAccountReply,
    (request: grpc_pb.CreatePaymentAccountRequest) => {
      return request.serializeBinary();
    },
    grpc_pb.CreatePaymentAccountReply.deserializeBinary
  );

  createPaymentAccount(
    request: grpc_pb.CreatePaymentAccountRequest,
    metadata: grpcWeb.Metadata | null): Promise<grpc_pb.CreatePaymentAccountReply>;

  createPaymentAccount(
    request: grpc_pb.CreatePaymentAccountRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: grpc_pb.CreatePaymentAccountReply) => void): grpcWeb.ClientReadableStream<grpc_pb.CreatePaymentAccountReply>;

  createPaymentAccount(
    request: grpc_pb.CreatePaymentAccountRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: grpc_pb.CreatePaymentAccountReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/io.bisq.protobuffer.PaymentAccounts/CreatePaymentAccount',
        request,
        metadata || {},
        this.methodInfoCreatePaymentAccount,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/io.bisq.protobuffer.PaymentAccounts/CreatePaymentAccount',
    request,
    metadata || {},
    this.methodInfoCreatePaymentAccount);
  }

  methodInfoGetPaymentAccounts = new grpcWeb.AbstractClientBase.MethodInfo(
    grpc_pb.GetPaymentAccountsReply,
    (request: grpc_pb.GetPaymentAccountsRequest) => {
      return request.serializeBinary();
    },
    grpc_pb.GetPaymentAccountsReply.deserializeBinary
  );

  getPaymentAccounts(
    request: grpc_pb.GetPaymentAccountsRequest,
    metadata: grpcWeb.Metadata | null): Promise<grpc_pb.GetPaymentAccountsReply>;

  getPaymentAccounts(
    request: grpc_pb.GetPaymentAccountsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: grpc_pb.GetPaymentAccountsReply) => void): grpcWeb.ClientReadableStream<grpc_pb.GetPaymentAccountsReply>;

  getPaymentAccounts(
    request: grpc_pb.GetPaymentAccountsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: grpc_pb.GetPaymentAccountsReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/io.bisq.protobuffer.PaymentAccounts/GetPaymentAccounts',
        request,
        metadata || {},
        this.methodInfoGetPaymentAccounts,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/io.bisq.protobuffer.PaymentAccounts/GetPaymentAccounts',
    request,
    metadata || {},
    this.methodInfoGetPaymentAccounts);
  }

  methodInfoGetPaymentMethods = new grpcWeb.AbstractClientBase.MethodInfo(
    grpc_pb.GetPaymentMethodsReply,
    (request: grpc_pb.GetPaymentMethodsRequest) => {
      return request.serializeBinary();
    },
    grpc_pb.GetPaymentMethodsReply.deserializeBinary
  );

  getPaymentMethods(
    request: grpc_pb.GetPaymentMethodsRequest,
    metadata: grpcWeb.Metadata | null): Promise<grpc_pb.GetPaymentMethodsReply>;

  getPaymentMethods(
    request: grpc_pb.GetPaymentMethodsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: grpc_pb.GetPaymentMethodsReply) => void): grpcWeb.ClientReadableStream<grpc_pb.GetPaymentMethodsReply>;

  getPaymentMethods(
    request: grpc_pb.GetPaymentMethodsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: grpc_pb.GetPaymentMethodsReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/io.bisq.protobuffer.PaymentAccounts/GetPaymentMethods',
        request,
        metadata || {},
        this.methodInfoGetPaymentMethods,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/io.bisq.protobuffer.PaymentAccounts/GetPaymentMethods',
    request,
    metadata || {},
    this.methodInfoGetPaymentMethods);
  }

  methodInfoGetPaymentAccountForm = new grpcWeb.AbstractClientBase.MethodInfo(
    grpc_pb.GetPaymentAccountFormReply,
    (request: grpc_pb.GetPaymentAccountFormRequest) => {
      return request.serializeBinary();
    },
    grpc_pb.GetPaymentAccountFormReply.deserializeBinary
  );

  getPaymentAccountForm(
    request: grpc_pb.GetPaymentAccountFormRequest,
    metadata: grpcWeb.Metadata | null): Promise<grpc_pb.GetPaymentAccountFormReply>;

  getPaymentAccountForm(
    request: grpc_pb.GetPaymentAccountFormRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: grpc_pb.GetPaymentAccountFormReply) => void): grpcWeb.ClientReadableStream<grpc_pb.GetPaymentAccountFormReply>;

  getPaymentAccountForm(
    request: grpc_pb.GetPaymentAccountFormRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: grpc_pb.GetPaymentAccountFormReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/io.bisq.protobuffer.PaymentAccounts/GetPaymentAccountForm',
        request,
        metadata || {},
        this.methodInfoGetPaymentAccountForm,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/io.bisq.protobuffer.PaymentAccounts/GetPaymentAccountForm',
    request,
    metadata || {},
    this.methodInfoGetPaymentAccountForm);
  }

  methodInfoCreateCryptoCurrencyPaymentAccount = new grpcWeb.AbstractClientBase.MethodInfo(
    grpc_pb.CreateCryptoCurrencyPaymentAccountReply,
    (request: grpc_pb.CreateCryptoCurrencyPaymentAccountRequest) => {
      return request.serializeBinary();
    },
    grpc_pb.CreateCryptoCurrencyPaymentAccountReply.deserializeBinary
  );

  createCryptoCurrencyPaymentAccount(
    request: grpc_pb.CreateCryptoCurrencyPaymentAccountRequest,
    metadata: grpcWeb.Metadata | null): Promise<grpc_pb.CreateCryptoCurrencyPaymentAccountReply>;

  createCryptoCurrencyPaymentAccount(
    request: grpc_pb.CreateCryptoCurrencyPaymentAccountRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: grpc_pb.CreateCryptoCurrencyPaymentAccountReply) => void): grpcWeb.ClientReadableStream<grpc_pb.CreateCryptoCurrencyPaymentAccountReply>;

  createCryptoCurrencyPaymentAccount(
    request: grpc_pb.CreateCryptoCurrencyPaymentAccountRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: grpc_pb.CreateCryptoCurrencyPaymentAccountReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/io.bisq.protobuffer.PaymentAccounts/CreateCryptoCurrencyPaymentAccount',
        request,
        metadata || {},
        this.methodInfoCreateCryptoCurrencyPaymentAccount,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/io.bisq.protobuffer.PaymentAccounts/CreateCryptoCurrencyPaymentAccount',
    request,
    metadata || {},
    this.methodInfoCreateCryptoCurrencyPaymentAccount);
  }

  methodInfoGetCryptoCurrencyPaymentMethods = new grpcWeb.AbstractClientBase.MethodInfo(
    grpc_pb.GetCryptoCurrencyPaymentMethodsReply,
    (request: grpc_pb.GetCryptoCurrencyPaymentMethodsRequest) => {
      return request.serializeBinary();
    },
    grpc_pb.GetCryptoCurrencyPaymentMethodsReply.deserializeBinary
  );

  getCryptoCurrencyPaymentMethods(
    request: grpc_pb.GetCryptoCurrencyPaymentMethodsRequest,
    metadata: grpcWeb.Metadata | null): Promise<grpc_pb.GetCryptoCurrencyPaymentMethodsReply>;

  getCryptoCurrencyPaymentMethods(
    request: grpc_pb.GetCryptoCurrencyPaymentMethodsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: grpc_pb.GetCryptoCurrencyPaymentMethodsReply) => void): grpcWeb.ClientReadableStream<grpc_pb.GetCryptoCurrencyPaymentMethodsReply>;

  getCryptoCurrencyPaymentMethods(
    request: grpc_pb.GetCryptoCurrencyPaymentMethodsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: grpc_pb.GetCryptoCurrencyPaymentMethodsReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/io.bisq.protobuffer.PaymentAccounts/GetCryptoCurrencyPaymentMethods',
        request,
        metadata || {},
        this.methodInfoGetCryptoCurrencyPaymentMethods,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/io.bisq.protobuffer.PaymentAccounts/GetCryptoCurrencyPaymentMethods',
    request,
    metadata || {},
    this.methodInfoGetCryptoCurrencyPaymentMethods);
  }

}

export class PriceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoGetMarketPrice = new grpcWeb.AbstractClientBase.MethodInfo(
    grpc_pb.MarketPriceReply,
    (request: grpc_pb.MarketPriceRequest) => {
      return request.serializeBinary();
    },
    grpc_pb.MarketPriceReply.deserializeBinary
  );

  getMarketPrice(
    request: grpc_pb.MarketPriceRequest,
    metadata: grpcWeb.Metadata | null): Promise<grpc_pb.MarketPriceReply>;

  getMarketPrice(
    request: grpc_pb.MarketPriceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: grpc_pb.MarketPriceReply) => void): grpcWeb.ClientReadableStream<grpc_pb.MarketPriceReply>;

  getMarketPrice(
    request: grpc_pb.MarketPriceRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: grpc_pb.MarketPriceReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/io.bisq.protobuffer.Price/GetMarketPrice',
        request,
        metadata || {},
        this.methodInfoGetMarketPrice,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/io.bisq.protobuffer.Price/GetMarketPrice',
    request,
    metadata || {},
    this.methodInfoGetMarketPrice);
  }

}

export class GetTradeStatisticsClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoGetTradeStatistics = new grpcWeb.AbstractClientBase.MethodInfo(
    grpc_pb.GetTradeStatisticsReply,
    (request: grpc_pb.GetTradeStatisticsRequest) => {
      return request.serializeBinary();
    },
    grpc_pb.GetTradeStatisticsReply.deserializeBinary
  );

  getTradeStatistics(
    request: grpc_pb.GetTradeStatisticsRequest,
    metadata: grpcWeb.Metadata | null): Promise<grpc_pb.GetTradeStatisticsReply>;

  getTradeStatistics(
    request: grpc_pb.GetTradeStatisticsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: grpc_pb.GetTradeStatisticsReply) => void): grpcWeb.ClientReadableStream<grpc_pb.GetTradeStatisticsReply>;

  getTradeStatistics(
    request: grpc_pb.GetTradeStatisticsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: grpc_pb.GetTradeStatisticsReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/io.bisq.protobuffer.GetTradeStatistics/GetTradeStatistics',
        request,
        metadata || {},
        this.methodInfoGetTradeStatistics,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/io.bisq.protobuffer.GetTradeStatistics/GetTradeStatistics',
    request,
    metadata || {},
    this.methodInfoGetTradeStatistics);
  }

}

export class ShutdownServerClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoStop = new grpcWeb.AbstractClientBase.MethodInfo(
    grpc_pb.StopReply,
    (request: grpc_pb.StopRequest) => {
      return request.serializeBinary();
    },
    grpc_pb.StopReply.deserializeBinary
  );

  stop(
    request: grpc_pb.StopRequest,
    metadata: grpcWeb.Metadata | null): Promise<grpc_pb.StopReply>;

  stop(
    request: grpc_pb.StopRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: grpc_pb.StopReply) => void): grpcWeb.ClientReadableStream<grpc_pb.StopReply>;

  stop(
    request: grpc_pb.StopRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: grpc_pb.StopReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/io.bisq.protobuffer.ShutdownServer/Stop',
        request,
        metadata || {},
        this.methodInfoStop,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/io.bisq.protobuffer.ShutdownServer/Stop',
    request,
    metadata || {},
    this.methodInfoStop);
  }

}

export class TradesClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoGetTrade = new grpcWeb.AbstractClientBase.MethodInfo(
    grpc_pb.GetTradeReply,
    (request: grpc_pb.GetTradeRequest) => {
      return request.serializeBinary();
    },
    grpc_pb.GetTradeReply.deserializeBinary
  );

  getTrade(
    request: grpc_pb.GetTradeRequest,
    metadata: grpcWeb.Metadata | null): Promise<grpc_pb.GetTradeReply>;

  getTrade(
    request: grpc_pb.GetTradeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: grpc_pb.GetTradeReply) => void): grpcWeb.ClientReadableStream<grpc_pb.GetTradeReply>;

  getTrade(
    request: grpc_pb.GetTradeRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: grpc_pb.GetTradeReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/io.bisq.protobuffer.Trades/GetTrade',
        request,
        metadata || {},
        this.methodInfoGetTrade,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/io.bisq.protobuffer.Trades/GetTrade',
    request,
    metadata || {},
    this.methodInfoGetTrade);
  }

  methodInfoTakeOffer = new grpcWeb.AbstractClientBase.MethodInfo(
    grpc_pb.TakeOfferReply,
    (request: grpc_pb.TakeOfferRequest) => {
      return request.serializeBinary();
    },
    grpc_pb.TakeOfferReply.deserializeBinary
  );

  takeOffer(
    request: grpc_pb.TakeOfferRequest,
    metadata: grpcWeb.Metadata | null): Promise<grpc_pb.TakeOfferReply>;

  takeOffer(
    request: grpc_pb.TakeOfferRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: grpc_pb.TakeOfferReply) => void): grpcWeb.ClientReadableStream<grpc_pb.TakeOfferReply>;

  takeOffer(
    request: grpc_pb.TakeOfferRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: grpc_pb.TakeOfferReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/io.bisq.protobuffer.Trades/TakeOffer',
        request,
        metadata || {},
        this.methodInfoTakeOffer,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/io.bisq.protobuffer.Trades/TakeOffer',
    request,
    metadata || {},
    this.methodInfoTakeOffer);
  }

  methodInfoConfirmPaymentStarted = new grpcWeb.AbstractClientBase.MethodInfo(
    grpc_pb.ConfirmPaymentStartedReply,
    (request: grpc_pb.ConfirmPaymentStartedRequest) => {
      return request.serializeBinary();
    },
    grpc_pb.ConfirmPaymentStartedReply.deserializeBinary
  );

  confirmPaymentStarted(
    request: grpc_pb.ConfirmPaymentStartedRequest,
    metadata: grpcWeb.Metadata | null): Promise<grpc_pb.ConfirmPaymentStartedReply>;

  confirmPaymentStarted(
    request: grpc_pb.ConfirmPaymentStartedRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: grpc_pb.ConfirmPaymentStartedReply) => void): grpcWeb.ClientReadableStream<grpc_pb.ConfirmPaymentStartedReply>;

  confirmPaymentStarted(
    request: grpc_pb.ConfirmPaymentStartedRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: grpc_pb.ConfirmPaymentStartedReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/io.bisq.protobuffer.Trades/ConfirmPaymentStarted',
        request,
        metadata || {},
        this.methodInfoConfirmPaymentStarted,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/io.bisq.protobuffer.Trades/ConfirmPaymentStarted',
    request,
    metadata || {},
    this.methodInfoConfirmPaymentStarted);
  }

  methodInfoConfirmPaymentReceived = new grpcWeb.AbstractClientBase.MethodInfo(
    grpc_pb.ConfirmPaymentReceivedReply,
    (request: grpc_pb.ConfirmPaymentReceivedRequest) => {
      return request.serializeBinary();
    },
    grpc_pb.ConfirmPaymentReceivedReply.deserializeBinary
  );

  confirmPaymentReceived(
    request: grpc_pb.ConfirmPaymentReceivedRequest,
    metadata: grpcWeb.Metadata | null): Promise<grpc_pb.ConfirmPaymentReceivedReply>;

  confirmPaymentReceived(
    request: grpc_pb.ConfirmPaymentReceivedRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: grpc_pb.ConfirmPaymentReceivedReply) => void): grpcWeb.ClientReadableStream<grpc_pb.ConfirmPaymentReceivedReply>;

  confirmPaymentReceived(
    request: grpc_pb.ConfirmPaymentReceivedRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: grpc_pb.ConfirmPaymentReceivedReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/io.bisq.protobuffer.Trades/ConfirmPaymentReceived',
        request,
        metadata || {},
        this.methodInfoConfirmPaymentReceived,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/io.bisq.protobuffer.Trades/ConfirmPaymentReceived',
    request,
    metadata || {},
    this.methodInfoConfirmPaymentReceived);
  }

  methodInfoKeepFunds = new grpcWeb.AbstractClientBase.MethodInfo(
    grpc_pb.KeepFundsReply,
    (request: grpc_pb.KeepFundsRequest) => {
      return request.serializeBinary();
    },
    grpc_pb.KeepFundsReply.deserializeBinary
  );

  keepFunds(
    request: grpc_pb.KeepFundsRequest,
    metadata: grpcWeb.Metadata | null): Promise<grpc_pb.KeepFundsReply>;

  keepFunds(
    request: grpc_pb.KeepFundsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: grpc_pb.KeepFundsReply) => void): grpcWeb.ClientReadableStream<grpc_pb.KeepFundsReply>;

  keepFunds(
    request: grpc_pb.KeepFundsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: grpc_pb.KeepFundsReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/io.bisq.protobuffer.Trades/KeepFunds',
        request,
        metadata || {},
        this.methodInfoKeepFunds,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/io.bisq.protobuffer.Trades/KeepFunds',
    request,
    metadata || {},
    this.methodInfoKeepFunds);
  }

  methodInfoWithdrawFunds = new grpcWeb.AbstractClientBase.MethodInfo(
    grpc_pb.WithdrawFundsReply,
    (request: grpc_pb.WithdrawFundsRequest) => {
      return request.serializeBinary();
    },
    grpc_pb.WithdrawFundsReply.deserializeBinary
  );

  withdrawFunds(
    request: grpc_pb.WithdrawFundsRequest,
    metadata: grpcWeb.Metadata | null): Promise<grpc_pb.WithdrawFundsReply>;

  withdrawFunds(
    request: grpc_pb.WithdrawFundsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: grpc_pb.WithdrawFundsReply) => void): grpcWeb.ClientReadableStream<grpc_pb.WithdrawFundsReply>;

  withdrawFunds(
    request: grpc_pb.WithdrawFundsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: grpc_pb.WithdrawFundsReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/io.bisq.protobuffer.Trades/WithdrawFunds',
        request,
        metadata || {},
        this.methodInfoWithdrawFunds,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/io.bisq.protobuffer.Trades/WithdrawFunds',
    request,
    metadata || {},
    this.methodInfoWithdrawFunds);
  }

}

export class WalletsClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoGetBalances = new grpcWeb.AbstractClientBase.MethodInfo(
    grpc_pb.GetBalancesReply,
    (request: grpc_pb.GetBalancesRequest) => {
      return request.serializeBinary();
    },
    grpc_pb.GetBalancesReply.deserializeBinary
  );

  getBalances(
    request: grpc_pb.GetBalancesRequest,
    metadata: grpcWeb.Metadata | null): Promise<grpc_pb.GetBalancesReply>;

  getBalances(
    request: grpc_pb.GetBalancesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: grpc_pb.GetBalancesReply) => void): grpcWeb.ClientReadableStream<grpc_pb.GetBalancesReply>;

  getBalances(
    request: grpc_pb.GetBalancesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: grpc_pb.GetBalancesReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/io.bisq.protobuffer.Wallets/GetBalances',
        request,
        metadata || {},
        this.methodInfoGetBalances,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/io.bisq.protobuffer.Wallets/GetBalances',
    request,
    metadata || {},
    this.methodInfoGetBalances);
  }

  methodInfoGetNewDepositSubaddress = new grpcWeb.AbstractClientBase.MethodInfo(
    grpc_pb.GetNewDepositSubaddressReply,
    (request: grpc_pb.GetNewDepositSubaddressRequest) => {
      return request.serializeBinary();
    },
    grpc_pb.GetNewDepositSubaddressReply.deserializeBinary
  );

  getNewDepositSubaddress(
    request: grpc_pb.GetNewDepositSubaddressRequest,
    metadata: grpcWeb.Metadata | null): Promise<grpc_pb.GetNewDepositSubaddressReply>;

  getNewDepositSubaddress(
    request: grpc_pb.GetNewDepositSubaddressRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: grpc_pb.GetNewDepositSubaddressReply) => void): grpcWeb.ClientReadableStream<grpc_pb.GetNewDepositSubaddressReply>;

  getNewDepositSubaddress(
    request: grpc_pb.GetNewDepositSubaddressRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: grpc_pb.GetNewDepositSubaddressReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/io.bisq.protobuffer.Wallets/GetNewDepositSubaddress',
        request,
        metadata || {},
        this.methodInfoGetNewDepositSubaddress,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/io.bisq.protobuffer.Wallets/GetNewDepositSubaddress',
    request,
    metadata || {},
    this.methodInfoGetNewDepositSubaddress);
  }

  methodInfoGetAddressBalance = new grpcWeb.AbstractClientBase.MethodInfo(
    grpc_pb.GetAddressBalanceReply,
    (request: grpc_pb.GetAddressBalanceRequest) => {
      return request.serializeBinary();
    },
    grpc_pb.GetAddressBalanceReply.deserializeBinary
  );

  getAddressBalance(
    request: grpc_pb.GetAddressBalanceRequest,
    metadata: grpcWeb.Metadata | null): Promise<grpc_pb.GetAddressBalanceReply>;

  getAddressBalance(
    request: grpc_pb.GetAddressBalanceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: grpc_pb.GetAddressBalanceReply) => void): grpcWeb.ClientReadableStream<grpc_pb.GetAddressBalanceReply>;

  getAddressBalance(
    request: grpc_pb.GetAddressBalanceRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: grpc_pb.GetAddressBalanceReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/io.bisq.protobuffer.Wallets/GetAddressBalance',
        request,
        metadata || {},
        this.methodInfoGetAddressBalance,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/io.bisq.protobuffer.Wallets/GetAddressBalance',
    request,
    metadata || {},
    this.methodInfoGetAddressBalance);
  }

  methodInfoGetUnusedBsqAddress = new grpcWeb.AbstractClientBase.MethodInfo(
    grpc_pb.GetUnusedBsqAddressReply,
    (request: grpc_pb.GetUnusedBsqAddressRequest) => {
      return request.serializeBinary();
    },
    grpc_pb.GetUnusedBsqAddressReply.deserializeBinary
  );

  getUnusedBsqAddress(
    request: grpc_pb.GetUnusedBsqAddressRequest,
    metadata: grpcWeb.Metadata | null): Promise<grpc_pb.GetUnusedBsqAddressReply>;

  getUnusedBsqAddress(
    request: grpc_pb.GetUnusedBsqAddressRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: grpc_pb.GetUnusedBsqAddressReply) => void): grpcWeb.ClientReadableStream<grpc_pb.GetUnusedBsqAddressReply>;

  getUnusedBsqAddress(
    request: grpc_pb.GetUnusedBsqAddressRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: grpc_pb.GetUnusedBsqAddressReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/io.bisq.protobuffer.Wallets/GetUnusedBsqAddress',
        request,
        metadata || {},
        this.methodInfoGetUnusedBsqAddress,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/io.bisq.protobuffer.Wallets/GetUnusedBsqAddress',
    request,
    metadata || {},
    this.methodInfoGetUnusedBsqAddress);
  }

  methodInfoSendBsq = new grpcWeb.AbstractClientBase.MethodInfo(
    grpc_pb.SendBsqReply,
    (request: grpc_pb.SendBsqRequest) => {
      return request.serializeBinary();
    },
    grpc_pb.SendBsqReply.deserializeBinary
  );

  sendBsq(
    request: grpc_pb.SendBsqRequest,
    metadata: grpcWeb.Metadata | null): Promise<grpc_pb.SendBsqReply>;

  sendBsq(
    request: grpc_pb.SendBsqRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: grpc_pb.SendBsqReply) => void): grpcWeb.ClientReadableStream<grpc_pb.SendBsqReply>;

  sendBsq(
    request: grpc_pb.SendBsqRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: grpc_pb.SendBsqReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/io.bisq.protobuffer.Wallets/SendBsq',
        request,
        metadata || {},
        this.methodInfoSendBsq,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/io.bisq.protobuffer.Wallets/SendBsq',
    request,
    metadata || {},
    this.methodInfoSendBsq);
  }

  methodInfoSendBtc = new grpcWeb.AbstractClientBase.MethodInfo(
    grpc_pb.SendBtcReply,
    (request: grpc_pb.SendBtcRequest) => {
      return request.serializeBinary();
    },
    grpc_pb.SendBtcReply.deserializeBinary
  );

  sendBtc(
    request: grpc_pb.SendBtcRequest,
    metadata: grpcWeb.Metadata | null): Promise<grpc_pb.SendBtcReply>;

  sendBtc(
    request: grpc_pb.SendBtcRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: grpc_pb.SendBtcReply) => void): grpcWeb.ClientReadableStream<grpc_pb.SendBtcReply>;

  sendBtc(
    request: grpc_pb.SendBtcRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: grpc_pb.SendBtcReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/io.bisq.protobuffer.Wallets/SendBtc',
        request,
        metadata || {},
        this.methodInfoSendBtc,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/io.bisq.protobuffer.Wallets/SendBtc',
    request,
    metadata || {},
    this.methodInfoSendBtc);
  }

  methodInfoVerifyBsqSentToAddress = new grpcWeb.AbstractClientBase.MethodInfo(
    grpc_pb.VerifyBsqSentToAddressReply,
    (request: grpc_pb.VerifyBsqSentToAddressRequest) => {
      return request.serializeBinary();
    },
    grpc_pb.VerifyBsqSentToAddressReply.deserializeBinary
  );

  verifyBsqSentToAddress(
    request: grpc_pb.VerifyBsqSentToAddressRequest,
    metadata: grpcWeb.Metadata | null): Promise<grpc_pb.VerifyBsqSentToAddressReply>;

  verifyBsqSentToAddress(
    request: grpc_pb.VerifyBsqSentToAddressRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: grpc_pb.VerifyBsqSentToAddressReply) => void): grpcWeb.ClientReadableStream<grpc_pb.VerifyBsqSentToAddressReply>;

  verifyBsqSentToAddress(
    request: grpc_pb.VerifyBsqSentToAddressRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: grpc_pb.VerifyBsqSentToAddressReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/io.bisq.protobuffer.Wallets/VerifyBsqSentToAddress',
        request,
        metadata || {},
        this.methodInfoVerifyBsqSentToAddress,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/io.bisq.protobuffer.Wallets/VerifyBsqSentToAddress',
    request,
    metadata || {},
    this.methodInfoVerifyBsqSentToAddress);
  }

  methodInfoGetTxFeeRate = new grpcWeb.AbstractClientBase.MethodInfo(
    grpc_pb.GetTxFeeRateReply,
    (request: grpc_pb.GetTxFeeRateRequest) => {
      return request.serializeBinary();
    },
    grpc_pb.GetTxFeeRateReply.deserializeBinary
  );

  getTxFeeRate(
    request: grpc_pb.GetTxFeeRateRequest,
    metadata: grpcWeb.Metadata | null): Promise<grpc_pb.GetTxFeeRateReply>;

  getTxFeeRate(
    request: grpc_pb.GetTxFeeRateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: grpc_pb.GetTxFeeRateReply) => void): grpcWeb.ClientReadableStream<grpc_pb.GetTxFeeRateReply>;

  getTxFeeRate(
    request: grpc_pb.GetTxFeeRateRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: grpc_pb.GetTxFeeRateReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/io.bisq.protobuffer.Wallets/GetTxFeeRate',
        request,
        metadata || {},
        this.methodInfoGetTxFeeRate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/io.bisq.protobuffer.Wallets/GetTxFeeRate',
    request,
    metadata || {},
    this.methodInfoGetTxFeeRate);
  }

  methodInfoSetTxFeeRatePreference = new grpcWeb.AbstractClientBase.MethodInfo(
    grpc_pb.SetTxFeeRatePreferenceReply,
    (request: grpc_pb.SetTxFeeRatePreferenceRequest) => {
      return request.serializeBinary();
    },
    grpc_pb.SetTxFeeRatePreferenceReply.deserializeBinary
  );

  setTxFeeRatePreference(
    request: grpc_pb.SetTxFeeRatePreferenceRequest,
    metadata: grpcWeb.Metadata | null): Promise<grpc_pb.SetTxFeeRatePreferenceReply>;

  setTxFeeRatePreference(
    request: grpc_pb.SetTxFeeRatePreferenceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: grpc_pb.SetTxFeeRatePreferenceReply) => void): grpcWeb.ClientReadableStream<grpc_pb.SetTxFeeRatePreferenceReply>;

  setTxFeeRatePreference(
    request: grpc_pb.SetTxFeeRatePreferenceRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: grpc_pb.SetTxFeeRatePreferenceReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/io.bisq.protobuffer.Wallets/SetTxFeeRatePreference',
        request,
        metadata || {},
        this.methodInfoSetTxFeeRatePreference,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/io.bisq.protobuffer.Wallets/SetTxFeeRatePreference',
    request,
    metadata || {},
    this.methodInfoSetTxFeeRatePreference);
  }

  methodInfoUnsetTxFeeRatePreference = new grpcWeb.AbstractClientBase.MethodInfo(
    grpc_pb.UnsetTxFeeRatePreferenceReply,
    (request: grpc_pb.UnsetTxFeeRatePreferenceRequest) => {
      return request.serializeBinary();
    },
    grpc_pb.UnsetTxFeeRatePreferenceReply.deserializeBinary
  );

  unsetTxFeeRatePreference(
    request: grpc_pb.UnsetTxFeeRatePreferenceRequest,
    metadata: grpcWeb.Metadata | null): Promise<grpc_pb.UnsetTxFeeRatePreferenceReply>;

  unsetTxFeeRatePreference(
    request: grpc_pb.UnsetTxFeeRatePreferenceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: grpc_pb.UnsetTxFeeRatePreferenceReply) => void): grpcWeb.ClientReadableStream<grpc_pb.UnsetTxFeeRatePreferenceReply>;

  unsetTxFeeRatePreference(
    request: grpc_pb.UnsetTxFeeRatePreferenceRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: grpc_pb.UnsetTxFeeRatePreferenceReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/io.bisq.protobuffer.Wallets/UnsetTxFeeRatePreference',
        request,
        metadata || {},
        this.methodInfoUnsetTxFeeRatePreference,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/io.bisq.protobuffer.Wallets/UnsetTxFeeRatePreference',
    request,
    metadata || {},
    this.methodInfoUnsetTxFeeRatePreference);
  }

  methodInfoGetTransaction = new grpcWeb.AbstractClientBase.MethodInfo(
    grpc_pb.GetTransactionReply,
    (request: grpc_pb.GetTransactionRequest) => {
      return request.serializeBinary();
    },
    grpc_pb.GetTransactionReply.deserializeBinary
  );

  getTransaction(
    request: grpc_pb.GetTransactionRequest,
    metadata: grpcWeb.Metadata | null): Promise<grpc_pb.GetTransactionReply>;

  getTransaction(
    request: grpc_pb.GetTransactionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: grpc_pb.GetTransactionReply) => void): grpcWeb.ClientReadableStream<grpc_pb.GetTransactionReply>;

  getTransaction(
    request: grpc_pb.GetTransactionRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: grpc_pb.GetTransactionReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/io.bisq.protobuffer.Wallets/GetTransaction',
        request,
        metadata || {},
        this.methodInfoGetTransaction,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/io.bisq.protobuffer.Wallets/GetTransaction',
    request,
    metadata || {},
    this.methodInfoGetTransaction);
  }

  methodInfoGetFundingAddresses = new grpcWeb.AbstractClientBase.MethodInfo(
    grpc_pb.GetFundingAddressesReply,
    (request: grpc_pb.GetFundingAddressesRequest) => {
      return request.serializeBinary();
    },
    grpc_pb.GetFundingAddressesReply.deserializeBinary
  );

  getFundingAddresses(
    request: grpc_pb.GetFundingAddressesRequest,
    metadata: grpcWeb.Metadata | null): Promise<grpc_pb.GetFundingAddressesReply>;

  getFundingAddresses(
    request: grpc_pb.GetFundingAddressesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: grpc_pb.GetFundingAddressesReply) => void): grpcWeb.ClientReadableStream<grpc_pb.GetFundingAddressesReply>;

  getFundingAddresses(
    request: grpc_pb.GetFundingAddressesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: grpc_pb.GetFundingAddressesReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/io.bisq.protobuffer.Wallets/GetFundingAddresses',
        request,
        metadata || {},
        this.methodInfoGetFundingAddresses,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/io.bisq.protobuffer.Wallets/GetFundingAddresses',
    request,
    metadata || {},
    this.methodInfoGetFundingAddresses);
  }

  methodInfoSetWalletPassword = new grpcWeb.AbstractClientBase.MethodInfo(
    grpc_pb.SetWalletPasswordReply,
    (request: grpc_pb.SetWalletPasswordRequest) => {
      return request.serializeBinary();
    },
    grpc_pb.SetWalletPasswordReply.deserializeBinary
  );

  setWalletPassword(
    request: grpc_pb.SetWalletPasswordRequest,
    metadata: grpcWeb.Metadata | null): Promise<grpc_pb.SetWalletPasswordReply>;

  setWalletPassword(
    request: grpc_pb.SetWalletPasswordRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: grpc_pb.SetWalletPasswordReply) => void): grpcWeb.ClientReadableStream<grpc_pb.SetWalletPasswordReply>;

  setWalletPassword(
    request: grpc_pb.SetWalletPasswordRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: grpc_pb.SetWalletPasswordReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/io.bisq.protobuffer.Wallets/SetWalletPassword',
        request,
        metadata || {},
        this.methodInfoSetWalletPassword,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/io.bisq.protobuffer.Wallets/SetWalletPassword',
    request,
    metadata || {},
    this.methodInfoSetWalletPassword);
  }

  methodInfoRemoveWalletPassword = new grpcWeb.AbstractClientBase.MethodInfo(
    grpc_pb.RemoveWalletPasswordReply,
    (request: grpc_pb.RemoveWalletPasswordRequest) => {
      return request.serializeBinary();
    },
    grpc_pb.RemoveWalletPasswordReply.deserializeBinary
  );

  removeWalletPassword(
    request: grpc_pb.RemoveWalletPasswordRequest,
    metadata: grpcWeb.Metadata | null): Promise<grpc_pb.RemoveWalletPasswordReply>;

  removeWalletPassword(
    request: grpc_pb.RemoveWalletPasswordRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: grpc_pb.RemoveWalletPasswordReply) => void): grpcWeb.ClientReadableStream<grpc_pb.RemoveWalletPasswordReply>;

  removeWalletPassword(
    request: grpc_pb.RemoveWalletPasswordRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: grpc_pb.RemoveWalletPasswordReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/io.bisq.protobuffer.Wallets/RemoveWalletPassword',
        request,
        metadata || {},
        this.methodInfoRemoveWalletPassword,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/io.bisq.protobuffer.Wallets/RemoveWalletPassword',
    request,
    metadata || {},
    this.methodInfoRemoveWalletPassword);
  }

  methodInfoLockWallet = new grpcWeb.AbstractClientBase.MethodInfo(
    grpc_pb.LockWalletReply,
    (request: grpc_pb.LockWalletRequest) => {
      return request.serializeBinary();
    },
    grpc_pb.LockWalletReply.deserializeBinary
  );

  lockWallet(
    request: grpc_pb.LockWalletRequest,
    metadata: grpcWeb.Metadata | null): Promise<grpc_pb.LockWalletReply>;

  lockWallet(
    request: grpc_pb.LockWalletRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: grpc_pb.LockWalletReply) => void): grpcWeb.ClientReadableStream<grpc_pb.LockWalletReply>;

  lockWallet(
    request: grpc_pb.LockWalletRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: grpc_pb.LockWalletReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/io.bisq.protobuffer.Wallets/LockWallet',
        request,
        metadata || {},
        this.methodInfoLockWallet,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/io.bisq.protobuffer.Wallets/LockWallet',
    request,
    metadata || {},
    this.methodInfoLockWallet);
  }

  methodInfoUnlockWallet = new grpcWeb.AbstractClientBase.MethodInfo(
    grpc_pb.UnlockWalletReply,
    (request: grpc_pb.UnlockWalletRequest) => {
      return request.serializeBinary();
    },
    grpc_pb.UnlockWalletReply.deserializeBinary
  );

  unlockWallet(
    request: grpc_pb.UnlockWalletRequest,
    metadata: grpcWeb.Metadata | null): Promise<grpc_pb.UnlockWalletReply>;

  unlockWallet(
    request: grpc_pb.UnlockWalletRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: grpc_pb.UnlockWalletReply) => void): grpcWeb.ClientReadableStream<grpc_pb.UnlockWalletReply>;

  unlockWallet(
    request: grpc_pb.UnlockWalletRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: grpc_pb.UnlockWalletReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/io.bisq.protobuffer.Wallets/UnlockWallet',
        request,
        metadata || {},
        this.methodInfoUnlockWallet,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/io.bisq.protobuffer.Wallets/UnlockWallet',
    request,
    metadata || {},
    this.methodInfoUnlockWallet);
  }

}

export class GetVersionClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoGetVersion = new grpcWeb.AbstractClientBase.MethodInfo(
    grpc_pb.GetVersionReply,
    (request: grpc_pb.GetVersionRequest) => {
      return request.serializeBinary();
    },
    grpc_pb.GetVersionReply.deserializeBinary
  );

  getVersion(
    request: grpc_pb.GetVersionRequest,
    metadata: grpcWeb.Metadata | null): Promise<grpc_pb.GetVersionReply>;

  getVersion(
    request: grpc_pb.GetVersionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: grpc_pb.GetVersionReply) => void): grpcWeb.ClientReadableStream<grpc_pb.GetVersionReply>;

  getVersion(
    request: grpc_pb.GetVersionRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: grpc_pb.GetVersionReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/io.bisq.protobuffer.GetVersion/GetVersion',
        request,
        metadata || {},
        this.methodInfoGetVersion,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/io.bisq.protobuffer.GetVersion/GetVersion',
    request,
    metadata || {},
    this.methodInfoGetVersion);
  }

}

