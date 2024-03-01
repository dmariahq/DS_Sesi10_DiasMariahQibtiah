const { Given, When, Then } = require('@wdio/cucumber-framework');

const LoginPage = require('../pageobjects/login.page.js');
const HomePage = require('../pageobjects/home.page.js');

const pages = {
    login: LoginPage
}

Given(/^Dias is on the login page$/, async () => {
    await LoginPage.open()
})

When(/^Dias login with "(.*)" credential$/, async (username) => {
    await LoginPage.login(username)
})

Then(/^Dias should see home page$/, async() => {
    await HomePage.validateHomepage()
})

Then(/^Dias should see error "(.*)"$/, async (dynamicMessage) => {
    await LoginPage.validateLockedOutUserError(dynamicMessage)
})

Then(/^Dias should see error "(.*)"$/, async (dynamicMessage) => {
    await LoginPage.validateLockedOutUserError(dynamicMessage)
})