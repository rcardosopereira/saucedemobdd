class ProductPage {
    elements = {
      backpackItem: () =>  cy.get('[data-test="add-to-cart-sauce-labs-backpack"]'),
      bikeLightItem: () =>  cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]'),
      boltTShirtItem: () => cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]'),
      fleeceJacketItem: () => cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]'),
      onesieItem: () => cy.get('[data-test="add-to-cart-sauce-labs-onesie"]'),
      redTShirtItem: () => cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]'),
      shoppingCartLink: () => cy.get('[data-test="shopping-cart-link"]'),
    };

    checkURL() {
      cy.url().should("contains", "/inventory.html");
    }

    clickBackpack() {
        this.elements.backpackItem().click();
      }

    clickBike() {
        this.elements.bikeLightItem().click();
      }   
  
    clickTShirtBolt() {
        this.elements.boltTShirtItem().click();
      }  

    clickJacket() {
        this.elements.fleeceJacketItem().click();
      }  

    clickOnisie() {
        this.elements.onesieItem().click();
      }

    clickTShirtRed() {
        this.elements.redTShirtItem().click();
      }  

    clickCart() {
        this.elements.shoppingCartLink().click();
      }  

  }
  
  export const productPage = new ProductPage();