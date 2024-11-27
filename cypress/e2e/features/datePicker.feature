Feature: Date Picker Functionality
  As a user
  I want to select my birth date using the date picker
  So that I can provide my date of birth accurately

  Scenario: Selecting my birth date in the Date Picker
    Given I have successfully logged in with a valid user
    And I access the Date Picker menu
    Then I select my birth date
