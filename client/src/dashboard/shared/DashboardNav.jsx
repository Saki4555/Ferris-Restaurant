import { FaUser } from "react-icons/fa";
import DashboardUserDropdown from "./DashboardUserDropdown";

const DashboardNav = () => {
    return (
        <div className="flex shadow h-16 font-jost px-10 items-center justify-between">
            <h1 className=" text-2xl font-bold">Dashboard</h1>
            {/* <img src="" alt="j" className="w-10 h-10 rounded-full"/> */}
            <FaUser className="text-5xl"/>
            <DashboardUserDropdown />
            
        </div>
    );
};

export default DashboardNav;
