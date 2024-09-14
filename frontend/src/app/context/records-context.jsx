"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { apiUrl } from "../../../utils/util";
import axios from "axios";
import { toast } from "react-toastify";
import { UserContext } from "./user-context";
import { ChartdataContext } from "./chartdata-context";

export const RecordsdataContext = createContext();

export const RecordsProvider = ({ children }) => {
  const { reFetch } = useContext(ChartdataContext);
  const { user } = useContext(UserContext);
  const [records, setRecords] = useState(null);

  const getRecords = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${apiUrl}/records`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setRecords(res.data.user);
      //   console.log(records);
    } catch (err) {
      toast.error("aldaa garlaa records aldaatai");
      console.error("-----------aldaa garlaa", err);
    }
  };

  useEffect(() => {
    getRecords();
  }, [reFetch]);
  return (
    <RecordsdataContext.Provider value={{ records }}>
      {children}
    </RecordsdataContext.Provider>
  );
};
