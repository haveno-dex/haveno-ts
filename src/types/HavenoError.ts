/**
 * Haveno error with message and code.
 */
export default class HavenoError extends Error {
  
  code: number | undefined;
  
  /**
   * Create the error with a message and code.
   * 
   * @param {string} msg - the error message
   * @param {number} code
   */
  constructor(msg: string, code?: number) {
    super(msg);
    this.code = code;
  }
}
