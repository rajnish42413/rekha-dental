"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  // FaLinkedinIn,
  FaYoutube,
  FaBriefcaseMedical,
} from "react-icons/fa6";
import { SiMagic } from "react-icons/si";

import { WHATSAPP_NUMBER } from "@/utils/endpoints";
import { RxCross2 } from "react-icons/rx";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";

const message = encodeURIComponent("Hi, I'm interested in your treatments.");

const socials = [
  {
    icon: FaFacebookF,
    href: "https://www.facebook.com/share/1EGPBCvWCz/",
    color: "#CBA553",
    label: "Facebook",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/rekhadentalgzb?igsh=eWJndjRibDl1bXcx",
    color: "#CBA553",
    label: "Instagram",
  },
  // {
  //   icon: FaLinkedinIn,
  //   href: "https://linkedin.com/company/yourpage",
  //   color: "#CBA553",
  //   label: "LinkedIn",
  // },
  {
    icon: SiMagic,
    href: "https://magicpin.in/Ghaziabad/Daulatpura/Healthcare/Rekha-Dental-Clinic-Ghaziabad/store/181b6a9?srsltid=AfmBOoph3cCOGhMp4yg6Sn_eXbB88HJieMezG67cKOXbWA7_8oefqX6U",
    color: "#CBA553",
    label: "Magicpin",
  },
  {
    icon: FaYoutube,
    href: "https://youtube.com/@drgauravsaxena84?si=OFTPftaGOJNF22Qs",
    color: "#CBA553",
    label: "YouTube",
  },
  {
    icon: FaBriefcaseMedical,
    href: "https://www.practo.com/ghaziabad/clinic/rekha-dental-clinic-and-implant-center-nehru-nagar/doctors",
    color: "#CBA553",
    label: "Practo",
  },
];

export default function FloatingSocials() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <div
        className={`flex flex-col items-end gap-3 transition-all duration-300 ${
          open
            ? "opacity-100 translate-y-0"
            : "pointer-events-none opacity-0 translate-y-4"
        }`}
      >
        {socials.map(({ icon: Icon, href, label }) => (
          <Link
            key={label}
            href={href}
            target="_blank"
            className="group flex items-center gap-3"
          >
            <span className="rounded-lg bg-white px-3 py-1 text-sm font-medium shadow-lg opacity-0 transition-all duration-200 group-hover:opacity-100">
              {label}
            </span>

            <div className="flex h-12 w-12 items-center bg-yellow justify-center rounded-full shadow-lg transition-transform hover:scale-110">
              <Icon className="text-white" size={22} />
            </div>
          </Link>
        ))}
      </div>
      <div className="flex flex-col items-center gap-3">
        <button
          onClick={() => setOpen(!open)} aria-label="More Buttons"
          className="flex  items-center text-lg justify-center  p-1 cursor-pointer text-yellow transition hover:scale-105 active:scale-95"
        >
          {open ? <RxCross2 /> : <MdOutlineKeyboardDoubleArrowUp size={22} />}
        </button>

        <Link
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`}
          target="_blank"
          aria-label="Chat on WhatsApp"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow shadow-xl transition hover:scale-105 active:scale-95"
        >
          <FaWhatsapp size={26} className="text-white" />
        </Link>
      </div>
    </div>
  );
}
