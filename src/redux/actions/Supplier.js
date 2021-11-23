import { ActionTypes } from "../contains/ActionType";
export const getKey = (keySupplier)=>{
    return{
        type:ActionTypes.GET_KEY_SUPPLIER,
        payload:keySupplier
    }
}