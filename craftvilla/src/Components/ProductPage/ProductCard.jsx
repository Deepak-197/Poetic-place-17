import React from "react";

export const ProductCard = ({ image,name,price,buy }) => {
  return (
    <div style={{
      padding:"10px",
      height:"355px",
      width:"250px",
      cursor:"pointer",
      padding: "15px",
    }}>
      <img src={image} alt="Image"/>
      <h2>{name}</h2>
      <p> ₹ {price}</p>
      <button id="buy">{buy}</button>
    </div>
  );
};
