import { FC, useState } from "react";
import { useDispatch } from "react-redux";

// Components
import Button from "../../../../components/form/Button/Button";

// Styles
import { DeleteWrapper } from "./styles";

// helpers
import { typeButtonEnum } from "../../../../models";
import { useDeleteUser } from "../../../../hook/useUser";
import { showToast } from "../../../../store/toast/actions";

interface DeleteProps {
  handleCancel: () => void;
  handleSuccess: () => void;
  dataSelected: any;
}

const Delete: FC<DeleteProps> = ({ handleCancel,handleSuccess, dataSelected }) => {
  const [loading, setLoading] = useState(false);
  const deletePersonMutate = useDeleteUser();
  const dispatch = useDispatch();

  const deleteUser = async () => {
    setLoading(true);
    try {
      await deletePersonMutate.mutateAsync(dataSelected._id);
    } catch (error: any) {
      dispatch(showToast(error.response.data.message, "error"));
    } finally {
      setLoading(false);
      handleSuccess();
    }
  };

  return (
    <DeleteWrapper>
      <p>
        ¿Está seguro que desea eliminar al usuario <b>{dataSelected.name}</b>?
      </p>
      <div className="buttons-container">
        <Button loading={loading} extraProps={{ onClick: deleteUser }}>
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
