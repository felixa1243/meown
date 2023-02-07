import axiosInstance from "../config/api";

export const getPackages = () => axiosInstance.get("/packages")