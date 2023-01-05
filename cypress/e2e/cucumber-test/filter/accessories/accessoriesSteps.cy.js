import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import AccessoriesPage from './accessoriesPage'

Given('I open accessories page', () => {
	AccessoriesPage.visitAccessoriesPage()
})

When('I click on checkbox for "home accessories" category', () => {
	AccessoriesPage.clickOnCheckboxFilterCategory()
})

Then(
	'I should see that are displayed only the accessories for {string}',
	filter => {
		AccessoriesPage.isProductsDispalyedBasedOnFilter(filter)
	}
)

When('I click on product', () => {
	AccessoriesPage.clickOnProduct()
})