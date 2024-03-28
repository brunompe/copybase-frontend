
import { useState } from "react";
import { Data } from "../utils/Data";
import BarChart from "./BarChart";
import { useLocation } from "react-router-dom";
import 'chart.js/auto';

export default function ChartComponent() {
  const location = useLocation()
  const activeUsers = location.state.activeUsers

  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained ",
        data: Data.map((data) => data.userGain),
        borderColor: "white",
        borderWidth: 2,
      }
    ]
  });

  return (
    <>
      <div className="w-screen h-screen flex flex-col justify-center gap-5 items-center bg-gray-950 text-white">
        <div className="flex gap-5 p-2">
          <div className="h-36 w-60 rounded-md bg-gray-900 flex flex-col justify-between items-center p-2">
            <h1>Clientes Ativos</h1>
            <h1 className="text-4xl font-bold pb-10">{activeUsers}</h1>
          </div>
          <div className="h-36 w-60 rounded-md bg-gray-900 flex flex-col justify-between items-center p-2">
            <h1>MRR</h1>
            <h1 className="text-4xl font-bold pb-10">R$ 19.859,78</h1>
          </div>
          <div className="h-36 w-60 rounded-md bg-gray-900 flex flex-col justify-between items-center p-2">
            <h1>Churn rate</h1>
            <h1 className="text-4xl font-bold pb-10">5%</h1>
          </div>
        </div>
        <BarChart chartData={chartData} />
      </div>
    </>
  )
}