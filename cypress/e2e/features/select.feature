Feature: Select Functionality
  As a user
  I want to select options from a dropdown or list
  So that I can choose relevant frameworks or languages

  Scenario: Selecting a testing framework
    Given I am correctly logged into the website
    When I navigate to the Select page
    And I select "Cypress" from the framework dropdown
    Then the value "Cypress" should match the selected one

  Scenario: Marking the languages that use Node.js
    Given I am correctly logged into the website
    When I navigate to the Select page
    And I select the languages that use Node.js
    Then the number of selected languages should match the options selected
