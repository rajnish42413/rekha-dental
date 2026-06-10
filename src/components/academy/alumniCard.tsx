

import Image from "next/image";
import { FaCalendarAlt } from "react-icons/fa";

interface AlumniCardProps {
  image: string;
  title: string;
  description: string;
  type?: "alumni" | "current";
}

export default function AlumniCard({
  image,
  title,
  description,
  type = "alumni",
}: AlumniCardProps) {
  const isAlumni = type === "alumni";

  return (
    <div
      className={`
        group overflow-hidden
        transition-all duration-500 hover:-translate-y-2 rounded-xl
        ${isAlumni ? "bg-[#184D36]" : "bg-white"}
      `}
    >
      <div className="relative lg:h-[260px] h-[200px] w-full  rounded-t-xl">
        <Image
          src={image}
          alt={title}
          fill
          priority
          sizes="(max-width: 768px) 100vw,
          (max-width: 1024px) 50vw,
          33vw"
          className="object-cover aspect-video transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>

      <div className="p-6 md:p-7">
        <div className="lg:mb-5 mb-3 flex items-center gap-2">
          <FaCalendarAlt className="text-sm text-[#CBA553]" />

          <p className="text-xs font-medium uppercase tracking-[3px] text-[#CBA553]">
            {isAlumni ? "Alumni Event" : "Current Batch"}
          </p>
        </div>

        <h3
          className={`
            lg:mb-4 mb-2 font-header text-xl lg:text-3xl leading-snug line-clamp-1
            ${isAlumni ? "text-[#F8F5EF]" : "text-[#184D36]"}
          `}
        >
          {title}
        </h3>

        <p
          className={`
            text-sm leading-relaxed line-clamp-2
            ${isAlumni ? "text-[#D6D0C4]" : "text-gray-600"}
          `}
        >
          {description}
        </p>
      </div>
    </div>
  );
}