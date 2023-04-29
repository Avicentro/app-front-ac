import { FC, ReactElement, useEffect } from "react";

// Components

// Styles

// helpers
import { useSelector } from "react-redux";
import { getAccessToken } from "../../../store/loginData/selectors";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../constants/routes";

interface AuthSheetProps {
  children: ReactElement;
}

const AuthSheet: FC<AuthSheetProps> = ({ children }) => {
  const hasToken = useSelector(getAccessToken);
  const navigate = useNavigate();

  useEffect(() => {
    if (!hasToken) return navigate(ROUTES.LOGIN);
  }, [hasToken, navigate]);

  return children;
};

export default AuthSheet;
