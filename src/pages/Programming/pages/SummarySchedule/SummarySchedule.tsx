import { FC, useCallback, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

// Components
import EditField from "../../../../components/form/EditField/EditField";
import BackButton from "../../../../components/display/BackButton/BackButton";

// Styles
import { SummaryScheduleWrapper } from "./styles";

// helpers
import { ROUTES } from "../../../../constants/routes";
import {
  useDeleteScheduleMutate,
  useScheduling,
} from "../../../../hook/useSchedule";
import { formatDateCo } from "../../../../helpers/format/formatDateCo";
import {
  fieldTypeEnum,
  settingsValidationsStringType,
  typeButtonEnum,
  typeValidationsType,
} from "../../../../models";
import {
  FEEDBACK_MESSAGES,
  REGEX_VALIDATION,
} from "../../../../constants/form";
import Button from "../../../../components/form/Button/Button";
import EntryOrderForm from "./components/EntryOrderForm/EntryOrderForm";
import {
  useCreateOrderEntryMutation,
  useUpdateProgrammingMutation,
} from "../../../../hook/useProgramming";

import Modal from "../../../../components/display/Modal/Modal";
import { useDispatch } from "react-redux";
import { showToast } from "../../../../store/toast/actions";

type dataSummaryType = {
  dateStart: string;
  dateEnd: string;
  supplier: string;
  Customer: string;
  SubCustomer: string;
  user: string;
  type: string;
  qr: string;
  _id: string;
  status: boolean;
  countChickens: number;
  code: number;
  count?: number;
  nit: number;
  codeWorkingTime: number;
  __v: number;
  idCustomer: any;
  idSubCustomer: any;
  orderEntryExist: boolean;
};

interface SummaryScheduleProps {
  data?: dataSummaryType;
}

const MODAL_CONFIRM_TITLE =
  "¿Estas seguro que deseas eliminar la programación?";

const SummarySchedule: FC<SummaryScheduleProps> = ({ data }) => {
  const [loading, setLoading] = useState(false);
  const [loadingDelete, setLoadingDelete] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [modalConfirmDelete, setModalConfirmDelete] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { orderId = "" } = useParams();
  const { data: scheduling, refetch } = useScheduling(orderId, data);
  const useDeleteSchedule = useDeleteScheduleMutate();

  const updateProgrammingMutation = useUpdateProgrammingMutation(
    data ? data.code : scheduling?.data?.code
  );
  const createOrderEntry = useCreateOrderEntryMutation();

  const changeValue = async (data: any) => {
    setLoading(true);
    try {
      await updateProgrammingMutation.mutateAsync(data);
      refetch();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const getConfigForField = ({
    type,
    value,
    name,
  }: {
    type: "text" | "select" | "number";
    value: any;
    name: string;
  }) => {
    return {
      text: {
        name,
        value: value,
        type: "text",
        fieldType: fieldTypeEnum.text,
        placeholder: "Número telefónico",
        validation: {
          type: "string" as typeValidationsType,
          settings: [
            {
              type: "required" as settingsValidationsStringType,
            },
            {
              type: "matches" as settingsValidationsStringType,
              message: FEEDBACK_MESSAGES.ONLY_NUMBERS,
              regex: REGEX_VALIDATION.SHOULD_ONLY_NUMBERS,
            },
          ],
        },
      },
      number: {
        name,
        value,
        type: "number",
        fieldType: fieldTypeEnum.text,
        placeholder: "Modificar campo",
        validation: {
          type: "number" as typeValidationsType,
          settings: [
            {
              type: "required" as settingsValidationsStringType,
            },
            {
              type: "matches" as settingsValidationsStringType,
              message: FEEDBACK_MESSAGES.ONLY_NUMBERS,
              regex: REGEX_VALIDATION.SHOULD_ONLY_NUMBERS,
            },
          ],
        },
      },
      select: {
        name: name,
        value,
        type: "text",
        fieldType: fieldTypeEnum.select,
        placeholder: "Modificar Campo",
        validation: {
          type: "string" as typeValidationsType,
          settings: [
            {
              type: "required" as settingsValidationsStringType,
            },
          ],
        },
        options: [],
      },
    }[type];
  };

  const getLabelDate = useCallback(
    (key: string) => {
      if (data && data[key as keyof dataSummaryType]) {
        return formatDateCo({
          date: data[key as keyof dataSummaryType],
          addHours: true,
        });
      }
      if (scheduling?.data && scheduling?.data[key as keyof dataSummaryType]) {
        return formatDateCo({
          date: scheduling?.data[key as keyof dataSummaryType],
          addHours: true,
        });
      }
    },
    [data, scheduling?.data]
  );

  const getLabelString = useCallback(
    (key: any) => {
      const keyIsArray = Array.isArray(key);
      if (data) {
        if (keyIsArray) {
          console.log(data[key[0] as keyof dataSummaryType]);
          return data[key[0] as keyof dataSummaryType]
            ? data[key[0] as keyof dataSummaryType][key[1]]
            : "-";
        }
        return data[key as keyof dataSummaryType] || "-";
      }
      if (keyIsArray) {
        return scheduling?.data[key[0]]
          ? scheduling?.data[key[0]][key[1]]
          : "-";
      }
      return scheduling?.data[key] || "-";
    },
    [data, scheduling?.data]
  );

  const getLabelByKey = useCallback(
    ({ key, type = "string" }: { key: any; type?: string }) => {
      return {
        date: getLabelDate(key),
        string: getLabelString(key),
      }[type];
    },
    [getLabelDate, getLabelString]
  );

  const saveData = async (dataForm: any) => {
    setFormLoading(true);
    try {
      const dataToSend = {
        ...dataForm,
        code: data ? +data.code : +scheduling?.data?.code,
        startTime: data ? data.code : scheduling?.data?.dateStart,
        endTime: data ? data.code : scheduling?.data?.dateEnd,
      };
      await createOrderEntry.mutateAsync(dataToSend);
      dispatch(
        showToast("La orden de entrada Se ha creado correctamente", "success")
      );
    } catch (error: any) {
      console.log("error?.data?.message", error?.response?.data?.message);
      dispatch(
        showToast(
          JSON.stringify(error?.response?.data?.message) as any,
          "error"
        )
      );
    } finally {
      setFormLoading(false);
      refetch();
    }
  };

  const goToOrderEntry = (id: string) => {
    return navigate(`${ROUTES.ORDER_ENTRY}/${id}`);
  };

  const getIfOrderEntryExist = () =>
    data ? data?.orderEntryExist : scheduling?.data?.orderEntryExist;

  const getButtonIfOrderEntryCreated = () => {
    if (data) {
      if (data?.orderEntryExist) {
        return (
          <Button
            typeButton={typeButtonEnum.fill}
            extraProps={{ onClick: () => goToOrderEntry(data.code.toString()) }}
          >
            Ir a la orden de entrada
          </Button>
        );
      }
    }
    if (scheduling?.data?.orderEntryExist) {
      return (
        <Button
          typeButton={typeButtonEnum.fill}
          extraProps={{
            onClick: () => goToOrderEntry(scheduling?.data?.code),
          }}
        >
          Ir a la orden de entrada
        </Button>
      );
    }
    if (!showForm) {
      return (
        <Button
          typeButton={typeButtonEnum.stroke}
          extraProps={{ onClick: () => setShowForm(true) }}
        >
          Crear orden de entrada
        </Button>
      );
    }
  };

  const deleteSchedule = async () => {
    const codeToDelete = data ? data.code : scheduling?.data?.code;
    setLoadingDelete(true);
    try {
      await useDeleteSchedule.mutateAsync(codeToDelete);
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingDelete(false);
      navigate(ROUTES.PROGRAMMING);
    }
  };

  return (
    <SummaryScheduleWrapper>
      <div className="header-container">
        <BackButton />
        <Button
          typeButton={typeButtonEnum.fill}
          extraProps={{ onClick: () => setModalConfirmDelete(true) }}
        >
          Cancelar Programación
        </Button>
      </div>
      <div className="title">
        <h1>Resumen programación</h1>
      </div>
      <section className="schedule-info">
        <div className="schedule-info__text">
          <div className="schedule-info__text-container">
            <p className="title">Orden: </p>
            <div className="content">
              <EditField
                label={getLabelByKey({ key: "code" })}
                handleChange={changeValue}
                loading={loading}
                propsField={getConfigForField({
                  type: "text",
                  value: getLabelByKey({ key: "code" }),
                  name: "supplier",
                })}
              />
            </div>
          </div>
          <div className="schedule-info__text-container">
            <p className="title">Nit: </p>
            <div className="content">{getLabelByKey({ key: "nit" })}</div>
          </div>
          <div className="schedule-info__text-container">
            <p className="title">Proveedor: </p>
            <div className="content">
              <EditField
                label={getLabelByKey({ key: ["supplier", "name"] })}
                handleChange={changeValue}
                loading={loading}
                shouldEdit={!getIfOrderEntryExist()}
                propsField={getConfigForField({
                  type: "select",
                  value: getLabelByKey({ key: ["supplier", "name"] }),
                  name: "supplier",
                })}
                url="/customer/all"
              />
            </div>
          </div>
          <div className="schedule-info__text-container">
            <p className="title">Cliente: </p>
            <div className="content">
              <EditField
                label={getLabelByKey({ key: ["customer", "name"] })}
                handleChange={changeValue}
                loading={loading}
                shouldEdit={!getIfOrderEntryExist()}
                propsField={getConfigForField({
                  type: "select",
                  value: getLabelByKey({ key: ["customer", "name"] }),
                  name: "customer",
                })}
                url="/customer/all"
              />
            </div>
          </div>
          <div className="schedule-info__text-container">
            <p className="title">Sub-cliente: </p>
            <div className="content">
              <EditField
                label={getLabelByKey({ key: ["subCustomer", "name"] })}
                handleChange={changeValue}
                loading={loading}
                shouldEdit={!getIfOrderEntryExist()}
                propsField={getConfigForField({
                  type: "select",
                  value: getLabelByKey({ key: ["subCustomer", "name"] }),
                  name: "SubCustomer",
                })}
                url="/customer/all"
              />
            </div>
          </div>
          <div className="schedule-info__text-container">
            <p className="title">Cantidad de pollos: </p>
            <div className="content">
              <EditField
                label={getLabelByKey({ key: "countChickens" })}
                handleChange={changeValue}
                loading={loading}
                shouldEdit={!getIfOrderEntryExist()}
                propsField={getConfigForField({
                  type: "number",
                  value: getLabelByKey({ key: "countChickens" }),
                  name: "countChickens",
                })}
                url="/customer/all"
              />
            </div>
          </div>
          <div className="schedule-info__text-container">
            <p className="title">Conductor: </p>
            <div className="content">
              <EditField
                label={getLabelByKey({ key: ["driver", "name"] })}
                handleChange={changeValue}
                loading={loading}
                shouldEdit={!getIfOrderEntryExist()}
                propsField={getConfigForField({
                  type: "select",
                  value: getLabelByKey({ key: ["driver", "name"] }),
                  name: "driver",
                })}
                url="/customer/driver"
              />
            </div>
          </div>
          <div className="schedule-info__text-container">
            <p className="title">Ciudad: </p>
            <div className="content">
              <EditField
                label={getLabelByKey({ key: ["city", "name"] })}
                handleChange={changeValue}
                loading={loading}
                shouldEdit={!getIfOrderEntryExist()}
                propsField={getConfigForField({
                  type: "select",
                  value: getLabelByKey({ key: ["city", "name"] }),
                  name: "city",
                })}
                url="/city/city/ATL"
              />
            </div>
          </div>
          <div className="schedule-info__text-container">
            <p className="title">Fecha: </p>
            <div className="content">
              {getLabelByKey({ key: "dateStart", type: "date" })}
            </div>
          </div>
        </div>
        <div className="schedule-info__qr">
          <img src={getLabelByKey({ key: "qr" })} alt="QR Code" />
        </div>
      </section>
      <section className="buttons-container">
        {getButtonIfOrderEntryCreated()}
      </section>
      <Modal
        open={modalConfirmDelete}
        title={MODAL_CONFIRM_TITLE}
        handleClose={() => {
          setModalConfirmDelete(false);
        }}
        closeOutSideClick={true}
      >
        <Button
          typeButton={typeButtonEnum.fill}
          extraProps={{ onClick: () => deleteSchedule() }}
          loading={loadingDelete}
        >
          Cancelar
        </Button>
      </Modal>
      {showForm && (
        <section className="form-container">
          <EntryOrderForm
            handleSubmit={saveData}
            loading={formLoading}
            countChickens={
              data ? data.countChickens : scheduling?.data?.countChickens
            }
          />
        </section>
      )}
    </SummaryScheduleWrapper>
  );
};

export default SummarySchedule;
