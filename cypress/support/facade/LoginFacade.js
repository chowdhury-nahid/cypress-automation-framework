/// <reference types="cypress" />
import LoginPage from "../pages/LoginPage";

const baseUrl = 'https://www.saucedemo.com/';
let userName = 'standard_user';
let password = "secret_sauce"

class LoginFacade {
    standardUserLogin() {
        LoginPage.visitLoginPage()
            .fillUsername(userName)
            .fillPassword(password)
            .submit();
        cy.url().should('eq', baseUrl + 'inventory.html');
        return this;
    }
}

export default new LoginFacade();