
import {
  AiFillDashboard,
  AiOutlineInbox,
  AiOutlineUser,
  AiOutlineCalendar,
  AiOutlineSearch,
  AiOutlineBarChart,
  AiOutlineFolder,
  AiOutlineSetting,
  AiOutlineDoubleLeft,

} from "react-icons/ai";

import useUserData from "../../hooks/useUserData";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import BuyerMenu from "../buyer/BuyerMenu";
import AdminMenu from "../admin/AdminMenu";

const Sidebar = ({isOpen, setIsOpen}) => {
 const [userData, loading] = useUserData();
 const navigate = useNavigate();
 const {user} = useAuth();
 console.log(userData);
 console.log(user);



  return (
    
      <div
        className={`${
          isOpen ? "w-72" : "w-20"
        } bg-dark-purple flex flex-col  h-screen bg-ferris-prim p-5 pt-8 relative duration-500`}
      >
        <button
          className={`absolute ${isOpen ? '' : "rotate-180"} transition-transform duration-700 cursor-pointer -right-3 top-9 p-2 text-white border-2 rounded-full bg-ferris-prim`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <AiOutlineDoubleLeft />
        </button>
        <div className="flex gap-x-4 items-center">
          <h1 type='button' onClick={() => navigate('/')}
            className={`text-white transform origin-left font-medium cursor-pointer text-xl duration-1000 ${
              !isOpen && "scale-0"
            }`}
          >
            Designer
          </h1>
        </div>
      {/* <BuyerMenu isOpen={isOpen}/> */}
      <AdminMenu isOpen={isOpen} />
       
           
       
      </div>

      // <BuyerMenu />
      
   
  );
};

export default Sidebar;
