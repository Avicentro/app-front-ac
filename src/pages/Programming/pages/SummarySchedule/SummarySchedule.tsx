import { FC } from "react";
import { useNavigate, useParams } from "react-router-dom";

// Components
import Button from "../../../../components/form/Button/Button";
import BackButton from "../../../../components/display/BackButton/BackButton";

// Styles
import { SummaryScheduleWrapper } from "./styles";

// helpers
import { typeButtonEnum } from "../../../../models";
import { ROUTES } from "../../../../constants/routes";
import { useScheduling } from "../../../../hook/useSchedule";
import { formatDateCo } from "../../../../helpers/format/formatDateCo";

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
  const navigate = useNavigate();
  const { orderId = "" } = useParams();

  const { data: scheduling } = useScheduling(orderId, data);

  const backToProgramming = () => {
    navigate(ROUTES.PROGRAMMING);
  };

  console.log("data", scheduling);

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
            <p className="content">
              {data ? data?.code : scheduling?.data?.code}
            </p>
          </div>
          <div className="schedule-info__text-container">
            <p className="title">Nit: </p>
            <p className="content">
              {data ? data?.nit : scheduling?.data?.nit}
            </p>
          </div>
          <div className="schedule-info__text-container">
            <p className="title">Proveedor: </p>
            <p className="content">
              {data
                ? data?.supplier["name" as any]
                : scheduling?.data?.supplier?.name}
            </p>
          </div>
          <div className="schedule-info__text-container">
            <p className="title">Cliente: </p>
            <p className="content">
              {data
                ? data?.Customer["name" as any]
                : scheduling?.data?.Customer.name}
            </p>
          </div>
          <div className="schedule-info__text-container">
            <p className="title">Sub-cliente: </p>
            <p className="content">
              {data
                ? data?.SubCustomer["name" as any]
                : scheduling?.data?.SubCustomer.name}
            </p>
          </div>
          <div className="schedule-info__text-container">
            <p className="title">Cantidad de pollos: </p>
            <p className="content">
              {data ? data?.countChickens : scheduling?.data?.countChickens}
            </p>
          </div>
          <div className="schedule-info__text-container">
            <p className="title">Fecha: </p>
            <p className="content">
              {data
                ? formatDateCo({ date: data?.dateStart, addHours: true })
                : formatDateCo({
                    date: scheduling?.data?.dateStart,
                    addHours: true,
                  })}
            </p>
          </div>
        </div>
        <div className="schedule-info__qr">
          <img src={data ? data?.qr : scheduling?.data?.qr} alt="QR Code" />
        </div>
      </section>
      {/* <section className="buttons-container">
        <Button typeButton={typeButtonEnum.fill}>Imprimir</Button>
      </section> */}
    </SummaryScheduleWrapper>
  );
};

export default SummarySchedule;
