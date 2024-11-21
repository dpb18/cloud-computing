import React, { useState } from 'react'
import Category from '../../Components/Category/Category'
import ProductDisplay from '../../Components/ProductDisplay/ProductDisplay'
import Header2 from '../../Components/Header2/Header2'
import Banner from '../../Components/Banner/Slider'
import Banner2 from '../../Components/Banner2/Banner2'
import Final from '../../Components/Final/Final'
import ProductSlider from '../../Components/ProductSlider/Productslider'
import Footer from "../../Components/Footer/Footer"
import Footer2 from "../../Components/Footer2/Footer2"




const Home = () => {
    const [category,setCategory] = useState("All");
  return (
    <div>
        
        <Banner/>
        <Final/>
        <ProductSlider/>
        <Banner2/>
        <Category category={category} setCategory={setCategory}/>
        <ProductDisplay category={category}/>
        

    </div>
  )
}

export default Home