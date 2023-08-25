import { FC, useState } from "react";

// Styles
import { HeaderWrapper } from "./styles";
// Components
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Letter from "../../../components/display/Letter/Letter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Storage
import logoContrast from "../../../static/img/logo-contrast.png";

import logoPrometeo from "../../../static/img/prometeo_brand.svg";

// Helpers
import { getUserEmail } from "../../../helpers/getData/getUserEmail";
import LateralModal from "../../../components/display/LateralModal/LateralModal";
import SideMenu from "../SideMenu/SideMenu";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const userName = getUserEmail();
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <HeaderWrapper>
      <div className="brand-container">
        <img
          className="brand-name"
          src={logoPrometeo}
          alt="prometeo"
          height={60}
          style={{ margin: 10 }}
        />
      </div>
      <div className="buttons-info-container">
        <div className="actions-container">
          <span className="user-letter">
            <Letter label={userName} />
          </span>
        </div>
        <div className="hamburgerMenu">
          <span onClick={() => setIsOpenModal(true)}>
            <FontAwesomeIcon icon={faBars} />
          </span>
        </div>
      </div>
      <LateralModal
        isOpen={isOpenModal}
        handleClose={() => setIsOpenModal(false)}
      >
        <SideMenu handleClickLink={() => setIsOpenModal(false)} />
      </LateralModal>
    </HeaderWrapper>
  );
};

export default Header;
