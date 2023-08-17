import { FC, useState } from "react";

// Components
import Card from "../../components/display/Card/Card";
import Button from "../../components/form/Button/Button";
import { Container } from "../../components/genericStyles";
import CustomTable from "../../components/display/CustomTable/CustomTable";
import { getColumnsWithCallbacks } from "../../components/display/CustomTable/helpers/getColumnsWithCallbacks";

// Styles
import { IceProvidersWrapper } from "./styles";

// helpers
import Edit from "./components/Edit/Edit";
import { typeButtonEnum } from "../../models";
import Create from "./components/Create/Create";
import Delete from "./components/Delete/Delete";
import { theme } from "../../static/styles/theme";
import { COLUMNS_ICE_SUPPLIER } from "./config/columns";
import Modal from "../../components/display/Modal/Modal";
import { useAllIceProviders } from "../../hook/useIceProvider";

interface IceProvidersProps {}

const IceProviders: FC<IceProvidersProps> = () => {
  const [showModal, setShowModal] = useState(false);
  const [action, setAction] = useState<"create" | "delete" | "edit">("create");
  const [dataSelected, setDataSelected] = useState({});
  const { data, isLoading, isError, refetch } = useAllIceProviders();

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
      delete: (
        <Delete
          handleCancel={closeModal}
          dataSelected={dataSelected}
          handleSuccess={onSuccessActions}
        />
      ),
    }[action];
  };

  return (
    <Container>
      <IceProvidersWrapper>
        {showModal && (
          <Modal
            title={`${getLabelByAction()} proveedor`}
            open={showModal}
            handleClose={closeModal}
          >
            {getComponentByAction()}
          </Modal>
        )}
        <Card customClass="card-ice-providers">
          <div className="create-provider-container">
            <Button
              typeButton={typeButtonEnum.fill}
              bgColor={theme.secondary}
              extraProps={{ onClick: () => setShowModal(true) }}
              mb={32}
            >
              Crear proveedor +
            </Button>
          </div>
          <CustomTable
            data={data?.data || []}
            columns={getColumnsWithCallbacks(
              COLUMNS_ICE_SUPPLIER,
              actionsToMatch
            )}
          />
        </Card>
      </IceProvidersWrapper>
    </Container>
  );
};

export default IceProviders;
