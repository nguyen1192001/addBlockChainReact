import React from 'react';
import axios from 'axios';
import { useDispatch,useSelector } from "react-redux";
import { getKey } from '../redux/actions/Supplier';
function TransportKey() {
    const dispath = useDispatch()
    const keys = useSelector((state)=>state.supplier.keys)
    const createKey =()=>{
        axios.get("http://localhost:4000/createKey")
       .then((item)=>{
           dispath(getKey(item.data))
       })
       .catch((err)=>{
            console.log(err)
       })
    }
    return (
        <form>
            <h1>TRANSPORT CREATE KEY</h1>
            <div type="button"  className="btn btn-primary" onClick={createKey}>CREATE KEY</div>
            <div className="showKey">
                <span>
                    "publickey": {keys.publickey} <br/>
                    "privatekey": {keys.privatekey}
                </span>
            </div>
        </form>
    )
}

export default TransportKey

