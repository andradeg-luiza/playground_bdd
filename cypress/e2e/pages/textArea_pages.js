/// <reference types="cypress" /> 

import TextAreaElements from "../elements/textArea_elements";
const textArea = new TextAreaElements();

class TextAreaPage {

    visitLoginPage() {
        cy.accessHome();
        cy.loginGeneral();
    }

    visitTexteAreaMenu() {
        cy.userLoggedIn();
        cy.get(textArea.navigateInput()).click();
        cy.contains('h2', 'Textarea').should('be.visible')
    }

    fillTextArea() {
        cy.get(textArea.textAreaInput()).type('Hello, World!!!!!!!!!!!!')
    }

    validateTextAreaFields() {
        cy.get(textArea.textAreaInput()).should('have.value', 'Hello, World!!!!!!!!!!!!');
    }
}

export default TextAreaPage;