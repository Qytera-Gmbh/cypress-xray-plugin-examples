describe("template spec", () => {
  // Placeholder issue key.
  it("CYP-720 passes", () => {
    cy.request("https://example.org").should((response) => {
      expect(response.status).to.eq(200);
    });

    cy.request({
      url: "https://example.org",
      method: "POST",
      body: {
        message: "bonjour",
      },
    }).should((response) => {
      expect(response.status).to.eq(200);
    });
  });
});
