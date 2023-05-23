import { FC } from "react";
import { Text, View } from "@react-pdf/renderer";

// Components

// pdfStyles

import { RemissionsWrapper } from "./styles";
import { pdfStyles } from "../../styles";

// helpers

interface RemissionsProps {
  orderEntry: any;
}

const Remissions: FC<RemissionsProps> = ({ orderEntry }) => {
  return (
    <RemissionsWrapper>
      {/* <tbody>
        <tr>
          <td colSpan={1} className="title">
            <div className="description-container ">
              <span className="description">POLLOS REMISIONADOS</span>
            </div>
          </td>
          <td colSpan={7}>
            <div className="description-container">
              <span className="description">
                {
                  orderEntry.dataOrdenEntry.remisionadosChickens
                    .totalChickensRemisionados
                }
              </span>
            </div>
          </td>
        </tr>
        <tr>
          <td colSpan={1} className="title">
            <div className="description-container ">
              <span className="description">POLLOS POR HUACAL</span>
            </div>
          </td>
          <td colSpan={7}>
            <div className="description-container">
              <span className="description">
                {orderEntry.dataOrdenEntry.remisionadosChickens.chickensBasket}
              </span>
            </div>
          </td>
        </tr>
        <tr>
          <td colSpan={1} className="title">
            <div className="description-container ">
              <span className="description">NUMERO DE HUACALES</span>
            </div>
          </td>
          <td colSpan={7}>
            <div className="description-container">
              <span className="description">
                {orderEntry.dataOrdenEntry.remisionadosChickens.basket}
              </span>
            </div>
          </td>
        </tr>
        <tr>
          <td colSpan={1} className="title">
            <div className="description-container ">
              <span className="description">DIFERENCIA</span>
            </div>
          </td>
          <td colSpan={7}>
            <div className="description-container">
              <span className="description">
                {
                  orderEntry.dataOrdenEntry.remisionadosChickens
                    .chickenDifferentiation
                }
              </span>
            </div>
          </td>
        </tr>
        <tr>
          <td colSpan={1} className="title">
            <div className="description-container ">
              <span className="description">POLLOS ENVIADOS</span>
            </div>
          </td>
          <td colSpan={7}>
            <div className="description-container">
              <span className="description">
                {orderEntry.dataOrdenEntry.remisionadosChickens.chickensSend}
              </span>
            </div>
          </td>
        </tr>
      </tbody> */}
      <View style={pdfStyles.table}>
        <View style={pdfStyles.tableRow}>
          <View style={pdfStyles.tableCol}>
            <Text style={[pdfStyles.tableCell, pdfStyles.titleCell]}>
              POLLOS REMISIONADOS
            </Text>
          </View>
          <View style={pdfStyles.tableCol}>
            <Text style={[pdfStyles.tableCell]}>
              {
                orderEntry.dataOrdenEntry.remisionadosChickens
                  .totalChickensRemisionados
              }
            </Text>
          </View>
        </View>
        <View style={pdfStyles.tableRow}>
          <View style={pdfStyles.tableCol}>
            <Text style={[pdfStyles.tableCell, pdfStyles.titleCell]}>
              POLLOS POR HUACAL
            </Text>
          </View>
          <View style={pdfStyles.tableCol}>
            <Text style={[pdfStyles.tableCell]}>
              {orderEntry.dataOrdenEntry.remisionadosChickens.chickensBasket}
            </Text>
          </View>
        </View>
        <View style={pdfStyles.tableRow}>
          <View style={pdfStyles.tableCol}>
            <Text style={[pdfStyles.tableCell, pdfStyles.titleCell]}>
              NUMERO DE HUACALES
            </Text>
          </View>
          <View style={pdfStyles.tableCol}>
            <Text style={[pdfStyles.tableCell]}>
              {orderEntry.dataOrdenEntry.remisionadosChickens.basket}
            </Text>
          </View>
        </View>
        <View style={pdfStyles.tableRow}>
          <View style={pdfStyles.tableCol}>
            <Text style={[pdfStyles.tableCell, pdfStyles.titleCell]}>
              DIFERENCIA
            </Text>
          </View>
          <View style={pdfStyles.tableCol}>
            <Text style={[pdfStyles.tableCell]}>
              {
                orderEntry.dataOrdenEntry.remisionadosChickens
                  .chickenDifferentiation
              }
            </Text>
          </View>
        </View>
        <View style={pdfStyles.tableRow}>
          <View style={pdfStyles.tableCol}>
            <Text style={[pdfStyles.tableCell, pdfStyles.titleCell]}>
              POLLOS ENVIADOS
            </Text>
          </View>
          <View style={pdfStyles.tableCol}>
            <Text style={[pdfStyles.tableCell]}>
              {orderEntry.dataOrdenEntry.remisionadosChickens.chickensSend}
            </Text>
          </View>
        </View>
      </View>
    </RemissionsWrapper>
  );
};

export default Remissions;
