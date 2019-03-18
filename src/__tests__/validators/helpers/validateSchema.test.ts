import { validateSchema } from "../../../application/validators/helpers/validateSchema";

it("should validate fields properly", () => {
  const field = "fs";
  const schema = { type: "string", minLength: 2 };
  expect(validateSchema(field, schema)).toBe(true);
});

it("should return false if validation fails", () => {
  const field = {};
  const schema = { type: "integer" };
  expect(validateSchema(field, schema)).toBe(false);
});
