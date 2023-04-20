import { getAccessTokenType, getPermissionsType } from "./models";
import { getIsAuthenticatedType } from "./models";
import { getSessionRoleType, getSessionNameType } from "./models";
import { getSessionEmailType, getImageProfileType } from "./models";

export const getSessionRoles: getSessionRoleType = (state) =>
  state.loginData.data.role;
export const getSessionName: getSessionNameType = (state) =>
  state.loginData.data.name;
export const getSessionEmail: getSessionEmailType = (state) =>
  state.loginData.data.email;
export const getImageProfile: getImageProfileType = (state) =>
  state.loginData.data.imageProfile;
export const getIsAuthenticated: getIsAuthenticatedType = (state) =>
  state.loginData.isAuthenticated;
export const getAccessToken: getAccessTokenType = (state) =>
  state.loginData.data.accessToken;
export const getPermissions: getPermissionsType = (state) =>
  state.loginData.data.permissions;

// Validators
