import { FC, ReactElement, useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";

// Components

// Styles

// helpers
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../constants/routes";
import { getUserTokenExpired } from "../../../helpers/getData/getUserTokenExpired";
import { cleanLogin } from "../../../store/loginData/actions";

interface AuthSheetProps {
  children: ReactElement;
}

const AuthSheet: FC<AuthSheetProps> = ({ children }) => {
  const dispatch = useDispatch();

  const hasToken = !!localStorage.getItem("loginData");
  const navigate = useNavigate();
  const dateToCompare = new Date(getUserTokenExpired());
  const currentDate = new Date();
  const isExpired = currentDate.getTime() > dateToCompare.getTime();

  const logout = useCallback(() => {
    dispatch(cleanLogin());
    navigate(ROUTES.LOGIN);
  }, [dispatch, navigate]);

  useEffect(() => {
    if (isExpired) return logout();
    if (!hasToken) return navigate(ROUTES.LOGIN);
  }, [hasToken, navigate, isExpired, logout]);

  return children;
};

export default AuthSheet;
