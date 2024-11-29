/// <reference types="cypress" /> 

import CepPages from '../pages/cep_pages'
const cepPages = new CepPages();

Given(/^I have successfully logged into the system$/, () => {
    cepPages.visitLoginPage();
});

Given(/^I navigate to the CEP page$/, () => {
    cepPages.visitCepMenu();
});

When(/^I enter a valid CEP$/, () => {
    cepPages.insertValidCep();
});

When(/^I mock the API response for a valid CEP$/, () => {
    cepPages.insertValidCepViaMock();
});

Then(/^the field logradouro should be filled$/, () => {
    cepPages.validateLogradouro();
});

Then(/^the field cidade should be filled$/, () => {
    cepPages.validateCidade();
});

Then(/^the field estado should be filled$/, () => {
    cepPages.validateEstado();
});