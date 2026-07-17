import React from "react";
import SectionHeader from "@/components/general/sectionHeader";

interface TreatmentItem {
  name: string;
  price: string;
}

interface ServicePricingProps {
  treatments?: TreatmentItem[];
}

export const ServicePricing: React.FC<ServicePricingProps> = ({ treatments }) => {
  if (!treatments || treatments.length === 0) return null;

  return (
    <section className="lg:pb-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader tag="PRICING" title="Treatment Pricing" />
        
        <div className="mt-10 overflow-hidden rounded-xl border border-[#D8CFC2] bg-[#F5F1EA] shadow-sm">
          <div className="grid grid-cols-[1fr_auto] bg-brand text-white">
            <div className="px-6 py-4 text-sm tracking-[2px] uppercase font-semibold">Treatment</div>
            <div className="px-6 py-4 text-sm tracking-[2px] uppercase font-semibold text-right">Price</div>
          </div>

          {treatments.map((treatment, index) => (
            <div
              key={index}
              className={`grid grid-cols-[1fr_auto] transition-colors duration-300 hover:bg-[#EFE8DD] ${
                index !== treatments.length - 1 ? "border-b border-[#E2D9CE]" : ""
              }`}
            >
              <div className="px-4 md:px-6 py-5 flex gap-2 md:gap-3">
                <span className="text-[#2C2C2C] text-sm md:text-md font-header">{treatment.name}</span>
              </div>
              <div className="px-6 py-5 font-semibold text-[#0f3d3e] text-right">{treatment.price}</div>
            </div>
          ))}
        </div>

        <p className="mt-4 text-sm text-[#6B6B6B] italic">
          * Prices are indicative and may vary depending on clinical examination and individual treatment requirements.
        </p>
      </div>
    </section>
  );
};