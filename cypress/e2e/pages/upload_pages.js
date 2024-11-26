/// <reference types="cypress" /> 

import UploadElements from '../elements/upload_elements';
const uploadElements = new UploadElements();

class uploadPages {

    visitLoginPage() {
        cy.accessHome();
        cy.loginGeneral();
    }

    visitUploadMenu() {
        cy.userLoggedIn();
        cy.get(uploadElements.navigateUploadArea()).click();
        cy.contains('h2', 'Upload').should('be.visible')
    }

    uploadDocuments() {
        cy.get(uploadElements.UploadDoc())
            .selectFile('cypress/fixtures/doc.pdf')
    }

    validateUploadDocuments() {
        cy.get(uploadElements.UploadDoc())
            .then(element => {
                expect(element[0].files[0].name).to.equal('doc.pdf')
            })
    }

    uploadImages() {
        cy.get(uploadElements.UploadImage())
            .selectFile('cypress/fixtures/liga.jpg')
    }

    validateUploadImages() {
        cy.get('#image-upload')
            .find('img')
            .should('be.visible')
            .should('have.attr', 'src')
            .and('include', 'blob')
    }

}

export default uploadPages;