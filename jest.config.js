module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    rootDir: './src',
    collectCoverage: true,
    coverageReporters: ['lcov'],
    coverageDirectory: '../coverage',
    testRegex: '/__tests__/.*\\.(test|spec)\\.[jt]sx?$',
};
