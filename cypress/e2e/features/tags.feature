Feature: Manage Tags
  As a user
  I want to add tags to organize content
  So that I can categorize items effectively

  Scenario: Adding tags
    Given I am authenticated as a valid user
    And I am on the Tags page
    When I add multiple tags
    Then all the tags should be displayed in the tag list