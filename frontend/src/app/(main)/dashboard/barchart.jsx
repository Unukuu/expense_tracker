import axios from "axios";
import { Bar } from "react-chartjs-2";
import { apiUrl } from "../../../../utils/util";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const BarChart = ({ barChartData }) => {
  const [chartData, setChartData] = useState();
  const getChartdata = async () => {
    try {
      const res = await axios.get(`${apiUrl}/records/chart`);
      console.log("data", res.data);
      setChartData(res.data);
    } catch (err) {
      console.log("aldaa garlaa", err);
      toast.error("aldaa garlaa");
    }
  };

  useEffect(() => {
    getChartdata();
  }, []);
  const data1 = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Income",
        backgroundColor: "#22C55E",
        data: [chartData?.bar[0]?.total_inc, chartData?.bar[0]?.total_inc],
      },
      {
        label: "Expense",
        backgroundColor: "#F87171",
        data: [chartData?.bar[0]?.total_exp, chartData?.bar[0]?.total_exp],
      },
    ],
  };

  const options1 = {
    responsive: true,

    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="flex items-center justify-center w-full h-full bg-white card">
      <Bar data={data1} options={options1} />
    </div>
  );
};

export default BarChart;
