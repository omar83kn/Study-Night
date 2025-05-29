/* global cy */

describe("Navigation Test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:1234");
  });

  it("Navigates to the Card Sets page", () => {
    cy.contains("Card Set").click();
    cy.url().should("include", "card-sets");
  });

  it("Navigates to the About page", () => {
    cy.contains("About").click();
    cy.contains("About Study Night");
  });

  it("Navigates to the Home page", () => {
    cy.contains("Home").click();
    cy.contains("Welcome to Study Night");
  });
});
