
it('displayerror', function (){

    cy.visit('https://demo.nopcommerce.com')
    cy.get('.menu-toggle').click()
    cy.get('.mobile > :nth-child(1) > .sublist-toggle').click()
    cy.get('.mobile > :nth-child(1) > .sublist > :nth-child(2) > a').click()
    cy.contains('Apple MacBook Pro 13-inch').click()
    cy.get('#add-to-cart-button-4').click()
    cy.get('.ico-cart').click()
    cy.get('#termsofservice').should('be.visible').should('not.be.checked')
    cy.get('#checkout').should('be.visible').click()
    cy.get('#terms-of-service-warning-box').should('be.visible')

})    