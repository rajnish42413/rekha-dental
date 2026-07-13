"use client";

import dynamic from "next/dynamic";
import { SwiperSlide } from "swiper/react";
import { useJsEnabled } from "@/hooks/useJsEnabled";
import LegacyCard from "./legacyCard";
import { achievementsData } from "@/data/legacy";


const CustomSwiper = dynamic(
  () => import("@/components/general/customSwiper"),
  { ssr: false }
);

function Achievements() {
  const jsEnabled = useJsEnabled();

  return (
    <section className="bg-brand py-10 lg:py-24 my-6">
      <div className="mx-4 lg:mx-10">
      <div className="mx-auto max-w-4xl text-center">
  <p className="mb-5 text-md font-extrabold uppercase tracking-[5px] text-yellow">
    ACHIEVEMENTS & RECOGNITIONS
  </p>

  <h2 className="font-header text-2xl leading-tight text-[#F8F5EF] md:text-5xl">
   Global recognition.
  </h2>
</div>
        <div className="lg:mt-10 mt-6 px-1 lg:px-3">
          {!jsEnabled ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {achievementsData.map((item) => (
                <LegacyCard
                  key={item.id}
                  image={item.image}
                  title={item.title}
                  type="achievement"
                  description={item.description}
                />
              ))}
            </div>
          ) : (
            <CustomSwiper>
              {achievementsData.map((item) => (
                <SwiperSlide
                  key={item.id}
                  style={{ width: "400px" }}
                >
                  <LegacyCard
                    image={item.image}
                    title={item.title}
                    description={item.description}
                    type="achievement"
                  />
                </SwiperSlide>
              ))}
            </CustomSwiper>
          )}
        </div>
      </div>
    </section>
  );
}

export default Achievements;