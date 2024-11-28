/// <reference types="cypress" /> 

import TablesPages from "../pages/tables_pages";
const tablesPages = new TablesPages();

Given(/^I have successfully logged in$/, () => {
    tablesPages.visitLoginPage();
});

Then(/^I navigate to the Tables page$/, () => {
    tablesPages.visitTablesMenu();
});

Then(/^I should see a visible row containing the correct social media details$/, () => {
    tablesPages.checkGithubIsVisible();
});

When(/^I delete a social media entry$/, () => {
    tablesPages.deleteFacebook();
});

Then(/^the entry should no longer be visible in the table$/, () => {
    tablesPages.validateDeleteFacebook();
});

When(/^I cancel the deletion a social media$/, () => {
    tablesPages.cancelDeleteYoutube();
});


Then(/^the entry should remain visible in the table$/, () => {
    tablesPages.validateCancelDeleteYoutube();
});