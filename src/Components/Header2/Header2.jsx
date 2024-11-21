import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { IoGrid } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import "./Header2.css";
import { Link } from "react-router-dom";

const Header2 = () => {
  const [isopenSidebarVal, setisopenSidebarVal] = useState(true);

  return (
    <div>
      <div className="navbar h-20 shadow-md bg-slate-200 focus-within:shadow ">
        <div className="navpart-1">
          <div className="px-10 all-cat">
            <button
              className="bg-green-500 text-white px-2 py-3 items-center rounded-md flex gap-2 m-2"
              onClick={() => setisopenSidebarVal(!isopenSidebarVal)}
            >
              <IoGrid className="text-lg" />
              Browse All Categories <FaChevronDown />
            </button>
            <div
              className={`sidebarnav ${
                isopenSidebarVal === true ? "open" : ""
              }`}
            >
              <ul className="side shadow-lg bg-slate-100 py-5 gap-10">
                <li className="p-2">
                  <Link to={"/Vegetable"}>Vegetables</Link>
                </li>
                <li className="p-2">
                  <Link to={"/Fruits"}>Fruits</Link>
                </li>
                <li className="p-2">
                  <Link to={"/Grocery"}>Grocery</Link>
                </li>

              </ul>
            </div>
          </div>
        </div>

        <ul className="navbar-menu">

          <li>
            <Link to={"/"}>Home</Link>
          </li>

          <li>
            <Link to={"/Vegetable"}>Vegetables</Link>
          </li>

          <li>
            <Link to={"/Fruits"}>Fruits</Link>
          </li>
          <li>
            <Link to={"/Grocery"}>Grocery</Link>
          </li>

          <li>
            <Link to={"/"}>Contact</Link>
          </li>
        </ul>
        <div className="navbar-right"></div>
      </div>
    </div>
  );
};

export default Header2;
