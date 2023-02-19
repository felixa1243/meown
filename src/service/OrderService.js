import axiosInstance from "../config/api";

export const getOrder = (status) => axiosInstance.get('/transactions/q', {
    params: {
        status
    }
})
export const getOrderById = (id) => axiosInstance.get('/transactions/' + id)
export const deleteOrder = id => axiosInstance.delete("/transactions/" + id)
export const approveOrder = id => axiosInstance.put("/transactions/approve/" + id)
export const finishOrder = id => axiosInstance.put("/transactions/finish/" + id)