import { FC } from "react";

// Components
import Button from "../../../../components/form/Button/Button";
import { sizeButtonEnum } from "../../../../models";

// Styles
import { ModalConfirmContentWrapper } from "./styles";

interface ModalConfirmContentProps {
  handleClick: any;
  loading: boolean;
}

const MODAL_CONTENT_LABEL =
  "¿Está seguro que desea modificar la programación de la jornada laboral?";

const ModalConfirmContent: FC<ModalConfirmContentProps> = ({
  handleClick,
  loading,
}) => {
  return (
    <ModalConfirmContentWrapper>
      <p className="modal-label">{MODAL_CONTENT_LABEL}</p>
      <div className="call-to-action-container">
        <Button
          sizeButton={sizeButtonEnum.extraBig}
          loading={loading}
          type="submit"
          extraProps={{ onClick: handleClick }}
        >
          Re programar
        </Button>
      </div>
    </ModalConfirmContentWrapper>
  );
};

export default ModalConfirmContent;
