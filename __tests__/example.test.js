describe('example test', () => {
  beforeAll(async () => {
    await page.goto('https://google.com');
  })

  it('should load without error', async () => {
    let text = await page.evaluate(() => document.body.textContent)

    // to pause text execution and use the dev tools:
    // await jestPuppeteer.debug() 

    expect(text).toContain('google')
  })
})
