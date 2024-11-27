/// <reference types="cypress" /> 

import TagsElements from '../elements/tags_elements'
const tagsElements = new TagsElements();

class tagsPages {

    visitLoginPage() {
        cy.accessHome();
        cy.loginGeneral();
    }

    visitTagMenu() {
        cy.userLoggedIn();
        cy.get(tagsElements.navigateTagsArea()).click();
        cy.contains('h2', 'Tags').should('be.visible')
    }

    addSomeTags() {
        const tags = ['Cypress', 'JavaScript', 'TypeScript', 'NodeJs']

        tags.forEach(tag => {
            console.log(tagsElements.tagsLabelEmpty())
            cy.get(tagsElements.tagsLabelEmpty())
                .type(`${tag}{Enter}`)
                .should('have.value', '')
            cy.wait(500)//thinking time
        })
    }

    valdidateTagsAdd() {
        const tags = ['Cypress', 'JavaScript', 'TypeScript', 'NodeJs']

        tags.forEach(tag => {
            cy.get(tagsElements.tagsLabelPopulated())
                .should('contain', tag)
        })
    }
}

export default tagsPages;