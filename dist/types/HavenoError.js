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
 * Haveno error with message and code.
 */
class HavenoError extends Error {
    /**
     * Create the error with a message and code.
     *
     * @param {string} msg - the error message
     * @param {number} code
     */
    constructor(msg, code) {
        super(msg);
        this.code = code;
    }
}
exports.default = HavenoError;
//# sourceMappingURL=HavenoError.js.map