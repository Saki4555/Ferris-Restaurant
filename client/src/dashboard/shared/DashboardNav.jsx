
import DashboardUserDropdown from "./DashboardUserDropdown";
import { HiBars3 } from "react-icons/hi2";
const DashboardNav = ({ setSmallScreenSidebarOpen}) => {
    
    return (
        <div className="flex sticky top-0 backdrop-blur-xl z-10 shadow h-16 font-jost px-10 items-center justify-between">
            <div className="flex gap-3">
            <HiBars3 onClick={() => setSmallScreenSidebarOpen(prev => !prev)}  className="md:hidden text-3xl cursor-pointer"/>
            <h1 className=" text-2xl font-bold">Dashboard</h1>
           

            </div>
            {/* <img src="" alt="j" className="w-10 h-10 rounded-full"/> */}
            
            <DashboardUserDropdown />
            
        </div>
    );
};

export default DashboardNav;
