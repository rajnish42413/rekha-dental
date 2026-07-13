"use client";

import Image from "next/image";
import SectionHeader from "../general/sectionHeader";
import { clinicJourneyData } from "@/data/about";


function OldClinic() {
  return (
    <section className="bg-[#EAE4DB] py-10 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeader
          tag="OUR BEGINNINGS"
          title="From humble beginnings to trusted excellence."
          subtitle="A glimpse into the early years of Rekha Dental, where dedication, patient trust, and a passion for dentistry laid the foundation for the clinic we proudly are today."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mt-10 lg:mt-14">
          {clinicJourneyData.map((item) => (
            <div
              key={item.id}
              className="bg-[#F5F1EA] rounded-xl overflow-hidden group transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative w-full h-[260px] lg:h-[340px] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw,
                  (max-width: 1024px) 50vw,
                  50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              <div className="p-5 lg:p-7">
                <p className="text-xs tracking-[3px] uppercase text-yellow font-extrabold mb-3">
                  Chapter {String(item.id).padStart(2, "0")}
                </p>

                <h3 className="font-header text-2xl text-[#2C2C2C] mb-3">
                  {item.title}
                </h3>

                <p className="text-sm leading-relaxed text-[#6B6B6B]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OldClinic;