import React from "react";

interface ServiceBenefitsProps {
  benefits: {
    tag: string;
    title: string;
    items: string[];
  };
}

export const ServiceBenefits: React.FC<ServiceBenefitsProps> = ({ benefits }) => {
  return (
    <section className="py-12 lg:py-16 ">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10 text-center md:text-left">
          <p className="text-sm font-extrabold tracking-[3px] text-[#CBA553] uppercase mb-3">
            {benefits?.tag}
          </p>
          <h3 className="text-2xl md:text-3xl font-light text-[#2C2C2C] font-header">
            {benefits?.title}
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {benefits?.items.map((item, idx) => (
            <div key={idx} >
              
              <div
                 
                  className="border border-[#DCD5C9] px-4 py-3 text-sm font-medium text-[#11261B] bg-[#EBE4D7]"
                >
                  {item}
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};