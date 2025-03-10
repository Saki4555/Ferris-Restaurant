
import { Link } from 'react-router-dom';

const FoodCard = ({ food }) => {
  return (
    <div className="group font-jost bg-white shadow-lg  overflow-hidden max-w-sm transition-transform duration-300">
      <div className="overflow-hidden relative">
        <img
          src={food.img}
          alt={food.foodName}
          className="w-full h-80 object-cover object-center transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="p-5 border-t-4 border-orange-500/500 text-center">
        <h2 className="text-xl font-bold text-gray-900">{food.foodName}</h2>
        <p className="text-orange-500 font-semibold text-lg">€{food.price}</p>
        <Link to={`/details/${food._id}`}>
        <button className="mt-4 btn-primary-styles  btn btn-sm rounded-none border-none">
          View Details
        </button></Link>
      </div>
    </div>
  );
};

export default FoodCard;