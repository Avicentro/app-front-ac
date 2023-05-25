import { StyleSheet } from "@react-pdf/renderer";
import styled from "styled-components";
import { theme } from "../../static/styles/theme";

export const OrderEntryDetailWrapper = styled.div`
  grid-column: 1 / 12;
  .tables-container {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    margin-bottom: 32px;
    grid-gap: 32px;
    .main {
      grid-column: 1 / -1;
    }
    .remissions {
      grid-column: 1 / 6;
    }
    .dates {
      grid-column: 7 / 13;
    }
    .chickensDetails {
      grid-column: 1 / -1;
    }
  }
`;

export const pdfStyles = StyleSheet.create({
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
  },
  tableCell: {
    fontSize: 12,
    padding: 5,
  },
  tableHeader: {
    textAlign: "center",
  },
  titleCell: {
    color: theme.coolGray800,
    backgroundColor: theme.coolGray300,
  },
});
