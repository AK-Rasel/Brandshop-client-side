// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
    return (
        <div >
            <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper lg:h-[70vh]  "
      >
        <SwiperSlide><div className='bg-indigo-300'>
        <img className=' object-cover h-[70vh] w-full   ' src="https://i.pinimg.com/originals/d3/3e/1a/d33e1afb5ef97d611ce17caff1af3cd5.jpg" alt="" />
          </div></SwiperSlide>
        <SwiperSlide><img className='  w-full h-[70vh] ' src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/1c9ba719636447.57435bc519af8.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><div className='bg-indigo-300'>
        <img className=' object-cover h-[70vh] w-full   ' src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/e9dc3375615009.5c5199a6f1924.jpg" alt="" />
          </div></SwiperSlide>

      </Swiper>
        </div>
    );
};

export default Banner;