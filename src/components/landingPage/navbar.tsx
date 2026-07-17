"use client";

import { useEffect, useRef, useState } from "react";
import { FaBars } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMail,  FiPhone } from "react-icons/fi";
import GeneralButton from "../general/generalButton";
import MobileSidebar from "./mobileSidebar";
import {
  CALENDLY_URL_KOTGAON,
  CALENDLY_URL_RAJ_NAGAR,
} from "@/utils/endpoints";
import Image from "next/image";
import BookAppointmentButton from "../general/bookAppointmentButton";
import CalendlyModal from "../calendly/calendlyModal";
import { menuLinks } from "@/data/navbar";
import EnquiryModal from "../enquiry/enquiryModal";
import { BiSolidMessageAltCheck } from "react-icons/bi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;
  const linkClass = (path: string) =>
    `relative cursor-pointer transition-colors duration-200
    ${
      isActive(path)
        ? "text-brand font-semibold"
        : "text-gray-500 hover:text-brand"
    }
    `;
  const [showCenters, setShowCenters] = useState(false);
  const [calendlyUrl, setCalendlyUrl] = useState("");
  const [showCalendly, setShowCalendly] = useState(false);
  const [showEnquiry, setShowEnquiry] = useState(false);

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
    <nav className="sticky w-full max-w-8xl mx-auto top-0 z-50 flex flex-col shadow-sm border-b border-[#FFF9F2]">
      <div className="bg-brand flex justify-between items-center px-3 lg:px-2 py-3 text-white tracking-[0.2em]">
        <a
          href="mailto:support@rekhadental.com"
          className="cursor-pointer flex items-center"
        >
          <FiMail className="block lg:hidden text-lg" />
          <span className="block lg:hidden text-xs ml-2 font-medium">
            Rekha Dental
          </span>
          <span className="hidden lg:block text-[15px] font-medium tracking-[0.2em]">
            support@rekhadental.com
          </span>
        </a>
        <a
          href="tel:+918130406405"
          className="flex items-center gap-1 text-xs lg:text-[15px] font-medium lg:tracking-[0.2em] hover:text-primary transition-colors"
        >
          <FiPhone />
          +91-8130-406-405
        </a>
      </div>
      <div className="w-full mx-auto px-4 lg:px-10 xl:px-10 bg-[#FFFFFE] flex items-center justify-between h-14 lg:h-18 ">
        <div className="flex items-center gap-6">
          <Link href="/">
            <Image
              src="/assets/logoChanged1.png"
              alt="Rekha Dental"
              width={180}
              height={70}
              priority
              className="lg:h-12 lg:w-36 h-10 w-32"
            />
          </Link>
        </div>
        <div className="hidden 2xl:flex items-center gap-6 2xl:gap-10 text-md font-medium ">
          {menuLinks.map(({ label, href }) => (
            <Link key={href} href={href} className={linkClass(href)}>
              {label}
            </Link>
          ))}
        </div>
        <div className="hidden 2xl:flex items-center gap-3">
          <button
            onClick={() => setShowEnquiry(true)}
            className=" border-2 border-brand px-5 active:scale-95 h-10 lg:h-10 text-sm font-semibold text-brand transition-all duration-300 hover:bg-brand hover:text-white cursor-pointer"
          >
            Enquiry
          </button>
          <div ref={dropdownRef} className="relative">
            <GeneralButton
              className="flex items-center justify-center"
              onClick={() => setShowCenters((prev) => !prev)}
            >
              Book Appointment
            </GeneralButton>
            {showCenters && (
              <div className="absolute right-0 top-14 z-50 w-64 overflow-hidden border border-[#D6C7B2] bg-white shadow-xl">
                <button
                  onClick={() => {
                    setCalendlyUrl(CALENDLY_URL_RAJ_NAGAR);
                    setShowCalendly(true);
                    setShowCenters(false);
                  }}
                  className="w-full border-b border-[#E5DDD0] px-4 py-3 text-left text-sm text-[#1F2A24] hover:bg-[#F5F1EA] transition-colors cursor-pointer"
                >
                  Raj Nagar Center
                </button>

                <button
                  onClick={() => {
                    setCalendlyUrl(CALENDLY_URL_KOTGAON);
                    setShowCalendly(true);
                    setShowCenters(false);
                  }}
                  className="w-full px-4 py-3 text-left text-sm text-[#1F2A24] hover:bg-[#F5F1EA] transition-colors cursor-pointer"
                >
                  Kotgaon Center
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2 2xl:hidden">
          <button
            onClick={() => setShowEnquiry(true)}
            className="flex h-10 w-10 items-center justify-center rounded-full cursor-pointer active:scale-95  transition-all duration-300 bg-brand text-white"
            aria-label="Enquiry"
          >
            <BiSolidMessageAltCheck size={22} />
          </button>
          <div className="py-4">
            <BookAppointmentButton />
          </div>
          <button
            className="text-xl cursor-pointer"
            onClick={() => setMenuOpen(true)}
            aria-label="Open Menu"
          >
            <FaBars className="text-brand" />
          </button>
        </div>
      </div>
      <MobileSidebar
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        pathname={pathname}
      />
      <CalendlyModal
        url={calendlyUrl}
        open={showCalendly}
        onClose={() => setShowCalendly(false)}
      />
      <EnquiryModal
        isOpen={showEnquiry}
        onClose={() => setShowEnquiry(false)}
      />
    </nav>
  );
}
