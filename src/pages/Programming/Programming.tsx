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
import Button from "../../components/form/Button/Button";
import { typeButtonEnum } from "../../models";
import { useNavigate } from "react-router-dom";
import { COMPOSED_ROUTES } from "../../constants/routes";

// helpers

interface ProgrammingProps {}

const Programming: FC<ProgrammingProps> = () => {
  const [dateInView, setDateInView] = useState("");
  const [travelLength, setTravelLength] = useState(0);
  const navigate = useNavigate();

  return (
    <Container>
      <ProgrammingWrapper>
        <div className="title-container">
          <Title>Programación</Title>
          <div className="buttons-container">
            <Button
              type="button"
              typeButton={typeButtonEnum.stroke}
              extraProps={{
                onClick: () => navigate(COMPOSED_ROUTES.HISTORY_PROGRAMMING),
              }}
            >
              Ver Historial
            </Button>
            <Button
              type="button"
              typeButton={typeButtonEnum.stroke}
              extraProps={{
                onClick: () =>
                  navigate(COMPOSED_ROUTES.CURRENT_TRAVEL_PROGRAMMING),
              }}
            >
              Ver viaje actual
            </Button>
          </div>
        </div>
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
