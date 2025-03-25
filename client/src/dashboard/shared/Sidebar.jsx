import { AiOutlineDoubleLeft } from "react-icons/ai";
import { HiBars3 } from "react-icons/hi2";

import { useNavigate } from "react-router-dom";
import BuyerMenu from "../buyer/BuyerMenu";
import AdminMenu from "../admin/AdminMenu";

const Sidebar = ({
  isOpen,
  setIsOpen,
  smallScreenSidebarOpen,
  setSmallScreenSidebarOpen,
}) => {
  const navigate = useNavigate();

  return (
    <>
      {/* md-lg- screen */}
      <div
        className={`${
          isOpen ? "w-72" : "w-20"
        } bg-dark-purple hidden md:flex flex-col shadow-lg shadow-ferris-prim/20 border  h-screen bg-white p-5 pt-8 relative duration-500`}
      >
        <button
          className={`absolute ${
            isOpen ? "" : "rotate-180"
          } transition-transform hover:text-ferris-prim  duration-700 cursor-pointer -right-3 top-9 p-2 text-ferris-ter  rounded-full`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <AiOutlineDoubleLeft className="text-xl hover:scale-125 transition-all" />
        </button>
        <div className="flex gap-x-4 items-center">
          <h1
            type="button"
            onClick={() => navigate("/")}
            className={`text-ferris-prim transform origin-left font-cormorant font-bold cursor-pointer text-5xl duration-500 ${
              !isOpen && "scale-0"
            }`}
          >
            Ferris Osteria
          </h1>
        </div>
        {/* <BuyerMenu isOpen={isOpen}/> */}
        <AdminMenu
          isOpen={isOpen}
          smallScreenSidebarOpen={smallScreenSidebarOpen}
        />
      </div>
      {/* small screen */}
      {smallScreenSidebarOpen && (
        <div className={`flex  w-screen  absolute inset-0  z-[999] md:hidden`}>
          <div className="w-72  flex flex-col md:hidden h-screen bg-ferris-prim p-5 pt-8 duration-500">
            <div className="flex gap-x-4 text-white items-center">
              <button  onClick={() => setSmallScreenSidebarOpen((prev) => !prev)}>
                <HiBars3
                 
                  className="text-3xl cursor-pointer"
                />
              </button>
              <button className="font-bold font-cormorant text-2xl" onClick={() => navigate('/')}>Ferris Osteria</button>
            </div>
            <AdminMenu
              setSmallScreenSidebarOpen={setSmallScreenSidebarOpen}
              isOpen={isOpen}
            />
          </div>
          <div
            onClick={() => setSmallScreenSidebarOpen((prev) => !prev)}
            className="flex-1 h-screen bg-black/20"
          ></div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
