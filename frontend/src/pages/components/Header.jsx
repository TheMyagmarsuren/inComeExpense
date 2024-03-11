import Vector from "./icons/Vector";
import Plus from "./icons/Plus";

export const Header = () => {
  return (
    <div className="flex w-full items-center justify-between px-[120px] py-5 bg-white">
      <div className="flex gap-6  items-center">
        <div className="p-[6.3px]">
          <Vector />
        </div>
        <div className="text-black">Dashboard</div>
        <div>Records</div>
      </div>
      <div className="flex gap-6 items-center">
        <div className="flex bg-blue-600 items-center h-8 rounded-[20px] gap-px px-3">
          <Plus />
          <div className="text-white">Record</div>
        </div>
        <div className="avatar ">
          <div className="w-10">
            <img
              className="rounded-full"
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
