import Link from "next/link";
import SectionHeader from "../general/sectionHeader";
import { exploreDentalServices } from "@/utils/constants";

export default function ExploreDentalServices() {
  return (
    <section className=" py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeader
          tag="OUR SERVICES"
          title="How can we help you today?"
          subtitle="Explore personalized dental treatments designed to restore comfort, improve oral health, and enhance your smile."
        />
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-7 mt-10">
          {exploreDentalServices.map((service) => (
            <Link
              key={service.id}
              href={`/services/${service.slug}`}
              className="
                group
                bg-[#FCFAF6]
                border
                border-[#E8DED0]
                rounded-2xl
                p-6
                flex
                flex-col
                items-center
                justify-center
                text-center
                min-h-[180px]
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-[#D9C5A1]
                hover:shadow-[0_20px_50px_rgba(31,29,24,0.08)]
              "
            >
              <div
                className="
                  h-16
                  w-16
                  rounded-2xl
                  bg-[#F3ECE1]
                  border
                  border-[#E7DDD0]
                  flex
                  items-center
                  justify-center
                  text-3xl
                  text-brand
                  transition-all
                  duration-500
                  group-hover:scale-110
                "
              >
                {service.icon}
              </div>

              <h3
                className="
                  mt-5
                  text-[#2C2A27]
                  font-medium
                  text-base
                  lg:text-lg
                  leading-snug
                "
              >
                {service.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
