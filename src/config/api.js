import axios from "axios";

const axiosInstance = axios.create({
    'Content-Type': 'application/json'
})
export default axiosInstance