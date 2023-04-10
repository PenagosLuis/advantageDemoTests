export class AddToCartFeature {
  visit() {
    cy.visit("https://www.advantageonlineshopping.com/#/");
  }
  constructor() {
    this.popularItems = "header[ng-show='welcome']";
    this.hpElitebook = "#details_10";
    this.addToCartButton = "button[name='save_to_cart']";
    this.checkoutButton = "#checkOutPopUp";
    this.userCart = "#userCart";
    this.hpSpeaker = "#details_21";
    this.hpSpeakerBlack = '[ng-show="firstImageToShow"] > .BLACK';
    this.assertAddToCart = "#userCart";
    this.hpTablet = "#details_16";
    this.addPlusItems = ".plus";
  }
  clickPopularItems() {
    cy.get(this.popularItems).click();
  }
  clickHPEliteBook() {
    cy.get(this.hpElitebook).click();
  }
  clickAddtoCartButton() {
    cy.get(this.addToCartButton).click();
  }
  clickCheckoutButton() {
    cy.get(this.checkoutButton).click({ force: true });
  }
  validateItemsInCart() {
    cy.get(this.userCart).should("be.visible");
  }
  clickHPSpeaker() {
    cy.get(this.hpSpeaker).click();
  }
  clickHPSpeakerBlack() {
    cy.get(this.hpSpeakerBlack).click();
  }
  validateHPSpeakerBlack() {
    cy.get(this.assertAddToCart).contains("BLACK").should("be.visible");
  }
  clickHPTablet() {
    cy.get(this.hpTablet).click();
  }
  clickAddPlusItems() {
    cy.get(this.addPlusItems).click();
  }
  validateAddPlusItem() {
    cy.get(this.assertAddToCart).contains("QTY: 2").should("be.visible");
  }
}
export const addToCartFeature = new AddToCartFeature();
