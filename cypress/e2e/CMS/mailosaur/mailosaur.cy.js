import { faker } from "@faker-js/faker";
import { file_path } from "../../../utils/filePath/filepath";
describe("Mailosaur", () => {
  const serverId = "jetbgydi";
  const serverDomain = "jetbgydi.mailosaur.net";
  const emailAddress =
    faker.name.firstName().toLowerCase() + "@" + serverDomain;

  //   it("create", () => {
  //     cy.get('[data-test="sign-in-forgot-password-link"]').click();
  //     cy.get('[data-test="username-input"]').type(emailAddress);
  //     cy.get('[data-test="forgot-password-send-code-button"]').click();
  //   });

  it("send mail", () => {
    cy.visit("https://playground.mailslurp.com/");
    cy.get('[data-test="sign-in-create-account-link"]').click();
    cy.get(':nth-child(1) > [data-test="sign-up-non-phone-number-input"]').type(
      emailAddress
    );
    cy.get(':nth-child(2) > [data-test="sign-up-non-phone-number-input"]').type(
      faker.internet.password()
    );
    cy.get('[data-test="sign-up-create-account-button"]').click();

    cy.writeFile(file_path().mailCreate1, { email: emailAddress });
  });

  it.only("receive mail", () => {
    cy.readFile(file_path().mailCreate1).then((mail) => {
      cy.mailosaurGetMessage(serverId, {
        sentTo: mail.email,
      }).then((res) => {
        // debugger;
        expect(res.html.body).to.equal(
          `Your Demo verification code is ${res.html.body.split(/(\d+)/)[1]}`
        );
        cy.writeFile(file_path().mailReceive1, {
          code: res.html.body.split(/(\d+)/)[1],
        });
      });
    });
  });
});
