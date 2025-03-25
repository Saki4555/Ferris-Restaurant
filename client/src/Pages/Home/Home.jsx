import { useEffect } from "react";
import Banner from "./Banner/Banner";

import Offer from "./Offer/Offer";
import TopFood from "./TopFood/TopFood";
import ChooseUs from "./ChouseUS/ChooseUs";

const Home = () => {
useEffect(() => {
window.scrollTo(0,0)
},[])

  return (
    <>
      {/* <Meta title={'allfood'}/> */}
      
      <Banner />
      <TopFood />
      <Offer />
      <ChooseUs />
    </>
  );
};

export default Home;




