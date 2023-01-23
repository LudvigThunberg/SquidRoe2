/// <reference types="cypress" />

describe('Testing /', () => {
  it('should visit squidroe homepage', () => {
    cy.visit('/');
    cy.url().should('include', 'https://squid-roe-records.vercel.app/');
  });

  it('should go to releases', () => {
    cy.visit('https://squid-roe-records.vercel.app/');
    cy.get('[href="/releases"]').click();
    cy.url().should('include', '/releases');
  });

  it('should go to playlists', () => {
    cy.visit('/');
    cy.get('[href="/playlists"]').click();
    cy.url().should('include', '/playlists');
  });

  it('should go to about', () => {
    cy.visit('/');
    cy.get('[href="/about"]').click();
    cy.url().should('include', '/about');
  });

  it('should go to contact', () => {
    cy.visit('/');
    cy.get('[href="/contact"]').click();
    cy.url().should('include', '/contact');
  });
});

describe('test mobile hamburger menu', () => {
  context('iphone se2 resolution', () => {
    beforeEach(() => {
      cy.viewport(375, 667);
    });

    it('should show and click on hamburger menu', () => {
      cy.visit('/');
      cy.get('header > button').click();
      cy.get('[href="/releases"]').click();
      cy.url().should('include', '/releases');
    });
  });
});
export {};
