import { FC, ReactNode } from "react";

// Components
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Styles

import { LateralModalWrapper } from "./styles";

// helpers

interface LateralModalProps {
  isOpen: boolean;
  handleClose: any;
  children: ReactNode;
}

const LateralModal: FC<LateralModalProps> = ({
  isOpen,
  handleClose,
  children,
}) => {
  if (!isOpen) return null;

  return (
    <LateralModalWrapper>
      <div className="modal-container">
        <button className="close-button" onClick={handleClose}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <div className="children-container">{children}</div>
      </div>
    </LateralModalWrapper>
  );
};

export default LateralModal;
