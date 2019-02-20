import Ajv from "ajv";

export type ValidateEmail = (email: string) => boolean;

export const validateEmail: ValidateEmail = email => {
  const ajv = new Ajv();
  const schema = {
    type: "string",
    maxLength: 128,
    format: "email"
  };
  ajv.validate(schema, email);
  return ajv.errors === null;
};
