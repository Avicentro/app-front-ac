import { FC, ReactNode, useEffect, useState } from "react";
import { LoginWrapper } from "./styles";
import BackgroundAnimate from "../components/display/BackgroundAnimate/BackgroundAnimate";
import Card from "../components/display/Card/Card";

interface LayoutProps {
  children: ReactNode;
}

const LayoutAuth: FC<LayoutProps> = ({ children }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    function handleResize() {
      setIsSmallScreen(mediaQuery.matches);
    }

    handleResize();

    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  return (
    <LoginWrapper>
      {!isSmallScreen && <></>}
    <BackgroundAnimate />
    <section className="form-container">
      <Card>
      {children}
      </Card>
    </section>
  </LoginWrapper>
  );
};

export default LayoutAuth;
