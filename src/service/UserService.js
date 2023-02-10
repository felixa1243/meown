import axiosInstance from "../config/api";

export const getUser = () => axiosInstance.get('/user')
export const getUserById = id => axiosInstance.get("/user/" + id)
export const editUser = (id, data) => axiosInstance.put("/user/" + id, data)