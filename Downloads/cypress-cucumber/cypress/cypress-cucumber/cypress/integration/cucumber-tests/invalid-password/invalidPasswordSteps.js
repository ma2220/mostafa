import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I open login page', () => {
  cy.visit('http://localhost:3000/');
});

When('I enter a valid username {string}', (username) => {
  cy.get('#name').clear().type(username);
});

When('I enter an invalid password {string}', (password) => {
  cy.get('#password').clear().type(password);
});

When('I click the submit button', () => {
  cy.get('[data-testid=submit-button]').click();
});

Then('I should see an invalid credentials message', () => {
  cy.get('[data-testid=error-message]')
    .should('be.visible')
    .and('contain', 'Invalid credentials');
});
