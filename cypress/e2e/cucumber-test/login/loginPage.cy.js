const URL = 'http://10.115.8.126:3002/ro/autentificare'
const USERNAME = 'section input[name="email"]'
const PASSWORD = 'input[name="password"]'
const SIGN_IN_BUTTON = 'button#submit-login'
const ERROR_MESSAGE = '.alert.alert-danger'
const VALIDATION_FORM_ERROR_MESSAGE = '.form-control'
const FORGET_PASSWORD_BUTTON = 'form#login-form a[rel="nofollow"]'
const RESET_PASSWORD_BUTTON =
	'.center-email-fields.form-group > button:nth-of-type(1)'
const PASSWORD_RESET_CONFIRMATION_MESSAGE = '.item'
const CREATE_ACCOUNT_BUTTON = '[data-link-action="display-register-form"]'

class LoginPage {
	static visitLoginPage() {
		cy.visit(URL)
	}

	static getUrlLoginPage() {
		cy.url().should('contains', URL)
	}

	static fillUsername(name) {
		cy.get(USERNAME).type(name)
	}

	static fillPassword(password) {
		cy.get(PASSWORD).type(password)
	}

	static clickSignInButton() {
		cy.get(SIGN_IN_BUTTON).click()
	}

	static verifyIfErrorMessageIsDisplayed() {
		cy.get(ERROR_MESSAGE).contains('Autentificare esuata.')
	}

	static getValidationFormErrorMessage(validationFormErrorMessage) {
		cy.get(VALIDATION_FORM_ERROR_MESSAGE)
			.invoke('prop', 'validationMessage')
			.should('equal', validationFormErrorMessage)
	}

	static clickForgetPasswordButton() {
		cy.get(FORGET_PASSWORD_BUTTON).click()
	}

	static clickResetPasswordButton() {
		cy.get(RESET_PASSWORD_BUTTON).click()
	}

	static verifyIfPasswordResetConfirmationMessageIsDisplayed(name) {
		cy.get(PASSWORD_RESET_CONFIRMATION_MESSAGE).contains(
			'Daca aceasta adresa de e-mail a fost inregistrata in magazinul nostru, vei primi un link pentru a reseta parola la adresa ' +
				name +
				'.'
		)
	}

	static clickCreateAccountButton() {
		cy.get(CREATE_ACCOUNT_BUTTON).click()
	}
}

export default LoginPage