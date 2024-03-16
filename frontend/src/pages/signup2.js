import Vector from "./components/icons/Vector";
import Geld from "./components/icons/Geld";
import Money from "./components/icons/Money";
import { useRouter } from "next/router";
export default function singup2() {
  const router = useRouter();
  return (
    <div className="h-screen flex items-center gap-[141px] flex-col pt-10">
      <div className="flex flex-col gap-12 w-60">
        <div>
          <div className="flex gap-[6.3px] items-center justify-center">
            <Vector /> <Geld />
          </div>
        </div>
        <div className="w-full">
          <ul className="steps w-full">
            <li className="step step-primary text-black">Currency</li>
            <li className="step step-neutral text-black">Balance</li>
            <li className="step step-neutral text-black">Finish</li>
          </ul>
        </div>
      </div>
      <div className="w-[384px] flex flex-col gap-6">
        <div className="flex flex-col gap-4 items-center">
          <div className="w-8 h-8 bg-blue-600">
            <Money />
          </div>
          <div className="text-black">Select base currency</div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex justify-center items-center">
            <select className="select select-bordered w-full text-black bg-slate-200">
              <option disabled selected>
                MNT - Mongolian Tugrik
              </option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
          </div>
          <div className="flex flex-col gap-8 ">
            <div className="text-xs items-center flex justify-center">
              Your base currency should be the one you use most often. All
              transaction in other currencies will be calculated based on this
              one{" "}
            </div>
            <div
              className="w-full bg-blue-600 flex justify-center items-center h-12 rounded-[20px] text-white px-4 "
              onClick={(e) => {
                e.preventDefault();
                router.push("/signup3");
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
