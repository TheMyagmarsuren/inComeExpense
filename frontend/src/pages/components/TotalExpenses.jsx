import DownArrow from "./icons/DownArrow";
import UpArrow from "./icons/UpArrow";
export const TotalExpenses = () => {
  return (
    <div className="rounded-lg w-96 bg-white gap-4">
      <div className="flex gap-2 items-center  px-6 py-4 border-b ">
        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
        <div>Your income</div>
      </div>
      <div className="flex gap-4 px-6 py-5 flex-col">
        <div>
          <div className="flex gap-1 text-4xl">
            <div>1,200,000</div>
            <div>₮</div>
          </div>
          <div>Your Income Amount</div>
        </div>
        <div className="flex gap-2 items-center">
          <div className="w-6 h-6">
            <DownArrow />
          </div>
          <div>32% from last month</div>
        </div>
      </div>
    </div>
  );
};
export default TotalExpenses;
