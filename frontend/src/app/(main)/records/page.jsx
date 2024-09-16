"use client";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { CategoryContext } from "@/app/context/category-context";
import { useContext } from "react";
import { FaEye } from "react-icons/fa";
import Recordcard from "../dashboard/recordlist";
const Page = () => {
  const { category } = useContext(CategoryContext);
  return (
    <div className=" bg-gray-50">
      <div className="m-auto container flex p-9 items-center justify-center gap-6">
        <div className="w-72 h-[972px] bg-white border rounded-lg px-4 py-6 flex flex-col gap-8">
          <div className="flex flex-col gap-6">
            <p className="font-bold text-2xl">Records</p>
            <button
              className="btn btn-primary w-full text-white"
              onClick={() => document.getElementById("my_modal_1").showModal()}
            >
              + Add
            </button>
            <input
              className="input input-bordered  w-full"
              type="text"
              placeholder="Search"
            />
          </div>
          <div>
            <p className="font-semibold">Types</p>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">All</span>
                <input
                  type="radio"
                  name="radio-10"
                  className="radio checked:bg-[#0166FF]"
                  defaultChecked
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">Expense</span>
                <input
                  type="radio"
                  name="radio-10"
                  className="radio checked:bg-red-500"
                  defaultChecked
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">Income</span>
                <input
                  type="radio"
                  name="radio-10"
                  className="radio checked:bg-lime-600"
                  defaultChecked
                />
              </label>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-semibold">Category</p>
            {category?.map((cat) => {
              return (
                <div className="flex  items-center gap-2">
                  <FaEye />
                  <p>{cat.name}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-[894px] h-[972px]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button className="flex items-center justify-center w-8 h-8 rounded-xl bg-[#E5E7EB]">
                <FaChevronLeft />
              </button>
              <p>Last 30 Days</p>
              <button className="flex items-center justify-center w-8 h-8 rounded-xl bg-[#E5E7EB]">
                <FaChevronRight />
              </button>
            </div>
            <div>
              <select className="select select-bordered w-full max-w-xs">
                <option disabled selected>
                  Newest ?
                </option>
                <option>Today</option>
                <option>Last Week</option>
                <option>Last Month</option>
                <option>Last Year</option>
              </select>
            </div>
          </div>
          <div>
            <div>
              <p className="font-semibold">Today</p>
              <Recordcard />
            </div>
            <div>
              <p className="font-semibold">Yesterday</p>
              <Recordcard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;
