Feature: Login Functionality
  As a user
  I want to log in to the system
  So that I can access the platform functionalities

  Scenario Outline: User tries to log in
    Given I am on the login page
    When I enter the email "<email>" and password "<password>"
    And I click the login button
    Then I should see "<message>"

    Examples:
      | email                     | password    | message                                                                     |
      | papito@cyskills.com.br    | showtime    | Boas vindas ao Cypress Playground                                           |
      | papito@cyskills.com.br    | abc123456   | E-mail ou senha incorretos. Por favor, tente novamente!                     |
      | 404@cyskills.com.br       | showtime    | E-mail ou senha incorretos. Por favor, tente novamente!                     |
      | www.cyskills.com.br       | showtime    | O formato do e-mail está incorreto. Por favor, verifique e tente novamente! |
