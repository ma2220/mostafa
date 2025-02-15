import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I open login page', () => {
  cy.visit('http://localhost:3000/');
});

When('I enter a password {string}', (password) => {
  cy.get('#password').clear().type(password);
});

When('I click the password visibility toggle', () => {
  cy.get('[data-testid=password-toggle]').click();
});

Then('I should see the password in plain text', () => {
  cy.get('#password').should('have.attr', 'type', 'text');
});

When('I click the password visibility toggle again', () => {
  cy.get('[data-testid=password-toggle]').click();
});

Then('I should see the password masked', () => {
  cy.get('#password').should('have.attr', 'type', 'password');
});
