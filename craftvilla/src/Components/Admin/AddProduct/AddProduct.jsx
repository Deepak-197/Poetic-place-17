import React, { useState } from "react";
import "./AddProduct.css";
// import { button, ButtonGroup, Box, Select } from "@chakra-ui/react";
import { AiFillEdit } from "react-icons/ai";
import axios from "axios";
export const AddProduct = () => {
  const [state, setState] = useState({
    title: "",
    image: "",
    price:"",

    qty: "",
  });
  const [cate, setCate] = useState("");

const submitData=()=>{

return axios.post(`https://craftvilla-clone-server.onrender.com/data/${cate}`,state).then((r)=>alert("Product Added To Server...")).catch((e)=>console.log(e)).then((q)=>setState({
  title: "",
  image: "",
  price: "",
  qty: "",
}))


}





  return (
    <>
      <div className="Heading">
        <button >Add Products To Server</button>
      </div>

      <div className="container  form-body">
        <input
          type="text"
          className="forminoput48"
          placeholder="Name of the Product"
          value={state.title} onChange={(e)=>setState({...state,title:e.target.value})}
        />
        <input type="text" className="forminoput48" placeholder="Image "  value={state.image} onChange={(e)=>setState({...state,image:e.target.value})}/>
        <input type="text" className="forminoput48" placeholder="Price "  value={state.price} onChange={(e)=>setState({...state,price:e.target.value})}/>
        <select name="Category" className="" value={cate} onChange={(e)=>setCate(e.target.value)}>
          <option value="">Select Category</option>
          <option value="home_decor">Home Decor</option>
          <option value="tote_bags">Tote Bags</option>
          <option value="kitchen_ware">Kitchen Ware</option>
          <option value="ceramic_mugs">Ceramic Mugs</option>
          <option value="idols">Idols</option>
        </select>
        <input type="text" className="forminoput48" placeholder="Quantity " value={state.qty} onChange={(e)=>setState({...state,qty:e.target.value})}/>
        <div className="add-button" onClick={submitData}>
          ADD
          <AiFillEdit />
        </div>
      </div>
    </>
  );
};