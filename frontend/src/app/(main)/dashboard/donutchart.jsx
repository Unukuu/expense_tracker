import axios from "axios";
import { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { toast } from "react-toastify";
import { apiUrl } from "../../../../utils/util";

const DoughnurChart = ({ categoryData }) => {
  const [chartData, setChartData] = useState();
  const getChartdata = async () => {
    try {
      const res = await axios.get(`${apiUrl}/records/chart`);
      console.log("data", res.data.donut);
      setChartData(res.data.donut);
    } catch (err) {
      console.log("aldaa garlaa", err);
      toast.error("aldaa garlaa aaaaaaa");
    }
  };

  useEffect(() => {
    getChartdata();
  }, []);
  const data2 = {
    datasets: [
      {
        data: chartData?.map((data) => data.sum),

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
    labels: chartData?.map((data) => data.cat_name),
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
