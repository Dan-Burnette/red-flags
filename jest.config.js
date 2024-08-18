const config = {
  verbose: true,
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: [
    './red-flags.js'
  ]
};

module.exports = config;
