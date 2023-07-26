import { FC } from "react";

// Components
import Card from "../../components/display/Card/Card";
import Calendar from "./components/CustomCalendar/CustomCalendar";
import IceInformation from "./components/IceInformation/IceInformation";

// Styles
import { ProgrammingWrapper } from "./styles";
import { Container } from "../../components/genericStyles";

// helpers

interface ProgrammingProps {}

const Programming: FC<ProgrammingProps> = () => {
  return (
    <Container>
      <ProgrammingWrapper>
        <div className="ice-info-container">
          <IceInformation />
        </div>
        <Card customClass="calendar-card">
          <section className="title">
            <h1>Programación</h1>
            <h3 className="sub-title">Seleccione el día</h3>
          </section>
          <section className="calendar-container">
            <Calendar />
          </section>
        </Card>
      </ProgrammingWrapper>
    </Container>
  );
};

export default Programming;
