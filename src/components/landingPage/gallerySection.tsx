"use client";

import Image from "next/image";
import Link from "next/link";

import SectionHeader from "../general/sectionHeader";
import { galleryImages } from "@/utils/constants";

const featuredImages = galleryImages.slice(0, 3);

function GallerySection() {
  return (
    <section className="bg-[#EAE4DB] lg:pb-16 py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          tag="INSIDE OUR CLINIC"
          title="A space designed to disappear around you."
          subtitle="Quiet interiors, natural textures, and private treatment suites created to feel more like a retreat than a clinic."
        />
        <div className=" hidden gap-5 md:flex">
          {featuredImages.map((item) => (
            <div
              key={item.id}
              className="
                group relative h-[400px] flex-1 overflow-hidden rounded-[28px]
                transition-all duration-700
                ease-[cubic-bezier(0.22,1,0.36,1)]
                hover:flex-[1.8]
              "
            >
              <GalleryImage item={item} />
            </div>
          ))}
        </div>
        <div className="mt-10 grid grid-cols-1 gap-5 md:hidden">
          {featuredImages.map((item) => (
            <div
              key={item.id}
              className="group relative h-[250px] overflow-hidden rounded-[24px]"
            >
              <GalleryImage item={item} />
            </div>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Link
            href="/gallery"
            className="
              flex h-12 items-center justify-center
              border border-[#1F3D2B]
              px-10 text-sm uppercase tracking-[0.2em]
              text-[#1F3D2B]
              transition-all duration-300
              hover:bg-[#1F3D2B]
              hover:text-white
              active:scale-95
            "
          >
            Explore Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}

export default GallerySection;

interface GalleryImageItem {
  id: number;
  image: string;
  category: string;
  alt: string;
}

interface GalleryImageProps {
  item: GalleryImageItem;
}

function GalleryImage({ item }: GalleryImageProps) {
  return (
    <>
      <Image
        src={item.image}
        alt={item.alt}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="
          object-cover
          transition-transform duration-700
          group-hover:scale-[1.04]
        "
      />
      <div
        className="
          absolute inset-0
          bg-linear-to-t
          from-black/70
          via-black/10
          to-transparent
          transition-all duration-500
          group-hover:from-black/80
        "
      />
      <div
        className="
          absolute inset-0 rounded-[28px]
          border border-white/10
          transition-all duration-500
          group-hover:border-[#D7BC8A]
        "
      />
      <div className="absolute bottom-0 left-0 w-full p-6 md:p-8">
        <div
          className="
            translate-y-6 opacity-0
            transition-all duration-500
            group-hover:translate-y-0
            group-hover:opacity-100
          "
        >
          <p
            className="
              mb-3 text-xs uppercase tracking-[0.3em]
              text-[#D7BC8A]
            "
          >
            {item.category}
          </p>

          <h3
            className="
              max-w-[280px]
              font-header text-2xl leading-tight text-white
              md:text-3xl
            "
          >
            {item.alt}
          </h3>
        </div>
      </div>
    </>
  );
}