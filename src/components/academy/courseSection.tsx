import Image from "next/image";
import { academyCourses } from "@/utils/constants";
import SectionHeader from "../general/sectionHeader";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";
import { WHATSAPP_NUMBER } from "@/utils/endpoints";
import { FiCalendar } from "react-icons/fi";
import { MdOutlineSchool } from "react-icons/md";
import { PiCertificate } from "react-icons/pi";

export default function AcademyCoursesSection() {
  return (
    <section className="bg-[#EAE4DB] py-10 lg:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeader
          tag="ACADEMY COURSES"
          title="Advanced dental programs"
          subtitle="Hands-on learning experiences crafted to help dental professionals refine clinical expertise through immersive training."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 mt-10">
          {academyCourses.map((course, index) => {
            const message = encodeURIComponent(
              `Hi, I am interested in the "${course.title}" course. Please share the fee structure, duration, upcoming batches, and enrollment process.`
            );
            const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
            return (
              <div
                key={index}
                className="
                  bg-[#F5F1EA]
                  group
                  transform
                  transition-all
                  duration-700
                  ease-[cubic-bezier(0.22,1,0.36,1)]
                  hover:-translate-y-2
                  rounded-lg
                "
              >
                <Link href={`/academy/${course.slug}`}>
                  <div className="relative w-full lg:h-[260px] h-[200px] overflow-hidden rounded-t-lg cursor-pointer">
                    {course.discount && (
                      <div className="absolute top-0 left-4 z-10 bg-brand text-white px-3 pb-3 pt-4 font-bold text-center text-sm tracking-wider rounded-b-sm shadow-md flex flex-col items-center">
                        <span className="leading-tight">
                          {course.discount}%
                        </span>
                        <span className="text-[10px] font-normal tracking-widest block mt-0.5">
                          OFF
                        </span>
                        <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#0F4C3A] clip-path-ribbon"></div>
                      </div>
                    )}

                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw,
                      (max-width: 1024px) 50vw,
                      33vw"
                      className="
                        object-cover
                        transition-transform
                        duration-700
                        ease-out
                        group-hover:scale-105
                      "
                    />
                  </div>
                </Link>
                <div className="lg:p-6 p-4">
                  <p className="text-xs tracking-[2px] text-[#CBA553] mb-3 font-medium">
                    COURSE {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="font-header text-xl md:text-2xl text-[#2C2C2C] mb-3 leading-snug">
                    {course.title}
                  </h3>
                  <p className="text-sm text-[#6B6B6B] leading-relaxed line-clamp-2">
                    {course.description}
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-3 mb-4 mx-4">
                  <div className="border border-[#DCCEB9]  rounded-xl p-2 flex flex-col sm:flex-row items-center justify-center  gap-2 text-center sm:text-left transition-all hover:shadow-sm">
                    <FiCalendar className="text-brand shrink-0" size={18} />
                    <span className="text-xs lg:text-sm text-[#2C2C2C] font-semibold tracking-tight">
                      {course.duration}
                    </span>
                  </div>
                  <div className="border border-[#DCCEB9]  rounded-xl p-2 flex flex-col sm:flex-row items-center justify-center gap-2 text-center sm:text-left transition-all hover:shadow-sm">
                    <MdOutlineSchool
                      className="text-brand shrink-0"
                      size={18}
                    />
                    <span className="text-xs lg:text-sm text-[#2C2C2C] font-semibold tracking-tight">
                      Hands-on
                    </span>
                  </div>
                  <div className="border border-[#DCCEB9]  rounded-xl p-2 flex flex-col sm:flex-row items-center justify-center  gap-2 text-center sm:text-left transition-all hover:shadow-sm">
                    <PiCertificate className="text-brand shrink-0" size={18} />
                    <span className="text-xs lg:text-sm text-[#2C2C2C] font-semibold tracking-tight">
                      Certified
                    </span>
                  </div>
                </div>
                <div className="px-6 pb-6">
                  <div className="grid grid-cols-12 gap-4 items-center">
                    <div className="col-span-5 flex items-center gap-3 pr-2">
                      <div>
                        <p className="text-[11px] uppercase tracking-wide text-[#CBA553] font-medium">
                          Starting at
                        </p>

                        <div className="flex items-center gap-2">
                          <p className="text-2xl font-bold text-brand">
                            ₹{course.startingPrice}
                          </p>

                          <p className="text-sm text-gray-400 line-through">
                            ₹{course.price}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-span-7">
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-brand hover:bg-[#093528] cursor-pointer active:scale-95 duration-200 transition-all text-white py-2.5 px-3 rounded-lg font-medium text-sm flex items-center justify-center gap-2 shadow-sm relative z-30"
                      >
                        <FaWhatsapp size={20} />
                        <div>
                          <span className="hidden sm:inline">Enquire Now</span>
                          <span className="sm:hidden">Enquire</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
