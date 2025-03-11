import { useEffect, useState } from "react";
import ComingSoonModal from "../../components/main-modals/ComingSoonModal";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import "react-loading-skeleton/dist/skeleton.css";
const FoodDetails = ({ food }) => {
  useEffect(() => {
    window.scrollTo(0,0)
  },[])
  const [quantity, setQuantity] = useState(1);
   const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row items-center md:items-start bg-white p-6  max-w-5xl mx-auto py-20">
      {/* Food Image */}
      <div className="w-full md:w-1/2">
        <img
          src={food.img}
          alt={food.foodName}
          className=" shadow-md w-full h-[380px] object-cover"
        />
      </div>

      {/* Food Details */}
      <div className="w-full font-jost md:w-1/2 space-y-5 md:pl-8 mt-6 md:mt-0">
        <h2 className="text-3xl font-bold text-ferris-ter ">{food.foodName}</h2>

        {/* Rating */}
        {/* <div className="flex items-center mt-2">
          <span className="text-yellow-500 text-xl">★★★★★</span>
          <p className="ml-2 text-gray-600">(1 customer review)</p>
        </div> */}

        {/* Price */}
        <p className="text-2xl font-semibold text-red-500 mt-2">
        €{food.price}
        </p>

        {/* Description */}
        <p className="text-gray-700 mt-4">{food.description.slice(0, 200)}</p>

        {/* Quantity Selector */}
        <div className="mt-4 flex items-center">
          <input
            type="number"
            value={quantity}
            min="1"
            max={food.quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="w-16 p-2 border border-gray-300 rounded-md text-center"
          />
          <button onClick={() => setIsOpen(true)} className="ml-4 bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-semibold">
            Add to cart
          </button>
        </div>

        {/* Additional Info */}
        <div className="mt-6 text-sm text-gray-600">
          <p>
            <strong>Category:</strong> {food.foodCategory}
          </p>
          <p>
            <strong>Origin:</strong> {food.origin}
          </p>
          <p>
            <strong>Added By:</strong> {food.addedBy}
          </p>
        </div>
      </div>
      <ComingSoonModal isOpen={isOpen} setIsOpen={setIsOpen}/>
          <Skeleton width={150} height={150} count={3} />

    </div>
  );
};

export default FoodDetails;
