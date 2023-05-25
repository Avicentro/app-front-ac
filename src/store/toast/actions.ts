import TOAST_TYPES from "./types";

const { SHOW_TOAST, HIDE_TOAST } = TOAST_TYPES;

const showToast = (message: string, status: string) => ({
  type: SHOW_TOAST,
  payload: { show: true, message, status },
});

const hideToast = () => ({
  type: HIDE_TOAST,
  payload: { show: false, message: "", status: "" },
});

export { showToast, hideToast };
