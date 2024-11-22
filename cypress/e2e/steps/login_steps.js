/// <reference types="cypress" /> 

import LoginPage from "../pages/login_pages";
const loginPage = new LoginPage();

Given(/^I am on the login page$/, () => {
	loginPage.visitLoginPage();
});

When(/^I enter the email "([^"]*)" and password "([^"]*)"$/, (email, password) => {
	loginPage.enterEmail(email);
	loginPage.enterPassword(password);
});

When(/^I click the login button$/, () => {
	loginPage.clickLoginButton();
});

Then(/^I should see "([^"]*)"$/, (message) => {
	loginPage.verifyMessage(message);
});