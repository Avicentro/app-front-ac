import { FC, useCallback, useEffect, useState } from "react";

// Components

// Styles
import { IceInfoWrapper } from "./styles";

// helpers
import { getFormat } from "../../../../pages/helpers/getFormat";
import { Title } from "../../../../../../components/genericStyles";
import { useForm } from "react-hook-form";
import { getDefaultValuesByConfig } from "../../../../../../components/form/DynamicForm/helpers/getDefaultValuesByConfig";
import { formConfig } from "./config/formConfig";
import { yupResolver } from "@hookform/resolvers/yup";
import { createSchemaByConfig } from "../../../../../../components/form/DynamicForm/helpers/createSchemaByConfig";
import DynamicForm from "../../../../../../components/form/DynamicForm/DynamicForm";
import FilterDropDown from "../../../../../../components/form/FilterDropDown/FilterDropDown";
import Button from "../../../../../../components/form/Button/Button";
import { sizeButtonEnum } from "../../../../../../models";
import { useDispatch } from "react-redux";
import { showToast } from "../../../../../../store/toast/actions";
import {
  useAddIceInformation,
  useAddSupplier,
  useIceInformation,
  useThirdsSelected,
} from "../../../../../../hook/useIce";
import TextInput from "../../../../../../components/form/TextInput/TextInput";

interface IceInfoProps {
  dateInView: string;
}

const IceInfo: FC<IceInfoProps> = ({ dateInView }) => {
  const [loadingProduction, setLoadingProduction] = useState(false);
  const [loadingThirds, setLoadingThirds] = useState(false);
  const [thirdValue, setThirdValue] = useState("");
  const [amount, setAmount] = useState(0);
  const dataInformation = useIceInformation(new Date(dateInView).toISOString());
  const { data } = useThirdsSelected();
  const mutateAddSupplier = useAddSupplier(dataInformation?.data?._id);
  const mutateAddIceInformation = useAddIceInformation();
  const dispatch = useDispatch();
  // console.log("dataInformation", dataInformation);
  const {
    control,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: getDefaultValuesByConfig(formConfig),
    resolver: yupResolver(createSchemaByConfig(formConfig)),
  });

  const addIceInformation = useCallback(async () => {
    try {
      const emptyIceData = {
        date: new Date(dateInView).toISOString(),
        name: "",
        inventory: 0,
        produccion: 0,
        supplier: 0,
        supplier_list: [],
        difference: 0,
        required: 0,
      };
      await mutateAddIceInformation.mutateAsync(emptyIceData);
    } catch (error) {}
  }, [dateInView, mutateAddIceInformation]);

  useEffect(() => {
    if (!dataInformation.data) {
      addIceInformation();
    }
  }, []);

  const saveData = (data: any) => {
    setLoadingProduction(true);
    try {
      const response = "algo";
      dispatch(showToast("Se han guardado los datos correctamente", "success"));
    } catch (error: any) {
      dispatch(showToast(error.response.data.message, "error"));
    } finally {
      setLoadingProduction(false);
    }
  };

  const saveThird = async () => {
    setLoadingThirds(true);
    try {
      const newObj = {
        supplier: thirdValue,
        amount,
      };
      const response = await mutateAddSupplier.mutateAsync(newObj);

      dispatch(showToast("Se han guardado los datos correctamente", "success"));
    } catch (error: any) {
      dispatch(showToast(error.response.data.message, "error"));
    } finally {
      setLoadingThirds(false);
    }
  };

  const getThirdsOptions = () => {
    if (data) {
      return [
        {
          label: "Seleccione",
          value: "",
        },
        ...data?.data.map((third: any) => ({
          label: third.name,
          value: third._id,
        })),
      ];
    }
    return [];
  };

  return (
    <IceInfoWrapper>
      <h3>{getFormat(dateInView)}</h3>
      <form onSubmit={handleSubmit(saveData)}>
        <DynamicForm
          formConfig={formConfig}
          errors={errors}
          setValue={setValue}
          control={control}
        />
        <Button
          type="submit"
          mb={32}
          sizeButton={sizeButtonEnum.medium}
          loading={loadingProduction}
        >
          Guardar datos
        </Button>
      </form>
      <div className="info">
        <span>Terceros:</span>
        <span>Requeridos:</span>
        <span>Diferencia:</span>
      </div>
      <hr />
      <div className="">
        Terceros
        <div className="third-container">
          <FilterDropDown
            label="Seleccione a un tercero"
            options={getThirdsOptions()}
            name={"thirds"}
            value={thirdValue}
            handleChange={setThirdValue}
          />
          <TextInput
            type="number"
            name="amount"
            label="Cantidad de bultos"
            value={amount}
            handleChange={setAmount}
          />
          <Button
            type="submit"
            mb={32}
            sizeButton={sizeButtonEnum.medium}
            loading={loadingProduction}
            extraProps={{ onclick: saveThird }}
          >
            Guardar Proveedores
          </Button>
        </div>
      </div>
    </IceInfoWrapper>
  );
};

export default IceInfo;
