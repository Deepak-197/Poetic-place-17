import axios from "axios";
import React, { useEffect, useState } from "react";
import AddToCart from "./AddToCart";
import {TiShoppingCart} from "react-icons/ti"
import { Heading } from "@chakra-ui/react";

const EmptyCart = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://craftvilla-mock-server2.onrender.com/cart")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);


    if(data.length>0){
        return <AddToCart/>
    }else{
        return(
            <div>
                <div style={{display:"flex",justifyContent:"center"}}>

            <TiShoppingCart  color="brown" size={"200px"}/>
                </div>
            <Heading color={"brown"}>Empty Cart</Heading>
            </div>
        )
    }

};

export default EmptyCart;
