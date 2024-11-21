import { createContext, useEffect, useState } from "react";
import axios from 'axios'
import { Item_list } from "../assets/assest.js";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const [cartItems, setCartItems] = useState({});
    // const [Item_list,setItem_list] = useState([]);
    const [token,setToken] = useState("");
    const url = "http://localhost:4000"

    const addToCart = async(itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }))
        }
        else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }
    }
    const removeFromCart = async (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }

    // const getTotalCartAmount = () => {
    //     let totalAmount = 0;
    //     for (const item in cartItems) {
    //         if (cartItems[item] > 0) {
    //             let itemInfo = Item_list.find((e) => e._id === item);
    //             console.log("Initial log:", itemInfo);

    //             totalAmount += itemInfo.price* cartItems[item];
    //         }

    //     }
    //     return totalAmount;
    // }

   const getTotalCartAmount =()=>{
        let totalAmout = 0;
        for(const item in cartItems){
            if(cartItems[item] >0){
                let itemInformation = Item_list.find((product)=>product.id === item);
                console.log("Initial log:",itemInformation)
                totalAmout += itemInformation.price* cartItems[item]
            }
        }
        return totalAmout;
    }

    // const fetchItemList = async ()=>{
    //     const response = await axios.get(url+"/api/food/list")
    //     setItem_list(response.data.data)
    // }

    // const loadCartData = async (token) =>{
    //     const response = await axios.post(url+"/api/cart/get",{},{headers:{token}})
    //     setCartItems(response.data.cartData);
    // } 

    // useEffect(()=>{
        
    //     async function loadData(){
    //         await fetchItemList();
    //         if(localStorage.getItem("token")){
    //             setToken(localStorage.getItem("token"));
    //             await loadCartData(localStorage.getItem("token"));
    //         }
    //     }
    //     loadData();
    // },[])


// useEffect(()=>{
//         console.log(cartItems);
//     },[cartItems])
    const contextValue = {
        Item_list,
        cartItems, setCartItems,
        addToCart, removeFromCart,
        getTotalCartAmount,url,
        token,setToken
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider