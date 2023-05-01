import { getAccessTokenType } from "./models";
import { getSessionEmailType } from "./models";

export const getSessionEmail: getSessionEmailType = (state) =>
  state.loginData.user;
export const getAccessToken: getAccessTokenType = (state) =>
  state.loginData.access_token;

// Validators
