"use client";

import { Swiper } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import React from "react";

interface CustomSwiperProps {
  children: React.ReactNode;
}

const CustomSwiper: React.FC<CustomSwiperProps> = ({ children }) => {
  return (
    <Swiper
      modules={[Autoplay]}
      loop
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      slidesPerGroup={1}
      grabCursor
      spaceBetween={20}
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