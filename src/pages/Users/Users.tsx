import { FC, useState } from "react";
import { Container } from "../../components/genericStyles";

// Components
import Card from "./components/Card/Card";
import Button from "../../components/form/Button/Button";

// Styles

import { UsersWrapper } from "./styles";

// helpers
import { userList } from "./__mock__";
import { typeButtonEnum } from "../../models";
import { theme } from "../../static/styles/theme";
import { useAllPeople } from "../../hook/usePeople";
import Modal from "../../components/display/Modal/Modal";
import { useCreateUser, useDeleteUser, useEditUser } from "../../hook/useUser";
import Create from "./components/Create/Create";

interface PeopleProps {}

const People: FC<PeopleProps> = () => {
  const [loading, setLoading] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { data } = useAllPeople();
  const editPersonMutate = useEditUser();
  const deletePersonMutate = useDeleteUser();
  const createPersonMutate = useCreateUser();

  const deleteUser = async (id: string) => {
    setLoading(true);
    try {
      const response = await deletePersonMutate.mutateAsync(id);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const editUser = async (data: any) => {
    setLoading(true);
    try {
      const response = await editPersonMutate.mutateAsync(data);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const createUser = async (data: any) => {
    setLoading(true);
    try {
      const response = await createPersonMutate.mutateAsync(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <UsersWrapper>
        {showModal && (
          <Modal
            title="Crear Usuario"
            open={showModal}
            handleClose={() => setShowModal(false)}
          >
            <Create handleSubmit={createUser} isEdit={isEdit} />
          </Modal>
        )}
        <div className="create-user-container">
          <Button
            typeButton={typeButtonEnum.fill}
            bgColor={theme.secondary}
            extraProps={{ onClick: () => setShowModal(true) }}
          >
            Crear Usuario +
          </Button>
        </div>
        {userList.map((user) => (
          <Card
            {...user}
            handleDelete={deleteUser}
            handleEdit={editUser}
          ></Card>
        ))}
      </UsersWrapper>
    </Container>
  );
};

export default People;
