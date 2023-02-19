import axiosInstance from "../config/api";

export const getSummary = ()=> axiosInstance.get("/transactions/summary")