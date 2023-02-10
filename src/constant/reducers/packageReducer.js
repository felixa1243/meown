import {ACTIONS_TYPE} from "../actions/actionsType";

export const packageState = {
    packageId: '',
    packageName: '',
    description: '',
    price: 0
}
export const packageReducer = (state = packageState, action) => {
    switch (action.type) {
        case ACTIONS_TYPE.packages.CHANGE_ID:
            return {
                ...state,
                packageId: action.payload
            }
        case ACTIONS_TYPE.packages.CHANGE_NAME:
            return {
                ...state,
                packageName: action.payload
            }
        case ACTIONS_TYPE.packages.CHANGE_DESCRIPTION:
            return {
                ...state,
                description: action.payload
            }
        case ACTIONS_TYPE.packages.CHANGE_PRICE:
            return {
                ...state,
                price: action.payload
            }
        default:
            return state
    }
}