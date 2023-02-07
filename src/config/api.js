import axios from "axios";
import {getToken, removeToken} from "../utils/token";

const axiosInstance = axios.create({
    headers: {
        "Content-type": "application/json"
    }
})
axiosInstance.interceptors.request.use(
    (config) => {
        const token = getToken();
        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`
        }
        return config;
    },
    (error) => Promise.reject(error)
)
axiosInstance.interceptors.request.use((config) => config,(error) => {
    const respErr = error?.response?.data
    if (respErr.code === "X06") {
        removeToken();
    }
});
export default axiosInstance