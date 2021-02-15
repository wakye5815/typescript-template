import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
    testEnvironment: "node",
    preset: "ts-jest",
    transform: {
      "^.+\\.(ts|tsx)$": "ts-jest",
    },
    globals: {
      "ts-jest": {
        tsConfigFile: "tsconfig.json",
      },
    },
    testMatch: ["<rootDir>/src/__tests__/**/*.spec.+(ts|tsx|js)"],
    moduleNameMapper: {
      "^~/(.*)$": "<rootDir>/src/main/$1",
    },
    clearMocks: true,
    coverageProvider: "v8",
    moduleFileExtensions: ["ts", "tsx", "js"],
};
  
export default config