// ChartContainer.js
import { useRef, useEffect, useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function ChartContainer({ children }) {
  const chartRef = useRef(null);
  const [chartImages, setChartImages] = useState([]);

  useEffect(() => {
    const captureCharts = async () => {
      const images = [];
  
      for (const chart of chartRef.current.children) {
        await new Promise((resolve) => setTimeout(resolve, 100)); // Delay capture
        const canvas = await html2canvas(chart);
        images.push(canvas.toDataURL("image/png"));
      }
  
      setChartImages(images);
    };
  
    captureCharts();
  }, [children]);
  

  const downloadPDF = () => {
    const pdf = new jsPDF("p", "mm", "a4");
    let yPos = 10;
    const pageHeight = 297; // A4 page height in mm
  
    chartImages.forEach((imageData, index) => {
      if (index !== 0 && yPos + 110 > pageHeight) {
        pdf.addPage();
        yPos = 10;
      }
  
      pdf.addImage(imageData, "PNG", 10, yPos, 190, 100);
      yPos += 110; // Adjust the vertical spacing as needed
    });
  
    pdf.save("charts.pdf");
  };
  

  return (
    <div>
      <div ref={chartRef}>{children}</div>
      <div>
        <button onClick={downloadPDF} disabled={chartImages.length === 0}>
          Download PDF
        </button>
      </div>
    </div>
  );
}

export default ChartContainer;
