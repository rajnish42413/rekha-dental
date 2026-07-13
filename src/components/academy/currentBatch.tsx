"use client";

import dynamic from "next/dynamic";
import { SwiperSlide } from "swiper/react";
import { useJsEnabled } from "@/hooks/useJsEnabled";
import AlumniCard from "./alumniCard";
import SectionHeader from "../general/sectionHeader";
import { currentBatchData } from "@/data/academy";

const CustomSwiper = dynamic(
  () => import("@/components/general/customSwiper"),
  { ssr: false }
);

function CurrentBatch() {
  const jsEnabled = useJsEnabled();

  return (
    <section className=" py-10 lg:py-24">
      <div className="mx-4 lg:mx-10">
        <SectionHeader tag="Ongoing Programs" title="Glimpse of our current batch"/>
        <div className="mt-10 px-1 lg:px-3">
          {!jsEnabled ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {currentBatchData.map((item) => (
                <AlumniCard
                  key={item.id}
                  image={item.image}
                  title={item.title}
                  type="current"
                  description={item.description}
                />
              ))}
            </div>
          ) : (
            <CustomSwiper>
              {currentBatchData.map((item) => (
                <SwiperSlide
                  key={item.id}
                  style={{ width: "400px" }}
                >
                  <AlumniCard
                    image={item.image}
                    title={item.title}
                    type="current"
                    description={item.description}
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

export default CurrentBatch;