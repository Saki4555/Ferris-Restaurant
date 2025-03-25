import { GiPizzaSlice } from "react-icons/gi";
import { MdOutlineLocalCafe, MdOutlineLocationOn } from "react-icons/md";
import { FaConciergeBell } from "react-icons/fa";

const iconMap = {
  "Authentic Italian Cuisine": (
    <GiPizzaSlice className="text-ferris-prim/80 text-5xl group-hover:text-ferris-sec transition-colors duration-300" />
  ),
  "Inviting Atmosphere": (
    <MdOutlineLocalCafe className="text-ferris-prim/80 text-5xl group-hover:text-ferris-sec transition-colors duration-300" />
  ),
  "Prime Location with Terrace Seating": (
    <MdOutlineLocationOn className="text-ferris-prim/80 text-5xl group-hover:text-ferris-sec transition-colors duration-300" />
  ),
  "Exceptional Service": (
    <FaConciergeBell className="text-ferris-prim/80 text-5xl group-hover:text-ferris-sec transition-colors duration-300" />
  ),
};

const ChooseUsCard = ({ item }) => {
  return (
    <div className="group font-jost backdrop-blur-lg shadow-md p-6 flex flex-col items-center transition-all duration-500 ease-in-out hover:scale-105 hover:bg-ferris-prim/50">
      <div className="mb-4">{iconMap[item.type]}</div>
      <h3 className="text-xl font-bold mb-2 transition-colors duration-300 text-ferris-sec">
        {item.type}
      </h3>
      <p className="text-gray-300 text-center">{item.description}</p>
    </div>
  );
};

export default ChooseUsCard;
