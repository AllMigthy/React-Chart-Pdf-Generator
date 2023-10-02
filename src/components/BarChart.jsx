// BarChart.js
import React, { useRef, useState } from "react";
import { Bar } from "react-chartjs-2";

function BarChart({ chartData }) {
  const chartRef = useRef(null);

  return (
    <div ref={chartRef}>
      <Bar data={chartData} />
    </div>
  );
}

export default BarChart;
