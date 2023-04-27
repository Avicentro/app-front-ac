import { FC } from "react";

// Components
import Button from "../../../../components/form/Button/Button";

// Styles
import { ModalContentWrapper } from "./styles";

// helpers
import { typeButtonEnum } from "../../../../models";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../../constants/routes";

interface ModalContentProps {
  dateSelected: string | null;
}

const MODAL_CONTENT_LABEL =
  "Tenga presente la programación a realizar ya que esto afecta la operación";

const ModalContent: FC<ModalContentProps> = ({ dateSelected }) => {
  const navigate = useNavigate();
  return (
    <ModalContentWrapper>
      <p className="modal-label">{MODAL_CONTENT_LABEL}</p>
      <div className="call-to-action-container">
        <Button
          extraProps={{
            onClick: () =>
              navigate(`${ROUTES.PROGRAMMING}${ROUTES.TRAVEL}/${dateSelected}`),
          }}
        >
          Programar viaje
        </Button>
      </div>
    </ModalContentWrapper>
  );
};

export default ModalContent;