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
import {
  useAllUser,
  useCreateUser,
  useDeleteUser,
  useEditUser,
} from "../../hook/useUser";
import Create from "./components/Create/Create";
import { useDispatch } from "react-redux";
import { showToast } from "../../store/toast/actions";

interface PeopleProps {}

const People: FC<PeopleProps> = () => {
  const [loading, setLoading] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { data, isLoading, isError, refetch } = useAllUser();
  const editUserMutate = useEditUser();
  const deleteUserMutate = useDeleteUser();
  const createUserMutate = useCreateUser();
  const dispatch = useDispatch();

  const deleteUser = async (id: string) => {
    setLoading(true);
    try {
      const response = await deleteUserMutate.mutateAsync(id);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const editUser = async (data: any) => {
    setLoading(true);
    try {
      const response = await editUserMutate.mutateAsync(data);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const createUser = async (data: any) => {
    setLoading(true);
    try {
      await createUserMutate.mutateAsync(data);
      setShowModal(false);
      refetch();
    } catch (error: any) {
      console.error(error);
      dispatch(showToast(error.response.data.message, "error"));
    } finally {
      setLoading(false);
    }
  };

  const getContent = () => {
    if (data?.data.length) {
      return (
        <>
          {data?.data.map((user: any) => (
            <Card
              {...user}
              handleDelete={deleteUser}
              handleEdit={editUser}
            ></Card>
          ))}
        </>
      );
    }
    return (
      <div className="empty-message-container">
        <span className="empty-message">
          En el momento no hay usuarios existentes
        </span>
      </div>
    );
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
        {isLoading ? (
          <div className="empty-message-container">
            <span className="empty-message">Cargando Usuarios...</span>
          </div>
        ) : (
          <>{getContent()}</>
        )}
      </UsersWrapper>
    </Container>
  );
};

export default People;
