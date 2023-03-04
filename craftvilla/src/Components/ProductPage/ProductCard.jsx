import React from "react";
import "./ProductCard.css"

export const ProductCard = ({ image,name,price,buy }) => {
  return (
    <div className="Card" >
      <img src={image} alt=""/>
      <h2>{name}</h2>
      <p className="price-card"> ₹ {price}</p>
      <button id="buy">{buy}</button>
    </div>
  );
};
