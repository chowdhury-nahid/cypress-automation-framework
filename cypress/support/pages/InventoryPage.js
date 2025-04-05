/// <reference types="cypress" />


// ***********************************************************

let inventoryPageTitle = 'Products';
let inventoryPageUrl = 'https://www.saucedemo.com/inventory.html';

class InventoryPage {
  totalPrice = 0.00; // Initialize totalPrice here
  pageObjects = {

    title: () => cy.get('.title'),
    menuButton: () => cy.get('.bm-burger-button'),
    productList: () => cy.get('.inventory_list'),
    addToCartButton: (productName) => cy.get(`[data-test="add-to-cart-${productName.trim().toLowerCase().replace(/ /g, '-')}"]`),
    removeButton: (productName) => cy.get(`[data-test="remove-${productName.trim().toLowerCase().replace(/ /g, '-')}"]`),
    cartIcon: () => cy.get('[data-test="shopping-cart-link"]'),
  }

  visitInventory() {
    cy.visit(inventoryPageUrl);
    cy.url().should('eq', inventoryPageUrl);
    cy.log('Inventory Page title is: ' + cy.title());
    return this;
  }

  validateInventoryPage() {
    cy.url().should('eq', inventoryPageUrl);
    cy.log('Inventory Page title is: ' + cy.title());
    return this;
  }

  getTitle() {
    this.pageObjects.title.should('have.text', inventoryPageTitle);
    cy.log('Page title is: ' + cy.title());
    return this;
  }

  getProductList() {
    return cy.get('.inventory_list');
  }

  clickRemoveButton(productName) {
    this.pageObjects.removeButton(productName).click();
    cy.log('Remove button clicked for product: ' + productName);
    return this;
  }

  getProductPriceAndUpdateTotal(productName) {
    this.pageObjects.removeButton(productName).parents('.inventory_item') // Find the parent element of the remove button
      .find('.inventory_item_price').invoke('text').then((priceText) => {
        const price = parseFloat(priceText.replace('$', '')); // Remove the '$' and convert to a number
        this.totalPrice += price; // Add to total price
        cy.log(`The price of ${productName} is: ${price}`); // Log the price
      });
    return this;
  }

  getTotalPrice() {
    cy.log(`The total price is: ${this.totalPrice}`); // Log the total price
    return this.totalPrice; // Return the total price
  }

  clickAddToCartButton(productName) {
    
    this.pageObjects.addToCartButton(productName).click();
    cy.log('Add to cart button clicked for product: ' + productName);
    return this;
  }

  getProductPrice(productName) {
    this.pageObjects.addToCartButton(productName).click();
    cy.log('Add to cart button clicked for product: ' + productName);
    return this;
  }

  validateMenuButton() {
    this.pageObjects.menuButton().should('be.visible');
    cy.log('Menu button is visible');
    return this;
  }

  validateCartIcon() {
    this.pageObjects.cartIcon().should('be.visible');
    cy.log('Cart icon is visible');
    return this;
  }

  clickCartIcon() {
    this.pageObjects.cartIcon().click();
    cy.log('Cart icon clicked');
    return this;
  }
}
export default new InventoryPage();