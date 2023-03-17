export class LoginPage{

    email_textbox = '#Email'
    password_textbox = '#Password'
    login_button = 'form > .buttons > .button-1'

   
    enterEmail(email){
        cy.get(this.email_textbox).type(email)
    
    }

    enterPassword(password){
        cy.get(this.password_textbox).type(password)
    
    }

    clickLogin(){
        cy.get(this.login_button).click()

    }
}