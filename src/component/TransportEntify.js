import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { getDataTransport } from '../redux/actions/Transport';
import { remoreDataSupplierComfirm } from '../redux/actions/Transport';
import { changeStateConfirm } from '../redux/actions/Transport';

const qs = require('qs');
function TransportEntify() {
    const dispath = useDispatch()
    const getDataSupplier = useSelector((state) => state.transport.supplierProduct)
    const getStateComfirm = useSelector((state) => state.transport.stateButtionConfirm)
    const fetchProducts = async () => {
        const response = await axios.get("http://localhost:4000/VanChuyen");
        const listDataProduct = response.data.map((item) => {
            return { data: item.data, id: item._id , idChain : item.idChain}
        })
        // console.log("listpr ", listDataProduct)

        dispath(getDataTransport(listDataProduct)) 
    }
    useEffect(() => {
        fetchProducts()
    }, [])

    const entifySupplier = async (id) => {
        
        let config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
        let _id = qs.stringify({ id })
       let item = await axios.post('http://localhost:4000/VanChuyen/addBlockInChain', _id, config)   
       dispath(changeStateConfirm({id, idChain:item.data}))
       alert("thêm sản phẩm thành công");

        
    }


    const renderSupplierData = getDataSupplier.map((item,index) => {

        return (
            <tr>
                <th scope="row">{index}</th>
                <td>{item.data.description} <br/> {item.data.NameProduct}</td>
                <td>
                    {
                        (!item.idChain) ?( <div type="button" className="btn btn-danger" onClick={() => { entifySupplier(item.id)}} >CONFIRM</div>):(<h2>{item.idChain}</h2>)
                    }
                   
                </td>
            </tr>
        )
    })

    return (
        <div className="container mt-5">
            <h1>TRANSPORT VERIFY</h1>
            <table className="table table-bordered border-primary">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Data</th>
                        <th scope="col">Veify</th>
                    </tr>
                </thead>
                <tbody>
                    {renderSupplierData}
                </tbody>
            </table>

        </div>

    )
}

export default TransportEntify

