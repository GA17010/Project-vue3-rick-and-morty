describe("Pagination E2E Test", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should navigate between pages", () => {
    cy.get("#pagination-item-2").contains("2").click();
    cy.get("#pagination-item-2.active").should("contain", "2");
  });

  it("should disable previous button on first page", () => {
    cy.get("#pagination-prev").should("have.attr", "disabled");
  });

  it("should disable next button on last page", () => {
    cy.get("#pagination-item-42").contains("42").click();
    cy.get("#pagination-next").should("have.attr", "disabled");
  });
});
