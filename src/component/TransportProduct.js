import React from 'react';
import axios from 'axios';
import { useState } from 'react';
const qs = require('qs');

function TransportProduct() {
    const [NameProduct, setInput] = useState('')
    const [description, setInput1] = useState('')
    // const [image, setInput2] = useState('')
    const [privatekey, setInput3] = useState('')
    const [publickey, setInput4] = useState('')
    const [idChain, setInput5] = useState('')

    const resetInput = ()=>{
        setInput('');
        setInput1('');
        setInput3('');
        setInput4('');
        setInput5('');
    }
    const sendData = () => {
        let getdata = qs.stringify({NameProduct,description,privatekey, publickey,idChain});
     
        let config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }

        axios.post('http://localhost:4000/VanChuyen', getdata, config)
            .then(() => {
                console.log("okokokok")
                alert("thêm thành công")
                // resetInput()
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <form>
            <h1>TRANSPORT PRODUCT</h1>
            <div className="mb-3 mt-3 me-5">
                <label htmlFor="exampleInputEmail1" className="form-label">Product Name</label>
                <input type="text" className="form-control" name="NameProduct" value={NameProduct} onChange={(e) => setInput(e.target.value)} />
            </div>
            <div className="mb-3 mt-3 me-5">
                <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
                <input type="text" className="form-control" name="description" value={description} onChange={(e) => setInput1(e.target.value)} />
            </div>
            {/* <div className="mb-3 mt-3 me-5">
                <label htmlFor="formFileMultiple" className="form-label">Choose image product</label>
                <input className="form-control" type="file" name ="image" value={image} multiple  onChange={(e) => setInput2(e.target.value) } />
            </div> */}
            <div className="mb-3 mt-3 me-5">
                <label htmlFor="exampleInputEmail1" className="form-label">privatekey</label>
                <input type="text" className="form-control" name="privatekey" value={privatekey} onChange={(e) => setInput3(e.target.value)} />
            </div>
            <div className="mb-3 mt-3 me-5">
                <label htmlFor="exampleInputEmail1" className="form-label">publickey</label>
                <input type="text" className="form-control" name="publickey" value={publickey} onChange={(e) => setInput4(e.target.value)} />
            </div>
            <div className="mb-3 mt-3 me-5">
                <label htmlFor="exampleInputEmail1" className="form-label">idChain</label>
                <input type="text" className="form-control" name="idChain" value={idChain} onChange={(e) => setInput5(e.target.value)} />
            </div>
            <div type="button" className="btn btn-primary" onClick={sendData}>Submit</div>
        </form>
    )
}
export default TransportProduct

