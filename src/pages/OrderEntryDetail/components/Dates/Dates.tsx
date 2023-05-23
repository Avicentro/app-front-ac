import { FC } from "react";
import { formatDateCo } from "../../../../helpers/format/formatDateCo";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import { theme } from "../../../../static/styles/theme";

// Components

// Styles

import { DatesWrapper } from "./styles";
import { pdfStyles } from "../../styles";

// helpers

interface DatesProps {
  orderEntry: any;
}

const Dates: FC<DatesProps> = ({ orderEntry }) => {
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
    <DatesWrapper>
      {/* <tbody>
        <tr>
          <td colSpan={1} className="title">
            <div className="description-container ">
              <span className="description">Hora de iniciación</span>
            </div>
          </td>
          <td colSpan={7}>
            <div className="description-container">
              <span className="description">
                {formatDateCo({
                  date: orderEntry?.dataOrdenEntry?.dateTimesOrderEntry
                    ?.startTime,
                  addHours: true,
                })}
              </span>
            </div>
          </td>
        </tr>
        <tr>
          <td colSpan={1} className="title">
            <div className="description-container ">
              <span className="description">Hora programada</span>
            </div>
          </td>
          <td colSpan={7}>
            <div className="description-container">
              <span className="description">
                {formatDateCo({
                  date: orderEntry?.dataOrdenEntry?.dateTimesOrderEntry
                    ?.programmingTime,
                  addHours: true,
                })}
              </span>
            </div>
          </td>
        </tr>
        <tr>
          <td colSpan={1} className="title">
            <div className="description-container ">
              <span className="description">Hora de llegada</span>
            </div>
          </td>
          <td colSpan={7}>
            <div className="description-container">
              <span className="description">
                {formatDateCo({
                  date: orderEntry?.dataOrdenEntry?.dateTimesOrderEntry
                    ?.arrivalTime,
                  addHours: true,
                })}
              </span>
            </div>
          </td>
        </tr>
        <tr>
          <td colSpan={1} className="title">
            <div className="description-container ">
              <span className="description">Hora de finalización</span>
            </div>
          </td>
          <td colSpan={7}>
            <div className="description-container">
              <span className="description">
                {formatDateCo({
                  date: orderEntry?.dataOrdenEntry?.dateTimesOrderEntry
                    ?.endTime,
                  addHours: true,
                })}
              </span>
            </div>
          </td>
        </tr>
      </tbody> */}
      <View style={pdfStyles.table}>
        {/* Row 1 */}
        <View style={pdfStyles.tableRow}>
          <View style={[pdfStyles.tableCol, pdfStyles.titleCell]}>
            <Text style={pdfStyles.tableCell}>Hora de iniciación</Text>
          </View>
          <View style={pdfStyles.tableCol}>
            <Text style={[pdfStyles.tableCell]}>
              {formatDateCo({
                date: orderEntry?.dataOrdenEntry?.dateTimesOrderEntry
                  ?.startTime,
                addHours: true,
              })}
            </Text>
          </View>
        </View>
        {/* Row 2 */}
        <View style={pdfStyles.tableRow}>
          <View style={[pdfStyles.tableCol, pdfStyles.titleCell]}>
            <Text style={pdfStyles.tableCell}>Hora programada</Text>
          </View>
          <View style={pdfStyles.tableCol}>
            <Text style={[pdfStyles.tableCell]}>
              {formatDateCo({
                date: orderEntry?.dataOrdenEntry?.dateTimesOrderEntry
                  ?.programmingTime,
                addHours: true,
              })}
            </Text>
          </View>
        </View>
        {/* Row 3 */}
        <View style={pdfStyles.tableRow}>
          <View style={[pdfStyles.tableCol, pdfStyles.titleCell]}>
            <Text style={pdfStyles.tableCell}>Hora de llegada</Text>
          </View>
          <View style={pdfStyles.tableCol}>
            <Text style={[pdfStyles.tableCell]}>
              {formatDateCo({
                date: orderEntry?.dataOrdenEntry?.dateTimesOrderEntry
                  ?.arrivalTime,
                addHours: true,
              })}
            </Text>
          </View>
        </View>
        {/* Row 4 */}
        <View style={pdfStyles.tableRow}>
          <View style={[pdfStyles.tableCol, pdfStyles.titleCell]}>
            <Text style={pdfStyles.tableCell}>Hora de finalización</Text>
          </View>
          <View style={pdfStyles.tableCol}>
            <Text style={[pdfStyles.tableCell]}>
              {formatDateCo({
                date: orderEntry?.dataOrdenEntry?.dateTimesOrderEntry?.endTime,
                addHours: true,
              })}
            </Text>
          </View>
        </View>
      </View>
    </DatesWrapper>
  );
};

export default Dates;
