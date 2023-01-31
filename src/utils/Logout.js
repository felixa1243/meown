import {removeToken} from "./token";
import {deleteUser} from "./userInfo";

export const Logout = ()=> {
    removeToken()
    deleteUser()
}