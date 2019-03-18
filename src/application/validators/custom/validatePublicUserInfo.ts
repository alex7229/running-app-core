import { PublicUserInfo } from "../../interfaces";
import { validateSchema } from "../helpers/validateSchema";
import { publicUserInfoSchema } from "../helpers/validationSchemas";

export type ValidatePublicUserInfo = (
  userInfo: unknown
) => userInfo is PublicUserInfo;

export const validatePublicUserInfo: ValidatePublicUserInfo = (
  userInfo
): userInfo is PublicUserInfo => validateSchema(userInfo, publicUserInfoSchema);
