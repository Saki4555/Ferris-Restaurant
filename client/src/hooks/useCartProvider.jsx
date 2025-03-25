import { useContext } from "react";
import { CartContext } from "../Providers/CartProvider";


const useCartProvider = () => {
    return useContext(CartContext);
};

export default useCartProvider;