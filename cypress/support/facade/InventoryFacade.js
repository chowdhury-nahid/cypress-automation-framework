/// <reference types="cypress" />
import CommonPage from "../pages/CommonPage";
import InventoryPage from "../pages/InventoryPage";
import LoginPage from "../pages/LoginPage";
import LoginFacade from "./LoginFacade";

// const baseUrl = LoginFacade.baseUrl; // Use the baseUrl from LoginFacade
let removeButtonSelector = '.btn.btn_secondary.btn_small.btn_inventory';

class InventoryFacade {
    validateInventoryPageItems() {
        cy.log('Validating Inventory Page Items');
        InventoryPage
            .validateInventoryPage()
            .validateMenuButton()
            .validateCartIcon();
        cy.url().should('include', 'inventory.html');
        return this;
    }

    removeAllProductsFromCart() {
        cy.log('Checking if Remove buttons are visible');

        // Confirm that at least one "Remove" button exists
        CommonPage.isElementVisible(removeButtonSelector).then((isVisible) => {
            if (isVisible) {
                cy.log('Remove buttons are visible. Counting and clicking them.');

                // Count the number of "Remove" buttons
                InventoryPage.pageObjects.productList().find(removeButtonSelector).then(($buttons) => {
                    const buttonCount = $buttons.length;
                    cy.log(`Number of Remove buttons found: ${buttonCount}`);

                    // Click each "Remove" button
                    cy.wrap($buttons).each(($button) => {
                        cy.wrap($button).click();
                        cy.log('Clicked a Remove button');
                    });
                });
            } else {
                cy.log('No Remove buttons are visible.');
            }
        });

        return this;
    }

    

}

export default new InventoryFacade();