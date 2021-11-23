import { ActionTypes } from "../contains/ActionType"
export const changeEditState  = ()=>{
    return{
        type:ActionTypes.CHANGE_EDIT_STATE_SUPPLIER_KEY
    }
}
export const changeEditStateSupplierProduct  = ()=>{
    return{
        type:ActionTypes.CHANGE_EDIT_STATE_SUPPLIER_PRODUCT
    }
}
export const changeEditStateSupplierSignature  = ()=>{
    return{
        type:ActionTypes.CHANGE_EDIT_STATE_SUPPLIER_SIGNATURE
    }
}
export const changeEditStateTransportKey  = ()=>{
    return{
        type:ActionTypes.CHANGE_EDIT_STATE_TRANSPORT_KEY
    }
}
export const changeEditStateTransportProduct  = ()=>{
    return{
        type:ActionTypes.CHANGE_EDIT_STATE_TRANSPORT_PRODUCT
    }
}
export const changeEditStateAccrediationKey  = ()=>{
    return{
        type:ActionTypes.CHANGE_EDIT_STATE_ACCREDITATION_KEY
    }
}