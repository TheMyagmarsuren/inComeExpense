import Noise from "@/pages/components/Noise";
import YourIncome from "./components/YourIncome";
import React from "react";
import { BarChart } from "@/pages/components/BarChart";
import { TotalExpenses } from "./components/TotalExpenses";
import { DoughnutChart } from "@/pages/components/DoughnutChart";
import LastRecords from "./components/LastRecords";

export default function Home() {
  return (
    <div className="px-[120px] mt-[32px]">
      <div className="flex justify-between">
        <Noise />
        <YourIncome />
        <TotalExpenses />
      </div>
      <div className="flex gap-6 mt-5">
        <div className="w-[500px] h=[500px]">
          <BarChart />
        </div>
        <div>
          <DoughnutChart />
        </div>
      </div>
      <div>
        <LastRecords />
      </div>
    </div>
  );
}
