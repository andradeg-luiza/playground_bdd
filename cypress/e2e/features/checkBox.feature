Feature: Checkbox Functionality
  As a user
  I want to check multiple options in a list
  So that I can select the relevant options

  Scenario: Marking the languages that use Node.js
    Given I am logged in
    When I navigate to the Checkbox page
    Then I click on the languages that use Node.js

  Scenario: Checking all the available options
    Given I am logged in 
    When I navigate to the Checkbox page
    Then I check all the options
