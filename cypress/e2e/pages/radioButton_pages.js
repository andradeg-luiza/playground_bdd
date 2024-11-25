/// <reference types="cypress" /> 

import RadioButtoElements from "../elements/radioButton_elements"
const radioButtoElements = new RadioButtoElements();

class radioButtonPages {

    visitLoginPage() {
        cy.accessHome();
        cy.loginGeneral();
    }

    visitradioButtonMenu() {
        cy.userLoggedIn();
        cy.get(radioButtoElements.navigateRadioPage()).click();
        cy.contains('h2', 'Radio Buttons').should('be.visible')
    }

    clickCypress() {
        cy.contains('label', 'Cypress').click()
    }

}

export default radioButtonPages;