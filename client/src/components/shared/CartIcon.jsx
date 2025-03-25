
import { FaShoppingCart } from 'react-icons/fa'; // Using React Icons for the cart icon
import useCartProvider from '../../hooks/useCartProvider';
import { Link } from 'react-router-dom';

const CartIcon = () => {
  const { cartData } = useCartProvider() ;

  return (
   <Link to='/cart'> <div className="relative flex items-center">
   {/* Cart Icon */}
   <FaShoppingCart className="text-3xl text-gray-700" />

   {/* Cart Badge (showing the number of items in the cart) */}
   <div className="absolute top-0 right-0 flex justify-center items-center w-5 h-5 text-xs font-bold text-white bg-purple-500 rounded-full">
     {cartData?.foods?.length || 0}
   </div>
 </div></Link>
  );
};

export default CartIcon;

