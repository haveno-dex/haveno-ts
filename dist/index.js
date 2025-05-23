"use strict";
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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HavenoUtils = exports.HavenoError = exports.HavenoClient = void 0;
try {
    new XMLHttpRequest();
}
catch {
    const xhr = require('node-xmlhttprequest');
    //@ts-ignore
    global.ProgressEvent = xhr.ProgressEvent;
    //@ts-ignore
    global.XMLHttpRequestEventTarget = xhr.XMLHttpRequestEventTarget;
    //@ts-ignore
    global.XMLHttpRequestUpload = xhr.XMLHttpRequestUpload;
    //@ts-ignore
    global.XMLHttpRequest = xhr.XMLHttpRequest;
}
const HavenoClient_1 = __importDefault(require("./HavenoClient"));
exports.HavenoClient = HavenoClient_1.default;
const HavenoError_1 = __importDefault(require("./types/HavenoError"));
exports.HavenoError = HavenoError_1.default;
const HavenoUtils_1 = __importDefault(require("./utils/HavenoUtils"));
exports.HavenoUtils = HavenoUtils_1.default;
__exportStar(require("./protobuf/grpc_pb"), exports);
__exportStar(require("./protobuf/pb_pb"), exports);
//# sourceMappingURL=index.js.map