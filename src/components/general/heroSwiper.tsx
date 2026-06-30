"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { TiArrowLeft, TiArrowRight } from "react-icons/ti";
import Link from "next/link";

interface HeroSlide {
  image: string;
  alt?: string;
  slug:string;
}

interface HeroSwiperProps {
  slides: HeroSlide[];
}

export default function HeroSwiper({ slides }: HeroSwiperProps) {
  return (
    <div className="relative">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        slidesPerView={1}
        loop
        speed={500}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={{
          prevEl: ".hero-prev",
          nextEl: ".hero-next",
        }}
        className="hero-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
          <Link
  href={slide.slug}
  className="relative block w-full h-[250px] md:h-[400px] lg:h-[60vh] xl:h-[80vh]"
>
  <Image
    src={slide.image}
    alt={slide.alt || `Banner ${index + 1}`}
    fill
    priority={index === 0}
    className="object-fill"
  />
</Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        className="
          hero-prev
          absolute
          left-4
          lg:left-8
          top-1/2
          cursor-pointer active:scale-95 duration-200 
          -translate-y-1/2
          z-20
          h-8
          w-8
          lg:h-12
          lg:w-12
          rounded-full
          bg-white/90
          backdrop-blur-sm
          shadow-lg
          text-brand
          flex
          items-center
          justify-center
          transition-all
          hover:bg-white
        "
        aria-label="Previous Slide"
      >
        <TiArrowLeft size={26} />
      </button>
      <button
        className="
          hero-next
          absolute
          right-4
          lg:right-8
          top-1/2
          -translate-y-1/2
          cursor-pointer active:scale-95 duration-200 
          z-20
          h-8
          w-8
          lg:h-12
          lg:w-12
          rounded-full
          bg-white/90
          backdrop-blur-sm
          shadow-lg
          text-brand
          flex
          items-center
          justify-center
          transition-all
          hover:bg-white
        "
        aria-label="Next Slide"
      >
        <TiArrowRight size={26} />
      </button>
    </div>
  );
}
