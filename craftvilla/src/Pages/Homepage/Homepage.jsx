import React from 'react'
import { CategoryDevider } from '../../Components/CategoryDevider/CategoryDevider'
import { Footer } from '../../Components/Footer'
import { Header } from '../../Components/Header/Header'
import { ImageSlider } from '../../Components/ImageSlider/ImageSlider'
import { ProductCat } from '../../Components/ProductCategory/ProductCat'
import { ProductPart } from '../../Components/ProductPart/ProductPart'

export const Homepage = () => {
  
  return (

    <div>

        <CategoryDevider />
        {/* <ImageSlider /> */}
        <ProductCat />
        <ProductPart />
        <Footer />
    </div>
  )
}
