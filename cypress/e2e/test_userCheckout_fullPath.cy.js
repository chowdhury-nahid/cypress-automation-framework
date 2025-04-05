/// <reference types="cypress" />
import CheckoutFacade from "../support/facade/CheckoutFacade";
import InventoryFacade from "../support/facade/InventoryFacade";
import LoginFacade from "../support/facade/LoginFacade";
import CartPage from "../support/pages/CartPage";
import CheckoutPage from "../support/pages/CheckoutPage";
import CommonPage from "../support/pages/CommonPage";
import InventoryPage from "../support/pages/InventoryPage";

let product1 = 'Sauce Labs Backpack';
let product2 = 'Sauce Labs Bike Light';
let cartUrl = 'cart.html';
let cartTitle = 'Your Cart';
let cartItemCount = '2';
let checkoutFirstUrl = 'checkout-step-one.html';
let checkoutFirstTitle = 'Checkout: Your Information';
let checkoutSecondUrl = 'checkout-step-two.html';
let checkoutSecondTitle = 'Checkout: Overview';
let checkoutConfirmationTitle = 'Checkout: Complete!';

describe("User add products to cart and checkout", () => {
    before(() => {
        LoginFacade.standardUserLogin();
    });

    it("TC-001: Validate all products appear and user can add products to cart", () => {
        InventoryFacade.validateInventoryPageItems();
        InventoryPage
            .getProductList()
            .should('be.visible');
        InventoryFacade
            .removeAllProductsFromCart()
        InventoryPage
            .clickAddToCartButton(product1)
            .getProductPriceAndUpdateTotal(product1)
            .clickAddToCartButton(product2)
            .getProductPriceAndUpdateTotal(product2)
            .clickCartIcon();
        CommonPage
            .validateCurrentUrl(cartUrl);
        CartPage
            .getCartTitle()
            .should('eq', cartTitle);
        CartPage
            .getTotalCartItemCount()
            .should('eq', cartItemCount);
        CartPage
            .clickCheckoutButton();
        CommonPage
            .validateCurrentUrl(checkoutFirstUrl);
    });

    it("TC-002: Validate user can fill checkout information and complete checkout", () => {

        // cy.intercept('POST', '/api/checkout', { fixture: 'checkoutResponse.json' }).as('completeCheckoutRequest');
        // cy.intercept('GET', '/api/confirmation', { fixture: 'confirmationResponse.json' }).as('confirmationRequest');
        // cy.pause(2000);

        CommonPage
            .validateCurrentTitle(checkoutFirstTitle)
        CheckoutPage
            .fillFirstName(CommonPage.generateRandomName())
            .fillLastName(CommonPage.generateRandomName())
            .fillZipCode(CommonPage.generateRandomAlphanumericString(5))
            .clickContinueButton()

        CommonPage
            .validateCurrentUrl(checkoutSecondUrl)
            .validateCurrentTitle(checkoutSecondTitle)
            .validateTextIsVisible(product1)
            .validateTextIsVisible(product2)
            .validateTextIsVisible('Item total: $')
           

        CheckoutFacade
            .compareCartSubtotalWithInventoryTotalPrice()
            .validateSubtotalPriceInCart()

        CheckoutPage
            .clickFinishButton()
        
        CommonPage
            .validateCurrentUrl('checkout-complete.html')
            .validateCurrentTitle(checkoutConfirmationTitle)
            .validateTextIsVisible('Thank you for your order!')
            .validateTextIsVisible('Your order has been dispatched, and will arrive just as fast as the pony can get there!')
            .validateTextIsVisible('Back Home')
        
        CartPage
            .clickBackToProductsButton()
        CommonPage
            .validateCurrentUrl('inventory.html')
            .validateCurrentTitle('Products')

    });
});
