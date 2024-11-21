import React, { useContext } from 'react'
import './ShopCategory.css'
import { StoreContext } from '../../Context/StoreContext'
import ProductItem from '../../Components/ProductItem/ProductItem'
import { Item_list } from '../../assets/assest'

const ShopCategory = (props) => {
  // const {Item_list} = useContext(StoreContext)
  return (
    <>
    <div className='shop-category'>
        <img className='shopcategory-banner' src={props.banner} alt="" />
        <div className="shopcategory-indexSort">
          <p>
            <span>Showing 1-12</span> out of 36 products
          </p>
        </div>
    </div>
    <div className="shopcategory-products">
          {Item_list.map((item,i,id)=>{
            if(props.category===item.category){
              return <ProductItem key={i} id={item.id} name={item.name} image={item.image} price={item.price}/>
            }
            else{
              return null;
            }
          })}
    </div>
    </>
  )
}

export default ShopCategory