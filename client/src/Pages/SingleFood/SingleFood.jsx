import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import FoodDetails from "./FoodDetails";

const SingleFood = () => {
    const { id } = useParams();
    const [food, setFood] = useState(null);
    const [load, setLoad] = useState(true);
    const { user } = useContext(AuthContext);
    //console.log('single',user.email, food?.email)

    useEffect(() => {
        fetch(`${import.meta.env.VITE_BASE_URL}/allfoods`)
            .then(res => res.json())
            .then(data => {
                const one = data.find(f => f._id === id);
                setFood(one);
                setLoad(false);
            })
            .catch(error => {
                // Handle any network or fetch errors here
                console.error("Error fetching food data:", error);
            });
    }, [id]);

    return (
        <div>
            {food ? (
               <><FoodDetails food={food} /></>
            ) : (
                <div>
                    <span className="loading loading-spinner loading-lg"></span>
                </div>
            )}
        </div>
    );
};

export default SingleFood;
