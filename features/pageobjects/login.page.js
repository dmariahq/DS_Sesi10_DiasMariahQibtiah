const { $, expect } = require('@wdio/globals')
const Page = require('./page');

class LoginPage extends Page {
    // NOTE: elements collection
    get fieldUsername () { return $('#user-name'); }
    get fieldPassword () { return $('#password'); }
    get buttonLogin () { return $('#login-button'); }
    errorLockedOutUser = (dynamicMessage) => $(`//h3[text()="${dynamicMessage}"]`)

    async login (username) {
        await this.fieldUsername.waitForDisplayed({ timeout: 3000 });
        await this.fieldUsername.setValue(username);
        await this.fieldPassword.setValue('process.env.PASSWORD_SAUCEDEMO');
        await this.buttonLogin.click();
    }

    async validateLockedOutUserError (dynamicMessage) {
        // await this.errorLockedOutUser(dynamicMessage).waitForDisplayed({ timeout: 3000 });
        expect(this.errorLockedOutUser(dynamicMessage)).toBeDisplayed()
    } 


    async validatePerformanceGlitchUserCredentials () {
        await this.fieldUsername.waitForDisplayed({ timeout: 3000 });
        await this.fieldUsername.setValue(username);
        await this.fieldPassword.setValue('process.env.PASSWORD_SAUCEDEMO');
        await this.buttonLogin.click();
        expect(this.PerformanceGlitchUser).toBeDisplayed()
    }


    open () {
        return super.open('/'); // NOTE: will open https://www.saucedemo.com/
    }
}

module.exports = new LoginPage();


