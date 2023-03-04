import React, { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import {getProducts} from "../../Redux/product/action"
import {ProductCard} from "./ProductCard";
import { useLocation, useSearchParams } from "react-router-dom";
import Pagination from "./Pagination";
import '../../CSS/product.css'


export const ProductsList = () => {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.home_decor.home_decor);
  // const [page, setPage]=useState(1);
  // const location = useLocation();
  // const [searchParams] = useSearchParams();

console.log(products,"444");

useEffect(()=>{
    dispatch(getProducts());
}, []);

  return(
    <>
    <div id="parent">
      { products && products.length > 0 ? products.map((el) => {
          return <ProductCard key={el.id} {...el} />;
        }):<div>
          <h1>Loading...</h1>
          </div>}
    </div>
    {/* <Pagination current={page} onChange={page=>setPage(page)} /> */}
  </>
  );
};