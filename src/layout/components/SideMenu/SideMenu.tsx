import { FC } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

// Constants
import { ICON_BY_ICON_NAME } from "../../../constants/dynamic";
import { cleanLogin } from "../../../store/loginData/actions";
import { configMenu } from "./config";

// Config
import { SideMenuWrapper } from "./styles";

// Styles

interface SideMenuProps {}

const SideMenu: FC<SideMenuProps> = () => {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(cleanLogin());
  };

  return (
    <SideMenuWrapper>
      <ul>
        {configMenu.map((item, index) => (
          <li key={`${item.route}_${index}`}>
            <Link to={item.route} className="item-button">
              <span className="logo-item">
                {ICON_BY_ICON_NAME[item.icon as keyof typeof ICON_BY_ICON_NAME]}
              </span>
              <span className="label-item">{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
      <span className="logout">
        <span className="icon">{ICON_BY_ICON_NAME["out"]}</span>
        <span className="label" onClick={() => logout()}>
          Cerrar sesión
        </span>
      </span>
    </SideMenuWrapper>
  );
};

export default SideMenu;
