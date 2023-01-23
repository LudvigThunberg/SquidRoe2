/// <reference types="cypress" />

describe('testing /releases', () => {
  it('should visit /releases', () => {
    cy.visit('/releases');
  });

  it('sould go to / when clicking on logo', () => {
    cy.visit('/releases');
    cy.get('[href="/"]').click();
    cy.url().should('include', '/');
  });

  it('should klick on links', () => {
    cy.visit('/releases');
    cy.get(
      '[href="https://squidroerecords.bandcamp.com/album/mollusc-caviar-buffet"]',
    )
      .invoke('removeAttr', 'target')
      .click();
  });
});
export {};
