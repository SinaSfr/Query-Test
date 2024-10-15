import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Grid, Navigation, Pagination } from 'swiper/modules'
import "swiper/css/bundle";
import './ImagesSlider.css'

export default function ImagesSlider() {
  return (
    <div className='w-1/2 mx-auto border border-solid border-slate-200 rounded-md mt-10 p-4 shadow-lg'>
        <Swiper 
    modules={[Navigation, Pagination, Grid, Autoplay]}
    spaceBetween={20}
    slidesPerView={3}
    onSwiper={(swiper) => console.log(swiper)}
    loop
    pagination
    speed={1500}
    autoplay={{delay: 0}}
    className='my-swiper'>
        <SwiperSlide>
            <img src="../../public/images/nature.jpg" alt="" className='size-52 rounded-lg' />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../../public/images/nature.jpg" alt="" className='size-52 rounded-lg' />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../../public/images/nature.jpg" alt="" className='size-52 rounded-lg' />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../../public/images/nature.jpg" alt="" className='size-52 rounded-lg' />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../../public/images/nature.jpg" alt="" className='size-52 rounded-lg' />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../../public/images/nature.jpg" alt="" className='size-52 rounded-lg' />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../../public/images/nature.jpg" alt="" className='size-52 rounded-lg' />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../../public/images/nature.jpg" alt="" className='size-52 rounded-lg' />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../../public/images/nature.jpg" alt="" className='size-52 rounded-lg' />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../../public/images/nature.jpg" alt="" className='size-52 rounded-lg' />
        </SwiperSlide>
    </Swiper>
    </div>
  )
}
