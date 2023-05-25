import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, useCallback, useEffect, useState } from "react";
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
  const [timeoutId, setTimeoutId] = useState<any>(null);
  const dispatch = useDispatch();

  const hide = useCallback(() => {
    dispatch(hideToast());
  }, [dispatch]);

  const startTimeout = useCallback(() => {
    const id = setTimeout(() => {
      hide();
    }, 5000);
    setTimeoutId(id);
  }, [hide]);

  const resetTimeout = useCallback(() => {
    clearTimeout(timeoutId);
    startTimeout();
  }, [startTimeout, timeoutId]);

  useEffect(() => {
    if (show) {
      startTimeout();
    } else {
      clearTimeout(timeoutId);
    }
  }, [show, startTimeout]);

  if (!show) {
    return null;
  }

  return (
    <ToastWrapper
      status={status}
      show={show}
      onMouseEnter={resetTimeout}
      onMouseLeave={startTimeout}
    >
      <button className="modal-close" onClick={hide}>
        <FontAwesomeIcon icon={faXmark} />
      </button>
      <p>{message}</p>
    </ToastWrapper>
  );
};

export default Toast;
