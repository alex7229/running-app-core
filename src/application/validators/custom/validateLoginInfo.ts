import { regularLoginInfoSchema } from "../helpers/validationSchemas";
import { RegularLoginInfo } from "../../interfaces";
import { validateSchema } from "../helpers/validateSchema";

export type ValidateLoginInfo = (
  loginInfo: unknown
) => loginInfo is RegularLoginInfo;

export const validateLoginInfo: ValidateLoginInfo = (
  loginInfo
): loginInfo is RegularLoginInfo =>
  validateSchema(loginInfo, regularLoginInfoSchema);
