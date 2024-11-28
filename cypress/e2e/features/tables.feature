Feature: Tables Functionality
  As a user
  I want to manage social media entries
  So that I can validate, delete, or keep them as needed

  Scenario: Validating a social media entry
    Given I have successfully logged in
    And I navigate to the Tables page
    Then I should see a visible row containing the correct social media details

  Scenario: Deleting a social media entry
    Given I have successfully logged in
    And I navigate to the Tables page
    When I delete a social media entry
    Then the entry should no longer be visible in the table

  Scenario: Cancelling a social media deletion
    Given I have successfully logged in
    And I navigate to the Tables page
    When I cancel the deletion a social media
    Then the entry should remain visible in the table