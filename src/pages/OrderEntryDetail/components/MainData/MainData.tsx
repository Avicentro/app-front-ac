import { FC } from "react";
import { formatDateCo } from "../../../../helpers/format/formatDateCo";

import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { pdfStyles } from "../../styles";

interface MainDataProps {
  orderEntry: any;
}

const MainData: FC<MainDataProps> = ({ orderEntry }) => {
  return (
    <View style={pdfStyles.table}>
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
            <Text style={pdfStyles.tableCell}>
              {orderEntry?.dataOrdenEntry?.hooksDetail?.hooks}
            </Text>
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
          <Text style={pdfStyles.tableCell}>
            {orderEntry?.programming?.city?.name}
          </Text>
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
