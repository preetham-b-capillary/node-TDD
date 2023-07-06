module.exports = {
  verbose: true,
  rootDir: "./",
  moduleFileExtensions: ["js", "test.js"],
  modulePathIgnorePatterns: ["/mapperChecks/"],
  collectCoverage: true,
  coverageDirectory: "<rootDir>/reports/coverage",
  coveragePathIgnorePatterns: ["/node_modules/", "index.js"],
  resetMocks: true,
  coverageReporters: ["lcov", "json", "text", "text-summary"],
};