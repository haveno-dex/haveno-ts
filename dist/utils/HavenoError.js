"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Haveno error with message and code.
 */
class HavenoError extends Error {
    /**
     * Create the error with a message and code.
     *
     * @param {string} msg - the error message
     * @param {number} code
     */
    constructor(msg, code) {
        super(msg);
        this.code = code;
    }
}
exports.default = HavenoError;
//# sourceMappingURL=HavenoError.js.map