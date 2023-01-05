import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import HomePage from '../../home/homePage'
import HeaderSection from '../../header_section/headerSection'
import ClothesPage from './clothesPage'
import ClothesPageDetails from '../../clothes/clothesPageDetails'

Given('I open home page', () => {
	HomePage.visitHomePage()
})

When('I click on clothes page link', () => {
	HeaderSection.clickOnClothesPageLink()
})

Then('I should see that the clothes page is displayed', () => {
	ClothesPage.getUrlClothesPage()
})

When('I click on checkbox for {string} category', (gender) => {
	ClothesPage.clickOnCheckboxGenderCategory(gender)
})

Then('I should see that are displayed only the clothes for {string}', gender => {
	ClothesPage.isProductsDispalyedBasedOnGender(gender)
})

When('I open clothes page', () => {
	ClothesPage.visitClothesPage()
})

Then('I click on checkbox for {string} property', property => {
	ClothesPage.clickOnCheckboxPropertyCategory(property)
})

When('I click on product', () => {
	ClothesPage.clickOnProduct()
})

Then(
	'I should see that the product has the active filter in its description {string}',
	property => {
		ClothesPageDetails.getTextDescriptionProduct(property)
	}
)