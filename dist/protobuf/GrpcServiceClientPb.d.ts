/**
 * @fileoverview gRPC-Web generated client stub for io.bisq.protobuffer
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
    methodInfoGetMethodHelp: grpcWeb.MethodDescriptor<grpc_pb.GetMethodHelpRequest, grpc_pb.GetMethodHelpReply>;
    getMethodHelp(request: grpc_pb.GetMethodHelpRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.GetMethodHelpReply>;
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
    methodInfoGetVersion: grpcWeb.MethodDescriptor<grpc_pb.GetVersionRequest, grpc_pb.GetVersionReply>;
    getVersion(request: grpc_pb.GetVersionRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.GetVersionReply>;
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
    methodInfoAccountExists: grpcWeb.MethodDescriptor<grpc_pb.AccountExistsRequest, grpc_pb.AccountExistsReply>;
    accountExists(request: grpc_pb.AccountExistsRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.AccountExistsReply>;
    accountExists(request: grpc_pb.AccountExistsRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.AccountExistsReply) => void): grpcWeb.ClientReadableStream<grpc_pb.AccountExistsReply>;
    methodInfoIsAccountOpen: grpcWeb.MethodDescriptor<grpc_pb.IsAccountOpenRequest, grpc_pb.IsAccountOpenReply>;
    isAccountOpen(request: grpc_pb.IsAccountOpenRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.IsAccountOpenReply>;
    isAccountOpen(request: grpc_pb.IsAccountOpenRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.IsAccountOpenReply) => void): grpcWeb.ClientReadableStream<grpc_pb.IsAccountOpenReply>;
    methodInfoCreateAccount: grpcWeb.MethodDescriptor<grpc_pb.CreateAccountRequest, grpc_pb.CreateAccountReply>;
    createAccount(request: grpc_pb.CreateAccountRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.CreateAccountReply>;
    createAccount(request: grpc_pb.CreateAccountRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.CreateAccountReply) => void): grpcWeb.ClientReadableStream<grpc_pb.CreateAccountReply>;
    methodInfoOpenAccount: grpcWeb.MethodDescriptor<grpc_pb.OpenAccountRequest, grpc_pb.OpenAccountReply>;
    openAccount(request: grpc_pb.OpenAccountRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.OpenAccountReply>;
    openAccount(request: grpc_pb.OpenAccountRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.OpenAccountReply) => void): grpcWeb.ClientReadableStream<grpc_pb.OpenAccountReply>;
    methodInfoIsAppInitialized: grpcWeb.MethodDescriptor<grpc_pb.IsAppInitializedRequest, grpc_pb.IsAppInitializedReply>;
    isAppInitialized(request: grpc_pb.IsAppInitializedRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.IsAppInitializedReply>;
    isAppInitialized(request: grpc_pb.IsAppInitializedRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.IsAppInitializedReply) => void): grpcWeb.ClientReadableStream<grpc_pb.IsAppInitializedReply>;
    methodInfoChangePassword: grpcWeb.MethodDescriptor<grpc_pb.ChangePasswordRequest, grpc_pb.ChangePasswordReply>;
    changePassword(request: grpc_pb.ChangePasswordRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.ChangePasswordReply>;
    changePassword(request: grpc_pb.ChangePasswordRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.ChangePasswordReply) => void): grpcWeb.ClientReadableStream<grpc_pb.ChangePasswordReply>;
    methodInfoCloseAccount: grpcWeb.MethodDescriptor<grpc_pb.CloseAccountRequest, grpc_pb.CloseAccountReply>;
    closeAccount(request: grpc_pb.CloseAccountRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.CloseAccountReply>;
    closeAccount(request: grpc_pb.CloseAccountRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.CloseAccountReply) => void): grpcWeb.ClientReadableStream<grpc_pb.CloseAccountReply>;
    methodInfoDeleteAccount: grpcWeb.MethodDescriptor<grpc_pb.DeleteAccountRequest, grpc_pb.DeleteAccountReply>;
    deleteAccount(request: grpc_pb.DeleteAccountRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.DeleteAccountReply>;
    deleteAccount(request: grpc_pb.DeleteAccountRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.DeleteAccountReply) => void): grpcWeb.ClientReadableStream<grpc_pb.DeleteAccountReply>;
    methodInfoBackupAccount: grpcWeb.MethodDescriptor<grpc_pb.BackupAccountRequest, grpc_pb.BackupAccountReply>;
    backupAccount(request: grpc_pb.BackupAccountRequest, metadata?: grpcWeb.Metadata): grpcWeb.ClientReadableStream<grpc_pb.BackupAccountReply>;
    methodInfoRestoreAccount: grpcWeb.MethodDescriptor<grpc_pb.RestoreAccountRequest, grpc_pb.RestoreAccountReply>;
    restoreAccount(request: grpc_pb.RestoreAccountRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.RestoreAccountReply>;
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
    methodInfoGetDispute: grpcWeb.MethodDescriptor<grpc_pb.GetDisputeRequest, grpc_pb.GetDisputeReply>;
    getDispute(request: grpc_pb.GetDisputeRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.GetDisputeReply>;
    getDispute(request: grpc_pb.GetDisputeRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.GetDisputeReply) => void): grpcWeb.ClientReadableStream<grpc_pb.GetDisputeReply>;
    methodInfoGetDisputes: grpcWeb.MethodDescriptor<grpc_pb.GetDisputesRequest, grpc_pb.GetDisputesReply>;
    getDisputes(request: grpc_pb.GetDisputesRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.GetDisputesReply>;
    getDisputes(request: grpc_pb.GetDisputesRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.GetDisputesReply) => void): grpcWeb.ClientReadableStream<grpc_pb.GetDisputesReply>;
    methodInfoOpenDispute: grpcWeb.MethodDescriptor<grpc_pb.OpenDisputeRequest, grpc_pb.OpenDisputeReply>;
    openDispute(request: grpc_pb.OpenDisputeRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.OpenDisputeReply>;
    openDispute(request: grpc_pb.OpenDisputeRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.OpenDisputeReply) => void): grpcWeb.ClientReadableStream<grpc_pb.OpenDisputeReply>;
    methodInfoResolveDispute: grpcWeb.MethodDescriptor<grpc_pb.ResolveDisputeRequest, grpc_pb.ResolveDisputeReply>;
    resolveDispute(request: grpc_pb.ResolveDisputeRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.ResolveDisputeReply>;
    resolveDispute(request: grpc_pb.ResolveDisputeRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.ResolveDisputeReply) => void): grpcWeb.ClientReadableStream<grpc_pb.ResolveDisputeReply>;
    methodInfoSendDisputeChatMessage: grpcWeb.MethodDescriptor<grpc_pb.SendDisputeChatMessageRequest, grpc_pb.SendDisputeChatMessageReply>;
    sendDisputeChatMessage(request: grpc_pb.SendDisputeChatMessageRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.SendDisputeChatMessageReply>;
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
    methodInfoRegisterDisputeAgent: grpcWeb.MethodDescriptor<grpc_pb.RegisterDisputeAgentRequest, grpc_pb.RegisterDisputeAgentReply>;
    registerDisputeAgent(request: grpc_pb.RegisterDisputeAgentRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.RegisterDisputeAgentReply>;
    registerDisputeAgent(request: grpc_pb.RegisterDisputeAgentRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.RegisterDisputeAgentReply) => void): grpcWeb.ClientReadableStream<grpc_pb.RegisterDisputeAgentReply>;
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
    methodInfoRegisterNotificationListener: grpcWeb.MethodDescriptor<grpc_pb.RegisterNotificationListenerRequest, grpc_pb.NotificationMessage>;
    registerNotificationListener(request: grpc_pb.RegisterNotificationListenerRequest, metadata?: grpcWeb.Metadata): grpcWeb.ClientReadableStream<grpc_pb.NotificationMessage>;
    methodInfoSendNotification: grpcWeb.MethodDescriptor<grpc_pb.SendNotificationRequest, grpc_pb.SendNotificationReply>;
    sendNotification(request: grpc_pb.SendNotificationRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.SendNotificationReply>;
    sendNotification(request: grpc_pb.SendNotificationRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.SendNotificationReply) => void): grpcWeb.ClientReadableStream<grpc_pb.SendNotificationReply>;
}
export declare class MoneroConnectionsClient {
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
    methodInfoAddConnection: grpcWeb.MethodDescriptor<grpc_pb.AddConnectionRequest, grpc_pb.AddConnectionReply>;
    addConnection(request: grpc_pb.AddConnectionRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.AddConnectionReply>;
    addConnection(request: grpc_pb.AddConnectionRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.AddConnectionReply) => void): grpcWeb.ClientReadableStream<grpc_pb.AddConnectionReply>;
    methodInfoRemoveConnection: grpcWeb.MethodDescriptor<grpc_pb.RemoveConnectionRequest, grpc_pb.RemoveConnectionReply>;
    removeConnection(request: grpc_pb.RemoveConnectionRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.RemoveConnectionReply>;
    removeConnection(request: grpc_pb.RemoveConnectionRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.RemoveConnectionReply) => void): grpcWeb.ClientReadableStream<grpc_pb.RemoveConnectionReply>;
    methodInfoGetConnection: grpcWeb.MethodDescriptor<grpc_pb.GetConnectionRequest, grpc_pb.GetConnectionReply>;
    getConnection(request: grpc_pb.GetConnectionRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.GetConnectionReply>;
    getConnection(request: grpc_pb.GetConnectionRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.GetConnectionReply) => void): grpcWeb.ClientReadableStream<grpc_pb.GetConnectionReply>;
    methodInfoGetConnections: grpcWeb.MethodDescriptor<grpc_pb.GetConnectionsRequest, grpc_pb.GetConnectionsReply>;
    getConnections(request: grpc_pb.GetConnectionsRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.GetConnectionsReply>;
    getConnections(request: grpc_pb.GetConnectionsRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.GetConnectionsReply) => void): grpcWeb.ClientReadableStream<grpc_pb.GetConnectionsReply>;
    methodInfoSetConnection: grpcWeb.MethodDescriptor<grpc_pb.SetConnectionRequest, grpc_pb.SetConnectionReply>;
    setConnection(request: grpc_pb.SetConnectionRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.SetConnectionReply>;
    setConnection(request: grpc_pb.SetConnectionRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.SetConnectionReply) => void): grpcWeb.ClientReadableStream<grpc_pb.SetConnectionReply>;
    methodInfoCheckConnection: grpcWeb.MethodDescriptor<grpc_pb.CheckConnectionRequest, grpc_pb.CheckConnectionReply>;
    checkConnection(request: grpc_pb.CheckConnectionRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.CheckConnectionReply>;
    checkConnection(request: grpc_pb.CheckConnectionRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.CheckConnectionReply) => void): grpcWeb.ClientReadableStream<grpc_pb.CheckConnectionReply>;
    methodInfoCheckConnections: grpcWeb.MethodDescriptor<grpc_pb.CheckConnectionsRequest, grpc_pb.CheckConnectionsReply>;
    checkConnections(request: grpc_pb.CheckConnectionsRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.CheckConnectionsReply>;
    checkConnections(request: grpc_pb.CheckConnectionsRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.CheckConnectionsReply) => void): grpcWeb.ClientReadableStream<grpc_pb.CheckConnectionsReply>;
    methodInfoStartCheckingConnections: grpcWeb.MethodDescriptor<grpc_pb.StartCheckingConnectionsRequest, grpc_pb.StartCheckingConnectionsReply>;
    startCheckingConnections(request: grpc_pb.StartCheckingConnectionsRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.StartCheckingConnectionsReply>;
    startCheckingConnections(request: grpc_pb.StartCheckingConnectionsRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.StartCheckingConnectionsReply) => void): grpcWeb.ClientReadableStream<grpc_pb.StartCheckingConnectionsReply>;
    methodInfoStopCheckingConnections: grpcWeb.MethodDescriptor<grpc_pb.StopCheckingConnectionsRequest, grpc_pb.StopCheckingConnectionsReply>;
    stopCheckingConnections(request: grpc_pb.StopCheckingConnectionsRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.StopCheckingConnectionsReply>;
    stopCheckingConnections(request: grpc_pb.StopCheckingConnectionsRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.StopCheckingConnectionsReply) => void): grpcWeb.ClientReadableStream<grpc_pb.StopCheckingConnectionsReply>;
    methodInfoGetBestAvailableConnection: grpcWeb.MethodDescriptor<grpc_pb.GetBestAvailableConnectionRequest, grpc_pb.GetBestAvailableConnectionReply>;
    getBestAvailableConnection(request: grpc_pb.GetBestAvailableConnectionRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.GetBestAvailableConnectionReply>;
    getBestAvailableConnection(request: grpc_pb.GetBestAvailableConnectionRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.GetBestAvailableConnectionReply) => void): grpcWeb.ClientReadableStream<grpc_pb.GetBestAvailableConnectionReply>;
    methodInfoSetAutoSwitch: grpcWeb.MethodDescriptor<grpc_pb.SetAutoSwitchRequest, grpc_pb.SetAutoSwitchReply>;
    setAutoSwitch(request: grpc_pb.SetAutoSwitchRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.SetAutoSwitchReply>;
    setAutoSwitch(request: grpc_pb.SetAutoSwitchRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.SetAutoSwitchReply) => void): grpcWeb.ClientReadableStream<grpc_pb.SetAutoSwitchReply>;
}
export declare class MoneroNodeClient {
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
    methodInfoIsMoneroNodeRunning: grpcWeb.MethodDescriptor<grpc_pb.IsMoneroNodeRunningRequest, grpc_pb.IsMoneroNodeRunningReply>;
    isMoneroNodeRunning(request: grpc_pb.IsMoneroNodeRunningRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.IsMoneroNodeRunningReply>;
    isMoneroNodeRunning(request: grpc_pb.IsMoneroNodeRunningRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.IsMoneroNodeRunningReply) => void): grpcWeb.ClientReadableStream<grpc_pb.IsMoneroNodeRunningReply>;
    methodInfoGetMoneroNodeSettings: grpcWeb.MethodDescriptor<grpc_pb.GetMoneroNodeSettingsRequest, grpc_pb.GetMoneroNodeSettingsReply>;
    getMoneroNodeSettings(request: grpc_pb.GetMoneroNodeSettingsRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.GetMoneroNodeSettingsReply>;
    getMoneroNodeSettings(request: grpc_pb.GetMoneroNodeSettingsRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.GetMoneroNodeSettingsReply) => void): grpcWeb.ClientReadableStream<grpc_pb.GetMoneroNodeSettingsReply>;
    methodInfoStartMoneroNode: grpcWeb.MethodDescriptor<grpc_pb.StartMoneroNodeRequest, grpc_pb.StartMoneroNodeReply>;
    startMoneroNode(request: grpc_pb.StartMoneroNodeRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.StartMoneroNodeReply>;
    startMoneroNode(request: grpc_pb.StartMoneroNodeRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.StartMoneroNodeReply) => void): grpcWeb.ClientReadableStream<grpc_pb.StartMoneroNodeReply>;
    methodInfoStopMoneroNode: grpcWeb.MethodDescriptor<grpc_pb.StopMoneroNodeRequest, grpc_pb.StopMoneroNodeReply>;
    stopMoneroNode(request: grpc_pb.StopMoneroNodeRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.StopMoneroNodeReply>;
    stopMoneroNode(request: grpc_pb.StopMoneroNodeRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.StopMoneroNodeReply) => void): grpcWeb.ClientReadableStream<grpc_pb.StopMoneroNodeReply>;
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
    methodInfoGetOffer: grpcWeb.MethodDescriptor<grpc_pb.GetOfferRequest, grpc_pb.GetOfferReply>;
    getOffer(request: grpc_pb.GetOfferRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.GetOfferReply>;
    getOffer(request: grpc_pb.GetOfferRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.GetOfferReply) => void): grpcWeb.ClientReadableStream<grpc_pb.GetOfferReply>;
    methodInfoGetMyOffer: grpcWeb.MethodDescriptor<grpc_pb.GetMyOfferRequest, grpc_pb.GetMyOfferReply>;
    getMyOffer(request: grpc_pb.GetMyOfferRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.GetMyOfferReply>;
    getMyOffer(request: grpc_pb.GetMyOfferRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.GetMyOfferReply) => void): grpcWeb.ClientReadableStream<grpc_pb.GetMyOfferReply>;
    methodInfoGetOffers: grpcWeb.MethodDescriptor<grpc_pb.GetOffersRequest, grpc_pb.GetOffersReply>;
    getOffers(request: grpc_pb.GetOffersRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.GetOffersReply>;
    getOffers(request: grpc_pb.GetOffersRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.GetOffersReply) => void): grpcWeb.ClientReadableStream<grpc_pb.GetOffersReply>;
    methodInfoGetMyOffers: grpcWeb.MethodDescriptor<grpc_pb.GetMyOffersRequest, grpc_pb.GetMyOffersReply>;
    getMyOffers(request: grpc_pb.GetMyOffersRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.GetMyOffersReply>;
    getMyOffers(request: grpc_pb.GetMyOffersRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.GetMyOffersReply) => void): grpcWeb.ClientReadableStream<grpc_pb.GetMyOffersReply>;
    methodInfoCreateOffer: grpcWeb.MethodDescriptor<grpc_pb.CreateOfferRequest, grpc_pb.CreateOfferReply>;
    createOffer(request: grpc_pb.CreateOfferRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.CreateOfferReply>;
    createOffer(request: grpc_pb.CreateOfferRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.CreateOfferReply) => void): grpcWeb.ClientReadableStream<grpc_pb.CreateOfferReply>;
    methodInfoCancelOffer: grpcWeb.MethodDescriptor<grpc_pb.CancelOfferRequest, grpc_pb.CancelOfferReply>;
    cancelOffer(request: grpc_pb.CancelOfferRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.CancelOfferReply>;
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
    methodInfoCreatePaymentAccount: grpcWeb.MethodDescriptor<grpc_pb.CreatePaymentAccountRequest, grpc_pb.CreatePaymentAccountReply>;
    createPaymentAccount(request: grpc_pb.CreatePaymentAccountRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.CreatePaymentAccountReply>;
    createPaymentAccount(request: grpc_pb.CreatePaymentAccountRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.CreatePaymentAccountReply) => void): grpcWeb.ClientReadableStream<grpc_pb.CreatePaymentAccountReply>;
    methodInfoGetPaymentAccounts: grpcWeb.MethodDescriptor<grpc_pb.GetPaymentAccountsRequest, grpc_pb.GetPaymentAccountsReply>;
    getPaymentAccounts(request: grpc_pb.GetPaymentAccountsRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.GetPaymentAccountsReply>;
    getPaymentAccounts(request: grpc_pb.GetPaymentAccountsRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.GetPaymentAccountsReply) => void): grpcWeb.ClientReadableStream<grpc_pb.GetPaymentAccountsReply>;
    methodInfoGetPaymentMethods: grpcWeb.MethodDescriptor<grpc_pb.GetPaymentMethodsRequest, grpc_pb.GetPaymentMethodsReply>;
    getPaymentMethods(request: grpc_pb.GetPaymentMethodsRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.GetPaymentMethodsReply>;
    getPaymentMethods(request: grpc_pb.GetPaymentMethodsRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.GetPaymentMethodsReply) => void): grpcWeb.ClientReadableStream<grpc_pb.GetPaymentMethodsReply>;
    methodInfoGetPaymentAccountForm: grpcWeb.MethodDescriptor<grpc_pb.GetPaymentAccountFormRequest, grpc_pb.GetPaymentAccountFormReply>;
    getPaymentAccountForm(request: grpc_pb.GetPaymentAccountFormRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.GetPaymentAccountFormReply>;
    getPaymentAccountForm(request: grpc_pb.GetPaymentAccountFormRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.GetPaymentAccountFormReply) => void): grpcWeb.ClientReadableStream<grpc_pb.GetPaymentAccountFormReply>;
    methodInfoCreateCryptoCurrencyPaymentAccount: grpcWeb.MethodDescriptor<grpc_pb.CreateCryptoCurrencyPaymentAccountRequest, grpc_pb.CreateCryptoCurrencyPaymentAccountReply>;
    createCryptoCurrencyPaymentAccount(request: grpc_pb.CreateCryptoCurrencyPaymentAccountRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.CreateCryptoCurrencyPaymentAccountReply>;
    createCryptoCurrencyPaymentAccount(request: grpc_pb.CreateCryptoCurrencyPaymentAccountRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.CreateCryptoCurrencyPaymentAccountReply) => void): grpcWeb.ClientReadableStream<grpc_pb.CreateCryptoCurrencyPaymentAccountReply>;
    methodInfoGetCryptoCurrencyPaymentMethods: grpcWeb.MethodDescriptor<grpc_pb.GetCryptoCurrencyPaymentMethodsRequest, grpc_pb.GetCryptoCurrencyPaymentMethodsReply>;
    getCryptoCurrencyPaymentMethods(request: grpc_pb.GetCryptoCurrencyPaymentMethodsRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.GetCryptoCurrencyPaymentMethodsReply>;
    getCryptoCurrencyPaymentMethods(request: grpc_pb.GetCryptoCurrencyPaymentMethodsRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.GetCryptoCurrencyPaymentMethodsReply) => void): grpcWeb.ClientReadableStream<grpc_pb.GetCryptoCurrencyPaymentMethodsReply>;
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
    methodInfoGetMarketPrice: grpcWeb.MethodDescriptor<grpc_pb.MarketPriceRequest, grpc_pb.MarketPriceReply>;
    getMarketPrice(request: grpc_pb.MarketPriceRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.MarketPriceReply>;
    getMarketPrice(request: grpc_pb.MarketPriceRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.MarketPriceReply) => void): grpcWeb.ClientReadableStream<grpc_pb.MarketPriceReply>;
    methodInfoGetMarketPrices: grpcWeb.MethodDescriptor<grpc_pb.MarketPricesRequest, grpc_pb.MarketPricesReply>;
    getMarketPrices(request: grpc_pb.MarketPricesRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.MarketPricesReply>;
    getMarketPrices(request: grpc_pb.MarketPricesRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.MarketPricesReply) => void): grpcWeb.ClientReadableStream<grpc_pb.MarketPricesReply>;
    methodInfoGetMarketDepth: grpcWeb.MethodDescriptor<grpc_pb.MarketDepthRequest, grpc_pb.MarketDepthReply>;
    getMarketDepth(request: grpc_pb.MarketDepthRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.MarketDepthReply>;
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
    methodInfoGetTradeStatistics: grpcWeb.MethodDescriptor<grpc_pb.GetTradeStatisticsRequest, grpc_pb.GetTradeStatisticsReply>;
    getTradeStatistics(request: grpc_pb.GetTradeStatisticsRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.GetTradeStatisticsReply>;
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
    methodInfoStop: grpcWeb.MethodDescriptor<grpc_pb.StopRequest, grpc_pb.StopReply>;
    stop(request: grpc_pb.StopRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.StopReply>;
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
    methodInfoGetTrade: grpcWeb.MethodDescriptor<grpc_pb.GetTradeRequest, grpc_pb.GetTradeReply>;
    getTrade(request: grpc_pb.GetTradeRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.GetTradeReply>;
    getTrade(request: grpc_pb.GetTradeRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.GetTradeReply) => void): grpcWeb.ClientReadableStream<grpc_pb.GetTradeReply>;
    methodInfoGetTrades: grpcWeb.MethodDescriptor<grpc_pb.GetTradesRequest, grpc_pb.GetTradesReply>;
    getTrades(request: grpc_pb.GetTradesRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.GetTradesReply>;
    getTrades(request: grpc_pb.GetTradesRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.GetTradesReply) => void): grpcWeb.ClientReadableStream<grpc_pb.GetTradesReply>;
    methodInfoTakeOffer: grpcWeb.MethodDescriptor<grpc_pb.TakeOfferRequest, grpc_pb.TakeOfferReply>;
    takeOffer(request: grpc_pb.TakeOfferRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.TakeOfferReply>;
    takeOffer(request: grpc_pb.TakeOfferRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.TakeOfferReply) => void): grpcWeb.ClientReadableStream<grpc_pb.TakeOfferReply>;
    methodInfoConfirmPaymentStarted: grpcWeb.MethodDescriptor<grpc_pb.ConfirmPaymentStartedRequest, grpc_pb.ConfirmPaymentStartedReply>;
    confirmPaymentStarted(request: grpc_pb.ConfirmPaymentStartedRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.ConfirmPaymentStartedReply>;
    confirmPaymentStarted(request: grpc_pb.ConfirmPaymentStartedRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.ConfirmPaymentStartedReply) => void): grpcWeb.ClientReadableStream<grpc_pb.ConfirmPaymentStartedReply>;
    methodInfoConfirmPaymentReceived: grpcWeb.MethodDescriptor<grpc_pb.ConfirmPaymentReceivedRequest, grpc_pb.ConfirmPaymentReceivedReply>;
    confirmPaymentReceived(request: grpc_pb.ConfirmPaymentReceivedRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.ConfirmPaymentReceivedReply>;
    confirmPaymentReceived(request: grpc_pb.ConfirmPaymentReceivedRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.ConfirmPaymentReceivedReply) => void): grpcWeb.ClientReadableStream<grpc_pb.ConfirmPaymentReceivedReply>;
    methodInfoKeepFunds: grpcWeb.MethodDescriptor<grpc_pb.KeepFundsRequest, grpc_pb.KeepFundsReply>;
    keepFunds(request: grpc_pb.KeepFundsRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.KeepFundsReply>;
    keepFunds(request: grpc_pb.KeepFundsRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.KeepFundsReply) => void): grpcWeb.ClientReadableStream<grpc_pb.KeepFundsReply>;
    methodInfoWithdrawFunds: grpcWeb.MethodDescriptor<grpc_pb.WithdrawFundsRequest, grpc_pb.WithdrawFundsReply>;
    withdrawFunds(request: grpc_pb.WithdrawFundsRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.WithdrawFundsReply>;
    withdrawFunds(request: grpc_pb.WithdrawFundsRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.WithdrawFundsReply) => void): grpcWeb.ClientReadableStream<grpc_pb.WithdrawFundsReply>;
    methodInfoGetChatMessages: grpcWeb.MethodDescriptor<grpc_pb.GetChatMessagesRequest, grpc_pb.GetChatMessagesReply>;
    getChatMessages(request: grpc_pb.GetChatMessagesRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.GetChatMessagesReply>;
    getChatMessages(request: grpc_pb.GetChatMessagesRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.GetChatMessagesReply) => void): grpcWeb.ClientReadableStream<grpc_pb.GetChatMessagesReply>;
    methodInfoSendChatMessage: grpcWeb.MethodDescriptor<grpc_pb.SendChatMessageRequest, grpc_pb.SendChatMessageReply>;
    sendChatMessage(request: grpc_pb.SendChatMessageRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.SendChatMessageReply>;
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
    methodInfoGetBalances: grpcWeb.MethodDescriptor<grpc_pb.GetBalancesRequest, grpc_pb.GetBalancesReply>;
    getBalances(request: grpc_pb.GetBalancesRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.GetBalancesReply>;
    getBalances(request: grpc_pb.GetBalancesRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.GetBalancesReply) => void): grpcWeb.ClientReadableStream<grpc_pb.GetBalancesReply>;
    methodInfoGetNewDepositAddress: grpcWeb.MethodDescriptor<grpc_pb.GetNewDepositAddressRequest, grpc_pb.GetNewDepositAddressReply>;
    getNewDepositAddress(request: grpc_pb.GetNewDepositAddressRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.GetNewDepositAddressReply>;
    getNewDepositAddress(request: grpc_pb.GetNewDepositAddressRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.GetNewDepositAddressReply) => void): grpcWeb.ClientReadableStream<grpc_pb.GetNewDepositAddressReply>;
    methodInfoGetXmrTxs: grpcWeb.MethodDescriptor<grpc_pb.GetXmrTxsRequest, grpc_pb.GetXmrTxsReply>;
    getXmrTxs(request: grpc_pb.GetXmrTxsRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.GetXmrTxsReply>;
    getXmrTxs(request: grpc_pb.GetXmrTxsRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.GetXmrTxsReply) => void): grpcWeb.ClientReadableStream<grpc_pb.GetXmrTxsReply>;
    methodInfoCreateXmrTx: grpcWeb.MethodDescriptor<grpc_pb.CreateXmrTxRequest, grpc_pb.CreateXmrTxReply>;
    createXmrTx(request: grpc_pb.CreateXmrTxRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.CreateXmrTxReply>;
    createXmrTx(request: grpc_pb.CreateXmrTxRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.CreateXmrTxReply) => void): grpcWeb.ClientReadableStream<grpc_pb.CreateXmrTxReply>;
    methodInforelayXmrTx: grpcWeb.MethodDescriptor<grpc_pb.RelayXmrTxRequest, grpc_pb.RelayXmrTxReply>;
    relayXmrTx(request: grpc_pb.RelayXmrTxRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.RelayXmrTxReply>;
    relayXmrTx(request: grpc_pb.RelayXmrTxRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.RelayXmrTxReply) => void): grpcWeb.ClientReadableStream<grpc_pb.RelayXmrTxReply>;
    methodInfoGetAddressBalance: grpcWeb.MethodDescriptor<grpc_pb.GetAddressBalanceRequest, grpc_pb.GetAddressBalanceReply>;
    getAddressBalance(request: grpc_pb.GetAddressBalanceRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.GetAddressBalanceReply>;
    getAddressBalance(request: grpc_pb.GetAddressBalanceRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.GetAddressBalanceReply) => void): grpcWeb.ClientReadableStream<grpc_pb.GetAddressBalanceReply>;
    methodInfoSendBtc: grpcWeb.MethodDescriptor<grpc_pb.SendBtcRequest, grpc_pb.SendBtcReply>;
    sendBtc(request: grpc_pb.SendBtcRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.SendBtcReply>;
    sendBtc(request: grpc_pb.SendBtcRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.SendBtcReply) => void): grpcWeb.ClientReadableStream<grpc_pb.SendBtcReply>;
    methodInfoGetTxFeeRate: grpcWeb.MethodDescriptor<grpc_pb.GetTxFeeRateRequest, grpc_pb.GetTxFeeRateReply>;
    getTxFeeRate(request: grpc_pb.GetTxFeeRateRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.GetTxFeeRateReply>;
    getTxFeeRate(request: grpc_pb.GetTxFeeRateRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.GetTxFeeRateReply) => void): grpcWeb.ClientReadableStream<grpc_pb.GetTxFeeRateReply>;
    methodInfoSetTxFeeRatePreference: grpcWeb.MethodDescriptor<grpc_pb.SetTxFeeRatePreferenceRequest, grpc_pb.SetTxFeeRatePreferenceReply>;
    setTxFeeRatePreference(request: grpc_pb.SetTxFeeRatePreferenceRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.SetTxFeeRatePreferenceReply>;
    setTxFeeRatePreference(request: grpc_pb.SetTxFeeRatePreferenceRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.SetTxFeeRatePreferenceReply) => void): grpcWeb.ClientReadableStream<grpc_pb.SetTxFeeRatePreferenceReply>;
    methodInfoUnsetTxFeeRatePreference: grpcWeb.MethodDescriptor<grpc_pb.UnsetTxFeeRatePreferenceRequest, grpc_pb.UnsetTxFeeRatePreferenceReply>;
    unsetTxFeeRatePreference(request: grpc_pb.UnsetTxFeeRatePreferenceRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.UnsetTxFeeRatePreferenceReply>;
    unsetTxFeeRatePreference(request: grpc_pb.UnsetTxFeeRatePreferenceRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.UnsetTxFeeRatePreferenceReply) => void): grpcWeb.ClientReadableStream<grpc_pb.UnsetTxFeeRatePreferenceReply>;
    methodInfoGetTransaction: grpcWeb.MethodDescriptor<grpc_pb.GetTransactionRequest, grpc_pb.GetTransactionReply>;
    getTransaction(request: grpc_pb.GetTransactionRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.GetTransactionReply>;
    getTransaction(request: grpc_pb.GetTransactionRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.GetTransactionReply) => void): grpcWeb.ClientReadableStream<grpc_pb.GetTransactionReply>;
    methodInfoGetFundingAddresses: grpcWeb.MethodDescriptor<grpc_pb.GetFundingAddressesRequest, grpc_pb.GetFundingAddressesReply>;
    getFundingAddresses(request: grpc_pb.GetFundingAddressesRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.GetFundingAddressesReply>;
    getFundingAddresses(request: grpc_pb.GetFundingAddressesRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.GetFundingAddressesReply) => void): grpcWeb.ClientReadableStream<grpc_pb.GetFundingAddressesReply>;
    methodInfoSetWalletPassword: grpcWeb.MethodDescriptor<grpc_pb.SetWalletPasswordRequest, grpc_pb.SetWalletPasswordReply>;
    setWalletPassword(request: grpc_pb.SetWalletPasswordRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.SetWalletPasswordReply>;
    setWalletPassword(request: grpc_pb.SetWalletPasswordRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.SetWalletPasswordReply) => void): grpcWeb.ClientReadableStream<grpc_pb.SetWalletPasswordReply>;
    methodInfoRemoveWalletPassword: grpcWeb.MethodDescriptor<grpc_pb.RemoveWalletPasswordRequest, grpc_pb.RemoveWalletPasswordReply>;
    removeWalletPassword(request: grpc_pb.RemoveWalletPasswordRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.RemoveWalletPasswordReply>;
    removeWalletPassword(request: grpc_pb.RemoveWalletPasswordRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.RemoveWalletPasswordReply) => void): grpcWeb.ClientReadableStream<grpc_pb.RemoveWalletPasswordReply>;
    methodInfoLockWallet: grpcWeb.MethodDescriptor<grpc_pb.LockWalletRequest, grpc_pb.LockWalletReply>;
    lockWallet(request: grpc_pb.LockWalletRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.LockWalletReply>;
    lockWallet(request: grpc_pb.LockWalletRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.LockWalletReply) => void): grpcWeb.ClientReadableStream<grpc_pb.LockWalletReply>;
    methodInfoUnlockWallet: grpcWeb.MethodDescriptor<grpc_pb.UnlockWalletRequest, grpc_pb.UnlockWalletReply>;
    unlockWallet(request: grpc_pb.UnlockWalletRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.UnlockWalletReply>;
    unlockWallet(request: grpc_pb.UnlockWalletRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.UnlockWalletReply) => void): grpcWeb.ClientReadableStream<grpc_pb.UnlockWalletReply>;
}
