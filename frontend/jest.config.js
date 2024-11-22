module.exports = {
    // Collect code coverage
    collectCoverage: true,
    coverageDirectory: "coverage",
  
    testEnvironment: "jsdom",

    transform: {
      '^.+\\.jsx?$': 'babel-jest',
      '^.+\\.(jpg|jpeg|png|gif|svg|eot|otf|webp|ttf|woff|woff2|mp4|mov|webm|mp3|wav|flac|aac|ogg|m4a|mp3|mkv)$': 'jest-transform-stub'
    },

    moduleNameMapper: {
      '\\.(jpg|jpeg|png|gif)$': '<rootDir>/__mocks__/fileMock.js'
    },
  
    transformIgnorePatterns: [
      "/node_modules/(?!axios)/",
    ],
};
  