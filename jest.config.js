module.exports = {
  roots: [
    "<rootDir>/src"
  ],
  // transform: {
  //   "^.+\\.tsx?$": "ts-jest"
  // },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  "moduleNameMapper": {
    "\\.(css|less|scss)$": "identity-obj-proxy"
  },
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/'],
  transformIgnorePatterns: ['<rootDir>/node_modules'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)'],
  // setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']
}