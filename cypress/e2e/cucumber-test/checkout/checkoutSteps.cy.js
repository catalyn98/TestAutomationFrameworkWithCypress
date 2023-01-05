import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import HomePage from '../home/homePage'
import ClothesPageDetails from '../clothes/clothesPageDetails'
import CartPage from '../cart/cartPage'
import HeaderSection from '../header_section/headerSection'
import OrderPage from '../order/orderPage'

Given('I open home page', () => {
	HomePage.visitHomePage()
})

Then('I should see that the page with all items is displayed', () => {
	HomePage.verifyIfMostPopularProductIsDisplayed()
})

When('I click on first popular product from the home page', () => {
	HomePage.clickOnFisrtPopularProduct()
})

Then('I should see that the product details page is displayed', () => {
	ClothesPageDetails.getClothesPageDetailsUrl()
})

When('I add a product to the cart', () => {
	ClothesPageDetails.clickOnAddToCart()
})

When('I proceed to checkout button from the pop-up', () => {
	ClothesPageDetails.clickOnProceedToCheckoutButtonFromPopup()
})

Then(
	'I should see that the product is added to the cart and cart number is updated with {string}',
	cart_count => {
		HeaderSection.getCartCount(cart_count)
	}
)

Then('I should see that the proceed to checkout page is dispalyed', () => {
	CartPage.getUrlCartPage()
})

When('I proceed to checkout button from the cart page', () => {
	CartPage.clickOnProceedToCheckoutButtonFromCartPage()
})

When('I select gender from radio buttons', () => {
	OrderPage.selectGender()
})

When(
	'I fill out mandatory fileds: first name with {string}, last name with {string}, email with {string} and password with {string}',
	(first_name, last_name, email, password) => {
		OrderPage.fillOutManadatoryFileds(first_name, last_name, email, password)
	}
)

When('I click to continue button from the personal information section', () => {
	OrderPage.clickOnContinueButtonFromPISection()
})

When(
	'I fill out address data: street&number: {string}, postal code: {string}, city: {string} and phone number: {string}',
	(street_and_number, postal_code, city, phone_number) => {
		OrderPage.fillOutPersonalInformationFileds(
			street_and_number,
			postal_code,
			city,
			phone_number
		)
	}
)

When('I click to continue button from the address section', () => {
	OrderPage.clickOnContinueButtonFromAddresses()
})

When('I select shipping method', () => {
	OrderPage.selectShippingMethod()
})

When('I click to continue button from the shipping method section', () => {
	OrderPage.clickConfirmDeliveryOption()
})

When('I select payment method', () => {
	OrderPage.selectPaymentMethod()
})

When('I checked the terms and condition', () => {
	OrderPage.checkTermsAndConditions()
})

When('I cliked on place the order button', () => {
	OrderPage.clickPlaceOrderButton()
})

Then('I should see an order confirmation message', () => {
	OrderPage.isDisplayedConfirmOrderMessage()
})

When('I click to add one more item of first popular product', () => {
	CartPage.increaseQuantity()
	CartPage.increaseQuantity()
})

When(
	'I should see that the total cost of cart is updated with {string}',
	price => {
		CartPage.getTotalCosts(price)
	}
)

When('I delete all items from the cart', () => {
	OrderPage.removeAllItemsFromCart()
})

Then('I should see that the cart is empty', () => {
	OrderPage.cartOverview()
})