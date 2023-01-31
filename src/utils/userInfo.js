const USER = "USER"
export const setUser = user => localStorage.setItem(USER,user)
export const getUser = () => localStorage.getItem(USER)
export const deleteUser = () => localStorage.removeItem(USER)