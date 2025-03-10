import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TopFoodCard from "./TopFoodCard";
import topFoodBg from '../../../assets/home/topfood-bg.jpg';
import { AiOutlineDown } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa";

const TopFood = () => {
  const [topFood, setTopFood] = useState([]);
  console.log(topFood);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BASE_URL}/topfoods`)
      .then((res) => res.json())
      .then((data) => {
        setTopFood(data);
      });
  }, []);

  return (
    
  
     <div className="bg-cover bg-center bg-fixed" style={{
      backgroundImage: `url(${topFoodBg})`
    }}>
    <div className=" bg-gray-800/20 backdrop-blur-sm py-20">
    <div className="container mx-auto px-10">
     <div className="text-center py-10 bg-gray-900/20 mb-10 space-y-2">
      <span className="text-ferris-prim border-b-2 border-b-ferris-prim font-jost font-semibold">Food</span>
        <h2 className="lg:text-5xl font-cormorant text-ferris-sec/90 text-3xl font-bold">
          Our Top Selling Foods
        </h2>
        {/* <p className="lg:w-1/2 mx-auto my-4 text-ferris-sec/80">
          "Discover Culinary Bliss: Our Top Sellers. Taste the extraordinary!
          From succulent steaks to ocean-fresh seafood and gourmet delights,
          indulge in our finest creations. Satisfy your cravings at{" "}
          <span className="font-bold text-[#FF3811]">Tastebud Tavern</span>
        </p> */}
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-7">
        {topFood.map((food) => (
          <TopFoodCard key={food._id} food={food} />
        ))}
      </div>
      <Link
        className="btn rounded-none btn-primary-styles border-none text-white capitalize flex mt-10 w-36 mx-auto"
        to="/allfood"
      >
        See more <FaArrowRight />
      </Link>
     </div>
     </div>
    </div>
  
   
  );
};

export default TopFood;
