export class RegisterAccount {
  visit() {
    cy.visit("https://www.advantageonlineshopping.com/#/");
  }

  constructor() {
    this.menuUser = "#menuUser";
    this.createNewAccountBtn = ".create-new-account.ng-scope";
    this.registrationFields = {
      regUsername: "input[name='usernameRegisterPage']",
      regEmail: "input[name='emailRegisterPage']",
      regPassword: "input[name='passwordRegisterPage']",
      regConfirmPassword: "input[name='confirm_passwordRegisterPage']",
      regFirstName: "input[name='first_nameRegisterPage']",
      regLastName: "input[name='last_nameRegisterPage']",
      regPhoneNumber: "input[name='phone_numberRegisterPage']",
      regCountry: "select[name='countryListboxRegisterPage']",
      regCity: "input[name='cityRegisterPage']",
      regAddress: "input[name='addressRegisterPage']",
      regStateProvinceRegion:
        "input[name='state_/_province_/_regionRegisterPage']",
      regPostalCode: "input[name='postal_codeRegisterPage']",
      regCheckboxIAgree: "input[name='i_agree']",
      regRegisterButton: "#register_btnundefined",
    };
    this.regEmailFail = ".animated.invalid";
    this.regSuccess = {
      regMenuUser: "#menuUser",
      regLoginOpt: "#loginMiniTitle",
    };
    this.regExistentUserName = ".center.block.smollMargin";
  }

  registration(
    username,
    email,
    password,
    firstName,
    lastName,
    phoneNumber,
    country,
    city,
    address,
    stateProvinceRegion,
    postalCode
  ) {
    cy.get(this.menuUser).click();
    cy.get(this.createNewAccountBtn).click();
    cy.get(this.registrationFields.regUsername)
      .type(username)
      .should("have.value", username);
    cy.get(this.registrationFields.regEmail)
      .type(email)
      .should("have.value", email);
    cy.get(this.registrationFields.regPassword)
      .type(password)
      .should("have.value", password);
    cy.get(this.registrationFields.regConfirmPassword)
      .type(password, { force: true })
      .should("have.value", password);
    cy.get(this.registrationFields.regFirstName)
      .type(firstName)
      .should("have.value", firstName);
    cy.get(this.registrationFields.regLastName)
      .type(lastName)
      .should("have.value", lastName);
    cy.get(this.registrationFields.regPhoneNumber)
      .type(phoneNumber)
      .should("have.value", phoneNumber);
    cy.get(this.registrationFields.regCountry)
      .select(country)
      .should("not.to.be.empty");
    cy.get(this.registrationFields.regCity)
      .type(city)
      .should("have.value", city);
    cy.get(this.registrationFields.regAddress)
      .type(address)
      .should("have.value", address);
    cy.get(this.registrationFields.regStateProvinceRegion)
      .type(stateProvinceRegion, { force: true })
      .should("have.value", stateProvinceRegion);
    cy.get(this.registrationFields.regPostalCode)
      .type(postalCode)
      .should("have.value", postalCode);
    cy.get(this.registrationFields.regCheckboxIAgree)
      .check()
      .should("be.checked");
    cy.get(this.registrationFields.regRegisterButton).click();
    cy.wait(1000);
  }
  validateLogin() {
    cy.get(this.regSuccess.regMenuUser).click();
    cy.get(this.regSuccess.regLoginOpt).should("be.visible");
  }
  registrationEmailFail(
    username,
    email,
    password,
    firstName,
    lastName,
    phoneNumber,
    country,
    city,
    address,
    stateProvinceRegion,
    postalCode
  ) {
    cy.get(this.menuUser).click();
    cy.get(this.createNewAccountBtn).click();
    cy.get(this.registrationFields.regUsername)
      .type(username)
      .should("have.value", username);
    cy.get(this.registrationFields.regEmail)
      .type(email)
      .should("have.value", email);
    cy.get(this.registrationFields.regPassword)
      .type(password)
      .should("have.value", password);
    cy.get(this.registrationFields.regConfirmPassword)
      .type(password, { force: true })
      .should("have.value", password);
    cy.get(this.regEmailFail).should("be.visible");
    cy.get(this.registrationFields.regFirstName)
      .type(firstName)
      .should("have.value", firstName);
    cy.get(this.registrationFields.regLastName)
      .type(lastName)
      .should("have.value", lastName);
    cy.get(this.registrationFields.regPhoneNumber)
      .type(phoneNumber)
      .should("have.value", phoneNumber);
    cy.get(this.registrationFields.regCountry)
      .select(country)
      .should("not.to.be.empty");
    cy.get(this.registrationFields.regCity)
      .type(city)
      .should("have.value", city);
    cy.get(this.registrationFields.regAddress)
      .type(address)
      .should("have.value", address);
    cy.get(this.registrationFields.regStateProvinceRegion)
      .type(stateProvinceRegion, { force: true })
      .should("have.value", stateProvinceRegion);
    cy.get(this.registrationFields.regPostalCode)
      .type(postalCode)
      .should("have.value", postalCode);
    cy.get(this.registrationFields.regCheckboxIAgree)
      .check()
      .should("be.checked");
  }

  validateExistentUserName() {
    cy.get(this.regExistentUserName).should("be.visible");
  }

  registrationAgreeTNC(
    username,
    email,
    password,
    firstName,
    lastName,
    phoneNumber,
    country,
    city,
    address,
    stateProvinceRegion,
    postalCode
  ) {
    cy.get(this.menuUser).click();
    cy.get(this.createNewAccountBtn).click();
    cy.get(this.registrationFields.regUsername)
      .type(username)
      .should("have.value", username);
    cy.get(this.registrationFields.regEmail)
      .type(email)
      .should("have.value", email);
    cy.get(this.registrationFields.regPassword)
      .type(password)
      .should("have.value", password);
    cy.get(this.registrationFields.regConfirmPassword)
      .type(password, { force: true })
      .should("have.value", password);
    cy.get(this.registrationFields.regFirstName)
      .type(firstName)
      .should("have.value", firstName);
    cy.get(this.registrationFields.regLastName)
      .type(lastName)
      .should("have.value", lastName);
    cy.get(this.registrationFields.regPhoneNumber)
      .type(phoneNumber)
      .should("have.value", phoneNumber);
    cy.get(this.registrationFields.regCountry)
      .select(country)
      .should("not.to.be.empty");
    cy.get(this.registrationFields.regCity)
      .type(city)
      .should("have.value", city);
    cy.get(this.registrationFields.regAddress)
      .type(address)
      .should("have.value", address);
    cy.get(this.registrationFields.regStateProvinceRegion)
      .type(stateProvinceRegion, { force: true })
      .should("have.value", stateProvinceRegion);
    cy.get(this.registrationFields.regPostalCode)
      .type(postalCode)
      .should("have.value", postalCode);
    cy.get(this.registrationFields.regRegisterButton).should("be.disabled");
    cy.wait(1000);
  }

  registrationTestPN(
    username,
    email,
    password,
    firstName,
    lastName,
    phoneNumber,
    country,
    city,
    address,
    stateProvinceRegion,
    postalCode
  ) {
    cy.get(this.menuUser).click();
    cy.get(this.createNewAccountBtn).click();
    cy.get(this.registrationFields.regUsername)
      .type(username)
      .should("have.value", username);
    cy.get(this.registrationFields.regEmail)
      .type(email)
      .should("have.value", email);
    cy.get(this.registrationFields.regPassword)
      .type(password)
      .should("have.value", password);
    cy.get(this.registrationFields.regConfirmPassword)
      .type(password, { force: true })
      .should("have.value", password);
    cy.get(this.registrationFields.regFirstName)
      .type(firstName)
      .should("have.value", firstName);
    cy.get(this.registrationFields.regLastName)
      .type(lastName)
      .should("have.value", lastName);
    cy.get(this.registrationFields.regPhoneNumber).type(phoneNumber);
    cy.get(this.registrationFields.regPhoneNumber).as("elementodinamico");
    cy.get("@elementodinamico").invoke("val").should("be.empty");
    cy.get(this.registrationFields.regCountry)
      .select(country)
      .should("not.to.be.empty");
    cy.get(this.registrationFields.regCity)
      .type(city)
      .should("have.value", city);
    cy.get(this.registrationFields.regAddress)
      .type(address)
      .should("have.value", address);
    cy.get(this.registrationFields.regStateProvinceRegion)
      .type(stateProvinceRegion, { force: true })
      .should("have.value", stateProvinceRegion);
    cy.get(this.registrationFields.regPostalCode)
      .type(postalCode)
      .should("have.value", postalCode);
    cy.get(this.registrationFields.regCheckboxIAgree)
      .check()
      .should("be.checked");
    cy.get(this.registrationFields.regRegisterButton).click();
    cy.wait(1000);
  }
}
export const registerAccount = new RegisterAccount();
