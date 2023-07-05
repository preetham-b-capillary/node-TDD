module.exports = {
  verbose: true,
  rootDir: "./",
  moduleFileExtensions: ["js", "test.js"],
  modulePathIgnorePatterns: ["/mapperChecks/"],
  collectCoverage: true,
  coverageDirectory: "<rootDir>/reports/coverage/unit",
  coveragePathIgnorePatterns: ["/node_modules/", "index.js"],
  resetMocks: true,
  coverageReporters: ["lcov", "json", "text", "text-summary"],
  testPathIgnorePatterns: ['.integration.(test|spec).(js|jsx|ts|tsx)'], //ignore file ending with .integration.test/spec.js/jsx/ts/tsx
};