Feature: Radio Option Functionality
  As a user
  I want to select a single option in a list
  So that I can choose the relevant framework

  Scenario: Selecting the framework used in the Cypress Skills course
    Given I was able to log in correctly
    When I navigate to the Radio Option page
    Then I click on the framework used in the Cypress Skills course
