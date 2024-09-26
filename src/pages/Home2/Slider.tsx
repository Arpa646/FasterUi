import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import slider1 from "./slider1.png";
import slider2 from "./slider2.png";
import slider3 from "./slider3.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";

export default function App() {
  return (
    <div  className=" space-y-7">
      <div
        style={{}}
        className="mt-24 font-raleway ms-11 dark:text-white  text-[50.33px] font-bold leading-[56.33px] text-center"
      >
        <h1>Check our Work</h1>
      </div>

      <p className="w-[449px] mx-auto text-center text-[#8987A1] dark:text-white ">
        Take a look at some of our recent projects to see how we've helped
        businesses like yours succeed online.
      </p>

      <div className="h-[500px]">
        <Swiper
          slidesPerView={"auto"}
          centeredSlides={true}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          initialSlide={4} // This makes the 5th slide active
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={`${slider1}`} alt="" srcset="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={`${slider2}`} alt="" srcset="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={`${slider3}`} alt="" srcset="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={`${slider1}`} alt="" srcset="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={`${slider2}`} alt="" srcset="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={`${slider3}`} alt="" srcset="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={`${slider1}`} alt="" srcset="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={`${slider2}`} alt="" srcset="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={`${slider3}`} alt="" srcset="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
