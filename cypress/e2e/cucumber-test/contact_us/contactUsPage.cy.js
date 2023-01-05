const URL = 'http://10.115.8.126:3002/ro/contact'
const CHOOSE_SUBJECT = 'select[name="id_contact"]'
const EMAIL = 'input[name="from"]'
const MESSAGE = 'textarea[name="message"]'
const SEND_BUTTON = 'input[name="submitMessage"]'
const ALERT_SUCCESS_MESSAGE = '.alert.alert-success.col-xs-12'
const VALIDATION_FORM_ERROR_MESSAGE = '.form-control'
const ALERT_DANGER_SEND_MESSAGE = 'form[method="post"] li'

class ContactUsPage {
	static getUrlContactUsPage() {
		cy.url().should('eq', URL)
	}

	static selectOptionSubject() {
		cy.get(CHOOSE_SUBJECT).select('Webmaster')
	}

	static fillUsername(email) {
		cy.get(EMAIL).type(email)
	}

	static fillMessage(message) {
		cy.get(MESSAGE).type(message)
	}

	static clickSendButton() {
		cy.get(SEND_BUTTON).click()
	}

	static isVisibleAlertSuccessSendMessage() {
		cy.get(ALERT_SUCCESS_MESSAGE).should('be.visible')
	}

	static getValidationFormErrorMessage(validationFormErrorMessage) {
		cy.get(VALIDATION_FORM_ERROR_MESSAGE)
			.invoke('prop', 'validationMessage')
			.should('equal', validationFormErrorMessage)
	}

	static isVisibleDangerAlertSendMessage() {
		cy.get(ALERT_DANGER_SEND_MESSAGE).should('be.visible')
	}

	static visitContactUsPage() {
		cy.visit(URL)
	}
}

export default ContactUsPage