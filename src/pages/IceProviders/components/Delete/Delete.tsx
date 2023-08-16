import { FC, useState } from "react";
import { useDispatch } from "react-redux";

// Components
import Button from "../../../../components/form/Button/Button";

// Styles
import { DeleteWrapper } from "./styles";

// helpers
import { typeButtonEnum } from "../../../../models";
import { showToast } from "../../../../store/toast/actions";
import { useDeleteIceProvider } from "../../../../hook/useIceProvider";

interface DeleteProps {
  handleCancel: () => void;
  dataSelected: any;
}

const Delete: FC<DeleteProps> = ({ handleCancel, dataSelected }) => {
  const [loading, setLoading] = useState(false);
  const deleteIceProviderMutate = useDeleteIceProvider();
  const dispatch = useDispatch();

  const deleteIceProvider = async () => {
    setLoading(true);
    try {
      await deleteIceProviderMutate.mutateAsync(dataSelected._id);
    } catch (error: any) {
      dispatch(showToast(error.response.data.message, "error"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <DeleteWrapper>
      <p>
        ¿Está seguro que desea eliminar al proveedor <b>{dataSelected.name}</b>?
      </p>
      <div className="buttons-container">
        <Button loading={loading} extraProps={{ onClick: deleteIceProvider }}>
          Confirmar
        </Button>
        <Button
          extraProps={{ onClick: handleCancel }}
          typeButton={typeButtonEnum.stroke}
        >
          Cancelar
        </Button>
      </div>
    </DeleteWrapper>
  );
};

export default Delete;
