Feature: Upload Files
  As a user
  I want to upload documents and images
  So that I can share files with the platform

  Scenario: Attaching a document
    Given I have successfully authenticated as a valid user
    When I navigate to the Upload page
    And I upload a document
    Then the document should be attached successfully

  Scenario: Attaching an image
    Given I have successfully authenticated as a valid user
    When I navigate to the Upload page
    And I upload an image
    Then the image should have the src attribute in the HTML