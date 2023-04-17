import { FC, ReactNode } from "react";
import { ChildrenContainer } from "../components/genericStyles";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import SideMenu from "./components/SideMenu/SideMenu";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header></Header>
      <SideMenu></SideMenu>
      <ChildrenContainer>{children}</ChildrenContainer>
      <Footer></Footer>
    </>
  );
};

export default Layout;
