
module.exports = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: [
    '/node_modules/',
    './src/components/index'
  ],
  coverageProvider: 'v8',
  testEnvironment: 'jsdom'
}
