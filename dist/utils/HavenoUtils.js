"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const console_1 = __importDefault(require("console"));
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
        return Number(a * 100n / b) / 100;
    }
}
exports.default = HavenoUtils;
HavenoUtils.logLevel = 0;
HavenoUtils.months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
HavenoUtils.lastLogTimeMs = 0;
//# sourceMappingURL=HavenoUtils.js.map