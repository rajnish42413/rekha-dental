import { academyActivities } from "@/utils/constants";
import Image from "next/image";
import SectionHeader from "../general/sectionHeader";

function ExtraImageSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Clinical Excellence Through Hands-On Learning"
          tag="Training programs designed to
            help dental professionals"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {academyActivities.map((item, index) => (
            <div
              key={item.id}
              className="bg-[#F5F1EA] group rounded-xl overflow-hidden mx-5 md:mx-0"
            >
              <div className="relative w-full h-[360px] lg:h-[460px] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-800 ease-out group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="text-xs tracking-[2px] text-[#CBA553] mb-3 font-medium">
                  {(index + 1).toString().padStart(2, "0")}
                </p>

                <h3 className="font-header text-xl md:text-2xl text-[#2C2C2C] mb-3 leading-snug">
                  {item.title}
                </h3>

                <p className="text-sm text-[#6B6B6B] leading-relaxed">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExtraImageSection;
