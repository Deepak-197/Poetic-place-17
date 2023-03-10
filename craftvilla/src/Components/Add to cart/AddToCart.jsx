import React, { useEffect, useState } from "react";
import "./AddToCart.css";
import axios from "axios";
import SingleCart from "../singleCart/SingleCart";
import {  useNavigate } from "react-router-dom";
import {  useToast } from "@chakra-ui/react";

const AddToCart = () => {
  const toast=useToast()
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const getData = async () => {

    try {
      let res = await axios.get(
        "https://craftvilla-mock-server2.onrender.com/cart"
      );
      await setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleRemoval = (id) => {
    axios
      .delete(`https://craftvilla-mock-server2.onrender.com/cart/${id}`)
      .then(() => getData())
      .then((res) => setData(res))
      .then(()=>window.location.reload())
      .catch((err) => console.log(err));
  };

  let totalPrice = data.reduce((initial, e) => {
    let { price, qty } = e;

    price = Number(price);

    initial = initial + price * Number(qty);

    return initial;
  }, 0);

  useEffect(() => {
    getData();
    //console.log(data);
  }, []);
  return (
    <div>
      <div className="top-bar">
        <div>
          <h3 className="top-bar-heading">Home/My Cart</h3>
          <h3>My Cart({data.length} items)</h3>
        </div>
        <div className="right-bar">
          <h3>SubTotal:₹{totalPrice + 50}</h3>
          <div>
            <button
              className="place-order-button"
              onClick={() => {
                toast({
                  title: 'Order is Placed',
                  status: 'success',
                  variant:"left-accent",
                  duration: 9000,
                  isClosable: true,
                })
                navigate("/");
              }}
            >
              Place Order
            </button>
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
      {data?.map((e) => {
        return (
          <>
            <SingleCart
              key={e.id}
              {...e}
              handleRemoval={() => handleRemoval(e.id)}
              getData={getData}
            />
          </>
        );
      })}

      <div className="bottom-details">
        <div className="address-details">
          <h3>Deliver To: </h3> <br />
          <h3> Prince Patel </h3>
          Bhavnagar,Gujarat
        </div>
        <div className="price-details">
          <h3>Price Details</h3> <br />
          <h3 style={{ color: "#cccccc" }}>Price ₹{totalPrice}</h3>
          <h3 style={{ color: "#cccccc" }}>Shipping ₹50</h3>
          <h3>subTotal ₹{totalPrice + 50} </h3>
          <br />
          <div>
            <button
              className="place-order-button"
              onClick={() => {
                toast({
                  title: 'Order is Placed',
                  status: 'success',
                  variant:"left-accent",
                  duration: 9000,
                  isClosable: true,
                })
                navigate("/");
              }}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
      <div className="div-button">
        <button
          className="place-order-button"
          onClick={() => {
            alert("Order Has been Placed");
          }}
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default AddToCart;
