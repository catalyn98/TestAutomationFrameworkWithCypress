const PRODUCTS_BASED_ON_SEARCH = '.js-product-miniature.product-miniature'
const WARNING_MESSAGE = 'section#content'

class SearchResultPage {
	static isProductsDispalyedBasedOnSearch() {
		const word = 'mug'
		cy.get(PRODUCTS_BASED_ON_SEARCH).each(elem => {
			cy.wrap(elem)
				.find('.h3.product-title a')
				.should('have.attr', 'href')
				.and('include', word)
		})
	}

	static isWarningMessageDisplayed() {
		cy.get(WARNING_MESSAGE).should('be.visible')
	}
}

export default SearchResultPage