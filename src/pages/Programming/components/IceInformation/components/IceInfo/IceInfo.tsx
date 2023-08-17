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

type supplierType = {
  label?: string;
  value?: string;
};

const IceInfo: FC<IceInfoProps> = ({ dateInView }) => {
  const [loadingAddSupplier, setLoadingAddSupplier] = useState(false);
  const [loadingProduction, setLoadingProduction] = useState(false);
  const [supplierIdSelected, setSupplierIdSelected] = useState("");
  const [supplierSelected, setSupplierSelected] = useState<supplierType>({});
  const [supplierList, setSupplierList] = useState<supplierType[]>([]);
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
    if (supplierIdSelected) {
      const supplierFound = suppliersData?.data.find(
        (supplier: any) => supplier._id === supplierIdSelected
      );
      setSupplierSelected(supplierFound);
    }
  }, [supplierIdSelected, suppliersData]);

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
    setLoadingAddSupplier(true);
    try {
      const iceSupplier = {
        supplier: supplierSelected.value,
        amount,
      };
      await mutateAddSupplier.mutateAsync(iceSupplier);
      setSupplierList((prev: any) => [...prev, { iceSupplier }]);
      dispatch(
        showToast("Se ha registrado el proveedor correctamente", "success")
      );
    } catch (error: any) {
      dispatch(showToast(error.response.data.message, "error"));
    } finally {
      setLoadingAddSupplier(false);
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
            value={supplierSelected.value}
            handleChange={setSupplierIdSelected}
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
          loading={loadingAddSupplier}
          extraProps={{ onClick: saveSupplier }}
        >
          Guardar Proveedores
        </Button>
      </div>
      <hr />
      <section className="suppliers-list">
        <ul>
          {supplierList.map((supplier) => (
            <li key={supplier.value}>{supplier.label}</li>
          ))}
        </ul>
      </section>
    </IceInfoWrapper>
  );
};

export default IceInfo;
