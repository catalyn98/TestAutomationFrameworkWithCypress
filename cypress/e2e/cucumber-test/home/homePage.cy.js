const URL = 'http://10.115.8.126:3002/ro/'
const FIRST_POPULAR_PRODUCT = 'img[alt="Hummingbird printed t-shirt"]'
const POPULAR_PRODUCTS = '.js-product-miniature.product-miniature'

class HomePage {
	static getUrlHomePage() {
		cy.url().should('eq', URL)
	}

	static visitHomePage() {
		cy.visit(URL)
	}

	static verifyIfMostPopularProductIsDisplayed() {
		cy.get(POPULAR_PRODUCTS).should('be.visible')
		cy.get(POPULAR_PRODUCTS).should('have.length', 8)
	}

	static clickOnFisrtPopularProduct() {
		cy.get(FIRST_POPULAR_PRODUCT).click()
	}
}

export default HomePage