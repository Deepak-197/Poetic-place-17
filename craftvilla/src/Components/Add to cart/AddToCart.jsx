import React, { useEffect, useState } from "react";
import "./AddToCart.css";
import axios from "axios";
import SingleCart from "../singleCart/SingleCart";

const AddToCart = () => {
  const [data, setData] = useState([]);
  const getData = () => {
    axios
      .get("http://localhost:8080/cart")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };
  const handleRemoval=(id)=>{
    axios.delete(`http://localhost:8080/cart/${id}`).then(()=>getData()).then(res=>setData(res.data))
}
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <div className="top-bar">
        <div>
          <h3 className="top-bar-heading">Home/My Cart</h3>
          <h3>My Cart({data.length} items)</h3>
        </div>
        <div className="right-bar">
          <h3>SubTotal:410</h3>
          <div>
            <button className="place-order-button">Place Order</button>
          </div>
        </div>
      </div>
      <hr color="#cccccc" />
      <div className="data-header">
        <h3>Item Details </h3>
        <h3>Quantity</h3>
        <h3>Delivery </h3>
        <h3>Price </h3>
      </div>
      <hr color="#cccccc" />
      {data?.map(e=>{
        return (
          <SingleCart key={e.id} {...e} handleRemoval={()=>handleRemoval(e.id)}/>
        )
      })}
    </div>
  );
};

export default AddToCart;
