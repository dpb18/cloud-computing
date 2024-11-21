import React, { useContext, useEffect, useState} from 'react'
import './ProductIndividualDisplay.css'
// import star_icon from '../Assets/star.png'
// import star_null_icon from '../Assets/star null.png'
import { StoreContext } from '../../Context/StoreContext'
import ProductItem from '../ProductItem/ProductItem'
import { useParams } from 'react-router-dom'
import Amul from '../../assets/amul.webp'
import add_icon from '../ProductIndividualDisplay/add_icon_green.png'
import remove_icon from '../ProductIndividualDisplay/remove_icon_red.png'

const ProductIndividualDisplay = ({id}) => {
    const {addToCart,Item_list,cartItems,removeFromCart} = useContext(StoreContext);
//     const [products,setProducts] = useState(null);
  const {productId} = useParams();
//   useEffect(()=>{
//     const foundProduct = Item_list.find((e)=>e._id === (productId));
//     setProducts(foundProduct);
//   },[Item_list])
//   console.log(products?.image)
    const [productData,setProductData] = useState(false);

    const fetchProductData = async () => {
        Item_list.map((item)=>{
            if (item.id === productId){
                setProductData(item)
                console.log(item);
                return null;
            }
        })
    }

    useEffect(()=>{
        fetchProductData();
    },[productId,Item_list])

  return (
    <>
    <div className='productdisplay'>
       <div className="productdisplay-left">
        {/* <div className="productdisplay-img-list">
        <img src={productData.image} alt="" />
        <img src={productData.image} alt="" />
        <img src={productData.image} alt="" />
        </div> */}
        {/* <div className="productdisplay-img">
            <img src={productData.image} className='productdisplay-main-img' alt=''/>
        </div> */}
        
        
       </div>
    
       <div className="productdisplay-right">
        <h1>{productData.name}</h1>
        <div className="productdisplay-right-star">
            {/* <img src={star_icon} alt=''/>
            <img src={star_icon} alt=''/>
            <img src={star_icon} alt=''/>
            <img src={star_icon} alt=''/>
            <img src={star_null_icon} alt=''/>
            <p>(122)</p> */}
        </div>
        <div className="productdisplay-right-prices">
            <div className="productdisplay-right-price-new">
            ₹{productData.price}
            </div>
        </div>
        <div className="productdisplay-right-description">
                {productData.description}
            
        </div>
        <div className="productdisplay-right-amount">
            {/* <h1>Select Amount</h1>
            <div className="productdisplay-right-amounts">
                <div>0.5Kg</div>
                <div>1Kg</div>
                <div>2Kg</div>
                <div>3Kg</div>
                <div>5Kg</div>
            </div> */}
            {/* {
                !cartItems[id]
                ?<button onClick={() =>addToCart(id)}>Add to Cart</button>
                :<div className='food-item-counter'>
                    <img onClick={()=>removeFromCart(id)} src={remove_icon} alt="" />
                    <p>{cartItems[id]}</p>
                    <img onClick={()=>addToCart(id)} src={add_icon} alt="" />
                </div>
            } */}
        </div>
        
        
        {/* <p className='productdisplay-right-category'><span>Category: </span>Groceries, Vegetables</p>
        <p className='productdisplay-right-category'><span>Tags: </span>Fresh</p> */}
       </div>
        </div>
        </>
  )
}

export default ProductIndividualDisplay