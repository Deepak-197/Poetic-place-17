import React from 'react';
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className='Navbar'>
      <div><img className='Navbar-Logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA7OH2_8xVgMEca8J42A5DkebhjcQR3RJNfA&usqp=CAU' alt='' /></div>
      <div className='search-bar'>
       <span>SEARCH </span>
       <input className='input-bar'  placeholder='|  Type your location here' />
       <span>🔍</span>
      </div>
      <div>
       <label>Sign In / Register</label>
      </div>
    </div>
  )
}
