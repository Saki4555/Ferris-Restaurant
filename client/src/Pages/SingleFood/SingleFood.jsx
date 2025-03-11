// import { useContext, useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";
// import { AuthContext } from "../../Providers/AuthProvider";
// import FoodDetails from "./FoodDetails";

// const SingleFood = () => {
//     const { id } = useParams();
//     console.log(id);
//     const [food, setFood] = useState(null);
//     const [load, setLoad] = useState(true);
//     const { user } = useContext(AuthContext);
//     //console.log('single',user.email, food?.email)

//     useEffect(() => {
//         fetch(`${import.meta.env.VITE_BASE_URL}/allfoods`)
//             .then(res => res.json())
//             .then(data => {
//                 const one = data.find(f => f._id === id);
//                 setFood(one);
//                 setLoad(false);
//             })
//             .catch(error => {
//                 // Handle any network or fetch errors here
//                 console.error("Error fetching food data:", error);
//             });
//     }, [id]);

//     return (
//         <div>
//             {food ? (
//                <><FoodDetails food={food} /></>
//             ) : (
//                 <div>
//                     <span className="loading loading-spinner loading-lg"></span>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default SingleFood;


import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import FoodDetails from "./FoodDetails";
import axios from "axios";

const fetchFoodById = async (id) => {
    const { data } = await axios.get(`${import.meta.env.VITE_BASE_URL}/allfoods/${id}`);
    return data; // Return only the fetched food item
};

const SingleFood = () => {
    const { id } = useParams();

   

    // Fetch single food using React Query
    const { data: food, isLoading, isError } = useQuery({
        queryKey: ["food", id], // Cache key
        queryFn: () => fetchFoodById(id), // Fetch function
        enabled: !!id, // Prevents fetching if `id` is undefined
        staleTime: 1000 * 60 * 5, // Data remains fresh for 5 minutes
    });

    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        );
    }

    if (isError) {
        return (
            <div className="text-center text-red-500 font-semibold">
                Error fetching food details. Please try again later.
            </div>
        );
    }

    return (
        <div>
            {food ? <FoodDetails food={food} /> : <p className="text-center">Food not found</p>}
        </div>
    );
};

export default SingleFood;

