import * as jspb from 'google-protobuf'

import * as pb_pb from './pb_pb';


export class RegisterDisputeAgentRequest extends jspb.Message {
  getDisputeAgentType(): string;
  setDisputeAgentType(value: string): RegisterDisputeAgentRequest;

  getRegistrationKey(): string;
  setRegistrationKey(value: string): RegisterDisputeAgentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterDisputeAgentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterDisputeAgentRequest): RegisterDisputeAgentRequest.AsObject;
  static serializeBinaryToWriter(message: RegisterDisputeAgentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterDisputeAgentRequest;
  static deserializeBinaryFromReader(message: RegisterDisputeAgentRequest, reader: jspb.BinaryReader): RegisterDisputeAgentRequest;
}

export namespace RegisterDisputeAgentRequest {
  export type AsObject = {
    disputeAgentType: string,
    registrationKey: string,
  }
}

export class RegisterDisputeAgentReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterDisputeAgentReply.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterDisputeAgentReply): RegisterDisputeAgentReply.AsObject;
  static serializeBinaryToWriter(message: RegisterDisputeAgentReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterDisputeAgentReply;
  static deserializeBinaryFromReader(message: RegisterDisputeAgentReply, reader: jspb.BinaryReader): RegisterDisputeAgentReply;
}

export namespace RegisterDisputeAgentReply {
  export type AsObject = {
  }
}

export class AccountExistsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountExistsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AccountExistsRequest): AccountExistsRequest.AsObject;
  static serializeBinaryToWriter(message: AccountExistsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountExistsRequest;
  static deserializeBinaryFromReader(message: AccountExistsRequest, reader: jspb.BinaryReader): AccountExistsRequest;
}

export namespace AccountExistsRequest {
  export type AsObject = {
  }
}

export class AccountExistsReply extends jspb.Message {
  getAccountExists(): boolean;
  setAccountExists(value: boolean): AccountExistsReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountExistsReply.AsObject;
  static toObject(includeInstance: boolean, msg: AccountExistsReply): AccountExistsReply.AsObject;
  static serializeBinaryToWriter(message: AccountExistsReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountExistsReply;
  static deserializeBinaryFromReader(message: AccountExistsReply, reader: jspb.BinaryReader): AccountExistsReply;
}

export namespace AccountExistsReply {
  export type AsObject = {
    accountExists: boolean,
  }
}

export class IsAccountOpenRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IsAccountOpenRequest.AsObject;
  static toObject(includeInstance: boolean, msg: IsAccountOpenRequest): IsAccountOpenRequest.AsObject;
  static serializeBinaryToWriter(message: IsAccountOpenRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IsAccountOpenRequest;
  static deserializeBinaryFromReader(message: IsAccountOpenRequest, reader: jspb.BinaryReader): IsAccountOpenRequest;
}

export namespace IsAccountOpenRequest {
  export type AsObject = {
  }
}

export class IsAccountOpenReply extends jspb.Message {
  getIsAccountOpen(): boolean;
  setIsAccountOpen(value: boolean): IsAccountOpenReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IsAccountOpenReply.AsObject;
  static toObject(includeInstance: boolean, msg: IsAccountOpenReply): IsAccountOpenReply.AsObject;
  static serializeBinaryToWriter(message: IsAccountOpenReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IsAccountOpenReply;
  static deserializeBinaryFromReader(message: IsAccountOpenReply, reader: jspb.BinaryReader): IsAccountOpenReply;
}

export namespace IsAccountOpenReply {
  export type AsObject = {
    isAccountOpen: boolean,
  }
}

export class CreateAccountRequest extends jspb.Message {
  getPassword(): string;
  setPassword(value: string): CreateAccountRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAccountRequest): CreateAccountRequest.AsObject;
  static serializeBinaryToWriter(message: CreateAccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAccountRequest;
  static deserializeBinaryFromReader(message: CreateAccountRequest, reader: jspb.BinaryReader): CreateAccountRequest;
}

export namespace CreateAccountRequest {
  export type AsObject = {
    password: string,
  }
}

export class CreateAccountReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAccountReply.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAccountReply): CreateAccountReply.AsObject;
  static serializeBinaryToWriter(message: CreateAccountReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAccountReply;
  static deserializeBinaryFromReader(message: CreateAccountReply, reader: jspb.BinaryReader): CreateAccountReply;
}

export namespace CreateAccountReply {
  export type AsObject = {
  }
}

export class OpenAccountRequest extends jspb.Message {
  getPassword(): string;
  setPassword(value: string): OpenAccountRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OpenAccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: OpenAccountRequest): OpenAccountRequest.AsObject;
  static serializeBinaryToWriter(message: OpenAccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OpenAccountRequest;
  static deserializeBinaryFromReader(message: OpenAccountRequest, reader: jspb.BinaryReader): OpenAccountRequest;
}

export namespace OpenAccountRequest {
  export type AsObject = {
    password: string,
  }
}

export class OpenAccountReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OpenAccountReply.AsObject;
  static toObject(includeInstance: boolean, msg: OpenAccountReply): OpenAccountReply.AsObject;
  static serializeBinaryToWriter(message: OpenAccountReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OpenAccountReply;
  static deserializeBinaryFromReader(message: OpenAccountReply, reader: jspb.BinaryReader): OpenAccountReply;
}

export namespace OpenAccountReply {
  export type AsObject = {
  }
}

export class CloseAccountRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CloseAccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CloseAccountRequest): CloseAccountRequest.AsObject;
  static serializeBinaryToWriter(message: CloseAccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CloseAccountRequest;
  static deserializeBinaryFromReader(message: CloseAccountRequest, reader: jspb.BinaryReader): CloseAccountRequest;
}

export namespace CloseAccountRequest {
  export type AsObject = {
  }
}

export class CloseAccountReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CloseAccountReply.AsObject;
  static toObject(includeInstance: boolean, msg: CloseAccountReply): CloseAccountReply.AsObject;
  static serializeBinaryToWriter(message: CloseAccountReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CloseAccountReply;
  static deserializeBinaryFromReader(message: CloseAccountReply, reader: jspb.BinaryReader): CloseAccountReply;
}

export namespace CloseAccountReply {
  export type AsObject = {
  }
}

export class BackupAccountRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BackupAccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BackupAccountRequest): BackupAccountRequest.AsObject;
  static serializeBinaryToWriter(message: BackupAccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BackupAccountRequest;
  static deserializeBinaryFromReader(message: BackupAccountRequest, reader: jspb.BinaryReader): BackupAccountRequest;
}

export namespace BackupAccountRequest {
  export type AsObject = {
  }
}

export class BackupAccountReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BackupAccountReply.AsObject;
  static toObject(includeInstance: boolean, msg: BackupAccountReply): BackupAccountReply.AsObject;
  static serializeBinaryToWriter(message: BackupAccountReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BackupAccountReply;
  static deserializeBinaryFromReader(message: BackupAccountReply, reader: jspb.BinaryReader): BackupAccountReply;
}

export namespace BackupAccountReply {
  export type AsObject = {
  }
}

export class DeleteAccountRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAccountRequest): DeleteAccountRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteAccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAccountRequest;
  static deserializeBinaryFromReader(message: DeleteAccountRequest, reader: jspb.BinaryReader): DeleteAccountRequest;
}

export namespace DeleteAccountRequest {
  export type AsObject = {
  }
}

export class DeleteAccountReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAccountReply.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAccountReply): DeleteAccountReply.AsObject;
  static serializeBinaryToWriter(message: DeleteAccountReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAccountReply;
  static deserializeBinaryFromReader(message: DeleteAccountReply, reader: jspb.BinaryReader): DeleteAccountReply;
}

export namespace DeleteAccountReply {
  export type AsObject = {
  }
}

export class ChangePasswordRequest extends jspb.Message {
  getPassword(): string;
  setPassword(value: string): ChangePasswordRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChangePasswordRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ChangePasswordRequest): ChangePasswordRequest.AsObject;
  static serializeBinaryToWriter(message: ChangePasswordRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChangePasswordRequest;
  static deserializeBinaryFromReader(message: ChangePasswordRequest, reader: jspb.BinaryReader): ChangePasswordRequest;
}

export namespace ChangePasswordRequest {
  export type AsObject = {
    password: string,
  }
}

export class ChangePasswordReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChangePasswordReply.AsObject;
  static toObject(includeInstance: boolean, msg: ChangePasswordReply): ChangePasswordReply.AsObject;
  static serializeBinaryToWriter(message: ChangePasswordReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChangePasswordReply;
  static deserializeBinaryFromReader(message: ChangePasswordReply, reader: jspb.BinaryReader): ChangePasswordReply;
}

export namespace ChangePasswordReply {
  export type AsObject = {
  }
}

export class GetMethodHelpRequest extends jspb.Message {
  getMethodName(): string;
  setMethodName(value: string): GetMethodHelpRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMethodHelpRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetMethodHelpRequest): GetMethodHelpRequest.AsObject;
  static serializeBinaryToWriter(message: GetMethodHelpRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMethodHelpRequest;
  static deserializeBinaryFromReader(message: GetMethodHelpRequest, reader: jspb.BinaryReader): GetMethodHelpRequest;
}

export namespace GetMethodHelpRequest {
  export type AsObject = {
    methodName: string,
  }
}

export class GetMethodHelpReply extends jspb.Message {
  getMethodHelp(): string;
  setMethodHelp(value: string): GetMethodHelpReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMethodHelpReply.AsObject;
  static toObject(includeInstance: boolean, msg: GetMethodHelpReply): GetMethodHelpReply.AsObject;
  static serializeBinaryToWriter(message: GetMethodHelpReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMethodHelpReply;
  static deserializeBinaryFromReader(message: GetMethodHelpReply, reader: jspb.BinaryReader): GetMethodHelpReply;
}

export namespace GetMethodHelpReply {
  export type AsObject = {
    methodHelp: string,
  }
}

export class GetOfferRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetOfferRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOfferRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetOfferRequest): GetOfferRequest.AsObject;
  static serializeBinaryToWriter(message: GetOfferRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOfferRequest;
  static deserializeBinaryFromReader(message: GetOfferRequest, reader: jspb.BinaryReader): GetOfferRequest;
}

export namespace GetOfferRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetOfferReply extends jspb.Message {
  getOffer(): OfferInfo | undefined;
  setOffer(value?: OfferInfo): GetOfferReply;
  hasOffer(): boolean;
  clearOffer(): GetOfferReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOfferReply.AsObject;
  static toObject(includeInstance: boolean, msg: GetOfferReply): GetOfferReply.AsObject;
  static serializeBinaryToWriter(message: GetOfferReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOfferReply;
  static deserializeBinaryFromReader(message: GetOfferReply, reader: jspb.BinaryReader): GetOfferReply;
}

export namespace GetOfferReply {
  export type AsObject = {
    offer?: OfferInfo.AsObject,
  }
}

export class GetMyOfferRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetMyOfferRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMyOfferRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetMyOfferRequest): GetMyOfferRequest.AsObject;
  static serializeBinaryToWriter(message: GetMyOfferRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMyOfferRequest;
  static deserializeBinaryFromReader(message: GetMyOfferRequest, reader: jspb.BinaryReader): GetMyOfferRequest;
}

export namespace GetMyOfferRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetMyOfferReply extends jspb.Message {
  getOffer(): OfferInfo | undefined;
  setOffer(value?: OfferInfo): GetMyOfferReply;
  hasOffer(): boolean;
  clearOffer(): GetMyOfferReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMyOfferReply.AsObject;
  static toObject(includeInstance: boolean, msg: GetMyOfferReply): GetMyOfferReply.AsObject;
  static serializeBinaryToWriter(message: GetMyOfferReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMyOfferReply;
  static deserializeBinaryFromReader(message: GetMyOfferReply, reader: jspb.BinaryReader): GetMyOfferReply;
}

export namespace GetMyOfferReply {
  export type AsObject = {
    offer?: OfferInfo.AsObject,
  }
}

export class GetOffersRequest extends jspb.Message {
  getDirection(): string;
  setDirection(value: string): GetOffersRequest;

  getCurrencyCode(): string;
  setCurrencyCode(value: string): GetOffersRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOffersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetOffersRequest): GetOffersRequest.AsObject;
  static serializeBinaryToWriter(message: GetOffersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOffersRequest;
  static deserializeBinaryFromReader(message: GetOffersRequest, reader: jspb.BinaryReader): GetOffersRequest;
}

export namespace GetOffersRequest {
  export type AsObject = {
    direction: string,
    currencyCode: string,
  }
}

export class GetOffersReply extends jspb.Message {
  getOffersList(): Array<OfferInfo>;
  setOffersList(value: Array<OfferInfo>): GetOffersReply;
  clearOffersList(): GetOffersReply;
  addOffers(value?: OfferInfo, index?: number): OfferInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOffersReply.AsObject;
  static toObject(includeInstance: boolean, msg: GetOffersReply): GetOffersReply.AsObject;
  static serializeBinaryToWriter(message: GetOffersReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOffersReply;
  static deserializeBinaryFromReader(message: GetOffersReply, reader: jspb.BinaryReader): GetOffersReply;
}

export namespace GetOffersReply {
  export type AsObject = {
    offersList: Array<OfferInfo.AsObject>,
  }
}

export class GetMyOffersRequest extends jspb.Message {
  getDirection(): string;
  setDirection(value: string): GetMyOffersRequest;

  getCurrencyCode(): string;
  setCurrencyCode(value: string): GetMyOffersRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMyOffersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetMyOffersRequest): GetMyOffersRequest.AsObject;
  static serializeBinaryToWriter(message: GetMyOffersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMyOffersRequest;
  static deserializeBinaryFromReader(message: GetMyOffersRequest, reader: jspb.BinaryReader): GetMyOffersRequest;
}

export namespace GetMyOffersRequest {
  export type AsObject = {
    direction: string,
    currencyCode: string,
  }
}

export class GetMyOffersReply extends jspb.Message {
  getOffersList(): Array<OfferInfo>;
  setOffersList(value: Array<OfferInfo>): GetMyOffersReply;
  clearOffersList(): GetMyOffersReply;
  addOffers(value?: OfferInfo, index?: number): OfferInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMyOffersReply.AsObject;
  static toObject(includeInstance: boolean, msg: GetMyOffersReply): GetMyOffersReply.AsObject;
  static serializeBinaryToWriter(message: GetMyOffersReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMyOffersReply;
  static deserializeBinaryFromReader(message: GetMyOffersReply, reader: jspb.BinaryReader): GetMyOffersReply;
}

export namespace GetMyOffersReply {
  export type AsObject = {
    offersList: Array<OfferInfo.AsObject>,
  }
}

export class CreateOfferRequest extends jspb.Message {
  getCurrencyCode(): string;
  setCurrencyCode(value: string): CreateOfferRequest;

  getDirection(): string;
  setDirection(value: string): CreateOfferRequest;

  getPrice(): string;
  setPrice(value: string): CreateOfferRequest;

  getUseMarketBasedPrice(): boolean;
  setUseMarketBasedPrice(value: boolean): CreateOfferRequest;

  getMarketPriceMargin(): number;
  setMarketPriceMargin(value: number): CreateOfferRequest;

  getAmount(): string;
  setAmount(value: string): CreateOfferRequest;

  getMinAmount(): string;
  setMinAmount(value: string): CreateOfferRequest;

  getBuyerSecurityDeposit(): number;
  setBuyerSecurityDeposit(value: number): CreateOfferRequest;

  getTriggerPrice(): string;
  setTriggerPrice(value: string): CreateOfferRequest;

  getPaymentAccountId(): string;
  setPaymentAccountId(value: string): CreateOfferRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateOfferRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateOfferRequest): CreateOfferRequest.AsObject;
  static serializeBinaryToWriter(message: CreateOfferRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateOfferRequest;
  static deserializeBinaryFromReader(message: CreateOfferRequest, reader: jspb.BinaryReader): CreateOfferRequest;
}

export namespace CreateOfferRequest {
  export type AsObject = {
    currencyCode: string,
    direction: string,
    price: string,
    useMarketBasedPrice: boolean,
    marketPriceMargin: number,
    amount: string,
    minAmount: string,
    buyerSecurityDeposit: number,
    triggerPrice: string,
    paymentAccountId: string,
  }
}

export class CreateOfferReply extends jspb.Message {
  getOffer(): OfferInfo | undefined;
  setOffer(value?: OfferInfo): CreateOfferReply;
  hasOffer(): boolean;
  clearOffer(): CreateOfferReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateOfferReply.AsObject;
  static toObject(includeInstance: boolean, msg: CreateOfferReply): CreateOfferReply.AsObject;
  static serializeBinaryToWriter(message: CreateOfferReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateOfferReply;
  static deserializeBinaryFromReader(message: CreateOfferReply, reader: jspb.BinaryReader): CreateOfferReply;
}

export namespace CreateOfferReply {
  export type AsObject = {
    offer?: OfferInfo.AsObject,
  }
}

export class CancelOfferRequest extends jspb.Message {
  getId(): string;
  setId(value: string): CancelOfferRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelOfferRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CancelOfferRequest): CancelOfferRequest.AsObject;
  static serializeBinaryToWriter(message: CancelOfferRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelOfferRequest;
  static deserializeBinaryFromReader(message: CancelOfferRequest, reader: jspb.BinaryReader): CancelOfferRequest;
}

export namespace CancelOfferRequest {
  export type AsObject = {
    id: string,
  }
}

export class CancelOfferReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelOfferReply.AsObject;
  static toObject(includeInstance: boolean, msg: CancelOfferReply): CancelOfferReply.AsObject;
  static serializeBinaryToWriter(message: CancelOfferReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelOfferReply;
  static deserializeBinaryFromReader(message: CancelOfferReply, reader: jspb.BinaryReader): CancelOfferReply;
}

export namespace CancelOfferReply {
  export type AsObject = {
  }
}

export class OfferInfo extends jspb.Message {
  getId(): string;
  setId(value: string): OfferInfo;

  getDirection(): string;
  setDirection(value: string): OfferInfo;

  getPrice(): number;
  setPrice(value: number): OfferInfo;

  getUseMarketBasedPrice(): boolean;
  setUseMarketBasedPrice(value: boolean): OfferInfo;

  getMarketPriceMargin(): number;
  setMarketPriceMargin(value: number): OfferInfo;

  getAmount(): number;
  setAmount(value: number): OfferInfo;

  getMinAmount(): number;
  setMinAmount(value: number): OfferInfo;

  getVolume(): number;
  setVolume(value: number): OfferInfo;

  getMinVolume(): number;
  setMinVolume(value: number): OfferInfo;

  getBuyerSecurityDeposit(): number;
  setBuyerSecurityDeposit(value: number): OfferInfo;

  getTriggerPrice(): number;
  setTriggerPrice(value: number): OfferInfo;

  getPaymentAccountId(): string;
  setPaymentAccountId(value: string): OfferInfo;

  getPaymentMethodId(): string;
  setPaymentMethodId(value: string): OfferInfo;

  getPaymentMethodShortName(): string;
  setPaymentMethodShortName(value: string): OfferInfo;

  getBaseCurrencyCode(): string;
  setBaseCurrencyCode(value: string): OfferInfo;

  getCounterCurrencyCode(): string;
  setCounterCurrencyCode(value: string): OfferInfo;

  getDate(): number;
  setDate(value: number): OfferInfo;

  getState(): string;
  setState(value: string): OfferInfo;

  getSellerSecurityDeposit(): number;
  setSellerSecurityDeposit(value: number): OfferInfo;

  getOfferFeePaymentTxId(): string;
  setOfferFeePaymentTxId(value: string): OfferInfo;

  getTxFee(): number;
  setTxFee(value: number): OfferInfo;

  getMakerFee(): number;
  setMakerFee(value: number): OfferInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OfferInfo.AsObject;
  static toObject(includeInstance: boolean, msg: OfferInfo): OfferInfo.AsObject;
  static serializeBinaryToWriter(message: OfferInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OfferInfo;
  static deserializeBinaryFromReader(message: OfferInfo, reader: jspb.BinaryReader): OfferInfo;
}

export namespace OfferInfo {
  export type AsObject = {
    id: string,
    direction: string,
    price: number,
    useMarketBasedPrice: boolean,
    marketPriceMargin: number,
    amount: number,
    minAmount: number,
    volume: number,
    minVolume: number,
    buyerSecurityDeposit: number,
    triggerPrice: number,
    paymentAccountId: string,
    paymentMethodId: string,
    paymentMethodShortName: string,
    baseCurrencyCode: string,
    counterCurrencyCode: string,
    date: number,
    state: string,
    sellerSecurityDeposit: number,
    offerFeePaymentTxId: string,
    txFee: number,
    makerFee: number,
  }
}

export class AvailabilityResultWithDescription extends jspb.Message {
  getAvailabilityResult(): pb_pb.AvailabilityResult;
  setAvailabilityResult(value: pb_pb.AvailabilityResult): AvailabilityResultWithDescription;

  getDescription(): string;
  setDescription(value: string): AvailabilityResultWithDescription;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AvailabilityResultWithDescription.AsObject;
  static toObject(includeInstance: boolean, msg: AvailabilityResultWithDescription): AvailabilityResultWithDescription.AsObject;
  static serializeBinaryToWriter(message: AvailabilityResultWithDescription, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AvailabilityResultWithDescription;
  static deserializeBinaryFromReader(message: AvailabilityResultWithDescription, reader: jspb.BinaryReader): AvailabilityResultWithDescription;
}

export namespace AvailabilityResultWithDescription {
  export type AsObject = {
    availabilityResult: pb_pb.AvailabilityResult,
    description: string,
  }
}

export class CreatePaymentAccountRequest extends jspb.Message {
  getPaymentAccountForm(): string;
  setPaymentAccountForm(value: string): CreatePaymentAccountRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePaymentAccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePaymentAccountRequest): CreatePaymentAccountRequest.AsObject;
  static serializeBinaryToWriter(message: CreatePaymentAccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePaymentAccountRequest;
  static deserializeBinaryFromReader(message: CreatePaymentAccountRequest, reader: jspb.BinaryReader): CreatePaymentAccountRequest;
}

export namespace CreatePaymentAccountRequest {
  export type AsObject = {
    paymentAccountForm: string,
  }
}

export class CreatePaymentAccountReply extends jspb.Message {
  getPaymentAccount(): pb_pb.PaymentAccount | undefined;
  setPaymentAccount(value?: pb_pb.PaymentAccount): CreatePaymentAccountReply;
  hasPaymentAccount(): boolean;
  clearPaymentAccount(): CreatePaymentAccountReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePaymentAccountReply.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePaymentAccountReply): CreatePaymentAccountReply.AsObject;
  static serializeBinaryToWriter(message: CreatePaymentAccountReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePaymentAccountReply;
  static deserializeBinaryFromReader(message: CreatePaymentAccountReply, reader: jspb.BinaryReader): CreatePaymentAccountReply;
}

export namespace CreatePaymentAccountReply {
  export type AsObject = {
    paymentAccount?: pb_pb.PaymentAccount.AsObject,
  }
}

export class GetPaymentAccountsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPaymentAccountsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPaymentAccountsRequest): GetPaymentAccountsRequest.AsObject;
  static serializeBinaryToWriter(message: GetPaymentAccountsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPaymentAccountsRequest;
  static deserializeBinaryFromReader(message: GetPaymentAccountsRequest, reader: jspb.BinaryReader): GetPaymentAccountsRequest;
}

export namespace GetPaymentAccountsRequest {
  export type AsObject = {
  }
}

export class GetPaymentAccountsReply extends jspb.Message {
  getPaymentAccountsList(): Array<pb_pb.PaymentAccount>;
  setPaymentAccountsList(value: Array<pb_pb.PaymentAccount>): GetPaymentAccountsReply;
  clearPaymentAccountsList(): GetPaymentAccountsReply;
  addPaymentAccounts(value?: pb_pb.PaymentAccount, index?: number): pb_pb.PaymentAccount;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPaymentAccountsReply.AsObject;
  static toObject(includeInstance: boolean, msg: GetPaymentAccountsReply): GetPaymentAccountsReply.AsObject;
  static serializeBinaryToWriter(message: GetPaymentAccountsReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPaymentAccountsReply;
  static deserializeBinaryFromReader(message: GetPaymentAccountsReply, reader: jspb.BinaryReader): GetPaymentAccountsReply;
}

export namespace GetPaymentAccountsReply {
  export type AsObject = {
    paymentAccountsList: Array<pb_pb.PaymentAccount.AsObject>,
  }
}

export class GetPaymentMethodsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPaymentMethodsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPaymentMethodsRequest): GetPaymentMethodsRequest.AsObject;
  static serializeBinaryToWriter(message: GetPaymentMethodsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPaymentMethodsRequest;
  static deserializeBinaryFromReader(message: GetPaymentMethodsRequest, reader: jspb.BinaryReader): GetPaymentMethodsRequest;
}

export namespace GetPaymentMethodsRequest {
  export type AsObject = {
  }
}

export class GetPaymentMethodsReply extends jspb.Message {
  getPaymentMethodsList(): Array<pb_pb.PaymentMethod>;
  setPaymentMethodsList(value: Array<pb_pb.PaymentMethod>): GetPaymentMethodsReply;
  clearPaymentMethodsList(): GetPaymentMethodsReply;
  addPaymentMethods(value?: pb_pb.PaymentMethod, index?: number): pb_pb.PaymentMethod;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPaymentMethodsReply.AsObject;
  static toObject(includeInstance: boolean, msg: GetPaymentMethodsReply): GetPaymentMethodsReply.AsObject;
  static serializeBinaryToWriter(message: GetPaymentMethodsReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPaymentMethodsReply;
  static deserializeBinaryFromReader(message: GetPaymentMethodsReply, reader: jspb.BinaryReader): GetPaymentMethodsReply;
}

export namespace GetPaymentMethodsReply {
  export type AsObject = {
    paymentMethodsList: Array<pb_pb.PaymentMethod.AsObject>,
  }
}

export class GetPaymentAccountFormRequest extends jspb.Message {
  getPaymentMethodId(): string;
  setPaymentMethodId(value: string): GetPaymentAccountFormRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPaymentAccountFormRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPaymentAccountFormRequest): GetPaymentAccountFormRequest.AsObject;
  static serializeBinaryToWriter(message: GetPaymentAccountFormRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPaymentAccountFormRequest;
  static deserializeBinaryFromReader(message: GetPaymentAccountFormRequest, reader: jspb.BinaryReader): GetPaymentAccountFormRequest;
}

export namespace GetPaymentAccountFormRequest {
  export type AsObject = {
    paymentMethodId: string,
  }
}

export class GetPaymentAccountFormReply extends jspb.Message {
  getPaymentAccountFormJson(): string;
  setPaymentAccountFormJson(value: string): GetPaymentAccountFormReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPaymentAccountFormReply.AsObject;
  static toObject(includeInstance: boolean, msg: GetPaymentAccountFormReply): GetPaymentAccountFormReply.AsObject;
  static serializeBinaryToWriter(message: GetPaymentAccountFormReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPaymentAccountFormReply;
  static deserializeBinaryFromReader(message: GetPaymentAccountFormReply, reader: jspb.BinaryReader): GetPaymentAccountFormReply;
}

export namespace GetPaymentAccountFormReply {
  export type AsObject = {
    paymentAccountFormJson: string,
  }
}

export class CreateCryptoCurrencyPaymentAccountRequest extends jspb.Message {
  getAccountName(): string;
  setAccountName(value: string): CreateCryptoCurrencyPaymentAccountRequest;

  getCurrencyCode(): string;
  setCurrencyCode(value: string): CreateCryptoCurrencyPaymentAccountRequest;

  getAddress(): string;
  setAddress(value: string): CreateCryptoCurrencyPaymentAccountRequest;

  getTradeInstant(): boolean;
  setTradeInstant(value: boolean): CreateCryptoCurrencyPaymentAccountRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCryptoCurrencyPaymentAccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCryptoCurrencyPaymentAccountRequest): CreateCryptoCurrencyPaymentAccountRequest.AsObject;
  static serializeBinaryToWriter(message: CreateCryptoCurrencyPaymentAccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCryptoCurrencyPaymentAccountRequest;
  static deserializeBinaryFromReader(message: CreateCryptoCurrencyPaymentAccountRequest, reader: jspb.BinaryReader): CreateCryptoCurrencyPaymentAccountRequest;
}

export namespace CreateCryptoCurrencyPaymentAccountRequest {
  export type AsObject = {
    accountName: string,
    currencyCode: string,
    address: string,
    tradeInstant: boolean,
  }
}

export class CreateCryptoCurrencyPaymentAccountReply extends jspb.Message {
  getPaymentAccount(): pb_pb.PaymentAccount | undefined;
  setPaymentAccount(value?: pb_pb.PaymentAccount): CreateCryptoCurrencyPaymentAccountReply;
  hasPaymentAccount(): boolean;
  clearPaymentAccount(): CreateCryptoCurrencyPaymentAccountReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCryptoCurrencyPaymentAccountReply.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCryptoCurrencyPaymentAccountReply): CreateCryptoCurrencyPaymentAccountReply.AsObject;
  static serializeBinaryToWriter(message: CreateCryptoCurrencyPaymentAccountReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCryptoCurrencyPaymentAccountReply;
  static deserializeBinaryFromReader(message: CreateCryptoCurrencyPaymentAccountReply, reader: jspb.BinaryReader): CreateCryptoCurrencyPaymentAccountReply;
}

export namespace CreateCryptoCurrencyPaymentAccountReply {
  export type AsObject = {
    paymentAccount?: pb_pb.PaymentAccount.AsObject,
  }
}

export class GetCryptoCurrencyPaymentMethodsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCryptoCurrencyPaymentMethodsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCryptoCurrencyPaymentMethodsRequest): GetCryptoCurrencyPaymentMethodsRequest.AsObject;
  static serializeBinaryToWriter(message: GetCryptoCurrencyPaymentMethodsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCryptoCurrencyPaymentMethodsRequest;
  static deserializeBinaryFromReader(message: GetCryptoCurrencyPaymentMethodsRequest, reader: jspb.BinaryReader): GetCryptoCurrencyPaymentMethodsRequest;
}

export namespace GetCryptoCurrencyPaymentMethodsRequest {
  export type AsObject = {
  }
}

export class GetCryptoCurrencyPaymentMethodsReply extends jspb.Message {
  getPaymentMethodsList(): Array<pb_pb.PaymentMethod>;
  setPaymentMethodsList(value: Array<pb_pb.PaymentMethod>): GetCryptoCurrencyPaymentMethodsReply;
  clearPaymentMethodsList(): GetCryptoCurrencyPaymentMethodsReply;
  addPaymentMethods(value?: pb_pb.PaymentMethod, index?: number): pb_pb.PaymentMethod;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCryptoCurrencyPaymentMethodsReply.AsObject;
  static toObject(includeInstance: boolean, msg: GetCryptoCurrencyPaymentMethodsReply): GetCryptoCurrencyPaymentMethodsReply.AsObject;
  static serializeBinaryToWriter(message: GetCryptoCurrencyPaymentMethodsReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCryptoCurrencyPaymentMethodsReply;
  static deserializeBinaryFromReader(message: GetCryptoCurrencyPaymentMethodsReply, reader: jspb.BinaryReader): GetCryptoCurrencyPaymentMethodsReply;
}

export namespace GetCryptoCurrencyPaymentMethodsReply {
  export type AsObject = {
    paymentMethodsList: Array<pb_pb.PaymentMethod.AsObject>,
  }
}

export class MarketPriceRequest extends jspb.Message {
  getCurrencyCode(): string;
  setCurrencyCode(value: string): MarketPriceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarketPriceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MarketPriceRequest): MarketPriceRequest.AsObject;
  static serializeBinaryToWriter(message: MarketPriceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarketPriceRequest;
  static deserializeBinaryFromReader(message: MarketPriceRequest, reader: jspb.BinaryReader): MarketPriceRequest;
}

export namespace MarketPriceRequest {
  export type AsObject = {
    currencyCode: string,
  }
}

export class MarketPriceReply extends jspb.Message {
  getPrice(): number;
  setPrice(value: number): MarketPriceReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarketPriceReply.AsObject;
  static toObject(includeInstance: boolean, msg: MarketPriceReply): MarketPriceReply.AsObject;
  static serializeBinaryToWriter(message: MarketPriceReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarketPriceReply;
  static deserializeBinaryFromReader(message: MarketPriceReply, reader: jspb.BinaryReader): MarketPriceReply;
}

export namespace MarketPriceReply {
  export type AsObject = {
    price: number,
  }
}

export class GetTradeStatisticsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTradeStatisticsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTradeStatisticsRequest): GetTradeStatisticsRequest.AsObject;
  static serializeBinaryToWriter(message: GetTradeStatisticsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTradeStatisticsRequest;
  static deserializeBinaryFromReader(message: GetTradeStatisticsRequest, reader: jspb.BinaryReader): GetTradeStatisticsRequest;
}

export namespace GetTradeStatisticsRequest {
  export type AsObject = {
  }
}

export class GetTradeStatisticsReply extends jspb.Message {
  getTradeStatisticsList(): Array<pb_pb.TradeStatistics3>;
  setTradeStatisticsList(value: Array<pb_pb.TradeStatistics3>): GetTradeStatisticsReply;
  clearTradeStatisticsList(): GetTradeStatisticsReply;
  addTradeStatistics(value?: pb_pb.TradeStatistics3, index?: number): pb_pb.TradeStatistics3;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTradeStatisticsReply.AsObject;
  static toObject(includeInstance: boolean, msg: GetTradeStatisticsReply): GetTradeStatisticsReply.AsObject;
  static serializeBinaryToWriter(message: GetTradeStatisticsReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTradeStatisticsReply;
  static deserializeBinaryFromReader(message: GetTradeStatisticsReply, reader: jspb.BinaryReader): GetTradeStatisticsReply;
}

export namespace GetTradeStatisticsReply {
  export type AsObject = {
    tradeStatisticsList: Array<pb_pb.TradeStatistics3.AsObject>,
  }
}

export class StopRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StopRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StopRequest): StopRequest.AsObject;
  static serializeBinaryToWriter(message: StopRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StopRequest;
  static deserializeBinaryFromReader(message: StopRequest, reader: jspb.BinaryReader): StopRequest;
}

export namespace StopRequest {
  export type AsObject = {
  }
}

export class StopReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StopReply.AsObject;
  static toObject(includeInstance: boolean, msg: StopReply): StopReply.AsObject;
  static serializeBinaryToWriter(message: StopReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StopReply;
  static deserializeBinaryFromReader(message: StopReply, reader: jspb.BinaryReader): StopReply;
}

export namespace StopReply {
  export type AsObject = {
  }
}

export class TakeOfferRequest extends jspb.Message {
  getOfferId(): string;
  setOfferId(value: string): TakeOfferRequest;

  getPaymentAccountId(): string;
  setPaymentAccountId(value: string): TakeOfferRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TakeOfferRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TakeOfferRequest): TakeOfferRequest.AsObject;
  static serializeBinaryToWriter(message: TakeOfferRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TakeOfferRequest;
  static deserializeBinaryFromReader(message: TakeOfferRequest, reader: jspb.BinaryReader): TakeOfferRequest;
}

export namespace TakeOfferRequest {
  export type AsObject = {
    offerId: string,
    paymentAccountId: string,
  }
}

export class TakeOfferReply extends jspb.Message {
  getTrade(): TradeInfo | undefined;
  setTrade(value?: TradeInfo): TakeOfferReply;
  hasTrade(): boolean;
  clearTrade(): TakeOfferReply;

  getFailureReason(): AvailabilityResultWithDescription | undefined;
  setFailureReason(value?: AvailabilityResultWithDescription): TakeOfferReply;
  hasFailureReason(): boolean;
  clearFailureReason(): TakeOfferReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TakeOfferReply.AsObject;
  static toObject(includeInstance: boolean, msg: TakeOfferReply): TakeOfferReply.AsObject;
  static serializeBinaryToWriter(message: TakeOfferReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TakeOfferReply;
  static deserializeBinaryFromReader(message: TakeOfferReply, reader: jspb.BinaryReader): TakeOfferReply;
}

export namespace TakeOfferReply {
  export type AsObject = {
    trade?: TradeInfo.AsObject,
    failureReason?: AvailabilityResultWithDescription.AsObject,
  }
}

export class ConfirmPaymentStartedRequest extends jspb.Message {
  getTradeId(): string;
  setTradeId(value: string): ConfirmPaymentStartedRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfirmPaymentStartedRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ConfirmPaymentStartedRequest): ConfirmPaymentStartedRequest.AsObject;
  static serializeBinaryToWriter(message: ConfirmPaymentStartedRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfirmPaymentStartedRequest;
  static deserializeBinaryFromReader(message: ConfirmPaymentStartedRequest, reader: jspb.BinaryReader): ConfirmPaymentStartedRequest;
}

export namespace ConfirmPaymentStartedRequest {
  export type AsObject = {
    tradeId: string,
  }
}

export class ConfirmPaymentStartedReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfirmPaymentStartedReply.AsObject;
  static toObject(includeInstance: boolean, msg: ConfirmPaymentStartedReply): ConfirmPaymentStartedReply.AsObject;
  static serializeBinaryToWriter(message: ConfirmPaymentStartedReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfirmPaymentStartedReply;
  static deserializeBinaryFromReader(message: ConfirmPaymentStartedReply, reader: jspb.BinaryReader): ConfirmPaymentStartedReply;
}

export namespace ConfirmPaymentStartedReply {
  export type AsObject = {
  }
}

export class ConfirmPaymentReceivedRequest extends jspb.Message {
  getTradeId(): string;
  setTradeId(value: string): ConfirmPaymentReceivedRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfirmPaymentReceivedRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ConfirmPaymentReceivedRequest): ConfirmPaymentReceivedRequest.AsObject;
  static serializeBinaryToWriter(message: ConfirmPaymentReceivedRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfirmPaymentReceivedRequest;
  static deserializeBinaryFromReader(message: ConfirmPaymentReceivedRequest, reader: jspb.BinaryReader): ConfirmPaymentReceivedRequest;
}

export namespace ConfirmPaymentReceivedRequest {
  export type AsObject = {
    tradeId: string,
  }
}

export class ConfirmPaymentReceivedReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfirmPaymentReceivedReply.AsObject;
  static toObject(includeInstance: boolean, msg: ConfirmPaymentReceivedReply): ConfirmPaymentReceivedReply.AsObject;
  static serializeBinaryToWriter(message: ConfirmPaymentReceivedReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfirmPaymentReceivedReply;
  static deserializeBinaryFromReader(message: ConfirmPaymentReceivedReply, reader: jspb.BinaryReader): ConfirmPaymentReceivedReply;
}

export namespace ConfirmPaymentReceivedReply {
  export type AsObject = {
  }
}

export class GetTradeRequest extends jspb.Message {
  getTradeId(): string;
  setTradeId(value: string): GetTradeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTradeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTradeRequest): GetTradeRequest.AsObject;
  static serializeBinaryToWriter(message: GetTradeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTradeRequest;
  static deserializeBinaryFromReader(message: GetTradeRequest, reader: jspb.BinaryReader): GetTradeRequest;
}

export namespace GetTradeRequest {
  export type AsObject = {
    tradeId: string,
  }
}

export class GetTradeReply extends jspb.Message {
  getTrade(): TradeInfo | undefined;
  setTrade(value?: TradeInfo): GetTradeReply;
  hasTrade(): boolean;
  clearTrade(): GetTradeReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTradeReply.AsObject;
  static toObject(includeInstance: boolean, msg: GetTradeReply): GetTradeReply.AsObject;
  static serializeBinaryToWriter(message: GetTradeReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTradeReply;
  static deserializeBinaryFromReader(message: GetTradeReply, reader: jspb.BinaryReader): GetTradeReply;
}

export namespace GetTradeReply {
  export type AsObject = {
    trade?: TradeInfo.AsObject,
  }
}

export class KeepFundsRequest extends jspb.Message {
  getTradeId(): string;
  setTradeId(value: string): KeepFundsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KeepFundsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: KeepFundsRequest): KeepFundsRequest.AsObject;
  static serializeBinaryToWriter(message: KeepFundsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KeepFundsRequest;
  static deserializeBinaryFromReader(message: KeepFundsRequest, reader: jspb.BinaryReader): KeepFundsRequest;
}

export namespace KeepFundsRequest {
  export type AsObject = {
    tradeId: string,
  }
}

export class KeepFundsReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KeepFundsReply.AsObject;
  static toObject(includeInstance: boolean, msg: KeepFundsReply): KeepFundsReply.AsObject;
  static serializeBinaryToWriter(message: KeepFundsReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KeepFundsReply;
  static deserializeBinaryFromReader(message: KeepFundsReply, reader: jspb.BinaryReader): KeepFundsReply;
}

export namespace KeepFundsReply {
  export type AsObject = {
  }
}

export class WithdrawFundsRequest extends jspb.Message {
  getTradeId(): string;
  setTradeId(value: string): WithdrawFundsRequest;

  getAddress(): string;
  setAddress(value: string): WithdrawFundsRequest;

  getMemo(): string;
  setMemo(value: string): WithdrawFundsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WithdrawFundsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WithdrawFundsRequest): WithdrawFundsRequest.AsObject;
  static serializeBinaryToWriter(message: WithdrawFundsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WithdrawFundsRequest;
  static deserializeBinaryFromReader(message: WithdrawFundsRequest, reader: jspb.BinaryReader): WithdrawFundsRequest;
}

export namespace WithdrawFundsRequest {
  export type AsObject = {
    tradeId: string,
    address: string,
    memo: string,
  }
}

export class WithdrawFundsReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WithdrawFundsReply.AsObject;
  static toObject(includeInstance: boolean, msg: WithdrawFundsReply): WithdrawFundsReply.AsObject;
  static serializeBinaryToWriter(message: WithdrawFundsReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WithdrawFundsReply;
  static deserializeBinaryFromReader(message: WithdrawFundsReply, reader: jspb.BinaryReader): WithdrawFundsReply;
}

export namespace WithdrawFundsReply {
  export type AsObject = {
  }
}

export class TradeInfo extends jspb.Message {
  getOffer(): OfferInfo | undefined;
  setOffer(value?: OfferInfo): TradeInfo;
  hasOffer(): boolean;
  clearOffer(): TradeInfo;

  getTradeId(): string;
  setTradeId(value: string): TradeInfo;

  getShortId(): string;
  setShortId(value: string): TradeInfo;

  getDate(): number;
  setDate(value: number): TradeInfo;

  getRole(): string;
  setRole(value: string): TradeInfo;

  getTxFeeAsLong(): number;
  setTxFeeAsLong(value: number): TradeInfo;

  getTakerFeeAsLong(): number;
  setTakerFeeAsLong(value: number): TradeInfo;

  getTakerFeeTxId(): string;
  setTakerFeeTxId(value: string): TradeInfo;

  getPayoutTxId(): string;
  setPayoutTxId(value: string): TradeInfo;

  getTradeAmountAsLong(): number;
  setTradeAmountAsLong(value: number): TradeInfo;

  getTradePrice(): number;
  setTradePrice(value: number): TradeInfo;

  getTradingPeerNodeAddress(): string;
  setTradingPeerNodeAddress(value: string): TradeInfo;

  getState(): string;
  setState(value: string): TradeInfo;

  getPhase(): string;
  setPhase(value: string): TradeInfo;

  getTradePeriodState(): string;
  setTradePeriodState(value: string): TradeInfo;

  getIsDepositPublished(): boolean;
  setIsDepositPublished(value: boolean): TradeInfo;

  getIsDepositConfirmed(): boolean;
  setIsDepositConfirmed(value: boolean): TradeInfo;

  getIsFiatSent(): boolean;
  setIsFiatSent(value: boolean): TradeInfo;

  getIsFiatReceived(): boolean;
  setIsFiatReceived(value: boolean): TradeInfo;

  getIsPayoutPublished(): boolean;
  setIsPayoutPublished(value: boolean): TradeInfo;

  getIsWithdrawn(): boolean;
  setIsWithdrawn(value: boolean): TradeInfo;

  getContractAsJson(): string;
  setContractAsJson(value: string): TradeInfo;

  getContract(): ContractInfo | undefined;
  setContract(value?: ContractInfo): TradeInfo;
  hasContract(): boolean;
  clearContract(): TradeInfo;

  getMakerDepositTxId(): string;
  setMakerDepositTxId(value: string): TradeInfo;

  getTakerDepositTxId(): string;
  setTakerDepositTxId(value: string): TradeInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TradeInfo.AsObject;
  static toObject(includeInstance: boolean, msg: TradeInfo): TradeInfo.AsObject;
  static serializeBinaryToWriter(message: TradeInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TradeInfo;
  static deserializeBinaryFromReader(message: TradeInfo, reader: jspb.BinaryReader): TradeInfo;
}

export namespace TradeInfo {
  export type AsObject = {
    offer?: OfferInfo.AsObject,
    tradeId: string,
    shortId: string,
    date: number,
    role: string,
    txFeeAsLong: number,
    takerFeeAsLong: number,
    takerFeeTxId: string,
    payoutTxId: string,
    tradeAmountAsLong: number,
    tradePrice: number,
    tradingPeerNodeAddress: string,
    state: string,
    phase: string,
    tradePeriodState: string,
    isDepositPublished: boolean,
    isDepositConfirmed: boolean,
    isFiatSent: boolean,
    isFiatReceived: boolean,
    isPayoutPublished: boolean,
    isWithdrawn: boolean,
    contractAsJson: string,
    contract?: ContractInfo.AsObject,
    makerDepositTxId: string,
    takerDepositTxId: string,
  }
}

export class ContractInfo extends jspb.Message {
  getBuyerNodeAddress(): string;
  setBuyerNodeAddress(value: string): ContractInfo;

  getSellerNodeAddress(): string;
  setSellerNodeAddress(value: string): ContractInfo;

  getIsBuyerMakerAndSellerTaker(): boolean;
  setIsBuyerMakerAndSellerTaker(value: boolean): ContractInfo;

  getMakerAccountId(): string;
  setMakerAccountId(value: string): ContractInfo;

  getTakerAccountId(): string;
  setTakerAccountId(value: string): ContractInfo;

  getMakerPaymentAccountPayload(): PaymentAccountPayloadInfo | undefined;
  setMakerPaymentAccountPayload(value?: PaymentAccountPayloadInfo): ContractInfo;
  hasMakerPaymentAccountPayload(): boolean;
  clearMakerPaymentAccountPayload(): ContractInfo;

  getTakerPaymentAccountPayload(): PaymentAccountPayloadInfo | undefined;
  setTakerPaymentAccountPayload(value?: PaymentAccountPayloadInfo): ContractInfo;
  hasTakerPaymentAccountPayload(): boolean;
  clearTakerPaymentAccountPayload(): ContractInfo;

  getMakerPayoutAddressString(): string;
  setMakerPayoutAddressString(value: string): ContractInfo;

  getTakerPayoutAddressString(): string;
  setTakerPayoutAddressString(value: string): ContractInfo;

  getLockTime(): number;
  setLockTime(value: number): ContractInfo;

  getArbitratorNodeAddress(): string;
  setArbitratorNodeAddress(value: string): ContractInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContractInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ContractInfo): ContractInfo.AsObject;
  static serializeBinaryToWriter(message: ContractInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContractInfo;
  static deserializeBinaryFromReader(message: ContractInfo, reader: jspb.BinaryReader): ContractInfo;
}

export namespace ContractInfo {
  export type AsObject = {
    buyerNodeAddress: string,
    sellerNodeAddress: string,
    isBuyerMakerAndSellerTaker: boolean,
    makerAccountId: string,
    takerAccountId: string,
    makerPaymentAccountPayload?: PaymentAccountPayloadInfo.AsObject,
    takerPaymentAccountPayload?: PaymentAccountPayloadInfo.AsObject,
    makerPayoutAddressString: string,
    takerPayoutAddressString: string,
    lockTime: number,
    arbitratorNodeAddress: string,
  }
}

export class PaymentAccountPayloadInfo extends jspb.Message {
  getId(): string;
  setId(value: string): PaymentAccountPayloadInfo;

  getPaymentMethodId(): string;
  setPaymentMethodId(value: string): PaymentAccountPayloadInfo;

  getAddress(): string;
  setAddress(value: string): PaymentAccountPayloadInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaymentAccountPayloadInfo.AsObject;
  static toObject(includeInstance: boolean, msg: PaymentAccountPayloadInfo): PaymentAccountPayloadInfo.AsObject;
  static serializeBinaryToWriter(message: PaymentAccountPayloadInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaymentAccountPayloadInfo;
  static deserializeBinaryFromReader(message: PaymentAccountPayloadInfo, reader: jspb.BinaryReader): PaymentAccountPayloadInfo;
}

export namespace PaymentAccountPayloadInfo {
  export type AsObject = {
    id: string,
    paymentMethodId: string,
    address: string,
  }
}

export class TxFeeRateInfo extends jspb.Message {
  getUseCustomTxFeeRate(): boolean;
  setUseCustomTxFeeRate(value: boolean): TxFeeRateInfo;

  getCustomTxFeeRate(): number;
  setCustomTxFeeRate(value: number): TxFeeRateInfo;

  getFeeServiceRate(): number;
  setFeeServiceRate(value: number): TxFeeRateInfo;

  getLastFeeServiceRequestTs(): number;
  setLastFeeServiceRequestTs(value: number): TxFeeRateInfo;

  getMinFeeServiceRate(): number;
  setMinFeeServiceRate(value: number): TxFeeRateInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TxFeeRateInfo.AsObject;
  static toObject(includeInstance: boolean, msg: TxFeeRateInfo): TxFeeRateInfo.AsObject;
  static serializeBinaryToWriter(message: TxFeeRateInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TxFeeRateInfo;
  static deserializeBinaryFromReader(message: TxFeeRateInfo, reader: jspb.BinaryReader): TxFeeRateInfo;
}

export namespace TxFeeRateInfo {
  export type AsObject = {
    useCustomTxFeeRate: boolean,
    customTxFeeRate: number,
    feeServiceRate: number,
    lastFeeServiceRequestTs: number,
    minFeeServiceRate: number,
  }
}

export class TxInfo extends jspb.Message {
  getTxId(): string;
  setTxId(value: string): TxInfo;

  getInputSum(): number;
  setInputSum(value: number): TxInfo;

  getOutputSum(): number;
  setOutputSum(value: number): TxInfo;

  getFee(): number;
  setFee(value: number): TxInfo;

  getSize(): number;
  setSize(value: number): TxInfo;

  getIsPending(): boolean;
  setIsPending(value: boolean): TxInfo;

  getMemo(): string;
  setMemo(value: string): TxInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TxInfo.AsObject;
  static toObject(includeInstance: boolean, msg: TxInfo): TxInfo.AsObject;
  static serializeBinaryToWriter(message: TxInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TxInfo;
  static deserializeBinaryFromReader(message: TxInfo, reader: jspb.BinaryReader): TxInfo;
}

export namespace TxInfo {
  export type AsObject = {
    txId: string,
    inputSum: number,
    outputSum: number,
    fee: number,
    size: number,
    isPending: boolean,
    memo: string,
  }
}

export class GetBalancesRequest extends jspb.Message {
  getCurrencyCode(): string;
  setCurrencyCode(value: string): GetBalancesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBalancesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBalancesRequest): GetBalancesRequest.AsObject;
  static serializeBinaryToWriter(message: GetBalancesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBalancesRequest;
  static deserializeBinaryFromReader(message: GetBalancesRequest, reader: jspb.BinaryReader): GetBalancesRequest;
}

export namespace GetBalancesRequest {
  export type AsObject = {
    currencyCode: string,
  }
}

export class GetBalancesReply extends jspb.Message {
  getBalances(): BalancesInfo | undefined;
  setBalances(value?: BalancesInfo): GetBalancesReply;
  hasBalances(): boolean;
  clearBalances(): GetBalancesReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBalancesReply.AsObject;
  static toObject(includeInstance: boolean, msg: GetBalancesReply): GetBalancesReply.AsObject;
  static serializeBinaryToWriter(message: GetBalancesReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBalancesReply;
  static deserializeBinaryFromReader(message: GetBalancesReply, reader: jspb.BinaryReader): GetBalancesReply;
}

export namespace GetBalancesReply {
  export type AsObject = {
    balances?: BalancesInfo.AsObject,
  }
}

export class GetNewDepositSubaddressRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNewDepositSubaddressRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetNewDepositSubaddressRequest): GetNewDepositSubaddressRequest.AsObject;
  static serializeBinaryToWriter(message: GetNewDepositSubaddressRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNewDepositSubaddressRequest;
  static deserializeBinaryFromReader(message: GetNewDepositSubaddressRequest, reader: jspb.BinaryReader): GetNewDepositSubaddressRequest;
}

export namespace GetNewDepositSubaddressRequest {
  export type AsObject = {
  }
}

export class GetNewDepositSubaddressReply extends jspb.Message {
  getSubaddress(): string;
  setSubaddress(value: string): GetNewDepositSubaddressReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNewDepositSubaddressReply.AsObject;
  static toObject(includeInstance: boolean, msg: GetNewDepositSubaddressReply): GetNewDepositSubaddressReply.AsObject;
  static serializeBinaryToWriter(message: GetNewDepositSubaddressReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNewDepositSubaddressReply;
  static deserializeBinaryFromReader(message: GetNewDepositSubaddressReply, reader: jspb.BinaryReader): GetNewDepositSubaddressReply;
}

export namespace GetNewDepositSubaddressReply {
  export type AsObject = {
    subaddress: string,
  }
}

export class GetAddressBalanceRequest extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): GetAddressBalanceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAddressBalanceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAddressBalanceRequest): GetAddressBalanceRequest.AsObject;
  static serializeBinaryToWriter(message: GetAddressBalanceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAddressBalanceRequest;
  static deserializeBinaryFromReader(message: GetAddressBalanceRequest, reader: jspb.BinaryReader): GetAddressBalanceRequest;
}

export namespace GetAddressBalanceRequest {
  export type AsObject = {
    address: string,
  }
}

export class GetAddressBalanceReply extends jspb.Message {
  getAddressBalanceInfo(): AddressBalanceInfo | undefined;
  setAddressBalanceInfo(value?: AddressBalanceInfo): GetAddressBalanceReply;
  hasAddressBalanceInfo(): boolean;
  clearAddressBalanceInfo(): GetAddressBalanceReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAddressBalanceReply.AsObject;
  static toObject(includeInstance: boolean, msg: GetAddressBalanceReply): GetAddressBalanceReply.AsObject;
  static serializeBinaryToWriter(message: GetAddressBalanceReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAddressBalanceReply;
  static deserializeBinaryFromReader(message: GetAddressBalanceReply, reader: jspb.BinaryReader): GetAddressBalanceReply;
}

export namespace GetAddressBalanceReply {
  export type AsObject = {
    addressBalanceInfo?: AddressBalanceInfo.AsObject,
  }
}

export class SendBtcRequest extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): SendBtcRequest;

  getAmount(): string;
  setAmount(value: string): SendBtcRequest;

  getTxFeeRate(): string;
  setTxFeeRate(value: string): SendBtcRequest;

  getMemo(): string;
  setMemo(value: string): SendBtcRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendBtcRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SendBtcRequest): SendBtcRequest.AsObject;
  static serializeBinaryToWriter(message: SendBtcRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendBtcRequest;
  static deserializeBinaryFromReader(message: SendBtcRequest, reader: jspb.BinaryReader): SendBtcRequest;
}

export namespace SendBtcRequest {
  export type AsObject = {
    address: string,
    amount: string,
    txFeeRate: string,
    memo: string,
  }
}

export class SendBtcReply extends jspb.Message {
  getTxInfo(): TxInfo | undefined;
  setTxInfo(value?: TxInfo): SendBtcReply;
  hasTxInfo(): boolean;
  clearTxInfo(): SendBtcReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendBtcReply.AsObject;
  static toObject(includeInstance: boolean, msg: SendBtcReply): SendBtcReply.AsObject;
  static serializeBinaryToWriter(message: SendBtcReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendBtcReply;
  static deserializeBinaryFromReader(message: SendBtcReply, reader: jspb.BinaryReader): SendBtcReply;
}

export namespace SendBtcReply {
  export type AsObject = {
    txInfo?: TxInfo.AsObject,
  }
}

export class GetTxFeeRateRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTxFeeRateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTxFeeRateRequest): GetTxFeeRateRequest.AsObject;
  static serializeBinaryToWriter(message: GetTxFeeRateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTxFeeRateRequest;
  static deserializeBinaryFromReader(message: GetTxFeeRateRequest, reader: jspb.BinaryReader): GetTxFeeRateRequest;
}

export namespace GetTxFeeRateRequest {
  export type AsObject = {
  }
}

export class GetTxFeeRateReply extends jspb.Message {
  getTxFeeRateInfo(): TxFeeRateInfo | undefined;
  setTxFeeRateInfo(value?: TxFeeRateInfo): GetTxFeeRateReply;
  hasTxFeeRateInfo(): boolean;
  clearTxFeeRateInfo(): GetTxFeeRateReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTxFeeRateReply.AsObject;
  static toObject(includeInstance: boolean, msg: GetTxFeeRateReply): GetTxFeeRateReply.AsObject;
  static serializeBinaryToWriter(message: GetTxFeeRateReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTxFeeRateReply;
  static deserializeBinaryFromReader(message: GetTxFeeRateReply, reader: jspb.BinaryReader): GetTxFeeRateReply;
}

export namespace GetTxFeeRateReply {
  export type AsObject = {
    txFeeRateInfo?: TxFeeRateInfo.AsObject,
  }
}

export class SetTxFeeRatePreferenceRequest extends jspb.Message {
  getTxFeeRatePreference(): number;
  setTxFeeRatePreference(value: number): SetTxFeeRatePreferenceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetTxFeeRatePreferenceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetTxFeeRatePreferenceRequest): SetTxFeeRatePreferenceRequest.AsObject;
  static serializeBinaryToWriter(message: SetTxFeeRatePreferenceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetTxFeeRatePreferenceRequest;
  static deserializeBinaryFromReader(message: SetTxFeeRatePreferenceRequest, reader: jspb.BinaryReader): SetTxFeeRatePreferenceRequest;
}

export namespace SetTxFeeRatePreferenceRequest {
  export type AsObject = {
    txFeeRatePreference: number,
  }
}

export class SetTxFeeRatePreferenceReply extends jspb.Message {
  getTxFeeRateInfo(): TxFeeRateInfo | undefined;
  setTxFeeRateInfo(value?: TxFeeRateInfo): SetTxFeeRatePreferenceReply;
  hasTxFeeRateInfo(): boolean;
  clearTxFeeRateInfo(): SetTxFeeRatePreferenceReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetTxFeeRatePreferenceReply.AsObject;
  static toObject(includeInstance: boolean, msg: SetTxFeeRatePreferenceReply): SetTxFeeRatePreferenceReply.AsObject;
  static serializeBinaryToWriter(message: SetTxFeeRatePreferenceReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetTxFeeRatePreferenceReply;
  static deserializeBinaryFromReader(message: SetTxFeeRatePreferenceReply, reader: jspb.BinaryReader): SetTxFeeRatePreferenceReply;
}

export namespace SetTxFeeRatePreferenceReply {
  export type AsObject = {
    txFeeRateInfo?: TxFeeRateInfo.AsObject,
  }
}

export class UnsetTxFeeRatePreferenceRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnsetTxFeeRatePreferenceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UnsetTxFeeRatePreferenceRequest): UnsetTxFeeRatePreferenceRequest.AsObject;
  static serializeBinaryToWriter(message: UnsetTxFeeRatePreferenceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnsetTxFeeRatePreferenceRequest;
  static deserializeBinaryFromReader(message: UnsetTxFeeRatePreferenceRequest, reader: jspb.BinaryReader): UnsetTxFeeRatePreferenceRequest;
}

export namespace UnsetTxFeeRatePreferenceRequest {
  export type AsObject = {
  }
}

export class UnsetTxFeeRatePreferenceReply extends jspb.Message {
  getTxFeeRateInfo(): TxFeeRateInfo | undefined;
  setTxFeeRateInfo(value?: TxFeeRateInfo): UnsetTxFeeRatePreferenceReply;
  hasTxFeeRateInfo(): boolean;
  clearTxFeeRateInfo(): UnsetTxFeeRatePreferenceReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnsetTxFeeRatePreferenceReply.AsObject;
  static toObject(includeInstance: boolean, msg: UnsetTxFeeRatePreferenceReply): UnsetTxFeeRatePreferenceReply.AsObject;
  static serializeBinaryToWriter(message: UnsetTxFeeRatePreferenceReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnsetTxFeeRatePreferenceReply;
  static deserializeBinaryFromReader(message: UnsetTxFeeRatePreferenceReply, reader: jspb.BinaryReader): UnsetTxFeeRatePreferenceReply;
}

export namespace UnsetTxFeeRatePreferenceReply {
  export type AsObject = {
    txFeeRateInfo?: TxFeeRateInfo.AsObject,
  }
}

export class GetTransactionRequest extends jspb.Message {
  getTxId(): string;
  setTxId(value: string): GetTransactionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTransactionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTransactionRequest): GetTransactionRequest.AsObject;
  static serializeBinaryToWriter(message: GetTransactionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTransactionRequest;
  static deserializeBinaryFromReader(message: GetTransactionRequest, reader: jspb.BinaryReader): GetTransactionRequest;
}

export namespace GetTransactionRequest {
  export type AsObject = {
    txId: string,
  }
}

export class GetTransactionReply extends jspb.Message {
  getTxInfo(): TxInfo | undefined;
  setTxInfo(value?: TxInfo): GetTransactionReply;
  hasTxInfo(): boolean;
  clearTxInfo(): GetTransactionReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTransactionReply.AsObject;
  static toObject(includeInstance: boolean, msg: GetTransactionReply): GetTransactionReply.AsObject;
  static serializeBinaryToWriter(message: GetTransactionReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTransactionReply;
  static deserializeBinaryFromReader(message: GetTransactionReply, reader: jspb.BinaryReader): GetTransactionReply;
}

export namespace GetTransactionReply {
  export type AsObject = {
    txInfo?: TxInfo.AsObject,
  }
}

export class GetFundingAddressesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFundingAddressesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetFundingAddressesRequest): GetFundingAddressesRequest.AsObject;
  static serializeBinaryToWriter(message: GetFundingAddressesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFundingAddressesRequest;
  static deserializeBinaryFromReader(message: GetFundingAddressesRequest, reader: jspb.BinaryReader): GetFundingAddressesRequest;
}

export namespace GetFundingAddressesRequest {
  export type AsObject = {
  }
}

export class GetFundingAddressesReply extends jspb.Message {
  getAddressBalanceInfoList(): Array<AddressBalanceInfo>;
  setAddressBalanceInfoList(value: Array<AddressBalanceInfo>): GetFundingAddressesReply;
  clearAddressBalanceInfoList(): GetFundingAddressesReply;
  addAddressBalanceInfo(value?: AddressBalanceInfo, index?: number): AddressBalanceInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFundingAddressesReply.AsObject;
  static toObject(includeInstance: boolean, msg: GetFundingAddressesReply): GetFundingAddressesReply.AsObject;
  static serializeBinaryToWriter(message: GetFundingAddressesReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFundingAddressesReply;
  static deserializeBinaryFromReader(message: GetFundingAddressesReply, reader: jspb.BinaryReader): GetFundingAddressesReply;
}

export namespace GetFundingAddressesReply {
  export type AsObject = {
    addressBalanceInfoList: Array<AddressBalanceInfo.AsObject>,
  }
}

export class SetWalletPasswordRequest extends jspb.Message {
  getPassword(): string;
  setPassword(value: string): SetWalletPasswordRequest;

  getNewPassword(): string;
  setNewPassword(value: string): SetWalletPasswordRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetWalletPasswordRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetWalletPasswordRequest): SetWalletPasswordRequest.AsObject;
  static serializeBinaryToWriter(message: SetWalletPasswordRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetWalletPasswordRequest;
  static deserializeBinaryFromReader(message: SetWalletPasswordRequest, reader: jspb.BinaryReader): SetWalletPasswordRequest;
}

export namespace SetWalletPasswordRequest {
  export type AsObject = {
    password: string,
    newPassword: string,
  }
}

export class SetWalletPasswordReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetWalletPasswordReply.AsObject;
  static toObject(includeInstance: boolean, msg: SetWalletPasswordReply): SetWalletPasswordReply.AsObject;
  static serializeBinaryToWriter(message: SetWalletPasswordReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetWalletPasswordReply;
  static deserializeBinaryFromReader(message: SetWalletPasswordReply, reader: jspb.BinaryReader): SetWalletPasswordReply;
}

export namespace SetWalletPasswordReply {
  export type AsObject = {
  }
}

export class RemoveWalletPasswordRequest extends jspb.Message {
  getPassword(): string;
  setPassword(value: string): RemoveWalletPasswordRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveWalletPasswordRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveWalletPasswordRequest): RemoveWalletPasswordRequest.AsObject;
  static serializeBinaryToWriter(message: RemoveWalletPasswordRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveWalletPasswordRequest;
  static deserializeBinaryFromReader(message: RemoveWalletPasswordRequest, reader: jspb.BinaryReader): RemoveWalletPasswordRequest;
}

export namespace RemoveWalletPasswordRequest {
  export type AsObject = {
    password: string,
  }
}

export class RemoveWalletPasswordReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveWalletPasswordReply.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveWalletPasswordReply): RemoveWalletPasswordReply.AsObject;
  static serializeBinaryToWriter(message: RemoveWalletPasswordReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveWalletPasswordReply;
  static deserializeBinaryFromReader(message: RemoveWalletPasswordReply, reader: jspb.BinaryReader): RemoveWalletPasswordReply;
}

export namespace RemoveWalletPasswordReply {
  export type AsObject = {
  }
}

export class LockWalletRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LockWalletRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LockWalletRequest): LockWalletRequest.AsObject;
  static serializeBinaryToWriter(message: LockWalletRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LockWalletRequest;
  static deserializeBinaryFromReader(message: LockWalletRequest, reader: jspb.BinaryReader): LockWalletRequest;
}

export namespace LockWalletRequest {
  export type AsObject = {
  }
}

export class LockWalletReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LockWalletReply.AsObject;
  static toObject(includeInstance: boolean, msg: LockWalletReply): LockWalletReply.AsObject;
  static serializeBinaryToWriter(message: LockWalletReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LockWalletReply;
  static deserializeBinaryFromReader(message: LockWalletReply, reader: jspb.BinaryReader): LockWalletReply;
}

export namespace LockWalletReply {
  export type AsObject = {
  }
}

export class UnlockWalletRequest extends jspb.Message {
  getPassword(): string;
  setPassword(value: string): UnlockWalletRequest;

  getTimeout(): number;
  setTimeout(value: number): UnlockWalletRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnlockWalletRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UnlockWalletRequest): UnlockWalletRequest.AsObject;
  static serializeBinaryToWriter(message: UnlockWalletRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnlockWalletRequest;
  static deserializeBinaryFromReader(message: UnlockWalletRequest, reader: jspb.BinaryReader): UnlockWalletRequest;
}

export namespace UnlockWalletRequest {
  export type AsObject = {
    password: string,
    timeout: number,
  }
}

export class UnlockWalletReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnlockWalletReply.AsObject;
  static toObject(includeInstance: boolean, msg: UnlockWalletReply): UnlockWalletReply.AsObject;
  static serializeBinaryToWriter(message: UnlockWalletReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnlockWalletReply;
  static deserializeBinaryFromReader(message: UnlockWalletReply, reader: jspb.BinaryReader): UnlockWalletReply;
}

export namespace UnlockWalletReply {
  export type AsObject = {
  }
}

export class BalancesInfo extends jspb.Message {
  getBtc(): BtcBalanceInfo | undefined;
  setBtc(value?: BtcBalanceInfo): BalancesInfo;
  hasBtc(): boolean;
  clearBtc(): BalancesInfo;

  getXmr(): XmrBalanceInfo | undefined;
  setXmr(value?: XmrBalanceInfo): BalancesInfo;
  hasXmr(): boolean;
  clearXmr(): BalancesInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BalancesInfo.AsObject;
  static toObject(includeInstance: boolean, msg: BalancesInfo): BalancesInfo.AsObject;
  static serializeBinaryToWriter(message: BalancesInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BalancesInfo;
  static deserializeBinaryFromReader(message: BalancesInfo, reader: jspb.BinaryReader): BalancesInfo;
}

export namespace BalancesInfo {
  export type AsObject = {
    btc?: BtcBalanceInfo.AsObject,
    xmr?: XmrBalanceInfo.AsObject,
  }
}

export class BtcBalanceInfo extends jspb.Message {
  getAvailableBalance(): number;
  setAvailableBalance(value: number): BtcBalanceInfo;

  getReservedBalance(): number;
  setReservedBalance(value: number): BtcBalanceInfo;

  getTotalAvailableBalance(): number;
  setTotalAvailableBalance(value: number): BtcBalanceInfo;

  getLockedBalance(): number;
  setLockedBalance(value: number): BtcBalanceInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BtcBalanceInfo.AsObject;
  static toObject(includeInstance: boolean, msg: BtcBalanceInfo): BtcBalanceInfo.AsObject;
  static serializeBinaryToWriter(message: BtcBalanceInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BtcBalanceInfo;
  static deserializeBinaryFromReader(message: BtcBalanceInfo, reader: jspb.BinaryReader): BtcBalanceInfo;
}

export namespace BtcBalanceInfo {
  export type AsObject = {
    availableBalance: number,
    reservedBalance: number,
    totalAvailableBalance: number,
    lockedBalance: number,
  }
}

export class XmrBalanceInfo extends jspb.Message {
  getUnlockedBalance(): string;
  setUnlockedBalance(value: string): XmrBalanceInfo;

  getLockedBalance(): string;
  setLockedBalance(value: string): XmrBalanceInfo;

  getReservedOfferBalance(): string;
  setReservedOfferBalance(value: string): XmrBalanceInfo;

  getReservedTradeBalance(): string;
  setReservedTradeBalance(value: string): XmrBalanceInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): XmrBalanceInfo.AsObject;
  static toObject(includeInstance: boolean, msg: XmrBalanceInfo): XmrBalanceInfo.AsObject;
  static serializeBinaryToWriter(message: XmrBalanceInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): XmrBalanceInfo;
  static deserializeBinaryFromReader(message: XmrBalanceInfo, reader: jspb.BinaryReader): XmrBalanceInfo;
}

export namespace XmrBalanceInfo {
  export type AsObject = {
    unlockedBalance: string,
    lockedBalance: string,
    reservedOfferBalance: string,
    reservedTradeBalance: string,
  }
}

export class AddressBalanceInfo extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): AddressBalanceInfo;

  getBalance(): number;
  setBalance(value: number): AddressBalanceInfo;

  getNumConfirmations(): number;
  setNumConfirmations(value: number): AddressBalanceInfo;

  getIsAddressUnused(): boolean;
  setIsAddressUnused(value: boolean): AddressBalanceInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddressBalanceInfo.AsObject;
  static toObject(includeInstance: boolean, msg: AddressBalanceInfo): AddressBalanceInfo.AsObject;
  static serializeBinaryToWriter(message: AddressBalanceInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddressBalanceInfo;
  static deserializeBinaryFromReader(message: AddressBalanceInfo, reader: jspb.BinaryReader): AddressBalanceInfo;
}

export namespace AddressBalanceInfo {
  export type AsObject = {
    address: string,
    balance: number,
    numConfirmations: number,
    isAddressUnused: boolean,
  }
}

export class GetVersionRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVersionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetVersionRequest): GetVersionRequest.AsObject;
  static serializeBinaryToWriter(message: GetVersionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVersionRequest;
  static deserializeBinaryFromReader(message: GetVersionRequest, reader: jspb.BinaryReader): GetVersionRequest;
}

export namespace GetVersionRequest {
  export type AsObject = {
  }
}

export class GetVersionReply extends jspb.Message {
  getVersion(): string;
  setVersion(value: string): GetVersionReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVersionReply.AsObject;
  static toObject(includeInstance: boolean, msg: GetVersionReply): GetVersionReply.AsObject;
  static serializeBinaryToWriter(message: GetVersionReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVersionReply;
  static deserializeBinaryFromReader(message: GetVersionReply, reader: jspb.BinaryReader): GetVersionReply;
}

export namespace GetVersionReply {
  export type AsObject = {
    version: string,
  }
}

