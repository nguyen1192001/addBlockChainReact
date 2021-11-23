import React, { useEffect, useState } from 'react';


function Block(props) {


    const [flag , setFlag] = useState({newFlag : true});
    




    return (
        <td onClick = {()=>{
            setFlag({newFlag : !flag.newFlag})
       }}>
        
        <div className="table__block">

      {flag.newFlag?
          <span>
          {props.index +1 }
      </span> : 
      <div className = "dataChain">
         <p>{props.item2.dataInBlock.map((data)=>{
             return <span>
                Name :  {data.NameProduct} <br/>
                description :  {data.description}
             </span>
         })}</p>
         <p> Hash : {props.item2.hash}</p>
         <p> PreviousHash : {props.item2.previousHash}</p>
      </div>
      }
        </div>

    </td>
    )
}

export default Block;

