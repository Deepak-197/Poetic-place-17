import React from 'react'
import { CategoryDevider } from '../../Components/CategoryDevider/CategoryDevider'
import { Footer } from '../../Components/Footer'
import { ImageSlider } from '../../Components/ImageSlider/ImageSlider'
import { ProductPart } from '../../Components/ProductPart/ProductPart'

export const Homepage = () => {
  
  return (

    <div>

        <CategoryDevider />
        <ImageSlider />
        <ProductPart />
        <Footer />
    </div>
  )
}
