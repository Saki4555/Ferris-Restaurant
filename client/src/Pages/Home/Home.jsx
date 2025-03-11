import { useEffect } from "react";
import Banner from "./Banner/Banner";
import ChouseUs from "./ChouseUS/ChouseUs";
import Offer from "./Offer/Offer";
import TopFood from "./TopFood/TopFood";

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
      <ChouseUs />
    </>
  );
};

export default Home;




