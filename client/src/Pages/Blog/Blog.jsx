
import Meta from "../Shared/Meta";

import { Parallax } from "react-parallax";

import BlogBanner from "./BlogBanner";
import { BLOG_POSTS } from "../../constants";
import BlogCard from "./BlogCard";
import { useEffect } from "react";

const Blog = () => {
 
  useEffect(() => {
    window.scrollTo(0, 0); // Forces scroll to the top on page load
  }, []);
  

  return (
    <>
      <Meta title={'blog'} />

     
      <BlogBanner />
      <div className="grid py-16 grid-cols-1 lg:grid-cols-2 gap-10 container mx-auto px-5 md:px-20">
       {
        BLOG_POSTS.map(item => (
          <BlogCard key={item.id} item={item}/>
        ))
       }
      </div>
    </>
  );
};

export default Blog;
