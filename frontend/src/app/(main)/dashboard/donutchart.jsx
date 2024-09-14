import { useContext } from "react";
import { Doughnut } from "react-chartjs-2";
import { ChartdataContext } from "@/app/context/chartdata-context";

const DoughnurChart = ({ categoryData }) => {
  const { chartData } = useContext(ChartdataContext);
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
    <div className=" p-4 bg-white w-full h-full card">
      <Doughnut options={options2} data={data2} />
      {/* {chartData?.donut.map((data) => (
        <div className="flex gap-4">
          <p>{data.cat_name}</p>
          <p>{data.sum}</p>
        </div>
      ))} */}
    </div>
  );
};

export default DoughnurChart;
