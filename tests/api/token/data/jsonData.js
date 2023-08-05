//This file contains the different payloads that are being sent on the different tests for customers endpoint
export const validUser = {
  "session": {
    "email": "fernando.maldonado+c02@koombea.com",
    "password": "Staging01!"
  }
};


export const invalidUser = {
  "session": {
    "email": "string",
    "password": "string"
  }
};