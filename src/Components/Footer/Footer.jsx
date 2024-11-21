import React from "react";
import "./Footer.css";
import HeroPng from "../Footer/coupon.jpeg";
import { IoMailOutline } from "react-icons/io5";
const Footer = () => {
  return (
    <section className="newsLetter mt-10 mb-10 flex items-center">
      <div className="container ml-52">
        <div className="row">
          <div className="col-md-6">
            <p className="text-white mb-1">20% Discount for your first order</p>
            <h1 className="text-white">Join our newsletter and get...</h1>
            <p className="text">
              Join our email subscription now to get updates on <br />
              promotions and coupons.
            </p>

            <form>
              <IoMailOutline />
              <input type="text" placeholder="Your email address.." />
              <button>Subscribe</button>
            </form>
          </div>

          <div className="col-md-6 image">
            <img src={HeroPng} alt="fruits" className=""></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
