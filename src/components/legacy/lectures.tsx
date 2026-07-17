"use client";

import dynamic from "next/dynamic";
import { SwiperSlide } from "swiper/react";
import { useJsEnabled } from "@/hooks/useJsEnabled";
import LegacyCard from "./legacyCard";
import { lecturesData } from "@/data/legacy";
import SectionHeader from "../general/sectionHeader";

const CustomSwiper = dynamic(
  () => import("@/components/general/customSwiper"),
  { ssr: false }
);

function Lectures() {
  const jsEnabled = useJsEnabled();

  return (
    <section className=" py-10 lg:py-24 my-6">
      <div className="mx-4 lg:mx-10">
        <SectionHeader tag=" LECTURES & WORKSHOPS" title=" Sharing knowledge, shaping future clinicians."/>
     

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