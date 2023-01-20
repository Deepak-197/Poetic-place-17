import React, { useState } from "react";
import { useEffect } from "react";
import "./SingleCart.css";
const SingleCart = ({ image, name, price,  handleRemoval }) => {
  const [count, setCount] = useState(1);
  if(count===0){
    handleRemoval()
}
  
  /*calculate proce */
  price = price.trim().split(" ");
  price = +price[1];
  const [Price, setPrice] = useState(price);
/*set date of delivery */
const current = new Date();
let months=["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov","Dec"]
let currDate=()=>{
if((current.getDate()+10)>31){
    return current.getDate()-20
}
return current.getDate()+10
}
const date = `${currDate()} ${months[current.getMonth()+1]} ${current.getFullYear()} `;
  
   

useEffect(() => {
    setPrice(price * count);
  }, [count]);
  return (
    <div className="cart-details">
      <div className="item-details">
        <img className="single-image" src={image} alt={name} />
        <div>
          <h3>{name}</h3>
          <button className="remove" onClick={handleRemoval}>Remove</button>
        </div>
      </div>
        <div className="counter" >
          <div>
            <button className="minus"
              onClick={() => setCount((prev) => prev - 1)}
              disabled={count === 0}
            >
              ➖
            </button>
          </div>
          <p>{count}</p>
          <div>
            <button className="add" onClick={() => setCount((prev) => prev + 1)}>➕</button>
          </div>
        </div>


        
        <h3 className="date">Estimated Delivery on {date} 10.30AM</h3>
        <h3 className="price">₹{Price}</h3>
        
    </div>
  );
};

export default SingleCart;
