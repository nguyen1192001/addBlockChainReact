import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { getDataTransport , changeStateAccreditionButonVerity} from '../redux/actions/Accrediation';
const qs = require('qs');
function AccrediationEntify() {
    const dispath = useDispatch()
    const getDatatransport = useSelector((state) => state.accrediation.dataTransport)
    const fetchProducts = async () => {
        const response = await axios.get("http://localhost:4000/NhaKiemDinh");
        const listDataTransport = response.data.map((item) => {
            return { data: item.data, id: item._id }
        })

        dispath(getDataTransport(listDataTransport))
        console.log("vdfsgdf",listDataTransport)
    }
    useEffect(() => {
        fetchProducts()
    }, [])

    const entifyTransport = (id) => {

        dispath(changeStateAccreditionButonVerity(id))

        let config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
        let _id = qs.stringify({ id })
        axios.post('http://localhost:4000/nhakiemdinh/addBlockInChain', _id, config)
            .then(() => {
                console.log("add succcccccccsessss")
                alert("thêm sản phẩm thành công");
            })
            .catch((err) => {
                console.log(err)
            })

    }


    const renderSupplierData = getDatatransport.map((item,index) => {

        return (
            <tr>
                <th scope="row">{index}</th>
                <td>{item.data.description} <br/> {item.data.NameProduct}</td>
                <td>
                    <div type="button" className="btn btn-danger" onClick={() => { entifyTransport(item.id) }} >CONFIRM</div>
                </td>
            </tr>
        )
    })


    return (
        <div className="container mt-5">
            <h1>ACCREDIATION VERIFY</h1>
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

export default AccrediationEntify

