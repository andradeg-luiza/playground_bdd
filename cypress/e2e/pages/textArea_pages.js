/// <reference types="cypress" /> 

import TextAreaElements from "../elements/textArea_elements";
const textAreaElements = new TextAreaElements();

class TextAreaPage {

    visitLoginPage() {
        cy.accessHome();
        cy.loginGeneral();
    }

    visitTexteAreaMenu() {
        cy.userLoggedIn();
        cy.get(textAreaElements.navigateTextarea()).click();
        cy.contains('h2', 'Textarea').should('be.visible')
    }

    fillTextArea() {
        cy.get(textAreaElements.textAreaInput()).type('Hello, World!!!!!!!!!!!!')
    }

    validateTextAreaFields() {
        cy.get(textAreaElements.textAreaInput()).should('have.value', 'Hello, World!!!!!!!!!!!!');
    }
}

export default TextAreaPage;