import { Parallax } from 'react-parallax';
import bannerImg from '../../assets/all-food/all-food-banner.jpg'
const AllFoodBanner = () => {
  return (
    <Parallax bgImage={bannerImg} strength={350}  bgImageAlt="A beautiful restaurant setting with warm lighting"
      className="w-full h-[335px] bg-fixed bg-black bg-cover bg-center  flex justify-center items-center"
      // style={{
      //   backgroundImage: `url(${bannerImg})`,
      // }}
    >
          
        <h1 className='font-cormorant  p-5 tracking-widest  backdrop-blur-sm bg-gray-600/20 z-40 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-extrabold'>OUR MENU</h1>
    
    </Parallax>
  );
};

export default AllFoodBanner;
