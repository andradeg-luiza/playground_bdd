/// <reference types="cypress" /> 

import InputElements from "../elements/input_elements";
const inputElements = new InputElements();

class InputPage {

  visitLoginPage() {
    cy.accessHome();
    cy.loginGeneral();
  }

  visitInputMenu() {
    cy.userLoggedIn();
    cy.get(inputElements.navigateInput()).click();
    cy.contains('h2', 'Input Fields').should('be.visible')
  }

  fillOutForm() {
    cy.get(inputElements.fullNameInput()).type('Luiza Gusmão');
    cy.get(inputElements.emailInput()).type('luiza@papito.dev');
    cy.get(inputElements.numberInput()).type('8199999999');
    cy.get(inputElements.dateInput()).type('2024-12-01');
  }

  validateFormFields() {
    cy.get(inputElements.fullNameInput()).should('have.value', 'Luiza Gusmão');
    cy.get(inputElements.emailInput()).should('have.value', 'luiza@papito.dev');
    cy.get(inputElements.numberInput()).should('have.value', '8199999999');
    cy.get(inputElements.dateInput()).should('have.value', '2024-12-01');
  }

}

export default InputPage;