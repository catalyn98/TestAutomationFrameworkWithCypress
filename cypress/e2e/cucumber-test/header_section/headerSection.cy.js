const SIGN_IN_BUTTON = 'div#_desktop_user_info .material-icons'
const SIGN_OUT_BUTTON = '.hidden-sm-down.logout'
const LINK_CONTACT_US_PAGE = 'div#contact-link > a'
const SEARCH_FIELD = 'input[name="s"]'
const CART_COUNT = '.cart-products-count'
const LINK_CLOTHES_PAGE = 'ul#top-menu > li:nth-of-type(1) > .dropdown-item'

class HeaderSection {
	static clickSignInButton() {
		cy.get(SIGN_IN_BUTTON).click()
	}

	static verifySignOutButtonIsVisible() {
		cy.get(SIGN_OUT_BUTTON).should('be.visible')
	}

	static clickLinkContactUsPage() {
		cy.get(LINK_CONTACT_US_PAGE).click()
	}

	static searchProduct(product) {
		cy.get(SEARCH_FIELD).type(product)
		cy.get(SEARCH_FIELD).type('{enter}')
	}

	static isSearchFiledDispalyed() {
		cy.get(SEARCH_FIELD).should('be.visible')
	}

	static getCartCount(cart_count) {
		cy.wait(1000)
		cy.get(CART_COUNT).contains(cart_count)
	}

	static clickOnClothesPageLink() {
		cy.get(LINK_CLOTHES_PAGE).click()
	}
}

export default HeaderSection