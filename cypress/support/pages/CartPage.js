/// <reference types="cypress" />

class CartPage {
  pageObjects = {
    title: () => cy.get('.title'),
    cartItem: () => cy.get('.cart_item'),
    checkoutButton: () => cy.get('.checkout_button'),
    cartProductList: () => cy.get('[data-test="cart-list"]'),
    backToProductsButton: () => cy.get('[data-test="back-to-products"]'),

  };

  getCartTitle(expectedTitle) {
    return this.pageObjects.title().invoke('text').then(($title) => {
      const trimmedText = $title.trim();
      cy.log('Cart title is: ' + trimmedText);
      return cy.wrap(trimmedText); // Wrap the text before returning
    });
  }

    validateCartItem() {
        this.pageObjects.cartItem().should('be.visible');
        cy.log('Cart item is visible');
        return this;
    }

    getTotalCartItemCount() {
    return cy.get('.cart_quantity').then(($elements) => {
      let totalCount = 0;
      $elements.each((index, element) => {
        const quantity = parseInt(Cypress.$(element).text().trim(), 10);
        totalCount += isNaN(quantity) ? 0 : quantity; // Add to total if valid number
      });
      cy.log('Total cart item count is: ' + totalCount);
      return cy.wrap(totalCount.toString()); // Convert to string for comparison
    });
  }

  clickCheckoutButton() {
    this.pageObjects.checkoutButton().click();
    cy.log('Checkout button clicked');
    return this;
    }

    clickBackToProductsButton() {
        this.pageObjects.backToProductsButton().click();
        cy.log('Back to Products button clicked');
        return this;
    }

}

export default new CartPage();
