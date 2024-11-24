/// <reference types="cypress" /> 

import inputFuncionality from "../elements/input_elements";
const input = new inputFuncionality();

class InputPage {

  visitLoginPage() {
    cy.accessHome();
    cy.loginGeneral();
  }

  visitInputMenu() {
    cy.userLoggedIn();
    cy.get(input.navigateInput()).click();
    cy.contains('h2', 'Input Fields').should('be.visible')
  }

  fillOutForm() {
    cy.get('[data-cy="fullname"]').type('Luiza Gusmão');
    cy.get('[data-cy="email"]').type('luiza@papito.dev');
    cy.get('[data-cy="number"]').type('8199999999');
    cy.get('[data-cy="date"]').type('2024-12-01');
  }  

}

export default InputPage;
