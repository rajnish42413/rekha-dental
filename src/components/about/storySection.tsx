"use client";
import Image from "next/image";
import SingleSlideSwiper from "../general/singleSlideSwiper";
import { SwiperSlide } from "swiper/react";

interface StorySectionProps {
  images: string[];
  tag: string;
  title: string;
  paragraphs: string[];
}

export default function StorySection({
  images,
  tag,
  title,
  paragraphs,
}: StorySectionProps) {
  return (
    <section className="bg-[#EAE4DB] pt-10 lg:pt-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 lg:gap-16 justify-center ">
        <div
          className={`relative  h-[250px] lg:h-[400px]  rounded-2xl group overflow-hidden transform transition-all duration-1400 ease-[cubic-bezier(0.22,1,0.36,1)]
        `}
        >
          <SingleSlideSwiper>
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-[250px] md:h-[300px] lg:h-[400px]">
                  <Image
                    src={image}
                    alt={`${title}-${index}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover rounded-2xl transition-transform duration-2000 ease-out group-hover:scale-110"
                  />
                </div>
              </SwiperSlide>
            ))}
          </SingleSlideSwiper>
        </div>
        <div
          className={`max-w-xl transform transition-all duration-1400 delay-200 ease-[cubic-bezier(0.22,1,0.36,1)]
        `}
        >
          <p className="text-md lg:text-lg tracking-[3px] text-yellow font-extrabold lg:mb-6 mb-2 uppercase">
            {tag}
          </p>

          <h2 className="font-header text-2xl lg:text-4xl leading-tight text-[#2C2C2C] mb-6">
            {title}
          </h2>

          <div className="space-y-4 text-[#6B6B6B] text-sm md:text-base  leading-relaxed">
            {paragraphs.map((text, i) => (
              <p key={i}>{text}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
