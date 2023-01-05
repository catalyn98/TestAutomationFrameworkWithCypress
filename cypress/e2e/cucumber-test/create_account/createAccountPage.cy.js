const URL = 'http://10.115.8.126:3002/ro/autentificare?create_account=1'
const GENDER = "label:nth-of-type(1) > .custom-radio > input[name='id_gender']"
const FIRST_NAME = 'input[name="firstname"]'
const LAST_NAME = 'input[name="lastname"]'
const EMAIL = 'section input[name="email"]'
const PASSWORD = 'input[name="password"]'
const SAVE_BUTTON = '.btn.btn-primary.float-xs-right.form-control-submit'
const VALIDATION_FORM_ERROR_MESSAGE = '.form-control'

class CreateAccountPage {
	static getUrlAccountPage() {
		cy.url().should('eq', URL)
	}

	static selectGender() {
		cy.get(GENDER).click
	}

	static fillMandatoryFileds(first_name, last_name, email, password) {
		cy.get(FIRST_NAME).type(first_name)
		cy.get(LAST_NAME).type(last_name)
		cy.get(EMAIL).type(email)
		cy.get(PASSWORD).type(password)
	}

	static clickSaveButton() {
		cy.get(SAVE_BUTTON).click()
	}

	static getValidationFormErrorMessage(validationFormErrorMessage) {
		cy.get(VALIDATION_FORM_ERROR_MESSAGE)
			.invoke('prop', 'validationMessage')
			.should('equal', validationFormErrorMessage)
	}

	static visitCreateAccountPage() {
		cy.visit(URL)
	}
}

export default CreateAccountPage