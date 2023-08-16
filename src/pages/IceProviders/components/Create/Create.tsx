import { FC, useState } from "react";

// Components
import { showToast } from "../../../../store/toast/actions";
import Button from "../../../../components/form/Button/Button";
import DynamicForm from "../../../../components/form/DynamicForm/DynamicForm";
import { createSchemaByConfig } from "../../../../components/form/DynamicForm/helpers/createSchemaByConfig";
import { getDefaultValuesByConfig } from "../../../../components/form/DynamicForm/helpers/getDefaultValuesByConfig";

// Styles
import { CreateWrapper } from "./styles";

// helpers
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { formConfig } from "./config/formConfig";
import { sizeButtonEnum } from "../../../../models";
import { yupResolver } from "@hookform/resolvers/yup";
import { useCreateIceProvider } from "../../../../hook/useIceProvider";

interface CreateProps {
  handleSubmit: () => void;
}

const Create: FC<CreateProps> = ({ handleSubmit }) => {
  const [loading, setLoading] = useState(false);
  const createIceProviderMutate = useCreateIceProvider();
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

  const createUser = async (data: any) => {
    setLoading(true);
    try {
      await createIceProviderMutate.mutateAsync(data);
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
      <form onSubmit={submitForm(createUser)}>
        <DynamicForm
          formConfig={formConfig}
          errors={errors}
          setValue={setValue}
          control={control}
        />
        <div className="button-container">
          <Button
            type="submit"
            mb={8}
            sizeButton={sizeButtonEnum.medium}
            loading={loading}
          >
            Crear
          </Button>
        </div>
      </form>
    </CreateWrapper>
  );
};

export default Create;
