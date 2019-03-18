import { emailSchema } from "../helpers/validationSchemas";
import { validateSchema } from "../helpers/validateSchema";

export type ValidateEmail = (email: string) => boolean;

export const validateEmail: ValidateEmail = email =>
  validateSchema(email, emailSchema);
