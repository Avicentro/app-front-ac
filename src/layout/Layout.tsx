import { FC, ReactNode, useEffect, useState } from "react";
import { ChildrenContainer } from "../components/genericStyles";
import Header from "./components/Header/Header";
import SideMenu from "./components/SideMenu/SideMenu";
import { LayoutWrapper } from "./styles";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    function handleResize() {
      setIsSmallScreen(mediaQuery.matches);
    }

    handleResize();

    // Agregar un listener para escuchar cambios en el tamaño de la pantalla
    mediaQuery.addEventListener("change", handleResize);

    // Remover el listener cuando el componente se desmonta
    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  return (
    <LayoutWrapper>
      <Header></Header>
      {!isSmallScreen && <SideMenu></SideMenu>}
      <ChildrenContainer>{children}</ChildrenContainer>
    </LayoutWrapper>
  );
};

export default Layout;
