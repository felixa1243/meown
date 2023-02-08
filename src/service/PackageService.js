import axiosInstance from "../config/api";

export const getPackages = () => axiosInstance.get("/packages")
export const getPackagesById = id => axiosInstance.get("/packages/"+id)