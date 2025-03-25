import { useEffect, useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"; // Import React Icons
import useCartProvider from "../../hooks/useCartProvider";




const FoodDetails = ({ food }) => {

 
 
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [quantity, setQuantity] = useState(1);
  const { addToCart,addToCartLoading} = useCartProvider();
console.log({addToCartLoading});
 

  const handleAddToCart = () => {
      const cartFood = {
        foodId: food._id,
        image: food.img,
        quantity: quantity,
        name: food.foodName,
        price: food.price,

      }
    
      addToCart(cartFood)
  }

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1); // Increment if under max quantity
  };

  const handleDecrease = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : prev)); // Decrement if greater than 1
  };

  return (
    <div className="flex flex-col md:flex-row items-center md:items-start bg-white p-6 max-w-5xl mx-auto pt-12 pb-16">
      {/* Food Image */}
      <div className="w-full md:w-1/2">
        <img
          src={food.img}
          alt={food.foodName}
          className="shadow-md w-full h-[380px] object-cover"
        />
      </div>

      {/* Food Details */}
      <div className="w-full font-jost md:w-1/2 space-y-5 md:pl-8 mt-6 md:mt-0">
        <h2 className="text-3xl font-bold text-ferris-ter ">{food.foodName}</h2>

        {/* Price */}
        <p className="text-2xl font-semibold text-red-500 mt-2">
          €{food.price}
        </p>

        {/* Description */}
        <p className="text-gray-700 mt-4">{food.description.slice(0, 200)}</p>

        {/* Quantity Selector */}
        <div className="mt-4 flex items-center">
          <button
            onClick={handleDecrease}
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
          >
            <AiOutlineMinus size={20} />
          </button>

          <input
            type="number"
            value={quantity}
            min="1"
            max={food.quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="w-16 p-2 border border-gray-300 rounded-md text-center mx-4"
          />

          <button
            onClick={handleIncrease}
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
          >
            <AiOutlinePlus size={20} />
          </button>

          <button
          disabled={addToCartLoading}
          onClick={handleAddToCart}
           
            className="ml-4 bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-semibold"
          >
           {addToCartLoading ? "Adding...." : " Add to cart"}
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
            <strong>Ingredients: </strong> {food.ingredients.join(", ")}
          </p>
        </div>
      </div>

   
    </div>
  );
};

export default FoodDetails;
