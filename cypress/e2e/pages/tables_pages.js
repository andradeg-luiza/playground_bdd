/// <reference types="cypress" /> 

import TablesElements from "../elements/tables_elements"
const tablesElements = new TablesElements();

class tablesPages {

    visitLoginPage() {
        cy.accessHome();
        cy.loginGeneral();
    }

    visitTablesMenu() {
        cy.userLoggedIn();
        cy.get(tablesElements.navigateTablestArea()).click();
        cy.contains('h4', 'Redes Sociais').should('be.visible')
    }

    checkGithubIsVisible() {
        cy.wait(1000);
        cy.get(tablesElements.githubLine())
            .should('be.visible')
            .and('contain', 'Github')
            .and('contain', 'papitodev')
            .and('contain', 'Ativo')
    }

    deleteFacebook() {
        cy.get(tablesElements.facebookLine())
            .find(tablesElements.removeItem())
            .click()
        cy.contains(tablesElements.deleteButton())
            .click()
    }

    validateDeleteFacebook() {
        const socialMedia = 'Facebook'
        cy.get(tablesElements.tableBody())
            .should('not.contain', socialMedia)
    }

    cancelDeleteYoutube() {
        cy.get(tablesElements.youtubeLine())
            .find(tablesElements.removeItem())
            .click()
        cy.contains(tablesElements.cancelButton())
            .click()
    }

    validateCancelDeleteYoutube() {
        const socialMedia = 'Youtube'
        cy.get(tablesElements.tableBody())
            .should('contain', socialMedia)
    }

}

export default tablesPages;