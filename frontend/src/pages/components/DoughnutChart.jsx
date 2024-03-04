import { ArcElement, Chart } from "chart.js";
import { Doughnut } from "react-chartjs-2";
Chart.register(ArcElement);
export const DoughnutChart = () => {
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
    <div>
      <Doughnut data={data} config={config} />
    </div>
  );
};
export default DoughnutChart;
