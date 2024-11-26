/// <reference types="cypress" /> 

import SelectElements from "../elements/select_elements"
const selectElements = new SelectElements();

class selectPages {
    visitLoginPage() {
        cy.accessHome();
        cy.loginGeneral();
    }

    visitSelectMenu() {
        cy.userLoggedIn();
        cy.get(selectElements.navigateSelectArea()).click();
        cy.contains('h2', 'Select').should('be.visible')
    }

    selectFramework(framework) {
        cy.contains('label', 'Selecione um Framework de Testes')
            .parent()
            .find('select')
            .select(framework);
    }

    validateSelectedFramework(framework) {
        cy.contains('label', 'Selecione um Framework de Testes')
            .parent()
            .find('select')
            .select(framework)
            .should('have.value', framework);
    }
}

export default selectPages;