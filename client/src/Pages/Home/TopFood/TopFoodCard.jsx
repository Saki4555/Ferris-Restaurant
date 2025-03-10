import React from 'react';

const TopFoodCard = ({ food }) => {
  return (
    <div className="group font-jost bg-white shadow-lg  overflow-hidden max-w-sm transition-transform duration-300">
      <div className="overflow-hidden relative">
        <img
          src={food.img}
          alt={food.foodName}
          className="w-full h-60 object-cover object-center transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="p-5 border-t-4 border-orange-500/50">
        <h2 className="text-xl font-bold text-gray-900">{food.foodName}</h2>
        <p className="text-orange-500 font-semibold text-lg">${food.price}.00</p>
        <p className="text-gray-600 text-sm mt-2">
          {food.description?.substring(0, 100)}...
        </p>
        <button className="mt-4 btn-primary-styles  btn btn-sm rounded-none border-none">
          ORDER HERE
        </button>
      </div>
    </div>
  );
};

export default TopFoodCard;