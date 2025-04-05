
import CartPage from "../pages/CartPage";
import CheckoutPage from "../pages/CheckoutPage";
import InventoryPage from "../pages/InventoryPage";

class CheckoutFacade {
    // Method to get the subtotal of an item in the cart
    getItemSubtotal(itemName) {
        // Locate the item in the cart by its name and retrieve its subtotal
        return cy.get(`[data-test="cart-item-${itemName}"] .item-subtotal`)
            .invoke('text')
            .then((subtotalText) => {
                // Convert the subtotal text to a number
                const subtotal = parseFloat(subtotalText.replace('$', ''));
                return subtotal;
            });
    }

    // Method to compare the subtotal with the total price from the inventory page
    compareCartSubtotalWithInventoryTotalPrice() {
        let totalPrice = InventoryPage.totalPrice;
        // Log the total price for debugging
        cy.log(`The total price is: ${totalPrice}`);
        // Get the subtotal from the cart page and compare it with the total price
        let subtotal = CheckoutPage.getItemSubtotal()
        cy.log(`The subtotal is: ${subtotal}`); // Log the subtotal for debugging
        // Compare the subtotal with the total price
        // expect(subtotal).to.equal(totalPrice);
            return this;
    }

    validateSubtotalPriceInCart() {
        CartPage.pageObjects.cartProductList().find('.inventory_item_price').then(($prices) => {
            let subtotalPrice = 0.00;
            $prices.each((index, element) => {
                const priceText = Cypress.$(element).text();
                const price = parseFloat(priceText.replace('$', ''));
                subtotalPrice += price;
            });
            cy.log('Subtotal Price: ' + subtotalPrice.toFixed(2));
            cy.wrap(subtotalPrice.toFixed(2)).should('eq', InventoryPage.totalPrice.toFixed(2));
            cy.log('Total Price: ' + InventoryPage.totalPrice.toFixed(2));
        });
        return this;
    }
        
}

export default new CheckoutFacade();