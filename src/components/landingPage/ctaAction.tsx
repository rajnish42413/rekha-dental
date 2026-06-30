"use client";
import SectionHeader from "../general/sectionHeader";
import GeneralButton from "../general/generalButton";

import {
  CALENDLY_URL_KOTGAON,
  CALENDLY_URL_RAJ_NAGAR,
} from "@/utils/endpoints";
import { useEffect, useRef, useState } from "react";
import CalendlyModal from "../calendly/calendlyModal";

function CtaAction() {

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
    <div>
      <div className="flex-col flex items-center justify-center mb-6 lg:mt-8">
        <SectionHeader
          tag="BEGIN"
          title="Your consultation with us"
          subtitle="A private, unhurried first visit. Comprehensive 3D diagnostics. A treatment plan designed and delivered by one pair of hands."
        />
        <div ref={dropdownRef} className="relative">
          <GeneralButton
            className="flex items-center justify-center"
            onClick={() => setShowCenters((prev) => !prev)}
          >
            Book Appointment
          </GeneralButton>
          {showCenters && (
            <div
              className="absolute  top-14 z-50 w-64 overflow-hidden
      border border-[#D6C7B2] bg-white shadow-xl"
            >
              <button
                  onClick={() => {
                    setCalendlyUrl(CALENDLY_URL_RAJ_NAGAR);
                    setShowCalendly(true);
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
                setCalendlyUrl(CALENDLY_URL_KOTGAON);
                setShowCalendly(true);
                setShowCenters(false);
              }}
                className="w-full px-4 py-3 text-left text-sm
        text-[#1F2A24] hover:bg-[#F5F1EA] cursor-pointer
        transition-colors"
              >
                Kotgaon Center
              </button>
            </div>
          )}
        </div>
      </div>
      <CalendlyModal
        url={calendlyUrl}
        open={showCalendly}
        onClose={() => setShowCalendly(false)}
      />
    </div>
  );
}

export default CtaAction;
