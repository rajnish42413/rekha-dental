"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaStar, FaMapMarkerAlt, FaAward, FaCalendarAlt } from "react-icons/fa";
import {
  CALENDLY_URL_KOTGAON,
  CALENDLY_URL_RAJ_NAGAR,
} from "@/utils/endpoints";
import CalendlyModal from "../calendly/calendlyModal";

interface DoctorHeroProps {
  name: string;
  role: string;
  specialization: string;
  experience: string;
  clinic: string;
  location: string;
  rating: number;
  reviews: number;
  description: string;
  image: string;
}

export default function DoctorHero({
  name,
  role,
  specialization,
  experience,
  clinic,
  location,
  rating,
  reviews,
  description,
  image,
}: DoctorHeroProps) {

  const [showCenters, setShowCenters] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [calendlyUrl, setCalendlyUrl] = useState("");
  const [showCalendly, setShowCalendly] = useState(false);
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
    <section className="w-full bg-[#EAE4DB] py-8 lg:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
        <div className="relative w-full h-[400px] lg:h-[600px] rounded-xl overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover animate-zoomSlow"
          />
        </div>
        <div className="flex flex-col lg:gap-5 gap-3">
          <p className="text-xs tracking-[3px] text-[#B89B5E] uppercase font-medium">
            {role}
          </p>
          <h1 className="text-3xl lg:text-5xl font-header text-[#1F2A24] leading-tight">
            {name}
          </h1>
          <p className="text-sm tracking-[2px] text-[#B89B5E] uppercase font-medium">
            {specialization}
          </p>
          <div className="flex flex-wrap gap-6 text-sm text-[#5C5C5C] mt-2">
            <div className="flex items-center gap-2">
              <FaAward className="text-[#B89B5E]" size={14} />
              <span>{experience}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCalendarAlt className="text-[#B89B5E]" size={14} />
              <span>{clinic}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-[#B89B5E]" size={14} />
              <span>{location}</span>
            </div>
          </div>
          <div className="flex items-center gap-3 mt-2">
            <div className="flex gap-1 text-[#D4AF37]">
              {Array.from({ length: 5 }).map((_, i) => (
                <FaStar key={i} size={16} />
              ))}
            </div>
            <span className="text-sm text-[#5C5C5C]">
              {rating.toFixed(1)} · {reviews.toLocaleString()}+ patient reviews
            </span>
          </div>
          <p className="text-[#4A4A4A] leading-relaxed mt-3">{description}</p>
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 relative">
  <div className="relative " ref={dropdownRef} >
    <button
      onClick={() => setShowCenters((prev) => !prev)}
      className="flex h-12 w-full items-center justify-center bg-[#1F3D2B]
      px-6 text-center text-sm uppercase tracking-wide text-white
      transition-all duration-200 hover:bg-[#173021]
      active:scale-[0.98] cursor-pointer"
    >
      Book Appointment
    </button>

    {showCenters && (
      <div className="absolute left-0 top-14 z-20 w-full overflow-hidden border border-[#D6C7B2] bg-white shadow-xl">
        <button
          onClick={() => {
            setCalendlyUrl(CALENDLY_URL_RAJ_NAGAR);
            setShowCalendly(true);
            setShowCenters(false);
          }}
          className="w-full border-b border-[#E5DDD0] px-4 cursor-pointer py-3 text-left text-sm text-[#1F2A24]
          hover:bg-[#F5F1EA] transition-colors"
        >
          Raj Nagar Center
        </button>

        <button
          onClick={() => {
            setCalendlyUrl(CALENDLY_URL_KOTGAON);
            setShowCalendly(true);
            setShowCenters(false);
          }}
          className="w-full px-4 py-3 text-left text-sm cursor-pointer text-[#1F2A24]
          hover:bg-[#F5F1EA] transition-colors"
        >
          Kotgaon Center
        </button>
      </div>
    )}
  </div>

  <a
    href="tel:+918130406405"
    className="flex h-12 w-full items-center justify-center border
    border-[#1F3D2B] text-center text-sm uppercase tracking-wide
    text-[#1F3D2B] transition-all duration-200 hover:bg-[#1F3D2B]
    hover:text-white active:scale-[0.98] cursor-pointer"
  >
    Call Now
  </a>
</div>
        </div>
      </div>

      <CalendlyModal
        url={calendlyUrl}
        open={showCalendly}
        onClose={() => setShowCalendly(false)}
      />
    </section>
  );
}
