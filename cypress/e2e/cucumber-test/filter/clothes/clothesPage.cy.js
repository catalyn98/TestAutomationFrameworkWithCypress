const URL = 'http://10.115.8.126:3002/ro/3-clothes'
const CHECKBOX_WOMEN_CATEGORY = 'section:nth-of-type(1) > .collapse > li:nth-of-type(2) > .facet-label > .custom-checkbox > .ps-shown-by-js'
const CHECKBOX_MEN_CATEGORY = 'section:nth-of-type(1) > .collapse > li:nth-of-type(1) > .facet-label > .custom-checkbox > .ps-shown-by-js'
const CHECKBOX_LONG_SLEEVES_CATEGORY =
	'section:nth-of-type(4) > .collapse > li:nth-of-type(1) > .facet-label > .custom-checkbox > .ps-shown-by-js'
const CHECKBOX_SHORT_SLEEVES_CATEGORY =
	'section:nth-of-type(4) > .collapse > li:nth-of-type(2) > .facet-label > .custom-checkbox > .ps-shown-by-js'
const PRODUCTS = '.js-product-miniature.product-miniature'

class ClothesPage {
	static getUrlClothesPage() {
		cy.url().should('contains', URL)
	}

	static clickOnCheckboxGenderCategory(gender) {
		if (gender === 'women') {
			cy.get(CHECKBOX_WOMEN_CATEGORY).click()
		} else {
			cy.get(CHECKBOX_MEN_CATEGORY).click()
		}
	}

	static isProductsDispalyedBasedOnGender(gender) {
		cy.get(PRODUCTS).each(elem => {
			cy.wrap(elem)
				.find('.h3.product-title a')
				.should('have.attr', 'href')
				.and('include', gender)
		})
	}

	static visitClothesPage() {
		cy.visit(URL)
	}

	static clickOnCheckboxPropertyCategory(property) {
		if (property === 'long sleeves') {
			cy.get(CHECKBOX_LONG_SLEEVES_CATEGORY).click()
		} else {
			cy.get(CHECKBOX_SHORT_SLEEVES_CATEGORY).click()
		}
	}

	static clickOnProduct() {
		cy.get(PRODUCTS).click()
	}
}

export default ClothesPage