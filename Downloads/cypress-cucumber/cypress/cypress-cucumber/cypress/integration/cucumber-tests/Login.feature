Feature: User login and navigation

  As a valid user
  I want to log in into Application

  Scenario: User logs in successfully and navigates through the app
    Given I open login page
    When I fill in the form
    And I click the submit button
    Then I should see a success message
    And I should be redirected to new page
    When I wait for 3 seconds
    And I click the sign out button
    Then I should be redirected back to the home page
