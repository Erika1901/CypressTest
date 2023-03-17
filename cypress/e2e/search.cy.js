
it('search', function (){

    cy.visit('https://demo.nopcommerce.com')
    cy.get('#small-searchterms').type('Build your own computer')
    cy.get('#small-search-box-form > .button-1').click()
    cy.get('.product-title > a').click()
    cy.get('#product_attribute_2').should('be.visible').select('4')
    cy.get('#product_attribute_3_6').should('be.visible').check()
    cy.get('#product_attribute_3_7').should('be.visible').click()
    cy.get('#product_attribute_4_8').should('be.visible').click()
    cy.get('#product_attribute_4_9').should('not.be.checked')
    cy.get('#product_attribute_5_10').should('be.visible').uncheck()
    cy.get('#product_attribute_5_10').check().should('be.checked')
    cy.get('#product_attribute_5_11').should('not.be.checked')
    cy.get('#product_attribute_5_12').should('not.be.checked')
    cy.get('#add-to-cart-button-1').click()
    cy.get('.bar-notification').should('be.visible')
})    