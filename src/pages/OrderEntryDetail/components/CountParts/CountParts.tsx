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
      <View style={pdfStyles.table}>
        <View style={pdfStyles.tableRow}>
          <View style={pdfStyles.tableCol}>
            <Text style={[pdfStyles.tableCell, pdfStyles.titleCell]}>
              Corazón
            </Text>
          </View>
          <View style={pdfStyles.tableCol}>
            <Text style={[pdfStyles.tableCell]}>{chickenComponents.heart}</Text>
          </View>
        </View>
        <View style={pdfStyles.tableRow}>
          <View style={pdfStyles.tableCol}>
            <Text style={[pdfStyles.tableCell, pdfStyles.titleCell]}>
              Hígado
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
              Intestino grueso
            </Text>
          </View>
          <View style={pdfStyles.tableCol}>
            <Text style={[pdfStyles.tableCell]}>
              {chickenComponents.largeIntestine}
            </Text>
          </View>
        </View>
        <View style={pdfStyles.tableRow}>
          <View style={pdfStyles.tableCol}>
            <Text style={[pdfStyles.tableCell, pdfStyles.titleCell]}>
              intestino delgado
            </Text>
          </View>
          <View style={pdfStyles.tableCol}>
            <Text style={[pdfStyles.tableCell]}>
              {chickenComponents.smallIntestine}
            </Text>
          </View>
        </View>
        <View style={pdfStyles.tableRow}>
          <View style={pdfStyles.tableCol}>
            <Text style={[pdfStyles.tableCell, pdfStyles.titleCell]}>
              Riñones
            </Text>
          </View>
          <View style={pdfStyles.tableCol}>
            <Text style={[pdfStyles.tableCell]}>
              {chickenComponents.kidneys}
            </Text>
          </View>
        </View>
        <View style={pdfStyles.tableRow}>
          <View style={pdfStyles.tableCol}>
            <Text style={[pdfStyles.tableCell, pdfStyles.titleCell]}>
              Pulmones
            </Text>
          </View>
          <View style={pdfStyles.tableCol}>
            <Text style={[pdfStyles.tableCell]}>{chickenComponents.lungs}</Text>
          </View>
        </View>
        <View style={pdfStyles.tableRow}>
          <View style={pdfStyles.tableCol}>
            <Text style={[pdfStyles.tableCell, pdfStyles.titleCell]}>
              cabeza
            </Text>
          </View>
          <View style={pdfStyles.tableCol}>
            <Text style={[pdfStyles.tableCell]}>{chickenComponents.head}</Text>
          </View>
        </View>
        <View style={pdfStyles.tableRow}>
          <View style={pdfStyles.tableCol}>
            <Text style={[pdfStyles.tableCell, pdfStyles.titleCell]}>Pico</Text>
          </View>
          <View style={pdfStyles.tableCol}>
            <Text style={[pdfStyles.tableCell]}>{chickenComponents.peak}</Text>
          </View>
        </View>
        <View style={pdfStyles.tableRow}>
          <View style={pdfStyles.tableCol}>
            <Text style={[pdfStyles.tableCell, pdfStyles.titleCell]}>Ojos</Text>
          </View>
          <View style={pdfStyles.tableCol}>
            <Text style={[pdfStyles.tableCell]}>{chickenComponents.eyes}</Text>
          </View>
        </View>
        <View style={pdfStyles.tableRow}>
          <View style={pdfStyles.tableCol}>
            <Text style={[pdfStyles.tableCell, pdfStyles.titleCell]}>
              Cresta
            </Text>
          </View>
          <View style={pdfStyles.tableCol}>
            <Text style={[pdfStyles.tableCell]}>{chickenComponents.ridge}</Text>
          </View>
        </View>
        <View style={pdfStyles.tableRow}>
          <View style={pdfStyles.tableCol}>
            <Text style={[pdfStyles.tableCell, pdfStyles.titleCell]}>
              Barbilla
            </Text>
          </View>
          <View style={pdfStyles.tableCol}>
            <Text style={[pdfStyles.tableCell]}>{chickenComponents.chins}</Text>
          </View>
        </View>
        <View style={pdfStyles.tableRow}>
          <View style={pdfStyles.tableCol}>
            <Text style={[pdfStyles.tableCell, pdfStyles.titleCell]}>
              Cuello
            </Text>
          </View>
          <View style={pdfStyles.tableCol}>
            <Text style={[pdfStyles.tableCell]}>{chickenComponents.neck}</Text>
          </View>
        </View>
        <View style={pdfStyles.tableRow}>
          <View style={pdfStyles.tableCol}>
            <Text style={[pdfStyles.tableCell, pdfStyles.titleCell]}>
              Espalda
            </Text>
          </View>
          <View style={pdfStyles.tableCol}>
            <Text style={[pdfStyles.tableCell]}>{chickenComponents.back}</Text>
          </View>
        </View>
        <View style={pdfStyles.tableRow}>
          <View style={pdfStyles.tableCol}>
            <Text style={[pdfStyles.tableCell, pdfStyles.titleCell]}>
              Pecho
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
            <Text style={[pdfStyles.tableCell, pdfStyles.titleCell]}>
              abdomen
            </Text>
          </View>
          <View style={pdfStyles.tableCol}>
            <Text style={[pdfStyles.tableCell]}>
              {chickenComponents.abdomen}
            </Text>
          </View>
        </View>
        <View style={pdfStyles.tableRow}>
          <View style={pdfStyles.tableCol}>
            <Text style={[pdfStyles.tableCell, pdfStyles.titleCell]}>
              Alcantarilla
            </Text>
          </View>
          <View style={pdfStyles.tableCol}>
            <Text style={[pdfStyles.tableCell]}>{chickenComponents.sewer}</Text>
          </View>
        </View>
        <View style={pdfStyles.tableRow}>
          <View style={pdfStyles.tableCol}>
            <Text style={[pdfStyles.tableCell, pdfStyles.titleCell]}>
              Cadera
            </Text>
          </View>
          <View style={pdfStyles.tableCol}>
            <Text style={[pdfStyles.tableCell]}>{chickenComponents.anca}</Text>
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
        <View style={pdfStyles.tableRow}>
          <View style={pdfStyles.tableCol}>
            <Text style={[pdfStyles.tableCell, pdfStyles.titleCell]}>
              Dedos
            </Text>
          </View>
          <View style={pdfStyles.tableCol}>
            <Text style={[pdfStyles.tableCell]}>{chickenComponents.toes}</Text>
          </View>
        </View>
      </View>
    </CountPartsWrapper>
  );
};

export default CountParts;
