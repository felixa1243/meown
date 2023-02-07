import axiosInstance from "../config/api";

export const getUser = () => axiosInstance.get('/user')