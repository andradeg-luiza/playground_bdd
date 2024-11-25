/// <reference types="cypress" /> 

import CheckBoxElements from "../elements/checkBox_elements";
const checkBoxElements = new CheckBoxElements();

class checkBoxPages {

    visitLoginPage() {
        cy.accessHome();
        cy.loginGeneral();
    }

    visitCheckBoxMenu() {
        cy.userLoggedIn();
        cy.get(checkBoxElements.navigateCheckBoxArea()).click();
        cy.contains('h2', 'Checkbox').should('be.visible')
    }

    clickNodeJsLanguages() {
        cy.get(checkBoxElements.labelJavaScript()).click()
        cy.get(checkBoxElements.labelTypeScript()).click()
    }

    clickAllLanguages() {
        const langs = ['javascript', 'python', 'rust', 'go', 'typescript'];
        langs.forEach(lang => {
            cy.get(`label[for=${lang}]`).click()
        })
    }
}

export default checkBoxPages;