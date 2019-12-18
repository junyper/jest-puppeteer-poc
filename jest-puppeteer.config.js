// https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-environment-puppeteer#jest-puppeteerconfigjs
module.exports = {
    launch: {
    // https://github.com/puppeteer/puppeteer/blob/master/docs/api.md#puppeteerlaunchoptions
        devtools: Boolean(process.env.WATCH_MODE)
    },
    browser: 'chromium' // 'firefox
}
