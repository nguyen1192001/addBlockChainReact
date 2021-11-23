import { ActionTypes } from "../contains/ActionType"

const initialsState = {
    dataTransport: []
}
export const AccrediationReducer = (state = initialsState, { type, payload }) => {
    switch (type) {
        case ActionTypes.GET_DATA_TRANSPORT:
            return { ...state, dataTransport: payload }
        case ActionTypes.DELETE_DATA_TRANSPORT:
            let tempDataTransport = state.dataTransport;
            let index = tempDataTransport.findIndex((item) => {
                return item.id === payload;
            })
            console.log("index index" , index)
            if (index !== -1) {
                tempDataTransport.splice(index, 1);
            }
            state.dataTransport = [...tempDataTransport];
            return {...state}
        default:
            return state
    }
}