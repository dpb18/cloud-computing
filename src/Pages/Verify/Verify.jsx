import React, { useContext, useEffect } from 'react'
import './Verify.css'
import { useNavigate, useSearchParams } from 'react-router-dom'
import axios from 'axios';
import { StoreContext } from '../../Context/StoreContext';

const Verify = () => {
    const [serachParams,setSearchParams] =useSearchParams();
    const success= serachParams.get("success")
    const orderId = serachParams.get("orderId")
    const {url} =useContext(StoreContext);
    console.log(success)

    const navigate = useNavigate();

    const verifyPayment = async() =>{
        const response = await axios.post(url+"/api/order/verify",{success,orderId})
        console.log(response.data.success)
        if(response.data.success){
            navigate("/myorders");
        }
        else{
            navigate("/")
        }
    }

    useEffect(()=>{
        verifyPayment();
    },[])

   
    return (
        <div className='verify'>
            <div className="spinner"></div>
            
        </div>
    )
}

export default Verify