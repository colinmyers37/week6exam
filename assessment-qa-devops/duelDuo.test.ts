
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})


test('draw button works', async () => {
    let drawButton = await driver.findElement(By.id('draw'))
    await drawButton.click()
    await driver.sleep(2000)
    let choices = await driver.findElement(By.id('choices'))
    expect(await choices.isDisplayed()).toBe(true)
})


test('add to duo buttons works', async () => {
    let drawButton = await driver.findElement(By.id('draw'))
    await drawButton.click()
    await driver.sleep(2000)
    let botButton = await driver.findElement(By.className('bot-btn'))
    await botButton.click()
    await driver.sleep(2000)
    let yourDuo = await driver.findElement(By.id('player-duo'))
    expect(await yourDuo.isDisplayed()).toBe(true)
})