import React from 'react';
import { useDispatch,useSelector } from "react-redux";
import { changeEditState } from '../redux/actions/suppilierKey';
import { changeEditStateSupplierProduct } from '../redux/actions/suppilierKey';
function Sidebar() {
    const dispatch = useDispatch()
    const isEdit = useSelector((state) => state.getState.isEdit)
    const isEditSLProduct = useSelector((state)=>state.getState.isEditSLProduct)
    const showFormCreateKey = ()=>{
        if(isEditSLProduct){
            dispatch(changeEditStateSupplierProduct())
        }
        
       dispatch(changeEditState())
       
    }
    const showFormProduct=()=>{
        if(isEdit){
            dispatch(changeEditState())
        }
        dispatch(changeEditStateSupplierProduct())
    }
    
    
    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{ width: '280px' ,height:'100vh'}}>
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <svg className="bi me-2" width={40} height={32}><use xlinkHref="#bootstrap" /></svg>
                <span className="fs-4">SUPPLIER</span>
            </a>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
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

export default Sidebar

