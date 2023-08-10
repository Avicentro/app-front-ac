import { FC, useState } from "react";
import { Container } from "../../components/genericStyles";

// Components
import Card from "./components/Card/Card";
import Button from "../../components/form/Button/Button";

// Styles

import { PeopleWrapper } from "./styles";

// helpers
import { typeButtonEnum } from "../../models";
import { theme } from "../../static/styles/theme";
import {
  useAllPeople,
  useCreatePeople,
  useDeletePeople,
  useEditPeople,
} from "../../hook/usePeople";
import Modal from "../../components/display/Modal/Modal";
import Create from "./components/Create/Create";
import { useDispatch } from "react-redux";
import { showToast } from "../../store/toast/actions";

interface PeopleProps {}

const People: FC<PeopleProps> = () => {
  const [loading, setLoading] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [incremental, setIncremental] = useState(0);
  const { data } = useAllPeople(incremental);
  const editPersonMutate = useEditPeople();
  const deletePersonMutate = useDeletePeople();
  const createPersonMutate = useCreatePeople();
  const dispatch = useDispatch();
  console.log("data", data);

  const deletePeople = async (id: string) => {
    setLoading(true);
    try {
      const response = await deletePersonMutate.mutateAsync(id);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const editPeople = async (data: any) => {
    setLoading(true);
    try {
      const response = await editPersonMutate.mutateAsync(data);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const createPerson = async (data: any) => {
    setLoading(true);
    try {
      const response = await createPersonMutate.mutateAsync(data);
      setIncremental((prev) => prev + 1);
      setShowModal(false);
    } catch (error: any) {
      console.error(error);
      dispatch(showToast(error.response.data.message, "error"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <PeopleWrapper>
        {showModal && (
          <Modal
            title="Crear persona"
            open={showModal}
            handleClose={() => setShowModal(false)}
          >
            <Create handleSubmit={createPerson} isEdit={isEdit} />
          </Modal>
        )}
        <div className="create-people-container">
          <Button
            typeButton={typeButtonEnum.fill}
            bgColor={theme.secondary}
            extraProps={{ onClick: () => setShowModal(true) }}
          >
            Crear Persona +
          </Button>
        </div>
        {data?.data?.map((people: any) => (
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
