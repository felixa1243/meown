import api from "../config/api";

export const login = (user) => api.post("/auth/login",user)