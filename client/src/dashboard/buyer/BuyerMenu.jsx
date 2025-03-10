import { NavLink } from "react-router-dom";
import { FaTachometerAlt, FaShoppingCart, FaUser, FaStar, FaCog } from "react-icons/fa";

const BuyerMenu = ({ isOpen }) => {
  const Menus = [
    { path: "/dashboard", icon: FaTachometerAlt, title: "Overview", },
    { path: "/", icon: FaShoppingCart, title: "My Orders" },
    { path: "/", icon: FaUser, title: "Profile" },
    { path: "/", icon: FaStar, title: "My Reviews" },
    { path: "/", icon: FaCog, title: "Settings",  },
  ];

  return (
    <ul className="font-jost pt-20 space-y-3">
      {Menus.map((menu, index) => {
        const Icon = menu.icon;
        return (
          <NavLink
            key={index}
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
        );
      })}
    </ul>
  );
};

export default BuyerMenu;
