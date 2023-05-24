import { FC } from "react";
import { Text, View } from "@react-pdf/renderer";

// Components

// Styles

import { ChickensDetailsWrapper } from "./styles";
import { pdfStyles } from "../../styles";

// helpers

interface ChickensDetailsProps {
  orderEntry: any;
}

const ChickensDetails: FC<ChickensDetailsProps> = ({ orderEntry }) => {
  const totalChickensRemisionados =
    orderEntry?.dataVeterinary?.totalChickensRemisionados;
  const drownedChickens = orderEntry?.dataVeterinary?.drownedChickens;
  const typeBExternal = orderEntry?.dataVeterinary?.typeBExternal;
  const confiscatedChickens = orderEntry?.dataVeterinary?.confiscatedChickens;
  const klPataMushroom = orderEntry?.dataVeterinary?.klPataMushroom;
  const klFoot = orderEntry?.dataVeterinary?.klFoot;
  const sum = orderEntry?.dataVeterinary?.sum;
  const typeBInternal = orderEntry?.dataVeterinary?.typeBInternal;
  const typeAChickens = orderEntry?.dataVeterinary?.typeAChickens;

  return (
    <ChickensDetailsWrapper>
      <View>
        <View style={pdfStyles.tableRow}>
          <View style={[pdfStyles.tableCol, pdfStyles.titleCell]}>
            <Text style={[pdfStyles.tableCell, pdfStyles.titleCell]}></Text>
          </View>
          <View style={[pdfStyles.tableCol, pdfStyles.titleCell]}>
            <Text style={[pdfStyles.tableCell, pdfStyles.titleCell]}>
              N° POLLOS
            </Text>
          </View>
          <View style={[pdfStyles.tableCol, pdfStyles.titleCell]}>
            <Text style={[pdfStyles.tableCell, pdfStyles.titleCell]}>
              PESO BRUTO
            </Text>
          </View>
          <View style={[pdfStyles.tableCol, pdfStyles.titleCell]}>
            <Text style={[pdfStyles.tableCell]}>TARA</Text>
          </View>
          <View style={[pdfStyles.tableCol, pdfStyles.titleCell]}>
            <Text style={[pdfStyles.tableCell]}>PESO NETO (KG)</Text>
          </View>
          <View style={[pdfStyles.tableCol, pdfStyles.titleCell]}>
            <Text style={[pdfStyles.tableCell, pdfStyles.titleCell]}>
              PESO PROMEDIO
            </Text>
          </View>
        </View>
        <View style={pdfStyles.table}>
          <View style={pdfStyles.tableRow}>
            <View style={pdfStyles.tableCol}>
              <Text style={[pdfStyles.tableCell, pdfStyles.titleCell]}>
                Pollos en pie
              </Text>
            </View>
            {Object.keys(totalChickensRemisionados).map((key) => (
              <View style={pdfStyles.tableCol}>
                <Text style={pdfStyles.tableCell}>
                  {totalChickensRemisionados[key]}
                </Text>
              </View>
            ))}
          </View>
          <View style={pdfStyles.tableRow}>
            <View style={pdfStyles.tableCol}>
              <Text style={[pdfStyles.tableCell, pdfStyles.titleCell]}>
                Pollos ahogados
              </Text>
            </View>
            {Object.keys(drownedChickens).map((key) => (
              <View style={pdfStyles.tableCol}>
                <Text style={pdfStyles.tableCell}>{drownedChickens[key]}</Text>
              </View>
            ))}
          </View>
          <View style={pdfStyles.tableRow}>
            <View style={pdfStyles.tableCol}>
              <Text style={[pdfStyles.tableCell, pdfStyles.titleCell]}>
                Tipo B externo
              </Text>
            </View>
            {Object.keys(typeBExternal).map((key) => (
              <View style={pdfStyles.tableCol}>
                <Text style={pdfStyles.tableCell}>{typeBExternal[key]}</Text>
              </View>
            ))}
          </View>
          <View style={pdfStyles.tableRow}>
            <View style={pdfStyles.tableCol}>
              <Text style={[pdfStyles.tableCell, pdfStyles.titleCell]}>
                Decomisados
              </Text>
            </View>
            {Object.keys(confiscatedChickens).map((key) => (
              <View style={pdfStyles.tableCol}>
                <Text style={pdfStyles.tableCell}>
                  {confiscatedChickens[key]}
                </Text>
              </View>
            ))}
          </View>
          <View style={pdfStyles.tableRow}>
            <View style={pdfStyles.tableCol}>
              <Text style={[pdfStyles.tableCell, pdfStyles.titleCell]}>
                KL Pata hongo
              </Text>
            </View>
            {Object.keys(klPataMushroom).map((key) => (
              <View style={pdfStyles.tableCol}>
                <Text style={pdfStyles.tableCell}>{klPataMushroom[key]}</Text>
              </View>
            ))}
          </View>
          <View style={pdfStyles.tableRow}>
            <View style={pdfStyles.tableCol}>
              <Text style={[pdfStyles.tableCell, pdfStyles.titleCell]}>
                KL comida
              </Text>
            </View>
            {Object.keys(klFoot).map((key) => (
              <View style={pdfStyles.tableCol}>
                <Text style={pdfStyles.tableCell}>{klFoot[key]}</Text>
              </View>
            ))}
          </View>
          <View style={pdfStyles.tableRow}>
            <View style={pdfStyles.tableCol}>
              <Text style={[pdfStyles.tableCell, pdfStyles.titleCell]}>
                Suma
              </Text>
            </View>
            {Object.keys(sum).map((key) => (
              <View style={pdfStyles.tableCol}>
                <Text style={pdfStyles.tableCell}>{sum[key]}</Text>
              </View>
            ))}
          </View>
          <View style={pdfStyles.tableRow}>
            <View style={pdfStyles.tableCol}>
              <Text style={[pdfStyles.tableCell, pdfStyles.titleCell]}>
                Tipo B interno
              </Text>
            </View>
            {Object.keys(typeBInternal).map((key) => (
              <View style={pdfStyles.tableCol}>
                <Text style={pdfStyles.tableCell}>{typeBInternal[key]}</Text>
              </View>
            ))}
          </View>
          <View style={pdfStyles.tableRow}>
            <View style={pdfStyles.tableCol}>
              <Text style={[pdfStyles.tableCell, pdfStyles.titleCell]}>
                Pollo tipo A
              </Text>
            </View>
            {Object.keys(typeAChickens).map((key) => (
              <View style={pdfStyles.tableCol}>
                <Text style={pdfStyles.tableCell}>{typeAChickens[key]}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </ChickensDetailsWrapper>
  );
};

export default ChickensDetails;
