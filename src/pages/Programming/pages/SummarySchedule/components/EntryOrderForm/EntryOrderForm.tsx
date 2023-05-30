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
import { typeButtonEnum } from "../../../../../../models";

interface EntryOrderFormProps {
  handleSubmit: (s: any) => void;
  loading: boolean;
  countChickens: number;
}

type weighingFormType = {
  grossWeight: any;
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
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: getDefaultValuesByConfig(entryOrderConfig),
    resolver: yupResolver(createSchemaByConfig(entryOrderConfig)),
  });

  useEffect(() => {
    const numberOfWeighingList = [];
    for (let i = 0; i < numberOfWeighing; i++) {
      numberOfWeighingList.push({ grossWeight: "" });
    }
    setWeighingForm(numberOfWeighingList);
  }, [numberOfWeighing]);

  useEffect(() => {
    const countChickensSent = watch("countChickensSent");
    const numberCalculate = Math.ceil(countChickensSent / 8 / 8);
    setNumberOfWeighing(numberCalculate);
  }, [watch("countChickensSent")]);

  const getWeighingFieldsByNumberSelected = () => {
    return createArrayOfNumbersForSelect(numberOfWeighing);
  };

  const handleInputChange = (index: number, field: string, value: any) => {
    setWeighingForm((prevValues: any) => {
      const updatedValues = [...prevValues];
      updatedValues[index][field] = +value;
      return updatedValues;
    });
  };

  const changeNumberOfWeighing = (number: number) => {
    const newWeigh = { grossWeight: "" };
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

  const onSubmit = () => {
    handleSubmit({
      ...getValues(),
      countChickensProgramming: countChickens,
      operatorEndHook: 0,
      weighingsList: weighingForm.map(({ grossWeight }) => ({
        grossWeight: grossWeight.toString(),
      })),
    });
  };

  const getExternalValue = () => {
    return 0;
  };

  const setBrutoByExternalValue = ({
    index,
    fieldName,
  }: {
    index: number;
    fieldName: string;
  }) => {
    const externalValue = getExternalValue();
    setWeighingForm((prevValues: any) => {
      const updatedValues = [...prevValues];
      updatedValues[index][fieldName] = externalValue;
      return updatedValues;
    });
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
            <div className="button-add-container">
              <Button
                typeButton={typeButtonEnum.stroke}
                extraProps={{
                  onClick: () =>
                    setBrutoByExternalValue({
                      index,
                      fieldName: "grossWeight",
                    }),
                }}
              >
                Añadir valor externo
              </Button>
            </div>
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
