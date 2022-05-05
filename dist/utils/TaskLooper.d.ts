/// <reference types="node" />
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
    constructor(fn: () => Promise<void>);
    /**
     * Start the task loop.
     *
     * @param {int} periodInMs the loop period in milliseconds
     */
    start(periodInMs: number): void;
    /**
     * Stop the task loop.
     */
    stop(): void;
    _runLoop(periodInMs: number): Promise<void>;
}
