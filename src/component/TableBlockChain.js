import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { getChainBlock } from '../redux/actions/ChainBlock';
import Block from './Block';


function TableBlockChain() {

    const dispath = useDispatch()
    const getChain = useSelector((state) => state.chainBlock.chain)
    const fetchProducts = async () => {
        const response = await axios.get("http://localhost:4000/truyxuat");
        const listDataProduct = response.data.map((item) => {
            return { chuoiCungUng: item.chuoiCungUng }
            // item.chuoiCungUng.map((e)=>{
            //     return {hash:e.hash,previousHash:e.previousHash}
            // })
        })
        // console.log("list>",listDataProduct)
        // for (var i = 0; i < response.data.length; i++) {
        //     console.log(response.data[i].chuoiCungUng)
        dispath(getChainBlock(listDataProduct))
        // }
    }

    useEffect(() => {
        fetchProducts()
    }, [])
    console.log(">>>>", getChain)
    console.log(Object.keys(getChain).length)
    // for (var i = 0; i < getChain.length; i++) {
    //     for (var j = 0; j < getChain[i].chuoiCungUng.length; j++) {
    //         console.log("chain:", i, getChain[i].chuoiCungUng[j])
    //     }
    // }



    // const renderChain = getChain.map((item) => {
    //     return (
    //         <tr>
    //              {item.chuoiCungUng.map(item1 => {
    //                  return <th>
    //                      {item1.hash}
    //                  </th>
    //              })}

    //         </tr>
    //     )

    // })






    return (
        <div className="bd-example">
            <table className="table table-bordered border-primary">
                <tbody>
                    {Object.keys(getChain).length !== 0 ? getChain.map((item) => {
                        return (
                            <tr>
                                {item.chuoiCungUng.map((item1, index) => {
                                    return <Block item2={item1} index = {index}  />
                                })}
                            </tr>
                        )

                    }) : 0}
                    {console.log("length", Object.keys(getChain).length)}
                </tbody>
            </table>
        </div>
    )
}

export default TableBlockChain

