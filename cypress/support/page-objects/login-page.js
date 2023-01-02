export class LoginPage {

    constructor() {
      this.usernameInput = "input[id='userName']"
      this.passwordInput = "input[id='password']"
      this.loginButton = "button[id='login']"
      this.loadingWrapper = "div[id='loading-wrapper']"
      this.errorMessage = "p[id='name']" 
    }

   
    loginButton() {
      return cy.get("input[data-test='login-button']");
    }

    openLoginPage() {
      cy.visit('/login')
    }

    enterUsername(username) {
      cy.get(this.usernameInput).type(username)
    }

    enterPassword(password) {
      cy.get(this.passwordInput).type(password)
    }

    clickLoginButton() {
      cy.get(this.loginButton).click();
    }

    checkInputBorder(input, color) {
      switch (input) {
        case username:
          input = this.usernameInput
          break;
        
        case password:
          input = this.passwordInput
        
          default:
          break;
      }

      cy.get(input).should('have.css', "border-color", color)
    }

    checkLoadingWraper() {
      cy.get(this.loadingWrapper).should("be.visible")
    }

    checkErrorMessage(message) {
      cy.get(this.errorMessage).should("be.visible").should("have.text", message)
    }
}

export const loginPage = new LoginPage()