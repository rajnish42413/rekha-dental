"use client";

import dynamic from "next/dynamic";
import { SwiperSlide } from "swiper/react";
import { useJsEnabled } from "@/hooks/useJsEnabled";
import LegacyCard from "./legacyCard";
import { dentalCampsData } from "@/data/legacy";
import SectionHeader from "../general/sectionHeader";


const CustomSwiper = dynamic(
  () => import("@/components/general/customSwiper"),
  { ssr: false }
);

function DentalCamps() {
  const jsEnabled = useJsEnabled(); 

  return (
    <section className=" py-10 lg:py-24 my-6">
      <div className="mx-4 lg:mx-10">
        <SectionHeader tag="DENTAL CAMPS & OUTREACH" title=" Promoting oral health"/>
    
        <div className="lg:mt-10 mt-6 px-1 lg:px-3">
          {!jsEnabled ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {dentalCampsData.map((item) => (
                <LegacyCard
                  key={item.id}
                  image={item.image}
                  title={item.title}
                  type="camp"
                  description={item.description}
                />
              ))}
            </div>
          ) : (
            <CustomSwiper>
              {dentalCampsData.map((item) => (
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

export default DentalCamps;