import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import SupplierKey from "./component/SupplierKey";
import SupplierProduct from "./component/SupplierProduct";
import TransportEntify from "./component/TransportEntify";
import TransportKey from "./component/TransportKey";
import TransportProduct from "./component/TransportProduct";
import AccrediationEntify from "./component/AccrediationEntify";
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
import SidebarTransport from "./component/SidebarTransport";
import SidebarAccrediation from "./component/SidebarAccrediation"
import TableBlockChain from "./component/TableBlockChain";

import { useSelector } from 'react-redux';
function App() {
  const isEdit = useSelector((state) => state.getState.isEdit)
  const isEditSLProduct = useSelector((state)=>state.getState.isEditSLProduct)
  const isEditSLSign = useSelector((state)=>state.getState.isEditSLSign)
  const isEidtTPkey = useSelector((state)=>state.getState.isEidtTPkey)
  const isEditTPProduct = useSelector((state)=>state.getState.isEditTPProduct)
  const isEditACKey = useSelector((state)=>state.getState.isEditACKey)
  const stateHeaderSupplier = useSelector((state)=>state.getStateHeader.isEditSupplier)
  const stateHeaderTransport = useSelector((state)=>state.getStateHeader.isEditSLTransport)
  const stateHeaderAccrediation = useSelector((state)=>state.getStateHeader.isEditSLAccreditation)
  const stateHeaderTableBlockChain = useSelector((state)=>state.getStateHeader.isEditTableChainBlock)
  const showFormSupplier =()=>{
    if(stateHeaderSupplier){
      return  <Sidebar />
    }
  }
  const showFormTransport =()=>{
    if(stateHeaderTransport){
      return  <SidebarTransport />
    }
  }
  const showFormAccrediation =()=>{
    if(stateHeaderAccrediation){
      return  <SidebarAccrediation />
    }
  }
  const showForms = () => {
    if (isEdit) {
      return <SupplierKey />
    }
  }
  const showFormsSupplierProduct = () => {
    if (isEditSLProduct) {
      return <SupplierProduct />
    }
  }
  const showFormsSupplierSign = () => {
    if(isEditSLSign){
      return <TransportEntify/>
    }
  }
  const showFormsTransportKey = () => {
    if (isEidtTPkey) {
      return <TransportKey />
    }
  }
  const showFormsTransportProduct = () => {
    if (isEditTPProduct) {
      return <TransportProduct />
    }
  }
  const showFormsAccdiationEntify = () => {
    if (isEditACKey) {
      return <AccrediationEntify />
    }
  }
const showFormTableBlockChain = ()=>{
  if(stateHeaderTableBlockChain){
    return <TableBlockChain/>
  }
}

  return (
    <Router>
      <Header />
     
      <div className="row">
        <div className="col-md-4">
         {showFormSupplier()}
         {showFormTransport()}
         {showFormAccrediation()}
        </div>
        <div className="col-md-8">
          {showForms()}
          {showFormsSupplierProduct()}
          {showFormsSupplierSign()}
          {showFormsTransportKey()}
          {showFormsTransportProduct()}
          {showFormsAccdiationEntify()} 
        </div>
      </div>
      {showFormTableBlockChain()}
      
    </Router>
  );
}

export default App;
