import LOGIN from "./types";

const { ON_UPDATE_USER, ON_REFRESH_TOKEN, ON_CLEAN_LOGIN } = LOGIN;

const updateLoginData = (payload: any) => ({
  type: ON_UPDATE_USER,
  payload,
});

const refreshToken = (payload: any) => ({
  type: ON_REFRESH_TOKEN,
  payload,
});

const cleanLogin = () => ({
  type: ON_CLEAN_LOGIN,
  payload: {},
});

export { updateLoginData, refreshToken, cleanLogin };
