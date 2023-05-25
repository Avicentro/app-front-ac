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
      <View style={pdfStyles.table} wrap={false}>
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
