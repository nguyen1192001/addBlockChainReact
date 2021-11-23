import { ActionTypes } from "../contains/ActionType"

const initialsState = {
    supplierProduct: []
}
export const TransportReducer = (state = initialsState, { type, payload }) => {
    switch (type) {
        case ActionTypes.GET_DATA_SUPPLIER:
            
           let  newSupplierProduct = payload.map(item => {
                return {...item,state : false }
            })
            return { ...state, supplierProduct: newSupplierProduct }
        case ActionTypes.CHANGE_CHANGE_STATE_BUTTON_CONFIRM:
            let tempSuplierProduct = state.supplierProduct;
            let index1 = tempSuplierProduct.findIndex((item)=>{
                return item.id === payload.id
            })
            console.log("index",index1)
            if(index1 !== -1){
                tempSuplierProduct[index1].state = true;
                tempSuplierProduct[index1].idChain = payload.idChain
                console.log("idChainnnn",tempSuplierProduct[index1].idChain)
            }
            [...state.supplierProduct] = tempSuplierProduct;
            console.log({tempSuplierProduct})
            return { ...state}
        case ActionTypes.REMOVE_DATA_SUPPLIER_COMFIRM:
            let listSupplierChange = state.supplierProduct;
            let index = listSupplierChange.findIndex((item) => {
                return item.id === payload;
            })
            if (index !== -1) {
                listSupplierChange.splice(index, 1);
            }

            [...state.supplierProduct] = listSupplierChange;

            return { ...state }
        default:
            return state
    }
}