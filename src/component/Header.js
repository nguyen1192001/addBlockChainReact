import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { changeEditStateheadersupplier } from '../redux/actions/headerActions';
import { changeEditStateheadertransport } from '../redux/actions/headerActions';
import { changeEditStateheaderaccrediation } from '../redux/actions/headerActions';
import { changeEditState } from '../redux/actions/suppilierKey';
import { changeEditStateSupplierProduct } from '../redux/actions/suppilierKey';
import { changeEditStateTransportKey } from '../redux/actions/suppilierKey';
import { changeEditStateTransportProduct } from '../redux/actions/suppilierKey';
import { changeEditStateSupplierSignature } from '../redux/actions/suppilierKey';
import { changeEditStateAccrediationKey } from '../redux/actions/suppilierKey';
import { changeEditStateTableChainBlock } from '../redux/actions/headerActions';

function Header() {
    const dispatch = useDispatch()
    const isEdit = useSelector((state) => state.getState.isEdit)
    const isEditSLProduct = useSelector((state) => state.getState.isEditSLProduct)
    const isEditSLSign = useSelector((state) => state.getState.isEditSLSign)
    const isEidtTPkey = useSelector((state) => state.getState.isEidtTPkey)
    const isEditTPProduct = useSelector((state) => state.getState.isEditTPProduct)
    const isEditACKey = useSelector((state) => state.getState.isEditACKey)


    const stateHeaderSupplier = useSelector((state) => state.getStateHeader.isEditSupplier)
    const stateHeaderTransport = useSelector((state) => state.getStateHeader.isEditSLTransport)
    const stateHeaderAccrediation = useSelector((state) => state.getStateHeader.isEditSLAccreditation)
    const showFormSupplier = () => {
        if (isEdit) {
            dispatch(changeEditState())
        }
        if (isEditSLProduct) {
            dispatch(changeEditStateSupplierProduct())
        } if (isEditSLSign) {
            dispatch(changeEditStateSupplierSignature())
        }
        if (isEidtTPkey) {
            dispatch(changeEditStateTransportKey())
        }
        if (isEditTPProduct) {
            dispatch(changeEditStateTransportProduct())
        }
        if (isEditACKey) {
            dispatch(changeEditStateAccrediationKey())
        }
        //----------------------------------------
        if (stateHeaderTransport) {
            dispatch(changeEditStateheadertransport())
        }
        if (stateHeaderAccrediation) {
            dispatch(changeEditStateheaderaccrediation())
        }
        dispatch(changeEditStateheadersupplier())
    }
    const showFormTransport = () => {
        if (isEdit) {
            dispatch(changeEditState())
        }
        if (isEditSLProduct) {
            dispatch(changeEditStateSupplierProduct())
        } if (isEditSLSign) {
            dispatch(changeEditStateSupplierSignature())
        }
        if (isEidtTPkey) {
            dispatch(changeEditStateTransportKey())
        }
        if (isEditTPProduct) {
            dispatch(changeEditStateTransportProduct())
        }
        if (isEditACKey) {
            dispatch(changeEditStateAccrediationKey())
        }
        //-------------------------------------
        if (stateHeaderSupplier) {
            dispatch(changeEditStateheadersupplier())
        }
        if (stateHeaderAccrediation) {
            dispatch(changeEditStateheaderaccrediation())
        }
        dispatch(changeEditStateheadertransport())
    }
    const showFormAccrediation = () => {
        if (isEdit) {
            dispatch(changeEditState())
        }
        if (isEditSLProduct) {
            dispatch(changeEditStateSupplierProduct())
        } if (isEditSLSign) {
            dispatch(changeEditStateSupplierSignature())
        }
        if (isEidtTPkey) {
            dispatch(changeEditStateTransportKey())
        }
        if (isEditTPProduct) {
            dispatch(changeEditStateTransportProduct())
        }
        if (isEditACKey) {
            dispatch(changeEditStateAccrediationKey())
        }
        //------------------------------
        if (stateHeaderTransport) {
            dispatch(changeEditStateheadertransport())
        }
        if (stateHeaderSupplier) {
            dispatch(changeEditStateheadersupplier())
        }
        dispatch(changeEditStateheaderaccrediation())
    }
    const showFormTableBlockChain = () =>{
        if (isEdit) {
            dispatch(changeEditState())
        }
        if (isEditSLProduct) {
            dispatch(changeEditStateSupplierProduct())
        } if (isEditSLSign) {
            dispatch(changeEditStateSupplierSignature())
        }
        if (isEidtTPkey) {
            dispatch(changeEditStateTransportKey())
        }
        if (isEditTPProduct) {
            dispatch(changeEditStateTransportProduct())
        }
        if (isEditACKey) {
            dispatch(changeEditStateAccrediationKey())
        }

        //--------------------
        if (stateHeaderTransport) {
            dispatch(changeEditStateheadertransport())
        }
        if (stateHeaderSupplier) {
            dispatch(changeEditStateheadersupplier())
        }
        if (stateHeaderAccrediation) {
            dispatch(changeEditStateheaderaccrediation())
        }
        dispatch(changeEditStateTableChainBlock())
    }


    return (
        <nav className="navbar navbar-expand-lg navbar-da bg-dark">
            <div className="container-fluid">
                <div className="navbar-brand text-white header_bar" onClick={() => { showFormSupplier() }}><h4>SUPPLIER</h4></div>
                <div className="navbar-brand text-white header_bar" onClick={() => { showFormTransport() }}><h4>TRANSPORT</h4></div>
                <div className="navbar-brand text-white header_bar" onClick={() => { showFormAccrediation() }}><h4>ACCREDITATION</h4></div>
                <div className="navbar-brand text-white header_bar" onClick={() => { showFormTableBlockChain() }}><h4>TABLEBLOCKCHAIN</h4></div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Header

