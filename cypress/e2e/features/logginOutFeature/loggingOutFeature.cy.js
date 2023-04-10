import { loginOutFeature } from "../../pageObjects/logginOut";

describe("Logging Out Test", () => {
  it('Verificar que al clickear en "Sign Out", se cierre completamente la sesión de la cuenta en uso.', () => {
    loginOutFeature.visit();
    cy.login(
      Cypress.env("credentials").user,
      Cypress.env("credentials").password
    );
    loginOutFeature.clickMenuUser();
    loginOutFeature.clickSignOut();
    loginOutFeature.validateSignOut();
  });
});
