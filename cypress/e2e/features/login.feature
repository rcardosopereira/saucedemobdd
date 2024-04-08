Feature: Login page

    Feature Login page will work depending on the user credentials.

    Background:
    Given A web browser is at the saucelabs login page

    Scenario: Success Login
        When A user enters the username "standard_user", the password "secret_sauce", and clicks on the login button
        Then the url will contains the inventory subdirectory
        When a user add to cart the product Sauce Labs Backpack
        When a user add to cart the product Sauce Labs Bike Light
        When a user add to cart the product Sauce Labs Bolt T-Shirt
        When a user add to cart the product Sauce Labs Fleece Jacket
        When a user add to cart the product Sauce Labs Onesie
        When a user add to cart the product T-Shirt Red
        When a user click on cart
        When a user click on the checkout button
        When a user fill the forms and clicks on the continue button
        When a user do the overview of checkout, item total, tax and total 
        When a user click on the finish button
        Then a user see the thank you order message
        
  Scenario: Blocked Login
        When A user enters the username "locked_out_user", the password "secret_sauce", and clicks on the login button
        Then The error message "Epic sadface: Sorry, this user has been locked out." is displayed

    Scenario: Problem Login
        When A user enters the username "problem_user", the password "secret_sauce", and clicks on the login button
        Then the url will contains the inventory subdirectory
        When a user add to cart the product Sauce Labs Fleece Jacket
        When a user add to cart the product Sauce Labs Onesie
        When a user add to cart the product T-Shirt Red
        When a user click on cart
        When a user click on the checkout button
        When a user fill the forms and clicks on the continue button
        Then The error message "Error: Last Name is required" is displayed

 Scenario: Performance Glitch Login
        When A user enters the username "performance_glitch_user", the password "secret_sauce", and clicks on the login button
        Then the url will contains the inventory subdirectory
        When a user add to cart the product T-Shirt Red
        When a user click on cart
        When a user click on the checkout button
        When a user fill the forms and clicks on the continue button
        When a user do the overview of checkout, item total, tax and total 
        When a user click on the finish button
        Then a user see the thank you order message

Scenario: Visual Login
        When A user enters the username "visual_user", the password "secret_sauce", and clicks on the login button
        Then the url will contains the inventory subdirectory
        When a user add to cart the product T-Shirt Red
        When a user click on cart
        When a user click on the checkout button
        When a user fill the forms and clicks on the continue button
        When a user do the overview of checkout, item total, tax and total 
        When a user click on the finish button
        Then a user see the thank you order message

 Scenario: Incorrect credentials (Username and Password) Login
        When A user provides incorrect credentials, and clicks on the login button
            | username       | password      |
            | standard_user  | superPassword |
            | superUsername  | standard_user |
        Then The error message "Epic sadface: Username and password do not match any user in this service" is displayed