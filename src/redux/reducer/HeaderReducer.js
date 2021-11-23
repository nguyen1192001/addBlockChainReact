import { ActionTypes } from "../contains/ActionType"
const initialsState = {
    isEditSupplier: false,
    isEditSLTransport: false,
    isEditSLAccreditation: false,
    isEditTableChainBlock: false
}
export const headerreducer = (state = initialsState, { type, payload }) => {
    switch (type) {
        case ActionTypes.CHANGE_CHANGE_STATE_SIDERBAR_SUPPLIER:
            return { ...state, isEditSupplier: !state.isEditSupplier }
        case ActionTypes.CHANGE_CHANGE_STATE_SIDERBAR_TRANSPORT:
            return { ...state, isEditSLTransport: !state.isEditSLTransport }
        case ActionTypes.CHANGE_CHANGE_STATE_SIDERBAR_ACCREDITATION:
            return { ...state, isEditSLAccreditation: !state.isEditSLAccreditation }
        case ActionTypes.CHANGE_CHANGE_STATE_TABLECHAINBLOCK:
            return { ...state, isEditTableChainBlock: !state.isEditTableChainBlock }
        default:
            return { ...state }
    }
}