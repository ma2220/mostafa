Feature: Invalid Password Testing
  As a system
  I want to prevent login with invalid credentials
  So that unauthorized users cannot access the system

  Scenario: Login attempt with invalid password
    Given I open login page
    When I enter a valid username "testuser"
    And I enter an invalid password "wrongpass123"
    And I click the submit button
    Then I should see an invalid credentials message