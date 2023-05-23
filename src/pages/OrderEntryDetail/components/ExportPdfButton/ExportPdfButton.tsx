import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import Button from "../../../../components/form/Button/Button";

const ExportButton = () => {
  const handleExportPDF = async () => {
    const element = document.getElementById("entry-order-table");
    // const pdf = new JsPDF("portrait", "pt", "a4");
    if (element !== null) {
      const pdf = new jsPDF("portrait", "mm", "a4");
      pdf.setDisplayMode("fullwidth");
      const totalPages = Math.ceil(
        element.clientHeight / pdf.internal.pageSize.getHeight()
      );

      const content = element.innerHTML;

      element.innerHTML = content;
      const desiredHeight = element.clientHeight;
      element.style.height = `${desiredHeight}px`;

      for (let page = 0; page < totalPages; page++) {
        if (page > 0) {
          pdf.addPage();
        }

        const margin = 20;
        const canvas = await html2canvas(element);

        const imgData = canvas.toDataURL("image/png");

        const contentOffsetY = page * pdf.internal.pageSize.getHeight();
        const imgWidth = pdf.internal.pageSize.getWidth() - 2 * margin;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        pdf.addImage(
          imgData,
          "PNG",
          margin,
          -contentOffsetY + margin,
          imgWidth,
          imgHeight
        );
      }

      pdf.save("download.pdf");
    }
  };

  return (
    <Button extraProps={{ onClick: handleExportPDF }}>Exportar a PDF</Button>
  );
};

export default ExportButton;
