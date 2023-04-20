import { FC, ReactElement, useEffect } from "react";

// Components

// Styles

// helpers
import { useSelector } from "react-redux";
import { getIsAuthenticated } from "../../../store/loginData/selectors";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../constants/routes";

interface AuthSheetProps {
  children: ReactElement;
}

const AuthSheet: FC<AuthSheetProps> = ({ children }) => {
  const isAuthenticated = useSelector(getIsAuthenticated);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) return navigate(ROUTES.LOGIN);
  }, [isAuthenticated, navigate]);

  return children;
};

export default AuthSheet;
