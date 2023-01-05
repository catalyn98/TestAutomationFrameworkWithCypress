Feature: Filter different products in PrestaShop

    As a potential customer or as an existing customer
    I want to be able to filter different products depending on certain categories

    Scenario: User filter clothes by men category
        Given I open home page
        When I click on clothes page link
        Then I should see that the clothes page is displayed
        When I click on checkbox for "men" category
        And I want to wait 1000 milliseconds
        Then I should see that are displayed only the clothes for "/men/"

    Scenario: User filter clothes by women category
        Given I open home page
        When I click on clothes page link
        Then I should see that the clothes page is displayed
        When I click on checkbox for "women" category
        And I want to wait 1000 milliseconds
        Then I should see that are displayed only the clothes for "/women/"

    Scenario: User filter clothes by long sleeves category
        Given I open clothes page
        Then I click on checkbox for "long sleeves" property
        And I want to wait 1000 milliseconds
        When I click on product
        Then I should see that the product has the active filter in its description "long sleeves"

    Scenario: User filter clothes by short sleeves category
        Given I open clothes page
        Then I click on checkbox for "short sleeves" property
        And I want to wait 1000 milliseconds
        When I click on product
        Then I should see that the product has the active filter in its description "short sleeves"

    Scenario: User filter accessories by home accessories category
        Given I open accessories page
        When I click on checkbox for "home accessories" category
        And I want to wait 1000 milliseconds
        Then I should see that are displayed only the accessories for "/home-accessories/"