import { IoHome } from "react-icons/io5";
const Recordcard = () => {
  return (
    <div className="flex p-4 justify-between items-center border-b-2">
      <div className="flex items-center justify-center gap-4">
        <div className="w-10 h-10 rounded-full bg-[#0166FF] flex items-center justify-center text-xl">
          <IoHome className="text-white" />
        </div>
        <div>
          <p>Lending & Renting</p>
          <p className="text-xs text-gray-500">3 hours ago</p>
        </div>
      </div>
      <p className="text-lime-500 font-bold">- 1,000$</p>
    </div>
  );
};
export default Recordcard;
