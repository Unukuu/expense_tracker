import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { toast } from "react-toastify";
import { apiUrl } from "../../../../utils/util";
import { ChartdataContext } from "@/app/context/chartdata-context";

const DoughnurChart = ({ categoryData }) => {
  const { chartData, getChartdata, reFetch, setReFetch } =
    useContext(ChartdataContext);
  // useEffect(() => {
  //   getChartdata();
  // }, [reFetch]);
  const data2 = {
    datasets: [
      {
        data: chartData?.donut.map((data) => data.sum),

        backgroundColor: [
          "#1C64F2",
          "#E74694",
          "#FDBA8C",
          "#16BDCA",
          "#F2901C",
        ],
        hoverBackgroundColor: [
          "#1C64F2",
          "#E74694",
          "#FDBA8C",
          "#16BDCA",
          "#F2901C",
        ],
      },
    ],
    labels: chartData?.donut.map((data) => data.cat_name),
  };

  const options2 = {
    legend: {
      align: "start",
      position: "right",

      labels: {
        display: false,
        position: "right",
      },
    },
  };

  return (
    <div className=" p-4 bg-white card w-full h-full flex">
      <Doughnut options={options2} data={data2} />
    </div>
  );
};

export default DoughnurChart;
