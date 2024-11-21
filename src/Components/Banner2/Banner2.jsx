import React from "react";
import "./Banner2.css";
import { IoBagAddOutline } from "react-icons/io5";
import HeroPng from "../../assets/fruits/fruits2.jpg";

const Banner2 = () => {
  return (
    <section className="">
    <div className="container2 grid grid-cols-1 md:grid-cols-2 min-h-[650px] bg-pink-200  mt-2 rounded-lg">
      <div className="flex flex-col justify-center py-14 md:py-0 relative z-10">
        <div className="health text-center md:text-left space-y-6 lg:max-[400px]:">
          <h1 className="text-5xl lg:text-6xl font-bold leading-relaxed xl:leading-loose ">
            Healthy
            <br />
            Fresh
            <span className="text-orange-500">Fruits!</span>
          </h1>
          <p className="text-2xl tracking-wide">
            Order Now For Fresh Healthy Life
          </p>
          <p className="text-gray-400">
            Healthy and Yummy food for fresh morning breakfast. Eat daily for
            good health and mind Order now and get 20% of on your first order.
          </p>
          <button className="primary-btn flex items-center gap-2">
            <IoBagAddOutline />
            Order Now
          </button>
        </div>
      </div>
      <div className=" flex justify-center items-center">
        <img
          src={HeroPng}
          alt="fruits"
          className="w-[350px] md:w-[550px] drop-shadow rounded-full"
        ></img>
      </div>
    </div>
    </section>
  );
};

export default Banner2;
