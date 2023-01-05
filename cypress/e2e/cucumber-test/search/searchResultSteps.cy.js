import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import HomePage from '../home/homePage'
import HeaderSection from '../header_section/headerSection'
import SearchResultPage from './searchResultPage'

Given('I open home page', () => {
	HomePage.visitHomePage()
})

When(
	'I click on search filed, I write {string} and  I press enter',
	product => {
		HeaderSection.isSearchFiledDispalyed()
		HeaderSection.searchProduct(product)
	}
)

When('I click on search filed, I write empty string', product => {
	HeaderSection.isSearchFiledDispalyed()
})

Then('I should see different products based on search', () => {
	SearchResultPage.isProductsDispalyedBasedOnSearch()
})

Then('I should see a warning message displayed', () => {
	SearchResultPage.isWarningMessageDisplayed()
})