/// <reference types="cypress" /> 

import RadioButtonElements from "../elements/radioButton_elements"
const radioButtonElements = new RadioButtonElements();

class radioButtonPages {

    visitLoginPage() {
        cy.accessHome();
        cy.loginGeneral();
    }

    visitradioButtonMenu() {
        cy.userLoggedIn();
        cy.get(radioButtonElements.navigateRadioPage()).click();
        cy.contains('h2', 'Radio Buttons').should('be.visible')
    }

    clickCypress() {
        cy.contains('label', 'Cypress').click()
    }

}

export default radioButtonPages;