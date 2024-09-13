"use client";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { FaArrowAltCircleDown } from "react-icons/fa";

import Records from "./records";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { apiUrl } from "../../../../utils/util";
import BarChart from "./barchart";
import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart,
  Legend,
  LinearScale,
} from "chart.js";
import DoughnurChart from "./donutchart";
import { ChartdataContext } from "@/app/context/chartdata-context";
Chart.register(CategoryScale, LinearScale, BarElement, ArcElement, Legend);
const Dashboard = () => {
  const { reFetch, trans, getTransdata } = useContext(ChartdataContext);

  useEffect(() => {
    getTransdata();
  }, [reFetch]);
  return (
    <>
      <div className="bg-gray-50 flex flex-col gap-6 p-8">
        <div className="grid grid-cols-3 container m-auto gap-6">
          <div className="bg-[#0166FF] h-[216px] rounded-2xl relative">
            <img
              className="absolute w-full h-full rounded-2xl"
              src="/image/Noise.png"
              alt=""
            />
            <p className="text-white font-extrabold m-9">Geld</p>
            <div className="text-white m-9">
              <p className="font-extrabold">Cash</p>
              <p className="text-4xl">000'000'000$</p>
            </div>
          </div>
          <div className="bg-white shadow-xl h-[216px] rounded-2xl ">
            <div className="flex items-center gap-2 py-5 px-6 border-b-2">
              <div className="w-2 h-2 rounded-full bg-[#84CC16]"></div>
              <p className="font-bold">Your Income</p>
            </div>
            <div className="p-6">
              <h1 className="font-bold text-4xl">{trans?.expense?.sum}$</h1>
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
              <h1 className="font-bold text-4xl">-{trans?.income?.sum}$</h1>
              <p className="text-slate-500 text-[18px]">Your expence Amount</p>
              <div className="flex items-center gap-2 mt-4">
                <FaArrowAltCircleDown className="text-[#0166FF] text-[18px]" />
                <p className="text-[18px]">32% from last month</p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 container m-auto gap-6">
          <div className="h-[285px] rounded-2xl">
            <BarChart />
          </div>
          <div className="h-[285px]  rounded-2xl">
            <DoughnurChart />
          </div>
        </div>
        <Records />
      </div>
    </>
  );
};
export default Dashboard;
