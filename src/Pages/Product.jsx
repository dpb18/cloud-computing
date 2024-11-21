import React, { useContext } from 'react'
import { StoreContext } from '../Context/StoreContext'
import { useParams } from 'react-router-dom';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import ProductIndividualDisplay from '../Components/ProductIndividualDisplay/ProductIndividualDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import { Item_list } from '../assets/assest.js';

const Product = () => {
  // const {Item_list} = useContext(StoreContext);
  const {productId} = useParams();
  const products = Item_list.find((e)=>e.id === productId);
  // console.log(products)
  return (
    <div>
      <ProductIndividualDisplay product = {products}/>
      <DescriptionBox/>
    </div>
  )
}

export default Product