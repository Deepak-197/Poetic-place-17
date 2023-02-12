import React from "react";
import "./SingleProduct.css";

import {AiFillDelete,AiOutlineExport} from "react-icons/ai"
import { useNavigate } from "react-router-dom";


 const SingleProduct = ({item,onDelet} ) => {
    const navigate=useNavigate()
   
  return (
    <>
    
      <div className="product-card">
          <div className="image-div"> 
              <img src={item.image} alt="gfdg" />
          </div>
          <div className="desp"> 
                  <h1>{item.title}</h1>
                  <h2>{"Rs" +item.price+""}</h2>
              <div>
                  <div onClick={()=>navigate(`edit/${item.id}`)}>
                    edit <AiOutlineExport/>
                  </div>
                  <div onClick={onDelet}>Delete <AiFillDelete/>
                  </div>
              </div>
        </div>
       </div>
    </>
  );
};

export default SingleProduct ;