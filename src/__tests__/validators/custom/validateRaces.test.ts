import { validateRaces } from "../../../application/validators/custom/validateRaces";
import { getTestRaces } from "../../../application/testHelpers";

it("should be an array with one or more races", () => {
  expect(validateRaces("non array")).toBe(false);
  expect(validateRaces([])).toBe(false);
  expect(validateRaces(getTestRaces())).toBe(true);
});

it("should fail if any race path is invalid", () => {
  const races = getTestRaces();
  // @ts-ignore
  races[0].path = [];
  expect(validateRaces(races)).toBe(false);
});

it("should fail if  race path or type is not included", () => {
  const withoutPath = [...getTestRaces(), { type: "running" }];
  const withoutType = [...getTestRaces(), { path: [] }];
  expect(validateRaces(withoutPath)).toBe(false);
  expect(validateRaces(withoutType)).toBe(false);
});

it("should fail if race type is ivalid", () => {
  const races = getTestRaces();
  const invalidRace = {
    type: "laughing",
    path: [
      { latitude: 23, longitude: 14, time: 23 },
      { latitude: 25, longitude: 25, time: 23 }
    ]
  };
  expect(validateRaces(races)).toBe(true);
  expect(validateRaces([...races, invalidRace])).toBe(false);
});
