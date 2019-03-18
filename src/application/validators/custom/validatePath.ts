import { PositionInTime } from "../../interfaces";
import { validateSchema } from "../helpers/validateSchema";
import { pathSchema } from "../helpers/validationSchemas";

export type ValidatePath = (
  path: unknown
) => path is ReadonlyArray<PositionInTime>;

export const validatePath: ValidatePath = (
  path
): path is ReadonlyArray<PositionInTime> => validateSchema(path, pathSchema);
