export function getUrl(url) {
  return Cypress.env(Cypress.env("testingEnv"))[url];
}
