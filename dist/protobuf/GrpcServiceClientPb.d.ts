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
    methodDescriptorGetMethodHelp: any;
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
    methodDescriptorGetVersion: any;
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
    methodDescriptorAccountExists: any;
    accountExists(request: grpc_pb.AccountExistsRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.AccountExistsReply>;
    accountExists(request: grpc_pb.AccountExistsRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.AccountExistsReply) => void): grpcWeb.ClientReadableStream<grpc_pb.AccountExistsReply>;
    methodDescriptorIsAccountOpen: any;
    isAccountOpen(request: grpc_pb.IsAccountOpenRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.IsAccountOpenReply>;
    isAccountOpen(request: grpc_pb.IsAccountOpenRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.IsAccountOpenReply) => void): grpcWeb.ClientReadableStream<grpc_pb.IsAccountOpenReply>;
    methodDescriptorCreateAccount: any;
    createAccount(request: grpc_pb.CreateAccountRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.CreateAccountReply>;
    createAccount(request: grpc_pb.CreateAccountRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.CreateAccountReply) => void): grpcWeb.ClientReadableStream<grpc_pb.CreateAccountReply>;
    methodDescriptorOpenAccount: any;
    openAccount(request: grpc_pb.OpenAccountRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.OpenAccountReply>;
    openAccount(request: grpc_pb.OpenAccountRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.OpenAccountReply) => void): grpcWeb.ClientReadableStream<grpc_pb.OpenAccountReply>;
    methodDescriptorIsAppInitialized: any;
    isAppInitialized(request: grpc_pb.IsAppInitializedRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.IsAppInitializedReply>;
    isAppInitialized(request: grpc_pb.IsAppInitializedRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.IsAppInitializedReply) => void): grpcWeb.ClientReadableStream<grpc_pb.IsAppInitializedReply>;
    methodDescriptorChangePassword: any;
    changePassword(request: grpc_pb.ChangePasswordRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.ChangePasswordReply>;
    changePassword(request: grpc_pb.ChangePasswordRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.ChangePasswordReply) => void): grpcWeb.ClientReadableStream<grpc_pb.ChangePasswordReply>;
    methodDescriptorCloseAccount: any;
    closeAccount(request: grpc_pb.CloseAccountRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.CloseAccountReply>;
    closeAccount(request: grpc_pb.CloseAccountRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.CloseAccountReply) => void): grpcWeb.ClientReadableStream<grpc_pb.CloseAccountReply>;
    methodDescriptorDeleteAccount: any;
    deleteAccount(request: grpc_pb.DeleteAccountRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.DeleteAccountReply>;
    deleteAccount(request: grpc_pb.DeleteAccountRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.DeleteAccountReply) => void): grpcWeb.ClientReadableStream<grpc_pb.DeleteAccountReply>;
    methodDescriptorBackupAccount: any;
    backupAccount(request: grpc_pb.BackupAccountRequest, metadata?: grpcWeb.Metadata): grpcWeb.ClientReadableStream<grpc_pb.BackupAccountReply>;
    methodDescriptorRestoreAccount: any;
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
    methodDescriptorGetDispute: any;
    getDispute(request: grpc_pb.GetDisputeRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.GetDisputeReply>;
    getDispute(request: grpc_pb.GetDisputeRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.GetDisputeReply) => void): grpcWeb.ClientReadableStream<grpc_pb.GetDisputeReply>;
    methodDescriptorGetDisputes: any;
    getDisputes(request: grpc_pb.GetDisputesRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.GetDisputesReply>;
    getDisputes(request: grpc_pb.GetDisputesRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.GetDisputesReply) => void): grpcWeb.ClientReadableStream<grpc_pb.GetDisputesReply>;
    methodDescriptorOpenDispute: any;
    openDispute(request: grpc_pb.OpenDisputeRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.OpenDisputeReply>;
    openDispute(request: grpc_pb.OpenDisputeRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.OpenDisputeReply) => void): grpcWeb.ClientReadableStream<grpc_pb.OpenDisputeReply>;
    methodDescriptorResolveDispute: any;
    resolveDispute(request: grpc_pb.ResolveDisputeRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.ResolveDisputeReply>;
    resolveDispute(request: grpc_pb.ResolveDisputeRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.ResolveDisputeReply) => void): grpcWeb.ClientReadableStream<grpc_pb.ResolveDisputeReply>;
    methodDescriptorSendDisputeChatMessage: any;
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
    methodDescriptorRegisterDisputeAgent: any;
    registerDisputeAgent(request: grpc_pb.RegisterDisputeAgentRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.RegisterDisputeAgentReply>;
    registerDisputeAgent(request: grpc_pb.RegisterDisputeAgentRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.RegisterDisputeAgentReply) => void): grpcWeb.ClientReadableStream<grpc_pb.RegisterDisputeAgentReply>;
    methodDescriptorUnregisterDisputeAgent: any;
    unregisterDisputeAgent(request: grpc_pb.UnregisterDisputeAgentRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.UnregisterDisputeAgentReply>;
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
    methodDescriptorRegisterNotificationListener: any;
    registerNotificationListener(request: grpc_pb.RegisterNotificationListenerRequest, metadata?: grpcWeb.Metadata): grpcWeb.ClientReadableStream<grpc_pb.NotificationMessage>;
    methodDescriptorSendNotification: any;
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
    methodDescriptorAddConnection: any;
    addConnection(request: grpc_pb.AddConnectionRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.AddConnectionReply>;
    addConnection(request: grpc_pb.AddConnectionRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.AddConnectionReply) => void): grpcWeb.ClientReadableStream<grpc_pb.AddConnectionReply>;
    methodDescriptorRemoveConnection: any;
    removeConnection(request: grpc_pb.RemoveConnectionRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.RemoveConnectionReply>;
    removeConnection(request: grpc_pb.RemoveConnectionRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.RemoveConnectionReply) => void): grpcWeb.ClientReadableStream<grpc_pb.RemoveConnectionReply>;
    methodDescriptorGetConnection: any;
    getConnection(request: grpc_pb.GetConnectionRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.GetConnectionReply>;
    getConnection(request: grpc_pb.GetConnectionRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.GetConnectionReply) => void): grpcWeb.ClientReadableStream<grpc_pb.GetConnectionReply>;
    methodDescriptorGetConnections: any;
    getConnections(request: grpc_pb.GetConnectionsRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.GetConnectionsReply>;
    getConnections(request: grpc_pb.GetConnectionsRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.GetConnectionsReply) => void): grpcWeb.ClientReadableStream<grpc_pb.GetConnectionsReply>;
    methodDescriptorSetConnection: any;
    setConnection(request: grpc_pb.SetConnectionRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.SetConnectionReply>;
    setConnection(request: grpc_pb.SetConnectionRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.SetConnectionReply) => void): grpcWeb.ClientReadableStream<grpc_pb.SetConnectionReply>;
    methodDescriptorCheckConnection: any;
    checkConnection(request: grpc_pb.CheckConnectionRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.CheckConnectionReply>;
    checkConnection(request: grpc_pb.CheckConnectionRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.CheckConnectionReply) => void): grpcWeb.ClientReadableStream<grpc_pb.CheckConnectionReply>;
    methodDescriptorCheckConnections: any;
    checkConnections(request: grpc_pb.CheckConnectionsRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.CheckConnectionsReply>;
    checkConnections(request: grpc_pb.CheckConnectionsRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.CheckConnectionsReply) => void): grpcWeb.ClientReadableStream<grpc_pb.CheckConnectionsReply>;
    methodDescriptorStartCheckingConnections: any;
    startCheckingConnections(request: grpc_pb.StartCheckingConnectionsRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.StartCheckingConnectionsReply>;
    startCheckingConnections(request: grpc_pb.StartCheckingConnectionsRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.StartCheckingConnectionsReply) => void): grpcWeb.ClientReadableStream<grpc_pb.StartCheckingConnectionsReply>;
    methodDescriptorStopCheckingConnections: any;
    stopCheckingConnections(request: grpc_pb.StopCheckingConnectionsRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.StopCheckingConnectionsReply>;
    stopCheckingConnections(request: grpc_pb.StopCheckingConnectionsRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.StopCheckingConnectionsReply) => void): grpcWeb.ClientReadableStream<grpc_pb.StopCheckingConnectionsReply>;
    methodDescriptorGetBestAvailableConnection: any;
    getBestAvailableConnection(request: grpc_pb.GetBestAvailableConnectionRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.GetBestAvailableConnectionReply>;
    getBestAvailableConnection(request: grpc_pb.GetBestAvailableConnectionRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.GetBestAvailableConnectionReply) => void): grpcWeb.ClientReadableStream<grpc_pb.GetBestAvailableConnectionReply>;
    methodDescriptorSetAutoSwitch: any;
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
    methodDescriptorIsMoneroNodeOnline: any;
    isMoneroNodeOnline(request: grpc_pb.IsMoneroNodeOnlineRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.IsMoneroNodeOnlineReply>;
    isMoneroNodeOnline(request: grpc_pb.IsMoneroNodeOnlineRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.IsMoneroNodeOnlineReply) => void): grpcWeb.ClientReadableStream<grpc_pb.IsMoneroNodeOnlineReply>;
    methodDescriptorGetMoneroNodeSettings: any;
    getMoneroNodeSettings(request: grpc_pb.GetMoneroNodeSettingsRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.GetMoneroNodeSettingsReply>;
    getMoneroNodeSettings(request: grpc_pb.GetMoneroNodeSettingsRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.GetMoneroNodeSettingsReply) => void): grpcWeb.ClientReadableStream<grpc_pb.GetMoneroNodeSettingsReply>;
    methodDescriptorStartMoneroNode: any;
    startMoneroNode(request: grpc_pb.StartMoneroNodeRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.StartMoneroNodeReply>;
    startMoneroNode(request: grpc_pb.StartMoneroNodeRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.StartMoneroNodeReply) => void): grpcWeb.ClientReadableStream<grpc_pb.StartMoneroNodeReply>;
    methodDescriptorStopMoneroNode: any;
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
    methodDescriptorGetOffer: any;
    getOffer(request: grpc_pb.GetOfferRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.GetOfferReply>;
    getOffer(request: grpc_pb.GetOfferRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.GetOfferReply) => void): grpcWeb.ClientReadableStream<grpc_pb.GetOfferReply>;
    methodDescriptorGetMyOffer: any;
    getMyOffer(request: grpc_pb.GetMyOfferRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.GetMyOfferReply>;
    getMyOffer(request: grpc_pb.GetMyOfferRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.GetMyOfferReply) => void): grpcWeb.ClientReadableStream<grpc_pb.GetMyOfferReply>;
    methodDescriptorGetOffers: any;
    getOffers(request: grpc_pb.GetOffersRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.GetOffersReply>;
    getOffers(request: grpc_pb.GetOffersRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.GetOffersReply) => void): grpcWeb.ClientReadableStream<grpc_pb.GetOffersReply>;
    methodDescriptorGetMyOffers: any;
    getMyOffers(request: grpc_pb.GetMyOffersRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.GetMyOffersReply>;
    getMyOffers(request: grpc_pb.GetMyOffersRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.GetMyOffersReply) => void): grpcWeb.ClientReadableStream<grpc_pb.GetMyOffersReply>;
    methodDescriptorPostOffer: any;
    postOffer(request: grpc_pb.PostOfferRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.PostOfferReply>;
    postOffer(request: grpc_pb.PostOfferRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.PostOfferReply) => void): grpcWeb.ClientReadableStream<grpc_pb.PostOfferReply>;
    methodDescriptorCancelOffer: any;
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
    methodDescriptorCreatePaymentAccount: any;
    createPaymentAccount(request: grpc_pb.CreatePaymentAccountRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.CreatePaymentAccountReply>;
    createPaymentAccount(request: grpc_pb.CreatePaymentAccountRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.CreatePaymentAccountReply) => void): grpcWeb.ClientReadableStream<grpc_pb.CreatePaymentAccountReply>;
    methodDescriptorGetPaymentAccounts: any;
    getPaymentAccounts(request: grpc_pb.GetPaymentAccountsRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.GetPaymentAccountsReply>;
    getPaymentAccounts(request: grpc_pb.GetPaymentAccountsRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.GetPaymentAccountsReply) => void): grpcWeb.ClientReadableStream<grpc_pb.GetPaymentAccountsReply>;
    methodDescriptorGetPaymentMethods: any;
    getPaymentMethods(request: grpc_pb.GetPaymentMethodsRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.GetPaymentMethodsReply>;
    getPaymentMethods(request: grpc_pb.GetPaymentMethodsRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.GetPaymentMethodsReply) => void): grpcWeb.ClientReadableStream<grpc_pb.GetPaymentMethodsReply>;
    methodDescriptorGetPaymentAccountForm: any;
    getPaymentAccountForm(request: grpc_pb.GetPaymentAccountFormRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.GetPaymentAccountFormReply>;
    getPaymentAccountForm(request: grpc_pb.GetPaymentAccountFormRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.GetPaymentAccountFormReply) => void): grpcWeb.ClientReadableStream<grpc_pb.GetPaymentAccountFormReply>;
    methodDescriptorGetPaymentAccountFormAsJson: any;
    getPaymentAccountFormAsJson(request: grpc_pb.GetPaymentAccountFormAsJsonRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.GetPaymentAccountFormAsJsonReply>;
    getPaymentAccountFormAsJson(request: grpc_pb.GetPaymentAccountFormAsJsonRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.GetPaymentAccountFormAsJsonReply) => void): grpcWeb.ClientReadableStream<grpc_pb.GetPaymentAccountFormAsJsonReply>;
    methodDescriptorCreateCryptoCurrencyPaymentAccount: any;
    createCryptoCurrencyPaymentAccount(request: grpc_pb.CreateCryptoCurrencyPaymentAccountRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.CreateCryptoCurrencyPaymentAccountReply>;
    createCryptoCurrencyPaymentAccount(request: grpc_pb.CreateCryptoCurrencyPaymentAccountRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.CreateCryptoCurrencyPaymentAccountReply) => void): grpcWeb.ClientReadableStream<grpc_pb.CreateCryptoCurrencyPaymentAccountReply>;
    methodDescriptorGetCryptoCurrencyPaymentMethods: any;
    getCryptoCurrencyPaymentMethods(request: grpc_pb.GetCryptoCurrencyPaymentMethodsRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.GetCryptoCurrencyPaymentMethodsReply>;
    getCryptoCurrencyPaymentMethods(request: grpc_pb.GetCryptoCurrencyPaymentMethodsRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.GetCryptoCurrencyPaymentMethodsReply) => void): grpcWeb.ClientReadableStream<grpc_pb.GetCryptoCurrencyPaymentMethodsReply>;
    methodDescriptorValidateFormField: any;
    validateFormField(request: grpc_pb.ValidateFormFieldRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.ValidateFormFieldReply>;
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
    methodDescriptorGetMarketPrice: any;
    getMarketPrice(request: grpc_pb.MarketPriceRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.MarketPriceReply>;
    getMarketPrice(request: grpc_pb.MarketPriceRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.MarketPriceReply) => void): grpcWeb.ClientReadableStream<grpc_pb.MarketPriceReply>;
    methodDescriptorGetMarketPrices: any;
    getMarketPrices(request: grpc_pb.MarketPricesRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.MarketPricesReply>;
    getMarketPrices(request: grpc_pb.MarketPricesRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.MarketPricesReply) => void): grpcWeb.ClientReadableStream<grpc_pb.MarketPricesReply>;
    methodDescriptorGetMarketDepth: any;
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
    methodDescriptorGetTradeStatistics: any;
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
    methodDescriptorStop: any;
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
    methodDescriptorGetTrade: any;
    getTrade(request: grpc_pb.GetTradeRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.GetTradeReply>;
    getTrade(request: grpc_pb.GetTradeRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.GetTradeReply) => void): grpcWeb.ClientReadableStream<grpc_pb.GetTradeReply>;
    methodDescriptorGetTrades: any;
    getTrades(request: grpc_pb.GetTradesRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.GetTradesReply>;
    getTrades(request: grpc_pb.GetTradesRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.GetTradesReply) => void): grpcWeb.ClientReadableStream<grpc_pb.GetTradesReply>;
    methodDescriptorTakeOffer: any;
    takeOffer(request: grpc_pb.TakeOfferRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.TakeOfferReply>;
    takeOffer(request: grpc_pb.TakeOfferRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.TakeOfferReply) => void): grpcWeb.ClientReadableStream<grpc_pb.TakeOfferReply>;
    methodDescriptorConfirmPaymentSent: any;
    confirmPaymentSent(request: grpc_pb.ConfirmPaymentSentRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.ConfirmPaymentSentReply>;
    confirmPaymentSent(request: grpc_pb.ConfirmPaymentSentRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.ConfirmPaymentSentReply) => void): grpcWeb.ClientReadableStream<grpc_pb.ConfirmPaymentSentReply>;
    methodDescriptorConfirmPaymentReceived: any;
    confirmPaymentReceived(request: grpc_pb.ConfirmPaymentReceivedRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.ConfirmPaymentReceivedReply>;
    confirmPaymentReceived(request: grpc_pb.ConfirmPaymentReceivedRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.ConfirmPaymentReceivedReply) => void): grpcWeb.ClientReadableStream<grpc_pb.ConfirmPaymentReceivedReply>;
    methodDescriptorCompleteTrade: any;
    completeTrade(request: grpc_pb.CompleteTradeRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.CompleteTradeReply>;
    completeTrade(request: grpc_pb.CompleteTradeRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.CompleteTradeReply) => void): grpcWeb.ClientReadableStream<grpc_pb.CompleteTradeReply>;
    methodDescriptorWithdrawFunds: any;
    withdrawFunds(request: grpc_pb.WithdrawFundsRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.WithdrawFundsReply>;
    withdrawFunds(request: grpc_pb.WithdrawFundsRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.WithdrawFundsReply) => void): grpcWeb.ClientReadableStream<grpc_pb.WithdrawFundsReply>;
    methodDescriptorGetChatMessages: any;
    getChatMessages(request: grpc_pb.GetChatMessagesRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.GetChatMessagesReply>;
    getChatMessages(request: grpc_pb.GetChatMessagesRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.GetChatMessagesReply) => void): grpcWeb.ClientReadableStream<grpc_pb.GetChatMessagesReply>;
    methodDescriptorSendChatMessage: any;
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
    methodDescriptorGetBalances: any;
    getBalances(request: grpc_pb.GetBalancesRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.GetBalancesReply>;
    getBalances(request: grpc_pb.GetBalancesRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.GetBalancesReply) => void): grpcWeb.ClientReadableStream<grpc_pb.GetBalancesReply>;
    methodDescriptorGetXmrSeed: any;
    getXmrSeed(request: grpc_pb.GetXmrSeedRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.GetXmrSeedReply>;
    getXmrSeed(request: grpc_pb.GetXmrSeedRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.GetXmrSeedReply) => void): grpcWeb.ClientReadableStream<grpc_pb.GetXmrSeedReply>;
    methodDescriptorGetXmrPrimaryAddress: any;
    getXmrPrimaryAddress(request: grpc_pb.GetXmrPrimaryAddressRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.GetXmrPrimaryAddressReply>;
    getXmrPrimaryAddress(request: grpc_pb.GetXmrPrimaryAddressRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.GetXmrPrimaryAddressReply) => void): grpcWeb.ClientReadableStream<grpc_pb.GetXmrPrimaryAddressReply>;
    methodDescriptorGetXmrNewSubaddress: any;
    getXmrNewSubaddress(request: grpc_pb.GetXmrNewSubaddressRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.GetXmrNewSubaddressReply>;
    getXmrNewSubaddress(request: grpc_pb.GetXmrNewSubaddressRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.GetXmrNewSubaddressReply) => void): grpcWeb.ClientReadableStream<grpc_pb.GetXmrNewSubaddressReply>;
    methodDescriptorGetXmrTxs: any;
    getXmrTxs(request: grpc_pb.GetXmrTxsRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.GetXmrTxsReply>;
    getXmrTxs(request: grpc_pb.GetXmrTxsRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.GetXmrTxsReply) => void): grpcWeb.ClientReadableStream<grpc_pb.GetXmrTxsReply>;
    methodDescriptorCreateXmrTx: any;
    createXmrTx(request: grpc_pb.CreateXmrTxRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.CreateXmrTxReply>;
    createXmrTx(request: grpc_pb.CreateXmrTxRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.CreateXmrTxReply) => void): grpcWeb.ClientReadableStream<grpc_pb.CreateXmrTxReply>;
    methodDescriptorrelayXmrTx: any;
    relayXmrTx(request: grpc_pb.RelayXmrTxRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.RelayXmrTxReply>;
    relayXmrTx(request: grpc_pb.RelayXmrTxRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.RelayXmrTxReply) => void): grpcWeb.ClientReadableStream<grpc_pb.RelayXmrTxReply>;
    methodDescriptorGetAddressBalance: any;
    getAddressBalance(request: grpc_pb.GetAddressBalanceRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.GetAddressBalanceReply>;
    getAddressBalance(request: grpc_pb.GetAddressBalanceRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.GetAddressBalanceReply) => void): grpcWeb.ClientReadableStream<grpc_pb.GetAddressBalanceReply>;
    methodDescriptorGetFundingAddresses: any;
    getFundingAddresses(request: grpc_pb.GetFundingAddressesRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.GetFundingAddressesReply>;
    getFundingAddresses(request: grpc_pb.GetFundingAddressesRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.GetFundingAddressesReply) => void): grpcWeb.ClientReadableStream<grpc_pb.GetFundingAddressesReply>;
    methodDescriptorSetWalletPassword: any;
    setWalletPassword(request: grpc_pb.SetWalletPasswordRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.SetWalletPasswordReply>;
    setWalletPassword(request: grpc_pb.SetWalletPasswordRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.SetWalletPasswordReply) => void): grpcWeb.ClientReadableStream<grpc_pb.SetWalletPasswordReply>;
    methodDescriptorRemoveWalletPassword: any;
    removeWalletPassword(request: grpc_pb.RemoveWalletPasswordRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.RemoveWalletPasswordReply>;
    removeWalletPassword(request: grpc_pb.RemoveWalletPasswordRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.RemoveWalletPasswordReply) => void): grpcWeb.ClientReadableStream<grpc_pb.RemoveWalletPasswordReply>;
    methodDescriptorLockWallet: any;
    lockWallet(request: grpc_pb.LockWalletRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.LockWalletReply>;
    lockWallet(request: grpc_pb.LockWalletRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.LockWalletReply) => void): grpcWeb.ClientReadableStream<grpc_pb.LockWalletReply>;
    methodDescriptorUnlockWallet: any;
    unlockWallet(request: grpc_pb.UnlockWalletRequest, metadata: grpcWeb.Metadata | null): Promise<grpc_pb.UnlockWalletReply>;
    unlockWallet(request: grpc_pb.UnlockWalletRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: grpc_pb.UnlockWalletReply) => void): grpcWeb.ClientReadableStream<grpc_pb.UnlockWalletReply>;
}
