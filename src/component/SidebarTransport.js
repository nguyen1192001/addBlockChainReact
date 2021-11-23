import React from 'react';
import { useDispatch,useSelector } from "react-redux";
import { changeEditStateTransportKey } from '../redux/actions/suppilierKey';
import { changeEditStateTransportProduct } from '../redux/actions/suppilierKey';
import { changeEditStateSupplierSignature } from '../redux/actions/suppilierKey';
function SidebarTransport() {
    const dispatch = useDispatch()
    
    const isEditSLSign = useSelector((state)=>state.getState.isEditSLSign)
    const isEidtTPkey = useSelector((state)=>state.getState.isEidtTPkey)
    const isEditTPProduct = useSelector((state)=>state.getState.isEditTPProduct)
   
    const showFormCreateKey = ()=>{
        if(isEditTPProduct){
            dispatch(changeEditStateTransportProduct())
        }
        if(isEditSLSign){
            dispatch(changeEditStateSupplierSignature())
        }
        
       dispatch(changeEditStateTransportKey())
       
    }
    const showFormProduct=()=>{
        if(isEidtTPkey){
            dispatch(changeEditStateTransportKey())
        }
        if(isEditSLSign){
            dispatch(changeEditStateSupplierSignature())
        }
        dispatch(changeEditStateTransportProduct())
    }
    const showFormVerify=()=>{
        if(isEidtTPkey){
            dispatch(changeEditStateTransportKey())
        }
        if(isEditTPProduct){
            dispatch(changeEditStateTransportProduct())
        }
        dispatch(changeEditStateSupplierSignature())
    }
    
    
    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{ width: '280px' ,height:'100vh'}}>
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <svg className="bi me-2" width={40} height={32}><use xlinkHref="#bootstrap" /></svg>
                <span className="fs-4">TRANSPORT</span>
            </a>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
            <li className="nav-item createkeycss">
                    <div className="nav-link text-white" onClick={()=>{showFormVerify()}} aria-current="page">
                        <svg className="bi me-2" width={16} height={16}><use xlinkHref="#home" /></svg>
                        Verify
                    </div>
                </li>
                <li className="nav-item createkeycss">
                    <div className="nav-link text-white" onClick={()=>{showFormCreateKey()}} aria-current="page">
                        <svg className="bi me-2" width={16} height={16}><use xlinkHref="#home" /></svg>
                        Create Key
                    </div>
                </li>
                <li className="createkeycss">
                    <div className="nav-link text-white" onClick={()=>{showFormProduct()}}>
                        <svg className="bi me-2" width={16} height={16}><use xlinkHref="#speedometer2" /></svg>
                        Add Product and Signature
                    </div>
                </li>
            </ul>
        </div>
        
    )
}

export default SidebarTransport

