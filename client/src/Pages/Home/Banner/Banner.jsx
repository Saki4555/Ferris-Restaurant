
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";


import { Autoplay, Pagination, Navigation } from 'swiper';

import slide1 from '../../../assets/home/slide-1.png';
import slide2 from '../../../assets/home/slide-2.png';
import slide3 from '../../../assets/home/slide-3.png';
import slide4 from '../../../assets/home/slide-4.png';
import slide5 from '../../../assets/home/slide-5.png';
import slide6 from '../../../assets/home/slide-6.webp';
import slide7 from '../../../assets/home/slide-7.png';




import BannerSlider from './BannerSlider';



import './Banner.css'
import { FERRIS_BANNERS_INFO } from '../../../constants';

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
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    modules={[Pagination, Navigation, Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <BannerSlider info={FERRIS_BANNERS_INFO[0]} img={slide1}></BannerSlider>
                    </SwiperSlide>
                    <SwiperSlide>
                        <BannerSlider info={FERRIS_BANNERS_INFO[1]} img={slide2}></BannerSlider>
                    </SwiperSlide>
                    <SwiperSlide>
                        <BannerSlider info={FERRIS_BANNERS_INFO[2]} img={slide3}></BannerSlider>
                    </SwiperSlide>
                    <SwiperSlide>
                        <BannerSlider info={FERRIS_BANNERS_INFO[3]} img={slide4}></BannerSlider>
                    </SwiperSlide>
                    <SwiperSlide>
                        <BannerSlider info={FERRIS_BANNERS_INFO[4]} img={slide5}></BannerSlider>
                    </SwiperSlide>
                    <SwiperSlide>
                        <BannerSlider info={FERRIS_BANNERS_INFO[5]} img={slide6}></BannerSlider>
                    </SwiperSlide>
                    <SwiperSlide>
                        <BannerSlider info={FERRIS_BANNERS_INFO[6]} img={slide7}></BannerSlider>
                    </SwiperSlide>
                    

                </Swiper>
            </div>
  );
};

export default Banner;
