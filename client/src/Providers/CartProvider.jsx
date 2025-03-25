import { createContext } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";

export const CartContext = createContext(null);

// API function for adding an item to the cart using Axios
const addToCartApi = async ({ cartFood, userEmail }) => {
  try {
    const response = await axios.put(
      `${import.meta.env.VITE_BASE_URL}/addtocart/${userEmail}`,
      cartFood
    );

    return response.data; // Return the updated cart
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Failed to add product to cart"
    );
  }
};
const fetchCartApi = async (userEmail) => {
  if (userEmail) {
    const res = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/cart/${userEmail}`
    );
    console.log(res.data);
    return res.data;
  }
};

const clearCartApi = async(userEmail) => {
  const res = await axios.patch(
    `${import.meta.env.VITE_BASE_URL}/cart/clear/${userEmail}`
  );

  return res.data;
}

const CartProvider = ({ children }) => {
  const { user, loading } = useAuth();

  const {
    data: cartData = {},
    isLoading: cartLoading,
    refetch,
  } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: () => fetchCartApi(user?.email),
    enabled: !!user?.email,
    staleTime: 1000 * 60 * 5,
  });

  // Mutation to handle adding an item to the cart using Axios
  const addToCartMutation = useMutation({
    mutationFn: addToCartApi,
    onSuccess: (data) => {
      // console.log({ data });
      refetch();
      toast.success("Added to Cart Successfully!", {
        style: {
          background: "#ed3624", // Brand color
          color: "white", // Text color
          borderRadius: "8px",
          padding: "10px 20px",
          fontSize: "16px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        },
        position: "top-right", // Position in the top-right corner
      });
      // After successful mutation, update the cache with the new cart data
    },
    onError: (err) => {
      // Handle any errors
      console.error(err);
    },
  });


  const clearCartMutation = useMutation({
    mutationFn: clearCartApi,
    onSuccess: (data) => {
      console.log({data}, 'clear');
      console.log("cart cleared successfully");
      refetch();
    },
    onError: (err) => {
      console.error(err);
    }

  })

  // Function to add an item to the cart
  const addToCart = (cartFood) => {
    if (user.email && !loading) {
      addToCartMutation.mutate({ cartFood, userEmail: user.email });
    }
  };
  const clearCart = (userEmail) => {
    if(userEmail && !loading){
      clearCartMutation.mutate(userEmail)
    }
  }

  const cartInfo = {
    addToCart,
    cartData,
    cartLoading,
    refetch,
    addToCartLoading: addToCartMutation.isPending,
    clearCart,
  };

  // Provide the context with the cart and mutation methods
  return (
    <CartContext.Provider value={cartInfo}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
