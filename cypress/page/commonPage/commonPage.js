/// <reference types="cypress-xpath" />
export class CommonPage {
  textInput(xpath, value) {
    cy.xpath(xpath)
      .clear({ force: true })
      .type(value)
      .should("have.value", value);
  }

  clickButton(xpath) {
    cy.xpath(xpath).click();
  }

  clickButtonForceTrue(xpath) {
    cy.xpath(xpath).click({ force: true });
  }

  clickRadioButton(xpath) {
    cy.xpath(xpath).check({ force: true }).should("be.checked");
  }

  alertMessage(xpath, value) {
    cy.xpath(xpath).should("contain", value).and("be.visible");
  }
}
