import CardVector from "./icons/CardVector";
import Shape from "./icons/Shape";
import Logo from "./icons/Logo";
export const Noise = () => {
  return (
    <div className="h-[220px] w-[384px] bg-blue-600 rounded-[18px] pl-8 pt-8">
      <div>
        <div className="flex p-[4.7px] gap-2 h-fit w-fit">
          <div>
            <CardVector />
          </div>
          <div className="text-white ">GelD</div>
        </div>
        <div className="flex">
          <div className="flex flex-col h-fit items-start mt-[60px]">
            <div className="text-white opacity-50">cash</div>
            <div className="text-white flex items-center w-10 h-10 gap-[200px]">
              <div>10,00,00</div>
              <div className="flex">
                <Logo />
              </div>
            </div>
          </div>
          <div className="mt-[-40px] ml-[88px]">
            <Shape />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Noise;
