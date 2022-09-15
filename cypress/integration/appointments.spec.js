describe("Appointments", () => {
  beforeEach(() => {
    //resets database
    cy.request("GET", "/api/debug/reset");
    //renders page and checks elements exist
    cy.visit("/");
    cy.contains("Monday");
  });
  it("should book an interview", () => {
    //clicks add button
    cy.get("[alt=Add]").first().click();
    //inputs text
    cy.get("[data-testid=student-name-input]")
      .type("Lydia Miller-Jones", { delay: 200 })
      .should("have.value", "Lydia Miller-Jones");
    //selects interviewer
    cy.get("[alt='Sylvia Palmer']").click();
    //save
    cy.contains("Save").click();
    //check new appointment card exists
    cy.contains(".appointment__card--show", "Lydia Miller-Jones");
    cy.contains(".appointment__card--show", "Sylvia Palmer");
  });
  it("should edit an interview", () => {
    //find and click Edit button
    cy.get("[alt=Edit]").first().click({ force: true });
    //change interviewer
    cy.get("[data-testid=interviewer-pic]")
      .find("[alt='Tori Malcolm']")
      .click();
    //change student name
    cy.get("[data-testid=student-name-input]")
      .clear()
      .type("Hello", { delay: 200 });
    //save
    cy.contains("Save").click();
    //check appointment card for changes
    cy.contains(".appointment__card--show", "Hello");
    cy.contains(".appointment__card--show", "Tori Malcolm");
  });
  it("should cancel an interview", () => {
    //find and click delete button
    cy.get("[alt=Delete]").first().click({ force: true });
    //click confirm on confirmation screen
    cy.get(".appointment__actions").contains("Confirm").click();
    //check deleting status shows then disappears
    cy.contains("Deleting").should("exist");
    cy.contains("Deleting").should("not.exist");
    //check appointment card no longer exists
    cy.contains(".appointment__card--show", "Archie Cohen").should("not.exist");
  });
});
