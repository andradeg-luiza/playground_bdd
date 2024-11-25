/// <reference types="cypress" /> 

import RadioButtonPages from "../pages/radioButton_pages";
const radioButtonPages = new RadioButtonPages();


Given(/^I was able to log in correctly$/, () => {
	radioButtonPages.visitLoginPage();
});

When(/^I navigate to the Radio Option page$/, () => {
	radioButtonPages.visitradioButtonMenu();
});

Then(/^I click on the framework used in the Cypress Skills course$/, () => {
	radioButtonPages.clickCypress();
});