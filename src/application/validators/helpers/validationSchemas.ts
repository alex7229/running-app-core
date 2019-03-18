const numberSchema = { type: "number" };
const booleanSchema = { type: "boolean" };

export const nameSchema = { type: "string", minLength: 2, maxLength: 128 };
export const emailSchema = { type: "string", maxLength: 128, format: "email" };
export const passwordSchema = { type: "string", minLength: 5, maxLength: 128 };

export const regularLoginInfoSchema = {
  type: "object",
  properties: {
    email: emailSchema,
    password: passwordSchema
  },
  additionalProperties: false,
  required: ["email", "password"]
};

export const publicUserInfoSchema = {
  type: "object",
  properties: {
    name: nameSchema,
    email: emailSchema,
    isEmailVerified: booleanSchema
  },
  additionalProperties: false,
  required: ["name", "email", "isEmailVerified"]
};

export const registrationInfoSchema = {
  type: "object",
  additionalProperties: false,
  properties: {
    name: nameSchema,
    email: emailSchema,
    password: passwordSchema,
    passwordConfirmation: passwordSchema
  },
  required: ["name", "email", "password", "passwordConfirmation"]
};

export const gpsPointSchema = {
  type: "object",
  additionalProperties: false,
  properties: {
    latitude: numberSchema,
    longitude: numberSchema,
    time: numberSchema
  },
  required: ["latitude", "longitude", "time"]
};

export const pathSchema = { type: "array", minItems: 2, items: gpsPointSchema };

const raceSchema = {
  type: "object",
  additionalProperties: false,
  properties: {
    path: pathSchema,
    type: { type: "string", pattern: "cycling|walking|driving|running" }
  },
  required: ["path", "type"]
};

export const racesSchema = {
  type: "array",
  minItems: 1,
  items: raceSchema
};
