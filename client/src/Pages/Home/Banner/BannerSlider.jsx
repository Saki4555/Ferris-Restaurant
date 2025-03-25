import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const BannerSlider = ({ img, info }) => {
  return (
    <div
      className="w-full h-[60vh] md:min-h-[calc(100vh-75px)] bg-gray-500 bg-blend-overlay  bg-cover bg-center bg-no-repeat  flex justify-center items-center"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className="flex  bottom-0 flex-col   rounded p-4 pb-10  justify-center items-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center text-white font-bold font-cormorant drop-shadow-lg">
          {info.title}
        </h1>
        <p className="mt-3 sm:mt-5 max-w-lg sm:max-w-xl px-4 sm:px-5 leading-relaxed sm:leading-snug text-white/75 text-center font-jost pb-5 sm:pb-7 text-sm sm:text-base md:text-lg">
        {info.description}
        </p>

       <Link
          to="/allfood"
          className="btn font-jost btn-primary-styles border-none text-white"
        >
          Explore More{" "}
          <BsFillArrowUpRightCircleFill className="text-2xl"></BsFillArrowUpRightCircleFill>
        </Link>
       
      </div>
    </div>
  );
};

export default BannerSlider;






