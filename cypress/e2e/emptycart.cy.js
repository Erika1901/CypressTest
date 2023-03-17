
it('empty', function (){

    cy.visit('https://demo.nopcommerce.com')
    cy.get('.menu-toggle').click()
    cy.get('.mobile > :nth-child(1) > .sublist-toggle').click()
    cy.get('.mobile > :nth-child(1) > .sublist > :nth-child(2) > a').click()
    cy.contains('Apple MacBook Pro 13-inch').click()
    cy.get('#add-to-cart-button-4').click()
    cy.get('.ico-cart').click()
    cy.get('tbody > tr > .remove-from-cart').click()
    cy.contains('Your Shopping Cart is empty!').should('be.visible')

})    