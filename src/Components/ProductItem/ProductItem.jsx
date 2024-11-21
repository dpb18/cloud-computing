import React, { useContext} from 'react'
import './ProductItem.css'
import stars from '../../assets/star.png'
import stars_null from '../../assets/star null.png'
import remove_icon from '../ProductItem/remove_icon_red.png'
import add_icon from '../ProductItem/add_icon_green.png'
import { StoreContext } from '../../Context/StoreContext'
import { Link } from 'react-router-dom'

const ProductItem = ({id,name,price,image}) => {

  // const [itemCount,setItemCount] = useState(0)
  const {cartItems,addToCart,removeFromCart,url} = useContext(StoreContext)
  return (
    <div className='food-item'>
        <div className="food-item-img-container">
            <Link to={`/product/${id}`}> <img className='food-item-image' src={image} alt="" /></Link>
            {
                !cartItems[id]
                ?<img className='add' onClick={()=>addToCart(id)} src={add_icon} alt=''/>
                :<div className='food-item-counter'>
                    <img onClick={()=>removeFromCart(id)} src={remove_icon} alt="" />
                    <p>{cartItems[id]}</p>
                    <img onClick={()=>addToCart(id)} src={add_icon} alt="" />
                </div>
            }
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                {/* <img src={stars} alt="" />
                <img src={stars} alt="" />
                <img src={stars} alt="" /> */}
                
                
            </div>
            {/* <p className="food-item-desc">
                {description}
            </p> */}
            <p className="food-item-price">₹{price}</p>
        </div>
    </div>
  )
}

export default ProductItem