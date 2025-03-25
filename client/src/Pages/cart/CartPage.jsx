

import { FaTrashAlt } from "react-icons/fa";
import useCartProvider from "../../hooks/useCartProvider";
import useAuth from "../../hooks/useAuth";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

const CartPage = () => {
  const { loading } = useAuth();
  const { cartData, cartLoading } = useCartProvider();

  if (cartLoading || loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        Loading....
      </div>
    );
  }

  const makePayment = async() => {
    const stripe = await loadStripe(`${import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY}`);
    const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/create-checkout-session`, cartData?.foods)

    const session = res.data;
    console.log(session);
    const result = stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.log(result.error);
    }
  }

  const total = cartData?.foods?.reduce((acc, foodItem) => {
    return acc + foodItem.price * foodItem.quantity;
  }, 0);
  


  return (
    <div className="bg-ferris-sec min-h-screen flex flex-col items-center py-10">
      <div className="w-full max-w-6xl px-4">
        <h1 className="text-3xl font-semibold text-ferris-prim mb-6 text-center">
          Your Cart
        </h1>

        <div className="flex flex-col lg:flex-row lg:space-x-8">
          {/* Cart Items List */}
          <div className="flex-1 space-y-4">
            <div className="bg-white shadow-md rounded-lg p-6">
              <div className="flex justify-between items-center border-b pb-4">
                <span className="text-xl font-semibold text-ferris-prim">
                  Cart Items
                </span>
                <span className="text-lg font-medium text-ferris-prim">
                  {cartData?.foods?.length} Items
                </span>
              </div>

              {cartData?.foods?.map((item, index) => (
                <div
                  key={index}
                  className="flex shadow-sm  px-2 flex-col lg:flex-row justify-between items-center py-4 border-b mb-2"
                >
                  <div className="flex items-center space-x-4 lg:space-x-6 w-full">
                    {/* Delete Button on Left */}
                    <button className="text-red-500 hover:text-red-700 text-lg lg:hidden">
                      <FaTrashAlt />
                    </button>

                    <img
                      src={item?.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                    <div className="flex flex-col">
                      <p className="text-base md:text-lg font-semibold text-ferris-ter">
                        {item.name}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 lg:space-x-6 w-full mt-2 lg:mt-0 justify-between">
                    <p className="text-lg font-semibold">
                     <span className="text-ferris-prim">€</span>{item.price.toFixed(2)}
                    </p>
                    <div className="flex items-center space-x-2">

                        <p className="font-semibold">Quantity: {item.quantity}</p>
                      
                    </div>

                    {/* Delete Button on Desktop */}
                    <button className="text-red-500 hover:text-red-700 text-lg hidden lg:block">
                      <FaTrashAlt />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-1/3 space-y-4 mt-6 lg:mt-0">
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-xl font-semibold text-ferris-prim mb-4">
                Order Summary
              </h2>
              <div className="space-y-2">
                
             
                <div className="flex justify-between">
                  <span className="text-lg text-ferris-ter">Total</span>
                  <span className="text-lg font-semibold text-ferris-prim">€{total?.toFixed(2)}</span>
                </div>
              </div>

              <button onClick={makePayment} className="btn btn-primary w-full mt-4">Proceed to Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
