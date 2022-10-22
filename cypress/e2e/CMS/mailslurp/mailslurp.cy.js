import { file_path } from "../../../utils/filePath/filepath";
import {
  createEmail,
  receiveEmails,
  sendEmail,
} from "../../../utils/mailslurp/mailslurp";

describe("Email", () => {
  it("create email", () => {
    createEmail(file_path().mailCreate);
  });

  it("send email", () => {
    sendEmail();
  });
  it("receive email", () => {
    receiveEmails();
  });
});
