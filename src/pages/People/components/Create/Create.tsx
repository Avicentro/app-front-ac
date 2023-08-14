import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

// Components
import Button from "../../../../components/form/Button/Button";
import DynamicForm from "../../../../components/form/DynamicForm/DynamicForm";
import { createSchemaByConfig } from "../../../../components/form/DynamicForm/helpers/createSchemaByConfig";
import { getDefaultValuesByConfig } from "../../../../components/form/DynamicForm/helpers/getDefaultValuesByConfig";

// Styles
import { CreateWrapper } from "./styles";

// helpers
import { formConfig } from "../../config/formConfig";
import { sizeButtonEnum } from "../../../../models";
import { yupResolver } from "@hookform/resolvers/yup";
import { useCreatePeople } from "../../../../hook/usePeople";
import { showToast } from "../../../../store/toast/actions";

interface CreateProps {
  handleSubmit: () => void;
}

const Create: FC<CreateProps> = ({ handleSubmit }) => {
  const [loading, setLoading] = useState(false);
  const createPeopleMutate = useCreatePeople();
  const dispatch = useDispatch();
  const {
    control,
    setValue,
    handleSubmit: submitForm,
    formState: { errors },
  } = useForm({
    defaultValues: getDefaultValuesByConfig(formConfig),
    resolver: yupResolver(createSchemaByConfig(formConfig)),
  });

  const createPeople = async (data: any) => {
    setLoading(true);
    try {
      await createPeopleMutate.mutateAsync(data);
      handleSubmit();
    } catch (error: any) {
      console.error(error);
      dispatch(showToast(error.response.data.message, "error"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <CreateWrapper>
      <form onSubmit={submitForm(createPeople)}>
        <DynamicForm
          formConfig={formConfig}
          errors={errors}
          setValue={setValue}
          control={control}
        />
        <Button
          type="submit"
          mb={8}
          sizeButton={sizeButtonEnum.medium}
          loading={loading}
        >
          Crear
        </Button>
      </form>
    </CreateWrapper>
  );
};

export default Create;
