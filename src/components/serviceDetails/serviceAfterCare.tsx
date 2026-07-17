import React from "react";

interface ServiceAftercareProps {
  aftercare: {
    tag: string;
    title: string;
    tips: string[];
  };
}

export const ServiceAftercare: React.FC<ServiceAftercareProps> = ({ aftercare }) => {
  return (
    <section className="py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-sm font-extrabold tracking-[3px] text-yellow uppercase mb-3">
              {aftercare.tag}
            </p>
            <h3 className="text-2xl md:text-3xl font-light text-[#2C2C2C] font-header">
              {aftercare.title}
            </h3>
          </div>
        
        </div>
        <div className="flex flex-wrap gap-4">
          {aftercare.tips.map((tip, idx) => (
            <span 
              key={idx} 
              className="text-sm font-header text-[#2C2C2C] bg-[#F3ECE0] px-5 py-3 rounded-full border border-[#CBA553]/20 shadow-sm"
            >
              {tip}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};