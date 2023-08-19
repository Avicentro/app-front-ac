import { FC, useCallback, useEffect, useState } from "react";

// Components

// Styles
import { IceInfoWrapper } from "./styles";

// helpers
import { getFormat } from "../../../../pages/helpers/getFormat";
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
  usePutIceInformation,
  useThirdsSelected,
} from "../../../../../../hook/useIce";
import TextInput from "../../../../../../components/form/TextInput/TextInput";
import { mergeData } from "../../../../pages/helpers/mergeData";
import { addSupplier } from "../../helpers/addSupplier";
import { supplierSelectType } from "../../model";
import { getLabelSuppliers } from "../../helpers/getLabelSuppliers";
import { deleteSupplier } from "../../helpers/deleteSupplier";

interface IceInfoProps {
  dateInView: string;
  travelLength: number;
}

const BAGS_PER_TRAVEL = 80;

const KEY_ICE_PRODUCTION = "idIceProduction";
const idIceProductionStorage = localStorage.getItem(KEY_ICE_PRODUCTION);

const IceInfo: FC<IceInfoProps> = ({ dateInView, travelLength }) => {
  const [loadingAddSupplier, setLoadingAddSupplier] = useState(false);
  const [loadingProduction, setLoadingProduction] = useState(false);
  const [supplierIdSelected, setSupplierIdSelected] = useState("");
  const [supplierSelected, setSupplierSelected] = useState<any>({ value: "" });
  const [supplierList, setSupplierList] = useState<supplierSelectType[]>([]);
  const [amount, setAmount] = useState(0);

  const TOTAL_BAGS_BY_TRAVEL = travelLength * BAGS_PER_TRAVEL;

  //GET
  const {
    data: iceData,
    isLoading: iceDataLoading,
    isError: iceDataError,
    refetch,
  } = useIceInformation(new Date(dateInView).toISOString());
  const {
    data: suppliersData,
    isLoading: suppliersDataLoading,
    isError: suppliersDataError,
  } = useThirdsSelected();

  // MUTATE
  const mutateAddSupplier = useAddSupplier(idIceProductionStorage);
  const mutateAddIceInformation = useAddIceInformation();
  const mutateAddPutIceInformation = usePutIceInformation(
    idIceProductionStorage || ""
  );
  const dispatch = useDispatch();

  const dataToMerge = [
    {
      name: "inventory",
      key: "value",
      value: iceData?.data?.[0].inventory,
    },
    {
      name: "produccion",
      key: "value",
      value: iceData?.data?.[0].produccion,
    },
  ];

  const dataMerged = mergeData({
    formConfig,
    dataToMerge,
  });

  const {
    control,
    setValue,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: getDefaultValuesByConfig(dataMerged),
    resolver: yupResolver(createSchemaByConfig(formConfig)),
  });

  const addIceInformation = useCallback(async () => {
    try {
      const emptyIceData = {
        date: new Date(dateInView).toISOString(),
        inventory: 0,
        produccion: 0,
        supplier: 0,
        supplier_list: [],
        difference: 0,
        required: 0,
      };

      const { _id } = await mutateAddIceInformation.mutateAsync(emptyIceData);
      localStorage.setItem(KEY_ICE_PRODUCTION, _id);
      dispatch(showToast("Se han guardado los datos correctamente", "success"));
    } catch (error: any) {
      dispatch(showToast(error.response.data.message, "error"));
    }
  }, [dateInView, mutateAddIceInformation]);

  const addPutIceInformation = async (data: any) => {
    setLoadingProduction(true);
    try {
      const initialIceData = {
        date: new Date(dateInView).toISOString(),
        inventory: +data.inventory,
        produccion: +data.produccion,
        supplier: 0,
        supplier_list: [],
        difference: 0,
        required: TOTAL_BAGS_BY_TRAVEL,
      };
      await mutateAddPutIceInformation.mutateAsync(initialIceData);
      refetch();
      dispatch(showToast("Se han guardado los datos correctamente", "success"));
    } catch (error: any) {
      dispatch(showToast(error.response.data.message, "error"));
    } finally {
      setLoadingProduction(false);
    }
  };

  useEffect(() => {
    if (supplierIdSelected) {
      const supplierFound = suppliersData?.data.find(
        (supplier: any) => supplier._id === supplierIdSelected
      );
      setSupplierSelected(supplierFound);
    }
  }, [supplierIdSelected, suppliersData]);

  useEffect(() => {
    if (iceData?.data?.length === 0) {
      addIceInformation();
    } else {
      setSupplierList(
        getLabelSuppliers(iceData?.data?.[0].supplier_list, suppliersData?.data)
      );
    }
  }, [iceData?.data?.length, suppliersData]);

  const saveSupplier = async () => {
    setLoadingAddSupplier(true);
    try {
      const iceSupplier = {
        supplier: supplierSelected._id,
        amount,
      };
      const iceDataCopy = { ...iceData?.data?.[0] };
      const newIceSupplier = addSupplier(iceDataCopy, iceSupplier);
      await mutateAddPutIceInformation.mutateAsync(newIceSupplier);
      setSupplierList((prev: any) => [
        ...prev,
        {
          ...iceSupplier,
          value: supplierSelected._id,
          label: supplierSelected.name,
        },
      ]);
      refetch();
      reset();
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

  const onDeleteSupplier = async (supplier: any) => {
    setLoadingAddSupplier(true);
    console.log("supplier", supplier);
    try {
      const iceSupplier = {
        supplier: supplierSelected._id,
        amount,
      };
      const iceDataCopy = { ...iceData?.data?.[0] };
      const newIceSupplier = deleteSupplier(iceDataCopy, iceSupplier);
      await mutateAddPutIceInformation.mutateAsync(newIceSupplier);
      setSupplierList((prev: any) => {
        const prevCopy = [...prev];
        const indexIceSupplierFound = prevCopy.findIndex(
          (prevSupplier: any) => prevSupplier.value === supplier.value
        );
        prevCopy.splice(indexIceSupplierFound, 1);
        return prevCopy;
      });
      refetch();
      dispatch(
        showToast("Se ha registrado el proveedor correctamente", "success")
      );
    } catch (error: any) {
      dispatch(showToast(error.response.data.message, "error"));
    } finally {
      setLoadingAddSupplier(false);
    }
  };

  return (
    <IceInfoWrapper>
      <h3>{getFormat(dateInView, true)}</h3>
      <form onSubmit={handleSubmit(addPutIceInformation)}>
        <DynamicForm
          formConfig={dataMerged}
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
        <span>Inventario: {iceData?.data?.[0].inventory}</span>
        <span>Producción: {iceData?.data?.[0].produccion}</span>
        <span>Terceros: {iceData?.data?.[0].supplier}</span>
        <span>Requeridos: {TOTAL_BAGS_BY_TRAVEL}</span>
        <span>Diferencia: {iceData?.data?.[0].difference}</span>
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
            <li key={supplier.value}>
              <p className="">{supplier.label}</p>
              <span onClick={() => onDeleteSupplier(supplier)}>X</span>
            </li>
          ))}
        </ul>
      </section>
    </IceInfoWrapper>
  );
};

export default IceInfo;
