"use client";

import Image from "next/image";
// import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Navigation,
  EffectFade,
} from "swiper/modules";
import { TiArrowLeft, TiArrowRight } from "react-icons/ti";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

interface PremiumProcedure {
  id: number;
  index: string;
  title: string;
  slug: string;
  description: string;
  image: string;
}

interface PremiumProcedureSwiperProps {
  procedures: PremiumProcedure[];
}

export default function PremiumProcedureSwiper({
  procedures,
}: PremiumProcedureSwiperProps) {
  return (
    <div className="relative">
      <Swiper
        modules={[
          Autoplay,
          Navigation,
          EffectFade,
        ]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop
        speed={700}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: ".premium-prev",
          nextEl: ".premium-next",
        }}
      >
        {procedures.map((item) => (
          <SwiperSlide key={item.id}>
            <div
              className="
                bg-[#F5F1EA]
                rounded-3xl
                overflow-hidden
                grid
                lg:grid-cols-2
                items-center
              "
            >
              <div className="relative h-[300px] lg:h-[550px]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-8 lg:p-14">
                <p className="text-[#CBA553] tracking-[3px] text-md lg:text-lg uppercase font-bold">
                 Procedure {item.index}
                </p>

                <h2 className="font-header text-2xl md:text-3xl lg:text-4xl text-[#2C2C2C] mt-4">
                  {item.title}
                </h2>

                <p className="mt-6 text-[#666] leading-6 md:leading-8 text-sm md:text-base">
                  {item.description}
                </p>

              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button
  className="
    premium-prev
    absolute
    left-3
    lg:left-4
    top-[150px]
    lg:top-1/2
    lg:-translate-y-1/2
    z-20
    h-10
    w-10
    lg:h-12
    lg:w-12
    rounded-full
    bg-white
    shadow-lg cursor-pointer
    text-brand
    flex
    items-center
    justify-center
    active:scale-95
    transition-all
  "
>
  <TiArrowLeft size={24} />
</button>

<button
  className="
    premium-next
    absolute
    right-3
    lg:right-4
    top-[150px]
    lg:top-1/2
    lg:-translate-y-1/2
    z-20
    h-10
    w-10
    lg:h-12
    lg:w-12
    rounded-full
    bg-white
    shadow-lg
    text-brand
    flex
    items-center
    justify-center
    active:scale-95
    transition-all cursor-pointer
  "
>
  <TiArrowRight size={24} />
</button>
    </div>
  );
}