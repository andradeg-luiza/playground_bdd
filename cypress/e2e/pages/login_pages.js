/// <reference types="cypress" /> 

import LoginFuncionality from "../elements/login_elements";
const loginFuncionality = new LoginFuncionality();

class LoginPage {

  visitLoginPage() {
    cy.accessHome();
  }

  enterEmail(email) {
    cy.get(loginFuncionality.loginField()).type(email);
  }

  enterPassword(password) {
    cy.get(loginFuncionality.emailField()).type(password);
  }

  clickLoginButton() {
    cy.get(loginFuncionality.loginButton()).click();
  }

  verifyMessage(message) {
    if (message === 'Boas vindas ao Cypress Playground') {
      cy.get(loginFuncionality.wellcomeTitle())
        .should('be.visible')
        .and('have.text', message);
    } else {
      cy.get(loginFuncionality.msgError())
        .should('be.visible')
        .and('have.text', message);
    }
  }

  verifyWelcomeTitle() {
    cy.get(loginFuncionality.wellcomeTitle()).should('be.visible');
  }

  verifyLoginTitle() {
    cy.get(loginFuncionality.loginTitle()).should('be.visible');
  }
}

export default LoginPage;