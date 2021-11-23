import { ActionTypes } from "../contains/ActionType";
export const getDataTransport = (dataTransport)=>{
    return{
        type:ActionTypes.GET_DATA_TRANSPORT,
        payload:dataTransport
    }
}
export const changeStateAccreditionButonVerity = (idAccredition)=>{
    return{
        type:ActionTypes.DELETE_DATA_TRANSPORT,
        payload:idAccredition
    }
}