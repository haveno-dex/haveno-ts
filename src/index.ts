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

import HavenoClient from "./HavenoClient";
import HavenoError from "./types/HavenoError";
import HavenoUtils from "./utils/HavenoUtils";

export { HavenoClient };
export { HavenoError };
export { HavenoUtils };
export * from "./protobuf/grpc_pb";
export * from "./protobuf/pb_pb";
