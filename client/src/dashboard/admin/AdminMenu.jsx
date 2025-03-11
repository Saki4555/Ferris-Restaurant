import { NavLink } from "react-router-dom";
import { FaTachometerAlt, FaUsers, FaBoxOpen, FaChartLine, FaCog,  } from "react-icons/fa";
import { MdOutlineNoteAdd } from "react-icons/md";
const AdminMenu = ({ isOpen, setSmallScreenSidebarOpen}) => {
  const Menus = [
    { path: "/dashboard/overview", icon: FaTachometerAlt, title: "Overview" },
    // { path: "/", icon: FaUsers, title: "Manage Users" },
    { path: "/dashboard/allfooditems", icon: FaBoxOpen, title: "Manage Foods" },
    { path: "/dashboard/adminaddfood", icon: MdOutlineNoteAdd, title: "Add Food" },
    // { path: "/", icon: FaChartLine, title: "Sales Analytics" },
    // { path: "/", icon: FaCog, title: "Settings" },
  ];

  return (
    <ul className="font-jost pt-20 space-y-3">
      {Menus.map((menu, index) => {
        const Icon = menu.icon;
        return (
          <li className="hover:bg-ferris-prim group hover:text-ferris-sec text-ferris-ter" onClick={() => setSmallScreenSidebarOpen(prev => !prev)} key={index}>
            <NavLink
  
            to={menu.path}
            className={({ isActive }) =>
              `flex items-center gap-x-4  rounded-md p-2 text-sm cursor-pointer transition-all duration-200  ${isActive ? "bg-ferris-prim text-ferris-sec" : ""}`
            }
          >
            <Icon className="text-xl" />
            
            <span className={`${!isOpen && "hidden"} origin-left`}>
              {menu.title}
            </span>
          </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default AdminMenu;
