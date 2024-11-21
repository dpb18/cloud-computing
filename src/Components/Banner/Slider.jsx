import React from "react";
import Slider from 'react-slick';
import "./Slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import banner1 from "../../assets/Banner/Banner-1.png";
import banner2 from "../../assets/Banner/Banner2.png";
import banner3 from "../../assets/Banner/Banner3.png";
import banner4 from  '../../assets/Banner/Banner4.png';

const images = [banner1, banner2, banner3, banner4];
const HomeSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <section className="homeSlider">
      <div className="container-fluid">
        <Slider {...settings} className="home_slider_main">
          {images.map((src, index) => (
            <div key={index}>
              <img
                src={src}
               // alt={Banner `${index + 1}`}
                style={{ width: "100%" }}
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};
export default HomeSlider;