import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import HomePage from '../home/homePage'
import HeaderSection from '../header_section/headerSection'
import ContactUsPage from '../contact_us/contactUsPage'

Given('I open home page', () => {
	HomePage.visitHomePage()
})

When('I click on contact us link', () => {
	HeaderSection.clickLinkContactUsPage()
})

Then('I should see contact us page', () => {
	ContactUsPage.getUrlContactUsPage()
})

When('I choose option 2 from dropdown', () => {
	ContactUsPage.selectOptionSubject()
})

When('I fill e-mail input with {string}', username => {
	ContactUsPage.fillUsername(username)
})

When('I fill message input with {string}', text => {
	ContactUsPage.fillMessage(text)
})

When('I click on send button', () => {
	ContactUsPage.clickSendButton()
})

Then('I should see confirmation message that the message has been sent', () => {
	ContactUsPage.isVisibleAlertSuccessSendMessage()
})

Then(
	'I should see a validation form error message {string}',
	validationFormErrorMessage => {
		ContactUsPage.getValidationFormErrorMessage(validationFormErrorMessage)
	}
)

Given('I open contact us page', () => {
	ContactUsPage.visitContactUsPage()
})

Then('I should see a danger alert message send', () => {
	ContactUsPage.isVisibleDangerAlertSendMessage()
})