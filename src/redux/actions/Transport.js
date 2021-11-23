import { ActionTypes } from "../contains/ActionType";
export const getDataTransport = (dataTransport)=>{
    return{
        type:ActionTypes.GET_DATA_SUPPLIER,
        payload:dataTransport
    }
}
export const remoreDataSupplierComfirm = (id)=>{
    return {
        type:ActionTypes.REMOVE_DATA_SUPPLIER_COMFIRM,
        payload:id
    }
}
export const changeStateConfirm = (data)=>{
    return{
        type:ActionTypes.CHANGE_CHANGE_STATE_BUTTON_CONFIRM,
        payload : data
    }
}
