/// <reference types="Cypress" />

describe('Mobile Navigation', () => {
  it('should navigate between bottom tabs', () => {
    cy.visit('http://localhost:3000/home');

    cy.url().should('include', '/home');

    cy.contains('Pedido').click();

    cy.url().should('include', '/requests');

    cy.contains('Ajuda').click();

    cy.url().should('include', '/help');

    cy.contains('Ínicio').click();

    cy.url().should('include', '/home');
  });

  it('should navigate between products details', () => {
    cy.visit('http://localhost:3000/home');

    cy.get('article').first().click();

    cy.url().should('include', '/item');

    cy.get('header svg').click();

    cy.url().should('include', '/home');
  });

  it('should navigate to base url when click to change table', () => {
    cy.visit('http://localhost:3000/help');

    cy.get('section button').click();

    cy.url().should('eq', 'http://localhost:3000/');
  });

  it('should navigate between orders tabs', () => {
    cy.visit('http://localhost:3000/requests');

    const getTabs = () => cy.get('[role="tab"]');

    const isSelected = (tab) =>
      tab.invoke('attr', 'aria-selected').should('to.eq', 'true');

    const isNotSelected = (tab) =>
      tab.invoke('attr', 'aria-selected').should('to.eq', 'false');

    getTabs().last().click();

    isNotSelected(getTabs().first());
    isSelected(getTabs().last());

    getTabs().first().click();

    isSelected(getTabs().first());
    isNotSelected(getTabs().last());
  });
});
