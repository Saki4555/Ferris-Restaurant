import Banner from "./Banner/Banner";
import ChouseUs from "./ChouseUS/ChouseUs";
import Offer from "./Offer/Offer";
import TopFood from "./TopFood/TopFood";

const Home = () => {
  // const [bannerRef, bannerInView] = useInView({
  //   triggerOnce: true,
  // });

  // const [topFoodRef, topFoodInView] = useInView({
  //   triggerOnce: true,
  // });

  // const [offerRef, offerInView] = useInView({
  //   triggerOnce: true,
  // });

  // const [chouseUsRef, chouseUsInView] = useInView({
  //   triggerOnce: true,
  // });

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




