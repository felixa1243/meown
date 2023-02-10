import axiosInstance from "../config/api";
// import api from "../config/api";


export const getPackages = () => axiosInstance.get("/packages")
export const getPackagesById = id => axiosInstance.get("/packages/"+id)

export const addPackage = (data) => {
    return axiosInstance.post("/packages", data,{
        headers: {
            "Content-type": "application/json"
        }
    });
}