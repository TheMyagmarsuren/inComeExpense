import { MdHome } from "react-icons/md";
export const Home = () => {
  return (
    <div className="flex items-center gap-3 p-4">
      <div className=" text-blue-600 text-2xl">
        <MdHome />
      </div>
      <div>Home</div>
    </div>
  );
};
export default Home;
