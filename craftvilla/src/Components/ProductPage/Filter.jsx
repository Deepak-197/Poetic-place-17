import React from 'react'
import '../../CSS/Filter.css'
export default function Filter() {
  const toggleVisibility=()=>{
    let element = document.getElementById('child');
    if(element.style.display === "none") {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  }

  return (
    <div style={{
      // border:"1px solid grey",
      marginTop:'20px',
    }}>
      <div>    
        <div id='idk'>
        <small>Home/ </small>
        <h3>Filter by</h3>
        <span>Price <button onClick={toggleVisibility}>▽</button>
        <div id='child' >
          <li>
           <p><input type="checkbox" />1000-2000(588)</p>
           <p><input type="checkbox" />2000-5000(638)</p>
           <p><input type="checkbox" />5000-10000(357)</p>
          </li>
        </div>
        </span>
        <span>Discount <button>▽</button></span>
        <span>Category <button>▽</button></span>
        <span>Time to Ship <button>▽</button></span>
        <span>Returnable <button>▽</button></span>
        <span>cancellable <button>▽</button></span>
        <span>Store Name <button>▽</button></span>
        </div>
      </div>
    </div>
  )
}
