
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";

export const ImageSlider=()=>{
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    

  };
  return (
    <div style={{width:"97vw"}} >
    
    <Slider {...settings} >
      <div>
        <img src={"https://cdn.plotch.io/image/upload/C/V/1671109983_Mi5wbmc=.png"} alt="" />
      </div>
      <div>
        <img src="https://cdn.plotch.io/image/upload/C/V/1671109989_My5wbmc=.png" alt=""/>
      </div>
      <div>
        <img src="https://cdn.plotch.io/image/upload/C/V/1671109994_NC5wbmc=.png" alt="" />
      </div>
      <div>
        <img src="https://cdn.plotch.io/image/upload/C/V/1671109999_NS5wbmc=.png" alt=""/>
      </div>
      <div>
        <img src="https://cdn.plotch.io/image/upload/C/V/1671110006_Ni5wbmc=.png" alt="" />
      </div>
    </Slider>
  </div>
  )
}
