describe('Login Flow', () => {
  it(`Verify the login flow with valid credentials`, async () => {
    await browser.url('https://www.saucedemo.com/')
    const usernameInput = await $('#user-name')
    const passwordInput = await $('#password')
    const loginButton = await $('#login-button')

    await usernameInput.setValue('standard_user')
    await passwordInput.setValue('secret_sauce')
    await loginButton.click()

    const dashboardUrl = await browser.getUrl()
    expect(dashboardUrl).toBe('https://www.saucedemo.com/inventory.html')
  })
})
