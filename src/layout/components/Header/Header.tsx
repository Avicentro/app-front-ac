import { FC } from "react";

// Styles
import { HeaderWrapper } from "./styles";

import SearchBar from "./components/SearchBar/SearchBar";
import logoContrast from "../../../static/img/logo-contrast.png";
import avatar01 from "../../../static/img/avatar-01.png";
import bell from "../../../static/vectors/bell-icon.svg";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <HeaderWrapper>
      <div className="brandContainer">
        <img src={logoContrast} alt="logo" />
      </div>
      <div className="searchBar">
        <SearchBar></SearchBar>
      </div>
      <div className="actions-container">
        <span className="bell-icon">
          <img src={bell} alt="alert-to-user" width={24} height={24} />
        </span>
        <span className="user-image">
          <img src={avatar01} alt="user-avatar" />
        </span>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
