import House from "./icons/House";
export const Records = () => {
  return (
    <div className="flex justify-between py-5 px-6 border-b border-grey-600">
      <div className="flex gap-4">
        <div className="w-10 h-10 bg-blue-500 rounded-full flex justify-center items-center">
          <House />
        </div>
        <div>
          <div className="text-base">Lending & Renting</div>
          <div className="text-xs">3 hours ago</div>
        </div>
      </div>
      <div className="text-green-500">- 1,000₮</div>
    </div>
  );
};
export default Records;
