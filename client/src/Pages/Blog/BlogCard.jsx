import blog1 from '../../assets/blog/blog-1.jpg';
import blog2 from '../../assets/blog/blog-2.jpg';
import blog3 from '../../assets/blog/blog-3.jpg';
import blog4 from '../../assets/blog/blog-4.jpg';
import blog5 from '../../assets/blog/blog-5.jpg';
import { FaUser, FaCalendarAlt, FaTag } from "react-icons/fa"; 

const BlogCard = ({ item }) => {
  const imgArr = [blog1, blog2, blog3, blog4, blog5];

  return (
    <div className="font-jost bg-ferris-sec overflow-hidden shadow-lg rounded-lg">
      {/* Blog Image */}
      <img
        src={imgArr[item.id - 1]}
        alt={item.title}
        className="w-full h-56 object-cover"
      />

      {/* Blog Content */}
      <div className="p-6">
        {/* Meta Information with Icons */}
        <div className="flex items-center text-gray-500 text-sm space-x-4">
          <div className="flex items-center space-x-1">
            <FaUser className="text-red-500" />
            <span className="font-semibold">{item.author}</span>
          </div>
          <span>•</span>
          <div className="flex items-center space-x-1">
            <FaCalendarAlt className="text-blue-500" />
            <span>{item.date}</span>
          </div>
          <span>•</span>
          <div className="flex items-center space-x-1">
            <FaTag className="text-green-500" />
            <span className="uppercase font-semibold">{item.category}</span>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800 mt-3">
          {item.title}
        </h2>

        {/* Content Preview */}
        <p className="text-gray-600 mt-3">
          {item.content}
        </p>

        
      </div>
    </div>
  );
};

export default BlogCard;
