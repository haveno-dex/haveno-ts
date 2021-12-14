const assert = require("assert");
const console = require('console');

/**
 * Collection of utilities for working with Haveno.
 */
class HavenoUtils {
    
  static LOG_LEVEL = 0;
    
  /**
   * Log a message.
   *
   * @param {int} level - log level of the message
   * @param {string} msg - message to log
   */
  static log(level: number, msg: string) {
    assert(level === parseInt(level + "", 10) && level >= 0, "Log level must be an integer >= 0");
    if (HavenoUtils.LOG_LEVEL >= level) console.log(msg);
  }
  
  /**
   * Set the log level with 0 being least verbose.
   *
   * @param {int} level - the log level
   */
  static async setLogLevel(level: number) {
    assert(level === parseInt(level + "", 10) && level >= 0, "Log level must be an integer >= 0");
    HavenoUtils.LOG_LEVEL = level;
  }
  
  /**
   * Get the log level.
   *
   * @return {int} the current log level
   */
  static getLogLevel(): number {
    return HavenoUtils.LOG_LEVEL;
  }
}

export {HavenoUtils};
