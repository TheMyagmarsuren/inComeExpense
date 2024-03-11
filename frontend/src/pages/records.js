import Leading from "./components/icons/Leading";
import Plus from "./components/icons/Plus";
import LeadingRightArrow from "./components/icons/LeadingRIghtArrow";
import PlusBlue from "./components/icons/PlusBlue";
import LastIcon from "./components/icons/LastIcon";
import Circle from "./components/icons/Circle";
export const records = () => {
  return (
    <div className=" my-7">
      <div className="flex flex-col border w-fit ml-[108px] rounded-xl p-6 bg-white gap-6">
        <div className="flex flex-col gap-6 text-white ">
          <div className="text-black">Records</div>
          <div className="flex gap-px bg-blue-600 px-3 h-8 rounded-[20px] justify-center items-center">
            <div>
              <Plus />
            </div>
            <div>Add</div>
          </div>
        </div>
        <div>
          <label className="bg-slate-200 input input-bordered flex items-center gap-2 h-8 ">
            <input type="text" className="grow" placeholder="Search" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>
        <div className="flex flex-col gap-4 w-fit">
          <div className="text-black">Types</div>
          <div>
            <div className="form-control">
              <label className="label cursor-pointer flex gap-2 justify-start">
                <input
                  type="radio"
                  name="radio-10"
                  className="radio checked:bg-red-500"
                  checked
                />
                <span className="label-text">All</span>
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer flex gap-2 justify-start">
                <input
                  type="radio"
                  name="radio-10"
                  className="radio checked:bg-blue-500"
                  checked
                />
                <span className="label-text">Income</span>
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer flex gap-2 justify-start">
                <input
                  type="radio"
                  name="radio-10"
                  className="radio checked:bg-blue-500"
                  checked
                />
                <span className="label-text">Expense</span>
              </label>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex justify-between">
            <div className="text-black">Category</div>
            <div>Clear</div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <div className="flex items-center gap-2 px-3">
                <div>
                  <Leading />
                </div>
                <div>Food & Drinks</div>
              </div>
              <div>
                <LeadingRightArrow />
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-2 px-3">
                <div>
                  <Leading />
                </div>
                <div>Food & Drinks</div>
              </div>
              <div>
                <LeadingRightArrow />
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-2 px-3">
                <div>
                  <Leading />
                </div>
                <div>Food & Drinks</div>
              </div>
              <div>
                <LeadingRightArrow />
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-2 px-3">
                <div>
                  <Leading />
                </div>
                <div>Food & Drinks</div>
              </div>
              <div>
                <LeadingRightArrow />
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-2 px-3">
                <div>
                  <Leading />
                </div>
                <div>Food & Drinks</div>
              </div>
              <div>
                <LeadingRightArrow />
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-2 px-3">
                <div>
                  <Leading />
                </div>
                <div>Food & Drinks</div>
              </div>
              <div>
                <LeadingRightArrow />
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-2 px-3">
                <div>
                  <Leading />
                </div>
                <div>Food & Drinks</div>
              </div>
              <div>
                <LeadingRightArrow />
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-2 px-3">
                <div>
                  <Leading />
                </div>
                <div>Food & Drinks</div>
              </div>
              <div>
                <LeadingRightArrow />
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-2 px-3">
                <div>
                  <Leading />
                </div>
                <div>Food & Drinks</div>
              </div>
              <div>
                <LeadingRightArrow />
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-2 px-3">
                <div>
                  <Leading />
                </div>
                <div>Food & Drinks</div>
              </div>
              <div>
                <LeadingRightArrow />
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-2 px-3">
                <div>
                  <Leading />
                </div>
                <div>Food & Drinks</div>
              </div>
              <div>
                <LeadingRightArrow />
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-2 items-center px-3">
                <div>
                  <PlusBlue />
                </div>
                <div>Add Category</div>
              </div>
              <div>
                <LeadingRightArrow />
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-4 flex-col">
          <div>Amount Range</div>
          <div className="flex flex-col gap-4">
            <div className="flex gap-4 justify-between">
              <div className="border p-4 rounded-lg h-12 w-full flex items-center">
                0
              </div>
              <div className="border p-4 rounded-lg h-12 w-full flex items-center">
                1000
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col">
                <div className="bg-blue-600 p-2 flex rounded-full">
                  <Circle />
                </div>
                <div className="flex justify-center">0</div>
              </div>
              <div className="mt-[12px]">
                <LastIcon />
              </div>
              <div className="flex flex-col justify-center itesm-center">
                <div>
                  <div className="bg-blue-600 p-2 flex rounded-full justify-center h-fit w-fit">
                    <Circle />
                  </div>
                </div>
                <div>1000</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default records;
