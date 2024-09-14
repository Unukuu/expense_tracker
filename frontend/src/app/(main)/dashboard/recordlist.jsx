"use client";

import { RecordsdataContext } from "@/app/context/records-context";
import { useContext } from "react";
import { IoHome } from "react-icons/io5";
const Recordcard = () => {
  const { records } = useContext(RecordsdataContext);
  console.log("records in list", records);
  return (
    <>
      {records?.map((record) => {
        return (
          <div className="flex p-4 justify-between items-center border-b-2">
            <div className="flex items-center justify-center gap-4">
              <div
                className={`w-10 h-10 rounded-full ${
                  record.transaction_type === "INC"
                    ? "bg-[#0166FF]"
                    : "bg-[#FF4545]"
                } flex items-center justify-center text-xl`}
              >
                <IoHome className="text-white" />
              </div>
              <div>
                <p>{record.name}</p>
                <p className="text-xs text-gray-500">3 hours ago</p>
              </div>
            </div>
            <p
              className={`${
                record.transaction_type === "INC"
                  ? "text-lime-400"
                  : "text-[#F54949]"
              } font-bold`}
            >
              {record.amount}$
            </p>
          </div>
        );
      })}
    </>
  );
};
export default Recordcard;
