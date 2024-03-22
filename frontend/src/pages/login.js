import Vector from "./components/icons/Vector";
import Geld from "./components/icons/Geld";
import { useRouter } from "next/router";
import { useEffect } from "react";
export default function login() {
  const router = useRouter();
  return (
    <div className="flex h-screen bg-white ">
      <div className="w-2/4 flex justify-center items-center">
        <div className="flex justify-center items-center gap-10 flex-col w-96 h-fit">
          <div className="flex gap-[9.46px] items-center">
            <div>
              <Vector />
            </div>
            <div>
              <Geld />
            </div>
          </div>
          <div className="flex gap-[2px] flex-col">
            <div className="flex justify-center">Welcome back</div>
            <div>Welcome back, Please enter your details</div>
          </div>
          <div className="flex flex-col gap-4 w-full">
            <input
              type="email"
              placeholder="Email"
              className="w-full h-12 p-4 rounded-lg bg-slate-100 border"
            ></input>
            <input
              type="password"
              placeholder="Password"
              className="h-12 p-4 rounded-lg  bg-slate-100 border"
            ></input>

            <button className="bg-blue-600 flex justify-center items-center px-4 h-12 rounded-[20px] text-white">
              Log in
            </button>
          </div>
          <div className="flex">
            <div className="">Don’t have account?</div>
            <button
              className="flex px-3 gap-px  items-center justify-center text-blue-500"
              onClick={(e) => {
                e.preventDefault();
                router.push("/login2");
              }}
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
      <div className="w-2/4 bg-blue-600"></div>
    </div>
  );
}
