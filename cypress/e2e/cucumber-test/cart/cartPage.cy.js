const URL = 'http://10.115.8.126:3002/ro/cos?action=show'
const PROCEED_TO_CHECKOUT_BUTTON_FROM_CART_PAGE = '.cart-detailed-actions .btn-primary'
const INCREASE_OUANTITY = '.bootstrap-touchspin-up.btn.btn-touchspin.js-touchspin > .material-icons.touchspin-up'
const TOTAL_COSTS = ".cart-summary-line.cart-total > .value"

class CartPage {

    static getUrlCartPage() {
		cy.url().should('eq', URL)
	}
    
    static clickOnProceedToCheckoutButtonFromCartPage() {
		cy.get(PROCEED_TO_CHECKOUT_BUTTON_FROM_CART_PAGE).click()
	}

	static increaseQuantity(){
        cy.get(INCREASE_OUANTITY).click()
    }

    static getTotalCosts(price){
        cy.get(TOTAL_COSTS).contains(price)
    }
}

export default CartPage