import * as jspb from 'google-protobuf'



export class NetworkEnvelope extends jspb.Message {
  getMessageVersion(): number;
  setMessageVersion(value: number): NetworkEnvelope;

  getPreliminaryGetDataRequest(): PreliminaryGetDataRequest | undefined;
  setPreliminaryGetDataRequest(value?: PreliminaryGetDataRequest): NetworkEnvelope;
  hasPreliminaryGetDataRequest(): boolean;
  clearPreliminaryGetDataRequest(): NetworkEnvelope;

  getGetDataResponse(): GetDataResponse | undefined;
  setGetDataResponse(value?: GetDataResponse): NetworkEnvelope;
  hasGetDataResponse(): boolean;
  clearGetDataResponse(): NetworkEnvelope;

  getGetUpdatedDataRequest(): GetUpdatedDataRequest | undefined;
  setGetUpdatedDataRequest(value?: GetUpdatedDataRequest): NetworkEnvelope;
  hasGetUpdatedDataRequest(): boolean;
  clearGetUpdatedDataRequest(): NetworkEnvelope;

  getGetPeersRequest(): GetPeersRequest | undefined;
  setGetPeersRequest(value?: GetPeersRequest): NetworkEnvelope;
  hasGetPeersRequest(): boolean;
  clearGetPeersRequest(): NetworkEnvelope;

  getGetPeersResponse(): GetPeersResponse | undefined;
  setGetPeersResponse(value?: GetPeersResponse): NetworkEnvelope;
  hasGetPeersResponse(): boolean;
  clearGetPeersResponse(): NetworkEnvelope;

  getPing(): Ping | undefined;
  setPing(value?: Ping): NetworkEnvelope;
  hasPing(): boolean;
  clearPing(): NetworkEnvelope;

  getPong(): Pong | undefined;
  setPong(value?: Pong): NetworkEnvelope;
  hasPong(): boolean;
  clearPong(): NetworkEnvelope;

  getOfferAvailabilityRequest(): OfferAvailabilityRequest | undefined;
  setOfferAvailabilityRequest(value?: OfferAvailabilityRequest): NetworkEnvelope;
  hasOfferAvailabilityRequest(): boolean;
  clearOfferAvailabilityRequest(): NetworkEnvelope;

  getOfferAvailabilityResponse(): OfferAvailabilityResponse | undefined;
  setOfferAvailabilityResponse(value?: OfferAvailabilityResponse): NetworkEnvelope;
  hasOfferAvailabilityResponse(): boolean;
  clearOfferAvailabilityResponse(): NetworkEnvelope;

  getRefreshOfferMessage(): RefreshOfferMessage | undefined;
  setRefreshOfferMessage(value?: RefreshOfferMessage): NetworkEnvelope;
  hasRefreshOfferMessage(): boolean;
  clearRefreshOfferMessage(): NetworkEnvelope;

  getAddDataMessage(): AddDataMessage | undefined;
  setAddDataMessage(value?: AddDataMessage): NetworkEnvelope;
  hasAddDataMessage(): boolean;
  clearAddDataMessage(): NetworkEnvelope;

  getRemoveDataMessage(): RemoveDataMessage | undefined;
  setRemoveDataMessage(value?: RemoveDataMessage): NetworkEnvelope;
  hasRemoveDataMessage(): boolean;
  clearRemoveDataMessage(): NetworkEnvelope;

  getRemoveMailboxDataMessage(): RemoveMailboxDataMessage | undefined;
  setRemoveMailboxDataMessage(value?: RemoveMailboxDataMessage): NetworkEnvelope;
  hasRemoveMailboxDataMessage(): boolean;
  clearRemoveMailboxDataMessage(): NetworkEnvelope;

  getCloseConnectionMessage(): CloseConnectionMessage | undefined;
  setCloseConnectionMessage(value?: CloseConnectionMessage): NetworkEnvelope;
  hasCloseConnectionMessage(): boolean;
  clearCloseConnectionMessage(): NetworkEnvelope;

  getPrefixedSealedAndSignedMessage(): PrefixedSealedAndSignedMessage | undefined;
  setPrefixedSealedAndSignedMessage(value?: PrefixedSealedAndSignedMessage): NetworkEnvelope;
  hasPrefixedSealedAndSignedMessage(): boolean;
  clearPrefixedSealedAndSignedMessage(): NetworkEnvelope;

  getInputsForDepositTxRequest(): InputsForDepositTxRequest | undefined;
  setInputsForDepositTxRequest(value?: InputsForDepositTxRequest): NetworkEnvelope;
  hasInputsForDepositTxRequest(): boolean;
  clearInputsForDepositTxRequest(): NetworkEnvelope;

  getInputsForDepositTxResponse(): InputsForDepositTxResponse | undefined;
  setInputsForDepositTxResponse(value?: InputsForDepositTxResponse): NetworkEnvelope;
  hasInputsForDepositTxResponse(): boolean;
  clearInputsForDepositTxResponse(): NetworkEnvelope;

  getDepositTxMessage(): DepositTxMessage | undefined;
  setDepositTxMessage(value?: DepositTxMessage): NetworkEnvelope;
  hasDepositTxMessage(): boolean;
  clearDepositTxMessage(): NetworkEnvelope;

  getCounterCurrencyTransferStartedMessage(): CounterCurrencyTransferStartedMessage | undefined;
  setCounterCurrencyTransferStartedMessage(value?: CounterCurrencyTransferStartedMessage): NetworkEnvelope;
  hasCounterCurrencyTransferStartedMessage(): boolean;
  clearCounterCurrencyTransferStartedMessage(): NetworkEnvelope;

  getPayoutTxPublishedMessage(): PayoutTxPublishedMessage | undefined;
  setPayoutTxPublishedMessage(value?: PayoutTxPublishedMessage): NetworkEnvelope;
  hasPayoutTxPublishedMessage(): boolean;
  clearPayoutTxPublishedMessage(): NetworkEnvelope;

  getOpenNewDisputeMessage(): OpenNewDisputeMessage | undefined;
  setOpenNewDisputeMessage(value?: OpenNewDisputeMessage): NetworkEnvelope;
  hasOpenNewDisputeMessage(): boolean;
  clearOpenNewDisputeMessage(): NetworkEnvelope;

  getPeerOpenedDisputeMessage(): PeerOpenedDisputeMessage | undefined;
  setPeerOpenedDisputeMessage(value?: PeerOpenedDisputeMessage): NetworkEnvelope;
  hasPeerOpenedDisputeMessage(): boolean;
  clearPeerOpenedDisputeMessage(): NetworkEnvelope;

  getChatMessage(): ChatMessage | undefined;
  setChatMessage(value?: ChatMessage): NetworkEnvelope;
  hasChatMessage(): boolean;
  clearChatMessage(): NetworkEnvelope;

  getDisputeResultMessage(): DisputeResultMessage | undefined;
  setDisputeResultMessage(value?: DisputeResultMessage): NetworkEnvelope;
  hasDisputeResultMessage(): boolean;
  clearDisputeResultMessage(): NetworkEnvelope;

  getPeerPublishedDisputePayoutTxMessage(): PeerPublishedDisputePayoutTxMessage | undefined;
  setPeerPublishedDisputePayoutTxMessage(value?: PeerPublishedDisputePayoutTxMessage): NetworkEnvelope;
  hasPeerPublishedDisputePayoutTxMessage(): boolean;
  clearPeerPublishedDisputePayoutTxMessage(): NetworkEnvelope;

  getPrivateNotificationMessage(): PrivateNotificationMessage | undefined;
  setPrivateNotificationMessage(value?: PrivateNotificationMessage): NetworkEnvelope;
  hasPrivateNotificationMessage(): boolean;
  clearPrivateNotificationMessage(): NetworkEnvelope;

  getAddPersistableNetworkPayloadMessage(): AddPersistableNetworkPayloadMessage | undefined;
  setAddPersistableNetworkPayloadMessage(value?: AddPersistableNetworkPayloadMessage): NetworkEnvelope;
  hasAddPersistableNetworkPayloadMessage(): boolean;
  clearAddPersistableNetworkPayloadMessage(): NetworkEnvelope;

  getAckMessage(): AckMessage | undefined;
  setAckMessage(value?: AckMessage): NetworkEnvelope;
  hasAckMessage(): boolean;
  clearAckMessage(): NetworkEnvelope;

  getBundleOfEnvelopes(): BundleOfEnvelopes | undefined;
  setBundleOfEnvelopes(value?: BundleOfEnvelopes): NetworkEnvelope;
  hasBundleOfEnvelopes(): boolean;
  clearBundleOfEnvelopes(): NetworkEnvelope;

  getMediatedPayoutTxSignatureMessage(): MediatedPayoutTxSignatureMessage | undefined;
  setMediatedPayoutTxSignatureMessage(value?: MediatedPayoutTxSignatureMessage): NetworkEnvelope;
  hasMediatedPayoutTxSignatureMessage(): boolean;
  clearMediatedPayoutTxSignatureMessage(): NetworkEnvelope;

  getMediatedPayoutTxPublishedMessage(): MediatedPayoutTxPublishedMessage | undefined;
  setMediatedPayoutTxPublishedMessage(value?: MediatedPayoutTxPublishedMessage): NetworkEnvelope;
  hasMediatedPayoutTxPublishedMessage(): boolean;
  clearMediatedPayoutTxPublishedMessage(): NetworkEnvelope;

  getDelayedPayoutTxSignatureRequest(): DelayedPayoutTxSignatureRequest | undefined;
  setDelayedPayoutTxSignatureRequest(value?: DelayedPayoutTxSignatureRequest): NetworkEnvelope;
  hasDelayedPayoutTxSignatureRequest(): boolean;
  clearDelayedPayoutTxSignatureRequest(): NetworkEnvelope;

  getDelayedPayoutTxSignatureResponse(): DelayedPayoutTxSignatureResponse | undefined;
  setDelayedPayoutTxSignatureResponse(value?: DelayedPayoutTxSignatureResponse): NetworkEnvelope;
  hasDelayedPayoutTxSignatureResponse(): boolean;
  clearDelayedPayoutTxSignatureResponse(): NetworkEnvelope;

  getDepositTxAndDelayedPayoutTxMessage(): DepositTxAndDelayedPayoutTxMessage | undefined;
  setDepositTxAndDelayedPayoutTxMessage(value?: DepositTxAndDelayedPayoutTxMessage): NetworkEnvelope;
  hasDepositTxAndDelayedPayoutTxMessage(): boolean;
  clearDepositTxAndDelayedPayoutTxMessage(): NetworkEnvelope;

  getPeerPublishedDelayedPayoutTxMessage(): PeerPublishedDelayedPayoutTxMessage | undefined;
  setPeerPublishedDelayedPayoutTxMessage(value?: PeerPublishedDelayedPayoutTxMessage): NetworkEnvelope;
  hasPeerPublishedDelayedPayoutTxMessage(): boolean;
  clearPeerPublishedDelayedPayoutTxMessage(): NetworkEnvelope;

  getRefreshTradeStateRequest(): RefreshTradeStateRequest | undefined;
  setRefreshTradeStateRequest(value?: RefreshTradeStateRequest): NetworkEnvelope;
  hasRefreshTradeStateRequest(): boolean;
  clearRefreshTradeStateRequest(): NetworkEnvelope;

  getTraderSignedWitnessMessage(): TraderSignedWitnessMessage | undefined;
  setTraderSignedWitnessMessage(value?: TraderSignedWitnessMessage): NetworkEnvelope;
  hasTraderSignedWitnessMessage(): boolean;
  clearTraderSignedWitnessMessage(): NetworkEnvelope;

  getGetInventoryRequest(): GetInventoryRequest | undefined;
  setGetInventoryRequest(value?: GetInventoryRequest): NetworkEnvelope;
  hasGetInventoryRequest(): boolean;
  clearGetInventoryRequest(): NetworkEnvelope;

  getGetInventoryResponse(): GetInventoryResponse | undefined;
  setGetInventoryResponse(value?: GetInventoryResponse): NetworkEnvelope;
  hasGetInventoryResponse(): boolean;
  clearGetInventoryResponse(): NetworkEnvelope;

  getSignOfferRequest(): SignOfferRequest | undefined;
  setSignOfferRequest(value?: SignOfferRequest): NetworkEnvelope;
  hasSignOfferRequest(): boolean;
  clearSignOfferRequest(): NetworkEnvelope;

  getSignOfferResponse(): SignOfferResponse | undefined;
  setSignOfferResponse(value?: SignOfferResponse): NetworkEnvelope;
  hasSignOfferResponse(): boolean;
  clearSignOfferResponse(): NetworkEnvelope;

  getInitTradeRequest(): InitTradeRequest | undefined;
  setInitTradeRequest(value?: InitTradeRequest): NetworkEnvelope;
  hasInitTradeRequest(): boolean;
  clearInitTradeRequest(): NetworkEnvelope;

  getInitMultisigRequest(): InitMultisigRequest | undefined;
  setInitMultisigRequest(value?: InitMultisigRequest): NetworkEnvelope;
  hasInitMultisigRequest(): boolean;
  clearInitMultisigRequest(): NetworkEnvelope;

  getSignContractRequest(): SignContractRequest | undefined;
  setSignContractRequest(value?: SignContractRequest): NetworkEnvelope;
  hasSignContractRequest(): boolean;
  clearSignContractRequest(): NetworkEnvelope;

  getSignContractResponse(): SignContractResponse | undefined;
  setSignContractResponse(value?: SignContractResponse): NetworkEnvelope;
  hasSignContractResponse(): boolean;
  clearSignContractResponse(): NetworkEnvelope;

  getDepositRequest(): DepositRequest | undefined;
  setDepositRequest(value?: DepositRequest): NetworkEnvelope;
  hasDepositRequest(): boolean;
  clearDepositRequest(): NetworkEnvelope;

  getDepositResponse(): DepositResponse | undefined;
  setDepositResponse(value?: DepositResponse): NetworkEnvelope;
  hasDepositResponse(): boolean;
  clearDepositResponse(): NetworkEnvelope;

  getPaymentAccountPayloadRequest(): PaymentAccountPayloadRequest | undefined;
  setPaymentAccountPayloadRequest(value?: PaymentAccountPayloadRequest): NetworkEnvelope;
  hasPaymentAccountPayloadRequest(): boolean;
  clearPaymentAccountPayloadRequest(): NetworkEnvelope;

  getUpdateMultisigRequest(): UpdateMultisigRequest | undefined;
  setUpdateMultisigRequest(value?: UpdateMultisigRequest): NetworkEnvelope;
  hasUpdateMultisigRequest(): boolean;
  clearUpdateMultisigRequest(): NetworkEnvelope;

  getUpdateMultisigResponse(): UpdateMultisigResponse | undefined;
  setUpdateMultisigResponse(value?: UpdateMultisigResponse): NetworkEnvelope;
  hasUpdateMultisigResponse(): boolean;
  clearUpdateMultisigResponse(): NetworkEnvelope;

  getArbitratorPayoutTxRequest(): ArbitratorPayoutTxRequest | undefined;
  setArbitratorPayoutTxRequest(value?: ArbitratorPayoutTxRequest): NetworkEnvelope;
  hasArbitratorPayoutTxRequest(): boolean;
  clearArbitratorPayoutTxRequest(): NetworkEnvelope;

  getArbitratorPayoutTxResponse(): ArbitratorPayoutTxResponse | undefined;
  setArbitratorPayoutTxResponse(value?: ArbitratorPayoutTxResponse): NetworkEnvelope;
  hasArbitratorPayoutTxResponse(): boolean;
  clearArbitratorPayoutTxResponse(): NetworkEnvelope;

  getMessageCase(): NetworkEnvelope.MessageCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NetworkEnvelope.AsObject;
  static toObject(includeInstance: boolean, msg: NetworkEnvelope): NetworkEnvelope.AsObject;
  static serializeBinaryToWriter(message: NetworkEnvelope, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NetworkEnvelope;
  static deserializeBinaryFromReader(message: NetworkEnvelope, reader: jspb.BinaryReader): NetworkEnvelope;
}

export namespace NetworkEnvelope {
  export type AsObject = {
    messageVersion: number,
    preliminaryGetDataRequest?: PreliminaryGetDataRequest.AsObject,
    getDataResponse?: GetDataResponse.AsObject,
    getUpdatedDataRequest?: GetUpdatedDataRequest.AsObject,
    getPeersRequest?: GetPeersRequest.AsObject,
    getPeersResponse?: GetPeersResponse.AsObject,
    ping?: Ping.AsObject,
    pong?: Pong.AsObject,
    offerAvailabilityRequest?: OfferAvailabilityRequest.AsObject,
    offerAvailabilityResponse?: OfferAvailabilityResponse.AsObject,
    refreshOfferMessage?: RefreshOfferMessage.AsObject,
    addDataMessage?: AddDataMessage.AsObject,
    removeDataMessage?: RemoveDataMessage.AsObject,
    removeMailboxDataMessage?: RemoveMailboxDataMessage.AsObject,
    closeConnectionMessage?: CloseConnectionMessage.AsObject,
    prefixedSealedAndSignedMessage?: PrefixedSealedAndSignedMessage.AsObject,
    inputsForDepositTxRequest?: InputsForDepositTxRequest.AsObject,
    inputsForDepositTxResponse?: InputsForDepositTxResponse.AsObject,
    depositTxMessage?: DepositTxMessage.AsObject,
    counterCurrencyTransferStartedMessage?: CounterCurrencyTransferStartedMessage.AsObject,
    payoutTxPublishedMessage?: PayoutTxPublishedMessage.AsObject,
    openNewDisputeMessage?: OpenNewDisputeMessage.AsObject,
    peerOpenedDisputeMessage?: PeerOpenedDisputeMessage.AsObject,
    chatMessage?: ChatMessage.AsObject,
    disputeResultMessage?: DisputeResultMessage.AsObject,
    peerPublishedDisputePayoutTxMessage?: PeerPublishedDisputePayoutTxMessage.AsObject,
    privateNotificationMessage?: PrivateNotificationMessage.AsObject,
    addPersistableNetworkPayloadMessage?: AddPersistableNetworkPayloadMessage.AsObject,
    ackMessage?: AckMessage.AsObject,
    bundleOfEnvelopes?: BundleOfEnvelopes.AsObject,
    mediatedPayoutTxSignatureMessage?: MediatedPayoutTxSignatureMessage.AsObject,
    mediatedPayoutTxPublishedMessage?: MediatedPayoutTxPublishedMessage.AsObject,
    delayedPayoutTxSignatureRequest?: DelayedPayoutTxSignatureRequest.AsObject,
    delayedPayoutTxSignatureResponse?: DelayedPayoutTxSignatureResponse.AsObject,
    depositTxAndDelayedPayoutTxMessage?: DepositTxAndDelayedPayoutTxMessage.AsObject,
    peerPublishedDelayedPayoutTxMessage?: PeerPublishedDelayedPayoutTxMessage.AsObject,
    refreshTradeStateRequest?: RefreshTradeStateRequest.AsObject,
    traderSignedWitnessMessage?: TraderSignedWitnessMessage.AsObject,
    getInventoryRequest?: GetInventoryRequest.AsObject,
    getInventoryResponse?: GetInventoryResponse.AsObject,
    signOfferRequest?: SignOfferRequest.AsObject,
    signOfferResponse?: SignOfferResponse.AsObject,
    initTradeRequest?: InitTradeRequest.AsObject,
    initMultisigRequest?: InitMultisigRequest.AsObject,
    signContractRequest?: SignContractRequest.AsObject,
    signContractResponse?: SignContractResponse.AsObject,
    depositRequest?: DepositRequest.AsObject,
    depositResponse?: DepositResponse.AsObject,
    paymentAccountPayloadRequest?: PaymentAccountPayloadRequest.AsObject,
    updateMultisigRequest?: UpdateMultisigRequest.AsObject,
    updateMultisigResponse?: UpdateMultisigResponse.AsObject,
    arbitratorPayoutTxRequest?: ArbitratorPayoutTxRequest.AsObject,
    arbitratorPayoutTxResponse?: ArbitratorPayoutTxResponse.AsObject,
  }

  export enum MessageCase { 
    MESSAGE_NOT_SET = 0,
    PRELIMINARY_GET_DATA_REQUEST = 2,
    GET_DATA_RESPONSE = 3,
    GET_UPDATED_DATA_REQUEST = 4,
    GET_PEERS_REQUEST = 5,
    GET_PEERS_RESPONSE = 6,
    PING = 7,
    PONG = 8,
    OFFER_AVAILABILITY_REQUEST = 9,
    OFFER_AVAILABILITY_RESPONSE = 10,
    REFRESH_OFFER_MESSAGE = 11,
    ADD_DATA_MESSAGE = 12,
    REMOVE_DATA_MESSAGE = 13,
    REMOVE_MAILBOX_DATA_MESSAGE = 14,
    CLOSE_CONNECTION_MESSAGE = 15,
    PREFIXED_SEALED_AND_SIGNED_MESSAGE = 16,
    INPUTS_FOR_DEPOSIT_TX_REQUEST = 17,
    INPUTS_FOR_DEPOSIT_TX_RESPONSE = 18,
    DEPOSIT_TX_MESSAGE = 19,
    COUNTER_CURRENCY_TRANSFER_STARTED_MESSAGE = 20,
    PAYOUT_TX_PUBLISHED_MESSAGE = 21,
    OPEN_NEW_DISPUTE_MESSAGE = 22,
    PEER_OPENED_DISPUTE_MESSAGE = 23,
    CHAT_MESSAGE = 24,
    DISPUTE_RESULT_MESSAGE = 25,
    PEER_PUBLISHED_DISPUTE_PAYOUT_TX_MESSAGE = 26,
    PRIVATE_NOTIFICATION_MESSAGE = 27,
    ADD_PERSISTABLE_NETWORK_PAYLOAD_MESSAGE = 28,
    ACK_MESSAGE = 29,
    BUNDLE_OF_ENVELOPES = 30,
    MEDIATED_PAYOUT_TX_SIGNATURE_MESSAGE = 31,
    MEDIATED_PAYOUT_TX_PUBLISHED_MESSAGE = 32,
    DELAYED_PAYOUT_TX_SIGNATURE_REQUEST = 33,
    DELAYED_PAYOUT_TX_SIGNATURE_RESPONSE = 34,
    DEPOSIT_TX_AND_DELAYED_PAYOUT_TX_MESSAGE = 35,
    PEER_PUBLISHED_DELAYED_PAYOUT_TX_MESSAGE = 36,
    REFRESH_TRADE_STATE_REQUEST = 37,
    TRADER_SIGNED_WITNESS_MESSAGE = 38,
    GET_INVENTORY_REQUEST = 39,
    GET_INVENTORY_RESPONSE = 40,
    SIGN_OFFER_REQUEST = 1001,
    SIGN_OFFER_RESPONSE = 1002,
    INIT_TRADE_REQUEST = 1003,
    INIT_MULTISIG_REQUEST = 1004,
    SIGN_CONTRACT_REQUEST = 1005,
    SIGN_CONTRACT_RESPONSE = 1006,
    DEPOSIT_REQUEST = 1007,
    DEPOSIT_RESPONSE = 1008,
    PAYMENT_ACCOUNT_PAYLOAD_REQUEST = 1009,
    UPDATE_MULTISIG_REQUEST = 1010,
    UPDATE_MULTISIG_RESPONSE = 1011,
    ARBITRATOR_PAYOUT_TX_REQUEST = 1012,
    ARBITRATOR_PAYOUT_TX_RESPONSE = 1013,
  }
}

export class BundleOfEnvelopes extends jspb.Message {
  getEnvelopesList(): Array<NetworkEnvelope>;
  setEnvelopesList(value: Array<NetworkEnvelope>): BundleOfEnvelopes;
  clearEnvelopesList(): BundleOfEnvelopes;
  addEnvelopes(value?: NetworkEnvelope, index?: number): NetworkEnvelope;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BundleOfEnvelopes.AsObject;
  static toObject(includeInstance: boolean, msg: BundleOfEnvelopes): BundleOfEnvelopes.AsObject;
  static serializeBinaryToWriter(message: BundleOfEnvelopes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BundleOfEnvelopes;
  static deserializeBinaryFromReader(message: BundleOfEnvelopes, reader: jspb.BinaryReader): BundleOfEnvelopes;
}

export namespace BundleOfEnvelopes {
  export type AsObject = {
    envelopesList: Array<NetworkEnvelope.AsObject>,
  }
}

export class PreliminaryGetDataRequest extends jspb.Message {
  getNonce(): number;
  setNonce(value: number): PreliminaryGetDataRequest;

  getExcludedKeysList(): Array<Uint8Array | string>;
  setExcludedKeysList(value: Array<Uint8Array | string>): PreliminaryGetDataRequest;
  clearExcludedKeysList(): PreliminaryGetDataRequest;
  addExcludedKeys(value: Uint8Array | string, index?: number): PreliminaryGetDataRequest;

  getSupportedCapabilitiesList(): Array<number>;
  setSupportedCapabilitiesList(value: Array<number>): PreliminaryGetDataRequest;
  clearSupportedCapabilitiesList(): PreliminaryGetDataRequest;
  addSupportedCapabilities(value: number, index?: number): PreliminaryGetDataRequest;

  getVersion(): string;
  setVersion(value: string): PreliminaryGetDataRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PreliminaryGetDataRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PreliminaryGetDataRequest): PreliminaryGetDataRequest.AsObject;
  static serializeBinaryToWriter(message: PreliminaryGetDataRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PreliminaryGetDataRequest;
  static deserializeBinaryFromReader(message: PreliminaryGetDataRequest, reader: jspb.BinaryReader): PreliminaryGetDataRequest;
}

export namespace PreliminaryGetDataRequest {
  export type AsObject = {
    nonce: number,
    excludedKeysList: Array<Uint8Array | string>,
    supportedCapabilitiesList: Array<number>,
    version: string,
  }
}

export class GetDataResponse extends jspb.Message {
  getRequestNonce(): number;
  setRequestNonce(value: number): GetDataResponse;

  getIsGetUpdatedDataResponse(): boolean;
  setIsGetUpdatedDataResponse(value: boolean): GetDataResponse;

  getDataSetList(): Array<StorageEntryWrapper>;
  setDataSetList(value: Array<StorageEntryWrapper>): GetDataResponse;
  clearDataSetList(): GetDataResponse;
  addDataSet(value?: StorageEntryWrapper, index?: number): StorageEntryWrapper;

  getSupportedCapabilitiesList(): Array<number>;
  setSupportedCapabilitiesList(value: Array<number>): GetDataResponse;
  clearSupportedCapabilitiesList(): GetDataResponse;
  addSupportedCapabilities(value: number, index?: number): GetDataResponse;

  getPersistableNetworkPayloadItemsList(): Array<PersistableNetworkPayload>;
  setPersistableNetworkPayloadItemsList(value: Array<PersistableNetworkPayload>): GetDataResponse;
  clearPersistableNetworkPayloadItemsList(): GetDataResponse;
  addPersistableNetworkPayloadItems(value?: PersistableNetworkPayload, index?: number): PersistableNetworkPayload;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDataResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetDataResponse): GetDataResponse.AsObject;
  static serializeBinaryToWriter(message: GetDataResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDataResponse;
  static deserializeBinaryFromReader(message: GetDataResponse, reader: jspb.BinaryReader): GetDataResponse;
}

export namespace GetDataResponse {
  export type AsObject = {
    requestNonce: number,
    isGetUpdatedDataResponse: boolean,
    dataSetList: Array<StorageEntryWrapper.AsObject>,
    supportedCapabilitiesList: Array<number>,
    persistableNetworkPayloadItemsList: Array<PersistableNetworkPayload.AsObject>,
  }
}

export class GetUpdatedDataRequest extends jspb.Message {
  getSenderNodeAddress(): NodeAddress | undefined;
  setSenderNodeAddress(value?: NodeAddress): GetUpdatedDataRequest;
  hasSenderNodeAddress(): boolean;
  clearSenderNodeAddress(): GetUpdatedDataRequest;

  getNonce(): number;
  setNonce(value: number): GetUpdatedDataRequest;

  getExcludedKeysList(): Array<Uint8Array | string>;
  setExcludedKeysList(value: Array<Uint8Array | string>): GetUpdatedDataRequest;
  clearExcludedKeysList(): GetUpdatedDataRequest;
  addExcludedKeys(value: Uint8Array | string, index?: number): GetUpdatedDataRequest;

  getVersion(): string;
  setVersion(value: string): GetUpdatedDataRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUpdatedDataRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUpdatedDataRequest): GetUpdatedDataRequest.AsObject;
  static serializeBinaryToWriter(message: GetUpdatedDataRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUpdatedDataRequest;
  static deserializeBinaryFromReader(message: GetUpdatedDataRequest, reader: jspb.BinaryReader): GetUpdatedDataRequest;
}

export namespace GetUpdatedDataRequest {
  export type AsObject = {
    senderNodeAddress?: NodeAddress.AsObject,
    nonce: number,
    excludedKeysList: Array<Uint8Array | string>,
    version: string,
  }
}

export class GetPeersRequest extends jspb.Message {
  getSenderNodeAddress(): NodeAddress | undefined;
  setSenderNodeAddress(value?: NodeAddress): GetPeersRequest;
  hasSenderNodeAddress(): boolean;
  clearSenderNodeAddress(): GetPeersRequest;

  getNonce(): number;
  setNonce(value: number): GetPeersRequest;

  getSupportedCapabilitiesList(): Array<number>;
  setSupportedCapabilitiesList(value: Array<number>): GetPeersRequest;
  clearSupportedCapabilitiesList(): GetPeersRequest;
  addSupportedCapabilities(value: number, index?: number): GetPeersRequest;

  getReportedPeersList(): Array<Peer>;
  setReportedPeersList(value: Array<Peer>): GetPeersRequest;
  clearReportedPeersList(): GetPeersRequest;
  addReportedPeers(value?: Peer, index?: number): Peer;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPeersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPeersRequest): GetPeersRequest.AsObject;
  static serializeBinaryToWriter(message: GetPeersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPeersRequest;
  static deserializeBinaryFromReader(message: GetPeersRequest, reader: jspb.BinaryReader): GetPeersRequest;
}

export namespace GetPeersRequest {
  export type AsObject = {
    senderNodeAddress?: NodeAddress.AsObject,
    nonce: number,
    supportedCapabilitiesList: Array<number>,
    reportedPeersList: Array<Peer.AsObject>,
  }
}

export class GetPeersResponse extends jspb.Message {
  getRequestNonce(): number;
  setRequestNonce(value: number): GetPeersResponse;

  getReportedPeersList(): Array<Peer>;
  setReportedPeersList(value: Array<Peer>): GetPeersResponse;
  clearReportedPeersList(): GetPeersResponse;
  addReportedPeers(value?: Peer, index?: number): Peer;

  getSupportedCapabilitiesList(): Array<number>;
  setSupportedCapabilitiesList(value: Array<number>): GetPeersResponse;
  clearSupportedCapabilitiesList(): GetPeersResponse;
  addSupportedCapabilities(value: number, index?: number): GetPeersResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPeersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPeersResponse): GetPeersResponse.AsObject;
  static serializeBinaryToWriter(message: GetPeersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPeersResponse;
  static deserializeBinaryFromReader(message: GetPeersResponse, reader: jspb.BinaryReader): GetPeersResponse;
}

export namespace GetPeersResponse {
  export type AsObject = {
    requestNonce: number,
    reportedPeersList: Array<Peer.AsObject>,
    supportedCapabilitiesList: Array<number>,
  }
}

export class Ping extends jspb.Message {
  getNonce(): number;
  setNonce(value: number): Ping;

  getLastRoundTripTime(): number;
  setLastRoundTripTime(value: number): Ping;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Ping.AsObject;
  static toObject(includeInstance: boolean, msg: Ping): Ping.AsObject;
  static serializeBinaryToWriter(message: Ping, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Ping;
  static deserializeBinaryFromReader(message: Ping, reader: jspb.BinaryReader): Ping;
}

export namespace Ping {
  export type AsObject = {
    nonce: number,
    lastRoundTripTime: number,
  }
}

export class Pong extends jspb.Message {
  getRequestNonce(): number;
  setRequestNonce(value: number): Pong;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Pong.AsObject;
  static toObject(includeInstance: boolean, msg: Pong): Pong.AsObject;
  static serializeBinaryToWriter(message: Pong, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Pong;
  static deserializeBinaryFromReader(message: Pong, reader: jspb.BinaryReader): Pong;
}

export namespace Pong {
  export type AsObject = {
    requestNonce: number,
  }
}

export class GetInventoryRequest extends jspb.Message {
  getVersion(): string;
  setVersion(value: string): GetInventoryRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetInventoryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetInventoryRequest): GetInventoryRequest.AsObject;
  static serializeBinaryToWriter(message: GetInventoryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetInventoryRequest;
  static deserializeBinaryFromReader(message: GetInventoryRequest, reader: jspb.BinaryReader): GetInventoryRequest;
}

export namespace GetInventoryRequest {
  export type AsObject = {
    version: string,
  }
}

export class GetInventoryResponse extends jspb.Message {
  getInventoryMap(): jspb.Map<string, string>;
  clearInventoryMap(): GetInventoryResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetInventoryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetInventoryResponse): GetInventoryResponse.AsObject;
  static serializeBinaryToWriter(message: GetInventoryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetInventoryResponse;
  static deserializeBinaryFromReader(message: GetInventoryResponse, reader: jspb.BinaryReader): GetInventoryResponse;
}

export namespace GetInventoryResponse {
  export type AsObject = {
    inventoryMap: Array<[string, string]>,
  }
}

export class SignOfferRequest extends jspb.Message {
  getOfferId(): string;
  setOfferId(value: string): SignOfferRequest;

  getSenderNodeAddress(): NodeAddress | undefined;
  setSenderNodeAddress(value?: NodeAddress): SignOfferRequest;
  hasSenderNodeAddress(): boolean;
  clearSenderNodeAddress(): SignOfferRequest;

  getPubKeyRing(): PubKeyRing | undefined;
  setPubKeyRing(value?: PubKeyRing): SignOfferRequest;
  hasPubKeyRing(): boolean;
  clearPubKeyRing(): SignOfferRequest;

  getSenderAccountId(): string;
  setSenderAccountId(value: string): SignOfferRequest;

  getOfferPayload(): OfferPayload | undefined;
  setOfferPayload(value?: OfferPayload): SignOfferRequest;
  hasOfferPayload(): boolean;
  clearOfferPayload(): SignOfferRequest;

  getUid(): string;
  setUid(value: string): SignOfferRequest;

  getCurrentDate(): number;
  setCurrentDate(value: number): SignOfferRequest;

  getReserveTxHash(): string;
  setReserveTxHash(value: string): SignOfferRequest;

  getReserveTxHex(): string;
  setReserveTxHex(value: string): SignOfferRequest;

  getReserveTxKey(): string;
  setReserveTxKey(value: string): SignOfferRequest;

  getReserveTxKeyImagesList(): Array<string>;
  setReserveTxKeyImagesList(value: Array<string>): SignOfferRequest;
  clearReserveTxKeyImagesList(): SignOfferRequest;
  addReserveTxKeyImages(value: string, index?: number): SignOfferRequest;

  getPayoutAddress(): string;
  setPayoutAddress(value: string): SignOfferRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignOfferRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SignOfferRequest): SignOfferRequest.AsObject;
  static serializeBinaryToWriter(message: SignOfferRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignOfferRequest;
  static deserializeBinaryFromReader(message: SignOfferRequest, reader: jspb.BinaryReader): SignOfferRequest;
}

export namespace SignOfferRequest {
  export type AsObject = {
    offerId: string,
    senderNodeAddress?: NodeAddress.AsObject,
    pubKeyRing?: PubKeyRing.AsObject,
    senderAccountId: string,
    offerPayload?: OfferPayload.AsObject,
    uid: string,
    currentDate: number,
    reserveTxHash: string,
    reserveTxHex: string,
    reserveTxKey: string,
    reserveTxKeyImagesList: Array<string>,
    payoutAddress: string,
  }
}

export class SignOfferResponse extends jspb.Message {
  getOfferId(): string;
  setOfferId(value: string): SignOfferResponse;

  getUid(): string;
  setUid(value: string): SignOfferResponse;

  getSignedOfferPayload(): OfferPayload | undefined;
  setSignedOfferPayload(value?: OfferPayload): SignOfferResponse;
  hasSignedOfferPayload(): boolean;
  clearSignedOfferPayload(): SignOfferResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignOfferResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SignOfferResponse): SignOfferResponse.AsObject;
  static serializeBinaryToWriter(message: SignOfferResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignOfferResponse;
  static deserializeBinaryFromReader(message: SignOfferResponse, reader: jspb.BinaryReader): SignOfferResponse;
}

export namespace SignOfferResponse {
  export type AsObject = {
    offerId: string,
    uid: string,
    signedOfferPayload?: OfferPayload.AsObject,
  }
}

export class OfferAvailabilityRequest extends jspb.Message {
  getOfferId(): string;
  setOfferId(value: string): OfferAvailabilityRequest;

  getPubKeyRing(): PubKeyRing | undefined;
  setPubKeyRing(value?: PubKeyRing): OfferAvailabilityRequest;
  hasPubKeyRing(): boolean;
  clearPubKeyRing(): OfferAvailabilityRequest;

  getTakersTradePrice(): number;
  setTakersTradePrice(value: number): OfferAvailabilityRequest;

  getSupportedCapabilitiesList(): Array<number>;
  setSupportedCapabilitiesList(value: Array<number>): OfferAvailabilityRequest;
  clearSupportedCapabilitiesList(): OfferAvailabilityRequest;
  addSupportedCapabilities(value: number, index?: number): OfferAvailabilityRequest;

  getUid(): string;
  setUid(value: string): OfferAvailabilityRequest;

  getIsTakerApiUser(): boolean;
  setIsTakerApiUser(value: boolean): OfferAvailabilityRequest;

  getTradeRequest(): InitTradeRequest | undefined;
  setTradeRequest(value?: InitTradeRequest): OfferAvailabilityRequest;
  hasTradeRequest(): boolean;
  clearTradeRequest(): OfferAvailabilityRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OfferAvailabilityRequest.AsObject;
  static toObject(includeInstance: boolean, msg: OfferAvailabilityRequest): OfferAvailabilityRequest.AsObject;
  static serializeBinaryToWriter(message: OfferAvailabilityRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OfferAvailabilityRequest;
  static deserializeBinaryFromReader(message: OfferAvailabilityRequest, reader: jspb.BinaryReader): OfferAvailabilityRequest;
}

export namespace OfferAvailabilityRequest {
  export type AsObject = {
    offerId: string,
    pubKeyRing?: PubKeyRing.AsObject,
    takersTradePrice: number,
    supportedCapabilitiesList: Array<number>,
    uid: string,
    isTakerApiUser: boolean,
    tradeRequest?: InitTradeRequest.AsObject,
  }
}

export class OfferAvailabilityResponse extends jspb.Message {
  getOfferId(): string;
  setOfferId(value: string): OfferAvailabilityResponse;

  getAvailabilityResult(): AvailabilityResult;
  setAvailabilityResult(value: AvailabilityResult): OfferAvailabilityResponse;

  getSupportedCapabilitiesList(): Array<number>;
  setSupportedCapabilitiesList(value: Array<number>): OfferAvailabilityResponse;
  clearSupportedCapabilitiesList(): OfferAvailabilityResponse;
  addSupportedCapabilities(value: number, index?: number): OfferAvailabilityResponse;

  getUid(): string;
  setUid(value: string): OfferAvailabilityResponse;

  getMakerSignature(): string;
  setMakerSignature(value: string): OfferAvailabilityResponse;

  getArbitratorNodeAddress(): NodeAddress | undefined;
  setArbitratorNodeAddress(value?: NodeAddress): OfferAvailabilityResponse;
  hasArbitratorNodeAddress(): boolean;
  clearArbitratorNodeAddress(): OfferAvailabilityResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OfferAvailabilityResponse.AsObject;
  static toObject(includeInstance: boolean, msg: OfferAvailabilityResponse): OfferAvailabilityResponse.AsObject;
  static serializeBinaryToWriter(message: OfferAvailabilityResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OfferAvailabilityResponse;
  static deserializeBinaryFromReader(message: OfferAvailabilityResponse, reader: jspb.BinaryReader): OfferAvailabilityResponse;
}

export namespace OfferAvailabilityResponse {
  export type AsObject = {
    offerId: string,
    availabilityResult: AvailabilityResult,
    supportedCapabilitiesList: Array<number>,
    uid: string,
    makerSignature: string,
    arbitratorNodeAddress?: NodeAddress.AsObject,
  }
}

export class RefreshOfferMessage extends jspb.Message {
  getHashOfDataAndSeqNr(): Uint8Array | string;
  getHashOfDataAndSeqNr_asU8(): Uint8Array;
  getHashOfDataAndSeqNr_asB64(): string;
  setHashOfDataAndSeqNr(value: Uint8Array | string): RefreshOfferMessage;

  getSignature(): Uint8Array | string;
  getSignature_asU8(): Uint8Array;
  getSignature_asB64(): string;
  setSignature(value: Uint8Array | string): RefreshOfferMessage;

  getHashOfPayload(): Uint8Array | string;
  getHashOfPayload_asU8(): Uint8Array;
  getHashOfPayload_asB64(): string;
  setHashOfPayload(value: Uint8Array | string): RefreshOfferMessage;

  getSequenceNumber(): number;
  setSequenceNumber(value: number): RefreshOfferMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RefreshOfferMessage.AsObject;
  static toObject(includeInstance: boolean, msg: RefreshOfferMessage): RefreshOfferMessage.AsObject;
  static serializeBinaryToWriter(message: RefreshOfferMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RefreshOfferMessage;
  static deserializeBinaryFromReader(message: RefreshOfferMessage, reader: jspb.BinaryReader): RefreshOfferMessage;
}

export namespace RefreshOfferMessage {
  export type AsObject = {
    hashOfDataAndSeqNr: Uint8Array | string,
    signature: Uint8Array | string,
    hashOfPayload: Uint8Array | string,
    sequenceNumber: number,
  }
}

export class AddDataMessage extends jspb.Message {
  getEntry(): StorageEntryWrapper | undefined;
  setEntry(value?: StorageEntryWrapper): AddDataMessage;
  hasEntry(): boolean;
  clearEntry(): AddDataMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddDataMessage.AsObject;
  static toObject(includeInstance: boolean, msg: AddDataMessage): AddDataMessage.AsObject;
  static serializeBinaryToWriter(message: AddDataMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddDataMessage;
  static deserializeBinaryFromReader(message: AddDataMessage, reader: jspb.BinaryReader): AddDataMessage;
}

export namespace AddDataMessage {
  export type AsObject = {
    entry?: StorageEntryWrapper.AsObject,
  }
}

export class RemoveDataMessage extends jspb.Message {
  getProtectedStorageEntry(): ProtectedStorageEntry | undefined;
  setProtectedStorageEntry(value?: ProtectedStorageEntry): RemoveDataMessage;
  hasProtectedStorageEntry(): boolean;
  clearProtectedStorageEntry(): RemoveDataMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveDataMessage.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveDataMessage): RemoveDataMessage.AsObject;
  static serializeBinaryToWriter(message: RemoveDataMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveDataMessage;
  static deserializeBinaryFromReader(message: RemoveDataMessage, reader: jspb.BinaryReader): RemoveDataMessage;
}

export namespace RemoveDataMessage {
  export type AsObject = {
    protectedStorageEntry?: ProtectedStorageEntry.AsObject,
  }
}

export class RemoveMailboxDataMessage extends jspb.Message {
  getProtectedStorageEntry(): ProtectedMailboxStorageEntry | undefined;
  setProtectedStorageEntry(value?: ProtectedMailboxStorageEntry): RemoveMailboxDataMessage;
  hasProtectedStorageEntry(): boolean;
  clearProtectedStorageEntry(): RemoveMailboxDataMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveMailboxDataMessage.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveMailboxDataMessage): RemoveMailboxDataMessage.AsObject;
  static serializeBinaryToWriter(message: RemoveMailboxDataMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveMailboxDataMessage;
  static deserializeBinaryFromReader(message: RemoveMailboxDataMessage, reader: jspb.BinaryReader): RemoveMailboxDataMessage;
}

export namespace RemoveMailboxDataMessage {
  export type AsObject = {
    protectedStorageEntry?: ProtectedMailboxStorageEntry.AsObject,
  }
}

export class AddPersistableNetworkPayloadMessage extends jspb.Message {
  getPayload(): PersistableNetworkPayload | undefined;
  setPayload(value?: PersistableNetworkPayload): AddPersistableNetworkPayloadMessage;
  hasPayload(): boolean;
  clearPayload(): AddPersistableNetworkPayloadMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddPersistableNetworkPayloadMessage.AsObject;
  static toObject(includeInstance: boolean, msg: AddPersistableNetworkPayloadMessage): AddPersistableNetworkPayloadMessage.AsObject;
  static serializeBinaryToWriter(message: AddPersistableNetworkPayloadMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddPersistableNetworkPayloadMessage;
  static deserializeBinaryFromReader(message: AddPersistableNetworkPayloadMessage, reader: jspb.BinaryReader): AddPersistableNetworkPayloadMessage;
}

export namespace AddPersistableNetworkPayloadMessage {
  export type AsObject = {
    payload?: PersistableNetworkPayload.AsObject,
  }
}

export class CloseConnectionMessage extends jspb.Message {
  getReason(): string;
  setReason(value: string): CloseConnectionMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CloseConnectionMessage.AsObject;
  static toObject(includeInstance: boolean, msg: CloseConnectionMessage): CloseConnectionMessage.AsObject;
  static serializeBinaryToWriter(message: CloseConnectionMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CloseConnectionMessage;
  static deserializeBinaryFromReader(message: CloseConnectionMessage, reader: jspb.BinaryReader): CloseConnectionMessage;
}

export namespace CloseConnectionMessage {
  export type AsObject = {
    reason: string,
  }
}

export class AckMessage extends jspb.Message {
  getUid(): string;
  setUid(value: string): AckMessage;

  getSenderNodeAddress(): NodeAddress | undefined;
  setSenderNodeAddress(value?: NodeAddress): AckMessage;
  hasSenderNodeAddress(): boolean;
  clearSenderNodeAddress(): AckMessage;

  getSourceType(): string;
  setSourceType(value: string): AckMessage;

  getSourceMsgClassName(): string;
  setSourceMsgClassName(value: string): AckMessage;

  getSourceUid(): string;
  setSourceUid(value: string): AckMessage;

  getSourceId(): string;
  setSourceId(value: string): AckMessage;

  getSuccess(): boolean;
  setSuccess(value: boolean): AckMessage;

  getErrorMessage(): string;
  setErrorMessage(value: string): AckMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AckMessage.AsObject;
  static toObject(includeInstance: boolean, msg: AckMessage): AckMessage.AsObject;
  static serializeBinaryToWriter(message: AckMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AckMessage;
  static deserializeBinaryFromReader(message: AckMessage, reader: jspb.BinaryReader): AckMessage;
}

export namespace AckMessage {
  export type AsObject = {
    uid: string,
    senderNodeAddress?: NodeAddress.AsObject,
    sourceType: string,
    sourceMsgClassName: string,
    sourceUid: string,
    sourceId: string,
    success: boolean,
    errorMessage: string,
  }
}

export class PrefixedSealedAndSignedMessage extends jspb.Message {
  getNodeAddress(): NodeAddress | undefined;
  setNodeAddress(value?: NodeAddress): PrefixedSealedAndSignedMessage;
  hasNodeAddress(): boolean;
  clearNodeAddress(): PrefixedSealedAndSignedMessage;

  getSealedAndSigned(): SealedAndSigned | undefined;
  setSealedAndSigned(value?: SealedAndSigned): PrefixedSealedAndSignedMessage;
  hasSealedAndSigned(): boolean;
  clearSealedAndSigned(): PrefixedSealedAndSignedMessage;

  getAddressPrefixHash(): Uint8Array | string;
  getAddressPrefixHash_asU8(): Uint8Array;
  getAddressPrefixHash_asB64(): string;
  setAddressPrefixHash(value: Uint8Array | string): PrefixedSealedAndSignedMessage;

  getUid(): string;
  setUid(value: string): PrefixedSealedAndSignedMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PrefixedSealedAndSignedMessage.AsObject;
  static toObject(includeInstance: boolean, msg: PrefixedSealedAndSignedMessage): PrefixedSealedAndSignedMessage.AsObject;
  static serializeBinaryToWriter(message: PrefixedSealedAndSignedMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PrefixedSealedAndSignedMessage;
  static deserializeBinaryFromReader(message: PrefixedSealedAndSignedMessage, reader: jspb.BinaryReader): PrefixedSealedAndSignedMessage;
}

export namespace PrefixedSealedAndSignedMessage {
  export type AsObject = {
    nodeAddress?: NodeAddress.AsObject,
    sealedAndSigned?: SealedAndSigned.AsObject,
    addressPrefixHash: Uint8Array | string,
    uid: string,
  }
}

export class InputsForDepositTxRequest extends jspb.Message {
  getTradeId(): string;
  setTradeId(value: string): InputsForDepositTxRequest;

  getSenderNodeAddress(): NodeAddress | undefined;
  setSenderNodeAddress(value?: NodeAddress): InputsForDepositTxRequest;
  hasSenderNodeAddress(): boolean;
  clearSenderNodeAddress(): InputsForDepositTxRequest;

  getTradeAmount(): number;
  setTradeAmount(value: number): InputsForDepositTxRequest;

  getTradePrice(): number;
  setTradePrice(value: number): InputsForDepositTxRequest;

  getTxFee(): number;
  setTxFee(value: number): InputsForDepositTxRequest;

  getTakerFee(): number;
  setTakerFee(value: number): InputsForDepositTxRequest;

  getRawTransactionInputsList(): Array<RawTransactionInput>;
  setRawTransactionInputsList(value: Array<RawTransactionInput>): InputsForDepositTxRequest;
  clearRawTransactionInputsList(): InputsForDepositTxRequest;
  addRawTransactionInputs(value?: RawTransactionInput, index?: number): RawTransactionInput;

  getChangeOutputValue(): number;
  setChangeOutputValue(value: number): InputsForDepositTxRequest;

  getChangeOutputAddress(): string;
  setChangeOutputAddress(value: string): InputsForDepositTxRequest;

  getTakerMultiSigPubKey(): Uint8Array | string;
  getTakerMultiSigPubKey_asU8(): Uint8Array;
  getTakerMultiSigPubKey_asB64(): string;
  setTakerMultiSigPubKey(value: Uint8Array | string): InputsForDepositTxRequest;

  getTakerPayoutAddressString(): string;
  setTakerPayoutAddressString(value: string): InputsForDepositTxRequest;

  getTakerPubKeyRing(): PubKeyRing | undefined;
  setTakerPubKeyRing(value?: PubKeyRing): InputsForDepositTxRequest;
  hasTakerPubKeyRing(): boolean;
  clearTakerPubKeyRing(): InputsForDepositTxRequest;

  getTakerPaymentAccountPayload(): PaymentAccountPayload | undefined;
  setTakerPaymentAccountPayload(value?: PaymentAccountPayload): InputsForDepositTxRequest;
  hasTakerPaymentAccountPayload(): boolean;
  clearTakerPaymentAccountPayload(): InputsForDepositTxRequest;

  getTakerAccountId(): string;
  setTakerAccountId(value: string): InputsForDepositTxRequest;

  getTakerFeeTxId(): string;
  setTakerFeeTxId(value: string): InputsForDepositTxRequest;

  getAcceptedArbitratorNodeAddressesList(): Array<NodeAddress>;
  setAcceptedArbitratorNodeAddressesList(value: Array<NodeAddress>): InputsForDepositTxRequest;
  clearAcceptedArbitratorNodeAddressesList(): InputsForDepositTxRequest;
  addAcceptedArbitratorNodeAddresses(value?: NodeAddress, index?: number): NodeAddress;

  getAcceptedMediatorNodeAddressesList(): Array<NodeAddress>;
  setAcceptedMediatorNodeAddressesList(value: Array<NodeAddress>): InputsForDepositTxRequest;
  clearAcceptedMediatorNodeAddressesList(): InputsForDepositTxRequest;
  addAcceptedMediatorNodeAddresses(value?: NodeAddress, index?: number): NodeAddress;

  getArbitratorNodeAddress(): NodeAddress | undefined;
  setArbitratorNodeAddress(value?: NodeAddress): InputsForDepositTxRequest;
  hasArbitratorNodeAddress(): boolean;
  clearArbitratorNodeAddress(): InputsForDepositTxRequest;

  getMediatorNodeAddress(): NodeAddress | undefined;
  setMediatorNodeAddress(value?: NodeAddress): InputsForDepositTxRequest;
  hasMediatorNodeAddress(): boolean;
  clearMediatorNodeAddress(): InputsForDepositTxRequest;

  getUid(): string;
  setUid(value: string): InputsForDepositTxRequest;

  getAccountAgeWitnessSignatureOfOfferId(): Uint8Array | string;
  getAccountAgeWitnessSignatureOfOfferId_asU8(): Uint8Array;
  getAccountAgeWitnessSignatureOfOfferId_asB64(): string;
  setAccountAgeWitnessSignatureOfOfferId(value: Uint8Array | string): InputsForDepositTxRequest;

  getCurrentDate(): number;
  setCurrentDate(value: number): InputsForDepositTxRequest;

  getAcceptedRefundAgentNodeAddressesList(): Array<NodeAddress>;
  setAcceptedRefundAgentNodeAddressesList(value: Array<NodeAddress>): InputsForDepositTxRequest;
  clearAcceptedRefundAgentNodeAddressesList(): InputsForDepositTxRequest;
  addAcceptedRefundAgentNodeAddresses(value?: NodeAddress, index?: number): NodeAddress;

  getRefundAgentNodeAddress(): NodeAddress | undefined;
  setRefundAgentNodeAddress(value?: NodeAddress): InputsForDepositTxRequest;
  hasRefundAgentNodeAddress(): boolean;
  clearRefundAgentNodeAddress(): InputsForDepositTxRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InputsForDepositTxRequest.AsObject;
  static toObject(includeInstance: boolean, msg: InputsForDepositTxRequest): InputsForDepositTxRequest.AsObject;
  static serializeBinaryToWriter(message: InputsForDepositTxRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InputsForDepositTxRequest;
  static deserializeBinaryFromReader(message: InputsForDepositTxRequest, reader: jspb.BinaryReader): InputsForDepositTxRequest;
}

export namespace InputsForDepositTxRequest {
  export type AsObject = {
    tradeId: string,
    senderNodeAddress?: NodeAddress.AsObject,
    tradeAmount: number,
    tradePrice: number,
    txFee: number,
    takerFee: number,
    rawTransactionInputsList: Array<RawTransactionInput.AsObject>,
    changeOutputValue: number,
    changeOutputAddress: string,
    takerMultiSigPubKey: Uint8Array | string,
    takerPayoutAddressString: string,
    takerPubKeyRing?: PubKeyRing.AsObject,
    takerPaymentAccountPayload?: PaymentAccountPayload.AsObject,
    takerAccountId: string,
    takerFeeTxId: string,
    acceptedArbitratorNodeAddressesList: Array<NodeAddress.AsObject>,
    acceptedMediatorNodeAddressesList: Array<NodeAddress.AsObject>,
    arbitratorNodeAddress?: NodeAddress.AsObject,
    mediatorNodeAddress?: NodeAddress.AsObject,
    uid: string,
    accountAgeWitnessSignatureOfOfferId: Uint8Array | string,
    currentDate: number,
    acceptedRefundAgentNodeAddressesList: Array<NodeAddress.AsObject>,
    refundAgentNodeAddress?: NodeAddress.AsObject,
  }
}

export class InputsForDepositTxResponse extends jspb.Message {
  getTradeId(): string;
  setTradeId(value: string): InputsForDepositTxResponse;

  getMakerPaymentAccountPayload(): PaymentAccountPayload | undefined;
  setMakerPaymentAccountPayload(value?: PaymentAccountPayload): InputsForDepositTxResponse;
  hasMakerPaymentAccountPayload(): boolean;
  clearMakerPaymentAccountPayload(): InputsForDepositTxResponse;

  getMakerAccountId(): string;
  setMakerAccountId(value: string): InputsForDepositTxResponse;

  getMakerContractAsJson(): string;
  setMakerContractAsJson(value: string): InputsForDepositTxResponse;

  getMakerContractSignature(): string;
  setMakerContractSignature(value: string): InputsForDepositTxResponse;

  getMakerPayoutAddressString(): string;
  setMakerPayoutAddressString(value: string): InputsForDepositTxResponse;

  getPreparedDepositTx(): Uint8Array | string;
  getPreparedDepositTx_asU8(): Uint8Array;
  getPreparedDepositTx_asB64(): string;
  setPreparedDepositTx(value: Uint8Array | string): InputsForDepositTxResponse;

  getMakerInputsList(): Array<RawTransactionInput>;
  setMakerInputsList(value: Array<RawTransactionInput>): InputsForDepositTxResponse;
  clearMakerInputsList(): InputsForDepositTxResponse;
  addMakerInputs(value?: RawTransactionInput, index?: number): RawTransactionInput;

  getMakerMultiSigPubKey(): Uint8Array | string;
  getMakerMultiSigPubKey_asU8(): Uint8Array;
  getMakerMultiSigPubKey_asB64(): string;
  setMakerMultiSigPubKey(value: Uint8Array | string): InputsForDepositTxResponse;

  getSenderNodeAddress(): NodeAddress | undefined;
  setSenderNodeAddress(value?: NodeAddress): InputsForDepositTxResponse;
  hasSenderNodeAddress(): boolean;
  clearSenderNodeAddress(): InputsForDepositTxResponse;

  getUid(): string;
  setUid(value: string): InputsForDepositTxResponse;

  getAccountAgeWitnessSignatureOfPreparedDepositTx(): Uint8Array | string;
  getAccountAgeWitnessSignatureOfPreparedDepositTx_asU8(): Uint8Array;
  getAccountAgeWitnessSignatureOfPreparedDepositTx_asB64(): string;
  setAccountAgeWitnessSignatureOfPreparedDepositTx(value: Uint8Array | string): InputsForDepositTxResponse;

  getCurrentDate(): number;
  setCurrentDate(value: number): InputsForDepositTxResponse;

  getLockTime(): number;
  setLockTime(value: number): InputsForDepositTxResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InputsForDepositTxResponse.AsObject;
  static toObject(includeInstance: boolean, msg: InputsForDepositTxResponse): InputsForDepositTxResponse.AsObject;
  static serializeBinaryToWriter(message: InputsForDepositTxResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InputsForDepositTxResponse;
  static deserializeBinaryFromReader(message: InputsForDepositTxResponse, reader: jspb.BinaryReader): InputsForDepositTxResponse;
}

export namespace InputsForDepositTxResponse {
  export type AsObject = {
    tradeId: string,
    makerPaymentAccountPayload?: PaymentAccountPayload.AsObject,
    makerAccountId: string,
    makerContractAsJson: string,
    makerContractSignature: string,
    makerPayoutAddressString: string,
    preparedDepositTx: Uint8Array | string,
    makerInputsList: Array<RawTransactionInput.AsObject>,
    makerMultiSigPubKey: Uint8Array | string,
    senderNodeAddress?: NodeAddress.AsObject,
    uid: string,
    accountAgeWitnessSignatureOfPreparedDepositTx: Uint8Array | string,
    currentDate: number,
    lockTime: number,
  }
}

export class InitTradeRequest extends jspb.Message {
  getTradeId(): string;
  setTradeId(value: string): InitTradeRequest;

  getSenderNodeAddress(): NodeAddress | undefined;
  setSenderNodeAddress(value?: NodeAddress): InitTradeRequest;
  hasSenderNodeAddress(): boolean;
  clearSenderNodeAddress(): InitTradeRequest;

  getPubKeyRing(): PubKeyRing | undefined;
  setPubKeyRing(value?: PubKeyRing): InitTradeRequest;
  hasPubKeyRing(): boolean;
  clearPubKeyRing(): InitTradeRequest;

  getTradeAmount(): number;
  setTradeAmount(value: number): InitTradeRequest;

  getTradePrice(): number;
  setTradePrice(value: number): InitTradeRequest;

  getTradeFee(): number;
  setTradeFee(value: number): InitTradeRequest;

  getAccountId(): string;
  setAccountId(value: string): InitTradeRequest;

  getPaymentAccountId(): string;
  setPaymentAccountId(value: string): InitTradeRequest;

  getPaymentMethodId(): string;
  setPaymentMethodId(value: string): InitTradeRequest;

  getUid(): string;
  setUid(value: string): InitTradeRequest;

  getAccountAgeWitnessSignatureOfOfferId(): Uint8Array | string;
  getAccountAgeWitnessSignatureOfOfferId_asU8(): Uint8Array;
  getAccountAgeWitnessSignatureOfOfferId_asB64(): string;
  setAccountAgeWitnessSignatureOfOfferId(value: Uint8Array | string): InitTradeRequest;

  getCurrentDate(): number;
  setCurrentDate(value: number): InitTradeRequest;

  getMakerNodeAddress(): NodeAddress | undefined;
  setMakerNodeAddress(value?: NodeAddress): InitTradeRequest;
  hasMakerNodeAddress(): boolean;
  clearMakerNodeAddress(): InitTradeRequest;

  getTakerNodeAddress(): NodeAddress | undefined;
  setTakerNodeAddress(value?: NodeAddress): InitTradeRequest;
  hasTakerNodeAddress(): boolean;
  clearTakerNodeAddress(): InitTradeRequest;

  getArbitratorNodeAddress(): NodeAddress | undefined;
  setArbitratorNodeAddress(value?: NodeAddress): InitTradeRequest;
  hasArbitratorNodeAddress(): boolean;
  clearArbitratorNodeAddress(): InitTradeRequest;

  getReserveTxHash(): string;
  setReserveTxHash(value: string): InitTradeRequest;

  getReserveTxHex(): string;
  setReserveTxHex(value: string): InitTradeRequest;

  getReserveTxKey(): string;
  setReserveTxKey(value: string): InitTradeRequest;

  getPayoutAddress(): string;
  setPayoutAddress(value: string): InitTradeRequest;

  getMakerSignature(): string;
  setMakerSignature(value: string): InitTradeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InitTradeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: InitTradeRequest): InitTradeRequest.AsObject;
  static serializeBinaryToWriter(message: InitTradeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InitTradeRequest;
  static deserializeBinaryFromReader(message: InitTradeRequest, reader: jspb.BinaryReader): InitTradeRequest;
}

export namespace InitTradeRequest {
  export type AsObject = {
    tradeId: string,
    senderNodeAddress?: NodeAddress.AsObject,
    pubKeyRing?: PubKeyRing.AsObject,
    tradeAmount: number,
    tradePrice: number,
    tradeFee: number,
    accountId: string,
    paymentAccountId: string,
    paymentMethodId: string,
    uid: string,
    accountAgeWitnessSignatureOfOfferId: Uint8Array | string,
    currentDate: number,
    makerNodeAddress?: NodeAddress.AsObject,
    takerNodeAddress?: NodeAddress.AsObject,
    arbitratorNodeAddress?: NodeAddress.AsObject,
    reserveTxHash: string,
    reserveTxHex: string,
    reserveTxKey: string,
    payoutAddress: string,
    makerSignature: string,
  }
}

export class InitMultisigRequest extends jspb.Message {
  getTradeId(): string;
  setTradeId(value: string): InitMultisigRequest;

  getSenderNodeAddress(): NodeAddress | undefined;
  setSenderNodeAddress(value?: NodeAddress): InitMultisigRequest;
  hasSenderNodeAddress(): boolean;
  clearSenderNodeAddress(): InitMultisigRequest;

  getPubKeyRing(): PubKeyRing | undefined;
  setPubKeyRing(value?: PubKeyRing): InitMultisigRequest;
  hasPubKeyRing(): boolean;
  clearPubKeyRing(): InitMultisigRequest;

  getUid(): string;
  setUid(value: string): InitMultisigRequest;

  getCurrentDate(): number;
  setCurrentDate(value: number): InitMultisigRequest;

  getPreparedMultisigHex(): string;
  setPreparedMultisigHex(value: string): InitMultisigRequest;

  getMadeMultisigHex(): string;
  setMadeMultisigHex(value: string): InitMultisigRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InitMultisigRequest.AsObject;
  static toObject(includeInstance: boolean, msg: InitMultisigRequest): InitMultisigRequest.AsObject;
  static serializeBinaryToWriter(message: InitMultisigRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InitMultisigRequest;
  static deserializeBinaryFromReader(message: InitMultisigRequest, reader: jspb.BinaryReader): InitMultisigRequest;
}

export namespace InitMultisigRequest {
  export type AsObject = {
    tradeId: string,
    senderNodeAddress?: NodeAddress.AsObject,
    pubKeyRing?: PubKeyRing.AsObject,
    uid: string,
    currentDate: number,
    preparedMultisigHex: string,
    madeMultisigHex: string,
  }
}

export class SignContractRequest extends jspb.Message {
  getTradeId(): string;
  setTradeId(value: string): SignContractRequest;

  getSenderNodeAddress(): NodeAddress | undefined;
  setSenderNodeAddress(value?: NodeAddress): SignContractRequest;
  hasSenderNodeAddress(): boolean;
  clearSenderNodeAddress(): SignContractRequest;

  getPubKeyRing(): PubKeyRing | undefined;
  setPubKeyRing(value?: PubKeyRing): SignContractRequest;
  hasPubKeyRing(): boolean;
  clearPubKeyRing(): SignContractRequest;

  getUid(): string;
  setUid(value: string): SignContractRequest;

  getCurrentDate(): number;
  setCurrentDate(value: number): SignContractRequest;

  getAccountId(): string;
  setAccountId(value: string): SignContractRequest;

  getPaymentAccountPayloadHash(): Uint8Array | string;
  getPaymentAccountPayloadHash_asU8(): Uint8Array;
  getPaymentAccountPayloadHash_asB64(): string;
  setPaymentAccountPayloadHash(value: Uint8Array | string): SignContractRequest;

  getPayoutAddress(): string;
  setPayoutAddress(value: string): SignContractRequest;

  getDepositTxHash(): string;
  setDepositTxHash(value: string): SignContractRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignContractRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SignContractRequest): SignContractRequest.AsObject;
  static serializeBinaryToWriter(message: SignContractRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignContractRequest;
  static deserializeBinaryFromReader(message: SignContractRequest, reader: jspb.BinaryReader): SignContractRequest;
}

export namespace SignContractRequest {
  export type AsObject = {
    tradeId: string,
    senderNodeAddress?: NodeAddress.AsObject,
    pubKeyRing?: PubKeyRing.AsObject,
    uid: string,
    currentDate: number,
    accountId: string,
    paymentAccountPayloadHash: Uint8Array | string,
    payoutAddress: string,
    depositTxHash: string,
  }
}

export class SignContractResponse extends jspb.Message {
  getTradeId(): string;
  setTradeId(value: string): SignContractResponse;

  getSenderNodeAddress(): NodeAddress | undefined;
  setSenderNodeAddress(value?: NodeAddress): SignContractResponse;
  hasSenderNodeAddress(): boolean;
  clearSenderNodeAddress(): SignContractResponse;

  getPubKeyRing(): PubKeyRing | undefined;
  setPubKeyRing(value?: PubKeyRing): SignContractResponse;
  hasPubKeyRing(): boolean;
  clearPubKeyRing(): SignContractResponse;

  getUid(): string;
  setUid(value: string): SignContractResponse;

  getCurrentDate(): number;
  setCurrentDate(value: number): SignContractResponse;

  getContractSignature(): string;
  setContractSignature(value: string): SignContractResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignContractResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SignContractResponse): SignContractResponse.AsObject;
  static serializeBinaryToWriter(message: SignContractResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignContractResponse;
  static deserializeBinaryFromReader(message: SignContractResponse, reader: jspb.BinaryReader): SignContractResponse;
}

export namespace SignContractResponse {
  export type AsObject = {
    tradeId: string,
    senderNodeAddress?: NodeAddress.AsObject,
    pubKeyRing?: PubKeyRing.AsObject,
    uid: string,
    currentDate: number,
    contractSignature: string,
  }
}

export class DepositRequest extends jspb.Message {
  getTradeId(): string;
  setTradeId(value: string): DepositRequest;

  getSenderNodeAddress(): NodeAddress | undefined;
  setSenderNodeAddress(value?: NodeAddress): DepositRequest;
  hasSenderNodeAddress(): boolean;
  clearSenderNodeAddress(): DepositRequest;

  getPubKeyRing(): PubKeyRing | undefined;
  setPubKeyRing(value?: PubKeyRing): DepositRequest;
  hasPubKeyRing(): boolean;
  clearPubKeyRing(): DepositRequest;

  getUid(): string;
  setUid(value: string): DepositRequest;

  getCurrentDate(): number;
  setCurrentDate(value: number): DepositRequest;

  getContractSignature(): string;
  setContractSignature(value: string): DepositRequest;

  getDepositTxHex(): string;
  setDepositTxHex(value: string): DepositRequest;

  getDepositTxKey(): string;
  setDepositTxKey(value: string): DepositRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DepositRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DepositRequest): DepositRequest.AsObject;
  static serializeBinaryToWriter(message: DepositRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DepositRequest;
  static deserializeBinaryFromReader(message: DepositRequest, reader: jspb.BinaryReader): DepositRequest;
}

export namespace DepositRequest {
  export type AsObject = {
    tradeId: string,
    senderNodeAddress?: NodeAddress.AsObject,
    pubKeyRing?: PubKeyRing.AsObject,
    uid: string,
    currentDate: number,
    contractSignature: string,
    depositTxHex: string,
    depositTxKey: string,
  }
}

export class DepositResponse extends jspb.Message {
  getTradeId(): string;
  setTradeId(value: string): DepositResponse;

  getSenderNodeAddress(): NodeAddress | undefined;
  setSenderNodeAddress(value?: NodeAddress): DepositResponse;
  hasSenderNodeAddress(): boolean;
  clearSenderNodeAddress(): DepositResponse;

  getPubKeyRing(): PubKeyRing | undefined;
  setPubKeyRing(value?: PubKeyRing): DepositResponse;
  hasPubKeyRing(): boolean;
  clearPubKeyRing(): DepositResponse;

  getUid(): string;
  setUid(value: string): DepositResponse;

  getCurrentDate(): number;
  setCurrentDate(value: number): DepositResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DepositResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DepositResponse): DepositResponse.AsObject;
  static serializeBinaryToWriter(message: DepositResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DepositResponse;
  static deserializeBinaryFromReader(message: DepositResponse, reader: jspb.BinaryReader): DepositResponse;
}

export namespace DepositResponse {
  export type AsObject = {
    tradeId: string,
    senderNodeAddress?: NodeAddress.AsObject,
    pubKeyRing?: PubKeyRing.AsObject,
    uid: string,
    currentDate: number,
  }
}

export class PaymentAccountPayloadRequest extends jspb.Message {
  getTradeId(): string;
  setTradeId(value: string): PaymentAccountPayloadRequest;

  getSenderNodeAddress(): NodeAddress | undefined;
  setSenderNodeAddress(value?: NodeAddress): PaymentAccountPayloadRequest;
  hasSenderNodeAddress(): boolean;
  clearSenderNodeAddress(): PaymentAccountPayloadRequest;

  getPubKeyRing(): PubKeyRing | undefined;
  setPubKeyRing(value?: PubKeyRing): PaymentAccountPayloadRequest;
  hasPubKeyRing(): boolean;
  clearPubKeyRing(): PaymentAccountPayloadRequest;

  getUid(): string;
  setUid(value: string): PaymentAccountPayloadRequest;

  getCurrentDate(): number;
  setCurrentDate(value: number): PaymentAccountPayloadRequest;

  getPaymentAccountPayload(): PaymentAccountPayload | undefined;
  setPaymentAccountPayload(value?: PaymentAccountPayload): PaymentAccountPayloadRequest;
  hasPaymentAccountPayload(): boolean;
  clearPaymentAccountPayload(): PaymentAccountPayloadRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaymentAccountPayloadRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PaymentAccountPayloadRequest): PaymentAccountPayloadRequest.AsObject;
  static serializeBinaryToWriter(message: PaymentAccountPayloadRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaymentAccountPayloadRequest;
  static deserializeBinaryFromReader(message: PaymentAccountPayloadRequest, reader: jspb.BinaryReader): PaymentAccountPayloadRequest;
}

export namespace PaymentAccountPayloadRequest {
  export type AsObject = {
    tradeId: string,
    senderNodeAddress?: NodeAddress.AsObject,
    pubKeyRing?: PubKeyRing.AsObject,
    uid: string,
    currentDate: number,
    paymentAccountPayload?: PaymentAccountPayload.AsObject,
  }
}

export class UpdateMultisigRequest extends jspb.Message {
  getTradeId(): string;
  setTradeId(value: string): UpdateMultisigRequest;

  getSenderNodeAddress(): NodeAddress | undefined;
  setSenderNodeAddress(value?: NodeAddress): UpdateMultisigRequest;
  hasSenderNodeAddress(): boolean;
  clearSenderNodeAddress(): UpdateMultisigRequest;

  getPubKeyRing(): PubKeyRing | undefined;
  setPubKeyRing(value?: PubKeyRing): UpdateMultisigRequest;
  hasPubKeyRing(): boolean;
  clearPubKeyRing(): UpdateMultisigRequest;

  getUid(): string;
  setUid(value: string): UpdateMultisigRequest;

  getCurrentDate(): number;
  setCurrentDate(value: number): UpdateMultisigRequest;

  getUpdatedMultisigHex(): string;
  setUpdatedMultisigHex(value: string): UpdateMultisigRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateMultisigRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateMultisigRequest): UpdateMultisigRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateMultisigRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateMultisigRequest;
  static deserializeBinaryFromReader(message: UpdateMultisigRequest, reader: jspb.BinaryReader): UpdateMultisigRequest;
}

export namespace UpdateMultisigRequest {
  export type AsObject = {
    tradeId: string,
    senderNodeAddress?: NodeAddress.AsObject,
    pubKeyRing?: PubKeyRing.AsObject,
    uid: string,
    currentDate: number,
    updatedMultisigHex: string,
  }
}

export class UpdateMultisigResponse extends jspb.Message {
  getTradeId(): string;
  setTradeId(value: string): UpdateMultisigResponse;

  getSenderNodeAddress(): NodeAddress | undefined;
  setSenderNodeAddress(value?: NodeAddress): UpdateMultisigResponse;
  hasSenderNodeAddress(): boolean;
  clearSenderNodeAddress(): UpdateMultisigResponse;

  getPubKeyRing(): PubKeyRing | undefined;
  setPubKeyRing(value?: PubKeyRing): UpdateMultisigResponse;
  hasPubKeyRing(): boolean;
  clearPubKeyRing(): UpdateMultisigResponse;

  getUid(): string;
  setUid(value: string): UpdateMultisigResponse;

  getCurrentDate(): number;
  setCurrentDate(value: number): UpdateMultisigResponse;

  getUpdatedMultisigHex(): string;
  setUpdatedMultisigHex(value: string): UpdateMultisigResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateMultisigResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateMultisigResponse): UpdateMultisigResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateMultisigResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateMultisigResponse;
  static deserializeBinaryFromReader(message: UpdateMultisigResponse, reader: jspb.BinaryReader): UpdateMultisigResponse;
}

export namespace UpdateMultisigResponse {
  export type AsObject = {
    tradeId: string,
    senderNodeAddress?: NodeAddress.AsObject,
    pubKeyRing?: PubKeyRing.AsObject,
    uid: string,
    currentDate: number,
    updatedMultisigHex: string,
  }
}

export class DelayedPayoutTxSignatureRequest extends jspb.Message {
  getUid(): string;
  setUid(value: string): DelayedPayoutTxSignatureRequest;

  getTradeId(): string;
  setTradeId(value: string): DelayedPayoutTxSignatureRequest;

  getSenderNodeAddress(): NodeAddress | undefined;
  setSenderNodeAddress(value?: NodeAddress): DelayedPayoutTxSignatureRequest;
  hasSenderNodeAddress(): boolean;
  clearSenderNodeAddress(): DelayedPayoutTxSignatureRequest;

  getDelayedPayoutTx(): Uint8Array | string;
  getDelayedPayoutTx_asU8(): Uint8Array;
  getDelayedPayoutTx_asB64(): string;
  setDelayedPayoutTx(value: Uint8Array | string): DelayedPayoutTxSignatureRequest;

  getDelayedPayoutTxSellerSignature(): Uint8Array | string;
  getDelayedPayoutTxSellerSignature_asU8(): Uint8Array;
  getDelayedPayoutTxSellerSignature_asB64(): string;
  setDelayedPayoutTxSellerSignature(value: Uint8Array | string): DelayedPayoutTxSignatureRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DelayedPayoutTxSignatureRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DelayedPayoutTxSignatureRequest): DelayedPayoutTxSignatureRequest.AsObject;
  static serializeBinaryToWriter(message: DelayedPayoutTxSignatureRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DelayedPayoutTxSignatureRequest;
  static deserializeBinaryFromReader(message: DelayedPayoutTxSignatureRequest, reader: jspb.BinaryReader): DelayedPayoutTxSignatureRequest;
}

export namespace DelayedPayoutTxSignatureRequest {
  export type AsObject = {
    uid: string,
    tradeId: string,
    senderNodeAddress?: NodeAddress.AsObject,
    delayedPayoutTx: Uint8Array | string,
    delayedPayoutTxSellerSignature: Uint8Array | string,
  }
}

export class DelayedPayoutTxSignatureResponse extends jspb.Message {
  getUid(): string;
  setUid(value: string): DelayedPayoutTxSignatureResponse;

  getTradeId(): string;
  setTradeId(value: string): DelayedPayoutTxSignatureResponse;

  getSenderNodeAddress(): NodeAddress | undefined;
  setSenderNodeAddress(value?: NodeAddress): DelayedPayoutTxSignatureResponse;
  hasSenderNodeAddress(): boolean;
  clearSenderNodeAddress(): DelayedPayoutTxSignatureResponse;

  getDelayedPayoutTxBuyerSignature(): Uint8Array | string;
  getDelayedPayoutTxBuyerSignature_asU8(): Uint8Array;
  getDelayedPayoutTxBuyerSignature_asB64(): string;
  setDelayedPayoutTxBuyerSignature(value: Uint8Array | string): DelayedPayoutTxSignatureResponse;

  getDepositTx(): Uint8Array | string;
  getDepositTx_asU8(): Uint8Array;
  getDepositTx_asB64(): string;
  setDepositTx(value: Uint8Array | string): DelayedPayoutTxSignatureResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DelayedPayoutTxSignatureResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DelayedPayoutTxSignatureResponse): DelayedPayoutTxSignatureResponse.AsObject;
  static serializeBinaryToWriter(message: DelayedPayoutTxSignatureResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DelayedPayoutTxSignatureResponse;
  static deserializeBinaryFromReader(message: DelayedPayoutTxSignatureResponse, reader: jspb.BinaryReader): DelayedPayoutTxSignatureResponse;
}

export namespace DelayedPayoutTxSignatureResponse {
  export type AsObject = {
    uid: string,
    tradeId: string,
    senderNodeAddress?: NodeAddress.AsObject,
    delayedPayoutTxBuyerSignature: Uint8Array | string,
    depositTx: Uint8Array | string,
  }
}

export class DepositTxAndDelayedPayoutTxMessage extends jspb.Message {
  getUid(): string;
  setUid(value: string): DepositTxAndDelayedPayoutTxMessage;

  getTradeId(): string;
  setTradeId(value: string): DepositTxAndDelayedPayoutTxMessage;

  getSenderNodeAddress(): NodeAddress | undefined;
  setSenderNodeAddress(value?: NodeAddress): DepositTxAndDelayedPayoutTxMessage;
  hasSenderNodeAddress(): boolean;
  clearSenderNodeAddress(): DepositTxAndDelayedPayoutTxMessage;

  getDepositTx(): Uint8Array | string;
  getDepositTx_asU8(): Uint8Array;
  getDepositTx_asB64(): string;
  setDepositTx(value: Uint8Array | string): DepositTxAndDelayedPayoutTxMessage;

  getDelayedPayoutTx(): Uint8Array | string;
  getDelayedPayoutTx_asU8(): Uint8Array;
  getDelayedPayoutTx_asB64(): string;
  setDelayedPayoutTx(value: Uint8Array | string): DepositTxAndDelayedPayoutTxMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DepositTxAndDelayedPayoutTxMessage.AsObject;
  static toObject(includeInstance: boolean, msg: DepositTxAndDelayedPayoutTxMessage): DepositTxAndDelayedPayoutTxMessage.AsObject;
  static serializeBinaryToWriter(message: DepositTxAndDelayedPayoutTxMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DepositTxAndDelayedPayoutTxMessage;
  static deserializeBinaryFromReader(message: DepositTxAndDelayedPayoutTxMessage, reader: jspb.BinaryReader): DepositTxAndDelayedPayoutTxMessage;
}

export namespace DepositTxAndDelayedPayoutTxMessage {
  export type AsObject = {
    uid: string,
    tradeId: string,
    senderNodeAddress?: NodeAddress.AsObject,
    depositTx: Uint8Array | string,
    delayedPayoutTx: Uint8Array | string,
  }
}

export class DepositTxMessage extends jspb.Message {
  getUid(): string;
  setUid(value: string): DepositTxMessage;

  getTradeId(): string;
  setTradeId(value: string): DepositTxMessage;

  getSenderNodeAddress(): NodeAddress | undefined;
  setSenderNodeAddress(value?: NodeAddress): DepositTxMessage;
  hasSenderNodeAddress(): boolean;
  clearSenderNodeAddress(): DepositTxMessage;

  getDepositTxWithoutWitnesses(): Uint8Array | string;
  getDepositTxWithoutWitnesses_asU8(): Uint8Array;
  getDepositTxWithoutWitnesses_asB64(): string;
  setDepositTxWithoutWitnesses(value: Uint8Array | string): DepositTxMessage;

  getPubKeyRing(): PubKeyRing | undefined;
  setPubKeyRing(value?: PubKeyRing): DepositTxMessage;
  hasPubKeyRing(): boolean;
  clearPubKeyRing(): DepositTxMessage;

  getTradeFeeTxId(): string;
  setTradeFeeTxId(value: string): DepositTxMessage;

  getDepositTxId(): string;
  setDepositTxId(value: string): DepositTxMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DepositTxMessage.AsObject;
  static toObject(includeInstance: boolean, msg: DepositTxMessage): DepositTxMessage.AsObject;
  static serializeBinaryToWriter(message: DepositTxMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DepositTxMessage;
  static deserializeBinaryFromReader(message: DepositTxMessage, reader: jspb.BinaryReader): DepositTxMessage;
}

export namespace DepositTxMessage {
  export type AsObject = {
    uid: string,
    tradeId: string,
    senderNodeAddress?: NodeAddress.AsObject,
    depositTxWithoutWitnesses: Uint8Array | string,
    pubKeyRing?: PubKeyRing.AsObject,
    tradeFeeTxId: string,
    depositTxId: string,
  }
}

export class PeerPublishedDelayedPayoutTxMessage extends jspb.Message {
  getUid(): string;
  setUid(value: string): PeerPublishedDelayedPayoutTxMessage;

  getTradeId(): string;
  setTradeId(value: string): PeerPublishedDelayedPayoutTxMessage;

  getSenderNodeAddress(): NodeAddress | undefined;
  setSenderNodeAddress(value?: NodeAddress): PeerPublishedDelayedPayoutTxMessage;
  hasSenderNodeAddress(): boolean;
  clearSenderNodeAddress(): PeerPublishedDelayedPayoutTxMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PeerPublishedDelayedPayoutTxMessage.AsObject;
  static toObject(includeInstance: boolean, msg: PeerPublishedDelayedPayoutTxMessage): PeerPublishedDelayedPayoutTxMessage.AsObject;
  static serializeBinaryToWriter(message: PeerPublishedDelayedPayoutTxMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PeerPublishedDelayedPayoutTxMessage;
  static deserializeBinaryFromReader(message: PeerPublishedDelayedPayoutTxMessage, reader: jspb.BinaryReader): PeerPublishedDelayedPayoutTxMessage;
}

export namespace PeerPublishedDelayedPayoutTxMessage {
  export type AsObject = {
    uid: string,
    tradeId: string,
    senderNodeAddress?: NodeAddress.AsObject,
  }
}

export class CounterCurrencyTransferStartedMessage extends jspb.Message {
  getTradeId(): string;
  setTradeId(value: string): CounterCurrencyTransferStartedMessage;

  getBuyerPayoutAddress(): string;
  setBuyerPayoutAddress(value: string): CounterCurrencyTransferStartedMessage;

  getSenderNodeAddress(): NodeAddress | undefined;
  setSenderNodeAddress(value?: NodeAddress): CounterCurrencyTransferStartedMessage;
  hasSenderNodeAddress(): boolean;
  clearSenderNodeAddress(): CounterCurrencyTransferStartedMessage;

  getBuyerPayoutTxSigned(): string;
  setBuyerPayoutTxSigned(value: string): CounterCurrencyTransferStartedMessage;

  getCounterCurrencyTxId(): string;
  setCounterCurrencyTxId(value: string): CounterCurrencyTransferStartedMessage;

  getUid(): string;
  setUid(value: string): CounterCurrencyTransferStartedMessage;

  getCounterCurrencyExtraData(): string;
  setCounterCurrencyExtraData(value: string): CounterCurrencyTransferStartedMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CounterCurrencyTransferStartedMessage.AsObject;
  static toObject(includeInstance: boolean, msg: CounterCurrencyTransferStartedMessage): CounterCurrencyTransferStartedMessage.AsObject;
  static serializeBinaryToWriter(message: CounterCurrencyTransferStartedMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CounterCurrencyTransferStartedMessage;
  static deserializeBinaryFromReader(message: CounterCurrencyTransferStartedMessage, reader: jspb.BinaryReader): CounterCurrencyTransferStartedMessage;
}

export namespace CounterCurrencyTransferStartedMessage {
  export type AsObject = {
    tradeId: string,
    buyerPayoutAddress: string,
    senderNodeAddress?: NodeAddress.AsObject,
    buyerPayoutTxSigned: string,
    counterCurrencyTxId: string,
    uid: string,
    counterCurrencyExtraData: string,
  }
}

export class FinalizePayoutTxRequest extends jspb.Message {
  getTradeId(): string;
  setTradeId(value: string): FinalizePayoutTxRequest;

  getSellerSignature(): Uint8Array | string;
  getSellerSignature_asU8(): Uint8Array;
  getSellerSignature_asB64(): string;
  setSellerSignature(value: Uint8Array | string): FinalizePayoutTxRequest;

  getSellerPayoutAddress(): string;
  setSellerPayoutAddress(value: string): FinalizePayoutTxRequest;

  getSenderNodeAddress(): NodeAddress | undefined;
  setSenderNodeAddress(value?: NodeAddress): FinalizePayoutTxRequest;
  hasSenderNodeAddress(): boolean;
  clearSenderNodeAddress(): FinalizePayoutTxRequest;

  getUid(): string;
  setUid(value: string): FinalizePayoutTxRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FinalizePayoutTxRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FinalizePayoutTxRequest): FinalizePayoutTxRequest.AsObject;
  static serializeBinaryToWriter(message: FinalizePayoutTxRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FinalizePayoutTxRequest;
  static deserializeBinaryFromReader(message: FinalizePayoutTxRequest, reader: jspb.BinaryReader): FinalizePayoutTxRequest;
}

export namespace FinalizePayoutTxRequest {
  export type AsObject = {
    tradeId: string,
    sellerSignature: Uint8Array | string,
    sellerPayoutAddress: string,
    senderNodeAddress?: NodeAddress.AsObject,
    uid: string,
  }
}

export class ArbitratorPayoutTxRequest extends jspb.Message {
  getDispute(): Dispute | undefined;
  setDispute(value?: Dispute): ArbitratorPayoutTxRequest;
  hasDispute(): boolean;
  clearDispute(): ArbitratorPayoutTxRequest;

  getSenderNodeAddress(): NodeAddress | undefined;
  setSenderNodeAddress(value?: NodeAddress): ArbitratorPayoutTxRequest;
  hasSenderNodeAddress(): boolean;
  clearSenderNodeAddress(): ArbitratorPayoutTxRequest;

  getUid(): string;
  setUid(value: string): ArbitratorPayoutTxRequest;

  getType(): SupportType;
  setType(value: SupportType): ArbitratorPayoutTxRequest;

  getUpdatedMultisigHex(): string;
  setUpdatedMultisigHex(value: string): ArbitratorPayoutTxRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArbitratorPayoutTxRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ArbitratorPayoutTxRequest): ArbitratorPayoutTxRequest.AsObject;
  static serializeBinaryToWriter(message: ArbitratorPayoutTxRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArbitratorPayoutTxRequest;
  static deserializeBinaryFromReader(message: ArbitratorPayoutTxRequest, reader: jspb.BinaryReader): ArbitratorPayoutTxRequest;
}

export namespace ArbitratorPayoutTxRequest {
  export type AsObject = {
    dispute?: Dispute.AsObject,
    senderNodeAddress?: NodeAddress.AsObject,
    uid: string,
    type: SupportType,
    updatedMultisigHex: string,
  }
}

export class ArbitratorPayoutTxResponse extends jspb.Message {
  getTradeId(): string;
  setTradeId(value: string): ArbitratorPayoutTxResponse;

  getSenderNodeAddress(): NodeAddress | undefined;
  setSenderNodeAddress(value?: NodeAddress): ArbitratorPayoutTxResponse;
  hasSenderNodeAddress(): boolean;
  clearSenderNodeAddress(): ArbitratorPayoutTxResponse;

  getUid(): string;
  setUid(value: string): ArbitratorPayoutTxResponse;

  getType(): SupportType;
  setType(value: SupportType): ArbitratorPayoutTxResponse;

  getArbitratorSignedPayoutTxHex(): string;
  setArbitratorSignedPayoutTxHex(value: string): ArbitratorPayoutTxResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArbitratorPayoutTxResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ArbitratorPayoutTxResponse): ArbitratorPayoutTxResponse.AsObject;
  static serializeBinaryToWriter(message: ArbitratorPayoutTxResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArbitratorPayoutTxResponse;
  static deserializeBinaryFromReader(message: ArbitratorPayoutTxResponse, reader: jspb.BinaryReader): ArbitratorPayoutTxResponse;
}

export namespace ArbitratorPayoutTxResponse {
  export type AsObject = {
    tradeId: string,
    senderNodeAddress?: NodeAddress.AsObject,
    uid: string,
    type: SupportType,
    arbitratorSignedPayoutTxHex: string,
  }
}

export class PayoutTxPublishedMessage extends jspb.Message {
  getTradeId(): string;
  setTradeId(value: string): PayoutTxPublishedMessage;

  getSignedMultisigTxHex(): string;
  setSignedMultisigTxHex(value: string): PayoutTxPublishedMessage;

  getSenderNodeAddress(): NodeAddress | undefined;
  setSenderNodeAddress(value?: NodeAddress): PayoutTxPublishedMessage;
  hasSenderNodeAddress(): boolean;
  clearSenderNodeAddress(): PayoutTxPublishedMessage;

  getUid(): string;
  setUid(value: string): PayoutTxPublishedMessage;

  getSignedWitness(): SignedWitness | undefined;
  setSignedWitness(value?: SignedWitness): PayoutTxPublishedMessage;
  hasSignedWitness(): boolean;
  clearSignedWitness(): PayoutTxPublishedMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PayoutTxPublishedMessage.AsObject;
  static toObject(includeInstance: boolean, msg: PayoutTxPublishedMessage): PayoutTxPublishedMessage.AsObject;
  static serializeBinaryToWriter(message: PayoutTxPublishedMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PayoutTxPublishedMessage;
  static deserializeBinaryFromReader(message: PayoutTxPublishedMessage, reader: jspb.BinaryReader): PayoutTxPublishedMessage;
}

export namespace PayoutTxPublishedMessage {
  export type AsObject = {
    tradeId: string,
    signedMultisigTxHex: string,
    senderNodeAddress?: NodeAddress.AsObject,
    uid: string,
    signedWitness?: SignedWitness.AsObject,
  }
}

export class MediatedPayoutTxPublishedMessage extends jspb.Message {
  getTradeId(): string;
  setTradeId(value: string): MediatedPayoutTxPublishedMessage;

  getPayoutTx(): Uint8Array | string;
  getPayoutTx_asU8(): Uint8Array;
  getPayoutTx_asB64(): string;
  setPayoutTx(value: Uint8Array | string): MediatedPayoutTxPublishedMessage;

  getSenderNodeAddress(): NodeAddress | undefined;
  setSenderNodeAddress(value?: NodeAddress): MediatedPayoutTxPublishedMessage;
  hasSenderNodeAddress(): boolean;
  clearSenderNodeAddress(): MediatedPayoutTxPublishedMessage;

  getUid(): string;
  setUid(value: string): MediatedPayoutTxPublishedMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MediatedPayoutTxPublishedMessage.AsObject;
  static toObject(includeInstance: boolean, msg: MediatedPayoutTxPublishedMessage): MediatedPayoutTxPublishedMessage.AsObject;
  static serializeBinaryToWriter(message: MediatedPayoutTxPublishedMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MediatedPayoutTxPublishedMessage;
  static deserializeBinaryFromReader(message: MediatedPayoutTxPublishedMessage, reader: jspb.BinaryReader): MediatedPayoutTxPublishedMessage;
}

export namespace MediatedPayoutTxPublishedMessage {
  export type AsObject = {
    tradeId: string,
    payoutTx: Uint8Array | string,
    senderNodeAddress?: NodeAddress.AsObject,
    uid: string,
  }
}

export class MediatedPayoutTxSignatureMessage extends jspb.Message {
  getUid(): string;
  setUid(value: string): MediatedPayoutTxSignatureMessage;

  getTradeId(): string;
  setTradeId(value: string): MediatedPayoutTxSignatureMessage;

  getTxSignature(): Uint8Array | string;
  getTxSignature_asU8(): Uint8Array;
  getTxSignature_asB64(): string;
  setTxSignature(value: Uint8Array | string): MediatedPayoutTxSignatureMessage;

  getSenderNodeAddress(): NodeAddress | undefined;
  setSenderNodeAddress(value?: NodeAddress): MediatedPayoutTxSignatureMessage;
  hasSenderNodeAddress(): boolean;
  clearSenderNodeAddress(): MediatedPayoutTxSignatureMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MediatedPayoutTxSignatureMessage.AsObject;
  static toObject(includeInstance: boolean, msg: MediatedPayoutTxSignatureMessage): MediatedPayoutTxSignatureMessage.AsObject;
  static serializeBinaryToWriter(message: MediatedPayoutTxSignatureMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MediatedPayoutTxSignatureMessage;
  static deserializeBinaryFromReader(message: MediatedPayoutTxSignatureMessage, reader: jspb.BinaryReader): MediatedPayoutTxSignatureMessage;
}

export namespace MediatedPayoutTxSignatureMessage {
  export type AsObject = {
    uid: string,
    tradeId: string,
    txSignature: Uint8Array | string,
    senderNodeAddress?: NodeAddress.AsObject,
  }
}

export class RefreshTradeStateRequest extends jspb.Message {
  getUid(): string;
  setUid(value: string): RefreshTradeStateRequest;

  getTradeId(): string;
  setTradeId(value: string): RefreshTradeStateRequest;

  getSenderNodeAddress(): NodeAddress | undefined;
  setSenderNodeAddress(value?: NodeAddress): RefreshTradeStateRequest;
  hasSenderNodeAddress(): boolean;
  clearSenderNodeAddress(): RefreshTradeStateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RefreshTradeStateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RefreshTradeStateRequest): RefreshTradeStateRequest.AsObject;
  static serializeBinaryToWriter(message: RefreshTradeStateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RefreshTradeStateRequest;
  static deserializeBinaryFromReader(message: RefreshTradeStateRequest, reader: jspb.BinaryReader): RefreshTradeStateRequest;
}

export namespace RefreshTradeStateRequest {
  export type AsObject = {
    uid: string,
    tradeId: string,
    senderNodeAddress?: NodeAddress.AsObject,
  }
}

export class TraderSignedWitnessMessage extends jspb.Message {
  getUid(): string;
  setUid(value: string): TraderSignedWitnessMessage;

  getTradeId(): string;
  setTradeId(value: string): TraderSignedWitnessMessage;

  getSenderNodeAddress(): NodeAddress | undefined;
  setSenderNodeAddress(value?: NodeAddress): TraderSignedWitnessMessage;
  hasSenderNodeAddress(): boolean;
  clearSenderNodeAddress(): TraderSignedWitnessMessage;

  getSignedWitness(): SignedWitness | undefined;
  setSignedWitness(value?: SignedWitness): TraderSignedWitnessMessage;
  hasSignedWitness(): boolean;
  clearSignedWitness(): TraderSignedWitnessMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TraderSignedWitnessMessage.AsObject;
  static toObject(includeInstance: boolean, msg: TraderSignedWitnessMessage): TraderSignedWitnessMessage.AsObject;
  static serializeBinaryToWriter(message: TraderSignedWitnessMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TraderSignedWitnessMessage;
  static deserializeBinaryFromReader(message: TraderSignedWitnessMessage, reader: jspb.BinaryReader): TraderSignedWitnessMessage;
}

export namespace TraderSignedWitnessMessage {
  export type AsObject = {
    uid: string,
    tradeId: string,
    senderNodeAddress?: NodeAddress.AsObject,
    signedWitness?: SignedWitness.AsObject,
  }
}

export class OpenNewDisputeMessage extends jspb.Message {
  getDispute(): Dispute | undefined;
  setDispute(value?: Dispute): OpenNewDisputeMessage;
  hasDispute(): boolean;
  clearDispute(): OpenNewDisputeMessage;

  getSenderNodeAddress(): NodeAddress | undefined;
  setSenderNodeAddress(value?: NodeAddress): OpenNewDisputeMessage;
  hasSenderNodeAddress(): boolean;
  clearSenderNodeAddress(): OpenNewDisputeMessage;

  getUid(): string;
  setUid(value: string): OpenNewDisputeMessage;

  getType(): SupportType;
  setType(value: SupportType): OpenNewDisputeMessage;

  getUpdatedMultisigHex(): string;
  setUpdatedMultisigHex(value: string): OpenNewDisputeMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OpenNewDisputeMessage.AsObject;
  static toObject(includeInstance: boolean, msg: OpenNewDisputeMessage): OpenNewDisputeMessage.AsObject;
  static serializeBinaryToWriter(message: OpenNewDisputeMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OpenNewDisputeMessage;
  static deserializeBinaryFromReader(message: OpenNewDisputeMessage, reader: jspb.BinaryReader): OpenNewDisputeMessage;
}

export namespace OpenNewDisputeMessage {
  export type AsObject = {
    dispute?: Dispute.AsObject,
    senderNodeAddress?: NodeAddress.AsObject,
    uid: string,
    type: SupportType,
    updatedMultisigHex: string,
  }
}

export class PeerOpenedDisputeMessage extends jspb.Message {
  getDispute(): Dispute | undefined;
  setDispute(value?: Dispute): PeerOpenedDisputeMessage;
  hasDispute(): boolean;
  clearDispute(): PeerOpenedDisputeMessage;

  getSenderNodeAddress(): NodeAddress | undefined;
  setSenderNodeAddress(value?: NodeAddress): PeerOpenedDisputeMessage;
  hasSenderNodeAddress(): boolean;
  clearSenderNodeAddress(): PeerOpenedDisputeMessage;

  getUid(): string;
  setUid(value: string): PeerOpenedDisputeMessage;

  getType(): SupportType;
  setType(value: SupportType): PeerOpenedDisputeMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PeerOpenedDisputeMessage.AsObject;
  static toObject(includeInstance: boolean, msg: PeerOpenedDisputeMessage): PeerOpenedDisputeMessage.AsObject;
  static serializeBinaryToWriter(message: PeerOpenedDisputeMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PeerOpenedDisputeMessage;
  static deserializeBinaryFromReader(message: PeerOpenedDisputeMessage, reader: jspb.BinaryReader): PeerOpenedDisputeMessage;
}

export namespace PeerOpenedDisputeMessage {
  export type AsObject = {
    dispute?: Dispute.AsObject,
    senderNodeAddress?: NodeAddress.AsObject,
    uid: string,
    type: SupportType,
  }
}

export class ChatMessage extends jspb.Message {
  getDate(): number;
  setDate(value: number): ChatMessage;

  getTradeId(): string;
  setTradeId(value: string): ChatMessage;

  getTraderId(): number;
  setTraderId(value: number): ChatMessage;

  getSenderIsTrader(): boolean;
  setSenderIsTrader(value: boolean): ChatMessage;

  getMessage(): string;
  setMessage(value: string): ChatMessage;

  getAttachmentsList(): Array<Attachment>;
  setAttachmentsList(value: Array<Attachment>): ChatMessage;
  clearAttachmentsList(): ChatMessage;
  addAttachments(value?: Attachment, index?: number): Attachment;

  getArrived(): boolean;
  setArrived(value: boolean): ChatMessage;

  getStoredInMailbox(): boolean;
  setStoredInMailbox(value: boolean): ChatMessage;

  getIsSystemMessage(): boolean;
  setIsSystemMessage(value: boolean): ChatMessage;

  getSenderNodeAddress(): NodeAddress | undefined;
  setSenderNodeAddress(value?: NodeAddress): ChatMessage;
  hasSenderNodeAddress(): boolean;
  clearSenderNodeAddress(): ChatMessage;

  getUid(): string;
  setUid(value: string): ChatMessage;

  getSendMessageError(): string;
  setSendMessageError(value: string): ChatMessage;

  getAcknowledged(): boolean;
  setAcknowledged(value: boolean): ChatMessage;

  getAckError(): string;
  setAckError(value: string): ChatMessage;

  getType(): SupportType;
  setType(value: SupportType): ChatMessage;

  getWasDisplayed(): boolean;
  setWasDisplayed(value: boolean): ChatMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChatMessage.AsObject;
  static toObject(includeInstance: boolean, msg: ChatMessage): ChatMessage.AsObject;
  static serializeBinaryToWriter(message: ChatMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChatMessage;
  static deserializeBinaryFromReader(message: ChatMessage, reader: jspb.BinaryReader): ChatMessage;
}

export namespace ChatMessage {
  export type AsObject = {
    date: number,
    tradeId: string,
    traderId: number,
    senderIsTrader: boolean,
    message: string,
    attachmentsList: Array<Attachment.AsObject>,
    arrived: boolean,
    storedInMailbox: boolean,
    isSystemMessage: boolean,
    senderNodeAddress?: NodeAddress.AsObject,
    uid: string,
    sendMessageError: string,
    acknowledged: boolean,
    ackError: string,
    type: SupportType,
    wasDisplayed: boolean,
  }
}

export class DisputeResultMessage extends jspb.Message {
  getUid(): string;
  setUid(value: string): DisputeResultMessage;

  getDisputeResult(): DisputeResult | undefined;
  setDisputeResult(value?: DisputeResult): DisputeResultMessage;
  hasDisputeResult(): boolean;
  clearDisputeResult(): DisputeResultMessage;

  getSenderNodeAddress(): NodeAddress | undefined;
  setSenderNodeAddress(value?: NodeAddress): DisputeResultMessage;
  hasSenderNodeAddress(): boolean;
  clearSenderNodeAddress(): DisputeResultMessage;

  getType(): SupportType;
  setType(value: SupportType): DisputeResultMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DisputeResultMessage.AsObject;
  static toObject(includeInstance: boolean, msg: DisputeResultMessage): DisputeResultMessage.AsObject;
  static serializeBinaryToWriter(message: DisputeResultMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DisputeResultMessage;
  static deserializeBinaryFromReader(message: DisputeResultMessage, reader: jspb.BinaryReader): DisputeResultMessage;
}

export namespace DisputeResultMessage {
  export type AsObject = {
    uid: string,
    disputeResult?: DisputeResult.AsObject,
    senderNodeAddress?: NodeAddress.AsObject,
    type: SupportType,
  }
}

export class PeerPublishedDisputePayoutTxMessage extends jspb.Message {
  getUid(): string;
  setUid(value: string): PeerPublishedDisputePayoutTxMessage;

  getTradeId(): string;
  setTradeId(value: string): PeerPublishedDisputePayoutTxMessage;

  getSenderNodeAddress(): NodeAddress | undefined;
  setSenderNodeAddress(value?: NodeAddress): PeerPublishedDisputePayoutTxMessage;
  hasSenderNodeAddress(): boolean;
  clearSenderNodeAddress(): PeerPublishedDisputePayoutTxMessage;

  getType(): SupportType;
  setType(value: SupportType): PeerPublishedDisputePayoutTxMessage;

  getUpdatedMultisigHex(): string;
  setUpdatedMultisigHex(value: string): PeerPublishedDisputePayoutTxMessage;

  getPayoutTxHex(): string;
  setPayoutTxHex(value: string): PeerPublishedDisputePayoutTxMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PeerPublishedDisputePayoutTxMessage.AsObject;
  static toObject(includeInstance: boolean, msg: PeerPublishedDisputePayoutTxMessage): PeerPublishedDisputePayoutTxMessage.AsObject;
  static serializeBinaryToWriter(message: PeerPublishedDisputePayoutTxMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PeerPublishedDisputePayoutTxMessage;
  static deserializeBinaryFromReader(message: PeerPublishedDisputePayoutTxMessage, reader: jspb.BinaryReader): PeerPublishedDisputePayoutTxMessage;
}

export namespace PeerPublishedDisputePayoutTxMessage {
  export type AsObject = {
    uid: string,
    tradeId: string,
    senderNodeAddress?: NodeAddress.AsObject,
    type: SupportType,
    updatedMultisigHex: string,
    payoutTxHex: string,
  }
}

export class PrivateNotificationMessage extends jspb.Message {
  getUid(): string;
  setUid(value: string): PrivateNotificationMessage;

  getSenderNodeAddress(): NodeAddress | undefined;
  setSenderNodeAddress(value?: NodeAddress): PrivateNotificationMessage;
  hasSenderNodeAddress(): boolean;
  clearSenderNodeAddress(): PrivateNotificationMessage;

  getPrivateNotificationPayload(): PrivateNotificationPayload | undefined;
  setPrivateNotificationPayload(value?: PrivateNotificationPayload): PrivateNotificationMessage;
  hasPrivateNotificationPayload(): boolean;
  clearPrivateNotificationPayload(): PrivateNotificationMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PrivateNotificationMessage.AsObject;
  static toObject(includeInstance: boolean, msg: PrivateNotificationMessage): PrivateNotificationMessage.AsObject;
  static serializeBinaryToWriter(message: PrivateNotificationMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PrivateNotificationMessage;
  static deserializeBinaryFromReader(message: PrivateNotificationMessage, reader: jspb.BinaryReader): PrivateNotificationMessage;
}

export namespace PrivateNotificationMessage {
  export type AsObject = {
    uid: string,
    senderNodeAddress?: NodeAddress.AsObject,
    privateNotificationPayload?: PrivateNotificationPayload.AsObject,
  }
}

export class NodeAddress extends jspb.Message {
  getHostName(): string;
  setHostName(value: string): NodeAddress;

  getPort(): number;
  setPort(value: number): NodeAddress;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NodeAddress.AsObject;
  static toObject(includeInstance: boolean, msg: NodeAddress): NodeAddress.AsObject;
  static serializeBinaryToWriter(message: NodeAddress, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NodeAddress;
  static deserializeBinaryFromReader(message: NodeAddress, reader: jspb.BinaryReader): NodeAddress;
}

export namespace NodeAddress {
  export type AsObject = {
    hostName: string,
    port: number,
  }
}

export class Peer extends jspb.Message {
  getNodeAddress(): NodeAddress | undefined;
  setNodeAddress(value?: NodeAddress): Peer;
  hasNodeAddress(): boolean;
  clearNodeAddress(): Peer;

  getDate(): number;
  setDate(value: number): Peer;

  getSupportedCapabilitiesList(): Array<number>;
  setSupportedCapabilitiesList(value: Array<number>): Peer;
  clearSupportedCapabilitiesList(): Peer;
  addSupportedCapabilities(value: number, index?: number): Peer;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Peer.AsObject;
  static toObject(includeInstance: boolean, msg: Peer): Peer.AsObject;
  static serializeBinaryToWriter(message: Peer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Peer;
  static deserializeBinaryFromReader(message: Peer, reader: jspb.BinaryReader): Peer;
}

export namespace Peer {
  export type AsObject = {
    nodeAddress?: NodeAddress.AsObject,
    date: number,
    supportedCapabilitiesList: Array<number>,
  }
}

export class PubKeyRing extends jspb.Message {
  getSignaturePubKeyBytes(): Uint8Array | string;
  getSignaturePubKeyBytes_asU8(): Uint8Array;
  getSignaturePubKeyBytes_asB64(): string;
  setSignaturePubKeyBytes(value: Uint8Array | string): PubKeyRing;

  getEncryptionPubKeyBytes(): Uint8Array | string;
  getEncryptionPubKeyBytes_asU8(): Uint8Array;
  getEncryptionPubKeyBytes_asB64(): string;
  setEncryptionPubKeyBytes(value: Uint8Array | string): PubKeyRing;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PubKeyRing.AsObject;
  static toObject(includeInstance: boolean, msg: PubKeyRing): PubKeyRing.AsObject;
  static serializeBinaryToWriter(message: PubKeyRing, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PubKeyRing;
  static deserializeBinaryFromReader(message: PubKeyRing, reader: jspb.BinaryReader): PubKeyRing;
}

export namespace PubKeyRing {
  export type AsObject = {
    signaturePubKeyBytes: Uint8Array | string,
    encryptionPubKeyBytes: Uint8Array | string,
  }
}

export class SealedAndSigned extends jspb.Message {
  getEncryptedSecretKey(): Uint8Array | string;
  getEncryptedSecretKey_asU8(): Uint8Array;
  getEncryptedSecretKey_asB64(): string;
  setEncryptedSecretKey(value: Uint8Array | string): SealedAndSigned;

  getEncryptedPayloadWithHmac(): Uint8Array | string;
  getEncryptedPayloadWithHmac_asU8(): Uint8Array;
  getEncryptedPayloadWithHmac_asB64(): string;
  setEncryptedPayloadWithHmac(value: Uint8Array | string): SealedAndSigned;

  getSignature(): Uint8Array | string;
  getSignature_asU8(): Uint8Array;
  getSignature_asB64(): string;
  setSignature(value: Uint8Array | string): SealedAndSigned;

  getSigPublicKeyBytes(): Uint8Array | string;
  getSigPublicKeyBytes_asU8(): Uint8Array;
  getSigPublicKeyBytes_asB64(): string;
  setSigPublicKeyBytes(value: Uint8Array | string): SealedAndSigned;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SealedAndSigned.AsObject;
  static toObject(includeInstance: boolean, msg: SealedAndSigned): SealedAndSigned.AsObject;
  static serializeBinaryToWriter(message: SealedAndSigned, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SealedAndSigned;
  static deserializeBinaryFromReader(message: SealedAndSigned, reader: jspb.BinaryReader): SealedAndSigned;
}

export namespace SealedAndSigned {
  export type AsObject = {
    encryptedSecretKey: Uint8Array | string,
    encryptedPayloadWithHmac: Uint8Array | string,
    signature: Uint8Array | string,
    sigPublicKeyBytes: Uint8Array | string,
  }
}

export class StoragePayload extends jspb.Message {
  getAlert(): Alert | undefined;
  setAlert(value?: Alert): StoragePayload;
  hasAlert(): boolean;
  clearAlert(): StoragePayload;

  getArbitrator(): Arbitrator | undefined;
  setArbitrator(value?: Arbitrator): StoragePayload;
  hasArbitrator(): boolean;
  clearArbitrator(): StoragePayload;

  getMediator(): Mediator | undefined;
  setMediator(value?: Mediator): StoragePayload;
  hasMediator(): boolean;
  clearMediator(): StoragePayload;

  getFilter(): Filter | undefined;
  setFilter(value?: Filter): StoragePayload;
  hasFilter(): boolean;
  clearFilter(): StoragePayload;

  getMailboxStoragePayload(): MailboxStoragePayload | undefined;
  setMailboxStoragePayload(value?: MailboxStoragePayload): StoragePayload;
  hasMailboxStoragePayload(): boolean;
  clearMailboxStoragePayload(): StoragePayload;

  getOfferPayload(): OfferPayload | undefined;
  setOfferPayload(value?: OfferPayload): StoragePayload;
  hasOfferPayload(): boolean;
  clearOfferPayload(): StoragePayload;

  getRefundAgent(): RefundAgent | undefined;
  setRefundAgent(value?: RefundAgent): StoragePayload;
  hasRefundAgent(): boolean;
  clearRefundAgent(): StoragePayload;

  getMessageCase(): StoragePayload.MessageCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StoragePayload.AsObject;
  static toObject(includeInstance: boolean, msg: StoragePayload): StoragePayload.AsObject;
  static serializeBinaryToWriter(message: StoragePayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StoragePayload;
  static deserializeBinaryFromReader(message: StoragePayload, reader: jspb.BinaryReader): StoragePayload;
}

export namespace StoragePayload {
  export type AsObject = {
    alert?: Alert.AsObject,
    arbitrator?: Arbitrator.AsObject,
    mediator?: Mediator.AsObject,
    filter?: Filter.AsObject,
    mailboxStoragePayload?: MailboxStoragePayload.AsObject,
    offerPayload?: OfferPayload.AsObject,
    refundAgent?: RefundAgent.AsObject,
  }

  export enum MessageCase { 
    MESSAGE_NOT_SET = 0,
    ALERT = 1,
    ARBITRATOR = 2,
    MEDIATOR = 3,
    FILTER = 4,
    MAILBOX_STORAGE_PAYLOAD = 6,
    OFFER_PAYLOAD = 7,
    REFUND_AGENT = 8,
  }
}

export class PersistableNetworkPayload extends jspb.Message {
  getAccountAgeWitness(): AccountAgeWitness | undefined;
  setAccountAgeWitness(value?: AccountAgeWitness): PersistableNetworkPayload;
  hasAccountAgeWitness(): boolean;
  clearAccountAgeWitness(): PersistableNetworkPayload;

  getTradeStatistics2(): TradeStatistics2 | undefined;
  setTradeStatistics2(value?: TradeStatistics2): PersistableNetworkPayload;
  hasTradeStatistics2(): boolean;
  clearTradeStatistics2(): PersistableNetworkPayload;

  getSignedWitness(): SignedWitness | undefined;
  setSignedWitness(value?: SignedWitness): PersistableNetworkPayload;
  hasSignedWitness(): boolean;
  clearSignedWitness(): PersistableNetworkPayload;

  getTradeStatistics3(): TradeStatistics3 | undefined;
  setTradeStatistics3(value?: TradeStatistics3): PersistableNetworkPayload;
  hasTradeStatistics3(): boolean;
  clearTradeStatistics3(): PersistableNetworkPayload;

  getMessageCase(): PersistableNetworkPayload.MessageCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PersistableNetworkPayload.AsObject;
  static toObject(includeInstance: boolean, msg: PersistableNetworkPayload): PersistableNetworkPayload.AsObject;
  static serializeBinaryToWriter(message: PersistableNetworkPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PersistableNetworkPayload;
  static deserializeBinaryFromReader(message: PersistableNetworkPayload, reader: jspb.BinaryReader): PersistableNetworkPayload;
}

export namespace PersistableNetworkPayload {
  export type AsObject = {
    accountAgeWitness?: AccountAgeWitness.AsObject,
    tradeStatistics2?: TradeStatistics2.AsObject,
    signedWitness?: SignedWitness.AsObject,
    tradeStatistics3?: TradeStatistics3.AsObject,
  }

  export enum MessageCase { 
    MESSAGE_NOT_SET = 0,
    ACCOUNT_AGE_WITNESS = 1,
    TRADE_STATISTICS2 = 2,
    SIGNED_WITNESS = 3,
    TRADE_STATISTICS3 = 4,
  }
}

export class ProtectedStorageEntry extends jspb.Message {
  getStoragepayload(): StoragePayload | undefined;
  setStoragepayload(value?: StoragePayload): ProtectedStorageEntry;
  hasStoragepayload(): boolean;
  clearStoragepayload(): ProtectedStorageEntry;

  getOwnerPubKeyBytes(): Uint8Array | string;
  getOwnerPubKeyBytes_asU8(): Uint8Array;
  getOwnerPubKeyBytes_asB64(): string;
  setOwnerPubKeyBytes(value: Uint8Array | string): ProtectedStorageEntry;

  getSequenceNumber(): number;
  setSequenceNumber(value: number): ProtectedStorageEntry;

  getSignature(): Uint8Array | string;
  getSignature_asU8(): Uint8Array;
  getSignature_asB64(): string;
  setSignature(value: Uint8Array | string): ProtectedStorageEntry;

  getCreationTimeStamp(): number;
  setCreationTimeStamp(value: number): ProtectedStorageEntry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProtectedStorageEntry.AsObject;
  static toObject(includeInstance: boolean, msg: ProtectedStorageEntry): ProtectedStorageEntry.AsObject;
  static serializeBinaryToWriter(message: ProtectedStorageEntry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProtectedStorageEntry;
  static deserializeBinaryFromReader(message: ProtectedStorageEntry, reader: jspb.BinaryReader): ProtectedStorageEntry;
}

export namespace ProtectedStorageEntry {
  export type AsObject = {
    storagepayload?: StoragePayload.AsObject,
    ownerPubKeyBytes: Uint8Array | string,
    sequenceNumber: number,
    signature: Uint8Array | string,
    creationTimeStamp: number,
  }
}

export class StorageEntryWrapper extends jspb.Message {
  getProtectedStorageEntry(): ProtectedStorageEntry | undefined;
  setProtectedStorageEntry(value?: ProtectedStorageEntry): StorageEntryWrapper;
  hasProtectedStorageEntry(): boolean;
  clearProtectedStorageEntry(): StorageEntryWrapper;

  getProtectedMailboxStorageEntry(): ProtectedMailboxStorageEntry | undefined;
  setProtectedMailboxStorageEntry(value?: ProtectedMailboxStorageEntry): StorageEntryWrapper;
  hasProtectedMailboxStorageEntry(): boolean;
  clearProtectedMailboxStorageEntry(): StorageEntryWrapper;

  getMessageCase(): StorageEntryWrapper.MessageCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StorageEntryWrapper.AsObject;
  static toObject(includeInstance: boolean, msg: StorageEntryWrapper): StorageEntryWrapper.AsObject;
  static serializeBinaryToWriter(message: StorageEntryWrapper, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StorageEntryWrapper;
  static deserializeBinaryFromReader(message: StorageEntryWrapper, reader: jspb.BinaryReader): StorageEntryWrapper;
}

export namespace StorageEntryWrapper {
  export type AsObject = {
    protectedStorageEntry?: ProtectedStorageEntry.AsObject,
    protectedMailboxStorageEntry?: ProtectedMailboxStorageEntry.AsObject,
  }

  export enum MessageCase { 
    MESSAGE_NOT_SET = 0,
    PROTECTED_STORAGE_ENTRY = 1,
    PROTECTED_MAILBOX_STORAGE_ENTRY = 2,
  }
}

export class ProtectedMailboxStorageEntry extends jspb.Message {
  getEntry(): ProtectedStorageEntry | undefined;
  setEntry(value?: ProtectedStorageEntry): ProtectedMailboxStorageEntry;
  hasEntry(): boolean;
  clearEntry(): ProtectedMailboxStorageEntry;

  getReceiversPubKeyBytes(): Uint8Array | string;
  getReceiversPubKeyBytes_asU8(): Uint8Array;
  getReceiversPubKeyBytes_asB64(): string;
  setReceiversPubKeyBytes(value: Uint8Array | string): ProtectedMailboxStorageEntry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProtectedMailboxStorageEntry.AsObject;
  static toObject(includeInstance: boolean, msg: ProtectedMailboxStorageEntry): ProtectedMailboxStorageEntry.AsObject;
  static serializeBinaryToWriter(message: ProtectedMailboxStorageEntry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProtectedMailboxStorageEntry;
  static deserializeBinaryFromReader(message: ProtectedMailboxStorageEntry, reader: jspb.BinaryReader): ProtectedMailboxStorageEntry;
}

export namespace ProtectedMailboxStorageEntry {
  export type AsObject = {
    entry?: ProtectedStorageEntry.AsObject,
    receiversPubKeyBytes: Uint8Array | string,
  }
}

export class DataAndSeqNrPair extends jspb.Message {
  getPayload(): StoragePayload | undefined;
  setPayload(value?: StoragePayload): DataAndSeqNrPair;
  hasPayload(): boolean;
  clearPayload(): DataAndSeqNrPair;

  getSequenceNumber(): number;
  setSequenceNumber(value: number): DataAndSeqNrPair;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataAndSeqNrPair.AsObject;
  static toObject(includeInstance: boolean, msg: DataAndSeqNrPair): DataAndSeqNrPair.AsObject;
  static serializeBinaryToWriter(message: DataAndSeqNrPair, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataAndSeqNrPair;
  static deserializeBinaryFromReader(message: DataAndSeqNrPair, reader: jspb.BinaryReader): DataAndSeqNrPair;
}

export namespace DataAndSeqNrPair {
  export type AsObject = {
    payload?: StoragePayload.AsObject,
    sequenceNumber: number,
  }
}

export class MailboxMessageList extends jspb.Message {
  getMailboxItemList(): Array<MailboxItem>;
  setMailboxItemList(value: Array<MailboxItem>): MailboxMessageList;
  clearMailboxItemList(): MailboxMessageList;
  addMailboxItem(value?: MailboxItem, index?: number): MailboxItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MailboxMessageList.AsObject;
  static toObject(includeInstance: boolean, msg: MailboxMessageList): MailboxMessageList.AsObject;
  static serializeBinaryToWriter(message: MailboxMessageList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MailboxMessageList;
  static deserializeBinaryFromReader(message: MailboxMessageList, reader: jspb.BinaryReader): MailboxMessageList;
}

export namespace MailboxMessageList {
  export type AsObject = {
    mailboxItemList: Array<MailboxItem.AsObject>,
  }
}

export class RemovedPayloadsMap extends jspb.Message {
  getDateByHashesMap(): jspb.Map<string, number>;
  clearDateByHashesMap(): RemovedPayloadsMap;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemovedPayloadsMap.AsObject;
  static toObject(includeInstance: boolean, msg: RemovedPayloadsMap): RemovedPayloadsMap.AsObject;
  static serializeBinaryToWriter(message: RemovedPayloadsMap, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemovedPayloadsMap;
  static deserializeBinaryFromReader(message: RemovedPayloadsMap, reader: jspb.BinaryReader): RemovedPayloadsMap;
}

export namespace RemovedPayloadsMap {
  export type AsObject = {
    dateByHashesMap: Array<[string, number]>,
  }
}

export class IgnoredMailboxMap extends jspb.Message {
  getDataMap(): jspb.Map<string, number>;
  clearDataMap(): IgnoredMailboxMap;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IgnoredMailboxMap.AsObject;
  static toObject(includeInstance: boolean, msg: IgnoredMailboxMap): IgnoredMailboxMap.AsObject;
  static serializeBinaryToWriter(message: IgnoredMailboxMap, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IgnoredMailboxMap;
  static deserializeBinaryFromReader(message: IgnoredMailboxMap, reader: jspb.BinaryReader): IgnoredMailboxMap;
}

export namespace IgnoredMailboxMap {
  export type AsObject = {
    dataMap: Array<[string, number]>,
  }
}

export class MailboxItem extends jspb.Message {
  getProtectedMailboxStorageEntry(): ProtectedMailboxStorageEntry | undefined;
  setProtectedMailboxStorageEntry(value?: ProtectedMailboxStorageEntry): MailboxItem;
  hasProtectedMailboxStorageEntry(): boolean;
  clearProtectedMailboxStorageEntry(): MailboxItem;

  getDecryptedMessageWithPubKey(): DecryptedMessageWithPubKey | undefined;
  setDecryptedMessageWithPubKey(value?: DecryptedMessageWithPubKey): MailboxItem;
  hasDecryptedMessageWithPubKey(): boolean;
  clearDecryptedMessageWithPubKey(): MailboxItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MailboxItem.AsObject;
  static toObject(includeInstance: boolean, msg: MailboxItem): MailboxItem.AsObject;
  static serializeBinaryToWriter(message: MailboxItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MailboxItem;
  static deserializeBinaryFromReader(message: MailboxItem, reader: jspb.BinaryReader): MailboxItem;
}

export namespace MailboxItem {
  export type AsObject = {
    protectedMailboxStorageEntry?: ProtectedMailboxStorageEntry.AsObject,
    decryptedMessageWithPubKey?: DecryptedMessageWithPubKey.AsObject,
  }
}

export class DecryptedMessageWithPubKey extends jspb.Message {
  getNetworkEnvelope(): NetworkEnvelope | undefined;
  setNetworkEnvelope(value?: NetworkEnvelope): DecryptedMessageWithPubKey;
  hasNetworkEnvelope(): boolean;
  clearNetworkEnvelope(): DecryptedMessageWithPubKey;

  getSignaturePubKeyBytes(): Uint8Array | string;
  getSignaturePubKeyBytes_asU8(): Uint8Array;
  getSignaturePubKeyBytes_asB64(): string;
  setSignaturePubKeyBytes(value: Uint8Array | string): DecryptedMessageWithPubKey;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DecryptedMessageWithPubKey.AsObject;
  static toObject(includeInstance: boolean, msg: DecryptedMessageWithPubKey): DecryptedMessageWithPubKey.AsObject;
  static serializeBinaryToWriter(message: DecryptedMessageWithPubKey, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DecryptedMessageWithPubKey;
  static deserializeBinaryFromReader(message: DecryptedMessageWithPubKey, reader: jspb.BinaryReader): DecryptedMessageWithPubKey;
}

export namespace DecryptedMessageWithPubKey {
  export type AsObject = {
    networkEnvelope?: NetworkEnvelope.AsObject,
    signaturePubKeyBytes: Uint8Array | string,
  }
}

export class PrivateNotificationPayload extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): PrivateNotificationPayload;

  getSignatureAsBase64(): string;
  setSignatureAsBase64(value: string): PrivateNotificationPayload;

  getSigPublicKeyBytes(): Uint8Array | string;
  getSigPublicKeyBytes_asU8(): Uint8Array;
  getSigPublicKeyBytes_asB64(): string;
  setSigPublicKeyBytes(value: Uint8Array | string): PrivateNotificationPayload;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PrivateNotificationPayload.AsObject;
  static toObject(includeInstance: boolean, msg: PrivateNotificationPayload): PrivateNotificationPayload.AsObject;
  static serializeBinaryToWriter(message: PrivateNotificationPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PrivateNotificationPayload;
  static deserializeBinaryFromReader(message: PrivateNotificationPayload, reader: jspb.BinaryReader): PrivateNotificationPayload;
}

export namespace PrivateNotificationPayload {
  export type AsObject = {
    message: string,
    signatureAsBase64: string,
    sigPublicKeyBytes: Uint8Array | string,
  }
}

export class PaymentAccountFilter extends jspb.Message {
  getPaymentMethodId(): string;
  setPaymentMethodId(value: string): PaymentAccountFilter;

  getGetMethodName(): string;
  setGetMethodName(value: string): PaymentAccountFilter;

  getValue(): string;
  setValue(value: string): PaymentAccountFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaymentAccountFilter.AsObject;
  static toObject(includeInstance: boolean, msg: PaymentAccountFilter): PaymentAccountFilter.AsObject;
  static serializeBinaryToWriter(message: PaymentAccountFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaymentAccountFilter;
  static deserializeBinaryFromReader(message: PaymentAccountFilter, reader: jspb.BinaryReader): PaymentAccountFilter;
}

export namespace PaymentAccountFilter {
  export type AsObject = {
    paymentMethodId: string,
    getMethodName: string,
    value: string,
  }
}

export class Alert extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): Alert;

  getVersion(): string;
  setVersion(value: string): Alert;

  getIsUpdateInfo(): boolean;
  setIsUpdateInfo(value: boolean): Alert;

  getSignatureAsBase64(): string;
  setSignatureAsBase64(value: string): Alert;

  getOwnerPubKeyBytes(): Uint8Array | string;
  getOwnerPubKeyBytes_asU8(): Uint8Array;
  getOwnerPubKeyBytes_asB64(): string;
  setOwnerPubKeyBytes(value: Uint8Array | string): Alert;

  getExtraDataMap(): jspb.Map<string, string>;
  clearExtraDataMap(): Alert;

  getIsPreReleaseInfo(): boolean;
  setIsPreReleaseInfo(value: boolean): Alert;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Alert.AsObject;
  static toObject(includeInstance: boolean, msg: Alert): Alert.AsObject;
  static serializeBinaryToWriter(message: Alert, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Alert;
  static deserializeBinaryFromReader(message: Alert, reader: jspb.BinaryReader): Alert;
}

export namespace Alert {
  export type AsObject = {
    message: string,
    version: string,
    isUpdateInfo: boolean,
    signatureAsBase64: string,
    ownerPubKeyBytes: Uint8Array | string,
    extraDataMap: Array<[string, string]>,
    isPreReleaseInfo: boolean,
  }
}

export class Arbitrator extends jspb.Message {
  getNodeAddress(): NodeAddress | undefined;
  setNodeAddress(value?: NodeAddress): Arbitrator;
  hasNodeAddress(): boolean;
  clearNodeAddress(): Arbitrator;

  getLanguageCodesList(): Array<string>;
  setLanguageCodesList(value: Array<string>): Arbitrator;
  clearLanguageCodesList(): Arbitrator;
  addLanguageCodes(value: string, index?: number): Arbitrator;

  getRegistrationDate(): number;
  setRegistrationDate(value: number): Arbitrator;

  getRegistrationSignature(): string;
  setRegistrationSignature(value: string): Arbitrator;

  getRegistrationPubKey(): Uint8Array | string;
  getRegistrationPubKey_asU8(): Uint8Array;
  getRegistrationPubKey_asB64(): string;
  setRegistrationPubKey(value: Uint8Array | string): Arbitrator;

  getPubKeyRing(): PubKeyRing | undefined;
  setPubKeyRing(value?: PubKeyRing): Arbitrator;
  hasPubKeyRing(): boolean;
  clearPubKeyRing(): Arbitrator;

  getBtcPubKey(): Uint8Array | string;
  getBtcPubKey_asU8(): Uint8Array;
  getBtcPubKey_asB64(): string;
  setBtcPubKey(value: Uint8Array | string): Arbitrator;

  getBtcAddress(): string;
  setBtcAddress(value: string): Arbitrator;

  getEmailAddress(): string;
  setEmailAddress(value: string): Arbitrator;

  getInfo(): string;
  setInfo(value: string): Arbitrator;

  getExtraDataMap(): jspb.Map<string, string>;
  clearExtraDataMap(): Arbitrator;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Arbitrator.AsObject;
  static toObject(includeInstance: boolean, msg: Arbitrator): Arbitrator.AsObject;
  static serializeBinaryToWriter(message: Arbitrator, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Arbitrator;
  static deserializeBinaryFromReader(message: Arbitrator, reader: jspb.BinaryReader): Arbitrator;
}

export namespace Arbitrator {
  export type AsObject = {
    nodeAddress?: NodeAddress.AsObject,
    languageCodesList: Array<string>,
    registrationDate: number,
    registrationSignature: string,
    registrationPubKey: Uint8Array | string,
    pubKeyRing?: PubKeyRing.AsObject,
    btcPubKey: Uint8Array | string,
    btcAddress: string,
    emailAddress: string,
    info: string,
    extraDataMap: Array<[string, string]>,
  }
}

export class Mediator extends jspb.Message {
  getNodeAddress(): NodeAddress | undefined;
  setNodeAddress(value?: NodeAddress): Mediator;
  hasNodeAddress(): boolean;
  clearNodeAddress(): Mediator;

  getLanguageCodesList(): Array<string>;
  setLanguageCodesList(value: Array<string>): Mediator;
  clearLanguageCodesList(): Mediator;
  addLanguageCodes(value: string, index?: number): Mediator;

  getRegistrationDate(): number;
  setRegistrationDate(value: number): Mediator;

  getRegistrationSignature(): string;
  setRegistrationSignature(value: string): Mediator;

  getRegistrationPubKey(): Uint8Array | string;
  getRegistrationPubKey_asU8(): Uint8Array;
  getRegistrationPubKey_asB64(): string;
  setRegistrationPubKey(value: Uint8Array | string): Mediator;

  getPubKeyRing(): PubKeyRing | undefined;
  setPubKeyRing(value?: PubKeyRing): Mediator;
  hasPubKeyRing(): boolean;
  clearPubKeyRing(): Mediator;

  getEmailAddress(): string;
  setEmailAddress(value: string): Mediator;

  getInfo(): string;
  setInfo(value: string): Mediator;

  getExtraDataMap(): jspb.Map<string, string>;
  clearExtraDataMap(): Mediator;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Mediator.AsObject;
  static toObject(includeInstance: boolean, msg: Mediator): Mediator.AsObject;
  static serializeBinaryToWriter(message: Mediator, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Mediator;
  static deserializeBinaryFromReader(message: Mediator, reader: jspb.BinaryReader): Mediator;
}

export namespace Mediator {
  export type AsObject = {
    nodeAddress?: NodeAddress.AsObject,
    languageCodesList: Array<string>,
    registrationDate: number,
    registrationSignature: string,
    registrationPubKey: Uint8Array | string,
    pubKeyRing?: PubKeyRing.AsObject,
    emailAddress: string,
    info: string,
    extraDataMap: Array<[string, string]>,
  }
}

export class RefundAgent extends jspb.Message {
  getNodeAddress(): NodeAddress | undefined;
  setNodeAddress(value?: NodeAddress): RefundAgent;
  hasNodeAddress(): boolean;
  clearNodeAddress(): RefundAgent;

  getLanguageCodesList(): Array<string>;
  setLanguageCodesList(value: Array<string>): RefundAgent;
  clearLanguageCodesList(): RefundAgent;
  addLanguageCodes(value: string, index?: number): RefundAgent;

  getRegistrationDate(): number;
  setRegistrationDate(value: number): RefundAgent;

  getRegistrationSignature(): string;
  setRegistrationSignature(value: string): RefundAgent;

  getRegistrationPubKey(): Uint8Array | string;
  getRegistrationPubKey_asU8(): Uint8Array;
  getRegistrationPubKey_asB64(): string;
  setRegistrationPubKey(value: Uint8Array | string): RefundAgent;

  getPubKeyRing(): PubKeyRing | undefined;
  setPubKeyRing(value?: PubKeyRing): RefundAgent;
  hasPubKeyRing(): boolean;
  clearPubKeyRing(): RefundAgent;

  getEmailAddress(): string;
  setEmailAddress(value: string): RefundAgent;

  getInfo(): string;
  setInfo(value: string): RefundAgent;

  getExtraDataMap(): jspb.Map<string, string>;
  clearExtraDataMap(): RefundAgent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RefundAgent.AsObject;
  static toObject(includeInstance: boolean, msg: RefundAgent): RefundAgent.AsObject;
  static serializeBinaryToWriter(message: RefundAgent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RefundAgent;
  static deserializeBinaryFromReader(message: RefundAgent, reader: jspb.BinaryReader): RefundAgent;
}

export namespace RefundAgent {
  export type AsObject = {
    nodeAddress?: NodeAddress.AsObject,
    languageCodesList: Array<string>,
    registrationDate: number,
    registrationSignature: string,
    registrationPubKey: Uint8Array | string,
    pubKeyRing?: PubKeyRing.AsObject,
    emailAddress: string,
    info: string,
    extraDataMap: Array<[string, string]>,
  }
}

export class Filter extends jspb.Message {
  getNodeAddressesBannedFromTradingList(): Array<string>;
  setNodeAddressesBannedFromTradingList(value: Array<string>): Filter;
  clearNodeAddressesBannedFromTradingList(): Filter;
  addNodeAddressesBannedFromTrading(value: string, index?: number): Filter;

  getBannedOfferIdsList(): Array<string>;
  setBannedOfferIdsList(value: Array<string>): Filter;
  clearBannedOfferIdsList(): Filter;
  addBannedOfferIds(value: string, index?: number): Filter;

  getBannedPaymentAccountsList(): Array<PaymentAccountFilter>;
  setBannedPaymentAccountsList(value: Array<PaymentAccountFilter>): Filter;
  clearBannedPaymentAccountsList(): Filter;
  addBannedPaymentAccounts(value?: PaymentAccountFilter, index?: number): PaymentAccountFilter;

  getSignatureAsBase64(): string;
  setSignatureAsBase64(value: string): Filter;

  getOwnerPubKeyBytes(): Uint8Array | string;
  getOwnerPubKeyBytes_asU8(): Uint8Array;
  getOwnerPubKeyBytes_asB64(): string;
  setOwnerPubKeyBytes(value: Uint8Array | string): Filter;

  getExtraDataMap(): jspb.Map<string, string>;
  clearExtraDataMap(): Filter;

  getBannedCurrenciesList(): Array<string>;
  setBannedCurrenciesList(value: Array<string>): Filter;
  clearBannedCurrenciesList(): Filter;
  addBannedCurrencies(value: string, index?: number): Filter;

  getBannedPaymentMethodsList(): Array<string>;
  setBannedPaymentMethodsList(value: Array<string>): Filter;
  clearBannedPaymentMethodsList(): Filter;
  addBannedPaymentMethods(value: string, index?: number): Filter;

  getArbitratorsList(): Array<string>;
  setArbitratorsList(value: Array<string>): Filter;
  clearArbitratorsList(): Filter;
  addArbitrators(value: string, index?: number): Filter;

  getSeedNodesList(): Array<string>;
  setSeedNodesList(value: Array<string>): Filter;
  clearSeedNodesList(): Filter;
  addSeedNodes(value: string, index?: number): Filter;

  getPriceRelayNodesList(): Array<string>;
  setPriceRelayNodesList(value: Array<string>): Filter;
  clearPriceRelayNodesList(): Filter;
  addPriceRelayNodes(value: string, index?: number): Filter;

  getPreventPublicBtcNetwork(): boolean;
  setPreventPublicBtcNetwork(value: boolean): Filter;

  getBtcNodesList(): Array<string>;
  setBtcNodesList(value: Array<string>): Filter;
  clearBtcNodesList(): Filter;
  addBtcNodes(value: string, index?: number): Filter;

  getDisableTradeBelowVersion(): string;
  setDisableTradeBelowVersion(value: string): Filter;

  getMediatorsList(): Array<string>;
  setMediatorsList(value: Array<string>): Filter;
  clearMediatorsList(): Filter;
  addMediators(value: string, index?: number): Filter;

  getRefundagentsList(): Array<string>;
  setRefundagentsList(value: Array<string>): Filter;
  clearRefundagentsList(): Filter;
  addRefundagents(value: string, index?: number): Filter;

  getBannedsignerpubkeysList(): Array<string>;
  setBannedsignerpubkeysList(value: Array<string>): Filter;
  clearBannedsignerpubkeysList(): Filter;
  addBannedsignerpubkeys(value: string, index?: number): Filter;

  getBtcFeeReceiverAddressesList(): Array<string>;
  setBtcFeeReceiverAddressesList(value: Array<string>): Filter;
  clearBtcFeeReceiverAddressesList(): Filter;
  addBtcFeeReceiverAddresses(value: string, index?: number): Filter;

  getCreationDate(): number;
  setCreationDate(value: number): Filter;

  getSignerPubKeyAsHex(): string;
  setSignerPubKeyAsHex(value: string): Filter;

  getBannedprivilegeddevpubkeysList(): Array<string>;
  setBannedprivilegeddevpubkeysList(value: Array<string>): Filter;
  clearBannedprivilegeddevpubkeysList(): Filter;
  addBannedprivilegeddevpubkeys(value: string, index?: number): Filter;

  getDisableAutoConf(): boolean;
  setDisableAutoConf(value: boolean): Filter;

  getBannedAutoConfExplorersList(): Array<string>;
  setBannedAutoConfExplorersList(value: Array<string>): Filter;
  clearBannedAutoConfExplorersList(): Filter;
  addBannedAutoConfExplorers(value: string, index?: number): Filter;

  getNodeAddressesBannedFromNetworkList(): Array<string>;
  setNodeAddressesBannedFromNetworkList(value: Array<string>): Filter;
  clearNodeAddressesBannedFromNetworkList(): Filter;
  addNodeAddressesBannedFromNetwork(value: string, index?: number): Filter;

  getDisableApi(): boolean;
  setDisableApi(value: boolean): Filter;

  getDisableMempoolValidation(): boolean;
  setDisableMempoolValidation(value: boolean): Filter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Filter.AsObject;
  static toObject(includeInstance: boolean, msg: Filter): Filter.AsObject;
  static serializeBinaryToWriter(message: Filter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Filter;
  static deserializeBinaryFromReader(message: Filter, reader: jspb.BinaryReader): Filter;
}

export namespace Filter {
  export type AsObject = {
    nodeAddressesBannedFromTradingList: Array<string>,
    bannedOfferIdsList: Array<string>,
    bannedPaymentAccountsList: Array<PaymentAccountFilter.AsObject>,
    signatureAsBase64: string,
    ownerPubKeyBytes: Uint8Array | string,
    extraDataMap: Array<[string, string]>,
    bannedCurrenciesList: Array<string>,
    bannedPaymentMethodsList: Array<string>,
    arbitratorsList: Array<string>,
    seedNodesList: Array<string>,
    priceRelayNodesList: Array<string>,
    preventPublicBtcNetwork: boolean,
    btcNodesList: Array<string>,
    disableTradeBelowVersion: string,
    mediatorsList: Array<string>,
    refundagentsList: Array<string>,
    bannedsignerpubkeysList: Array<string>,
    btcFeeReceiverAddressesList: Array<string>,
    creationDate: number,
    signerPubKeyAsHex: string,
    bannedprivilegeddevpubkeysList: Array<string>,
    disableAutoConf: boolean,
    bannedAutoConfExplorersList: Array<string>,
    nodeAddressesBannedFromNetworkList: Array<string>,
    disableApi: boolean,
    disableMempoolValidation: boolean,
  }
}

export class TradeStatistics2 extends jspb.Message {
  getBaseCurrency(): string;
  setBaseCurrency(value: string): TradeStatistics2;

  getCounterCurrency(): string;
  setCounterCurrency(value: string): TradeStatistics2;

  getDirection(): OfferPayload.Direction;
  setDirection(value: OfferPayload.Direction): TradeStatistics2;

  getTradePrice(): number;
  setTradePrice(value: number): TradeStatistics2;

  getTradeAmount(): number;
  setTradeAmount(value: number): TradeStatistics2;

  getTradeDate(): number;
  setTradeDate(value: number): TradeStatistics2;

  getPaymentMethodId(): string;
  setPaymentMethodId(value: string): TradeStatistics2;

  getOfferDate(): number;
  setOfferDate(value: number): TradeStatistics2;

  getOfferUseMarketBasedPrice(): boolean;
  setOfferUseMarketBasedPrice(value: boolean): TradeStatistics2;

  getOfferMarketPriceMargin(): number;
  setOfferMarketPriceMargin(value: number): TradeStatistics2;

  getOfferAmount(): number;
  setOfferAmount(value: number): TradeStatistics2;

  getOfferMinAmount(): number;
  setOfferMinAmount(value: number): TradeStatistics2;

  getOfferId(): string;
  setOfferId(value: string): TradeStatistics2;

  getDepositTxId(): string;
  setDepositTxId(value: string): TradeStatistics2;

  getHash(): Uint8Array | string;
  getHash_asU8(): Uint8Array;
  getHash_asB64(): string;
  setHash(value: Uint8Array | string): TradeStatistics2;

  getExtraDataMap(): jspb.Map<string, string>;
  clearExtraDataMap(): TradeStatistics2;

  getMakerDepositTxId(): string;
  setMakerDepositTxId(value: string): TradeStatistics2;

  getTakerDepositTxId(): string;
  setTakerDepositTxId(value: string): TradeStatistics2;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TradeStatistics2.AsObject;
  static toObject(includeInstance: boolean, msg: TradeStatistics2): TradeStatistics2.AsObject;
  static serializeBinaryToWriter(message: TradeStatistics2, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TradeStatistics2;
  static deserializeBinaryFromReader(message: TradeStatistics2, reader: jspb.BinaryReader): TradeStatistics2;
}

export namespace TradeStatistics2 {
  export type AsObject = {
    baseCurrency: string,
    counterCurrency: string,
    direction: OfferPayload.Direction,
    tradePrice: number,
    tradeAmount: number,
    tradeDate: number,
    paymentMethodId: string,
    offerDate: number,
    offerUseMarketBasedPrice: boolean,
    offerMarketPriceMargin: number,
    offerAmount: number,
    offerMinAmount: number,
    offerId: string,
    depositTxId: string,
    hash: Uint8Array | string,
    extraDataMap: Array<[string, string]>,
    makerDepositTxId: string,
    takerDepositTxId: string,
  }
}

export class TradeStatistics3 extends jspb.Message {
  getCurrency(): string;
  setCurrency(value: string): TradeStatistics3;

  getPrice(): number;
  setPrice(value: number): TradeStatistics3;

  getAmount(): number;
  setAmount(value: number): TradeStatistics3;

  getPaymentMethod(): string;
  setPaymentMethod(value: string): TradeStatistics3;

  getDate(): number;
  setDate(value: number): TradeStatistics3;

  getHash(): Uint8Array | string;
  getHash_asU8(): Uint8Array;
  getHash_asB64(): string;
  setHash(value: Uint8Array | string): TradeStatistics3;

  getExtraDataMap(): jspb.Map<string, string>;
  clearExtraDataMap(): TradeStatistics3;

  getArbitrator(): string;
  setArbitrator(value: string): TradeStatistics3;

  getMakerDepositTxId(): string;
  setMakerDepositTxId(value: string): TradeStatistics3;

  getTakerDepositTxId(): string;
  setTakerDepositTxId(value: string): TradeStatistics3;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TradeStatistics3.AsObject;
  static toObject(includeInstance: boolean, msg: TradeStatistics3): TradeStatistics3.AsObject;
  static serializeBinaryToWriter(message: TradeStatistics3, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TradeStatistics3;
  static deserializeBinaryFromReader(message: TradeStatistics3, reader: jspb.BinaryReader): TradeStatistics3;
}

export namespace TradeStatistics3 {
  export type AsObject = {
    currency: string,
    price: number,
    amount: number,
    paymentMethod: string,
    date: number,
    hash: Uint8Array | string,
    extraDataMap: Array<[string, string]>,
    arbitrator: string,
    makerDepositTxId: string,
    takerDepositTxId: string,
  }
}

export class MailboxStoragePayload extends jspb.Message {
  getPrefixedSealedAndSignedMessage(): PrefixedSealedAndSignedMessage | undefined;
  setPrefixedSealedAndSignedMessage(value?: PrefixedSealedAndSignedMessage): MailboxStoragePayload;
  hasPrefixedSealedAndSignedMessage(): boolean;
  clearPrefixedSealedAndSignedMessage(): MailboxStoragePayload;

  getSenderPubKeyForAddOperationBytes(): Uint8Array | string;
  getSenderPubKeyForAddOperationBytes_asU8(): Uint8Array;
  getSenderPubKeyForAddOperationBytes_asB64(): string;
  setSenderPubKeyForAddOperationBytes(value: Uint8Array | string): MailboxStoragePayload;

  getOwnerPubKeyBytes(): Uint8Array | string;
  getOwnerPubKeyBytes_asU8(): Uint8Array;
  getOwnerPubKeyBytes_asB64(): string;
  setOwnerPubKeyBytes(value: Uint8Array | string): MailboxStoragePayload;

  getExtraDataMap(): jspb.Map<string, string>;
  clearExtraDataMap(): MailboxStoragePayload;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MailboxStoragePayload.AsObject;
  static toObject(includeInstance: boolean, msg: MailboxStoragePayload): MailboxStoragePayload.AsObject;
  static serializeBinaryToWriter(message: MailboxStoragePayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MailboxStoragePayload;
  static deserializeBinaryFromReader(message: MailboxStoragePayload, reader: jspb.BinaryReader): MailboxStoragePayload;
}

export namespace MailboxStoragePayload {
  export type AsObject = {
    prefixedSealedAndSignedMessage?: PrefixedSealedAndSignedMessage.AsObject,
    senderPubKeyForAddOperationBytes: Uint8Array | string,
    ownerPubKeyBytes: Uint8Array | string,
    extraDataMap: Array<[string, string]>,
  }
}

export class OfferPayload extends jspb.Message {
  getId(): string;
  setId(value: string): OfferPayload;

  getDate(): number;
  setDate(value: number): OfferPayload;

  getOwnerNodeAddress(): NodeAddress | undefined;
  setOwnerNodeAddress(value?: NodeAddress): OfferPayload;
  hasOwnerNodeAddress(): boolean;
  clearOwnerNodeAddress(): OfferPayload;

  getPubKeyRing(): PubKeyRing | undefined;
  setPubKeyRing(value?: PubKeyRing): OfferPayload;
  hasPubKeyRing(): boolean;
  clearPubKeyRing(): OfferPayload;

  getDirection(): OfferPayload.Direction;
  setDirection(value: OfferPayload.Direction): OfferPayload;

  getPrice(): number;
  setPrice(value: number): OfferPayload;

  getMarketPriceMargin(): number;
  setMarketPriceMargin(value: number): OfferPayload;

  getUseMarketBasedPrice(): boolean;
  setUseMarketBasedPrice(value: boolean): OfferPayload;

  getAmount(): number;
  setAmount(value: number): OfferPayload;

  getMinAmount(): number;
  setMinAmount(value: number): OfferPayload;

  getBaseCurrencyCode(): string;
  setBaseCurrencyCode(value: string): OfferPayload;

  getCounterCurrencyCode(): string;
  setCounterCurrencyCode(value: string): OfferPayload;

  getPaymentMethodId(): string;
  setPaymentMethodId(value: string): OfferPayload;

  getMakerPaymentAccountId(): string;
  setMakerPaymentAccountId(value: string): OfferPayload;

  getOfferFeePaymentTxId(): string;
  setOfferFeePaymentTxId(value: string): OfferPayload;

  getCountryCode(): string;
  setCountryCode(value: string): OfferPayload;

  getAcceptedCountryCodesList(): Array<string>;
  setAcceptedCountryCodesList(value: Array<string>): OfferPayload;
  clearAcceptedCountryCodesList(): OfferPayload;
  addAcceptedCountryCodes(value: string, index?: number): OfferPayload;

  getBankId(): string;
  setBankId(value: string): OfferPayload;

  getAcceptedBankIdsList(): Array<string>;
  setAcceptedBankIdsList(value: Array<string>): OfferPayload;
  clearAcceptedBankIdsList(): OfferPayload;
  addAcceptedBankIds(value: string, index?: number): OfferPayload;

  getVersionNr(): string;
  setVersionNr(value: string): OfferPayload;

  getBlockHeightAtOfferCreation(): number;
  setBlockHeightAtOfferCreation(value: number): OfferPayload;

  getTxFee(): number;
  setTxFee(value: number): OfferPayload;

  getMakerFee(): number;
  setMakerFee(value: number): OfferPayload;

  getBuyerSecurityDeposit(): number;
  setBuyerSecurityDeposit(value: number): OfferPayload;

  getSellerSecurityDeposit(): number;
  setSellerSecurityDeposit(value: number): OfferPayload;

  getMaxTradeLimit(): number;
  setMaxTradeLimit(value: number): OfferPayload;

  getMaxTradePeriod(): number;
  setMaxTradePeriod(value: number): OfferPayload;

  getUseAutoClose(): boolean;
  setUseAutoClose(value: boolean): OfferPayload;

  getUseReOpenAfterAutoClose(): boolean;
  setUseReOpenAfterAutoClose(value: boolean): OfferPayload;

  getLowerClosePrice(): number;
  setLowerClosePrice(value: number): OfferPayload;

  getUpperClosePrice(): number;
  setUpperClosePrice(value: number): OfferPayload;

  getIsPrivateOffer(): boolean;
  setIsPrivateOffer(value: boolean): OfferPayload;

  getHashOfChallenge(): string;
  setHashOfChallenge(value: string): OfferPayload;

  getExtraDataMap(): jspb.Map<string, string>;
  clearExtraDataMap(): OfferPayload;

  getProtocolVersion(): number;
  setProtocolVersion(value: number): OfferPayload;

  getArbitratorNodeAddress(): NodeAddress | undefined;
  setArbitratorNodeAddress(value?: NodeAddress): OfferPayload;
  hasArbitratorNodeAddress(): boolean;
  clearArbitratorNodeAddress(): OfferPayload;

  getArbitratorSignature(): string;
  setArbitratorSignature(value: string): OfferPayload;

  getReserveTxKeyImagesList(): Array<string>;
  setReserveTxKeyImagesList(value: Array<string>): OfferPayload;
  clearReserveTxKeyImagesList(): OfferPayload;
  addReserveTxKeyImages(value: string, index?: number): OfferPayload;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OfferPayload.AsObject;
  static toObject(includeInstance: boolean, msg: OfferPayload): OfferPayload.AsObject;
  static serializeBinaryToWriter(message: OfferPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OfferPayload;
  static deserializeBinaryFromReader(message: OfferPayload, reader: jspb.BinaryReader): OfferPayload;
}

export namespace OfferPayload {
  export type AsObject = {
    id: string,
    date: number,
    ownerNodeAddress?: NodeAddress.AsObject,
    pubKeyRing?: PubKeyRing.AsObject,
    direction: OfferPayload.Direction,
    price: number,
    marketPriceMargin: number,
    useMarketBasedPrice: boolean,
    amount: number,
    minAmount: number,
    baseCurrencyCode: string,
    counterCurrencyCode: string,
    paymentMethodId: string,
    makerPaymentAccountId: string,
    offerFeePaymentTxId: string,
    countryCode: string,
    acceptedCountryCodesList: Array<string>,
    bankId: string,
    acceptedBankIdsList: Array<string>,
    versionNr: string,
    blockHeightAtOfferCreation: number,
    txFee: number,
    makerFee: number,
    buyerSecurityDeposit: number,
    sellerSecurityDeposit: number,
    maxTradeLimit: number,
    maxTradePeriod: number,
    useAutoClose: boolean,
    useReOpenAfterAutoClose: boolean,
    lowerClosePrice: number,
    upperClosePrice: number,
    isPrivateOffer: boolean,
    hashOfChallenge: string,
    extraDataMap: Array<[string, string]>,
    protocolVersion: number,
    arbitratorNodeAddress?: NodeAddress.AsObject,
    arbitratorSignature: string,
    reserveTxKeyImagesList: Array<string>,
  }

  export enum Direction { 
    PB_ERROR = 0,
    BUY = 1,
    SELL = 2,
  }
}

export class AccountAgeWitness extends jspb.Message {
  getHash(): Uint8Array | string;
  getHash_asU8(): Uint8Array;
  getHash_asB64(): string;
  setHash(value: Uint8Array | string): AccountAgeWitness;

  getDate(): number;
  setDate(value: number): AccountAgeWitness;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountAgeWitness.AsObject;
  static toObject(includeInstance: boolean, msg: AccountAgeWitness): AccountAgeWitness.AsObject;
  static serializeBinaryToWriter(message: AccountAgeWitness, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountAgeWitness;
  static deserializeBinaryFromReader(message: AccountAgeWitness, reader: jspb.BinaryReader): AccountAgeWitness;
}

export namespace AccountAgeWitness {
  export type AsObject = {
    hash: Uint8Array | string,
    date: number,
  }
}

export class SignedWitness extends jspb.Message {
  getVerificationMethod(): SignedWitness.VerificationMethod;
  setVerificationMethod(value: SignedWitness.VerificationMethod): SignedWitness;

  getAccountAgeWitnessHash(): Uint8Array | string;
  getAccountAgeWitnessHash_asU8(): Uint8Array;
  getAccountAgeWitnessHash_asB64(): string;
  setAccountAgeWitnessHash(value: Uint8Array | string): SignedWitness;

  getSignature(): Uint8Array | string;
  getSignature_asU8(): Uint8Array;
  getSignature_asB64(): string;
  setSignature(value: Uint8Array | string): SignedWitness;

  getSignerPubKey(): Uint8Array | string;
  getSignerPubKey_asU8(): Uint8Array;
  getSignerPubKey_asB64(): string;
  setSignerPubKey(value: Uint8Array | string): SignedWitness;

  getWitnessOwnerPubKey(): Uint8Array | string;
  getWitnessOwnerPubKey_asU8(): Uint8Array;
  getWitnessOwnerPubKey_asB64(): string;
  setWitnessOwnerPubKey(value: Uint8Array | string): SignedWitness;

  getDate(): number;
  setDate(value: number): SignedWitness;

  getTradeAmount(): number;
  setTradeAmount(value: number): SignedWitness;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignedWitness.AsObject;
  static toObject(includeInstance: boolean, msg: SignedWitness): SignedWitness.AsObject;
  static serializeBinaryToWriter(message: SignedWitness, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignedWitness;
  static deserializeBinaryFromReader(message: SignedWitness, reader: jspb.BinaryReader): SignedWitness;
}

export namespace SignedWitness {
  export type AsObject = {
    verificationMethod: SignedWitness.VerificationMethod,
    accountAgeWitnessHash: Uint8Array | string,
    signature: Uint8Array | string,
    signerPubKey: Uint8Array | string,
    witnessOwnerPubKey: Uint8Array | string,
    date: number,
    tradeAmount: number,
  }

  export enum VerificationMethod { 
    PB_ERROR = 0,
    ARBITRATOR = 1,
    TRADE = 2,
  }
}

export class Dispute extends jspb.Message {
  getTradeId(): string;
  setTradeId(value: string): Dispute;

  getId(): string;
  setId(value: string): Dispute;

  getTraderId(): number;
  setTraderId(value: number): Dispute;

  getIsOpener(): boolean;
  setIsOpener(value: boolean): Dispute;

  getDisputeOpenerIsBuyer(): boolean;
  setDisputeOpenerIsBuyer(value: boolean): Dispute;

  getDisputeOpenerIsMaker(): boolean;
  setDisputeOpenerIsMaker(value: boolean): Dispute;

  getOpeningDate(): number;
  setOpeningDate(value: number): Dispute;

  getTraderPubKeyRing(): PubKeyRing | undefined;
  setTraderPubKeyRing(value?: PubKeyRing): Dispute;
  hasTraderPubKeyRing(): boolean;
  clearTraderPubKeyRing(): Dispute;

  getTradeDate(): number;
  setTradeDate(value: number): Dispute;

  getContract(): Contract | undefined;
  setContract(value?: Contract): Dispute;
  hasContract(): boolean;
  clearContract(): Dispute;

  getContractHash(): Uint8Array | string;
  getContractHash_asU8(): Uint8Array;
  getContractHash_asB64(): string;
  setContractHash(value: Uint8Array | string): Dispute;

  getDepositTxSerialized(): Uint8Array | string;
  getDepositTxSerialized_asU8(): Uint8Array;
  getDepositTxSerialized_asB64(): string;
  setDepositTxSerialized(value: Uint8Array | string): Dispute;

  getPayoutTxSerialized(): Uint8Array | string;
  getPayoutTxSerialized_asU8(): Uint8Array;
  getPayoutTxSerialized_asB64(): string;
  setPayoutTxSerialized(value: Uint8Array | string): Dispute;

  getDepositTxId(): string;
  setDepositTxId(value: string): Dispute;

  getPayoutTxId(): string;
  setPayoutTxId(value: string): Dispute;

  getContractAsJson(): string;
  setContractAsJson(value: string): Dispute;

  getMakerContractSignature(): string;
  setMakerContractSignature(value: string): Dispute;

  getTakerContractSignature(): string;
  setTakerContractSignature(value: string): Dispute;

  getMakerPaymentAccountPayload(): PaymentAccountPayload | undefined;
  setMakerPaymentAccountPayload(value?: PaymentAccountPayload): Dispute;
  hasMakerPaymentAccountPayload(): boolean;
  clearMakerPaymentAccountPayload(): Dispute;

  getTakerPaymentAccountPayload(): PaymentAccountPayload | undefined;
  setTakerPaymentAccountPayload(value?: PaymentAccountPayload): Dispute;
  hasTakerPaymentAccountPayload(): boolean;
  clearTakerPaymentAccountPayload(): Dispute;

  getAgentPubKeyRing(): PubKeyRing | undefined;
  setAgentPubKeyRing(value?: PubKeyRing): Dispute;
  hasAgentPubKeyRing(): boolean;
  clearAgentPubKeyRing(): Dispute;

  getIsSupportTicket(): boolean;
  setIsSupportTicket(value: boolean): Dispute;

  getChatMessageList(): Array<ChatMessage>;
  setChatMessageList(value: Array<ChatMessage>): Dispute;
  clearChatMessageList(): Dispute;
  addChatMessage(value?: ChatMessage, index?: number): ChatMessage;

  getIsClosed(): boolean;
  setIsClosed(value: boolean): Dispute;

  getDisputeResult(): DisputeResult | undefined;
  setDisputeResult(value?: DisputeResult): Dispute;
  hasDisputeResult(): boolean;
  clearDisputeResult(): Dispute;

  getDisputePayoutTxId(): string;
  setDisputePayoutTxId(value: string): Dispute;

  getSupportType(): SupportType;
  setSupportType(value: SupportType): Dispute;

  getMediatorsDisputeResult(): string;
  setMediatorsDisputeResult(value: string): Dispute;

  getDelayedPayoutTxId(): string;
  setDelayedPayoutTxId(value: string): Dispute;

  getDonationAddressOfDelayedPayoutTx(): string;
  setDonationAddressOfDelayedPayoutTx(value: string): Dispute;

  getState(): Dispute.State;
  setState(value: Dispute.State): Dispute;

  getTradePeriodEnd(): number;
  setTradePeriodEnd(value: number): Dispute;

  getExtraDataMap(): jspb.Map<string, string>;
  clearExtraDataMap(): Dispute;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dispute.AsObject;
  static toObject(includeInstance: boolean, msg: Dispute): Dispute.AsObject;
  static serializeBinaryToWriter(message: Dispute, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dispute;
  static deserializeBinaryFromReader(message: Dispute, reader: jspb.BinaryReader): Dispute;
}

export namespace Dispute {
  export type AsObject = {
    tradeId: string,
    id: string,
    traderId: number,
    isOpener: boolean,
    disputeOpenerIsBuyer: boolean,
    disputeOpenerIsMaker: boolean,
    openingDate: number,
    traderPubKeyRing?: PubKeyRing.AsObject,
    tradeDate: number,
    contract?: Contract.AsObject,
    contractHash: Uint8Array | string,
    depositTxSerialized: Uint8Array | string,
    payoutTxSerialized: Uint8Array | string,
    depositTxId: string,
    payoutTxId: string,
    contractAsJson: string,
    makerContractSignature: string,
    takerContractSignature: string,
    makerPaymentAccountPayload?: PaymentAccountPayload.AsObject,
    takerPaymentAccountPayload?: PaymentAccountPayload.AsObject,
    agentPubKeyRing?: PubKeyRing.AsObject,
    isSupportTicket: boolean,
    chatMessageList: Array<ChatMessage.AsObject>,
    isClosed: boolean,
    disputeResult?: DisputeResult.AsObject,
    disputePayoutTxId: string,
    supportType: SupportType,
    mediatorsDisputeResult: string,
    delayedPayoutTxId: string,
    donationAddressOfDelayedPayoutTx: string,
    state: Dispute.State,
    tradePeriodEnd: number,
    extraDataMap: Array<[string, string]>,
  }

  export enum State { 
    NEEDS_UPGRADE = 0,
    NEW = 1,
    OPEN = 2,
    REOPENED = 3,
    CLOSED = 4,
  }
}

export class Attachment extends jspb.Message {
  getFileName(): string;
  setFileName(value: string): Attachment;

  getBytes(): Uint8Array | string;
  getBytes_asU8(): Uint8Array;
  getBytes_asB64(): string;
  setBytes(value: Uint8Array | string): Attachment;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Attachment.AsObject;
  static toObject(includeInstance: boolean, msg: Attachment): Attachment.AsObject;
  static serializeBinaryToWriter(message: Attachment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Attachment;
  static deserializeBinaryFromReader(message: Attachment, reader: jspb.BinaryReader): Attachment;
}

export namespace Attachment {
  export type AsObject = {
    fileName: string,
    bytes: Uint8Array | string,
  }
}

export class DisputeResult extends jspb.Message {
  getTradeId(): string;
  setTradeId(value: string): DisputeResult;

  getTraderId(): number;
  setTraderId(value: number): DisputeResult;

  getWinner(): DisputeResult.Winner;
  setWinner(value: DisputeResult.Winner): DisputeResult;

  getReasonOrdinal(): number;
  setReasonOrdinal(value: number): DisputeResult;

  getTamperProofEvidence(): boolean;
  setTamperProofEvidence(value: boolean): DisputeResult;

  getIdVerification(): boolean;
  setIdVerification(value: boolean): DisputeResult;

  getScreenCast(): boolean;
  setScreenCast(value: boolean): DisputeResult;

  getSummaryNotes(): string;
  setSummaryNotes(value: string): DisputeResult;

  getChatMessage(): ChatMessage | undefined;
  setChatMessage(value?: ChatMessage): DisputeResult;
  hasChatMessage(): boolean;
  clearChatMessage(): DisputeResult;

  getArbitratorSignature(): Uint8Array | string;
  getArbitratorSignature_asU8(): Uint8Array;
  getArbitratorSignature_asB64(): string;
  setArbitratorSignature(value: Uint8Array | string): DisputeResult;

  getBuyerPayoutAmount(): number;
  setBuyerPayoutAmount(value: number): DisputeResult;

  getSellerPayoutAmount(): number;
  setSellerPayoutAmount(value: number): DisputeResult;

  getArbitratorPubKey(): Uint8Array | string;
  getArbitratorPubKey_asU8(): Uint8Array;
  getArbitratorPubKey_asB64(): string;
  setArbitratorPubKey(value: Uint8Array | string): DisputeResult;

  getCloseDate(): number;
  setCloseDate(value: number): DisputeResult;

  getIsLoserPublisher(): boolean;
  setIsLoserPublisher(value: boolean): DisputeResult;

  getArbitratorSignedPayoutTxHex(): string;
  setArbitratorSignedPayoutTxHex(value: string): DisputeResult;

  getArbitratorUpdatedMultisigHex(): string;
  setArbitratorUpdatedMultisigHex(value: string): DisputeResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DisputeResult.AsObject;
  static toObject(includeInstance: boolean, msg: DisputeResult): DisputeResult.AsObject;
  static serializeBinaryToWriter(message: DisputeResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DisputeResult;
  static deserializeBinaryFromReader(message: DisputeResult, reader: jspb.BinaryReader): DisputeResult;
}

export namespace DisputeResult {
  export type AsObject = {
    tradeId: string,
    traderId: number,
    winner: DisputeResult.Winner,
    reasonOrdinal: number,
    tamperProofEvidence: boolean,
    idVerification: boolean,
    screenCast: boolean,
    summaryNotes: string,
    chatMessage?: ChatMessage.AsObject,
    arbitratorSignature: Uint8Array | string,
    buyerPayoutAmount: number,
    sellerPayoutAmount: number,
    arbitratorPubKey: Uint8Array | string,
    closeDate: number,
    isLoserPublisher: boolean,
    arbitratorSignedPayoutTxHex: string,
    arbitratorUpdatedMultisigHex: string,
  }

  export enum Winner { 
    PB_ERROR_WINNER = 0,
    BUYER = 1,
    SELLER = 2,
  }

  export enum Reason { 
    PB_ERROR_REASON = 0,
    OTHER = 1,
    BUG = 2,
    USABILITY = 3,
    SCAM = 4,
    PROTOCOL_VIOLATION = 5,
    NO_REPLY = 6,
    BANK_PROBLEMS = 7,
    OPTION_TRADE = 8,
    SELLER_NOT_RESPONDING = 9,
    WRONG_SENDER_ACCOUNT = 10,
    TRADE_ALREADY_SETTLED = 11,
    PEER_WAS_LATE = 12,
  }
}

export class Contract extends jspb.Message {
  getOfferPayload(): OfferPayload | undefined;
  setOfferPayload(value?: OfferPayload): Contract;
  hasOfferPayload(): boolean;
  clearOfferPayload(): Contract;

  getTradeAmount(): number;
  setTradeAmount(value: number): Contract;

  getTradePrice(): number;
  setTradePrice(value: number): Contract;

  getIsBuyerMakerAndSellerTaker(): boolean;
  setIsBuyerMakerAndSellerTaker(value: boolean): Contract;

  getMakerAccountId(): string;
  setMakerAccountId(value: string): Contract;

  getTakerAccountId(): string;
  setTakerAccountId(value: string): Contract;

  getMakerPaymentMethodId(): string;
  setMakerPaymentMethodId(value: string): Contract;

  getTakerPaymentMethodId(): string;
  setTakerPaymentMethodId(value: string): Contract;

  getMakerPaymentAccountPayloadHash(): Uint8Array | string;
  getMakerPaymentAccountPayloadHash_asU8(): Uint8Array;
  getMakerPaymentAccountPayloadHash_asB64(): string;
  setMakerPaymentAccountPayloadHash(value: Uint8Array | string): Contract;

  getTakerPaymentAccountPayloadHash(): Uint8Array | string;
  getTakerPaymentAccountPayloadHash_asU8(): Uint8Array;
  getTakerPaymentAccountPayloadHash_asB64(): string;
  setTakerPaymentAccountPayloadHash(value: Uint8Array | string): Contract;

  getMakerPubKeyRing(): PubKeyRing | undefined;
  setMakerPubKeyRing(value?: PubKeyRing): Contract;
  hasMakerPubKeyRing(): boolean;
  clearMakerPubKeyRing(): Contract;

  getTakerPubKeyRing(): PubKeyRing | undefined;
  setTakerPubKeyRing(value?: PubKeyRing): Contract;
  hasTakerPubKeyRing(): boolean;
  clearTakerPubKeyRing(): Contract;

  getBuyerNodeAddress(): NodeAddress | undefined;
  setBuyerNodeAddress(value?: NodeAddress): Contract;
  hasBuyerNodeAddress(): boolean;
  clearBuyerNodeAddress(): Contract;

  getSellerNodeAddress(): NodeAddress | undefined;
  setSellerNodeAddress(value?: NodeAddress): Contract;
  hasSellerNodeAddress(): boolean;
  clearSellerNodeAddress(): Contract;

  getMakerPayoutAddressString(): string;
  setMakerPayoutAddressString(value: string): Contract;

  getTakerPayoutAddressString(): string;
  setTakerPayoutAddressString(value: string): Contract;

  getArbitratorNodeAddress(): NodeAddress | undefined;
  setArbitratorNodeAddress(value?: NodeAddress): Contract;
  hasArbitratorNodeAddress(): boolean;
  clearArbitratorNodeAddress(): Contract;

  getLockTime(): number;
  setLockTime(value: number): Contract;

  getMakerDepositTxHash(): string;
  setMakerDepositTxHash(value: string): Contract;

  getTakerDepositTxHash(): string;
  setTakerDepositTxHash(value: string): Contract;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Contract.AsObject;
  static toObject(includeInstance: boolean, msg: Contract): Contract.AsObject;
  static serializeBinaryToWriter(message: Contract, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Contract;
  static deserializeBinaryFromReader(message: Contract, reader: jspb.BinaryReader): Contract;
}

export namespace Contract {
  export type AsObject = {
    offerPayload?: OfferPayload.AsObject,
    tradeAmount: number,
    tradePrice: number,
    isBuyerMakerAndSellerTaker: boolean,
    makerAccountId: string,
    takerAccountId: string,
    makerPaymentMethodId: string,
    takerPaymentMethodId: string,
    makerPaymentAccountPayloadHash: Uint8Array | string,
    takerPaymentAccountPayloadHash: Uint8Array | string,
    makerPubKeyRing?: PubKeyRing.AsObject,
    takerPubKeyRing?: PubKeyRing.AsObject,
    buyerNodeAddress?: NodeAddress.AsObject,
    sellerNodeAddress?: NodeAddress.AsObject,
    makerPayoutAddressString: string,
    takerPayoutAddressString: string,
    arbitratorNodeAddress?: NodeAddress.AsObject,
    lockTime: number,
    makerDepositTxHash: string,
    takerDepositTxHash: string,
  }
}

export class RawTransactionInput extends jspb.Message {
  getIndex(): number;
  setIndex(value: number): RawTransactionInput;

  getParentTransaction(): Uint8Array | string;
  getParentTransaction_asU8(): Uint8Array;
  getParentTransaction_asB64(): string;
  setParentTransaction(value: Uint8Array | string): RawTransactionInput;

  getValue(): number;
  setValue(value: number): RawTransactionInput;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RawTransactionInput.AsObject;
  static toObject(includeInstance: boolean, msg: RawTransactionInput): RawTransactionInput.AsObject;
  static serializeBinaryToWriter(message: RawTransactionInput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RawTransactionInput;
  static deserializeBinaryFromReader(message: RawTransactionInput, reader: jspb.BinaryReader): RawTransactionInput;
}

export namespace RawTransactionInput {
  export type AsObject = {
    index: number,
    parentTransaction: Uint8Array | string,
    value: number,
  }
}

export class PaymentAccountPayload extends jspb.Message {
  getId(): string;
  setId(value: string): PaymentAccountPayload;

  getPaymentMethodId(): string;
  setPaymentMethodId(value: string): PaymentAccountPayload;

  getMaxTradePeriod(): number;
  setMaxTradePeriod(value: number): PaymentAccountPayload;

  getAliPayAccountPayload(): AliPayAccountPayload | undefined;
  setAliPayAccountPayload(value?: AliPayAccountPayload): PaymentAccountPayload;
  hasAliPayAccountPayload(): boolean;
  clearAliPayAccountPayload(): PaymentAccountPayload;

  getChaseQuickPayAccountPayload(): ChaseQuickPayAccountPayload | undefined;
  setChaseQuickPayAccountPayload(value?: ChaseQuickPayAccountPayload): PaymentAccountPayload;
  hasChaseQuickPayAccountPayload(): boolean;
  clearChaseQuickPayAccountPayload(): PaymentAccountPayload;

  getClearXchangeAccountPayload(): ClearXchangeAccountPayload | undefined;
  setClearXchangeAccountPayload(value?: ClearXchangeAccountPayload): PaymentAccountPayload;
  hasClearXchangeAccountPayload(): boolean;
  clearClearXchangeAccountPayload(): PaymentAccountPayload;

  getCountryBasedPaymentAccountPayload(): CountryBasedPaymentAccountPayload | undefined;
  setCountryBasedPaymentAccountPayload(value?: CountryBasedPaymentAccountPayload): PaymentAccountPayload;
  hasCountryBasedPaymentAccountPayload(): boolean;
  clearCountryBasedPaymentAccountPayload(): PaymentAccountPayload;

  getCryptoCurrencyAccountPayload(): CryptoCurrencyAccountPayload | undefined;
  setCryptoCurrencyAccountPayload(value?: CryptoCurrencyAccountPayload): PaymentAccountPayload;
  hasCryptoCurrencyAccountPayload(): boolean;
  clearCryptoCurrencyAccountPayload(): PaymentAccountPayload;

  getFasterPaymentsAccountPayload(): FasterPaymentsAccountPayload | undefined;
  setFasterPaymentsAccountPayload(value?: FasterPaymentsAccountPayload): PaymentAccountPayload;
  hasFasterPaymentsAccountPayload(): boolean;
  clearFasterPaymentsAccountPayload(): PaymentAccountPayload;

  getInteracETransferAccountPayload(): InteracETransferAccountPayload | undefined;
  setInteracETransferAccountPayload(value?: InteracETransferAccountPayload): PaymentAccountPayload;
  hasInteracETransferAccountPayload(): boolean;
  clearInteracETransferAccountPayload(): PaymentAccountPayload;

  getOKPayAccountPayload(): OKPayAccountPayload | undefined;
  setOKPayAccountPayload(value?: OKPayAccountPayload): PaymentAccountPayload;
  hasOKPayAccountPayload(): boolean;
  clearOKPayAccountPayload(): PaymentAccountPayload;

  getPerfectMoneyAccountPayload(): PerfectMoneyAccountPayload | undefined;
  setPerfectMoneyAccountPayload(value?: PerfectMoneyAccountPayload): PaymentAccountPayload;
  hasPerfectMoneyAccountPayload(): boolean;
  clearPerfectMoneyAccountPayload(): PaymentAccountPayload;

  getSwishAccountPayload(): SwishAccountPayload | undefined;
  setSwishAccountPayload(value?: SwishAccountPayload): PaymentAccountPayload;
  hasSwishAccountPayload(): boolean;
  clearSwishAccountPayload(): PaymentAccountPayload;

  getUSPostalMoneyOrderAccountPayload(): USPostalMoneyOrderAccountPayload | undefined;
  setUSPostalMoneyOrderAccountPayload(value?: USPostalMoneyOrderAccountPayload): PaymentAccountPayload;
  hasUSPostalMoneyOrderAccountPayload(): boolean;
  clearUSPostalMoneyOrderAccountPayload(): PaymentAccountPayload;

  getUpholdAccountPayload(): UpholdAccountPayload | undefined;
  setUpholdAccountPayload(value?: UpholdAccountPayload): PaymentAccountPayload;
  hasUpholdAccountPayload(): boolean;
  clearUpholdAccountPayload(): PaymentAccountPayload;

  getCashAppAccountPayload(): CashAppAccountPayload | undefined;
  setCashAppAccountPayload(value?: CashAppAccountPayload): PaymentAccountPayload;
  hasCashAppAccountPayload(): boolean;
  clearCashAppAccountPayload(): PaymentAccountPayload;

  getMoneyBeamAccountPayload(): MoneyBeamAccountPayload | undefined;
  setMoneyBeamAccountPayload(value?: MoneyBeamAccountPayload): PaymentAccountPayload;
  hasMoneyBeamAccountPayload(): boolean;
  clearMoneyBeamAccountPayload(): PaymentAccountPayload;

  getVenmoAccountPayload(): VenmoAccountPayload | undefined;
  setVenmoAccountPayload(value?: VenmoAccountPayload): PaymentAccountPayload;
  hasVenmoAccountPayload(): boolean;
  clearVenmoAccountPayload(): PaymentAccountPayload;

  getPopmoneyAccountPayload(): PopmoneyAccountPayload | undefined;
  setPopmoneyAccountPayload(value?: PopmoneyAccountPayload): PaymentAccountPayload;
  hasPopmoneyAccountPayload(): boolean;
  clearPopmoneyAccountPayload(): PaymentAccountPayload;

  getRevolutAccountPayload(): RevolutAccountPayload | undefined;
  setRevolutAccountPayload(value?: RevolutAccountPayload): PaymentAccountPayload;
  hasRevolutAccountPayload(): boolean;
  clearRevolutAccountPayload(): PaymentAccountPayload;

  getWeChatPayAccountPayload(): WeChatPayAccountPayload | undefined;
  setWeChatPayAccountPayload(value?: WeChatPayAccountPayload): PaymentAccountPayload;
  hasWeChatPayAccountPayload(): boolean;
  clearWeChatPayAccountPayload(): PaymentAccountPayload;

  getMoneyGramAccountPayload(): MoneyGramAccountPayload | undefined;
  setMoneyGramAccountPayload(value?: MoneyGramAccountPayload): PaymentAccountPayload;
  hasMoneyGramAccountPayload(): boolean;
  clearMoneyGramAccountPayload(): PaymentAccountPayload;

  getHalCashAccountPayload(): HalCashAccountPayload | undefined;
  setHalCashAccountPayload(value?: HalCashAccountPayload): PaymentAccountPayload;
  hasHalCashAccountPayload(): boolean;
  clearHalCashAccountPayload(): PaymentAccountPayload;

  getPromptPayAccountPayload(): PromptPayAccountPayload | undefined;
  setPromptPayAccountPayload(value?: PromptPayAccountPayload): PaymentAccountPayload;
  hasPromptPayAccountPayload(): boolean;
  clearPromptPayAccountPayload(): PaymentAccountPayload;

  getAdvancedCashAccountPayload(): AdvancedCashAccountPayload | undefined;
  setAdvancedCashAccountPayload(value?: AdvancedCashAccountPayload): PaymentAccountPayload;
  hasAdvancedCashAccountPayload(): boolean;
  clearAdvancedCashAccountPayload(): PaymentAccountPayload;

  getInstantCryptoCurrencyAccountPayload(): InstantCryptoCurrencyAccountPayload | undefined;
  setInstantCryptoCurrencyAccountPayload(value?: InstantCryptoCurrencyAccountPayload): PaymentAccountPayload;
  hasInstantCryptoCurrencyAccountPayload(): boolean;
  clearInstantCryptoCurrencyAccountPayload(): PaymentAccountPayload;

  getJapanBankAccountPayload(): JapanBankAccountPayload | undefined;
  setJapanBankAccountPayload(value?: JapanBankAccountPayload): PaymentAccountPayload;
  hasJapanBankAccountPayload(): boolean;
  clearJapanBankAccountPayload(): PaymentAccountPayload;

  getTransferwiseAccountPayload(): TransferwiseAccountPayload | undefined;
  setTransferwiseAccountPayload(value?: TransferwiseAccountPayload): PaymentAccountPayload;
  hasTransferwiseAccountPayload(): boolean;
  clearTransferwiseAccountPayload(): PaymentAccountPayload;

  getAustraliaPayidPayload(): AustraliaPayidPayload | undefined;
  setAustraliaPayidPayload(value?: AustraliaPayidPayload): PaymentAccountPayload;
  hasAustraliaPayidPayload(): boolean;
  clearAustraliaPayidPayload(): PaymentAccountPayload;

  getAmazonGiftCardAccountPayload(): AmazonGiftCardAccountPayload | undefined;
  setAmazonGiftCardAccountPayload(value?: AmazonGiftCardAccountPayload): PaymentAccountPayload;
  hasAmazonGiftCardAccountPayload(): boolean;
  clearAmazonGiftCardAccountPayload(): PaymentAccountPayload;

  getCashByMailAccountPayload(): CashByMailAccountPayload | undefined;
  setCashByMailAccountPayload(value?: CashByMailAccountPayload): PaymentAccountPayload;
  hasCashByMailAccountPayload(): boolean;
  clearCashByMailAccountPayload(): PaymentAccountPayload;

  getExcludeFromJsonDataMap(): jspb.Map<string, string>;
  clearExcludeFromJsonDataMap(): PaymentAccountPayload;

  getMessageCase(): PaymentAccountPayload.MessageCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaymentAccountPayload.AsObject;
  static toObject(includeInstance: boolean, msg: PaymentAccountPayload): PaymentAccountPayload.AsObject;
  static serializeBinaryToWriter(message: PaymentAccountPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaymentAccountPayload;
  static deserializeBinaryFromReader(message: PaymentAccountPayload, reader: jspb.BinaryReader): PaymentAccountPayload;
}

export namespace PaymentAccountPayload {
  export type AsObject = {
    id: string,
    paymentMethodId: string,
    maxTradePeriod: number,
    aliPayAccountPayload?: AliPayAccountPayload.AsObject,
    chaseQuickPayAccountPayload?: ChaseQuickPayAccountPayload.AsObject,
    clearXchangeAccountPayload?: ClearXchangeAccountPayload.AsObject,
    countryBasedPaymentAccountPayload?: CountryBasedPaymentAccountPayload.AsObject,
    cryptoCurrencyAccountPayload?: CryptoCurrencyAccountPayload.AsObject,
    fasterPaymentsAccountPayload?: FasterPaymentsAccountPayload.AsObject,
    interacETransferAccountPayload?: InteracETransferAccountPayload.AsObject,
    oKPayAccountPayload?: OKPayAccountPayload.AsObject,
    perfectMoneyAccountPayload?: PerfectMoneyAccountPayload.AsObject,
    swishAccountPayload?: SwishAccountPayload.AsObject,
    uSPostalMoneyOrderAccountPayload?: USPostalMoneyOrderAccountPayload.AsObject,
    upholdAccountPayload?: UpholdAccountPayload.AsObject,
    cashAppAccountPayload?: CashAppAccountPayload.AsObject,
    moneyBeamAccountPayload?: MoneyBeamAccountPayload.AsObject,
    venmoAccountPayload?: VenmoAccountPayload.AsObject,
    popmoneyAccountPayload?: PopmoneyAccountPayload.AsObject,
    revolutAccountPayload?: RevolutAccountPayload.AsObject,
    weChatPayAccountPayload?: WeChatPayAccountPayload.AsObject,
    moneyGramAccountPayload?: MoneyGramAccountPayload.AsObject,
    halCashAccountPayload?: HalCashAccountPayload.AsObject,
    promptPayAccountPayload?: PromptPayAccountPayload.AsObject,
    advancedCashAccountPayload?: AdvancedCashAccountPayload.AsObject,
    instantCryptoCurrencyAccountPayload?: InstantCryptoCurrencyAccountPayload.AsObject,
    japanBankAccountPayload?: JapanBankAccountPayload.AsObject,
    transferwiseAccountPayload?: TransferwiseAccountPayload.AsObject,
    australiaPayidPayload?: AustraliaPayidPayload.AsObject,
    amazonGiftCardAccountPayload?: AmazonGiftCardAccountPayload.AsObject,
    cashByMailAccountPayload?: CashByMailAccountPayload.AsObject,
    excludeFromJsonDataMap: Array<[string, string]>,
  }

  export enum MessageCase { 
    MESSAGE_NOT_SET = 0,
    ALI_PAY_ACCOUNT_PAYLOAD = 4,
    CHASE_QUICK_PAY_ACCOUNT_PAYLOAD = 5,
    CLEAR_XCHANGE_ACCOUNT_PAYLOAD = 6,
    COUNTRY_BASED_PAYMENT_ACCOUNT_PAYLOAD = 7,
    CRYPTO_CURRENCY_ACCOUNT_PAYLOAD = 8,
    FASTER_PAYMENTS_ACCOUNT_PAYLOAD = 9,
    INTERAC_E_TRANSFER_ACCOUNT_PAYLOAD = 10,
    O_K_PAY_ACCOUNT_PAYLOAD = 11,
    PERFECT_MONEY_ACCOUNT_PAYLOAD = 12,
    SWISH_ACCOUNT_PAYLOAD = 13,
    U_S_POSTAL_MONEY_ORDER_ACCOUNT_PAYLOAD = 14,
    UPHOLD_ACCOUNT_PAYLOAD = 16,
    CASH_APP_ACCOUNT_PAYLOAD = 17,
    MONEY_BEAM_ACCOUNT_PAYLOAD = 18,
    VENMO_ACCOUNT_PAYLOAD = 19,
    POPMONEY_ACCOUNT_PAYLOAD = 20,
    REVOLUT_ACCOUNT_PAYLOAD = 21,
    WE_CHAT_PAY_ACCOUNT_PAYLOAD = 22,
    MONEY_GRAM_ACCOUNT_PAYLOAD = 23,
    HAL_CASH_ACCOUNT_PAYLOAD = 24,
    PROMPT_PAY_ACCOUNT_PAYLOAD = 25,
    ADVANCED_CASH_ACCOUNT_PAYLOAD = 26,
    INSTANT_CRYPTO_CURRENCY_ACCOUNT_PAYLOAD = 27,
    JAPAN_BANK_ACCOUNT_PAYLOAD = 28,
    TRANSFERWISE_ACCOUNT_PAYLOAD = 29,
    AUSTRALIA_PAYID_PAYLOAD = 30,
    AMAZON_GIFT_CARD_ACCOUNT_PAYLOAD = 31,
    CASH_BY_MAIL_ACCOUNT_PAYLOAD = 32,
  }
}

export class AliPayAccountPayload extends jspb.Message {
  getAccountNr(): string;
  setAccountNr(value: string): AliPayAccountPayload;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AliPayAccountPayload.AsObject;
  static toObject(includeInstance: boolean, msg: AliPayAccountPayload): AliPayAccountPayload.AsObject;
  static serializeBinaryToWriter(message: AliPayAccountPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AliPayAccountPayload;
  static deserializeBinaryFromReader(message: AliPayAccountPayload, reader: jspb.BinaryReader): AliPayAccountPayload;
}

export namespace AliPayAccountPayload {
  export type AsObject = {
    accountNr: string,
  }
}

export class WeChatPayAccountPayload extends jspb.Message {
  getAccountNr(): string;
  setAccountNr(value: string): WeChatPayAccountPayload;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WeChatPayAccountPayload.AsObject;
  static toObject(includeInstance: boolean, msg: WeChatPayAccountPayload): WeChatPayAccountPayload.AsObject;
  static serializeBinaryToWriter(message: WeChatPayAccountPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WeChatPayAccountPayload;
  static deserializeBinaryFromReader(message: WeChatPayAccountPayload, reader: jspb.BinaryReader): WeChatPayAccountPayload;
}

export namespace WeChatPayAccountPayload {
  export type AsObject = {
    accountNr: string,
  }
}

export class ChaseQuickPayAccountPayload extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): ChaseQuickPayAccountPayload;

  getHolderName(): string;
  setHolderName(value: string): ChaseQuickPayAccountPayload;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChaseQuickPayAccountPayload.AsObject;
  static toObject(includeInstance: boolean, msg: ChaseQuickPayAccountPayload): ChaseQuickPayAccountPayload.AsObject;
  static serializeBinaryToWriter(message: ChaseQuickPayAccountPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChaseQuickPayAccountPayload;
  static deserializeBinaryFromReader(message: ChaseQuickPayAccountPayload, reader: jspb.BinaryReader): ChaseQuickPayAccountPayload;
}

export namespace ChaseQuickPayAccountPayload {
  export type AsObject = {
    email: string,
    holderName: string,
  }
}

export class ClearXchangeAccountPayload extends jspb.Message {
  getHolderName(): string;
  setHolderName(value: string): ClearXchangeAccountPayload;

  getEmailOrMobileNr(): string;
  setEmailOrMobileNr(value: string): ClearXchangeAccountPayload;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClearXchangeAccountPayload.AsObject;
  static toObject(includeInstance: boolean, msg: ClearXchangeAccountPayload): ClearXchangeAccountPayload.AsObject;
  static serializeBinaryToWriter(message: ClearXchangeAccountPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClearXchangeAccountPayload;
  static deserializeBinaryFromReader(message: ClearXchangeAccountPayload, reader: jspb.BinaryReader): ClearXchangeAccountPayload;
}

export namespace ClearXchangeAccountPayload {
  export type AsObject = {
    holderName: string,
    emailOrMobileNr: string,
  }
}

export class CountryBasedPaymentAccountPayload extends jspb.Message {
  getCountrycode(): string;
  setCountrycode(value: string): CountryBasedPaymentAccountPayload;

  getBankAccountPayload(): BankAccountPayload | undefined;
  setBankAccountPayload(value?: BankAccountPayload): CountryBasedPaymentAccountPayload;
  hasBankAccountPayload(): boolean;
  clearBankAccountPayload(): CountryBasedPaymentAccountPayload;

  getCashDepositAccountPayload(): CashDepositAccountPayload | undefined;
  setCashDepositAccountPayload(value?: CashDepositAccountPayload): CountryBasedPaymentAccountPayload;
  hasCashDepositAccountPayload(): boolean;
  clearCashDepositAccountPayload(): CountryBasedPaymentAccountPayload;

  getSepaAccountPayload(): SepaAccountPayload | undefined;
  setSepaAccountPayload(value?: SepaAccountPayload): CountryBasedPaymentAccountPayload;
  hasSepaAccountPayload(): boolean;
  clearSepaAccountPayload(): CountryBasedPaymentAccountPayload;

  getWesternUnionAccountPayload(): WesternUnionAccountPayload | undefined;
  setWesternUnionAccountPayload(value?: WesternUnionAccountPayload): CountryBasedPaymentAccountPayload;
  hasWesternUnionAccountPayload(): boolean;
  clearWesternUnionAccountPayload(): CountryBasedPaymentAccountPayload;

  getSepaInstantAccountPayload(): SepaInstantAccountPayload | undefined;
  setSepaInstantAccountPayload(value?: SepaInstantAccountPayload): CountryBasedPaymentAccountPayload;
  hasSepaInstantAccountPayload(): boolean;
  clearSepaInstantAccountPayload(): CountryBasedPaymentAccountPayload;

  getF2fAccountPayload(): F2FAccountPayload | undefined;
  setF2fAccountPayload(value?: F2FAccountPayload): CountryBasedPaymentAccountPayload;
  hasF2fAccountPayload(): boolean;
  clearF2fAccountPayload(): CountryBasedPaymentAccountPayload;

  getMessageCase(): CountryBasedPaymentAccountPayload.MessageCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountryBasedPaymentAccountPayload.AsObject;
  static toObject(includeInstance: boolean, msg: CountryBasedPaymentAccountPayload): CountryBasedPaymentAccountPayload.AsObject;
  static serializeBinaryToWriter(message: CountryBasedPaymentAccountPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountryBasedPaymentAccountPayload;
  static deserializeBinaryFromReader(message: CountryBasedPaymentAccountPayload, reader: jspb.BinaryReader): CountryBasedPaymentAccountPayload;
}

export namespace CountryBasedPaymentAccountPayload {
  export type AsObject = {
    countrycode: string,
    bankAccountPayload?: BankAccountPayload.AsObject,
    cashDepositAccountPayload?: CashDepositAccountPayload.AsObject,
    sepaAccountPayload?: SepaAccountPayload.AsObject,
    westernUnionAccountPayload?: WesternUnionAccountPayload.AsObject,
    sepaInstantAccountPayload?: SepaInstantAccountPayload.AsObject,
    f2fAccountPayload?: F2FAccountPayload.AsObject,
  }

  export enum MessageCase { 
    MESSAGE_NOT_SET = 0,
    BANK_ACCOUNT_PAYLOAD = 2,
    CASH_DEPOSIT_ACCOUNT_PAYLOAD = 3,
    SEPA_ACCOUNT_PAYLOAD = 4,
    WESTERN_UNION_ACCOUNT_PAYLOAD = 5,
    SEPA_INSTANT_ACCOUNT_PAYLOAD = 6,
    F2F_ACCOUNT_PAYLOAD = 7,
  }
}

export class BankAccountPayload extends jspb.Message {
  getHolderName(): string;
  setHolderName(value: string): BankAccountPayload;

  getBankName(): string;
  setBankName(value: string): BankAccountPayload;

  getBankId(): string;
  setBankId(value: string): BankAccountPayload;

  getBranchId(): string;
  setBranchId(value: string): BankAccountPayload;

  getAccountNr(): string;
  setAccountNr(value: string): BankAccountPayload;

  getAccountType(): string;
  setAccountType(value: string): BankAccountPayload;

  getHolderTaxId(): string;
  setHolderTaxId(value: string): BankAccountPayload;

  getEmail(): string;
  setEmail(value: string): BankAccountPayload;

  getNationalBankAccountPayload(): NationalBankAccountPayload | undefined;
  setNationalBankAccountPayload(value?: NationalBankAccountPayload): BankAccountPayload;
  hasNationalBankAccountPayload(): boolean;
  clearNationalBankAccountPayload(): BankAccountPayload;

  getSameBankAccontPayload(): SameBankAccountPayload | undefined;
  setSameBankAccontPayload(value?: SameBankAccountPayload): BankAccountPayload;
  hasSameBankAccontPayload(): boolean;
  clearSameBankAccontPayload(): BankAccountPayload;

  getSpecificBanksAccountPayload(): SpecificBanksAccountPayload | undefined;
  setSpecificBanksAccountPayload(value?: SpecificBanksAccountPayload): BankAccountPayload;
  hasSpecificBanksAccountPayload(): boolean;
  clearSpecificBanksAccountPayload(): BankAccountPayload;

  getNationalAccountId(): string;
  setNationalAccountId(value: string): BankAccountPayload;

  getMessageCase(): BankAccountPayload.MessageCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BankAccountPayload.AsObject;
  static toObject(includeInstance: boolean, msg: BankAccountPayload): BankAccountPayload.AsObject;
  static serializeBinaryToWriter(message: BankAccountPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BankAccountPayload;
  static deserializeBinaryFromReader(message: BankAccountPayload, reader: jspb.BinaryReader): BankAccountPayload;
}

export namespace BankAccountPayload {
  export type AsObject = {
    holderName: string,
    bankName: string,
    bankId: string,
    branchId: string,
    accountNr: string,
    accountType: string,
    holderTaxId: string,
    email: string,
    nationalBankAccountPayload?: NationalBankAccountPayload.AsObject,
    sameBankAccontPayload?: SameBankAccountPayload.AsObject,
    specificBanksAccountPayload?: SpecificBanksAccountPayload.AsObject,
    nationalAccountId: string,
  }

  export enum MessageCase { 
    MESSAGE_NOT_SET = 0,
    NATIONAL_BANK_ACCOUNT_PAYLOAD = 9,
    SAME_BANK_ACCONT_PAYLOAD = 10,
    SPECIFIC_BANKS_ACCOUNT_PAYLOAD = 11,
  }
}

export class NationalBankAccountPayload extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NationalBankAccountPayload.AsObject;
  static toObject(includeInstance: boolean, msg: NationalBankAccountPayload): NationalBankAccountPayload.AsObject;
  static serializeBinaryToWriter(message: NationalBankAccountPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NationalBankAccountPayload;
  static deserializeBinaryFromReader(message: NationalBankAccountPayload, reader: jspb.BinaryReader): NationalBankAccountPayload;
}

export namespace NationalBankAccountPayload {
  export type AsObject = {
  }
}

export class SameBankAccountPayload extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SameBankAccountPayload.AsObject;
  static toObject(includeInstance: boolean, msg: SameBankAccountPayload): SameBankAccountPayload.AsObject;
  static serializeBinaryToWriter(message: SameBankAccountPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SameBankAccountPayload;
  static deserializeBinaryFromReader(message: SameBankAccountPayload, reader: jspb.BinaryReader): SameBankAccountPayload;
}

export namespace SameBankAccountPayload {
  export type AsObject = {
  }
}

export class JapanBankAccountPayload extends jspb.Message {
  getBankName(): string;
  setBankName(value: string): JapanBankAccountPayload;

  getBankCode(): string;
  setBankCode(value: string): JapanBankAccountPayload;

  getBankBranchName(): string;
  setBankBranchName(value: string): JapanBankAccountPayload;

  getBankBranchCode(): string;
  setBankBranchCode(value: string): JapanBankAccountPayload;

  getBankAccountType(): string;
  setBankAccountType(value: string): JapanBankAccountPayload;

  getBankAccountName(): string;
  setBankAccountName(value: string): JapanBankAccountPayload;

  getBankAccountNumber(): string;
  setBankAccountNumber(value: string): JapanBankAccountPayload;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JapanBankAccountPayload.AsObject;
  static toObject(includeInstance: boolean, msg: JapanBankAccountPayload): JapanBankAccountPayload.AsObject;
  static serializeBinaryToWriter(message: JapanBankAccountPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JapanBankAccountPayload;
  static deserializeBinaryFromReader(message: JapanBankAccountPayload, reader: jspb.BinaryReader): JapanBankAccountPayload;
}

export namespace JapanBankAccountPayload {
  export type AsObject = {
    bankName: string,
    bankCode: string,
    bankBranchName: string,
    bankBranchCode: string,
    bankAccountType: string,
    bankAccountName: string,
    bankAccountNumber: string,
  }
}

export class AustraliaPayidPayload extends jspb.Message {
  getBankAccountName(): string;
  setBankAccountName(value: string): AustraliaPayidPayload;

  getPayid(): string;
  setPayid(value: string): AustraliaPayidPayload;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AustraliaPayidPayload.AsObject;
  static toObject(includeInstance: boolean, msg: AustraliaPayidPayload): AustraliaPayidPayload.AsObject;
  static serializeBinaryToWriter(message: AustraliaPayidPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AustraliaPayidPayload;
  static deserializeBinaryFromReader(message: AustraliaPayidPayload, reader: jspb.BinaryReader): AustraliaPayidPayload;
}

export namespace AustraliaPayidPayload {
  export type AsObject = {
    bankAccountName: string,
    payid: string,
  }
}

export class SpecificBanksAccountPayload extends jspb.Message {
  getAcceptedBanksList(): Array<string>;
  setAcceptedBanksList(value: Array<string>): SpecificBanksAccountPayload;
  clearAcceptedBanksList(): SpecificBanksAccountPayload;
  addAcceptedBanks(value: string, index?: number): SpecificBanksAccountPayload;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SpecificBanksAccountPayload.AsObject;
  static toObject(includeInstance: boolean, msg: SpecificBanksAccountPayload): SpecificBanksAccountPayload.AsObject;
  static serializeBinaryToWriter(message: SpecificBanksAccountPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SpecificBanksAccountPayload;
  static deserializeBinaryFromReader(message: SpecificBanksAccountPayload, reader: jspb.BinaryReader): SpecificBanksAccountPayload;
}

export namespace SpecificBanksAccountPayload {
  export type AsObject = {
    acceptedBanksList: Array<string>,
  }
}

export class CashDepositAccountPayload extends jspb.Message {
  getHolderName(): string;
  setHolderName(value: string): CashDepositAccountPayload;

  getHolderEmail(): string;
  setHolderEmail(value: string): CashDepositAccountPayload;

  getBankName(): string;
  setBankName(value: string): CashDepositAccountPayload;

  getBankId(): string;
  setBankId(value: string): CashDepositAccountPayload;

  getBranchId(): string;
  setBranchId(value: string): CashDepositAccountPayload;

  getAccountNr(): string;
  setAccountNr(value: string): CashDepositAccountPayload;

  getAccountType(): string;
  setAccountType(value: string): CashDepositAccountPayload;

  getRequirements(): string;
  setRequirements(value: string): CashDepositAccountPayload;

  getHolderTaxId(): string;
  setHolderTaxId(value: string): CashDepositAccountPayload;

  getNationalAccountId(): string;
  setNationalAccountId(value: string): CashDepositAccountPayload;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CashDepositAccountPayload.AsObject;
  static toObject(includeInstance: boolean, msg: CashDepositAccountPayload): CashDepositAccountPayload.AsObject;
  static serializeBinaryToWriter(message: CashDepositAccountPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CashDepositAccountPayload;
  static deserializeBinaryFromReader(message: CashDepositAccountPayload, reader: jspb.BinaryReader): CashDepositAccountPayload;
}

export namespace CashDepositAccountPayload {
  export type AsObject = {
    holderName: string,
    holderEmail: string,
    bankName: string,
    bankId: string,
    branchId: string,
    accountNr: string,
    accountType: string,
    requirements: string,
    holderTaxId: string,
    nationalAccountId: string,
  }
}

export class MoneyGramAccountPayload extends jspb.Message {
  getHolderName(): string;
  setHolderName(value: string): MoneyGramAccountPayload;

  getCountryCode(): string;
  setCountryCode(value: string): MoneyGramAccountPayload;

  getState(): string;
  setState(value: string): MoneyGramAccountPayload;

  getEmail(): string;
  setEmail(value: string): MoneyGramAccountPayload;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MoneyGramAccountPayload.AsObject;
  static toObject(includeInstance: boolean, msg: MoneyGramAccountPayload): MoneyGramAccountPayload.AsObject;
  static serializeBinaryToWriter(message: MoneyGramAccountPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MoneyGramAccountPayload;
  static deserializeBinaryFromReader(message: MoneyGramAccountPayload, reader: jspb.BinaryReader): MoneyGramAccountPayload;
}

export namespace MoneyGramAccountPayload {
  export type AsObject = {
    holderName: string,
    countryCode: string,
    state: string,
    email: string,
  }
}

export class HalCashAccountPayload extends jspb.Message {
  getMobileNr(): string;
  setMobileNr(value: string): HalCashAccountPayload;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HalCashAccountPayload.AsObject;
  static toObject(includeInstance: boolean, msg: HalCashAccountPayload): HalCashAccountPayload.AsObject;
  static serializeBinaryToWriter(message: HalCashAccountPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HalCashAccountPayload;
  static deserializeBinaryFromReader(message: HalCashAccountPayload, reader: jspb.BinaryReader): HalCashAccountPayload;
}

export namespace HalCashAccountPayload {
  export type AsObject = {
    mobileNr: string,
  }
}

export class WesternUnionAccountPayload extends jspb.Message {
  getHolderName(): string;
  setHolderName(value: string): WesternUnionAccountPayload;

  getCity(): string;
  setCity(value: string): WesternUnionAccountPayload;

  getState(): string;
  setState(value: string): WesternUnionAccountPayload;

  getEmail(): string;
  setEmail(value: string): WesternUnionAccountPayload;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WesternUnionAccountPayload.AsObject;
  static toObject(includeInstance: boolean, msg: WesternUnionAccountPayload): WesternUnionAccountPayload.AsObject;
  static serializeBinaryToWriter(message: WesternUnionAccountPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WesternUnionAccountPayload;
  static deserializeBinaryFromReader(message: WesternUnionAccountPayload, reader: jspb.BinaryReader): WesternUnionAccountPayload;
}

export namespace WesternUnionAccountPayload {
  export type AsObject = {
    holderName: string,
    city: string,
    state: string,
    email: string,
  }
}

export class AmazonGiftCardAccountPayload extends jspb.Message {
  getEmailOrMobileNr(): string;
  setEmailOrMobileNr(value: string): AmazonGiftCardAccountPayload;

  getCountryCode(): string;
  setCountryCode(value: string): AmazonGiftCardAccountPayload;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AmazonGiftCardAccountPayload.AsObject;
  static toObject(includeInstance: boolean, msg: AmazonGiftCardAccountPayload): AmazonGiftCardAccountPayload.AsObject;
  static serializeBinaryToWriter(message: AmazonGiftCardAccountPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AmazonGiftCardAccountPayload;
  static deserializeBinaryFromReader(message: AmazonGiftCardAccountPayload, reader: jspb.BinaryReader): AmazonGiftCardAccountPayload;
}

export namespace AmazonGiftCardAccountPayload {
  export type AsObject = {
    emailOrMobileNr: string,
    countryCode: string,
  }
}

export class SepaAccountPayload extends jspb.Message {
  getHolderName(): string;
  setHolderName(value: string): SepaAccountPayload;

  getIban(): string;
  setIban(value: string): SepaAccountPayload;

  getBic(): string;
  setBic(value: string): SepaAccountPayload;

  getEmail(): string;
  setEmail(value: string): SepaAccountPayload;

  getAcceptedCountryCodesList(): Array<string>;
  setAcceptedCountryCodesList(value: Array<string>): SepaAccountPayload;
  clearAcceptedCountryCodesList(): SepaAccountPayload;
  addAcceptedCountryCodes(value: string, index?: number): SepaAccountPayload;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SepaAccountPayload.AsObject;
  static toObject(includeInstance: boolean, msg: SepaAccountPayload): SepaAccountPayload.AsObject;
  static serializeBinaryToWriter(message: SepaAccountPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SepaAccountPayload;
  static deserializeBinaryFromReader(message: SepaAccountPayload, reader: jspb.BinaryReader): SepaAccountPayload;
}

export namespace SepaAccountPayload {
  export type AsObject = {
    holderName: string,
    iban: string,
    bic: string,
    email: string,
    acceptedCountryCodesList: Array<string>,
  }
}

export class SepaInstantAccountPayload extends jspb.Message {
  getHolderName(): string;
  setHolderName(value: string): SepaInstantAccountPayload;

  getIban(): string;
  setIban(value: string): SepaInstantAccountPayload;

  getBic(): string;
  setBic(value: string): SepaInstantAccountPayload;

  getAcceptedCountryCodesList(): Array<string>;
  setAcceptedCountryCodesList(value: Array<string>): SepaInstantAccountPayload;
  clearAcceptedCountryCodesList(): SepaInstantAccountPayload;
  addAcceptedCountryCodes(value: string, index?: number): SepaInstantAccountPayload;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SepaInstantAccountPayload.AsObject;
  static toObject(includeInstance: boolean, msg: SepaInstantAccountPayload): SepaInstantAccountPayload.AsObject;
  static serializeBinaryToWriter(message: SepaInstantAccountPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SepaInstantAccountPayload;
  static deserializeBinaryFromReader(message: SepaInstantAccountPayload, reader: jspb.BinaryReader): SepaInstantAccountPayload;
}

export namespace SepaInstantAccountPayload {
  export type AsObject = {
    holderName: string,
    iban: string,
    bic: string,
    acceptedCountryCodesList: Array<string>,
  }
}

export class CryptoCurrencyAccountPayload extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): CryptoCurrencyAccountPayload;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CryptoCurrencyAccountPayload.AsObject;
  static toObject(includeInstance: boolean, msg: CryptoCurrencyAccountPayload): CryptoCurrencyAccountPayload.AsObject;
  static serializeBinaryToWriter(message: CryptoCurrencyAccountPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CryptoCurrencyAccountPayload;
  static deserializeBinaryFromReader(message: CryptoCurrencyAccountPayload, reader: jspb.BinaryReader): CryptoCurrencyAccountPayload;
}

export namespace CryptoCurrencyAccountPayload {
  export type AsObject = {
    address: string,
  }
}

export class InstantCryptoCurrencyAccountPayload extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): InstantCryptoCurrencyAccountPayload;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InstantCryptoCurrencyAccountPayload.AsObject;
  static toObject(includeInstance: boolean, msg: InstantCryptoCurrencyAccountPayload): InstantCryptoCurrencyAccountPayload.AsObject;
  static serializeBinaryToWriter(message: InstantCryptoCurrencyAccountPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InstantCryptoCurrencyAccountPayload;
  static deserializeBinaryFromReader(message: InstantCryptoCurrencyAccountPayload, reader: jspb.BinaryReader): InstantCryptoCurrencyAccountPayload;
}

export namespace InstantCryptoCurrencyAccountPayload {
  export type AsObject = {
    address: string,
  }
}

export class FasterPaymentsAccountPayload extends jspb.Message {
  getSortCode(): string;
  setSortCode(value: string): FasterPaymentsAccountPayload;

  getAccountNr(): string;
  setAccountNr(value: string): FasterPaymentsAccountPayload;

  getEmail(): string;
  setEmail(value: string): FasterPaymentsAccountPayload;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FasterPaymentsAccountPayload.AsObject;
  static toObject(includeInstance: boolean, msg: FasterPaymentsAccountPayload): FasterPaymentsAccountPayload.AsObject;
  static serializeBinaryToWriter(message: FasterPaymentsAccountPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FasterPaymentsAccountPayload;
  static deserializeBinaryFromReader(message: FasterPaymentsAccountPayload, reader: jspb.BinaryReader): FasterPaymentsAccountPayload;
}

export namespace FasterPaymentsAccountPayload {
  export type AsObject = {
    sortCode: string,
    accountNr: string,
    email: string,
  }
}

export class InteracETransferAccountPayload extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): InteracETransferAccountPayload;

  getHolderName(): string;
  setHolderName(value: string): InteracETransferAccountPayload;

  getQuestion(): string;
  setQuestion(value: string): InteracETransferAccountPayload;

  getAnswer(): string;
  setAnswer(value: string): InteracETransferAccountPayload;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InteracETransferAccountPayload.AsObject;
  static toObject(includeInstance: boolean, msg: InteracETransferAccountPayload): InteracETransferAccountPayload.AsObject;
  static serializeBinaryToWriter(message: InteracETransferAccountPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InteracETransferAccountPayload;
  static deserializeBinaryFromReader(message: InteracETransferAccountPayload, reader: jspb.BinaryReader): InteracETransferAccountPayload;
}

export namespace InteracETransferAccountPayload {
  export type AsObject = {
    email: string,
    holderName: string,
    question: string,
    answer: string,
  }
}

export class OKPayAccountPayload extends jspb.Message {
  getAccountNr(): string;
  setAccountNr(value: string): OKPayAccountPayload;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OKPayAccountPayload.AsObject;
  static toObject(includeInstance: boolean, msg: OKPayAccountPayload): OKPayAccountPayload.AsObject;
  static serializeBinaryToWriter(message: OKPayAccountPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OKPayAccountPayload;
  static deserializeBinaryFromReader(message: OKPayAccountPayload, reader: jspb.BinaryReader): OKPayAccountPayload;
}

export namespace OKPayAccountPayload {
  export type AsObject = {
    accountNr: string,
  }
}

export class UpholdAccountPayload extends jspb.Message {
  getAccountId(): string;
  setAccountId(value: string): UpholdAccountPayload;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpholdAccountPayload.AsObject;
  static toObject(includeInstance: boolean, msg: UpholdAccountPayload): UpholdAccountPayload.AsObject;
  static serializeBinaryToWriter(message: UpholdAccountPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpholdAccountPayload;
  static deserializeBinaryFromReader(message: UpholdAccountPayload, reader: jspb.BinaryReader): UpholdAccountPayload;
}

export namespace UpholdAccountPayload {
  export type AsObject = {
    accountId: string,
  }
}

export class CashAppAccountPayload extends jspb.Message {
  getCashTag(): string;
  setCashTag(value: string): CashAppAccountPayload;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CashAppAccountPayload.AsObject;
  static toObject(includeInstance: boolean, msg: CashAppAccountPayload): CashAppAccountPayload.AsObject;
  static serializeBinaryToWriter(message: CashAppAccountPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CashAppAccountPayload;
  static deserializeBinaryFromReader(message: CashAppAccountPayload, reader: jspb.BinaryReader): CashAppAccountPayload;
}

export namespace CashAppAccountPayload {
  export type AsObject = {
    cashTag: string,
  }
}

export class MoneyBeamAccountPayload extends jspb.Message {
  getAccountId(): string;
  setAccountId(value: string): MoneyBeamAccountPayload;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MoneyBeamAccountPayload.AsObject;
  static toObject(includeInstance: boolean, msg: MoneyBeamAccountPayload): MoneyBeamAccountPayload.AsObject;
  static serializeBinaryToWriter(message: MoneyBeamAccountPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MoneyBeamAccountPayload;
  static deserializeBinaryFromReader(message: MoneyBeamAccountPayload, reader: jspb.BinaryReader): MoneyBeamAccountPayload;
}

export namespace MoneyBeamAccountPayload {
  export type AsObject = {
    accountId: string,
  }
}

export class VenmoAccountPayload extends jspb.Message {
  getVenmoUserName(): string;
  setVenmoUserName(value: string): VenmoAccountPayload;

  getHolderName(): string;
  setHolderName(value: string): VenmoAccountPayload;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VenmoAccountPayload.AsObject;
  static toObject(includeInstance: boolean, msg: VenmoAccountPayload): VenmoAccountPayload.AsObject;
  static serializeBinaryToWriter(message: VenmoAccountPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VenmoAccountPayload;
  static deserializeBinaryFromReader(message: VenmoAccountPayload, reader: jspb.BinaryReader): VenmoAccountPayload;
}

export namespace VenmoAccountPayload {
  export type AsObject = {
    venmoUserName: string,
    holderName: string,
  }
}

export class PopmoneyAccountPayload extends jspb.Message {
  getAccountId(): string;
  setAccountId(value: string): PopmoneyAccountPayload;

  getHolderName(): string;
  setHolderName(value: string): PopmoneyAccountPayload;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PopmoneyAccountPayload.AsObject;
  static toObject(includeInstance: boolean, msg: PopmoneyAccountPayload): PopmoneyAccountPayload.AsObject;
  static serializeBinaryToWriter(message: PopmoneyAccountPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PopmoneyAccountPayload;
  static deserializeBinaryFromReader(message: PopmoneyAccountPayload, reader: jspb.BinaryReader): PopmoneyAccountPayload;
}

export namespace PopmoneyAccountPayload {
  export type AsObject = {
    accountId: string,
    holderName: string,
  }
}

export class RevolutAccountPayload extends jspb.Message {
  getAccountId(): string;
  setAccountId(value: string): RevolutAccountPayload;

  getUserName(): string;
  setUserName(value: string): RevolutAccountPayload;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RevolutAccountPayload.AsObject;
  static toObject(includeInstance: boolean, msg: RevolutAccountPayload): RevolutAccountPayload.AsObject;
  static serializeBinaryToWriter(message: RevolutAccountPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RevolutAccountPayload;
  static deserializeBinaryFromReader(message: RevolutAccountPayload, reader: jspb.BinaryReader): RevolutAccountPayload;
}

export namespace RevolutAccountPayload {
  export type AsObject = {
    accountId: string,
    userName: string,
  }
}

export class PerfectMoneyAccountPayload extends jspb.Message {
  getAccountNr(): string;
  setAccountNr(value: string): PerfectMoneyAccountPayload;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PerfectMoneyAccountPayload.AsObject;
  static toObject(includeInstance: boolean, msg: PerfectMoneyAccountPayload): PerfectMoneyAccountPayload.AsObject;
  static serializeBinaryToWriter(message: PerfectMoneyAccountPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PerfectMoneyAccountPayload;
  static deserializeBinaryFromReader(message: PerfectMoneyAccountPayload, reader: jspb.BinaryReader): PerfectMoneyAccountPayload;
}

export namespace PerfectMoneyAccountPayload {
  export type AsObject = {
    accountNr: string,
  }
}

export class SwishAccountPayload extends jspb.Message {
  getMobileNr(): string;
  setMobileNr(value: string): SwishAccountPayload;

  getHolderName(): string;
  setHolderName(value: string): SwishAccountPayload;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SwishAccountPayload.AsObject;
  static toObject(includeInstance: boolean, msg: SwishAccountPayload): SwishAccountPayload.AsObject;
  static serializeBinaryToWriter(message: SwishAccountPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SwishAccountPayload;
  static deserializeBinaryFromReader(message: SwishAccountPayload, reader: jspb.BinaryReader): SwishAccountPayload;
}

export namespace SwishAccountPayload {
  export type AsObject = {
    mobileNr: string,
    holderName: string,
  }
}

export class USPostalMoneyOrderAccountPayload extends jspb.Message {
  getPostalAddress(): string;
  setPostalAddress(value: string): USPostalMoneyOrderAccountPayload;

  getHolderName(): string;
  setHolderName(value: string): USPostalMoneyOrderAccountPayload;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): USPostalMoneyOrderAccountPayload.AsObject;
  static toObject(includeInstance: boolean, msg: USPostalMoneyOrderAccountPayload): USPostalMoneyOrderAccountPayload.AsObject;
  static serializeBinaryToWriter(message: USPostalMoneyOrderAccountPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): USPostalMoneyOrderAccountPayload;
  static deserializeBinaryFromReader(message: USPostalMoneyOrderAccountPayload, reader: jspb.BinaryReader): USPostalMoneyOrderAccountPayload;
}

export namespace USPostalMoneyOrderAccountPayload {
  export type AsObject = {
    postalAddress: string,
    holderName: string,
  }
}

export class F2FAccountPayload extends jspb.Message {
  getContact(): string;
  setContact(value: string): F2FAccountPayload;

  getCity(): string;
  setCity(value: string): F2FAccountPayload;

  getExtraInfo(): string;
  setExtraInfo(value: string): F2FAccountPayload;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): F2FAccountPayload.AsObject;
  static toObject(includeInstance: boolean, msg: F2FAccountPayload): F2FAccountPayload.AsObject;
  static serializeBinaryToWriter(message: F2FAccountPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): F2FAccountPayload;
  static deserializeBinaryFromReader(message: F2FAccountPayload, reader: jspb.BinaryReader): F2FAccountPayload;
}

export namespace F2FAccountPayload {
  export type AsObject = {
    contact: string,
    city: string,
    extraInfo: string,
  }
}

export class CashByMailAccountPayload extends jspb.Message {
  getPostalAddress(): string;
  setPostalAddress(value: string): CashByMailAccountPayload;

  getContact(): string;
  setContact(value: string): CashByMailAccountPayload;

  getExtraInfo(): string;
  setExtraInfo(value: string): CashByMailAccountPayload;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CashByMailAccountPayload.AsObject;
  static toObject(includeInstance: boolean, msg: CashByMailAccountPayload): CashByMailAccountPayload.AsObject;
  static serializeBinaryToWriter(message: CashByMailAccountPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CashByMailAccountPayload;
  static deserializeBinaryFromReader(message: CashByMailAccountPayload, reader: jspb.BinaryReader): CashByMailAccountPayload;
}

export namespace CashByMailAccountPayload {
  export type AsObject = {
    postalAddress: string,
    contact: string,
    extraInfo: string,
  }
}

export class PromptPayAccountPayload extends jspb.Message {
  getPromptPayId(): string;
  setPromptPayId(value: string): PromptPayAccountPayload;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PromptPayAccountPayload.AsObject;
  static toObject(includeInstance: boolean, msg: PromptPayAccountPayload): PromptPayAccountPayload.AsObject;
  static serializeBinaryToWriter(message: PromptPayAccountPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PromptPayAccountPayload;
  static deserializeBinaryFromReader(message: PromptPayAccountPayload, reader: jspb.BinaryReader): PromptPayAccountPayload;
}

export namespace PromptPayAccountPayload {
  export type AsObject = {
    promptPayId: string,
  }
}

export class AdvancedCashAccountPayload extends jspb.Message {
  getAccountNr(): string;
  setAccountNr(value: string): AdvancedCashAccountPayload;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdvancedCashAccountPayload.AsObject;
  static toObject(includeInstance: boolean, msg: AdvancedCashAccountPayload): AdvancedCashAccountPayload.AsObject;
  static serializeBinaryToWriter(message: AdvancedCashAccountPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdvancedCashAccountPayload;
  static deserializeBinaryFromReader(message: AdvancedCashAccountPayload, reader: jspb.BinaryReader): AdvancedCashAccountPayload;
}

export namespace AdvancedCashAccountPayload {
  export type AsObject = {
    accountNr: string,
  }
}

export class TransferwiseAccountPayload extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): TransferwiseAccountPayload;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransferwiseAccountPayload.AsObject;
  static toObject(includeInstance: boolean, msg: TransferwiseAccountPayload): TransferwiseAccountPayload.AsObject;
  static serializeBinaryToWriter(message: TransferwiseAccountPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransferwiseAccountPayload;
  static deserializeBinaryFromReader(message: TransferwiseAccountPayload, reader: jspb.BinaryReader): TransferwiseAccountPayload;
}

export namespace TransferwiseAccountPayload {
  export type AsObject = {
    email: string,
  }
}

export class PersistableEnvelope extends jspb.Message {
  getSequenceNumberMap(): SequenceNumberMap | undefined;
  setSequenceNumberMap(value?: SequenceNumberMap): PersistableEnvelope;
  hasSequenceNumberMap(): boolean;
  clearSequenceNumberMap(): PersistableEnvelope;

  getPersistedEntryMap(): PersistedEntryMap | undefined;
  setPersistedEntryMap(value?: PersistedEntryMap): PersistableEnvelope;
  hasPersistedEntryMap(): boolean;
  clearPersistedEntryMap(): PersistableEnvelope;

  getPeerList(): PeerList | undefined;
  setPeerList(value?: PeerList): PersistableEnvelope;
  hasPeerList(): boolean;
  clearPeerList(): PersistableEnvelope;

  getAddressEntryList(): AddressEntryList | undefined;
  setAddressEntryList(value?: AddressEntryList): PersistableEnvelope;
  hasAddressEntryList(): boolean;
  clearAddressEntryList(): PersistableEnvelope;

  getNavigationPath(): NavigationPath | undefined;
  setNavigationPath(value?: NavigationPath): PersistableEnvelope;
  hasNavigationPath(): boolean;
  clearNavigationPath(): PersistableEnvelope;

  getTradableList(): TradableList | undefined;
  setTradableList(value?: TradableList): PersistableEnvelope;
  hasTradableList(): boolean;
  clearTradableList(): PersistableEnvelope;

  getArbitrationDisputeList(): ArbitrationDisputeList | undefined;
  setArbitrationDisputeList(value?: ArbitrationDisputeList): PersistableEnvelope;
  hasArbitrationDisputeList(): boolean;
  clearArbitrationDisputeList(): PersistableEnvelope;

  getPreferencesPayload(): PreferencesPayload | undefined;
  setPreferencesPayload(value?: PreferencesPayload): PersistableEnvelope;
  hasPreferencesPayload(): boolean;
  clearPreferencesPayload(): PersistableEnvelope;

  getUserPayload(): UserPayload | undefined;
  setUserPayload(value?: UserPayload): PersistableEnvelope;
  hasUserPayload(): boolean;
  clearUserPayload(): PersistableEnvelope;

  getPaymentAccountList(): PaymentAccountList | undefined;
  setPaymentAccountList(value?: PaymentAccountList): PersistableEnvelope;
  hasPaymentAccountList(): boolean;
  clearPaymentAccountList(): PersistableEnvelope;

  getAccountAgeWitnessStore(): AccountAgeWitnessStore | undefined;
  setAccountAgeWitnessStore(value?: AccountAgeWitnessStore): PersistableEnvelope;
  hasAccountAgeWitnessStore(): boolean;
  clearAccountAgeWitnessStore(): PersistableEnvelope;

  getTradeStatistics2Store(): TradeStatistics2Store | undefined;
  setTradeStatistics2Store(value?: TradeStatistics2Store): PersistableEnvelope;
  hasTradeStatistics2Store(): boolean;
  clearTradeStatistics2Store(): PersistableEnvelope;

  getSignedWitnessStore(): SignedWitnessStore | undefined;
  setSignedWitnessStore(value?: SignedWitnessStore): PersistableEnvelope;
  hasSignedWitnessStore(): boolean;
  clearSignedWitnessStore(): PersistableEnvelope;

  getMediationDisputeList(): MediationDisputeList | undefined;
  setMediationDisputeList(value?: MediationDisputeList): PersistableEnvelope;
  hasMediationDisputeList(): boolean;
  clearMediationDisputeList(): PersistableEnvelope;

  getRefundDisputeList(): RefundDisputeList | undefined;
  setRefundDisputeList(value?: RefundDisputeList): PersistableEnvelope;
  hasRefundDisputeList(): boolean;
  clearRefundDisputeList(): PersistableEnvelope;

  getTradeStatistics3Store(): TradeStatistics3Store | undefined;
  setTradeStatistics3Store(value?: TradeStatistics3Store): PersistableEnvelope;
  hasTradeStatistics3Store(): boolean;
  clearTradeStatistics3Store(): PersistableEnvelope;

  getMailboxMessageList(): MailboxMessageList | undefined;
  setMailboxMessageList(value?: MailboxMessageList): PersistableEnvelope;
  hasMailboxMessageList(): boolean;
  clearMailboxMessageList(): PersistableEnvelope;

  getIgnoredMailboxMap(): IgnoredMailboxMap | undefined;
  setIgnoredMailboxMap(value?: IgnoredMailboxMap): PersistableEnvelope;
  hasIgnoredMailboxMap(): boolean;
  clearIgnoredMailboxMap(): PersistableEnvelope;

  getRemovedPayloadsMap(): RemovedPayloadsMap | undefined;
  setRemovedPayloadsMap(value?: RemovedPayloadsMap): PersistableEnvelope;
  hasRemovedPayloadsMap(): boolean;
  clearRemovedPayloadsMap(): PersistableEnvelope;

  getXmrAddressEntryList(): XmrAddressEntryList | undefined;
  setXmrAddressEntryList(value?: XmrAddressEntryList): PersistableEnvelope;
  hasXmrAddressEntryList(): boolean;
  clearXmrAddressEntryList(): PersistableEnvelope;

  getSignedOfferList(): SignedOfferList | undefined;
  setSignedOfferList(value?: SignedOfferList): PersistableEnvelope;
  hasSignedOfferList(): boolean;
  clearSignedOfferList(): PersistableEnvelope;

  getMessageCase(): PersistableEnvelope.MessageCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PersistableEnvelope.AsObject;
  static toObject(includeInstance: boolean, msg: PersistableEnvelope): PersistableEnvelope.AsObject;
  static serializeBinaryToWriter(message: PersistableEnvelope, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PersistableEnvelope;
  static deserializeBinaryFromReader(message: PersistableEnvelope, reader: jspb.BinaryReader): PersistableEnvelope;
}

export namespace PersistableEnvelope {
  export type AsObject = {
    sequenceNumberMap?: SequenceNumberMap.AsObject,
    persistedEntryMap?: PersistedEntryMap.AsObject,
    peerList?: PeerList.AsObject,
    addressEntryList?: AddressEntryList.AsObject,
    navigationPath?: NavigationPath.AsObject,
    tradableList?: TradableList.AsObject,
    arbitrationDisputeList?: ArbitrationDisputeList.AsObject,
    preferencesPayload?: PreferencesPayload.AsObject,
    userPayload?: UserPayload.AsObject,
    paymentAccountList?: PaymentAccountList.AsObject,
    accountAgeWitnessStore?: AccountAgeWitnessStore.AsObject,
    tradeStatistics2Store?: TradeStatistics2Store.AsObject,
    signedWitnessStore?: SignedWitnessStore.AsObject,
    mediationDisputeList?: MediationDisputeList.AsObject,
    refundDisputeList?: RefundDisputeList.AsObject,
    tradeStatistics3Store?: TradeStatistics3Store.AsObject,
    mailboxMessageList?: MailboxMessageList.AsObject,
    ignoredMailboxMap?: IgnoredMailboxMap.AsObject,
    removedPayloadsMap?: RemovedPayloadsMap.AsObject,
    xmrAddressEntryList?: XmrAddressEntryList.AsObject,
    signedOfferList?: SignedOfferList.AsObject,
  }

  export enum MessageCase { 
    MESSAGE_NOT_SET = 0,
    SEQUENCE_NUMBER_MAP = 1,
    PERSISTED_ENTRY_MAP = 2,
    PEER_LIST = 3,
    ADDRESS_ENTRY_LIST = 4,
    NAVIGATION_PATH = 5,
    TRADABLE_LIST = 6,
    ARBITRATION_DISPUTE_LIST = 8,
    PREFERENCES_PAYLOAD = 9,
    USER_PAYLOAD = 10,
    PAYMENT_ACCOUNT_LIST = 11,
    ACCOUNT_AGE_WITNESS_STORE = 12,
    TRADE_STATISTICS2_STORE = 13,
    SIGNED_WITNESS_STORE = 15,
    MEDIATION_DISPUTE_LIST = 16,
    REFUND_DISPUTE_LIST = 17,
    TRADE_STATISTICS3_STORE = 18,
    MAILBOX_MESSAGE_LIST = 19,
    IGNORED_MAILBOX_MAP = 20,
    REMOVED_PAYLOADS_MAP = 21,
    XMR_ADDRESS_ENTRY_LIST = 1001,
    SIGNED_OFFER_LIST = 1002,
  }
}

export class SequenceNumberMap extends jspb.Message {
  getSequenceNumberEntriesList(): Array<SequenceNumberEntry>;
  setSequenceNumberEntriesList(value: Array<SequenceNumberEntry>): SequenceNumberMap;
  clearSequenceNumberEntriesList(): SequenceNumberMap;
  addSequenceNumberEntries(value?: SequenceNumberEntry, index?: number): SequenceNumberEntry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SequenceNumberMap.AsObject;
  static toObject(includeInstance: boolean, msg: SequenceNumberMap): SequenceNumberMap.AsObject;
  static serializeBinaryToWriter(message: SequenceNumberMap, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SequenceNumberMap;
  static deserializeBinaryFromReader(message: SequenceNumberMap, reader: jspb.BinaryReader): SequenceNumberMap;
}

export namespace SequenceNumberMap {
  export type AsObject = {
    sequenceNumberEntriesList: Array<SequenceNumberEntry.AsObject>,
  }
}

export class SequenceNumberEntry extends jspb.Message {
  getBytes(): ByteArray | undefined;
  setBytes(value?: ByteArray): SequenceNumberEntry;
  hasBytes(): boolean;
  clearBytes(): SequenceNumberEntry;

  getMapValue(): MapValue | undefined;
  setMapValue(value?: MapValue): SequenceNumberEntry;
  hasMapValue(): boolean;
  clearMapValue(): SequenceNumberEntry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SequenceNumberEntry.AsObject;
  static toObject(includeInstance: boolean, msg: SequenceNumberEntry): SequenceNumberEntry.AsObject;
  static serializeBinaryToWriter(message: SequenceNumberEntry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SequenceNumberEntry;
  static deserializeBinaryFromReader(message: SequenceNumberEntry, reader: jspb.BinaryReader): SequenceNumberEntry;
}

export namespace SequenceNumberEntry {
  export type AsObject = {
    bytes?: ByteArray.AsObject,
    mapValue?: MapValue.AsObject,
  }
}

export class ByteArray extends jspb.Message {
  getBytes(): Uint8Array | string;
  getBytes_asU8(): Uint8Array;
  getBytes_asB64(): string;
  setBytes(value: Uint8Array | string): ByteArray;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ByteArray.AsObject;
  static toObject(includeInstance: boolean, msg: ByteArray): ByteArray.AsObject;
  static serializeBinaryToWriter(message: ByteArray, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ByteArray;
  static deserializeBinaryFromReader(message: ByteArray, reader: jspb.BinaryReader): ByteArray;
}

export namespace ByteArray {
  export type AsObject = {
    bytes: Uint8Array | string,
  }
}

export class MapValue extends jspb.Message {
  getSequenceNr(): number;
  setSequenceNr(value: number): MapValue;

  getTimeStamp(): number;
  setTimeStamp(value: number): MapValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MapValue.AsObject;
  static toObject(includeInstance: boolean, msg: MapValue): MapValue.AsObject;
  static serializeBinaryToWriter(message: MapValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MapValue;
  static deserializeBinaryFromReader(message: MapValue, reader: jspb.BinaryReader): MapValue;
}

export namespace MapValue {
  export type AsObject = {
    sequenceNr: number,
    timeStamp: number,
  }
}

export class PersistedEntryMap extends jspb.Message {
  getPersistedEntryMapMap(): jspb.Map<string, ProtectedStorageEntry>;
  clearPersistedEntryMapMap(): PersistedEntryMap;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PersistedEntryMap.AsObject;
  static toObject(includeInstance: boolean, msg: PersistedEntryMap): PersistedEntryMap.AsObject;
  static serializeBinaryToWriter(message: PersistedEntryMap, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PersistedEntryMap;
  static deserializeBinaryFromReader(message: PersistedEntryMap, reader: jspb.BinaryReader): PersistedEntryMap;
}

export namespace PersistedEntryMap {
  export type AsObject = {
    persistedEntryMapMap: Array<[string, ProtectedStorageEntry.AsObject]>,
  }
}

export class AccountAgeWitnessStore extends jspb.Message {
  getItemsList(): Array<AccountAgeWitness>;
  setItemsList(value: Array<AccountAgeWitness>): AccountAgeWitnessStore;
  clearItemsList(): AccountAgeWitnessStore;
  addItems(value?: AccountAgeWitness, index?: number): AccountAgeWitness;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountAgeWitnessStore.AsObject;
  static toObject(includeInstance: boolean, msg: AccountAgeWitnessStore): AccountAgeWitnessStore.AsObject;
  static serializeBinaryToWriter(message: AccountAgeWitnessStore, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountAgeWitnessStore;
  static deserializeBinaryFromReader(message: AccountAgeWitnessStore, reader: jspb.BinaryReader): AccountAgeWitnessStore;
}

export namespace AccountAgeWitnessStore {
  export type AsObject = {
    itemsList: Array<AccountAgeWitness.AsObject>,
  }
}

export class SignedWitnessStore extends jspb.Message {
  getItemsList(): Array<SignedWitness>;
  setItemsList(value: Array<SignedWitness>): SignedWitnessStore;
  clearItemsList(): SignedWitnessStore;
  addItems(value?: SignedWitness, index?: number): SignedWitness;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignedWitnessStore.AsObject;
  static toObject(includeInstance: boolean, msg: SignedWitnessStore): SignedWitnessStore.AsObject;
  static serializeBinaryToWriter(message: SignedWitnessStore, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignedWitnessStore;
  static deserializeBinaryFromReader(message: SignedWitnessStore, reader: jspb.BinaryReader): SignedWitnessStore;
}

export namespace SignedWitnessStore {
  export type AsObject = {
    itemsList: Array<SignedWitness.AsObject>,
  }
}

export class TradeStatistics2Store extends jspb.Message {
  getItemsList(): Array<TradeStatistics2>;
  setItemsList(value: Array<TradeStatistics2>): TradeStatistics2Store;
  clearItemsList(): TradeStatistics2Store;
  addItems(value?: TradeStatistics2, index?: number): TradeStatistics2;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TradeStatistics2Store.AsObject;
  static toObject(includeInstance: boolean, msg: TradeStatistics2Store): TradeStatistics2Store.AsObject;
  static serializeBinaryToWriter(message: TradeStatistics2Store, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TradeStatistics2Store;
  static deserializeBinaryFromReader(message: TradeStatistics2Store, reader: jspb.BinaryReader): TradeStatistics2Store;
}

export namespace TradeStatistics2Store {
  export type AsObject = {
    itemsList: Array<TradeStatistics2.AsObject>,
  }
}

export class TradeStatistics3Store extends jspb.Message {
  getItemsList(): Array<TradeStatistics3>;
  setItemsList(value: Array<TradeStatistics3>): TradeStatistics3Store;
  clearItemsList(): TradeStatistics3Store;
  addItems(value?: TradeStatistics3, index?: number): TradeStatistics3;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TradeStatistics3Store.AsObject;
  static toObject(includeInstance: boolean, msg: TradeStatistics3Store): TradeStatistics3Store.AsObject;
  static serializeBinaryToWriter(message: TradeStatistics3Store, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TradeStatistics3Store;
  static deserializeBinaryFromReader(message: TradeStatistics3Store, reader: jspb.BinaryReader): TradeStatistics3Store;
}

export namespace TradeStatistics3Store {
  export type AsObject = {
    itemsList: Array<TradeStatistics3.AsObject>,
  }
}

export class PeerList extends jspb.Message {
  getPeerList(): Array<Peer>;
  setPeerList(value: Array<Peer>): PeerList;
  clearPeerList(): PeerList;
  addPeer(value?: Peer, index?: number): Peer;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PeerList.AsObject;
  static toObject(includeInstance: boolean, msg: PeerList): PeerList.AsObject;
  static serializeBinaryToWriter(message: PeerList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PeerList;
  static deserializeBinaryFromReader(message: PeerList, reader: jspb.BinaryReader): PeerList;
}

export namespace PeerList {
  export type AsObject = {
    peerList: Array<Peer.AsObject>,
  }
}

export class AddressEntryList extends jspb.Message {
  getAddressEntryList(): Array<AddressEntry>;
  setAddressEntryList(value: Array<AddressEntry>): AddressEntryList;
  clearAddressEntryList(): AddressEntryList;
  addAddressEntry(value?: AddressEntry, index?: number): AddressEntry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddressEntryList.AsObject;
  static toObject(includeInstance: boolean, msg: AddressEntryList): AddressEntryList.AsObject;
  static serializeBinaryToWriter(message: AddressEntryList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddressEntryList;
  static deserializeBinaryFromReader(message: AddressEntryList, reader: jspb.BinaryReader): AddressEntryList;
}

export namespace AddressEntryList {
  export type AsObject = {
    addressEntryList: Array<AddressEntry.AsObject>,
  }
}

export class AddressEntry extends jspb.Message {
  getOfferId(): string;
  setOfferId(value: string): AddressEntry;

  getContext(): AddressEntry.Context;
  setContext(value: AddressEntry.Context): AddressEntry;

  getPubKey(): Uint8Array | string;
  getPubKey_asU8(): Uint8Array;
  getPubKey_asB64(): string;
  setPubKey(value: Uint8Array | string): AddressEntry;

  getPubKeyHash(): Uint8Array | string;
  getPubKeyHash_asU8(): Uint8Array;
  getPubKeyHash_asB64(): string;
  setPubKeyHash(value: Uint8Array | string): AddressEntry;

  getCoinLockedInMultiSig(): number;
  setCoinLockedInMultiSig(value: number): AddressEntry;

  getSegwit(): boolean;
  setSegwit(value: boolean): AddressEntry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddressEntry.AsObject;
  static toObject(includeInstance: boolean, msg: AddressEntry): AddressEntry.AsObject;
  static serializeBinaryToWriter(message: AddressEntry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddressEntry;
  static deserializeBinaryFromReader(message: AddressEntry, reader: jspb.BinaryReader): AddressEntry;
}

export namespace AddressEntry {
  export type AsObject = {
    offerId: string,
    context: AddressEntry.Context,
    pubKey: Uint8Array | string,
    pubKeyHash: Uint8Array | string,
    coinLockedInMultiSig: number,
    segwit: boolean,
  }

  export enum Context { 
    PB_ERROR = 0,
    ARBITRATOR = 1,
    AVAILABLE = 2,
    OFFER_FUNDING = 3,
    RESERVED_FOR_TRADE = 4,
    MULTI_SIG = 5,
    TRADE_PAYOUT = 6,
  }
}

export class XmrAddressEntryList extends jspb.Message {
  getXmrAddressEntryList(): Array<XmrAddressEntry>;
  setXmrAddressEntryList(value: Array<XmrAddressEntry>): XmrAddressEntryList;
  clearXmrAddressEntryList(): XmrAddressEntryList;
  addXmrAddressEntry(value?: XmrAddressEntry, index?: number): XmrAddressEntry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): XmrAddressEntryList.AsObject;
  static toObject(includeInstance: boolean, msg: XmrAddressEntryList): XmrAddressEntryList.AsObject;
  static serializeBinaryToWriter(message: XmrAddressEntryList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): XmrAddressEntryList;
  static deserializeBinaryFromReader(message: XmrAddressEntryList, reader: jspb.BinaryReader): XmrAddressEntryList;
}

export namespace XmrAddressEntryList {
  export type AsObject = {
    xmrAddressEntryList: Array<XmrAddressEntry.AsObject>,
  }
}

export class XmrAddressEntry extends jspb.Message {
  getSubaddressIndex(): number;
  setSubaddressIndex(value: number): XmrAddressEntry;

  getAddressString(): string;
  setAddressString(value: string): XmrAddressEntry;

  getOfferId(): string;
  setOfferId(value: string): XmrAddressEntry;

  getContext(): XmrAddressEntry.Context;
  setContext(value: XmrAddressEntry.Context): XmrAddressEntry;

  getCoinLockedInMultiSig(): number;
  setCoinLockedInMultiSig(value: number): XmrAddressEntry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): XmrAddressEntry.AsObject;
  static toObject(includeInstance: boolean, msg: XmrAddressEntry): XmrAddressEntry.AsObject;
  static serializeBinaryToWriter(message: XmrAddressEntry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): XmrAddressEntry;
  static deserializeBinaryFromReader(message: XmrAddressEntry, reader: jspb.BinaryReader): XmrAddressEntry;
}

export namespace XmrAddressEntry {
  export type AsObject = {
    subaddressIndex: number,
    addressString: string,
    offerId: string,
    context: XmrAddressEntry.Context,
    coinLockedInMultiSig: number,
  }

  export enum Context { 
    PB_ERROR = 0,
    ARBITRATOR = 1,
    AVAILABLE = 2,
    OFFER_FUNDING = 3,
    RESERVED_FOR_TRADE = 4,
    MULTI_SIG = 5,
    TRADE_PAYOUT = 6,
  }
}

export class NavigationPath extends jspb.Message {
  getPathList(): Array<string>;
  setPathList(value: Array<string>): NavigationPath;
  clearPathList(): NavigationPath;
  addPath(value: string, index?: number): NavigationPath;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NavigationPath.AsObject;
  static toObject(includeInstance: boolean, msg: NavigationPath): NavigationPath.AsObject;
  static serializeBinaryToWriter(message: NavigationPath, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NavigationPath;
  static deserializeBinaryFromReader(message: NavigationPath, reader: jspb.BinaryReader): NavigationPath;
}

export namespace NavigationPath {
  export type AsObject = {
    pathList: Array<string>,
  }
}

export class PaymentAccountList extends jspb.Message {
  getPaymentAccountList(): Array<PaymentAccount>;
  setPaymentAccountList(value: Array<PaymentAccount>): PaymentAccountList;
  clearPaymentAccountList(): PaymentAccountList;
  addPaymentAccount(value?: PaymentAccount, index?: number): PaymentAccount;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaymentAccountList.AsObject;
  static toObject(includeInstance: boolean, msg: PaymentAccountList): PaymentAccountList.AsObject;
  static serializeBinaryToWriter(message: PaymentAccountList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaymentAccountList;
  static deserializeBinaryFromReader(message: PaymentAccountList, reader: jspb.BinaryReader): PaymentAccountList;
}

export namespace PaymentAccountList {
  export type AsObject = {
    paymentAccountList: Array<PaymentAccount.AsObject>,
  }
}

export class TradableList extends jspb.Message {
  getTradableList(): Array<Tradable>;
  setTradableList(value: Array<Tradable>): TradableList;
  clearTradableList(): TradableList;
  addTradable(value?: Tradable, index?: number): Tradable;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TradableList.AsObject;
  static toObject(includeInstance: boolean, msg: TradableList): TradableList.AsObject;
  static serializeBinaryToWriter(message: TradableList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TradableList;
  static deserializeBinaryFromReader(message: TradableList, reader: jspb.BinaryReader): TradableList;
}

export namespace TradableList {
  export type AsObject = {
    tradableList: Array<Tradable.AsObject>,
  }
}

export class Offer extends jspb.Message {
  getOfferPayload(): OfferPayload | undefined;
  setOfferPayload(value?: OfferPayload): Offer;
  hasOfferPayload(): boolean;
  clearOfferPayload(): Offer;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Offer.AsObject;
  static toObject(includeInstance: boolean, msg: Offer): Offer.AsObject;
  static serializeBinaryToWriter(message: Offer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Offer;
  static deserializeBinaryFromReader(message: Offer, reader: jspb.BinaryReader): Offer;
}

export namespace Offer {
  export type AsObject = {
    offerPayload?: OfferPayload.AsObject,
  }

  export enum State { 
    PB_ERROR = 0,
    UNKNOWN = 1,
    OFFER_FEE_PAID = 2,
    AVAILABLE = 3,
    NOT_AVAILABLE = 4,
    REMOVED = 5,
    MAKER_OFFLINE = 6,
  }
}

export class SignedOfferList extends jspb.Message {
  getSignedOfferList(): Array<SignedOffer>;
  setSignedOfferList(value: Array<SignedOffer>): SignedOfferList;
  clearSignedOfferList(): SignedOfferList;
  addSignedOffer(value?: SignedOffer, index?: number): SignedOffer;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignedOfferList.AsObject;
  static toObject(includeInstance: boolean, msg: SignedOfferList): SignedOfferList.AsObject;
  static serializeBinaryToWriter(message: SignedOfferList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignedOfferList;
  static deserializeBinaryFromReader(message: SignedOfferList, reader: jspb.BinaryReader): SignedOfferList;
}

export namespace SignedOfferList {
  export type AsObject = {
    signedOfferList: Array<SignedOffer.AsObject>,
  }
}

export class SignedOffer extends jspb.Message {
  getOfferId(): string;
  setOfferId(value: string): SignedOffer;

  getReserveTxHash(): string;
  setReserveTxHash(value: string): SignedOffer;

  getReserveTxHex(): string;
  setReserveTxHex(value: string): SignedOffer;

  getArbitratorSignature(): string;
  setArbitratorSignature(value: string): SignedOffer;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignedOffer.AsObject;
  static toObject(includeInstance: boolean, msg: SignedOffer): SignedOffer.AsObject;
  static serializeBinaryToWriter(message: SignedOffer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignedOffer;
  static deserializeBinaryFromReader(message: SignedOffer, reader: jspb.BinaryReader): SignedOffer;
}

export namespace SignedOffer {
  export type AsObject = {
    offerId: string,
    reserveTxHash: string,
    reserveTxHex: string,
    arbitratorSignature: string,
  }
}

export class OpenOffer extends jspb.Message {
  getOffer(): Offer | undefined;
  setOffer(value?: Offer): OpenOffer;
  hasOffer(): boolean;
  clearOffer(): OpenOffer;

  getState(): OpenOffer.State;
  setState(value: OpenOffer.State): OpenOffer;

  getArbitratorNodeAddress(): NodeAddress | undefined;
  setArbitratorNodeAddress(value?: NodeAddress): OpenOffer;
  hasArbitratorNodeAddress(): boolean;
  clearArbitratorNodeAddress(): OpenOffer;

  getTriggerPrice(): number;
  setTriggerPrice(value: number): OpenOffer;

  getFrozenKeyImagesList(): Array<string>;
  setFrozenKeyImagesList(value: Array<string>): OpenOffer;
  clearFrozenKeyImagesList(): OpenOffer;
  addFrozenKeyImages(value: string, index?: number): OpenOffer;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OpenOffer.AsObject;
  static toObject(includeInstance: boolean, msg: OpenOffer): OpenOffer.AsObject;
  static serializeBinaryToWriter(message: OpenOffer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OpenOffer;
  static deserializeBinaryFromReader(message: OpenOffer, reader: jspb.BinaryReader): OpenOffer;
}

export namespace OpenOffer {
  export type AsObject = {
    offer?: Offer.AsObject,
    state: OpenOffer.State,
    arbitratorNodeAddress?: NodeAddress.AsObject,
    triggerPrice: number,
    frozenKeyImagesList: Array<string>,
  }

  export enum State { 
    PB_ERROR = 0,
    AVAILABLE = 1,
    RESERVED = 2,
    CLOSED = 3,
    CANCELED = 4,
    DEACTIVATED = 5,
  }
}

export class Tradable extends jspb.Message {
  getOpenOffer(): OpenOffer | undefined;
  setOpenOffer(value?: OpenOffer): Tradable;
  hasOpenOffer(): boolean;
  clearOpenOffer(): Tradable;

  getBuyerAsMakerTrade(): BuyerAsMakerTrade | undefined;
  setBuyerAsMakerTrade(value?: BuyerAsMakerTrade): Tradable;
  hasBuyerAsMakerTrade(): boolean;
  clearBuyerAsMakerTrade(): Tradable;

  getBuyerAsTakerTrade(): BuyerAsTakerTrade | undefined;
  setBuyerAsTakerTrade(value?: BuyerAsTakerTrade): Tradable;
  hasBuyerAsTakerTrade(): boolean;
  clearBuyerAsTakerTrade(): Tradable;

  getSellerAsMakerTrade(): SellerAsMakerTrade | undefined;
  setSellerAsMakerTrade(value?: SellerAsMakerTrade): Tradable;
  hasSellerAsMakerTrade(): boolean;
  clearSellerAsMakerTrade(): Tradable;

  getSellerAsTakerTrade(): SellerAsTakerTrade | undefined;
  setSellerAsTakerTrade(value?: SellerAsTakerTrade): Tradable;
  hasSellerAsTakerTrade(): boolean;
  clearSellerAsTakerTrade(): Tradable;

  getArbitratorTrade(): ArbitratorTrade | undefined;
  setArbitratorTrade(value?: ArbitratorTrade): Tradable;
  hasArbitratorTrade(): boolean;
  clearArbitratorTrade(): Tradable;

  getSignedOffer(): SignedOffer | undefined;
  setSignedOffer(value?: SignedOffer): Tradable;
  hasSignedOffer(): boolean;
  clearSignedOffer(): Tradable;

  getMessageCase(): Tradable.MessageCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Tradable.AsObject;
  static toObject(includeInstance: boolean, msg: Tradable): Tradable.AsObject;
  static serializeBinaryToWriter(message: Tradable, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Tradable;
  static deserializeBinaryFromReader(message: Tradable, reader: jspb.BinaryReader): Tradable;
}

export namespace Tradable {
  export type AsObject = {
    openOffer?: OpenOffer.AsObject,
    buyerAsMakerTrade?: BuyerAsMakerTrade.AsObject,
    buyerAsTakerTrade?: BuyerAsTakerTrade.AsObject,
    sellerAsMakerTrade?: SellerAsMakerTrade.AsObject,
    sellerAsTakerTrade?: SellerAsTakerTrade.AsObject,
    arbitratorTrade?: ArbitratorTrade.AsObject,
    signedOffer?: SignedOffer.AsObject,
  }

  export enum MessageCase { 
    MESSAGE_NOT_SET = 0,
    OPEN_OFFER = 1,
    BUYER_AS_MAKER_TRADE = 2,
    BUYER_AS_TAKER_TRADE = 3,
    SELLER_AS_MAKER_TRADE = 4,
    SELLER_AS_TAKER_TRADE = 5,
    ARBITRATOR_TRADE = 6,
    SIGNED_OFFER = 1001,
  }
}

export class Trade extends jspb.Message {
  getOffer(): Offer | undefined;
  setOffer(value?: Offer): Trade;
  hasOffer(): boolean;
  clearOffer(): Trade;

  getProcessModel(): ProcessModel | undefined;
  setProcessModel(value?: ProcessModel): Trade;
  hasProcessModel(): boolean;
  clearProcessModel(): Trade;

  getTakerFeeTxId(): string;
  setTakerFeeTxId(value: string): Trade;

  getPayoutTxId(): string;
  setPayoutTxId(value: string): Trade;

  getTradeAmountAsLong(): number;
  setTradeAmountAsLong(value: number): Trade;

  getTxFeeAsLong(): number;
  setTxFeeAsLong(value: number): Trade;

  getTakerFeeAsLong(): number;
  setTakerFeeAsLong(value: number): Trade;

  getTakeOfferDate(): number;
  setTakeOfferDate(value: number): Trade;

  getTradePrice(): number;
  setTradePrice(value: number): Trade;

  getState(): Trade.State;
  setState(value: Trade.State): Trade;

  getDisputeState(): Trade.DisputeState;
  setDisputeState(value: Trade.DisputeState): Trade;

  getTradePeriodState(): Trade.TradePeriodState;
  setTradePeriodState(value: Trade.TradePeriodState): Trade;

  getContract(): Contract | undefined;
  setContract(value?: Contract): Trade;
  hasContract(): boolean;
  clearContract(): Trade;

  getContractAsJson(): string;
  setContractAsJson(value: string): Trade;

  getContractHash(): Uint8Array | string;
  getContractHash_asU8(): Uint8Array;
  getContractHash_asB64(): string;
  setContractHash(value: Uint8Array | string): Trade;

  getArbitratorNodeAddress(): NodeAddress | undefined;
  setArbitratorNodeAddress(value?: NodeAddress): Trade;
  hasArbitratorNodeAddress(): boolean;
  clearArbitratorNodeAddress(): Trade;

  getMediatorNodeAddress(): NodeAddress | undefined;
  setMediatorNodeAddress(value?: NodeAddress): Trade;
  hasMediatorNodeAddress(): boolean;
  clearMediatorNodeAddress(): Trade;

  getArbitratorBtcPubKey(): Uint8Array | string;
  getArbitratorBtcPubKey_asU8(): Uint8Array;
  getArbitratorBtcPubKey_asB64(): string;
  setArbitratorBtcPubKey(value: Uint8Array | string): Trade;

  getTakerPaymentAccountId(): string;
  setTakerPaymentAccountId(value: string): Trade;

  getErrorMessage(): string;
  setErrorMessage(value: string): Trade;

  getArbitratorPubKeyRing(): PubKeyRing | undefined;
  setArbitratorPubKeyRing(value?: PubKeyRing): Trade;
  hasArbitratorPubKeyRing(): boolean;
  clearArbitratorPubKeyRing(): Trade;

  getMediatorPubKeyRing(): PubKeyRing | undefined;
  setMediatorPubKeyRing(value?: PubKeyRing): Trade;
  hasMediatorPubKeyRing(): boolean;
  clearMediatorPubKeyRing(): Trade;

  getCounterCurrencyTxId(): string;
  setCounterCurrencyTxId(value: string): Trade;

  getChatMessageList(): Array<ChatMessage>;
  setChatMessageList(value: Array<ChatMessage>): Trade;
  clearChatMessageList(): Trade;
  addChatMessage(value?: ChatMessage, index?: number): ChatMessage;

  getMediationResultState(): MediationResultState;
  setMediationResultState(value: MediationResultState): Trade;

  getLockTime(): number;
  setLockTime(value: number): Trade;

  getDelayedPayoutTxBytes(): Uint8Array | string;
  getDelayedPayoutTxBytes_asU8(): Uint8Array;
  getDelayedPayoutTxBytes_asB64(): string;
  setDelayedPayoutTxBytes(value: Uint8Array | string): Trade;

  getRefundAgentNodeAddress(): NodeAddress | undefined;
  setRefundAgentNodeAddress(value?: NodeAddress): Trade;
  hasRefundAgentNodeAddress(): boolean;
  clearRefundAgentNodeAddress(): Trade;

  getRefundAgentPubKeyRing(): PubKeyRing | undefined;
  setRefundAgentPubKeyRing(value?: PubKeyRing): Trade;
  hasRefundAgentPubKeyRing(): boolean;
  clearRefundAgentPubKeyRing(): Trade;

  getRefundResultState(): RefundResultState;
  setRefundResultState(value: RefundResultState): Trade;

  getLastRefreshRequestDate(): number;
  setLastRefreshRequestDate(value: number): Trade;

  getCounterCurrencyExtraData(): string;
  setCounterCurrencyExtraData(value: string): Trade;

  getAssetTxProofResult(): string;
  setAssetTxProofResult(value: string): Trade;

  getUid(): string;
  setUid(value: string): Trade;

  getMakerNodeAddress(): NodeAddress | undefined;
  setMakerNodeAddress(value?: NodeAddress): Trade;
  hasMakerNodeAddress(): boolean;
  clearMakerNodeAddress(): Trade;

  getTakerNodeAddress(): NodeAddress | undefined;
  setTakerNodeAddress(value?: NodeAddress): Trade;
  hasTakerNodeAddress(): boolean;
  clearTakerNodeAddress(): Trade;

  getTakerPubKeyRing(): PubKeyRing | undefined;
  setTakerPubKeyRing(value?: PubKeyRing): Trade;
  hasTakerPubKeyRing(): boolean;
  clearTakerPubKeyRing(): Trade;

  getMakerPubKeyRing(): PubKeyRing | undefined;
  setMakerPubKeyRing(value?: PubKeyRing): Trade;
  hasMakerPubKeyRing(): boolean;
  clearMakerPubKeyRing(): Trade;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Trade.AsObject;
  static toObject(includeInstance: boolean, msg: Trade): Trade.AsObject;
  static serializeBinaryToWriter(message: Trade, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Trade;
  static deserializeBinaryFromReader(message: Trade, reader: jspb.BinaryReader): Trade;
}

export namespace Trade {
  export type AsObject = {
    offer?: Offer.AsObject,
    processModel?: ProcessModel.AsObject,
    takerFeeTxId: string,
    payoutTxId: string,
    tradeAmountAsLong: number,
    txFeeAsLong: number,
    takerFeeAsLong: number,
    takeOfferDate: number,
    tradePrice: number,
    state: Trade.State,
    disputeState: Trade.DisputeState,
    tradePeriodState: Trade.TradePeriodState,
    contract?: Contract.AsObject,
    contractAsJson: string,
    contractHash: Uint8Array | string,
    arbitratorNodeAddress?: NodeAddress.AsObject,
    mediatorNodeAddress?: NodeAddress.AsObject,
    arbitratorBtcPubKey: Uint8Array | string,
    takerPaymentAccountId: string,
    errorMessage: string,
    arbitratorPubKeyRing?: PubKeyRing.AsObject,
    mediatorPubKeyRing?: PubKeyRing.AsObject,
    counterCurrencyTxId: string,
    chatMessageList: Array<ChatMessage.AsObject>,
    mediationResultState: MediationResultState,
    lockTime: number,
    delayedPayoutTxBytes: Uint8Array | string,
    refundAgentNodeAddress?: NodeAddress.AsObject,
    refundAgentPubKeyRing?: PubKeyRing.AsObject,
    refundResultState: RefundResultState,
    lastRefreshRequestDate: number,
    counterCurrencyExtraData: string,
    assetTxProofResult: string,
    uid: string,
    makerNodeAddress?: NodeAddress.AsObject,
    takerNodeAddress?: NodeAddress.AsObject,
    takerPubKeyRing?: PubKeyRing.AsObject,
    makerPubKeyRing?: PubKeyRing.AsObject,
  }

  export enum State { 
    PB_ERROR_STATE = 0,
    PREPARATION = 1,
    TAKER_PUBLISHED_TAKER_FEE_TX = 2,
    MAKER_SENT_PUBLISH_DEPOSIT_TX_REQUEST = 3,
    MAKER_SAW_ARRIVED_PUBLISH_DEPOSIT_TX_REQUEST = 4,
    MAKER_STORED_IN_MAILBOX_PUBLISH_DEPOSIT_TX_REQUEST = 5,
    MAKER_SEND_FAILED_PUBLISH_DEPOSIT_TX_REQUEST = 6,
    TAKER_RECEIVED_PUBLISH_DEPOSIT_TX_REQUEST = 7,
    TAKER_PUBLISHED_DEPOSIT_TX = 8,
    TAKER_SAW_DEPOSIT_TX_IN_NETWORK = 9,
    TAKER_SENT_DEPOSIT_TX_PUBLISHED_MSG = 10,
    TAKER_SAW_ARRIVED_DEPOSIT_TX_PUBLISHED_MSG = 11,
    TAKER_STORED_IN_MAILBOX_DEPOSIT_TX_PUBLISHED_MSG = 12,
    TAKER_SEND_FAILED_DEPOSIT_TX_PUBLISHED_MSG = 13,
    MAKER_RECEIVED_DEPOSIT_TX_PUBLISHED_MSG = 14,
    MAKER_SAW_DEPOSIT_TX_IN_NETWORK = 15,
    DEPOSIT_CONFIRMED_IN_BLOCK_CHAIN = 16,
    BUYER_CONFIRMED_IN_UI_FIAT_PAYMENT_INITIATED = 17,
    BUYER_SENT_FIAT_PAYMENT_INITIATED_MSG = 18,
    BUYER_SAW_ARRIVED_FIAT_PAYMENT_INITIATED_MSG = 19,
    BUYER_STORED_IN_MAILBOX_FIAT_PAYMENT_INITIATED_MSG = 20,
    BUYER_SEND_FAILED_FIAT_PAYMENT_INITIATED_MSG = 21,
    SELLER_RECEIVED_FIAT_PAYMENT_INITIATED_MSG = 22,
    SELLER_CONFIRMED_IN_UI_FIAT_PAYMENT_RECEIPT = 23,
    SELLER_PUBLISHED_PAYOUT_TX = 24,
    SELLER_SENT_PAYOUT_TX_PUBLISHED_MSG = 25,
    SELLER_SAW_ARRIVED_PAYOUT_TX_PUBLISHED_MSG = 26,
    SELLER_STORED_IN_MAILBOX_PAYOUT_TX_PUBLISHED_MSG = 27,
    SELLER_SEND_FAILED_PAYOUT_TX_PUBLISHED_MSG = 28,
    BUYER_RECEIVED_PAYOUT_TX_PUBLISHED_MSG = 29,
    BUYER_SAW_PAYOUT_TX_IN_NETWORK = 30,
    WITHDRAW_COMPLETED = 31,
  }

  export enum Phase { 
    PB_ERROR_PHASE = 0,
    INIT = 1,
    TAKER_FEE_PUBLISHED = 2,
    DEPOSIT_PUBLISHED = 3,
    DEPOSIT_CONFIRMED = 4,
    FIAT_SENT = 5,
    FIAT_RECEIVED = 6,
    PAYOUT_PUBLISHED = 7,
    WITHDRAWN = 8,
  }

  export enum DisputeState { 
    PB_ERROR_DISPUTE_STATE = 0,
    NO_DISPUTE = 1,
    DISPUTE_REQUESTED = 2,
    DISPUTE_STARTED_BY_PEER = 3,
    DISPUTE_CLOSED = 4,
    MEDIATION_REQUESTED = 5,
    MEDIATION_STARTED_BY_PEER = 6,
    MEDIATION_CLOSED = 7,
    REFUND_REQUESTED = 8,
    REFUND_REQUEST_STARTED_BY_PEER = 9,
    REFUND_REQUEST_CLOSED = 10,
  }

  export enum TradePeriodState { 
    PB_ERROR_TRADE_PERIOD_STATE = 0,
    FIRST_HALF = 1,
    SECOND_HALF = 2,
    TRADE_PERIOD_OVER = 3,
  }
}

export class BuyerAsMakerTrade extends jspb.Message {
  getTrade(): Trade | undefined;
  setTrade(value?: Trade): BuyerAsMakerTrade;
  hasTrade(): boolean;
  clearTrade(): BuyerAsMakerTrade;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BuyerAsMakerTrade.AsObject;
  static toObject(includeInstance: boolean, msg: BuyerAsMakerTrade): BuyerAsMakerTrade.AsObject;
  static serializeBinaryToWriter(message: BuyerAsMakerTrade, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BuyerAsMakerTrade;
  static deserializeBinaryFromReader(message: BuyerAsMakerTrade, reader: jspb.BinaryReader): BuyerAsMakerTrade;
}

export namespace BuyerAsMakerTrade {
  export type AsObject = {
    trade?: Trade.AsObject,
  }
}

export class BuyerAsTakerTrade extends jspb.Message {
  getTrade(): Trade | undefined;
  setTrade(value?: Trade): BuyerAsTakerTrade;
  hasTrade(): boolean;
  clearTrade(): BuyerAsTakerTrade;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BuyerAsTakerTrade.AsObject;
  static toObject(includeInstance: boolean, msg: BuyerAsTakerTrade): BuyerAsTakerTrade.AsObject;
  static serializeBinaryToWriter(message: BuyerAsTakerTrade, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BuyerAsTakerTrade;
  static deserializeBinaryFromReader(message: BuyerAsTakerTrade, reader: jspb.BinaryReader): BuyerAsTakerTrade;
}

export namespace BuyerAsTakerTrade {
  export type AsObject = {
    trade?: Trade.AsObject,
  }
}

export class SellerAsMakerTrade extends jspb.Message {
  getTrade(): Trade | undefined;
  setTrade(value?: Trade): SellerAsMakerTrade;
  hasTrade(): boolean;
  clearTrade(): SellerAsMakerTrade;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SellerAsMakerTrade.AsObject;
  static toObject(includeInstance: boolean, msg: SellerAsMakerTrade): SellerAsMakerTrade.AsObject;
  static serializeBinaryToWriter(message: SellerAsMakerTrade, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SellerAsMakerTrade;
  static deserializeBinaryFromReader(message: SellerAsMakerTrade, reader: jspb.BinaryReader): SellerAsMakerTrade;
}

export namespace SellerAsMakerTrade {
  export type AsObject = {
    trade?: Trade.AsObject,
  }
}

export class SellerAsTakerTrade extends jspb.Message {
  getTrade(): Trade | undefined;
  setTrade(value?: Trade): SellerAsTakerTrade;
  hasTrade(): boolean;
  clearTrade(): SellerAsTakerTrade;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SellerAsTakerTrade.AsObject;
  static toObject(includeInstance: boolean, msg: SellerAsTakerTrade): SellerAsTakerTrade.AsObject;
  static serializeBinaryToWriter(message: SellerAsTakerTrade, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SellerAsTakerTrade;
  static deserializeBinaryFromReader(message: SellerAsTakerTrade, reader: jspb.BinaryReader): SellerAsTakerTrade;
}

export namespace SellerAsTakerTrade {
  export type AsObject = {
    trade?: Trade.AsObject,
  }
}

export class ArbitratorTrade extends jspb.Message {
  getTrade(): Trade | undefined;
  setTrade(value?: Trade): ArbitratorTrade;
  hasTrade(): boolean;
  clearTrade(): ArbitratorTrade;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArbitratorTrade.AsObject;
  static toObject(includeInstance: boolean, msg: ArbitratorTrade): ArbitratorTrade.AsObject;
  static serializeBinaryToWriter(message: ArbitratorTrade, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArbitratorTrade;
  static deserializeBinaryFromReader(message: ArbitratorTrade, reader: jspb.BinaryReader): ArbitratorTrade;
}

export namespace ArbitratorTrade {
  export type AsObject = {
    trade?: Trade.AsObject,
  }
}

export class ProcessModel extends jspb.Message {
  getOfferId(): string;
  setOfferId(value: string): ProcessModel;

  getAccountId(): string;
  setAccountId(value: string): ProcessModel;

  getPubKeyRing(): PubKeyRing | undefined;
  setPubKeyRing(value?: PubKeyRing): ProcessModel;
  hasPubKeyRing(): boolean;
  clearPubKeyRing(): ProcessModel;

  getTakeOfferFeeTxId(): string;
  setTakeOfferFeeTxId(value: string): ProcessModel;

  getPayoutTxSignature(): Uint8Array | string;
  getPayoutTxSignature_asU8(): Uint8Array;
  getPayoutTxSignature_asB64(): string;
  setPayoutTxSignature(value: Uint8Array | string): ProcessModel;

  getRawTransactionInputsList(): Array<RawTransactionInput>;
  setRawTransactionInputsList(value: Array<RawTransactionInput>): ProcessModel;
  clearRawTransactionInputsList(): ProcessModel;
  addRawTransactionInputs(value?: RawTransactionInput, index?: number): RawTransactionInput;

  getChangeOutputValue(): number;
  setChangeOutputValue(value: number): ProcessModel;

  getChangeOutputAddress(): string;
  setChangeOutputAddress(value: string): ProcessModel;

  getUseSavingsWallet(): boolean;
  setUseSavingsWallet(value: boolean): ProcessModel;

  getFundsNeededForTradeAsLong(): number;
  setFundsNeededForTradeAsLong(value: number): ProcessModel;

  getMyMultiSigPubKey(): Uint8Array | string;
  getMyMultiSigPubKey_asU8(): Uint8Array;
  getMyMultiSigPubKey_asB64(): string;
  setMyMultiSigPubKey(value: Uint8Array | string): ProcessModel;

  getPaymentStartedMessageState(): string;
  setPaymentStartedMessageState(value: string): ProcessModel;

  getMediatedPayoutTxSignature(): Uint8Array | string;
  getMediatedPayoutTxSignature_asU8(): Uint8Array;
  getMediatedPayoutTxSignature_asB64(): string;
  setMediatedPayoutTxSignature(value: Uint8Array | string): ProcessModel;

  getBuyerPayoutAmountFromMediation(): number;
  setBuyerPayoutAmountFromMediation(value: number): ProcessModel;

  getSellerPayoutAmountFromMediation(): number;
  setSellerPayoutAmountFromMediation(value: number): ProcessModel;

  getMakerSignature(): string;
  setMakerSignature(value: string): ProcessModel;

  getArbitratorNodeAddress(): NodeAddress | undefined;
  setArbitratorNodeAddress(value?: NodeAddress): ProcessModel;
  hasArbitratorNodeAddress(): boolean;
  clearArbitratorNodeAddress(): ProcessModel;

  getMaker(): TradingPeer | undefined;
  setMaker(value?: TradingPeer): ProcessModel;
  hasMaker(): boolean;
  clearMaker(): ProcessModel;

  getTaker(): TradingPeer | undefined;
  setTaker(value?: TradingPeer): ProcessModel;
  hasTaker(): boolean;
  clearTaker(): ProcessModel;

  getArbitrator(): TradingPeer | undefined;
  setArbitrator(value?: TradingPeer): ProcessModel;
  hasArbitrator(): boolean;
  clearArbitrator(): ProcessModel;

  getTempTradingPeerNodeAddress(): NodeAddress | undefined;
  setTempTradingPeerNodeAddress(value?: NodeAddress): ProcessModel;
  hasTempTradingPeerNodeAddress(): boolean;
  clearTempTradingPeerNodeAddress(): ProcessModel;

  getReserveTxHash(): string;
  setReserveTxHash(value: string): ProcessModel;

  getFrozenKeyImagesList(): Array<string>;
  setFrozenKeyImagesList(value: Array<string>): ProcessModel;
  clearFrozenKeyImagesList(): ProcessModel;
  addFrozenKeyImages(value: string, index?: number): ProcessModel;

  getPreparedMultisigHex(): string;
  setPreparedMultisigHex(value: string): ProcessModel;

  getMadeMultisigHex(): string;
  setMadeMultisigHex(value: string): ProcessModel;

  getMultisigSetupComplete(): boolean;
  setMultisigSetupComplete(value: boolean): ProcessModel;

  getMakerReadyToFundMultisig(): boolean;
  setMakerReadyToFundMultisig(value: boolean): ProcessModel;

  getMultisigDepositInitiated(): boolean;
  setMultisigDepositInitiated(value: boolean): ProcessModel;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProcessModel.AsObject;
  static toObject(includeInstance: boolean, msg: ProcessModel): ProcessModel.AsObject;
  static serializeBinaryToWriter(message: ProcessModel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProcessModel;
  static deserializeBinaryFromReader(message: ProcessModel, reader: jspb.BinaryReader): ProcessModel;
}

export namespace ProcessModel {
  export type AsObject = {
    offerId: string,
    accountId: string,
    pubKeyRing?: PubKeyRing.AsObject,
    takeOfferFeeTxId: string,
    payoutTxSignature: Uint8Array | string,
    rawTransactionInputsList: Array<RawTransactionInput.AsObject>,
    changeOutputValue: number,
    changeOutputAddress: string,
    useSavingsWallet: boolean,
    fundsNeededForTradeAsLong: number,
    myMultiSigPubKey: Uint8Array | string,
    paymentStartedMessageState: string,
    mediatedPayoutTxSignature: Uint8Array | string,
    buyerPayoutAmountFromMediation: number,
    sellerPayoutAmountFromMediation: number,
    makerSignature: string,
    arbitratorNodeAddress?: NodeAddress.AsObject,
    maker?: TradingPeer.AsObject,
    taker?: TradingPeer.AsObject,
    arbitrator?: TradingPeer.AsObject,
    tempTradingPeerNodeAddress?: NodeAddress.AsObject,
    reserveTxHash: string,
    frozenKeyImagesList: Array<string>,
    preparedMultisigHex: string,
    madeMultisigHex: string,
    multisigSetupComplete: boolean,
    makerReadyToFundMultisig: boolean,
    multisigDepositInitiated: boolean,
  }
}

export class TradingPeer extends jspb.Message {
  getAccountId(): string;
  setAccountId(value: string): TradingPeer;

  getPaymentAccountId(): string;
  setPaymentAccountId(value: string): TradingPeer;

  getPaymentMethodId(): string;
  setPaymentMethodId(value: string): TradingPeer;

  getPaymentAccountPayloadHash(): Uint8Array | string;
  getPaymentAccountPayloadHash_asU8(): Uint8Array;
  getPaymentAccountPayloadHash_asB64(): string;
  setPaymentAccountPayloadHash(value: Uint8Array | string): TradingPeer;

  getPaymentAccountPayload(): PaymentAccountPayload | undefined;
  setPaymentAccountPayload(value?: PaymentAccountPayload): TradingPeer;
  hasPaymentAccountPayload(): boolean;
  clearPaymentAccountPayload(): TradingPeer;

  getPayoutAddressString(): string;
  setPayoutAddressString(value: string): TradingPeer;

  getContractAsJson(): string;
  setContractAsJson(value: string): TradingPeer;

  getContractSignature(): string;
  setContractSignature(value: string): TradingPeer;

  getSignature(): Uint8Array | string;
  getSignature_asU8(): Uint8Array;
  getSignature_asB64(): string;
  setSignature(value: Uint8Array | string): TradingPeer;

  getPubKeyRing(): PubKeyRing | undefined;
  setPubKeyRing(value?: PubKeyRing): TradingPeer;
  hasPubKeyRing(): boolean;
  clearPubKeyRing(): TradingPeer;

  getMultiSigPubKey(): Uint8Array | string;
  getMultiSigPubKey_asU8(): Uint8Array;
  getMultiSigPubKey_asB64(): string;
  setMultiSigPubKey(value: Uint8Array | string): TradingPeer;

  getRawTransactionInputsList(): Array<RawTransactionInput>;
  setRawTransactionInputsList(value: Array<RawTransactionInput>): TradingPeer;
  clearRawTransactionInputsList(): TradingPeer;
  addRawTransactionInputs(value?: RawTransactionInput, index?: number): RawTransactionInput;

  getChangeOutputValue(): number;
  setChangeOutputValue(value: number): TradingPeer;

  getChangeOutputAddress(): string;
  setChangeOutputAddress(value: string): TradingPeer;

  getAccountAgeWitnessNonce(): Uint8Array | string;
  getAccountAgeWitnessNonce_asU8(): Uint8Array;
  getAccountAgeWitnessNonce_asB64(): string;
  setAccountAgeWitnessNonce(value: Uint8Array | string): TradingPeer;

  getAccountAgeWitnessSignature(): Uint8Array | string;
  getAccountAgeWitnessSignature_asU8(): Uint8Array;
  getAccountAgeWitnessSignature_asB64(): string;
  setAccountAgeWitnessSignature(value: Uint8Array | string): TradingPeer;

  getCurrentDate(): number;
  setCurrentDate(value: number): TradingPeer;

  getMediatedPayoutTxSignature(): Uint8Array | string;
  getMediatedPayoutTxSignature_asU8(): Uint8Array;
  getMediatedPayoutTxSignature_asB64(): string;
  setMediatedPayoutTxSignature(value: Uint8Array | string): TradingPeer;

  getReserveTxHash(): string;
  setReserveTxHash(value: string): TradingPeer;

  getReserveTxHex(): string;
  setReserveTxHex(value: string): TradingPeer;

  getReserveTxKey(): string;
  setReserveTxKey(value: string): TradingPeer;

  getPreparedMultisigHex(): string;
  setPreparedMultisigHex(value: string): TradingPeer;

  getMadeMultisigHex(): string;
  setMadeMultisigHex(value: string): TradingPeer;

  getSignedPayoutTxHex(): string;
  setSignedPayoutTxHex(value: string): TradingPeer;

  getDepositTxHash(): string;
  setDepositTxHash(value: string): TradingPeer;

  getDepositTxHex(): string;
  setDepositTxHex(value: string): TradingPeer;

  getDepositTxKey(): string;
  setDepositTxKey(value: string): TradingPeer;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TradingPeer.AsObject;
  static toObject(includeInstance: boolean, msg: TradingPeer): TradingPeer.AsObject;
  static serializeBinaryToWriter(message: TradingPeer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TradingPeer;
  static deserializeBinaryFromReader(message: TradingPeer, reader: jspb.BinaryReader): TradingPeer;
}

export namespace TradingPeer {
  export type AsObject = {
    accountId: string,
    paymentAccountId: string,
    paymentMethodId: string,
    paymentAccountPayloadHash: Uint8Array | string,
    paymentAccountPayload?: PaymentAccountPayload.AsObject,
    payoutAddressString: string,
    contractAsJson: string,
    contractSignature: string,
    signature: Uint8Array | string,
    pubKeyRing?: PubKeyRing.AsObject,
    multiSigPubKey: Uint8Array | string,
    rawTransactionInputsList: Array<RawTransactionInput.AsObject>,
    changeOutputValue: number,
    changeOutputAddress: string,
    accountAgeWitnessNonce: Uint8Array | string,
    accountAgeWitnessSignature: Uint8Array | string,
    currentDate: number,
    mediatedPayoutTxSignature: Uint8Array | string,
    reserveTxHash: string,
    reserveTxHex: string,
    reserveTxKey: string,
    preparedMultisigHex: string,
    madeMultisigHex: string,
    signedPayoutTxHex: string,
    depositTxHash: string,
    depositTxHex: string,
    depositTxKey: string,
  }
}

export class ArbitrationDisputeList extends jspb.Message {
  getDisputeList(): Array<Dispute>;
  setDisputeList(value: Array<Dispute>): ArbitrationDisputeList;
  clearDisputeList(): ArbitrationDisputeList;
  addDispute(value?: Dispute, index?: number): Dispute;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArbitrationDisputeList.AsObject;
  static toObject(includeInstance: boolean, msg: ArbitrationDisputeList): ArbitrationDisputeList.AsObject;
  static serializeBinaryToWriter(message: ArbitrationDisputeList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArbitrationDisputeList;
  static deserializeBinaryFromReader(message: ArbitrationDisputeList, reader: jspb.BinaryReader): ArbitrationDisputeList;
}

export namespace ArbitrationDisputeList {
  export type AsObject = {
    disputeList: Array<Dispute.AsObject>,
  }
}

export class MediationDisputeList extends jspb.Message {
  getDisputeList(): Array<Dispute>;
  setDisputeList(value: Array<Dispute>): MediationDisputeList;
  clearDisputeList(): MediationDisputeList;
  addDispute(value?: Dispute, index?: number): Dispute;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MediationDisputeList.AsObject;
  static toObject(includeInstance: boolean, msg: MediationDisputeList): MediationDisputeList.AsObject;
  static serializeBinaryToWriter(message: MediationDisputeList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MediationDisputeList;
  static deserializeBinaryFromReader(message: MediationDisputeList, reader: jspb.BinaryReader): MediationDisputeList;
}

export namespace MediationDisputeList {
  export type AsObject = {
    disputeList: Array<Dispute.AsObject>,
  }
}

export class RefundDisputeList extends jspb.Message {
  getDisputeList(): Array<Dispute>;
  setDisputeList(value: Array<Dispute>): RefundDisputeList;
  clearDisputeList(): RefundDisputeList;
  addDispute(value?: Dispute, index?: number): Dispute;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RefundDisputeList.AsObject;
  static toObject(includeInstance: boolean, msg: RefundDisputeList): RefundDisputeList.AsObject;
  static serializeBinaryToWriter(message: RefundDisputeList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RefundDisputeList;
  static deserializeBinaryFromReader(message: RefundDisputeList, reader: jspb.BinaryReader): RefundDisputeList;
}

export namespace RefundDisputeList {
  export type AsObject = {
    disputeList: Array<Dispute.AsObject>,
  }
}

export class PreferencesPayload extends jspb.Message {
  getUserLanguage(): string;
  setUserLanguage(value: string): PreferencesPayload;

  getUserCountry(): Country | undefined;
  setUserCountry(value?: Country): PreferencesPayload;
  hasUserCountry(): boolean;
  clearUserCountry(): PreferencesPayload;

  getFiatCurrenciesList(): Array<TradeCurrency>;
  setFiatCurrenciesList(value: Array<TradeCurrency>): PreferencesPayload;
  clearFiatCurrenciesList(): PreferencesPayload;
  addFiatCurrencies(value?: TradeCurrency, index?: number): TradeCurrency;

  getCryptoCurrenciesList(): Array<TradeCurrency>;
  setCryptoCurrenciesList(value: Array<TradeCurrency>): PreferencesPayload;
  clearCryptoCurrenciesList(): PreferencesPayload;
  addCryptoCurrencies(value?: TradeCurrency, index?: number): TradeCurrency;

  getBlockChainExplorerMainNet(): BlockChainExplorer | undefined;
  setBlockChainExplorerMainNet(value?: BlockChainExplorer): PreferencesPayload;
  hasBlockChainExplorerMainNet(): boolean;
  clearBlockChainExplorerMainNet(): PreferencesPayload;

  getBlockChainExplorerTestNet(): BlockChainExplorer | undefined;
  setBlockChainExplorerTestNet(value?: BlockChainExplorer): PreferencesPayload;
  hasBlockChainExplorerTestNet(): boolean;
  clearBlockChainExplorerTestNet(): PreferencesPayload;

  getBackupDirectory(): string;
  setBackupDirectory(value: string): PreferencesPayload;

  getAutoSelectArbitrators(): boolean;
  setAutoSelectArbitrators(value: boolean): PreferencesPayload;

  getDontShowAgainMapMap(): jspb.Map<string, boolean>;
  clearDontShowAgainMapMap(): PreferencesPayload;

  getTacAccepted(): boolean;
  setTacAccepted(value: boolean): PreferencesPayload;

  getUseTorForBitcoinJ(): boolean;
  setUseTorForBitcoinJ(value: boolean): PreferencesPayload;

  getShowOwnOffersInOfferBook(): boolean;
  setShowOwnOffersInOfferBook(value: boolean): PreferencesPayload;

  getPreferredTradeCurrency(): TradeCurrency | undefined;
  setPreferredTradeCurrency(value?: TradeCurrency): PreferencesPayload;
  hasPreferredTradeCurrency(): boolean;
  clearPreferredTradeCurrency(): PreferencesPayload;

  getWithdrawalTxFeeInVbytes(): number;
  setWithdrawalTxFeeInVbytes(value: number): PreferencesPayload;

  getUseCustomWithdrawalTxFee(): boolean;
  setUseCustomWithdrawalTxFee(value: boolean): PreferencesPayload;

  getMaxPriceDistanceInPercent(): number;
  setMaxPriceDistanceInPercent(value: number): PreferencesPayload;

  getOfferBookChartScreenCurrencyCode(): string;
  setOfferBookChartScreenCurrencyCode(value: string): PreferencesPayload;

  getTradeChartsScreenCurrencyCode(): string;
  setTradeChartsScreenCurrencyCode(value: string): PreferencesPayload;

  getBuyScreenCurrencyCode(): string;
  setBuyScreenCurrencyCode(value: string): PreferencesPayload;

  getSellScreenCurrencyCode(): string;
  setSellScreenCurrencyCode(value: string): PreferencesPayload;

  getTradeStatisticsTickUnitIndex(): number;
  setTradeStatisticsTickUnitIndex(value: number): PreferencesPayload;

  getResyncSpvRequested(): boolean;
  setResyncSpvRequested(value: boolean): PreferencesPayload;

  getSortMarketCurrenciesNumerically(): boolean;
  setSortMarketCurrenciesNumerically(value: boolean): PreferencesPayload;

  getUsePercentageBasedPrice(): boolean;
  setUsePercentageBasedPrice(value: boolean): PreferencesPayload;

  getPeerTagMapMap(): jspb.Map<string, string>;
  clearPeerTagMapMap(): PreferencesPayload;

  getBitcoinNodes(): string;
  setBitcoinNodes(value: string): PreferencesPayload;

  getIgnoreTradersListList(): Array<string>;
  setIgnoreTradersListList(value: Array<string>): PreferencesPayload;
  clearIgnoreTradersListList(): PreferencesPayload;
  addIgnoreTradersList(value: string, index?: number): PreferencesPayload;

  getDirectoryChooserPath(): string;
  setDirectoryChooserPath(value: string): PreferencesPayload;

  getBuyerSecurityDepositAsLong(): number;
  setBuyerSecurityDepositAsLong(value: number): PreferencesPayload;

  getUseAnimations(): boolean;
  setUseAnimations(value: boolean): PreferencesPayload;

  getSelectedpaymentAccountForCreateoffer(): PaymentAccount | undefined;
  setSelectedpaymentAccountForCreateoffer(value?: PaymentAccount): PreferencesPayload;
  hasSelectedpaymentAccountForCreateoffer(): boolean;
  clearSelectedpaymentAccountForCreateoffer(): PreferencesPayload;

  getBridgeAddressesList(): Array<string>;
  setBridgeAddressesList(value: Array<string>): PreferencesPayload;
  clearBridgeAddressesList(): PreferencesPayload;
  addBridgeAddresses(value: string, index?: number): PreferencesPayload;

  getBridgeOptionOrdinal(): number;
  setBridgeOptionOrdinal(value: number): PreferencesPayload;

  getTorTransportOrdinal(): number;
  setTorTransportOrdinal(value: number): PreferencesPayload;

  getCustomBridges(): string;
  setCustomBridges(value: string): PreferencesPayload;

  getBitcoinNodesOptionOrdinal(): number;
  setBitcoinNodesOptionOrdinal(value: number): PreferencesPayload;

  getReferralId(): string;
  setReferralId(value: string): PreferencesPayload;

  getPhoneKeyAndToken(): string;
  setPhoneKeyAndToken(value: string): PreferencesPayload;

  getUseSoundForMobileNotifications(): boolean;
  setUseSoundForMobileNotifications(value: boolean): PreferencesPayload;

  getUseTradeNotifications(): boolean;
  setUseTradeNotifications(value: boolean): PreferencesPayload;

  getUseMarketNotifications(): boolean;
  setUseMarketNotifications(value: boolean): PreferencesPayload;

  getUsePriceNotifications(): boolean;
  setUsePriceNotifications(value: boolean): PreferencesPayload;

  getUseStandbyMode(): boolean;
  setUseStandbyMode(value: boolean): PreferencesPayload;

  getRpcUser(): string;
  setRpcUser(value: string): PreferencesPayload;

  getRpcPw(): string;
  setRpcPw(value: string): PreferencesPayload;

  getTakeOfferSelectedPaymentAccountId(): string;
  setTakeOfferSelectedPaymentAccountId(value: string): PreferencesPayload;

  getBuyerSecurityDepositAsPercent(): number;
  setBuyerSecurityDepositAsPercent(value: number): PreferencesPayload;

  getIgnoreDustThreshold(): number;
  setIgnoreDustThreshold(value: number): PreferencesPayload;

  getBuyerSecurityDepositAsPercentForCrypto(): number;
  setBuyerSecurityDepositAsPercentForCrypto(value: number): PreferencesPayload;

  getBlockNotifyPort(): number;
  setBlockNotifyPort(value: number): PreferencesPayload;

  getCssTheme(): number;
  setCssTheme(value: number): PreferencesPayload;

  getTacAcceptedV120(): boolean;
  setTacAcceptedV120(value: boolean): PreferencesPayload;

  getAutoConfirmSettingsList(): Array<AutoConfirmSettings>;
  setAutoConfirmSettingsList(value: Array<AutoConfirmSettings>): PreferencesPayload;
  clearAutoConfirmSettingsList(): PreferencesPayload;
  addAutoConfirmSettings(value?: AutoConfirmSettings, index?: number): AutoConfirmSettings;

  getHideNonAccountPaymentMethods(): boolean;
  setHideNonAccountPaymentMethods(value: boolean): PreferencesPayload;

  getShowOffersMatchingMyAccounts(): boolean;
  setShowOffersMatchingMyAccounts(value: boolean): PreferencesPayload;

  getDenyApiTaker(): boolean;
  setDenyApiTaker(value: boolean): PreferencesPayload;

  getNotifyOnPreRelease(): boolean;
  setNotifyOnPreRelease(value: boolean): PreferencesPayload;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PreferencesPayload.AsObject;
  static toObject(includeInstance: boolean, msg: PreferencesPayload): PreferencesPayload.AsObject;
  static serializeBinaryToWriter(message: PreferencesPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PreferencesPayload;
  static deserializeBinaryFromReader(message: PreferencesPayload, reader: jspb.BinaryReader): PreferencesPayload;
}

export namespace PreferencesPayload {
  export type AsObject = {
    userLanguage: string,
    userCountry?: Country.AsObject,
    fiatCurrenciesList: Array<TradeCurrency.AsObject>,
    cryptoCurrenciesList: Array<TradeCurrency.AsObject>,
    blockChainExplorerMainNet?: BlockChainExplorer.AsObject,
    blockChainExplorerTestNet?: BlockChainExplorer.AsObject,
    backupDirectory: string,
    autoSelectArbitrators: boolean,
    dontShowAgainMapMap: Array<[string, boolean]>,
    tacAccepted: boolean,
    useTorForBitcoinJ: boolean,
    showOwnOffersInOfferBook: boolean,
    preferredTradeCurrency?: TradeCurrency.AsObject,
    withdrawalTxFeeInVbytes: number,
    useCustomWithdrawalTxFee: boolean,
    maxPriceDistanceInPercent: number,
    offerBookChartScreenCurrencyCode: string,
    tradeChartsScreenCurrencyCode: string,
    buyScreenCurrencyCode: string,
    sellScreenCurrencyCode: string,
    tradeStatisticsTickUnitIndex: number,
    resyncSpvRequested: boolean,
    sortMarketCurrenciesNumerically: boolean,
    usePercentageBasedPrice: boolean,
    peerTagMapMap: Array<[string, string]>,
    bitcoinNodes: string,
    ignoreTradersListList: Array<string>,
    directoryChooserPath: string,
    buyerSecurityDepositAsLong: number,
    useAnimations: boolean,
    selectedpaymentAccountForCreateoffer?: PaymentAccount.AsObject,
    bridgeAddressesList: Array<string>,
    bridgeOptionOrdinal: number,
    torTransportOrdinal: number,
    customBridges: string,
    bitcoinNodesOptionOrdinal: number,
    referralId: string,
    phoneKeyAndToken: string,
    useSoundForMobileNotifications: boolean,
    useTradeNotifications: boolean,
    useMarketNotifications: boolean,
    usePriceNotifications: boolean,
    useStandbyMode: boolean,
    rpcUser: string,
    rpcPw: string,
    takeOfferSelectedPaymentAccountId: string,
    buyerSecurityDepositAsPercent: number,
    ignoreDustThreshold: number,
    buyerSecurityDepositAsPercentForCrypto: number,
    blockNotifyPort: number,
    cssTheme: number,
    tacAcceptedV120: boolean,
    autoConfirmSettingsList: Array<AutoConfirmSettings.AsObject>,
    hideNonAccountPaymentMethods: boolean,
    showOffersMatchingMyAccounts: boolean,
    denyApiTaker: boolean,
    notifyOnPreRelease: boolean,
  }
}

export class AutoConfirmSettings extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): AutoConfirmSettings;

  getRequiredConfirmations(): number;
  setRequiredConfirmations(value: number): AutoConfirmSettings;

  getTradeLimit(): number;
  setTradeLimit(value: number): AutoConfirmSettings;

  getServiceAddressesList(): Array<string>;
  setServiceAddressesList(value: Array<string>): AutoConfirmSettings;
  clearServiceAddressesList(): AutoConfirmSettings;
  addServiceAddresses(value: string, index?: number): AutoConfirmSettings;

  getCurrencyCode(): string;
  setCurrencyCode(value: string): AutoConfirmSettings;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AutoConfirmSettings.AsObject;
  static toObject(includeInstance: boolean, msg: AutoConfirmSettings): AutoConfirmSettings.AsObject;
  static serializeBinaryToWriter(message: AutoConfirmSettings, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AutoConfirmSettings;
  static deserializeBinaryFromReader(message: AutoConfirmSettings, reader: jspb.BinaryReader): AutoConfirmSettings;
}

export namespace AutoConfirmSettings {
  export type AsObject = {
    enabled: boolean,
    requiredConfirmations: number,
    tradeLimit: number,
    serviceAddressesList: Array<string>,
    currencyCode: string,
  }
}

export class UserPayload extends jspb.Message {
  getAccountId(): string;
  setAccountId(value: string): UserPayload;

  getPaymentAccountsList(): Array<PaymentAccount>;
  setPaymentAccountsList(value: Array<PaymentAccount>): UserPayload;
  clearPaymentAccountsList(): UserPayload;
  addPaymentAccounts(value?: PaymentAccount, index?: number): PaymentAccount;

  getCurrentPaymentAccount(): PaymentAccount | undefined;
  setCurrentPaymentAccount(value?: PaymentAccount): UserPayload;
  hasCurrentPaymentAccount(): boolean;
  clearCurrentPaymentAccount(): UserPayload;

  getAcceptedLanguageLocaleCodesList(): Array<string>;
  setAcceptedLanguageLocaleCodesList(value: Array<string>): UserPayload;
  clearAcceptedLanguageLocaleCodesList(): UserPayload;
  addAcceptedLanguageLocaleCodes(value: string, index?: number): UserPayload;

  getDevelopersAlert(): Alert | undefined;
  setDevelopersAlert(value?: Alert): UserPayload;
  hasDevelopersAlert(): boolean;
  clearDevelopersAlert(): UserPayload;

  getDisplayedAlert(): Alert | undefined;
  setDisplayedAlert(value?: Alert): UserPayload;
  hasDisplayedAlert(): boolean;
  clearDisplayedAlert(): UserPayload;

  getDevelopersFilter(): Filter | undefined;
  setDevelopersFilter(value?: Filter): UserPayload;
  hasDevelopersFilter(): boolean;
  clearDevelopersFilter(): UserPayload;

  getAcceptedArbitratorsList(): Array<Arbitrator>;
  setAcceptedArbitratorsList(value: Array<Arbitrator>): UserPayload;
  clearAcceptedArbitratorsList(): UserPayload;
  addAcceptedArbitrators(value?: Arbitrator, index?: number): Arbitrator;

  getAcceptedMediatorsList(): Array<Mediator>;
  setAcceptedMediatorsList(value: Array<Mediator>): UserPayload;
  clearAcceptedMediatorsList(): UserPayload;
  addAcceptedMediators(value?: Mediator, index?: number): Mediator;

  getRegisteredArbitrator(): Arbitrator | undefined;
  setRegisteredArbitrator(value?: Arbitrator): UserPayload;
  hasRegisteredArbitrator(): boolean;
  clearRegisteredArbitrator(): UserPayload;

  getRegisteredMediator(): Mediator | undefined;
  setRegisteredMediator(value?: Mediator): UserPayload;
  hasRegisteredMediator(): boolean;
  clearRegisteredMediator(): UserPayload;

  getPriceAlertFilter(): PriceAlertFilter | undefined;
  setPriceAlertFilter(value?: PriceAlertFilter): UserPayload;
  hasPriceAlertFilter(): boolean;
  clearPriceAlertFilter(): UserPayload;

  getMarketAlertFiltersList(): Array<MarketAlertFilter>;
  setMarketAlertFiltersList(value: Array<MarketAlertFilter>): UserPayload;
  clearMarketAlertFiltersList(): UserPayload;
  addMarketAlertFilters(value?: MarketAlertFilter, index?: number): MarketAlertFilter;

  getAcceptedRefundAgentsList(): Array<RefundAgent>;
  setAcceptedRefundAgentsList(value: Array<RefundAgent>): UserPayload;
  clearAcceptedRefundAgentsList(): UserPayload;
  addAcceptedRefundAgents(value?: RefundAgent, index?: number): RefundAgent;

  getRegisteredRefundAgent(): RefundAgent | undefined;
  setRegisteredRefundAgent(value?: RefundAgent): UserPayload;
  hasRegisteredRefundAgent(): boolean;
  clearRegisteredRefundAgent(): UserPayload;

  getCookieMap(): jspb.Map<string, string>;
  clearCookieMap(): UserPayload;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserPayload.AsObject;
  static toObject(includeInstance: boolean, msg: UserPayload): UserPayload.AsObject;
  static serializeBinaryToWriter(message: UserPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserPayload;
  static deserializeBinaryFromReader(message: UserPayload, reader: jspb.BinaryReader): UserPayload;
}

export namespace UserPayload {
  export type AsObject = {
    accountId: string,
    paymentAccountsList: Array<PaymentAccount.AsObject>,
    currentPaymentAccount?: PaymentAccount.AsObject,
    acceptedLanguageLocaleCodesList: Array<string>,
    developersAlert?: Alert.AsObject,
    displayedAlert?: Alert.AsObject,
    developersFilter?: Filter.AsObject,
    acceptedArbitratorsList: Array<Arbitrator.AsObject>,
    acceptedMediatorsList: Array<Mediator.AsObject>,
    registeredArbitrator?: Arbitrator.AsObject,
    registeredMediator?: Mediator.AsObject,
    priceAlertFilter?: PriceAlertFilter.AsObject,
    marketAlertFiltersList: Array<MarketAlertFilter.AsObject>,
    acceptedRefundAgentsList: Array<RefundAgent.AsObject>,
    registeredRefundAgent?: RefundAgent.AsObject,
    cookieMap: Array<[string, string]>,
  }
}

export class BlockChainExplorer extends jspb.Message {
  getName(): string;
  setName(value: string): BlockChainExplorer;

  getTxUrl(): string;
  setTxUrl(value: string): BlockChainExplorer;

  getAddressUrl(): string;
  setAddressUrl(value: string): BlockChainExplorer;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockChainExplorer.AsObject;
  static toObject(includeInstance: boolean, msg: BlockChainExplorer): BlockChainExplorer.AsObject;
  static serializeBinaryToWriter(message: BlockChainExplorer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlockChainExplorer;
  static deserializeBinaryFromReader(message: BlockChainExplorer, reader: jspb.BinaryReader): BlockChainExplorer;
}

export namespace BlockChainExplorer {
  export type AsObject = {
    name: string,
    txUrl: string,
    addressUrl: string,
  }
}

export class PaymentAccount extends jspb.Message {
  getId(): string;
  setId(value: string): PaymentAccount;

  getCreationDate(): string;
  setCreationDate(value: string): PaymentAccount;

  getPaymentMethod(): PaymentMethod | undefined;
  setPaymentMethod(value?: PaymentMethod): PaymentAccount;
  hasPaymentMethod(): boolean;
  clearPaymentMethod(): PaymentAccount;

  getAccountName(): string;
  setAccountName(value: string): PaymentAccount;

  getTradeCurrenciesList(): Array<TradeCurrency>;
  setTradeCurrenciesList(value: Array<TradeCurrency>): PaymentAccount;
  clearTradeCurrenciesList(): PaymentAccount;
  addTradeCurrencies(value?: TradeCurrency, index?: number): TradeCurrency;

  getSelectedTradeCurrency(): TradeCurrency | undefined;
  setSelectedTradeCurrency(value?: TradeCurrency): PaymentAccount;
  hasSelectedTradeCurrency(): boolean;
  clearSelectedTradeCurrency(): PaymentAccount;

  getPaymentAccountPayload(): PaymentAccountPayload | undefined;
  setPaymentAccountPayload(value?: PaymentAccountPayload): PaymentAccount;
  hasPaymentAccountPayload(): boolean;
  clearPaymentAccountPayload(): PaymentAccount;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaymentAccount.AsObject;
  static toObject(includeInstance: boolean, msg: PaymentAccount): PaymentAccount.AsObject;
  static serializeBinaryToWriter(message: PaymentAccount, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaymentAccount;
  static deserializeBinaryFromReader(message: PaymentAccount, reader: jspb.BinaryReader): PaymentAccount;
}

export namespace PaymentAccount {
  export type AsObject = {
    id: string,
    creationDate: string,
    paymentMethod?: PaymentMethod.AsObject,
    accountName: string,
    tradeCurrenciesList: Array<TradeCurrency.AsObject>,
    selectedTradeCurrency?: TradeCurrency.AsObject,
    paymentAccountPayload?: PaymentAccountPayload.AsObject,
  }
}

export class PaymentMethod extends jspb.Message {
  getId(): string;
  setId(value: string): PaymentMethod;

  getMaxTradePeriod(): string;
  setMaxTradePeriod(value: string): PaymentMethod;

  getMaxTradeLimit(): string;
  setMaxTradeLimit(value: string): PaymentMethod;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaymentMethod.AsObject;
  static toObject(includeInstance: boolean, msg: PaymentMethod): PaymentMethod.AsObject;
  static serializeBinaryToWriter(message: PaymentMethod, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaymentMethod;
  static deserializeBinaryFromReader(message: PaymentMethod, reader: jspb.BinaryReader): PaymentMethod;
}

export namespace PaymentMethod {
  export type AsObject = {
    id: string,
    maxTradePeriod: string,
    maxTradeLimit: string,
  }
}

export class Currency extends jspb.Message {
  getCurrencyCode(): string;
  setCurrencyCode(value: string): Currency;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Currency.AsObject;
  static toObject(includeInstance: boolean, msg: Currency): Currency.AsObject;
  static serializeBinaryToWriter(message: Currency, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Currency;
  static deserializeBinaryFromReader(message: Currency, reader: jspb.BinaryReader): Currency;
}

export namespace Currency {
  export type AsObject = {
    currencyCode: string,
  }
}

export class TradeCurrency extends jspb.Message {
  getCode(): string;
  setCode(value: string): TradeCurrency;

  getName(): string;
  setName(value: string): TradeCurrency;

  getCryptoCurrency(): CryptoCurrency | undefined;
  setCryptoCurrency(value?: CryptoCurrency): TradeCurrency;
  hasCryptoCurrency(): boolean;
  clearCryptoCurrency(): TradeCurrency;

  getFiatCurrency(): FiatCurrency | undefined;
  setFiatCurrency(value?: FiatCurrency): TradeCurrency;
  hasFiatCurrency(): boolean;
  clearFiatCurrency(): TradeCurrency;

  getMessageCase(): TradeCurrency.MessageCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TradeCurrency.AsObject;
  static toObject(includeInstance: boolean, msg: TradeCurrency): TradeCurrency.AsObject;
  static serializeBinaryToWriter(message: TradeCurrency, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TradeCurrency;
  static deserializeBinaryFromReader(message: TradeCurrency, reader: jspb.BinaryReader): TradeCurrency;
}

export namespace TradeCurrency {
  export type AsObject = {
    code: string,
    name: string,
    cryptoCurrency?: CryptoCurrency.AsObject,
    fiatCurrency?: FiatCurrency.AsObject,
  }

  export enum MessageCase { 
    MESSAGE_NOT_SET = 0,
    CRYPTO_CURRENCY = 3,
    FIAT_CURRENCY = 4,
  }
}

export class CryptoCurrency extends jspb.Message {
  getIsAsset(): boolean;
  setIsAsset(value: boolean): CryptoCurrency;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CryptoCurrency.AsObject;
  static toObject(includeInstance: boolean, msg: CryptoCurrency): CryptoCurrency.AsObject;
  static serializeBinaryToWriter(message: CryptoCurrency, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CryptoCurrency;
  static deserializeBinaryFromReader(message: CryptoCurrency, reader: jspb.BinaryReader): CryptoCurrency;
}

export namespace CryptoCurrency {
  export type AsObject = {
    isAsset: boolean,
  }
}

export class FiatCurrency extends jspb.Message {
  getCurrency(): Currency | undefined;
  setCurrency(value?: Currency): FiatCurrency;
  hasCurrency(): boolean;
  clearCurrency(): FiatCurrency;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FiatCurrency.AsObject;
  static toObject(includeInstance: boolean, msg: FiatCurrency): FiatCurrency.AsObject;
  static serializeBinaryToWriter(message: FiatCurrency, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FiatCurrency;
  static deserializeBinaryFromReader(message: FiatCurrency, reader: jspb.BinaryReader): FiatCurrency;
}

export namespace FiatCurrency {
  export type AsObject = {
    currency?: Currency.AsObject,
  }
}

export class Country extends jspb.Message {
  getCode(): string;
  setCode(value: string): Country;

  getName(): string;
  setName(value: string): Country;

  getRegion(): Region | undefined;
  setRegion(value?: Region): Country;
  hasRegion(): boolean;
  clearRegion(): Country;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Country.AsObject;
  static toObject(includeInstance: boolean, msg: Country): Country.AsObject;
  static serializeBinaryToWriter(message: Country, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Country;
  static deserializeBinaryFromReader(message: Country, reader: jspb.BinaryReader): Country;
}

export namespace Country {
  export type AsObject = {
    code: string,
    name: string,
    region?: Region.AsObject,
  }
}

export class Region extends jspb.Message {
  getCode(): string;
  setCode(value: string): Region;

  getName(): string;
  setName(value: string): Region;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Region.AsObject;
  static toObject(includeInstance: boolean, msg: Region): Region.AsObject;
  static serializeBinaryToWriter(message: Region, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Region;
  static deserializeBinaryFromReader(message: Region, reader: jspb.BinaryReader): Region;
}

export namespace Region {
  export type AsObject = {
    code: string,
    name: string,
  }
}

export class PriceAlertFilter extends jspb.Message {
  getCurrencycode(): string;
  setCurrencycode(value: string): PriceAlertFilter;

  getHigh(): number;
  setHigh(value: number): PriceAlertFilter;

  getLow(): number;
  setLow(value: number): PriceAlertFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PriceAlertFilter.AsObject;
  static toObject(includeInstance: boolean, msg: PriceAlertFilter): PriceAlertFilter.AsObject;
  static serializeBinaryToWriter(message: PriceAlertFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PriceAlertFilter;
  static deserializeBinaryFromReader(message: PriceAlertFilter, reader: jspb.BinaryReader): PriceAlertFilter;
}

export namespace PriceAlertFilter {
  export type AsObject = {
    currencycode: string,
    high: number,
    low: number,
  }
}

export class MarketAlertFilter extends jspb.Message {
  getPaymentAccount(): PaymentAccount | undefined;
  setPaymentAccount(value?: PaymentAccount): MarketAlertFilter;
  hasPaymentAccount(): boolean;
  clearPaymentAccount(): MarketAlertFilter;

  getTriggerValue(): number;
  setTriggerValue(value: number): MarketAlertFilter;

  getIsBuyOffer(): boolean;
  setIsBuyOffer(value: boolean): MarketAlertFilter;

  getAlertIdsList(): Array<string>;
  setAlertIdsList(value: Array<string>): MarketAlertFilter;
  clearAlertIdsList(): MarketAlertFilter;
  addAlertIds(value: string, index?: number): MarketAlertFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarketAlertFilter.AsObject;
  static toObject(includeInstance: boolean, msg: MarketAlertFilter): MarketAlertFilter.AsObject;
  static serializeBinaryToWriter(message: MarketAlertFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarketAlertFilter;
  static deserializeBinaryFromReader(message: MarketAlertFilter, reader: jspb.BinaryReader): MarketAlertFilter;
}

export namespace MarketAlertFilter {
  export type AsObject = {
    paymentAccount?: PaymentAccount.AsObject,
    triggerValue: number,
    isBuyOffer: boolean,
    alertIdsList: Array<string>,
  }
}

export class MockMailboxPayload extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): MockMailboxPayload;

  getSenderNodeAddress(): NodeAddress | undefined;
  setSenderNodeAddress(value?: NodeAddress): MockMailboxPayload;
  hasSenderNodeAddress(): boolean;
  clearSenderNodeAddress(): MockMailboxPayload;

  getUid(): string;
  setUid(value: string): MockMailboxPayload;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MockMailboxPayload.AsObject;
  static toObject(includeInstance: boolean, msg: MockMailboxPayload): MockMailboxPayload.AsObject;
  static serializeBinaryToWriter(message: MockMailboxPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MockMailboxPayload;
  static deserializeBinaryFromReader(message: MockMailboxPayload, reader: jspb.BinaryReader): MockMailboxPayload;
}

export namespace MockMailboxPayload {
  export type AsObject = {
    message: string,
    senderNodeAddress?: NodeAddress.AsObject,
    uid: string,
  }
}

export class MockPayload extends jspb.Message {
  getMessageVersion(): string;
  setMessageVersion(value: string): MockPayload;

  getMessage(): string;
  setMessage(value: string): MockPayload;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MockPayload.AsObject;
  static toObject(includeInstance: boolean, msg: MockPayload): MockPayload.AsObject;
  static serializeBinaryToWriter(message: MockPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MockPayload;
  static deserializeBinaryFromReader(message: MockPayload, reader: jspb.BinaryReader): MockPayload;
}

export namespace MockPayload {
  export type AsObject = {
    messageVersion: string,
    message: string,
  }
}

export enum SupportType { 
  ARBITRATION = 0,
  MEDIATION = 1,
  TRADE = 2,
  REFUND = 3,
}
export enum AvailabilityResult { 
  PB_ERROR = 0,
  UNKNOWN_FAILURE = 1,
  AVAILABLE = 2,
  OFFER_TAKEN = 3,
  PRICE_OUT_OF_TOLERANCE = 4,
  MARKET_PRICE_NOT_AVAILABLE = 5,
  NO_ARBITRATORS = 6,
  NO_MEDIATORS = 7,
  USER_IGNORED = 8,
  MISSING_MANDATORY_CAPABILITY = 9,
  NO_REFUND_AGENTS = 10,
  UNCONF_TX_LIMIT_HIT = 11,
  MAKER_DENIED_API_USER = 12,
  PRICE_CHECK_FAILED = 13,
  MAKER_DENIED_TAKER = 14,
}
export enum MediationResultState { 
  PB_ERROR_MEDIATION_RESULT = 0,
  UNDEFINED_MEDIATION_RESULT = 1,
  MEDIATION_RESULT_ACCEPTED = 2,
  MEDIATION_RESULT_REJECTED = 3,
  SIG_MSG_SENT = 4,
  SIG_MSG_ARRIVED = 5,
  SIG_MSG_IN_MAILBOX = 6,
  SIG_MSG_SEND_FAILED = 7,
  RECEIVED_SIG_MSG = 8,
  PAYOUT_TX_PUBLISHED = 9,
  PAYOUT_TX_PUBLISHED_MSG_SENT = 10,
  PAYOUT_TX_PUBLISHED_MSG_ARRIVED = 11,
  PAYOUT_TX_PUBLISHED_MSG_IN_MAILBOX = 12,
  PAYOUT_TX_PUBLISHED_MSG_SEND_FAILED = 13,
  RECEIVED_PAYOUT_TX_PUBLISHED_MSG = 14,
  PAYOUT_TX_SEEN_IN_NETWORK = 15,
}
export enum RefundResultState { 
  PB_ERROR_REFUND_RESULT = 0,
  UNDEFINED_REFUND_RESULT = 1,
}
