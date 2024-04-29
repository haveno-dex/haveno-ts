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
     * @param {number} periodInMs the loop period in milliseconds
     * @param {boolean} targetFixedPeriod specifies if the task should target a fixed period by accounting for run time (default false)
     * @return {TaskLooper} this instance for chaining
     */
    start(periodInMs: number, targetFixedPeriod: boolean): void;
    /**
     * Stop the task loop.
     */
    stop(): void;
    _runLoop(periodInMs: number, targetFixedPeriod: boolean): Promise<void>;
}
