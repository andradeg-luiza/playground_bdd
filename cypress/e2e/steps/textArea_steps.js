/// <reference types="cypress" /> 

import TextAreaPage from "../pages/textArea_pages";
const textAreaPage = new TextAreaPage();

Given(/^I am logged in as a valid user$/, () => {
	textAreaPage.visitLoginPage()
});

When(/^I navigate to the Textarea page$/, () => {
	textAreaPage.visitTexteAreaMenu()
});

When(/^I fill in the text area$/, () => {
	textAreaPage.fillTextArea()
});

Then(/^I validate that the text area is filled$/, () => {
	textAreaPage.validateTextAreaFields()
});