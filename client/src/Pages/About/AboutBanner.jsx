import { Parallax } from "react-parallax";
import bannerBg from '../../assets/about/about-banner.jpg'

const AboutBanner = () => {
    return (
         <Parallax
             strength={350}
             bgImage={bannerBg}
             
            bgImageAlt="A beautiful restaurant setting with warm lighting"
             className="w-full h-[350px] bg-fixed bg-black  bg-cover bg-center   flex justify-center items-center"
             // style={{
             //   backgroundImage: `url(${blogBannerImg})`,
             // }}
           >
             <h1
               className="font-cormorant p-3 sm:p-4 md:p-5 tracking-widest backdrop-blur-sm bg-gray-600/20 z-40 
         text-4xl sm:text-5xl md:text-6xl lg:text-7xl  text-white font-extrabold text-center"
             >
               About
             </h1>
           </Parallax>
    );
};

export default AboutBanner;