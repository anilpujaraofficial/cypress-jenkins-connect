describe("signup module", () => {
  it("signup", () => {
    cy.visit("https://qa-aeon.ekbana.info/system");
    cy.xpath("//input[@name='email']")
      .should("exist")
      .clear()
      .type("admin")
      .should("have.value", "admin")
      .and("be.visible");

    cy.xpath("//input[@name='password']")
      .should("exist")
      .clear()
      .type("123admin@")
      .should("have.value", "123admin@")
      .and("be.visible");

    cy.xpath("//div[@class='login-wrapper']//div[3]").then((res) => {
      debugger;
    });

    cy.xpath("//button[contains(text(),'ログイン')]").click();
    cy.get("#sidenav4 > :nth-child(3) > a > .span-link").click({
      force: true,
    });
    for (let i = 0; i < 40; i++) {
      cy.xpath("(//button[@type='button'])[1]").click();
      cy.xpath("//button[@id='confirmDelete']").click();
    }
  });
});
