"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRightOutlined } from "@ant-design/icons";
import { CLOUDINARY_BASE } from "@/utils/endpoints";

export default function ErrorPage() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#F7F3EC]">
      <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#E8DED2] opacity-50 blur-3xl" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-16 lg:px-10">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="max-w-xl">
            <p
              className="
                mb-5
                text-sm
                font-semibold
                uppercase
                tracking-[0.35em]
                text-[#B08A52]
              "
            >
              Server Error
            </p>

            <h1
              className="
                font-header
                text-5xl
                leading-[1.05]
                text-[#1F1D1A]
                md:text-7xl
              "
            >
              Something interrupted the experience.
            </h1>

            <p
              className="
                mt-8
                max-w-lg
                text-lg
                leading-9
                text-[#6F6A63]
              "
            >
              We’re experiencing a temporary issue while loading this
              page. Our team is already working behind the scenes to
              restore everything smoothly.
            </p>

            <div className="mt-12 flex flex-wrap items-center gap-5">
            <Link
                href="/"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  bg-brand
                  px-8
                  py-4
                  text-sm
                  font-medium
                  uppercase
                  tracking-[0.2em]
                  text-white
                  transition-all
                  duration-200
                 cursor-pointer active:scale-95
                "
              >
                 Home
                <ArrowRightOutlined className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
          <div className="relative">
            <div
              className="
                absolute
                inset-0
                scale-95
                rounded-[40px]
                bg-[#E9DFD2]
                blur-2xl
                opacity-70
              "
            />

            <div
              className="
                relative
                overflow-hidden
                rounded-[40px]
                border
                border-[#E7DED1]
                bg-white
                p-4
                shadow-[0_25px_80px_rgba(0,0,0,0.08)]
              "
            >
              <Image
                src={`${CLOUDINARY_BASE}/rekha-dental/error`}
                alt="Server Error"
                width={1200}
                height={1200}
                className="
                  h-auto
                  w-full
                  rounded-[28px]
                  object-cover
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}