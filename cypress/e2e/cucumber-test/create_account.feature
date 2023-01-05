Feature: Create account in PrestaShop

    As a potential customer
    I want to be able to create an account

    Scenario: User has successsfully create an account
        Given I open home page
        When I click on sign in button from the home page
        Then I want to see login page
        When I click on create account button
        Then I should see create account page
        And I select gender from radio buttons
        And I fill mandatory fileds: first name with "Boescu", last name with "Ioan", email with "boescu_ioan1999@gamil.com" and password with "123456789"
        And I click save button
        Then I should see the home page

    Scenario: User hasn't successsfully create an account because leave empty mandatory fileds
        Given I open create account page
        And I select gender from radio buttons
        And I click save button
        Then I should see a validation form error message "Please fill out this field."

    Scenario: User hasn't successsfully create an account because he enters email without @ symbol
        Given I open create account page
        And I select gender from radio buttons
        And I fill mandatory fileds: first name with "Boescu", last name with "Ioan", email with "boescu_ioangamil.com" and password with "123456789"
        And I click save button
        Then I should see a validation form error message ""

    Scenario: User hasn't successsfully create an account because he enters a password shorter than 5 characters
        Given I open create account page
        And I select gender from radio buttons
        And I fill mandatory fileds: first name with "Boescu", last name with "Ioan", email with "boescu_ioan@gamil.com" and password with "1234"
        And I click save button
        Then I should see a validation form error message ""

    Scenario: User hasn't successsfully create an account because he enters blank spaces in rquired fileds
        Given I open create account page
        And I select gender from radio buttons
        And I fill mandatory fileds: first name with " ", last name with " ", email with " " and password with " "
        And I click save button
        Then I should see a validation form error message ""