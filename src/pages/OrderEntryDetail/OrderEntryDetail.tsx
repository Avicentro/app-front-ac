import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Document, Page, PDFViewer } from "@react-pdf/renderer";
// Components
import Dates from "./components/Dates/Dates";
import MainData from "./components/MainData/MainData";
import Remissions from "./components/Remissions/Remissions";
import ExportButton from "./components/ExportPdfButton/ExportPdfButton";
import ChickensDetails from "./components/ChickensDetails/ChickensDetails";
import BackButton from "../../components/display/BackButton/BackButton";

// Styles
import { OrderEntryDetailWrapper } from "./styles";

import { useOrderEntry } from "../../hook/useOrderEntry";
import { formatOrderEntryData } from "./helpers/formatOrderEntryData";
import CountParts from "./components/CountParts/CountParts";
// helpers

interface OrderEntryDetailProps {}

const OrderEntryDetail: FC<OrderEntryDetailProps> = () => {
  const { orderEntryId } = useParams();
  const [orderEntryData, setOrderEntryData] = useState(undefined);
  const { data } = useOrderEntry(orderEntryId);

  useEffect(() => {
    if (data) {
      setOrderEntryData(formatOrderEntryData(data));
    }
  }, [data]);

  const pdfViewer = {
    pdf: { width: "100%", height: "100vh" },
    page: {
      padding: "20px",
      boxSizing: "border-box",
    },
  };
  return (
    <OrderEntryDetailWrapper>
      <BackButton />
      {!!orderEntryData && (
        <div className="tables-container" id="entry-order-table">
          <div className="main">
            <PDFViewer style={pdfViewer.pdf}>
              <Document>
                <Page size="A4" style={pdfViewer.page}>
                  <MainData orderEntry={orderEntryData} />
                  <ChickensDetails orderEntry={orderEntryData} />
                  <Remissions orderEntry={orderEntryData} />
                  <Dates orderEntry={orderEntryData} />
                  <CountParts
                    chickenComponents={orderEntryData["chickenComponents"][0]}
                  />
                </Page>
              </Document>
            </PDFViewer>
          </div>
          {/* <div className="chickensDetails">
            <ChickensDetails orderEntry={data} />
          </div> */}
          <div className="remissions"></div>
          <div className="dates"></div>
        </div>
      )}
      <ExportButton />
    </OrderEntryDetailWrapper>
  );
};

export default OrderEntryDetail;
