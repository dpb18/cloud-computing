// src/components/ProductSlider.jsx
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import images
import apple from "../../images/apple.jpg";
import Bhujia from "../../images/Bhujia.jpg";
import GluconD from "../../images/GluconD.jpg";
import paneer from "../../images/paneer.jpg";
import peas from "../../images/peas.jpg";
import Amul from "../../images/Amul.jpg";
import Banana from "../../images/Banana.jpg";
import Ghee from "../../images/Ghee.jpg";


const ProductSlider = () => {
  
  const products = [
    {
      id: 1,
      name: "Apple",
      description: "Apple Red Delicious 1 kg.",
      price: 80,
      discountPrice: 62.4,
      discount: "22% OFF",
      image: apple,
    },
    {
      id: 2,
      name: "Bikaji Bhujia",
      description: "Bikaji Aslee Bikaneri Bhujia Snack 1kg (Pack of 1).",
      price: 129.99,
      discountPrice: 99.99,
      discount: "23% OFF",
      image: Bhujia,
    },
    {
      id: 3,
      name: "Glucon-D",
      description:
        "GLUCON-D Tangy Orange Energy Drink (500g, Orange Flavoured)",
      price: 59.99,
      discountPrice: 49.99,
      discount: "17% OFF",
      image: GluconD,
    },
    {
      id: 4,
      name: "Frozen Paneer",
      description: "High quality Paneer Packaging Pouch.",
      price: 190,
      discountPrice: 152,
      discount: "20% OFF",
      image: paneer,
    },
    {
      id: 5,
      name: "Frozen Peas",
      description: "Farmland Frozen Green Peas, 1 kg",
      price: 294,
      discountPrice: 160,
      discount: "25% OFF",
      image: peas,
    },
    {
      id: 6,
      name: "Amul Doodh",
      description: "Amul milk Pack of 1 (200ml)",
      price: 16,
      discountPrice: 15.99,
      discount: "5% OFF",
      image: Amul,
    },
    {
      id: 7,
      name: "Banana",
      description: "Dozen of Bananas",
      price: 100,
      discountPrice: 80,
      discount: "20% OFF",
      image: Banana,
    },
    {
      id: 8,
      name: "Ghee",
      description: "Monorama Ghee 500 G Pack",
      price: 320,
      discountPrice: 298,
      discount: "25% OFF",
      image: Ghee,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="container mx-auto my-12 px-4">
      <h2 className="text-3xl font-extrabold text-center mb-8 text-gray-800">
        Best Sellers
      </h2>
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="p-4">
            <div className="bg-gray-100 shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl h-[400px] w-[280px] mx-auto">
              <div className="relative h-[240px] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition duration-300 ease-in-out hover:scale-110"
                />
                <div className="absolute inset-0 bg-black opacity-0 hover:opacity-30 transition-opacity duration-300"></div>
              </div>
              <div className="p-4 flex flex-col justify-between h-[160px]">
                <h3 className="font-semibold text-lg text-gray-900">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm">{product.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-baseline space-x-2">
                    <span className="text-xl font-bold text-blue-600">
                      Rs.{product.discountPrice.toFixed(2)}
                    </span>
                    <span className="line-through text-gray-500">
                      Rs.{product.price.toFixed(2)}
                    </span>
                  </div>
                  <div className="text-green-600 font-bold text-sm">
                    {product.discount}
                  </div>
                </div>
                <button className="mt-2 w-full bg-blue-500 text-white py-2 rounded font-bold hover:bg-blue-600 transition duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductSlider;
