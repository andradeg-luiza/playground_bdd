//TODO refatorar em breve para adicionar novas features

Feature: Input Fields Functionality
  As a user
  I want to fill in input fields
  So that I can submit the necessary information

  Scenario: Filling in the input fields on the form
    Given I am logged in as a valid user
    When I access the Input Menu
    And I fill the form
    Then I validate if the fields were filled in