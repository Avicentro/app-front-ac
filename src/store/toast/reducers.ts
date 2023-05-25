import IDEMPOTENT from "../models";
import { VO_BASE, actionInit } from "../models";
import createOnceSwitcher from "../../helpers/factories/createOnceSwitcher";
import TOAST_TYPES from "./types";

const handleShowToast = (state: object, payload: any) => {
  return { ...state, ...payload };
};

const VO = {
  ...VO_BASE,
  [TOAST_TYPES.SHOW_TOAST]: handleShowToast,
  [TOAST_TYPES.HIDE_TOAST]: handleShowToast,
};

const resolve = createOnceSwitcher(VO, IDEMPOTENT);

function toastData(state = {}, action = actionInit) {
  const { type, payload } = action;
  return resolve(type)(state, payload);
}

export default toastData;
