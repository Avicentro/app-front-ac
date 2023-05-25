import { FC } from "react";
import { formatDateCo } from "../../../../helpers/format/formatDateCo";
import { Text, View } from "@react-pdf/renderer";

// Components

// Styles

import { DatesWrapper } from "./styles";
import { pdfStyles } from "../../styles";

// helpers

interface DatesProps {
  orderEntry: any;
}

const Dates: FC<DatesProps> = ({ orderEntry }) => {
  return (
    <DatesWrapper>
      <View style={pdfStyles.table} wrap={false}>
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
