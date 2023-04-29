import { FC } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../../components/form/Button/Button";
import { ROUTES } from "../../../../constants/routes";
import { typeButtonEnum } from "../../../../models";

// Components

// Styles

import { SummaryScheduleWrapper } from "./styles";

// helpers

//    dateStart": "2023-04-27T00:30:00.000Z",
//   "dateEnd": "2023-04-27T01:00:00.000Z",
//   "supplier": "644a7289aad05166fd10317d",
//   "idCustomer": "644a7289aad05166fd10317d",
//   "idSubCustomer": "644a7289aad05166fd10317d",
//   "user": "geramireze@gmail.com",
//   "type": "PRODUCTION",
//   "status": true,
//   "count": 2000,
//   "code": 731403717,
//   "qr": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABUCAYAAAAcaxDBAAAAHnRFWHRTb2Z0d2FyZQBid2lwLWpzLm1ldGFmbG9vci5jb21Tnbi0AAABn0lEQVR4nO2U0Q3DUAgDs//S7QZFFjag9Cy9L4gxR9XneZ7P8Kukfq/W4/sBFKA/+1U/gBb9ql8cqFvb/uPztxdO+wPU7A9Qs/85oPKfcjVQ9Hf3x/cDKEABCtDkQLHeFUDNAqhZADULoMvzAXrN/9pC2/MBes2/+qCraeBqvSuAmgVQswBqVgk0/cpA4Xp8P4ACtFUHqLk+vd+41EDnF9oWQM0CqFmvAzr9p57Ot57/XKBmvvX85wI1863nPxeome9a/rjcAVW/9AHGBVCzAGrW64GqxN0XTPtV6h4YoM3+8vtrAAAqvmm/SnGg2wHT6h6w3A+gAG0JoGaNA+0CTgee/gHIeQEKUID+FdBtuQ/QXTjdHxdAzQKoWa8Dem0hdUG1ns4DUHMegJrzANScpz2gG+DaQdv9ANXylv0A1fKW/QDV8pb97oXVgOn6dD9Azf0ANfcD1NwP0KZfewBAzQMAah4AUPOANNBtwGqedkCAiobugQA1DwSoWd0F03ncBwdoMQ+goj9AzXniQNPPPb/yq+T2A6jZD6BmP4A6/b5GgjKTUeWQ3AAAAABJRU5ErkJggg==",
//   "codeWorkingTime": 1792790890,
//   "_id": "644d62f7bd213c90ffad9ec7",
//   "__v": 0

type dataSummaryType = {
  dateStart: string;
  dateEnd: string;
  supplier: string;
  idCustomer: string;
  idSubCustomer: string;
  user: string;
  type: string;
  status: true;
  count: number;
  code: number;
  qr: string;
  codeWorkingTime: number;
  _id: string;
  __v: number;
};

interface SummaryScheduleProps {
  data?: dataSummaryType;
}

const SummarySchedule: FC<SummaryScheduleProps> = ({ data }) => {
  const navigate = useNavigate();

  const backToProgramming = () => {
    navigate(ROUTES.PROGRAMMING);
  };

  return (
    <SummaryScheduleWrapper>
      <div className="title">
        <h1>Resumen programación</h1>
      </div>
      <section className="schedule-info">
        <div className="schedule-info__text">
          <div className="schedule-info__text-container">
            <p className="title">Orden: </p>
            <p className="content">_id</p>
            {/* <p className="content">{_id}</p> */}
          </div>
          <div className="schedule-info__text-container">
            <p className="title">Nit: </p>
            <p className="content">code</p>
            {/* <p className="content">{code}</p> */}
          </div>
          <div className="schedule-info__text-container">
            <p className="title">Proveedor: </p>
            <p className="content">supplier</p>
            {/* <p className="content">{supplier}</p> */}
          </div>
          <div className="schedule-info__text-container">
            <p className="title">Cliente: </p>
            <p className="content">idCustomer</p>
            {/* <p className="content">{idCustomer}</p> */}
          </div>
          <div className="schedule-info__text-container">
            <p className="title">Sub-cliente: </p>
            <p className="content">idSubCustomer</p>
            {/* <p className="content">{idSubCustomer}</p> */}
          </div>
          <div className="schedule-info__text-container">
            <p className="title">Cantidad de pollos: </p>
            <p className="content">count</p>
            {/* <p className="content">{count}</p> */}
          </div>
          <div className="schedule-info__text-container">
            <p className="title">Fecha: </p>
            <p className="content">dateStart</p>
            {/* <p className="content">{dateStart}</p> */}
          </div>
        </div>
        <div className="schedule-info__qr">
          {/* <img src={qr} alt="QR Code" /> */}
          <img
            src={
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABUCAYAAAAcaxDBAAAAHnRFWHRTb2Z0d2FyZQBid2lwLWpzLm1ldGFmbG9vci5jb21Tnbi0AAABnklEQVR4nO3VS2rEQBAEUd3/0vbaGFwkGV2SPJEwq+6uzxPY13VdX8u/Nmn99f0EFVTQjwal0y58uj9eX1C4vqBwfUHh+vQf9bFhOmCZ9f0EFTSKoOH9tp6g4X1B4fuCwvcFhe9/HGhbT9CwPn3/+H6CCvpu0DZp/RaovZ9GUDiCwhEUzgh6+jcOdPj8+H6CClqdCwqfb+93ex4/4NsiKBxB4bwe9O5/Gtv3j/cTVNDq/vF+gh4G3V4onedpH/jXuaDZPOO5oNk847mg2TxtvXqAdCAadPv9GEEFFVTQIulC0/n2BxS0fC8o/F5Q+H0N2g6Ynp+eh95nfQF6QEHhAQWFB3w96Ha2Pwidx30AQeEICuffgaZ/xNvf8YXK9/V+ggr6I4LCeTwonbQ+/UHo/oLC/QWF+wsK969B44LhQqfB1vsLKihaX1C4/r8DTQfeBkz7Cwr3FxTuLyjc/3bQtP72vPF+gmbvx/0Ezd6P+wmavR/3mx60oevfDR4PSEdQOILC+XjQ07+pfzpfu8+UeH5B/46g5TztfIIOifp9A+73swRtkvsqAAAAAElFTkSuQmCC"
            }
            alt="QR Code"
          />
        </div>
      </section>
      <section className="buttons-container">
        <Button
          typeButton={typeButtonEnum.stroke}
          extraProps={{ onClick: () => backToProgramming() }}
        >
          Volver a programación
        </Button>
        <Button typeButton={typeButtonEnum.fill}>Imprimir</Button>
      </section>
    </SummaryScheduleWrapper>
  );
};

export default SummarySchedule;
