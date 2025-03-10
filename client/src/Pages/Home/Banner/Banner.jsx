
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";


import { Autoplay, Pagination, Navigation } from 'swiper';

import slide1 from '../../../assets/home/slide-1.webp';
import slide2 from '../../../assets/home/slide-2.webp';
import slide3 from '../../../assets/home/slide-3.webp';
import slide4 from '../../../assets/home/slide-4.webp';
import slide5 from '../../../assets/home/slide-5.webp';
import slide6 from '../../../assets/home/slide-6.webp';
import slide7 from '../../../assets/home/slide-7.webp';
import slide8 from '../../../assets/home/slide-8.webp';


import BannerSlider from './BannerSlider';



import './Banner.css'

const Banner = () => {

 

  return (
    <div className=''>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    autoplay={{
                        delay: 7000,
                        disableOnInteraction: false,
                    }}
                    modules={[Pagination, Navigation, Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <BannerSlider img={slide1}></BannerSlider>
                    </SwiperSlide>
                    <SwiperSlide>
                        <BannerSlider img={slide2}></BannerSlider>
                    </SwiperSlide>
                    <SwiperSlide>
                        <BannerSlider img={slide3}></BannerSlider>
                    </SwiperSlide>
                    <SwiperSlide>
                        <BannerSlider img={slide4}></BannerSlider>
                    </SwiperSlide>
                    <SwiperSlide>
                        <BannerSlider img={slide5}></BannerSlider>
                    </SwiperSlide>
                    <SwiperSlide>
                        <BannerSlider img={slide6}></BannerSlider>
                    </SwiperSlide>
                    <SwiperSlide>
                        <BannerSlider img={slide7}></BannerSlider>
                    </SwiperSlide>
                    <SwiperSlide>
                        <BannerSlider img={slide8}></BannerSlider>
                    </SwiperSlide>

                </Swiper>
            </div>
  );
};

export default Banner;
