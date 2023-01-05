const URL = 'http://10.115.8.126:3002/ro/men/1-1-hummingbird-printed-t-shirt.html#/1-dimensiune-s/8-culoare-alb'
const ADD_TO_CART_BUTTON = '.add-to-cart.btn.btn-primary > .material-icons.shopping-cart'
const PROCEED_TO_CHECKOUT_BUTTON_FROM_POPUP = '#blockcart-modal > div > div > div.modal-body > div > div.col-md-7 > div > div > a'
const DESCRIPTION_PRODUCT = 'div#product-description-short-2  span'

class ClothesPageDetails {

	static getClothesPageDetailsUrl() {
		cy.url().should('eq', URL)
	}

	static visitClothesPageDetailsUrl() {
		cy.visit(URL)
	}

	static clickOnAddToCart() {
		cy.get(ADD_TO_CART_BUTTON).click()
	}

    static clickOnProceedToCheckoutButtonFromPopup() {
		cy.get(PROCEED_TO_CHECKOUT_BUTTON_FROM_POPUP).click()
	}

	static getTextDescriptionProduct(property){
		cy.get(DESCRIPTION_PRODUCT).contains(property)
	}
}

export default ClothesPageDetails