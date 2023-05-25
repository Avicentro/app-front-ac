import { FC } from "react";
import { Text, View } from "@react-pdf/renderer";

// Components

// pdfStyles

import { CountPartsWrapper } from "./styles";
import { pdfStyles } from "../../styles";

// helpers

interface CountPartsProps {
  chickenComponents: any;
}

const CountParts: FC<CountPartsProps> = ({ chickenComponents }) => {
  return (
    <CountPartsWrapper>
      <View style={pdfStyles.table} wrap={false}>
        <View style={pdfStyles.tableRow}>
          <View style={pdfStyles.tableCol}>
            <Text style={[pdfStyles.tableCell, pdfStyles.titleCell]}>
              Corazones
            </Text>
          </View>
          <View style={pdfStyles.tableCol}>
            <Text style={[pdfStyles.tableCell]}>{chickenComponents.heart}</Text>
          </View>
        </View>
        <View style={pdfStyles.tableRow}>
          <View style={pdfStyles.tableCol}>
            <Text style={[pdfStyles.tableCell, pdfStyles.titleCell]}>
              Hígados
            </Text>
          </View>
          <View style={pdfStyles.tableCol}>
            <Text style={[pdfStyles.tableCell]}>{chickenComponents.liver}</Text>
          </View>
        </View>
        <View style={pdfStyles.tableRow}>
          <View style={pdfStyles.tableCol}>
            <Text style={[pdfStyles.tableCell, pdfStyles.titleCell]}>
              Mollejas
            </Text>
          </View>
          <View style={pdfStyles.tableCol}>
            <Text style={[pdfStyles.tableCell]}>
              {chickenComponents.gizzard}
            </Text>
          </View>
        </View>
        <View style={pdfStyles.tableRow}>
          <View style={pdfStyles.tableCol}>
            <Text style={[pdfStyles.tableCell, pdfStyles.titleCell]}>
              cabezas
            </Text>
          </View>
          <View style={pdfStyles.tableCol}>
            <Text style={[pdfStyles.tableCell]}>{chickenComponents.head}</Text>
          </View>
        </View>
        <View style={pdfStyles.tableRow}>
          <View style={pdfStyles.tableCol}>
            <Text style={[pdfStyles.tableCell, pdfStyles.titleCell]}>
              Cuellos
            </Text>
          </View>
          <View style={pdfStyles.tableCol}>
            <Text style={[pdfStyles.tableCell]}>{chickenComponents.neck}</Text>
          </View>
        </View>
        <View style={pdfStyles.tableRow}>
          <View style={pdfStyles.tableCol}>
            <Text style={[pdfStyles.tableCell, pdfStyles.titleCell]}>
              Pechugas
            </Text>
          </View>
          <View style={pdfStyles.tableCol}>
            <Text style={[pdfStyles.tableCell]}>
              {chickenComponents.breast}
            </Text>
          </View>
        </View>
        <View style={pdfStyles.tableRow}>
          <View style={pdfStyles.tableCol}>
            <Text style={[pdfStyles.tableCell, pdfStyles.titleCell]}>Alas</Text>
          </View>
          <View style={pdfStyles.tableCol}>
            <Text style={[pdfStyles.tableCell]}>{chickenComponents.wings}</Text>
          </View>
        </View>
        <View style={pdfStyles.tableRow}>
          <View style={pdfStyles.tableCol}>
            <Text style={[pdfStyles.tableCell, pdfStyles.titleCell]}>
              Muslos
            </Text>
          </View>
          <View style={pdfStyles.tableCol}>
            <Text style={[pdfStyles.tableCell]}>
              {chickenComponents.thighs}
            </Text>
          </View>
        </View>
        <View style={pdfStyles.tableRow}>
          <View style={pdfStyles.tableCol}>
            <Text style={[pdfStyles.tableCell, pdfStyles.titleCell]}>
              Piernas
            </Text>
          </View>
          <View style={pdfStyles.tableCol}>
            <Text style={[pdfStyles.tableCell]}>{chickenComponents.legs}</Text>
          </View>
        </View>
      </View>
    </CountPartsWrapper>
  );
};

export default CountParts;
