import { FC, useState } from "react";

// Components
import Card from "../../components/display/Card/Card";
import EntryTime from "./components/EntryTime/EntryTime";
import Calendar from "./components/CustomCalendar/CustomCalendar";
import { Container, Title } from "../../components/genericStyles";
import IceInformation from "./components/IceInformation/IceInformation";
import ClientManagement from "./components/ClientManagement/ClientManagement";

// Styles
import { ProgrammingWrapper } from "./styles";

// helpers

interface ProgrammingProps {}

const Programming: FC<ProgrammingProps> = () => {
  const [dateInView, setDateInView] = useState("");
  const [travelLength, setTravelLength] = useState(0);

  return (
    <Container>
      <ProgrammingWrapper>
        <Title>Programación</Title>
        <div className="ice-info-container">
          <EntryTime />
          <ClientManagement dateInView={dateInView} />
          <IceInformation dateInView={dateInView} travelLength={travelLength} />
        </div>
        <Card customClass="calendar-card">
          <section className="calendar-container">
            <Calendar
              setDateInView={setDateInView}
              dateInView={dateInView}
              setTravelLength={setTravelLength}
              travelLength={travelLength}
            />
          </section>
        </Card>
      </ProgrammingWrapper>
    </Container>
  );
};

export default Programming;
