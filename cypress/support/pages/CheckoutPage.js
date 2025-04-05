class CheckoutPage {

    pageobjects = {
        checkoutTitle: () => cy.get('span.title'),
        continueButton: () => cy.get('[data-test="continue"]'),
        firstNameInput: () => cy.get('input#first-name'),
        lastNameInput: () => cy.get('input#last-name'),
        zipCodeInput: () => cy.get('input#postal-code'),
        finishButton: () => cy.get('[data-test="finish"]'),
        subtotal: () => cy.get('.summary_subtotal_label'),
    };

    clickContinueButton() {
        this.pageobjects.continueButton().click(); 
        cy.log('Continue button clicked');
        return this;
    }

    fillFirstName(firstName) {
        this.pageobjects.firstNameInput().type(firstName);
        cy.log('First name filled with: ' + firstName);
        return this;
    }

    fillLastName(lastName) {
        this.pageobjects.lastNameInput().type(lastName);
        cy.log('Last name filled with: ' + lastName);
        return this;
    }

    fillZipCode(zipCode) {
        this.pageobjects.zipCodeInput().type(zipCode);
        cy.log('Zip code filled with: ' + zipCode);
        return this;
    }

    clickContinueButton() {
        this.pageobjects.continueButton().click(); 
        cy.log('Continue button clicked');
        return this;
    }

    getItemSubtotal() {
        this.pageobjects.subtotal().invoke('text') // Get the text content of the element
      .then((subtotalText) => {
        const subtotal = parseFloat(subtotalText.replace('Item total: $', '')); // Remove the label and '$', then convert to a number
        cy.log(`The subtotal is: ${subtotal}`); // Log the subtotal
        return cy.wrap(subtotal);
      });
    
      }

  clickFinishButton() {
    this.pageobjects.finishButton().click();
    cy.log('Finish button clicked');
    return this;
  }
    
}

export default new CheckoutPage();
