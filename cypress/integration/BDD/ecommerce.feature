Feature: place order

    @Regression
    Scenario: Login Functionality and place order
        Given I open ecommerce site
        When I add items to cart
        Then select country submit and verify thankyou

    @Smoke
    Scenario: Login Functionality and place order
        Given I open ecommerce site
        When I fill the form
            |name |gender|
            |abcd |Male  |