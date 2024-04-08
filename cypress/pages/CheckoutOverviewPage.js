class CheckoutOverviewPage {
  elements = {
    finishButton: () => cy.get('[data-test="finish"]')
  };

  clickFinishButton() {
    this.elements.finishButton().click();
  }

  doCalculateTest() {
    cy.get('[data-test="subtotal-label"]').then(($subtotalLabel) => {
      const subtotalValue = $subtotalLabel.text();
      cy.log('Subtotal value:', subtotalValue);
    });

    cy.get('[data-test="tax-label"]').then(($taxLabel) => {
      const taxValue = $taxLabel.text();
      cy.log('Tax value:', taxValue);
    });

    cy.get('[data-test="total-label"]').then(($totalLabel) => {
      const totalValue = $totalLabel.text();
      cy.log('Total value:', totalValue);
    });

    cy.get('[data-test="subtotal-label"]').then(($subtotalLabel) => {
      const subtotalText = $subtotalLabel.text().trim();
      const subtotalValue = parseFloat(subtotalText.replace(/[^\d.-]/g, ''));
      cy.log('Subtotal value:', subtotalValue);

      cy.get('[data-test="tax-label"]').then(($taxLabel) => {
        const taxText = $taxLabel.text().trim();
        const taxValue = parseFloat(taxText.replace(/[^\d.-]/g, ''));
        cy.log('Tax value:', taxValue);

        cy.get('[data-test="total-label"]').then(($totalLabel) => {
          const totalText = $totalLabel.text().trim();
          const totalValue = parseFloat(totalText.replace(/[^\d.-]/g, ''));
          cy.log('Total value:', totalValue);

          cy.wrap(subtotalValue + taxValue).should('eq', totalValue);
        });
      });
    });
  }

}
export const checkoutOverviewPage = new CheckoutOverviewPage();