module.exports = {
  rootDir: './',
  verbose: true,
  moduleFileExtensions: ['js'],
  moduleDirectories: ['node_modules', 'src'],
  collectCoverage: true,
  coverageDirectory: '<rootDir>/reports/coverage/integration',
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '.tests.integration',
    '.mock.',
  ],
  clearMocks: true,
  resetMocks: true,
  transformIgnorePatterns: [],
  testRegex: ['.integration.test.js'], //file consists of .integration.test.js, constants
};
