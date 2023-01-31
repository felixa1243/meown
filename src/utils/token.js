export const setToken = token => localStorage.setItem("TOKEN",token)
export const getToken = () => localStorage.getItem("TOKEN")
export const removeToken = () => localStorage.removeItem("TOKEN")