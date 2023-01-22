import React, { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import {getProducts} from "../../Redux/product/action"
import {ProductCard} from "./ProductCard";
import { useLocation, useSearchParams } from "react-router-dom";
import Pagination from "./Pagination";
import '../../CSS/product.css'


export const ProductsList = () => {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.products);
  const [page, setPage]=useState(1);
  const location = useLocation();
  const [searchParams] = useSearchParams();

useEffect(() =>{
  const order = searchParams.get("order");
  let paramObj = {
    params: {
      _sort: order && "price",
      _order: order, 
    },
  };
  dispatch(getProducts(paramObj));
}, [location.search]);

  return(
    <>
    <div id="parent">
      { products.length > 0 && products.map((el) => {
          return <ProductCard key={el.id} {...el} />;
        })}
    </div>
    <Pagination current={page} onChange={page=>setPage(page)} />
  </>
  );
};


