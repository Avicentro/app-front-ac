import { FC, Fragment, useEffect, useState } from "react";

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
import TextInput from "../../../../../../components/form/TextInput/TextInput";
import { mergeNumberOfBaskets } from "./helpers/mergeNumberOfBaskets";

interface EntryOrderFormProps {
  handleSubmit: (s: any) => void;
  loading: boolean;
  countChickens: number;
}

type weighingFormType = {
  bruto: any;
  destare: any;
  neto: any;
};

const EntryOrderForm: FC<EntryOrderFormProps> = ({
  handleSubmit,
  loading,
  countChickens,
}) => {
  const [numberOfWeighing, setNumberOfWeighing] = useState(0);
  const [weighingForm, setWeighingForm] = useState<weighingFormType[]>([]);
  const {
    control,
    setValue,
    handleSubmit: innerHandleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: getDefaultValuesByConfig(
      mergeNumberOfBaskets({ formConfig: entryOrderConfig, countChickens })
    ),
    resolver: yupResolver(createSchemaByConfig(entryOrderConfig)),
  });

  useEffect(() => {
    const numberOfWeighingList = [];
    for (let i = 0; i <= numberOfWeighing; i++) {
      numberOfWeighingList.push({ bruto: "", destare: 58, neto: "" });
    }
    setWeighingForm(numberOfWeighingList);
  }, [numberOfWeighing]);

  useEffect(() => {
    setNumberOfWeighing(Math.ceil(countChickens / 8 / 8));
  }, [countChickens]);

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
    const newWeigh = { bruto: "", destare: 58, neto: "" };
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
            value={numberOfWeighing}
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
                    weighingForm[index] &&
                    weighingForm[index][field.name as keyof weighingFormType]
                  }
                  handleChange={(value) => {
                    if (field.name === "bruto") {
                      handleInputChange(index, field.name, value);
                      return handleInputChange(
                        index,
                        "neto",
                        value - weighingForm[index]["destare"]
                      );
                    }
                    return handleInputChange(index, field.name, value);
                  }}
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
