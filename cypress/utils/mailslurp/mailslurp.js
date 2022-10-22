import { file_path } from "../filePath/filepath";
import { faker } from "@faker-js/faker";
export function createEmail(filpath) {
  cy.task("checkFileExists", filpath).then((bool) => {
    if (!bool) {
      cy.mailslurp()
        .then((mailslurp) => mailslurp.createInbox())
        .then((inbox) => {
          expect(inbox.emailAddress).to.contain("@mailslurp");
          cy.writeFile(filpath, inbox);
        });
    } else {
      cy.log("Email Already create!!!");
    }
  });
}
export function sendEmail() {
  let sub = faker.lorem.paragraph();
  cy.readFile(file_path().mailCreate).then((res) => {
    cy.mailslurp().then((mailslurp) =>
      mailslurp.sendEmail(res.id, {
        to: [res.emailAddress],
        subject: sub,
        body: `<html>validate ${new Date()}</html>`,
        isHTML: true,
      })
    );
    cy.log(sub);
  });
}

export function receiveEmails() {
  cy.readFile(file_path().mailCreate).then((res) => {
    cy.wait(1500);
    cy.mailslurp()
      .then((mailslurp) => mailslurp.waitForLatestEmail(res.id, 30000, true))
      .then((res) => {
        cy.writeFile(file_path().mailReceive, res);
        cy.log(res.subject);
      });
  });
}
