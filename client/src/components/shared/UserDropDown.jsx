import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import {  NavLink, useNavigate } from "react-router-dom";


const UserDropDown = () => {
    const {user,logout} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout()
          .then(() => {
            navigate("/");
          })
          .catch();
      };
      const profile = (
        <>
          <li>
            <NavLink to="/addfood">Add a Food Iteams</NavLink>
          </li>
          <li>
            <NavLink to="/addedfood">My added food items</NavLink>
          </li>
          <li>
            <NavLink to="/orderedfood">My ordered food items</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
        </>
      );
    return (
        <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img
              className="rounded-full flex justify-center items-center mx-auto"
              src={user.photoURL}
              referrerPolicy="no-referrer"
              alt="user profile"
            />
          </div>
        </label>
        <ul
          tabIndex={0}
          className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
        >
          <li>
            <button
              className="text-red-600 font-bold"
              onClick={handleLogout}
            >
              Log Out
            </button>
          </li>
          <li>
            <a className="justify-between">
              <h2 className="text-green-500 font-semibold">
                {user.displayName}
              </h2>
            </a>
          </li>
          <div className="bg-sky-200 rounded-2xl shadow-2xl py-4 font-semibold">
            {profile}
          </div>
        </ul>
      </div>
    );
};

export default UserDropDown;
