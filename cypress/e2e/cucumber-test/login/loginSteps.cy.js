import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import LoginPage from './loginPage'
import HomePage from '../home/homePage'
import HeaderSection from '../header_section/headerSection'

Given('I open home page', () => {
	HomePage.visitHomePage()
})

When('I click on sign in button from the home page', () => {
	HeaderSection.clickSignInButton()
})

Then('I want to see login page', () => {
	LoginPage.getUrlLoginPage()
})

When('I fill e-mail input with {string}', username => {
	LoginPage.fillUsername(username)
})

When('I fill password input with {string}', password => {
	LoginPage.fillPassword(password)
})

When('I click on sign in button from the login page', () => {
	LoginPage.clickSignInButton()
})

Then('I should see sign out button visible in header', () => {
	HeaderSection.verifySignOutButtonIsVisible()
})

Then('I should see an error message', () => {
	LoginPage.verifyIfErrorMessageIsDisplayed()
})

Then(
	'I should see a validation form error message {string}',
	validationFormErrorMessage => {
		LoginPage.getValidationFormErrorMessage(validationFormErrorMessage)
	}
)

Then('I left empty username filed', () => {})

When('I click on forget password button', () => {
	LoginPage.clickForgetPasswordButton()
})

When('I click on send reset password button', () => {
	LoginPage.clickResetPasswordButton()
})

Given('I open login page', () => {
	LoginPage.visitLoginPage()
})

Then(
	'I should see a password reset confirmation message dispalyed for {string} e-amil address',
	username => {
		LoginPage.verifyIfPasswordResetConfirmationMessageIsDisplayed(username)
	}
)