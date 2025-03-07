describe("FilterByName E2E Test", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should render the input field", () => {
    cy.get("input[placeholder='Search by name']").should("exist");
  });

  it("should filter characters by name when typing", () => {
    cy.get("input[placeholder='Search by name']").type("Rick");
    cy.get(".characters__item").should("contain", "Rick Sanchez");
  });

  it("should update the input value correctly", () => {
    cy.get("input[placeholder='Search by name']").type("Morty");
    cy.get("input[placeholder='Search by name']").should("have.value", "Morty");
  });
});
