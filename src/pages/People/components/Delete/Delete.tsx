import { FC, useState } from "react";
import { useDispatch } from "react-redux";

// Components
import Button from "../../../../components/form/Button/Button";

// Styles
import { DeleteWrapper } from "./styles";

// helpers
import { typeButtonEnum } from "../../../../models";
import { showToast } from "../../../../store/toast/actions";
import { useDeletePeople } from "../../../../hook/usePeople";

interface DeleteProps {
  handleCancel: () => void;
  handleSuccess: () => void;
  dataSelected: any;
}

const Delete: FC<DeleteProps> = ({ handleCancel, handleSuccess, dataSelected }) => {
  const [loading, setLoading] = useState(false);
  const deletePersonMutate = useDeletePeople();
  const dispatch = useDispatch();

  const deletePeople = async () => {
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
        ¿Está seguro que desea eliminar a la persona <b>{dataSelected.name}</b>?
      </p>
      <div className="buttons-container">
        <Button loading={loading} extraProps={{ onClick: deletePeople }}>
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
