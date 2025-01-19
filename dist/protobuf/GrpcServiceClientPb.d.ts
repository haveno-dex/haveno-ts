/**
 * @fileoverview gRPC-Web generated client stub for io.haveno.protobuffer
 * @enhanceable
 * @public
 */
import * as grpcWeb from 'grpc-web';
import * as grpc_pb from './grpc_pb';
export declare class HelpClient {
    client_: grpcWeb.AbstractClientBase;
    hostname_: string;
    credentials_: null | {
        [index: string]: string;
    };
    options_: null | {
        [index: string]: any;
    };
    constructor(hostname: string, credentials?: null | {
        [index: string]: string;
    }, options?: null | {
        [index: string]: any;
    });
    methodDescriptorGetMethodHelp: grpcWeb.MethodDescriptor<grpc_pb.GetMethodHelpRequest, grpc_pb.GetMethodHelpReply>;
    getMethodHelp(request: grpc_pb.GetMethodHelpRequest, metadata?: grpcWeb.Metadata | null): Promise<grpc_pb.GetMethodHelpReply>;
    getMethodHelp(request: grpc_pb.GetMethodHelpRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.GetMethodHelpReply) => void): grpcWeb.ClientReadableStream<grpc_pb.GetMethodHelpReply>;
}
export declare class GetVersionClient {
    client_: grpcWeb.AbstractClientBase;
    hostname_: string;
    credentials_: null | {
        [index: string]: string;
    };
    options_: null | {
        [index: string]: any;
    };
    constructor(hostname: string, credentials?: null | {
        [index: string]: string;
    }, options?: null | {
        [index: string]: any;
    });
    methodDescriptorGetVersion: grpcWeb.MethodDescriptor<grpc_pb.GetVersionRequest, grpc_pb.GetVersionReply>;
    getVersion(request: grpc_pb.GetVersionRequest, metadata?: grpcWeb.Metadata | null): Promise<grpc_pb.GetVersionReply>;
    getVersion(request: grpc_pb.GetVersionRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.GetVersionReply) => void): grpcWeb.ClientReadableStream<grpc_pb.GetVersionReply>;
}
export declare class AccountClient {
    client_: grpcWeb.AbstractClientBase;
    hostname_: string;
    credentials_: null | {
        [index: string]: string;
    };
    options_: null | {
        [index: string]: any;
    };
    constructor(hostname: string, credentials?: null | {
        [index: string]: string;
    }, options?: null | {
        [index: string]: any;
    });
    methodDescriptorAccountExists: grpcWeb.MethodDescriptor<grpc_pb.AccountExistsRequest, grpc_pb.AccountExistsReply>;
    accountExists(request: grpc_pb.AccountExistsRequest, metadata?: grpcWeb.Metadata | null): Promise<grpc_pb.AccountExistsReply>;
    accountExists(request: grpc_pb.AccountExistsRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.AccountExistsReply) => void): grpcWeb.ClientReadableStream<grpc_pb.AccountExistsReply>;
    methodDescriptorIsAccountOpen: grpcWeb.MethodDescriptor<grpc_pb.IsAccountOpenRequest, grpc_pb.IsAccountOpenReply>;
    isAccountOpen(request: grpc_pb.IsAccountOpenRequest, metadata?: grpcWeb.Metadata | null): Promise<grpc_pb.IsAccountOpenReply>;
    isAccountOpen(request: grpc_pb.IsAccountOpenRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.IsAccountOpenReply) => void): grpcWeb.ClientReadableStream<grpc_pb.IsAccountOpenReply>;
    methodDescriptorCreateAccount: grpcWeb.MethodDescriptor<grpc_pb.CreateAccountRequest, grpc_pb.CreateAccountReply>;
    createAccount(request: grpc_pb.CreateAccountRequest, metadata?: grpcWeb.Metadata | null): Promise<grpc_pb.CreateAccountReply>;
    createAccount(request: grpc_pb.CreateAccountRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.CreateAccountReply) => void): grpcWeb.ClientReadableStream<grpc_pb.CreateAccountReply>;
    methodDescriptorOpenAccount: grpcWeb.MethodDescriptor<grpc_pb.OpenAccountRequest, grpc_pb.OpenAccountReply>;
    openAccount(request: grpc_pb.OpenAccountRequest, metadata?: grpcWeb.Metadata | null): Promise<grpc_pb.OpenAccountReply>;
    openAccount(request: grpc_pb.OpenAccountRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.OpenAccountReply) => void): grpcWeb.ClientReadableStream<grpc_pb.OpenAccountReply>;
    methodDescriptorIsAppInitialized: grpcWeb.MethodDescriptor<grpc_pb.IsAppInitializedRequest, grpc_pb.IsAppInitializedReply>;
    isAppInitialized(request: grpc_pb.IsAppInitializedRequest, metadata?: grpcWeb.Metadata | null): Promise<grpc_pb.IsAppInitializedReply>;
    isAppInitialized(request: grpc_pb.IsAppInitializedRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.IsAppInitializedReply) => void): grpcWeb.ClientReadableStream<grpc_pb.IsAppInitializedReply>;
    methodDescriptorChangePassword: grpcWeb.MethodDescriptor<grpc_pb.ChangePasswordRequest, grpc_pb.ChangePasswordReply>;
    changePassword(request: grpc_pb.ChangePasswordRequest, metadata?: grpcWeb.Metadata | null): Promise<grpc_pb.ChangePasswordReply>;
    changePassword(request: grpc_pb.ChangePasswordRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.ChangePasswordReply) => void): grpcWeb.ClientReadableStream<grpc_pb.ChangePasswordReply>;
    methodDescriptorCloseAccount: grpcWeb.MethodDescriptor<grpc_pb.CloseAccountRequest, grpc_pb.CloseAccountReply>;
    closeAccount(request: grpc_pb.CloseAccountRequest, metadata?: grpcWeb.Metadata | null): Promise<grpc_pb.CloseAccountReply>;
    closeAccount(request: grpc_pb.CloseAccountRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.CloseAccountReply) => void): grpcWeb.ClientReadableStream<grpc_pb.CloseAccountReply>;
    methodDescriptorDeleteAccount: grpcWeb.MethodDescriptor<grpc_pb.DeleteAccountRequest, grpc_pb.DeleteAccountReply>;
    deleteAccount(request: grpc_pb.DeleteAccountRequest, metadata?: grpcWeb.Metadata | null): Promise<grpc_pb.DeleteAccountReply>;
    deleteAccount(request: grpc_pb.DeleteAccountRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.DeleteAccountReply) => void): grpcWeb.ClientReadableStream<grpc_pb.DeleteAccountReply>;
    methodDescriptorBackupAccount: grpcWeb.MethodDescriptor<grpc_pb.BackupAccountRequest, grpc_pb.BackupAccountReply>;
    backupAccount(request: grpc_pb.BackupAccountRequest, metadata?: grpcWeb.Metadata): grpcWeb.ClientReadableStream<grpc_pb.BackupAccountReply>;
    methodDescriptorRestoreAccount: grpcWeb.MethodDescriptor<grpc_pb.RestoreAccountRequest, grpc_pb.RestoreAccountReply>;
    restoreAccount(request: grpc_pb.RestoreAccountRequest, metadata?: grpcWeb.Metadata | null): Promise<grpc_pb.RestoreAccountReply>;
    restoreAccount(request: grpc_pb.RestoreAccountRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.RestoreAccountReply) => void): grpcWeb.ClientReadableStream<grpc_pb.RestoreAccountReply>;
}
export declare class DisputesClient {
    client_: grpcWeb.AbstractClientBase;
    hostname_: string;
    credentials_: null | {
        [index: string]: string;
    };
    options_: null | {
        [index: string]: any;
    };
    constructor(hostname: string, credentials?: null | {
        [index: string]: string;
    }, options?: null | {
        [index: string]: any;
    });
    methodDescriptorGetDispute: grpcWeb.MethodDescriptor<grpc_pb.GetDisputeRequest, grpc_pb.GetDisputeReply>;
    getDispute(request: grpc_pb.GetDisputeRequest, metadata?: grpcWeb.Metadata | null): Promise<grpc_pb.GetDisputeReply>;
    getDispute(request: grpc_pb.GetDisputeRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.GetDisputeReply) => void): grpcWeb.ClientReadableStream<grpc_pb.GetDisputeReply>;
    methodDescriptorGetDisputes: grpcWeb.MethodDescriptor<grpc_pb.GetDisputesRequest, grpc_pb.GetDisputesReply>;
    getDisputes(request: grpc_pb.GetDisputesRequest, metadata?: grpcWeb.Metadata | null): Promise<grpc_pb.GetDisputesReply>;
    getDisputes(request: grpc_pb.GetDisputesRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.GetDisputesReply) => void): grpcWeb.ClientReadableStream<grpc_pb.GetDisputesReply>;
    methodDescriptorOpenDispute: grpcWeb.MethodDescriptor<grpc_pb.OpenDisputeRequest, grpc_pb.OpenDisputeReply>;
    openDispute(request: grpc_pb.OpenDisputeRequest, metadata?: grpcWeb.Metadata | null): Promise<grpc_pb.OpenDisputeReply>;
    openDispute(request: grpc_pb.OpenDisputeRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.OpenDisputeReply) => void): grpcWeb.ClientReadableStream<grpc_pb.OpenDisputeReply>;
    methodDescriptorResolveDispute: grpcWeb.MethodDescriptor<grpc_pb.ResolveDisputeRequest, grpc_pb.ResolveDisputeReply>;
    resolveDispute(request: grpc_pb.ResolveDisputeRequest, metadata?: grpcWeb.Metadata | null): Promise<grpc_pb.ResolveDisputeReply>;
    resolveDispute(request: grpc_pb.ResolveDisputeRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.ResolveDisputeReply) => void): grpcWeb.ClientReadableStream<grpc_pb.ResolveDisputeReply>;
    methodDescriptorSendDisputeChatMessage: grpcWeb.MethodDescriptor<grpc_pb.SendDisputeChatMessageRequest, grpc_pb.SendDisputeChatMessageReply>;
    sendDisputeChatMessage(request: grpc_pb.SendDisputeChatMessageRequest, metadata?: grpcWeb.Metadata | null): Promise<grpc_pb.SendDisputeChatMessageReply>;
    sendDisputeChatMessage(request: grpc_pb.SendDisputeChatMessageRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.SendDisputeChatMessageReply) => void): grpcWeb.ClientReadableStream<grpc_pb.SendDisputeChatMessageReply>;
}
export declare class DisputeAgentsClient {
    client_: grpcWeb.AbstractClientBase;
    hostname_: string;
    credentials_: null | {
        [index: string]: string;
    };
    options_: null | {
        [index: string]: any;
    };
    constructor(hostname: string, credentials?: null | {
        [index: string]: string;
    }, options?: null | {
        [index: string]: any;
    });
    methodDescriptorRegisterDisputeAgent: grpcWeb.MethodDescriptor<grpc_pb.RegisterDisputeAgentRequest, grpc_pb.RegisterDisputeAgentReply>;
    registerDisputeAgent(request: grpc_pb.RegisterDisputeAgentRequest, metadata?: grpcWeb.Metadata | null): Promise<grpc_pb.RegisterDisputeAgentReply>;
    registerDisputeAgent(request: grpc_pb.RegisterDisputeAgentRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.RegisterDisputeAgentReply) => void): grpcWeb.ClientReadableStream<grpc_pb.RegisterDisputeAgentReply>;
    methodDescriptorUnregisterDisputeAgent: grpcWeb.MethodDescriptor<grpc_pb.UnregisterDisputeAgentRequest, grpc_pb.UnregisterDisputeAgentReply>;
    unregisterDisputeAgent(request: grpc_pb.UnregisterDisputeAgentRequest, metadata?: grpcWeb.Metadata | null): Promise<grpc_pb.UnregisterDisputeAgentReply>;
    unregisterDisputeAgent(request: grpc_pb.UnregisterDisputeAgentRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.UnregisterDisputeAgentReply) => void): grpcWeb.ClientReadableStream<grpc_pb.UnregisterDisputeAgentReply>;
}
export declare class NotificationsClient {
    client_: grpcWeb.AbstractClientBase;
    hostname_: string;
    credentials_: null | {
        [index: string]: string;
    };
    options_: null | {
        [index: string]: any;
    };
    constructor(hostname: string, credentials?: null | {
        [index: string]: string;
    }, options?: null | {
        [index: string]: any;
    });
    methodDescriptorRegisterNotificationListener: grpcWeb.MethodDescriptor<grpc_pb.RegisterNotificationListenerRequest, grpc_pb.NotificationMessage>;
    registerNotificationListener(request: grpc_pb.RegisterNotificationListenerRequest, metadata?: grpcWeb.Metadata): grpcWeb.ClientReadableStream<grpc_pb.NotificationMessage>;
    methodDescriptorSendNotification: grpcWeb.MethodDescriptor<grpc_pb.SendNotificationRequest, grpc_pb.SendNotificationReply>;
    sendNotification(request: grpc_pb.SendNotificationRequest, metadata?: grpcWeb.Metadata | null): Promise<grpc_pb.SendNotificationReply>;
    sendNotification(request: grpc_pb.SendNotificationRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.SendNotificationReply) => void): grpcWeb.ClientReadableStream<grpc_pb.SendNotificationReply>;
}
export declare class XmrConnectionsClient {
    client_: grpcWeb.AbstractClientBase;
    hostname_: string;
    credentials_: null | {
        [index: string]: string;
    };
    options_: null | {
        [index: string]: any;
    };
    constructor(hostname: string, credentials?: null | {
        [index: string]: string;
    }, options?: null | {
        [index: string]: any;
    });
    methodDescriptorAddConnection: grpcWeb.MethodDescriptor<grpc_pb.AddConnectionRequest, grpc_pb.AddConnectionReply>;
    addConnection(request: grpc_pb.AddConnectionRequest, metadata?: grpcWeb.Metadata | null): Promise<grpc_pb.AddConnectionReply>;
    addConnection(request: grpc_pb.AddConnectionRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.AddConnectionReply) => void): grpcWeb.ClientReadableStream<grpc_pb.AddConnectionReply>;
    methodDescriptorRemoveConnection: grpcWeb.MethodDescriptor<grpc_pb.RemoveConnectionRequest, grpc_pb.RemoveConnectionReply>;
    removeConnection(request: grpc_pb.RemoveConnectionRequest, metadata?: grpcWeb.Metadata | null): Promise<grpc_pb.RemoveConnectionReply>;
    removeConnection(request: grpc_pb.RemoveConnectionRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.RemoveConnectionReply) => void): grpcWeb.ClientReadableStream<grpc_pb.RemoveConnectionReply>;
    methodDescriptorGetConnection: grpcWeb.MethodDescriptor<grpc_pb.GetConnectionRequest, grpc_pb.GetConnectionReply>;
    getConnection(request: grpc_pb.GetConnectionRequest, metadata?: grpcWeb.Metadata | null): Promise<grpc_pb.GetConnectionReply>;
    getConnection(request: grpc_pb.GetConnectionRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.GetConnectionReply) => void): grpcWeb.ClientReadableStream<grpc_pb.GetConnectionReply>;
    methodDescriptorGetConnections: grpcWeb.MethodDescriptor<grpc_pb.GetConnectionsRequest, grpc_pb.GetConnectionsReply>;
    getConnections(request: grpc_pb.GetConnectionsRequest, metadata?: grpcWeb.Metadata | null): Promise<grpc_pb.GetConnectionsReply>;
    getConnections(request: grpc_pb.GetConnectionsRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.GetConnectionsReply) => void): grpcWeb.ClientReadableStream<grpc_pb.GetConnectionsReply>;
    methodDescriptorSetConnection: grpcWeb.MethodDescriptor<grpc_pb.SetConnectionRequest, grpc_pb.SetConnectionReply>;
    setConnection(request: grpc_pb.SetConnectionRequest, metadata?: grpcWeb.Metadata | null): Promise<grpc_pb.SetConnectionReply>;
    setConnection(request: grpc_pb.SetConnectionRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.SetConnectionReply) => void): grpcWeb.ClientReadableStream<grpc_pb.SetConnectionReply>;
    methodDescriptorCheckConnection: grpcWeb.MethodDescriptor<grpc_pb.CheckConnectionRequest, grpc_pb.CheckConnectionReply>;
    checkConnection(request: grpc_pb.CheckConnectionRequest, metadata?: grpcWeb.Metadata | null): Promise<grpc_pb.CheckConnectionReply>;
    checkConnection(request: grpc_pb.CheckConnectionRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.CheckConnectionReply) => void): grpcWeb.ClientReadableStream<grpc_pb.CheckConnectionReply>;
    methodDescriptorCheckConnections: grpcWeb.MethodDescriptor<grpc_pb.CheckConnectionsRequest, grpc_pb.CheckConnectionsReply>;
    checkConnections(request: grpc_pb.CheckConnectionsRequest, metadata?: grpcWeb.Metadata | null): Promise<grpc_pb.CheckConnectionsReply>;
    checkConnections(request: grpc_pb.CheckConnectionsRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.CheckConnectionsReply) => void): grpcWeb.ClientReadableStream<grpc_pb.CheckConnectionsReply>;
    methodDescriptorStartCheckingConnection: grpcWeb.MethodDescriptor<grpc_pb.StartCheckingConnectionRequest, grpc_pb.StartCheckingConnectionReply>;
    startCheckingConnection(request: grpc_pb.StartCheckingConnectionRequest, metadata?: grpcWeb.Metadata | null): Promise<grpc_pb.StartCheckingConnectionReply>;
    startCheckingConnection(request: grpc_pb.StartCheckingConnectionRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.StartCheckingConnectionReply) => void): grpcWeb.ClientReadableStream<grpc_pb.StartCheckingConnectionReply>;
    methodDescriptorStopCheckingConnection: grpcWeb.MethodDescriptor<grpc_pb.StopCheckingConnectionRequest, grpc_pb.StopCheckingConnectionReply>;
    stopCheckingConnection(request: grpc_pb.StopCheckingConnectionRequest, metadata?: grpcWeb.Metadata | null): Promise<grpc_pb.StopCheckingConnectionReply>;
    stopCheckingConnection(request: grpc_pb.StopCheckingConnectionRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.StopCheckingConnectionReply) => void): grpcWeb.ClientReadableStream<grpc_pb.StopCheckingConnectionReply>;
    methodDescriptorGetBestConnection: grpcWeb.MethodDescriptor<grpc_pb.GetBestConnectionRequest, grpc_pb.GetBestConnectionReply>;
    getBestConnection(request: grpc_pb.GetBestConnectionRequest, metadata?: grpcWeb.Metadata | null): Promise<grpc_pb.GetBestConnectionReply>;
    getBestConnection(request: grpc_pb.GetBestConnectionRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.GetBestConnectionReply) => void): grpcWeb.ClientReadableStream<grpc_pb.GetBestConnectionReply>;
    methodDescriptorSetAutoSwitch: grpcWeb.MethodDescriptor<grpc_pb.SetAutoSwitchRequest, grpc_pb.SetAutoSwitchReply>;
    setAutoSwitch(request: grpc_pb.SetAutoSwitchRequest, metadata?: grpcWeb.Metadata | null): Promise<grpc_pb.SetAutoSwitchReply>;
    setAutoSwitch(request: grpc_pb.SetAutoSwitchRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.SetAutoSwitchReply) => void): grpcWeb.ClientReadableStream<grpc_pb.SetAutoSwitchReply>;
    methodDescriptorGetAutoSwitch: grpcWeb.MethodDescriptor<grpc_pb.GetAutoSwitchRequest, grpc_pb.GetAutoSwitchReply>;
    getAutoSwitch(request: grpc_pb.GetAutoSwitchRequest, metadata?: grpcWeb.Metadata | null): Promise<grpc_pb.GetAutoSwitchReply>;
    getAutoSwitch(request: grpc_pb.GetAutoSwitchRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.GetAutoSwitchReply) => void): grpcWeb.ClientReadableStream<grpc_pb.GetAutoSwitchReply>;
}
export declare class XmrNodeClient {
    client_: grpcWeb.AbstractClientBase;
    hostname_: string;
    credentials_: null | {
        [index: string]: string;
    };
    options_: null | {
        [index: string]: any;
    };
    constructor(hostname: string, credentials?: null | {
        [index: string]: string;
    }, options?: null | {
        [index: string]: any;
    });
    methodDescriptorIsXmrNodeOnline: grpcWeb.MethodDescriptor<grpc_pb.IsXmrNodeOnlineRequest, grpc_pb.IsXmrNodeOnlineReply>;
    isXmrNodeOnline(request: grpc_pb.IsXmrNodeOnlineRequest, metadata?: grpcWeb.Metadata | null): Promise<grpc_pb.IsXmrNodeOnlineReply>;
    isXmrNodeOnline(request: grpc_pb.IsXmrNodeOnlineRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.IsXmrNodeOnlineReply) => void): grpcWeb.ClientReadableStream<grpc_pb.IsXmrNodeOnlineReply>;
    methodDescriptorGetXmrNodeSettings: grpcWeb.MethodDescriptor<grpc_pb.GetXmrNodeSettingsRequest, grpc_pb.GetXmrNodeSettingsReply>;
    getXmrNodeSettings(request: grpc_pb.GetXmrNodeSettingsRequest, metadata?: grpcWeb.Metadata | null): Promise<grpc_pb.GetXmrNodeSettingsReply>;
    getXmrNodeSettings(request: grpc_pb.GetXmrNodeSettingsRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.GetXmrNodeSettingsReply) => void): grpcWeb.ClientReadableStream<grpc_pb.GetXmrNodeSettingsReply>;
    methodDescriptorStartXmrNode: grpcWeb.MethodDescriptor<grpc_pb.StartXmrNodeRequest, grpc_pb.StartXmrNodeReply>;
    startXmrNode(request: grpc_pb.StartXmrNodeRequest, metadata?: grpcWeb.Metadata | null): Promise<grpc_pb.StartXmrNodeReply>;
    startXmrNode(request: grpc_pb.StartXmrNodeRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.StartXmrNodeReply) => void): grpcWeb.ClientReadableStream<grpc_pb.StartXmrNodeReply>;
    methodDescriptorStopXmrNode: grpcWeb.MethodDescriptor<grpc_pb.StopXmrNodeRequest, grpc_pb.StopXmrNodeReply>;
    stopXmrNode(request: grpc_pb.StopXmrNodeRequest, metadata?: grpcWeb.Metadata | null): Promise<grpc_pb.StopXmrNodeReply>;
    stopXmrNode(request: grpc_pb.StopXmrNodeRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.StopXmrNodeReply) => void): grpcWeb.ClientReadableStream<grpc_pb.StopXmrNodeReply>;
}
export declare class OffersClient {
    client_: grpcWeb.AbstractClientBase;
    hostname_: string;
    credentials_: null | {
        [index: string]: string;
    };
    options_: null | {
        [index: string]: any;
    };
    constructor(hostname: string, credentials?: null | {
        [index: string]: string;
    }, options?: null | {
        [index: string]: any;
    });
    methodDescriptorGetOffer: grpcWeb.MethodDescriptor<grpc_pb.GetOfferRequest, grpc_pb.GetOfferReply>;
    getOffer(request: grpc_pb.GetOfferRequest, metadata?: grpcWeb.Metadata | null): Promise<grpc_pb.GetOfferReply>;
    getOffer(request: grpc_pb.GetOfferRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.GetOfferReply) => void): grpcWeb.ClientReadableStream<grpc_pb.GetOfferReply>;
    methodDescriptorGetMyOffer: grpcWeb.MethodDescriptor<grpc_pb.GetMyOfferRequest, grpc_pb.GetMyOfferReply>;
    getMyOffer(request: grpc_pb.GetMyOfferRequest, metadata?: grpcWeb.Metadata | null): Promise<grpc_pb.GetMyOfferReply>;
    getMyOffer(request: grpc_pb.GetMyOfferRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.GetMyOfferReply) => void): grpcWeb.ClientReadableStream<grpc_pb.GetMyOfferReply>;
    methodDescriptorGetOffers: grpcWeb.MethodDescriptor<grpc_pb.GetOffersRequest, grpc_pb.GetOffersReply>;
    getOffers(request: grpc_pb.GetOffersRequest, metadata?: grpcWeb.Metadata | null): Promise<grpc_pb.GetOffersReply>;
    getOffers(request: grpc_pb.GetOffersRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.GetOffersReply) => void): grpcWeb.ClientReadableStream<grpc_pb.GetOffersReply>;
    methodDescriptorGetMyOffers: grpcWeb.MethodDescriptor<grpc_pb.GetMyOffersRequest, grpc_pb.GetMyOffersReply>;
    getMyOffers(request: grpc_pb.GetMyOffersRequest, metadata?: grpcWeb.Metadata | null): Promise<grpc_pb.GetMyOffersReply>;
    getMyOffers(request: grpc_pb.GetMyOffersRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.GetMyOffersReply) => void): grpcWeb.ClientReadableStream<grpc_pb.GetMyOffersReply>;
    methodDescriptorPostOffer: grpcWeb.MethodDescriptor<grpc_pb.PostOfferRequest, grpc_pb.PostOfferReply>;
    postOffer(request: grpc_pb.PostOfferRequest, metadata?: grpcWeb.Metadata | null): Promise<grpc_pb.PostOfferReply>;
    postOffer(request: grpc_pb.PostOfferRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.PostOfferReply) => void): grpcWeb.ClientReadableStream<grpc_pb.PostOfferReply>;
    methodDescriptorCancelOffer: grpcWeb.MethodDescriptor<grpc_pb.CancelOfferRequest, grpc_pb.CancelOfferReply>;
    cancelOffer(request: grpc_pb.CancelOfferRequest, metadata?: grpcWeb.Metadata | null): Promise<grpc_pb.CancelOfferReply>;
    cancelOffer(request: grpc_pb.CancelOfferRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.CancelOfferReply) => void): grpcWeb.ClientReadableStream<grpc_pb.CancelOfferReply>;
}
export declare class PaymentAccountsClient {
    client_: grpcWeb.AbstractClientBase;
    hostname_: string;
    credentials_: null | {
        [index: string]: string;
    };
    options_: null | {
        [index: string]: any;
    };
    constructor(hostname: string, credentials?: null | {
        [index: string]: string;
    }, options?: null | {
        [index: string]: any;
    });
    methodDescriptorCreatePaymentAccount: grpcWeb.MethodDescriptor<grpc_pb.CreatePaymentAccountRequest, grpc_pb.CreatePaymentAccountReply>;
    createPaymentAccount(request: grpc_pb.CreatePaymentAccountRequest, metadata?: grpcWeb.Metadata | null): Promise<grpc_pb.CreatePaymentAccountReply>;
    createPaymentAccount(request: grpc_pb.CreatePaymentAccountRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.CreatePaymentAccountReply) => void): grpcWeb.ClientReadableStream<grpc_pb.CreatePaymentAccountReply>;
    methodDescriptorGetPaymentAccounts: grpcWeb.MethodDescriptor<grpc_pb.GetPaymentAccountsRequest, grpc_pb.GetPaymentAccountsReply>;
    getPaymentAccounts(request: grpc_pb.GetPaymentAccountsRequest, metadata?: grpcWeb.Metadata | null): Promise<grpc_pb.GetPaymentAccountsReply>;
    getPaymentAccounts(request: grpc_pb.GetPaymentAccountsRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.GetPaymentAccountsReply) => void): grpcWeb.ClientReadableStream<grpc_pb.GetPaymentAccountsReply>;
    methodDescriptorGetPaymentMethods: grpcWeb.MethodDescriptor<grpc_pb.GetPaymentMethodsRequest, grpc_pb.GetPaymentMethodsReply>;
    getPaymentMethods(request: grpc_pb.GetPaymentMethodsRequest, metadata?: grpcWeb.Metadata | null): Promise<grpc_pb.GetPaymentMethodsReply>;
    getPaymentMethods(request: grpc_pb.GetPaymentMethodsRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.GetPaymentMethodsReply) => void): grpcWeb.ClientReadableStream<grpc_pb.GetPaymentMethodsReply>;
    methodDescriptorGetPaymentAccountForm: grpcWeb.MethodDescriptor<grpc_pb.GetPaymentAccountFormRequest, grpc_pb.GetPaymentAccountFormReply>;
    getPaymentAccountForm(request: grpc_pb.GetPaymentAccountFormRequest, metadata?: grpcWeb.Metadata | null): Promise<grpc_pb.GetPaymentAccountFormReply>;
    getPaymentAccountForm(request: grpc_pb.GetPaymentAccountFormRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.GetPaymentAccountFormReply) => void): grpcWeb.ClientReadableStream<grpc_pb.GetPaymentAccountFormReply>;
    methodDescriptorGetPaymentAccountFormAsJson: grpcWeb.MethodDescriptor<grpc_pb.GetPaymentAccountFormAsJsonRequest, grpc_pb.GetPaymentAccountFormAsJsonReply>;
    getPaymentAccountFormAsJson(request: grpc_pb.GetPaymentAccountFormAsJsonRequest, metadata?: grpcWeb.Metadata | null): Promise<grpc_pb.GetPaymentAccountFormAsJsonReply>;
    getPaymentAccountFormAsJson(request: grpc_pb.GetPaymentAccountFormAsJsonRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.GetPaymentAccountFormAsJsonReply) => void): grpcWeb.ClientReadableStream<grpc_pb.GetPaymentAccountFormAsJsonReply>;
    methodDescriptorCreateCryptoCurrencyPaymentAccount: grpcWeb.MethodDescriptor<grpc_pb.CreateCryptoCurrencyPaymentAccountRequest, grpc_pb.CreateCryptoCurrencyPaymentAccountReply>;
    createCryptoCurrencyPaymentAccount(request: grpc_pb.CreateCryptoCurrencyPaymentAccountRequest, metadata?: grpcWeb.Metadata | null): Promise<grpc_pb.CreateCryptoCurrencyPaymentAccountReply>;
    createCryptoCurrencyPaymentAccount(request: grpc_pb.CreateCryptoCurrencyPaymentAccountRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.CreateCryptoCurrencyPaymentAccountReply) => void): grpcWeb.ClientReadableStream<grpc_pb.CreateCryptoCurrencyPaymentAccountReply>;
    methodDescriptorDeletePaymentAccount: grpcWeb.MethodDescriptor<grpc_pb.DeletePaymentAccountRequest, grpc_pb.DeletePaymentAccountReply>;
    deletePaymentAccount(request: grpc_pb.DeletePaymentAccountRequest, metadata?: grpcWeb.Metadata | null): Promise<grpc_pb.DeletePaymentAccountReply>;
    deletePaymentAccount(request: grpc_pb.DeletePaymentAccountRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.DeletePaymentAccountReply) => void): grpcWeb.ClientReadableStream<grpc_pb.DeletePaymentAccountReply>;
    methodDescriptorGetCryptoCurrencyPaymentMethods: grpcWeb.MethodDescriptor<grpc_pb.GetCryptoCurrencyPaymentMethodsRequest, grpc_pb.GetCryptoCurrencyPaymentMethodsReply>;
    getCryptoCurrencyPaymentMethods(request: grpc_pb.GetCryptoCurrencyPaymentMethodsRequest, metadata?: grpcWeb.Metadata | null): Promise<grpc_pb.GetCryptoCurrencyPaymentMethodsReply>;
    getCryptoCurrencyPaymentMethods(request: grpc_pb.GetCryptoCurrencyPaymentMethodsRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.GetCryptoCurrencyPaymentMethodsReply) => void): grpcWeb.ClientReadableStream<grpc_pb.GetCryptoCurrencyPaymentMethodsReply>;
    methodDescriptorValidateFormField: grpcWeb.MethodDescriptor<grpc_pb.ValidateFormFieldRequest, grpc_pb.ValidateFormFieldReply>;
    validateFormField(request: grpc_pb.ValidateFormFieldRequest, metadata?: grpcWeb.Metadata | null): Promise<grpc_pb.ValidateFormFieldReply>;
    validateFormField(request: grpc_pb.ValidateFormFieldRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.ValidateFormFieldReply) => void): grpcWeb.ClientReadableStream<grpc_pb.ValidateFormFieldReply>;
}
export declare class PriceClient {
    client_: grpcWeb.AbstractClientBase;
    hostname_: string;
    credentials_: null | {
        [index: string]: string;
    };
    options_: null | {
        [index: string]: any;
    };
    constructor(hostname: string, credentials?: null | {
        [index: string]: string;
    }, options?: null | {
        [index: string]: any;
    });
    methodDescriptorGetMarketPrice: grpcWeb.MethodDescriptor<grpc_pb.MarketPriceRequest, grpc_pb.MarketPriceReply>;
    getMarketPrice(request: grpc_pb.MarketPriceRequest, metadata?: grpcWeb.Metadata | null): Promise<grpc_pb.MarketPriceReply>;
    getMarketPrice(request: grpc_pb.MarketPriceRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.MarketPriceReply) => void): grpcWeb.ClientReadableStream<grpc_pb.MarketPriceReply>;
    methodDescriptorGetMarketPrices: grpcWeb.MethodDescriptor<grpc_pb.MarketPricesRequest, grpc_pb.MarketPricesReply>;
    getMarketPrices(request: grpc_pb.MarketPricesRequest, metadata?: grpcWeb.Metadata | null): Promise<grpc_pb.MarketPricesReply>;
    getMarketPrices(request: grpc_pb.MarketPricesRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.MarketPricesReply) => void): grpcWeb.ClientReadableStream<grpc_pb.MarketPricesReply>;
    methodDescriptorGetMarketDepth: grpcWeb.MethodDescriptor<grpc_pb.MarketDepthRequest, grpc_pb.MarketDepthReply>;
    getMarketDepth(request: grpc_pb.MarketDepthRequest, metadata?: grpcWeb.Metadata | null): Promise<grpc_pb.MarketDepthReply>;
    getMarketDepth(request: grpc_pb.MarketDepthRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.MarketDepthReply) => void): grpcWeb.ClientReadableStream<grpc_pb.MarketDepthReply>;
}
export declare class GetTradeStatisticsClient {
    client_: grpcWeb.AbstractClientBase;
    hostname_: string;
    credentials_: null | {
        [index: string]: string;
    };
    options_: null | {
        [index: string]: any;
    };
    constructor(hostname: string, credentials?: null | {
        [index: string]: string;
    }, options?: null | {
        [index: string]: any;
    });
    methodDescriptorGetTradeStatistics: grpcWeb.MethodDescriptor<grpc_pb.GetTradeStatisticsRequest, grpc_pb.GetTradeStatisticsReply>;
    getTradeStatistics(request: grpc_pb.GetTradeStatisticsRequest, metadata?: grpcWeb.Metadata | null): Promise<grpc_pb.GetTradeStatisticsReply>;
    getTradeStatistics(request: grpc_pb.GetTradeStatisticsRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.GetTradeStatisticsReply) => void): grpcWeb.ClientReadableStream<grpc_pb.GetTradeStatisticsReply>;
}
export declare class ShutdownServerClient {
    client_: grpcWeb.AbstractClientBase;
    hostname_: string;
    credentials_: null | {
        [index: string]: string;
    };
    options_: null | {
        [index: string]: any;
    };
    constructor(hostname: string, credentials?: null | {
        [index: string]: string;
    }, options?: null | {
        [index: string]: any;
    });
    methodDescriptorStop: grpcWeb.MethodDescriptor<grpc_pb.StopRequest, grpc_pb.StopReply>;
    stop(request: grpc_pb.StopRequest, metadata?: grpcWeb.Metadata | null): Promise<grpc_pb.StopReply>;
    stop(request: grpc_pb.StopRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.StopReply) => void): grpcWeb.ClientReadableStream<grpc_pb.StopReply>;
}
export declare class TradesClient {
    client_: grpcWeb.AbstractClientBase;
    hostname_: string;
    credentials_: null | {
        [index: string]: string;
    };
    options_: null | {
        [index: string]: any;
    };
    constructor(hostname: string, credentials?: null | {
        [index: string]: string;
    }, options?: null | {
        [index: string]: any;
    });
    methodDescriptorGetTrade: grpcWeb.MethodDescriptor<grpc_pb.GetTradeRequest, grpc_pb.GetTradeReply>;
    getTrade(request: grpc_pb.GetTradeRequest, metadata?: grpcWeb.Metadata | null): Promise<grpc_pb.GetTradeReply>;
    getTrade(request: grpc_pb.GetTradeRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.GetTradeReply) => void): grpcWeb.ClientReadableStream<grpc_pb.GetTradeReply>;
    methodDescriptorGetTrades: grpcWeb.MethodDescriptor<grpc_pb.GetTradesRequest, grpc_pb.GetTradesReply>;
    getTrades(request: grpc_pb.GetTradesRequest, metadata?: grpcWeb.Metadata | null): Promise<grpc_pb.GetTradesReply>;
    getTrades(request: grpc_pb.GetTradesRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.GetTradesReply) => void): grpcWeb.ClientReadableStream<grpc_pb.GetTradesReply>;
    methodDescriptorTakeOffer: grpcWeb.MethodDescriptor<grpc_pb.TakeOfferRequest, grpc_pb.TakeOfferReply>;
    takeOffer(request: grpc_pb.TakeOfferRequest, metadata?: grpcWeb.Metadata | null): Promise<grpc_pb.TakeOfferReply>;
    takeOffer(request: grpc_pb.TakeOfferRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.TakeOfferReply) => void): grpcWeb.ClientReadableStream<grpc_pb.TakeOfferReply>;
    methodDescriptorConfirmPaymentSent: grpcWeb.MethodDescriptor<grpc_pb.ConfirmPaymentSentRequest, grpc_pb.ConfirmPaymentSentReply>;
    confirmPaymentSent(request: grpc_pb.ConfirmPaymentSentRequest, metadata?: grpcWeb.Metadata | null): Promise<grpc_pb.ConfirmPaymentSentReply>;
    confirmPaymentSent(request: grpc_pb.ConfirmPaymentSentRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.ConfirmPaymentSentReply) => void): grpcWeb.ClientReadableStream<grpc_pb.ConfirmPaymentSentReply>;
    methodDescriptorConfirmPaymentReceived: grpcWeb.MethodDescriptor<grpc_pb.ConfirmPaymentReceivedRequest, grpc_pb.ConfirmPaymentReceivedReply>;
    confirmPaymentReceived(request: grpc_pb.ConfirmPaymentReceivedRequest, metadata?: grpcWeb.Metadata | null): Promise<grpc_pb.ConfirmPaymentReceivedReply>;
    confirmPaymentReceived(request: grpc_pb.ConfirmPaymentReceivedRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.ConfirmPaymentReceivedReply) => void): grpcWeb.ClientReadableStream<grpc_pb.ConfirmPaymentReceivedReply>;
    methodDescriptorCompleteTrade: grpcWeb.MethodDescriptor<grpc_pb.CompleteTradeRequest, grpc_pb.CompleteTradeReply>;
    completeTrade(request: grpc_pb.CompleteTradeRequest, metadata?: grpcWeb.Metadata | null): Promise<grpc_pb.CompleteTradeReply>;
    completeTrade(request: grpc_pb.CompleteTradeRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.CompleteTradeReply) => void): grpcWeb.ClientReadableStream<grpc_pb.CompleteTradeReply>;
    methodDescriptorWithdrawFunds: grpcWeb.MethodDescriptor<grpc_pb.WithdrawFundsRequest, grpc_pb.WithdrawFundsReply>;
    withdrawFunds(request: grpc_pb.WithdrawFundsRequest, metadata?: grpcWeb.Metadata | null): Promise<grpc_pb.WithdrawFundsReply>;
    withdrawFunds(request: grpc_pb.WithdrawFundsRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.WithdrawFundsReply) => void): grpcWeb.ClientReadableStream<grpc_pb.WithdrawFundsReply>;
    methodDescriptorGetChatMessages: grpcWeb.MethodDescriptor<grpc_pb.GetChatMessagesRequest, grpc_pb.GetChatMessagesReply>;
    getChatMessages(request: grpc_pb.GetChatMessagesRequest, metadata?: grpcWeb.Metadata | null): Promise<grpc_pb.GetChatMessagesReply>;
    getChatMessages(request: grpc_pb.GetChatMessagesRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.GetChatMessagesReply) => void): grpcWeb.ClientReadableStream<grpc_pb.GetChatMessagesReply>;
    methodDescriptorSendChatMessage: grpcWeb.MethodDescriptor<grpc_pb.SendChatMessageRequest, grpc_pb.SendChatMessageReply>;
    sendChatMessage(request: grpc_pb.SendChatMessageRequest, metadata?: grpcWeb.Metadata | null): Promise<grpc_pb.SendChatMessageReply>;
    sendChatMessage(request: grpc_pb.SendChatMessageRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.SendChatMessageReply) => void): grpcWeb.ClientReadableStream<grpc_pb.SendChatMessageReply>;
}
export declare class WalletsClient {
    client_: grpcWeb.AbstractClientBase;
    hostname_: string;
    credentials_: null | {
        [index: string]: string;
    };
    options_: null | {
        [index: string]: any;
    };
    constructor(hostname: string, credentials?: null | {
        [index: string]: string;
    }, options?: null | {
        [index: string]: any;
    });
    methodDescriptorGetBalances: grpcWeb.MethodDescriptor<grpc_pb.GetBalancesRequest, grpc_pb.GetBalancesReply>;
    getBalances(request: grpc_pb.GetBalancesRequest, metadata?: grpcWeb.Metadata | null): Promise<grpc_pb.GetBalancesReply>;
    getBalances(request: grpc_pb.GetBalancesRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.GetBalancesReply) => void): grpcWeb.ClientReadableStream<grpc_pb.GetBalancesReply>;
    methodDescriptorGetXmrSeed: grpcWeb.MethodDescriptor<grpc_pb.GetXmrSeedRequest, grpc_pb.GetXmrSeedReply>;
    getXmrSeed(request: grpc_pb.GetXmrSeedRequest, metadata?: grpcWeb.Metadata | null): Promise<grpc_pb.GetXmrSeedReply>;
    getXmrSeed(request: grpc_pb.GetXmrSeedRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.GetXmrSeedReply) => void): grpcWeb.ClientReadableStream<grpc_pb.GetXmrSeedReply>;
    methodDescriptorGetXmrPrimaryAddress: grpcWeb.MethodDescriptor<grpc_pb.GetXmrPrimaryAddressRequest, grpc_pb.GetXmrPrimaryAddressReply>;
    getXmrPrimaryAddress(request: grpc_pb.GetXmrPrimaryAddressRequest, metadata?: grpcWeb.Metadata | null): Promise<grpc_pb.GetXmrPrimaryAddressReply>;
    getXmrPrimaryAddress(request: grpc_pb.GetXmrPrimaryAddressRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.GetXmrPrimaryAddressReply) => void): grpcWeb.ClientReadableStream<grpc_pb.GetXmrPrimaryAddressReply>;
    methodDescriptorGetXmrNewSubaddress: grpcWeb.MethodDescriptor<grpc_pb.GetXmrNewSubaddressRequest, grpc_pb.GetXmrNewSubaddressReply>;
    getXmrNewSubaddress(request: grpc_pb.GetXmrNewSubaddressRequest, metadata?: grpcWeb.Metadata | null): Promise<grpc_pb.GetXmrNewSubaddressReply>;
    getXmrNewSubaddress(request: grpc_pb.GetXmrNewSubaddressRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.GetXmrNewSubaddressReply) => void): grpcWeb.ClientReadableStream<grpc_pb.GetXmrNewSubaddressReply>;
    methodDescriptorGetXmrTxs: grpcWeb.MethodDescriptor<grpc_pb.GetXmrTxsRequest, grpc_pb.GetXmrTxsReply>;
    getXmrTxs(request: grpc_pb.GetXmrTxsRequest, metadata?: grpcWeb.Metadata | null): Promise<grpc_pb.GetXmrTxsReply>;
    getXmrTxs(request: grpc_pb.GetXmrTxsRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.GetXmrTxsReply) => void): grpcWeb.ClientReadableStream<grpc_pb.GetXmrTxsReply>;
    methodDescriptorCreateXmrTx: grpcWeb.MethodDescriptor<grpc_pb.CreateXmrTxRequest, grpc_pb.CreateXmrTxReply>;
    createXmrTx(request: grpc_pb.CreateXmrTxRequest, metadata?: grpcWeb.Metadata | null): Promise<grpc_pb.CreateXmrTxReply>;
    createXmrTx(request: grpc_pb.CreateXmrTxRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.CreateXmrTxReply) => void): grpcWeb.ClientReadableStream<grpc_pb.CreateXmrTxReply>;
    methodDescriptorrelayXmrTx: grpcWeb.MethodDescriptor<grpc_pb.RelayXmrTxRequest, grpc_pb.RelayXmrTxReply>;
    relayXmrTx(request: grpc_pb.RelayXmrTxRequest, metadata?: grpcWeb.Metadata | null): Promise<grpc_pb.RelayXmrTxReply>;
    relayXmrTx(request: grpc_pb.RelayXmrTxRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.RelayXmrTxReply) => void): grpcWeb.ClientReadableStream<grpc_pb.RelayXmrTxReply>;
    methodDescriptorGetAddressBalance: grpcWeb.MethodDescriptor<grpc_pb.GetAddressBalanceRequest, grpc_pb.GetAddressBalanceReply>;
    getAddressBalance(request: grpc_pb.GetAddressBalanceRequest, metadata?: grpcWeb.Metadata | null): Promise<grpc_pb.GetAddressBalanceReply>;
    getAddressBalance(request: grpc_pb.GetAddressBalanceRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.GetAddressBalanceReply) => void): grpcWeb.ClientReadableStream<grpc_pb.GetAddressBalanceReply>;
    methodDescriptorGetFundingAddresses: grpcWeb.MethodDescriptor<grpc_pb.GetFundingAddressesRequest, grpc_pb.GetFundingAddressesReply>;
    getFundingAddresses(request: grpc_pb.GetFundingAddressesRequest, metadata?: grpcWeb.Metadata | null): Promise<grpc_pb.GetFundingAddressesReply>;
    getFundingAddresses(request: grpc_pb.GetFundingAddressesRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.GetFundingAddressesReply) => void): grpcWeb.ClientReadableStream<grpc_pb.GetFundingAddressesReply>;
    methodDescriptorSetWalletPassword: grpcWeb.MethodDescriptor<grpc_pb.SetWalletPasswordRequest, grpc_pb.SetWalletPasswordReply>;
    setWalletPassword(request: grpc_pb.SetWalletPasswordRequest, metadata?: grpcWeb.Metadata | null): Promise<grpc_pb.SetWalletPasswordReply>;
    setWalletPassword(request: grpc_pb.SetWalletPasswordRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.SetWalletPasswordReply) => void): grpcWeb.ClientReadableStream<grpc_pb.SetWalletPasswordReply>;
    methodDescriptorRemoveWalletPassword: grpcWeb.MethodDescriptor<grpc_pb.RemoveWalletPasswordRequest, grpc_pb.RemoveWalletPasswordReply>;
    removeWalletPassword(request: grpc_pb.RemoveWalletPasswordRequest, metadata?: grpcWeb.Metadata | null): Promise<grpc_pb.RemoveWalletPasswordReply>;
    removeWalletPassword(request: grpc_pb.RemoveWalletPasswordRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.RemoveWalletPasswordReply) => void): grpcWeb.ClientReadableStream<grpc_pb.RemoveWalletPasswordReply>;
    methodDescriptorLockWallet: grpcWeb.MethodDescriptor<grpc_pb.LockWalletRequest, grpc_pb.LockWalletReply>;
    lockWallet(request: grpc_pb.LockWalletRequest, metadata?: grpcWeb.Metadata | null): Promise<grpc_pb.LockWalletReply>;
    lockWallet(request: grpc_pb.LockWalletRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.LockWalletReply) => void): grpcWeb.ClientReadableStream<grpc_pb.LockWalletReply>;
    methodDescriptorUnlockWallet: grpcWeb.MethodDescriptor<grpc_pb.UnlockWalletRequest, grpc_pb.UnlockWalletReply>;
    unlockWallet(request: grpc_pb.UnlockWalletRequest, metadata?: grpcWeb.Metadata | null): Promise<grpc_pb.UnlockWalletReply>;
    unlockWallet(request: grpc_pb.UnlockWalletRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.UnlockWalletReply) => void): grpcWeb.ClientReadableStream<grpc_pb.UnlockWalletReply>;
}
