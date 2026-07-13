"use client";

import Link from "next/link";
import { Drawer } from "antd";
import { IoCloseOutline } from "react-icons/io5";
import { extraMobileLinks, menuLinks } from "@/data/navbar";

interface MobileSidebarProps {
  open: boolean;
  onClose: () => void;
  pathname: string;
}

export default function MobileSidebar({
  open,
  onClose,
  pathname,
}: MobileSidebarProps) {
  const isActive = (path: string) => pathname === path;

  const linkClassForMobile = (path: string) =>
    `w-full text-left px-4 py-2 rounded-lg text-sm transition cursor-pointer
     ${
       isActive(path)
         ? "text-brand font-semibold"
         : "text-gray-500 hover:text-brand hover:bg-[rgba(184,107,120,0.08)]"
     }`;

  return (
    <Drawer
      placement="left"
      open={open}
      closable={false}
      onClose={onClose}
      styles={{
        body: {
          backgroundColor: "#FFF9F2",
        },
      }}
      title={
        <div className="flex justify-between items-center">
          <Link href="/" onClick={onClose}>
            <span className="font-header tracking-widest uppercase text-lg text-[#2d2d2d]">
              Rekha Dental Clinic
            </span>
          </Link>

          <div className=" p-1 rounded-lg active:scale-95">
            <IoCloseOutline
              className="cursor-pointer text-xl text-gray-500"
              onClick={onClose}
            />
          </div>
        </div>
      }
    >
      <div className="flex flex-col gap-2 font-medium text-gray-700 h-full relative scrollable-content">
        {menuLinks.map(({ label, href }) => (
          <Link key={href} href={href} onClick={onClose}>
            <span
              className={`${linkClassForMobile(href)} font-header flex items-center gap-2`}
            >
              {label}
            </span>
          </Link>
        ))}
         {extraMobileLinks.map(({ label, href }) => (
        <Link key={href} href={href} onClick={onClose}>
          <span
            className={`${linkClassForMobile(
              href
            )} font-header flex items-center gap-2`}
          >
            {label}
          </span>
        </Link>
      ))}
      </div>
    </Drawer>
  );
}
