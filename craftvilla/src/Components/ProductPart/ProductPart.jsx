import React, { useState } from 'react';
import "./ProductPart.css";

export const ProductPart = () => {
   const [prod, setProd] = useState([
    "https://cdn.plotch.io/image/upload/C/V/1671110234_SG9tZWRlY29yLnBuZw==.png",
    "https://cdn.plotch.io/image/upload/C/V/1671110241_NS5wbmc=.png",
    "https://cdn.plotch.io/image/upload/C/V/1671110248_Ni5wbmc=.png",
    "https://cdn.plotch.io/image/upload/C/V/1671110264_My5wbmc=.png"
   ])

  return (
    <div className='Main-div'>
        <div className='product'>
            {prod.map((item) => (
                <div><img src={item} /></div>
            ))}
        </div>
    </div>
  )
}
