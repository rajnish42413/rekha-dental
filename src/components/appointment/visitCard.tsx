"use client";
import { useState } from "react";
import CalendlyModal from "@/components/calendly/calendlyModal";
import {
  CALENDLY_URL_KOTGAON,
  CALENDLY_URL_RAJ_NAGAR,
} from "@/utils/endpoints";
import { FiCalendar, FiClock, FiMapPin, FiPhone } from "react-icons/fi";
import { MdLocationOn } from "react-icons/md";

export interface Center {
  id: number;
  slug: string;
  city: string;
  name: string;
  image: string;
  description: string;
  address: string;
  timings: string;
  phone: string;
  href:string;
}

interface Props {
  center: Center;
}

export default function VisitCard({ center }: Props) {
  const [showCalendly, setShowCalendly] = useState(false);
  const [calendlyUrl, setCalendlyUrl] = useState("");
  const handleBookAppointment = () => {
    const url =
      center.slug === "raj-nagar"
        ? CALENDLY_URL_RAJ_NAGAR
        : CALENDLY_URL_KOTGAON;

    setCalendlyUrl(url);
    setShowCalendly(true);
  };
  return (
    <aside className="sticky top-24 border border-[#D6D0C6] bg-[#F5F5EC] p-8">
      <div className="flex items-center gap-2 text-yellow text-sm font-extrabold tracking-[3px] uppercase mb-6">
        <MdLocationOn size={16} />
        <span>Visit Centre</span>
      </div>

      <h3 className="font-header text-3xl text-[#1F3D2B] leading-snug">
        {center.name}
      </h3>

      <div className="mt-8 ">
        <div className="flex gap-4 py-5">
          <FiMapPin size={18} className="mt-1 shrink-0 text-[#B89B5E]" />

          <div>
            <p className="uppercase text-sm font-extrabold tracking-[2px] text-yellow mb-2">
              Address
            </p>

            <a href={center.href} target="_blank" className="text-sm leading-7 text-[#3E3E3E]">{center.address}</a>
          </div>
        </div>

        <div className="flex gap-4 py-5">
          <FiClock size={18} className="mt-1 shrink-0 text-[#B89B5E]" />

          <div>
            <p className="uppercase text-sm tracking-[2px] text-yellow font-extrabold mb-2">
              Consultation Hours
            </p>

            <p className="text-sm leading-7 whitespace-pre-line text-[#3E3E3E]">
              {center.timings}
            </p>
          </div>
        </div>

        <div className="flex gap-4 py-5">
          <FiPhone size={18} className="mt-1 shrink-0 text-[#B89B5E]" />
          <div>
            <p className="uppercase text-sm font-extrabold tracking-[2px] text-yellow mb-2">
              Phone
            </p>
            <a
              href={`tel:${center.phone}`}
              className="text-sm font-medium text-[#1F3D2B] hover:text-[#B89B5E] transition"
            >
              {center.phone}
            </a>
          </div>
        </div>
      </div>
      <div className="mt-10 space-y-3">
        <button
          onClick={handleBookAppointment}
          className="flex items-center w-full cursor-pointer active:scale-95 duration-200 justify-center gap-3 bg-[#1F3D2B] text-white py-4 uppercase tracking-[3px] text-xs transition hover:bg-[#183122]"
        >
          <FiCalendar size={18} />
          Book Appointment
        </button>
        <a
          href={`tel:${center.phone}`}
          className="flex items-center active:scale-95 duration-200  justify-center gap-3 border border-[#1F3D2B] text-[#1F3D2B] py-4 uppercase tracking-[3px] text-xs transition hover:bg-[#1F3D2B] hover:text-white"
        >
          <FiPhone size={18} />
          Call Centre
        </a>
      </div>

      <CalendlyModal
        url={calendlyUrl}
        open={showCalendly}
        onClose={() => setShowCalendly(false)}
      />
    </aside>
  );
}
