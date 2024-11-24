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
    cy.get(input.fullNameInput()).type('Luiza Gusmão');
    cy.get(input.emailInput()).type('luiza@papito.dev');
    cy.get(input.numberInput()).type('8199999999');
    cy.get(input.dateInput()).type('2024-12-01');
  }
  
  validateFormFields() {
    cy.get(input.fullNameInput()).should('have.value', 'Luiza Gusmão');
    cy.get(input.emailInput()).should('have.value', 'luiza@papito.dev');
    cy.get(input.numberInput()).should('have.value', '8199999999');
    cy.get(input.dateInput()).should('have.value', '2024-12-01');
  }
  

}

export default InputPage;