module.exports = {

  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy" 
  },
  testEnvironment: "jsdom"
}
