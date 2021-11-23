import { ActionTypes } from "../contains/ActionType";
export const getChainBlock = (chain)=>{
    return{
        type:ActionTypes.GET_CHAIN_BLOCK,
        payload:chain
    }
}