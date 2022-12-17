import * as jspb from 'google-protobuf'

import * as pb_pb from './pb_pb';


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

export class IsAppInitializedRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IsAppInitializedRequest.AsObject;
  static toObject(includeInstance: boolean, msg: IsAppInitializedRequest): IsAppInitializedRequest.AsObject;
  static serializeBinaryToWriter(message: IsAppInitializedRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IsAppInitializedRequest;
  static deserializeBinaryFromReader(message: IsAppInitializedRequest, reader: jspb.BinaryReader): IsAppInitializedRequest;
}

export namespace IsAppInitializedRequest {
  export type AsObject = {
  }
}

export class IsAppInitializedReply extends jspb.Message {
  getIsAppInitialized(): boolean;
  setIsAppInitialized(value: boolean): IsAppInitializedReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IsAppInitializedReply.AsObject;
  static toObject(includeInstance: boolean, msg: IsAppInitializedReply): IsAppInitializedReply.AsObject;
  static serializeBinaryToWriter(message: IsAppInitializedReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IsAppInitializedReply;
  static deserializeBinaryFromReader(message: IsAppInitializedReply, reader: jspb.BinaryReader): IsAppInitializedReply;
}

export namespace IsAppInitializedReply {
  export type AsObject = {
    isAppInitialized: boolean,
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
  getZipBytes(): Uint8Array | string;
  getZipBytes_asU8(): Uint8Array;
  getZipBytes_asB64(): string;
  setZipBytes(value: Uint8Array | string): BackupAccountReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BackupAccountReply.AsObject;
  static toObject(includeInstance: boolean, msg: BackupAccountReply): BackupAccountReply.AsObject;
  static serializeBinaryToWriter(message: BackupAccountReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BackupAccountReply;
  static deserializeBinaryFromReader(message: BackupAccountReply, reader: jspb.BinaryReader): BackupAccountReply;
}

export namespace BackupAccountReply {
  export type AsObject = {
    zipBytes: Uint8Array | string,
  }
}

export class RestoreAccountRequest extends jspb.Message {
  getZipBytes(): Uint8Array | string;
  getZipBytes_asU8(): Uint8Array;
  getZipBytes_asB64(): string;
  setZipBytes(value: Uint8Array | string): RestoreAccountRequest;

  getOffset(): number;
  setOffset(value: number): RestoreAccountRequest;

  getTotalLength(): number;
  setTotalLength(value: number): RestoreAccountRequest;

  getHasMore(): boolean;
  setHasMore(value: boolean): RestoreAccountRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RestoreAccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RestoreAccountRequest): RestoreAccountRequest.AsObject;
  static serializeBinaryToWriter(message: RestoreAccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RestoreAccountRequest;
  static deserializeBinaryFromReader(message: RestoreAccountRequest, reader: jspb.BinaryReader): RestoreAccountRequest;
}

export namespace RestoreAccountRequest {
  export type AsObject = {
    zipBytes: Uint8Array | string,
    offset: number,
    totalLength: number,
    hasMore: boolean,
  }
}

export class RestoreAccountReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RestoreAccountReply.AsObject;
  static toObject(includeInstance: boolean, msg: RestoreAccountReply): RestoreAccountReply.AsObject;
  static serializeBinaryToWriter(message: RestoreAccountReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RestoreAccountReply;
  static deserializeBinaryFromReader(message: RestoreAccountReply, reader: jspb.BinaryReader): RestoreAccountReply;
}

export namespace RestoreAccountReply {
  export type AsObject = {
  }
}

export class GetDisputesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDisputesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDisputesRequest): GetDisputesRequest.AsObject;
  static serializeBinaryToWriter(message: GetDisputesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDisputesRequest;
  static deserializeBinaryFromReader(message: GetDisputesRequest, reader: jspb.BinaryReader): GetDisputesRequest;
}

export namespace GetDisputesRequest {
  export type AsObject = {
  }
}

export class GetDisputesReply extends jspb.Message {
  getDisputesList(): Array<pb_pb.Dispute>;
  setDisputesList(value: Array<pb_pb.Dispute>): GetDisputesReply;
  clearDisputesList(): GetDisputesReply;
  addDisputes(value?: pb_pb.Dispute, index?: number): pb_pb.Dispute;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDisputesReply.AsObject;
  static toObject(includeInstance: boolean, msg: GetDisputesReply): GetDisputesReply.AsObject;
  static serializeBinaryToWriter(message: GetDisputesReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDisputesReply;
  static deserializeBinaryFromReader(message: GetDisputesReply, reader: jspb.BinaryReader): GetDisputesReply;
}

export namespace GetDisputesReply {
  export type AsObject = {
    disputesList: Array<pb_pb.Dispute.AsObject>,
  }
}

export class GetDisputeRequest extends jspb.Message {
  getTradeId(): string;
  setTradeId(value: string): GetDisputeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDisputeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDisputeRequest): GetDisputeRequest.AsObject;
  static serializeBinaryToWriter(message: GetDisputeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDisputeRequest;
  static deserializeBinaryFromReader(message: GetDisputeRequest, reader: jspb.BinaryReader): GetDisputeRequest;
}

export namespace GetDisputeRequest {
  export type AsObject = {
    tradeId: string,
  }
}

export class GetDisputeReply extends jspb.Message {
  getDispute(): pb_pb.Dispute | undefined;
  setDispute(value?: pb_pb.Dispute): GetDisputeReply;
  hasDispute(): boolean;
  clearDispute(): GetDisputeReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDisputeReply.AsObject;
  static toObject(includeInstance: boolean, msg: GetDisputeReply): GetDisputeReply.AsObject;
  static serializeBinaryToWriter(message: GetDisputeReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDisputeReply;
  static deserializeBinaryFromReader(message: GetDisputeReply, reader: jspb.BinaryReader): GetDisputeReply;
}

export namespace GetDisputeReply {
  export type AsObject = {
    dispute?: pb_pb.Dispute.AsObject,
  }
}

export class OpenDisputeRequest extends jspb.Message {
  getTradeId(): string;
  setTradeId(value: string): OpenDisputeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OpenDisputeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: OpenDisputeRequest): OpenDisputeRequest.AsObject;
  static serializeBinaryToWriter(message: OpenDisputeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OpenDisputeRequest;
  static deserializeBinaryFromReader(message: OpenDisputeRequest, reader: jspb.BinaryReader): OpenDisputeRequest;
}

export namespace OpenDisputeRequest {
  export type AsObject = {
    tradeId: string,
  }
}

export class OpenDisputeReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OpenDisputeReply.AsObject;
  static toObject(includeInstance: boolean, msg: OpenDisputeReply): OpenDisputeReply.AsObject;
  static serializeBinaryToWriter(message: OpenDisputeReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OpenDisputeReply;
  static deserializeBinaryFromReader(message: OpenDisputeReply, reader: jspb.BinaryReader): OpenDisputeReply;
}

export namespace OpenDisputeReply {
  export type AsObject = {
  }
}

export class ResolveDisputeReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResolveDisputeReply.AsObject;
  static toObject(includeInstance: boolean, msg: ResolveDisputeReply): ResolveDisputeReply.AsObject;
  static serializeBinaryToWriter(message: ResolveDisputeReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResolveDisputeReply;
  static deserializeBinaryFromReader(message: ResolveDisputeReply, reader: jspb.BinaryReader): ResolveDisputeReply;
}

export namespace ResolveDisputeReply {
  export type AsObject = {
  }
}

export class ResolveDisputeRequest extends jspb.Message {
  getTradeId(): string;
  setTradeId(value: string): ResolveDisputeRequest;

  getWinner(): pb_pb.DisputeResult.Winner;
  setWinner(value: pb_pb.DisputeResult.Winner): ResolveDisputeRequest;

  getReason(): pb_pb.DisputeResult.Reason;
  setReason(value: pb_pb.DisputeResult.Reason): ResolveDisputeRequest;

  getSummaryNotes(): string;
  setSummaryNotes(value: string): ResolveDisputeRequest;

  getCustomPayoutAmount(): string;
  setCustomPayoutAmount(value: string): ResolveDisputeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResolveDisputeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ResolveDisputeRequest): ResolveDisputeRequest.AsObject;
  static serializeBinaryToWriter(message: ResolveDisputeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResolveDisputeRequest;
  static deserializeBinaryFromReader(message: ResolveDisputeRequest, reader: jspb.BinaryReader): ResolveDisputeRequest;
}

export namespace ResolveDisputeRequest {
  export type AsObject = {
    tradeId: string,
    winner: pb_pb.DisputeResult.Winner,
    reason: pb_pb.DisputeResult.Reason,
    summaryNotes: string,
    customPayoutAmount: string,
  }
}

export class SendDisputeChatMessageRequest extends jspb.Message {
  getDisputeId(): string;
  setDisputeId(value: string): SendDisputeChatMessageRequest;

  getMessage(): string;
  setMessage(value: string): SendDisputeChatMessageRequest;

  getAttachmentsList(): Array<pb_pb.Attachment>;
  setAttachmentsList(value: Array<pb_pb.Attachment>): SendDisputeChatMessageRequest;
  clearAttachmentsList(): SendDisputeChatMessageRequest;
  addAttachments(value?: pb_pb.Attachment, index?: number): pb_pb.Attachment;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendDisputeChatMessageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SendDisputeChatMessageRequest): SendDisputeChatMessageRequest.AsObject;
  static serializeBinaryToWriter(message: SendDisputeChatMessageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendDisputeChatMessageRequest;
  static deserializeBinaryFromReader(message: SendDisputeChatMessageRequest, reader: jspb.BinaryReader): SendDisputeChatMessageRequest;
}

export namespace SendDisputeChatMessageRequest {
  export type AsObject = {
    disputeId: string,
    message: string,
    attachmentsList: Array<pb_pb.Attachment.AsObject>,
  }
}

export class SendDisputeChatMessageReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendDisputeChatMessageReply.AsObject;
  static toObject(includeInstance: boolean, msg: SendDisputeChatMessageReply): SendDisputeChatMessageReply.AsObject;
  static serializeBinaryToWriter(message: SendDisputeChatMessageReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendDisputeChatMessageReply;
  static deserializeBinaryFromReader(message: SendDisputeChatMessageReply, reader: jspb.BinaryReader): SendDisputeChatMessageReply;
}

export namespace SendDisputeChatMessageReply {
  export type AsObject = {
  }
}

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

export class UnregisterDisputeAgentRequest extends jspb.Message {
  getDisputeAgentType(): string;
  setDisputeAgentType(value: string): UnregisterDisputeAgentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnregisterDisputeAgentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UnregisterDisputeAgentRequest): UnregisterDisputeAgentRequest.AsObject;
  static serializeBinaryToWriter(message: UnregisterDisputeAgentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnregisterDisputeAgentRequest;
  static deserializeBinaryFromReader(message: UnregisterDisputeAgentRequest, reader: jspb.BinaryReader): UnregisterDisputeAgentRequest;
}

export namespace UnregisterDisputeAgentRequest {
  export type AsObject = {
    disputeAgentType: string,
  }
}

export class UnregisterDisputeAgentReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnregisterDisputeAgentReply.AsObject;
  static toObject(includeInstance: boolean, msg: UnregisterDisputeAgentReply): UnregisterDisputeAgentReply.AsObject;
  static serializeBinaryToWriter(message: UnregisterDisputeAgentReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnregisterDisputeAgentReply;
  static deserializeBinaryFromReader(message: UnregisterDisputeAgentReply, reader: jspb.BinaryReader): UnregisterDisputeAgentReply;
}

export namespace UnregisterDisputeAgentReply {
  export type AsObject = {
  }
}

export class RegisterNotificationListenerRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterNotificationListenerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterNotificationListenerRequest): RegisterNotificationListenerRequest.AsObject;
  static serializeBinaryToWriter(message: RegisterNotificationListenerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterNotificationListenerRequest;
  static deserializeBinaryFromReader(message: RegisterNotificationListenerRequest, reader: jspb.BinaryReader): RegisterNotificationListenerRequest;
}

export namespace RegisterNotificationListenerRequest {
  export type AsObject = {
  }
}

export class NotificationMessage extends jspb.Message {
  getId(): string;
  setId(value: string): NotificationMessage;

  getType(): NotificationMessage.NotificationType;
  setType(value: NotificationMessage.NotificationType): NotificationMessage;

  getTimestamp(): number;
  setTimestamp(value: number): NotificationMessage;

  getTitle(): string;
  setTitle(value: string): NotificationMessage;

  getMessage(): string;
  setMessage(value: string): NotificationMessage;

  getTrade(): TradeInfo | undefined;
  setTrade(value?: TradeInfo): NotificationMessage;
  hasTrade(): boolean;
  clearTrade(): NotificationMessage;

  getChatMessage(): pb_pb.ChatMessage | undefined;
  setChatMessage(value?: pb_pb.ChatMessage): NotificationMessage;
  hasChatMessage(): boolean;
  clearChatMessage(): NotificationMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NotificationMessage.AsObject;
  static toObject(includeInstance: boolean, msg: NotificationMessage): NotificationMessage.AsObject;
  static serializeBinaryToWriter(message: NotificationMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NotificationMessage;
  static deserializeBinaryFromReader(message: NotificationMessage, reader: jspb.BinaryReader): NotificationMessage;
}

export namespace NotificationMessage {
  export type AsObject = {
    id: string,
    type: NotificationMessage.NotificationType,
    timestamp: number,
    title: string,
    message: string,
    trade?: TradeInfo.AsObject,
    chatMessage?: pb_pb.ChatMessage.AsObject,
  }

  export enum NotificationType { 
    APP_INITIALIZED = 0,
    KEEP_ALIVE = 1,
    TRADE_UPDATE = 2,
    CHAT_MESSAGE = 3,
  }
}

export class SendNotificationRequest extends jspb.Message {
  getNotification(): NotificationMessage | undefined;
  setNotification(value?: NotificationMessage): SendNotificationRequest;
  hasNotification(): boolean;
  clearNotification(): SendNotificationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendNotificationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SendNotificationRequest): SendNotificationRequest.AsObject;
  static serializeBinaryToWriter(message: SendNotificationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendNotificationRequest;
  static deserializeBinaryFromReader(message: SendNotificationRequest, reader: jspb.BinaryReader): SendNotificationRequest;
}

export namespace SendNotificationRequest {
  export type AsObject = {
    notification?: NotificationMessage.AsObject,
  }
}

export class SendNotificationReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendNotificationReply.AsObject;
  static toObject(includeInstance: boolean, msg: SendNotificationReply): SendNotificationReply.AsObject;
  static serializeBinaryToWriter(message: SendNotificationReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendNotificationReply;
  static deserializeBinaryFromReader(message: SendNotificationReply, reader: jspb.BinaryReader): SendNotificationReply;
}

export namespace SendNotificationReply {
  export type AsObject = {
  }
}

export class UrlConnection extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): UrlConnection;

  getUsername(): string;
  setUsername(value: string): UrlConnection;

  getPassword(): string;
  setPassword(value: string): UrlConnection;

  getPriority(): number;
  setPriority(value: number): UrlConnection;

  getOnlineStatus(): UrlConnection.OnlineStatus;
  setOnlineStatus(value: UrlConnection.OnlineStatus): UrlConnection;

  getAuthenticationStatus(): UrlConnection.AuthenticationStatus;
  setAuthenticationStatus(value: UrlConnection.AuthenticationStatus): UrlConnection;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UrlConnection.AsObject;
  static toObject(includeInstance: boolean, msg: UrlConnection): UrlConnection.AsObject;
  static serializeBinaryToWriter(message: UrlConnection, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UrlConnection;
  static deserializeBinaryFromReader(message: UrlConnection, reader: jspb.BinaryReader): UrlConnection;
}

export namespace UrlConnection {
  export type AsObject = {
    url: string,
    username: string,
    password: string,
    priority: number,
    onlineStatus: UrlConnection.OnlineStatus,
    authenticationStatus: UrlConnection.AuthenticationStatus,
  }

  export enum OnlineStatus { 
    UNKNOWN = 0,
    ONLINE = 1,
    OFFLINE = 2,
  }

  export enum AuthenticationStatus { 
    NO_AUTHENTICATION = 0,
    AUTHENTICATED = 1,
    NOT_AUTHENTICATED = 2,
  }
}

export class AddConnectionRequest extends jspb.Message {
  getConnection(): UrlConnection | undefined;
  setConnection(value?: UrlConnection): AddConnectionRequest;
  hasConnection(): boolean;
  clearConnection(): AddConnectionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddConnectionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddConnectionRequest): AddConnectionRequest.AsObject;
  static serializeBinaryToWriter(message: AddConnectionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddConnectionRequest;
  static deserializeBinaryFromReader(message: AddConnectionRequest, reader: jspb.BinaryReader): AddConnectionRequest;
}

export namespace AddConnectionRequest {
  export type AsObject = {
    connection?: UrlConnection.AsObject,
  }
}

export class AddConnectionReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddConnectionReply.AsObject;
  static toObject(includeInstance: boolean, msg: AddConnectionReply): AddConnectionReply.AsObject;
  static serializeBinaryToWriter(message: AddConnectionReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddConnectionReply;
  static deserializeBinaryFromReader(message: AddConnectionReply, reader: jspb.BinaryReader): AddConnectionReply;
}

export namespace AddConnectionReply {
  export type AsObject = {
  }
}

export class RemoveConnectionRequest extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): RemoveConnectionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveConnectionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveConnectionRequest): RemoveConnectionRequest.AsObject;
  static serializeBinaryToWriter(message: RemoveConnectionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveConnectionRequest;
  static deserializeBinaryFromReader(message: RemoveConnectionRequest, reader: jspb.BinaryReader): RemoveConnectionRequest;
}

export namespace RemoveConnectionRequest {
  export type AsObject = {
    url: string,
  }
}

export class RemoveConnectionReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveConnectionReply.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveConnectionReply): RemoveConnectionReply.AsObject;
  static serializeBinaryToWriter(message: RemoveConnectionReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveConnectionReply;
  static deserializeBinaryFromReader(message: RemoveConnectionReply, reader: jspb.BinaryReader): RemoveConnectionReply;
}

export namespace RemoveConnectionReply {
  export type AsObject = {
  }
}

export class GetConnectionRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetConnectionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetConnectionRequest): GetConnectionRequest.AsObject;
  static serializeBinaryToWriter(message: GetConnectionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetConnectionRequest;
  static deserializeBinaryFromReader(message: GetConnectionRequest, reader: jspb.BinaryReader): GetConnectionRequest;
}

export namespace GetConnectionRequest {
  export type AsObject = {
  }
}

export class GetConnectionReply extends jspb.Message {
  getConnection(): UrlConnection | undefined;
  setConnection(value?: UrlConnection): GetConnectionReply;
  hasConnection(): boolean;
  clearConnection(): GetConnectionReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetConnectionReply.AsObject;
  static toObject(includeInstance: boolean, msg: GetConnectionReply): GetConnectionReply.AsObject;
  static serializeBinaryToWriter(message: GetConnectionReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetConnectionReply;
  static deserializeBinaryFromReader(message: GetConnectionReply, reader: jspb.BinaryReader): GetConnectionReply;
}

export namespace GetConnectionReply {
  export type AsObject = {
    connection?: UrlConnection.AsObject,
  }
}

export class GetConnectionsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetConnectionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetConnectionsRequest): GetConnectionsRequest.AsObject;
  static serializeBinaryToWriter(message: GetConnectionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetConnectionsRequest;
  static deserializeBinaryFromReader(message: GetConnectionsRequest, reader: jspb.BinaryReader): GetConnectionsRequest;
}

export namespace GetConnectionsRequest {
  export type AsObject = {
  }
}

export class GetConnectionsReply extends jspb.Message {
  getConnectionsList(): Array<UrlConnection>;
  setConnectionsList(value: Array<UrlConnection>): GetConnectionsReply;
  clearConnectionsList(): GetConnectionsReply;
  addConnections(value?: UrlConnection, index?: number): UrlConnection;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetConnectionsReply.AsObject;
  static toObject(includeInstance: boolean, msg: GetConnectionsReply): GetConnectionsReply.AsObject;
  static serializeBinaryToWriter(message: GetConnectionsReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetConnectionsReply;
  static deserializeBinaryFromReader(message: GetConnectionsReply, reader: jspb.BinaryReader): GetConnectionsReply;
}

export namespace GetConnectionsReply {
  export type AsObject = {
    connectionsList: Array<UrlConnection.AsObject>,
  }
}

export class SetConnectionRequest extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): SetConnectionRequest;

  getConnection(): UrlConnection | undefined;
  setConnection(value?: UrlConnection): SetConnectionRequest;
  hasConnection(): boolean;
  clearConnection(): SetConnectionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetConnectionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetConnectionRequest): SetConnectionRequest.AsObject;
  static serializeBinaryToWriter(message: SetConnectionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetConnectionRequest;
  static deserializeBinaryFromReader(message: SetConnectionRequest, reader: jspb.BinaryReader): SetConnectionRequest;
}

export namespace SetConnectionRequest {
  export type AsObject = {
    url: string,
    connection?: UrlConnection.AsObject,
  }
}

export class SetConnectionReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetConnectionReply.AsObject;
  static toObject(includeInstance: boolean, msg: SetConnectionReply): SetConnectionReply.AsObject;
  static serializeBinaryToWriter(message: SetConnectionReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetConnectionReply;
  static deserializeBinaryFromReader(message: SetConnectionReply, reader: jspb.BinaryReader): SetConnectionReply;
}

export namespace SetConnectionReply {
  export type AsObject = {
  }
}

export class CheckConnectionRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckConnectionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CheckConnectionRequest): CheckConnectionRequest.AsObject;
  static serializeBinaryToWriter(message: CheckConnectionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckConnectionRequest;
  static deserializeBinaryFromReader(message: CheckConnectionRequest, reader: jspb.BinaryReader): CheckConnectionRequest;
}

export namespace CheckConnectionRequest {
  export type AsObject = {
  }
}

export class CheckConnectionReply extends jspb.Message {
  getConnection(): UrlConnection | undefined;
  setConnection(value?: UrlConnection): CheckConnectionReply;
  hasConnection(): boolean;
  clearConnection(): CheckConnectionReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckConnectionReply.AsObject;
  static toObject(includeInstance: boolean, msg: CheckConnectionReply): CheckConnectionReply.AsObject;
  static serializeBinaryToWriter(message: CheckConnectionReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckConnectionReply;
  static deserializeBinaryFromReader(message: CheckConnectionReply, reader: jspb.BinaryReader): CheckConnectionReply;
}

export namespace CheckConnectionReply {
  export type AsObject = {
    connection?: UrlConnection.AsObject,
  }
}

export class CheckConnectionsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckConnectionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CheckConnectionsRequest): CheckConnectionsRequest.AsObject;
  static serializeBinaryToWriter(message: CheckConnectionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckConnectionsRequest;
  static deserializeBinaryFromReader(message: CheckConnectionsRequest, reader: jspb.BinaryReader): CheckConnectionsRequest;
}

export namespace CheckConnectionsRequest {
  export type AsObject = {
  }
}

export class CheckConnectionsReply extends jspb.Message {
  getConnectionsList(): Array<UrlConnection>;
  setConnectionsList(value: Array<UrlConnection>): CheckConnectionsReply;
  clearConnectionsList(): CheckConnectionsReply;
  addConnections(value?: UrlConnection, index?: number): UrlConnection;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckConnectionsReply.AsObject;
  static toObject(includeInstance: boolean, msg: CheckConnectionsReply): CheckConnectionsReply.AsObject;
  static serializeBinaryToWriter(message: CheckConnectionsReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckConnectionsReply;
  static deserializeBinaryFromReader(message: CheckConnectionsReply, reader: jspb.BinaryReader): CheckConnectionsReply;
}

export namespace CheckConnectionsReply {
  export type AsObject = {
    connectionsList: Array<UrlConnection.AsObject>,
  }
}

export class StartCheckingConnectionsRequest extends jspb.Message {
  getRefreshPeriod(): number;
  setRefreshPeriod(value: number): StartCheckingConnectionsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartCheckingConnectionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StartCheckingConnectionsRequest): StartCheckingConnectionsRequest.AsObject;
  static serializeBinaryToWriter(message: StartCheckingConnectionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartCheckingConnectionsRequest;
  static deserializeBinaryFromReader(message: StartCheckingConnectionsRequest, reader: jspb.BinaryReader): StartCheckingConnectionsRequest;
}

export namespace StartCheckingConnectionsRequest {
  export type AsObject = {
    refreshPeriod: number,
  }
}

export class StartCheckingConnectionsReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartCheckingConnectionsReply.AsObject;
  static toObject(includeInstance: boolean, msg: StartCheckingConnectionsReply): StartCheckingConnectionsReply.AsObject;
  static serializeBinaryToWriter(message: StartCheckingConnectionsReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartCheckingConnectionsReply;
  static deserializeBinaryFromReader(message: StartCheckingConnectionsReply, reader: jspb.BinaryReader): StartCheckingConnectionsReply;
}

export namespace StartCheckingConnectionsReply {
  export type AsObject = {
  }
}

export class StopCheckingConnectionsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StopCheckingConnectionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StopCheckingConnectionsRequest): StopCheckingConnectionsRequest.AsObject;
  static serializeBinaryToWriter(message: StopCheckingConnectionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StopCheckingConnectionsRequest;
  static deserializeBinaryFromReader(message: StopCheckingConnectionsRequest, reader: jspb.BinaryReader): StopCheckingConnectionsRequest;
}

export namespace StopCheckingConnectionsRequest {
  export type AsObject = {
  }
}

export class StopCheckingConnectionsReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StopCheckingConnectionsReply.AsObject;
  static toObject(includeInstance: boolean, msg: StopCheckingConnectionsReply): StopCheckingConnectionsReply.AsObject;
  static serializeBinaryToWriter(message: StopCheckingConnectionsReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StopCheckingConnectionsReply;
  static deserializeBinaryFromReader(message: StopCheckingConnectionsReply, reader: jspb.BinaryReader): StopCheckingConnectionsReply;
}

export namespace StopCheckingConnectionsReply {
  export type AsObject = {
  }
}

export class GetBestAvailableConnectionRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBestAvailableConnectionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBestAvailableConnectionRequest): GetBestAvailableConnectionRequest.AsObject;
  static serializeBinaryToWriter(message: GetBestAvailableConnectionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBestAvailableConnectionRequest;
  static deserializeBinaryFromReader(message: GetBestAvailableConnectionRequest, reader: jspb.BinaryReader): GetBestAvailableConnectionRequest;
}

export namespace GetBestAvailableConnectionRequest {
  export type AsObject = {
  }
}

export class GetBestAvailableConnectionReply extends jspb.Message {
  getConnection(): UrlConnection | undefined;
  setConnection(value?: UrlConnection): GetBestAvailableConnectionReply;
  hasConnection(): boolean;
  clearConnection(): GetBestAvailableConnectionReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBestAvailableConnectionReply.AsObject;
  static toObject(includeInstance: boolean, msg: GetBestAvailableConnectionReply): GetBestAvailableConnectionReply.AsObject;
  static serializeBinaryToWriter(message: GetBestAvailableConnectionReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBestAvailableConnectionReply;
  static deserializeBinaryFromReader(message: GetBestAvailableConnectionReply, reader: jspb.BinaryReader): GetBestAvailableConnectionReply;
}

export namespace GetBestAvailableConnectionReply {
  export type AsObject = {
    connection?: UrlConnection.AsObject,
  }
}

export class SetAutoSwitchRequest extends jspb.Message {
  getAutoSwitch(): boolean;
  setAutoSwitch(value: boolean): SetAutoSwitchRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetAutoSwitchRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetAutoSwitchRequest): SetAutoSwitchRequest.AsObject;
  static serializeBinaryToWriter(message: SetAutoSwitchRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetAutoSwitchRequest;
  static deserializeBinaryFromReader(message: SetAutoSwitchRequest, reader: jspb.BinaryReader): SetAutoSwitchRequest;
}

export namespace SetAutoSwitchRequest {
  export type AsObject = {
    autoSwitch: boolean,
  }
}

export class SetAutoSwitchReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetAutoSwitchReply.AsObject;
  static toObject(includeInstance: boolean, msg: SetAutoSwitchReply): SetAutoSwitchReply.AsObject;
  static serializeBinaryToWriter(message: SetAutoSwitchReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetAutoSwitchReply;
  static deserializeBinaryFromReader(message: SetAutoSwitchReply, reader: jspb.BinaryReader): SetAutoSwitchReply;
}

export namespace SetAutoSwitchReply {
  export type AsObject = {
  }
}

export class IsMoneroNodeOnlineRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IsMoneroNodeOnlineRequest.AsObject;
  static toObject(includeInstance: boolean, msg: IsMoneroNodeOnlineRequest): IsMoneroNodeOnlineRequest.AsObject;
  static serializeBinaryToWriter(message: IsMoneroNodeOnlineRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IsMoneroNodeOnlineRequest;
  static deserializeBinaryFromReader(message: IsMoneroNodeOnlineRequest, reader: jspb.BinaryReader): IsMoneroNodeOnlineRequest;
}

export namespace IsMoneroNodeOnlineRequest {
  export type AsObject = {
  }
}

export class IsMoneroNodeOnlineReply extends jspb.Message {
  getIsRunning(): boolean;
  setIsRunning(value: boolean): IsMoneroNodeOnlineReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IsMoneroNodeOnlineReply.AsObject;
  static toObject(includeInstance: boolean, msg: IsMoneroNodeOnlineReply): IsMoneroNodeOnlineReply.AsObject;
  static serializeBinaryToWriter(message: IsMoneroNodeOnlineReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IsMoneroNodeOnlineReply;
  static deserializeBinaryFromReader(message: IsMoneroNodeOnlineReply, reader: jspb.BinaryReader): IsMoneroNodeOnlineReply;
}

export namespace IsMoneroNodeOnlineReply {
  export type AsObject = {
    isRunning: boolean,
  }
}

export class GetMoneroNodeSettingsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMoneroNodeSettingsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetMoneroNodeSettingsRequest): GetMoneroNodeSettingsRequest.AsObject;
  static serializeBinaryToWriter(message: GetMoneroNodeSettingsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMoneroNodeSettingsRequest;
  static deserializeBinaryFromReader(message: GetMoneroNodeSettingsRequest, reader: jspb.BinaryReader): GetMoneroNodeSettingsRequest;
}

export namespace GetMoneroNodeSettingsRequest {
  export type AsObject = {
  }
}

export class GetMoneroNodeSettingsReply extends jspb.Message {
  getSettings(): pb_pb.MoneroNodeSettings | undefined;
  setSettings(value?: pb_pb.MoneroNodeSettings): GetMoneroNodeSettingsReply;
  hasSettings(): boolean;
  clearSettings(): GetMoneroNodeSettingsReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMoneroNodeSettingsReply.AsObject;
  static toObject(includeInstance: boolean, msg: GetMoneroNodeSettingsReply): GetMoneroNodeSettingsReply.AsObject;
  static serializeBinaryToWriter(message: GetMoneroNodeSettingsReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMoneroNodeSettingsReply;
  static deserializeBinaryFromReader(message: GetMoneroNodeSettingsReply, reader: jspb.BinaryReader): GetMoneroNodeSettingsReply;
}

export namespace GetMoneroNodeSettingsReply {
  export type AsObject = {
    settings?: pb_pb.MoneroNodeSettings.AsObject,
  }
}

export class StartMoneroNodeRequest extends jspb.Message {
  getSettings(): pb_pb.MoneroNodeSettings | undefined;
  setSettings(value?: pb_pb.MoneroNodeSettings): StartMoneroNodeRequest;
  hasSettings(): boolean;
  clearSettings(): StartMoneroNodeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartMoneroNodeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StartMoneroNodeRequest): StartMoneroNodeRequest.AsObject;
  static serializeBinaryToWriter(message: StartMoneroNodeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartMoneroNodeRequest;
  static deserializeBinaryFromReader(message: StartMoneroNodeRequest, reader: jspb.BinaryReader): StartMoneroNodeRequest;
}

export namespace StartMoneroNodeRequest {
  export type AsObject = {
    settings?: pb_pb.MoneroNodeSettings.AsObject,
  }
}

export class StartMoneroNodeReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartMoneroNodeReply.AsObject;
  static toObject(includeInstance: boolean, msg: StartMoneroNodeReply): StartMoneroNodeReply.AsObject;
  static serializeBinaryToWriter(message: StartMoneroNodeReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartMoneroNodeReply;
  static deserializeBinaryFromReader(message: StartMoneroNodeReply, reader: jspb.BinaryReader): StartMoneroNodeReply;
}

export namespace StartMoneroNodeReply {
  export type AsObject = {
  }
}

export class StopMoneroNodeRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StopMoneroNodeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StopMoneroNodeRequest): StopMoneroNodeRequest.AsObject;
  static serializeBinaryToWriter(message: StopMoneroNodeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StopMoneroNodeRequest;
  static deserializeBinaryFromReader(message: StopMoneroNodeRequest, reader: jspb.BinaryReader): StopMoneroNodeRequest;
}

export namespace StopMoneroNodeRequest {
  export type AsObject = {
  }
}

export class StopMoneroNodeReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StopMoneroNodeReply.AsObject;
  static toObject(includeInstance: boolean, msg: StopMoneroNodeReply): StopMoneroNodeReply.AsObject;
  static serializeBinaryToWriter(message: StopMoneroNodeReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StopMoneroNodeReply;
  static deserializeBinaryFromReader(message: StopMoneroNodeReply, reader: jspb.BinaryReader): StopMoneroNodeReply;
}

export namespace StopMoneroNodeReply {
  export type AsObject = {
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

export class PostOfferRequest extends jspb.Message {
  getCurrencyCode(): string;
  setCurrencyCode(value: string): PostOfferRequest;

  getDirection(): string;
  setDirection(value: string): PostOfferRequest;

  getPrice(): string;
  setPrice(value: string): PostOfferRequest;

  getUseMarketBasedPrice(): boolean;
  setUseMarketBasedPrice(value: boolean): PostOfferRequest;

  getMarketPriceMarginPct(): number;
  setMarketPriceMarginPct(value: number): PostOfferRequest;

  getAmount(): string;
  setAmount(value: string): PostOfferRequest;

  getMinAmount(): string;
  setMinAmount(value: string): PostOfferRequest;

  getBuyerSecurityDepositPct(): number;
  setBuyerSecurityDepositPct(value: number): PostOfferRequest;

  getTriggerPrice(): string;
  setTriggerPrice(value: string): PostOfferRequest;

  getPaymentAccountId(): string;
  setPaymentAccountId(value: string): PostOfferRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostOfferRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostOfferRequest): PostOfferRequest.AsObject;
  static serializeBinaryToWriter(message: PostOfferRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostOfferRequest;
  static deserializeBinaryFromReader(message: PostOfferRequest, reader: jspb.BinaryReader): PostOfferRequest;
}

export namespace PostOfferRequest {
  export type AsObject = {
    currencyCode: string,
    direction: string,
    price: string,
    useMarketBasedPrice: boolean,
    marketPriceMarginPct: number,
    amount: string,
    minAmount: string,
    buyerSecurityDepositPct: number,
    triggerPrice: string,
    paymentAccountId: string,
  }
}

export class PostOfferReply extends jspb.Message {
  getOffer(): OfferInfo | undefined;
  setOffer(value?: OfferInfo): PostOfferReply;
  hasOffer(): boolean;
  clearOffer(): PostOfferReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostOfferReply.AsObject;
  static toObject(includeInstance: boolean, msg: PostOfferReply): PostOfferReply.AsObject;
  static serializeBinaryToWriter(message: PostOfferReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostOfferReply;
  static deserializeBinaryFromReader(message: PostOfferReply, reader: jspb.BinaryReader): PostOfferReply;
}

export namespace PostOfferReply {
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

  getPrice(): string;
  setPrice(value: string): OfferInfo;

  getUseMarketBasedPrice(): boolean;
  setUseMarketBasedPrice(value: boolean): OfferInfo;

  getMarketPriceMarginPct(): number;
  setMarketPriceMarginPct(value: number): OfferInfo;

  getAmount(): number;
  setAmount(value: number): OfferInfo;

  getMinAmount(): number;
  setMinAmount(value: number): OfferInfo;

  getVolume(): string;
  setVolume(value: string): OfferInfo;

  getMinVolume(): string;
  setMinVolume(value: string): OfferInfo;

  getBuyerSecurityDeposit(): number;
  setBuyerSecurityDeposit(value: number): OfferInfo;

  getTriggerPrice(): string;
  setTriggerPrice(value: string): OfferInfo;

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

  getIsActivated(): boolean;
  setIsActivated(value: boolean): OfferInfo;

  getIsMyOffer(): boolean;
  setIsMyOffer(value: boolean): OfferInfo;

  getOwnerNodeAddress(): string;
  setOwnerNodeAddress(value: string): OfferInfo;

  getPubKeyRing(): string;
  setPubKeyRing(value: string): OfferInfo;

  getVersionNr(): string;
  setVersionNr(value: string): OfferInfo;

  getProtocolVersion(): number;
  setProtocolVersion(value: number): OfferInfo;

  getArbitratorSigner(): string;
  setArbitratorSigner(value: string): OfferInfo;

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
    price: string,
    useMarketBasedPrice: boolean,
    marketPriceMarginPct: number,
    amount: number,
    minAmount: number,
    volume: string,
    minVolume: string,
    buyerSecurityDeposit: number,
    triggerPrice: string,
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
    isActivated: boolean,
    isMyOffer: boolean,
    ownerNodeAddress: string,
    pubKeyRing: string,
    versionNr: string,
    protocolVersion: number,
    arbitratorSigner: string,
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
  getPaymentAccountForm(): pb_pb.PaymentAccountForm | undefined;
  setPaymentAccountForm(value?: pb_pb.PaymentAccountForm): CreatePaymentAccountRequest;
  hasPaymentAccountForm(): boolean;
  clearPaymentAccountForm(): CreatePaymentAccountRequest;

  getPaymentAccountFormAsJson(): string;
  setPaymentAccountFormAsJson(value: string): CreatePaymentAccountRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePaymentAccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePaymentAccountRequest): CreatePaymentAccountRequest.AsObject;
  static serializeBinaryToWriter(message: CreatePaymentAccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePaymentAccountRequest;
  static deserializeBinaryFromReader(message: CreatePaymentAccountRequest, reader: jspb.BinaryReader): CreatePaymentAccountRequest;
}

export namespace CreatePaymentAccountRequest {
  export type AsObject = {
    paymentAccountForm?: pb_pb.PaymentAccountForm.AsObject,
    paymentAccountFormAsJson: string,
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

  getPaymentAccountPayload(): pb_pb.PaymentAccountPayload | undefined;
  setPaymentAccountPayload(value?: pb_pb.PaymentAccountPayload): GetPaymentAccountFormRequest;
  hasPaymentAccountPayload(): boolean;
  clearPaymentAccountPayload(): GetPaymentAccountFormRequest;

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
    paymentAccountPayload?: pb_pb.PaymentAccountPayload.AsObject,
  }
}

export class GetPaymentAccountFormReply extends jspb.Message {
  getPaymentAccountForm(): pb_pb.PaymentAccountForm | undefined;
  setPaymentAccountForm(value?: pb_pb.PaymentAccountForm): GetPaymentAccountFormReply;
  hasPaymentAccountForm(): boolean;
  clearPaymentAccountForm(): GetPaymentAccountFormReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPaymentAccountFormReply.AsObject;
  static toObject(includeInstance: boolean, msg: GetPaymentAccountFormReply): GetPaymentAccountFormReply.AsObject;
  static serializeBinaryToWriter(message: GetPaymentAccountFormReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPaymentAccountFormReply;
  static deserializeBinaryFromReader(message: GetPaymentAccountFormReply, reader: jspb.BinaryReader): GetPaymentAccountFormReply;
}

export namespace GetPaymentAccountFormReply {
  export type AsObject = {
    paymentAccountForm?: pb_pb.PaymentAccountForm.AsObject,
  }
}

export class GetPaymentAccountFormAsJsonRequest extends jspb.Message {
  getPaymentMethodId(): string;
  setPaymentMethodId(value: string): GetPaymentAccountFormAsJsonRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPaymentAccountFormAsJsonRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPaymentAccountFormAsJsonRequest): GetPaymentAccountFormAsJsonRequest.AsObject;
  static serializeBinaryToWriter(message: GetPaymentAccountFormAsJsonRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPaymentAccountFormAsJsonRequest;
  static deserializeBinaryFromReader(message: GetPaymentAccountFormAsJsonRequest, reader: jspb.BinaryReader): GetPaymentAccountFormAsJsonRequest;
}

export namespace GetPaymentAccountFormAsJsonRequest {
  export type AsObject = {
    paymentMethodId: string,
  }
}

export class GetPaymentAccountFormAsJsonReply extends jspb.Message {
  getPaymentAccountFormAsJson(): string;
  setPaymentAccountFormAsJson(value: string): GetPaymentAccountFormAsJsonReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPaymentAccountFormAsJsonReply.AsObject;
  static toObject(includeInstance: boolean, msg: GetPaymentAccountFormAsJsonReply): GetPaymentAccountFormAsJsonReply.AsObject;
  static serializeBinaryToWriter(message: GetPaymentAccountFormAsJsonReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPaymentAccountFormAsJsonReply;
  static deserializeBinaryFromReader(message: GetPaymentAccountFormAsJsonReply, reader: jspb.BinaryReader): GetPaymentAccountFormAsJsonReply;
}

export namespace GetPaymentAccountFormAsJsonReply {
  export type AsObject = {
    paymentAccountFormAsJson: string,
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

export class ValidateFormFieldRequest extends jspb.Message {
  getForm(): pb_pb.PaymentAccountForm | undefined;
  setForm(value?: pb_pb.PaymentAccountForm): ValidateFormFieldRequest;
  hasForm(): boolean;
  clearForm(): ValidateFormFieldRequest;

  getFieldId(): pb_pb.PaymentAccountFormField.FieldId;
  setFieldId(value: pb_pb.PaymentAccountFormField.FieldId): ValidateFormFieldRequest;

  getValue(): string;
  setValue(value: string): ValidateFormFieldRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidateFormFieldRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ValidateFormFieldRequest): ValidateFormFieldRequest.AsObject;
  static serializeBinaryToWriter(message: ValidateFormFieldRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidateFormFieldRequest;
  static deserializeBinaryFromReader(message: ValidateFormFieldRequest, reader: jspb.BinaryReader): ValidateFormFieldRequest;
}

export namespace ValidateFormFieldRequest {
  export type AsObject = {
    form?: pb_pb.PaymentAccountForm.AsObject,
    fieldId: pb_pb.PaymentAccountFormField.FieldId,
    value: string,
  }
}

export class ValidateFormFieldReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidateFormFieldReply.AsObject;
  static toObject(includeInstance: boolean, msg: ValidateFormFieldReply): ValidateFormFieldReply.AsObject;
  static serializeBinaryToWriter(message: ValidateFormFieldReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidateFormFieldReply;
  static deserializeBinaryFromReader(message: ValidateFormFieldReply, reader: jspb.BinaryReader): ValidateFormFieldReply;
}

export namespace ValidateFormFieldReply {
  export type AsObject = {
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

export class MarketPricesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarketPricesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MarketPricesRequest): MarketPricesRequest.AsObject;
  static serializeBinaryToWriter(message: MarketPricesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarketPricesRequest;
  static deserializeBinaryFromReader(message: MarketPricesRequest, reader: jspb.BinaryReader): MarketPricesRequest;
}

export namespace MarketPricesRequest {
  export type AsObject = {
  }
}

export class MarketPricesReply extends jspb.Message {
  getMarketPriceList(): Array<MarketPriceInfo>;
  setMarketPriceList(value: Array<MarketPriceInfo>): MarketPricesReply;
  clearMarketPriceList(): MarketPricesReply;
  addMarketPrice(value?: MarketPriceInfo, index?: number): MarketPriceInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarketPricesReply.AsObject;
  static toObject(includeInstance: boolean, msg: MarketPricesReply): MarketPricesReply.AsObject;
  static serializeBinaryToWriter(message: MarketPricesReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarketPricesReply;
  static deserializeBinaryFromReader(message: MarketPricesReply, reader: jspb.BinaryReader): MarketPricesReply;
}

export namespace MarketPricesReply {
  export type AsObject = {
    marketPriceList: Array<MarketPriceInfo.AsObject>,
  }
}

export class MarketPriceInfo extends jspb.Message {
  getCurrencyCode(): string;
  setCurrencyCode(value: string): MarketPriceInfo;

  getPrice(): number;
  setPrice(value: number): MarketPriceInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarketPriceInfo.AsObject;
  static toObject(includeInstance: boolean, msg: MarketPriceInfo): MarketPriceInfo.AsObject;
  static serializeBinaryToWriter(message: MarketPriceInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarketPriceInfo;
  static deserializeBinaryFromReader(message: MarketPriceInfo, reader: jspb.BinaryReader): MarketPriceInfo;
}

export namespace MarketPriceInfo {
  export type AsObject = {
    currencyCode: string,
    price: number,
  }
}

export class MarketDepthRequest extends jspb.Message {
  getCurrencyCode(): string;
  setCurrencyCode(value: string): MarketDepthRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarketDepthRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MarketDepthRequest): MarketDepthRequest.AsObject;
  static serializeBinaryToWriter(message: MarketDepthRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarketDepthRequest;
  static deserializeBinaryFromReader(message: MarketDepthRequest, reader: jspb.BinaryReader): MarketDepthRequest;
}

export namespace MarketDepthRequest {
  export type AsObject = {
    currencyCode: string,
  }
}

export class MarketDepthReply extends jspb.Message {
  getMarketDepth(): MarketDepthInfo | undefined;
  setMarketDepth(value?: MarketDepthInfo): MarketDepthReply;
  hasMarketDepth(): boolean;
  clearMarketDepth(): MarketDepthReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarketDepthReply.AsObject;
  static toObject(includeInstance: boolean, msg: MarketDepthReply): MarketDepthReply.AsObject;
  static serializeBinaryToWriter(message: MarketDepthReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarketDepthReply;
  static deserializeBinaryFromReader(message: MarketDepthReply, reader: jspb.BinaryReader): MarketDepthReply;
}

export namespace MarketDepthReply {
  export type AsObject = {
    marketDepth?: MarketDepthInfo.AsObject,
  }
}

export class MarketDepthInfo extends jspb.Message {
  getCurrencyCode(): string;
  setCurrencyCode(value: string): MarketDepthInfo;

  getBuyPricesList(): Array<number>;
  setBuyPricesList(value: Array<number>): MarketDepthInfo;
  clearBuyPricesList(): MarketDepthInfo;
  addBuyPrices(value: number, index?: number): MarketDepthInfo;

  getBuyDepthList(): Array<number>;
  setBuyDepthList(value: Array<number>): MarketDepthInfo;
  clearBuyDepthList(): MarketDepthInfo;
  addBuyDepth(value: number, index?: number): MarketDepthInfo;

  getSellPricesList(): Array<number>;
  setSellPricesList(value: Array<number>): MarketDepthInfo;
  clearSellPricesList(): MarketDepthInfo;
  addSellPrices(value: number, index?: number): MarketDepthInfo;

  getSellDepthList(): Array<number>;
  setSellDepthList(value: Array<number>): MarketDepthInfo;
  clearSellDepthList(): MarketDepthInfo;
  addSellDepth(value: number, index?: number): MarketDepthInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarketDepthInfo.AsObject;
  static toObject(includeInstance: boolean, msg: MarketDepthInfo): MarketDepthInfo.AsObject;
  static serializeBinaryToWriter(message: MarketDepthInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarketDepthInfo;
  static deserializeBinaryFromReader(message: MarketDepthInfo, reader: jspb.BinaryReader): MarketDepthInfo;
}

export namespace MarketDepthInfo {
  export type AsObject = {
    currencyCode: string,
    buyPricesList: Array<number>,
    buyDepthList: Array<number>,
    sellPricesList: Array<number>,
    sellDepthList: Array<number>,
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

export class GetTradesRequest extends jspb.Message {
  getCategory(): GetTradesRequest.Category;
  setCategory(value: GetTradesRequest.Category): GetTradesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTradesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTradesRequest): GetTradesRequest.AsObject;
  static serializeBinaryToWriter(message: GetTradesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTradesRequest;
  static deserializeBinaryFromReader(message: GetTradesRequest, reader: jspb.BinaryReader): GetTradesRequest;
}

export namespace GetTradesRequest {
  export type AsObject = {
    category: GetTradesRequest.Category,
  }

  export enum Category { 
    OPEN = 0,
    CLOSED = 1,
    FAILED = 2,
  }
}

export class GetTradesReply extends jspb.Message {
  getTradesList(): Array<TradeInfo>;
  setTradesList(value: Array<TradeInfo>): GetTradesReply;
  clearTradesList(): GetTradesReply;
  addTrades(value?: TradeInfo, index?: number): TradeInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTradesReply.AsObject;
  static toObject(includeInstance: boolean, msg: GetTradesReply): GetTradesReply.AsObject;
  static serializeBinaryToWriter(message: GetTradesReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTradesReply;
  static deserializeBinaryFromReader(message: GetTradesReply, reader: jspb.BinaryReader): GetTradesReply;
}

export namespace GetTradesReply {
  export type AsObject = {
    tradesList: Array<TradeInfo.AsObject>,
  }
}

export class CompleteTradeRequest extends jspb.Message {
  getTradeId(): string;
  setTradeId(value: string): CompleteTradeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompleteTradeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CompleteTradeRequest): CompleteTradeRequest.AsObject;
  static serializeBinaryToWriter(message: CompleteTradeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompleteTradeRequest;
  static deserializeBinaryFromReader(message: CompleteTradeRequest, reader: jspb.BinaryReader): CompleteTradeRequest;
}

export namespace CompleteTradeRequest {
  export type AsObject = {
    tradeId: string,
  }
}

export class CompleteTradeReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompleteTradeReply.AsObject;
  static toObject(includeInstance: boolean, msg: CompleteTradeReply): CompleteTradeReply.AsObject;
  static serializeBinaryToWriter(message: CompleteTradeReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompleteTradeReply;
  static deserializeBinaryFromReader(message: CompleteTradeReply, reader: jspb.BinaryReader): CompleteTradeReply;
}

export namespace CompleteTradeReply {
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

export class GetChatMessagesRequest extends jspb.Message {
  getTradeId(): string;
  setTradeId(value: string): GetChatMessagesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetChatMessagesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetChatMessagesRequest): GetChatMessagesRequest.AsObject;
  static serializeBinaryToWriter(message: GetChatMessagesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetChatMessagesRequest;
  static deserializeBinaryFromReader(message: GetChatMessagesRequest, reader: jspb.BinaryReader): GetChatMessagesRequest;
}

export namespace GetChatMessagesRequest {
  export type AsObject = {
    tradeId: string,
  }
}

export class GetChatMessagesReply extends jspb.Message {
  getMessageList(): Array<pb_pb.ChatMessage>;
  setMessageList(value: Array<pb_pb.ChatMessage>): GetChatMessagesReply;
  clearMessageList(): GetChatMessagesReply;
  addMessage(value?: pb_pb.ChatMessage, index?: number): pb_pb.ChatMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetChatMessagesReply.AsObject;
  static toObject(includeInstance: boolean, msg: GetChatMessagesReply): GetChatMessagesReply.AsObject;
  static serializeBinaryToWriter(message: GetChatMessagesReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetChatMessagesReply;
  static deserializeBinaryFromReader(message: GetChatMessagesReply, reader: jspb.BinaryReader): GetChatMessagesReply;
}

export namespace GetChatMessagesReply {
  export type AsObject = {
    messageList: Array<pb_pb.ChatMessage.AsObject>,
  }
}

export class SendChatMessageRequest extends jspb.Message {
  getTradeId(): string;
  setTradeId(value: string): SendChatMessageRequest;

  getMessage(): string;
  setMessage(value: string): SendChatMessageRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendChatMessageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SendChatMessageRequest): SendChatMessageRequest.AsObject;
  static serializeBinaryToWriter(message: SendChatMessageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendChatMessageRequest;
  static deserializeBinaryFromReader(message: SendChatMessageRequest, reader: jspb.BinaryReader): SendChatMessageRequest;
}

export namespace SendChatMessageRequest {
  export type AsObject = {
    tradeId: string,
    message: string,
  }
}

export class SendChatMessageReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendChatMessageReply.AsObject;
  static toObject(includeInstance: boolean, msg: SendChatMessageReply): SendChatMessageReply.AsObject;
  static serializeBinaryToWriter(message: SendChatMessageReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendChatMessageReply;
  static deserializeBinaryFromReader(message: SendChatMessageReply, reader: jspb.BinaryReader): SendChatMessageReply;
}

export namespace SendChatMessageReply {
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

  getAmountAsLong(): number;
  setAmountAsLong(value: number): TradeInfo;

  getPrice(): string;
  setPrice(value: string): TradeInfo;

  getArbitratorNodeAddress(): string;
  setArbitratorNodeAddress(value: string): TradeInfo;

  getTradingPeerNodeAddress(): string;
  setTradingPeerNodeAddress(value: string): TradeInfo;

  getState(): string;
  setState(value: string): TradeInfo;

  getPhase(): string;
  setPhase(value: string): TradeInfo;

  getPeriodState(): string;
  setPeriodState(value: string): TradeInfo;

  getPayoutState(): string;
  setPayoutState(value: string): TradeInfo;

  getDisputeState(): string;
  setDisputeState(value: string): TradeInfo;

  getIsDepositPublished(): boolean;
  setIsDepositPublished(value: boolean): TradeInfo;

  getIsDepositConfirmed(): boolean;
  setIsDepositConfirmed(value: boolean): TradeInfo;

  getIsDepositUnlocked(): boolean;
  setIsDepositUnlocked(value: boolean): TradeInfo;

  getIsPaymentSent(): boolean;
  setIsPaymentSent(value: boolean): TradeInfo;

  getIsPaymentReceived(): boolean;
  setIsPaymentReceived(value: boolean): TradeInfo;

  getIsPayoutPublished(): boolean;
  setIsPayoutPublished(value: boolean): TradeInfo;

  getIsPayoutConfirmed(): boolean;
  setIsPayoutConfirmed(value: boolean): TradeInfo;

  getIsPayoutUnlocked(): boolean;
  setIsPayoutUnlocked(value: boolean): TradeInfo;

  getIsCompleted(): boolean;
  setIsCompleted(value: boolean): TradeInfo;

  getContractAsJson(): string;
  setContractAsJson(value: string): TradeInfo;

  getContract(): ContractInfo | undefined;
  setContract(value?: ContractInfo): TradeInfo;
  hasContract(): boolean;
  clearContract(): TradeInfo;

  getTradeVolume(): string;
  setTradeVolume(value: string): TradeInfo;

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
    amountAsLong: number,
    price: string,
    arbitratorNodeAddress: string,
    tradingPeerNodeAddress: string,
    state: string,
    phase: string,
    periodState: string,
    payoutState: string,
    disputeState: string,
    isDepositPublished: boolean,
    isDepositConfirmed: boolean,
    isDepositUnlocked: boolean,
    isPaymentSent: boolean,
    isPaymentReceived: boolean,
    isPayoutPublished: boolean,
    isPayoutConfirmed: boolean,
    isPayoutUnlocked: boolean,
    isCompleted: boolean,
    contractAsJson: string,
    contract?: ContractInfo.AsObject,
    tradeVolume: string,
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

  getMakerPaymentAccountPayload(): pb_pb.PaymentAccountPayload | undefined;
  setMakerPaymentAccountPayload(value?: pb_pb.PaymentAccountPayload): ContractInfo;
  hasMakerPaymentAccountPayload(): boolean;
  clearMakerPaymentAccountPayload(): ContractInfo;

  getTakerPaymentAccountPayload(): pb_pb.PaymentAccountPayload | undefined;
  setTakerPaymentAccountPayload(value?: pb_pb.PaymentAccountPayload): ContractInfo;
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
    makerPaymentAccountPayload?: pb_pb.PaymentAccountPayload.AsObject,
    takerPaymentAccountPayload?: pb_pb.PaymentAccountPayload.AsObject,
    makerPayoutAddressString: string,
    takerPayoutAddressString: string,
    lockTime: number,
    arbitratorNodeAddress: string,
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

export class GetXmrSeedRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetXmrSeedRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetXmrSeedRequest): GetXmrSeedRequest.AsObject;
  static serializeBinaryToWriter(message: GetXmrSeedRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetXmrSeedRequest;
  static deserializeBinaryFromReader(message: GetXmrSeedRequest, reader: jspb.BinaryReader): GetXmrSeedRequest;
}

export namespace GetXmrSeedRequest {
  export type AsObject = {
  }
}

export class GetXmrSeedReply extends jspb.Message {
  getSeed(): string;
  setSeed(value: string): GetXmrSeedReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetXmrSeedReply.AsObject;
  static toObject(includeInstance: boolean, msg: GetXmrSeedReply): GetXmrSeedReply.AsObject;
  static serializeBinaryToWriter(message: GetXmrSeedReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetXmrSeedReply;
  static deserializeBinaryFromReader(message: GetXmrSeedReply, reader: jspb.BinaryReader): GetXmrSeedReply;
}

export namespace GetXmrSeedReply {
  export type AsObject = {
    seed: string,
  }
}

export class GetXmrPrimaryAddressRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetXmrPrimaryAddressRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetXmrPrimaryAddressRequest): GetXmrPrimaryAddressRequest.AsObject;
  static serializeBinaryToWriter(message: GetXmrPrimaryAddressRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetXmrPrimaryAddressRequest;
  static deserializeBinaryFromReader(message: GetXmrPrimaryAddressRequest, reader: jspb.BinaryReader): GetXmrPrimaryAddressRequest;
}

export namespace GetXmrPrimaryAddressRequest {
  export type AsObject = {
  }
}

export class GetXmrPrimaryAddressReply extends jspb.Message {
  getPrimaryAddress(): string;
  setPrimaryAddress(value: string): GetXmrPrimaryAddressReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetXmrPrimaryAddressReply.AsObject;
  static toObject(includeInstance: boolean, msg: GetXmrPrimaryAddressReply): GetXmrPrimaryAddressReply.AsObject;
  static serializeBinaryToWriter(message: GetXmrPrimaryAddressReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetXmrPrimaryAddressReply;
  static deserializeBinaryFromReader(message: GetXmrPrimaryAddressReply, reader: jspb.BinaryReader): GetXmrPrimaryAddressReply;
}

export namespace GetXmrPrimaryAddressReply {
  export type AsObject = {
    primaryAddress: string,
  }
}

export class GetXmrNewSubaddressRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetXmrNewSubaddressRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetXmrNewSubaddressRequest): GetXmrNewSubaddressRequest.AsObject;
  static serializeBinaryToWriter(message: GetXmrNewSubaddressRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetXmrNewSubaddressRequest;
  static deserializeBinaryFromReader(message: GetXmrNewSubaddressRequest, reader: jspb.BinaryReader): GetXmrNewSubaddressRequest;
}

export namespace GetXmrNewSubaddressRequest {
  export type AsObject = {
  }
}

export class GetXmrNewSubaddressReply extends jspb.Message {
  getSubaddress(): string;
  setSubaddress(value: string): GetXmrNewSubaddressReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetXmrNewSubaddressReply.AsObject;
  static toObject(includeInstance: boolean, msg: GetXmrNewSubaddressReply): GetXmrNewSubaddressReply.AsObject;
  static serializeBinaryToWriter(message: GetXmrNewSubaddressReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetXmrNewSubaddressReply;
  static deserializeBinaryFromReader(message: GetXmrNewSubaddressReply, reader: jspb.BinaryReader): GetXmrNewSubaddressReply;
}

export namespace GetXmrNewSubaddressReply {
  export type AsObject = {
    subaddress: string,
  }
}

export class GetXmrTxsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetXmrTxsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetXmrTxsRequest): GetXmrTxsRequest.AsObject;
  static serializeBinaryToWriter(message: GetXmrTxsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetXmrTxsRequest;
  static deserializeBinaryFromReader(message: GetXmrTxsRequest, reader: jspb.BinaryReader): GetXmrTxsRequest;
}

export namespace GetXmrTxsRequest {
  export type AsObject = {
  }
}

export class GetXmrTxsReply extends jspb.Message {
  getTxsList(): Array<XmrTx>;
  setTxsList(value: Array<XmrTx>): GetXmrTxsReply;
  clearTxsList(): GetXmrTxsReply;
  addTxs(value?: XmrTx, index?: number): XmrTx;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetXmrTxsReply.AsObject;
  static toObject(includeInstance: boolean, msg: GetXmrTxsReply): GetXmrTxsReply.AsObject;
  static serializeBinaryToWriter(message: GetXmrTxsReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetXmrTxsReply;
  static deserializeBinaryFromReader(message: GetXmrTxsReply, reader: jspb.BinaryReader): GetXmrTxsReply;
}

export namespace GetXmrTxsReply {
  export type AsObject = {
    txsList: Array<XmrTx.AsObject>,
  }
}

export class XmrTx extends jspb.Message {
  getHash(): string;
  setHash(value: string): XmrTx;

  getFee(): string;
  setFee(value: string): XmrTx;

  getIsConfirmed(): boolean;
  setIsConfirmed(value: boolean): XmrTx;

  getIsLocked(): boolean;
  setIsLocked(value: boolean): XmrTx;

  getHeight(): number;
  setHeight(value: number): XmrTx;

  getTimestamp(): number;
  setTimestamp(value: number): XmrTx;

  getIncomingTransfersList(): Array<XmrIncomingTransfer>;
  setIncomingTransfersList(value: Array<XmrIncomingTransfer>): XmrTx;
  clearIncomingTransfersList(): XmrTx;
  addIncomingTransfers(value?: XmrIncomingTransfer, index?: number): XmrIncomingTransfer;

  getOutgoingTransfer(): XmrOutgoingTransfer | undefined;
  setOutgoingTransfer(value?: XmrOutgoingTransfer): XmrTx;
  hasOutgoingTransfer(): boolean;
  clearOutgoingTransfer(): XmrTx;

  getMetadata(): string;
  setMetadata(value: string): XmrTx;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): XmrTx.AsObject;
  static toObject(includeInstance: boolean, msg: XmrTx): XmrTx.AsObject;
  static serializeBinaryToWriter(message: XmrTx, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): XmrTx;
  static deserializeBinaryFromReader(message: XmrTx, reader: jspb.BinaryReader): XmrTx;
}

export namespace XmrTx {
  export type AsObject = {
    hash: string,
    fee: string,
    isConfirmed: boolean,
    isLocked: boolean,
    height: number,
    timestamp: number,
    incomingTransfersList: Array<XmrIncomingTransfer.AsObject>,
    outgoingTransfer?: XmrOutgoingTransfer.AsObject,
    metadata: string,
  }
}

export class XmrDestination extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): XmrDestination;

  getAmount(): string;
  setAmount(value: string): XmrDestination;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): XmrDestination.AsObject;
  static toObject(includeInstance: boolean, msg: XmrDestination): XmrDestination.AsObject;
  static serializeBinaryToWriter(message: XmrDestination, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): XmrDestination;
  static deserializeBinaryFromReader(message: XmrDestination, reader: jspb.BinaryReader): XmrDestination;
}

export namespace XmrDestination {
  export type AsObject = {
    address: string,
    amount: string,
  }
}

export class XmrIncomingTransfer extends jspb.Message {
  getAmount(): string;
  setAmount(value: string): XmrIncomingTransfer;

  getAccountIndex(): number;
  setAccountIndex(value: number): XmrIncomingTransfer;

  getSubaddressIndex(): number;
  setSubaddressIndex(value: number): XmrIncomingTransfer;

  getAddress(): string;
  setAddress(value: string): XmrIncomingTransfer;

  getNumSuggestedConfirmations(): number;
  setNumSuggestedConfirmations(value: number): XmrIncomingTransfer;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): XmrIncomingTransfer.AsObject;
  static toObject(includeInstance: boolean, msg: XmrIncomingTransfer): XmrIncomingTransfer.AsObject;
  static serializeBinaryToWriter(message: XmrIncomingTransfer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): XmrIncomingTransfer;
  static deserializeBinaryFromReader(message: XmrIncomingTransfer, reader: jspb.BinaryReader): XmrIncomingTransfer;
}

export namespace XmrIncomingTransfer {
  export type AsObject = {
    amount: string,
    accountIndex: number,
    subaddressIndex: number,
    address: string,
    numSuggestedConfirmations: number,
  }
}

export class XmrOutgoingTransfer extends jspb.Message {
  getAmount(): string;
  setAmount(value: string): XmrOutgoingTransfer;

  getAccountIndex(): number;
  setAccountIndex(value: number): XmrOutgoingTransfer;

  getSubaddressIndicesList(): Array<number>;
  setSubaddressIndicesList(value: Array<number>): XmrOutgoingTransfer;
  clearSubaddressIndicesList(): XmrOutgoingTransfer;
  addSubaddressIndices(value: number, index?: number): XmrOutgoingTransfer;

  getDestinationsList(): Array<XmrDestination>;
  setDestinationsList(value: Array<XmrDestination>): XmrOutgoingTransfer;
  clearDestinationsList(): XmrOutgoingTransfer;
  addDestinations(value?: XmrDestination, index?: number): XmrDestination;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): XmrOutgoingTransfer.AsObject;
  static toObject(includeInstance: boolean, msg: XmrOutgoingTransfer): XmrOutgoingTransfer.AsObject;
  static serializeBinaryToWriter(message: XmrOutgoingTransfer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): XmrOutgoingTransfer;
  static deserializeBinaryFromReader(message: XmrOutgoingTransfer, reader: jspb.BinaryReader): XmrOutgoingTransfer;
}

export namespace XmrOutgoingTransfer {
  export type AsObject = {
    amount: string,
    accountIndex: number,
    subaddressIndicesList: Array<number>,
    destinationsList: Array<XmrDestination.AsObject>,
  }
}

export class CreateXmrTxRequest extends jspb.Message {
  getDestinationsList(): Array<XmrDestination>;
  setDestinationsList(value: Array<XmrDestination>): CreateXmrTxRequest;
  clearDestinationsList(): CreateXmrTxRequest;
  addDestinations(value?: XmrDestination, index?: number): XmrDestination;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateXmrTxRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateXmrTxRequest): CreateXmrTxRequest.AsObject;
  static serializeBinaryToWriter(message: CreateXmrTxRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateXmrTxRequest;
  static deserializeBinaryFromReader(message: CreateXmrTxRequest, reader: jspb.BinaryReader): CreateXmrTxRequest;
}

export namespace CreateXmrTxRequest {
  export type AsObject = {
    destinationsList: Array<XmrDestination.AsObject>,
  }
}

export class CreateXmrTxReply extends jspb.Message {
  getTx(): XmrTx | undefined;
  setTx(value?: XmrTx): CreateXmrTxReply;
  hasTx(): boolean;
  clearTx(): CreateXmrTxReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateXmrTxReply.AsObject;
  static toObject(includeInstance: boolean, msg: CreateXmrTxReply): CreateXmrTxReply.AsObject;
  static serializeBinaryToWriter(message: CreateXmrTxReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateXmrTxReply;
  static deserializeBinaryFromReader(message: CreateXmrTxReply, reader: jspb.BinaryReader): CreateXmrTxReply;
}

export namespace CreateXmrTxReply {
  export type AsObject = {
    tx?: XmrTx.AsObject,
  }
}

export class RelayXmrTxRequest extends jspb.Message {
  getMetadata(): string;
  setMetadata(value: string): RelayXmrTxRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RelayXmrTxRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RelayXmrTxRequest): RelayXmrTxRequest.AsObject;
  static serializeBinaryToWriter(message: RelayXmrTxRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RelayXmrTxRequest;
  static deserializeBinaryFromReader(message: RelayXmrTxRequest, reader: jspb.BinaryReader): RelayXmrTxRequest;
}

export namespace RelayXmrTxRequest {
  export type AsObject = {
    metadata: string,
  }
}

export class RelayXmrTxReply extends jspb.Message {
  getHash(): string;
  setHash(value: string): RelayXmrTxReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RelayXmrTxReply.AsObject;
  static toObject(includeInstance: boolean, msg: RelayXmrTxReply): RelayXmrTxReply.AsObject;
  static serializeBinaryToWriter(message: RelayXmrTxReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RelayXmrTxReply;
  static deserializeBinaryFromReader(message: RelayXmrTxReply, reader: jspb.BinaryReader): RelayXmrTxReply;
}

export namespace RelayXmrTxReply {
  export type AsObject = {
    hash: string,
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
  getBalance(): string;
  setBalance(value: string): XmrBalanceInfo;

  getAvailableBalance(): string;
  setAvailableBalance(value: string): XmrBalanceInfo;

  getPendingBalance(): string;
  setPendingBalance(value: string): XmrBalanceInfo;

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
    balance: string,
    availableBalance: string,
    pendingBalance: string,
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

