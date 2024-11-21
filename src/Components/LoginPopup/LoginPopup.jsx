import React, { useEffect, useState } from 'react'
import './LoginPopup.css'
// import { assets } from '../../assets/assets'
import cross_icon from '../LoginPopup/close.png'
import { useContext } from 'react'
import { StoreContext } from '../../Context/StoreContext'
import axios from 'axios'

const LoginPopup = ({setShowLogin}) => {
    const[currentState,setCurrentState] = useState("Sign Up")
    const {url,setToken} = useContext(StoreContext);
    const [data,setData] = useState({
        name:"",
        email:"",
        password:""
    })

    const onChangeHandler = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        setData(data=>({...data,[name]:value}))
    }

    const onLogin = async (event) =>{
        event.preventDefault();
        let newUrl = url;
          
        if(currentState==="Login"){
            newUrl += "/api/user/login"
            
        }
        else{
            newUrl += "/api/user/register"
        }


        const response = await axios.post(newUrl,data);
        if(response.data.success){
            setToken(response.data.token);
            localStorage.setItem("token",response.data.token);
            setShowLogin(false)
        }
        else{
            alert(response.data.message);
        }
    }


  return (
    <div className='login-popup' >
        <form onSubmit={onLogin} className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currentState}</h2>
                <img onClick={()=>setShowLogin(false)} src={cross_icon}  alt="" />
            </div>
            <div className="login-popup-input">
                {currentState==="Login"?<></>:<input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Your Name' required/>}
                <input type="email" name='email' onChange={onChangeHandler} value={data.email} placeholder='Enter You Email' required />
                <input type="password" name='password' onChange={onChangeHandler} value={data.password} placeholder='Password' required />
                <button type='submit'>{currentState==="Sign Up"?"Create Account":"Login"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" require />
                    <p>By continuing, I agree to the terms and conditions</p>
                </div>
                {currentState==="Login"
                ?<p>Create a new account? <span onClick={()=>setCurrentState('Sign Up')}>Click Here</span></p>
                : <p>Already have an account? <span onClick={()=>setCurrentState('Login')}>Login Here</span></p>
             }
                
               
            </div>
        </form>
    </div>
  )
}

export default LoginPopup