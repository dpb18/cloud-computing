import React from 'react'
import Category from './Components/Category/Category'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import ChatBot from 'react-simple-chatbot'
import Cart from './Pages/Cart'
import { useState } from 'react'
// import Login from './Pages/Login'
// import Signup from './Pages/Signup'
// import ForgotPassword from './Pages/ForgotPassword'
import Header1 from './Components/Header/Header1'
import LoginPopup from './Components/LoginPopup/LoginPopup'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder'
import ShopCategory from './Pages/ShopCategory/ShopCategory';
import Product from './Pages/Product'
import Footer from './Components/Footer/Footer'
import Footer2 from './Components/Footer2/Footer2'
import Header2 from './Components/Header2/Header2'
import vegetable_banner from './assets/Banner/Banner2.png'
import fruits_banner from './assets/Banner/Banner3.png'
import Verify from './Pages/Verify/Verify'

import Footer3 from './Components/Foooter3/Footer3'



const App = () => {
  const [showLogin,setShowLogin] = useState(false);


  const steps=[
    {
      id: '1',
      message: 'What is your name?',
      trigger: '2',
    },
    {
      id: '2',
      user: true,
      trigger: '3',
    },
    {
      id: '3',
      message: 'Hi {previousValue}, What are you looking for?',
      trigger: '4',
    },
    {
      id: '4',
      options: [
        { value: 1, label: 'Grocery', trigger: '5' },
        { value: 2, label: 'Fruits', trigger: '6' },
        { value: 3, label: 'Vegetable', trigger: '7' },
      ]
    },
    {
      id: '5',
      options: [
        { value: 1, label: 'Daily'},
        { value: 2, label: 'Monthly'},
      ],
    },
    {
      id: '6',
      options: [
        { value: 1, label: 'Local'},
        { value: 2, label: 'Imported'},
      ],

    },
    {
      id: '7',
      options: [
        { value: 1, label: 'Fresh'},
        { value: 2, label: 'Organic'},
      ],
    },
    {
      id: '8',
      message: 'Anything more you want {previousvalue}?',
      end:true
    },

   
  ]
  return (
    <>
    <div>
      {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
      <Header1 setShowLogin={setShowLogin}/>
      <Header2/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
          {/* <Route path="/login" element={<Login/>} />
          <Route path="forgot-password" element={<ForgotPassword/>} />
          <Route path="sign-up" element={<Signup/>} /> */}
          <Route path='/order' element= {<PlaceOrder/>}/>
          <Route path='/Grocery' element= {<ShopCategory category="Grocery"/>} />
          <Route path='/Vegetable' element={<ShopCategory banner={vegetable_banner} category="Vegetable"/>}/>
          <Route path='/Fruits' element={<ShopCategory banner={fruits_banner} category="Fruits"/>}/>
          <Route path='/product' element={<Product/>}>
              <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='/verify' element={<Verify/>}/>
      </Routes>
      <Footer/>
        <Footer2/>
        {/* <Footer3/> */}
      <ChatBot 
      steps={steps}
      floating={true}
      botDelay={1000}/>

    </div>
    </>
  )
}

export default App