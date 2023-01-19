import React, { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { getProducts } from "../../Redux/action";
import {ProductCard} from "./ProductCard";
import styled from "styled-components";

export const ProductsList = () => {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.products);

useEffect(() => {
  if(products.length===0){
  dispatch(getProducts());
  }
}, [dispatch,products.length]);


  return (
    <DivWrapper>
      {products.length > 0 && products.map((el) => {
          return <ProductCard key={el.id} {...el} />;
        })}
    </DivWrapper>
  );
};

const DivWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, max-content));
  grid-gap: 10px;`
