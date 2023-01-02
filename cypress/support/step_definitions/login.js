import { loginPage } from '../page-objects/login-page'
const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

Given('Peny is on the login page', () => {
  loginPage.openLoginPage()
})

When("Peny enters {string} as their username", (username) => {
  loginPage.enterUsername(username)
})

When("Peny enters {string} as their password", (password) => {
  loginPage.enterPassword(password)
})

When("Peny clicks the login button", () => {
  loginPage.clickLoginButton()
})

Then("Peny should see a {string} border on {string} field", (color, field) => {
  if (color == 'red'){
    color = "#dc3545"
  }

  loginPage.checkInputBorder(usernameInput, color)
})

Then("Peny should see a loading wrapper", () => {
  loginPage.checkLoadingWraper()
})

Then("Peny should see a {string} error message", (error) => {
  loginPage.checkErrorMessage(error)
}) 
