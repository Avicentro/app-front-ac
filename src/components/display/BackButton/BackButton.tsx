import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { typeButtonEnum } from "../../../models";
import Button from "../../form/Button/Button";

// Components

// Styles

import { BackButtonWrapper } from "./styles";

// helpers

interface BackButtonProps {
  path?: string
}

const BackButton: FC<BackButtonProps> = ({path}) => {
  const navigate = useNavigate();

  const goBack = () => {

    if (path !== null && path !== undefined) {
      navigate(path);
    } else {
      navigate(-1);
    }
  };

  return (
    <BackButtonWrapper className="back-button-container">
      <Button
        typeButton={typeButtonEnum.stroke}
        extraProps={{ onClick: () => goBack() }}
      >
        Ir Atrás
      </Button>
    </BackButtonWrapper>
  );
};

export default BackButton;
