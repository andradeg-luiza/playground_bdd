/// <reference types="cypress" /> 

import CepElements from '../elements/cep_elements'
const cepElements = new CepElements();

class cepPages {

    constructor() {
        this.address = {
            cep: '54160449',
            logradouro: 'Via Local II',
            localidade: 'Jaboatão dos Guararapes',
            uf: 'PE'
        };
    }

    visitLoginPage() {
        cy.accessHome();
        cy.loginGeneral();
    }

    visitCepMenu() {
        cy.userLoggedIn();
        cy.get(cepElements.navigateCepArea()).click();
        cy.contains('h2', 'CEP (API dos Correios)').should('be.visible')
    }

    insertValidCep() {
        cy.get(cepElements.inputCep()).type(this.address.cep)
        cy.get(cepElements.buttonCadastrar()).click()
    }

    insertValidCepViaMock() {
        cy.intercept('GET', `https://viacep.com.br/ws/${this.address.cep}/json/`, {
            statusCode: 200,
            body: this.address
        }).as('getCep')

        cy.get(cepElements.inputCep()).type(this.address.cep)
        cy.get(cepElements.buttonCadastrar()).click()
        cy.wait('@getCep')

    }

    validateLogradouro() {
        cy.get(cepElements.inputLogradouro(), { timeout: 10000 })
            .should('have.value', this.address.logradouro)
    }

    validateCidade() {
        cy.get(cepElements.inputCidade())
            .should('have.value', this.address.localidade)
    }

    validateEstado() {
        cy.get(cepElements.inputEstado())
            .should('have.value', this.address.uf)
    }

}

export default cepPages;