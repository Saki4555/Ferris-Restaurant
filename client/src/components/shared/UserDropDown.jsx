import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { FiUser, FiSettings, FiLogOut, FiGrid } from "react-icons/fi"; 

import {  useNavigate } from "react-router-dom";
import useUserData from "../../hooks/useUserData";
import useAuth from "../../hooks/useAuth";

const UserDropdown = () => {
    const {user} = useAuth();
    const [userData] = useUserData();
    const {logout} = useAuth();
    const navigate = useNavigate()

    const handleLogout = () => {
    logout()
      .then(() => {
        navigate("/");
      })
      .catch();
  };

    return (
      <Menu as="div" className="relative inline-block text-left">
            {/* Dropdown Button - User Avatar */}
            <MenuButton className="focus:outline-none">
                <img src={userData.photo} alt="User Avatar" className="rounded-full w-10 h-10 border border-gray-300 hover:border-gray-400" />
            </MenuButton>

            {/* Dropdown Menu Items */}
            <MenuItems className="absolute right-0 mt-4 w-56 bg-white px-4 py-3 mr-5 rounded-md shadow-2xl border border-gray-200">
                
                {/* User Info Section (No Image & Icon) */}
                <div className="border-b border-gray-300 pb-3">
                    <p className="font-semibold text-gray-800">{user?.name}</p>
                    <p className="text-sm text-gray-500">{user?.email}</p>
                </div>

                {/* Menu Items */}
                <MenuItem as="button" onClick={() => navigate('/dashboard')} className=" px-4 py-2 mt-2 flex items-center gap-3 rounded-md text-gray-700 hover:bg-gray-100">
                    <FiGrid className="text-lg text-gray-500" /> Dashboard
                </MenuItem>
                {/* <MenuItem as="a" href="/profile" className=" px-4 py-2 mt-2 flex items-center gap-3 rounded-md text-gray-700 hover:bg-gray-100">
                    <FiUser className="text-lg text-gray-500" /> Profile
                </MenuItem> */}
                {/* <MenuItem as="a" href="/settings" className=" px-4 py-2 flex items-center gap-3 rounded-md text-gray-700 hover:bg-gray-100">
                    <FiSettings className="text-lg text-gray-500" /> Settings
                </MenuItem> */}

                {/* Logout Button */}
                <MenuItem as="button" onClick={handleLogout} className=" w-full text-left px-4 py-2 mt-2 flex items-center gap-3 rounded-md text-red-500 hover:bg-red-100">
                    <FiLogOut className="text-lg" /> Log Out
                </MenuItem>
            </MenuItems>
        </Menu>
    );
};

export default UserDropdown;
