class YourCartPage {
    elements = {
        checkoutButton: () => cy.get('[data-test="checkout"]') 
    };

    clickCheckout() {
        this.elements.checkoutButton().click();
      }

  }
  
  export const yourCartPage = new YourCartPage();
  