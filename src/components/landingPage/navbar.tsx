"use client";

import { useEffect, useRef, useState } from "react";
import { FaBars } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { menuLinks } from "@/utils/constants";
import { FiPhone } from "react-icons/fi";
import GeneralButton from "../general/generalButton";
import useCalendly from "@/hooks/useCalendly";
import MobileSidebar from "./mobileSidebar";
import {
  CALENDLY_URL_KOTGAON,
  CALENDLY_URL_RAJ_NAGAR,
} from "@/utils/endpoints";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;
  const { openCalendly } = useCalendly();

  const linkClass = (path: string) =>
    `relative cursor-pointer transition-colors duration-200
    ${
      isActive(path)
        ? "text-brand font-semibold"
        : "text-gray-500 hover:text-brand"
    }
    `;
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
    <nav className="sticky w-full max-w-8xl mx-auto top-0 z-50 flex flex-col shadow-sm border-b border-[#FFF9F2]">
      <div className=" bg-brand flex justify-between text-center items-center text-sm px-2 py-3  font-medium tracking-[0.2em] text-white ">
        <div className="text-white text-xs">Rekha Dental Clinic, Ghaziabad</div>
        <div className="text-white text-xs flex gap-1 items-center">
          <FiPhone />
          +918130406405
        </div>
      </div>
      <div className="w-full mx-auto px-4 lg:px-10 xl:px-10 bg-[#FFFFFE] flex items-center justify-between h-14 lg:h-18 ">
        <div className="flex items-center gap-6">
          <Link href="/">
            <Image
              src="/assets/logoChanged1.png"
              alt="Rekha Dental Clinic"
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

        <div ref={dropdownRef} className="relative hidden 2xl:block">
          <GeneralButton
            className="flex items-center justify-center"
            onClick={() => setShowCenters((prev) => !prev)}
          >
            Book Appointment
          </GeneralButton>

          {showCenters && (
            <div
              className="absolute right-0 top-14 z-50 w-64 overflow-hidden
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
        text-[#1F2A24] hover:bg-[#F5F1EA] cursor-pointer
        transition-colors"
              >
                Kotgaon Center
              </button>
            </div>
          )}
        </div>

        <div className="flex gap-4 items-center 2xl:hidden">
          <button
            className="2xl:hidden text-xl cursor-pointer"
            onClick={() => setMenuOpen(true)}
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
    </nav>
  );
}
