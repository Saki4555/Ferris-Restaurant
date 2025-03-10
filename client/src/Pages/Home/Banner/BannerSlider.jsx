import { BsFillArrowUpRightCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const BannerSlider = ({ img }) => {
    return (
        
            <div
                className="w-full min-h-[calc(100vh-75px)] bg-gray-500 bg-blend-overlay  bg-cover bg-center bg-no-repeat  flex justify-center items-center" style={{
                    backgroundImage: `url(${img})`,

                }}>
                <div
                    
                    className="flex flex-col   rounded p-4  justify-center items-center">
                    <h1
                        className=" text-center  text-5xl text-white font-bold font-cormorant drop-shadow-lg">Where Every Bite is a Masterpiece
                    </h1>
                    <p className="mt-5 max-w-xl px-5 leading-snug text-white/75 text-center font-jost pb-7">Immerse yourself in a world of culinary artistry, where each dish is meticulously crafted to deliver an unforgettable dining experience. From the first bite to the last, savor the flavors, textures, and creativity that make every moment at our restaurant truly exceptional.</p>
                    <Link to='/allfood' className="btn font-jost btn-primary-styles border-none text-white">Explore More <BsFillArrowUpRightCircleFill className='text-2xl'></BsFillArrowUpRightCircleFill></Link>
                </div>
            </div>


       
    );
};

export default BannerSlider;