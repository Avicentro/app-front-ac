import { FC, Fragment, useState } from "react";

// Components
import Button from "../../../../../../components/form/Button/Button";
import DynamicForm from "../../../../../../components/form/DynamicForm/DynamicForm";
import { createSchemaByConfig } from "../../../../../../components/form/DynamicForm/helpers/createSchemaByConfig";
import { getDefaultValuesByConfig } from "../../../../../../components/form/DynamicForm/helpers/getDefaultValuesByConfig";

// Styles
import { EntryOrderFormWrapper } from "./styles";

// helpers
import { useForm } from "react-hook-form";
import { entryOrderConfig } from "./formConfig/entryOrderConfig";
import { yupResolver } from "@hookform/resolvers/yup";
import Dropdown from "../../../../../../components/form/Dropdown/Dropdown";
import { createArrayOfNumbersForSelect } from "../../../../../../helpers/createData/createArrayOfNumbersForSelect";
import { weighingConfig } from "./formConfig/weighingConfig";
import ComponentSelector from "../../../../../../components/form/DynamicForm/components/ComponentSelector/ComponentSelector";
import TextInput from "../../../../../../components/form/TextInput/TextInput";

interface EntryOrderFormProps {
  handleSubmit: (s: any) => void;
  loading: boolean;
}

type weighingFormType = {
  bruto: any;
  destare: any;
  neto: any;
};

const EntryOrderForm: FC<EntryOrderFormProps> = ({ handleSubmit, loading }) => {
  const [numberOfWeighing, setNumberOfWeighing] = useState(1);
  const [weighingForm, setWeighingForm] = useState<weighingFormType[]>([
    {
      bruto: 0,
      destare: 0,
      neto: 0,
    },
  ]);
  const {
    control,
    setValue,
    handleSubmit: innerHandleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: getDefaultValuesByConfig(entryOrderConfig),
    resolver: yupResolver(createSchemaByConfig(entryOrderConfig)),
  });

  const getWeighingFieldsByNumberSelected = () => {
    return createArrayOfNumbersForSelect(numberOfWeighing);
  };

  const handleInputChange = (index: number, field: string, value: any) => {
    setWeighingForm((prevValues: any) => {
      const updatedValues = [...prevValues];
      updatedValues[index][field] = value;
      return updatedValues;
    });
  };

  const changeNumberOfWeighing = (number: number) => {
    const newWeigh = { bruto: "", destare: "", neto: "" };
    setWeighingForm((prevState: any) => {
      const newList = [];
      for (let i = 0; i < number; i++) {
        newList[i] = { ...newWeigh };
        if (prevState[i]) {
          newList[i] = { ...prevState[i] };
        }
      }
      return newList;
    });
    setNumberOfWeighing(number);
  };

  const onSubmit = (data: any) => {
    handleSubmit({ ...getValues(), weighingsList: weighingForm });
  };

  return (
    <EntryOrderFormWrapper onSubmit={innerHandleSubmit(onSubmit)}>
      <DynamicForm
        formConfig={entryOrderConfig}
        errors={errors}
        setValue={setValue}
        control={control}
        numberOfColumns={2}
      />
      <div className="grid-weighing-container">
        <div className="weighing-selector">
          <Dropdown
            label="Seleccione el número de pesajes"
            name="numberOfWeighing"
            value={1}
            handleChange={changeNumberOfWeighing}
            options={createArrayOfNumbersForSelect(50)}
          />
        </div>
        {getWeighingFieldsByNumberSelected().map(({ label, value }, index) => (
          <Fragment key={`${value}_${index}`}>
            {weighingConfig.map((field, indexWeighing) => (
              <Fragment key={`${field.name}_${indexWeighing}`}>
                <TextInput
                  {...field}
                  label={`${field.label} ${value}`}
                  value={
                    weighingForm[index][field.name as keyof weighingFormType]
                  }
                  handleChange={(value) =>
                    handleInputChange(index, field.name, value)
                  }
                />
              </Fragment>
            ))}
          </Fragment>
        ))}
      </div>
      <Button loading={loading} type="submit">
        Guardar cambios
      </Button>
    </EntryOrderFormWrapper>
  );
};

export default EntryOrderForm;
