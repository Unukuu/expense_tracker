import { Bar } from "react-chartjs-2";

const BarChart = ({ barChartData }) => {
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
        data: [100_000],
      },
      {
        label: "Expense",
        backgroundColor: "#F87171",
        data: [200_000],
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
