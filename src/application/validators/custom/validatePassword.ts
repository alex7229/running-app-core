import { passwordSchema } from "../helpers/validationSchemas";
import { validateSchema } from "../helpers/validateSchema";

export type ValidatePassword = (password: string) => boolean;

export const validatePassword: ValidatePassword = password =>
  validateSchema(password, passwordSchema);
