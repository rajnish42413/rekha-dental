
import { academyCourses } from "@/data/academy";
import SectionHeader from "../general/sectionHeader";

import CourseCard from "./courseCard";

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
        {academyCourses.map((course, index) => (
            <CourseCard
              key={course.slug}
              course={course}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
