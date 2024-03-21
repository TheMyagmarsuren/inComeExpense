import Plus from "../components/icons/Plus";

import Home from "../components/Home";
export const ChooseModal = () => {
  return (
    <div>
      <dialog id="my_modal_2" className="modal">
        <div className="bg-white w-[384px] h-fit rounded-xl modal-box">
          <div className="flex gap-3 border-b p-4">
            <div className="w-6 h-6 bg-blue-500 rounded-full p-1 flex items-center justify-center">
              <Plus />
            </div>
            <div>Add category</div>
          </div>
          <Home />
          <Home />
        </div>
        ;
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};
export default ChooseModal;
