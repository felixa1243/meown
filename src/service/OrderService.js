import axiosInstance from "../config/api";

export const getOrder = () => axiosInstance.get('/transactions')
export const getOrderById = (id) => axiosInstance.get('/transactions/' + id)