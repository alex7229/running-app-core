import { validateName } from "../../../application/validators/custom/validateName";

it("login should be longer than 1 char and shorter than 128", () => {
  expect(validateName("a")).toBe(false);
  expect(validateName("ab")).toBe(true);
  expect(validateName("a".repeat(140))).toBe(false);
});
