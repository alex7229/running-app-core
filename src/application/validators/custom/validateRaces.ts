import { Race } from "../../interfaces";
import { validateSchema } from "../helpers/validateSchema";
import { racesSchema } from "../helpers/validationSchemas";

export type ValidateRaces = (races: unknown) => races is ReadonlyArray<Race>;

export const validateRaces: ValidateRaces = (
  races
): races is ReadonlyArray<Race> => validateSchema(races, racesSchema);
