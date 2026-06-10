
import { CLOUDINARY_BASE } from "@/utils/endpoints";
import Image from "next/image";
import Link from "next/link";

export default function AcademyBanner() {
  return (
    <section className="my-10">
      <div className="mx-auto w-full ">
        <div className="relative overflow-hidden rounded-[4px]">
          <div className="relative h-[420px] w-full">
            <Image
              src={`${CLOUDINARY_BASE}/rekha-dental/academy`}
              alt="Dental Academy"
              fill
              className="object-cover"
              priority
               sizes="100vw"
            />
            <div
              className="
                absolute inset-0
                bg-[linear-gradient(90deg,rgba(8,34,28,0.92)_0%,rgba(11,53,42,0.72)_45%,rgba(13,57,45,0.58)_100%)]
              "
            />
            <div
              className="
                absolute inset-0 z-10
                flex flex-col justify-center
                px-8 py-10
                md:px-14
                lg:flex-row
                lg:items-center
                lg:justify-between
              "
            >
              <div className="max-w-3xl">
                <p
                  className="
                    mb-5 text-xs font-semibold uppercase
                    tracking-[0.32em] text-[#C9A45B]
                  "
                >
                  The Rekha Academy
                </p>
                <h2
                  className="
                    font-header text-4xl leading-tight text-white
                    md:text-5xl
                    lg:text-6xl
                  "
                >
                  We teach the methods
                  <br />
                  we practice.
                </h2>
                <p
                  className="
                    mt-6 max-w-2xl
                    text-sm lg:leading-8 text-white/75
                    md:text-lg
                  "
                >
                  Continuing-education programs for clinicians who value
                  precision, patient comfort, and modern dental workflows.
                  Hands-on workshops, digital scanning labs, and advanced
                  restorative techniques.
                </p>
              </div>

            
              <div className="mt-10 lg:mt-0">
                <Link
                  href="/academy"
                  className="
                    flex lg:h-14 h-10 items-center justify-center
                    bg-[#C9A45B]
                    lg:px-10 px-6 text-sm font-medium uppercase
                    tracking-[0.24em] text-[#14271F]
                    transition-all duration-300
                    hover:bg-[#D6B36C]
                    active:scale-95
                  "
                >
                  View Program
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 h-[2px] w-full bg-[#C9A45B]/40" />
        </div>
      </div>
    </section>
  );
}