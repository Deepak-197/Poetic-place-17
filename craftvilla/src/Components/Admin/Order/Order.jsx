import React,{useEffect,useState} from "react";
 import "./Order.css"
//  import { Button } from "@chakra-ui/react";
 import  SingleProduct  from "../SingleProduct/SingleProduct"; 
 import axios from "axios";

 export const Order = () => {
  const [data,setData]=useState([]);
  const [param,setParam]=useState("cart")
  const getdata=(param)=>{

  return  axios.get(`http://localhost:8080/cart`)
  .then((r)=>setData(r.data)).catch((e)=>console.log(e))
 }
  useEffect(()=>{
    getdata(param)
  },[param])



const ondeletitem=(id,param)=>{

 return axios 

    .delete(`http://localhost:8080/${id}`).then((r)=>{

        alert("Product Deleted from Server..")
    }).catch((e)=>{
        console.log(e)
    }).then( getdata(param))

}
   return (
     <>
 <div className="tophead">
       
       <button >Orders</button>
     </div>
     <div className="productsdisplay">
        {
          data.length>0&&data.map((item)=>{
            return <SingleProduct key={item.id} item={item} onDelet={()=>ondeletitem(item.id,param)}/>
          })
        }
      </div>
     </>
   )
 }