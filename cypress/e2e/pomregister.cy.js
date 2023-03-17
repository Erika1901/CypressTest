
import Data from "./pages/regidata.json"

it('Register', function (){

    cy.visit('https://demo.nopcommerce.com')
    cy.get('.menu-toggle').click()
    cy.get('.mobile > :nth-child(1) > .sublist-toggle').click()
    cy.get('.mobile > :nth-child(1) > .sublist > :nth-child(2) > a').click()
    cy.get(':nth-child(1) > .product-item > .details > .product-title > a').click()
    cy.get('#add-to-cart-button-4').click()
    cy.get('.content > a').click()
    cy.get('#termsofservice').click()
    cy.get('#checkout').click()
    cy.get('.register-button').click()
    cy.get('#gender-female').click()
    cy.get('#FirstName').type(Data.firstname)
    cy.get('#LastName').type(Data.lastname)
    cy.get('#Email').type(Data.email)
    cy.get('#Password').type(Data.password)
    cy.get('#ConfirmPassword').type(Data.password)
    cy.get('#register-button').click()
    cy.get('.result').should('be.visible')

})