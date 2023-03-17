
it('filter', function (){

    cy.visit('https://demo.nopcommerce.com')
    cy.get('.menu-toggle').click()
    cy.get('.mobile > :nth-child(1) > .sublist-toggle').click()
    cy.get('.mobile > :nth-child(1) > .sublist > :nth-child(2) > a').click()
    cy.get('#attribute-option-8').should('not.be.checked')
    cy.get('#attribute-option-9').should('be.visible').check()
    cy.get('#attribute-option-10').should('not.be.checked')

})    