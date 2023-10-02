import { useState } from "react";
import "./App.css";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";
import { UserData } from "./Data";
import ChartContainer from "./components/ChartContainer";

function App() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  return (
    <div className="App">
      <ChartContainer>
        <BarChart chartData={userData} />
        <BarChart chartData={userData} />
        <LineChart chartData={userData} />
        <LineChart chartData={userData} />
        <PieChart chartData={userData} />
        <PieChart chartData={userData} />
      </ChartContainer>
    </div>
  );
}

export default App;
