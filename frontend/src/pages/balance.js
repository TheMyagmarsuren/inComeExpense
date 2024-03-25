import Vector from "./components/icons/Vector";
import Geld from "./components/icons/Geld";
import Coins from "./components/icons/Coins";
import { useRouter } from "next/router";
export default function balance() {
  const router = useRouter();
  return (
    <div className="h-screen w-screen flex items-center gap-[141px] flex-col pt-10">
      <div className="flex flex-col gap-12 w-60 justify-center items-center">
        <div>
          <div className="flex gap-[6.3px] items-center justify-center">
            <Vector /> <Geld />
          </div>
        </div>
        <div className="w-full">
          <ul className="steps w-full">
            <li className="step step-primary text-black">Currency</li>
            <li className="step step-primary text-black">Balance</li>
            <li className="step step-neutral text-black">Finish</li>
          </ul>
        </div>
      </div>
      <div className="w-[384px] flex flex-col gap-6">
        <div className="flex flex-col gap-4 items-center">
          <div className="w-8 h-8 bg-blue-600 rounded-full p-[5px] flex items-center">
            <Coins />
          </div>
          <div className="text-black">Set up your cash Balance</div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex justify-center items-center">
            <input
              type="email"
              placeholder="email"
              className="w-full p-4 h-12 rounded-lg bg-slate-200"
            ></input>
          </div>
          <div className="flex flex-col gap-8 ">
            <div className="text-black  items-center flex justify-center">
              How much cash do you have in your wallet? one{" "}
            </div>
            <div
              className="w-full bg-blue-600 flex justify-center items-center h-12 rounded-[20px] text-white px-4 "
              onClick={(e) => {
                e.preventDefault();
                router.push("/finish");
              }}
            >
              <button type="button">Confirm</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
