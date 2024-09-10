import { Doughnut } from "react-chartjs-2";

const DoughnurChart = ({ categoryData }) => {
  const data2 = {
    datasets: [
      {
        data: [10, 10, 20, 40, 20],

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
    labels: ["Food", "Tech", "Taxi", "Health", "Car"],
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
