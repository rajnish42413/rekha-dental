"use client";

import { Swiper } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import React from "react";

interface CustomSwiperProps {
  children: React.ReactNode;
}

const SingleSlideSwiper: React.FC<CustomSwiperProps> = ({ children }) => {
  return (
    <Swiper
      modules={[Autoplay]}
      loop
      slidesPerView={1}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
    >
      {children}
    </Swiper>
  );
};

export default SingleSlideSwiper;