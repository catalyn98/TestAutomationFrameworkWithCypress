const URL = 'http://10.115.8.126:3002/en/6-accessories'
const CHECKBOX_HOME_ACCESSORIES =
	'section:nth-of-type(1) > .collapse > li:nth-of-type(1) > .facet-label > .custom-checkbox > .ps-shown-by-js'
const PRODUCTS = '.js-product-miniature.product-miniature'
const FIRST_PRODUCT =
	'div:nth-of-type(1) > .js-product-miniature.product-miniature'

class AccessoriesPage {
	static visitAccessoriesPage() {
		cy.visit(URL)
	}

	static clickOnCheckboxFilterCategory() {
			cy.get(CHECKBOX_HOME_ACCESSORIES).click()
	}

	static isProductsDispalyedBasedOnFilter(filter) {
		cy.get(PRODUCTS).each(elem => {
			cy.wrap(elem)
				.find('.h3.product-title a')
				.should('have.attr', 'href')
				.and('include', filter)
		})
	}

	static clickOnProduct() {
		cy.get(FIRST_PRODUCT).click()
	}
}

export default AccessoriesPage