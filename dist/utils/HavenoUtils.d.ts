import { PaymentAccountForm, PaymentAccountFormField } from "../protobuf/pb_pb";
/**
 * Collection of utilities for working with Haveno.
 */
export default class HavenoUtils {
    static logLevel: number;
    static months: string[];
    static lastLogTimeMs: number;
    static AU_PER_XMR: bigint;
    /**
     * Set the log level with 0 being least verbose.
     *
     * @param {int} level - the log level
     */
    static setLogLevel(level: number): Promise<void>;
    /**
     * Get the log level.
     *
     * @return {int} the current log level
     */
    static getLogLevel(): number;
    /**
     * Log a message. // TODO (woodser): switch to log library?
     *
     * @param {int} level - log level of the message
     * @param {string} msg - message to log
     */
    static log(level: number, msg: string): void;
    /**
     * Format a timestamp as e.g. Jul-07 hh:mm:ss:ms. // TODO: move to GenUtils?
     *
     * @param {number} timestamp - the timestamp in milliseconds to format
     * @return {string} the formatted timestamp
     */
    static formatTimestamp(timestamp: number): string;
    /**
     * Kill the given process.
     *
     * TODO (woodser): move this to monero-javascript GenUtils.js as common utility
     *
     * @param {Process} process - the nodejs child process to child
     * @param {String} signal - the kill signal, e.g. SIGTERM, SIGKILL, SIGINT (default)
     */
    static kill(process: any, signal?: string): Promise<void>;
    /**
     * Wait for the duration.
     *
     * @param {number} durationMs - the duration to wait for in milliseconds
     */
    static waitFor(durationMs: number): Promise<unknown>;
    /**
     * Divide one bigint by another.
     *
     * @param {bigint} a dividend
     * @param {bigint} b divisor
     * @returns {number} the result
     */
    static divideBI(a: bigint, b: bigint): number;
    /**
     * Calculate the difference from a first bigint to a second, as a percentage (float).
     *
     * @param {bigint} a first bigint to get the difference from
     * @param {bigint} b second bigint to get the difference from
     * @returns {number} the percentage difference as a float
     */
    static percentageDiff(a: bigint, b: bigint): number;
    /**
     * Return the absolute value of the given bigint.
     *
     * @param {bigint} a the bigint to get the absolute value of
     * @returns {bigint} the absolute value of the given bigint
     */
    static abs(a: bigint): bigint;
    /**
     * Convert XMR to atomic units.
     *
     * @param {number | string} amountXmr - amount in XMR to convert to atomic units
     * @return {bigint} amount in atomic units
     */
    static xmrToAtomicUnits(amountXmr: number | string): bigint;
    /**
     * Convert atomic units to XMR.
     *
     * @param {bigint | string} amountAtomicUnits - amount in atomic units to convert to XMR
     * @return {number} amount in XMR
     */
    static atomicUnitsToXmr(amountAtomicUnits: bigint | string): number;
    /**
     * Get a validated payment method id from a string or form id.
     *
     * @param {string |  PaymentAccountForm.FormId} id - identifies the payment method
     * @returns {string} the payment method id
     */
    static getPaymentMethodId(id: string | PaymentAccountForm.FormId): string;
    /**
     * Stringify a payment account form.
     *
     * @param form - form to stringify
     * @return {string} the stringified form
     */
    static formToString(form: PaymentAccountForm): string;
    /**
     * Get a form field value.
     *
     * @param {PaymentAccountForm} form - form to get the field value from
     * @param {PaymentAccountFormField.FieldId} fieldId - id of the field to get the value from
     * @return {string} the form field value
     */
    static getFormValue(form: PaymentAccountForm, fieldId: PaymentAccountFormField.FieldId): string;
    /**
     * Set a form field value.
     *
     * @param {PaymentAccountFormField.FieldId} fieldId - id of the field to set the value of
     * @param {string} value - field value to set
     * @param {PaymentAccountForm} form - form to get the field from
     * @return {string} the form field value
     */
    static setFormValue(fieldId: PaymentAccountFormField.FieldId, value: string, form: PaymentAccountForm): void;
}
