// todo: add config here
// default speed params, local storage keys, etc
// todo: add default values: km/h or m/s. All units should be the same (e.g., metres, sec, m/sec)

export const raceSettings = {
  walking: {
    minSpeed: 3,
    maxSpeed: 7.5,
    maximumTimeBetweenPointsSecs: 30
  },
  running: {
    minSpeed: 7.5,
    maxSpeed: 20,
    maximumTimeBetweenPointsSecs: 30
  },
  cycling: {
    minSpeed: 7.5,
    maxSpeed: 50,
    maximumTimeBetweenPointsSecs: 30
  },
  driving: {
    minSpeed: 10,
    maxSpeed: 200,
    maximumTimeBetweenPointsSecs: 30
  }
};

export const delayBetweenGeoCalls = 10;
export const minimumDistanceDiffBetweenPositions = 10;

export const MESSAGES = {
  unexpectectedError: "Unexpected error occured",
  raceSavedSuccess: "Race was saved successfully",
  noInternet: "There is no internet connection",
  nothingToSave: "There is nothing to save",
  userInfoInvalid: "User info is invalid",
  userAlreadyExists: "User with that name or email already exists",
  emailPasswordIncorrect: "Email or password are incorrect",
  racesAreNotValid: "Races are not valid",
  registrationSuccess: "Account was successfully registered",
  requestTimeout:
    "Server hasn't responded in time. It is either down or there is no internet",
  verificationEmailPartOne: "Verification link was sent to ",
  vereificationEmailPartTwo: ". Please, check your email",
  passwordResetMessage:
    "Email with instructions will be send to this email, if user with such email is registered"
};
