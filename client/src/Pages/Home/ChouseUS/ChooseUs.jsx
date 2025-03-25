import { CHOOSE_US_DATA } from "../../../constants";
import ChooseUsCard from "./ChooseUsCard";

import bgImg from "../../../assets/home/choose-bg.png";

const ChooseUs = () => {
  return (
    <div
      className="bg-gray-950/5 text-white bg-fixed object-cover object-center  text-center py-20"
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
    >
      <div className="container mx-auto px-10">
        <div className="bg-gray-800/40 mb-5 p-7 space-y-2 text-center">
          <span className="text-ferris-prim border-b border-b-ferris-prim font-semibold font-jost text-center text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            Why Choose Us
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-ferris-sec font-bold font-cormorant text-center mb-6 sm:mb-8 md:mb-10">
            Our Strength
          </h1>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4 grid-cols-1">
          {CHOOSE_US_DATA.map((item, index) => (
          
              <ChooseUsCard key={index} item={item} />
           
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
