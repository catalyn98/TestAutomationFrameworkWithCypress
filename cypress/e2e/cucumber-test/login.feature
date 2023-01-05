Feature: Login PrestaShop

    As a valid user
    I want to log in into the application
    As an invalid user
    I cannot log in into the application

    Scenario: User has successsfully log in
        Given I open home page
        When I click on sign in button from the home page
        Then I want to see login page
        When I fill e-mail input with "pasca_andrei11@yahoo.com"
        And I fill password input with "123456789"
        And I click on sign in button from the login page
        Then I should see sign out button visible in header

    Scenario: User can't login because e-amil address is incorrect
        Given I open login page
        When I fill e-mail input with "pasca_andrei_catalin@yahoo.com"
        And I fill password input with "123456789"
        And I click on sign in button from the login page
        Then I should see an error message

    Scenario: User can't login because password is incorrect
        Given I open login page
        When I fill e-mail input with "pasca_andrei11@yahoo.com"
        And I fill password input with "123456"
        And I click on sign in button from the login page
        Then I should see an error message

    Scenario: User can't login because username filed is left empty
        Given I open login page
        When I left empty username filed
        And I fill password input with "123456789"
        And I click on sign in button from the login page
        Then I should see a validation form error message "Please fill out this field."

    Scenario: User can't login because enter password shorter than 5 characters
        Given I open login page
        When I fill e-mail input with "pasca_andrei11@yahoo.com"
        And I fill password input with "1234"
        And I click on sign in button from the login page
        Then I should see a validation form error message ""

    Scenario: User reset his password
        Given I open login page
        When I click on forget password button
        And I fill e-mail input with "pasca_andrei11@yahoo.com"
        When I click on send reset password button
        Then I should see a password reset confirmation message dispalyed for "pasca_andrei11@yahoo.com" e-amil address