import { FC, useState } from "react";

// Components
import Card from "../../components/display/Card/Card";
import Calendar from "./components/CustomCalendar/CustomCalendar";

// Styles
import { ProgrammingWrapper } from "./styles";
import { Container, Title } from '../../components/genericStyles';
import IceInformation from "./components/IceInformation/IceInformation";
import TextInput from "../../components/form/TextInput/TextInput";
import Button from "../../components/form/Button/Button";
import { sizeButtonEnum } from "../../models";

// helpers

interface ProgrammingProps {}

const Programming: FC<ProgrammingProps> = () => {
  const [dateInView, setDateInView] = useState("");
  return (
    <Container>
      <ProgrammingWrapper>
        <Title>Programación</Title>
        <div className="ice-info-container">
          <Card>
          <h3>Hora de entrada</h3><TextInput
            type="text"
            name="amount"
            label=""
            value={"12:25"}
            handleChange={() => console.log("hora")}
          />
          <br />
          <Button
            type="submit"
            mb={32}
            sizeButton={sizeButtonEnum.medium}
            loading={false}
            extraProps={{ onclick: () => console.log("hora") }}
          >
            Guardar hora
          </Button>
          </Card>
          <br/>
          <Card>
          <h3>Gestion de Clientes</h3>
          <div>
            <ul>
              <li>Cliente 1</li>
              <li>Cliente 1</li>
            </ul>
          </div>
          </Card>
          <br/>
          <IceInformation dateInView={dateInView} />
        </div>
        <Card customClass="calendar-card">
          <section className="title">
            <h2>Viajes: 0</h2>
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
