import { FC, useState } from "react";
import { Container } from "../../components/genericStyles";

// Components
import Card from "./components/Card/Card";
import Button from "../../components/form/Button/Button";

// Styles

import { PeopleWrapper } from "./styles";

// helpers
import { peopleList } from "./__mock__";
import { typeButtonEnum } from "../../models";
import { theme } from "../../static/styles/theme";

interface PeopleProps {}

const People: FC<PeopleProps> = () => {
  const [loading, setLoading] = useState(false);

  const deletePeople = () => {
    setLoading(true);
    try {
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const editPeople = () => {
    setLoading(true);
    try {
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <PeopleWrapper>
        <div className="create-people-container">
          <Button typeButton={typeButtonEnum.fill} bgColor={theme.secondary}>
            Crear Usuario +
          </Button>
        </div>
        {peopleList.map((people) => (
          <Card
            {...people}
            handleDelete={deletePeople}
            handleEdit={editPeople}
          ></Card>
        ))}
      </PeopleWrapper>
    </Container>
  );
};

export default People;
