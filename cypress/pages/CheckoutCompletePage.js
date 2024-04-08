class CheckoutCompletePage {
    elements = {
      checkoutComplete: () => cy.get('[data-test="title"]'),
      thankYou: () => cy.get('[data-test="complete-header"]'),
      orderOK: () => cy.get('[data-test="complete-text"]')
    };
 
    checkAllMessages() {
      this.elements.checkoutComplete().should('have.text', 'Checkout: Complete!');
      this.elements.thankYou().should('have.text', 'Thank you for your order!');
      this.elements.orderOK().should('have.text', 'Your order has been dispatched, and will arrive just as fast as the pony can get there!');
    }
  
  }
  
  export const checkoutCompletePage = new CheckoutCompletePage();