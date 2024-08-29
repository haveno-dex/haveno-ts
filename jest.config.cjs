module.exports = {
  rootDir: "./",
  preset: "ts-jest/presets/default-esm",
  resolver: "ts-jest-resolver",
  collectCoverage: false,
  collectCoverageFrom: [
    "**/*.{js,jsx,ts}",
    "!**/node_modules/**",
  ],
  coveragePathIgnorePatterns: [
    ".*/src/.*\\.d\\.ts",
    ".*/src/.*\\.test\\.{ts,js}",
    ".*/src/.*\\.test\\.headless\\.js",
  ],
  roots: [
    "<rootDir>/src",
  ],
  testMatch: [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)",
  ],
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        tsconfig: "tsconfig.json"
      },
    ],
  },
  testEnvironment: "node",
  verbose: true,
  maxConcurrency: 1,
  testTimeout: 180000,
  testPathIgnorePatterns: [
    "/node_modules/",
    "/dist/",
  ],
  globals: {
    window: {},
    XMLHttpRequest: require("node-xmlhttprequest").XMLHttpRequest,
  },
};
