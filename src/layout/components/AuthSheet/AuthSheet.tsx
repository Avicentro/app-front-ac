import { FC, ReactElement, useEffect } from "react";

// Components

// Styles

// helpers
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../constants/routes";
import { getUserTokenExpired } from "../../../helpers/getData/getUserTokenExpired";

interface AuthSheetProps {
  children: ReactElement;
}

const AuthSheet: FC<AuthSheetProps> = ({ children }) => {
  const hasToken = !!localStorage.getItem("loginData");
  const navigate = useNavigate();
  const dateToCompare = new Date(getUserTokenExpired());
  const currentDate = new Date();
  const isExpired = currentDate.getTime() > dateToCompare.getTime();

  useEffect(() => {
    if (!hasToken || isExpired) return navigate(ROUTES.LOGIN);
  }, [hasToken, navigate, isExpired]);

  return children;
};

export default AuthSheet;
