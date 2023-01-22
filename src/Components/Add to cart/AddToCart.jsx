import React from "react";
import "./AddToCart.css";
const AddToCart = () => {
  return (
    <div>
      <div className="top-bar">
        <div>
          <h3 className="top-bar-heading">Home/My Cart</h3>
          <h3>My Cart(2 items)</h3>
        </div>
        <div className="right-bar">
          <h3>SubTotal:410</h3>
          <div>
            <button className="place-order-button">Place Order</button>
          </div>
        </div>
      </div>
      <table>
        <tr>
            <th>Item Details</th>
            <th>Quantity</th>
            <th>Delivery</th>
            <th>Price</th>
        </tr>
      </table>
    </div>
  );
};

export default AddToCart;
