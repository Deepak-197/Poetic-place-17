import React,{useEffect,useState} from "react";
import "./Dashboard.css";
// import { button, ButtonGroup,Box } from "@chakra-ui/react";
import  SingleProduct  from "../SingleProduct/SingleProduct"; 
import axios from "axios";

export const Dashboard = () => {
const [data,setData]=useState([]);
const [param,setParam]=useState("home_decor")
const getData=(param)=>{
  return  axios.get(`https://craftvilla-mock-server.onrender.com/${param}`)
  .then((r)=>setData(r.data)).catch((e)=>console.log(e))
 }
useEffect(()=>{
  getData(param)
},[param])



const ondeletitem=(id,param)=>{

 return axios 
    .delete(`http://localhost:8080/${param}/${id}`).then((r)=>{
        alert("Product Deleted from Server..")
    }).catch((e)=>{
        console.log(e)
    }).then( getData(param))
 

    


}

  return (
    <>
      <div className="tophead">
       
        <button >Dashboard</button>
      </div>
     <div className="totaldata">
     <div className="t123">
      <h1>Total Products</h1>
      <p className="countsdf3">{data.length}0</p>
      </div>
     <div className="t1234"><h1>Weekly Sells</h1>
      <p className="countsdf3">121</p> </div>
     <div className="t1235"><h1>Weekly order Count</h1>
      <p className="countsdf3">437</p></div>
     </div>

      <div className="products-button">
      <button  onClick={()=>setParam("home_decor")}>Home Decor</button>
      <button  onClick={()=>setParam("Stote_bags")}>Tote Bags</button>
      <button  onClick={()=>setParam("kitchen_ware")}>Kitchen Ware</button>
      <button  onClick={()=>setParam("ceramic_mugs")}>Ceramic Mugs</button>
      <button  onClick={()=>setParam("idols")}>idols</button>
  </div>
      <div className="productsdisplay">
        {
          data.length>0&&data.map((item)=>{
            return <SingleProduct key={item.id} item={item} onDelet={()=>ondeletitem(item.id,param)}/>
            // return <singleProduct/>
          })
        }
      </div>
    </>
  );
};
