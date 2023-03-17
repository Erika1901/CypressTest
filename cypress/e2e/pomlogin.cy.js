import { LoginPage } from "./pages/login_page"
import Data from "./pages/data.json"

const loginPage = new LoginPage()

describe('All Login Tests', function (){

    beforeEach(function(){
        cy.visit('https://demo.nopcommerce.com')
        cy.get('.ico-login').click()

    })

    it ('Login successful', ()=>{

        loginPage.enterEmail(Data.email)
        loginPage.enterPassword(Data.password)
        loginPage.clickLogin()
        cy.contains('Log out').should('be.visible')
    })

    it ('Login with invalid email', ()=>{

        loginPage.enterEmail(Data.email2)
        loginPage.enterPassword(Data.password)
        loginPage.clickLogin()
        cy.contains('Log out').should('be.visible')
    })

    it ('Login with invalid password', ()=>{

        loginPage.enterEmail(Data.email)
        loginPage.enterPassword(Data.password2)
        loginPage.clickLogin()
        cy.contains('Log out').should('be.visible')
    })
})