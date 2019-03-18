import Ajv from "ajv";

export type ValidateSchema = (value: unknown, schema: object) => boolean;

export const validateSchema: ValidateSchema = (value, schema) => {
  const ajv = new Ajv();
  ajv.validate(schema, value);
  return ajv.errors === null;
};
