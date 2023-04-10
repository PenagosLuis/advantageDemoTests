import { loginFeature } from "../../pageObjects/logginPO";
import faker from "faker";

describe("Loggin In tests", () => {
  beforeEach(() => {
    loginFeature.visit();
  });
  const usuarionovalido = "usernovalid";
  const novaliduser = `${usuarionovalido}${faker.random.alpha({ count: 3 })}`;
  const randomPassword = faker.internet.password();
  it("Verificar que con una cuenta existente, el usuario pueda ingresar a la página.", () => {
    cy.login(
      Cypress.env("credentials").user,
      Cypress.env("credentials").password
    );
    loginFeature.validateSuccessLogin();
  });

  it("Verificar que al usar una cuenta inexistente el sistema no permita el ingreso al sitio web.", () => {
    loginFeature.clickMenuUser(),
      loginFeature.inputUsernameLogin(novaliduser),
      loginFeature.inputPasswordLogin(randomPassword),
      loginFeature.validateFailLogin();
  });
  it("Verificar que al usar una contraseña incorrecta, usando un usuario valido, no deje hacer el loggeo al sitio web. ", () => {
    loginFeature.clickMenuUser(),
      loginFeature.inputUsernameLogin(Cypress.env("credentials").user),
      loginFeature.inputPasswordLogin(randomPassword),
      loginFeature.validateFailLogin();
  });
  it('Verificar la funcionalidad del botón "Forgot your password?"', () => {
    loginFeature.clickMenuUser(),
      loginFeature.inputUsernameLogin(Cypress.env("credentials").user),
      loginFeature.inputPasswordLogin(randomPassword),
      loginFeature.clickForgotPassword();
    loginFeature.validateForgotPasswordFunction();
  });
});
