export class CheckoutFeature {
  visit() {
    cy.visit("https://www.advantageonlineshopping.com/#/");
  }

  constructor() {
    this.nextButton = "#next_btn";
    this.masterCardRadioBtn = "input[name='masterCredit']";
    this.creditCardFields = {
      creditCard: "#creditCard",
      cvv: "input[name='cvv_number']",
      expDateMonth: "select[name='mmListbox']",
      expDateYear: "select[name='yyyyListbox']",
      cardHolderName: "input[name='cardholder_name']",
      checkboxSaveChanges: "input[name='save_master_credit']",
    };
    this.safePayRadioBtn = "input[name='safepay']";
    this.payNowButtonMC = "#pay_now_btn_ManualPayment";
    this.orderSuccess = "span[class='roboto-regular ng-scope']";
    this.safePayFields = {
      inputSPUser: "input[name='safepay_username']",
      inputSPPassword: "input[name='safepay_password']",
      checkboxSaveChanges: "input[name='save_safepay']",
    };
    this.payNowButtonSP = "#pay_now_btn_SAFEPAY";
  }
  clickNextButton() {
    cy.get(this.nextButton).click();
  }
  selectMasteCard() {
    cy.get(this.masterCardRadioBtn).check();
  }
  creditCardInfo(cardnumber, cvvNumber, expDateMonth, expDateYear, cardholder) {
    cy.get(this.creditCardFields.creditCard)
      .type(cardnumber, { force: true })
      .should("have.value", cardnumber);
    cy.get(this.creditCardFields.cvv)
      .click()
      .type(cvvNumber, { force: true })
      .should("have.value", 333);
    cy.get(this.creditCardFields.expDateMonth)
      .select(expDateMonth)
      .should("be.visible", expDateMonth);
    cy.get(this.creditCardFields.expDateYear)
      .select(expDateYear)
      .should("be.visible", expDateYear);
    cy.get(this.creditCardFields.cardHolderName)
      .type(cardholder)
      .should("have.value", cardholder);
    cy.get(this.creditCardFields.checkboxSaveChanges)
      .uncheck()
      .should("not.be.checked");
  }
  clickPayNowButtonMC() {
    cy.get(this.payNowButtonMC).click();
  }
  clickPayNowButtonSP() {
    cy.get(this.payNowButtonSP).click();
  }
  clickSafePayRadioBtn() {
    cy.get(this.safePayRadioBtn).check();
  }
  safePayInfo(spuser, sppassword) {
    cy.get(this.safePayFields.inputSPUser)
      .type(spuser)
      .should("have.value", spuser);
    cy.get(this.safePayFields.inputSPPassword)
      .type(sppassword)
      .should("have.value", sppassword);
    cy.get(this.safePayFields.checkboxSaveChanges)
      .uncheck()
      .should("not.be.checked");
  }
  validaPayNowButton() {
    cy.get(this.payNowButtonMC).should("be.enabled");
  }
  validateOrderSuccess() {
    cy.get(this.orderSuccess).should("be.visible");
  }
}
export const checkoutFeature = new CheckoutFeature();
