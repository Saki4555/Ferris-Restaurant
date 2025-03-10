import { Parallax } from 'react-parallax';
import bannerImg from '../../assets/all-food/all-food-banner.jpg'
const AllFoodBanner = () => {
  return (
    <Parallax bgImage={bannerImg} strength={350} bgImageStyle={{ objectFit: 'cover', objectPosition: 'center' }}
      className="w-full h-[350px] bg-fixed bg-black  bg-cover bg-center bg-no-repeat  flex justify-center items-center"
      // style={{
      //   backgroundImage: `url(${bannerImg})`,
      // }}
    >
          
        <h1 className='font-cormorant  p-5 tracking-widest  backdrop-blur-sm bg-gray-600/20 z-40 text-6xl text-white font-extrabold'>OUR MENU</h1>
    
    </Parallax>
  );
};

export default AllFoodBanner;
