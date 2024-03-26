import Vector from "./components/icons/Vector";
import Geld from "./components/icons/Geld";
import { useRouter } from "next/router";
import { ContextData } from "./context/Context";
import { useContext, useEffect, useState } from "react";

export default function signup() {
  const { data, setData, createUser } = useContext(ContextData);
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
            <div className="flex justify-center">Create Geld account</div>
            <div>Sign up below to create your Wallet account</div>
          </div>
          <div className="flex flex-col gap-4 w-full">
            <input
              name="name"
              type="text"
              placeholder="name"
              className="w-full h-12 p-4 rounded-lg bg-slate-100 border"
              onChange={(e) => {
                setData({ ...data, name: e.target.value });
              }}
            ></input>
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="w-full h-12 p-4 rounded-lg bg-slate-100 border"
              onChange={(e) => {
                setData({ ...data, email: e.target.value });
              }}
            ></input>
            <input
              name="password"
              type="password"
              placeholder="Password"
              className="h-12 p-4 rounded-lg  bg-slate-100 border"
              onChange={(e) => {
                setData({ ...data, password: e.target.value });
              }}
            ></input>
            <input
              name="rePassword"
              type="password"
              placeholder="Re-Password"
              className="h-12 p-4 rounded-lg  bg-slate-100 border"
              onChange={(e) => {
                setData({ ...data, rePassword: e.target.value });
              }}
            ></input>

            <button
              className="bg-blue-600 flex justify-center items-center px-4 h-12 rounded-[20px] text-white"
              onClick={(e) => {
                e.preventDefault();
                createUser();
                router.push("/currency");
              }}
            >
              Sign up
            </button>
          </div>
          <div className="flex">
            <div className="">Already have account?</div>
            <div className="flex px-3 gap-px  items-center justify-center text-blue-500">
              Log in
            </div>
          </div>
        </div>
      </div>
      <div className="w-2/4 bg-blue-600"></div>
    </div>
  );
}
