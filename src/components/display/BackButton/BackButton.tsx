import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { typeButtonEnum } from "../../../models";
import Button from "../../form/Button/Button";

// Components

// Styles

import { BackButtonWrapper } from "./styles";

// helpers

interface BackButtonProps {}

const BackButton: FC<BackButtonProps> = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <BackButtonWrapper>
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
