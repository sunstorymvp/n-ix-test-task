module.exports = {
  testRegex: '^.+\\.test\\.(js|jsx|ts|tsx)$',
  moduleDirectories: [
    'src',
    'node_modules',
  ],
  moduleNameMapper: {
    '\\.(jpeg|jpg|png|eot|otf|ttf|woff|woff2|svg)$': '<rootDir>/jest.file-stub.js',
    '\\.css$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: [
    '<rootDir>/jest.setup.js',
  ],
  transform: {
    '.+\\.jsx?$': 'babel-jest',
    '.+\\.tsx?$': 'ts-jest',
  },
  testPathIgnorePatterns: [
    '<rootDir>/build/',
    '<rootDir>/node_modules/',
  ],
  snapshotResolver: '<rootDir>/jest.snapshot-resolver.js',
  testEnvironment: 'jsdom',
};
