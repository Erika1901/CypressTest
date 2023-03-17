
it('empty', function (){

    cy.visit('https://demo.nopcommerce.com')
    cy.get('.menu-toggle').click()
    cy.get('.mobile > :nth-child(1) > .sublist-toggle').click()
    cy.get('.mobile > :nth-child(1) > .sublist > :nth-child(2) > a').click()
    cy.contains('Apple MacBook Pro 13-inch').click()
    cy.get('#add-to-wishlist-button-4').click()
    cy.contains('The product has been added to your wishlist').should('be.visible')

})    