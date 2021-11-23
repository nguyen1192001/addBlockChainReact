import { ActionTypes } from "../contains/ActionType"

const initialsState = {
    chain: {}
}
export const ChainBlockReducer = (state = initialsState, { type, payload }) => {
    switch (type) {
        case ActionTypes.GET_CHAIN_BLOCK:
            return { ...state, chain: payload }
        default:
            return state
    }
}