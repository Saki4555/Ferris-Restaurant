import { NavLink } from "react-router-dom";
import { FaTachometerAlt, FaUsers, FaBoxOpen, FaChartLine, FaCog,  } from "react-icons/fa";
import { MdOutlineNoteAdd } from "react-icons/md";
const AdminMenu = ({ isOpen }) => {
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
          <li key={index}>
            <NavLink
  
            to={menu.path}
            className={({ isActive }) =>
              `flex items-center gap-x-4 hover:bg-ferris-ter text-ferris-sec rounded-md p-2 text-sm cursor-pointer transition-all duration-200  ${isActive ? "bg-ferris-ter" : ""}`
            }
          >
            <Icon className="text-xl" />
            <span className={`${!isOpen && "hidden"} origin-left duration-200`}>
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
