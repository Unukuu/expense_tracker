"use client";
import { createContext, useEffect, useState } from "react";
import { apiUrl } from "../../../utils/util";
import axios from "axios";
import { toast } from "react-toastify";

export const ChartdataContext = createContext();
export const ChartProvider = ({ children }) => {
  const [trans, setTrans] = useState({});
  const getTransdata = async () => {
    try {
      const res = await axios.get(`${apiUrl}/records/info`);
      console.log(res.data);
      setTrans(res.data);
    } catch (error) {
      console.log("aldaa garlaa", error);
      toast.error("aldaa garlaa");
    }
  };
  const [reFetch, setReFetch] = useState(true);
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
    getTransdata();
    getChartdata();
  }, [reFetch]);
  return (
    <ChartdataContext.Provider
      value={{
        chartData,
        getChartdata,
        reFetch,
        setReFetch,
        trans,
        getTransdata,
      }}
    >
      {children}
    </ChartdataContext.Provider>
  );
};
