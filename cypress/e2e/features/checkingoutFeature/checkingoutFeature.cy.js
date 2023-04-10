import { checkoutFeature } from "../../pageObjects/checkout";

describe("Checkingout Feature Test", () => {
  beforeEach(() => {
    checkoutFeature.visit();
    cy.login(
      Cypress.env("credentials").user,
      Cypress.env("credentials").password
    );
    cy.addToCart();
  });
  it("Verificar el correcto funcionamiento del proceso de checkout en el sitio web (pagando con una tarjeta de crédito)", () => {
    checkoutFeature.clickNextButton();
    checkoutFeature.selectMasteCard();
    checkoutFeature.creditCardInfo(
      Cypress.env("mastercard").cardnumber,
      Cypress.env("mastercard").cvvNumber,
      Cypress.env("mastercard").expDateMonth,
      Cypress.env("mastercard").expDateYear,
      Cypress.env("mastercard").cardHolder
    );
    checkoutFeature.validaPayNowButton();
    checkoutFeature.clickPayNowButtonMC();
    checkoutFeature.validateOrderSuccess();
  });
  it("Verificar el correcto funcionamiento del proceso de checkout en el sitio web (pagando con safepay)", () => {
    checkoutFeature.clickNextButton();

    checkoutFeature.safePayInfo(
      Cypress.env("safepay").userSP,
      Cypress.env("safepay").passwordSP
    );
    checkoutFeature.clickPayNowButtonSP();
    checkoutFeature.validateOrderSuccess();
  });
});
