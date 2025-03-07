describe("FilterByStatus E2E Test", () => {
  beforeEach(() => {
    cy.visit("/");

    // Esperamos a que los personajes se carguen
    cy.get(".characters__item").should("have.length.greaterThan", 0);
  });

  it("should render filter options", () => {
    cy.get(".item-status-all").should("have.length", 4);
    cy.get(".item-status-all").eq(0).should("contain", "All");
    cy.get(".item-status-all").eq(1).should("contain", "Alive");
    cy.get(".item-status-all").eq(2).should("contain", "Dead");
    cy.get(".item-status-all").eq(3).should("contain", "Unknown");
  });

  it("should filter characters by status when clicking on filter options", () => {
    cy.get(".characters__item").should("have.length.greaterThan", 0);

    cy.get(".item-status-all").contains("Alive").click();
    cy.get(".characters__item").each(($el) => {
      cy.wrap($el).should("contain", "Alive");
    });

    cy.get(".item-status-all").contains("Dead").click();
    cy.get(".characters__item").each(($el) => {
      cy.wrap($el).should("contain", "Dead");
    });

    cy.get(".item-status-all").contains("Unknown").click();
    cy.get(".characters__item").each(($el) => {
      cy.wrap($el).should("contain", "unknown");
    });

    cy.get(".item-status-all").contains("All").click();
    cy.get(".characters__item").should("have.length.greaterThan", 0);
  });

  it("should update the active filter option correctly", () => {
    cy.get(".item-status-all").contains("Alive").click();
    cy.get(".item-status-all.active").should("contain", "Alive");

    cy.get(".item-status-all").contains("Dead").click();
    cy.get(".item-status-all.active").should("contain", "Dead");

    cy.get(".item-status-all").contains("Unknown").click();
    cy.get(".item-status-all.active").should("contain", "Unknown");

    cy.get(".item-status-all").contains("All").click();
    cy.get(".item-status-all.active").should("contain", "All");
  });
});
