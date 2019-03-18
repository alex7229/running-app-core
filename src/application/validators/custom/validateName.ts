import { validateSchema } from "../helpers/validateSchema";
import { nameSchema } from "../helpers/validationSchemas";

export type ValidateName = (name: string) => boolean;

export const validateName: ValidateName = login =>
  validateSchema(login, nameSchema);
