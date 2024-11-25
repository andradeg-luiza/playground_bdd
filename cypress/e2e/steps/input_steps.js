/// <reference types="cypress" /> 

import InputPage from "../pages/input_pages";
const inputPage = new InputPage();


Given(/^I am logged in as a valid user$/, () => {
	inputPage.visitLoginPage();
});

When(/^I access the Input Menu$/, () => {
	inputPage.visitInputMenu();
});

When(/^I fill the form$/, () => {
	inputPage.fillOutForm();
});

Then(/^I validate if the fields were filled in$/, () => {
	inputPage.validateFormFields();
});