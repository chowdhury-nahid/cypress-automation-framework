

// variables
// This file contains the login page object for the Sauce Demo website.

class LoginPage {
    pageObjects= {
        
            userName: () => cy.get('#user-name'),
            password: () => cy.get('#password'),
            loginButton: () => cy.get('#login-button'),
            loginLogo: () => cy.get('.login_logo'),
        
    }
    
    visitLoginPage(loginUrl = 'https://www.saucedemo.com/') {
        cy.visit(loginUrl);
        this.pageObjects.loginLogo().should('have.text', 'Swag Labs');
        cy.log('Page title is: '+ cy.title());
        return this;
    }

    fillUsername(userName) {
        this.pageObjects.userName().type(userName);
        cy.log('Username filled with: ' + userName);
        return this; // Allows method chaining
    }

    fillPassword(password) {
        cy.get('#password').type(password);
        cy.log('Password filled');
        return this;
    }

    clickLogin() {
        cy.get('#login-button').click();
        cy.log('Login button clicked');
        return this;
    }
}

export default new LoginPage();