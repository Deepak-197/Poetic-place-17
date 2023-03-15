import { Box } from '@chakra-ui/react'
import React, { useState } from 'react'
import '../../CSS/Filter.css'
export default function Filter() {
  let [arr,setArr]=useState([])
  let [minprice,setMinprice]=useState()
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
console.log((arr).split("-"));
  }

  return (
    <Box>

    <div style={{
      // border:"1px solid grey",
      marginTop:'20px',
    }}>
      <div>    
        <div id='idk'>
        <small>Home/ </small>
        <h3>Filter by</h3>
        <span>Price <button onClick={toggleVisibility}>▽</button>
        <div id='child' onChange={handleFilter} >
          <li>
           <p><input type="radio" name="filter" value={"1000-2000"} />₹1000-₹2000</p>
           <p><input type="radio" name="filter" value={"500-1000"} />₹500-₹1000</p>
           <p><input type="radio" name="filter" value={"100-1000"} />₹100-₹500</p>
          </li>
        </div>
        </span>
        {/* <span>Discount <button>▽</button></span>
        <span>Category <button>▽</button></span>
        <span>Time to Ship <button>▽</button></span>
        <span>Returnable <button>▽</button></span>
        <span>cancellable <button>▽</button></span>
        <span>Store Name <button>▽</button></span> */}
        </div>
      </div>
    </div>
        </Box>
  )
}
