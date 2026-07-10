import Link from "next/link";
import SectionHeader from "../general/sectionHeader";
import { dentalPlanHighlights } from "@/utils/constants";
import { FiPercent, FiUsers } from "react-icons/fi";
import { HiOutlineBadgeCheck } from "react-icons/hi";

const iconMap: Record<number, React.ReactNode> = {
  1: <FiPercent className="w-5 h-5 text-[#2C2A27]" />,
  2: <HiOutlineBadgeCheck className="w-6 h-6 text-[#2C2A27]" />,
  3: <FiUsers className="w-5 h-5 text-[#2C2A27]" />,
};
function DentalPlanHighlights() {
  return (
    <section className=" py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeader
          tag="DENTAL HEALTH PLANS"
          title="Care more. Spend less."
          subtitle="Unlock preventive care, exclusive savings, and priority dental benefits with our membership plans."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10">
          {dentalPlanHighlights.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl border border-[#E8DED0] bg-[#FCFAF6] p-8 
                     transition-all duration-300 ease-out 
                     hover:-translate-y-1 hover:border-[#DCD0C0] hover:shadow-[0_12px_24px_rgba(44,42,39,0.04)]"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#F4EFE6] mb-6 transition-colors duration-300 group-hover:bg-[#EAE2D5]">
                {iconMap[item.id]}
              </div>
              <h3
                className="font-header text-xl lg:text-2xl font-semibold leading-tight
          text-[#2C2A27]"
              >
                {item.title}
              </h3>

              <p
                className="mt-5 text-sm md:text-base lg:leading-7 leading-6 text-[#66625C]
          text-md"
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center items-center">
          <Link
            href="/dental-plans"
            className="
           bg-brand
        cursor-pointer 
        text-white duration-200
        text-sm
        px-6 
   py-2.5
        transition 
        active:scale-95
          "
          >
            Explore Plans
          </Link>
        </div>
      </div>
    </section>
  );
}

export default DentalPlanHighlights;
