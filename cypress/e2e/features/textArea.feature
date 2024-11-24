Feature: Text Area Functionality
  As a user
  I want to fill in the text area
  So that I can input messages successfully

  Scenario: Filling in the text area on the page
    Given I am logged in as a valid user
    When I navigate to the Textarea page
    And I fill in the text area
    Then I validate that the text area is filled
