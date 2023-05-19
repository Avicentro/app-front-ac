import { FC, useCallback, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

// Components
import EditField from "../../../../components/form/EditField/EditField";
import BackButton from "../../../../components/display/BackButton/BackButton";

// Styles
import { SummaryScheduleWrapper } from "./styles";

// helpers
import { ROUTES } from "../../../../constants/routes";
import { useScheduling } from "../../../../hook/useSchedule";
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
import EntryOrderTable from "./components/EntryOrderTable/EntryOrderTable";

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
};

interface SummaryScheduleProps {
  data?: dataSummaryType;
}

const SummarySchedule: FC<SummaryScheduleProps> = ({ data }) => {
  const [loading, setLoading] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const navigate = useNavigate();
  const { orderId = "" } = useParams();
  const { data: scheduling } = useScheduling(orderId, data);

  const updateProgrammingMutation = useUpdateProgrammingMutation(
    data ? data.code : scheduling?.data?.code
  );
  const createOrderEntry = useCreateOrderEntryMutation();

  const backToProgramming = () => {
    navigate(ROUTES.PROGRAMMING);
  };

  const changeValue = async (data: any) => {
    setLoading(true);
    try {
      await updateProgrammingMutation.mutateAsync(data);
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
        code: data ? data.code : scheduling?.data?.code,
        startTime: data ? data.code : scheduling?.data?.dateStart,
        endTime: data ? data.code : scheduling?.data?.dateEnd,
      };
      await createOrderEntry.mutateAsync(dataToSend);
    } catch (error) {
      console.error(error);
    } finally {
      setFormLoading(false);
    }
  };

  return (
    <SummaryScheduleWrapper>
      <BackButton />
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
                shouldEdit
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
                shouldEdit
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
                shouldEdit
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
                shouldEdit
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
                shouldEdit
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
                shouldEdit
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
      {/* <section className="buttons-container">
        {!showForm && (
          <Button
            typeButton={typeButtonEnum.fill}
            extraProps={{ onClick: () => setShowForm(true) }}
          >
            Crear orden de entrada
          </Button>
        )}
      </section>
      {showForm && (
        <section className="form-container">
          <EntryOrderForm handleSubmit={saveData} loading={formLoading} />
        </section>
      )}
      <EntryOrderTable /> */}
    </SummaryScheduleWrapper>
  );
};

export default SummarySchedule;
