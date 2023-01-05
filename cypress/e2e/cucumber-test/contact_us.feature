Feature: Contact us PrestaShop

        As a customer
        I want to be able to contact the store sending a message

        Scenario: Customer send with successfull a message to the store via contact form
                Given I open home page
                When I click on contact us link
                Then I should see contact us page
                And I choose option 2 from dropdown
                And I fill e-mail input with "pasca_andrei11@yahoo.com"
                And I fill message input with "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                When I click on send button
                Then I should see confirmation message that the message has been sent

        Scenario: Customer hasn't send message with successufull, because enter email without @ symbol
                Given I open contact us page
                And I choose option 2 from dropdown
                And I fill e-mail input with "pasca_andrei11yahoo.com"
                And I fill message input with "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                When I click on send button
                Then I should see a validation form error message ""

        Scenario: Customer hasn't send message with successufull, because he leaves the message filed empty
                Given I open contact us page
                And I choose option 2 from dropdown
                And I fill e-mail input with "pasca_andrei11@yahoo.com"
                When I click on send button
                Then I should see a danger alert message send