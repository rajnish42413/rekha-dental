"use client";

import { mediaData } from "@/data/legacy";
import Image from "next/image";
import SectionHeader from "../general/sectionHeader";

function NewspaperCuttings() {
  return (
    <section className=" py-10 lg:py-16">
      <div className="mx-4 lg:mx-10">
        <SectionHeader tag="MEDIA COVERAGE" title="Featured across newspapers and publications."/>
        <div className="mt-8 lg:mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mediaData.map((item) => (
            <div
              key={item.id}
              className="group rounded-xl bg-white p-4 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl m-4"
            >
              <div className="relative aspect-3/4 overflow-hidden rounded-lg ">
                <Image
                  src={item.image}
               alt=""
                  fill
                  sizes="(max-width:768px) 100vw,
                  (max-width:1024px) 50vw,
                  33vw"
                  className="object-contain transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              <div className="mt-4">
                <p className="text-md font-extrabold uppercase tracking-[3px] text-yellow">
                  Media Coverage
                </p>

              
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default NewspaperCuttings;