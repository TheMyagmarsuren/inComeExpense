import Vector from "./components/icons/Vector";
import Geld from "./components/icons/Geld";
import Check from "./components/icons/Check";
import { useRouter } from "next/router";
export default function singup3() {
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
            <li className="step step-primary text-black">Finish</li>
          </ul>
        </div>
      </div>
      <div className="w-[384px] flex flex-col gap-8">
        <div className="flex flex-col gap-3 items-center justify-center">
          <div className="flex flex-col justify-center items-center gap-4">
            <div className="w-8 h-8 bg-blue-600 rounded-full p-[5px] flex items-center">
              <Check />
            </div>
            <div className="text-black">Good Job!</div>
          </div>
          <div>
            Your very first account has been created. Now continue to dashboard
            and start tracking
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-8 ">
            <div
              className="w-full bg-blue-600 flex justify-center items-center h-12 rounded-[20px] text-white px-4 "
              onClick={(e) => {
                e.preventDefault();
                router.push("/");
              }}
            >
              <button type="button">Go to Dashboard</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
