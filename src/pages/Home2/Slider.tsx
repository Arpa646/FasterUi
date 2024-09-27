import { useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import slider1 from "./slider1.png";
import slider2 from "./slider2.png";
import slider3 from "./slider3.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// Import required modules
import { Pagination } from "swiper/modules";

export default function App() {
  const [slidesPerView, setSlidesPerView] = useState<number | "auto">(1);
  useEffect(() => {
    const updateMedia = () => {
      if (window.innerWidth < 640) {
        setSlidesPerView(1); // 1 slide for small screens
      } else {
        setSlidesPerView("auto"); // Auto for larger screens
      }
    };

    updateMedia(); // Call once on component mount

    window.addEventListener("resize", updateMedia); // Update on resize

    return () => window.removeEventListener("resize", updateMedia); // Cleanup
  }, []);

  return (
    <div className="space-y-7">
      <div className="mt-24 font-raleway lg:ms-11 ms-0 dark:text-white text-[50.33px] font-bold leading-[56.33px] text-center">
        <h1>Check our Work</h1>
      </div>

      <p className="lg:w-[449px] mx-auto text-center text-[#8987A1] dark:text-white">
        Take a look at some of our recent projects to see how we've helped
        businesses like yours succeed online.
      </p>

      <div className="h-[500px]">
        <Swiper
          slidesPerView={slidesPerView} // Auto for large screens, 1 for small
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
            <img src={slider1} alt="Slider 1" className="w-full h-auto" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider2} alt="Slider 2" className="w-full h-auto" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider3} alt="Slider 3" className="w-full h-auto" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider1} alt="Slider 1" className="w-full h-auto" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider2} alt="Slider 2" className="w-full h-auto" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider3} alt="Slider 3" className="w-full h-auto" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider1} alt="Slider 1" className="w-full h-auto" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider2} alt="Slider 2" className="w-full h-auto" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider3} alt="Slider 3" className="w-full h-auto" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
