import { FC } from "react";
import { formatDateCo } from "../../../../../../helpers/format/formatDateCo";
import { orderEntry } from "../../__mock__/orderEntry";

// Components

// Styles

import { EntryOrderTableWrapper } from "./styles";

// helpers

interface EntryOrderTableProps {}

const EntryOrderTable: FC<EntryOrderTableProps> = () => {
  return (
    <EntryOrderTableWrapper>
      <table>
        <thead>
          <tr>
            <th className="title" colSpan={8}>
              Planilla para sesaje de pollo en Pie No.
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={1} className="title">
              <div className="description-container ">
                <span className="description">Cliente</span>
              </div>
            </td>
            <td colSpan={7}>
              <div className="description-container">
                <span className="description">
                  {orderEntry.programming.customer.name}
                </span>
              </div>
            </td>
          </tr>
          <tr>
            <td colSpan={1} className="title">
              <div className="description-container">
                <span className="description">Proveedor</span>
              </div>
            </td>
            <td colSpan={3}>
              <div className="description-container">
                <span className="description">
                  {orderEntry.programming.supplier.name}
                </span>
              </div>
            </td>
            <td colSpan={1} className="title">
              <div className="description-container">
                <span className="description">Conductor</span>
              </div>
            </td>
            <td colSpan={3}>
              <div className="description-container">
                <span className="description">
                  {orderEntry.programming.driver.name}
                </span>
              </div>
            </td>
          </tr>
          <tr>
            <td colSpan={1} className="title">
              <div className="description-container">
                <span className="description">Granja</span>
              </div>
            </td>
            <td colSpan={3}>
              <div className="description-container">
                <span className="description">{"GRANJA"}</span>
              </div>
            </td>
            <td colSpan={1} className="title">
              <div className="description-container">
                <span className="description">Lote</span>
              </div>
            </td>
            <td colSpan={3}>
              <div className="description-container">
                <span className="description">{"LOTE"}</span>
              </div>
            </td>
          </tr>
          <tr>
            <td colSpan={1} className="title">
              <div className="description-container">
                <span className="description">Ganchos</span>
              </div>
            </td>
            <td colSpan={2}>
              <div className="description-container">
                <span className="description">
                  {orderEntry.dataOrdenEntry.hooksDetail.hooks}
                </span>
              </div>
            </td>
            <td colSpan={1} className="title">
              <div className="description-container">
                <span className="description">Inicial</span>
              </div>
            </td>
            <td colSpan={2}>
              <div className="description-container">
                <span className="description">
                  {orderEntry.dataOrdenEntry.hooksDetail.hookStart}
                </span>
              </div>
            </td>
            <td colSpan={1} className="title">
              <div className="description-container">
                <span className="description">Final</span>
              </div>
            </td>
            <td colSpan={1}>
              <div className="description-container">
                <span className="description">
                  {orderEntry.dataOrdenEntry.hooksDetail.hookEnd}
                </span>
              </div>
            </td>
          </tr>
          <tr>
            <td colSpan={1} className="title">
              <div className="description-container">
                <span className="description">Vacios</span>
              </div>
            </td>
            <td colSpan={1}>
              <div className="description-container">
                <span className="description">
                  {orderEntry.dataOrdenEntry.hooksDetail.hookEmpty}
                </span>
              </div>
            </td>
            <td colSpan={1} className="title">
              <div className="description-container">
                <span className="description">N° Vueltas</span>
              </div>
            </td>
            <td colSpan={2}>
              <div className="description-container">
                <span className="description">
                  {orderEntry.dataOrdenEntry.hooksDetail.turns}
                </span>
              </div>
            </td>
            <td colSpan={1} className="title">
              <div className="description-container">
                <span className="description">En linea</span>
              </div>
            </td>
            <td colSpan={2}>
              <div className="description-container">
                <span className="description">{"EN LINEA"}</span>
              </div>
            </td>
          </tr>
          <tr>
            <td colSpan={1} className="title">
              <div className="description-container">
                <span className="description">Fecha</span>
              </div>
            </td>
            <td colSpan={2}>
              <div className="description-container">
                <span className="description">
                  {formatDateCo({
                    date: orderEntry.dataOrdenEntry.dateTimesOrderEntry
                      .arrivalTime,
                    addHours: true,
                  })}
                </span>
              </div>
            </td>
            <td colSpan={1} className="title">
              <div className="description-container">
                <span className="description">Placa</span>
              </div>
            </td>
            <td colSpan={2}>
              <div className="description-container">
                <span className="description">{"PLACA"}</span>
              </div>
            </td>
            <td colSpan={1} className="title">
              <div className="description-container">
                <span className="description">Localidad</span>
              </div>
            </td>
            <td colSpan={1}>
              <div className="description-container">
                <span className="description">{"LOCALIDAD"}</span>
              </div>
            </td>
          </tr>
          <tr>
            <td colSpan={1} className="title">
              <div className="description-container">
                <span className="description">N°</span>
              </div>
            </td>
            <td colSpan={1} className="title">
              <div className="description-container">
                <span className="description">HUACALES</span>
              </div>
            </td>
            <td colSpan={1} className="title">
              <div className="description-container">
                <span className="description">POLLOS</span>
              </div>
            </td>
            <td colSpan={2} className="title">
              <div className="description-container">
                <span className="description">BRUTO</span>
              </div>
            </td>
            <td colSpan={1} className="title">
              <div className="description-container">
                <span className="description">DESTARE</span>
              </div>
            </td>
            <td colSpan={2} className="title">
              <div className="description-container">
                <span className="description">NETO</span>
              </div>
            </td>
          </tr>
          {orderEntry.weighingsList.map((weighing, index) => (
            <tr>
              <td colSpan={1}>
                <div className="description-container">
                  <span className="description">{index + 1}</span>
                </div>
              </td>
              <td colSpan={1}>
                <div className="description-container">
                  <span className="description">{weighing.baskets}</span>
                </div>
              </td>
              <td colSpan={1}>
                <div className="description-container">
                  <span className="description">{weighing.chickens}</span>
                </div>
              </td>
              <td colSpan={2}>
                <div className="description-container">
                  <span className="description">
                    {weighing.grossWeightWeighing}
                  </span>
                </div>
              </td>
              <td colSpan={1}>
                <div className="description-container">
                  <span className="description">
                    {weighing.basketWeightWeighing}
                  </span>
                </div>
              </td>
              <td colSpan={2}>
                <div className="description-container">
                  <span className="description">
                    {weighing.netWeightWeighing}
                  </span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </EntryOrderTableWrapper>
  );
};

export default EntryOrderTable;
