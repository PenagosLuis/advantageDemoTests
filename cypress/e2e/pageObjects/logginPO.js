export class LoginFeature {
  visit() {
    cy.visit("https://www.advantageonlineshopping.com/#/");
  }
  constructor() {
    this.menuUser = "#menuUser";
    this.usernameLogin = "input[name='username']";
    this.passwordLogin = "input[name='password']";
    this.signInButton = "#sign_in_btnundefined";
    this.loginSuccess = {
      logMenuUser: "#menuUser",
      logLoginOpt: "#loginMiniTitle",
    };
    this.failLogin = "#signInResultMessage";
    this.forgotPassword = ".forgot-Passwowd.ng-scope";
  }
  clickMenuUser() {
    cy.get(this.menuUser).click();
  }
  inputUsernameLogin(username) {
    cy.get(this.usernameLogin).type(username).should("have.value", username);
  }
  inputPasswordLogin(password) {
    cy.get(this.passwordLogin).type(password).should("have.value", password);
  }
  clickSigninButton() {
    cy.get(this.signInButton).click();
    cy.wait(1000);
  }
  validateSuccessLogin() {
    cy.get(this.loginSuccess.logMenuUser).click();
    cy.get(this.loginSuccess.logLoginOpt).should("be.visible");
  }
  validateFailLogin() {
    cy.get(this.failLogin).should("be.visible");
  }
  clickForgotPassword() {
    cy.get(this.forgotPassword).click();
  }
  validateForgotPasswordFunction() {
    cy.get(this.forgotPassword).should("not.be.visible");
  }
}
export const loginFeature = new LoginFeature();
