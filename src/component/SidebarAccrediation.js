import React from 'react';
import { useDispatch,useSelector } from "react-redux";
import { changeEditStateAccrediationKey } from '../redux/actions/suppilierKey';
function SidebarAccrediation() {
    const dispatch = useDispatch()
    const showFormAccrediationVerify=()=>{
        dispatch(changeEditStateAccrediationKey())
    }
    
    
    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{ width: '280px' ,height:'100vh'}}>
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <svg className="bi me-2" width={40} height={32}><use xlinkHref="#bootstrap" /></svg>
                <span className="fs-4">ACCREDIATION</span>
            </a>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
            <li className="nav-item createkeycss">
                    <div className="nav-link text-white" onClick={()=>{showFormAccrediationVerify()}} aria-current="page">
                        <svg className="bi me-2" width={16} height={16}><use xlinkHref="#home" /></svg>
                        Verify
                    </div>
                </li>
            </ul>
        </div>
        
    )
}

export default SidebarAccrediation

