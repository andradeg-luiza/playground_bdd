Feature: Address Registration by CEP
  As a user
  I want to register an address using the Correios API or mock data
  So that I can save the correct address details efficiently

  Scenario: Register an address by consuming the Correios API
    Given I have successfully logged into the system
    And I navigate to the CEP page
    When I enter a valid CEP
    Then the field logradouro should be filled
    And the field cidade should be filled
    And the field estado should be filled

  Scenario: Register an address using intercept
    Given I have successfully logged into the system
    And I navigate to the CEP page
    When I mock the API response for a valid CEP
    Then the field logradouro should be filled
    And the field cidade should be filled
    And the field estado should be filled
