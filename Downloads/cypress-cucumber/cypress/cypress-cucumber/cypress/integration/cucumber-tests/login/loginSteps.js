import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I open login page', () => {
  cy.visit('http://localhost:3000/');
});

When('I fill in the form', () => {
  cy.get('#name').clear({ force: true }).type('testone123');
  cy.get('#password').clear({ force: true }).type('blank123');
});
  
When('I click the submit button', () => {
  cy.get('[data-testid=submit-button]').click();
});

Then('I should see a success message', () => {
  cy.get('[data-testid=success-message]').should('be.visible')
    .and('contain', 'Successfully!');
});

Then('I should be redirected to new page', () => {
  cy.url().should('include', '/new-page');
  cy.get('h1').should('contain', 'Welcome to the new page!');
});

When('I wait for {int} seconds', (seconds) => {
  cy.wait(seconds * 1000);
});

When('I click the sign out button', () => {
  cy.get('button').contains('Sign Out').click();
});

Then('I should be redirected back to the home page', () => {
  cy.url().should('eq', 'http://localhost:3000/');
  cy.get('h1').should('not.exist'); 
});
