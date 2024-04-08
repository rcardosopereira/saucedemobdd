Feature: Fail test page

    Feature fail test.

    Background:
    Given A web browser is at the saucelabs login page

 Scenario: Error Login
        When A user enters the username "error_user", the password "secret_sauce", and clicks on the login button
        Then the url will contains the inventory subdirectory
        When a user add to cart the product T-Shirt Red
        When a user click on cart
        When a user click on the checkout button
        When a user fill the forms and clicks on the continue button
        When a user do the overview of checkout, item total, tax and total 
        When a user click on the finish button
        Then a user see the thank you order message
