import React from 'react';
import { Link } from 'react-router-dom';
import "./ProductCat.css";

export const ProductCat = () => {
  return (
    <div className='product-category'>
        <div><Link to="/product"><img src='https://cdn.plotch.io/image/upload/C/V/1671109983_Mi5wbmc=.png' alt='Home Decor' /></Link></div>
        <div><img src='https://cdn.plotch.io/image/upload/C/V/1671109989_My5wbmc=.png' alt='Tote Bags' /></div>
        <div><img src='https://cdn.plotch.io/image/upload/C/V/1671109994_NC5wbmc=.png' alt='Kitchen Ware' /></div>
        <div><img src='https://cdn.plotch.io/image/upload/C/V/1671109999_NS5wbmc=.png' alt='Ceramic Mugs' /></div>
        <div><img src='https://cdn.plotch.io/image/upload/C/V/1671110006_Ni5wbmc=.png' alt='Idols' /></div>
    </div>
  )
}
