/// <reference types="cypress" />

class CommonPage {

    pageObjects = {
        title: () => cy.get('.title', { timeout: 10000 }).should('be.visible'),
        
    }

  validateCurrentUrl(portionofExpectedUrl) {
    this.getCurrentUrl().should('include', portionofExpectedUrl);
    cy.log('Validated current URL: ' + this.getCurrentUrl()+ ' contains ' + portionofExpectedUrl);
    return this;
  }
  getCurrentUrl() {
    return cy.url().then((url) => {
      cy.log('Current URL is: ' + url);
      return cy.wrap(url); // Properly wrap the value to maintain Cypress chainability
    });
  }

  generateRandomName() {
    const randomName = Math.random().toString(36).substring(2, 7);
    cy.log('Generated random name: ' + randomName);
    return randomName;
  }

  generateRandomAlphanumericString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    cy.log('Generated random alphanumeric string: ' + result);
    return result;
  }

  validateCurrentTitle(expectedTitle) {
    this.pageObjects.title().invoke('text').then(($title) => {
      const trimmedText = $title.trim();
      cy.log('Cart title is: ' + trimmedText);
      cy.wrap(trimmedText).should('eq', expectedTitle);
    });
    return this;
  }

  validateTextIsVisible(expectedText) {
    cy.contains(expectedText).should('be.visible');
    cy.log('Validated that the text "' + expectedText + '" is visible on the page.');
    return this;
  }

  isElementVisible(selector) {
    return cy.get('body').then(($body) => {
        if ($body.find(selector).length > 0) {
            return cy.get(selector).then(($el) => {
                const isVisible = $el.is(':visible');
                cy.log('Element visibility for selector "' + selector + '": ' + isVisible);
                return cy.wrap(isVisible); // Wrap the value to maintain Cypress chainability
            });
        } else {
            cy.log('Element with selector "' + selector + '" does not exist on the page.');
            return cy.wrap(false); // Wrap the value to maintain Cypress chainability
        }
    });
  }

}

export default new CommonPage();
