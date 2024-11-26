/// <reference types="cypress" /> 

import UploadPages from "../pages/upload_pages";
const uploadPages = new UploadPages();

Given(/^I have successfully authenticated as a valid user$/, () => {
	uploadPages.visitLoginPage();
});

When(/^I navigate to the Upload page$/, () => {
	uploadPages.visitUploadMenu();
});

When(/^I upload a document$/, () => {
	uploadPages.uploadDocuments();
});

Then(/^the document should be attached successfully$/, () => {
	uploadPages.validateUploadDocuments();
});

When(/^I upload an image$/, () => {
	uploadPages.uploadImages();
});

Then(/^the image should have the src attribute in the HTML$/, () => {
	uploadPages.validateUploadImages();
});