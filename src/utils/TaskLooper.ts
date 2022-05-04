/**
 * Run a task in a fixed period loop.
 */
export default class TaskLooper {
    
  _fn: () => Promise<void>;
  _isStarted: boolean;
  _isLooping: boolean;
  _timeout: NodeJS.Timeout | undefined;
  
  /**
   * Build the looper with a function to invoke on a fixed period loop.
   * 
   * @param {function} fn - the async function to invoke
   */
  constructor(fn: () => Promise<void>) {
    this._fn = fn;
    this._isStarted = false;
    this._isLooping = false;
  }
  
  /**
   * Start the task loop.
   * 
   * @param {int} periodInMs the loop period in milliseconds
   */
  start(periodInMs: number) {
    if (this._isStarted) return;
    this._isStarted = true;
    this._runLoop(periodInMs);
  }
  
  /**
   * Stop the task loop.
   */
  stop() {
    if (!this._isStarted) throw new Error("Cannot stop TaskLooper because it's not started");
    this._isStarted = false;
    clearTimeout(this._timeout!);
    this._timeout = undefined;
  }
  
  async _runLoop(periodInMs: number) {
    this._isLooping = true;
    while (this._isStarted) {
      const startTime = Date.now();
      await this._fn();
      if (this._isStarted) await new Promise((resolve) => { this._timeout = setTimeout(resolve, periodInMs - (Date.now() - startTime)); });
    }
    this._isLooping = false;
  }
}
