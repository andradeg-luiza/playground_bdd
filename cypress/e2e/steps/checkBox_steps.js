/// <reference types="cypress" /> 

import CheckBoxPages from "../pages/checkBox_pages";
const checkBoxPages = new CheckBoxPages();


Given(/^I am logged in$/, () => {
	checkBoxPages.visitLoginPage();
});

When(/^I navigate to the Checkbox page$/, () => {
	checkBoxPages.visitCheckBoxMenu();
});

Then(/^I click on the languages that use Node.js$/, () => {
	checkBoxPages.clickNodeJsLanguages();
});

Then(/^I check all the options$/, () => {
	checkBoxPages.clickAllLanguages();
});