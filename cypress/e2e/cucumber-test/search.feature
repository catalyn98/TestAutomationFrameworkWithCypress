Feature: Search different products in PrestaShop

        As a potential customer
        I want to be able to search different product providing a name

        Scenario: User searches a product providing a relevant name
                Given I open home page
                When I click on search filed, I write "mug" and  I press enter
                Then I should see different products based on search

        Scenario: User searches a product providing an empty string
                Given I open home page
                When I click on search filed, I write empty string
                Then I should see a warning message displayed

        Scenario: User searches a product providing a single character
                Given I open home page
                When I click on search filed, I write "m" and  I press enter
                Then I should see a warning message displayed

        Scenario: User searches a product providing special characters
                Given I open home page
                When I click on search filed, I write "#$%&" and  I press enter
                Then I should see a warning message displayed