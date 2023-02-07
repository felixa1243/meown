import axiosInstance from "../config/api";

export const getOrder = ()=> axiosInstance.get('/transactions')