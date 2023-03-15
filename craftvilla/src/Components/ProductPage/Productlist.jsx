import React, { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import {getProducts} from "../../Redux/product/action"
import {ProductCard} from "./ProductCard";
import { useLocation, useSearchParams } from "react-router-dom";
//import Pagination from "./Pagination";
import '../../CSS/product.css'
import { Box, Button, Flex } from "@chakra-ui/react";


export const ProductsList = () => {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.home_decor.home_decor);
  // const [page, setPage]=useState(1);
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const[order,setOrder]=useState("price")
  const [sort,setSort]=useState("")
  let [arr,setArr]=useState("0-2000")
  let [minPrice,setMinPrice]=useState("0")
  let [maxPrice,setMaxPrice]=useState("2000")
  let [page,setPage]=useState(1)
  let [limit,setLimit]=useState(20)

  const handleSort = (e) => {
    //console.log(9);
    // setOrder((e.target.value));
    setSort(e.target.value)
    // setOrder(e.target.order)
    console.log(sort);
  
  };

console.log(products,"444");
// let obj={params:{
//   _sort:searchParams.getAll('order') && 'price',
//   _order:searchParams.get("order"),
// }}
const toggleVisibility=()=>{
  let element = document.getElementById('child');
  if(element.style.display === "none") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
}
const handleFilter=(e)=>{
  setArr(e.target.value)
  //console.log(arr);
  arr=arr.split("-")
  setMinPrice(arr[0])
  setMaxPrice(arr[1])
  console.log(minPrice,maxPrice);
    }

useEffect(()=>{
    dispatch(getProducts(sort,order,minPrice,maxPrice,page,limit));
}, [order,sort,minPrice,maxPrice,page,limit]);

  return(
    <>
    <Flex>
        <Box  w="150px">

<div style={{
  // border:"1px solid grey",
  marginTop:'20px',
}}>
  <div>    
    <div id='idk'>
    <small>Home/ </small>
    <h3>Filter by</h3>
    <span>Price <button onClick={toggleVisibility}>▽</button>
    <div id='child'  onClick={handleFilter} >
      <li>
       <p><input type="radio" name="filter" value={"0-2000"} />All</p>
       <p><input type="radio" name="filter" value={"500-2000"} />₹500-₹2000</p>
       <p><input type="radio" name="filter" value={"200-1000"} />₹200-₹1000</p>
       <p><input type="radio" name="filter" value={"0-100"} />₹0-₹100</p>
      </li>
    </div>
    </span>
    </div>
  </div>
</div>
    </Box>
    <Box>

      <Box>
     <div className="sort-main-div"   >
      <p>Sort By: Popular |</p>
      <div onChange={handleSort} className="sort-price-div">
        <input type="radio" name='order' checked value='asc' />
        <label>Price low to High</label>
        <br/>
        <input type="radio" name='order' value='desc' />
        <label>Price High to low</label>
      </div>
    </div>
    </Box>
    <div id="parent" >
      { products && products.length > 0 ? products.map((el) => {
          return <ProductCard key={el.id} {...el} />;
        }):<div >
          <img  style={{marginLeft:"300px",marginTop:"150px"}} src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" alt="" />
          </div>}
    </div>
    

    
    {/* <Pagination current={page} onChange={page=>setPage(page)} /> */}
    </Box>
  </Flex>
    <Flex m={"20px"} gap="10px"  justifyContent="center">
      <Button bgColor={"blue.200"}  onClick={()=>{setPage(prev=>prev-1)}} isDisabled={page<=1} >Prev</Button>
      <Button>{page}</Button>
      <Button bgColor={"blue.200"} onClick={()=>{setPage(prev=>prev+1)}} >Next</Button>
    </Flex>
    </>
  );
};