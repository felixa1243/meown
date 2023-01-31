import {ACTION_TYPE} from "./type/ACTION_TYPE";

export const changeEmail = (payload) => ({type: ACTION_TYPE.email.CHANGE_EMAIL, payload})
export const changePassword = (payload) => ({type: ACTION_TYPE.password.CHANGE_PASSWORD, payload})