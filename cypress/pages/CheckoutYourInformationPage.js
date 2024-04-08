import { faker } from '@faker-js/faker';

class CheckoutYourInformationPage {

    elements = {
        firstName: () => cy.get('[data-test="firstName"]'),
        lastName: () =>  cy.get('[data-test="lastName"]'),
        zipCode: () => cy.get('[data-test="postalCode"]'),
        continueBtn: () => cy.get('[data-test="continue"]'),
        errorMessage: () => cy.get('[data-test="error"]')                      
    };

    putName() {
        const firstName = faker.person.firstName();
        this.elements.firstName().type(firstName);
      }

    putLastName() {
        const lastName = faker.person.lastName();
        this.elements.lastName().type(lastName);
      }

    putZipCode() {
        const zipCode = faker.location.zipCode();
        this.elements.zipCode().type(zipCode);
      }

    clickContinueBtn() {
        this.elements.continueBtn().click();
    }
  }
  
  export const checkoutYourInformationPage = new CheckoutYourInformationPage();