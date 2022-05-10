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
export class HelpClient {
    constructor(hostname, credentials, options) {
        this.methodInfoGetMethodHelp = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.Help/GetMethodHelp', grpcWeb.MethodType.UNARY, grpc_pb.GetMethodHelpRequest, grpc_pb.GetMethodHelpReply, (request) => {
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
                '/io.bisq.protobuffer.Help/GetMethodHelp', request, metadata || {}, this.methodInfoGetMethodHelp, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.Help/GetMethodHelp', request, metadata || {}, this.methodInfoGetMethodHelp);
    }
}
export class GetVersionClient {
    constructor(hostname, credentials, options) {
        this.methodInfoGetVersion = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.GetVersion/GetVersion', grpcWeb.MethodType.UNARY, grpc_pb.GetVersionRequest, grpc_pb.GetVersionReply, (request) => {
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
                '/io.bisq.protobuffer.GetVersion/GetVersion', request, metadata || {}, this.methodInfoGetVersion, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.GetVersion/GetVersion', request, metadata || {}, this.methodInfoGetVersion);
    }
}
export class AccountClient {
    constructor(hostname, credentials, options) {
        this.methodInfoAccountExists = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.Account/AccountExists', grpcWeb.MethodType.UNARY, grpc_pb.AccountExistsRequest, grpc_pb.AccountExistsReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.AccountExistsReply.deserializeBinary);
        this.methodInfoIsAccountOpen = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.Account/IsAccountOpen', grpcWeb.MethodType.UNARY, grpc_pb.IsAccountOpenRequest, grpc_pb.IsAccountOpenReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.IsAccountOpenReply.deserializeBinary);
        this.methodInfoCreateAccount = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.Account/CreateAccount', grpcWeb.MethodType.UNARY, grpc_pb.CreateAccountRequest, grpc_pb.CreateAccountReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.CreateAccountReply.deserializeBinary);
        this.methodInfoOpenAccount = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.Account/OpenAccount', grpcWeb.MethodType.UNARY, grpc_pb.OpenAccountRequest, grpc_pb.OpenAccountReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.OpenAccountReply.deserializeBinary);
        this.methodInfoIsAppInitialized = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.Account/IsAppInitialized', grpcWeb.MethodType.UNARY, grpc_pb.IsAppInitializedRequest, grpc_pb.IsAppInitializedReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.IsAppInitializedReply.deserializeBinary);
        this.methodInfoChangePassword = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.Account/ChangePassword', grpcWeb.MethodType.UNARY, grpc_pb.ChangePasswordRequest, grpc_pb.ChangePasswordReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.ChangePasswordReply.deserializeBinary);
        this.methodInfoCloseAccount = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.Account/CloseAccount', grpcWeb.MethodType.UNARY, grpc_pb.CloseAccountRequest, grpc_pb.CloseAccountReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.CloseAccountReply.deserializeBinary);
        this.methodInfoDeleteAccount = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.Account/DeleteAccount', grpcWeb.MethodType.UNARY, grpc_pb.DeleteAccountRequest, grpc_pb.DeleteAccountReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.DeleteAccountReply.deserializeBinary);
        this.methodInfoBackupAccount = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.Account/BackupAccount', grpcWeb.MethodType.SERVER_STREAMING, grpc_pb.BackupAccountRequest, grpc_pb.BackupAccountReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.BackupAccountReply.deserializeBinary);
        this.methodInfoRestoreAccount = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.Account/RestoreAccount', grpcWeb.MethodType.UNARY, grpc_pb.RestoreAccountRequest, grpc_pb.RestoreAccountReply, (request) => {
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
                '/io.bisq.protobuffer.Account/AccountExists', request, metadata || {}, this.methodInfoAccountExists, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.Account/AccountExists', request, metadata || {}, this.methodInfoAccountExists);
    }
    isAccountOpen(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.Account/IsAccountOpen', request, metadata || {}, this.methodInfoIsAccountOpen, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.Account/IsAccountOpen', request, metadata || {}, this.methodInfoIsAccountOpen);
    }
    createAccount(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.Account/CreateAccount', request, metadata || {}, this.methodInfoCreateAccount, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.Account/CreateAccount', request, metadata || {}, this.methodInfoCreateAccount);
    }
    openAccount(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.Account/OpenAccount', request, metadata || {}, this.methodInfoOpenAccount, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.Account/OpenAccount', request, metadata || {}, this.methodInfoOpenAccount);
    }
    isAppInitialized(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.Account/IsAppInitialized', request, metadata || {}, this.methodInfoIsAppInitialized, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.Account/IsAppInitialized', request, metadata || {}, this.methodInfoIsAppInitialized);
    }
    changePassword(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.Account/ChangePassword', request, metadata || {}, this.methodInfoChangePassword, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.Account/ChangePassword', request, metadata || {}, this.methodInfoChangePassword);
    }
    closeAccount(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.Account/CloseAccount', request, metadata || {}, this.methodInfoCloseAccount, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.Account/CloseAccount', request, metadata || {}, this.methodInfoCloseAccount);
    }
    deleteAccount(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.Account/DeleteAccount', request, metadata || {}, this.methodInfoDeleteAccount, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.Account/DeleteAccount', request, metadata || {}, this.methodInfoDeleteAccount);
    }
    backupAccount(request, metadata) {
        return this.client_.serverStreaming(this.hostname_ +
            '/io.bisq.protobuffer.Account/BackupAccount', request, metadata || {}, this.methodInfoBackupAccount);
    }
    restoreAccount(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.Account/RestoreAccount', request, metadata || {}, this.methodInfoRestoreAccount, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.Account/RestoreAccount', request, metadata || {}, this.methodInfoRestoreAccount);
    }
}
export class DisputesClient {
    constructor(hostname, credentials, options) {
        this.methodInfoGetDispute = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.Disputes/GetDispute', grpcWeb.MethodType.UNARY, grpc_pb.GetDisputeRequest, grpc_pb.GetDisputeReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.GetDisputeReply.deserializeBinary);
        this.methodInfoGetDisputes = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.Disputes/GetDisputes', grpcWeb.MethodType.UNARY, grpc_pb.GetDisputesRequest, grpc_pb.GetDisputesReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.GetDisputesReply.deserializeBinary);
        this.methodInfoOpenDispute = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.Disputes/OpenDispute', grpcWeb.MethodType.UNARY, grpc_pb.OpenDisputeRequest, grpc_pb.OpenDisputeReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.OpenDisputeReply.deserializeBinary);
        this.methodInfoResolveDispute = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.Disputes/ResolveDispute', grpcWeb.MethodType.UNARY, grpc_pb.ResolveDisputeRequest, grpc_pb.ResolveDisputeReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.ResolveDisputeReply.deserializeBinary);
        this.methodInfoSendDisputeChatMessage = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.Disputes/SendDisputeChatMessage', grpcWeb.MethodType.UNARY, grpc_pb.SendDisputeChatMessageRequest, grpc_pb.SendDisputeChatMessageReply, (request) => {
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
                '/io.bisq.protobuffer.Disputes/GetDispute', request, metadata || {}, this.methodInfoGetDispute, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.Disputes/GetDispute', request, metadata || {}, this.methodInfoGetDispute);
    }
    getDisputes(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.Disputes/GetDisputes', request, metadata || {}, this.methodInfoGetDisputes, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.Disputes/GetDisputes', request, metadata || {}, this.methodInfoGetDisputes);
    }
    openDispute(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.Disputes/OpenDispute', request, metadata || {}, this.methodInfoOpenDispute, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.Disputes/OpenDispute', request, metadata || {}, this.methodInfoOpenDispute);
    }
    resolveDispute(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.Disputes/ResolveDispute', request, metadata || {}, this.methodInfoResolveDispute, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.Disputes/ResolveDispute', request, metadata || {}, this.methodInfoResolveDispute);
    }
    sendDisputeChatMessage(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.Disputes/SendDisputeChatMessage', request, metadata || {}, this.methodInfoSendDisputeChatMessage, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.Disputes/SendDisputeChatMessage', request, metadata || {}, this.methodInfoSendDisputeChatMessage);
    }
}
export class DisputeAgentsClient {
    constructor(hostname, credentials, options) {
        this.methodInfoRegisterDisputeAgent = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.DisputeAgents/RegisterDisputeAgent', grpcWeb.MethodType.UNARY, grpc_pb.RegisterDisputeAgentRequest, grpc_pb.RegisterDisputeAgentReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.RegisterDisputeAgentReply.deserializeBinary);
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
                '/io.bisq.protobuffer.DisputeAgents/RegisterDisputeAgent', request, metadata || {}, this.methodInfoRegisterDisputeAgent, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.DisputeAgents/RegisterDisputeAgent', request, metadata || {}, this.methodInfoRegisterDisputeAgent);
    }
}
export class NotificationsClient {
    constructor(hostname, credentials, options) {
        this.methodInfoRegisterNotificationListener = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.Notifications/RegisterNotificationListener', grpcWeb.MethodType.SERVER_STREAMING, grpc_pb.RegisterNotificationListenerRequest, grpc_pb.NotificationMessage, (request) => {
            return request.serializeBinary();
        }, grpc_pb.NotificationMessage.deserializeBinary);
        this.methodInfoSendNotification = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.Notifications/SendNotification', grpcWeb.MethodType.UNARY, grpc_pb.SendNotificationRequest, grpc_pb.SendNotificationReply, (request) => {
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
            '/io.bisq.protobuffer.Notifications/RegisterNotificationListener', request, metadata || {}, this.methodInfoRegisterNotificationListener);
    }
    sendNotification(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.Notifications/SendNotification', request, metadata || {}, this.methodInfoSendNotification, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.Notifications/SendNotification', request, metadata || {}, this.methodInfoSendNotification);
    }
}
export class MoneroConnectionsClient {
    constructor(hostname, credentials, options) {
        this.methodInfoAddConnection = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.MoneroConnections/AddConnection', grpcWeb.MethodType.UNARY, grpc_pb.AddConnectionRequest, grpc_pb.AddConnectionReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.AddConnectionReply.deserializeBinary);
        this.methodInfoRemoveConnection = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.MoneroConnections/RemoveConnection', grpcWeb.MethodType.UNARY, grpc_pb.RemoveConnectionRequest, grpc_pb.RemoveConnectionReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.RemoveConnectionReply.deserializeBinary);
        this.methodInfoGetConnection = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.MoneroConnections/GetConnection', grpcWeb.MethodType.UNARY, grpc_pb.GetConnectionRequest, grpc_pb.GetConnectionReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.GetConnectionReply.deserializeBinary);
        this.methodInfoGetConnections = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.MoneroConnections/GetConnections', grpcWeb.MethodType.UNARY, grpc_pb.GetConnectionsRequest, grpc_pb.GetConnectionsReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.GetConnectionsReply.deserializeBinary);
        this.methodInfoSetConnection = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.MoneroConnections/SetConnection', grpcWeb.MethodType.UNARY, grpc_pb.SetConnectionRequest, grpc_pb.SetConnectionReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.SetConnectionReply.deserializeBinary);
        this.methodInfoCheckConnection = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.MoneroConnections/CheckConnection', grpcWeb.MethodType.UNARY, grpc_pb.CheckConnectionRequest, grpc_pb.CheckConnectionReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.CheckConnectionReply.deserializeBinary);
        this.methodInfoCheckConnections = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.MoneroConnections/CheckConnections', grpcWeb.MethodType.UNARY, grpc_pb.CheckConnectionsRequest, grpc_pb.CheckConnectionsReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.CheckConnectionsReply.deserializeBinary);
        this.methodInfoStartCheckingConnections = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.MoneroConnections/StartCheckingConnections', grpcWeb.MethodType.UNARY, grpc_pb.StartCheckingConnectionsRequest, grpc_pb.StartCheckingConnectionsReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.StartCheckingConnectionsReply.deserializeBinary);
        this.methodInfoStopCheckingConnections = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.MoneroConnections/StopCheckingConnections', grpcWeb.MethodType.UNARY, grpc_pb.StopCheckingConnectionsRequest, grpc_pb.StopCheckingConnectionsReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.StopCheckingConnectionsReply.deserializeBinary);
        this.methodInfoGetBestAvailableConnection = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.MoneroConnections/GetBestAvailableConnection', grpcWeb.MethodType.UNARY, grpc_pb.GetBestAvailableConnectionRequest, grpc_pb.GetBestAvailableConnectionReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.GetBestAvailableConnectionReply.deserializeBinary);
        this.methodInfoSetAutoSwitch = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.MoneroConnections/SetAutoSwitch', grpcWeb.MethodType.UNARY, grpc_pb.SetAutoSwitchRequest, grpc_pb.SetAutoSwitchReply, (request) => {
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
                '/io.bisq.protobuffer.MoneroConnections/AddConnection', request, metadata || {}, this.methodInfoAddConnection, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.MoneroConnections/AddConnection', request, metadata || {}, this.methodInfoAddConnection);
    }
    removeConnection(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.MoneroConnections/RemoveConnection', request, metadata || {}, this.methodInfoRemoveConnection, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.MoneroConnections/RemoveConnection', request, metadata || {}, this.methodInfoRemoveConnection);
    }
    getConnection(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.MoneroConnections/GetConnection', request, metadata || {}, this.methodInfoGetConnection, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.MoneroConnections/GetConnection', request, metadata || {}, this.methodInfoGetConnection);
    }
    getConnections(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.MoneroConnections/GetConnections', request, metadata || {}, this.methodInfoGetConnections, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.MoneroConnections/GetConnections', request, metadata || {}, this.methodInfoGetConnections);
    }
    setConnection(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.MoneroConnections/SetConnection', request, metadata || {}, this.methodInfoSetConnection, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.MoneroConnections/SetConnection', request, metadata || {}, this.methodInfoSetConnection);
    }
    checkConnection(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.MoneroConnections/CheckConnection', request, metadata || {}, this.methodInfoCheckConnection, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.MoneroConnections/CheckConnection', request, metadata || {}, this.methodInfoCheckConnection);
    }
    checkConnections(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.MoneroConnections/CheckConnections', request, metadata || {}, this.methodInfoCheckConnections, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.MoneroConnections/CheckConnections', request, metadata || {}, this.methodInfoCheckConnections);
    }
    startCheckingConnections(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.MoneroConnections/StartCheckingConnections', request, metadata || {}, this.methodInfoStartCheckingConnections, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.MoneroConnections/StartCheckingConnections', request, metadata || {}, this.methodInfoStartCheckingConnections);
    }
    stopCheckingConnections(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.MoneroConnections/StopCheckingConnections', request, metadata || {}, this.methodInfoStopCheckingConnections, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.MoneroConnections/StopCheckingConnections', request, metadata || {}, this.methodInfoStopCheckingConnections);
    }
    getBestAvailableConnection(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.MoneroConnections/GetBestAvailableConnection', request, metadata || {}, this.methodInfoGetBestAvailableConnection, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.MoneroConnections/GetBestAvailableConnection', request, metadata || {}, this.methodInfoGetBestAvailableConnection);
    }
    setAutoSwitch(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.MoneroConnections/SetAutoSwitch', request, metadata || {}, this.methodInfoSetAutoSwitch, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.MoneroConnections/SetAutoSwitch', request, metadata || {}, this.methodInfoSetAutoSwitch);
    }
}
export class MoneroNodeClient {
    constructor(hostname, credentials, options) {
        this.methodInfoIsMoneroNodeRunning = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.MoneroNode/IsMoneroNodeRunning', grpcWeb.MethodType.UNARY, grpc_pb.IsMoneroNodeRunningRequest, grpc_pb.IsMoneroNodeRunningReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.IsMoneroNodeRunningReply.deserializeBinary);
        this.methodInfoGetMoneroNodeSettings = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.MoneroNode/GetMoneroNodeSettings', grpcWeb.MethodType.UNARY, grpc_pb.GetMoneroNodeSettingsRequest, grpc_pb.GetMoneroNodeSettingsReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.GetMoneroNodeSettingsReply.deserializeBinary);
        this.methodInfoStartMoneroNode = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.MoneroNode/StartMoneroNode', grpcWeb.MethodType.UNARY, grpc_pb.StartMoneroNodeRequest, grpc_pb.StartMoneroNodeReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.StartMoneroNodeReply.deserializeBinary);
        this.methodInfoStopMoneroNode = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.MoneroNode/StopMoneroNode', grpcWeb.MethodType.UNARY, grpc_pb.StopMoneroNodeRequest, grpc_pb.StopMoneroNodeReply, (request) => {
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
    isMoneroNodeRunning(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.MoneroNode/IsMoneroNodeRunning', request, metadata || {}, this.methodInfoIsMoneroNodeRunning, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.MoneroNode/IsMoneroNodeRunning', request, metadata || {}, this.methodInfoIsMoneroNodeRunning);
    }
    getMoneroNodeSettings(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.MoneroNode/GetMoneroNodeSettings', request, metadata || {}, this.methodInfoGetMoneroNodeSettings, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.MoneroNode/GetMoneroNodeSettings', request, metadata || {}, this.methodInfoGetMoneroNodeSettings);
    }
    startMoneroNode(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.MoneroNode/StartMoneroNode', request, metadata || {}, this.methodInfoStartMoneroNode, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.MoneroNode/StartMoneroNode', request, metadata || {}, this.methodInfoStartMoneroNode);
    }
    stopMoneroNode(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.MoneroNode/StopMoneroNode', request, metadata || {}, this.methodInfoStopMoneroNode, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.MoneroNode/StopMoneroNode', request, metadata || {}, this.methodInfoStopMoneroNode);
    }
}
export class OffersClient {
    constructor(hostname, credentials, options) {
        this.methodInfoGetOffer = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.Offers/GetOffer', grpcWeb.MethodType.UNARY, grpc_pb.GetOfferRequest, grpc_pb.GetOfferReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.GetOfferReply.deserializeBinary);
        this.methodInfoGetMyOffer = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.Offers/GetMyOffer', grpcWeb.MethodType.UNARY, grpc_pb.GetMyOfferRequest, grpc_pb.GetMyOfferReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.GetMyOfferReply.deserializeBinary);
        this.methodInfoGetOffers = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.Offers/GetOffers', grpcWeb.MethodType.UNARY, grpc_pb.GetOffersRequest, grpc_pb.GetOffersReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.GetOffersReply.deserializeBinary);
        this.methodInfoGetMyOffers = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.Offers/GetMyOffers', grpcWeb.MethodType.UNARY, grpc_pb.GetMyOffersRequest, grpc_pb.GetMyOffersReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.GetMyOffersReply.deserializeBinary);
        this.methodInfoCreateOffer = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.Offers/CreateOffer', grpcWeb.MethodType.UNARY, grpc_pb.CreateOfferRequest, grpc_pb.CreateOfferReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.CreateOfferReply.deserializeBinary);
        this.methodInfoCancelOffer = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.Offers/CancelOffer', grpcWeb.MethodType.UNARY, grpc_pb.CancelOfferRequest, grpc_pb.CancelOfferReply, (request) => {
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
                '/io.bisq.protobuffer.Offers/GetOffer', request, metadata || {}, this.methodInfoGetOffer, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.Offers/GetOffer', request, metadata || {}, this.methodInfoGetOffer);
    }
    getMyOffer(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.Offers/GetMyOffer', request, metadata || {}, this.methodInfoGetMyOffer, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.Offers/GetMyOffer', request, metadata || {}, this.methodInfoGetMyOffer);
    }
    getOffers(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.Offers/GetOffers', request, metadata || {}, this.methodInfoGetOffers, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.Offers/GetOffers', request, metadata || {}, this.methodInfoGetOffers);
    }
    getMyOffers(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.Offers/GetMyOffers', request, metadata || {}, this.methodInfoGetMyOffers, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.Offers/GetMyOffers', request, metadata || {}, this.methodInfoGetMyOffers);
    }
    createOffer(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.Offers/CreateOffer', request, metadata || {}, this.methodInfoCreateOffer, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.Offers/CreateOffer', request, metadata || {}, this.methodInfoCreateOffer);
    }
    cancelOffer(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.Offers/CancelOffer', request, metadata || {}, this.methodInfoCancelOffer, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.Offers/CancelOffer', request, metadata || {}, this.methodInfoCancelOffer);
    }
}
export class PaymentAccountsClient {
    constructor(hostname, credentials, options) {
        this.methodInfoCreatePaymentAccount = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.PaymentAccounts/CreatePaymentAccount', grpcWeb.MethodType.UNARY, grpc_pb.CreatePaymentAccountRequest, grpc_pb.CreatePaymentAccountReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.CreatePaymentAccountReply.deserializeBinary);
        this.methodInfoGetPaymentAccounts = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.PaymentAccounts/GetPaymentAccounts', grpcWeb.MethodType.UNARY, grpc_pb.GetPaymentAccountsRequest, grpc_pb.GetPaymentAccountsReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.GetPaymentAccountsReply.deserializeBinary);
        this.methodInfoGetPaymentMethods = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.PaymentAccounts/GetPaymentMethods', grpcWeb.MethodType.UNARY, grpc_pb.GetPaymentMethodsRequest, grpc_pb.GetPaymentMethodsReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.GetPaymentMethodsReply.deserializeBinary);
        this.methodInfoGetPaymentAccountForm = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.PaymentAccounts/GetPaymentAccountForm', grpcWeb.MethodType.UNARY, grpc_pb.GetPaymentAccountFormRequest, grpc_pb.GetPaymentAccountFormReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.GetPaymentAccountFormReply.deserializeBinary);
        this.methodInfoCreateCryptoCurrencyPaymentAccount = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.PaymentAccounts/CreateCryptoCurrencyPaymentAccount', grpcWeb.MethodType.UNARY, grpc_pb.CreateCryptoCurrencyPaymentAccountRequest, grpc_pb.CreateCryptoCurrencyPaymentAccountReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.CreateCryptoCurrencyPaymentAccountReply.deserializeBinary);
        this.methodInfoGetCryptoCurrencyPaymentMethods = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.PaymentAccounts/GetCryptoCurrencyPaymentMethods', grpcWeb.MethodType.UNARY, grpc_pb.GetCryptoCurrencyPaymentMethodsRequest, grpc_pb.GetCryptoCurrencyPaymentMethodsReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.GetCryptoCurrencyPaymentMethodsReply.deserializeBinary);
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
                '/io.bisq.protobuffer.PaymentAccounts/CreatePaymentAccount', request, metadata || {}, this.methodInfoCreatePaymentAccount, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.PaymentAccounts/CreatePaymentAccount', request, metadata || {}, this.methodInfoCreatePaymentAccount);
    }
    getPaymentAccounts(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.PaymentAccounts/GetPaymentAccounts', request, metadata || {}, this.methodInfoGetPaymentAccounts, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.PaymentAccounts/GetPaymentAccounts', request, metadata || {}, this.methodInfoGetPaymentAccounts);
    }
    getPaymentMethods(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.PaymentAccounts/GetPaymentMethods', request, metadata || {}, this.methodInfoGetPaymentMethods, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.PaymentAccounts/GetPaymentMethods', request, metadata || {}, this.methodInfoGetPaymentMethods);
    }
    getPaymentAccountForm(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.PaymentAccounts/GetPaymentAccountForm', request, metadata || {}, this.methodInfoGetPaymentAccountForm, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.PaymentAccounts/GetPaymentAccountForm', request, metadata || {}, this.methodInfoGetPaymentAccountForm);
    }
    createCryptoCurrencyPaymentAccount(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.PaymentAccounts/CreateCryptoCurrencyPaymentAccount', request, metadata || {}, this.methodInfoCreateCryptoCurrencyPaymentAccount, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.PaymentAccounts/CreateCryptoCurrencyPaymentAccount', request, metadata || {}, this.methodInfoCreateCryptoCurrencyPaymentAccount);
    }
    getCryptoCurrencyPaymentMethods(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.PaymentAccounts/GetCryptoCurrencyPaymentMethods', request, metadata || {}, this.methodInfoGetCryptoCurrencyPaymentMethods, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.PaymentAccounts/GetCryptoCurrencyPaymentMethods', request, metadata || {}, this.methodInfoGetCryptoCurrencyPaymentMethods);
    }
}
export class PriceClient {
    constructor(hostname, credentials, options) {
        this.methodInfoGetMarketPrice = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.Price/GetMarketPrice', grpcWeb.MethodType.UNARY, grpc_pb.MarketPriceRequest, grpc_pb.MarketPriceReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.MarketPriceReply.deserializeBinary);
        this.methodInfoGetMarketPrices = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.Price/GetMarketPrices', grpcWeb.MethodType.UNARY, grpc_pb.MarketPricesRequest, grpc_pb.MarketPricesReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.MarketPricesReply.deserializeBinary);
        this.methodInfoGetMarketDepth = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.Price/GetMarketDepth', grpcWeb.MethodType.UNARY, grpc_pb.MarketDepthRequest, grpc_pb.MarketDepthReply, (request) => {
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
                '/io.bisq.protobuffer.Price/GetMarketPrice', request, metadata || {}, this.methodInfoGetMarketPrice, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.Price/GetMarketPrice', request, metadata || {}, this.methodInfoGetMarketPrice);
    }
    getMarketPrices(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.Price/GetMarketPrices', request, metadata || {}, this.methodInfoGetMarketPrices, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.Price/GetMarketPrices', request, metadata || {}, this.methodInfoGetMarketPrices);
    }
    getMarketDepth(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.Price/GetMarketDepth', request, metadata || {}, this.methodInfoGetMarketDepth, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.Price/GetMarketDepth', request, metadata || {}, this.methodInfoGetMarketDepth);
    }
}
export class GetTradeStatisticsClient {
    constructor(hostname, credentials, options) {
        this.methodInfoGetTradeStatistics = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.GetTradeStatistics/GetTradeStatistics', grpcWeb.MethodType.UNARY, grpc_pb.GetTradeStatisticsRequest, grpc_pb.GetTradeStatisticsReply, (request) => {
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
                '/io.bisq.protobuffer.GetTradeStatistics/GetTradeStatistics', request, metadata || {}, this.methodInfoGetTradeStatistics, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.GetTradeStatistics/GetTradeStatistics', request, metadata || {}, this.methodInfoGetTradeStatistics);
    }
}
export class ShutdownServerClient {
    constructor(hostname, credentials, options) {
        this.methodInfoStop = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.ShutdownServer/Stop', grpcWeb.MethodType.UNARY, grpc_pb.StopRequest, grpc_pb.StopReply, (request) => {
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
                '/io.bisq.protobuffer.ShutdownServer/Stop', request, metadata || {}, this.methodInfoStop, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.ShutdownServer/Stop', request, metadata || {}, this.methodInfoStop);
    }
}
export class TradesClient {
    constructor(hostname, credentials, options) {
        this.methodInfoGetTrade = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.Trades/GetTrade', grpcWeb.MethodType.UNARY, grpc_pb.GetTradeRequest, grpc_pb.GetTradeReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.GetTradeReply.deserializeBinary);
        this.methodInfoGetTrades = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.Trades/GetTrades', grpcWeb.MethodType.UNARY, grpc_pb.GetTradesRequest, grpc_pb.GetTradesReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.GetTradesReply.deserializeBinary);
        this.methodInfoTakeOffer = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.Trades/TakeOffer', grpcWeb.MethodType.UNARY, grpc_pb.TakeOfferRequest, grpc_pb.TakeOfferReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.TakeOfferReply.deserializeBinary);
        this.methodInfoConfirmPaymentStarted = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.Trades/ConfirmPaymentStarted', grpcWeb.MethodType.UNARY, grpc_pb.ConfirmPaymentStartedRequest, grpc_pb.ConfirmPaymentStartedReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.ConfirmPaymentStartedReply.deserializeBinary);
        this.methodInfoConfirmPaymentReceived = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.Trades/ConfirmPaymentReceived', grpcWeb.MethodType.UNARY, grpc_pb.ConfirmPaymentReceivedRequest, grpc_pb.ConfirmPaymentReceivedReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.ConfirmPaymentReceivedReply.deserializeBinary);
        this.methodInfoKeepFunds = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.Trades/KeepFunds', grpcWeb.MethodType.UNARY, grpc_pb.KeepFundsRequest, grpc_pb.KeepFundsReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.KeepFundsReply.deserializeBinary);
        this.methodInfoWithdrawFunds = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.Trades/WithdrawFunds', grpcWeb.MethodType.UNARY, grpc_pb.WithdrawFundsRequest, grpc_pb.WithdrawFundsReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.WithdrawFundsReply.deserializeBinary);
        this.methodInfoGetChatMessages = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.Trades/GetChatMessages', grpcWeb.MethodType.UNARY, grpc_pb.GetChatMessagesRequest, grpc_pb.GetChatMessagesReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.GetChatMessagesReply.deserializeBinary);
        this.methodInfoSendChatMessage = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.Trades/SendChatMessage', grpcWeb.MethodType.UNARY, grpc_pb.SendChatMessageRequest, grpc_pb.SendChatMessageReply, (request) => {
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
                '/io.bisq.protobuffer.Trades/GetTrade', request, metadata || {}, this.methodInfoGetTrade, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.Trades/GetTrade', request, metadata || {}, this.methodInfoGetTrade);
    }
    getTrades(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.Trades/GetTrades', request, metadata || {}, this.methodInfoGetTrades, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.Trades/GetTrades', request, metadata || {}, this.methodInfoGetTrades);
    }
    takeOffer(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.Trades/TakeOffer', request, metadata || {}, this.methodInfoTakeOffer, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.Trades/TakeOffer', request, metadata || {}, this.methodInfoTakeOffer);
    }
    confirmPaymentStarted(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.Trades/ConfirmPaymentStarted', request, metadata || {}, this.methodInfoConfirmPaymentStarted, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.Trades/ConfirmPaymentStarted', request, metadata || {}, this.methodInfoConfirmPaymentStarted);
    }
    confirmPaymentReceived(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.Trades/ConfirmPaymentReceived', request, metadata || {}, this.methodInfoConfirmPaymentReceived, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.Trades/ConfirmPaymentReceived', request, metadata || {}, this.methodInfoConfirmPaymentReceived);
    }
    keepFunds(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.Trades/KeepFunds', request, metadata || {}, this.methodInfoKeepFunds, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.Trades/KeepFunds', request, metadata || {}, this.methodInfoKeepFunds);
    }
    withdrawFunds(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.Trades/WithdrawFunds', request, metadata || {}, this.methodInfoWithdrawFunds, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.Trades/WithdrawFunds', request, metadata || {}, this.methodInfoWithdrawFunds);
    }
    getChatMessages(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.Trades/GetChatMessages', request, metadata || {}, this.methodInfoGetChatMessages, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.Trades/GetChatMessages', request, metadata || {}, this.methodInfoGetChatMessages);
    }
    sendChatMessage(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.Trades/SendChatMessage', request, metadata || {}, this.methodInfoSendChatMessage, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.Trades/SendChatMessage', request, metadata || {}, this.methodInfoSendChatMessage);
    }
}
export class WalletsClient {
    constructor(hostname, credentials, options) {
        this.methodInfoGetBalances = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.Wallets/GetBalances', grpcWeb.MethodType.UNARY, grpc_pb.GetBalancesRequest, grpc_pb.GetBalancesReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.GetBalancesReply.deserializeBinary);
        this.methodInfoGetXmrSeed = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.Wallets/GetXmrSeed', grpcWeb.MethodType.UNARY, grpc_pb.GetXmrSeedRequest, grpc_pb.GetXmrSeedReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.GetXmrSeedReply.deserializeBinary);
        this.methodInfoGetNewDepositAddress = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.Wallets/GetNewDepositAddress', grpcWeb.MethodType.UNARY, grpc_pb.GetNewDepositAddressRequest, grpc_pb.GetNewDepositAddressReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.GetNewDepositAddressReply.deserializeBinary);
        this.methodInfoGetXmrTxs = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.Wallets/GetXmrTxs', grpcWeb.MethodType.UNARY, grpc_pb.GetXmrTxsRequest, grpc_pb.GetXmrTxsReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.GetXmrTxsReply.deserializeBinary);
        this.methodInfoCreateXmrTx = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.Wallets/CreateXmrTx', grpcWeb.MethodType.UNARY, grpc_pb.CreateXmrTxRequest, grpc_pb.CreateXmrTxReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.CreateXmrTxReply.deserializeBinary);
        this.methodInforelayXmrTx = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.Wallets/relayXmrTx', grpcWeb.MethodType.UNARY, grpc_pb.RelayXmrTxRequest, grpc_pb.RelayXmrTxReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.RelayXmrTxReply.deserializeBinary);
        this.methodInfoGetAddressBalance = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.Wallets/GetAddressBalance', grpcWeb.MethodType.UNARY, grpc_pb.GetAddressBalanceRequest, grpc_pb.GetAddressBalanceReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.GetAddressBalanceReply.deserializeBinary);
        this.methodInfoSendBtc = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.Wallets/SendBtc', grpcWeb.MethodType.UNARY, grpc_pb.SendBtcRequest, grpc_pb.SendBtcReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.SendBtcReply.deserializeBinary);
        this.methodInfoGetTxFeeRate = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.Wallets/GetTxFeeRate', grpcWeb.MethodType.UNARY, grpc_pb.GetTxFeeRateRequest, grpc_pb.GetTxFeeRateReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.GetTxFeeRateReply.deserializeBinary);
        this.methodInfoSetTxFeeRatePreference = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.Wallets/SetTxFeeRatePreference', grpcWeb.MethodType.UNARY, grpc_pb.SetTxFeeRatePreferenceRequest, grpc_pb.SetTxFeeRatePreferenceReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.SetTxFeeRatePreferenceReply.deserializeBinary);
        this.methodInfoUnsetTxFeeRatePreference = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.Wallets/UnsetTxFeeRatePreference', grpcWeb.MethodType.UNARY, grpc_pb.UnsetTxFeeRatePreferenceRequest, grpc_pb.UnsetTxFeeRatePreferenceReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.UnsetTxFeeRatePreferenceReply.deserializeBinary);
        this.methodInfoGetTransaction = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.Wallets/GetTransaction', grpcWeb.MethodType.UNARY, grpc_pb.GetTransactionRequest, grpc_pb.GetTransactionReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.GetTransactionReply.deserializeBinary);
        this.methodInfoGetFundingAddresses = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.Wallets/GetFundingAddresses', grpcWeb.MethodType.UNARY, grpc_pb.GetFundingAddressesRequest, grpc_pb.GetFundingAddressesReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.GetFundingAddressesReply.deserializeBinary);
        this.methodInfoSetWalletPassword = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.Wallets/SetWalletPassword', grpcWeb.MethodType.UNARY, grpc_pb.SetWalletPasswordRequest, grpc_pb.SetWalletPasswordReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.SetWalletPasswordReply.deserializeBinary);
        this.methodInfoRemoveWalletPassword = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.Wallets/RemoveWalletPassword', grpcWeb.MethodType.UNARY, grpc_pb.RemoveWalletPasswordRequest, grpc_pb.RemoveWalletPasswordReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.RemoveWalletPasswordReply.deserializeBinary);
        this.methodInfoLockWallet = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.Wallets/LockWallet', grpcWeb.MethodType.UNARY, grpc_pb.LockWalletRequest, grpc_pb.LockWalletReply, (request) => {
            return request.serializeBinary();
        }, grpc_pb.LockWalletReply.deserializeBinary);
        this.methodInfoUnlockWallet = new grpcWeb.MethodDescriptor('/io.bisq.protobuffer.Wallets/UnlockWallet', grpcWeb.MethodType.UNARY, grpc_pb.UnlockWalletRequest, grpc_pb.UnlockWalletReply, (request) => {
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
                '/io.bisq.protobuffer.Wallets/GetBalances', request, metadata || {}, this.methodInfoGetBalances, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.Wallets/GetBalances', request, metadata || {}, this.methodInfoGetBalances);
    }
    getXmrSeed(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.Wallets/GetXmrSeed', request, metadata || {}, this.methodInfoGetXmrSeed, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.Wallets/GetXmrSeed', request, metadata || {}, this.methodInfoGetXmrSeed);
    }
    getNewDepositAddress(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.Wallets/GetNewDepositAddress', request, metadata || {}, this.methodInfoGetNewDepositAddress, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.Wallets/GetNewDepositAddress', request, metadata || {}, this.methodInfoGetNewDepositAddress);
    }
    getXmrTxs(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.Wallets/GetXmrTxs', request, metadata || {}, this.methodInfoGetXmrTxs, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.Wallets/GetXmrTxs', request, metadata || {}, this.methodInfoGetXmrTxs);
    }
    createXmrTx(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.Wallets/CreateXmrTx', request, metadata || {}, this.methodInfoCreateXmrTx, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.Wallets/CreateXmrTx', request, metadata || {}, this.methodInfoCreateXmrTx);
    }
    relayXmrTx(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.Wallets/relayXmrTx', request, metadata || {}, this.methodInforelayXmrTx, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.Wallets/relayXmrTx', request, metadata || {}, this.methodInforelayXmrTx);
    }
    getAddressBalance(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.Wallets/GetAddressBalance', request, metadata || {}, this.methodInfoGetAddressBalance, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.Wallets/GetAddressBalance', request, metadata || {}, this.methodInfoGetAddressBalance);
    }
    sendBtc(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.Wallets/SendBtc', request, metadata || {}, this.methodInfoSendBtc, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.Wallets/SendBtc', request, metadata || {}, this.methodInfoSendBtc);
    }
    getTxFeeRate(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.Wallets/GetTxFeeRate', request, metadata || {}, this.methodInfoGetTxFeeRate, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.Wallets/GetTxFeeRate', request, metadata || {}, this.methodInfoGetTxFeeRate);
    }
    setTxFeeRatePreference(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.Wallets/SetTxFeeRatePreference', request, metadata || {}, this.methodInfoSetTxFeeRatePreference, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.Wallets/SetTxFeeRatePreference', request, metadata || {}, this.methodInfoSetTxFeeRatePreference);
    }
    unsetTxFeeRatePreference(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.Wallets/UnsetTxFeeRatePreference', request, metadata || {}, this.methodInfoUnsetTxFeeRatePreference, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.Wallets/UnsetTxFeeRatePreference', request, metadata || {}, this.methodInfoUnsetTxFeeRatePreference);
    }
    getTransaction(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.Wallets/GetTransaction', request, metadata || {}, this.methodInfoGetTransaction, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.Wallets/GetTransaction', request, metadata || {}, this.methodInfoGetTransaction);
    }
    getFundingAddresses(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.Wallets/GetFundingAddresses', request, metadata || {}, this.methodInfoGetFundingAddresses, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.Wallets/GetFundingAddresses', request, metadata || {}, this.methodInfoGetFundingAddresses);
    }
    setWalletPassword(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.Wallets/SetWalletPassword', request, metadata || {}, this.methodInfoSetWalletPassword, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.Wallets/SetWalletPassword', request, metadata || {}, this.methodInfoSetWalletPassword);
    }
    removeWalletPassword(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.Wallets/RemoveWalletPassword', request, metadata || {}, this.methodInfoRemoveWalletPassword, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.Wallets/RemoveWalletPassword', request, metadata || {}, this.methodInfoRemoveWalletPassword);
    }
    lockWallet(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.Wallets/LockWallet', request, metadata || {}, this.methodInfoLockWallet, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.Wallets/LockWallet', request, metadata || {}, this.methodInfoLockWallet);
    }
    unlockWallet(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/io.bisq.protobuffer.Wallets/UnlockWallet', request, metadata || {}, this.methodInfoUnlockWallet, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/io.bisq.protobuffer.Wallets/UnlockWallet', request, metadata || {}, this.methodInfoUnlockWallet);
    }
}
//# sourceMappingURL=GrpcServiceClientPb.js.map