import LOGIN from "./types";
import IDEMPOTENT from "../models";
import { initLogin } from "./states";
import { VO_BASE, actionInit } from "../models";
import createOnceSwitcher from "../../helpers/factories/createOnceSwitcher";
const { ON_UPDATE_USER, ON_REFRESH_TOKEN, ON_CLEAN_LOGIN } = LOGIN;

const handleOnUpdateUser = (state: object, payload: any) => {
  return { ...state, ...payload };
};

const handleOnRefreshToken = (state: { data: any }, payload: any) => {
  const oldData = state.data;
  const data = { ...oldData, access_token: payload };
  return { ...state, data };
};

const handleOnCleanLogin = () => {
  localStorage.removeItem("loginData");
  localStorage.removeItem("access_token");
  return { ...initLogin };
};

const VO = {
  ...VO_BASE,
  [ON_UPDATE_USER]: handleOnUpdateUser,
  [ON_REFRESH_TOKEN]: handleOnRefreshToken,
  [ON_CLEAN_LOGIN]: handleOnCleanLogin,
};

const resolve = createOnceSwitcher(VO, IDEMPOTENT);

function loginData(state = {}, action = actionInit) {
  const { type, payload } = action;
  return resolve(type)(state, payload);
}

export default loginData;
