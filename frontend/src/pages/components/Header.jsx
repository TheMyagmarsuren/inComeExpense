"use client";
import Modal from "../modals/Modal";
import Vector from "./icons/Vector";
import Plus from "./icons/Plus";
import { useRouter } from "next/router";
export const Header = () => {
  const router = useRouter();
  const styleDashboard = {
    color: router.asPath === "/" ? "black" : "grey",
  };
  const styleRecords = {
    color: router.asPath === "/records" ? "black" : "grey",
  };
  return (
    <div className="flex w-full items-center justify-between px-[120px] py-5 bg-white">
      <div className="flex gap-6  items-center">
        <div className="p-[6.3px]">
          <Vector />
        </div>
        <a
          href={"/"}
          onClick={(e) => {
            e.preventDefault();
            router.push("/");
          }}
          style={styleDashboard}
        >
          Dashboard
        </a>
        <a
          href={"../records"}
          onClick={(e) => {
            e.preventDefault();
            router.push("../records");
          }}
          style={styleRecords}
        >
          Records
        </a>
      </div>
      <div className="flex gap-6 items-center">
        <a
          className="flex bg-blue-600 items-center h-8 rounded-[20px] gap-px px-3"
          onClick={() => document.getElementById("my_modal_5").showModal()}
        >
          <Plus />
          <div className="text-white">Record</div>
          <Modal />
        </a>
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
