import { Alert, AlertIcon, useToast } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { json } from "react-router-dom";
import "./ProductCard.css";

export const ProductCard = ( {image, name, price, buy} ) => {
  const toast = useToast()
  const buyItem = async( ) => {

    let newData={
      image,
      name,
      price,
      qty:1
    }
    try {

      let res=await axios.post("https://craftvilla-mock-server2.onrender.com/cart",
        {image,name,price,qty:1}
      )


    } catch (error) {
      console.log(error);
    }

    // axios
    //   .post({
    //     method: "post",
    //     url: "https://craftvilla-mock-server2.onrender.com/cart",
    //     data:JSON.stringify( {
    //       id,
    //       image,
    //       name,
    //       price,
    //     }),
    //   })
    //   .then(() => alert("Item is Successfully added"))
    //   .catch((err) => console.log(err));
  };

  return (
    <div className="Card">
      <img src={image} alt="" />
      <h2>{name}</h2>
      <p className="price-card"> ₹ {price}</p>
      <button className="buy"  onClick={() => {buyItem(  )
      toast({
        title: 'Item Added Successfully',
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
      }}>
        {buy}
      </button>
    </div>
  );
};
