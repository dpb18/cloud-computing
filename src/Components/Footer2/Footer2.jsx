import React from "react";
import { LuShirt } from "react-icons/lu";
import "./Footer2.css";
import { TbTruckDelivery } from "react-icons/tb";
import { MdDiscount } from "react-icons/md";
import { MdOutlinePriceChange } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer2 = () => {
  return (
    <footer>
      <div className="container">
        <div className="top-info around col">
          <div className=" flex items-center indi ">
            <span className="font">
              <LuShirt />
            </span>
            <span className="ml-2 info">Everyday fresh product</span>
          </div>

          <div className=" flex items-center indi ">
            <span className="font">
              <TbTruckDelivery />
            </span>
            <span className="ml-2  info">Free Delivery for Order over 600</span>
          </div>

          <div className=" flex items-center indi">
            <span className="font">
              <MdDiscount />
            </span>
            <span className="ml-2  info">Daily mega Discounts</span>
          </div>

          <div className=" flex items-center">
            <span className="font">
              <MdOutlinePriceChange />
            </span>
            <span className="ml-2  info">Best price on the market</span>
          </div>
        </div>

        <div className="row mt-16 col linksWrap">
          <div className="items-start ml-20">
            <h3 className="flex items-start justify-center">
              FRUITS & VEGETABLES
            </h3>
            <ul className="items-start justify-start">
              <li>
                <Link to={"#"}>Fresh Vegetables</Link>
              </li>
              <li>
                <Link to={"#"}>Herbs & Seasonings</Link>
              </li>
              <li>
                <Link to={"#"}>Fresh Fruits</Link>
              </li>
              <li>
                <Link to={"#"}>Cuts & Sprouts</Link>
              </li>
              <li>
                <Link to={"#"}>Exotic Fruits & Veggies</Link>
              </li>
              <li>
                <Link to={"#"}>Packaged Products</Link>
              </li>
              <li>
                <Link to={"#"}>Party Trays</Link>
              </li>
            </ul>

            <h3 className="flex items-start justify-center">
              BREAKFAST & DAIRY
            </h3>
            <ul>
              <li>
                <Link to={"#"}>Fresh Vegetables</Link>
              </li>
              <li>
                <Link to={"#"}>Herbs & Seasonings</Link>
              </li>
              <li>
                <Link to={"#"}>Fresh Fruits</Link>
              </li>
              <li>
                <Link to={"#"}>Cuts & Sprouts</Link>
              </li>
              <li>
                <Link to={"#"}>Exotic Fruits & Veggies</Link>
              </li>
              <li>
                <Link to={"#"}>Packaged Products</Link>
              </li>
              <li>
                <Link to={"#"}>Party Trays</Link>
              </li>
            </ul>

            <h3 className="flex items-start justify-center">BEVERAGES</h3>
            <ul>
              <li>
                <Link to={"#"}>Fresh Vegetables</Link>
              </li>
              <li>
                <Link to={"#"}>Herbs & Seasonings</Link>
              </li>
              <li>
                <Link to={"#"}>Fresh Fruits</Link>
              </li>
              <li>
                <Link to={"#"}>Cuts & Sprouts</Link>
              </li>
              <li>
                <Link to={"#"}>Exotic Fruits & Veggies</Link>
              </li>
              <li>
                <Link to={"#"}>Packaged Products</Link>
              </li>
              <li>
                <Link to={"#"}>Party Trays</Link>
              </li>
            </ul>

            <h3 className="flex items-start justify-center">BREAD & BAKERY</h3>
            <ul>
              <li>
                <Link to={"#"}>Fresh Vegetables</Link>
              </li>
              <li>
                <Link to={"#"}>Herbs & Seasonings</Link>
              </li>
              <li>
                <Link to={"#"}>Fresh Fruits</Link>
              </li>
              <li>
                <Link to={"#"}>Cuts & Sprouts</Link>
              </li>
              <li>
                <Link to={"#"}>Exotic Fruits & Veggies</Link>
              </li>
              <li>
                <Link to={"#"}>Packaged Products</Link>
              </li>
              <li>
                <Link to={"#"}>Party Trays</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="copyright mt-3 pt-3 pb-11 flex ml-24">
          <p className="mb-0 font-bold"> BusketBite service provider...</p>
          <ul className="list inline-flex ml-auto mb-0 gap-8">
            <li className="inline-flex">
              <Link to={"#"}>
                <FaFacebook />
              </Link>
            </li>

            <li className="inline-flex">
              <Link to={"#"}>
                <FaTwitter />
              </Link>
            </li>

            <li className="inline-flex">
              <Link to={"#"}>
                <FaInstagram />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
