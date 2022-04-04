module.exports = {
  moduleNameMapper: {
    '^src/(.*)': '<rootDir>/src/$1'
  },
  setupFiles: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: ['/.next', '/node_modules']
};
