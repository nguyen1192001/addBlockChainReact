import { ActionTypes } from "../contains/ActionType"

const initialsState = {
    keys:[]
}
export const supplierReducer = (state = initialsState,{type,payload})=>{
    switch (type){
        case ActionTypes.GET_KEY_SUPPLIER:
            return{...state,keys:payload}
        default:
            return state
    }
}