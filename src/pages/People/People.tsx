import { FC, useState } from "react";
import { Container } from "../../components/genericStyles";

// Components
import Edit from "./components/Edit/Edit";
import Create from "./components/Create/Create";
import Card from "../../components/display/Card/Card";
import Button from "../../components/form/Button/Button";
import Modal from "../../components/display/Modal/Modal";
import CustomTable from "../../components/display/CustomTable/CustomTable";
import { getColumnsWithCallbacks } from "../../components/display/CustomTable/helpers/getColumnsWithCallbacks";

// Styles
import { PeopleWrapper } from "./styles";

// helpers
import { typeButtonEnum } from "../../models";
import { theme } from "../../static/styles/theme";
import { useAllPeople, useDeletePeople } from "../../hook/usePeople";
import { useDispatch } from "react-redux";
import { showToast } from "../../store/toast/actions";
import { COLUMNS_PEOPLE } from "./config/config";
import Delete from "./components/Delete/Delete";

interface PeopleProps {}

const People: FC<PeopleProps> = () => {
  const [action, setAction] = useState<"create" | "delete" | "edit">("create");
  const [dataSelected, setDataSelected] = useState<any>({});
  const [showModal, setShowModal] = useState(false);

  //Get
  const { data, isLoading, isError, refetch } = useAllPeople();

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
      <PeopleWrapper>
        {showModal && (
          <Modal
            title={`${getLabelByAction()} persona`}
            open={showModal}
            handleClose={closeModal}
          >
            {getComponentByAction()}
          </Modal>
        )}
        <Card>
          <div className="create-people-container">
            <Button
              typeButton={typeButtonEnum.fill}
              bgColor={theme.secondary}
              extraProps={{ onClick: () => setShowModal(true) }}
            >
              Crear Persona +
            </Button>
          </div>
          <CustomTable
            data={data?.data || []}
            columns={getColumnsWithCallbacks(COLUMNS_PEOPLE, actionsToMatch)}
          />
        </Card>
      </PeopleWrapper>
    </Container>
  );
};

export default People;
