


import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import useUserData from "../hooks/useUserData";
import useCartProvider from "../hooks/useCartProvider";
import useAuth from "../hooks/useAuth";

const Success = () => {
  const [userData, userDataLoading] = useUserData();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { clearCart } = useCartProvider();
  const { user, loading } = useAuth();

  const [paymentVerified, setPaymentVerified] = useState(false);

  useEffect(() => {
    const verifyPaymentAndClearWishlist = async () => {
      const sessionId = searchParams.get("session_id");
      console.log({ sessionId });

      // Prevent running the effect again if conditions aren't met or if payment has already been verified
      if (!sessionId || !user?.email || loading || paymentVerified) return;

      try {
        const verificationResponse = await axios.post(
          `${import.meta.env.VITE_BASE_URL}/verify-payment`,
          { sessionId }
        );

        if (verificationResponse.data.success) {
          // Only call clearCart once after payment verification
          if (!paymentVerified) {
            clearCart(user.email);  // Clear cart only after successful payment verification
            setPaymentVerified(true);  // Set paymentVerified to true only once
          }
        } else {
          console.error("Payment verification failed");
        }
      } catch (error) {
        console.error("Error verifying payment:", error);
      }
    };

    verifyPaymentAndClearWishlist();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams, user?.email, loading, paymentVerified,]);  // Keep clearCart out of the effect if possible

  return (
    <div className="h-[70vh] flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold text-green-500">Payment Successful!</h1>
      <button onClick={() => navigate("/")} className="btn bg-ferris-prim btn-success text-white mt-4">
        Go to Home
      </button>
    </div>
  );
};

export default Success;

