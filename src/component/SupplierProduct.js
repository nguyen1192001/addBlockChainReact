import React from 'react';
import axios from 'axios';
import { useState } from 'react';
const qs = require('qs');
function SupplierProduct() {
    
    const [NameProduct, setInput] = useState('')
    const [description, setInput1] = useState('')
    // const [image, setInput2] = useState('')
    const [privatekeyne, setInput3] = useState('')
    const [publickeyne, setInput4] = useState('')

    const resetInput = ()=>{
        setInput('');
        setInput1('');
        setInput3('');
        setInput4('');
    }
    const sendData = ()=>{

        let getdata = qs.stringify({NameProduct,description,privatekeyne, publickeyne});
    //    console.log(getdata)
        let config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
       
       axios.post('http://localhost:4000/nhacungcap',getdata,config)
       .then(()=>{
          console.log("okokokok")
          alert("thêm sản phẩm thành công");
          resetInput();
          
       })
       .catch((err)=>{
           console.log(err)
       })
    }
    return (
        <form>
            <h1>SUPPLIER PRODUCT</h1>
            <div className="mb-3 mt-3 me-5">
                <label htmlFor="exampleInputEmail1" className="form-label">Product Name</label>
                <input type="text" className="form-control" name="NameProduct" value={NameProduct} onChange={(e) => setInput(e.target.value) } />
            </div>
            <div className="mb-3 mt-3 me-5">
                <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
                <input type="text" className="form-control" name="description" value={description}  onChange={(e) => setInput1(e.target.value) } />
            </div>
            {/* <div className="mb-3 mt-3 me-5">
                <label htmlFor="formFileMultiple" className="form-label">Choose image product</label>
                <input className="form-control" type="file" name ="image" value={image} multiple  onChange={(e) => setInput2(e.target.value) } />
            </div> */}
            <div className="mb-3 mt-3 me-5">
                <label htmlFor="exampleInputEmail1" className="form-label">privatekey</label>
                <input type="text" className="form-control" name="privatekey" value={privatekeyne} onChange={(e) => setInput3(e.target.value) } />
            </div>
            <div className="mb-3 mt-3 me-5">
                <label htmlFor="exampleInputEmail1" className="form-label">publickey</label>
                <input type="text" className="form-control" name="publickey" value={publickeyne} onChange={(e) => setInput4(e.target.value) } />
            </div>
            <div type="button" className="btn btn-primary" onClick={sendData}>Submit</div>
        </form>
    )
}

export default SupplierProduct

