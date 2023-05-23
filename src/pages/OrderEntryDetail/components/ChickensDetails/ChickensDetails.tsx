import { FC } from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import { theme } from "../../../../static/styles/theme";

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

  const styles = StyleSheet.create({
    body: {},
    table: {
      width: "100%",
      borderWidth: 1,
      borderColor: "black",
      marginBottom: 10,
    },
    tableRow: {
      flexDirection: "row",
    },
    tableCol: {
      flex: 1,
      borderWidth: 1,
      borderColor: "black",
      padding: 5,
    },
    tableCell: {
      fontSize: 12,
    },
    titleCell: {
      color: theme.white,
      backgroundColor: theme.primaryDarkMode,
    },
  });

  return (
    <ChickensDetailsWrapper>
      {/* <tbody>
        <tr>
          <td colSpan={2}>
            <div className="description-container ">
              <span className="description"></span>
            </div>
          </td>
          <td colSpan={1}>
            <div className="description-container">
              <span className="description">N° POLLOS</span>
            </div>
          </td>
          <td colSpan={1}>
            <div className="description-container">
              <span className="description">PESO BRUTO</span>
            </div>
          </td>
          <td colSpan={1}>
            <div className="description-container">
              <span className="description">TARA</span>
            </div>
          </td>
          <td colSpan={1}>
            <div className="description-container">
              <span className="description">PESO NETO (KG)</span>
            </div>
          </td>
          <td colSpan={1}>
            <div className="description-container">
              <span className="description">PESO PROMEDIO</span>
            </div>
          </td>
        </tr>
        <tr>
          <td colSpan={2} className="title">
            <div className="description-container ">
              <span className="description">Pollos en pie</span>
            </div>
          </td>
          {Object.keys(totalChickensRemisionados)?.map((key) => (
            <td colSpan={1}>
              <div className="description-container">
                <span className="description">
                  {
                    totalChickensRemisionados[
                      key as keyof typeof totalChickensRemisionados
                    ]
                  }
                </span>
              </div>
            </td>
          ))}
        </tr>
        <tr>
          <td colSpan={2} className="title">
            <div className="description-container ">
              <span className="description">Pollos ahogados</span>
            </div>
          </td>
          {Object.keys(drownedChickens)?.map((key) => (
            <td colSpan={1}>
              <div className="description-container">
                <span className="description">
                  {drownedChickens[key as keyof typeof drownedChickens]}
                </span>
              </div>
            </td>
          ))}
        </tr>
        <tr>
          <td colSpan={2} className="title">
            <div className="description-container ">
              <span className="description">Tipo B externo</span>
            </div>
          </td>
          {Object.keys(typeBExternal)?.map((key) => (
            <td colSpan={1}>
              <div className="description-container">
                <span className="description">
                  {typeBExternal[key as keyof typeof typeBExternal]}
                </span>
              </div>
            </td>
          ))}
        </tr>
        <tr>
          <td colSpan={2} className="title">
            <div className="description-container ">
              <span className="description">Decomisados</span>
            </div>
          </td>
          {Object.keys(confiscatedChickens)?.map((key) => (
            <td colSpan={1}>
              <div className="description-container">
                <span className="description">
                  {confiscatedChickens[key as keyof typeof confiscatedChickens]}
                </span>
              </div>
            </td>
          ))}
        </tr>
        <tr>
          <td colSpan={2} className="title">
            <div className="description-container ">
              <span className="description">KL Pata hongo</span>
            </div>
          </td>
          {Object.keys(klPataMushroom)?.map((key) => (
            <td colSpan={1}>
              <div className="description-container">
                <span className="description">
                  {klPataMushroom[key as keyof typeof klPataMushroom]}
                </span>
              </div>
            </td>
          ))}
        </tr>
        <tr>
          <td colSpan={2} className="title">
            <div className="description-container ">
              <span className="description">KL comida</span>
            </div>
          </td>
          {Object.keys(klFoot)?.map((key) => (
            <td colSpan={1}>
              <div className="description-container">
                <span className="description">
                  {klFoot[key as keyof typeof klFoot]}
                </span>
              </div>
            </td>
          ))}
        </tr>
        <tr>
          <td colSpan={2} className="title">
            <div className="description-container ">
              <span className="description">Suma</span>
            </div>
          </td>
          {Object.keys(sum)?.map((key) => (
            <td colSpan={1}>
              <div className="description-container">
                <span className="description">
                  {sum[key as keyof typeof sum]}
                </span>
              </div>
            </td>
          ))}
        </tr>
        <tr>
          <td colSpan={2} className="title">
            <div className="description-container ">
              <span className="description">Tipo B interno</span>
            </div>
          </td>
          {Object.keys(typeBInternal).map((key) => (
            <td colSpan={1}>
              <div className="description-container">
                <span className="description">
                  {typeBInternal[key as keyof typeof typeBInternal]}
                </span>
              </div>
            </td>
          ))}
        </tr>
        <tr>
          <td colSpan={2} className="title">
            <div className="description-container ">
              <span className="description">Pollo tipo A</span>
            </div>
          </td>
          {Object.keys(typeAChickens)?.map((key) => (
            <td colSpan={1}>
              <div className="description-container">
                <span className="description">
                  {typeAChickens[key as keyof typeof typeAChickens]}
                </span>
              </div>
            </td>
          ))}
        </tr>
      </tbody> */}
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
