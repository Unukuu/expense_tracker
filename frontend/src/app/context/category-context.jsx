"use client";

import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { apiUrl } from "../../../utils/util";

export const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [category, setCategory] = useState(null);

  const fetchCategoryData = async () => {
    try {
      console.log("GET-USER");
      const token = localStorage.getItem("token");
      const response = await axios.get(`${apiUrl}/categories`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        setCategory(response.data.user);
        console.log("USER", response.data);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    if (!category) {
    }
    fetchCategoryData();
  }, [category?.id]);

  return (
    <CategoryContext.Provider value={{ category, fetchCategoryData }}>
      {children}
    </CategoryContext.Provider>
  );
};
