import { FaArrowAltCircleUp } from "react-icons/fa";
import { FaArrowAltCircleDown } from "react-icons/fa";
import Header from "../../components/header";
import Records from "./records";
const Dashboard = () => {
  return (
    <>
      <div className="bg-gray-50 flex flex-col gap-6 p-8">
        <div className="grid grid-cols-3 container m-auto gap-6">
          <div className="bg-red-300 h-[216px] rounded-2xl"></div>
          <div className="bg-white shadow-xl h-[216px] rounded-2xl ">
            <div className="flex items-center gap-2 py-5 px-6 border-b-2">
              <div className="w-2 h-2 rounded-full bg-[#84CC16]"></div>
              <p className="font-bold">Your Income</p>
            </div>
            <div className="p-6">
              <h1 className="font-bold text-4xl">1'200'000$</h1>
              <p className="text-slate-500 text-[18px]">Your Income Amount</p>
              <div className="flex items-center gap-2 mt-4">
                <FaArrowAltCircleUp className="text-[#84CC16] text-[18px]" />
                <p className="text-[18px]">32% from last month</p>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-2xl h-[216px] rounded-2xl">
            <div className="flex items-center gap-2 py-5 px-6 border-b-2">
              <div className="w-2 h-2 rounded-full bg-[#0166FF]"></div>
              <p className="font-bold">Your Income</p>
            </div>
            <div className="p-6">
              <h1 className="font-bold text-4xl">-1'200'000$</h1>
              <p className="text-slate-500 text-[18px]">Your expence Amount</p>
              <div className="flex items-center gap-2 mt-4">
                <FaArrowAltCircleDown className="text-[#0166FF] text-[18px]" />
                <p className="text-[18px]">32% from last month</p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 container m-auto gap-6">
          <div className="h-[285px] bg-red-400 rounded-2xl"></div>
          <div className="h-[285px] bg-blue-400 rounded-2xl"></div>
        </div>
        <Records />
      </div>
    </>
  );
};
export default Dashboard;
