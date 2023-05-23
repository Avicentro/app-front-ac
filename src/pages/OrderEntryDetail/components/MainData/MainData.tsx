import { FC } from "react";
import { formatDateCo } from "../../../../helpers/format/formatDateCo";

// // Components

// // pdfStyles

// import { MainDataWrapper } from "./styles";

// // helpers

// interface MainDataProps {
//   orderEntry: any;
// }

// const MainData: FC<MainDataProps> = ({ orderEntry }) => {
//   return (
//     <MainDataWrapper>
//       <thead>
//         <tr>
//           <th className="title" colSpan={8}>
//             Planilla para sesaje de pollo en Pie No.
//           </th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td colSpan={1} className="title">
//             <div className="description-container ">
//               <span className="description">Cliente</span>
//             </div>
//           </td>
//           <td colSpan={7}>
//             <div className="description-container">
//               <span className="description">
//                 {orderEntry?.programming?.customer?.name}
//               </span>
//             </div>
//           </td>
//         </tr>
//         <tr>
//           <td colSpan={1} className="title">
//             <div className="description-container">
//               <span className="description">Proveedor</span>
//             </div>
//           </td>
//           <td colSpan={3}>
//             <div className="description-container">
//               <span className="description">
//                 {orderEntry?.programming?.supplier?.name}
//               </span>
//             </div>
//           </td>
//           <td colSpan={1} className="title">
//             <div className="description-container">
//               <span className="description">Conductor</span>
//             </div>
//           </td>
//           <td colSpan={3}>
//             <div className="description-container">
//               <span className="description">
//                 {orderEntry?.programming?.driver?.name}
//               </span>
//             </div>
//           </td>
//         </tr>
//         <tr>
//           <td colSpan={1} className="title">
//             <div className="description-container">
//               <span className="description">Granja</span>
//             </div>
//           </td>
//           <td colSpan={3}>
//             <div className="description-container">
//               <span className="description">{"GRANJA"}</span>
//             </div>
//           </td>
//           <td colSpan={1} className="title">
//             <div className="description-container">
//               <span className="description">Lote</span>
//             </div>
//           </td>
//           <td colSpan={3}>
//             <div className="description-container">
//               <span className="description">{"LOTE"}</span>
//             </div>
//           </td>
//         </tr>
//         <tr>
//           <td colSpan={1} className="title">
//             <div className="description-container">
//               <span className="description">Ganchos</span>
//             </div>
//           </td>
//           <td colSpan={2}>
//             <div className="description-container">
//               <span className="description">
//                 {orderEntry?.dataOrdenEntry?.hooksDetail?.hooks}
//               </span>
//             </div>
//           </td>
//           <td colSpan={1} className="title">
//             <div className="description-container">
//               <span className="description">Inicial</span>
//             </div>
//           </td>
//           <td colSpan={2}>
//             <div className="description-container">
//               <span className="description">
//                 {orderEntry?.dataOrdenEntry?.hooksDetail?.hookStart}
//               </span>
//             </div>
//           </td>
//           <td colSpan={1} className="title">
//             <div className="description-container">
//               <span className="description">Final</span>
//             </div>
//           </td>
//           <td colSpan={1}>
//             <div className="description-container">
//               <span className="description">
//                 {orderEntry?.dataOrdenEntry?.hooksDetail?.hookEnd}
//               </span>
//             </div>
//           </td>
//         </tr>
//         <tr>
//           <td colSpan={1} className="title">
//             <div className="description-container">
//               <span className="description">Vacios</span>
//             </div>
//           </td>
//           <td colSpan={1}>
//             <div className="description-container">
//               <span className="description">
//                 {orderEntry?.dataOrdenEntry?.hooksDetail?.hookEmpty}
//               </span>
//             </div>
//           </td>
//           <td colSpan={1} className="title">
//             <div className="description-container">
//               <span className="description">N° Vueltas</span>
//             </div>
//           </td>
//           <td colSpan={2}>
//             <div className="description-container">
//               <span className="description">
//                 {orderEntry?.dataOrdenEntry?.hooksDetail?.turns}
//               </span>
//             </div>
//           </td>
//           <td colSpan={1} className="title">
//             <div className="description-container">
//               <span className="description">En linea</span>
//             </div>
//           </td>
//           <td colSpan={2}>
//             <div className="description-container">
//               <span className="description">{"EN LINEA"}</span>
//             </div>
//           </td>
//         </tr>
//         <tr>
//           <td colSpan={1} className="title">
//             <div className="description-container">
//               <span className="description">Fecha</span>
//             </div>
//           </td>
//           <td colSpan={2}>
//             <div className="description-container">
//               <span className="description">
//                 {formatDateCo({
//                   date: orderEntry?.dataOrdenEntry?.dateTimesOrderEntry
//                     ?.arrivalTime,
//                   addHours: true,
//                 })}
//               </span>
//             </div>
//           </td>
//           <td colSpan={1} className="title">
//             <div className="description-container">
//               <span className="description">Placa</span>
//             </div>
//           </td>
//           <td colSpan={2}>
//             <div className="description-container">
//               <span className="description">{"PLACA"}</span>
//             </div>
//           </td>
//           <td colSpan={1} className="title">
//             <div className="description-container">
//               <span className="description">Localidad</span>
//             </div>
//           </td>
//           <td colSpan={1}>
//             <div className="description-container">
//               <span className="description">{"LOCALIDAD"}</span>
//             </div>
//           </td>
//         </tr>
//         <tr>
//           <td colSpan={1} className="title">
//             <div className="description-container">
//               <span className="description">N°</span>
//             </div>
//           </td>
//           <td colSpan={1} className="title">
//             <div className="description-container">
//               <span className="description">HUACALES</span>
//             </div>
//           </td>
//           <td colSpan={1} className="title">
//             <div className="description-container">
//               <span className="description">POLLOS</span>
//             </div>
//           </td>
//           <td colSpan={2} className="title">
//             <div className="description-container">
//               <span className="description">BRUTO</span>
//             </div>
//           </td>
//           <td colSpan={1} className="title">
//             <div className="description-container">
//               <span className="description">DESTARE</span>
//             </div>
//           </td>
//           <td colSpan={2} className="title">
//             <div className="description-container">
//               <span className="description">NETO</span>
//             </div>
//           </td>
//         </tr>
//         {orderEntry?.WeighingsList?.map((weighing: any, index: number) => (
//           <tr>
//             <td colSpan={1}>
//               <div className="description-container">
//                 <span className="description">{index + 1}</span>
//               </div>
//             </td>
//             <td colSpan={1}>
//               <div className="description-container">
//                 <span className="description">{weighing.baskets}</span>
//               </div>
//             </td>
//             <td colSpan={1}>
//               <div className="description-container">
//                 <span className="description">{weighing.chickens}</span>
//               </div>
//             </td>
//             <td colSpan={2}>
//               <div className="description-container">
//                 <span className="description">
//                   {weighing.grossWeightWeighing}
//                 </span>
//               </div>
//             </td>
//             <td colSpan={1}>
//               <div className="description-container">
//                 <span className="description">
//                   {weighing.basketWeightWeighing}
//                 </span>
//               </div>
//             </td>
//             <td colSpan={2}>
//               <div className="description-container">
//                 <span className="description">
//                   {weighing.netWeightWeighing}
//                 </span>
//               </div>
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </MainDataWrapper>
//   );
// };

// export default MainData;

import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { pdfStyles } from "../../styles";

interface MainDataProps {
  orderEntry: any;
}

const MainData: FC<MainDataProps> = ({ orderEntry }) => {
  return (
    <View>
      <View style={pdfStyles.tableRow}>
        <View style={[pdfStyles.tableCol, pdfStyles.tableHeader]}>
          <Text style={[pdfStyles.tableCell, pdfStyles.titleCell]}>
            Planilla para sesaje de pollo en Pie No.
          </Text>
        </View>
      </View>
      <View style={pdfStyles.tableRow}>
        <View style={pdfStyles.tableCol}>
          <View>
            <Text style={[pdfStyles.tableCell, pdfStyles.titleCell]}>
              Cliente
            </Text>
          </View>
        </View>
        <View style={pdfStyles.tableCol}>
          <View>
            <Text style={pdfStyles.tableCell}>
              {orderEntry?.programming?.customer?.name}
            </Text>
          </View>
        </View>
      </View>
      <View style={pdfStyles.tableRow}>
        <View style={pdfStyles.tableCol}>
          <View>
            <Text style={[pdfStyles.tableCell, pdfStyles.titleCell]}>
              Proveedor
            </Text>
          </View>
        </View>
        <View style={pdfStyles.tableCol}>
          <View>
            <Text style={pdfStyles.tableCell}>
              {orderEntry?.programming?.supplier?.name}
            </Text>
          </View>
        </View>
        <View style={pdfStyles.tableCol}>
          <View>
            <Text style={[pdfStyles.tableCell, pdfStyles.titleCell]}>
              Conductor
            </Text>
          </View>
        </View>
        <View style={pdfStyles.tableCol}>
          <View>
            <Text style={pdfStyles.tableCell}>
              {orderEntry?.programming?.driver?.name}
            </Text>
          </View>
        </View>
      </View>
      <View style={pdfStyles.tableRow}>
        <View style={pdfStyles.tableCol}>
          <View>
            <Text style={[pdfStyles.tableCell, pdfStyles.titleCell]}>
              Granja
            </Text>
          </View>
        </View>
        <View style={pdfStyles.tableCol}>
          <View>
            <Text style={pdfStyles.tableCell}>GRANJA</Text>
          </View>
        </View>
        <View style={pdfStyles.tableCol}>
          <View>
            <Text style={[pdfStyles.tableCell, pdfStyles.titleCell]}>Lote</Text>
          </View>
        </View>
        <View style={pdfStyles.tableCol}>
          <View>
            <Text style={pdfStyles.tableCell}>LOTE</Text>
          </View>
        </View>
      </View>
      <View style={pdfStyles.tableRow}>
        <View style={pdfStyles.tableCol}>
          <View>
            <Text style={[pdfStyles.tableCell, pdfStyles.titleCell]}>
              Ganchos
            </Text>
          </View>
        </View>
        <View style={pdfStyles.tableCol}>
          <View>
            <Text style={pdfStyles.tableCell}>
              {orderEntry?.dataOrdenEntry?.hooksDetail?.hooks}
            </Text>
          </View>
        </View>
        <View style={pdfStyles.tableCol}>
          <View>
            <Text style={[pdfStyles.tableCell, pdfStyles.titleCell]}>
              Inicial
            </Text>
          </View>
        </View>
        <View style={pdfStyles.tableCol}>
          <View>
            <Text style={pdfStyles.tableCell}>
              {orderEntry?.dataOrdenEntry?.hooksDetail?.hookStart}
            </Text>
          </View>
        </View>
        <View style={pdfStyles.tableCol}>
          <View>
            <Text style={[pdfStyles.tableCell, pdfStyles.titleCell]}>
              Final
            </Text>
          </View>
        </View>
        <View style={pdfStyles.tableCol}>
          <View>
            <Text style={pdfStyles.tableCell}>
              {orderEntry?.dataOrdenEntry?.hooksDetail?.hookEnd}
            </Text>
          </View>
        </View>
      </View>
      <View style={pdfStyles.tableRow}>
        <View style={pdfStyles.tableCol}>
          <View>
            <Text style={[pdfStyles.tableCell, pdfStyles.titleCell]}>
              Vacios
            </Text>
          </View>
        </View>
        <View style={pdfStyles.tableCol}>
          <View>
            <Text style={pdfStyles.tableCell}>
              {orderEntry?.dataOrdenEntry?.hooksDetail?.hookEmpty}
            </Text>
          </View>
        </View>
        <View style={pdfStyles.tableCol}>
          <View>
            <Text style={[pdfStyles.tableCell, pdfStyles.titleCell]}>
              N° Vueltas
            </Text>
          </View>
        </View>
        <View style={pdfStyles.tableCol}>
          <View>
            <Text style={pdfStyles.tableCell}>
              {orderEntry?.dataOrdenEntry?.hooksDetail?.turns}
            </Text>
          </View>
        </View>
        <View style={pdfStyles.tableCol}>
          <View>
            <Text style={[pdfStyles.tableCell, pdfStyles.titleCell]}>
              En linea
            </Text>
          </View>
        </View>
        <View style={pdfStyles.tableCol}>
          <View>
            <Text style={pdfStyles.tableCell}>EN LINEA</Text>
          </View>
        </View>
      </View>
      <View style={pdfStyles.tableRow}>
        <View style={[pdfStyles.tableCol, pdfStyles.titleCell]}>
          <View>
            <Text style={[pdfStyles.tableCell]}>Fecha</Text>
          </View>
        </View>
        <View style={pdfStyles.tableCol}>
          <View>
            <Text style={pdfStyles.tableCell}>
              {formatDateCo({
                date: orderEntry?.dataOrdenEntry?.dateTimesOrderEntry
                  ?.arrivalTime,
                addHours: true,
              })}
            </Text>
          </View>
        </View>
        <View style={[pdfStyles.tableCol, pdfStyles.titleCell]}>
          <Text style={[pdfStyles.tableCell]}>Placa</Text>
        </View>
        <View style={pdfStyles.tableCol}>
          <View>
            <Text style={pdfStyles.tableCell}>PLACA</Text>
          </View>
        </View>
        <View style={[pdfStyles.tableCol, pdfStyles.titleCell]}>
          <Text style={[pdfStyles.tableCell]}>Localidad</Text>
        </View>
        <View style={[pdfStyles.tableCol]}>
          <Text style={pdfStyles.tableCell}>LOCALIDAD</Text>
        </View>
      </View>
      <View style={pdfStyles.tableRow}>
        <View style={pdfStyles.tableCol}>
          <View>
            <Text style={[pdfStyles.tableCell, pdfStyles.titleCell]}>N°</Text>
          </View>
        </View>
        <View style={pdfStyles.tableCol}>
          <View>
            <Text style={[pdfStyles.tableCell, pdfStyles.titleCell]}>
              HUACALES
            </Text>
          </View>
        </View>
        <View style={pdfStyles.tableCol}>
          <View>
            <Text style={[pdfStyles.tableCell, pdfStyles.titleCell]}>
              POLLOS
            </Text>
          </View>
        </View>
        <View style={pdfStyles.tableCol}>
          <View>
            <Text style={[pdfStyles.tableCell, pdfStyles.titleCell]}>
              BRUTO
            </Text>
          </View>
        </View>
        <View style={pdfStyles.tableCol}>
          <View>
            <Text style={[pdfStyles.tableCell, pdfStyles.titleCell]}>
              DESTARE
            </Text>
          </View>
        </View>
        <View style={pdfStyles.tableCol}>
          <View>
            <Text style={[pdfStyles.tableCell, pdfStyles.titleCell]}>NETO</Text>
          </View>
        </View>
      </View>
      {orderEntry?.WeighingsList?.map((weighing: any, index: number) => (
        <View style={pdfStyles.tableRow}>
          <View style={pdfStyles.tableCol}>
            <View>
              <Text style={pdfStyles.tableCell}>{index + 1}</Text>
            </View>
          </View>
          <View style={pdfStyles.tableCol}>
            <View>
              <Text style={pdfStyles.tableCell}>{weighing.baskets}</Text>
            </View>
          </View>
          <View style={pdfStyles.tableCol}>
            <View>
              <Text style={pdfStyles.tableCell}>{weighing.chickens}</Text>
            </View>
          </View>
          <View style={pdfStyles.tableCol}>
            <View>
              <Text style={pdfStyles.tableCell}>
                {weighing.grossWeightWeighing}
              </Text>
            </View>
          </View>
          <View style={pdfStyles.tableCol}>
            <View>
              <Text style={pdfStyles.tableCell}>
                {weighing.basketWeightWeighing}
              </Text>
            </View>
          </View>
          <View style={pdfStyles.tableCol}>
            <View>
              <Text style={pdfStyles.tableCell}>
                {weighing.netWeightWeighing}
              </Text>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

export default MainData;
