import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import {  FiLogOut, FiGrid } from "react-icons/fi"; 
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useUserData from "../../hooks/useUserData";
import useAuth from "../../hooks/useAuth";

const UserDropdown = () => {
    const { user, loading: authLoading, logout } = useAuth();
    const [userData, userLoading] = useUserData();
    
    const navigate = useNavigate();

    const handleLogout = () => {
        logout()
          .then(() => {
            navigate("/");
          })
          .catch();
    };

    // Handle loading state
    // if (authLoading) {
    //     return (
    //         <div className="w-10 h-10 flex items-center justify-center animate-spin border-2 border-gray-300 border-t-transparent rounded-full"></div>
    //     );
    // }

    // Check for user image in both user & userData, fallback to FiUser icon
    const userImage = user?.photo || userData?.photo || null;
    
    return (
        <Menu as="div" className="relative inline-block text-left z-[999]">
            {/* Dropdown Button - User Avatar or Loading */}
            <MenuButton className="focus:outline-none">
                {userImage ? (
                    <img 
                        src={userImage} 
                        alt="User Avatar" 
                        className="rounded-full w-10 h-10 border border-gray-300 hover:border-gray-400"
                    />
                ) : (
                    <FaUser className="w-7 h-7 text-gray-500 rounded-full" />
                )}
            </MenuButton>

            {/* Dropdown Menu Items */}
            <MenuItems className="absolute right-0 mt-4 w-56 bg-white px-4 py-3 mr-5 rounded-md shadow-2xl border border-gray-200">
                {/* User Info Section */}
                <div className="border-b border-gray-300 pb-3">
                    <p className="font-semibold text-gray-800">{user?.name || userData?.name || "Guest User"}</p>
                    <p className="text-sm text-gray-500">{user?.email || userData?.email || "No email available"}</p>
                </div>

                {/* Menu Items */}
                <MenuItem as="button" onClick={() => navigate('/dashboard/overview')} className="px-4 py-2 mt-2 flex items-center gap-3 rounded-md text-gray-700 hover:bg-gray-100">
                    <FiGrid className="text-lg text-gray-500" /> Dashboard
                </MenuItem>

                {/* Logout Button */}
                <MenuItem as="button" onClick={handleLogout} className="w-full text-left px-4 py-2 mt-2 flex items-center gap-3 rounded-md text-red-500 hover:bg-red-100">
                    <FiLogOut className="text-lg" /> Log Out
                </MenuItem>
            </MenuItems>
        </Menu>
    );
};

export default UserDropdown;
