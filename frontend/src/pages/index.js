import Noise from "@/pages/components/Noise";
import YourIncome from "./components/YourIncome";
import { Doughnut, Bar, Line, Pie } from "react-chartjs-2";
import React from "react";
import { Chart, ArcElement } from "chart.js";
Chart.register(ArcElement);
import { TotalExpenses } from "./components/TotalExpenses";
// test
export default function Home() {
  const data = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "My First Dataset",
        data: [300, 50, 100],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  };
  const config = {
    type: "doughnut",
    data: data,
  };
  return (
    <div className="px-[120px] mt-[32px]">
      <div className="flex justify-between">
        <Noise />
        <YourIncome />
        <TotalExpenses />
      </div>
      <div className="w-[200px] h-[200px]">
        <Doughnut data={data} config={config} />
      </div>
    </div>
  );
}
