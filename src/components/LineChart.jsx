import React, { useRef, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function LineChart({ chartData }) {
  const chartRef = useRef(null);

  return (
    <div ref={chartRef}>
      <Line data={chartData} />
    </div>
  );
}

export default LineChart;
