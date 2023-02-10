import {ACTIONS_TYPE} from "../actions/actionsType";

export const userState = {
    userName: '',
    address: {
        city: {}
    },
    phoneNumber: ''
}
export const userReducer = (state = userState, action) => {
    switch (action.type) {
        case ACTIONS_TYPE.user.CHANGE_NAME:
            return {
                ...state,
                userName: action.payload
            }
        case ACTIONS_TYPE.user.CHANGE_ADDRESS:
            return {
                ...state,
                address: {
                    city: action.payload
                }
            }
        case ACTIONS_TYPE.user.CHANGE_PHONE:
            return {
                ...state,
                phoneNumber: action.payload
            }
        default:
            return state
    }
}
