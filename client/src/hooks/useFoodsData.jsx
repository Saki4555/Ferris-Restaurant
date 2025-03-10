import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useFoodsData = () => {
    const { data: foods = [], isLoading: loading, refetch } = useQuery({
        queryKey: ["foods"],
        queryFn: async () => {
            const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/allfoods`);
            return res.data || []; // Ensure it returns an empty array if no data
        },
        staleTime: 1000 * 60 * 5, // Data remains fresh for 5 minutes
    });

    return [foods, loading, refetch];
};

export default useFoodsData;
