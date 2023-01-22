import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function Sort() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialOrder = searchParams.get("order");
  const [order, setOrder] = useState(initialOrder || "");

  const handleSort = (e) => {
    console.log(9);
    setOrder(e.target.value);
  };

  useEffect(() => {
    const params = {
    };
    order && (params.order = order);
    setSearchParams(params);
  }, [order]);


  return (
    <>
     <div style={{float:"right", fontSize:"16px",padding:'10px',margin:"-10px 0px 0px 0px"}}>Showing 1 - 48 of 4291</div>
     <div  style={{
        display:"flex",
        gap:"10px",
        fontSize:"21px",
        fontFamily:"Merriweather",
        cursor:"pointer",
        width:"auto"
    }}>
      <p>Sort By: Popular |</p>
      <p onClick={handleSort} value={"asc"} defaultChecked={order === "asc"}>Price:  Low to High |</p>
      <p >Price: High to Low |</p>
      <p>Discount |</p>
      <p>New Arrivals </p>
    </div>
    </>
  )
}






// import React from "react"
// import { useDispatch,useSelector } from "react-redux";

// export default function Sort() {
// const products = useSelector((store) => store.products);

//     const sortProductsLowToHigh = (products) => {
//         console.log(products);
//     return products.sort((a, b) => a.price - b.price)
//     };
    
//     const sortProductsHighToLow = (products) => {
//         console.log(products);
//     return products.sort((a, b) => b.price - a.price)
//     };
    
//     return(
//     <>
//     <div style={{float:"right", fontSize:"16px",padding:'10px',margin:"-10px 0px 0px 0px"}}>Showing 1 - 48 of 4291</div>
//     <div style={{
//         display:"flex",
//         gap:"10px",
//         fontSize:"21px",
//         fontFamily:"Merriweather",
//         cursor:"pointer",
//         width:"auto"
//     }}>
//       <p>Sort By: Popular |</p>
//       <p onClick={()=>sortProductsLowToHigh(products)}>Price:  Low to High |</p>
//       <p onClick={()=>sortProductsHighToLow(products)}>Price: High to Low |</p>
//       <p>Discount |</p>
//       <p>New Arrivals </p>
//     </div>
//     </>
//   )
// }
