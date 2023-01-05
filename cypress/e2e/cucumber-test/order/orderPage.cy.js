const FIRST_NAME = 'input[name="firstname"]'
const LAST_NAME = 'input[name="lastname"]'
const EMAIL = 'form#customer-form > section input[name="email"]'
const PASSWORD = 'form#customer-form > section input[name="password"]'
const CONTINUE_BUTTON_FROM_PERSONAL_INFORMATION_SECTION =
	'form#customer-form  button[name="continue"]'
const ADDRESS = 'input[name="address1"]'
const POSTAL_CODE = 'input[name="postcode"]'
const CITY = 'input[name="city"]'
const PHONE = 'input[name="phone"]'
const CONFIRM_ADDRESSES = 'button[name="confirm-addresses"]'
const SHIPPING_METHOD = '#checkout-delivery-step input#delivery_option_2'
const CONFIRM_DELIVERY_OPTION =
	'form#js-delivery > button[name="confirmDeliveryOption"]'
const PAYMENT_METHOD = '#checkout-payment-step input#payment-option-1'
const TERMS_AND_CONDITIONS =
	'input#conditions_to_approve\\[terms-and-conditions\\]'
const PLACE_ORDER_BUTTON = '.btn.btn-primary.center-block'
const CONFIRM_ORDER_MESSAGE =
	'section#content-hook_order_confirmation .col-md-12'
const GENDER = "label:nth-of-type(1) > .custom-radio > input[name='id_gender']"
const REMOVE_ITEM_FROM_CART =
	'.remove-from-cart > .float-xs-left.material-icons'
const CART_OVERVIEW = '.js-cart'

class OrderPage {
	static selectGender() {
		cy.get(GENDER).click()
	}

	static fillOutManadatoryFileds(first_name, last_name, email, password) {
		cy.get(FIRST_NAME).type(first_name)
		cy.get(LAST_NAME).type(last_name)
		cy.get(EMAIL).type(email)
		cy.get(PASSWORD).type(password)
	}

	static clickOnContinueButtonFromPISection() {
		cy.get(CONTINUE_BUTTON_FROM_PERSONAL_INFORMATION_SECTION).click()
	}

	static fillOutPersonalInformationFileds(
		street_and_number,
		postal_code,
		city,
		phone_number
	) {
		cy.get(ADDRESS).type(street_and_number)
		cy.get(POSTAL_CODE).type(postal_code)
		cy.get(CITY).type(city)
		cy.get(PHONE).type(phone_number)
	}

	static clickOnContinueButtonFromAddresses() {
		cy.get(CONFIRM_ADDRESSES).click()
	}

	static selectShippingMethod() {
		cy.get(SHIPPING_METHOD).click()
	}

	static clickConfirmDeliveryOption() {
		cy.get(CONFIRM_DELIVERY_OPTION).click()
	}

	static selectPaymentMethod() {
		cy.get(PAYMENT_METHOD).click()
	}

	static checkTermsAndConditions() {
		cy.get(TERMS_AND_CONDITIONS).click()
	}

	static clickPlaceOrderButton() {
		cy.get(PLACE_ORDER_BUTTON).click()
	}

	static isDisplayedConfirmOrderMessage() {
		cy.get(CONFIRM_ORDER_MESSAGE).should('be.visible')
	}

	static removeAllItemsFromCart() {
		cy.get(REMOVE_ITEM_FROM_CART).click()
	}

	static cartOverview() {
		cy.get(CART_OVERVIEW).contains('Nu mai sunt produse in cosul tau')
	}
}

export default OrderPage