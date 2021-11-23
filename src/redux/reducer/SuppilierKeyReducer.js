import { ActionTypes } from "../contains/ActionType"
const initialsState = {
    isEdit: false,
    isEditSLProduct: false,
    isEditSLSign: false,
    isEidtTPkey: false,
    isEditTPProduct: false,
    isEditACKey: false
}
export const suppilierKey = (state = initialsState, { type, payload }) => {
    switch (type) {
        case ActionTypes.CHANGE_EDIT_STATE_SUPPLIER_KEY:
            return { ...state, isEdit: !state.isEdit }
        case ActionTypes.CHANGE_EDIT_STATE_SUPPLIER_PRODUCT:
            return { ...state, isEditSLProduct: !state.isEditSLProduct }
        case ActionTypes.CHANGE_EDIT_STATE_SUPPLIER_SIGNATURE:
            return { ...state, isEditSLSign: !state.isEditSLSign }
        case ActionTypes.CHANGE_EDIT_STATE_TRANSPORT_KEY:
            return { ...state, isEidtTPkey: !state.isEidtTPkey }
        case ActionTypes.CHANGE_EDIT_STATE_TRANSPORT_PRODUCT:
            return { ...state, isEditTPProduct: !state.isEditTPProduct }
        case ActionTypes.CHANGE_EDIT_STATE_ACCREDITATION_KEY:
            return { ...state, isEditACKey: !state.isEditACKey }
        default:
            return { ...state }
    }
}