import { FC, ReactNode } from "react";
import { ChildrenContainer } from "../components/genericStyles";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import SideMenu from "./components/SideMenu/SideMenu";
import { LayoutWrapper } from "./styles";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutWrapper>
      <Header></Header>
      <SideMenu></SideMenu>
      <ChildrenContainer>{children}</ChildrenContainer>
      <Footer></Footer>
    </LayoutWrapper>
  );
};

export default Layout;
