module.exports = {
  preset: "jest-puppeteer",
  testMatch: ["**/?(*.)+(spec|test).[t]s"],
  transform: {
    "^.+\\.ts?$": "ts-jest"
  }
};
