import React from "react";

export const ProductCard = ({ image,name,price }) => {
  return (
    <div>
      <img src={image}/>
      <h3>{name}</h3>
      <p> {price}</p>
      <button>Add to Cart</button>
    </div>
  );
};
