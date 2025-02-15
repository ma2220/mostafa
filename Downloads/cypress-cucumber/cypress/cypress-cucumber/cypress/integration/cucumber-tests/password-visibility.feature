Feature: Password Visibility Toggle
  As a user
  I want to be able to see my password
  So that I can verify I typed it correctly

  Scenario: Toggle password visibility
    Given I open login page
    When I enter a password "testpass123"
    And I click the password visibility toggle
    Then I should see the password in plain text
    When I click the password visibility toggle again
    Then I should see the password masked