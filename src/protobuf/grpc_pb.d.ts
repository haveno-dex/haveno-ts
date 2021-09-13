import * as jspb from 'google-protobuf'

import * as pb_pb from './pb_pb';


export class RegisterDisputeAgentRequest extends jspb.Message {
  getDisputeagenttype(): string;
  setDisputeagenttype(value: string): RegisterDisputeAgentRequest;

  getRegistrationkey(): string;
  setRegistrationkey(value: string): RegisterDisputeAgentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterDisputeAgentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterDisputeAgentRequest): RegisterDisputeAgentRequest.AsObject;
  static serializeBinaryToWriter(message: RegisterDisputeAgentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterDisputeAgentRequest;
  static deserializeBinaryFromReader(message: RegisterDisputeAgentRequest, reader: jspb.BinaryReader): RegisterDisputeAgentRequest;
}

export namespace RegisterDisputeAgentRequest {
  export type AsObject = {
    disputeagenttype: string,
    registrationkey: string,
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

export class GetMethodHelpRequest extends jspb.Message {
  getMethodname(): string;
  setMethodname(value: string): GetMethodHelpRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMethodHelpRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetMethodHelpRequest): GetMethodHelpRequest.AsObject;
  static serializeBinaryToWriter(message: GetMethodHelpRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMethodHelpRequest;
  static deserializeBinaryFromReader(message: GetMethodHelpRequest, reader: jspb.BinaryReader): GetMethodHelpRequest;
}

export namespace GetMethodHelpRequest {
  export type AsObject = {
    methodname: string,
  }
}

export class GetMethodHelpReply extends jspb.Message {
  getMethodhelp(): string;
  setMethodhelp(value: string): GetMethodHelpReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMethodHelpReply.AsObject;
  static toObject(includeInstance: boolean, msg: GetMethodHelpReply): GetMethodHelpReply.AsObject;
  static serializeBinaryToWriter(message: GetMethodHelpReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMethodHelpReply;
  static deserializeBinaryFromReader(message: GetMethodHelpReply, reader: jspb.BinaryReader): GetMethodHelpReply;
}

export namespace GetMethodHelpReply {
  export type AsObject = {
    methodhelp: string,
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

  getCurrencycode(): string;
  setCurrencycode(value: string): GetOffersRequest;

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
    currencycode: string,
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

  getCurrencycode(): string;
  setCurrencycode(value: string): GetMyOffersRequest;

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
    currencycode: string,
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
  getCurrencycode(): string;
  setCurrencycode(value: string): CreateOfferRequest;

  getDirection(): string;
  setDirection(value: string): CreateOfferRequest;

  getPrice(): string;
  setPrice(value: string): CreateOfferRequest;

  getUsemarketbasedprice(): boolean;
  setUsemarketbasedprice(value: boolean): CreateOfferRequest;

  getMarketpricemargin(): number;
  setMarketpricemargin(value: number): CreateOfferRequest;

  getAmount(): string;
  setAmount(value: string): CreateOfferRequest;

  getMinamount(): string;
  setMinamount(value: string): CreateOfferRequest;

  getBuyersecuritydeposit(): number;
  setBuyersecuritydeposit(value: number): CreateOfferRequest;

  getTriggerprice(): string;
  setTriggerprice(value: string): CreateOfferRequest;

  getPaymentaccountid(): string;
  setPaymentaccountid(value: string): CreateOfferRequest;

  getMakerfeecurrencycode(): string;
  setMakerfeecurrencycode(value: string): CreateOfferRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateOfferRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateOfferRequest): CreateOfferRequest.AsObject;
  static serializeBinaryToWriter(message: CreateOfferRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateOfferRequest;
  static deserializeBinaryFromReader(message: CreateOfferRequest, reader: jspb.BinaryReader): CreateOfferRequest;
}

export namespace CreateOfferRequest {
  export type AsObject = {
    currencycode: string,
    direction: string,
    price: string,
    usemarketbasedprice: boolean,
    marketpricemargin: number,
    amount: string,
    minamount: string,
    buyersecuritydeposit: number,
    triggerprice: string,
    paymentaccountid: string,
    makerfeecurrencycode: string,
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

  getUsemarketbasedprice(): boolean;
  setUsemarketbasedprice(value: boolean): OfferInfo;

  getMarketpricemargin(): number;
  setMarketpricemargin(value: number): OfferInfo;

  getAmount(): number;
  setAmount(value: number): OfferInfo;

  getMinamount(): number;
  setMinamount(value: number): OfferInfo;

  getVolume(): number;
  setVolume(value: number): OfferInfo;

  getMinvolume(): number;
  setMinvolume(value: number): OfferInfo;

  getBuyersecuritydeposit(): number;
  setBuyersecuritydeposit(value: number): OfferInfo;

  getTriggerprice(): number;
  setTriggerprice(value: number): OfferInfo;

  getIscurrencyformakerfeebtc(): boolean;
  setIscurrencyformakerfeebtc(value: boolean): OfferInfo;

  getPaymentaccountid(): string;
  setPaymentaccountid(value: string): OfferInfo;

  getPaymentmethodid(): string;
  setPaymentmethodid(value: string): OfferInfo;

  getPaymentmethodshortname(): string;
  setPaymentmethodshortname(value: string): OfferInfo;

  getBasecurrencycode(): string;
  setBasecurrencycode(value: string): OfferInfo;

  getCountercurrencycode(): string;
  setCountercurrencycode(value: string): OfferInfo;

  getDate(): number;
  setDate(value: number): OfferInfo;

  getState(): string;
  setState(value: string): OfferInfo;

  getSellersecuritydeposit(): number;
  setSellersecuritydeposit(value: number): OfferInfo;

  getOfferfeepaymenttxid(): string;
  setOfferfeepaymenttxid(value: string): OfferInfo;

  getTxfee(): number;
  setTxfee(value: number): OfferInfo;

  getMakerfee(): number;
  setMakerfee(value: number): OfferInfo;

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
    usemarketbasedprice: boolean,
    marketpricemargin: number,
    amount: number,
    minamount: number,
    volume: number,
    minvolume: number,
    buyersecuritydeposit: number,
    triggerprice: number,
    iscurrencyformakerfeebtc: boolean,
    paymentaccountid: string,
    paymentmethodid: string,
    paymentmethodshortname: string,
    basecurrencycode: string,
    countercurrencycode: string,
    date: number,
    state: string,
    sellersecuritydeposit: number,
    offerfeepaymenttxid: string,
    txfee: number,
    makerfee: number,
  }
}

export class AvailabilityResultWithDescription extends jspb.Message {
  getAvailabilityresult(): pb_pb.AvailabilityResult;
  setAvailabilityresult(value: pb_pb.AvailabilityResult): AvailabilityResultWithDescription;

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
    availabilityresult: pb_pb.AvailabilityResult,
    description: string,
  }
}

export class CreatePaymentAccountRequest extends jspb.Message {
  getPaymentaccountform(): string;
  setPaymentaccountform(value: string): CreatePaymentAccountRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePaymentAccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePaymentAccountRequest): CreatePaymentAccountRequest.AsObject;
  static serializeBinaryToWriter(message: CreatePaymentAccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePaymentAccountRequest;
  static deserializeBinaryFromReader(message: CreatePaymentAccountRequest, reader: jspb.BinaryReader): CreatePaymentAccountRequest;
}

export namespace CreatePaymentAccountRequest {
  export type AsObject = {
    paymentaccountform: string,
  }
}

export class CreatePaymentAccountReply extends jspb.Message {
  getPaymentaccount(): pb_pb.PaymentAccount | undefined;
  setPaymentaccount(value?: pb_pb.PaymentAccount): CreatePaymentAccountReply;
  hasPaymentaccount(): boolean;
  clearPaymentaccount(): CreatePaymentAccountReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePaymentAccountReply.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePaymentAccountReply): CreatePaymentAccountReply.AsObject;
  static serializeBinaryToWriter(message: CreatePaymentAccountReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePaymentAccountReply;
  static deserializeBinaryFromReader(message: CreatePaymentAccountReply, reader: jspb.BinaryReader): CreatePaymentAccountReply;
}

export namespace CreatePaymentAccountReply {
  export type AsObject = {
    paymentaccount?: pb_pb.PaymentAccount.AsObject,
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
  getPaymentaccountsList(): Array<pb_pb.PaymentAccount>;
  setPaymentaccountsList(value: Array<pb_pb.PaymentAccount>): GetPaymentAccountsReply;
  clearPaymentaccountsList(): GetPaymentAccountsReply;
  addPaymentaccounts(value?: pb_pb.PaymentAccount, index?: number): pb_pb.PaymentAccount;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPaymentAccountsReply.AsObject;
  static toObject(includeInstance: boolean, msg: GetPaymentAccountsReply): GetPaymentAccountsReply.AsObject;
  static serializeBinaryToWriter(message: GetPaymentAccountsReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPaymentAccountsReply;
  static deserializeBinaryFromReader(message: GetPaymentAccountsReply, reader: jspb.BinaryReader): GetPaymentAccountsReply;
}

export namespace GetPaymentAccountsReply {
  export type AsObject = {
    paymentaccountsList: Array<pb_pb.PaymentAccount.AsObject>,
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
  getPaymentmethodsList(): Array<pb_pb.PaymentMethod>;
  setPaymentmethodsList(value: Array<pb_pb.PaymentMethod>): GetPaymentMethodsReply;
  clearPaymentmethodsList(): GetPaymentMethodsReply;
  addPaymentmethods(value?: pb_pb.PaymentMethod, index?: number): pb_pb.PaymentMethod;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPaymentMethodsReply.AsObject;
  static toObject(includeInstance: boolean, msg: GetPaymentMethodsReply): GetPaymentMethodsReply.AsObject;
  static serializeBinaryToWriter(message: GetPaymentMethodsReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPaymentMethodsReply;
  static deserializeBinaryFromReader(message: GetPaymentMethodsReply, reader: jspb.BinaryReader): GetPaymentMethodsReply;
}

export namespace GetPaymentMethodsReply {
  export type AsObject = {
    paymentmethodsList: Array<pb_pb.PaymentMethod.AsObject>,
  }
}

export class GetPaymentAccountFormRequest extends jspb.Message {
  getPaymentmethodid(): string;
  setPaymentmethodid(value: string): GetPaymentAccountFormRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPaymentAccountFormRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPaymentAccountFormRequest): GetPaymentAccountFormRequest.AsObject;
  static serializeBinaryToWriter(message: GetPaymentAccountFormRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPaymentAccountFormRequest;
  static deserializeBinaryFromReader(message: GetPaymentAccountFormRequest, reader: jspb.BinaryReader): GetPaymentAccountFormRequest;
}

export namespace GetPaymentAccountFormRequest {
  export type AsObject = {
    paymentmethodid: string,
  }
}

export class GetPaymentAccountFormReply extends jspb.Message {
  getPaymentaccountformjson(): string;
  setPaymentaccountformjson(value: string): GetPaymentAccountFormReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPaymentAccountFormReply.AsObject;
  static toObject(includeInstance: boolean, msg: GetPaymentAccountFormReply): GetPaymentAccountFormReply.AsObject;
  static serializeBinaryToWriter(message: GetPaymentAccountFormReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPaymentAccountFormReply;
  static deserializeBinaryFromReader(message: GetPaymentAccountFormReply, reader: jspb.BinaryReader): GetPaymentAccountFormReply;
}

export namespace GetPaymentAccountFormReply {
  export type AsObject = {
    paymentaccountformjson: string,
  }
}

export class CreateCryptoCurrencyPaymentAccountRequest extends jspb.Message {
  getAccountname(): string;
  setAccountname(value: string): CreateCryptoCurrencyPaymentAccountRequest;

  getCurrencycode(): string;
  setCurrencycode(value: string): CreateCryptoCurrencyPaymentAccountRequest;

  getAddress(): string;
  setAddress(value: string): CreateCryptoCurrencyPaymentAccountRequest;

  getTradeinstant(): boolean;
  setTradeinstant(value: boolean): CreateCryptoCurrencyPaymentAccountRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCryptoCurrencyPaymentAccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCryptoCurrencyPaymentAccountRequest): CreateCryptoCurrencyPaymentAccountRequest.AsObject;
  static serializeBinaryToWriter(message: CreateCryptoCurrencyPaymentAccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCryptoCurrencyPaymentAccountRequest;
  static deserializeBinaryFromReader(message: CreateCryptoCurrencyPaymentAccountRequest, reader: jspb.BinaryReader): CreateCryptoCurrencyPaymentAccountRequest;
}

export namespace CreateCryptoCurrencyPaymentAccountRequest {
  export type AsObject = {
    accountname: string,
    currencycode: string,
    address: string,
    tradeinstant: boolean,
  }
}

export class CreateCryptoCurrencyPaymentAccountReply extends jspb.Message {
  getPaymentaccount(): pb_pb.PaymentAccount | undefined;
  setPaymentaccount(value?: pb_pb.PaymentAccount): CreateCryptoCurrencyPaymentAccountReply;
  hasPaymentaccount(): boolean;
  clearPaymentaccount(): CreateCryptoCurrencyPaymentAccountReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCryptoCurrencyPaymentAccountReply.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCryptoCurrencyPaymentAccountReply): CreateCryptoCurrencyPaymentAccountReply.AsObject;
  static serializeBinaryToWriter(message: CreateCryptoCurrencyPaymentAccountReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCryptoCurrencyPaymentAccountReply;
  static deserializeBinaryFromReader(message: CreateCryptoCurrencyPaymentAccountReply, reader: jspb.BinaryReader): CreateCryptoCurrencyPaymentAccountReply;
}

export namespace CreateCryptoCurrencyPaymentAccountReply {
  export type AsObject = {
    paymentaccount?: pb_pb.PaymentAccount.AsObject,
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
  getPaymentmethodsList(): Array<pb_pb.PaymentMethod>;
  setPaymentmethodsList(value: Array<pb_pb.PaymentMethod>): GetCryptoCurrencyPaymentMethodsReply;
  clearPaymentmethodsList(): GetCryptoCurrencyPaymentMethodsReply;
  addPaymentmethods(value?: pb_pb.PaymentMethod, index?: number): pb_pb.PaymentMethod;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCryptoCurrencyPaymentMethodsReply.AsObject;
  static toObject(includeInstance: boolean, msg: GetCryptoCurrencyPaymentMethodsReply): GetCryptoCurrencyPaymentMethodsReply.AsObject;
  static serializeBinaryToWriter(message: GetCryptoCurrencyPaymentMethodsReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCryptoCurrencyPaymentMethodsReply;
  static deserializeBinaryFromReader(message: GetCryptoCurrencyPaymentMethodsReply, reader: jspb.BinaryReader): GetCryptoCurrencyPaymentMethodsReply;
}

export namespace GetCryptoCurrencyPaymentMethodsReply {
  export type AsObject = {
    paymentmethodsList: Array<pb_pb.PaymentMethod.AsObject>,
  }
}

export class MarketPriceRequest extends jspb.Message {
  getCurrencycode(): string;
  setCurrencycode(value: string): MarketPriceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarketPriceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MarketPriceRequest): MarketPriceRequest.AsObject;
  static serializeBinaryToWriter(message: MarketPriceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarketPriceRequest;
  static deserializeBinaryFromReader(message: MarketPriceRequest, reader: jspb.BinaryReader): MarketPriceRequest;
}

export namespace MarketPriceRequest {
  export type AsObject = {
    currencycode: string,
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
  getTradestatisticsList(): Array<pb_pb.TradeStatistics3>;
  setTradestatisticsList(value: Array<pb_pb.TradeStatistics3>): GetTradeStatisticsReply;
  clearTradestatisticsList(): GetTradeStatisticsReply;
  addTradestatistics(value?: pb_pb.TradeStatistics3, index?: number): pb_pb.TradeStatistics3;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTradeStatisticsReply.AsObject;
  static toObject(includeInstance: boolean, msg: GetTradeStatisticsReply): GetTradeStatisticsReply.AsObject;
  static serializeBinaryToWriter(message: GetTradeStatisticsReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTradeStatisticsReply;
  static deserializeBinaryFromReader(message: GetTradeStatisticsReply, reader: jspb.BinaryReader): GetTradeStatisticsReply;
}

export namespace GetTradeStatisticsReply {
  export type AsObject = {
    tradestatisticsList: Array<pb_pb.TradeStatistics3.AsObject>,
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
  getOfferid(): string;
  setOfferid(value: string): TakeOfferRequest;

  getPaymentaccountid(): string;
  setPaymentaccountid(value: string): TakeOfferRequest;

  getTakerfeecurrencycode(): string;
  setTakerfeecurrencycode(value: string): TakeOfferRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TakeOfferRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TakeOfferRequest): TakeOfferRequest.AsObject;
  static serializeBinaryToWriter(message: TakeOfferRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TakeOfferRequest;
  static deserializeBinaryFromReader(message: TakeOfferRequest, reader: jspb.BinaryReader): TakeOfferRequest;
}

export namespace TakeOfferRequest {
  export type AsObject = {
    offerid: string,
    paymentaccountid: string,
    takerfeecurrencycode: string,
  }
}

export class TakeOfferReply extends jspb.Message {
  getTrade(): TradeInfo | undefined;
  setTrade(value?: TradeInfo): TakeOfferReply;
  hasTrade(): boolean;
  clearTrade(): TakeOfferReply;

  getFailurereason(): AvailabilityResultWithDescription | undefined;
  setFailurereason(value?: AvailabilityResultWithDescription): TakeOfferReply;
  hasFailurereason(): boolean;
  clearFailurereason(): TakeOfferReply;

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
    failurereason?: AvailabilityResultWithDescription.AsObject,
  }
}

export class ConfirmPaymentStartedRequest extends jspb.Message {
  getTradeid(): string;
  setTradeid(value: string): ConfirmPaymentStartedRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfirmPaymentStartedRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ConfirmPaymentStartedRequest): ConfirmPaymentStartedRequest.AsObject;
  static serializeBinaryToWriter(message: ConfirmPaymentStartedRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfirmPaymentStartedRequest;
  static deserializeBinaryFromReader(message: ConfirmPaymentStartedRequest, reader: jspb.BinaryReader): ConfirmPaymentStartedRequest;
}

export namespace ConfirmPaymentStartedRequest {
  export type AsObject = {
    tradeid: string,
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
  getTradeid(): string;
  setTradeid(value: string): ConfirmPaymentReceivedRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfirmPaymentReceivedRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ConfirmPaymentReceivedRequest): ConfirmPaymentReceivedRequest.AsObject;
  static serializeBinaryToWriter(message: ConfirmPaymentReceivedRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfirmPaymentReceivedRequest;
  static deserializeBinaryFromReader(message: ConfirmPaymentReceivedRequest, reader: jspb.BinaryReader): ConfirmPaymentReceivedRequest;
}

export namespace ConfirmPaymentReceivedRequest {
  export type AsObject = {
    tradeid: string,
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
  getTradeid(): string;
  setTradeid(value: string): GetTradeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTradeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTradeRequest): GetTradeRequest.AsObject;
  static serializeBinaryToWriter(message: GetTradeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTradeRequest;
  static deserializeBinaryFromReader(message: GetTradeRequest, reader: jspb.BinaryReader): GetTradeRequest;
}

export namespace GetTradeRequest {
  export type AsObject = {
    tradeid: string,
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
  getTradeid(): string;
  setTradeid(value: string): KeepFundsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KeepFundsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: KeepFundsRequest): KeepFundsRequest.AsObject;
  static serializeBinaryToWriter(message: KeepFundsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KeepFundsRequest;
  static deserializeBinaryFromReader(message: KeepFundsRequest, reader: jspb.BinaryReader): KeepFundsRequest;
}

export namespace KeepFundsRequest {
  export type AsObject = {
    tradeid: string,
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
  getTradeid(): string;
  setTradeid(value: string): WithdrawFundsRequest;

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
    tradeid: string,
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

  getTradeid(): string;
  setTradeid(value: string): TradeInfo;

  getShortid(): string;
  setShortid(value: string): TradeInfo;

  getDate(): number;
  setDate(value: number): TradeInfo;

  getRole(): string;
  setRole(value: string): TradeInfo;

  getTxfeeaslong(): number;
  setTxfeeaslong(value: number): TradeInfo;

  getTakerfeeaslong(): number;
  setTakerfeeaslong(value: number): TradeInfo;

  getTakerfeetxid(): string;
  setTakerfeetxid(value: string): TradeInfo;

  getPayouttxid(): string;
  setPayouttxid(value: string): TradeInfo;

  getTradeamountaslong(): number;
  setTradeamountaslong(value: number): TradeInfo;

  getTradeprice(): number;
  setTradeprice(value: number): TradeInfo;

  getTradingpeernodeaddress(): string;
  setTradingpeernodeaddress(value: string): TradeInfo;

  getState(): string;
  setState(value: string): TradeInfo;

  getPhase(): string;
  setPhase(value: string): TradeInfo;

  getTradeperiodstate(): string;
  setTradeperiodstate(value: string): TradeInfo;

  getIsdepositpublished(): boolean;
  setIsdepositpublished(value: boolean): TradeInfo;

  getIsdepositconfirmed(): boolean;
  setIsdepositconfirmed(value: boolean): TradeInfo;

  getIsfiatsent(): boolean;
  setIsfiatsent(value: boolean): TradeInfo;

  getIsfiatreceived(): boolean;
  setIsfiatreceived(value: boolean): TradeInfo;

  getIspayoutpublished(): boolean;
  setIspayoutpublished(value: boolean): TradeInfo;

  getIswithdrawn(): boolean;
  setIswithdrawn(value: boolean): TradeInfo;

  getContractasjson(): string;
  setContractasjson(value: string): TradeInfo;

  getContract(): ContractInfo | undefined;
  setContract(value?: ContractInfo): TradeInfo;
  hasContract(): boolean;
  clearContract(): TradeInfo;

  getMakerdeposittxid(): string;
  setMakerdeposittxid(value: string): TradeInfo;

  getTakerdeposittxid(): string;
  setTakerdeposittxid(value: string): TradeInfo;

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
    tradeid: string,
    shortid: string,
    date: number,
    role: string,
    txfeeaslong: number,
    takerfeeaslong: number,
    takerfeetxid: string,
    payouttxid: string,
    tradeamountaslong: number,
    tradeprice: number,
    tradingpeernodeaddress: string,
    state: string,
    phase: string,
    tradeperiodstate: string,
    isdepositpublished: boolean,
    isdepositconfirmed: boolean,
    isfiatsent: boolean,
    isfiatreceived: boolean,
    ispayoutpublished: boolean,
    iswithdrawn: boolean,
    contractasjson: string,
    contract?: ContractInfo.AsObject,
    makerdeposittxid: string,
    takerdeposittxid: string,
  }
}

export class ContractInfo extends jspb.Message {
  getBuyernodeaddress(): string;
  setBuyernodeaddress(value: string): ContractInfo;

  getSellernodeaddress(): string;
  setSellernodeaddress(value: string): ContractInfo;

  getIsbuyermakerandsellertaker(): boolean;
  setIsbuyermakerandsellertaker(value: boolean): ContractInfo;

  getMakeraccountid(): string;
  setMakeraccountid(value: string): ContractInfo;

  getTakeraccountid(): string;
  setTakeraccountid(value: string): ContractInfo;

  getMakerpaymentaccountpayload(): PaymentAccountPayloadInfo | undefined;
  setMakerpaymentaccountpayload(value?: PaymentAccountPayloadInfo): ContractInfo;
  hasMakerpaymentaccountpayload(): boolean;
  clearMakerpaymentaccountpayload(): ContractInfo;

  getTakerpaymentaccountpayload(): PaymentAccountPayloadInfo | undefined;
  setTakerpaymentaccountpayload(value?: PaymentAccountPayloadInfo): ContractInfo;
  hasTakerpaymentaccountpayload(): boolean;
  clearTakerpaymentaccountpayload(): ContractInfo;

  getMakerpayoutaddressstring(): string;
  setMakerpayoutaddressstring(value: string): ContractInfo;

  getTakerpayoutaddressstring(): string;
  setTakerpayoutaddressstring(value: string): ContractInfo;

  getLocktime(): number;
  setLocktime(value: number): ContractInfo;

  getArbitratornodeaddress(): string;
  setArbitratornodeaddress(value: string): ContractInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContractInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ContractInfo): ContractInfo.AsObject;
  static serializeBinaryToWriter(message: ContractInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContractInfo;
  static deserializeBinaryFromReader(message: ContractInfo, reader: jspb.BinaryReader): ContractInfo;
}

export namespace ContractInfo {
  export type AsObject = {
    buyernodeaddress: string,
    sellernodeaddress: string,
    isbuyermakerandsellertaker: boolean,
    makeraccountid: string,
    takeraccountid: string,
    makerpaymentaccountpayload?: PaymentAccountPayloadInfo.AsObject,
    takerpaymentaccountpayload?: PaymentAccountPayloadInfo.AsObject,
    makerpayoutaddressstring: string,
    takerpayoutaddressstring: string,
    locktime: number,
    arbitratornodeaddress: string,
  }
}

export class PaymentAccountPayloadInfo extends jspb.Message {
  getId(): string;
  setId(value: string): PaymentAccountPayloadInfo;

  getPaymentmethodid(): string;
  setPaymentmethodid(value: string): PaymentAccountPayloadInfo;

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
    paymentmethodid: string,
    address: string,
  }
}

export class TxFeeRateInfo extends jspb.Message {
  getUsecustomtxfeerate(): boolean;
  setUsecustomtxfeerate(value: boolean): TxFeeRateInfo;

  getCustomtxfeerate(): number;
  setCustomtxfeerate(value: number): TxFeeRateInfo;

  getFeeservicerate(): number;
  setFeeservicerate(value: number): TxFeeRateInfo;

  getLastfeeservicerequestts(): number;
  setLastfeeservicerequestts(value: number): TxFeeRateInfo;

  getMinfeeservicerate(): number;
  setMinfeeservicerate(value: number): TxFeeRateInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TxFeeRateInfo.AsObject;
  static toObject(includeInstance: boolean, msg: TxFeeRateInfo): TxFeeRateInfo.AsObject;
  static serializeBinaryToWriter(message: TxFeeRateInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TxFeeRateInfo;
  static deserializeBinaryFromReader(message: TxFeeRateInfo, reader: jspb.BinaryReader): TxFeeRateInfo;
}

export namespace TxFeeRateInfo {
  export type AsObject = {
    usecustomtxfeerate: boolean,
    customtxfeerate: number,
    feeservicerate: number,
    lastfeeservicerequestts: number,
    minfeeservicerate: number,
  }
}

export class TxInfo extends jspb.Message {
  getTxid(): string;
  setTxid(value: string): TxInfo;

  getInputsum(): number;
  setInputsum(value: number): TxInfo;

  getOutputsum(): number;
  setOutputsum(value: number): TxInfo;

  getFee(): number;
  setFee(value: number): TxInfo;

  getSize(): number;
  setSize(value: number): TxInfo;

  getIspending(): boolean;
  setIspending(value: boolean): TxInfo;

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
    txid: string,
    inputsum: number,
    outputsum: number,
    fee: number,
    size: number,
    ispending: boolean,
    memo: string,
  }
}

export class GetBalancesRequest extends jspb.Message {
  getCurrencycode(): string;
  setCurrencycode(value: string): GetBalancesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBalancesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBalancesRequest): GetBalancesRequest.AsObject;
  static serializeBinaryToWriter(message: GetBalancesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBalancesRequest;
  static deserializeBinaryFromReader(message: GetBalancesRequest, reader: jspb.BinaryReader): GetBalancesRequest;
}

export namespace GetBalancesRequest {
  export type AsObject = {
    currencycode: string,
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
  getAddressbalanceinfo(): AddressBalanceInfo | undefined;
  setAddressbalanceinfo(value?: AddressBalanceInfo): GetAddressBalanceReply;
  hasAddressbalanceinfo(): boolean;
  clearAddressbalanceinfo(): GetAddressBalanceReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAddressBalanceReply.AsObject;
  static toObject(includeInstance: boolean, msg: GetAddressBalanceReply): GetAddressBalanceReply.AsObject;
  static serializeBinaryToWriter(message: GetAddressBalanceReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAddressBalanceReply;
  static deserializeBinaryFromReader(message: GetAddressBalanceReply, reader: jspb.BinaryReader): GetAddressBalanceReply;
}

export namespace GetAddressBalanceReply {
  export type AsObject = {
    addressbalanceinfo?: AddressBalanceInfo.AsObject,
  }
}

export class GetUnusedBsqAddressRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUnusedBsqAddressRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUnusedBsqAddressRequest): GetUnusedBsqAddressRequest.AsObject;
  static serializeBinaryToWriter(message: GetUnusedBsqAddressRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUnusedBsqAddressRequest;
  static deserializeBinaryFromReader(message: GetUnusedBsqAddressRequest, reader: jspb.BinaryReader): GetUnusedBsqAddressRequest;
}

export namespace GetUnusedBsqAddressRequest {
  export type AsObject = {
  }
}

export class GetUnusedBsqAddressReply extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): GetUnusedBsqAddressReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUnusedBsqAddressReply.AsObject;
  static toObject(includeInstance: boolean, msg: GetUnusedBsqAddressReply): GetUnusedBsqAddressReply.AsObject;
  static serializeBinaryToWriter(message: GetUnusedBsqAddressReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUnusedBsqAddressReply;
  static deserializeBinaryFromReader(message: GetUnusedBsqAddressReply, reader: jspb.BinaryReader): GetUnusedBsqAddressReply;
}

export namespace GetUnusedBsqAddressReply {
  export type AsObject = {
    address: string,
  }
}

export class SendBsqRequest extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): SendBsqRequest;

  getAmount(): string;
  setAmount(value: string): SendBsqRequest;

  getTxfeerate(): string;
  setTxfeerate(value: string): SendBsqRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendBsqRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SendBsqRequest): SendBsqRequest.AsObject;
  static serializeBinaryToWriter(message: SendBsqRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendBsqRequest;
  static deserializeBinaryFromReader(message: SendBsqRequest, reader: jspb.BinaryReader): SendBsqRequest;
}

export namespace SendBsqRequest {
  export type AsObject = {
    address: string,
    amount: string,
    txfeerate: string,
  }
}

export class SendBsqReply extends jspb.Message {
  getTxinfo(): TxInfo | undefined;
  setTxinfo(value?: TxInfo): SendBsqReply;
  hasTxinfo(): boolean;
  clearTxinfo(): SendBsqReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendBsqReply.AsObject;
  static toObject(includeInstance: boolean, msg: SendBsqReply): SendBsqReply.AsObject;
  static serializeBinaryToWriter(message: SendBsqReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendBsqReply;
  static deserializeBinaryFromReader(message: SendBsqReply, reader: jspb.BinaryReader): SendBsqReply;
}

export namespace SendBsqReply {
  export type AsObject = {
    txinfo?: TxInfo.AsObject,
  }
}

export class SendBtcRequest extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): SendBtcRequest;

  getAmount(): string;
  setAmount(value: string): SendBtcRequest;

  getTxfeerate(): string;
  setTxfeerate(value: string): SendBtcRequest;

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
    txfeerate: string,
    memo: string,
  }
}

export class SendBtcReply extends jspb.Message {
  getTxinfo(): TxInfo | undefined;
  setTxinfo(value?: TxInfo): SendBtcReply;
  hasTxinfo(): boolean;
  clearTxinfo(): SendBtcReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendBtcReply.AsObject;
  static toObject(includeInstance: boolean, msg: SendBtcReply): SendBtcReply.AsObject;
  static serializeBinaryToWriter(message: SendBtcReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendBtcReply;
  static deserializeBinaryFromReader(message: SendBtcReply, reader: jspb.BinaryReader): SendBtcReply;
}

export namespace SendBtcReply {
  export type AsObject = {
    txinfo?: TxInfo.AsObject,
  }
}

export class VerifyBsqSentToAddressRequest extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): VerifyBsqSentToAddressRequest;

  getAmount(): string;
  setAmount(value: string): VerifyBsqSentToAddressRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyBsqSentToAddressRequest.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyBsqSentToAddressRequest): VerifyBsqSentToAddressRequest.AsObject;
  static serializeBinaryToWriter(message: VerifyBsqSentToAddressRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyBsqSentToAddressRequest;
  static deserializeBinaryFromReader(message: VerifyBsqSentToAddressRequest, reader: jspb.BinaryReader): VerifyBsqSentToAddressRequest;
}

export namespace VerifyBsqSentToAddressRequest {
  export type AsObject = {
    address: string,
    amount: string,
  }
}

export class VerifyBsqSentToAddressReply extends jspb.Message {
  getIsamountreceived(): boolean;
  setIsamountreceived(value: boolean): VerifyBsqSentToAddressReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyBsqSentToAddressReply.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyBsqSentToAddressReply): VerifyBsqSentToAddressReply.AsObject;
  static serializeBinaryToWriter(message: VerifyBsqSentToAddressReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyBsqSentToAddressReply;
  static deserializeBinaryFromReader(message: VerifyBsqSentToAddressReply, reader: jspb.BinaryReader): VerifyBsqSentToAddressReply;
}

export namespace VerifyBsqSentToAddressReply {
  export type AsObject = {
    isamountreceived: boolean,
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
  getTxfeerateinfo(): TxFeeRateInfo | undefined;
  setTxfeerateinfo(value?: TxFeeRateInfo): GetTxFeeRateReply;
  hasTxfeerateinfo(): boolean;
  clearTxfeerateinfo(): GetTxFeeRateReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTxFeeRateReply.AsObject;
  static toObject(includeInstance: boolean, msg: GetTxFeeRateReply): GetTxFeeRateReply.AsObject;
  static serializeBinaryToWriter(message: GetTxFeeRateReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTxFeeRateReply;
  static deserializeBinaryFromReader(message: GetTxFeeRateReply, reader: jspb.BinaryReader): GetTxFeeRateReply;
}

export namespace GetTxFeeRateReply {
  export type AsObject = {
    txfeerateinfo?: TxFeeRateInfo.AsObject,
  }
}

export class SetTxFeeRatePreferenceRequest extends jspb.Message {
  getTxfeeratepreference(): number;
  setTxfeeratepreference(value: number): SetTxFeeRatePreferenceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetTxFeeRatePreferenceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetTxFeeRatePreferenceRequest): SetTxFeeRatePreferenceRequest.AsObject;
  static serializeBinaryToWriter(message: SetTxFeeRatePreferenceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetTxFeeRatePreferenceRequest;
  static deserializeBinaryFromReader(message: SetTxFeeRatePreferenceRequest, reader: jspb.BinaryReader): SetTxFeeRatePreferenceRequest;
}

export namespace SetTxFeeRatePreferenceRequest {
  export type AsObject = {
    txfeeratepreference: number,
  }
}

export class SetTxFeeRatePreferenceReply extends jspb.Message {
  getTxfeerateinfo(): TxFeeRateInfo | undefined;
  setTxfeerateinfo(value?: TxFeeRateInfo): SetTxFeeRatePreferenceReply;
  hasTxfeerateinfo(): boolean;
  clearTxfeerateinfo(): SetTxFeeRatePreferenceReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetTxFeeRatePreferenceReply.AsObject;
  static toObject(includeInstance: boolean, msg: SetTxFeeRatePreferenceReply): SetTxFeeRatePreferenceReply.AsObject;
  static serializeBinaryToWriter(message: SetTxFeeRatePreferenceReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetTxFeeRatePreferenceReply;
  static deserializeBinaryFromReader(message: SetTxFeeRatePreferenceReply, reader: jspb.BinaryReader): SetTxFeeRatePreferenceReply;
}

export namespace SetTxFeeRatePreferenceReply {
  export type AsObject = {
    txfeerateinfo?: TxFeeRateInfo.AsObject,
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
  getTxfeerateinfo(): TxFeeRateInfo | undefined;
  setTxfeerateinfo(value?: TxFeeRateInfo): UnsetTxFeeRatePreferenceReply;
  hasTxfeerateinfo(): boolean;
  clearTxfeerateinfo(): UnsetTxFeeRatePreferenceReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnsetTxFeeRatePreferenceReply.AsObject;
  static toObject(includeInstance: boolean, msg: UnsetTxFeeRatePreferenceReply): UnsetTxFeeRatePreferenceReply.AsObject;
  static serializeBinaryToWriter(message: UnsetTxFeeRatePreferenceReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnsetTxFeeRatePreferenceReply;
  static deserializeBinaryFromReader(message: UnsetTxFeeRatePreferenceReply, reader: jspb.BinaryReader): UnsetTxFeeRatePreferenceReply;
}

export namespace UnsetTxFeeRatePreferenceReply {
  export type AsObject = {
    txfeerateinfo?: TxFeeRateInfo.AsObject,
  }
}

export class GetTransactionRequest extends jspb.Message {
  getTxid(): string;
  setTxid(value: string): GetTransactionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTransactionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTransactionRequest): GetTransactionRequest.AsObject;
  static serializeBinaryToWriter(message: GetTransactionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTransactionRequest;
  static deserializeBinaryFromReader(message: GetTransactionRequest, reader: jspb.BinaryReader): GetTransactionRequest;
}

export namespace GetTransactionRequest {
  export type AsObject = {
    txid: string,
  }
}

export class GetTransactionReply extends jspb.Message {
  getTxinfo(): TxInfo | undefined;
  setTxinfo(value?: TxInfo): GetTransactionReply;
  hasTxinfo(): boolean;
  clearTxinfo(): GetTransactionReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTransactionReply.AsObject;
  static toObject(includeInstance: boolean, msg: GetTransactionReply): GetTransactionReply.AsObject;
  static serializeBinaryToWriter(message: GetTransactionReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTransactionReply;
  static deserializeBinaryFromReader(message: GetTransactionReply, reader: jspb.BinaryReader): GetTransactionReply;
}

export namespace GetTransactionReply {
  export type AsObject = {
    txinfo?: TxInfo.AsObject,
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
  getAddressbalanceinfoList(): Array<AddressBalanceInfo>;
  setAddressbalanceinfoList(value: Array<AddressBalanceInfo>): GetFundingAddressesReply;
  clearAddressbalanceinfoList(): GetFundingAddressesReply;
  addAddressbalanceinfo(value?: AddressBalanceInfo, index?: number): AddressBalanceInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFundingAddressesReply.AsObject;
  static toObject(includeInstance: boolean, msg: GetFundingAddressesReply): GetFundingAddressesReply.AsObject;
  static serializeBinaryToWriter(message: GetFundingAddressesReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFundingAddressesReply;
  static deserializeBinaryFromReader(message: GetFundingAddressesReply, reader: jspb.BinaryReader): GetFundingAddressesReply;
}

export namespace GetFundingAddressesReply {
  export type AsObject = {
    addressbalanceinfoList: Array<AddressBalanceInfo.AsObject>,
  }
}

export class SetWalletPasswordRequest extends jspb.Message {
  getPassword(): string;
  setPassword(value: string): SetWalletPasswordRequest;

  getNewpassword(): string;
  setNewpassword(value: string): SetWalletPasswordRequest;

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
    newpassword: string,
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
  getBsq(): BsqBalanceInfo | undefined;
  setBsq(value?: BsqBalanceInfo): BalancesInfo;
  hasBsq(): boolean;
  clearBsq(): BalancesInfo;

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
    bsq?: BsqBalanceInfo.AsObject,
    btc?: BtcBalanceInfo.AsObject,
    xmr?: XmrBalanceInfo.AsObject,
  }
}

export class BsqBalanceInfo extends jspb.Message {
  getAvailableconfirmedbalance(): number;
  setAvailableconfirmedbalance(value: number): BsqBalanceInfo;

  getUnverifiedbalance(): number;
  setUnverifiedbalance(value: number): BsqBalanceInfo;

  getUnconfirmedchangebalance(): number;
  setUnconfirmedchangebalance(value: number): BsqBalanceInfo;

  getLockedforvotingbalance(): number;
  setLockedforvotingbalance(value: number): BsqBalanceInfo;

  getLockupbondsbalance(): number;
  setLockupbondsbalance(value: number): BsqBalanceInfo;

  getUnlockingbondsbalance(): number;
  setUnlockingbondsbalance(value: number): BsqBalanceInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BsqBalanceInfo.AsObject;
  static toObject(includeInstance: boolean, msg: BsqBalanceInfo): BsqBalanceInfo.AsObject;
  static serializeBinaryToWriter(message: BsqBalanceInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BsqBalanceInfo;
  static deserializeBinaryFromReader(message: BsqBalanceInfo, reader: jspb.BinaryReader): BsqBalanceInfo;
}

export namespace BsqBalanceInfo {
  export type AsObject = {
    availableconfirmedbalance: number,
    unverifiedbalance: number,
    unconfirmedchangebalance: number,
    lockedforvotingbalance: number,
    lockupbondsbalance: number,
    unlockingbondsbalance: number,
  }
}

export class BtcBalanceInfo extends jspb.Message {
  getAvailablebalance(): number;
  setAvailablebalance(value: number): BtcBalanceInfo;

  getReservedbalance(): number;
  setReservedbalance(value: number): BtcBalanceInfo;

  getTotalavailablebalance(): number;
  setTotalavailablebalance(value: number): BtcBalanceInfo;

  getLockedbalance(): number;
  setLockedbalance(value: number): BtcBalanceInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BtcBalanceInfo.AsObject;
  static toObject(includeInstance: boolean, msg: BtcBalanceInfo): BtcBalanceInfo.AsObject;
  static serializeBinaryToWriter(message: BtcBalanceInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BtcBalanceInfo;
  static deserializeBinaryFromReader(message: BtcBalanceInfo, reader: jspb.BinaryReader): BtcBalanceInfo;
}

export namespace BtcBalanceInfo {
  export type AsObject = {
    availablebalance: number,
    reservedbalance: number,
    totalavailablebalance: number,
    lockedbalance: number,
  }
}

export class XmrBalanceInfo extends jspb.Message {
  getUnlockedbalance(): string;
  setUnlockedbalance(value: string): XmrBalanceInfo;

  getLockedbalance(): string;
  setLockedbalance(value: string): XmrBalanceInfo;

  getReservedofferbalance(): string;
  setReservedofferbalance(value: string): XmrBalanceInfo;

  getReservedtradebalance(): string;
  setReservedtradebalance(value: string): XmrBalanceInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): XmrBalanceInfo.AsObject;
  static toObject(includeInstance: boolean, msg: XmrBalanceInfo): XmrBalanceInfo.AsObject;
  static serializeBinaryToWriter(message: XmrBalanceInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): XmrBalanceInfo;
  static deserializeBinaryFromReader(message: XmrBalanceInfo, reader: jspb.BinaryReader): XmrBalanceInfo;
}

export namespace XmrBalanceInfo {
  export type AsObject = {
    unlockedbalance: string,
    lockedbalance: string,
    reservedofferbalance: string,
    reservedtradebalance: string,
  }
}

export class AddressBalanceInfo extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): AddressBalanceInfo;

  getBalance(): number;
  setBalance(value: number): AddressBalanceInfo;

  getNumconfirmations(): number;
  setNumconfirmations(value: number): AddressBalanceInfo;

  getIsaddressunused(): boolean;
  setIsaddressunused(value: boolean): AddressBalanceInfo;

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
    numconfirmations: number,
    isaddressunused: boolean,
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

