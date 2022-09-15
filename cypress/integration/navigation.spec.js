describe("Navigation", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  //covered in beforeEach
  it("should visit root", () => {});

  it("should navigate to Tuesday", () => {
    //find and click Tuesday on navbar
    cy.contains("[data-testid=day]", "Tuesday")
      .click()
      //check day has been selected
      .should("have.class", "day-list__item--selected");
  });
});
