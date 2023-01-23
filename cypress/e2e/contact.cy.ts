/// <reference types="cypress" />

describe('Testing /contact', () => {
  it('should visit squidroe homepage', () => {
    cy.visit('/contact');
    cy.url().should('include', 'https://squid-roe-records.vercel.app/contact');
  });

  it('allows users to subscribe to the email list', () => {
    cy.visit('/contact');
    cy.get('[placeholder="Name"]').type('aaaaa');
    cy.get('[placeholder="Email"]').type('a@a.se');
    cy.get('.c-iptwVg > .c-gNAhuo').click();
    cy.get('.c-PJLV-ihbQBER-css').click();
    cy.contains('Email address is already submitted');
  });
});
export {};
