// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
/* eslint-disable */
Cypress.Commands.add('createBadge', (dataBadges) => {
    cy.get(':nth-child(1) > .form-control').type(dataBadges.name).debug();
    cy.get(':nth-child(2) > .form-control').type(dataBadges.lastName);
    cy.get(':nth-child(3) > .form-control').type(dataBadges.email);
    cy.get(':nth-child(4) > .form-control').type(dataBadges.job);
    cy.get(':nth-child(5) > .form-control').type(dataBadges.instagram);
    // cy.screenshot('create-badge',{blackout: [':nth-child(3) > .form-control']});
    cy.contains('Save').click();
    cy.wait(3000);
    cy.contains(dataBadges.name + ' ' + dataBadges.lastName).should('exist');
});
