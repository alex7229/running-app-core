import { validatePublicUserInfo } from "../../../application/validators/custom/validatePublicUserInfo";

const validInfo = {
  name: "vin",
  email: "ga@gmail.com",
  isEmailVerified: false
};

it("should validate correct user info", () => {
  expect(validatePublicUserInfo(validInfo)).toBe(true);
});

it("should not validate if info is not object", () => {
  expect(validatePublicUserInfo("")).toBe(false);
});

it("should not validate if name is not valid", () => {
  expect(validatePublicUserInfo({ ...validInfo, name: "" })).toBe(false);
});

it("should not validate if email is not valid", () => {
  expect(validatePublicUserInfo({ ...validInfo, email: "" })).toBe(false);
});

it("should not validate if email verification is not boolean", () => {
  expect(validatePublicUserInfo({ ...validInfo, isEmailVerified: "" })).toBe(
    false
  );
});

it("should not validate if props are missing", () => {
  expect(validatePublicUserInfo({})).toBe(false);
});
