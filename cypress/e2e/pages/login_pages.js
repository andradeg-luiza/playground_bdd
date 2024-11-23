/// <reference types="cypress" /> 

import loginFuncionality from "../elements/login_elements";
const login = new loginFuncionality();

class LoginPage {

  visitLoginPage() {
    cy.accessHome();
  }

  enterEmail(email) {
    cy.get(login.loginField()).type(email);
  }

  enterPassword(password) {
    cy.get(login.emailField()).type(password);
  }

  clickLoginButton() {
    cy.get(login.loginButton()).click();
  }

  verifyMessage(message) {
    if (message === 'Boas vindas ao Cypress Playground') {
      cy.get(login.wellcomeTitle())
        .should('be.visible')
        .and('have.text', message);
    } else {
      cy.get(login.msgError())
        .should('be.visible')
        .and('have.text', message);
    }
  }

  verifyWelcomeTitle() {
    cy.get(login.wellcomeTitle()).should('be.visible');
  }

  verifyLoginTitle() {
    cy.get(login.loginTitle()).should('be.visible');
  }
}

export default LoginPage;