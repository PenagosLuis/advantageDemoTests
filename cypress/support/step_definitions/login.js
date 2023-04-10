const {
  Given,
  When,
  Then,
} = require("@badeball/cypress-cucumber-preprocessor");
import { loginFeature } from "../../e2e/pageObjects/logginPO";

Given(/^Estoy en la página de inicio$/, function () {
  loginFeature.visit();
  cy.url().should("include", "https://www.advantageonlineshopping.com/#/");
});

When(
  /^Lleno los campos de "([^"]*)" y "([^"]*)" y hago click en Sign in$/,
  (username, password) => {
    loginFeature.clickMenuUser();
    loginFeature.inputUsernameLogin(username);
    loginFeature.inputPasswordLogin(password);
    loginFeature.clickSigninButton();
  }
);
Then(
  /^Debería validar que la sesión se ha iniciado correctamente$/,
  function () {
    loginFeature.validateSuccessLogin();
  }
);
