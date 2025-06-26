/* global cy */

describe("Navigation", () => {
  beforeEach(() => {
    cy.visit("http://localhost:1234");
  });

  it("opens Card Sets page", () => {
    cy.contains("Card Sets").click();
    cy.get('[data-cy="study-set-header"]').should("be.visible");
  });

  it("opens About page", () => {
    cy.contains("About").click();
    cy.get('[data-cy="about_page"]').should("be.visible");
  });

  it("returns to Home page", () => {
    cy.contains("Home").click();
    cy.get('[data-cy="study-set-header"]').should("not.exist");
  });
});
