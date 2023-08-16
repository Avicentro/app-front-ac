import { FC, useState } from "react";
import { useDispatch } from "react-redux";

// Components
import Button from "../../../../components/form/Button/Button";
import DynamicForm from "../../../../components/form/DynamicForm/DynamicForm";
import { createSchemaByConfig } from "../../../../components/form/DynamicForm/helpers/createSchemaByConfig";
import { getDefaultValuesByConfig } from "../../../../components/form/DynamicForm/helpers/getDefaultValuesByConfig";

// Styles
import { EditWrapper } from "./styles";

// helpers
import { useForm } from "react-hook-form";
import { formConfig } from "./config/formConfig";
import { sizeButtonEnum } from "../../../../models";
import { yupResolver } from "@hookform/resolvers/yup";
import { showToast } from "../../../../store/toast/actions";
import { useEditIceProvider } from "../../../../hook/useIceProvider";
import { mergeDefaultData } from "../../../../helpers/transformData/mergeDefaultData";

interface EditProps {
  handleSubmit: () => void;
  defaultValues: { [key: string]: any };
}

const Edit: FC<EditProps> = ({ handleSubmit, defaultValues }) => {
  const { _id, password, ...rest } = defaultValues;
  const [loading, setLoading] = useState(false);
  const editIceProviderMutate = useEditIceProvider(_id);
  const dispatch = useDispatch();

  const {
    control,
    setValue,
    handleSubmit: submitForm,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ...getDefaultValuesByConfig(mergeDefaultData(formConfig, defaultValues)),
      ...rest,
    },
    resolver: yupResolver(createSchemaByConfig(formConfig)),
  });

  const editIceProvider = async (data: any) => {
    setLoading(true);
    try {
      await editIceProviderMutate.mutateAsync(data);
      handleSubmit();
    } catch (error: any) {
      dispatch(showToast(error.response.data.message, "error"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <EditWrapper>
      <form onSubmit={submitForm(editIceProvider)}>
        <DynamicForm
          formConfig={mergeDefaultData(formConfig, defaultValues)}
          errors={errors}
          setValue={setValue}
          control={control}
        />
        <div className="button-container">
          <Button
            type="submit"
            sizeButton={sizeButtonEnum.medium}
            loading={loading}
          >
            Editar
          </Button>
        </div>
      </form>
    </EditWrapper>
  );
};

export default Edit;
