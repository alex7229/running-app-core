import { RegularRegistrationInfo } from "../../interfaces";
import { validateSchema } from "../helpers/validateSchema";
import { registrationInfoSchema } from "../helpers/validationSchemas";

export type ValidateRegistrationInfo = (
  userInfo: unknown
) => userInfo is RegularRegistrationInfo;

export const validateRegistrationInfo: ValidateRegistrationInfo = (
  userInfo
): userInfo is RegularRegistrationInfo => {
  const isValid = validateSchema(userInfo, registrationInfoSchema);
  if (!isValid) {
    return false;
  }
  // those properties exist on the object, it is checked by ajv
  // @ts-ignore
  return userInfo.password === userInfo.passwordConfirmation;
};
