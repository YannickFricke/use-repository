module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    rootDir: './src',
    collectCoverage: true,
    coverageReporters: ['lcov'],
    coverageDirectory: '../coverage',
};
