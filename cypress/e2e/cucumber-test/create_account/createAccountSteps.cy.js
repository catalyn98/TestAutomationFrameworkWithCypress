import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import HomePage from '../home/homePage'
import HeaderSection from '../header_section/headerSection'
import LoginPage from '../login/loginPage'
import CreateAccountPage from './createAccountPage'

Given('I open home page', () => {
	HomePage.visitHomePage()
})

When('I click on sign in button from the home page', () => {
	HeaderSection.clickSignInButton()
})

Then('I want to see login page', () => {
	LoginPage.getUrlLoginPage()
})

When('I click on create account button', () => {
	LoginPage.clickCreateAccountButton()
})

Then('I should see create account page', () => {
	CreateAccountPage.getUrlAccountPage()
})

When('I select gender from radio buttons', () => {
	CreateAccountPage.selectGender()
})

When(
	'I fill mandatory fileds: first name with {string}, last name with {string}, email with {string} and password with {string}',
	(first_name, last_name, email, password) => {
		CreateAccountPage.fillMandatoryFileds(
			first_name,
			last_name,
			email,
			password
		)
	}
)

When('I click save button', () => {
	CreateAccountPage.clickSaveButton()
})

Then('I should see the home page', () => {
	HomePage.getUrlHomePage()
})

Given('I open create account page', () => {
	CreateAccountPage.visitCreateAccountPage()
})

Then(
	'I should see a validation form error message {string}',
	validationFormErrorMessage => {
		CreateAccountPage.getValidationFormErrorMessage(validationFormErrorMessage)
	}
)