"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { galleryImages } from "@/utils/constants";

interface GalleryImageItem {
  id: number;
  image: string;
  category: string;
  alt: string;
}

export default function GallerySection() {
  const searchParams = useSearchParams();

  const activeTab = searchParams.get("category") || "all";

  const filteredImages: GalleryImageItem[] =
    activeTab === "all"
      ? galleryImages
      : galleryImages.filter(
          (item) => item.category === activeTab
        );

  return (
    <section className=" py-4 lg:py-10 ">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-4 md:hidden">
          {filteredImages.map((item) => (
            <GalleryCard
              key={item.id}
              item={item}
            />
          ))}
        </div>
        <div className="hidden md:flex flex-col gap-5">
          {chunkArray(filteredImages, 3).map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex gap-5"
            >
              {row.map((item) => (
                <div
                  key={item.id}
                  className="
                    group relative overflow-hidden rounded-lg
                    h-[420px]
                    flex-1
                    cursor-pointer
                    transition-all duration-700
                    ease-[cubic-bezier(0.22,1,0.36,1)]
                    hover:flex-[1.8]
                  "
                >
                  <GalleryImage item={item} />
                </div>
              ))}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

interface GalleryCardProps {
  item: GalleryImageItem;
}

function GalleryCard({
  item,
}: GalleryCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg h-[240px] cursor-pointer">
      <GalleryImage item={item} />
    </div>
  );
}

interface GalleryImageProps {
  item: GalleryImageItem;
}

function GalleryImage({
  item,
}: GalleryImageProps) {
  return (
    <>
      <Image
        src={item.image}
        alt={item.alt}
        fill
        sizes="(max-width: 768px) 50vw, 33vw"
        className="
          object-cover
          pointer-events-none
          transition-transform duration-700
          group-hover:scale-[1.03]
        "
      />
      <div
        className="
          absolute inset-0 rounded-lg
          pointer-events-none
          bg-black/15
          group-hover:bg-black/30
          transition-all duration-500
        "
      />
      <div
        className="
          absolute bottom-0 left-0 w-full
          p-4 md:p-8
          pointer-events-none
        "
      >
        <div
          className="
            translate-y-4 opacity-0
            group-hover:translate-y-0
            group-hover:opacity-100
            transition-all duration-500
          "
        >
          <p className="text-white/70 text-[10px] md:text-xs tracking-[3px] uppercase mb-2 md:mb-3">
            {item.category}
          </p>

          <h3 className="text-white text-lg md:text-2xl font-header leading-snug max-w-[260px]">
            {item.alt}
          </h3>
        </div>
      </div>
      <div
        className="
          absolute inset-0 rounded-lg
          pointer-events-none
          border border-white/10
          group-hover:border-[#CBA553]/50
          transition-all duration-500
        "
      />
    </>
  );
}

function chunkArray<T>(
  array: T[],
  size: number
): T[][] {
  const result: T[][] = [];

  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }

  return result;
}