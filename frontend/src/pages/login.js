import Vector from "./components/icons/Vector";
import Geld from "./components/icons/Geld";
export default function login() {
  return (
    <div className="flex h-screen w-screen">
      <div className="w-2/4 flex justify-center items-center flex-col">
        <div className="flex gap-10">
          <div className="flex items-center p-[5px] gap-[9.459px]">
            <div>
              <Vector />
            </div>
            <div>
              <Geld />
            </div>
          </div>
        </div>
        <div className="flex direction-col items-center">
          <div className="text-black">Welcome back</div>
        </div>
      </div>
      <div className="w-2/4 bg-blue-600"></div>
    </div>
  );
}
