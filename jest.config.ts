module.exports = {
  testMatch: [
      '**/*.spec.ts'
  ],
  testEnvironment: 'node',
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest'
  }
};