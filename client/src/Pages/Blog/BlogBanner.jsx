import blogBannerImg from "../../assets/blog/blog-banner.jpeg";

const BlogBanner = () => {
  return (
    <div
      className="w-full h-[350px] bg-fixed bg-black  bg-cover bg-center bg-no-repeat  flex justify-center items-center"
      style={{
        backgroundImage: `url(${blogBannerImg})`,
      }}
    >
      <h1 className="font-cormorant  p-5 tracking-widest  backdrop-blur-sm bg-gray-600/20 z-40 text-6xl text-white font-extrabold">
        BLOG
      </h1>
      
    </div>
  );
};

export default BlogBanner;
