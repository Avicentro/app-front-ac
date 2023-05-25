import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideToast } from "../../store/toast/actions";
import { getToast } from "../../store/toast/selectors";

// Components

// Styles

import { ToastWrapper } from "./styles";

// helpers

interface ToastProps {}

const Toast: FC<ToastProps> = () => {
  const { message, status, show } = useSelector(getToast);
  const dispatch = useDispatch();

  const hide = () => {
    dispatch(hideToast());
  };

  if (!show) {
    return null;
  }

  return (
    <ToastWrapper status={status} show={show}>
      <button className="modal-close" onClick={hide}>
        <FontAwesomeIcon icon={faXmark} />
      </button>
      <p>{message}</p>
    </ToastWrapper>
  );
};

export default Toast;
