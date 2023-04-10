import { registerAccount } from "../../pageObjects/registerAccountPO";
import faker from "faker";

describe("Register Account tests.", () => {
  beforeEach(() => {
    registerAccount.visit();
  });

  const randomUsername = faker.internet.userName().substring(0, 15);
  const randomnEmail = faker.internet.email();
  const randomPassword =
    faker.random.alpha({ count: 1, upcase: true }) +
    faker.datatype.number(9) +
    faker.internet.password(10, true, /\d/);
  const randomFirstName = faker.name.firstName();
  const randomLastName = faker.name.lastName();
  const randomPhoneNumber = faker.phone.phoneNumber("###-###-####");
  const randomCountry = faker.address.country();
  const randomCity = faker.address.city();
  const randomState = faker.address.state();
  const randomPostalCode = faker.address.zipCode();
  const randomAddress = faker.random.alphaNumeric(10);

  it("Verificar que el proceso de creación de cuentas se realiza sin problemas, y que la cuenta es creada satisfactoriamente.", () => {
    registerAccount.registration(
      randomUsername,
      randomnEmail,
      randomPassword,
      randomFirstName,
      randomLastName,
      randomPhoneNumber,
      randomCountry,
      randomCity,
      randomAddress,
      randomState,
      randomPostalCode
    );
    registerAccount.validateLogin();
  });

  it("Verificar que al intentar crear una cuenta con una cuenta de email no valida, el sistema no lo permita. ", () => {
    registerAccount.registrationEmailFail(
      randomUsername,
      "test.hotmail.com",
      randomPassword,
      randomFirstName,
      randomLastName,
      randomPhoneNumber,
      randomCountry,
      randomCity,
      randomAddress,
      randomState,
      randomPostalCode
    );
  });

  it("Verificar que al intentar crear una cuenta con un usuario existente el sistema no lo permita. ", () => {
    registerAccount.registration(
      Cypress.env("credentials").user,
      randomnEmail,
      randomPassword,
      randomFirstName,
      randomLastName,
      randomPhoneNumber,
      randomCountry,
      randomCity,
      randomAddress,
      randomState,
      randomPostalCode
    );
    registerAccount.validateExistentUserName();
  });

  it("Verificar que al tener el checkbox de 'I agree ....' el botón 'REGISTER' Esté deshabilitado. ", () => {
    registerAccount.registrationAgreeTNC(
      randomUsername,
      randomnEmail,
      randomPassword,
      randomFirstName,
      randomLastName,
      randomPhoneNumber,
      randomCountry,
      randomCity,
      randomAddress,
      randomState,
      randomPostalCode
    );
  });
  it("Verificar que al ingresar datos en el input Phone sólo reciba números.", () => {
    registerAccount.registrationTestPN(
      randomUsername,
      randomnEmail,
      randomPassword,
      randomFirstName,
      randomLastName,
      "abcxyz",
      randomCountry,
      randomCity,
      randomAddress,
      randomState,
      randomPostalCode
    );
  });
});
