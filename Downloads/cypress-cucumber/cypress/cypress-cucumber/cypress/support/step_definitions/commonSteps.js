import { Given } from 'cypress-cucumber-preprocessor/steps';

Given('I open login page', () => {
  cy.visit('http://localhost:3000/');
});
