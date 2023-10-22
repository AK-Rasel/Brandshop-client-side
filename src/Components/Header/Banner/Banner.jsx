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
        className="mySwiper lg:h-[70vh]    "
      >
        <div className='relative'>
          
          <SwiperSlide><div>
          <div className=' tracking-wide  z-10 absolute top-1/3 left-0 right-1/2 translate-x-1/4 bottom-0'><div><h1 className=' mb-6  lg:text-6xl  text-4xl font-Montserrat font-extrabold  text-white'>2024 Toyota <br /> <span>Land Cruiser</span></h1> <p className='  text-[#F0C543] text-lg uppercase tracking-widest font-semibold'>Caming Soon ...</p></div></div>
            <img className=' object-cover h-[70vh] w-full   ' src="https://i.ibb.co/cTPQsWH/landcruiser01-64c9af91d8e17.jpg" alt="" />
           
          </div></SwiperSlide>

          <SwiperSlide>
            <div>
          <div className=' tracking-wide  z-10 absolute top-1/3 left-0 right-1/2 translate-x-1/4 bottom-0'><div>
            <h1 className=' mb-6 text-4xl lg:text-6xl font-Montserrat font-extrabold  text-white'>2023 BMW <span>ix </span></h1> <p className='  text-[#F0C543] text-lg uppercase tracking-widest font-semibold'>Now available have <span>now ...</span></p></div></div>
          <img className=' bg-cover  w-full h-[70vh] lg:h-full  ' src="https://cdn.carbuzz.com/gallery-images/840x560/1096000/700/1096786.jpg" alt="" />
            </div></SwiperSlide>
            <SwiperSlide><div>
          <div className=' tracking-wide  z-10 absolute ml-6 top-1/3  left-0 translate-x-6 bottom-0'>
            <div>
            <h1 className=' mb-6  lg:text-6xl text-4xl font-Montserrat font-extrabold text-[#F00701]'>Tesla Model 3  
            <br /> 
            <span>is finally on sale in Your City</span>
            </h1> 
            </div></div>
          
            <img className=' bg-cover  relative object-cover h-[70vh] w-full ' src="https://i.ytimg.com/vi/m9rZ5WOZ9o0/maxresdefault.jpg" alt="" />
          </div>
          
          </SwiperSlide>
        </div>

        
        
        

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


