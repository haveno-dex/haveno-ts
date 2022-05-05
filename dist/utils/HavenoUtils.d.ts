/**
 * Collection of utilities for working with Haveno.
 */
export default class HavenoUtils {
    static logLevel: number;
    static centinerosToAUMultiplier: number;
    static months: string[];
    static lastLogTimeMs: number;
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
     * @param {boolean?} warn - log the message as a warning if true
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
     * Convert centineros to atomic units.
     *
     * @param {number} centineros - denominates an amount of XMR in centineros
     * @return {BigInt} the amount denominated in atomic units
     */
    static centinerosToAtomicUnits(centineros: number): bigint;
}
