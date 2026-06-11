import Image from "next/image";
import { academyCourses } from "@/utils/constants";
import SectionHeader from "../general/sectionHeader";
import Link from "next/link";

export default function AcademyCoursesSection() {
  return (
    <section className="bg-[#EAE4DB] py-10 lg:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeader
          tag="ACADEMY COURSES"
          title="Advanced dental programs"
          subtitle="Hands-on learning experiences crafted to help dental professionals refine clinical expertise through immersive training."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 mt-10">
          {academyCourses.map((course, index) => (
            <Link
              key={index}
              href={`/academy/${course.slug}`}
              className="
                bg-[#F5F1EA]
                group
                transform
                transition-all
                duration-700
                ease-[cubic-bezier(0.22,1,0.36,1)]
                hover:-translate-y-2 rounded-lg cursor-pointer
              "
            >
              <div className="relative w-full lg:h-[260px] h-[200px] overflow-hidden rounded-t-lg">
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

              <div className="lg:p-6 p-4">
                <p className="text-xs tracking-[2px] text-[#CBA553] mb-3 font-medium">
                  COURSE {String(index + 1).padStart(2, "0")}
                </p>

                <h3
                  className="
                    font-header
                    text-xl md:text-2xl
                    text-[#2C2C2C]
                    mb-3
                    leading-snug
                  "
                >
                  {course.title}
                </h3>

                <p className="text-sm text-[#6B6B6B] leading-relaxed">
                  {course.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}