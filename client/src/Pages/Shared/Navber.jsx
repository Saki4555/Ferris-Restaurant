import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import logo from '../../assets/logo/logo-sq.jpg'
import UserDropDown from "../../components/shared/UserDropDown";

const Navber = () => {
  const {  user } = useContext(AuthContext);


  // const handleLogout = () => {
  //   logout()
  //     .then((res) => {
  //       navigate("/");
  //     })
  //     .catch();
  // };

  const links = (
    <>
      <li className="tracking-wider text-sm font-medium font-jost uppercase hover:scale-105">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "nav-text-active"
              : "nav-text"
          }
        >
          Home
        </NavLink>
      </li>
      <li className="tracking-wider text-sm font-medium font-jost uppercase hover:scale-105">
        <NavLink
          to="/allfood"
          className={({ isActive }) =>
            isActive
              ? "nav-text-active"
              : "nav-text"
          }
        >
          All Food
        </NavLink>
      </li>
      <li className="tracking-wider text-sm font-medium font-jost uppercase hover:scale-105">
        <NavLink
          to="/Blog"
          className={({ isActive }) =>
            isActive
              ? "nav-text-active"
              : "nav-text"
          }
        >
          Blog
        </NavLink>
      </li>
      <li className="tracking-wider text-sm font-medium font-jost uppercase hover:scale-105">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "nav-text-active"
              : "nav-text"
          }
        >
          About
        </NavLink>
      </li>
      {/* <li className="tracking-wider font-medium font-jost uppercase hover:scale-105">
        <NavLink
          to="/review"
          className={({ isActive }) =>
            isActive
              ? "nav-text-active"
              : "nav-text"
          }
        >
          Feedback
        </NavLink>
      </li> */}
    </>
  );

  

  return (
    <div className="shadow-xl sticky z-[999] top-0">
      <div className="navbar bg-white  px-10">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <Link>
            <img
              className="w-16 rounded-full"
              src={logo}
              alt="Ferris"
            />
            {/* <h2 className="text-xl font-semibold text-orange-500 hidden md:block">Bangla Bites</h2> */}
          </Link>
          {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu-horizontal px-1 gap-10">{links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
             <UserDropDown />
            </>
          ) : (
            <NavLink className="btn bg-ferris-prim hover:bg-ferris-ter text-ferris-sec capitalize" to="/login">
              Login
            </NavLink>
          )}

          {/* <NavLink className="btn btn-ghost capitalize" to="/login">
                        Login
                </NavLink> */}
        </div>
      </div>
    </div>
  );
};

export default Navber;
