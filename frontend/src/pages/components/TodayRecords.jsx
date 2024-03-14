import House from "./icons/House";
export default function TodayRecords() {
  return (
    <div className="flex justify-between py-3 px-6 bg-white items-center rounded-xl">
      <div className="flex gap-4 items-center">
        <input type="checkbox" className="checkbox " />
        <div className="w-10 h-10 bg-blue-500 rounded-full flex justify-center items-center">
          <House />
        </div>
        <div>
          <div className="text-base">Lending & Renting</div>
          <div className="text-xs">14:00</div>
        </div>
      </div>
      <div className="text-green-500">- 1,000₮</div>
    </div>
  );
}
