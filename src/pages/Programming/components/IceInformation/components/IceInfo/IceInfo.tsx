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
  const [loadingSuppliers, setLoadingSuppliers] = useState(false);
  const [thirdValue, setThirdValue] = useState("");
  const [amount, setAmount] = useState(0);

  //GET
  const {
    data: iceData,
    isLoading: iceDataLoading,
    isError: iceDataError,
  } = useIceInformation(new Date(dateInView).toISOString());
  const {
    data: suppliersData,
    isLoading: suppliersDataLoading,
    isError: suppliersDataError,
  } = useThirdsSelected();

  // MUTATE
  const mutateAddSupplier = useAddSupplier(iceData?.data?._id);
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
    if (!iceData?.data) {
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

  const saveSupplier = async () => {
    setLoadingSuppliers(true);
    try {
      const iceSupplier = {
        supplier: thirdValue,
        amount,
      };
      const response = await mutateAddSupplier.mutateAsync(iceSupplier);

      dispatch(showToast("Se han guardado los datos correctamente", "success"));
    } catch (error: any) {
      dispatch(showToast(error.response.data.message, "error"));
    } finally {
      setLoadingSuppliers(false);
    }
  };

  const getThirdsOptions = () => {
    if (suppliersData) {
      return [
        {
          label: "Seleccione",
          value: "",
        },
        ...suppliersData?.data.map((third: any) => ({
          label: third.name,
          value: third._id,
        })),
      ];
    }
    return [
      {
        label: "No hay proveedores",
        value: "",
      },
    ];
  };

  return (
    <IceInfoWrapper>
      <h3>{getFormat(dateInView, true)}</h3>
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
      <div className="suppliers-container">
        <span className="suppliers-title">Proveedores</span>
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
        </div>
        <Button
          type="submit"
          sizeButton={sizeButtonEnum.medium}
          loading={loadingProduction}
          extraProps={{ onclick: saveSupplier }}
        >
          Guardar Proveedores
        </Button>
      </div>
    </IceInfoWrapper>
  );
};

export default IceInfo;
