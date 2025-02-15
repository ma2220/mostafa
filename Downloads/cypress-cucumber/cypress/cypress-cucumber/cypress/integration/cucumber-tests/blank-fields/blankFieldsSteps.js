import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I open login page', () => {
  cy.visit('http://localhost:3000/');
});

When('I click the submit button without filling any fields', () => {
  cy.get('[data-testid=submit-button]').click();
});

Then('I should see validation messages for required fields', () => {
  cy.get('#name')
    .then(($input) => {
      expect($input[0].validationMessage).to.contain('Please fill out this field');
    });

  cy.get('#password')
    .then(($input) => {
      expect($input[0].validationMessage).to.contain('Please fill out this field');
    });
});
