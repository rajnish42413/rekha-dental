import Link from "next/link";
import SectionHeader from "../general/sectionHeader";
import { dentalPlanHighlights } from "@/utils/constants";


function DentalPlanHighlights() {
  return (
    <section className=" py-12 lg:py-16">
    <div className="max-w-7xl mx-auto px-6 lg:px-10">
      <SectionHeader
        tag="DENTAL HEALTH PLANS"
        title="Care more. Spend less."
        subtitle="Unlock preventive care, exclusive savings, and priority dental benefits with our membership plans."
      />
  
      <div className="grid md:grid-cols-3 gap-6 mt-10">
        {dentalPlanHighlights.map((item) => (
          <div
            key={item.id}
            className=" rounded-2xl    border border-[#E8DED0] bg-[#FCFAF6] p-6"
          >
            <h3 className="font-header text-xl text-[#2C2A27]">
              {item.title}
            </h3>
  
            <p className="mt-3 text-[#66625C] text-sm leading-relaxed">
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
  )
}

export default DentalPlanHighlights