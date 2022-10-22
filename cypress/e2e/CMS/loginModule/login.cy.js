///<reference types='cypress-xpath'/>

import { file_path } from "../../../utils/filePath/filepath";

describe("Login Module", () => {
  it("Valid Login", () => {
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

    cy.xpath("//button[contains(text(),'ログイン')]").click();
  });
});
