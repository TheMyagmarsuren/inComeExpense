import Vector from "./components/icons/Vector";
import Geld from "./components/icons/Geld";
export default function wait() {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-12">
      <div className="flex gap-[17.64px] items-center p-[10.08px]">
        <div>
          <Vector />
        </div>
        <div>
          <Geld />
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-px justify-center items-center">
          <div className="flex items-center justify-center">
            <span className="loading loading-spinner text-info"></span>
          </div>
          <div>Түр хүлээнэ үү...</div>
        </div>
      </div>
    </div>
  );
}
