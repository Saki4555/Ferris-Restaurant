



import { Link } from 'react-router-dom';

const TopFoodCard = ({ food }) => {
  return (
    <div className="group font-jost bg-white shadow-lg overflow-hidden max-w-sm transition-transform duration-300 flex flex-col">
      <div className="overflow-hidden relative h-60">
        <img
          src={food.img}
          alt={food.foodName}
          className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="p-5 border-t-4 border-orange-500/50 flex flex-col flex-grow">
        {/* Food Name - Limit to 2 lines */}
        <h2 className="text-xl font-bold text-gray-900 line-clamp-2 h-12">{food.foodName}</h2>
        
        {/* Price */}
        <p className="text-orange-500 font-semibold text-lg">€{food.price}.00</p>
        
        {/* Description - Limit to 1 line */}
        <p className="text-gray-600 text-sm mt-2 line-clamp-1">{food.description}..</p>
        
        {/* Button - Always at the bottom */}
        <div className="mt-auto">
          <Link to={`/details/${food._id}`}>
            <button className="mt-4 btn-primary-styles btn btn-sm rounded-none border-none">
              VIEW DETAILS
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopFoodCard;

