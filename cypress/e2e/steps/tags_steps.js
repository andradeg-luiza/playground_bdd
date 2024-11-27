/// <reference types="cypress" /> 

import TagsPages from "../pages/tags_pages";
const tagsPages = new TagsPages();


Given(/^I am authenticated as a valid user$/, () => {
	tagsPages.visitLoginPage();
});

Then(/^I am on the Tags page$/, () => {
	tagsPages.visitTagMenu();
});

When(/^I add multiple tags$/, () => {
	tagsPages.addSomeTags();
});

Then(/^all the tags should be displayed in the tag list$/, () => {
	tagsPages.valdidateTagsAdd();
});