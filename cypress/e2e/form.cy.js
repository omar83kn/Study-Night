/* global cy */

describe("Form Testing", () => {
  beforeEach(() => {
    cy.visit("http://localhost:1234");
  });

  it("Creates a card set correctly", () => {
    cy.contains("Create Set").click();
    cy.get("#set-title").type("Test");
    cy.get("#set-description").type("A description for the set");
    cy.get("form").submit();
    cy.contains("Test");
  });

  it("Shows an error when fields are left empty", () => {
    cy.contains("Create Set").click();
    cy.get("form").submit();
    cy.contains("Please enter a title");
  });
});
