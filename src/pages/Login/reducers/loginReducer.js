import {ACTION_TYPE} from "../actions/type/ACTION_TYPE";

export const state = {
    email:'',
    password:''
}
export const loginReducer = (state = state,action) =>{
    switch (action.type){
        case ACTION_TYPE.email.CHANGE_EMAIL:
            return {
                ...state,
                email: action.payload
            }
        case ACTION_TYPE.password.CHANGE_PASSWORD:
            return {
                ...state,
                password: action.payload
            }
    }
}