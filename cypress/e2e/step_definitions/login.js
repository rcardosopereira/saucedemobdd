import {
  Given,
  When,
  Then
} from "@badeball/cypress-cucumber-preprocessor";
import {loginPage} from "@pages/LoginPage";
import { productPage } from "@pages/ProductPage";
import { yourCartPage } from "@pages/YourCartPage";
import { checkoutYourInformationPage } from "@pages/CheckoutYourInformationPage";
import { checkoutOverviewPage } from "@pages/CheckoutOverviewPage";
import { checkoutCompletePage } from "@pages/CheckoutCompletePage";


Given("A web browser is at the saucelabs login page", () => {
  cy.visit("/");
});

When("A user enters the username {string}, the password {string}, and clicks on the login button", (username,password) => {
  loginPage.submitLogin(username,password)
});

When("A user provides incorrect credentials, and clicks on the login button", (table) => {
  table.hashes().forEach((row) => {
    cy.visit("/");
    cy.log(row.username);
    cy.log(row.password);
    loginPage.submitLogin(row.username, row.password)
  });
});

Then("the url will contains the inventory subdirectory", () => {
  productPage.checkURL();
});

When("a user add to cart the product Sauce Labs Backpack", () => {
 productPage.clickBackpack();
});

When("a user add to cart the product Sauce Labs Bike Light", () => {
  productPage.clickBike();
 });

When("a user add to cart the product Sauce Labs Bolt T-Shirt", () => {
  productPage.clickTShirtBolt();
  });

When("a user add to cart the product Sauce Labs Fleece Jacket", () => {
  productPage.clickJacket();
  });

When("a user add to cart the product Sauce Labs Onesie", () => {
  productPage.clickOnisie();
  });

When("a user add to cart the product T-Shirt Red", () => {
  productPage.clickTShirtRed();
  });

When("a user click on cart", () => {
  productPage.clickCart();
  });

When("a user click on the checkout button", () => {
  yourCartPage.clickCheckout();
  });
 
When("a user fill the forms and clicks on the continue button", () => {
  checkoutYourInformationPage.putName();
  checkoutYourInformationPage.putLastName();
  checkoutYourInformationPage.putZipCode();
  checkoutYourInformationPage.clickContinueBtn();
  });
 
When("a user do the overview of checkout, item total, tax and total", () => {
  checkoutOverviewPage.doCalculateTest();
  });
 
When("a user click on the finish button", () => {
  checkoutOverviewPage.clickFinishButton();
  });

Then("a user see the thank you order message", () => {
  checkoutCompletePage.checkAllMessages();
  });

Then("The error message {string} is displayed", (errorMessage) => {
  loginPage.elements.errorMessage().should("have.text", errorMessage);
  cy.log(errorMessage);
  });