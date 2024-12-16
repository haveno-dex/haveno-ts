"use strict";
/*
 * Copyright Haveno
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Run a task in a fixed period loop.
 */
class TaskLooper {
    /**
     * Build the looper with a function to invoke on a fixed period loop.
     *
     * @param {function} fn - the async function to invoke
     */
    constructor(fn) {
        this._fn = fn;
        this._isStarted = false;
        this._isLooping = false;
    }
    /**
     * Start the task loop.
     *
     * @param {number} periodInMs the loop period in milliseconds
     * @param {boolean} targetFixedPeriod specifies if the task should target a fixed period by accounting for run time (default false)
     * @return {TaskLooper} this instance for chaining
     */
    start(periodInMs, targetFixedPeriod) {
        if (periodInMs <= 0)
            throw new Error("Looper period must be greater than 0 ms");
        if (this._isStarted)
            return;
        this._isStarted = true;
        this._runLoop(periodInMs, targetFixedPeriod);
    }
    /**
     * Stop the task loop.
     */
    stop() {
        if (!this._isStarted)
            throw new Error("Cannot stop TaskLooper because it's not started");
        this._isStarted = false;
        clearTimeout(this._timeout);
        this._timeout = undefined;
    }
    async _runLoop(periodInMs, targetFixedPeriod) {
        this._isLooping = true;
        while (this._isStarted) {
            const startTime = Date.now();
            await this._fn();
            if (this._isStarted)
                await new Promise((resolve) => { this._timeout = setTimeout(resolve, periodInMs - (targetFixedPeriod ? (Date.now() - startTime) : 0)); });
        }
        this._isLooping = false;
    }
}
exports.default = TaskLooper;
//# sourceMappingURL=TaskLooper.js.map