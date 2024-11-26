/// <reference types="cypress" /> 

import SelectPages from "../pages/select_pages";
const selectPages = new SelectPages();

Given(/^I am correctly logged into the website$/, () => {
	selectPages.visitLoginPage();
});

When(/^I navigate to the Select page$/, () => {
	selectPages.visitSelectMenu();
});

When(/^I select "([^"]*)" from the framework dropdown$/, (framework) => {
	selectPages.selectFramework(framework);
});

Then(/^the value "([^"]*)" should match the selected one$/, (framework) => {
	selectPages.validateSelectedFramework(framework);
});

When(/^I select the languages that use Node.js$/, () => {
	return true;
});

Then(/^the number of selected languages should match the options selected$/, () => {
	return true;
});