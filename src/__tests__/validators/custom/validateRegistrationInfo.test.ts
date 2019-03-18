import { validateRegistrationInfo } from "../../../application/validators/custom/validateRegistrationInfo";

const validInfo = {
  name: "some name",
  email: "some@gmail.com",
  password: "bacad",
  passwordConfirmation: "bacad"
};

it("should validate valid info", () => {
  expect(validateRegistrationInfo(validInfo)).toBe(true);
});

it("should not validate non objects", () => {
  const info = "";
  expect(validateRegistrationInfo(info)).toBe(false);
});

it("should not validate if any propery is not string", () => {
  expect(validateRegistrationInfo({ ...validInfo, name: 1 })).toBe(false);
  expect(validateRegistrationInfo({ ...validInfo, email: [] })).toBe(false);
  expect(validateRegistrationInfo({ ...validInfo, password: {} })).toBe(false);
  expect(
    validateRegistrationInfo({ ...validInfo, passwordConfirmation: {} })
  ).toBe(false);
});

it("should not validate if passwords are not the same", () => {
  expect(
    validateRegistrationInfo({ ...validInfo, passwordConfirmation: "fdsfag" })
  ).toBe(false);
});

it("should not validate if name is not correct", () => {
  expect(validateRegistrationInfo({ ...validInfo, name: "" })).toBe(false);
});

it("should not validate if email is not correct", () => {
  expect(validateRegistrationInfo({ ...validInfo, email: "" })).toBe(false);
});

it("should not validate if password is not correct", () => {
  expect(validateRegistrationInfo({ ...validInfo, password: "" })).toBe(false);
});

it("should not validate if any fields are missing", () => {
  expect(validateRegistrationInfo({})).toBe(false);
});
