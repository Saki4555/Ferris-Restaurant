import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "./useAuth";


const useUserData = () => {
    const { user } = useAuth();

    const { data: userData = {}, isLoading: loading, refetch } = useQuery({
        queryKey: ["user", user?.email],
        queryFn: async () => {
            const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/user/${user?.email}`);
            return res.data || {}; // Ensure an empty object if the response is null/undefined
        },
        enabled: !!user?.email, // Only fetch if email exists
        staleTime: 1000 * 60 * 5, //  Data remains fresh for 5 minutes (adjust as needed)
    });

    return [userData, loading, refetch];
};

export default useUserData;
