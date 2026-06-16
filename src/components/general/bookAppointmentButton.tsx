"use client";

import { useEffect, useRef, useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import useCalendly from "@/hooks/useCalendly";
import { CALENDLY_URL_KOTGAON, CALENDLY_URL_RAJ_NAGAR } from "@/utils/endpoints";

interface BookAppointmentButtonProps {
  className?: string;
}

export default function BookAppointmentButton({
  className = "",
}: BookAppointmentButtonProps) {
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
    <div ref={dropdownRef} className="relative w-full">
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setShowCenters((prev) => !prev);
        }}
        className={`w-full bg-brand hover:bg-[#093528] cursor-pointer active:scale-95 duration-200 transition-all text-white py-3 px-4 rounded-lg font-medium text-sm flex items-center justify-center gap-2 shadow-sm relative z-30 ${className}`}
      >
        <FaCalendarAlt className="w-3.5 h-3.5" />
        Book Appointment
      </button>
      {showCenters && (
        <div
          className="absolute top-full mt-2 z-50 w-64 overflow-hidden  border border-[#D6C7B2] bg-white shadow-xl left-1/2 -translate-x-1/2 md:left-auto md:right-0 md:translate-x-0"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          <button
            type="button"
            onClick={() => {
              openCalendly(CALENDLY_URL_RAJ_NAGAR);
              setShowCenters(false);
            }}
            className="w-full border-b border-[#E5DDD0] px-4 py-3 text-left text-sm text-[#1F2A24] hover:bg-[#F5F1EA] transition-colors cursor-pointer block"
          >
            Raj Nagar Center
          </button>

          <button
            type="button"
            onClick={() => {
              openCalendly(CALENDLY_URL_KOTGAON);
              setShowCenters(false);
            }}
            className="w-full px-4 py-3 text-left text-sm text-[#1F2A24] hover:bg-[#F5F1EA] cursor-pointer transition-colors block"
          >
            Kotgaon Center
          </button>
        </div>
      )}
    </div>
  );
}