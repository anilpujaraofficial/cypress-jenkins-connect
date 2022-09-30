///<reference types='cypress-xpath'/>

import { file_path } from "../../../utils/filePath/filePath";

describe("Login Module", () => {
  it("Valid Login", () => {
    cy.log(file_path().signup);
  });
});
