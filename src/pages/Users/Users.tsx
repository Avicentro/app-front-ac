import { FC, useState } from "react";

// Components
import Edit from "./components/Edit/Edit";
import Create from "./components/Create/Create";
import Card from "../../components/display/Card/Card";
import Button from "../../components/form/Button/Button";
import Modal from "../../components/display/Modal/Modal";
import { Container } from "../../components/genericStyles";
import CustomTable from "../../components/display/CustomTable/CustomTable";
import { getColumnsWithCallbacks } from "../../components/display/CustomTable/helpers/getColumnsWithCallbacks";

// Styles

import { UsersWrapper } from "./styles";

// helpers
import { typeButtonEnum } from "../../models";
import { COLUMNS_USER } from "./config/config";
import { theme } from "../../static/styles/theme";
import Delete from "./components/Delete/Delete";
import { useAllUser } from "../../hook/useUser";

interface UsersProps {}

const Users: FC<UsersProps> = () => {
  const [action, setAction] = useState<"create" | "delete" | "edit">("create");
  const [showModal, setShowModal] = useState(false);
  const [dataSelected, setDataSelected] = useState({});
  const { data, isLoading, isError, refetch } = useAllUser();

  const onSuccessActions = () => {
    setShowModal(false);
    setAction("create");
    setDataSelected({});
    refetch();
  };

  const openModalEdit = (data: any) => {
    setDataSelected(data);
    setAction("edit");
    setShowModal(true);
  };

  const openModalDelete = (data: any) => {
    setDataSelected(data);
    setAction("delete");
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setAction("create");
    setDataSelected({});
  };

  const actionsToMatch = {
    edit: {
      callback: (data: any) => {
        openModalEdit(data);
      },
      columnTarget: "all",
    },
    delete: {
      callback: (data: any) => {
        openModalDelete(data);
      },
      columnTarget: "all",
    },
  };

  const getLabelByAction = () => {
    return {
      create: "Crear",
      edit: "Editar",
      delete: "Eliminar",
    }[action];
  };

  const getComponentByAction = () => {
    return {
      create: <Create handleSubmit={onSuccessActions} />,
      edit: (
        <Edit handleSubmit={onSuccessActions} defaultValues={dataSelected} />
      ),
      delete: <Delete handleCancel={closeModal} dataSelected={dataSelected} />,
    }[action];
  };

  return (
    <Container>
      <UsersWrapper>
        {showModal && (
          <Modal
            title={`${getLabelByAction()} usuario`}
            open={showModal}
            handleClose={closeModal}
          >
            {getComponentByAction()}
          </Modal>
        )}
        <Card>
          <div className="create-user-container">
            <Button
              typeButton={typeButtonEnum.fill}
              bgColor={theme.secondary}
              extraProps={{ onClick: () => setShowModal(true) }}
              mb={32}
            >
              Crear Usuario +
            </Button>
          </div>
          <CustomTable
            data={data?.data || []}
            columns={getColumnsWithCallbacks(COLUMNS_USER, actionsToMatch)}
          />
        </Card>
      </UsersWrapper>
    </Container>
  );
};

export default Users;
