Feature: Blank Fields Validation
  As a user
  I want to be notified when required fields are blank
  So that I know I need to fill them in

  Scenario: Submit form with blank fields
    Given I open login page
    When I click the submit button without filling any fields
    Then I should see validation messages for required fields