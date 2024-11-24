/// <reference types="cypress" /> 

import InputPage from "../pages/input_pages";
const inputPage = new InputPage();

Given(/^I am logged in as a valid user$/, () => {
  inputPage.visitLoginPage();
});

Then(/^I access the Input Menu$/, () => {
  inputPage.visitInputMenu();
});

Then(/^I fill the form$/, () => {
  inputPage.fillOutForm();
});
