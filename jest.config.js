/** @type {import('ts-jest').JestConfigWithTsJest} */

module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    collectCoverageFrom: [
        '**/src/**',
        '!**/node_modules/**',
        '!**/out-tsc/**',
    ],
    coverageThreshold: {
        global: {
            branches: 100,
            functions: 100,
            lines: 100,
            statements: 100,
        },
    },
    coverageReporters: ['json', 'lcov', 'text-summary', 'clover'],
};