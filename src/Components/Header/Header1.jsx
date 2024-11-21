import React, { useContext } from "react";
import { FaSearch } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { StoreContext } from "../../Context/StoreContext";
import profile_icon from "../Header/profile_icon.png";
import bag_icon from "../Header/bag_icon.png";
import logout_icon from "../Header/logout_icon.png";
import "./Header1.css"
const header = ({setShowLogin}) => {
  const {token,setToken,getTotalCartAmount} = useContext(StoreContext);
  const navigate = useNavigate();
  const logout = () =>{
    localStorage.removeItem("token");
    setToken("");
    navigate("/")
    
  }
  return (
    <header className="h-20 shadow-md bg-white">
      <div className="h-full container mx-auto flex items-center px-20 justify-between">
        <div>
          <Link to={"/"}>
          <img src="./images/logo.jpeg" alt="logo" height={50} width={70} />
          </Link>
        </div>

        <div className="hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow pl-2 ">
          <input
            type="text"
            placeholder="search product here.."
            className="w-full outline-none pl-2"
          />
          <div className="text-lg min-w-[50px] h-8 bg-red-600 flex items-center justify-center rounded-r-full text-white cursor-pointer hover:bg-red-700 ">
            <FaSearch />
          </div>
        </div>

        <div className="flex items-center gap-7">
          <div className="text-3xl cursor-pointer">
          <FaLocationDot />
          </div>
          <div className="text-3xl cursor-pointer">
          <FaRegHeart />
          </div>
          {/* <div className="text-3xl cursor-pointer">
            <FaRegCircleUser />
          </div> */}
          <div className="text-3xl cursor-pointer relative">
            <Link to='/cart'><span><FaShoppingCart /></span></Link> 

            <div className={getTotalCartAmount()===0?"":"bg-green-500 text-white w-3 h-3 rounded-full p-1 flex items-center justify-center absolute top-0 -right-3"}>
              <p className="text-sm"></p>
            </div>
          </div>

          <div>
            {
              !token?<button to={"/login"} className="px-3 py-1 rounded-full text-white bg-red-600 hover:bg-red-700" onClick={()=>setShowLogin(true)} >Sign Up</button>
              :<div className="navbar-profile">
                <img src={profile_icon} alt=""/>
                <ul className="nav-profile-dropdown">
                    <li><img src={bag_icon} alt=""/><p>Orders</p></li>
                    <hr/>
                    <li onClick={logout}><img src={logout_icon} alt=""/><p>Logout</p></li>
                </ul>

              </div>
            }
            
          </div>
        </div>
      </div>
    </header>
  );
};

export default header;
