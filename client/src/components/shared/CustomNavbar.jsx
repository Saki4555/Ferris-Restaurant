import { useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import UserDropDown from "./UserDropDown";
import logo from "../../assets/logo/logo-rec.jpg";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import CartIcon from "./CartIcon";

const CustomNavbar = () => {
  const { user } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);
  console.log(menuOpen);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
  
    setMenuOpen(false);
  };

  const links = (
    <>
      <li
        onClick={closeMenu}
        className="tracking-wider text-sm font-medium font-jost uppercase hover:scale-105"
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-text-active" : "nav-text"
          }
        >
          Home
        </NavLink>
      </li>
      <li
        onClick={closeMenu}
        className="tracking-wider text-sm font-medium font-jost uppercase hover:scale-105"
      >
        <NavLink
          to="/allfood"
          className={({ isActive }) =>
            isActive ? "nav-text-active" : "nav-text"
          }
        >
          All Food
        </NavLink>
      </li>
      <li
        onClick={closeMenu}
        className="tracking-wider text-sm font-medium font-jost uppercase hover:scale-105"
      >
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            isActive ? "nav-text-active" : "nav-text"
          }
        >
          Blog
        </NavLink>
      </li>
      <li
        onClick={closeMenu}
        className="tracking-wider text-sm font-medium font-jost uppercase hover:scale-105"
      >
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "nav-text-active" : "nav-text"
          }
        >
          About
        </NavLink>
      </li>
     
    </>
  );

  return (
    <div className={`shadow-xl  sticky z-[999] top-0 bg-white`}>
      <div className="flex justify-between items-center px-6 py-4 md:px-10">
        {/* Mobile: Menu Button on Left */}
        <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
          {menuOpen ? (
            <HiX className="w-6 h-6 text-gray-800" />
          ) : (
            <HiOutlineMenu className="w-6 h-6 text-gray-800" />
          )}
        </button>

        {/* Logo (Hidden on Mobile) */}
        <div className="flex items-center">
          <Link to="/">
            <img className="w-24 md:w-28 rounded-full" src={logo} alt="Ferris" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8">{links}</ul>

        {/* User DropDown/Login on Right */}
        <div>
          {user ? (
            <div className="flex gap-1"><CartIcon></CartIcon> <UserDropDown /></div>
          ) : (
            <NavLink
              className="btn bg-ferris-prim hover:bg-ferris-ter text-ferris-sec capitalize"
              to="/login"
            >
              Login
            </NavLink>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed h-screen md:hidden top-16 left-0 w-full   shadow-md transition-all duration-300 ease-out transform ${
          menuOpen
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 -translate-y-5 pointer-events-none"
        }`}
      >
        <ul  className="flex bg-white flex-col shadow-2xl items-center gap-4 py-4">{links}</ul>
        <div onClick={() =>{
          closeMenu()
          console.log('here');
        }} className="flex transition-none transform-none justify-center py-4 h-screen  bg-transparent opacity-0"></div>

      </div>
    </div>
  );
};

export default CustomNavbar;
