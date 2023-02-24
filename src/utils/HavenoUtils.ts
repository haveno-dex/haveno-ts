import assert from "assert";
import console from "console";
import { PaymentAccountForm, PaymentAccountFormField } from "../protobuf/pb_pb";

/**
 * Collection of utilities for working with Haveno.
 */
export default class HavenoUtils {
    
  static logLevel = 0;
  static centinerosToAUMultiplier = 10000;
  static months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  static lastLogTimeMs = 0;
  
  /**
   * Set the log level with 0 being least verbose.
   *
   * @param {int} level - the log level
   */
  static async setLogLevel(level: number) {
    assert(level === parseInt(level + "", 10) && level >= 0, "Log level must be an integer >= 0");
    HavenoUtils.logLevel = level;
  }
  
  /**
   * Get the log level.
   *
   * @return {int} the current log level
   */
  static getLogLevel(): number {
    return HavenoUtils.logLevel;
  }
    
  /**
   * Log a message. // TODO (woodser): switch to log library?
   *
   * @param {int} level - log level of the message
   * @param {string} msg - message to log
   */
  static log(level: number, msg: string) {
    assert(level === parseInt(level + "", 10) && level >= 0, "Log level must be an integer >= 0");
    if (HavenoUtils.logLevel >= level) {
      const now = Date.now();
      const formattedTimeSinceLastLog = HavenoUtils.lastLogTimeMs ? " (+" + (now - HavenoUtils.lastLogTimeMs) + " ms)" : "\t";
      HavenoUtils.lastLogTimeMs = now;    
      console.log(HavenoUtils.formatTimestamp(now) + formattedTimeSinceLastLog + "\t[L" + level + "] " + msg);
    }
  }
  
  /**
   * Format a timestamp as e.g. Jul-07 hh:mm:ss:ms. // TODO: move to GenUtils?
   * 
   * @param {number} timestamp - the timestamp in milliseconds to format
   * @return {string} the formatted timestamp
   */
  static formatTimestamp(timestamp: number): string {
    const date = new Date(timestamp);
    return HavenoUtils.months[date.getMonth()] + "-" + date.getDate() + " " + date.getHours() + ':' + ("0"  + date.getMinutes()).substr(-2) + ':' + ("0" + date.getSeconds()).substr(-2) + ':' + ("0" + date.getMilliseconds()).substr(-2);
  }
  
  /**
   * Kill the given process.
   * 
   * TODO (woodser): move this to monero-javascript GenUtils.js as common utility
   * 
   * @param {Process} process - the nodejs child process to child
   * @param {String} signal - the kill signal, e.g. SIGTERM, SIGKILL, SIGINT (default)
   */
  static async kill(process: any, signal?: string): Promise<void> {
    return new Promise(function(resolve, reject) {
      process.on("exit", function() { resolve(); });
      process.on("error", function(err: any) { reject(err); });
      process.kill(signal ? signal : "SIGINT");
    });
  }
  
  /**
   * Convert centineros to atomic units.
   * 
   * @param {number} centineros - denominates an amount of XMR in centineros
   * @return {BigInt} the amount denominated in atomic units
   */
  static centinerosToAtomicUnits(centineros: number): bigint {
    return BigInt(centineros) * BigInt(HavenoUtils.centinerosToAUMultiplier);
  }

  /**
   * Stringify a payment account form.
   * 
   * @param form - form to stringify
   * @return {string} the stringified form
   */
  static formToString(form: PaymentAccountForm): string {
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
  static getFormValue(form: PaymentAccountForm, fieldId: PaymentAccountFormField.FieldId): string {
    for (const field of form.getFieldsList()) {
      if (field.getId() === fieldId) return field.getValue();
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
  static setFormValue(fieldId: PaymentAccountFormField.FieldId, value: string, form: PaymentAccountForm): void {
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
    static async waitFor(durationMs: number) {
      return new Promise(function(resolve) { setTimeout(resolve, durationMs); });
    }
}
