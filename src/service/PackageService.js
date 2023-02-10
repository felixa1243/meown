import axiosInstance from "../config/api";

export const getPackages = () => axiosInstance.get("/packages")
export const getPackagesById = id => axiosInstance.get("/packages/" + id)
export const editPackage = (id, data) => axiosInstance.put('/packages/' + id, data)