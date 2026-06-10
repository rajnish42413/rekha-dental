"use client";

import useCalendly from "@/hooks/useCalendly";
import {
  CALENDLY_URL_KOTGAON,
  CALENDLY_URL_RAJ_NAGAR,
  CLOUDINARY_BASE,
} from "@/utils/endpoints";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function HeroBanner() {
  const { openCalendly } = useCalendly();
  const [showCenters, setShowCenters] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowCenters(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <section className="relative w-full h-[70vh] md:h-[85vh] lg:h-[90vh] overflow-hidden">
      <Image
        src={`${CLOUDINARY_BASE}/rekha-dental/banner`}
        alt="Dental Clinic"
        fill
        priority
        sizes="100vw"
        className="object-cover animate-zoomSlow"
      />
      <div className="absolute inset-0 bg-teal-900/60" />
      <div className="absolute inset-0 flex items-center px-6 md:px-40">
        <div className="max-w-2xl text-white">
          <p className="text-xs md:text-sm tracking-[0.2em] text-[#CBA553] font-semibold mb-4">
            ESTABLISHED 2014
          </p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-header font-light leading-tight mb-6">
            A quieter kind of{" "}
            <span className="text-[#c7a15a] font-script text-4xl md:text-6xl lg:text-7xl font-semibold">
              excellence
            </span>{" "}
            in dentistry.
          </h1>
          <p className="text-sm md:text-base lg:flex hidden text-white mb-8">
            Advanced dental care focused on comfort, precision, and creating
            confident, healthy smiles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setShowCenters((prev) => !prev)}
                className="flex h-[50px] w-full sm:w-auto min-w-[220px]
  items-center justify-center bg-[#CBA553]
  px-6 text-sm tracking-wide text-white
  transition-all duration-200
  active:scale-95 cursor-pointer font-semibold"
              >
                BOOK APPOINTMENT
              </button>

              {showCenters && (
                <div
                  className="absolute left-0 top-14 z-50 w-64 overflow-hidden
        border border-[#D6C7B2] bg-white shadow-xl"
                >
                  <button
                    onClick={() => {
                      openCalendly(CALENDLY_URL_RAJ_NAGAR);
                      setShowCenters(false);
                    }}
                    className="w-full border-b border-[#E5DDD0] px-4 py-3
          text-left text-sm text-[#1F2A24]
          hover:bg-[#F5F1EA] transition-colors cursor-pointer"
                  >
                    Raj Nagar Center
                  </button>

                  <button
                    onClick={() => {
                      openCalendly(CALENDLY_URL_KOTGAON);
                      setShowCenters(false);
                    }}
                    className="w-full px-4 py-3 text-left text-sm
          text-[#1F2A24] hover:bg-[#F5F1EA]
          transition-colors cursor-pointer"
                  >
                    Kotgaon Center
                  </button>
                </div>
              )}
            </div>

            <Link
              href="/services"
              className="border text-center px-6 py-3 text-sm tracking-wide
    cursor-pointer transition-all duration-200 active:scale-95 font-semibold"
            >
              EXPLORE TREATMENTS
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
