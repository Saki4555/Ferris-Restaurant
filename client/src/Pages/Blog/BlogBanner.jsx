import { Parallax } from "react-parallax";
import blogBannerImg from "../../assets/blog/blog-banner.png";


const BlogBanner = () => {
  return (
    <Parallax strength={350} bgImage={blogBannerImg} 
      className="w-full h-[350px] bg-fixed bg-black  bg-cover bg-center   flex justify-center items-center"
      // style={{
      //   backgroundImage: `url(${blogBannerImg})`,
      // }}
    >
      <h1 className="font-cormorant  p-5 tracking-widest  backdrop-blur-sm bg-gray-600/20 z-40 text-6xl text-white font-extrabold">
        BLOG
      </h1>
      
    </Parallax>
  );
};

export default BlogBanner;
