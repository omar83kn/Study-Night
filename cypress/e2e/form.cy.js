/* global cy */

describe("Create / Add Card forms", () => {
  beforeEach(() => {
    cy.visit("http://localhost:1234");
    cy.contains("Card Sets").click();              // go to library page
  });

  it("creates a new Study Set (happy path)", () => {
    cy.get('[data-cy="toggle_form"]').click();     // open the form
    cy.get("#titleInput").type("Test Set");        // only title is required
    cy.get("form").submit();
    cy.contains("Test Set").should("exist");
  });

  it("shows validation errors (unhappy path)", () => {
    cy.get('[data-cy="toggle_form"]').click();
    cy.get("form").submit();
    cy.contains("TITLE CANNOT BE EMPTY").should("exist");
  });
});
