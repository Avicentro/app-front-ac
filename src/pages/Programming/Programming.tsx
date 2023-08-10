import { FC, useState } from "react";

// Components
import Card from "../../components/display/Card/Card";
import Calendar from "./components/CustomCalendar/CustomCalendar";

// Styles
import { ProgrammingWrapper } from "./styles";
import { Container } from "../../components/genericStyles";
import IceInformation from "./components/IceInformation/IceInformation";

// helpers

interface ProgrammingProps {}

const Programming: FC<ProgrammingProps> = () => {
  const [dateInView, setDateInView] = useState("");
  return (
    <Container>
      <ProgrammingWrapper>
        <div className="ice-info-container">
          <IceInformation dateInView={dateInView} />
        </div>
        <Card customClass="calendar-card">
          <section className="title">
            <h1>Programación</h1>
            <h3 className="sub-title">Seleccione el día</h3>
          </section>
          <section className="calendar-container">
            <Calendar setDateInView={setDateInView} dateInView={dateInView} />
          </section>
        </Card>
      </ProgrammingWrapper>
    </Container>
  );
};

export default Programming;
