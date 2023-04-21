import { FC } from "react";

// Components
import Calendar from "./components/CustomCalendar/CustomCalendar";

// Styles
import { ProgrammingWrapper } from "./styles";

// helpers

interface ProgrammingProps {}

const Programming: FC<ProgrammingProps> = () => {
  return (
    <ProgrammingWrapper>
      <section className="title">
        <h1>Programación</h1>
        <h3 className="sub-title">Seleccione el día</h3>
      </section>
      <section className="calendar-container">
        <Calendar />
      </section>
    </ProgrammingWrapper>
  );
};

export default Programming;
