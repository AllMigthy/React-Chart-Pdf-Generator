
import React, { useRef, useState } from "react";
import { Pie } from "react-chartjs-2";

function PieChart({ chartData }) {
  const chartRef = useRef(null);

  return (
    <div ref={chartRef}>
      <Pie data={chartData} />
    </div>
  );
}

export default PieChart;
