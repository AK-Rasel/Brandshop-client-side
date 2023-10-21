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
        <div className='relative'>
          <SwiperSlide><div>
            <img className=' relative object-cover h-[70vh] w-full ' src="https://i.pinimg.com/originals/d3/3e/1a/d33e1afb5ef97d611ce17caff1af3cd5.jpg" alt="" />
          </div>
          
          </SwiperSlide>
          <SwiperSlide><img className='  w-full h-[70vh] ' src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/1c9ba719636447.57435bc519af8.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><div className='bg-indigo-300'>
            <img className=' object-cover h-[70vh] w-full   ' src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/e9dc3375615009.5c5199a6f1924.jpg" alt="" />
          </div></SwiperSlide>
        </div>

        
        <div className='  z-10 absolute top-0 right-1/2 translate-x-1/2 translate-y-1/2 bottom-1/2'><div><h1 className=' mb-6 text-center text-7xl font-Montserrat font-bold  text-[#F0C543] outline-4'>Welcome to our company</h1> <p className=' text-center text-white text-lg uppercase tracking-widest font-semibold'>to find your dream car</p></div></div>
        

      </Swiper>
    </div>
  );
};

export default Banner;



// return (
//   <Swiper
//       spaceBetween={30}
//       centeredSlides={true}
//       autoplay={{
//         delay: 2500,
//         disableOnInteraction: false,
//       }}
//       pagination={{
//         clickable: true,
//       }}
//       navigation={true}
//       modules={[Autoplay, Pagination, Navigation]}
//       className="mySwiper h-[50vh] md:h-[80vh] lg:h-[120vh]"
//     >
//       <div className='relative'>
//       <SwiperSlide className='relative w-max before:absolute before:left-0 before:right-0 before:top-0 before:z-10 before:h-full before:w-full before:bg-blue-950 before:opacity-30'><img className='md:h-[80vh] h-[50vh] lg:h-[120vh] w-full bg-cover bg-center bg-no-repeat' src={banner1} alt="" /></SwiperSlide>
//       <SwiperSlide className='relative w-max before:absolute before:left-0 before:right-0 before:top-0 before:z-10 before:h-full before:w-full before:bg-blue-950 before:opacity-30'><img className='md:h-[80vh] h-[50vh] lg:h-[120vh] w-full bg-cover bg-center bg-no-repeat' src={banner2} alt="" /></SwiperSlide>
//       <SwiperSlide className='relative w-max before:absolute before:left-0 before:right-0 before:top-0 before:z-10 before:h-full before:w-full before:bg-blue-950 before:opacity-30'><img className='md:h-[80vh] h-[50vh] lg:h-[120vh] w-full bg-cover bg-center bg-no-repeat' src={banner3} alt="" /></SwiperSlide>
//       <SwiperSlide className='relative w-max before:absolute before:left-0 before:right-0 before:top-0 before:z-10 before:h-full before:w-full before:bg-blue-950 before:opacity-30'><img className='md:h-[80vh] h-[50vh]  bg-cover bg-center bg-no-repeat' src={banner4} alt="" /></SwiperSlide>
//       </div>
//       <div className='absolute z-10 top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
//         <h2 className='lg:text-4xl md:text-3xl text-lg font-bold text-white text-center capitalize'>The Easiest Way To Buy Your Next Car</h2>
//         <div className='flex lg:gap-10 gap-5 justify-center'>
//         <a className='text-white text-center underline lg:text-lg md:block hidden lg:mt-8 mt-2 hover:text-[#11285A]' href="">Shop New</a>
//         <a className='text-white text-center underline lg:text-lg md:block hidden lg:mt-8 mt-2 hover:text-[#11285A]' href="">Shop Used</a>
//         <a className='text-white text-center underline lg:text-lg md:block hidden lg:mt-8 mt-2 hover:text-[#11285A]' href="">Shop Electric</a>
//         </div>
//       </div>
      
//     </Swiper>


