import { FC, Fragment } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

// Constants
import { ICON_BY_ICON_NAME } from "../../../constants/dynamic";
import { getUserRol } from "../../../helpers/getData/getUserRol";
import { cleanLogin } from "../../../store/loginData/actions";
import { configMenu } from "./config";

// Config
import { SideMenuWrapper } from "./styles";

// Styles

interface SideMenuProps {
  handleClickLink?: any;
}

const SideMenu: FC<SideMenuProps> = ({ handleClickLink }) => {
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(cleanLogin());
    window.location.reload();
  };
  const userRol = getUserRol();

  const getListItem = (item: any, index: number) => (
    <li key={`${item.route}_${index}`}>
      <NavLink
        to={item.route}
        className={({ isActive }) =>
          isActive ? "item-button active" : "item-button"
        }
        onClick={() => handleClickLink && handleClickLink()}
      >
        <span className="logo-item">
          {ICON_BY_ICON_NAME[item.icon as keyof typeof ICON_BY_ICON_NAME]}
        </span>
        <span className="label-item">{item.label}</span>
      </NavLink>
    </li>
  );

  return (
    <SideMenuWrapper>
      <ul>
        {configMenu.map((item, index) => (
          <Fragment key={`${item.route}_${index}`}>
            {item.roles &&
              item.roles.includes(userRol) &&
              getListItem(item, index)}
            {!item.roles && getListItem(item, index)}
          </Fragment>
        ))}
      </ul>
      <span className="logout">
        <span className="icon">{ICON_BY_ICON_NAME["out"]}</span>
        <span
          className="label"
          onClick={() => {
            logout();
            handleClickLink && handleClickLink();
          }}
        >
          Cerrar sesión
        </span>
      </span>
    </SideMenuWrapper>
  );
};

export default SideMenu;
