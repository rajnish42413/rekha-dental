"use client";

import dynamic from "next/dynamic";
import { SwiperSlide } from "swiper/react";
import { lecturesData } from "@/utils/constants";
import { useJsEnabled } from "@/hooks/useJsEnabled";
import LegacyCard from "./legacyCard";

const CustomSwiper = dynamic(
  () => import("@/components/general/customSwiper"),
  { ssr: false }
);

function Lectures() {
  const jsEnabled = useJsEnabled();

  return (
    <section className=" py-10 lg:py-24 my-6">
      <div className="mx-4 lg:mx-10">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-5 text-xs font-medium uppercase tracking-[5px] text-[#CBA553]">
            LECTURES & WORKSHOPS
          </p>

          <h2 className="font-header text-2xl leading-tight text-[#2C2C2C] md:text-5xl">
            Sharing knowledge,
            <br />
            shaping future clinicians.
          </h2>
        </div>

        <div className="lg:mt-10 mt-6 px-1 lg:px-3">
          {!jsEnabled ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {lecturesData.map((item) => (
                <LegacyCard
                  key={item.id}
                  image={item.image}
                  title={item.title}
                  description={item.description}
                  type="camp"
                />
              ))}
            </div>
          ) : (
            <CustomSwiper>
              {lecturesData.map((item) => (
                <SwiperSlide
                  key={item.id}
                  style={{ width: "400px" }}
                >
                  <LegacyCard
                    image={item.image}
                    title={item.title}
                    description={item.description}
                    type="camp"
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

export default Lectures;