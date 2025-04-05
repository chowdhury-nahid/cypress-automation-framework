/// <reference types="cypress" />
import LoginPage from "../pages/LoginPage";

const baseUrl = 'https://www.saucedemo.com/';
let userName = Cypress.env('username');
let password = Cypress.env('password');

class LoginFacade {
    standardUserLogin() {
        LoginPage.visitLoginPage()
            .fillUsername(userName)
            .fillPassword(password)
            .clickLogin();
        cy.url().should('eq', baseUrl + 'inventory.html');
        return this;
    }
}

export default new LoginFacade();