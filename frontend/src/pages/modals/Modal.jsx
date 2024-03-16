import Wrong from "../components/icons/Wrong";
export default function Modal() {
  return (
    <div>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="bg-white rounded-xl text-black w-[792px]">
          <div>
            <div className="flex justify-between px-6 py-5 items-center border-b  border-slate-200">
              <div className="text-black">Add Record</div>
              <div className="">
                <form method="dialog">
                  <button className="flex items-center">
                    <Wrong />
                  </button>
                </form>
              </div>
            </div>
            <div className="flex">
              <div className="flex gap-5 flex-col px-6 pt-5 pb-6 ">
                <div>
                  <div className="flex gap-1 bg-slate-200 rounded-[100px]">
                    <button className="h-10 rounded-[20px] bg-blue-500 px-3 w-full">
                      Expense
                    </button>
                    <button className="h-10 rounded-[20px] px-3 w-full">
                      Income
                    </button>
                  </div>
                </div>
                <div className="flex gap-[38px]">
                  <div className=" flex flex-col gap-12">
                    <div className="px-4 py-3 bg-slate-200 rounded-lg">
                      <div>Amount</div>
                      <div className="flex gap-2">
                        <div>₮</div>
                        <div>000.00</div>
                      </div>
                    </div>
                    <div>
                      <select className="select select-bordered w-full bg-slate-200">
                        <option disabled selected>
                          Choose
                        </option>
                      </select>
                    </div>
                    <div className="flex gap-3">
                      <div>
                        <input
                          type="date"
                          className="p-4 rounded-lg bg-slate-200"
                        ></input>
                      </div>
                      <div>
                        <input
                          type="date"
                          className="p-4 rounded-lg bg-slate-200"
                        ></input>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-600 px-3 h-12 flex justify-center items-center text-white rounded-[20px]">
                  Add Record
                </div>
              </div>
              <div className="px-6 pt-11 pb-6 flex flex-col gap-12 w-full">
                <div>
                  <select className="select select-bordered w-full bg-slate-200">
                    <option disabled selected>
                      Write here
                    </option>
                  </select>
                </div>
                <div className="p-4 w-full h-full bg-slate-200 rounded-lg">
                  <input
                    type="text"
                    placeholder="Write here"
                    className="bg-slate-200 w-full"
                  ></input>
                </div>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
}
