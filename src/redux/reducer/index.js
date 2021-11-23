import { suppilierKey } from "./SuppilierKeyReducer"
import { headerreducer } from "./HeaderReducer";
import { supplierReducer } from "./SupplierReducer";
import { TransportReducer } from "./TransportReducer";
import { combineReducers } from "redux";
import { AccrediationReducer } from "./AccrediationReducer";
import { ChainBlockReducer } from "./ChainBlockReducer";


const reducers = combineReducers({
    getState: suppilierKey,
    getStateHeader: headerreducer,
    supplier: supplierReducer,
    transport: TransportReducer,
    accrediation:AccrediationReducer,
    chainBlock:ChainBlockReducer
})
export default reducers