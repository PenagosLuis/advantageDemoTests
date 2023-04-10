export class LogginOutFeature {
  visit() {
    cy.visit("https://www.advantageonlineshopping.com/#/");
  }
  constructor() {
    this.menuUser = "#menuUser";
    this.SignOut = "#loginMiniTitle";
  }
  clickMenuUser() {
    cy.get(this.menuUser).click();
  }
  clickSignOut() {
    cy.get(this.SignOut).contains("Sign out").click();
    cy.wait(1000);
  }
  validateSignOut() {
    cy.get(this.menuUser).click();
    cy.get("input[name='username']").should("be.visible");
  }
}

export const loginOutFeature = new LogginOutFeature();
