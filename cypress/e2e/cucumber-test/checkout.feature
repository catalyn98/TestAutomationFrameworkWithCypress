Feature: Checkout products in PrestaShop

        As a potential customer or as an existing customer
        I want to be able to checkout different products and buy them

        Scenario: User can complete a succesfull checkout
                Given I open home page
                Then I should see that the page with all items is displayed
                When I click on first popular product from the home page
                Then I should see that the product details page is displayed
                When I add a product to the cart
                And I proceed to checkout button from the pop-up
                Then I should see that the product is added to the cart and cart number is updated with "1"
                Then I should see that the proceed to checkout page is dispalyed
                And I proceed to checkout button from the cart page
                And I select gender from radio buttons
                And I fill out mandatory fileds: first name with "Catalan", last name with "Adrian", email with "adrian_catalan87@gamil.com" and password with "123456789"
                And I click to continue button from the personal information section
                And I fill out address data: street&number: "Strada 1 Decembrie, 167", postal code: "774330", city: "Satu-Mare" and phone number: "0737728737"
                And I click to continue button from the address section
                And I select shipping method
                And I click to continue button from the shipping method section
                And I select payment method
                And I checked the terms and condition
                And I cliked on place the order button
                Then I should see an order confirmation message

        Scenario: User add a product to the cart
                Given I open home page
                When I click on first popular product from the home page
                Then I should see that the product details page is displayed
                When I add a product to the cart
                And I proceed to checkout button from the pop-up
                Then I should see that the product is added to the cart and cart number is updated with "1"

        Scenario: User add different quantities of the same product
                Given I open home page
                When I click on first popular product from the home page
                Then I should see that the product details page is displayed
                When I add a product to the cart
                And I proceed to checkout button from the pop-up
                When I click to add one more item of first popular product
                Then I should see that the product is added to the cart and cart number is updated with "3"
                And I should see that the total cost of cart is updated with "68,26 lei"

        Scenario: User remove all items from the cart
                Given I open home page
                Then I should see that the page with all items is displayed
                When I click on first popular product from the home page
                Then I should see that the product details page is displayed
                When I add a product to the cart
                And I proceed to checkout button from the pop-up
                Then I should see that the product is added to the cart and cart number is updated with "1"
                And I delete all items from the cart
                And I want to wait 1000 milliseconds
                Then I should see that the cart is empty