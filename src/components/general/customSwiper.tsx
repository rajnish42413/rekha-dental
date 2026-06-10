"use client";

import { Swiper } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import React from "react";

interface CustomSwiperProps {
  children: React.ReactNode;
}

const CustomSwiper: React.FC<CustomSwiperProps> = ({ children }) => {
  return (
    <Swiper
      modules={[FreeMode]}
      freeMode={true}
      // centeredSlides={true}
      loop={true}
      centeredSlidesBounds={true}
      // slidesPerGroup={3}
      grabCursor={true}
      slidesPerView={"auto"}
      spaceBetween={20}
      pagination={{ clickable: false }}
      navigation={false}
      scrollbar={false}
      style={{ padding: "20px 0" }}
      breakpoints={{
        320: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
       
      }}
    >
      {children}
    </Swiper>
  );
};

export default CustomSwiper;
