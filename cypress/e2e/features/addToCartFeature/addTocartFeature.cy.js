import { addToCartFeature } from "../../pageObjects/addToCart";

describe("Add To Cart Feature Test", () => {
  beforeEach(() => {
    addToCartFeature.visit();
  });
  afterEach(() => {
    cy.get("#menuCart").click();
    cy.get("li[data-ng-mouseenter='enterCart()'] ul li table")
      .find("tbody")
      .find("tr")
      .find("td")
      .eq(2)
      .find("div")
      .find("div")
      .click();
  });

  it('Verificar que al dar click en el botón "Add to cart" , se agregue correctamente el producto en el carrito de compras.', () => {
    cy.login(
      Cypress.env("credentials").user,
      Cypress.env("credentials").password
    );
    addToCartFeature.clickPopularItems();
    addToCartFeature.clickHPEliteBook();
    addToCartFeature.clickAddtoCartButton();
    addToCartFeature.clickCheckoutButton();
    addToCartFeature.validateItemsInCart();
  });
  it("Verificar que al cambiar de color el item deseado se aregue al carrito con el color seleccionado. ", () => {
    addToCartFeature.clickPopularItems();
    addToCartFeature.clickHPSpeaker();
    addToCartFeature.clickHPSpeakerBlack();
    addToCartFeature.clickAddtoCartButton();
    addToCartFeature.clickCheckoutButton();
    addToCartFeature.validateHPSpeakerBlack();
  });
  it("Verificar que al añadir más ítems al carro de compras, estos se ven reflejados en el carrito. ", () => {
    addToCartFeature.clickPopularItems();
    addToCartFeature.clickHPTablet();
    addToCartFeature.clickAddPlusItems();
    addToCartFeature.clickAddtoCartButton();
    addToCartFeature.clickCheckoutButton();
    addToCartFeature.validateAddPlusItem();
  });
});
