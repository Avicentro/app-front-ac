import {
  Dispatch,
  FC,
  ReactElement,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";

// Components
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Styles
import { ModalWrapper } from "./styles";

interface ModalProps {
  title: string | ReactNode;
  open: boolean;
  handleClose: Dispatch<SetStateAction<boolean>>;
  children: ReactElement;
  closeOutSideClick?: boolean;
}

const Modal: FC<ModalProps> = ({
  open,
  title,
  handleClose,
  children,
  closeOutSideClick = false,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [stateOfAnimation, setStateOfAnimation] = useState("--slide-down");

  useEffect(() => {
    setIsOpen(open);
    return () => {
      setStateOfAnimation("--slide-down");
    };
  }, [open]);

  const closeModal = () => {
    setStateOfAnimation("--slide-up");
    setTimeout(() => {
      handleClose(false);
    }, 200);
  };

  return (
    <>
      {isOpen ? (
        <ModalWrapper>
          <div
            className="modal-overlay"
            onClick={() => (closeOutSideClick ? () => closeModal() : null)}
          >
            <div
              className={`modal ${stateOfAnimation}`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-title">
                <h3>{title}</h3>
              </div>
              <div className="modal-content">{children}</div>
              <button className="modal-close" onClick={closeModal}>
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>
          </div>
        </ModalWrapper>
      ) : null}
    </>
  );
};

export default Modal;
