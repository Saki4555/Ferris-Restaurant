import { createContext, useContext, useEffect, useState } from "react";
import useUserData from "../hooks/useUserData";
import useAuth from "../hooks/useAuth";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const { user, loading: authLoading, logout } = useAuth();
    const [userData, userLoading] = useUserData();
    
    // ✅ Get stored image from sessionStorage (persists within the session)
    const storedImage = sessionStorage.getItem("userImage");
    const [userImage, setUserImage] = useState(storedImage ? JSON.parse(storedImage) : null);

    // ✅ Update user image when user logs in
    useEffect(() => {
        if (user?.photo || userData?.photo) {
            const newImage = user?.photo || userData?.photo;
            setUserImage(newImage);
            sessionStorage.setItem("userImage", JSON.stringify(newImage)); // ✅ Store image in session
        }
    }, [user, userData]); // Runs whenever user or userData changes

    const handleLogout = async () => {
        try {
            await logout();
            sessionStorage.removeItem("userImage"); // ✅ Remove image on logout
            setUserImage(null);
            console.log("User logged out successfully");
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    return (
        <UserContext.Provider value={{ user, authLoading, userData, userLoading, userImage, setUserImage, handleLogout }}>
            {children}
        </UserContext.Provider>
    );
};

// Custom hook for using the context
export const useUserContext = () => useContext(UserContext);
