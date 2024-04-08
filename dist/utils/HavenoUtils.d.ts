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
     * TODO (woodser): move this to monero-ts GenUtils.ts as common utility
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
     * Divide one atomic units by another.
     *
     * @param {bigint} au1 dividend
     * @param {bigint} au2 divisor
     * @returns {number} the result
     */
    static divide(au1: bigint, au2: bigint): number;
    /**
     * Multiply a bigint by a number or bigint.
     *
     * @param a bigint to multiply
     * @param b bigint or number to multiply by
     * @returns the product as a bigint
     */
    static multiply(a: bigint, b: number | bigint): bigint;
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
     * Return the maximum of two bigints.
     *
     * @param {bigint} bi1 first bigint
     * @param {bigint} bi2 second bigint
     * @returns {bigint} the maximum of the two bigints
     */
    static max(bi1: bigint, bi2: bigint): bigint;
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
     * Determine if a form has a field.
     *
     * @param {PaymentAccountForm} form - form to check
     * @param {PaymentAccountFormField.FieldId} fieldId - id of the field to check for
     * @return {boolean} true if the form has the field, false otherwise
     */
    static hasFormField(form: PaymentAccountForm, fieldId: PaymentAccountFormField.FieldId): boolean;
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
     * @param {PaymentAccountForm} form - form to get the field from
     * @param {PaymentAccountFormField.FieldId} fieldId - id of the field to set the value of
     * @param {string} value - field value to set
     * @return {string} the form field value
     */
    static setFormValue(form: PaymentAccountForm, fieldId: PaymentAccountFormField.FieldId, value: string): void;
}
