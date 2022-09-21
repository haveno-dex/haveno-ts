"use strict";
/**
 * @fileoverview gRPC-Web generated client stub for io.bisq.protobuffer
 * @enhanceable
 * @public
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletsClient = exports.TradesClient = exports.ShutdownServerClient = exports.GetTradeStatisticsClient = exports.PriceClient = exports.PaymentAccountsClient = exports.OffersClient = exports.MoneroNodeClient = exports.MoneroConnectionsClient = exports.NotificationsClient = exports.DisputeAgentsClient = exports.DisputesClient = exports.AccountClient = exports.GetVersionClient = exports.HelpClient = void 0;
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck
const grpcWeb = __importStar(require("grpc-web"));
const grpc_pb = __importStar(require("./grpc_pb"));
class HelpClient {
    constructor(hostname, credentials, options) {
        this.methodDescriptorGetMethodHelp = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.Help/GetMethodHelp', grpcWeb.MethodType.UNARY, grpc_pb.GetMethodHelpRequest, grpc_pb.GetMethodHelpReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.GetMethodHelpReply.deserializeBinary);
        if (!options)
            options = {};
        if (!credentials)
            credentials = {};
        options['format'] = 'text';
        this.client_ = new grpcWeb.GrpcWebClientBase(options);
        this.hostname_ = hostname;
        this.credentials_ = credentials;
        this.options_ = options;
    }
    getMethodHelp(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.Help/GetMethodHelp', request, metadata || {}, this.methodDescriptorGetMethodHelp, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.Help/GetMethodHelp', request, metadata || {}, this.methodDescriptorGetMethodHelp);
    }
}
exports.HelpClient = HelpClient;
class GetVersionClient {
    constructor(hostname, credentials, options) {
        this.methodDescriptorGetVersion = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.GetVersion/GetVersion', grpcWeb.MethodType.UNARY, grpc_pb.GetVersionRequest, grpc_pb.GetVersionReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.GetVersionReply.deserializeBinary);
        if (!options)
            options = {};
        if (!credentials)
            credentials = {};
        options['format'] = 'text';
        this.client_ = new grpcWeb.GrpcWebClientBase(options);
        this.hostname_ = hostname;
        this.credentials_ = credentials;
        this.options_ = options;
    }
    getVersion(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.GetVersion/GetVersion', request, metadata || {}, this.methodDescriptorGetVersion, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.GetVersion/GetVersion', request, metadata || {}, this.methodDescriptorGetVersion);
    }
}
exports.GetVersionClient = GetVersionClient;
class AccountClient {
    constructor(hostname, credentials, options) {
        this.methodDescriptorAccountExists = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.Account/AccountExists', grpcWeb.MethodType.UNARY, grpc_pb.AccountExistsRequest, grpc_pb.AccountExistsReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.AccountExistsReply.deserializeBinary);
        this.methodDescriptorIsAccountOpen = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.Account/IsAccountOpen', grpcWeb.MethodType.UNARY, grpc_pb.IsAccountOpenRequest, grpc_pb.IsAccountOpenReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.IsAccountOpenReply.deserializeBinary);
        this.methodDescriptorCreateAccount = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.Account/CreateAccount', grpcWeb.MethodType.UNARY, grpc_pb.CreateAccountRequest, grpc_pb.CreateAccountReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.CreateAccountReply.deserializeBinary);
        this.methodDescriptorOpenAccount = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.Account/OpenAccount', grpcWeb.MethodType.UNARY, grpc_pb.OpenAccountRequest, grpc_pb.OpenAccountReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.OpenAccountReply.deserializeBinary);
        this.methodDescriptorIsAppInitialized = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.Account/IsAppInitialized', grpcWeb.MethodType.UNARY, grpc_pb.IsAppInitializedRequest, grpc_pb.IsAppInitializedReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.IsAppInitializedReply.deserializeBinary);
        this.methodDescriptorChangePassword = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.Account/ChangePassword', grpcWeb.MethodType.UNARY, grpc_pb.ChangePasswordRequest, grpc_pb.ChangePasswordReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.ChangePasswordReply.deserializeBinary);
        this.methodDescriptorCloseAccount = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.Account/CloseAccount', grpcWeb.MethodType.UNARY, grpc_pb.CloseAccountRequest, grpc_pb.CloseAccountReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.CloseAccountReply.deserializeBinary);
        this.methodDescriptorDeleteAccount = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.Account/DeleteAccount', grpcWeb.MethodType.UNARY, grpc_pb.DeleteAccountRequest, grpc_pb.DeleteAccountReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.DeleteAccountReply.deserializeBinary);
        this.methodDescriptorBackupAccount = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.Account/BackupAccount', grpcWeb.MethodType.SERVER_STREAMING, grpc_pb.BackupAccountRequest, grpc_pb.BackupAccountReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.BackupAccountReply.deserializeBinary);
        this.methodDescriptorRestoreAccount = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.Account/RestoreAccount', grpcWeb.MethodType.UNARY, grpc_pb.RestoreAccountRequest, grpc_pb.RestoreAccountReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.RestoreAccountReply.deserializeBinary);
        if (!options)
            options = {};
        if (!credentials)
            credentials = {};
        options['format'] = 'text';
        this.client_ = new grpcWeb.GrpcWebClientBase(options);
        this.hostname_ = hostname;
        this.credentials_ = credentials;
        this.options_ = options;
    }
    accountExists(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.Account/AccountExists', request, metadata || {}, this.methodDescriptorAccountExists, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.Account/AccountExists', request, metadata || {}, this.methodDescriptorAccountExists);
    }
    isAccountOpen(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.Account/IsAccountOpen', request, metadata || {}, this.methodDescriptorIsAccountOpen, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.Account/IsAccountOpen', request, metadata || {}, this.methodDescriptorIsAccountOpen);
    }
    createAccount(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.Account/CreateAccount', request, metadata || {}, this.methodDescriptorCreateAccount, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.Account/CreateAccount', request, metadata || {}, this.methodDescriptorCreateAccount);
    }
    openAccount(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.Account/OpenAccount', request, metadata || {}, this.methodDescriptorOpenAccount, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.Account/OpenAccount', request, metadata || {}, this.methodDescriptorOpenAccount);
    }
    isAppInitialized(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.Account/IsAppInitialized', request, metadata || {}, this.methodDescriptorIsAppInitialized, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.Account/IsAppInitialized', request, metadata || {}, this.methodDescriptorIsAppInitialized);
    }
    changePassword(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.Account/ChangePassword', request, metadata || {}, this.methodDescriptorChangePassword, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.Account/ChangePassword', request, metadata || {}, this.methodDescriptorChangePassword);
    }
    closeAccount(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.Account/CloseAccount', request, metadata || {}, this.methodDescriptorCloseAccount, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.Account/CloseAccount', request, metadata || {}, this.methodDescriptorCloseAccount);
    }
    deleteAccount(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.Account/DeleteAccount', request, metadata || {}, this.methodDescriptorDeleteAccount, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.Account/DeleteAccount', request, metadata || {}, this.methodDescriptorDeleteAccount);
    }
    backupAccount(request, metadata) {
        return this.client_.serverStreaming(this.hostname_ +
            '/io.bisq.protobuffer.Account/BackupAccount', request, metadata || {}, this.methodDescriptorBackupAccount);
    }
    restoreAccount(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.Account/RestoreAccount', request, metadata || {}, this.methodDescriptorRestoreAccount, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.Account/RestoreAccount', request, metadata || {}, this.methodDescriptorRestoreAccount);
    }
}
exports.AccountClient = AccountClient;
class DisputesClient {
    constructor(hostname, credentials, options) {
        this.methodDescriptorGetDispute = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.Disputes/GetDispute', grpcWeb.MethodType.UNARY, grpc_pb.GetDisputeRequest, grpc_pb.GetDisputeReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.GetDisputeReply.deserializeBinary);
        this.methodDescriptorGetDisputes = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.Disputes/GetDisputes', grpcWeb.MethodType.UNARY, grpc_pb.GetDisputesRequest, grpc_pb.GetDisputesReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.GetDisputesReply.deserializeBinary);
        this.methodDescriptorOpenDispute = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.Disputes/OpenDispute', grpcWeb.MethodType.UNARY, grpc_pb.OpenDisputeRequest, grpc_pb.OpenDisputeReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.OpenDisputeReply.deserializeBinary);
        this.methodDescriptorResolveDispute = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.Disputes/ResolveDispute', grpcWeb.MethodType.UNARY, grpc_pb.ResolveDisputeRequest, grpc_pb.ResolveDisputeReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.ResolveDisputeReply.deserializeBinary);
        this.methodDescriptorSendDisputeChatMessage = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.Disputes/SendDisputeChatMessage', grpcWeb.MethodType.UNARY, grpc_pb.SendDisputeChatMessageRequest, grpc_pb.SendDisputeChatMessageReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.SendDisputeChatMessageReply.deserializeBinary);
        if (!options)
            options = {};
        if (!credentials)
            credentials = {};
        options['format'] = 'text';
        this.client_ = new grpcWeb.GrpcWebClientBase(options);
        this.hostname_ = hostname;
        this.credentials_ = credentials;
        this.options_ = options;
    }
    getDispute(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.Disputes/GetDispute', request, metadata || {}, this.methodDescriptorGetDispute, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.Disputes/GetDispute', request, metadata || {}, this.methodDescriptorGetDispute);
    }
    getDisputes(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.Disputes/GetDisputes', request, metadata || {}, this.methodDescriptorGetDisputes, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.Disputes/GetDisputes', request, metadata || {}, this.methodDescriptorGetDisputes);
    }
    openDispute(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.Disputes/OpenDispute', request, metadata || {}, this.methodDescriptorOpenDispute, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.Disputes/OpenDispute', request, metadata || {}, this.methodDescriptorOpenDispute);
    }
    resolveDispute(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.Disputes/ResolveDispute', request, metadata || {}, this.methodDescriptorResolveDispute, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.Disputes/ResolveDispute', request, metadata || {}, this.methodDescriptorResolveDispute);
    }
    sendDisputeChatMessage(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.Disputes/SendDisputeChatMessage', request, metadata || {}, this.methodDescriptorSendDisputeChatMessage, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.Disputes/SendDisputeChatMessage', request, metadata || {}, this.methodDescriptorSendDisputeChatMessage);
    }
}
exports.DisputesClient = DisputesClient;
class DisputeAgentsClient {
    constructor(hostname, credentials, options) {
        this.methodDescriptorRegisterDisputeAgent = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.DisputeAgents/RegisterDisputeAgent', grpcWeb.MethodType.UNARY, grpc_pb.RegisterDisputeAgentRequest, grpc_pb.RegisterDisputeAgentReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.RegisterDisputeAgentReply.deserializeBinary);
        this.methodDescriptorUnregisterDisputeAgent = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.DisputeAgents/UnregisterDisputeAgent', grpcWeb.MethodType.UNARY, grpc_pb.UnregisterDisputeAgentRequest, grpc_pb.UnregisterDisputeAgentReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.UnregisterDisputeAgentReply.deserializeBinary);
        if (!options)
            options = {};
        if (!credentials)
            credentials = {};
        options['format'] = 'text';
        this.client_ = new grpcWeb.GrpcWebClientBase(options);
        this.hostname_ = hostname;
        this.credentials_ = credentials;
        this.options_ = options;
    }
    registerDisputeAgent(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.DisputeAgents/RegisterDisputeAgent', request, metadata || {}, this.methodDescriptorRegisterDisputeAgent, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.DisputeAgents/RegisterDisputeAgent', request, metadata || {}, this.methodDescriptorRegisterDisputeAgent);
    }
    unregisterDisputeAgent(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.DisputeAgents/UnregisterDisputeAgent', request, metadata || {}, this.methodDescriptorUnregisterDisputeAgent, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.DisputeAgents/UnregisterDisputeAgent', request, metadata || {}, this.methodDescriptorUnregisterDisputeAgent);
    }
}
exports.DisputeAgentsClient = DisputeAgentsClient;
class NotificationsClient {
    constructor(hostname, credentials, options) {
        this.methodDescriptorRegisterNotificationListener = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.Notifications/RegisterNotificationListener', grpcWeb.MethodType.SERVER_STREAMING, grpc_pb.RegisterNotificationListenerRequest, grpc_pb.NotificationMessage, (request) => {
            return request.serializeBinary();
        }, grpc_pb.NotificationMessage.deserializeBinary);
        this.methodDescriptorSendNotification = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.Notifications/SendNotification', grpcWeb.MethodType.UNARY, grpc_pb.SendNotificationRequest, grpc_pb.SendNotificationReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.SendNotificationReply.deserializeBinary);
        if (!options)
            options = {};
        if (!credentials)
            credentials = {};
        options['format'] = 'text';
        this.client_ = new grpcWeb.GrpcWebClientBase(options);
        this.hostname_ = hostname;
        this.credentials_ = credentials;
        this.options_ = options;
    }
    registerNotificationListener(request, metadata) {
        return this.client_.serverStreaming(this.hostname_ +
            '/io.bisq.protobuffer.Notifications/RegisterNotificationListener', request, metadata || {}, this.methodDescriptorRegisterNotificationListener);
    }
    sendNotification(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.Notifications/SendNotification', request, metadata || {}, this.methodDescriptorSendNotification, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.Notifications/SendNotification', request, metadata || {}, this.methodDescriptorSendNotification);
    }
}
exports.NotificationsClient = NotificationsClient;
class MoneroConnectionsClient {
    constructor(hostname, credentials, options) {
        this.methodDescriptorAddConnection = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.MoneroConnections/AddConnection', grpcWeb.MethodType.UNARY, grpc_pb.AddConnectionRequest, grpc_pb.AddConnectionReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.AddConnectionReply.deserializeBinary);
        this.methodDescriptorRemoveConnection = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.MoneroConnections/RemoveConnection', grpcWeb.MethodType.UNARY, grpc_pb.RemoveConnectionRequest, grpc_pb.RemoveConnectionReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.RemoveConnectionReply.deserializeBinary);
        this.methodDescriptorGetConnection = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.MoneroConnections/GetConnection', grpcWeb.MethodType.UNARY, grpc_pb.GetConnectionRequest, grpc_pb.GetConnectionReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.GetConnectionReply.deserializeBinary);
        this.methodDescriptorGetConnections = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.MoneroConnections/GetConnections', grpcWeb.MethodType.UNARY, grpc_pb.GetConnectionsRequest, grpc_pb.GetConnectionsReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.GetConnectionsReply.deserializeBinary);
        this.methodDescriptorSetConnection = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.MoneroConnections/SetConnection', grpcWeb.MethodType.UNARY, grpc_pb.SetConnectionRequest, grpc_pb.SetConnectionReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.SetConnectionReply.deserializeBinary);
        this.methodDescriptorCheckConnection = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.MoneroConnections/CheckConnection', grpcWeb.MethodType.UNARY, grpc_pb.CheckConnectionRequest, grpc_pb.CheckConnectionReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.CheckConnectionReply.deserializeBinary);
        this.methodDescriptorCheckConnections = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.MoneroConnections/CheckConnections', grpcWeb.MethodType.UNARY, grpc_pb.CheckConnectionsRequest, grpc_pb.CheckConnectionsReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.CheckConnectionsReply.deserializeBinary);
        this.methodDescriptorStartCheckingConnections = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.MoneroConnections/StartCheckingConnections', grpcWeb.MethodType.UNARY, grpc_pb.StartCheckingConnectionsRequest, grpc_pb.StartCheckingConnectionsReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.StartCheckingConnectionsReply.deserializeBinary);
        this.methodDescriptorStopCheckingConnections = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.MoneroConnections/StopCheckingConnections', grpcWeb.MethodType.UNARY, grpc_pb.StopCheckingConnectionsRequest, grpc_pb.StopCheckingConnectionsReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.StopCheckingConnectionsReply.deserializeBinary);
        this.methodDescriptorGetBestAvailableConnection = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.MoneroConnections/GetBestAvailableConnection', grpcWeb.MethodType.UNARY, grpc_pb.GetBestAvailableConnectionRequest, grpc_pb.GetBestAvailableConnectionReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.GetBestAvailableConnectionReply.deserializeBinary);
        this.methodDescriptorSetAutoSwitch = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.MoneroConnections/SetAutoSwitch', grpcWeb.MethodType.UNARY, grpc_pb.SetAutoSwitchRequest, grpc_pb.SetAutoSwitchReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.SetAutoSwitchReply.deserializeBinary);
        if (!options)
            options = {};
        if (!credentials)
            credentials = {};
        options['format'] = 'text';
        this.client_ = new grpcWeb.GrpcWebClientBase(options);
        this.hostname_ = hostname;
        this.credentials_ = credentials;
        this.options_ = options;
    }
    addConnection(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.MoneroConnections/AddConnection', request, metadata || {}, this.methodDescriptorAddConnection, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.MoneroConnections/AddConnection', request, metadata || {}, this.methodDescriptorAddConnection);
    }
    removeConnection(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.MoneroConnections/RemoveConnection', request, metadata || {}, this.methodDescriptorRemoveConnection, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.MoneroConnections/RemoveConnection', request, metadata || {}, this.methodDescriptorRemoveConnection);
    }
    getConnection(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.MoneroConnections/GetConnection', request, metadata || {}, this.methodDescriptorGetConnection, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.MoneroConnections/GetConnection', request, metadata || {}, this.methodDescriptorGetConnection);
    }
    getConnections(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.MoneroConnections/GetConnections', request, metadata || {}, this.methodDescriptorGetConnections, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.MoneroConnections/GetConnections', request, metadata || {}, this.methodDescriptorGetConnections);
    }
    setConnection(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.MoneroConnections/SetConnection', request, metadata || {}, this.methodDescriptorSetConnection, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.MoneroConnections/SetConnection', request, metadata || {}, this.methodDescriptorSetConnection);
    }
    checkConnection(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.MoneroConnections/CheckConnection', request, metadata || {}, this.methodDescriptorCheckConnection, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.MoneroConnections/CheckConnection', request, metadata || {}, this.methodDescriptorCheckConnection);
    }
    checkConnections(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.MoneroConnections/CheckConnections', request, metadata || {}, this.methodDescriptorCheckConnections, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.MoneroConnections/CheckConnections', request, metadata || {}, this.methodDescriptorCheckConnections);
    }
    startCheckingConnections(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.MoneroConnections/StartCheckingConnections', request, metadata || {}, this.methodDescriptorStartCheckingConnections, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.MoneroConnections/StartCheckingConnections', request, metadata || {}, this.methodDescriptorStartCheckingConnections);
    }
    stopCheckingConnections(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.MoneroConnections/StopCheckingConnections', request, metadata || {}, this.methodDescriptorStopCheckingConnections, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.MoneroConnections/StopCheckingConnections', request, metadata || {}, this.methodDescriptorStopCheckingConnections);
    }
    getBestAvailableConnection(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.MoneroConnections/GetBestAvailableConnection', request, metadata || {}, this.methodDescriptorGetBestAvailableConnection, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.MoneroConnections/GetBestAvailableConnection', request, metadata || {}, this.methodDescriptorGetBestAvailableConnection);
    }
    setAutoSwitch(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.MoneroConnections/SetAutoSwitch', request, metadata || {}, this.methodDescriptorSetAutoSwitch, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.MoneroConnections/SetAutoSwitch', request, metadata || {}, this.methodDescriptorSetAutoSwitch);
    }
}
exports.MoneroConnectionsClient = MoneroConnectionsClient;
class MoneroNodeClient {
    constructor(hostname, credentials, options) {
        this.methodDescriptorIsMoneroNodeOnline = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.MoneroNode/IsMoneroNodeOnline', grpcWeb.MethodType.UNARY, grpc_pb.IsMoneroNodeOnlineRequest, grpc_pb.IsMoneroNodeOnlineReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.IsMoneroNodeOnlineReply.deserializeBinary);
        this.methodDescriptorGetMoneroNodeSettings = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.MoneroNode/GetMoneroNodeSettings', grpcWeb.MethodType.UNARY, grpc_pb.GetMoneroNodeSettingsRequest, grpc_pb.GetMoneroNodeSettingsReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.GetMoneroNodeSettingsReply.deserializeBinary);
        this.methodDescriptorStartMoneroNode = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.MoneroNode/StartMoneroNode', grpcWeb.MethodType.UNARY, grpc_pb.StartMoneroNodeRequest, grpc_pb.StartMoneroNodeReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.StartMoneroNodeReply.deserializeBinary);
        this.methodDescriptorStopMoneroNode = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.MoneroNode/StopMoneroNode', grpcWeb.MethodType.UNARY, grpc_pb.StopMoneroNodeRequest, grpc_pb.StopMoneroNodeReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.StopMoneroNodeReply.deserializeBinary);
        if (!options)
            options = {};
        if (!credentials)
            credentials = {};
        options['format'] = 'text';
        this.client_ = new grpcWeb.GrpcWebClientBase(options);
        this.hostname_ = hostname;
        this.credentials_ = credentials;
        this.options_ = options;
    }
    isMoneroNodeOnline(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.MoneroNode/IsMoneroNodeOnline', request, metadata || {}, this.methodDescriptorIsMoneroNodeOnline, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.MoneroNode/IsMoneroNodeOnline', request, metadata || {}, this.methodDescriptorIsMoneroNodeOnline);
    }
    getMoneroNodeSettings(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.MoneroNode/GetMoneroNodeSettings', request, metadata || {}, this.methodDescriptorGetMoneroNodeSettings, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.MoneroNode/GetMoneroNodeSettings', request, metadata || {}, this.methodDescriptorGetMoneroNodeSettings);
    }
    startMoneroNode(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.MoneroNode/StartMoneroNode', request, metadata || {}, this.methodDescriptorStartMoneroNode, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.MoneroNode/StartMoneroNode', request, metadata || {}, this.methodDescriptorStartMoneroNode);
    }
    stopMoneroNode(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.MoneroNode/StopMoneroNode', request, metadata || {}, this.methodDescriptorStopMoneroNode, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.MoneroNode/StopMoneroNode', request, metadata || {}, this.methodDescriptorStopMoneroNode);
    }
}
exports.MoneroNodeClient = MoneroNodeClient;
class OffersClient {
    constructor(hostname, credentials, options) {
        this.methodDescriptorGetOffer = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.Offers/GetOffer', grpcWeb.MethodType.UNARY, grpc_pb.GetOfferRequest, grpc_pb.GetOfferReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.GetOfferReply.deserializeBinary);
        this.methodDescriptorGetMyOffer = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.Offers/GetMyOffer', grpcWeb.MethodType.UNARY, grpc_pb.GetMyOfferRequest, grpc_pb.GetMyOfferReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.GetMyOfferReply.deserializeBinary);
        this.methodDescriptorGetOffers = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.Offers/GetOffers', grpcWeb.MethodType.UNARY, grpc_pb.GetOffersRequest, grpc_pb.GetOffersReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.GetOffersReply.deserializeBinary);
        this.methodDescriptorGetMyOffers = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.Offers/GetMyOffers', grpcWeb.MethodType.UNARY, grpc_pb.GetMyOffersRequest, grpc_pb.GetMyOffersReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.GetMyOffersReply.deserializeBinary);
        this.methodDescriptorCreateOffer = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.Offers/CreateOffer', grpcWeb.MethodType.UNARY, grpc_pb.CreateOfferRequest, grpc_pb.CreateOfferReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.CreateOfferReply.deserializeBinary);
        this.methodDescriptorCancelOffer = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.Offers/CancelOffer', grpcWeb.MethodType.UNARY, grpc_pb.CancelOfferRequest, grpc_pb.CancelOfferReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.CancelOfferReply.deserializeBinary);
        if (!options)
            options = {};
        if (!credentials)
            credentials = {};
        options['format'] = 'text';
        this.client_ = new grpcWeb.GrpcWebClientBase(options);
        this.hostname_ = hostname;
        this.credentials_ = credentials;
        this.options_ = options;
    }
    getOffer(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.Offers/GetOffer', request, metadata || {}, this.methodDescriptorGetOffer, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.Offers/GetOffer', request, metadata || {}, this.methodDescriptorGetOffer);
    }
    getMyOffer(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.Offers/GetMyOffer', request, metadata || {}, this.methodDescriptorGetMyOffer, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.Offers/GetMyOffer', request, metadata || {}, this.methodDescriptorGetMyOffer);
    }
    getOffers(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.Offers/GetOffers', request, metadata || {}, this.methodDescriptorGetOffers, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.Offers/GetOffers', request, metadata || {}, this.methodDescriptorGetOffers);
    }
    getMyOffers(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.Offers/GetMyOffers', request, metadata || {}, this.methodDescriptorGetMyOffers, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.Offers/GetMyOffers', request, metadata || {}, this.methodDescriptorGetMyOffers);
    }
    createOffer(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.Offers/CreateOffer', request, metadata || {}, this.methodDescriptorCreateOffer, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.Offers/CreateOffer', request, metadata || {}, this.methodDescriptorCreateOffer);
    }
    cancelOffer(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.Offers/CancelOffer', request, metadata || {}, this.methodDescriptorCancelOffer, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.Offers/CancelOffer', request, metadata || {}, this.methodDescriptorCancelOffer);
    }
}
exports.OffersClient = OffersClient;
class PaymentAccountsClient {
    constructor(hostname, credentials, options) {
        this.methodDescriptorCreatePaymentAccount = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.PaymentAccounts/CreatePaymentAccount', grpcWeb.MethodType.UNARY, grpc_pb.CreatePaymentAccountRequest, grpc_pb.CreatePaymentAccountReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.CreatePaymentAccountReply.deserializeBinary);
        this.methodDescriptorGetPaymentAccounts = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.PaymentAccounts/GetPaymentAccounts', grpcWeb.MethodType.UNARY, grpc_pb.GetPaymentAccountsRequest, grpc_pb.GetPaymentAccountsReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.GetPaymentAccountsReply.deserializeBinary);
        this.methodDescriptorGetPaymentMethods = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.PaymentAccounts/GetPaymentMethods', grpcWeb.MethodType.UNARY, grpc_pb.GetPaymentMethodsRequest, grpc_pb.GetPaymentMethodsReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.GetPaymentMethodsReply.deserializeBinary);
        this.methodDescriptorGetPaymentAccountForm = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.PaymentAccounts/GetPaymentAccountForm', grpcWeb.MethodType.UNARY, grpc_pb.GetPaymentAccountFormRequest, grpc_pb.GetPaymentAccountFormReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.GetPaymentAccountFormReply.deserializeBinary);
        this.methodDescriptorGetPaymentAccountFormAsJson = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.PaymentAccounts/GetPaymentAccountFormAsJson', grpcWeb.MethodType.UNARY, grpc_pb.GetPaymentAccountFormAsJsonRequest, grpc_pb.GetPaymentAccountFormAsJsonReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.GetPaymentAccountFormAsJsonReply.deserializeBinary);
        this.methodDescriptorCreateCryptoCurrencyPaymentAccount = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.PaymentAccounts/CreateCryptoCurrencyPaymentAccount', grpcWeb.MethodType.UNARY, grpc_pb.CreateCryptoCurrencyPaymentAccountRequest, grpc_pb.CreateCryptoCurrencyPaymentAccountReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.CreateCryptoCurrencyPaymentAccountReply.deserializeBinary);
        this.methodDescriptorGetCryptoCurrencyPaymentMethods = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.PaymentAccounts/GetCryptoCurrencyPaymentMethods', grpcWeb.MethodType.UNARY, grpc_pb.GetCryptoCurrencyPaymentMethodsRequest, grpc_pb.GetCryptoCurrencyPaymentMethodsReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.GetCryptoCurrencyPaymentMethodsReply.deserializeBinary);
        this.methodDescriptorValidateFormField = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.PaymentAccounts/ValidateFormField', grpcWeb.MethodType.UNARY, grpc_pb.ValidateFormFieldRequest, grpc_pb.ValidateFormFieldReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.ValidateFormFieldReply.deserializeBinary);
        if (!options)
            options = {};
        if (!credentials)
            credentials = {};
        options['format'] = 'text';
        this.client_ = new grpcWeb.GrpcWebClientBase(options);
        this.hostname_ = hostname;
        this.credentials_ = credentials;
        this.options_ = options;
    }
    createPaymentAccount(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.PaymentAccounts/CreatePaymentAccount', request, metadata || {}, this.methodDescriptorCreatePaymentAccount, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.PaymentAccounts/CreatePaymentAccount', request, metadata || {}, this.methodDescriptorCreatePaymentAccount);
    }
    getPaymentAccounts(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.PaymentAccounts/GetPaymentAccounts', request, metadata || {}, this.methodDescriptorGetPaymentAccounts, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.PaymentAccounts/GetPaymentAccounts', request, metadata || {}, this.methodDescriptorGetPaymentAccounts);
    }
    getPaymentMethods(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.PaymentAccounts/GetPaymentMethods', request, metadata || {}, this.methodDescriptorGetPaymentMethods, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.PaymentAccounts/GetPaymentMethods', request, metadata || {}, this.methodDescriptorGetPaymentMethods);
    }
    getPaymentAccountForm(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.PaymentAccounts/GetPaymentAccountForm', request, metadata || {}, this.methodDescriptorGetPaymentAccountForm, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.PaymentAccounts/GetPaymentAccountForm', request, metadata || {}, this.methodDescriptorGetPaymentAccountForm);
    }
    getPaymentAccountFormAsJson(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.PaymentAccounts/GetPaymentAccountFormAsJson', request, metadata || {}, this.methodDescriptorGetPaymentAccountFormAsJson, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.PaymentAccounts/GetPaymentAccountFormAsJson', request, metadata || {}, this.methodDescriptorGetPaymentAccountFormAsJson);
    }
    createCryptoCurrencyPaymentAccount(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.PaymentAccounts/CreateCryptoCurrencyPaymentAccount', request, metadata || {}, this.methodDescriptorCreateCryptoCurrencyPaymentAccount, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.PaymentAccounts/CreateCryptoCurrencyPaymentAccount', request, metadata || {}, this.methodDescriptorCreateCryptoCurrencyPaymentAccount);
    }
    getCryptoCurrencyPaymentMethods(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.PaymentAccounts/GetCryptoCurrencyPaymentMethods', request, metadata || {}, this.methodDescriptorGetCryptoCurrencyPaymentMethods, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.PaymentAccounts/GetCryptoCurrencyPaymentMethods', request, metadata || {}, this.methodDescriptorGetCryptoCurrencyPaymentMethods);
    }
    validateFormField(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.PaymentAccounts/ValidateFormField', request, metadata || {}, this.methodDescriptorValidateFormField, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.PaymentAccounts/ValidateFormField', request, metadata || {}, this.methodDescriptorValidateFormField);
    }
}
exports.PaymentAccountsClient = PaymentAccountsClient;
class PriceClient {
    constructor(hostname, credentials, options) {
        this.methodDescriptorGetMarketPrice = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.Price/GetMarketPrice', grpcWeb.MethodType.UNARY, grpc_pb.MarketPriceRequest, grpc_pb.MarketPriceReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.MarketPriceReply.deserializeBinary);
        this.methodDescriptorGetMarketPrices = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.Price/GetMarketPrices', grpcWeb.MethodType.UNARY, grpc_pb.MarketPricesRequest, grpc_pb.MarketPricesReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.MarketPricesReply.deserializeBinary);
        this.methodDescriptorGetMarketDepth = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.Price/GetMarketDepth', grpcWeb.MethodType.UNARY, grpc_pb.MarketDepthRequest, grpc_pb.MarketDepthReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.MarketDepthReply.deserializeBinary);
        if (!options)
            options = {};
        if (!credentials)
            credentials = {};
        options['format'] = 'text';
        this.client_ = new grpcWeb.GrpcWebClientBase(options);
        this.hostname_ = hostname;
        this.credentials_ = credentials;
        this.options_ = options;
    }
    getMarketPrice(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.Price/GetMarketPrice', request, metadata || {}, this.methodDescriptorGetMarketPrice, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.Price/GetMarketPrice', request, metadata || {}, this.methodDescriptorGetMarketPrice);
    }
    getMarketPrices(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.Price/GetMarketPrices', request, metadata || {}, this.methodDescriptorGetMarketPrices, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.Price/GetMarketPrices', request, metadata || {}, this.methodDescriptorGetMarketPrices);
    }
    getMarketDepth(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.Price/GetMarketDepth', request, metadata || {}, this.methodDescriptorGetMarketDepth, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.Price/GetMarketDepth', request, metadata || {}, this.methodDescriptorGetMarketDepth);
    }
}
exports.PriceClient = PriceClient;
class GetTradeStatisticsClient {
    constructor(hostname, credentials, options) {
        this.methodDescriptorGetTradeStatistics = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.GetTradeStatistics/GetTradeStatistics', grpcWeb.MethodType.UNARY, grpc_pb.GetTradeStatisticsRequest, grpc_pb.GetTradeStatisticsReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.GetTradeStatisticsReply.deserializeBinary);
        if (!options)
            options = {};
        if (!credentials)
            credentials = {};
        options['format'] = 'text';
        this.client_ = new grpcWeb.GrpcWebClientBase(options);
        this.hostname_ = hostname;
        this.credentials_ = credentials;
        this.options_ = options;
    }
    getTradeStatistics(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.GetTradeStatistics/GetTradeStatistics', request, metadata || {}, this.methodDescriptorGetTradeStatistics, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.GetTradeStatistics/GetTradeStatistics', request, metadata || {}, this.methodDescriptorGetTradeStatistics);
    }
}
exports.GetTradeStatisticsClient = GetTradeStatisticsClient;
class ShutdownServerClient {
    constructor(hostname, credentials, options) {
        this.methodDescriptorStop = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.ShutdownServer/Stop', grpcWeb.MethodType.UNARY, grpc_pb.StopRequest, grpc_pb.StopReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.StopReply.deserializeBinary);
        if (!options)
            options = {};
        if (!credentials)
            credentials = {};
        options['format'] = 'text';
        this.client_ = new grpcWeb.GrpcWebClientBase(options);
        this.hostname_ = hostname;
        this.credentials_ = credentials;
        this.options_ = options;
    }
    stop(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.ShutdownServer/Stop', request, metadata || {}, this.methodDescriptorStop, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.ShutdownServer/Stop', request, metadata || {}, this.methodDescriptorStop);
    }
}
exports.ShutdownServerClient = ShutdownServerClient;
class TradesClient {
    constructor(hostname, credentials, options) {
        this.methodDescriptorGetTrade = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.Trades/GetTrade', grpcWeb.MethodType.UNARY, grpc_pb.GetTradeRequest, grpc_pb.GetTradeReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.GetTradeReply.deserializeBinary);
        this.methodDescriptorGetTrades = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.Trades/GetTrades', grpcWeb.MethodType.UNARY, grpc_pb.GetTradesRequest, grpc_pb.GetTradesReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.GetTradesReply.deserializeBinary);
        this.methodDescriptorTakeOffer = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.Trades/TakeOffer', grpcWeb.MethodType.UNARY, grpc_pb.TakeOfferRequest, grpc_pb.TakeOfferReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.TakeOfferReply.deserializeBinary);
        this.methodDescriptorConfirmPaymentStarted = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.Trades/ConfirmPaymentStarted', grpcWeb.MethodType.UNARY, grpc_pb.ConfirmPaymentStartedRequest, grpc_pb.ConfirmPaymentStartedReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.ConfirmPaymentStartedReply.deserializeBinary);
        this.methodDescriptorConfirmPaymentReceived = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.Trades/ConfirmPaymentReceived', grpcWeb.MethodType.UNARY, grpc_pb.ConfirmPaymentReceivedRequest, grpc_pb.ConfirmPaymentReceivedReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.ConfirmPaymentReceivedReply.deserializeBinary);
        this.methodDescriptorKeepFunds = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.Trades/KeepFunds', grpcWeb.MethodType.UNARY, grpc_pb.KeepFundsRequest, grpc_pb.KeepFundsReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.KeepFundsReply.deserializeBinary);
        this.methodDescriptorWithdrawFunds = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.Trades/WithdrawFunds', grpcWeb.MethodType.UNARY, grpc_pb.WithdrawFundsRequest, grpc_pb.WithdrawFundsReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.WithdrawFundsReply.deserializeBinary);
        this.methodDescriptorGetChatMessages = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.Trades/GetChatMessages', grpcWeb.MethodType.UNARY, grpc_pb.GetChatMessagesRequest, grpc_pb.GetChatMessagesReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.GetChatMessagesReply.deserializeBinary);
        this.methodDescriptorSendChatMessage = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.Trades/SendChatMessage', grpcWeb.MethodType.UNARY, grpc_pb.SendChatMessageRequest, grpc_pb.SendChatMessageReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.SendChatMessageReply.deserializeBinary);
        if (!options)
            options = {};
        if (!credentials)
            credentials = {};
        options['format'] = 'text';
        this.client_ = new grpcWeb.GrpcWebClientBase(options);
        this.hostname_ = hostname;
        this.credentials_ = credentials;
        this.options_ = options;
    }
    getTrade(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.Trades/GetTrade', request, metadata || {}, this.methodDescriptorGetTrade, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.Trades/GetTrade', request, metadata || {}, this.methodDescriptorGetTrade);
    }
    getTrades(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.Trades/GetTrades', request, metadata || {}, this.methodDescriptorGetTrades, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.Trades/GetTrades', request, metadata || {}, this.methodDescriptorGetTrades);
    }
    takeOffer(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.Trades/TakeOffer', request, metadata || {}, this.methodDescriptorTakeOffer, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.Trades/TakeOffer', request, metadata || {}, this.methodDescriptorTakeOffer);
    }
    confirmPaymentStarted(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.Trades/ConfirmPaymentStarted', request, metadata || {}, this.methodDescriptorConfirmPaymentStarted, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.Trades/ConfirmPaymentStarted', request, metadata || {}, this.methodDescriptorConfirmPaymentStarted);
    }
    confirmPaymentReceived(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.Trades/ConfirmPaymentReceived', request, metadata || {}, this.methodDescriptorConfirmPaymentReceived, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.Trades/ConfirmPaymentReceived', request, metadata || {}, this.methodDescriptorConfirmPaymentReceived);
    }
    keepFunds(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.Trades/KeepFunds', request, metadata || {}, this.methodDescriptorKeepFunds, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.Trades/KeepFunds', request, metadata || {}, this.methodDescriptorKeepFunds);
    }
    withdrawFunds(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.Trades/WithdrawFunds', request, metadata || {}, this.methodDescriptorWithdrawFunds, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.Trades/WithdrawFunds', request, metadata || {}, this.methodDescriptorWithdrawFunds);
    }
    getChatMessages(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.Trades/GetChatMessages', request, metadata || {}, this.methodDescriptorGetChatMessages, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.Trades/GetChatMessages', request, metadata || {}, this.methodDescriptorGetChatMessages);
    }
    sendChatMessage(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.Trades/SendChatMessage', request, metadata || {}, this.methodDescriptorSendChatMessage, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.Trades/SendChatMessage', request, metadata || {}, this.methodDescriptorSendChatMessage);
    }
}
exports.TradesClient = TradesClient;
class WalletsClient {
    constructor(hostname, credentials, options) {
        this.methodDescriptorGetBalances = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.Wallets/GetBalances', grpcWeb.MethodType.UNARY, grpc_pb.GetBalancesRequest, grpc_pb.GetBalancesReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.GetBalancesReply.deserializeBinary);
        this.methodDescriptorGetXmrSeed = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.Wallets/GetXmrSeed', grpcWeb.MethodType.UNARY, grpc_pb.GetXmrSeedRequest, grpc_pb.GetXmrSeedReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.GetXmrSeedReply.deserializeBinary);
        this.methodDescriptorGetXmrPrimaryAddress = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.Wallets/GetXmrPrimaryAddress', grpcWeb.MethodType.UNARY, grpc_pb.GetXmrPrimaryAddressRequest, grpc_pb.GetXmrPrimaryAddressReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.GetXmrPrimaryAddressReply.deserializeBinary);
        this.methodDescriptorGetXmrNewSubaddress = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.Wallets/GetXmrNewSubaddress', grpcWeb.MethodType.UNARY, grpc_pb.GetXmrNewSubaddressRequest, grpc_pb.GetXmrNewSubaddressReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.GetXmrNewSubaddressReply.deserializeBinary);
        this.methodDescriptorGetXmrTxs = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.Wallets/GetXmrTxs', grpcWeb.MethodType.UNARY, grpc_pb.GetXmrTxsRequest, grpc_pb.GetXmrTxsReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.GetXmrTxsReply.deserializeBinary);
        this.methodDescriptorCreateXmrTx = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.Wallets/CreateXmrTx', grpcWeb.MethodType.UNARY, grpc_pb.CreateXmrTxRequest, grpc_pb.CreateXmrTxReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.CreateXmrTxReply.deserializeBinary);
        this.methodDescriptorrelayXmrTx = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.Wallets/relayXmrTx', grpcWeb.MethodType.UNARY, grpc_pb.RelayXmrTxRequest, grpc_pb.RelayXmrTxReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.RelayXmrTxReply.deserializeBinary);
        this.methodDescriptorGetAddressBalance = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.Wallets/GetAddressBalance', grpcWeb.MethodType.UNARY, grpc_pb.GetAddressBalanceRequest, grpc_pb.GetAddressBalanceReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.GetAddressBalanceReply.deserializeBinary);
        this.methodDescriptorSendBtc = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.Wallets/SendBtc', grpcWeb.MethodType.UNARY, grpc_pb.SendBtcRequest, grpc_pb.SendBtcReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.SendBtcReply.deserializeBinary);
        this.methodDescriptorGetTxFeeRate = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.Wallets/GetTxFeeRate', grpcWeb.MethodType.UNARY, grpc_pb.GetTxFeeRateRequest, grpc_pb.GetTxFeeRateReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.GetTxFeeRateReply.deserializeBinary);
        this.methodDescriptorSetTxFeeRatePreference = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.Wallets/SetTxFeeRatePreference', grpcWeb.MethodType.UNARY, grpc_pb.SetTxFeeRatePreferenceRequest, grpc_pb.SetTxFeeRatePreferenceReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.SetTxFeeRatePreferenceReply.deserializeBinary);
        this.methodDescriptorUnsetTxFeeRatePreference = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.Wallets/UnsetTxFeeRatePreference', grpcWeb.MethodType.UNARY, grpc_pb.UnsetTxFeeRatePreferenceRequest, grpc_pb.UnsetTxFeeRatePreferenceReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.UnsetTxFeeRatePreferenceReply.deserializeBinary);
        this.methodDescriptorGetTransaction = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.Wallets/GetTransaction', grpcWeb.MethodType.UNARY, grpc_pb.GetTransactionRequest, grpc_pb.GetTransactionReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.GetTransactionReply.deserializeBinary);
        this.methodDescriptorGetFundingAddresses = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.Wallets/GetFundingAddresses', grpcWeb.MethodType.UNARY, grpc_pb.GetFundingAddressesRequest, grpc_pb.GetFundingAddressesReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.GetFundingAddressesReply.deserializeBinary);
        this.methodDescriptorSetWalletPassword = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.Wallets/SetWalletPassword', grpcWeb.MethodType.UNARY, grpc_pb.SetWalletPasswordRequest, grpc_pb.SetWalletPasswordReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.SetWalletPasswordReply.deserializeBinary);
        this.methodDescriptorRemoveWalletPassword = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.Wallets/RemoveWalletPassword', grpcWeb.MethodType.UNARY, grpc_pb.RemoveWalletPasswordRequest, grpc_pb.RemoveWalletPasswordReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.RemoveWalletPasswordReply.deserializeBinary);
        this.methodDescriptorLockWallet = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.Wallets/LockWallet', grpcWeb.MethodType.UNARY, grpc_pb.LockWalletRequest, grpc_pb.LockWalletReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.LockWalletReply.deserializeBinary);
        this.methodDescriptorUnlockWallet = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.Wallets/UnlockWallet', grpcWeb.MethodType.UNARY, grpc_pb.UnlockWalletRequest, grpc_pb.UnlockWalletReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.UnlockWalletReply.deserializeBinary);
        if (!options)
            options = {};
        if (!credentials)
            credentials = {};
        options['format'] = 'text';
        this.client_ = new grpcWeb.GrpcWebClientBase(options);
        this.hostname_ = hostname;
        this.credentials_ = credentials;
        this.options_ = options;
    }
    getBalances(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.Wallets/GetBalances', request, metadata || {}, this.methodDescriptorGetBalances, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.Wallets/GetBalances', request, metadata || {}, this.methodDescriptorGetBalances);
    }
    getXmrSeed(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.Wallets/GetXmrSeed', request, metadata || {}, this.methodDescriptorGetXmrSeed, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.Wallets/GetXmrSeed', request, metadata || {}, this.methodDescriptorGetXmrSeed);
    }
    getXmrPrimaryAddress(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.Wallets/GetXmrPrimaryAddress', request, metadata || {}, this.methodDescriptorGetXmrPrimaryAddress, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.Wallets/GetXmrPrimaryAddress', request, metadata || {}, this.methodDescriptorGetXmrPrimaryAddress);
    }
    getXmrNewSubaddress(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.Wallets/GetXmrNewSubaddress', request, metadata || {}, this.methodDescriptorGetXmrNewSubaddress, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.Wallets/GetXmrNewSubaddress', request, metadata || {}, this.methodDescriptorGetXmrNewSubaddress);
    }
    getXmrTxs(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.Wallets/GetXmrTxs', request, metadata || {}, this.methodDescriptorGetXmrTxs, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.Wallets/GetXmrTxs', request, metadata || {}, this.methodDescriptorGetXmrTxs);
    }
    createXmrTx(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.Wallets/CreateXmrTx', request, metadata || {}, this.methodDescriptorCreateXmrTx, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.Wallets/CreateXmrTx', request, metadata || {}, this.methodDescriptorCreateXmrTx);
    }
    relayXmrTx(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.Wallets/relayXmrTx', request, metadata || {}, this.methodDescriptorrelayXmrTx, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.Wallets/relayXmrTx', request, metadata || {}, this.methodDescriptorrelayXmrTx);
    }
    getAddressBalance(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.Wallets/GetAddressBalance', request, metadata || {}, this.methodDescriptorGetAddressBalance, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.Wallets/GetAddressBalance', request, metadata || {}, this.methodDescriptorGetAddressBalance);
    }
    sendBtc(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.Wallets/SendBtc', request, metadata || {}, this.methodDescriptorSendBtc, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.Wallets/SendBtc', request, metadata || {}, this.methodDescriptorSendBtc);
    }
    getTxFeeRate(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.Wallets/GetTxFeeRate', request, metadata || {}, this.methodDescriptorGetTxFeeRate, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.Wallets/GetTxFeeRate', request, metadata || {}, this.methodDescriptorGetTxFeeRate);
    }
    setTxFeeRatePreference(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.Wallets/SetTxFeeRatePreference', request, metadata || {}, this.methodDescriptorSetTxFeeRatePreference, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.Wallets/SetTxFeeRatePreference', request, metadata || {}, this.methodDescriptorSetTxFeeRatePreference);
    }
    unsetTxFeeRatePreference(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.Wallets/UnsetTxFeeRatePreference', request, metadata || {}, this.methodDescriptorUnsetTxFeeRatePreference, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.Wallets/UnsetTxFeeRatePreference', request, metadata || {}, this.methodDescriptorUnsetTxFeeRatePreference);
    }
    getTransaction(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.Wallets/GetTransaction', request, metadata || {}, this.methodDescriptorGetTransaction, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.Wallets/GetTransaction', request, metadata || {}, this.methodDescriptorGetTransaction);
    }
    getFundingAddresses(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.Wallets/GetFundingAddresses', request, metadata || {}, this.methodDescriptorGetFundingAddresses, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.Wallets/GetFundingAddresses', request, metadata || {}, this.methodDescriptorGetFundingAddresses);
    }
    setWalletPassword(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.Wallets/SetWalletPassword', request, metadata || {}, this.methodDescriptorSetWalletPassword, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.Wallets/SetWalletPassword', request, metadata || {}, this.methodDescriptorSetWalletPassword);
    }
    removeWalletPassword(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.Wallets/RemoveWalletPassword', request, metadata || {}, this.methodDescriptorRemoveWalletPassword, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.Wallets/RemoveWalletPassword', request, metadata || {}, this.methodDescriptorRemoveWalletPassword);
    }
    lockWallet(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.Wallets/LockWallet', request, metadata || {}, this.methodDescriptorLockWallet, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.Wallets/LockWallet', request, metadata || {}, this.methodDescriptorLockWallet);
    }
    unlockWallet(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.Wallets/UnlockWallet', request, metadata || {}, this.methodDescriptorUnlockWallet, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.Wallets/UnlockWallet', request, metadata || {}, this.methodDescriptorUnlockWallet);
    }
}
exports.WalletsClient = WalletsClient;
//# sourceMappingURL=GrpcServiceClientPb.js.map