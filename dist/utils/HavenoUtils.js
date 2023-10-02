"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const console_1 = __importDefault(require("console"));
const pb_pb_1 = require("../protobuf/pb_pb");
/**
 * Collection of utilities for working with Haveno.
 */
class HavenoUtils {
    /**
     * Set the log level with 0 being least verbose.
     *
     * @param {int} level - the log level
     */
    static async setLogLevel(level) {
        (0, assert_1.default)(level === parseInt(level + "", 10) && level >= 0, "Log level must be an integer >= 0");
        HavenoUtils.logLevel = level;
    }
    /**
     * Get the log level.
     *
     * @return {int} the current log level
     */
    static getLogLevel() {
        return HavenoUtils.logLevel;
    }
    /**
     * Log a message. // TODO (woodser): switch to log library?
     *
     * @param {int} level - log level of the message
     * @param {string} msg - message to log
     */
    static log(level, msg) {
        (0, assert_1.default)(level === parseInt(level + "", 10) && level >= 0, "Log level must be an integer >= 0");
        if (HavenoUtils.logLevel >= level) {
            const now = Date.now();
            const formattedTimeSinceLastLog = HavenoUtils.lastLogTimeMs ? " (+" + (now - HavenoUtils.lastLogTimeMs) + " ms)" : "\t";
            HavenoUtils.lastLogTimeMs = now;
            console_1.default.log(HavenoUtils.formatTimestamp(now) + formattedTimeSinceLastLog + "\t[L" + level + "] " + msg);
        }
    }
    /**
     * Format a timestamp as e.g. Jul-07 hh:mm:ss:ms. // TODO: move to GenUtils?
     *
     * @param {number} timestamp - the timestamp in milliseconds to format
     * @return {string} the formatted timestamp
     */
    static formatTimestamp(timestamp) {
        const date = new Date(timestamp);
        return HavenoUtils.months[date.getMonth()] + "-" + date.getDate() + " " + date.getHours() + ':' + ("0" + date.getMinutes()).substr(-2) + ':' + ("0" + date.getSeconds()).substr(-2) + ':' + ("0" + date.getMilliseconds()).substr(-2);
    }
    /**
     * Kill the given process.
     *
     * TODO (woodser): move this to monero-javascript GenUtils.js as common utility
     *
     * @param {Process} process - the nodejs child process to child
     * @param {String} signal - the kill signal, e.g. SIGTERM, SIGKILL, SIGINT (default)
     */
    static async kill(process, signal) {
        return new Promise(function (resolve, reject) {
            process.on("exit", function () { resolve(); });
            process.on("error", function (err) { reject(err); });
            process.kill(signal ? signal : "SIGINT");
        });
    }
    /**
     * Wait for the duration.
     *
     * @param {number} durationMs - the duration to wait for in milliseconds
     */
    static async waitFor(durationMs) {
        return new Promise(function (resolve) { setTimeout(resolve, durationMs); });
    }
    /**
     * Divide one bigint by another.
     *
     * @param {bigint} a dividend
     * @param {bigint} b divisor
     * @returns {number} the result
     */
    static divideBI(a, b) {
        return Number(a * 10000000000000n / b) / 10000000000000;
    }
    /**
     * Calculate the difference from a first bigint to a second, as a percentage (float).
     *
     * @param {bigint} a first bigint to get the difference from
     * @param {bigint} b second bigint to get the difference from
     * @returns {number} the percentage difference as a float
     */
    static percentageDiff(a, b) {
        return HavenoUtils.divideBI(a - b, a);
    }
    /**
     * Return the absolute value of the given bigint.
     *
     * @param {bigint} a the bigint to get the absolute value of
     * @returns {bigint} the absolute value of the given bigint
     */
    static abs(a) {
        return a < 0 ? -a : a;
    }
    /**
     * Convert XMR to atomic units.
     *
     * @param {number | string} amountXmr - amount in XMR to convert to atomic units
     * @return {bigint} amount in atomic units
     */
    static xmrToAtomicUnits(amountXmr) {
        if (typeof amountXmr === "number")
            amountXmr = "" + amountXmr;
        let decimalDivisor = 1;
        let decimalIdx = amountXmr.indexOf('.');
        if (decimalIdx > -1) {
            decimalDivisor = Math.pow(10, amountXmr.length - decimalIdx - 1);
            amountXmr = amountXmr.slice(0, decimalIdx) + amountXmr.slice(decimalIdx + 1);
        }
        return BigInt(amountXmr) * BigInt(HavenoUtils.AU_PER_XMR) / BigInt(decimalDivisor);
    }
    /**
     * Convert atomic units to XMR.
     *
     * @param {bigint | string} amountAtomicUnits - amount in atomic units to convert to XMR
     * @return {number} amount in XMR
     */
    static atomicUnitsToXmr(amountAtomicUnits) {
        if (typeof amountAtomicUnits === "string")
            amountAtomicUnits = BigInt(amountAtomicUnits);
        const quotient = amountAtomicUnits / HavenoUtils.AU_PER_XMR;
        const remainder = amountAtomicUnits % HavenoUtils.AU_PER_XMR;
        return Number(quotient) + Number(remainder) / Number(HavenoUtils.AU_PER_XMR);
    }
    // ------------------------- PAYMENT ACCOUNT FORMS --------------------------
    /**
     * Get a validated payment method id from a string or form id.
     *
     * @param {string |  PaymentAccountForm.FormId} id - identifies the payment method
     * @returns {string} the payment method id
     */
    static getPaymentMethodId(id) {
        if (typeof id === "string") {
            id = id.toUpperCase();
            if (!(id in pb_pb_1.PaymentAccountForm.FormId))
                throw Error("Invalid payment method: " + id);
            return id;
        }
        else {
            let keyByValue = getKeyByValue(pb_pb_1.PaymentAccountForm.FormId, id);
            if (!keyByValue)
                throw Error("No payment method id with form id " + id);
            return keyByValue;
        }
    }
    /**
     * Stringify a payment account form.
     *
     * @param form - form to stringify
     * @return {string} the stringified form
     */
    static formToString(form) {
        let str = "";
        for (const field of form.getFieldsList()) {
            str += field.getId() + ": " + this.getFormValue(form, field.getId()) + "\n";
        }
        return str.trim();
    }
    /**
     * Get a form field value.
     *
     * @param {PaymentAccountForm} form - form to get the field value from
     * @param {PaymentAccountFormField.FieldId} fieldId - id of the field to get the value from
     * @return {string} the form field value
     */
    // TODO: attach getter and setter to PaymentAccountForm prototype in typescript?
    static getFormValue(form, fieldId) {
        for (const field of form.getFieldsList()) {
            if (field.getId() === fieldId)
                return field.getValue();
        }
        throw new Error("PaymentAccountForm does not have field " + fieldId);
    }
    /**
     * Set a form field value.
     *
     * @param {PaymentAccountFormField.FieldId} fieldId - id of the field to set the value of
     * @param {string} value - field value to set
     * @param {PaymentAccountForm} form - form to get the field from
     * @return {string} the form field value
     */
    static setFormValue(fieldId, value, form) {
        for (const field of form.getFieldsList()) {
            if (field.getId() === fieldId) {
                field.setValue(value);
                return;
            }
        }
        throw new Error("PaymentAccountForm does not have field " + fieldId);
    }
}
exports.default = HavenoUtils;
HavenoUtils.logLevel = 0;
HavenoUtils.months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
HavenoUtils.lastLogTimeMs = 0;
HavenoUtils.AU_PER_XMR = 1000000000000n;
function getKeyByValue(object, value) {
    for (const key in object) {
        if (object.hasOwnProperty(key) && object[key] === value) {
            return key;
        }
    }
    return undefined;
}
//# sourceMappingURL=HavenoUtils.js.map